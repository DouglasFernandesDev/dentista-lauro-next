import { cn } from "@/lib/utils";

type ColorStripeProps = {
  /** Faixa do topo apenas: além de decorativa, funciona como indicador de
   * progresso de leitura (fixa, preenche a largura conforme a rolagem via
   * `animation-timeline: scroll(root)` — CSS puro, sem listener de scroll).
   * Sem suporte no navegador, ou com `prefers-reduced-motion`, permanece
   * uma faixa fixa e estática — nunca invisível. */
  progress?: boolean;
};

/**
 * Faixa de cor em gradiente — elemento de assinatura visual do site.
 * Decorativa: escondida de tecnologias assistivas.
 */
export function ColorStripe({ progress = false }: ColorStripeProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "h-2.5 w-full bg-[linear-gradient(to_right,var(--color-navy)_0_16.66%,var(--color-deep)_16.66%_33.33%,var(--color-steel)_33.33%_50%,var(--color-mid)_50%_66.66%,var(--color-sky)_66.66%_83.33%,var(--color-pale)_83.33%_100%)]",
        progress && "scroll-progress fixed inset-x-0 top-0 z-[60] h-1 origin-left",
      )}
    />
  );
}
