@AGENTS.md

# Dentista-Lauro (Next.js)

Landing page institucional do **Dr. Lauro Santos** — odontologia estética, facetas
em resina composta (Araruama/RJ). Reescrita em Next.js do site estático original
(`../Dentista-Lauro`), preservando identidade visual e conteúdo.

Site **estático**, sem backend: os contatos são links diretos (WhatsApp,
Instagram, e-mail, Google Maps). Não há banco de dados, autenticação nem
formulários — as regras de Supabase/Drizzle/Zod em `.claude/rules/rules-global.md`
não se aplicam aqui.

## Stack

- Next.js 16 (App Router) · React 19 · TypeScript
- Tailwind CSS v4 (`app/globals.css`, tokens da marca em `@theme`)
- shadcn/ui (`components/ui/button.tsx`, util `cn` em `lib/utils.ts`)
- `next/font/google` (Cormorant Garamond, Inter, IBM Plex Mono)
- `next/image` (imagens locais em `public/imagens/`)
- Playwright (`e2e/`)

## Comandos

| Comando | Ação |
|---|---|
| `npm run dev` | servidor de desenvolvimento (Turbopack) em `localhost:3000` |
| `npm run build` | build de produção (inclui checagem de tipos) |
| `npm run start` | serve o build |
| `npm run lint` | ESLint (`eslint-config-next`) |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run test` | testes E2E Playwright (chromium) |

## Estrutura

```
app/
  layout.tsx           # fontes, Metadata API, viewport, JSON-LD (schema.org/Dentist), skip-link
  page.tsx             # Server Component: compõe as seções
  globals.css          # Tailwind v4 + tokens da marca (@theme) + base/utilitários
  _components/          # componentes da página (prefixo _ = privado, não vira rota)
    site-header.tsx     # "use client" — nav sticky, menu mobile acessível, scroll-spy
    use-scroll-spy.ts   # "use client" — hooks useScrollSpy / useScrolled
    hero.tsx            # capa + barra de perfil (Server)
    about-section.tsx   # #sobre (Server)
    works-section.tsx   # #trabalhos — lista de casos antes/depois (Server)
    cta-section.tsx     # #chamada-acao (Server)
    contact-section.tsx # #contato (Server)
    site-footer.tsx     # rodapé (Server)
    color-stripe.tsx    # faixa de cor em gradiente (assinatura visual)
    icons.tsx           # SVGs de marca (WhatsApp, Instagram)
components/ui/button.tsx # primitivo shadcn (compartilhado)
lib/
  site-config.ts       # conteúdo institucional + JSON-LD (fonte única de verdade)
  case-studies.ts      # casos clínicos (dados + imports estáticos das imagens)
  utils.ts             # cn()
types/case-study.ts    # tipo CaseStudy
public/imagens/        # capa, perfil, antes1..3, depois1..3
e2e/home.spec.ts       # smoke tests da home
```

## Convenções

- Server Components por padrão; `"use client"` só onde há estado/efeito/eventos
  (hoje: `site-header.tsx` e `use-scroll-spy.ts`).
- Conteúdo textual e dados ficam em `lib/` — nunca hardcoded nos componentes de UI.
- Dados estáticos no escopo do módulo (nunca recriados em render).
- `next/image` sempre com `sizes`; `priority` só nas imagens acima da dobra.
- Acessibilidade: landmarks, `aria-labelledby` por seção, foco visível,
  `prefers-reduced-motion` respeitado, links externos com `rel="noopener noreferrer"`.
- Guia completo de estilo/arquitetura: `.claude/rules/rules-global.md`.

## Deploy

Pronto para Vercel (saída 100% estática). `npm run build` gera a home pré-renderizada.
