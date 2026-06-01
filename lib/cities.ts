/**
 * City-level programmatic SEO data.
 *
 * Each entry powers `/personal-loans/[state]/[city]` with a city-flavoured
 * version of the state page. Population numbers are rough and rounded , 
 * they're for editorial flavour only, not authoritative demographics.
 *
 * `tier` is derived from population: large (≥ 500K), mid (100K–500K), small (< 100K).
 * The page template varies intro copy by tier to avoid duplicate-content signals.
 *
 * Top 3-7 metros per state, prioritising those that drive real personal-loan
 * search volume. Smaller states cap at 2-3 cities.
 */

export type CityTier = "large" | "mid" | "small";

export type City = {
  name: string;
  slug: string;
  stateSlug: string;
  population: string;
  tier: CityTier;
};

function t(pop: number): CityTier {
  if (pop >= 500_000) return "large";
  if (pop >= 100_000) return "mid";
  return "small";
}

function fmt(pop: number): string {
  if (pop >= 1_000_000) return `${(pop / 1_000_000).toFixed(1)}M`;
  if (pop >= 100_000) return `${Math.round(pop / 1000)}K`;
  return `${Math.round(pop / 1000)}K`;
}

function city(name: string, slug: string, stateSlug: string, pop: number): City {
  return { name, slug, stateSlug, population: fmt(pop), tier: t(pop) };
}

export const cities: City[] = [
  // Alabama
  city("Birmingham", "birmingham", "alabama", 197_000),
  city("Montgomery", "montgomery", "alabama", 196_000),
  city("Mobile", "mobile", "alabama", 184_000),
  city("Huntsville", "huntsville", "alabama", 222_000),
  city("Tuscaloosa", "tuscaloosa", "alabama", 111_000),

  // Alaska
  city("Anchorage", "anchorage", "alaska", 287_000),
  city("Fairbanks", "fairbanks", "alaska", 31_000),
  city("Juneau", "juneau", "alaska", 32_000),

  // Arizona
  city("Phoenix", "phoenix", "arizona", 1_640_000),
  city("Tucson", "tucson", "arizona", 547_000),
  city("Mesa", "mesa", "arizona", 510_000),
  city("Chandler", "chandler", "arizona", 280_000),
  city("Scottsdale", "scottsdale", "arizona", 242_000),

  // Arkansas
  city("Little Rock", "little-rock", "arkansas", 202_000),
  city("Fort Smith", "fort-smith", "arkansas", 88_000),
  city("Fayetteville", "fayetteville", "arkansas", 95_000),

  // California
  city("Los Angeles", "los-angeles", "california", 3_900_000),
  city("San Diego", "san-diego", "california", 1_390_000),
  city("San Jose", "san-jose", "california", 970_000),
  city("San Francisco", "san-francisco", "california", 815_000),
  city("Fresno", "fresno", "california", 545_000),
  city("Sacramento", "sacramento", "california", 525_000),
  city("Oakland", "oakland", "california", 430_000),

  // Colorado
  city("Denver", "denver", "colorado", 715_000),
  city("Colorado Springs", "colorado-springs", "colorado", 480_000),
  city("Aurora", "aurora", "colorado", 387_000),
  city("Fort Collins", "fort-collins", "colorado", 170_000),

  // Connecticut
  city("Bridgeport", "bridgeport", "connecticut", 148_000),
  city("New Haven", "new-haven", "connecticut", 134_000),
  city("Hartford", "hartford", "connecticut", 121_000),
  city("Stamford", "stamford", "connecticut", 137_000),

  // Delaware
  city("Wilmington", "wilmington", "delaware", 71_000),
  city("Dover", "dover", "delaware", 39_000),
  city("Newark", "newark", "delaware", 30_000),

  // DC
  city("Washington", "washington", "district-of-columbia", 712_000),

  // Florida
  city("Jacksonville", "jacksonville", "florida", 950_000),
  city("Miami", "miami", "florida", 442_000),
  city("Tampa", "tampa", "florida", 395_000),
  city("Orlando", "orlando", "florida", 320_000),
  city("St. Petersburg", "st-petersburg", "florida", 260_000),
  city("Tallahassee", "tallahassee", "florida", 200_000),

  // Georgia
  city("Atlanta", "atlanta", "georgia", 510_000),
  city("Augusta", "augusta", "georgia", 200_000),
  city("Columbus", "columbus", "georgia", 197_000),
  city("Savannah", "savannah", "georgia", 145_000),
  city("Athens", "athens", "georgia", 128_000),

  // Hawaii
  city("Honolulu", "honolulu", "hawaii", 345_000),
  city("Hilo", "hilo", "hawaii", 45_000),
  city("Kailua", "kailua", "hawaii", 38_000),

  // Idaho
  city("Boise", "boise", "idaho", 235_000),
  city("Meridian", "meridian", "idaho", 130_000),
  city("Nampa", "nampa", "idaho", 110_000),

  // Illinois
  city("Chicago", "chicago", "illinois", 2_700_000),
  city("Aurora", "aurora", "illinois", 180_000),
  city("Naperville", "naperville", "illinois", 150_000),
  city("Joliet", "joliet", "illinois", 150_000),
  city("Rockford", "rockford", "illinois", 145_000),

  // Indiana
  city("Indianapolis", "indianapolis", "indiana", 880_000),
  city("Fort Wayne", "fort-wayne", "indiana", 270_000),
  city("Evansville", "evansville", "indiana", 117_000),
  city("South Bend", "south-bend", "indiana", 103_000),

  // Iowa
  city("Des Moines", "des-moines", "iowa", 213_000),
  city("Cedar Rapids", "cedar-rapids", "iowa", 137_000),
  city("Davenport", "davenport", "iowa", 100_000),

  // Kansas
  city("Wichita", "wichita", "kansas", 395_000),
  city("Overland Park", "overland-park", "kansas", 200_000),
  city("Kansas City", "kansas-city", "kansas", 156_000),
  city("Topeka", "topeka", "kansas", 126_000),

  // Kentucky
  city("Louisville", "louisville", "kentucky", 625_000),
  city("Lexington", "lexington", "kentucky", 322_000),
  city("Bowling Green", "bowling-green", "kentucky", 75_000),

  // Louisiana
  city("New Orleans", "new-orleans", "louisiana", 380_000),
  city("Baton Rouge", "baton-rouge", "louisiana", 220_000),
  city("Shreveport", "shreveport", "louisiana", 185_000),
  city("Lafayette", "lafayette", "louisiana", 121_000),

  // Maine
  city("Portland", "portland", "maine", 68_000),
  city("Lewiston", "lewiston", "maine", 36_000),
  city("Bangor", "bangor", "maine", 31_000),

  // Maryland
  city("Baltimore", "baltimore", "maryland", 575_000),
  city("Frederick", "frederick", "maryland", 80_000),
  city("Rockville", "rockville", "maryland", 67_000),
  city("Annapolis", "annapolis", "maryland", 40_000),

  // Massachusetts
  city("Boston", "boston", "massachusetts", 650_000),
  city("Worcester", "worcester", "massachusetts", 205_000),
  city("Springfield", "springfield", "massachusetts", 155_000),
  city("Cambridge", "cambridge", "massachusetts", 118_000),

  // Michigan
  city("Detroit", "detroit", "michigan", 630_000),
  city("Grand Rapids", "grand-rapids", "michigan", 200_000),
  city("Warren", "warren", "michigan", 134_000),
  city("Ann Arbor", "ann-arbor", "michigan", 124_000),
  city("Lansing", "lansing", "michigan", 113_000),

  // Minnesota
  city("Minneapolis", "minneapolis", "minnesota", 425_000),
  city("Saint Paul", "saint-paul", "minnesota", 308_000),
  city("Rochester", "rochester", "minnesota", 121_000),
  city("Duluth", "duluth", "minnesota", 86_000),

  // Mississippi
  city("Jackson", "jackson", "mississippi", 145_000),
  city("Gulfport", "gulfport", "mississippi", 72_000),
  city("Southaven", "southaven", "mississippi", 55_000),

  // Missouri
  city("Kansas City", "kansas-city", "missouri", 510_000),
  city("Saint Louis", "saint-louis", "missouri", 300_000),
  city("Springfield", "springfield", "missouri", 170_000),
  city("Columbia", "columbia", "missouri", 127_000),

  // Montana
  city("Billings", "billings", "montana", 117_000),
  city("Missoula", "missoula", "montana", 75_000),
  city("Great Falls", "great-falls", "montana", 60_000),

  // Nebraska
  city("Omaha", "omaha", "nebraska", 487_000),
  city("Lincoln", "lincoln", "nebraska", 295_000),
  city("Bellevue", "bellevue", "nebraska", 65_000),

  // Nevada
  city("Las Vegas", "las-vegas", "nevada", 650_000),
  city("Henderson", "henderson", "nevada", 320_000),
  city("Reno", "reno", "nevada", 265_000),
  city("North Las Vegas", "north-las-vegas", "nevada", 268_000),

  // New Hampshire
  city("Manchester", "manchester", "new-hampshire", 115_000),
  city("Nashua", "nashua", "new-hampshire", 91_000),
  city("Concord", "concord", "new-hampshire", 44_000),

  // New Jersey
  city("Newark", "newark", "new-jersey", 305_000),
  city("Jersey City", "jersey-city", "new-jersey", 295_000),
  city("Paterson", "paterson", "new-jersey", 159_000),
  city("Elizabeth", "elizabeth", "new-jersey", 137_000),
  city("Trenton", "trenton", "new-jersey", 90_000),

  // New Mexico
  city("Albuquerque", "albuquerque", "new-mexico", 565_000),
  city("Las Cruces", "las-cruces", "new-mexico", 113_000),
  city("Rio Rancho", "rio-rancho", "new-mexico", 110_000),
  city("Santa Fe", "santa-fe", "new-mexico", 88_000),

  // New York
  city("New York City", "new-york-city", "new-york", 8_300_000),
  city("Buffalo", "buffalo", "new-york", 275_000),
  city("Rochester", "rochester", "new-york", 210_000),
  city("Yonkers", "yonkers", "new-york", 210_000),
  city("Syracuse", "syracuse", "new-york", 148_000),
  city("Albany", "albany", "new-york", 100_000),

  // North Carolina
  city("Charlotte", "charlotte", "north-carolina", 875_000),
  city("Raleigh", "raleigh", "north-carolina", 475_000),
  city("Greensboro", "greensboro", "north-carolina", 300_000),
  city("Durham", "durham", "north-carolina", 285_000),
  city("Winston-Salem", "winston-salem", "north-carolina", 252_000),

  // North Dakota
  city("Fargo", "fargo", "north-dakota", 125_000),
  city("Bismarck", "bismarck", "north-dakota", 75_000),
  city("Grand Forks", "grand-forks", "north-dakota", 59_000),

  // Ohio
  city("Columbus", "columbus", "ohio", 910_000),
  city("Cleveland", "cleveland", "ohio", 370_000),
  city("Cincinnati", "cincinnati", "ohio", 310_000),
  city("Toledo", "toledo", "ohio", 270_000),
  city("Akron", "akron", "ohio", 190_000),

  // Oklahoma
  city("Oklahoma City", "oklahoma-city", "oklahoma", 690_000),
  city("Tulsa", "tulsa", "oklahoma", 410_000),
  city("Norman", "norman", "oklahoma", 130_000),
  city("Broken Arrow", "broken-arrow", "oklahoma", 116_000),

  // Oregon
  city("Portland", "portland", "oregon", 650_000),
  city("Eugene", "eugene", "oregon", 175_000),
  city("Salem", "salem", "oregon", 175_000),
  city("Gresham", "gresham", "oregon", 110_000),

  // Pennsylvania
  city("Philadelphia", "philadelphia", "pennsylvania", 1_580_000),
  city("Pittsburgh", "pittsburgh", "pennsylvania", 300_000),
  city("Allentown", "allentown", "pennsylvania", 125_000),
  city("Erie", "erie", "pennsylvania", 95_000),
  city("Reading", "reading", "pennsylvania", 95_000),

  // Rhode Island
  city("Providence", "providence", "rhode-island", 190_000),
  city("Warwick", "warwick", "rhode-island", 82_000),
  city("Cranston", "cranston", "rhode-island", 82_000),

  // South Carolina
  city("Charleston", "charleston", "south-carolina", 155_000),
  city("Columbia", "columbia", "south-carolina", 138_000),
  city("North Charleston", "north-charleston", "south-carolina", 115_000),
  city("Mount Pleasant", "mount-pleasant", "south-carolina", 95_000),

  // South Dakota
  city("Sioux Falls", "sioux-falls", "south-dakota", 200_000),
  city("Rapid City", "rapid-city", "south-dakota", 78_000),
  city("Aberdeen", "aberdeen", "south-dakota", 28_000),

  // Tennessee
  city("Nashville", "nashville", "tennessee", 690_000),
  city("Memphis", "memphis", "tennessee", 630_000),
  city("Knoxville", "knoxville", "tennessee", 195_000),
  city("Chattanooga", "chattanooga", "tennessee", 182_000),
  city("Clarksville", "clarksville", "tennessee", 167_000),

  // Texas
  city("Houston", "houston", "texas", 2_310_000),
  city("San Antonio", "san-antonio", "texas", 1_470_000),
  city("Dallas", "dallas", "texas", 1_300_000),
  city("Austin", "austin", "texas", 970_000),
  city("Fort Worth", "fort-worth", "texas", 960_000),
  city("El Paso", "el-paso", "texas", 680_000),
  city("Arlington", "arlington", "texas", 395_000),

  // Utah
  city("Salt Lake City", "salt-lake-city", "utah", 200_000),
  city("West Valley City", "west-valley-city", "utah", 140_000),
  city("Provo", "provo", "utah", 116_000),
  city("West Jordan", "west-jordan", "utah", 116_000),

  // Vermont
  city("Burlington", "burlington", "vermont", 45_000),
  city("South Burlington", "south-burlington", "vermont", 20_000),
  city("Essex", "essex", "vermont", 22_000),

  // Virginia
  city("Virginia Beach", "virginia-beach", "virginia", 458_000),
  city("Norfolk", "norfolk", "virginia", 235_000),
  city("Chesapeake", "chesapeake", "virginia", 250_000),
  city("Richmond", "richmond", "virginia", 226_000),
  city("Arlington", "arlington", "virginia", 234_000),

  // Washington
  city("Seattle", "seattle", "washington", 750_000),
  city("Spokane", "spokane", "washington", 230_000),
  city("Tacoma", "tacoma", "washington", 220_000),
  city("Vancouver", "vancouver", "washington", 195_000),
  city("Bellevue", "bellevue", "washington", 150_000),

  // West Virginia
  city("Charleston", "charleston", "west-virginia", 47_000),
  city("Huntington", "huntington", "west-virginia", 45_000),
  city("Morgantown", "morgantown", "west-virginia", 30_000),

  // Wisconsin
  city("Milwaukee", "milwaukee", "wisconsin", 575_000),
  city("Madison", "madison", "wisconsin", 270_000),
  city("Green Bay", "green-bay", "wisconsin", 107_000),
  city("Kenosha", "kenosha", "wisconsin", 100_000),

  // Wyoming
  city("Cheyenne", "cheyenne", "wyoming", 65_000),
  city("Casper", "casper", "wyoming", 59_000),
  city("Laramie", "laramie", "wyoming", 32_000),
];

/** Index by state slug → ordered cities in that state. */
export const citiesByState: Record<string, City[]> = (() => {
  const map: Record<string, City[]> = {};
  for (const c of cities) {
    (map[c.stateSlug] ??= []).push(c);
  }
  return map;
})();

/** Look up a city by state + city slug. Cities can share names across states (e.g. Portland ME / OR). */
export function findCity(stateSlug: string, citySlug: string): City | undefined {
  return citiesByState[stateSlug]?.find((c) => c.slug === citySlug);
}

/** All (state, city) slug pairs for generateStaticParams. */
export function allCitySlugs(): Array<{ state: string; city: string }> {
  return cities.map((c) => ({ state: c.stateSlug, city: c.slug }));
}

/** Top cities to surface as "Top metros" on the state page (up to 6). */
export function topCitiesForState(stateSlug: string): City[] {
  return (citiesByState[stateSlug] ?? []).slice(0, 6);
}

/** Other cities in the same state, excluding the current, for internal linking. */
export function otherCitiesInState(stateSlug: string, currentCitySlug: string): City[] {
  return (citiesByState[stateSlug] ?? []).filter((c) => c.slug !== currentCitySlug);
}

/** Tier-aware copy for the hero intro on a city page. */
export function cityIntro(city: City, stateName: string): string {
  switch (city.tier) {
    case "large":
      return `${city.name} is one of the largest metros in ${stateName} and one of the busier personal-loan markets in the state. Loan amounts, terms, and APRs available to ${city.name} residents are set by the lender, not by us; ${siteApr(stateName)} The full ${stateName} lender network competes for applications from ${city.name}.`;
    case "mid":
      return `${city.name} (population ~${city.population}) sits among the largest cities in ${stateName} and has access to the full national personal-loan network. Lenders in our partner network compete for ${city.name} applications with offers from $100 to $50,000, terms of 3 to 72 months, and APRs set by the lender, not by us.`;
    case "small":
      return `Personal loans for ${city.name} residents are sourced through the same national lender network we serve the rest of ${stateName} with. ${city.name}'s smaller size doesn't limit your options: online lenders underwrite by credit, income, and bank-account history, not metro size.`;
  }
}

function siteApr(_stateName: string) {
  // Kept as a function so it's easy to insert state-specific cap copy here later
  // (e.g., "Texas does not cap APRs..."). For now we use a generic line.
  return "APRs across our network typically run 5.99% to 35.99% before any state-specific caps apply.";
}
