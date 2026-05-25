import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Opt Out / Do Not Call",
  description: `Opt out of email, SMS, and phone communications from ${siteConfig.name}. Stop, unsubscribe, and Do Not Call instructions.`,
  alternates: { canonical: "/opt-out" },
};

export default function OptOutPage() {
  return (
    <>
      <h1>Opt Out &amp; Do Not Call</h1>
      <p><em>Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</em></p>

      <p>
        You can stop receiving marketing communications from {siteConfig.name} at any time. This page summarizes how to opt out of each channel.
      </p>

      <h2>Email opt-out</h2>
      <p>
        Click the <strong>&ldquo;unsubscribe&rdquo;</strong> link at the bottom of any marketing email we send. You can also email{" "}
        <a href={`mailto:${siteConfig.email}?subject=Email%20Unsubscribe%20Request`}>{siteConfig.email}</a>{" "}
        with the subject &ldquo;Email Unsubscribe Request.&rdquo;
      </p>
      <p>
        We will process your request within 10 business days as required by the CAN-SPAM Act. You may still receive transactional emails (such as your application confirmation, account updates, and required legal notices).
      </p>

      <h2>SMS / text-message opt-out</h2>
      <p>
        Reply <strong>STOP</strong> to any text message from us. You will receive a single confirmation message and then no further marketing texts. Reply <strong>HELP</strong> for help. Standard message and data rates may apply.
      </p>

      <h2>Phone / Do Not Call (DNC)</h2>
      <p>
        To be added to our internal Do Not Call list, email{" "}
        <a href={`mailto:${siteConfig.email}?subject=Do%20Not%20Call%20Request`}>{siteConfig.email}</a>{" "}
        with the subject &ldquo;Do Not Call Request&rdquo; and include the phone number(s) you want suppressed. We will process within 30 days.
      </p>
      <p>
        You may also register on the federal Do Not Call Registry at{" "}
        <a href="https://www.donotcall.gov" target="_blank" rel="noopener noreferrer">donotcall.gov</a>.
      </p>

      <h2>What opting out does not do</h2>
      <p>
        Opting out of marketing communications from us does <strong>not</strong>:
      </p>
      <ul>
        <li>Stop transactional communications about your loan request, application status, or any active loan with a lender.</li>
        <li>Affect communications from lenders you have been matched with. To stop communications from a specific lender, contact that lender directly.</li>
        <li>Delete your personal information from our systems. To request deletion, see our <a href="/privacy">Privacy Policy</a>.</li>
        <li>Stop sharing of your information with lenders. To opt out of sharing, see our <a href="/do-not-sell">Do Not Sell My Personal Information</a> page.</li>
      </ul>

      <h2>Contacting individual lenders</h2>
      <p>
        After we forward your request, you will be contacted by one or more lenders in our partner network (including LendingTree and lenders in their network). Each lender has its own communications and opt-out procedures. If you no longer wish to hear from a specific lender, contact that lender directly and request to be added to their DNC list.
      </p>

      <h2>Confirmation</h2>
      <p>
        We will send a confirmation when your opt-out request has been processed. If you have not received confirmation within 30 days, email{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>

      <h2>Contact</h2>
      <p>
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>{" "}
        ·{" "}
        <a href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}>{siteConfig.phone}</a>
      </p>

      <p><em>This page is a good-faith template summarizing federal opt-out requirements (CAN-SPAM, TCPA, FTC DNC rules). It is not legal advice. Consult counsel before launching in production.</em></p>
    </>
  );
}
