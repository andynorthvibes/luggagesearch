"""Generate true-scale airline gate-sizer models (GLB, metres, Y-up) from the site's airline data.

Each sizer is an open cage whose INSIDE equals the airline's max cabin bag size
(height = Y, width = X, depth = Z), standing on a thin base plate, with a yellow
sign on the back showing the airline name and limit. Pure numpy/struct, no deps.
"""
import json, struct, io, re, sys, pathlib
import numpy as np
from PIL import Image, ImageDraw, ImageFont

TUBE = 0.018        # 18 mm square tube
BASE_T = 0.008      # base plate thickness
FONT_B = '/usr/share/fonts/truetype/google-fonts/Poppins-Bold.ttf'
FONT_M = '/usr/share/fonts/truetype/google-fonts/Poppins-Medium.ttf'

def box(cx, cy, cz, sx, sy, sz):
    """24 verts (flat normals), 36 indices for an axis-aligned box centred at c with size s."""
    hx, hy, hz = sx/2, sy/2, sz/2
    faces = [((1,0,0),[(hx,-hy,-hz),(hx,hy,-hz),(hx,hy,hz),(hx,-hy,hz)]),
             ((-1,0,0),[(-hx,-hy,hz),(-hx,hy,hz),(-hx,hy,-hz),(-hx,-hy,-hz)]),
             ((0,1,0),[(-hx,hy,-hz),(-hx,hy,hz),(hx,hy,hz),(hx,hy,-hz)]),
             ((0,-1,0),[(-hx,-hy,hz),(-hx,-hy,-hz),(hx,-hy,-hz),(hx,-hy,hz)]),
             ((0,0,1),[(-hx,-hy,hz),(hx,-hy,hz),(hx,hy,hz),(-hx,hy,hz)]),
             ((0,0,-1),[(hx,-hy,-hz),(-hx,-hy,-hz),(-hx,hy,-hz),(hx,hy,-hz)])]
    pos, nor, idx = [], [], []
    for n, quad in faces:
        b = len(pos)
        for p in quad: pos.append((p[0]+cx, p[1]+cy, p[2]+cz)); nor.append(n)
        idx += [b, b+1, b+2, b, b+2, b+3]
    return pos, nor, idx

def merge(parts):
    P, N, I = [], [], []
    for p, n, i in parts:
        b = len(P); P += p; N += n; I += [x+b for x in i]
    return np.array(P, np.float32), np.array(N, np.float32), np.array(I, np.uint16)

def sign_texture(name, dims_txt, kg_txt):
    W, H = 1024, 512
    im = Image.new('RGB', (W, H), (246, 201, 69)); d = ImageDraw.Draw(im)
    d.rectangle([0, 0, W-1, H-1], outline=(21, 22, 26), width=18)
    def fit(txt, path, size, maxw):
        while size > 20:
            f = ImageFont.truetype(path, size)
            if d.textlength(txt, font=f) <= maxw: return f
            size -= 4
        return ImageFont.truetype(path, size)
    f1 = fit(name.upper(), FONT_B, 92, W-90)
    d.text((W/2, 120), name.upper(), font=f1, fill=(21, 22, 26), anchor='mm')
    d.text((W/2, 215), 'MAX CABIN BAG', font=ImageFont.truetype(FONT_B, 44), fill=(21, 22, 26), anchor='mm')
    f3 = fit(dims_txt, FONT_B, 104, W-90)
    d.text((W/2, 320), dims_txt, font=f3, fill=(21, 22, 26), anchor='mm')
    d.text((W/2, 410), kg_txt, font=ImageFont.truetype(FONT_M, 46), fill=(21, 22, 26), anchor='mm')
    d.text((W/2, 470), 'LuggageSearch.com', font=ImageFont.truetype(FONT_B, 38), fill=(43, 92, 230), anchor='mm')
    buf = io.BytesIO(); im.save(buf, 'PNG', optimize=True); return buf.getvalue()

def sizer(h_cm, w_cm, d_cm):
    H, W, D = h_cm/100, w_cm/100, d_cm/100
    t = TUBE; y0 = BASE_T
    xs, zs = (W/2 + t/2), (D/2 + t/2)
    parts = []
    # 4 corner posts (inside faces sit exactly on the W x D limit)
    for sx in (-1, 1):
        for sz in (-1, 1):
            parts.append(box(sx*xs, y0 + (H+t)/2, sz*zs, t, H+t, t))
    # bottom rim (on the base, outside the bag footprint) and top rim (its underside = height limit)
    for yy in (y0 + t/2, y0 + H + t/2):
        for sz in (-1, 1): parts.append(box(0, yy, sz*zs, W + 2*t, t, t))
        for sx in (-1, 1): parts.append(box(sx*xs, yy, 0, t, t, D))
    frame = merge(parts)
    base = merge([box(0, BASE_T/2, 0, W + 0.16, BASE_T, D + 0.16)])
    # sign: 0.42 x 0.21 m plate standing on the back top rim, facing +Z (front)
    sw, sh = 0.42, 0.21; sy = y0 + H + t + sh/2 + 0.01; sz_ = -zs
    sp = np.array([(-sw/2, sy-sh/2, sz_+0.012), (sw/2, sy-sh/2, sz_+0.012), (sw/2, sy+sh/2, sz_+0.012), (-sw/2, sy+sh/2, sz_+0.012)], np.float32)
    sn = np.array([(0, 0, 1)]*4, np.float32); suv = np.array([(0, 1), (1, 1), (1, 0), (0, 0)], np.float32)
    si = np.array([0, 1, 2, 0, 2, 3], np.uint16)
    # sign backing (dark box) so it looks solid from behind
    back = merge([box(0, sy, sz_, sw + 0.02, sh + 0.02, 0.02), box(0, y0 + H + t + 0.005, sz_, 0.03, 0.02, 0.02)])
    return frame, base, back, (sp, sn, suv, si)

def build_glb(path, name, h, w, d, kg):
    dims_txt = f"{h} × {w} × {d} cm"
    kg_txt = f"Max weight {kg} kg" if kg else "No weight limit listed"
    png = sign_texture(name, dims_txt, kg_txt)
    frame, base, back, sign = sizer(h, w, d)
    bin_ = bytearray(); views = []; accessors = []
    def add(arr, target=None, minmax=False):
        nonlocal bin_
        while len(bin_) % 4: bin_ += b'\x00'
        off = len(bin_); data = arr.tobytes(); bin_ += data
        v = {"buffer": 0, "byteOffset": off, "byteLength": len(data)}
        if target: v["target"] = target
        views.append(v)
        comp = 5126 if arr.dtype == np.float32 else 5123
        typ = {1: "SCALAR", 2: "VEC2", 3: "VEC3"}[1 if arr.ndim == 1 else arr.shape[1]]
        a = {"bufferView": len(views)-1, "componentType": comp, "count": len(arr), "type": typ}
        if minmax: a["min"] = arr.min(0).tolist(); a["max"] = arr.max(0).tolist()
        accessors.append(a); return len(accessors)-1
    meshes = []
    def prim(P, N, I, mat, UV=None):
        attrs = {"POSITION": add(P, 34962, True), "NORMAL": add(N, 34962)}
        if UV is not None: attrs["TEXCOORD_0"] = add(UV, 34962)
        return {"attributes": attrs, "indices": add(I, 34963), "material": mat}
    meshes.append({"name": "frame", "primitives": [prim(*frame, 0)]})
    meshes.append({"name": "base", "primitives": [prim(*base, 1)]})
    meshes.append({"name": "sign_back", "primitives": [prim(*back, 1)]})
    sp, sn, suv, si = sign
    meshes.append({"name": "sign", "primitives": [prim(sp, sn, si, 2, suv)]})
    while len(bin_) % 4: bin_ += b'\x00'
    img_off = len(bin_); bin_ += png
    views.append({"buffer": 0, "byteOffset": img_off, "byteLength": len(png)})
    while len(bin_) % 4: bin_ += b'\x00'
    gltf = {
        "asset": {"version": "2.0", "generator": "LuggageSearch sizer generator"},
        "scene": 0, "scenes": [{"nodes": [0, 1, 2, 3]}],
        "nodes": [{"mesh": i, "name": m["name"]} for i, m in enumerate(meshes)],
        "meshes": meshes,
        "materials": [
            {"name": "steel", "pbrMetallicRoughness": {"baseColorFactor": [0.78, 0.8, 0.84, 1], "metallicFactor": 0.85, "roughnessFactor": 0.35}},
            {"name": "dark", "pbrMetallicRoughness": {"baseColorFactor": [0.09, 0.09, 0.1, 1], "metallicFactor": 0.2, "roughnessFactor": 0.7}},
            {"name": "sign", "pbrMetallicRoughness": {"baseColorTexture": {"index": 0}, "metallicFactor": 0, "roughnessFactor": 0.8}},
        ],
        "textures": [{"source": 0, "sampler": 0}],
        "samplers": [{"magFilter": 9729, "minFilter": 9987, "wrapS": 33071, "wrapT": 33071}],
        "images": [{"bufferView": len(views)-1, "mimeType": "image/png"}],
        "accessors": accessors, "bufferViews": views,
        "buffers": [{"byteLength": len(bin_)}],
    }
    js = json.dumps(gltf, separators=(',', ':')).encode()
    while len(js) % 4: js += b' '
    out = struct.pack('<III', 0x46546C67, 2, 12 + 8 + len(js) + 8 + len(bin_))
    out += struct.pack('<II', len(js), 0x4E4F534A) + js + struct.pack('<II', len(bin_), 0x004E4942) + bytes(bin_)
    pathlib.Path(path).write_bytes(out)
    return png

def load_airlines(ts_path):
    src = pathlib.Path(ts_path).read_text()
    out = []
    for m in re.finditer(r'\{\s*slug:\s*"([^"]+)",\s*name:\s*"([^"]+)".*?measurement:\s*"(\w+)"(.*?)\n  \}', src, re.S):
        slug, name, meas, rest = m.groups()
        dims = re.search(r'maxCm:\s*\[(\d+),\s*(\d+),\s*(\d+)\]', rest)
        kg = re.search(r'maxWeightKg:\s*(\d+|null)', rest)
        out.append(dict(slug=slug, name=name, dims=[int(x) for x in dims.groups()] if dims else None,
                        kg=int(kg.group(1)) if kg and kg.group(1) != 'null' else None))
    return out

if __name__ == '__main__':
    al = load_airlines(sys.argv[1]); outdir = pathlib.Path(sys.argv[2]); outdir.mkdir(parents=True, exist_ok=True)
    n = 0
    for a in al:
        if not a['dims']: print('skip (no box dims):', a['slug']); continue
        h, w, d = a['dims']
        png = build_glb(outdir / f"{a['slug']}.glb", a['name'], h, w, d, a['kg'])
        if a['slug'] == 'ryanair': (outdir.parent / 'sign_ryanair.png').write_bytes(png)
        n += 1
    print('airlines parsed', len(al), 'models', n)
