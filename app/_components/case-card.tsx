"use client";

import { useState } from "react";
import Image from "next/image";

import type { CaseStudy } from "@/types/case-study";
import { cn } from "@/lib/utils";

type CasePhotoCompareProps = {
  caseStudy: CaseStudy;
};

/**
 * Comparador antes/depois de um caso clínico: as duas fotos ocupam o mesmo
 * quadro, alternadas por toque/clique (cross-fade + leve escala) — não um
 * slider de arrastar. Os pares de fotos hoje têm enquadramentos
 * incompatíveis (ex.: `antes1` é paisagem 4032×3024, `depois1` é retrato
 * 1671×2228; ver `lib/case-studies.ts`), e um slider de handle exporia
 * esse descompasso lado a lado.
 *
 * Acessível: é um `<button>` com `aria-pressed`, operável por teclado, e o
 * rótulo (`aria-label`) descreve o estado atual usando os `alt` de
 * `case-studies.ts` — as imagens em si ficam `alt=""` para não duplicar
 * esse texto na leitura de tela. Com `prefers-reduced-motion`, a troca é
 * instantânea (ver `.case-photo-after` em globals.css).
 */
export function CasePhotoCompare({ caseStudy }: CasePhotoCompareProps) {
  const [isShowingAfter, setIsShowingAfter] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const activeAlt = isShowingAfter ? caseStudy.after.alt : caseStudy.before.alt;
  const stateWord = isShowingAfter ? "Depois" : "Antes";
  const nextStateWord = isShowingAfter ? "antes" : "depois";

  // O início do rótulo acessível repete, ao pé da letra e na mesma ordem, os
  // textos visíveis do card — o selo "Antes"/"Depois" e, antes da primeira
  // interação, o selo "Toque para ver o depois" — para não divergir do texto
  // visível (regra de acessibilidade "nome no rótulo", WCAG 2.5.3, usada por
  // quem navega por comando de voz). O restante é só contexto extra (o `alt`
  // da foto e a próxima ação), o que a regra permite.
  const visiblePrefix = !hasInteracted ? `${stateWord} Toque para ver o depois` : stateWord;
  const label = `${visiblePrefix}. ${activeAlt}. Toque para ver ${nextStateWord}.`;

  return (
    <button
      type="button"
      onClick={() => {
        setIsShowingAfter((current) => !current);
        setHasInteracted(true);
      }}
      aria-pressed={isShowingAfter}
      aria-label={label}
      className="relative block aspect-4/5 w-full overflow-hidden"
    >
      {/* "Antes" — base, sempre visível por baixo. */}
      <Image
        src={caseStudy.before.src}
        alt=""
        fill
        sizes="(min-width: 1024px) 360px, (min-width: 768px) 45vw, 90vw"
        placeholder="blur"
        className="object-cover"
      />
      {/* "Depois" — sobreposta; cross-fade + escala controlados por classe
          de estado, não por scroll nem por keyframe de entrada. */}
      <Image
        src={caseStudy.after.src}
        alt=""
        fill
        sizes="(min-width: 1024px) 360px, (min-width: 768px) 45vw, 90vw"
        placeholder="blur"
        className={cn("case-photo-after object-cover", isShowingAfter && "case-photo-after--visible")}
      />

      <span
        aria-hidden="true"
        className="absolute bottom-2 left-2 rounded-sm bg-navy/75 px-2 py-[3px] font-mono text-[10px] uppercase tracking-wide text-white"
      >
        {isShowingAfter ? "Depois" : "Antes"}
      </span>

      {!hasInteracted ? (
        <>
          {/* Espaço literal entre os dois `<span>`. O `aria-label` acima já
              define sozinho o nome acessível (os filhos não entram nessa
              conta) — mas a regra de auditoria "label-content-name-mismatch"
              (WCAG 2.5.3) compara o TEXTO VISÍVEL renderizado (ignorando
              `aria-hidden`, porque é isso que um usuário de comando de voz
              vê) contra o `aria-label`, exigindo que apareça como substring
              contígua nele. Sem este espaço, o `textContent` dos dois `span`
              adjacentes vira "AntesToque..." (colado, sem separador — JSX
              não insere espaço entre elementos irmãos só por estarem em
              linhas diferentes no código), o que não bate com o "Antes
              Toque..." (com espaço) do `aria-label` e falha a auditoria.
              Confirmado batendo o antes/depois no Lighthouse. */}
          {" "}
          <span
            aria-hidden="true"
            className="absolute bottom-2 right-2 rounded-full border border-gold/60 bg-navy/75 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-champagne"
          >
            Toque para ver o depois
          </span>
        </>
      ) : null}
    </button>
  );
}
