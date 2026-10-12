# Plus One — Arquitetura React (etapa 1)

## Estado das páginas
| Rota | Origem | Estado |
|---|---|---|
| `/` | Institucional aprovada (HTML/CSS separado em componentes React) | **APROVADA VISUALMENTE** — conferir equivalência no build |
| `/english-profile` | V28 web, incorporada temporariamente em iframe | **EM TESTE** — lógica V28 preservada, não migrada |
| `/faq` | V28 web, incorporada temporariamente em iframe | **EM TESTE** |
| `/app` | V28 mobile, incorporada temporariamente em iframe | **REFERÊNCIA MOBILE** — não finalizada |
| `/app/faq` | V28 mobile, incorporada temporariamente em iframe | **EM TESTE** |
| `/area-do-aluno` | Placeholder | **FUTURO** |

## Rodar localmente
1. Instale Node.js 20+.
2. `npm install`
3. `npm run dev` (abre no endereço indicado pelo Vite)
4. `npm run build` para validar o projeto.

## GitHub Pages
O `vite.config.ts` está configurado para o repositório `plus-one-english`, base `/plus-one-english/`.
Publicar a pasta `dist/` gerada por `npm run build` (ex.: GitHub Actions ou `npm run deploy` com gh-pages e credenciais configuradas). **Não suba o ZIP e espere que GitHub Pages compile sozinho**. A branch de Pages precisa receber o build ou workflow.

## Responsividade e prioridade por dispositivo
A rota `/` é única e responsiva por CSS: Chrome, Safari e outros navegadores recebem o mesmo app, adaptado à largura do viewport, **sem redirecionamento por user-agent**. A rota `/app` mantém o legado mobile V28 como referência. Primeiro validaremos a versão web; depois a mobile, com componentes responsivos ou variantes explícitas conforme necessário.

## Edição isolada
- `src/components/layout/Header.tsx` / `Footer.tsx`: componentes compartilhados.
- `src/pages/Institucional/sections/*.tsx`: seções separadas. O conteúdo HTML aprovado está guardado como string em cada arquivo para evitar mudanças acidentais; futuramente pode virar JSX puro após teste visual.
- `src/styles/institucional.css`: CSS original aprovado, sem reestilização.
- `src/pages/Institucional/institutionalBehavior.ts`: tema, menu, animações e replay.
- `src/styles/tokens.css`: tokens iniciais, sem sobrescrever a institucional.
- `src/services/`: contratos e cliente de API (não ativados).
- `public/legacy/`: snapshot V28, isolado para migração gradual.
- `backend/apps-script/Code.gs`: referência do backend atual, fora da publicação.

## Segurança e migração de dados
O frontend não deve guardar segredos. A integração futura precisa de API segura, validação, controle de acesso, consentimento, políticas de retenção e estratégia de migração para banco relacional. Google Sheets não é banco de dados de produção de um AVA.

## Nota importante
O projeto **não declara que as páginas V28 foram reescritas em React**: elas permanecem temporariamente em `public/legacy/` até migração individual. A institucional foi modularizada mantendo HTML e CSS aprovados; validar no navegador antes de substituir o site público.
