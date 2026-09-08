export type Climate = "cold" | "mild" | "hot";
export type TripType = "leisure" | "business" | "beach" | "city-break" | "adventure";

export type PackingInput = {
  days: number;
  climate: Climate;
  tripType: TripType;
};

export type PackingSection = {
  title: string;
  items: string[];
};

function clothingCount(days: number, perDay: number, min: number, max: number) {
  return Math.max(min, Math.min(max, Math.ceil(days * perDay)));
}

export function generatePackingList({ days, climate, tripType }: PackingInput): PackingSection[] {
  const sections: PackingSection[] = [];

  // Clothing — scales with trip length but caps out (nobody packs 20 t-shirts; you do laundry)
  const tops = clothingCount(days, 0.8, 2, 10);
  const bottoms = clothingCount(days, 0.35, 1, 5);
  const underwear = clothingCount(days, 1, 2, 12);
  const socks = clothingCount(days, 1, 2, 12);

  const clothing: string[] = [
    `${tops}x tops / t-shirts`,
    `${bottoms}x trousers, shorts, or skirts`,
    `${underwear}x underwear`,
    `${socks}x pairs of socks`,
    "1x sleepwear",
  ];

  if (climate === "cold") {
    clothing.push("1x warm jacket or coat", "1-2x sweaters or fleeces", "Thermal base layer", "Gloves, hat, scarf", "Warm socks (wool blend)");
  } else if (climate === "mild") {
    clothing.push("1x light jacket or layering piece", "1x sweater for evenings");
  } else {
    clothing.push("Sun hat", "Extra breathable/moisture-wicking tops");
  }

  if (tripType === "beach") {
    clothing.push("Swimwear (2x if it won't dry overnight)", "Cover-up / sarong", "Flip-flops or sandals");
  }
  if (tripType === "business") {
    clothing.push("1-2x business outfits per 3 business days", "1x blazer", "Dress shoes", "Belt");
  }
  if (tripType === "adventure") {
    clothing.push("Quick-dry hiking clothes", "Moisture-wicking base layers", "Hiking boots (worn on the plane to save space)");
  }
  if (tripType === "city-break") {
    clothing.push("1-2x smart-casual outfits for evenings out", "Comfortable walking shoes");
  }

  sections.push({ title: "Clothing", items: clothing });

  // Toiletries
  sections.push({
    title: "Toiletries",
    items: [
      "Toothbrush & toothpaste",
      "Deodorant",
      "Travel-size shampoo & conditioner (≤100ml/3.4oz for carry-on)",
      "Skincare / moisturizer",
      climate === "hot" ? "Sunscreen (SPF 30+)" : "Lip balm with SPF",
      "Any prescription medication (in original packaging)",
      "Basic first-aid kit (plasters, painkillers, motion sickness tablets)",
    ],
  });

  // Electronics
  sections.push({
    title: "Electronics",
    items: [
      "Phone + charger",
      "Power bank",
      "Universal travel adapter",
      tripType === "business" ? "Laptop + charger" : "Camera (optional)",
      "Headphones",
    ],
  });

  // Documents
  sections.push({
    title: "Documents & money",
    items: [
      "Passport / ID",
      "Visa or entry documents (if required)",
      "Travel insurance details",
      "Boarding passes / booking confirmations (digital or printed)",
      "Payment cards + some local cash",
      "Driver's license (if renting a car)",
    ],
  });

  // Trip-length-based extras
  const extras: string[] = ["Reusable water bottle (empty through security)", "Packing cubes", "Laundry bag"];
  if (days >= 7) {
    extras.push("Travel-size laundry detergent (for mid-trip laundry)");
  }
  if (tripType === "adventure") {
    extras.push("Daypack for excursions", "Reusable water filter/purification tablets");
  }
  sections.push({ title: "Extras", items: extras });

  return sections;
}
