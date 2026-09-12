import type { CSSProperties } from "react";

import { caseStudies } from "@/lib/case-studies";
import { worksDisclaimer, worksSection } from "@/lib/site-config";

import { CasePhotoCompare } from "./case-card";
import { SectionKicker } from "./section-kicker";
import { TiltCard } from "./tilt-card";

export function WorksSection() {
  return (
    <section id="trabalhos" aria-labelledby="trabalhos-titulo" className="section-pad">
      <div className="mx-auto max-w-[1160px]">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionKicker>{worksSection.kicker}</SectionKicker>
            <h2
              id="trabalhos-titulo"
              className="max-w-[620px] font-title text-[clamp(1.875rem,3.6vw,2.75rem)] font-medium leading-[1.12] text-navy"
            >
              {worksSection.title}
            </h2>
          </div>
          <p className="max-w-[380px] text-sm leading-[1.6] text-[#4d6478] md:pb-1">
            {worksSection.intro}
          </p>
        </div>

        <ul className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((caseStudy, index) => (
            <li
              key={caseStudy.id}
              className="reveal-3d perspective-distant"
              style={{ "--reveal-delay": index * 90 } as CSSProperties}
            >
              <TiltCard
                as="article"
                className="h-full overflow-hidden rounded-2xl bg-paler shadow-card transition-[transform,box-shadow] duration-300 hover:shadow-lifted"
              >
                <CasePhotoCompare caseStudy={caseStudy} />
                <h3 className="mx-5 mb-1.5 mt-[18px] font-title text-[19px] font-semibold text-navy">
                  {caseStudy.title}
                </h3>
                <p className="mx-5 text-[13px] leading-[1.6] text-[#4d6478]">
                  {caseStudy.description}
                </p>
                {caseStudy.meta ? (
                  <ul className="mx-5 mt-3 flex flex-wrap gap-1.5">
                    {caseStudy.meta.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-gold/50 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-deep"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                ) : null}
                <p className="mx-5 mb-[22px] mt-2.5 font-mono text-[11px] tracking-wide text-deep">
                  {caseStudy.code}
                </p>
              </TiltCard>
            </li>
          ))}
        </ul>

        {/* #6b7f90 (cor original) tinha contraste 4.14:1 sobre branco — abaixo
            do mínimo AA de 4,5:1 para texto normal. #4d6478 (já usado nas
            descrições dos casos, acima) passa e mantém a mesma paleta. */}
        <p className="mt-8 max-w-[680px] text-xs leading-[1.7] text-[#4d6478]">
          {worksDisclaimer}
        </p>
      </div>
    </section>
  );
}
