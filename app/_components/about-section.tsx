import { BadgeCheck } from "lucide-react";

import { aboutParagraphs, credentials } from "@/lib/site-config";

import { SectionKicker } from "./section-kicker";

export function AboutSection() {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-titulo"
      className="section-pad bg-paler"
    >
      <div className="mx-auto max-w-[1160px]">
        <SectionKicker>Sobre</SectionKicker>
        <h2
          id="sobre-titulo"
          className="max-w-[620px] font-title text-[clamp(1.875rem,3.6vw,2.75rem)] font-medium leading-[1.12] text-navy"
        >
          Facetas não escondem o dente — elas revelam o sorriso que já é seu.
        </h2>

        <div className="mt-10 grid gap-16 md:grid-cols-[1.1fr_0.9fr] md:gap-10 lg:gap-16">
          <div className="max-w-[520px]">
            {aboutParagraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="mb-[18px] text-base leading-[1.75] text-[#223140]"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <aside className="rounded-2xl bg-navy px-[26px] py-8 text-pale md:px-8 md:py-9">
            <h3 className="mb-[18px] font-title text-[22px] font-medium text-white md:text-2xl">
              Formação &amp; credenciais
            </h3>
            <ul className="flex flex-wrap gap-2">
              {credentials.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs leading-snug text-pale"
                >
                  <BadgeCheck className="size-3.5 shrink-0 text-gold" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
