import { z } from "zod";

export const step1Schema = z.object({
  amount: z.coerce.number().min(100).max(50000),
  purpose: z.enum([
    "debt_consolidation",
    "credit_card_refi",
    "home_improvement",
    "auto",
    "medical",
    "major_purchase",
    "moving",
    "vacation",
    "wedding",
    "business",
    "other",
  ]),
  creditRating: z.enum(["excellent", "good", "fair", "poor"]),
});

export const step2Schema = z.object({
  firstName: z.string().min(1).max(50),
  lastName: z.string().min(1).max(50),
  email: z.string().email(),
  phone: z.string().regex(/^[\d\s()+-]{10,20}$/, "Enter a valid phone number"),
  dob: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Use YYYY-MM-DD"),
  ssnLast4: z.string().regex(/^\d{4}$/, "Last 4 digits of SSN"),
  street: z.string().min(2),
  city: z.string().min(2),
  state: z.string().length(2),
  zip: z.string().regex(/^\d{5}(-\d{4})?$/),
});

export const step3Schema = z.object({
  employmentStatus: z.enum(["full_time", "part_time", "self_employed", "retired", "unemployed", "military", "benefits"]),
  employerName: z.string().optional(),
  monthlyIncome: z.coerce.number().min(0).max(1_000_000),
  payFrequency: z.enum(["weekly", "biweekly", "semimonthly", "monthly"]),
  nextPayDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
});

export const step4Schema = z.object({
  hasBankAccount: z.boolean(),
  bankAccountType: z.enum(["checking", "savings"]).optional(),
  directDeposit: z.boolean(),
});

export const step5Schema = z.object({
  tcpaConsent: z.literal(true, {
    errorMap: () => ({ message: "You must agree to be contacted to receive offers." }),
  }),
  ecConsent: z.literal(true, {
    errorMap: () => ({ message: "You must agree to electronic communications." }),
  }),
});

export const fullApplicationSchema = step1Schema
  .merge(step2Schema)
  .merge(step3Schema)
  .merge(step4Schema)
  .merge(step5Schema);

export type FullApplication = z.infer<typeof fullApplicationSchema>;

export const US_STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY","DC",
] as const;
