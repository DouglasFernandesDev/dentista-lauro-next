import Image from "next/image";

import { caseStudies } from "@/lib/case-studies";
import { worksDisclaimer, worksSection } from "@/lib/site-config";

import { SectionKicker } from "./section-kicker";

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
          {caseStudies.map((caseStudy) => (
            <li key={caseStudy.id}>
              <article className="group h-full overflow-hidden rounded-2xl bg-paler shadow-[0_4px_18px_rgba(7,27,51,0.06)] transition-shadow duration-300 hover:shadow-[0_14px_34px_rgba(7,27,51,0.14)]">
                <div className="relative grid grid-cols-2">
                  {[caseStudy.before, caseStudy.after].map((photo, photoIndex) => (
                    <figure
                      key={photo.src.src}
                      className="relative m-0 aspect-4/5 overflow-hidden"
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(min-width: 1024px) 380px, (min-width: 768px) 45vw, 50vw"
                        placeholder="blur"
                        className="object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.04]"
                      />
                      <figcaption className="absolute bottom-2 left-2 rounded-sm bg-navy/75 px-2 py-[3px] font-mono text-[10px] uppercase tracking-wide text-white">
                        {photoIndex === 0 ? "Antes" : "Depois"}
                      </figcaption>
                    </figure>
                  ))}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gold/60"
                  />
                </div>
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
              </article>
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-[680px] text-xs leading-[1.7] text-[#6b7f90]">
          {worksDisclaimer}
        </p>
      </div>
    </section>
  );
}
