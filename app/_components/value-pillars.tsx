import type { CSSProperties } from "react";

import { pillars, pillarsSectionLabel } from "@/lib/site-config";

import { TiltCard } from "./tilt-card";

/**
 * Faixa de 3 pilares logo após o hero — mesma missão que antes era um
 * parágrafo de fechamento em "Sobre", agora em formato de cartão (padrão
 * observado em clínicas de referência como Benatti Odontologia e Apa
 * Aesthetic: proposta de valor em 3 blocos, visível antes de qualquer prova).
 */
export function ValuePillars() {
  return (
    <section aria-labelledby="pilares-titulo" className="section-pad bg-paler">
      <div className="mx-auto max-w-[1160px]">
        <h2 id="pilares-titulo" className="sr-only">
          {pillarsSectionLabel}
        </h2>
        <ul className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <li
              key={pillar.title}
              className="reveal perspective-distant"
              style={{ "--reveal-delay": index * 90 } as CSSProperties}
            >
              <TiltCard className="h-full rounded-2xl border border-gold/30 bg-white px-6 py-7 text-center shadow-raised transition-[transform,box-shadow] duration-300 hover:shadow-card">
                <h3 className="font-title text-lg font-semibold text-navy">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-[1.6] text-[#4d6478]">{pillar.description}</p>
              </TiltCard>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
