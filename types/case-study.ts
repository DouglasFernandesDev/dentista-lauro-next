import type { StaticImageData } from "next/image";

/** Um caso clínico de antes/depois exibido na seção "Trabalhos". */
export type CaseStudy = {
  /** Identificador estável, usado como `key` na listagem. */
  id: string;
  /** Título curto do caso (ex.: "Leve desalinhamento"). */
  title: string;
  /** Descrição do tratamento realizado. */
  description: string;
  /** Rótulo em fonte mono exibido no rodapé do card (ex.: "CASO 01 · RESINA"). */
  code: string;
  /** Selos clínicos curtos exibidos abaixo da descrição (ex.: "10 facetas"). */
  meta?: readonly string[];
  before: {
    src: StaticImageData;
    alt: string;
  };
  after: {
    src: StaticImageData;
    alt: string;
  };
};
