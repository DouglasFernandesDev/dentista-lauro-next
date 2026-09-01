import { ctaLabels, ctaSupportText } from "@/lib/site-config";

import { WhatsappCta } from "./whatsapp-cta";

export function CtaSection() {
  return (
    <section
      id="chamada-acao"
      aria-labelledby="cta-titulo"
      className="section-pad bg-[linear-gradient(135deg,var(--color-navy),var(--color-deep))] text-center text-white"
    >
      <div className="mx-auto max-w-[1160px]">
        <h2
          id="cta-titulo"
          className="font-title text-[clamp(1.875rem,4vw,2.875rem)] font-medium leading-[1.15]"
        >
          Vamos planejar o seu sorriso?
        </h2>
        <p className="mx-auto mt-5 max-w-[480px] text-[15px] leading-[1.7] text-pale">
          {ctaSupportText}
        </p>
        <WhatsappCta className="mt-8">{ctaLabels.schedule}</WhatsappCta>
      </div>
    </section>
  );
}
