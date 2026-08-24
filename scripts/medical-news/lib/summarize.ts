import Anthropic from "@anthropic-ai/sdk";
import type { GeneratedUpdate, Importancia, RawSourceItem } from "../types.js";

const client = new Anthropic(); // reads ANTHROPIC_API_KEY from env (GitHub Actions secret)

const IMPORTANCIAS: Importancia[] = ["Alta", "Média", "Baixa"];

function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function extractJson(raw: string): unknown {
  const fenced = raw.match(/```(?:json)?\s*([\s\S]*?)```/i);
  const jsonText = fenced ? fenced[1] : raw;
  return JSON.parse(jsonText.trim());
}

const SYSTEM_PROMPT = `Você resume achados/notícias médicas em português do Brasil para o formato de
"atualização clínica" de um site de estudo para estudantes de medicina (Rx Estudante).

Regras:
- Nunca invente números, doses ou estatísticas que não estejam no texto original.
- "destaque" é uma frase curta respondendo "o que muda na prática clínica" — se o
  texto não deixar isso claro, diga isso explicitamente em vez de inventar uma
  implicação prática.
- "importancia" é "Alta" só se afetar conduta de primeira linha amplamente usada;
  "Média" para achados relevantes mas não urgentes; "Baixa" para curiosidades/
  notícias institucionais sem impacto direto de conduta.
- "corpo" é um array de 2 a 4 parágrafos curtos (2-4 frases cada), em português.
- Responda APENAS com um objeto JSON válido, sem markdown, sem texto fora do JSON.`;

function buildUserPrompt(item: RawSourceItem): string {
  return `Fonte: ${item.fonteNome}
URL: ${item.url}
Especialidade sugerida: ${item.especialidadeSugerida ?? "(inferir pelo conteúdo)"}
Título original: ${item.titulo}

Conteúdo original (abstract/resumo/descrição, pode estar em inglês):
"""
${item.corpoOriginal.slice(0, 4000)}
"""

Gere um objeto JSON com exatamente estes campos:
{
  "titulo": string (em português, pode adaptar o título original),
  "resumo": string (1 frase, para card de listagem),
  "especialidade": string,
  "importancia": "Alta" | "Média" | "Baixa",
  "destaque": string (1 frase — o que muda na prática),
  "corpo": string[] (2 a 4 parágrafos)
}`;
}

export async function summarizeItem(item: RawSourceItem): Promise<GeneratedUpdate | null> {
  try {
    const response = await client.messages.create({
      model: "claude-opus-5",
      max_tokens: 2000,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: buildUserPrompt(item) }],
    });

    const textBlock = response.content.find((b) => b.type === "text");
    if (!textBlock || textBlock.type !== "text") return null;

    const parsed = extractJson(textBlock.text) as Partial<GeneratedUpdate>;

    if (
      !parsed.titulo ||
      !parsed.resumo ||
      !parsed.especialidade ||
      !parsed.destaque ||
      !Array.isArray(parsed.corpo) ||
      parsed.corpo.length === 0
    ) {
      console.warn(`[summarize] resposta incompleta para "${item.titulo}", descartando.`);
      return null;
    }

    const importancia = IMPORTANCIAS.includes(parsed.importancia as Importancia)
      ? (parsed.importancia as Importancia)
      : "Baixa"; // fail-safe: nunca assume "Alta" por padrão

    return {
      slug: slugify(parsed.titulo),
      titulo: parsed.titulo,
      resumo: parsed.resumo,
      especialidade: parsed.especialidade,
      importancia,
      fonte: `${item.fonteNome} (${item.url})`,
      data: item.data || new Date().toISOString().slice(0, 10),
      destaque: parsed.destaque,
      corpo: parsed.corpo,
    };
  } catch (err) {
    console.warn(`[summarize] falhou para "${item.titulo}":`, (err as Error).message);
    return null;
  }
}

export async function summarizeAll(items: RawSourceItem[]): Promise<GeneratedUpdate[]> {
  const out: GeneratedUpdate[] = [];
  for (const item of items) {
    const summarized = await summarizeItem(item);
    if (summarized) out.push(summarized);
  }
  return out;
}
