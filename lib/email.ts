import sgMail from "@sendgrid/mail";
import { siteConfig } from "@/lib/site";

const apiKey = process.env.SENDGRID_API_KEY;
if (apiKey) sgMail.setApiKey(apiKey);

export async function sendApplicationConfirmation(to: string, firstName: string, amount: number) {
  if (!apiKey || !process.env.SENDGRID_FROM_EMAIL) return { ok: false, skipped: true };
  try {
    await sgMail.send({
      to,
      from: { email: process.env.SENDGRID_FROM_EMAIL, name: siteConfig.name },
      subject: `We received your loan request, ${firstName}`,
      text: `Hi ${firstName},\n\nThanks for your request for $${amount.toLocaleString()}. We're matching you with offers from our lender network. You'll hear from us shortly.\n\nThe ${siteConfig.name} team`,
      html: `<p>Hi ${firstName},</p><p>Thanks for your request for <strong>$${amount.toLocaleString()}</strong>. We're matching you with offers from our lender network. You'll hear from us shortly.</p><p>The ${siteConfig.name} team</p>`,
    });
    return { ok: true };
  } catch (e: unknown) {
    return { ok: false, error: e instanceof Error ? e.message : "send failed" };
  }
}
