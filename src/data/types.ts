export const TARJAS = [
  "Venda livre (MIP)",
  "Tarja vermelha",
  "Tarja preta",
  "Tarja não informada",
] as const;

export type Tarja = (typeof TARJAS)[number];

export const ETIOLOGIAS = [
  "Viral",
  "Bacteriana",
  "Fúngica",
  "Parasitária",
  "Genética",
  "Autoimune",
  "Degenerativa",
  "Metabólica",
  "Neoplásica",
  "Traumática",
  "Nutricional",
  "Idiopática",
  "Multifatorial",
] as const;

export type Etiologia = (typeof ETIOLOGIAS)[number];

export const IMPORTANCIAS = ["Alta", "Média", "Baixa"] as const;

export type Importancia = (typeof IMPORTANCIAS)[number];

export interface RelatedLink {
  slug: string;
  nome: string;
}

export interface FonteTema {
  tema: string;
  fonte: string;
}

export interface Medication {
  slug: string;
  nome: string;
  nomeComercial: string[];
  principioAtivo: string;
  categoria: string;
  codigoAtc: string;
  tarja: Tarja;
  formaFarmaceutica: string;
  viaAdministracao: string;
  resumo: string;
  indicacoes: string[];
  mecanismoAcao: string;
  farmacocinetica: string;
  posologia: string;
  ajusteRenalHepatico: string;
  gestacaoLactacao: string;
  contraindicacoes: string[];
  efeitosColaterais: string[];
  interacoes: string[];
  monitorizacao: string[];
  alertas: string[];
  similares: string[];
  pontosDeProva: string[];
  doencasIndicadas: RelatedLink[];
  fontes: FonteTema[];
}

export interface DiseaseCase {
  vinheta: string;
  pergunta: string;
  raciocinio: string;
  conduta: string;
}

export interface Disease {
  slug: string;
  nome: string;
  sinonimos: string[];
  cid10: string;
  especialidade: string;
  etiologia: Etiologia;
  resumo: string;
  definicao: string;
  epidemiologia: string;
  fisiopatologia: string;
  classificacao: string;
  quadroClinico: string[];
  diagnostico: string[];
  examesComplementares: string[];
  diagnosticoDiferencial: string[];
  tratamento: string[];
  complicacoes: string[];
  redFlags: string[];
  prognostico: string;
  pontosDeProva: string[];
  casoClinico: DiseaseCase;
  medicamentosPrimeiraLinha: RelatedLink[];
  medicamentosSecaoTitulo?: string;
  medicamentosNota?: string;
  fontes: FonteTema[];
}

export interface ClinicalUpdate {
  slug: string;
  titulo: string;
  resumo: string;
  especialidade: string;
  importancia: Importancia;
  fonte: string;
  data: string;
  destaque: string;
  corpo: string[];
}
