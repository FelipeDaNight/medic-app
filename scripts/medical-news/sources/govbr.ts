import type { RawSourceItem } from "../types.js";

/**
 * Ministério da Saúde / ANVISA — MELHOR ESFORÇO.
 *
 * Nem o gov.br/saude nem a ANVISA expõem RSS ou uma API pública de notícias
 * (verificado nesta sessão: sem <link rel="alternate" type="application/rss+xml">,
 * sem endpoint Plone @search respondendo). As duas rodam no "Portal Padrão"
 * gov.br (Plone), cujo template de listagem usa `article.tileItem` >
 * `h2.tileHeadline > a.summary.url` (título+link) e `span.description`
 * (resumo) para cada notícia — confirmado ao vivo em ambos os sites em
 * agosto/2026, mas isso é observação de convenção, não uma API contratual,
 * e pode quebrar sem
 * aviso se o governo atualizar o tema do portal.
 *
 * Por isso: (1) cada fonte aqui é tratada de forma independente — se uma
 * falhar ou retornar zero itens, a outra e o resto do job continuam normalmente;
 * (2) isso fica no tier "oficial" (auto-merge) só enquanto os itens
 * extraídos baterem no schema esperado — o run.ts descarta qualquer item sem
 * título+link válidos antes de escrever no arquivo, então um HTML quebrado
 * produz "zero notícias novas" em vez de lixo publicado automaticamente.
 *
 * Se isso parar de funcionar, a correção é reabrir a página em um browser,
 * inspecionar o HTML atual e ajustar os seletores abaixo — não há mágica
 * genérica possível aqui como há para RSS.
 */

interface GovBrSourceDef {
  nome: string;
  url: string;
  especialidade: string; // "Saúde Pública" cobre a maioria; pode ser refinado por keyword no título depois
}

export const GOVBR_SOURCES: GovBrSourceDef[] = [
  {
    nome: "Ministério da Saúde",
    url: "https://www.gov.br/saude/pt-br/assuntos/noticias",
    especialidade: "Saúde Pública",
  },
  // ANVISA foi testada e removida por ora: gov.br/anvisa/.../noticias-anvisa
  // é renderizado client-side (SPA em React) — o HTML que um `fetch()` normal
  // recebe não contém a lista de notícias, só o shell da página, e não achei
  // nenhum endpoint de API separado nas tags <script> inline. Resolver isso
  // exigiria um browser headless (Playwright) rodando dentro do workflow, o
  // que muda o custo/complexidade do job — decisão de reabrir isso fica para
  // quando/se valer a pena. Ver docs/BACKEND-NOTICIAS.md.
];

const ITEMS_PER_SOURCE = 5;

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

async function fetchOne(source: GovBrSourceDef): Promise<RawSourceItem[]> {
  const res = await fetch(source.url, { headers: { "User-Agent": "RxEstudanteBot/1.0" } });
  if (!res.ok) throw new Error(`gov.br "${source.nome}" retornou ${res.status}`);
  const html = await res.text();

  // Convenção observada do tema "Portal Padrão" gov.br (Plone) — ver aviso no
  // topo do arquivo. Cada bloco de notícia é um <article class="tileItem ...">
  const blocks = html.match(/<article[^>]*class="[^"]*tileItem[^"]*"[\s\S]*?<\/article>/gi) ?? [];

  const items: RawSourceItem[] = [];
  for (const block of blocks.slice(0, ITEMS_PER_SOURCE)) {
    // título+link vêm de <a class="summary url" href="...">Título</a> dentro do <h2 class="tileHeadline">
    const linkMatch = block.match(/<a[^>]*class="[^"]*\bsummary\b[^"]*\burl\b[^"]*"[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/i);
    if (!linkMatch) continue;
    const url = linkMatch[1].startsWith("http") ? linkMatch[1] : new URL(linkMatch[1], source.url).toString();
    const titulo = stripHtml(linkMatch[2]);
    const summaryMatch = block.match(/<span[^>]*class="[^"]*description[^"]*"[^>]*>([\s\S]*?)<\/span>/i);
    const resumo = summaryMatch ? stripHtml(summaryMatch[1]) : "";

    if (!titulo || !url) continue;

    items.push({
      titulo,
      url,
      data: "", // convenção não expõe data de forma confiável no card; deixa em branco, o LLM/revisor confirma
      corpoOriginal: resumo || titulo,
      fonteNome: source.nome,
      especialidadeSugerida: source.especialidade,
    });
  }
  return items;
}

export async function fetchGovBr(): Promise<RawSourceItem[]> {
  const results: RawSourceItem[] = [];
  for (const source of GOVBR_SOURCES) {
    try {
      const items = await fetchOne(source);
      if (items.length === 0) {
        console.warn(
          `[govbr] "${source.nome}" respondeu mas o parser não achou nenhum item — o HTML do portal provavelmente mudou, revisar os seletores em sources/govbr.ts.`
        );
      }
      results.push(...items);
    } catch (err) {
      console.warn(`[govbr] falhou para "${source.nome}":`, (err as Error).message);
    }
  }
  return results;
}
