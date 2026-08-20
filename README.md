# Rx Estudante

Biblioteca clínica de estudo para a graduação em medicina: medicamentos, doenças e
atualizações clínicas organizados para consulta e revisão rápida, com busca instantânea
(⌘K) e favoritos salvos localmente no navegador.

Construído com Next.js (App Router), TypeScript e Tailwind CSS. Todo o conteúdo é
pré-renderizado estaticamente — não há backend nem tempo de "acordar o servidor".

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Estrutura

- `src/data/` — modelos de dados e conteúdo (medicamentos, doenças, atualizações).
  Para adicionar um novo item, basta acrescentar um objeto ao array correspondente.
- `src/app/` — rotas (Medicamentos, Doenças, Atualizações, Favoritos, Sobre).
- `src/components/` — componentes de UI, cards, filtros/busca e a paleta de comando.

## Build de produção

```bash
npm run build
npm run start
```
