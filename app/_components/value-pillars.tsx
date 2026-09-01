import { pillars, pillarsSectionLabel } from "@/lib/site-config";

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
          {pillars.map((pillar) => (
            <li
              key={pillar.title}
              className="rounded-2xl border border-gold/30 bg-white px-6 py-7 text-center shadow-[0_4px_18px_rgba(7,27,51,0.05)]"
            >
              <h3 className="font-title text-lg font-semibold text-navy">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-[1.6] text-[#4d6478]">{pillar.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
