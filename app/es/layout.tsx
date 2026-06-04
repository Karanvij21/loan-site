import { SetHtmlLang } from "@/components/SetHtmlLang";

/**
 * Wraps every /es/* route so the document language attribute matches
 * the rendered content. See SetHtmlLang for the trade-off explanation.
 */
export default function EsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SetHtmlLang lang="es" />
      {children}
    </>
  );
}
