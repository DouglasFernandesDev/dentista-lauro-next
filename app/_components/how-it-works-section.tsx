import type { ComponentType, CSSProperties, SVGProps } from "react";
import { CalendarCheck, ClipboardList, RefreshCcw, Sparkles } from "lucide-react";

import { howItWorks, howItWorksSteps } from "@/lib/site-config";

import { SectionKicker } from "./section-kicker";
import { TiltCard } from "./tilt-card";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

/** Nome do ícone (em `howItWorksSteps`) → componente. Associação por chave, não por índice. */
const STEP_ICONS: Record<string, IconComponent> = {
  calendar: CalendarCheck,
  clipboard: ClipboardList,
  sparkles: Sparkles,
  repeat: RefreshCcw,
};

/**
 * Etapas do tratamento — reduz a incerteza de quem nunca fez facetas.
 * Padrão presente, de forma independente, em Clínica KI, Benatti Odontologia
 * e Apa Aesthetic (todas descrevem o processo em etapas, sem citar valores).
 */
export function HowItWorksSection() {
  return (
    <section id="como-funciona" aria-labelledby="como-funciona-titulo" className="section-pad">
      <div className="mx-auto max-w-[1160px]">
        <SectionKicker>{howItWorks.kicker}</SectionKicker>
        <h2
          id="como-funciona-titulo"
          className="max-w-[620px] font-title text-[clamp(1.875rem,3.6vw,2.75rem)] font-medium leading-[1.12] text-navy"
        >
          {howItWorks.title}
        </h2>

        <ol className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          {howItWorksSteps.map((step, index) => {
            const Icon = STEP_ICONS[step.icon] ?? ClipboardList;
            return (
              <li
                key={step.title}
                className="reveal perspective-distant"
                style={{ "--reveal-delay": index * 90 } as CSSProperties}
              >
                <TiltCard className="h-full rounded-2xl border border-[#d7e6f2] bg-paler px-6 py-7 transition-[transform,box-shadow] duration-300 hover:shadow-card">
                  <span className="flex size-10 items-center justify-center rounded-full bg-navy text-gold">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <p className="mt-4 font-mono text-[11px] uppercase tracking-wide text-deep">
                    {howItWorks.stepPrefix} {index + 1}
                  </p>
                  <h3 className="mt-1 font-title text-lg font-semibold text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-[1.6] text-[#4d6478]">
                    {step.description}
                  </p>
                </TiltCard>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
