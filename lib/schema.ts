import { z } from "zod";

const required = (label: string) => ({
  errorMap: () => ({ message: `Please select ${label}.` }),
});

export const step1Schema = z.object({
  amount: z.coerce
    .number({ invalid_type_error: "Enter a loan amount." })
    .min(100, "Minimum loan amount is $100.")
    .max(50000, "Maximum loan amount is $50,000."),
  purpose: z.enum(
    [
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
    ],
    required("a loan purpose")
  ),
  creditRating: z.enum(
    ["excellent", "good", "fair", "poor"],
    required("how you rate your credit")
  ),
});

export const step2Schema = z.object({
  firstName: z.string().min(1, "Enter your first name.").max(50),
  lastName: z.string().min(1, "Enter your last name.").max(50),
  email: z.string().email("Enter a valid email address."),
  phone: z
    .string()
    .regex(/^[\d\s()+-]{10,20}$/, "Enter a valid phone number."),
  dob: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Enter your date of birth."),
  ssnLast4: z
    .string()
    .regex(/^\d{4}$/, "Enter the last 4 digits of your SSN."),
  street: z.string().min(2, "Enter your street address."),
  city: z.string().min(2, "Enter your city."),
  state: z.string().length(2, "Select your state."),
  zip: z.string().regex(/^\d{5}(-\d{4})?$/, "Enter a valid ZIP code."),
});

export const step3Schema = z.object({
  employmentStatus: z.enum(
    [
      "full_time",
      "part_time",
      "self_employed",
      "retired",
      "unemployed",
      "military",
      "benefits",
    ],
    required("your employment status")
  ),
  employerName: z.string().optional(),
  monthlyIncome: z.coerce
    .number({ invalid_type_error: "Enter your monthly income." })
    .min(0, "Income cannot be negative.")
    .max(1_000_000, "Enter a reasonable monthly income."),
  payFrequency: z.enum(
    ["weekly", "biweekly", "semimonthly", "monthly"],
    required("your pay frequency")
  ),
  nextPayDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Enter your next pay date."),
});

export const step4Schema = z.object({
  hasBankAccount: z.boolean(),
  bankAccountType: z.enum(["checking", "savings"]).optional(),
  directDeposit: z.boolean(),
});

export const step5Schema = z.object({
  tcpaConsent: z.literal(true, {
    errorMap: () => ({
      message: "You must agree to be contacted to receive offers.",
    }),
  }),
  ecConsent: z.literal(true, {
    errorMap: () => ({
      message: "You must agree to electronic communications.",
    }),
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
