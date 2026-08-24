# Backend de notícias médicas

Busca automática de fontes médicas oficiais e literatura para alimentar
`src/data/updates.ts`. O site continua **100% estático** — não existe servidor
rodando; o "backend" é um script Node que roda periodicamente via GitHub
Actions e abre um Pull Request com o que encontrou.

## Decisões tomadas (não reabrir sem discutir com o usuário)

1. **Publicação automática só para fontes oficiais restritas.** Ministério da
   Saúde e ANVISA vão direto para `src/data/updates.ts` e o PR faz merge
   sozinho. Qualquer outra fonte (PubMed, sociedades médicas, faculdades de
   medicina) vira rascunho em `src/data/updates-pending.ts` — um arquivo que
   **não é importado em nenhum lugar do site** — e fica esperando revisão
   humana antes de virar conteúdo público. Risco de erro clínico publicado
   sem revisão foi o motivo explícito dessa divisão.
2. **Arquitetura: job agendado + PR no GitHub, sem backend real.** Sem banco
   de dados, sem servidor rodando, sem custo de hospedagem adicional. O
   `GITHUB_TOKEN` que o GitHub Actions injeta automaticamente em cada
   execução tem permissão de escrita no próprio repositório — isso contorna
   completamente o problema de push bloqueado que existe nesta sessão de
   desenvolvimento (aquele bloqueio é da integração do Claude Code neste
   ambiente específico, não do GitHub Actions).

## Estrutura

```
scripts/medical-news/
  types.ts              — tipos compartilhados
  sources/
    pubmed.ts            — PubMed E-utilities (API oficial, funcionando)
    rss.ts                — RSS genérico (sociedades médicas / faculdades)
    govbr.ts              — Ministério da Saúde / ANVISA (melhor esforço, ver aviso no arquivo)
  lib/
    summarize.ts          — chama a API da Anthropic (claude-opus-5) para gerar o resumo em PT-BR
    dedupe.ts             — evita reprocessar itens já vistos (compara URLs)
    write-updates.ts      — insere os objetos novos no array TS de destino
  run.ts                  — orquestrador (CLI: --tier=oficial | --tier=revisao)

src/data/updates-pending.ts  — rascunhos do tier "revisao", não importado pelo app

.github/workflows/
  medical-news-official.yml  — cron diário, tier oficial, auto-merge
  medical-news-review.yml    — cron semanal, tier revisão, PR manual
```

## Configuração necessária no GitHub (fazer isso no repositório real, não aqui)

1. **Settings → Actions → General → Workflow permissions**: marcar "Read and
   write permissions" **e** "Allow GitHub Actions to create and approve pull
   requests". Sem isso os workflows não conseguem abrir PR nem auto-merge.
2. **Settings → Secrets and variables → Actions → New repository secret**:
   - `ANTHROPIC_API_KEY` (obrigatório — usado por `lib/summarize.ts`)
   - `NCBI_API_KEY` (opcional — aumenta o rate limit do PubMed de 3 para 10
     req/s; ver https://www.ncbi.nlm.nih.gov/account/settings/)
3. Rodar `npm install` localmente uma vez para baixar as novas dependências
   (`@anthropic-ai/sdk`, `tsx`) antes do primeiro `git push`.

## Rodando localmente (para testar antes de confiar no cron)

```bash
export ANTHROPIC_API_KEY=sk-ant-...
npm run news:oficial   # só Ministério da Saúde / ANVISA
npm run news:revisao   # PubMed + sociedades/faculdades configuradas
```

## Limitações conhecidas

- **`sources/govbr.ts` é "melhor esforço", e só tem o Ministério da Saúde
  ativo.** Testado ao vivo nesta sessão: o MS usa o tema "Portal Padrão"
  gov.br (Plone) e o scraper funciona (`article.tileItem` >
  `h2.tileHeadline > a.summary.url` + `span.description`) — mas isso é
  observação de convenção, não uma API contratual, e pode quebrar sem aviso
  se o governo trocar o tema. A **ANVISA foi testada e removida**: o site dela
  (`gov.br/anvisa/.../noticias-anvisa`) é uma SPA em React renderizada
  client-side — um `fetch()` simples só recebe o shell vazio da página, sem a
  lista de notícias, e não há endpoint de API separado visível no HTML.
  Resolver isso exigiria um browser headless (Playwright) no workflow; ver
  comentário em `sources/govbr.ts` antes de reabrir essa decisão. Se o
  scraper do MS parar de trazer itens, o job não quebra — só loga um aviso e
  não escreve nada (fail-safe: preferimos "zero notícias novas" a publicar
  lixo automaticamente).
- **`sources/rss.ts` só tem SBP configurada por enquanto.** Sociedades
  médicas (SBC, SBEM etc.) e faculdades de medicina específicas precisam ser
  adicionadas uma a uma em `RSS_FEEDS` — só funciona para instituições que
  realmente publicam um feed RSS/Atom (confirme com `curl -I <url>/feed`
  antes de adicionar). O usuário ainda vai indicar quais faculdades
  especificamente quer acompanhar.
- **`sources/pubmed.ts`** cobre só os termos de busca em `PUBMED_SEARCH_TERMS`
  (um por especialidade já coberta no site) — não é uma vigilância completa
  da literatura, é um alerta de "algo novo apareceu nesse tema".
- O parser de `write-updates.ts` é manipulação de string, não um AST real —
  funciona porque os arquivos de dados são bem formatados, mas quebra se
  `src/data/updates.ts` for reformatado manualmente de um jeito muito
  diferente do padrão atual (`export const updates: ClinicalUpdate[] = [ ... ];`).

## Próximos passos possíveis (não implementados ainda)

- Adicionar as faculdades de medicina específicas que o usuário quer
  acompanhar (pendente: ele vai detalhar quais).
- Verificar/adicionar feeds RSS de outras sociedades médicas brasileiras
  (SBC, SBEM, SBOC etc.) além da SBP.
- Uma página/seção no site para navegar `updates-pending.ts` durante a
  revisão, em vez de abrir o arquivo direto no editor.
