"use client";

import type { PointerEvent as ReactPointerEvent, ReactNode } from "react";
import { useCallback, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  /** Elemento raiz renderizado — `article` para os cards de caso (mantém a
   * semântica de `<article>` do card), `div` nos demais. */
  as?: "div" | "article";
};

/** Inclinação máxima, em graus — acima disso deixa de parecer profundidade
 * e passa a parecer defeito. */
const MAX_TILT_DEGREES = 6;

/**
 * Envolve um card renderizado no servidor (passado como `children`) e
 * escreve `--tilt-x`/`--tilt-y` no elemento conforme o ponteiro se move —
 * o estilo do tilt em si fica em `.tilt-card` (globals.css), este
 * componente só lê a posição. O card continua Server Component; só este
 * wrapper fino precisa ser `"use client"`.
 *
 * Desliga sozinho em toque/caneta (só reage a `pointerType === "mouse"`) e
 * com `prefers-reduced-motion: reduce`/`pointer: coarse` (guarda em CSS) —
 * no celular o efeito vira só a elevação de sombra do hover.
 */
export function TiltCard({ children, className, as = "div" }: TiltCardProps) {
  const frame = useRef<number | null>(null);

  // Cancela um rAF pendente se o card desmontar entre o `pointermove` e o
  // próximo frame (ex.: navegação rápida) — nunca chega a lançar erro (o nó
  // continuaria existindo via o closure do evento), mas evita um rAF órfão.
  useEffect(() => {
    return () => {
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, []);

  const handlePointerMove = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    // O CSS já não aplica nenhum tilt sob `prefers-reduced-motion: reduce`
    // (ver `.tilt-card` em globals.css) — checar aqui também evita recalcular
    // a posição do ponteiro e agendar rAF à toa a cada movimento do mouse.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const target = event.currentTarget;
    const { left, top, width, height } = target.getBoundingClientRect();
    const px = (event.clientX - left) / width;
    const py = (event.clientY - top) / height;

    if (frame.current !== null) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      target.style.setProperty("--tilt-x", `${(0.5 - py) * 2 * MAX_TILT_DEGREES}`);
      target.style.setProperty("--tilt-y", `${(px - 0.5) * 2 * MAX_TILT_DEGREES}`);
    });
  }, []);

  const handlePointerLeave = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    event.currentTarget.style.setProperty("--tilt-x", "0");
    event.currentTarget.style.setProperty("--tilt-y", "0");
  }, []);

  const Tag = as;

  return (
    <Tag
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={cn("tilt-card", className)}
    >
      {children}
    </Tag>
  );
}
