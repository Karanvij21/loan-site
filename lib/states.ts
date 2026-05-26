/**
 * State data for the /personal-loans/[state] pages.
 *
 * Population numbers are rounded; they're for editorial flavor only,
 * not authoritative demographics.
 *
 * `aprCap` reflects the most restrictive interest-rate cap commonly
 * cited for unsecured consumer loans in that state. Where a state
 * doesn't have a notable cap, this is null. Lenders within our
 * network adjust their offers to remain compliant; we display this
 * for transparency.
 *
 * `regulator` is the agency a consumer would file a complaint with.
 *
 * `region` is used to vary intro template copy by region to avoid
 * thin/duplicate-content penalties.
 */

export type Region = "Northeast" | "Midwest" | "South" | "West";

export type State = {
  name: string;
  slug: string;
  abbr: string;
  capital: string;
  population: string;
  region: Region;
  aprCap: number | null;
  aprNote?: string;
  regulator: string;
  ranked?: number;
};

export const states: State[] = [
  { name: "Alabama", slug: "alabama", abbr: "AL", capital: "Montgomery", population: "5.1M", region: "South", aprCap: null, regulator: "Alabama State Banking Department" },
  { name: "Alaska", slug: "alaska", abbr: "AK", capital: "Juneau", population: "730K", region: "West", aprCap: null, regulator: "Alaska Division of Banking and Securities" },
  { name: "Arizona", slug: "arizona", abbr: "AZ", capital: "Phoenix", population: "7.4M", region: "West", aprCap: 36, aprNote: "Arizona caps small consumer loans at 36% APR.", regulator: "Arizona Department of Insurance and Financial Institutions" },
  { name: "Arkansas", slug: "arkansas", abbr: "AR", capital: "Little Rock", population: "3.1M", region: "South", aprCap: 17, aprNote: "Arkansas has a constitutional 17% APR cap. Offers in Arkansas are tightly limited and many lenders do not operate here.", regulator: "Arkansas Securities Department" },
  { name: "California", slug: "california", abbr: "CA", capital: "Sacramento", population: "39.0M", region: "West", aprCap: 36, aprNote: "California's Fair Access to Credit Act caps loans of $2,500 to $10,000 at 36% APR plus the federal funds rate.", regulator: "California Department of Financial Protection and Innovation" },
  { name: "Colorado", slug: "colorado", abbr: "CO", capital: "Denver", population: "5.9M", region: "West", aprCap: 36, aprNote: "Colorado caps payday and small-installment loans at 36% APR.", regulator: "Colorado Office of the Attorney General, Consumer Credit Unit" },
  { name: "Connecticut", slug: "connecticut", abbr: "CT", capital: "Hartford", population: "3.6M", region: "Northeast", aprCap: 12, aprNote: "Connecticut caps small loans at 12% APR. Most lenders do not operate here.", regulator: "Connecticut Department of Banking" },
  { name: "Delaware", slug: "delaware", abbr: "DE", capital: "Dover", population: "1.0M", region: "South", aprCap: null, regulator: "Delaware Office of the State Bank Commissioner" },
  { name: "Florida", slug: "florida", abbr: "FL", capital: "Tallahassee", population: "22.6M", region: "South", aprCap: null, regulator: "Florida Office of Financial Regulation" },
  { name: "Georgia", slug: "georgia", abbr: "GA", capital: "Atlanta", population: "11.0M", region: "South", aprCap: 60, aprNote: "Georgia caps small loans at 60% APR (sliding by amount).", regulator: "Georgia Department of Banking and Finance" },
  { name: "Hawaii", slug: "hawaii", abbr: "HI", capital: "Honolulu", population: "1.4M", region: "West", aprCap: 36, aprNote: "Hawaii caps consumer installment loans at 36% APR.", regulator: "Hawaii Division of Financial Institutions" },
  { name: "Idaho", slug: "idaho", abbr: "ID", capital: "Boise", population: "1.9M", region: "West", aprCap: null, regulator: "Idaho Department of Finance" },
  { name: "Illinois", slug: "illinois", abbr: "IL", capital: "Springfield", population: "12.5M", region: "Midwest", aprCap: 36, aprNote: "The Illinois Predatory Loan Prevention Act caps consumer loans at 36% APR.", regulator: "Illinois Department of Financial and Professional Regulation" },
  { name: "Indiana", slug: "indiana", abbr: "IN", capital: "Indianapolis", population: "6.8M", region: "Midwest", aprCap: null, regulator: "Indiana Department of Financial Institutions" },
  { name: "Iowa", slug: "iowa", abbr: "IA", capital: "Des Moines", population: "3.2M", region: "Midwest", aprCap: null, regulator: "Iowa Division of Banking" },
  { name: "Kansas", slug: "kansas", abbr: "KS", capital: "Topeka", population: "2.9M", region: "Midwest", aprCap: null, regulator: "Kansas Office of the State Bank Commissioner" },
  { name: "Kentucky", slug: "kentucky", abbr: "KY", capital: "Frankfort", population: "4.5M", region: "South", aprCap: null, regulator: "Kentucky Department of Financial Institutions" },
  { name: "Louisiana", slug: "louisiana", abbr: "LA", capital: "Baton Rouge", population: "4.6M", region: "South", aprCap: null, regulator: "Louisiana Office of Financial Institutions" },
  { name: "Maine", slug: "maine", abbr: "ME", capital: "Augusta", population: "1.4M", region: "Northeast", aprCap: 30, aprNote: "Maine caps consumer loans on a sliding scale that maxes around 30% APR.", regulator: "Maine Bureau of Consumer Credit Protection" },
  { name: "Maryland", slug: "maryland", abbr: "MD", capital: "Annapolis", population: "6.2M", region: "South", aprCap: 33, aprNote: "Maryland caps small loans at roughly 33% APR depending on amount.", regulator: "Maryland Office of Financial Regulation" },
  { name: "Massachusetts", slug: "massachusetts", abbr: "MA", capital: "Boston", population: "7.0M", region: "Northeast", aprCap: 23, aprNote: "Massachusetts caps small loans at 23% APR.", regulator: "Massachusetts Division of Banks" },
  { name: "Michigan", slug: "michigan", abbr: "MI", capital: "Lansing", population: "10.0M", region: "Midwest", aprCap: null, regulator: "Michigan Department of Insurance and Financial Services" },
  { name: "Minnesota", slug: "minnesota", abbr: "MN", capital: "Saint Paul", population: "5.7M", region: "Midwest", aprCap: 36, aprNote: "Minnesota caps consumer small loans at 36% APR.", regulator: "Minnesota Department of Commerce" },
  { name: "Mississippi", slug: "mississippi", abbr: "MS", capital: "Jackson", population: "2.9M", region: "South", aprCap: null, regulator: "Mississippi Department of Banking and Consumer Finance" },
  { name: "Missouri", slug: "missouri", abbr: "MO", capital: "Jefferson City", population: "6.2M", region: "Midwest", aprCap: null, regulator: "Missouri Division of Finance" },
  { name: "Montana", slug: "montana", abbr: "MT", capital: "Helena", population: "1.1M", region: "West", aprCap: 36, aprNote: "Montana caps consumer small loans at 36% APR.", regulator: "Montana Division of Banking and Financial Institutions" },
  { name: "Nebraska", slug: "nebraska", abbr: "NE", capital: "Lincoln", population: "2.0M", region: "Midwest", aprCap: 36, aprNote: "Nebraska caps payday and small consumer loans at 36% APR.", regulator: "Nebraska Department of Banking and Finance" },
  { name: "Nevada", slug: "nevada", abbr: "NV", capital: "Carson City", population: "3.2M", region: "West", aprCap: null, regulator: "Nevada Financial Institutions Division" },
  { name: "New Hampshire", slug: "new-hampshire", abbr: "NH", capital: "Concord", population: "1.4M", region: "Northeast", aprCap: 36, aprNote: "New Hampshire caps small loans at 36% APR.", regulator: "New Hampshire Banking Department" },
  { name: "New Jersey", slug: "new-jersey", abbr: "NJ", capital: "Trenton", population: "9.3M", region: "Northeast", aprCap: 30, aprNote: "New Jersey caps consumer loans at 30% APR (criminal usury threshold).", regulator: "New Jersey Department of Banking and Insurance" },
  { name: "New Mexico", slug: "new-mexico", abbr: "NM", capital: "Santa Fe", population: "2.1M", region: "West", aprCap: 36, aprNote: "New Mexico caps consumer installment loans at 36% APR.", regulator: "New Mexico Financial Institutions Division" },
  { name: "New York", slug: "new-york", abbr: "NY", capital: "Albany", population: "19.5M", region: "Northeast", aprCap: 16, aprNote: "New York caps civil usury at 16% APR and criminal usury at 25% APR. Most personal loan offers are not available in New York.", regulator: "New York State Department of Financial Services" },
  { name: "North Carolina", slug: "north-carolina", abbr: "NC", capital: "Raleigh", population: "10.7M", region: "South", aprCap: 36, aprNote: "North Carolina caps consumer loans at 36% APR.", regulator: "North Carolina Office of the Commissioner of Banks" },
  { name: "North Dakota", slug: "north-dakota", abbr: "ND", capital: "Bismarck", population: "780K", region: "Midwest", aprCap: null, regulator: "North Dakota Department of Financial Institutions" },
  { name: "Ohio", slug: "ohio", abbr: "OH", capital: "Columbus", population: "11.8M", region: "Midwest", aprCap: 28, aprNote: "Ohio caps short-term consumer loans at 28% APR.", regulator: "Ohio Division of Financial Institutions" },
  { name: "Oklahoma", slug: "oklahoma", abbr: "OK", capital: "Oklahoma City", population: "4.1M", region: "South", aprCap: null, regulator: "Oklahoma Department of Consumer Credit" },
  { name: "Oregon", slug: "oregon", abbr: "OR", capital: "Salem", population: "4.2M", region: "West", aprCap: 36, aprNote: "Oregon caps consumer small loans at 36% APR plus a one-time origination fee.", regulator: "Oregon Division of Financial Regulation" },
  { name: "Pennsylvania", slug: "pennsylvania", abbr: "PA", capital: "Harrisburg", population: "13.0M", region: "Northeast", aprCap: 24, aprNote: "Pennsylvania caps consumer discount loans at 24% APR.", regulator: "Pennsylvania Department of Banking and Securities" },
  { name: "Rhode Island", slug: "rhode-island", abbr: "RI", capital: "Providence", population: "1.1M", region: "Northeast", aprCap: 21, aprNote: "Rhode Island caps unsecured small loans around 21% APR.", regulator: "Rhode Island Division of Banking" },
  { name: "South Carolina", slug: "south-carolina", abbr: "SC", capital: "Columbia", population: "5.3M", region: "South", aprCap: null, regulator: "South Carolina Board of Financial Institutions" },
  { name: "South Dakota", slug: "south-dakota", abbr: "SD", capital: "Pierre", population: "910K", region: "Midwest", aprCap: 36, aprNote: "South Dakota caps consumer loans at 36% APR.", regulator: "South Dakota Division of Banking" },
  { name: "Tennessee", slug: "tennessee", abbr: "TN", capital: "Nashville", population: "7.1M", region: "South", aprCap: null, regulator: "Tennessee Department of Financial Institutions" },
  { name: "Texas", slug: "texas", abbr: "TX", capital: "Austin", population: "30.5M", region: "South", aprCap: null, regulator: "Texas Office of Consumer Credit Commissioner" },
  { name: "Utah", slug: "utah", abbr: "UT", capital: "Salt Lake City", population: "3.4M", region: "West", aprCap: null, regulator: "Utah Department of Financial Institutions" },
  { name: "Vermont", slug: "vermont", abbr: "VT", capital: "Montpelier", population: "650K", region: "Northeast", aprCap: 18, aprNote: "Vermont caps small consumer loans at 18% APR.", regulator: "Vermont Department of Financial Regulation" },
  { name: "Virginia", slug: "virginia", abbr: "VA", capital: "Richmond", population: "8.7M", region: "South", aprCap: 36, aprNote: "Virginia's Fairness in Lending Act caps consumer loans at 36% APR.", regulator: "Virginia State Corporation Commission, Bureau of Financial Institutions" },
  { name: "Washington", slug: "washington", abbr: "WA", capital: "Olympia", population: "7.8M", region: "West", aprCap: null, regulator: "Washington State Department of Financial Institutions" },
  { name: "West Virginia", slug: "west-virginia", abbr: "WV", capital: "Charleston", population: "1.8M", region: "South", aprCap: 18, aprNote: "West Virginia caps consumer loans on a sliding scale that maxes around 18% APR.", regulator: "West Virginia Division of Financial Institutions" },
  { name: "Wisconsin", slug: "wisconsin", abbr: "WI", capital: "Madison", population: "5.9M", region: "Midwest", aprCap: null, regulator: "Wisconsin Department of Financial Institutions" },
  { name: "Wyoming", slug: "wyoming", abbr: "WY", capital: "Cheyenne", population: "580K", region: "West", aprCap: null, regulator: "Wyoming Division of Banking" },
  { name: "District of Columbia", slug: "district-of-columbia", abbr: "DC", capital: "Washington", population: "680K", region: "South", aprCap: 24, aprNote: "DC caps consumer loans around 24% APR.", regulator: "DC Department of Insurance, Securities and Banking" },
];

export const stateBySlug = Object.fromEntries(
  states.map((s) => [s.slug, s] as const)
);

export function regionIntro(region: Region, name: string): string {
  switch (region) {
    case "Northeast":
      return `For borrowers in ${name}, a personal loan can be a steady way to cover unexpected expenses, consolidate higher-interest debt, or fund a planned purchase. We compare offers from a network of independent lenders so you can see your options side by side before committing.`;
    case "Midwest":
      return `Whether you live in the heart of ${name} or in one of its smaller communities, a personal loan can help you move forward when life sends an unexpected bill or a planned project your way. Our marketplace surfaces offers from lenders who work with ${name} residents.`;
    case "South":
      return `Personal loans give ${name} residents flexibility when they need it most: paying down high-interest credit cards, handling a medical bill, or funding a major purchase with predictable monthly payments. We match your request with lenders licensed to work with borrowers in ${name}.`;
    case "West":
      return `From the coast to the high desert, ${name} borrowers use personal loans for everything from emergency expenses to consolidating debt to financing a home repair. Our network includes lenders who routinely serve ${name} residents.`;
  }
}

export function aprDescription(s: State): string {
  if (s.aprNote) return s.aprNote;
  return `${s.name} does not have a notable state-level APR cap on consumer installment loans. Offers in our network for ${s.name} residents typically range from 5.99% to 35.99% APR depending on the lender and your credit profile.`;
}
