import Image from "next/image";

import {
  ctaLabels,
  heroTagline,
  profileHighlights,
  siteConfig,
} from "@/lib/site-config";

import { SectionKicker } from "./section-kicker";
import { WhatsappCta } from "./whatsapp-cta";

import capa from "@/public/imagens/capa.jpg";
import perfil from "@/public/imagens/perfil.jpg";

export function Hero() {
  return (
    <section id="topo" aria-labelledby="hero-titulo">
      <div className="relative flex min-h-[340px] flex-col justify-end px-[6%] pb-24 [block-size:52vh]">
        <Image
          src={capa}
          alt=""
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          className="-z-10 object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(7,27,51,0.78),rgba(46,111,156,0.35))]"
        />
        <div className="mx-auto w-full max-w-[1160px]">
          <SectionKicker tone="pale">Facetas em resina composta</SectionKicker>
          <h1
            id="hero-titulo"
            className="max-w-[640px] font-title text-[clamp(2.125rem,5vw,3.625rem)] font-medium italic leading-[1.08] text-white"
          >
            Transforme seu sorriso sem perder a naturalidade.
          </h1>
          <p className="mt-4 max-w-[460px] text-[15px] leading-[1.7] text-pale">
            {heroTagline}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <WhatsappCta>{ctaLabels.schedule}</WhatsappCta>
            <a
              href="#trabalhos"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition duration-200 hover:border-white/60 hover:bg-white/10"
            >
              {ctaLabels.seeWorks}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto -mt-10 flex max-w-[1160px] flex-col items-start gap-4 px-[6%] md:-mt-16 md:flex-row md:items-end md:gap-6">
        <Image
          src={perfil}
          alt={`Foto de ${siteConfig.name}`}
          width={430}
          height={430}
          priority
          sizes="(min-width: 768px) 430px, 250px"
          placeholder="blur"
          className="size-[250px] shrink-0 rounded-full border-[5px] border-white object-cover shadow-[0_12px_28px_rgba(7,27,51,0.25)] md:size-[430px]"
        />
        <div className="pb-3.5">
          <h2 className="font-title text-[26px] font-semibold text-navy md:text-3xl">
            {siteConfig.name}
          </h2>
          <p className="mt-1 text-[13px] font-semibold uppercase tracking-wide text-deep">
            {siteConfig.role}
          </p>
          <ul className="mt-2.5 flex flex-wrap gap-x-[18px] gap-y-1.5">
            {profileHighlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-1.5 font-mono text-xs text-deep before:text-gold before:content-['•']"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
