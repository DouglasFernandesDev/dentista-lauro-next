# Dr. Lauro Santos — Odontologia Estética

Site institucional (landing page) do consultório do Dr. Lauro Santos, focado em
**facetas em resina composta**. Reescrito em Next.js a partir do site estático
original, mantendo a identidade visual (paleta azul monocromática, faixa de cor
em gradiente, tipografia serif/mono) e todo o conteúdo.

## Tecnologias

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** com tokens da marca em `app/globals.css` (`@theme`)
- **shadcn/ui** para o primitivo `Button`
- **next/font** (Cormorant Garamond, Inter, IBM Plex Mono) — sem requisições externas
- **next/image** para todas as imagens
- **Playwright** para testes end-to-end

## Começando

```bash
npm install
npm run dev
```

Abra <http://localhost:3000>.

## Scripts

| Script | Descrição |
|---|---|
| `npm run dev` | desenvolvimento com Turbopack |
| `npm run build` | build de produção (checa tipos) |
| `npm run start` | serve o build de produção |
| `npm run lint` | ESLint |
| `npm run typecheck` | verificação de tipos (`tsc --noEmit`) |
| `npm run test` | testes E2E (Playwright / chromium) |

> Na primeira execução dos testes: `npx playwright install chromium`.

## Estrutura

```
app/
  layout.tsx            Fontes, metadados (SEO), viewport, JSON-LD, skip-link
  page.tsx             Composição das seções (Server Component)
  globals.css          Tailwind v4 + design tokens da marca
  _components/          Componentes da página (nav, hero, sobre, trabalhos, CTA, contato, rodapé)
components/ui/          Primitivos shadcn
lib/                   site-config.ts (conteúdo), case-studies.ts (casos), utils.ts
types/                 Tipos compartilhados
public/imagens/        Imagens (capa, perfil, antes/depois)
e2e/                   Testes Playwright
```

Detalhes de arquitetura e convenções: veja [`CLAUDE.md`](./CLAUDE.md) e
[`.claude/rules/rules-global.md`](./.claude/rules/rules-global.md).

## Conteúdo

Todo o texto institucional, dados de contato e casos clínicos ficam centralizados
em [`lib/site-config.ts`](./lib/site-config.ts) e
[`lib/case-studies.ts`](./lib/case-studies.ts). Para atualizar telefone, endereço,
horário, credenciais ou adicionar um novo caso antes/depois, edite apenas esses
arquivos (e coloque as imagens novas em `public/imagens/`).

## Deploy

Projeto 100% estático — pronto para a [Vercel](https://vercel.com/new) sem
configuração adicional. O build pré-renderiza a página inicial.
