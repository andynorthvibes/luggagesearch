import type { AmazonPick } from "@/components/AmazonPicks";

// Two already-verified SiteStripe links (see best-carry-on-luggage), reused
// across every airline guide instead of sourcing a unique pair per airline --
// the copy is deliberately hedged ("check against the limits above") rather
// than claiming a guaranteed fit for that specific airline.
export const CARRY_ON_PICKS: AmazonPick[] = [
  {
    name: "Amazon Basics Hardside Spinner Carry-On Luggage",
    note: "A budget hardside pick with 4 spinner wheels — check its listed dimensions and weight against the limits above before buying.",
    query: "Amazon Basics Hardside Spinner Luggage Carry-On",
    url: "https://amzn.to/4xg6q0z",
  },
  {
    name: "Travelpro Maxlite 5 Softside Carry-On Spinner",
    note: "One of the lighter carry-ons available — worth a look on the airlines above with a low cabin weight limit, since the bag's own empty weight eats into it.",
    query: "Travelpro Maxlite 5 Softside Carry-On Spinner",
    url: "https://amzn.to/469Odqz",
  },
];
