// Carry-on size and weight limits by airline.
// Source: aggregated from published airline cabin-baggage policies, cross-checked against
// Upgraded Points' 2026 carry-on size chart (https://upgradedpoints.com/travel/airlines/carry-on-luggage-size-chart/).
// Dimensions in centimeters (L x W x H), weight in kilograms. Always verify against the
// airline's own site before flying — policies change and can vary by fare class or route.

export type AirlineLimit = {
  slug: string;
  name: string;
  region: "North America" | "Europe" | "Middle East" | "Asia-Pacific";
  measurement: "dimensions" | "linear";
  // for "dimensions" airlines
  maxCm?: [number, number, number]; // L x W x H, cm
  // for "linear" airlines (sum of L+W+H)
  maxLinearCm?: number;
  maxWeightKg: number | null; // null = no published cabin-bag weight limit
  weightNote?: string;
  source: string;
};

export const AIRLINES: AirlineLimit[] = [
  {
    slug: "united",
    name: "United Airlines",
    region: "North America",
    measurement: "dimensions",
    maxCm: [56, 35, 23],
    maxWeightKg: null,
    source: "united.com",
  },
  {
    slug: "delta",
    name: "Delta Air Lines",
    region: "North America",
    measurement: "dimensions",
    maxCm: [56, 35, 23],
    maxWeightKg: null,
    weightNote: "No general weight limit, but some codeshare/regional routes vary.",
    source: "delta.com",
  },
  {
    slug: "american",
    name: "American Airlines",
    region: "North America",
    measurement: "dimensions",
    maxCm: [56, 36, 23],
    maxWeightKg: null,
    source: "aa.com",
  },
  {
    slug: "southwest",
    name: "Southwest Airlines",
    region: "North America",
    measurement: "dimensions",
    maxCm: [61, 41, 25],
    maxWeightKg: null,
    source: "southwest.com",
  },
  {
    slug: "jetblue",
    name: "JetBlue Airways",
    region: "North America",
    measurement: "dimensions",
    maxCm: [56, 36, 23],
    maxWeightKg: null,
    source: "jetblue.com",
  },
  {
    slug: "alaska",
    name: "Alaska Airlines",
    region: "North America",
    measurement: "dimensions",
    maxCm: [56, 36, 23],
    maxWeightKg: null,
    source: "alaskaair.com",
  },
  {
    slug: "british-airways",
    name: "British Airways",
    region: "Europe",
    measurement: "dimensions",
    maxCm: [56, 45, 25],
    maxWeightKg: null,
    weightNote: "No published weight limit, but you must be able to lift it into the locker.",
    source: "britishairways.com",
  },
  {
    slug: "lufthansa",
    name: "Lufthansa",
    region: "Europe",
    measurement: "dimensions",
    maxCm: [55, 40, 23],
    maxWeightKg: 8,
    source: "lufthansa.com",
  },
  {
    slug: "air-france-klm",
    name: "Air France / KLM",
    region: "Europe",
    measurement: "dimensions",
    maxCm: [55, 35, 25],
    maxWeightKg: 12,
    weightNote: "12 kg is the combined limit for cabin bag + personal item.",
    source: "airfrance.com / klm.com",
  },
  {
    slug: "ryanair",
    name: "Ryanair",
    region: "Europe",
    measurement: "dimensions",
    maxCm: [55, 40, 20],
    maxWeightKg: 10,
    weightNote: "10 kg bag requires the paid Priority option; free bag is smaller (40x20x25cm).",
    source: "ryanair.com",
  },
  {
    slug: "easyjet",
    name: "easyJet",
    region: "Europe",
    measurement: "dimensions",
    maxCm: [56, 45, 25],
    maxWeightKg: 15,
    weightNote: "Free \"under-seat\" bag is smaller; this size requires a cabin bag fare/add-on.",
    source: "easyjet.com",
  },
  {
    slug: "norwegian",
    name: "Norwegian",
    region: "Europe",
    measurement: "dimensions",
    maxCm: [55, 40, 23],
    maxWeightKg: 10,
    source: "norwegian.com",
  },
  {
    slug: "sas",
    name: "SAS (Scandinavian Airlines)",
    region: "Europe",
    measurement: "dimensions",
    maxCm: [55, 40, 23],
    maxWeightKg: 8,
    source: "flysas.com",
  },
  {
    slug: "emirates",
    name: "Emirates",
    region: "Middle East",
    measurement: "dimensions",
    maxCm: [55, 38, 22],
    maxWeightKg: 7,
    weightNote: "Business/First allowance is higher (9 kg) — check your fare class.",
    source: "emirates.com",
  },
  {
    slug: "qatar-airways",
    name: "Qatar Airways",
    region: "Middle East",
    measurement: "dimensions",
    maxCm: [50, 37, 25],
    maxWeightKg: 7,
    source: "qatarairways.com",
  },
  {
    slug: "singapore-airlines",
    name: "Singapore Airlines",
    region: "Asia-Pacific",
    measurement: "linear",
    maxLinearCm: 115,
    maxWeightKg: 7,
    weightNote: "Measured as total linear dimensions (L+W+H), not per-side limits.",
    source: "singaporeair.com",
  },
];

export type CheckResult = {
  airline: AirlineLimit;
  dimensionsOk: boolean;
  weightOk: boolean | null; // null = no weight limit to check against
};

export function checkBag(
  lengthCm: number,
  widthCm: number,
  heightCm: number,
  weightKg: number | null
): CheckResult[] {
  const bagSorted = [lengthCm, widthCm, heightCm].sort((a, b) => b - a);
  const bagLinear = lengthCm + widthCm + heightCm;

  return AIRLINES.map((airline) => {
    let dimensionsOk: boolean;
    if (airline.measurement === "linear" && airline.maxLinearCm) {
      dimensionsOk = bagLinear <= airline.maxLinearCm;
    } else if (airline.maxCm) {
      const limitSorted = [...airline.maxCm].sort((a, b) => b - a);
      dimensionsOk = bagSorted.every((d, i) => d <= limitSorted[i]);
    } else {
      dimensionsOk = true;
    }

    const weightOk =
      airline.maxWeightKg === null || weightKg === null
        ? null
        : weightKg <= airline.maxWeightKg;

    return { airline, dimensionsOk, weightOk };
  });
}
