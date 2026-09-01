import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionKickerProps = {
  children: ReactNode;
  /** `deep` para seções claras, `pale` para seções sobre fundo escuro/imagem. */
  tone?: "deep" | "pale";
  className?: string;
};

/**
 * Rótulo curto em fonte mono que abre cada seção, com um filete dourado
 * decorativo. Centraliza a marcação que antes estava repetida em cada seção.
 */
export function SectionKicker({
  children,
  tone = "deep",
  className,
}: SectionKickerProps) {
  return (
    <p
      className={cn(
        "mb-3.5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em]",
        tone === "pale" ? "text-pale" : "text-deep",
        className,
      )}
    >
      <span aria-hidden="true" className="h-px w-8 shrink-0 bg-gold" />
      {children}
    </p>
  );
}
