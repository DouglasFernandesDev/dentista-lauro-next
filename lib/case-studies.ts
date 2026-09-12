import type { CaseStudy } from "@/types/case-study";

import antes1 from "@/public/imagens/antes1.jpg";
import antes2 from "@/public/imagens/antes2.jpg";
import antes3 from "@/public/imagens/antes3.jpg";
import depois1 from "@/public/imagens/depois1.jpg";
// PENDÊNCIA (herdada do site estático original, não introduzida nesta
// reescrita): este arquivo é byte-a-byte idêntico a `public/imagens/capa.jpg`
// — a mesma foto clínica de close intraoral (com afastador) usada como fundo
// de tela cheia do hero (`app/_components/hero.tsx`). Precisa da foto real do
// "depois" do Caso 02, e revisar se o consentimento de uso de imagem do
// paciente dessa foto cobre também o uso como capa institucional (fora do
// contexto do caso clínico). Decisão registrada: manter assim por ora.
import depois2 from "@/public/imagens/depois2.jpg";
import depois3 from "@/public/imagens/depois3.jpg";

/**
 * Casos reais de pacientes atendidos no consultório, com autorização de uso de
 * imagem. Dados estáticos içados para o escopo do módulo (nunca recriados em
 * render) conforme as regras de performance do projeto.
 */
export const caseStudies: readonly CaseStudy[] = [
  {
    id: "caso-01",
    title: "Leve desalinhamento",
    description:
      "10 facetas em resina composta para corrigir um leve desalinhamento e elevar a autoestima da paciente.",
    code: "CASO 01 · RESINA",
    meta: ["10 facetas", "Resina composta", "Arcada superior"],
    before: { src: antes1, alt: "Sorriso da paciente antes do tratamento, com leve desalinhamento" },
    after: { src: depois1, alt: "Sorriso da paciente depois das 10 facetas em resina composta" },
  },
  {
    id: "caso-02",
    title: "Correção de cor e desgaste",
    description:
      "9 facetas em resina composta para recuperar estrutura e anatomia do dente.",
    code: "CASO 02 · RESINA",
    meta: ["9 facetas", "Resina composta", "Cor + anatomia"],
    before: { src: antes2, alt: "Sorriso do paciente antes do tratamento, com desgaste e alteração de cor" },
    after: { src: depois2, alt: "Sorriso do paciente depois das 9 facetas em resina composta" },
  },
  {
    id: "caso-03",
    title: "Harmonização do sorriso",
    description:
      "Menos exagero, mais equilíbrio. Um sorriso rejuvenescido sem perder sua essência.",
    code: "CASO 03 · RESINA",
    meta: ["Harmonização", "Resina composta", "Ajuste de proporção"],
    before: { src: antes3, alt: "Sorriso da paciente antes da harmonização" },
    after: { src: depois3, alt: "Sorriso da paciente depois da harmonização, mais equilibrado" },
  },
] as const;
