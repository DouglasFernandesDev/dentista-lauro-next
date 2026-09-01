/**
 * Fonte única de verdade para o conteúdo institucional do site.
 * Mantém dados de negócio separados da camada de UI.
 */

export const siteConfig = {
  name: "Dr. Lauro Santos",
  shortName: "Dr. Lauro Santos · Facetas",
  role: "Especialista em Facetas em Resina Composta",
  cro: "CRO-RJ 55.848",
  url: "https://drlaurosantos.com.br",
  description:
    "Facetas em resina composta com naturalidade. Odontologia estética humanizada em Araruama/RJ — planejamento individual para cada sorriso.",
  phoneDisplay: "(22) 99827-7917",
  whatsappUrl: "https://wa.me/5522998277917",
  instagramUrl: "https://www.instagram.com/drlaurosantos",
  email: "laurosanttos@gmail.com",
  address: {
    street: "Rua Henrique Macedo Soares, 137",
    district: "Centro",
    city: "Araruama",
    state: "RJ",
    zip: "28970-000",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Rua+Henrique+Macedo+Soares,+137,+Centro,+Araruama+-+RJ,+28970-000",
  hours: "Seg a sex · 17:30 às 22h — Sáb e dom · 9h às 18h",
} as const;

export const navLinks = [
  { href: "#trabalhos", label: "Trabalhos" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
] as const;

/** Frase de apoio abaixo do título do hero. */
export const heroTagline =
  "Planejamento individual para cada caso — um resultado que continua parecendo você.";

/** Rótulos dos botões de chamada para ação (reutilizados no hero e no bloco final). */
export const ctaLabels = {
  schedule: "Agendar avaliação",
  seeWorks: "Ver transformações",
} as const;

/** Textos da seção de casos clínicos. */
export const worksSection = {
  kicker: "Casos clínicos",
  title: "Antes e depois: cada caso, um planejamento próprio.",
  intro:
    "Resultados reais de pacientes do consultório. Cada caso tem um planejamento próprio.",
} as const;

/** Textos da seção "Como funciona". */
export const howItWorks = {
  kicker: "Como funciona",
  title: "Do primeiro contato ao sorriso pronto.",
  stepPrefix: "Etapa",
} as const;

/** Rótulo acessível da faixa de pilares (sem heading visível). */
export const pillarsSectionLabel = "Como trabalho";

/**
 * Pilares da missão profissional, exibidos como cartões logo após o hero.
 * Derivados do antigo texto de fechamento da seção "Sobre" (mesmo conteúdo,
 * em formato mais visual — ver comparação com sites de referência).
 */
export const pillars = [
  {
    title: "Atendimento humanizado",
    description: "Escuta ativa e planejamento sem pressa, caso a caso.",
  },
  {
    title: "Excelência técnica",
    description:
      "Formação contínua em facetas, harmonização orofacial e endodontia mecanizada.",
  },
  {
    title: "Resultados naturais",
    description: "Sorrisos que continuam parecendo seus — sem padronização.",
  },
] as const;

/**
 * Etapas do tratamento, exibidas na seção "Como funciona".
 * `icon` é o nome do ícone — o componente resolve nome → ícone com fallback,
 * então adicionar/remover etapas aqui nunca quebra o render.
 */
export const howItWorksSteps = [
  {
    title: "Avaliação",
    icon: "calendar",
    description:
      "Conversamos sobre o que te incomoda no sorriso e o que você gostaria de mudar.",
  },
  {
    title: "Planejamento",
    icon: "clipboard",
    description: "Um plano de tratamento pensado para o seu caso — sem modelos prontos.",
  },
  {
    title: "Execução",
    icon: "sparkles",
    description:
      "As facetas em resina composta são feitas diretamente no consultório, sem necessidade de laboratório externo.",
  },
  {
    title: "Acompanhamento",
    icon: "repeat",
    description: "Retorno para ajustes finos e manutenção do resultado ao longo do tempo.",
  },
] as const;

/** Texto de apoio do bloco de chamada final. */
export const ctaSupportText =
  "Conversamos sobre o que você gostaria de mudar no seu sorriso e montamos, juntos, um plano de tratamento pensado só para o seu caso.";

/**
 * Aviso exibido na seção de casos clínicos. Atende à Resolução CFO nº 196/2019,
 * que restringe a divulgação de imagens de "antes e depois" ao público leigo:
 * as imagens só aparecem com autorização e acompanhadas de ressalva de que o
 * resultado varia conforme cada caso. Revisar com a assessoria jurídica.
 */
export const worksDisclaimer =
  "Imagens reais de pacientes, publicadas mediante autorização por escrito de uso de imagem (Resolução CFO nº 196/2019). Cada tratamento é individual: os resultados variam conforme o caso clínico e não representam promessa de resultado.";

export const profileHighlights = [
  "CRO-RJ 55.848",
  "Pós-graduando em Ortodontia",
  "Sorrisos transformados",
] as const;

export const aboutParagraphs = [
  "Sou cirurgião-dentista com 3 anos de experiência na Saúde da Família e em consultório particular, dedicado a oferecer tratamentos que unem saúde, estética e naturalidade.",
  "Minha maior paixão é a odontologia estética, especialmente as facetas em resina composta. Acredito que um sorriso bem planejado é capaz de transformar a autoestima e a qualidade de vida das pessoas.",
  "Busco constante aperfeiçoamento profissional. Atualmente curso pós-graduação em Ortodontia e possuo capacitações em Facetas em Resina Composta, Acabamento e Polimento Estético, Harmonização Orofacial e Endodontia Mecanizada.",
] as const;

export const credentials = [
  "Cursando pós-graduação em Ortodontia",
  "Imersão em Facetas em Resina Composta",
  "Aperfeiçoamento em Acabamento e Polimento",
  "Imersão em Endodontia Mecanizada",
  "Introdução à Harmonização Orofacial",
] as const;

/** JSON-LD (schema.org/Dentist) para enriquecer o resultado de busca. */
export function buildStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: `${siteConfig.name} — Odontologia Estética`,
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}/imagens/perfil.jpg`,
    telephone: "+55-22-99827-7917",
    email: siteConfig.email,
    priceRange: "$$",
    medicalSpecialty: "Dentistry",
    knowsLanguage: "pt-BR",
    areaServed: [
      { "@type": "City", name: "Araruama" },
      { "@type": "AdministrativeArea", name: "Região dos Lagos — RJ" },
    ],
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "Facetas em resina composta",
      },
      {
        "@type": "MedicalProcedure",
        name: "Acabamento e polimento estético",
      },
      {
        "@type": "MedicalProcedure",
        name: "Harmonização orofacial",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "BR",
    },
    sameAs: [siteConfig.instagramUrl],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "17:30",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
  };
}
