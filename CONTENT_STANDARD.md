# Padrão de conteúdo — Rx Estudante

Esta é a fonte única de verdade para documentar doenças, medicamentos e casos clínicos
no projeto. **Leia este arquivo inteiro antes de começar qualquer lote do
`CONTENT_BACKLOG.md`.** Ele não substitui o bom senso clínico, mas define o que "ficha
completa" significa aqui — nenhuma ficha deve ser marcada como concluída sem passar
pelo checklist da seção 5.

Este documento descreve o **schema-alvo**, incluindo campos que ainda não existem no
código (`src/data/types.ts`) — os vínculos cruzados da seção 3. Antes de aplicar esse
padrão ao primeiro lote de conteúdo, o schema em `types.ts` precisa ser estendido para
incluí-los; até lá, este arquivo é a referência, não uma descrição 1:1 do código atual.

---

## 1. Schema de DOENÇA

Tipo `Disease` em `src/data/types.ts`. Campos já existentes no código marcados
"(atual)"; campos novos deste padrão marcados "(novo)".

| Campo | Tipo | Obrigatório | Fonte exigida? | Descrição |
|---|---|---|---|---|
| `slug` | string | sim | não | identificador de URL, kebab-case |
| `nome` | string | sim | não | nome oficial da doença |
| `sinonimos` | string[] | sim (pode ser `[]`) | não | outros nomes/abreviações usadas na prática |
| `cid10` | string | sim | sim — CID-10/DataSUS | código de 3-4 caracteres |
| `especialidade` | string | sim | não | especialidade médica principal |
| `etiologia` | enum `Etiologia` | sim | não | ver lista em `types.ts` |
| `resumo` | string | sim | não | 1 frase para card de listagem |
| `definicao` | string | sim | sim | definição formal da doença |
| `epidemiologia` | string | sim | sim | prevalência, incidência, grupos de risco |
| `fisiopatologia` | string | sim | sim | mecanismo da doença |
| `classificacao` | string | sim (pode ser "Sem classificação/estadiamento formal amplamente usado.") | sim | **(novo)** sistema de estadiamento/classificação nomeado — ex.: NYHA (IC), GOLD (DPOC), KDIGO (DRC), ACR/EULAR (doenças reumáticas). Se a doença não tem um sistema formal consolidado, declare isso explicitamente em vez de deixar vazio |
| `quadroClinico` | string[] | sim | sim | sinais e sintomas |
| `diagnostico` | string[] | sim | sim | **(expandido)** deve nomear o(s) critério(s) diagnóstico(s) formal(is) quando existir um (ex.: "Critérios de Framingham", "Critérios ACR/EULAR 2019"), não só listar exames genéricos |
| `examesComplementares` | string[] | sim | sim | **(novo)** exames de apoio **com valor de referência ou ponto de corte explícito** quando aplicável (ex.: "BNP > 400 pg/mL sugere IC descompensada", não só "dosar BNP") |
| `diagnosticoDiferencial` | string[] | sim | sim | principais diagnósticos alternativos |
| `tratamento` | string[] | sim | sim | condutas terapêuticas, farmacológicas e não farmacológicas |
| `complicacoes` | string[] | sim | sim | **(novo)** separadas explicitamente em agudas vs. crônicas dentro do texto de cada item (ex.: "Aguda: ...", "Crônica: ...") |
| `redFlags` | string[] | sim | sim | **(novo)** sinais de gravidade / critérios de encaminhamento urgente |
| `prognostico` | string | sim | sim | evolução esperada, mortalidade/morbidade quando relevante |
| `pontosDeProva` | string[] | sim (pode ser `[]` só se genuinamente não houver nenhum ponto classicamente cobrado) | sim | **(novo)** armadilhas e fatos classicamente cobrados em prova de residência sobre esse tema |
| `casoClinico` | `DiseaseCase` | sim | sim | caso-resumo embutido na própria ficha (ver seção 1.1) — mais curto que os Casos Clínicos standalone da seção 3 |
| `medicamentosPrimeiraLinha` | `{slug, nome}[]` | sim (pode ser `[]` com justificativa se a doença não tem tratamento medicamentoso de 1ª linha) | não (é vínculo, não dado factual novo) | **(novo — vínculo cruzado, ver seção 3)** |
| `fontes` | `{tema, fonte}[]` | sim | — | ver seção 4 |

### 1.1 — `DiseaseCase` (caso embutido)

```ts
interface DiseaseCase {
  vinheta: string;    // história + exame físico, SEM revelar o diagnóstico
  pergunta: string;   // "Qual a hipótese diagnóstica mais provável?" ou similar
  raciocinio: string; // por que os achados apontam para esse diagnóstico
  conduta: string;    // próximo passo de manejo
}
```

Este objeto já existe e alimenta tanto a ficha da doença quanto o "Caso Clínico do
Dia" na home. Ele é intencionalmente curto. Casos mais ricos, com medicamentos
citados e múltiplas doenças no diagnóstico diferencial, são os **Casos Clínicos
standalone** da seção 3 deste documento.

---

## 2. Schema de MEDICAMENTO

Tipo `Medication` em `src/data/types.ts`.

| Campo | Tipo | Obrigatório | Fonte exigida? | Descrição |
|---|---|---|---|---|
| `slug` | string | sim | não | identificador de URL |
| `nome` | string | sim | sim — RENAME (DCB) | nome oficial. Usar a **DCB da RENAME 2024** como nome principal (ex.: "Tiamazol", não "Metimazol") |
| `nomeComercial` | string[] | sim | não | marcas comerciais conhecidas no Brasil |
| `principioAtivo` | string | sim | sim — RENAME | pode repetir `nome` quando já é a DCB |
| `categoria` | string | sim | não | classe terapêutica em português |
| `codigoAtc` | string | sim | sim — RENAME 2024 (Apêndice A) | se o item não constar na RENAME, marcar `"fonte pendente"` e explicar no campo `fontes` |
| `tarja` | enum `Tarja` | sim | sim — bula/ANVISA | |
| `formaFarmaceutica` | string | sim | sim — RENAME | |
| `viaAdministracao` | string | sim | não | |
| `resumo` | string | sim | não | 1 frase para card de listagem |
| `indicacoes` | string[] | sim | sim | |
| `mecanismoAcao` | string | sim | sim | |
| `farmacocinetica` | string | sim | sim | **(novo)** absorção, biodisponibilidade, meia-vida, metabolismo, via de eliminação |
| `posologia` | string | sim | sim — RENAME/bula | |
| `ajusteRenalHepatico` | string | sim (pode ser "Sem necessidade de ajuste na insuficiência renal/hepática leve a moderada.") | sim | **(novo)** |
| `gestacaoLactacao` | string | sim | sim | **(novo)** categoria de risco e orientação de uso |
| `contraindicacoes` | string[] | sim | sim | |
| `efeitosColaterais` | string[] | sim | sim | |
| `interacoes` | string[] | sim | sim | |
| `monitorizacao` | string[] | sim (pode ser `[]` só se genuinamente não há monitorização laboratorial específica) | sim | **(novo)** exames de acompanhamento (ex.: INR na varfarina, função renal no IECA) |
| `alertas` | string[] | sim (pode ser `[]`) | sim | inclui **conduta em intoxicação/antídoto** quando existir (ex.: paracetamol → N-acetilcisteína), além de outros alertas especiais |
| `similares` | string[] | sim | não | genéricos/outros da mesma classe |
| `pontosDeProva` | string[] | sim | sim | **(novo)** |
| `doencasIndicadas` | `{slug, nome}[]` | sim (pode ser `[]` com justificativa se o medicamento não tem ficha de doença correspondente ainda) | não (é vínculo) | **(novo — vínculo cruzado, ver seção 3)** |
| `fontes` | `{tema, fonte}[]` | sim | — | ver seção 4 |

---

## 3. Vínculo cruzado obrigatório

Toda ficha nova precisa amarrar nos dois sentidos com o que já existe no site. Isso
não é opcional nem cosmético — é o que faz o "estudar por caso" funcionar.

**Regra:**
1. Toda **doença** lista, em `medicamentosPrimeiraLinha`, os medicamentos de primeira
   linha usados nela — cada entrada é `{ slug, nome }` apontando para um medicamento
   que **já existe** no site (curado ou recém-documentado no mesmo lote).
2. Todo **medicamento** lista, em `doencasIndicadas`, as doenças documentadas em que
   ele é usado — mesma estrutura `{ slug, nome }`, mesma exigência de existir.
3. Todo **caso clínico** (standalone, ver 3.1) referencia:
   - exatamente uma doença principal (`doencaPrincipal: { slug, nome }`)
   - um ou mais medicamentos citados na conduta (`medicamentosCitados: { slug, nome }[]`)
   - e, na direção inversa, a doença e os medicamentos citados devem listar esse caso
     em um campo `casosRelacionados: { slug, titulo }[]` (a adicionar em `Disease` e
     `Medication` quando o schema for estendido).
4. **Nunca** referencie um slug que não existe ainda no projeto. Se a doença/medicamento
   correspondente ainda não foi documentado, isso é sinal de que a ordem de
   documentação do lote precisa mudar — não de que o vínculo deve ser inventado ou
   deixado apontando para um item futuro.

### 3.1 — Novo tipo: `CasoClinico` (standalone)

Este é o tipo que vai preencher a seção "3. CASOS CLÍNICOS" do `CONTENT_BACKLOG.md`,
distinto do `DiseaseCase` embutido (mais rico, cruza doença + medicamentos):

```ts
interface CasoClinico {
  slug: string;
  titulo: string;
  doencaPrincipal: { slug: string; nome: string };
  diagnosticosDiferenciais?: { slug: string; nome: string }[]; // opcional, outras doenças já documentadas cogitadas no raciocínio
  medicamentosCitados: { slug: string; nome: string }[];
  vinheta: string;        // história clínica completa, sem revelar o diagnóstico
  perguntas: string[];    // pode ter mais de uma pergunta guiada (diagnóstico → conduta → monitorização)
  raciocinio: string;
  conduta: string;
  pontosDeProva: string[];
  fontes: { tema: string; fonte: string }[];
}
```

Um caso clínico só pode ser escrito depois que a doença principal **e** todos os
medicamentos citados já têm ficha completa — é por isso que o `CONTENT_BACKLOG.md`
deixou essa seção sem lotes definidos ainda.

---

## 4. Regra de fonte obrigatória

Todo campo com **dado factual específico** (dose, meia-vida, critério diagnóstico
nomeado, valor de referência de exame, código ATC/CID) precisa ter uma entrada
correspondente no array `fontes` da ficha:

```ts
fontes: [
  { tema: "Posologia e ajuste renal", fonte: "RENAME 2024, Apêndice A" },
  { tema: "Critérios diagnósticos", fonte: "Diretriz SBC de Insuficiência Cardíaca, 2021" },
  { tema: "Farmacocinética", fonte: "Goodman & Gilman, 13ª ed." },
  { tema: "Classificação", fonte: "fonte pendente" },
]
```

Não precisa ser uma entrada por frase — agrupe por tema/bloco de campos, do jeito do
exemplo acima. O que não pode acontecer é um número, critério ou valor específico
aparecer no texto sem que o tema correspondente apareça em `fontes`.

**Fontes aceitas** (cite sempre com edição/ano quando existir):
- RENAME (medicamentos) — sempre citar a edição (2024)
- CID-10 / DataSUS (doenças — código e nome oficial)
- Diretriz de sociedade médica **nomeada**, brasileira ou internacional, com ano (ex.:
  "Diretriz Brasileira de Hipertensão Arterial, 2020", "GOLD 2024", "KDIGO 2024")
- Livro-texto padrão **nomeado**, com edição (ex.: "Harrison's Principles of Internal
  Medicine, 21ª ed.", "Goodman & Gilman, 13ª ed.")
- Bula oficial (ANVISA/bulário) quando disponível

**Não conta como fonte:** "conhecimento geral", memória sem citação, blog não-médico,
ou qualquer afirmação sem nome de documento/instituição por trás.

**Regra de ouro:** se você (ou eu) não sabe de onde veio um dado específico, o campo
correspondente em `fontes` recebe o valor literal `"fonte pendente"`, e o texto do
campo evita afirmar o número/critério com uma precisão que não foi verificada — melhor
descrever de forma qualitativa e sinalizar a lacuna do que inventar uma cifra. Isso
vale tanto para doenças/medicamentos quanto para casos clínicos.

Fatos de conhecimento médico básico amplamente consolidado (ex.: "penicilina inibe
síntese de parede celular bacteriana") podem citar a fonte de forma genérica ("
farmacologia básica — Goodman & Gilman") sem precisar de uma citação página-a-página.
Números específicos (meia-vida em horas, ponto de corte de exame, dose em mg/kg,
percentual de mortalidade) sempre precisam de uma fonte nomeada e específica.

---

## 5. Checklist de autoverificação (rodar em CADA ficha antes de marcar como concluída)

- [ ] Todos os campos do schema (seção 1 ou 2) estão preenchidos, ou explicitamente
      marcados com o texto padrão de ausência descrito na tabela (nunca deixados
      vazios silenciosamente)
- [ ] Nenhum campo contém número, critério ou nome próprio (ex.: nome de escore,
      critério diagnóstico) sem entrada correspondente em `fontes`
- [ ] Nenhuma entrada em `fontes` é vaga ("literatura médica", "estudos mostram") —
      ou é um documento nomeado com ano/edição, ou é `"fonte pendente"`
- [ ] Vínculos cruzados existem **nos dois sentidos**: se a doença X lista o
      medicamento Y em `medicamentosPrimeiraLinha`, o medicamento Y lista a doença X
      em `doencasIndicadas` (e o mesmo vale para casos clínicos ↔ doença/medicamentos)
- [ ] Todo slug referenciado em um vínculo cruzado existe de fato no projeto (não é
      um item ainda pendente no `CONTENT_BACKLOG.md`)
- [ ] Nomenclatura consistente com o que já está documentado (mesma grafia de DCB,
      mesmo nome de especialidade usado em outras fichas da mesma área)
- [ ] `npx tsc --noEmit` e `npx eslint .` passam sem erros novos depois de adicionar
      a ficha
- [ ] Página de detalhe da ficha nova renderiza sem erro no navegador (visualmente
      conferida, não só compilada) e os vínculos cruzados aparecem como links
      clicáveis
- [ ] O `CONTENT_BACKLOG.md` foi atualizado: item marcado como concluído, não deixado
      como "pendente" depois de documentado
