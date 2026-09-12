import type { CSSProperties } from "react";
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

/** Escalona a entrada dos blocos do hero no carregamento — não depende de
 * scroll, só de `prefers-reduced-motion` (ver `.fade-up-in` em globals.css). */
function revealDelay(ms: number): CSSProperties {
  return { "--reveal-delay": ms } as CSSProperties;
}

export function Hero() {
  return (
    <section id="topo" aria-labelledby="hero-titulo">
      <div className="relative flex min-h-[340px] flex-col justify-end overflow-hidden px-[6%] pb-24 [block-size:52vh]">
        <Image
          src={capa}
          alt=""
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          className="hero-parallax -z-10 object-cover"
        />
        {/* Vinheta radial (reforça o canto onde o texto fica) + gradiente
            direcional navy→steel — substitui o overlay linear único, para
            o texto branco ler bem mesmo sobre trechos claros da foto. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[image:radial-gradient(140%_90%_at_12%_105%,rgba(7,27,51,0.28),transparent_60%),linear-gradient(125deg,rgba(7,27,51,0.85),rgba(46,111,156,0.38))]"
        />
        <div className="mx-auto w-full max-w-[1160px]">
          <div className="fade-up-in" style={revealDelay(0)}>
            <SectionKicker tone="pale">Facetas em resina composta</SectionKicker>
          </div>
          <h1
            id="hero-titulo"
            className="fade-up-in max-w-[640px] font-title text-[clamp(2.125rem,5vw,3.625rem)] font-medium italic leading-[1.08] text-white"
            style={revealDelay(90)}
          >
            Transforme seu sorriso sem perder a naturalidade.
          </h1>
          <p
            className="fade-up-in mt-4 max-w-[460px] text-[15px] leading-[1.7] text-pale"
            style={revealDelay(180)}
          >
            {heroTagline}
          </p>
          <div
            className="fade-up-in mt-7 flex flex-wrap items-center gap-3"
            style={revealDelay(260)}
          >
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

      {/* Cartão de credencial flutuante — substitui o avatar solto por uma
          superfície branca com leve inclinação 3D (perspective + rotateX),
          sobreposta à capa. É o elemento que passa "profissional" antes de
          qualquer texto ser lido. */}
      <div className="perspective-distant mx-auto -mt-12 max-w-[1160px] px-[6%] md:-mt-16">
        <div
          className="fade-up-in transform-3d flex flex-col items-start gap-4 rounded-2xl border-t-2 border-gold bg-white/95 p-5 shadow-float backdrop-blur-sm sm:flex-row sm:items-center sm:gap-6 md:p-7 md:[transform:rotateX(3deg)_translateZ(6px)]"
          style={revealDelay(360)}
        >
          <Image
            src={perfil}
            alt={`Foto de ${siteConfig.name}`}
            width={200}
            height={200}
            sizes="(min-width: 768px) 140px, 96px"
            placeholder="blur"
            className="size-24 shrink-0 rounded-full object-cover shadow-card md:size-[140px]"
          />
          <div>
            <h2 className="font-title text-[24px] font-semibold text-navy md:text-3xl">
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
      </div>
    </section>
  );
}
