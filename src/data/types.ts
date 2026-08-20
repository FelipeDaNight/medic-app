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

export interface Medication {
  slug: string;
  nome: string;
  nomeComercial: string[];
  principioAtivo: string;
  categoria: string;
  tarja: Tarja;
  formaFarmaceutica: string;
  viaAdministracao: string;
  resumo: string;
  indicacoes: string[];
  mecanismoAcao: string;
  posologia: string;
  contraindicacoes: string[];
  efeitosColaterais: string[];
  interacoes: string[];
  alertas: string[];
  similares: string[];
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
  quadroClinico: string[];
  diagnostico: string[];
  diagnosticoDiferencial: string[];
  tratamento: string[];
  prognostico: string;
  casoIlustrativo: string;
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
