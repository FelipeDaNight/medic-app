// Rascunhos gerados automaticamente pelo backend de notícias médicas
// (scripts/medical-news/), tier "revisão" — PubMed, sociedades médicas e
// faculdades de medicina. Nada aqui é importado pelo site: um humano precisa
// revisar cada item e movê-lo manualmente para src/data/updates.ts (ajustando
// o schema/texto conforme necessário) antes de aparecer publicamente.
//
// Não editar o formato dos objetos abaixo à mão além de revisar o conteúdo —
// o script os escreve automaticamente em cada execução do workflow
// "medical-news-review" (ver .github/workflows/medical-news-review.yml).
import type { ClinicalUpdate } from "./types";

export const updatesPending: ClinicalUpdate[] = [];
