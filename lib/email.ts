import sgMail from "@sendgrid/mail";
import { siteConfig } from "@/lib/site";

const apiKey = process.env.SENDGRID_API_KEY;
if (apiKey) sgMail.setApiKey(apiKey);

/**
 * Application confirmation. This is a transactional email (user-initiated),
 * but we still include CAN-SPAM elements (postal address, opt-out link) for
 * safety because some mail providers apply marketing-class rules to all bulk
 * mail and because we may layer marketing follow-ups onto the same address.
 */
export async function sendApplicationConfirmation(to: string, firstName: string, amount: number) {
  if (!apiKey || !process.env.SENDGRID_FROM_EMAIL) return { ok: false, skipped: true };

  const optOutUrl = `${siteConfig.url}/opt-out`;
  const privacyUrl = `${siteConfig.url}/privacy`;
  const safeFirstName = (firstName || "there").replace(/[<>]/g, "");
  const safeAmount = amount.toLocaleString("en-US");

  try {
    await sgMail.send({
      to,
      from: { email: process.env.SENDGRID_FROM_EMAIL, name: siteConfig.name },
      replyTo: siteConfig.email,
      subject: `We received your loan request, ${safeFirstName}`,
      text: [
        `Hi ${safeFirstName},`,
        ``,
        `Thanks for your request for $${safeAmount}. We're matching you with offers from our lender network. You'll hear from us shortly.`,
        ``,
        `What happens next:`,
        `  1. We forward your request to our partner network, including LendingTree.`,
        `  2. Lenders respond with offers. Some may contact you directly.`,
        `  3. Compare offers, then accept the one that fits.`,
        ``,
        `Important notes:`,
        `  - This is a soft credit inquiry. Your credit score is not affected.`,
        `  - Submitting a request does not guarantee approval, amount, or APR.`,
        `  - ${siteConfig.name} is not a lender; we are a free online marketplace.`,
        ``,
        `Need help? ${siteConfig.email}`,
        ``,
        `--`,
        `${siteConfig.name}`,
        siteConfig.address,
        ``,
        `Opt out of marketing communications: ${optOutUrl}`,
        `Privacy policy: ${privacyUrl}`,
      ].join("\n"),
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #0A0D0B; line-height: 1.55;">
          <p>Hi ${safeFirstName},</p>
          <p>Thanks for your request for <strong>$${safeAmount}</strong>. We&rsquo;re matching you with offers from our lender network. You&rsquo;ll hear from us shortly.</p>

          <h3 style="font-size: 14px; margin-top: 24px; margin-bottom: 8px;">What happens next</h3>
          <ol style="padding-left: 20px; margin: 0;">
            <li>We forward your request to our partner network, including LendingTree.</li>
            <li>Lenders respond with offers. Some may contact you directly.</li>
            <li>Compare offers, then accept the one that fits.</li>
          </ol>

          <h3 style="font-size: 14px; margin-top: 24px; margin-bottom: 8px;">Important reminders</h3>
          <ul style="padding-left: 20px; margin: 0; font-size: 13px; color: #2A2E2B;">
            <li>This is a soft credit inquiry. Your credit score is not affected.</li>
            <li>Submitting a request does not guarantee approval, amount, or APR.</li>
            <li>${siteConfig.name} is not a lender; we are a free online marketplace.</li>
          </ul>

          <p style="margin-top: 28px;">Need help? <a href="mailto:${siteConfig.email}" style="color: #0E3B2E;">${siteConfig.email}</a></p>

          <hr style="border: 0; border-top: 1px solid #E5DBC0; margin: 32px 0 16px;" />
          <div style="font-size: 11px; line-height: 1.5; color: #5A5F5B;">
            <p style="margin: 0 0 8px;"><strong style="color: #0A0D0B;">${siteConfig.name}</strong><br/>${siteConfig.address}</p>
            <p style="margin: 0 0 4px;">
              <a href="${optOutUrl}" style="color: #5A5F5B; text-decoration: underline;">Opt out of marketing communications</a>
              &nbsp;·&nbsp;
              <a href="${privacyUrl}" style="color: #5A5F5B; text-decoration: underline;">Privacy policy</a>
            </p>
            <p style="margin: 8px 0 0;">You received this email because you submitted a loan request through ${siteConfig.name}.</p>
          </div>
        </div>
      `,
    });
    return { ok: true };
  } catch (e: unknown) {
    return { ok: false, error: e instanceof Error ? e.message : "send failed" };
  }
}
