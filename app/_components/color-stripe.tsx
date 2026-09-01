/**
 * Faixa de cor em gradiente — elemento de assinatura visual do site.
 * Decorativa: escondida de tecnologias assistivas.
 */
export function ColorStripe() {
  return (
    <div
      aria-hidden="true"
      className="h-2.5 w-full bg-[linear-gradient(to_right,var(--color-navy)_0_16.66%,var(--color-deep)_16.66%_33.33%,var(--color-steel)_33.33%_50%,var(--color-mid)_50%_66.66%,var(--color-sky)_66.66%_83.33%,var(--color-pale)_83.33%_100%)]"
    />
  );
}
