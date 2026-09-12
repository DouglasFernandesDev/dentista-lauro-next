import { siteConfig } from "@/lib/site-config";

import { WhatsappIcon } from "./icons";

/**
 * Atalho fixo para o WhatsApp, visível durante toda a rolagem — padrão
 * comum em landing pages de conversão (reforça o mesmo CTA já presente no
 * cabeçalho, hero, chamada final e contato, sem depender de o visitante
 * chegar até uma seção específica).
 */
export function FloatingWhatsappButton() {
  return (
    <a
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp (abre em nova aba)"
      className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-gold text-navy shadow-float transition duration-200 hover:bg-champagne motion-safe:hover:-translate-y-0.5"
    >
      <WhatsappIcon className="size-7" aria-hidden="true" />
    </a>
  );
}
