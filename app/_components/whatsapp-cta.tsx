import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type WhatsappCtaProps = {
  children: ReactNode;
  /** Classes extras (ex.: espaçamento) — o estilo base é fixo para todos os CTAs. */
  className?: string;
};

/**
 * CTA primário para o WhatsApp, reutilizado no hero e no bloco de chamada final.
 * Centraliza a URL, os atributos de link externo e o texto acessível "(abre o
 * WhatsApp em nova aba)" — antes duplicados e divergentes entre as seções.
 */
export function WhatsappCta({ children, className }: WhatsappCtaProps) {
  return (
    <a
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2.5 rounded-lg bg-gold px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-navy shadow-[0_10px_24px_rgba(198,161,91,0.28)] transition duration-200 hover:bg-champagne motion-safe:hover:-translate-y-0.5",
        className,
      )}
    >
      {children}
      <ArrowRight className="size-4" aria-hidden="true" />
      <span className="sr-only">(abre o WhatsApp em nova aba)</span>
    </a>
  );
}
