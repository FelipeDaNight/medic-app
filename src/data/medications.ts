import type { Medication } from "./types";

export const medications: Medication[] = [
  {
    slug: "paracetamol",
    nome: "Paracetamol",
    nomeComercial: ["Tylenol", "Dôrico", "Taminol"],
    principioAtivo: "Paracetamol (acetaminofeno)",
    categoria: "Analgésico e antipirético",
    codigoAtc: "N02BE01",
    tarja: "Venda livre (MIP)",
    formaFarmaceutica: "Comprimido, solução oral, gotas",
    viaAdministracao: "Oral",
    resumo: "Analgésico e antipirético de primeira linha, sem ação anti-inflamatória relevante.",
    indicacoes: [
      "Dor leve a moderada (cefaleia, mialgia, dor pós-operatória leve)",
      "Febre",
    ],
    mecanismoAcao:
      "Inibição preferencial da ciclo-oxigenase (COX) no sistema nervoso central, com ação analgésica e antipirética central. Praticamente não inibe a COX periférica, por isso não possui efeito anti-inflamatório clinicamente relevante nem os efeitos gástricos dos AINEs.",
    farmacocinetica:
      "Absorção oral rápida e quase completa, pico plasmático em 30–60 min. Metabolização hepática extensa (conjugação com glicuronídeo e sulfato); pequena fração é convertida pelo CYP2E1 em NAPQI, metabólito tóxico normalmente neutralizado pela glutationa. Meia-vida de 2–3 horas, com eliminação renal dos metabólitos.",
    posologia:
      "Adultos: 500–1000 mg por via oral a cada 6 horas, dose máxima de 4 g/dia (reduzir em hepatopatas). Crianças: 10–15 mg/kg/dose a cada 6 horas.",
    ajusteRenalHepatico:
      "Reduzir dose ou espaçar intervalo em insuficiência hepática (contraindicado em hepatopatia grave). Em insuficiência renal grave, espaçar o intervalo entre doses.",
    gestacaoLactacao:
      "Considerado o analgésico/antitérmico mais seguro na gestação e lactação, em doses terapêuticas habituais.",
    contraindicacoes: [
      "Insuficiência hepática grave",
      "Hipersensibilidade ao paracetamol",
    ],
    efeitosColaterais: [
      "Geralmente bem tolerado em doses terapêuticas",
      "Hepatotoxicidade em superdosagem (principal risco)",
      "Reações cutâneas raras",
    ],
    interacoes: [
      "Álcool e outros hepatotóxicos aumentam o risco de lesão hepática",
      "Varfarina: pode potencializar efeito anticoagulante com uso prolongado em doses altas",
    ],
    monitorizacao: [
      "Função hepática em uso prolongado ou doses próximas ao limite máximo",
      "Nível sérico de paracetamol em suspeita de intoxicação (nomograma de Rumack-Matthew)",
    ],
    alertas: [
      "Principal causa de insuficiência hepática aguda por intoxicação medicamentosa — atenção à dose cumulativa em apresentações combinadas (ex.: descongestionantes).",
    ],
    similares: ["Acetaminofeno genérico", "Paracetamol gotas 200 mg/mL"],
    pontosDeProva: [
      "N-acetilcisteína é o antídoto específico na intoxicação por paracetamol, repondo glutationa hepática",
      "A hepatotoxicidade da superdosagem decorre do acúmulo do metabólito NAPQI, não do paracetamol em si",
    ],
    doencasIndicadas: [
      { slug: "dengue", nome: "Dengue" },
      { slug: "chikungunya-zika", nome: "Febres virais transmitidas por mosquitos (chikungunya e zika)" },
    ],
    fontes: [
      { tema: "Mecanismo de ação e farmacocinética", fonte: "Goodman & Gilman, As Bases Farmacológicas da Terapêutica, 13ª ed." },
      { tema: "Uso preferencial na dengue (evitar AINEs/AAS)", fonte: "Guia de Manejo Clínico da Dengue, Ministério da Saúde" },
    ],
  },
  {
    slug: "dipirona-sodica",
    nome: "Dipirona sódica",
    nomeComercial: ["Novalgina", "Anador", "Magnopyrol"],
    principioAtivo: "Dipirona sódica (metamizol)",
    categoria: "Analgésico e antipirético",
    codigoAtc: "N02BB02",
    tarja: "Venda livre (MIP)",
    formaFarmaceutica: "Comprimido, gotas, solução injetável",
    viaAdministracao: "Oral ou intravenosa/intramuscular",
    resumo: "Analgésico e antipirético amplamente usado no Brasil, com discreta ação espasmolítica.",
    indicacoes: [
      "Dor de intensidade leve a moderada",
      "Febre refratária a outros antitérmicos",
      "Cólicas (efeito antiespasmódico associado)",
    ],
    mecanismoAcao:
      "Inibe a síntese de prostaglandinas por ação central e periférica, com componente adicional de ação sobre canais envolvidos na nocicepção. Mecanismo exato ainda não totalmente elucidado.",
    farmacocinetica:
      "Pró-droga hidrolisada rapidamente no trato gastrointestinal ao metabólito ativo 4-metilaminoantipirina (4-MAA). Boa absorção oral, pico em 1–2 horas. Metabolização hepática, eliminação predominantemente renal.",
    posologia:
      "Adultos: 500–1000 mg por via oral a cada 6–8 horas (máx. 4 g/dia) ou 1–2 g IV/IM lenta em ambiente hospitalar.",
    ajusteRenalHepatico:
      "Usar com cautela e considerar redução de dose em insuficiência renal ou hepática significativas.",
    gestacaoLactacao:
      "Evitar no primeiro trimestre e nas últimas 6 semanas de gestação; uso criterioso nos demais períodos. Passa para o leite materno em pequenas quantidades — uso pontual geralmente considerado compatível.",
    contraindicacoes: [
      "Histórico de agranulocitose por dipirona",
      "Porfiria hepática aguda",
      "Deficiência de G6PD",
      "Gestação no primeiro trimestre e nas últimas 6 semanas",
    ],
    efeitosColaterais: [
      "Hipotensão (principalmente se infusão IV rápida)",
      "Reações alérgicas cutâneas",
      "Agranulocitose (raro, mas grave — motivo de proibição em alguns países)",
    ],
    interacoes: [
      "Metotrexato: aumento do risco de toxicidade hematológica",
      "Clorpromazina: risco de hipotermia grave",
      "Ciclosporina: redução dos níveis séricos",
    ],
    monitorizacao: [
      "Hemograma se uso prolongado ou sintomas sugestivos de discrasia sanguínea (febre, faringite, úlceras orais)",
    ],
    alertas: [
      "Uso proibido em diversos países (EUA, Reino Unido, entre outros) pelo risco de agranulocitose; no Brasil segue amplamente utilizada e considerada segura na maioria dos pacientes.",
    ],
    similares: ["Metamizol sódico genérico", "Dipirona gotas 500 mg/mL"],
    pontosDeProva: [
      "É a causa clássica de agranulocitose induzida por fármaco citada em provas — reconhecer sinais precoces (febre, dor de garganta) importa mais que decorar a incidência exata",
      "Contraindicada na deficiência de G6PD pelo risco de hemólise",
    ],
    doencasIndicadas: [],
    fontes: [
      { tema: "Mecanismo de ação, contraindicações e alertas", fonte: "Goodman & Gilman, 13ª ed." },
    ],
  },
  {
    slug: "ibuprofeno",
    nome: "Ibuprofeno",
    nomeComercial: ["Alivium", "Advil", "Buscofen"],
    principioAtivo: "Ibuprofeno",
    categoria: "Anti-inflamatório não esteroidal (AINE)",
    codigoAtc: "M01AE01",
    tarja: "Venda livre (MIP)",
    formaFarmaceutica: "Comprimido, cápsula, suspensão oral",
    viaAdministracao: "Oral",
    resumo: "AINE derivado do ácido propiônico, com ação anti-inflamatória, analgésica e antitérmica.",
    indicacoes: [
      "Dor leve a moderada com componente inflamatório",
      "Febre",
      "Dismenorreia",
      "Processos inflamatórios musculoesqueléticos",
    ],
    mecanismoAcao:
      "Inibição não seletiva das enzimas COX-1 e COX-2, reduzindo a síntese de prostaglandinas envolvidas em dor, febre e inflamação.",
    farmacocinetica:
      "Boa absorção oral, pico plasmático em 1–2 horas. Alta ligação a proteínas plasmáticas (~99%). Metabolização hepática (CYP2C9), eliminação renal dos metabólitos. Meia-vida curta (~2 horas).",
    posologia:
      "Adultos: 200–400 mg por via oral a cada 6–8 horas, dose máxima de 1200 mg/dia em uso sem prescrição (até 3200 mg/dia sob orientação médica).",
    ajusteRenalHepatico:
      "Evitar em insuficiência renal moderada a grave (piora a função renal por inibição de prostaglandinas vasodilatadoras intrarrenais). Usar com cautela em hepatopatia.",
    gestacaoLactacao:
      "Contraindicado no terceiro trimestre (risco de fechamento precoce do ducto arterioso e oligoidrâmnio); evitar também nos primeiros trimestres quando possível. Compatível com a lactação em uso pontual.",
    contraindicacoes: [
      "Úlcera péptica ativa ou histórico de sangramento digestivo por AINE",
      "Insuficiência renal ou hepática grave",
      "Terceiro trimestre da gestação",
      "Insuficiência cardíaca grave",
    ],
    efeitosColaterais: [
      "Dispepsia e dor epigástrica",
      "Risco de sangramento gastrointestinal",
      "Retenção hídrica e elevação da pressão arterial",
      "Nefrotoxicidade com uso prolongado",
    ],
    interacoes: [
      "Anticoagulantes: aumento do risco de sangramento",
      "IECA/BRA e diuréticos: redução do efeito anti-hipertensivo e risco de lesão renal (\"tríade\")",
      "Corticosteroides: potencializa risco de úlcera gástrica",
    ],
    monitorizacao: [
      "Função renal em uso prolongado, especialmente em idosos ou associado a IECA/BRA e diuréticos",
      "Sinais de sangramento digestivo em uso crônico",
    ],
    alertas: [
      "Evitar uso crônico em idosos e cardiopatas sem avaliação médica pelo risco cardiovascular e renal.",
    ],
    similares: ["Ibuprofeno genérico 600 mg", "Naproxeno (mesma classe)"],
    pontosDeProva: [
      "A 'tríade' AINE + IECA/BRA + diurético é um clássico de prova pelo risco de lesão renal aguda",
      "AINEs devem ser evitados no terceiro trimestre pelo risco de fechamento precoce do ducto arterioso",
    ],
    doencasIndicadas: [
      { slug: "osteoartrose", nome: "Osteoartrose" },
      { slug: "gota", nome: "Gota" },
      { slug: "espondilite-anquilosante", nome: "Espondilite anquilosante" },
      { slug: "dorsalgia-lombalgia", nome: "Dorsalgia (lombalgia)" },
      { slug: "episclerite-esclerite", nome: "Episclerite e esclerite" },
      { slug: "enxaqueca", nome: "Enxaqueca" },
      { slug: "colica-nefretica", nome: "Cólica nefrética" },
      { slug: "endometriose", nome: "Endometriose" },
      { slug: "sangramento-uterino-anormal", nome: "Sangramento uterino anormal (incluindo menorragia)" },
      { slug: "dismenorreia-sindrome-pre-menstrual", nome: "Dismenorreia e síndrome pré-menstrual" },
    ],
    fontes: [
      { tema: "Mecanismo de ação e efeitos adversos", fonte: "Goodman & Gilman, 13ª ed." },
    ],
  },
  {
    slug: "amoxicilina",
    nome: "Amoxicilina",
    nomeComercial: ["Amoxil", "Novocilin"],
    principioAtivo: "Amoxicilina",
    categoria: "Antibiótico (betalactâmico/aminopenicilina)",
    codigoAtc: "J01CA04",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Cápsula, comprimido, suspensão oral",
    viaAdministracao: "Oral",
    resumo: "Aminopenicilina de amplo espectro, primeira escolha para diversas infecções bacterianas comuns.",
    indicacoes: [
      "Otite média aguda",
      "Sinusite bacteriana",
      "Faringoamigdalite estreptocócica",
      "Infecções do trato urinário não complicadas",
      "Erradicação de H. pylori (em esquema combinado)",
    ],
    mecanismoAcao:
      "Liga-se às proteínas ligadoras de penicilina (PBPs), inibindo a síntese da parede celular bacteriana e resultando em ação bactericida contra bactérias sensíveis.",
    farmacocinetica:
      "Boa absorção oral, não significativamente afetada por alimentos, pico plasmático em 1–2 horas. Baixa ligação a proteínas plasmáticas. Eliminação predominantemente renal (filtração glomerular e secreção tubular), em grande parte na forma inalterada.",
    posologia: "Adultos: 500 mg a cada 8 horas ou 875 mg a cada 12 horas, por 7–10 dias. Crianças: 25–50 mg/kg/dia divididos a cada 8–12 horas.",
    ajusteRenalHepatico:
      "Ajustar dose/intervalo em insuficiência renal grave (TFG <30 mL/min); não requer ajuste hepático relevante.",
    gestacaoLactacao:
      "Considerada segura na gestação e lactação, entre os antibióticos de escolha nesses contextos.",
    contraindicacoes: [
      "Hipersensibilidade a penicilinas",
      "Mononucleose infecciosa (risco de rash)",
    ],
    efeitosColaterais: [
      "Diarreia e desconforto gastrointestinal",
      "Rash cutâneo",
      "Reações de hipersensibilidade (incluindo anafilaxia)",
    ],
    interacoes: [
      "Alopurinol: aumenta risco de rash cutâneo",
      "Anticoncepcionais orais: possível redução da eficácia contraceptiva",
      "Probenecida: aumenta níveis séricos de amoxicilina",
    ],
    monitorizacao: [
      "Não requer monitorização laboratorial de rotina em cursos curtos; observar sinais de reação alérgica",
    ],
    alertas: [
      "Sempre investigar alergia prévia a betalactâmicos antes da prescrição.",
    ],
    similares: ["Amoxicilina + Clavulanato", "Ampicilina"],
    pontosDeProva: [
      "Rash cutâneo em uso de amoxicilina durante mononucleose infecciosa é achado clássico de prova, não indica alergia verdadeira a penicilina",
      "Amoxicilina não é significativamente afetada pela alimentação, diferente de outros antibióticos que exigem jejum",
    ],
    doencasIndicadas: [
      { slug: "pneumonia-adquirida-na-comunidade", nome: "Pneumonia adquirida na comunidade" },
      { slug: "gastrite", nome: "Gastrite" },
      { slug: "otite-media-aguda-supurativa", nome: "Otite média aguda supurativa e crônica" },
      { slug: "sinusite-aguda", nome: "Sinusite aguda" },
      { slug: "faringite-aguda", nome: "Faringite aguda" },
      { slug: "amigdalite-aguda", nome: "Amigdalite aguda" },
      { slug: "infeccoes-trato-geniturinario-gravidez", nome: "Infecções do trato geniturinário na gravidez" },
    ],
    fontes: [
      { tema: "Mecanismo de ação e farmacocinética", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Uso em PAC ambulatorial e erradicação de H. pylori", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "amoxicilina-clavulanato",
    nome: "Amoxicilina + Clavulanato",
    nomeComercial: ["Clavulin", "Novamox 2X"],
    principioAtivo: "Amoxicilina + Clavulanato de potássio",
    categoria: "Antibiótico (betalactâmico + inibidor de betalactamase)",
    codigoAtc: "J01CR02",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido revestido, suspensão oral",
    viaAdministracao: "Oral",
    resumo: "Associação que amplia o espectro da amoxicilina contra bactérias produtoras de betalactamase.",
    indicacoes: [
      "Sinusite e otite recorrentes ou refratárias",
      "Infecções respiratórias com suspeita de resistência",
      "Infecções de pele e partes moles",
      "Infecções urinárias complicadas",
    ],
    mecanismoAcao:
      "O clavulanato inibe irreversivelmente as betalactamases bacterianas, protegendo a amoxicilina da degradação e restaurando sua atividade contra cepas produtoras dessa enzima.",
    farmacocinetica:
      "Absorção oral otimizada quando administrada com alimentos, o que também reduz intolerância gastrointestinal. Ambos os componentes têm boa absorção e eliminação predominantemente renal.",
    posologia:
      "Adultos: 500/125 mg a cada 8 horas ou 875/125 mg a cada 12 horas, por 7–10 dias.",
    ajusteRenalHepatico:
      "Ajustar dose em insuficiência renal moderada a grave. Evitar em histórico de disfunção hepática relacionada ao uso prévio da associação.",
    gestacaoLactacao:
      "Considerada segura na gestação; compatível com a lactação.",
    contraindicacoes: [
      "Hipersensibilidade a penicilinas",
      "Histórico de icterícia colestática associada ao uso prévio da associação",
    ],
    efeitosColaterais: [
      "Diarreia (mais frequente que amoxicilina isolada)",
      "Náusea e desconforto abdominal",
      "Hepatotoxicidade colestática (rara)",
    ],
    interacoes: [
      "Anticoagulantes orais: pode prolongar o tempo de protrombina",
      "Metotrexato: aumento da toxicidade",
    ],
    monitorizacao: [
      "Função hepática se uso prolongado ou sintomas de colestase (icterícia, prurido)",
    ],
    alertas: [
      "Administrar com alimentos para reduzir intolerância gastrointestinal.",
    ],
    similares: ["Amoxicilina isolada", "Ampicilina + Sulbactam"],
    pontosDeProva: [
      "O clavulanato é o principal responsável pelo maior risco de hepatotoxicidade colestática e de diarreia em relação à amoxicilina isolada",
    ],
    doencasIndicadas: [
      { slug: "pneumonia-adquirida-na-comunidade", nome: "Pneumonia adquirida na comunidade" },
      { slug: "abscesso-pulmonar", nome: "Abscesso do pulmão e do mediastino" },
      { slug: "colecistite", nome: "Colecistite" },
      { slug: "doenca-diverticular", nome: "Doença diverticular do intestino" },
      { slug: "abscesso-periamigdaliano", nome: "Abscesso periamigdaliano" },
      { slug: "mastite-puerperal-afeccoes-mama-lactacao", nome: "Mastite puerperal e outras afecções da mama e lactação" },
      { slug: "impetigo", nome: "Impetigo" },
      { slug: "celulite-flegmao", nome: "Celulite e flegmão" },
      { slug: "abscesso-cutaneo-furunculo-antraz", nome: "Abscesso cutâneo, furúnculo e antraz" },
    ],
    fontes: [
      { tema: "Mecanismo de ação (inibição de betalactamase)", fonte: "Goodman & Gilman, 13ª ed." },
    ],
  },
  {
    slug: "azitromicina",
    nome: "Azitromicina",
    nomeComercial: ["Zitromax", "Astro"],
    principioAtivo: "Azitromicina",
    categoria: "Antibiótico (macrolídeo)",
    codigoAtc: "J01FA10",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido, suspensão oral",
    viaAdministracao: "Oral",
    resumo: "Macrolídeo de meia-vida longa, permite esquemas curtos de tratamento (3 a 5 dias).",
    indicacoes: [
      "Pneumonia adquirida na comunidade (atípica)",
      "Faringoamigdalite em alérgicos a penicilina",
      "Infecções sexualmente transmissíveis (clamídia)",
      "Exacerbações de DPOC",
    ],
    mecanismoAcao:
      "Liga-se à subunidade ribossômica 50S bacteriana, inibindo a síntese proteica. Possui ação bacteriostática (bactericida em altas concentrações contra alguns patógenos).",
    farmacocinetica:
      "Boa absorção oral, ampla distribuição tecidual com concentrações intracelulares elevadas (acúmulo em macrófagos e fibroblastos), o que confere meia-vida tecidual muito longa (2–4 dias) e justifica esquemas curtos. Eliminação predominantemente biliar/fecal.",
    posologia: "Adultos: 500 mg no primeiro dia, seguido de 250 mg/dia por mais 4 dias, ou 500 mg/dia por 3 dias.",
    ajusteRenalHepatico:
      "Não requer ajuste em insuficiência renal leve a moderada. Evitar em insuficiência hepática grave.",
    gestacaoLactacao:
      "Considerada de escolha entre os macrolídeos na gestação quando indicado; compatível com a lactação.",
    contraindicacoes: [
      "Hipersensibilidade a macrolídeos",
      "Doença hepática grave",
      "Histórico de prolongamento do intervalo QT",
    ],
    efeitosColaterais: [
      "Desconforto gastrointestinal",
      "Prolongamento do intervalo QT (raro)",
      "Elevação transitória de enzimas hepáticas",
    ],
    interacoes: [
      "Antiácidos: reduzem a absorção se administrados simultaneamente",
      "Varfarina: pode potencializar efeito anticoagulante",
      "Medicamentos que prolongam QT: risco aditivo de arritmia",
    ],
    monitorizacao: [
      "ECG basal em pacientes com fatores de risco para prolongamento de QT antes do uso",
    ],
    alertas: [
      "Avaliar risco cardiovascular antes de associar a outros fármacos que prolongam o intervalo QT.",
    ],
    similares: ["Claritromicina", "Eritromicina"],
    pontosDeProva: [
      "A meia-vida tecidual longa é o que permite o esquema de 3–5 dias com efeito prolongado, diferente da maioria dos antibióticos",
      "Risco de prolongamento de QT é compartilhado por toda a classe dos macrolídeos",
    ],
    doencasIndicadas: [
      { slug: "pneumonia-adquirida-na-comunidade", nome: "Pneumonia adquirida na comunidade" },
    ],
    fontes: [
      { tema: "Mecanismo de ação e farmacocinética (meia-vida tecidual longa)", fonte: "Goodman & Gilman, 13ª ed." },
    ],
  },
  {
    slug: "omeprazol",
    nome: "Omeprazol",
    nomeComercial: ["Losec", "Peprazol"],
    principioAtivo: "Omeprazol",
    categoria: "Inibidor da bomba de prótons (IBP)",
    codigoAtc: "A02BC01",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Cápsula de liberação retardada",
    viaAdministracao: "Oral",
    resumo: "Inibidor da bomba de prótons de referência para condições ácido-pépticas.",
    indicacoes: [
      "Doença do refluxo gastroesofágico (DRGE)",
      "Úlcera péptica gástrica e duodenal",
      "Erradicação de H. pylori (esquema combinado)",
      "Síndrome de Zollinger-Ellison",
    ],
    mecanismoAcao:
      "Inibe irreversivelmente a bomba H+/K+-ATPase nas células parietais gástricas, bloqueando a etapa final da secreção ácida.",
    farmacocinetica:
      "Pró-droga ativada em meio ácido nas células parietais. Metabolização hepática pelo CYP2C19 (polimorfismo genético relevante — metabolizadores lentos têm maior exposição). Meia-vida plasmática curta (~1h), mas efeito prolongado pela inibição irreversível da bomba de prótons.",
    posologia: "Adultos: 20–40 mg por via oral, 1 vez ao dia, em jejum, por 4–8 semanas conforme indicação.",
    ajusteRenalHepatico:
      "Não requer ajuste em insuficiência renal. Reduzir dose em insuficiência hepática grave.",
    gestacaoLactacao:
      "Considerado seguro na gestação quando indicado; dados limitados na lactação, geralmente considerado compatível.",
    contraindicacoes: [
      "Hipersensibilidade a inibidores da bomba de prótons",
      "Uso concomitante com nelfinavir",
    ],
    efeitosColaterais: [
      "Cefaleia",
      "Diarreia ou constipação",
      "Risco de deficiência de B12 e magnésio em uso prolongado",
      "Aumento do risco de fraturas ósseas em uso crônico",
    ],
    interacoes: [
      "Clopidogrel: possível redução do efeito antiplaquetário",
      "Diminui absorção de fármacos dependentes de pH ácido (cetoconazol, ferro)",
      "Metotrexato em altas doses: risco de toxicidade aumentada",
    ],
    monitorizacao: [
      "Magnésio sérico em uso prolongado (>1 ano)",
      "Vitamina B12 em uso crônico prolongado",
    ],
    alertas: [
      "Reavaliar periodicamente a necessidade de manutenção em uso crônico; desmame gradual evita hipersecreção ácida de rebote.",
    ],
    similares: ["Pantoprazol", "Esomeprazol", "Lansoprazol"],
    pontosDeProva: [
      "Apesar da meia-vida plasmática curta, o efeito é prolongado porque a inibição da bomba H+/K+-ATPase é irreversível — só nova síntese de bombas restaura a secreção ácida",
      "Reduz a absorção/ativação do clopidogrel ao inibir o CYP2C19, sua via de ativação — evitar associação quando possível",
    ],
    doencasIndicadas: [
      { slug: "gastrite", nome: "Gastrite" },
      { slug: "drge", nome: "Doença do refluxo gastroesofágico" },
      { slug: "ulcera-peptica", nome: "Úlcera péptica" },
    ],
    fontes: [
      { tema: "Mecanismo de ação e farmacocinética", fonte: "Goodman & Gilman, 13ª ed." },
    ],
  },
  {
    slug: "losartana-potassica",
    nome: "Losartana potássica",
    nomeComercial: ["Cozaar", "Aradois"],
    principioAtivo: "Losartana potássica",
    categoria: "Anti-hipertensivo (bloqueador do receptor de angiotensina II)",
    codigoAtc: "C09CA01",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido revestido",
    viaAdministracao: "Oral",
    resumo: "BRA de primeira linha para hipertensão, com boa tolerabilidade e proteção renal em diabéticos.",
    indicacoes: [
      "Hipertensão arterial sistêmica",
      "Nefropatia diabética",
      "Insuficiência cardíaca (em intolerantes a IECA)",
    ],
    mecanismoAcao:
      "Bloqueia seletivamente o receptor AT1 da angiotensina II, impedindo a vasoconstrição e a liberação de aldosterona mediadas por esse receptor.",
    farmacocinetica:
      "Pró-droga parcialmente convertida no fígado (CYP2C9) ao metabólito ativo E-3174, mais potente que o composto original. Boa absorção oral, eliminação biliar e renal.",
    posologia: "Adultos: 50 mg por via oral, 1 vez ao dia, podendo ser ajustada até 100 mg/dia.",
    ajusteRenalHepatico:
      "Não requer ajuste inicial em insuficiência renal leve a moderada; monitorizar potássio/creatinina em disfunção renal significativa. Reduzir dose em insuficiência hepática.",
    gestacaoLactacao:
      "Contraindicada no segundo e terceiro trimestres (fetotoxicidade); evitar também no primeiro trimestre. Evitar na lactação por dados limitados.",
    contraindicacoes: [
      "Gestação (segundo e terceiro trimestres)",
      "Hipersensibilidade a antagonistas de angiotensina II",
      "Uso concomitante com alisquireno em diabéticos",
    ],
    efeitosColaterais: [
      "Tontura",
      "Hipercalemia",
      "Hipotensão sintomática",
    ],
    interacoes: [
      "Diuréticos poupadores de potássio: risco de hipercalemia",
      "AINEs: podem reduzir o efeito anti-hipertensivo e a função renal",
      "Lítio: aumento dos níveis séricos de lítio",
    ],
    monitorizacao: [
      "Potássio e creatinina séricos antes e após início/ajuste de dose",
    ],
    alertas: [
      "Contraindicado na gestação — suspender assim que a gravidez for confirmada.",
    ],
    similares: ["Valsartana", "Candesartana", "Telmisartana"],
    pontosDeProva: [
      "Losartana é pró-droga — parte do seu efeito depende da conversão hepática ao metabólito ativo E-3174",
      "BRAs compartilham as mesmas contraindicações gestacionais dos IECA, apesar do mecanismo diferente",
    ],
    doencasIndicadas: [
      { slug: "hipertensao-arterial-sistemica", nome: "Hipertensão arterial sistêmica" },
      { slug: "insuficiencia-cardiaca", nome: "Insuficiência cardíaca" },
      { slug: "doenca-renal-cronica", nome: "Doença renal crônica" },
      { slug: "aneurisma-dissecao-aorta", nome: "Aneurisma e dissecção da aorta" },
      { slug: "sindrome-nefrotica", nome: "Síndrome nefrótica" },
      { slug: "doenca-renal-policistica-malformacoes-renais-congenitas", nome: "Doença renal policística e outras malformações renais congênitas" },
    ],
    fontes: [
      { tema: "Mecanismo de ação", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Indicação em HAS, IC e nefropatia diabética/DRC", fonte: "Diretriz Brasileira de Hipertensão Arterial, 2020 / Diretriz de IC SBC, 2021 / KDIGO 2024" },
    ],
  },
  {
    slug: "captopril",
    nome: "Captopril",
    nomeComercial: ["Capoten"],
    principioAtivo: "Captopril",
    categoria: "Anti-hipertensivo (inibidor da ECA)",
    codigoAtc: "C09AA01",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido",
    viaAdministracao: "Oral",
    resumo: "IECA de ação curta, ainda usado em urgências hipertensivas e como referência da classe.",
    indicacoes: [
      "Hipertensão arterial sistêmica",
      "Insuficiência cardíaca com fração de ejeção reduzida",
      "Nefropatia diabética",
      "Pós-infarto do miocárdio",
    ],
    mecanismoAcao:
      "Inibe a enzima conversora de angiotensina (ECA), reduzindo a formação de angiotensina II e a degradação de bradicinina, resultando em vasodilatação.",
    farmacocinetica:
      "Absorção oral rápida, reduzida por alimentos (administrar em jejum). Diferente da maioria dos outros IECA, já é ativo e não depende de conversão hepática. Meia-vida curta (~2h), o que justifica doses múltiplas ao dia. Eliminação predominantemente renal.",
    posologia: "Adultos: 25 mg por via oral, 2–3 vezes ao dia, podendo ser titulado até 150 mg/dia.",
    ajusteRenalHepatico:
      "Ajustar dose em insuficiência renal (risco de acúmulo e hipercalemia). Não requer ajuste hepático significativo.",
    gestacaoLactacao:
      "Contraindicado em todos os trimestres da gestação (fetotoxicidade, incluindo oligoidrâmnio e disgenesia renal fetal). Compatível com a lactação em doses habituais.",
    contraindicacoes: [
      "Gestação",
      "Histórico de angioedema por IECA",
      "Estenose bilateral de artéria renal",
    ],
    efeitosColaterais: [
      "Tosse seca persistente",
      "Hipercalemia",
      "Angioedema (raro, porém grave)",
      "Hipotensão na primeira dose",
    ],
    interacoes: [
      "Diuréticos poupadores de potássio e suplementos de potássio: risco de hipercalemia",
      "AINEs: redução do efeito anti-hipertensivo",
      "Lítio: aumento da toxicidade do lítio",
    ],
    monitorizacao: [
      "Potássio e creatinina séricos 1–2 semanas após início ou ajuste de dose",
    ],
    alertas: [
      "Suspender imediatamente diante de sinais de angioedema (edema de face, lábios ou via aérea).",
    ],
    similares: ["Enalapril", "Ramipril", "Lisinopril"],
    pontosDeProva: [
      "É o único IECA clássico que não é pró-droga — já atua diretamente, ao contrário de enalapril, ramipril e outros",
      "Sua meia-vida curta o torna útil em urgências hipertensivas, mas exige múltiplas doses diárias em manutenção",
    ],
    doencasIndicadas: [
      { slug: "hipertensao-arterial-sistemica", nome: "Hipertensão arterial sistêmica" },
      { slug: "insuficiencia-cardiaca", nome: "Insuficiência cardíaca" },
      { slug: "doenca-renal-cronica", nome: "Doença renal crônica" },
      { slug: "infarto-agudo-miocardio", nome: "Infarto agudo do miocárdio" },
      { slug: "cardiomiopatias", nome: "Cardiomiopatias" },
      { slug: "aneurisma-dissecao-aorta", nome: "Aneurisma e dissecção da aorta" },
      { slug: "esclerose-sistemica", nome: "Esclerose sistêmica" },
    ],
    fontes: [
      { tema: "Mecanismo de ação", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Indicação em HAS, IC e nefropatia diabética/DRC", fonte: "Diretriz Brasileira de Hipertensão Arterial, 2020 / Diretriz de IC SBC, 2021 / KDIGO 2024" },
    ],
  },
  {
    slug: "metformina",
    nome: "Metformina",
    nomeComercial: ["Glifage", "Glucoformin"],
    principioAtivo: "Cloridrato de metformina",
    categoria: "Antidiabético oral (biguanida)",
    codigoAtc: "A10BA02",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido, comprimido de liberação prolongada (XR)",
    viaAdministracao: "Oral",
    resumo: "Primeira linha no tratamento do diabetes mellitus tipo 2, sem risco de hipoglicemia isolada.",
    indicacoes: [
      "Diabetes mellitus tipo 2",
      "Síndrome dos ovários policísticos (uso off-label)",
      "Pré-diabetes em pacientes selecionados",
    ],
    mecanismoAcao:
      "Reduz a produção hepática de glicose (gliconeogênese) e aumenta a sensibilidade periférica à insulina, sem estimular a secreção pancreática de insulina.",
    farmacocinetica:
      "Absorção oral incompleta (~50–60%), não se liga a proteínas plasmáticas, não é metabolizada — eliminada inalterada por via renal (secreção tubular ativa). Meia-vida de 4–9 horas.",
    posologia: "Adultos: iniciar com 500–850 mg por via oral, 1–2 vezes ao dia com as refeições, titulando até 2000–2550 mg/dia.",
    ajusteRenalHepatico:
      "Contraindicada com TFG <30 mL/min; reduzir dose entre 30–45 mL/min. Contraindicada em insuficiência hepática significativa pelo risco de acidose lática.",
    gestacaoLactacao:
      "Cada vez mais utilizada na gestação (especialmente em diabetes gestacional e SOP), considerada de baixo risco. Compatível com a lactação.",
    contraindicacoes: [
      "Insuficiência renal grave (TFG < 30 mL/min)",
      "Acidose metabólica aguda ou histórico de acidose lática",
      "Insuficiência hepática grave",
    ],
    efeitosColaterais: [
      "Desconforto gastrointestinal (náusea, diarreia)",
      "Gosto metálico",
      "Deficiência de vitamina B12 em uso prolongado",
      "Acidose lática (raro, porém grave)",
    ],
    interacoes: [
      "Contrastes iodados: suspender temporariamente pelo risco de nefrotoxicidade e acidose lática",
      "Álcool: aumenta o risco de acidose lática",
    ],
    monitorizacao: [
      "Função renal (TFG) periodicamente, especialmente em idosos",
      "Vitamina B12 em uso prolongado",
    ],
    alertas: [
      "Suspender antes de exames com contraste iodado e reavaliar a função renal antes de reintroduzir.",
    ],
    similares: ["Metformina XR", "Vildagliptina + Metformina (combinação)"],
    pontosDeProva: [
      "Por não ser metabolizada e depender de eliminação renal exclusiva, o risco de acidose lática está diretamente ligado à função renal",
      "Deve ser suspensa antes de contraste iodado pelo risco combinado de nefrotoxicidade e acidose lática",
    ],
    doencasIndicadas: [
      { slug: "diabetes-mellitus-tipo-2", nome: "Diabetes mellitus tipo 2" },
    ],
    fontes: [
      { tema: "Mecanismo de ação e farmacocinética", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Posição como 1ª linha farmacológica no DM2", fonte: "Diretrizes da Sociedade Brasileira de Diabetes, 2023-2024" },
    ],
  },
  {
    slug: "sinvastatina",
    nome: "Sinvastatina",
    nomeComercial: ["Zocor", "Sinvascor"],
    principioAtivo: "Sinvastatina",
    categoria: "Hipolipemiante (estatina)",
    codigoAtc: "C10AA01",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido revestido",
    viaAdministracao: "Oral",
    resumo: "Estatina de uso consolidado na prevenção primária e secundária de eventos cardiovasculares.",
    indicacoes: [
      "Dislipidemia",
      "Prevenção primária e secundária de doença cardiovascular aterosclerótica",
    ],
    mecanismoAcao:
      "Inibe a enzima HMG-CoA redutase, reduzindo a síntese hepática de colesterol e aumentando a expressão de receptores de LDL, o que diminui os níveis circulantes de LDL-colesterol.",
    farmacocinetica:
      "Pró-droga (lactona) hidrolisada no fígado à forma ativa. Metabolização extensa pelo CYP3A4 (grande potencial de interações). Biodisponibilidade sistêmica baixa (~5%) por extenso efeito de primeira passagem. Eliminação predominantemente biliar/fecal.",
    posologia: "Adultos: 10–40 mg por via oral, 1 vez ao dia, à noite.",
    ajusteRenalHepatico:
      "Contraindicada em doença hepática ativa. Iniciar com doses menores em insuficiência renal grave pelo maior risco de miopatia.",
    gestacaoLactacao:
      "Contraindicada na gestação e lactação (interfere na síntese de colesterol necessária ao desenvolvimento fetal).",
    contraindicacoes: [
      "Doença hepática ativa",
      "Gestação e lactação",
      "Uso concomitante com inibidores potentes do CYP3A4 (ex.: itraconazol)",
    ],
    efeitosColaterais: [
      "Mialgia",
      "Elevação de transaminases",
      "Miopatia e, raramente, rabdomiólise",
    ],
    interacoes: [
      "Fibratos (especialmente genfibrozila): aumento do risco de miopatia",
      "Suco de toranja em grande quantidade: aumenta níveis séricos da estatina",
      "Amiodarona e verapamil: aumentam o risco de miopatia",
    ],
    monitorizacao: [
      "Transaminases hepáticas antes do início e se sintomas sugestivos de hepatotoxicidade",
      "CPK se houver mialgia significativa",
    ],
    alertas: [
      "Orientar o paciente a relatar dor muscular inexplicada, que pode preceder rabdomiólise.",
    ],
    similares: ["Atorvastatina", "Rosuvastatina", "Pravastatina"],
    pontosDeProva: [
      "Metabolização pelo CYP3A4 explica a interação clássica com suco de toranja e com inibidores potentes dessa enzima",
      "É contraindicação absoluta na gestação, diferente de outros anti-hipertensivos/cardiovasculares que têm alternativas mais seguras",
    ],
    doencasIndicadas: [
      { slug: "infarto-agudo-miocardio", nome: "Infarto agudo do miocárdio" },
      { slug: "angina-pectoris", nome: "Angina pectoris" },
      { slug: "doenca-isquemica-cronica-coracao", nome: "Doença isquêmica crônica do coração" },
      { slug: "dislipidemia", nome: "Dislipidemia" },
      { slug: "ait-ataque-isquemico-transitorio", nome: "Ataque isquêmico transitório (AIT)" },
      { slug: "avc-isquemico-infarto-cerebral", nome: "Infarto cerebral (AVC isquêmico)" },
    ],
    fontes: [
      { tema: "Mecanismo de ação", fonte: "Goodman & Gilman, 13ª ed." },
    ],
  },
  {
    slug: "prednisona",
    nome: "Prednisona",
    nomeComercial: ["Meticorten", "Predsim"],
    principioAtivo: "Prednisona",
    categoria: "Corticosteroide sistêmico",
    codigoAtc: "H02AB07",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido",
    viaAdministracao: "Oral",
    resumo: "Corticoide de ação intermediária, usado em condições inflamatórias, alérgicas e autoimunes.",
    indicacoes: [
      "Exacerbação de asma e DPOC",
      "Doenças autoimunes (artrite reumatoide, LES)",
      "Reações alérgicas graves",
      "Doenças inflamatórias intestinais",
    ],
    mecanismoAcao:
      "Liga-se a receptores glicocorticoides intracelulares, modulando a transcrição gênica e reduzindo a produção de mediadores inflamatórios (citocinas, prostaglandinas).",
    farmacocinetica:
      "Pró-droga convertida no fígado ao metabólito ativo prednisolona. Boa absorção oral, meia-vida biológica intermediária (efeito anti-inflamatório mais prolongado, 12–36h, do que a meia-vida plasmática sugere).",
    posologia: "Varia conforme indicação: 0,5–1 mg/kg/dia por via oral em dose única matinal, com desmame gradual em uso prolongado.",
    ajusteRenalHepatico:
      "Em insuficiência hepática grave, preferir prednisolona (já ativa, não depende de conversão hepática). Não requer ajuste renal significativo.",
    gestacaoLactacao:
      "Pode ser usada na gestação quando indicado (metabolização placentária limita a passagem fetal); compatível com a lactação em doses baixas a moderadas.",
    contraindicacoes: [
      "Infecções fúngicas sistêmicas não tratadas",
      "Hipersensibilidade a corticosteroides",
    ],
    efeitosColaterais: [
      "Hiperglicemia",
      "Aumento de peso e redistribuição de gordura",
      "Osteoporose em uso prolongado",
      "Imunossupressão e maior risco de infecções",
      "Insônia e alterações de humor",
    ],
    interacoes: [
      "AINEs: aumento do risco de úlcera péptica",
      "Diuréticos depletores de potássio: risco de hipocalemia",
      "Vacinas de vírus vivos: contraindicadas em imunossupressão significativa",
    ],
    monitorizacao: [
      "Glicemia e pressão arterial",
      "Densitometria óssea em uso prolongado (>3 meses)",
      "Sinais de infecção (podem estar mascarados pelo efeito anti-inflamatório)",
    ],
    alertas: [
      "Nunca suspender abruptamente após uso prolongado — risco de insuficiência adrenal aguda. Desmame gradual é obrigatório.",
    ],
    similares: ["Prednisolona", "Deflazacorte"],
    pontosDeProva: [
      "Prednisona é pró-droga; em hepatopatas graves prefere-se prednisolona, que já é a forma ativa",
      "A supressão do eixo hipotálamo-hipófise-adrenal com uso prolongado é a razão do desmame obrigatório",
    ],
    doencasIndicadas: [
      { slug: "asma", nome: "Asma" },
      { slug: "artrite-reumatoide", nome: "Artrite reumatoide" },
      { slug: "lupus-eritematoso-sistemico", nome: "Lúpus eritematoso sistêmico" },
      { slug: "estado-de-mal-asmatico", nome: "Estado de mal asmático" },
      { slug: "doencas-pulmonares-intersticiais", nome: "Doenças pulmonares intersticiais" },
      { slug: "doenca-de-crohn", nome: "Doença de Crohn" },
      { slug: "colite-ulcerativa", nome: "Colite ulcerativa" },
      { slug: "dermatopoliomiosite", nome: "Dermatopoliomiosite" },
      { slug: "poliarterite-nodosa-vasculites", nome: "Poliarterite nodosa e outras vasculites" },
      { slug: "paralisia-de-bell", nome: "Paralisia de Bell (paralisia facial periférica idiopática)" },
      { slug: "anemia-hemolitica-adquirida", nome: "Anemia hemolítica adquirida" },
      { slug: "purpura-afeccoes-hemorragicas", nome: "Púrpura e outras afecções hemorrágicas" },
      { slug: "linfoma-nao-hodgkin-difuso", nome: "Linfoma não-Hodgkin difuso" },
      { slug: "leucemia-linfoide", nome: "Leucemia linfoide" },
      { slug: "sindrome-nefrotica", nome: "Síndrome nefrótica" },
      { slug: "nefrite-tubulo-intersticial-aguda", nome: "Nefrite túbulo-intersticial aguda" },
      { slug: "transtornos-funcao-vestibular", nome: "Transtornos da função vestibular" },
      { slug: "polipo-nasal", nome: "Pólipo nasal" },
      { slug: "penfigo", nome: "Pênfigo" },
    ],
    fontes: [
      { tema: "Mecanismo de ação glicocorticoide", fonte: "Goodman & Gilman, 13ª ed." },
    ],
  },
  {
    slug: "salbutamol",
    nome: "Salbutamol",
    nomeComercial: ["Aerolin", "Ventolin"],
    principioAtivo: "Sulfato de salbutamol (albuterol)",
    categoria: "Broncodilatador (β2-agonista de curta duração)",
    codigoAtc: "R03AC02",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Aerossol inalatório, solução para nebulização",
    viaAdministracao: "Inalatória",
    resumo: "Broncodilatador de resgate, primeira escolha para alívio rápido de broncoespasmo.",
    indicacoes: [
      "Crise aguda de asma",
      "Broncoespasmo em DPOC",
      "Prevenção de broncoespasmo induzido por exercício",
    ],
    mecanismoAcao:
      "Estimula seletivamente os receptores β2-adrenérgicos da musculatura lisa brônquica, promovendo broncodilatação rápida por relaxamento muscular.",
    farmacocinetica:
      "Início de ação rápido por via inalatória (minutos), pico em 30–60 min e duração de 4–6 horas. A pequena fração absorvida sistemicamente é metabolizada no fígado e eliminada por via renal.",
    posologia: "Adultos e crianças: 100–200 mcg (1–2 jatos) por via inalatória, repetível a cada 4–6 horas conforme necessidade; nebulização com 2,5–5 mg em crises.",
    ajusteRenalHepatico:
      "Não requer ajuste significativo em disfunção renal ou hepática nas doses inalatórias habituais.",
    gestacaoLactacao:
      "Considerado seguro na gestação e lactação nas doses inalatórias habituais — asma não controlada representa risco maior ao feto do que o tratamento.",
    contraindicacoes: [
      "Hipersensibilidade ao salbutamol",
      "Uso com cautela em arritmias cardíacas graves",
    ],
    efeitosColaterais: [
      "Tremores",
      "Taquicardia e palpitações",
      "Cefaleia",
      "Hipocalemia em doses altas repetidas",
    ],
    interacoes: [
      "Betabloqueadores não seletivos: podem antagonizar o efeito broncodilatador",
      "Diuréticos: potencializam o risco de hipocalemia",
    ],
    monitorizacao: [
      "Frequência de uso do resgate (marcador indireto de controle da asma)",
      "Potássio sérico em uso repetido de doses altas (nebulizações frequentes)",
    ],
    alertas: [
      "Uso frequente de resgate (>2x/semana) indica controle inadequado da asma e necessidade de reavaliar a terapia de manutenção.",
    ],
    similares: ["Fenoterol", "Terbutalina"],
    pontosDeProva: [
      "A frequência de uso do salbutamol de resgate é, na prática, um marcador de controle da asma tão importante quanto os sintomas relatados",
      "Em doses altas repetidas pode causar hipocalemia por redistribuição intracelular de potássio",
    ],
    doencasIndicadas: [
      { slug: "asma", nome: "Asma" },
      { slug: "dpoc", nome: "Doença pulmonar obstrutiva crônica" },
      { slug: "estado-de-mal-asmatico", nome: "Estado de mal asmático" },
    ],
    fontes: [
      { tema: "Mecanismo de ação β2-agonista", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Uso como resgate e marcador de controle da asma", fonte: "GINA (Global Initiative for Asthma), 2024" },
    ],
  },
  {
    slug: "diazepam",
    nome: "Diazepam",
    nomeComercial: ["Valium", "Diempax"],
    principioAtivo: "Diazepam",
    categoria: "Ansiolítico (benzodiazepínico)",
    codigoAtc: "N05BA01",
    tarja: "Tarja preta",
    formaFarmaceutica: "Comprimido, solução injetável",
    viaAdministracao: "Oral ou intravenosa",
    resumo: "Benzodiazepínico de ação longa, também usado como anticonvulsivante e relaxante muscular.",
    indicacoes: [
      "Transtornos de ansiedade (uso pontual)",
      "Estado de mal epiléptico (via IV)",
      "Espasticidade muscular",
      "Síndrome de abstinência alcoólica",
    ],
    mecanismoAcao:
      "Potencializa a ação do GABA ao ligar-se a um sítio alostérico do receptor GABA-A, aumentando a frequência de abertura dos canais de cloreto e promovendo efeito sedativo, ansiolítico e anticonvulsivante.",
    farmacocinetica:
      "Absorção oral rápida e completa, alta lipossolubilidade permite rápida passagem pela barreira hematoencefálica (início de ação rápido). Metabolização hepática (CYP3A4/2C19) com formação de metabólitos ativos (desmetildiazepam, entre outros), o que prolonga muito sua ação. Meia-vida longa (20–100 horas, incluindo metabólitos).",
    posologia: "Adultos: 2–10 mg por via oral, 2–4 vezes ao dia conforme indicação; 5–10 mg IV lenta no estado de mal epiléptico.",
    ajusteRenalHepatico:
      "Reduzir dose e espaçar intervalo em insuficiência hepática (metabolização comprometida, acúmulo de metabólitos ativos). Usar com cautela em insuficiência renal grave.",
    gestacaoLactacao:
      "Evitar na gestação (associação com fissura orofacial no primeiro trimestre e síndrome do bebê hipotônico no periparto); evitar na lactação pelo acúmulo de metabólitos ativos no lactente.",
    contraindicacoes: [
      "Miastenia gravis",
      "Insuficiência respiratória grave",
      "Glaucoma de ângulo fechado não tratado",
      "Apneia do sono grave",
    ],
    efeitosColaterais: [
      "Sedação e sonolência",
      "Comprometimento cognitivo e psicomotor",
      "Dependência física e psicológica com uso prolongado",
      "Depressão respiratória (especialmente associado a opioides)",
    ],
    interacoes: [
      "Álcool e opioides: risco aumentado de depressão respiratória grave",
      "Outros depressores do SNC: efeito sedativo aditivo",
    ],
    monitorizacao: [
      "Nível de sedação e função respiratória, especialmente se associado a outros depressores do SNC",
      "Sinais de dependência em uso prolongado",
    ],
    alertas: [
      "Medicamento sujeito a controle especial (tarja preta). Evitar uso contínuo prolongado pelo risco de tolerância e dependência; retirada deve ser gradual.",
    ],
    similares: ["Clonazepam", "Lorazepam", "Alprazolam"],
    pontosDeProva: [
      "A meia-vida muito longa do diazepam e de seus metabólitos ativos o diferencia de benzodiazepínicos de ação curta, sendo por isso preferido na abstinência alcoólica (efeito mais suave e prolongado)",
      "Deve ser evitado em idosos pelo risco aumentado de acúmulo, sedação prolongada e quedas",
    ],
    doencasIndicadas: [
      { slug: "estado-de-mal-epileptico", nome: "Estado de mal epiléptico" },
      { slug: "transtornos-ansiosos-tag-panico", nome: "Transtorno de ansiedade generalizada e transtorno do pânico" },
      { slug: "transtornos-uso-alcool", nome: "Transtornos por uso de álcool" },
    ],
    fontes: [
      { tema: "Mecanismo de ação (potencialização GABA-A)", fonte: "Goodman & Gilman, 13ª ed." },
    ],
  },
  {
    slug: "varfarina-sodica",
    nome: "Varfarina sódica",
    nomeComercial: ["Marevan", "Coumadin"],
    principioAtivo: "Varfarina sódica",
    categoria: "Anticoagulante (antagonista da vitamina K)",
    codigoAtc: "B01AA03",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido",
    viaAdministracao: "Oral",
    resumo: "Anticoagulante oral clássico, exige monitorização periódica pelo INR devido à janela terapêutica estreita.",
    indicacoes: [
      "Fibrilação atrial com risco tromboembólico",
      "Tromboembolismo venoso",
      "Próteses valvares mecânicas",
    ],
    mecanismoAcao:
      "Inibe a enzima vitamina K epóxido redutase, reduzindo a síntese hepática dos fatores de coagulação dependentes de vitamina K (II, VII, IX e X).",
    farmacocinetica:
      "Absorção oral rápida e quase completa, alta ligação a proteínas plasmáticas (~99%), sujeita a múltiplas interações por deslocamento proteico. Metabolização hepática pelo CYP2C9 (polimorfismo genético relevante para variabilidade de dose). Meia-vida longa (20–60 horas).",
    posologia: "Adultos: dose inicial de 5 mg/dia por via oral, com ajuste individualizado guiado pelo INR (alvo geralmente 2,0–3,0).",
    ajusteRenalHepatico:
      "Usar com cautela em insuficiência hepática (risco aumentado de sangramento por menor síntese de fatores de coagulação). Não requer ajuste renal direto, mas a insuficiência renal pode influenciar o INR.",
    gestacaoLactacao:
      "Contraindicada na gestação (teratogênica — embriopatia varfarínica, especialmente no primeiro trimestre). Considerada compatível com a lactação.",
    contraindicacoes: [
      "Gestação (teratogênico)",
      "Sangramento ativo significativo",
      "Cirurgia recente do sistema nervoso central",
    ],
    efeitosColaterais: [
      "Sangramentos (desde equimoses até hemorragias graves)",
      "Necrose cutânea induzida por varfarina (rara)",
    ],
    interacoes: [
      "Múltiplas interações medicamentosas e alimentares (alimentos ricos em vitamina K reduzem o efeito)",
      "Antibióticos de amplo espectro: podem potencializar o efeito anticoagulante",
      "AINEs e AAS: aumento do risco de sangramento",
    ],
    monitorizacao: [
      "INR periódico, com alvo geralmente entre 2,0–3,0 conforme indicação",
      "Sinais de sangramento",
    ],
    alertas: [
      "Exige monitorização laboratorial contínua (INR) e orientação detalhada sobre interações alimentares e medicamentosas.",
    ],
    similares: ["Anticoagulantes orais diretos (rivaroxabana, apixabana) — classe distinta"],
    pontosDeProva: [
      "Ao contrário dos anticoagulantes orais diretos, exige monitorização laboratorial contínua pelo INR devido à janela terapêutica estreita e múltiplas interações",
      "Vitamina K é o antídoto específico em sangramento ou INR muito elevado; em sangramento grave, associa-se complexo protrombínico",
    ],
    doencasIndicadas: [
      { slug: "fibrilacao-flutter-atrial", nome: "Fibrilação e flutter atrial" },
      { slug: "trombose-venosa-profunda", nome: "Trombose venosa profunda" },
      { slug: "embolia-pulmonar", nome: "Embolia pulmonar" },
    ],
    fontes: [
      { tema: "Mecanismo de ação e monitorização por INR", fonte: "Goodman & Gilman, 13ª ed." },
    ],
  },
  {
    slug: "insulina-nph",
    nome: "Insulina NPH humana",
    nomeComercial: ["Humulin N", "Novolin N"],
    principioAtivo: "Insulina humana NPH (ação intermediária)",
    categoria: "Antidiabético injetável (insulina)",
    codigoAtc: "A10AC01",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Suspensão injetável",
    viaAdministracao: "Subcutânea",
    resumo: "Insulina de ação intermediária, disponível gratuitamente na rede pública, pilar do tratamento do diabetes tipo 1 e casos avançados de tipo 2.",
    indicacoes: [
      "Diabetes mellitus tipo 1",
      "Diabetes mellitus tipo 2 com falha de antidiabéticos orais",
      "Diabetes gestacional selecionado",
    ],
    mecanismoAcao:
      "Liga-se a receptores de insulina, promovendo captação celular de glicose e regulando o metabolismo de carboidratos, proteínas e lipídios. Formulação com protamina retarda a absorção, prolongando a duração de ação.",
    farmacocinetica:
      "Início de ação em 1–2 horas, pico em 4–12 horas, duração de 12–18 horas — perfil intermediário que geralmente exige 2 aplicações diárias para cobertura completa. Absorção subcutânea variável conforme o local de aplicação.",
    posologia: "Individualizada conforme glicemia e peso; geralmente iniciada com 0,2–0,4 UI/kg/dia por via subcutânea, ajustada por automonitorização.",
    ajusteRenalHepatico:
      "Reduzir dose em insuficiência renal e hepática, pois ambas prolongam a meia-vida da insulina circulante e aumentam o risco de hipoglicemia.",
    gestacaoLactacao:
      "Considerada segura na gestação (não atravessa a placenta em quantidade significativa) e na lactação; costuma ser a primeira escolha farmacológica para diabetes na gestação.",
    contraindicacoes: [
      "Hipoglicemia atual",
      "Hipersensibilidade ao componente da formulação",
    ],
    efeitosColaterais: [
      "Hipoglicemia (principal risco)",
      "Lipodistrofia no local de aplicação",
      "Ganho de peso",
    ],
    interacoes: [
      "Corticosteroides e diuréticos tiazídicos: podem elevar a glicemia e exigir ajuste de dose",
      "Betabloqueadores: podem mascarar sinais de hipoglicemia",
    ],
    monitorizacao: [
      "Glicemia capilar (automonitorização) para ajuste de dose",
      "Sinais de hipoglicemia noturna, mais comuns pelo pico de ação da NPH",
    ],
    alertas: [
      "Orientar rodízio dos locais de aplicação e reconhecimento dos sinais de hipoglicemia (sudorese, tremor, confusão).",
    ],
    similares: ["Insulina Regular (ação rápida)", "Insulina Glargina (ação prolongada)"],
    pontosDeProva: [
      "O pico de ação da NPH à noite explica a hipoglicemia noturna e é a base do fenômeno do alvorecer/efeito Somogyi, temas recorrentes em prova",
      "Insulina não atravessa a placenta, por isso é a farmacoterapia de escolha no diabetes gestacional quando a dieta não é suficiente",
    ],
    doencasIndicadas: [
      { slug: "diabetes-mellitus-tipo-2", nome: "Diabetes mellitus tipo 2" },
      { slug: "diabetes-mellitus-tipo-1", nome: "Diabetes mellitus tipo 1" },
      { slug: "diabetes-mellitus-gestacional", nome: "Diabetes mellitus na gravidez (diabetes gestacional)" },
    ],
    fontes: [
      { tema: "Mecanismo de ação e farmacocinética", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Indicação no DM2 com falha de antidiabéticos orais", fonte: "Diretrizes da Sociedade Brasileira de Diabetes, 2023-2024" },
    ],
  },
  {
    slug: "enalapril",
    nome: "Enalapril",
    nomeComercial: ["Renitec", "Eupressin"],
    principioAtivo: "Maleato de enalapril",
    categoria: "Anti-hipertensivo (inibidor da ECA)",
    codigoAtc: "C09AA02",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido",
    viaAdministracao: "Oral",
    resumo: "IECA de referência na Atenção Básica (RENAME), pilar do tratamento da hipertensão e da insuficiência cardíaca com fração de ejeção reduzida.",
    indicacoes: [
      "Hipertensão arterial sistêmica",
      "Insuficiência cardíaca com fração de ejeção reduzida",
      "Nefropatia diabética",
      "Disfunção ventricular esquerda pós-infarto",
    ],
    mecanismoAcao:
      "Inibe a enzima conversora de angiotensina (ECA), reduzindo a formação de angiotensina II e a degradação de bradicinina, com consequente vasodilatação e redução da pós-carga. Diferente do captopril, é uma pró-droga hidrolisada no fígado ao metabólito ativo enalaprilato, com ação mais prolongada.",
    farmacocinetica:
      "Absorção oral não significativamente afetada por alimentos. Como pró-droga, o início de ação é mais lento que o do captopril, mas a meia-vida efetiva do enalaprilato (~11h) permite 1–2 tomadas diárias. Eliminação predominantemente renal.",
    posologia: "Adultos: iniciar com 5 mg por via oral, 1–2 vezes ao dia, titulando conforme resposta até 20–40 mg/dia.",
    ajusteRenalHepatico:
      "Ajustar dose em insuficiência renal (risco de acúmulo e hipercalemia). Em insuficiência hepática grave, a conversão ao metabólito ativo pode estar prejudicada, reduzindo o efeito.",
    gestacaoLactacao:
      "Contraindicado em todos os trimestres da gestação (fetotoxicidade). Uso cauteloso na lactação, geralmente considerado compatível em doses habituais.",
    contraindicacoes: [
      "Gestação",
      "Histórico de angioedema por IECA",
      "Estenose bilateral de artéria renal",
      "Uso concomitante com alisquireno em diabéticos",
    ],
    efeitosColaterais: [
      "Tosse seca persistente",
      "Hipercalemia",
      "Hipotensão, principalmente após a primeira dose",
      "Angioedema (raro, porém grave)",
    ],
    interacoes: [
      "Diuréticos poupadores de potássio e suplementos de potássio: risco de hipercalemia",
      "AINEs: podem reduzir o efeito anti-hipertensivo e a função renal",
      "Lítio: aumento da toxicidade do lítio",
    ],
    monitorizacao: [
      "Potássio e creatinina séricos 1–2 semanas após início ou ajuste de dose",
    ],
    alertas: [
      "Junto com betabloqueador, antagonista mineralocorticoide e iSGLT2, forma um dos quatro pilares farmacológicos da insuficiência cardíaca com fração de ejeção reduzida.",
    ],
    similares: ["Captopril", "Ramipril", "Lisinopril", "Losartana (BRA, alternativa se tosse por IECA)"],
    pontosDeProva: [
      "Por ser pró-droga, o início de ação é mais lento que o do captopril, mas a duração mais longa permite posologia mais conveniente",
      "É um dos quatro pilares farmacológicos da IC com fração de ejeção reduzida, junto com betabloqueador, antagonista mineralocorticoide e iSGLT2",
    ],
    doencasIndicadas: [
      { slug: "hipertensao-arterial-sistemica", nome: "Hipertensão arterial sistêmica" },
      { slug: "insuficiencia-cardiaca", nome: "Insuficiência cardíaca" },
      { slug: "cardiomiopatias", nome: "Cardiomiopatias" },
      { slug: "infarto-agudo-miocardio", nome: "Infarto agudo do miocárdio" },
    ],
    fontes: [
      { tema: "Mecanismo de ação", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Indicação em HAS e como pilar da IC-FEr", fonte: "Diretriz Brasileira de Hipertensão Arterial, 2020 / Diretriz de IC SBC, 2021" },
    ],
  },
  {
    slug: "budesonida-inalatoria",
    nome: "Budesonida (inalatória)",
    nomeComercial: ["Busonid", "Pulmicort", "Miflonide"],
    principioAtivo: "Budesonida",
    categoria: "Corticosteroide inalatório",
    codigoAtc: "R03BA02",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Aerossol inalatório, cápsula inalante, suspensão para nebulização",
    viaAdministracao: "Inalatória",
    resumo: "Corticoide inalatório de referência no tratamento de manutenção da asma, inclusive em quadros leves.",
    indicacoes: [
      "Tratamento de manutenção da asma, em qualquer grau de gravidade",
      "Esquema combinado com formoterol para alívio e manutenção (MART)",
      "Laringite/crupe (nebulização, uso hospitalar selecionado)",
    ],
    mecanismoAcao:
      "Glicocorticoide com alta afinidade pelo receptor glicocorticoide e importante efeito de primeira passagem hepática, o que reduz a biodisponibilidade sistêmica quando administrado por via inalatória. Reduz a inflamação eosinofílica das vias aéreas, a hiper-responsividade brônquica e a produção de muco.",
    farmacocinetica:
      "Biodisponibilidade sistêmica baixa por via inalatória devido a extenso metabolismo de primeira passagem hepática (>90%) da fração deglutida. A fração que atinge os pulmões age localmente com absorção sistêmica limitada, reduzindo efeitos adversos sistêmicos em comparação a corticoides orais.",
    posologia: "Adultos: 200–800 mcg/dia por via inalatória, divididos em 1–2 tomadas, conforme gravidade e nível de controle da asma.",
    ajusteRenalHepatico:
      "Não requer ajuste renal. Usar com cautela em insuficiência hepática grave, pela redução do metabolismo de primeira passagem e possível aumento da exposição sistêmica.",
    gestacaoLactacao:
      "Considerada o corticoide inalatório de escolha na gestação pelo maior volume de dados de segurança acumulados; compatível com a lactação.",
    contraindicacoes: [
      "Hipersensibilidade à budesonida",
      "Tuberculose pulmonar ativa não tratada (usar com cautela e acompanhamento)",
    ],
    efeitosColaterais: [
      "Candidíase orofaríngea (reduzida com higiene oral e uso de espaçador)",
      "Disfonia",
      "Tosse irritativa após a inalação",
      "Supressão adrenal e redução da velocidade de crescimento infantil em doses altas prolongadas (efeito raro nas doses habituais)",
    ],
    interacoes: [
      "Inibidores potentes do CYP3A4 (cetoconazol, itraconazol, ritonavir): aumentam a exposição sistêmica à budesonida",
    ],
    monitorizacao: [
      "Técnica inalatória e adesão em cada consulta",
      "Velocidade de crescimento em crianças com uso prolongado em altas doses",
    ],
    alertas: [
      "Orientar bochecho com água após cada uso para reduzir o risco de candidíase oral e rouquidão.",
    ],
    similares: ["Beclometasona", "Fluticasona", "Formoterol + budesonida (combinação)"],
    pontosDeProva: [
      "O extenso efeito de primeira passagem hepática torna a via inalatória muito mais segura sistemicamente do que o corticoide oral para manutenção da asma",
      "Bochecho após o uso reduz candidíase oral e disfonia, os efeitos locais mais comuns",
    ],
    doencasIndicadas: [
      { slug: "asma", nome: "Asma" },
    ],
    fontes: [
      { tema: "Mecanismo de ação corticoide inalatório", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Papel central mesmo em asma leve", fonte: "GINA (Global Initiative for Asthma), 2024" },
    ],
  },
  {
    slug: "espironolactona",
    nome: "Espironolactona",
    nomeComercial: ["Aldactone"],
    principioAtivo: "Espironolactona",
    categoria: "Diurético poupador de potássio (antagonista mineralocorticoide)",
    codigoAtc: "C03DA01",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido",
    viaAdministracao: "Oral",
    resumo: "Antagonista da aldosterona com benefício de mortalidade comprovado na insuficiência cardíaca, também usado na hipertensão resistente.",
    indicacoes: [
      "Insuficiência cardíaca com fração de ejeção reduzida (classes II–IV)",
      "Hipertensão arterial resistente",
      "Ascite por cirrose hepática e hiperaldosteronismo",
      "Hirsutismo (uso off-label, efeito antiandrogênico)",
    ],
    mecanismoAcao:
      "Antagoniza competitivamente os receptores de mineralocorticoide (aldosterona) nos túbulos renais distais, reduzindo a reabsorção de sódio e água e a excreção de potássio. Na insuficiência cardíaca, também bloqueia efeitos deletérios da aldosterona sobre fibrose miocárdica e remodelamento cardíaco.",
    farmacocinetica:
      "Metabolização hepática extensa a metabólitos ativos (como a canrenona), responsáveis por parte do efeito prolongado. Início de ação mais lento que outros diuréticos (dias), com efeito máximo em cerca de 48–72 horas.",
    posologia: "Adultos: 12,5–25 mg por via oral, 1 vez ao dia, podendo ser titulada até 50 mg/dia conforme indicação e função renal.",
    ajusteRenalHepatico:
      "Contraindicada em insuficiência renal grave pelo risco de hipercalemia grave. Usar com cautela em hepatopatia (metabolização comprometida).",
    gestacaoLactacao:
      "Evitar na gestação (efeito antiandrogênico, risco de feminização de feto masculino); evitar na lactação por dados limitados e pelo metabólito ativo passar para o leite.",
    contraindicacoes: [
      "Hipercalemia",
      "Insuficiência renal grave",
      "Doença de Addison",
      "Uso concomitante com outros poupadores de potássio sem monitorização",
    ],
    efeitosColaterais: [
      "Hipercalemia",
      "Ginecomastia e mastalgia (efeito antiandrogênico, mais comum que na eplerenona)",
      "Irregularidade menstrual",
      "Lesão renal aguda em associação com outros nefrotóxicos",
    ],
    interacoes: [
      "IECA/BRA: risco aumentado de hipercalemia — exige monitorização de potássio e função renal",
      "AINEs: reduzem o efeito diurético e aumentam o risco de lesão renal",
      "Lítio: redução da depuração renal do lítio",
    ],
    monitorizacao: [
      "Potássio sérico e função renal, especialmente nas primeiras semanas e após ajuste de dose ou associação com IECA/BRA",
    ],
    alertas: [
      "Monitorizar potássio sérico e função renal periodicamente, especialmente ao associar com IECA/BRA — combinação eficaz, mas que exige vigilância laboratorial.",
    ],
    similares: ["Eplerenona (mesma classe, menor incidência de ginecomastia)"],
    pontosDeProva: [
      "Diferente dos diuréticos de alça/tiazídicos, seu efeito é lento (dias) — usada na IC pelo benefício de mortalidade, não pelo efeito diurético em si",
      "Ginecomastia é efeito adverso limitante de dose característico, por ação antiandrogênica — eplerenona é alternativa com menor incidência",
    ],
    doencasIndicadas: [
      { slug: "insuficiencia-cardiaca", nome: "Insuficiência cardíaca" },
      { slug: "cardiomiopatias", nome: "Cardiomiopatias" },
      { slug: "cirrose-hepatica", nome: "Fibrose e cirrose hepáticas" },
    ],
    fontes: [
      { tema: "Mecanismo de ação (antagonista mineralocorticoide)", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Benefício de mortalidade como um dos quatro pilares da IC-FEr", fonte: "Diretriz de Insuficiência Cardíaca Crônica, SBC 2021" },
    ],
  },
  {
    slug: "carvedilol",
    nome: "Carvedilol",
    nomeComercial: ["Coreg", "Dilbloc"],
    principioAtivo: "Carvedilol",
    categoria: "Betabloqueador (não seletivo, com ação alfa-1 bloqueadora)",
    codigoAtc: "C07AG02",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido",
    viaAdministracao: "Oral",
    resumo: "Betabloqueador de escolha na insuficiência cardíaca com fração de ejeção reduzida, com efeito vasodilatador adicional pelo bloqueio alfa-1.",
    indicacoes: [
      "Insuficiência cardíaca com fração de ejeção reduzida, em pacientes estáveis",
      "Hipertensão arterial sistêmica",
      "Disfunção ventricular esquerda pós-infarto",
    ],
    mecanismoAcao:
      "Bloqueia receptores beta-1 e beta-2 adrenérgicos de forma não seletiva e também receptores alfa-1, resultando em redução da frequência cardíaca e do consumo miocárdico de oxigênio associada a vasodilatação periférica — diferencial em relação a betabloqueadores puramente beta-seletivos.",
    farmacocinetica:
      "Boa absorção oral, mas biodisponibilidade reduzida por efeito de primeira passagem hepática significativo (~25%). Metabolização hepática extensa (principalmente CYP2D6), com metabólitos ativos. Meia-vida de 6–10 horas.",
    posologia: "Adultos com IC: iniciar com 3,125 mg por via oral, 2 vezes ao dia, com titulação lenta (dobrando a dose a cada 2 semanas conforme tolerância) até a dose-alvo, geralmente 25–50 mg/dia.",
    ajusteRenalHepatico:
      "Contraindicado em insuficiência hepática significativa (metabolização primariamente hepática). Não requer ajuste renal relevante.",
    gestacaoLactacao:
      "Uso cauteloso na gestação (betabloqueadores em geral associam-se a risco de restrição de crescimento fetal e bradicardia neonatal); dados limitados na lactação.",
    contraindicacoes: [
      "Asma ou broncoespasmo significativo (bloqueio beta-2 não seletivo)",
      "Bloqueio atrioventricular de 2º ou 3º grau sem marca-passo",
      "Insuficiência cardíaca descompensada/instável",
      "Bradicardia sintomática grave",
    ],
    efeitosColaterais: [
      "Tontura e hipotensão postural (efeito alfa-1)",
      "Fadiga",
      "Bradicardia",
      "Piora transitória dos sintomas de IC no início do tratamento",
    ],
    interacoes: [
      "Verapamil e diltiazem: risco aumentado de bradicardia e bloqueio atrioventricular",
      "Insulina e hipoglicemiantes: pode mascarar sintomas adrenérgicos de hipoglicemia",
      "Outros anti-hipertensivos: efeito hipotensor aditivo",
    ],
    monitorizacao: [
      "Frequência cardíaca e pressão arterial a cada ajuste de dose",
      "Sinais de piora da IC durante a titulação inicial",
    ],
    alertas: [
      "Nunca iniciar em paciente com insuficiência cardíaca descompensada — introduzir somente após estabilização, com titulação lenta e gradual.",
    ],
    similares: ["Metoprolol succinato (beta-1 seletivo, mesma indicação em IC)", "Bisoprolol"],
    pontosDeProva: [
      "O bloqueio alfa-1 adicional confere efeito vasodilatador extra em relação a metoprolol/bisoprolol (beta-1 seletivos), mas também maior risco de hipotensão postural",
      "Betabloqueador nunca deve ser iniciado durante descompensação aguda da IC — somente após estabilização, com titulação lenta",
    ],
    doencasIndicadas: [
      { slug: "insuficiencia-cardiaca", nome: "Insuficiência cardíaca" },
      { slug: "cardiomiopatias", nome: "Cardiomiopatias" },
    ],
    fontes: [
      { tema: "Mecanismo de ação (betabloqueio não seletivo + alfa-1)", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Benefício de mortalidade como um dos quatro pilares da IC-FEr", fonte: "Diretriz de Insuficiência Cardíaca Crônica, SBC 2021" },
    ],
  },
  {
    slug: "dapagliflozina",
    nome: "Dapagliflozina",
    nomeComercial: ["Forxiga"],
    principioAtivo: "Dapagliflozina",
    categoria: "Antidiabético oral (inibidor de SGLT2)",
    codigoAtc: "A10BK01",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido revestido",
    viaAdministracao: "Oral",
    resumo: "Inibidor de SGLT2 com benefício comprovado em diabetes tipo 2, insuficiência cardíaca e doença renal crônica, independentemente do controle glicêmico.",
    indicacoes: [
      "Diabetes mellitus tipo 2",
      "Insuficiência cardíaca (com ou sem fração de ejeção reduzida)",
      "Doença renal crônica com proteinúria significativa",
    ],
    mecanismoAcao:
      "Inibe o cotransportador sódio-glicose tipo 2 (SGLT2) no túbulo contorcido proximal, reduzindo a reabsorção renal de glicose e promovendo glicosúria. Os benefícios cardiorrenais parecem ir além do efeito glicêmico, envolvendo redução da pré-carga, efeitos hemodinâmicos intraglomerulares e metabólicos.",
    farmacocinetica:
      "Boa absorção oral, não depende da função das células beta pancreáticas. Metabolização hepática (glicuronidação), eliminação renal e fecal dos metabólitos inativos. Meia-vida de aproximadamente 12–13 horas, permitindo dose única diária.",
    posologia: "Adultos: 10 mg por via oral, 1 vez ao dia, pela manhã, independentemente das refeições.",
    ajusteRenalHepatico:
      "Eficácia glicêmica reduzida com TFG muito baixa, mas o benefício cardiorrenal pode se manter mesmo com função renal reduzida conforme indicação (IC/DRC) — ajustar conforme bula e indicação específica. Não requer ajuste em insuficiência hepática leve a moderada.",
    gestacaoLactacao:
      "Contraindicada na gestação e lactação (dados insuficientes de segurança; substituir por insulina se necessário tratamento farmacológico do diabetes nesse período).",
    contraindicacoes: [
      "Diabetes mellitus tipo 1",
      "Taxa de filtração glomerular muito reduzida conforme bula (avaliar caso a caso conforme indicação: DM2, IC ou DRC)",
      "Histórico de cetoacidose diabética",
    ],
    efeitosColaterais: [
      "Infecções genitais fúngicas (candidíase genital)",
      "Infecção do trato urinário",
      "Depleção de volume e hipotensão",
      "Cetoacidose diabética euglicêmica (rara, porém grave)",
    ],
    interacoes: [
      "Diuréticos: efeito depletor de volume aditivo",
      "Insulina e sulfonilureias: aumento do risco de hipoglicemia quando associados",
    ],
    monitorizacao: [
      "Função renal periodicamente",
      "Sinais de infecção genital/urinária",
      "Cetonemia/cetonúria se sintomas sugestivos de cetoacidose mesmo com glicemia pouco elevada",
    ],
    alertas: [
      "Suspender temporariamente em situações de jejum prolongado, cirurgia ou doença aguda grave, pelo risco de cetoacidose euglicêmica (glicemia pode estar apenas discretamente elevada).",
    ],
    similares: ["Empagliflozina", "Canagliflozina"],
    pontosDeProva: [
      "O benefício cardiorrenal dos iSGLT2 é independente do efeito glicêmico — por isso são usados na IC e DRC mesmo em pacientes não diabéticos",
      "Cetoacidose diabética euglicêmica é uma armadilha de prova: glicemia normal ou pouco elevada não exclui cetoacidose em uso de iSGLT2",
    ],
    doencasIndicadas: [
      { slug: "diabetes-mellitus-tipo-2", nome: "Diabetes mellitus tipo 2" },
      { slug: "insuficiencia-cardiaca", nome: "Insuficiência cardíaca" },
      { slug: "doenca-renal-cronica", nome: "Doença renal crônica" },
      { slug: "cardiomiopatias", nome: "Cardiomiopatias" },
    ],
    fontes: [
      { tema: "Mecanismo de ação (inibição de SGLT2)", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Benefício em IC e DRC independente do controle glicêmico", fonte: "Diretriz de Insuficiência Cardíaca Crônica, SBC 2021 / KDIGO Clinical Practice Guideline for CKD, 2024" },
    ],
  },
  {
    slug: "levotiroxina-sodica",
    nome: "Levotiroxina sódica",
    nomeComercial: ["Synthroid", "Puran T4"],
    principioAtivo: "Levotiroxina sódica",
    categoria: "Hormônio tireoidiano",
    codigoAtc: "H03AA01",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido",
    viaAdministracao: "Oral",
    resumo: "Hormônio tireoidiano sintético, tratamento de reposição de escolha no hipotireoidismo, com meia-vida longa que permite dose única diária.",
    indicacoes: [
      "Hipotireoidismo primário e central",
      "Supressão de TSH em nódulos/carcinoma diferenciado de tireoide selecionados",
      "Bócio simples eutireoidiano (uso seletivo)",
    ],
    mecanismoAcao:
      "Repõe o hormônio tireoidiano endógeno (T4), que é convertido perifericamente em T3 (forma biologicamente mais ativa) e se liga a receptores nucleares que regulam a transcrição gênica envolvida no metabolismo basal e no desenvolvimento de praticamente todos os tecidos.",
    farmacocinetica:
      "Absorção oral variável, reduzida por alimentos e por cálcio, ferro e inibidores da bomba de prótons administrados concomitantemente. Meia-vida longa (cerca de 7 dias), o que permite dose única diária e tolera esquecimentos ocasionais sem grande impacto. Conversão periférica a T3 pelas desiodases teciduais.",
    posologia:
      "Adultos: dose inicial de aproximadamente 1,6 mcg/kg/dia por via oral, em jejum, pela manhã; iniciar com doses menores (25–50 mcg/dia) e titulação gradual em idosos e cardiopatas, pelo risco de precipitar isquemia miocárdica com reposição rápida.",
    ajusteRenalHepatico:
      "Não requer ajuste renal. Em hepatopatia significativa, iniciar com doses menores e reavaliar TSH com mais frequência.",
    gestacaoLactacao:
      "Segura na gestação — a necessidade de dose tipicamente aumenta (cerca de 30-50%) devido ao aumento da globulina ligadora de tiroxina e à transferência placentária; compatível com a lactação em doses habituais.",
    contraindicacoes: [
      "Tireotoxicose não tratada",
      "Insuficiência adrenal não corrigida (deve ser tratada antes, pelo risco de precipitar crise adrenal)",
      "Infarto agudo do miocárdio recente não estabilizado (cautela, iniciar com doses baixas)",
    ],
    efeitosColaterais: [
      "Sintomas de tireotoxicose por sobredosagem (palpitações, tremor, perda de peso, insônia)",
      "Arritmias, especialmente em idosos e cardiopatas com dose excessiva",
      "Redução de densidade mineral óssea com supressão crônica excessiva do TSH",
    ],
    interacoes: [
      "Cálcio, ferro, inibidores da bomba de prótons e colestiramina reduzem a absorção — espaçar a administração em pelo menos 4 horas",
      "Varfarina: pode potencializar o efeito anticoagulante, exigindo monitorização mais próxima do INR",
      "Pode aumentar a necessidade de insulina ou hipoglicemiantes orais em diabéticos",
    ],
    monitorizacao: [
      "TSH a cada 6-8 semanas após início ou ajuste de dose, depois anualmente em dose estável",
    ],
    alertas: [
      "Em pacientes com insuficiência adrenal concomitante (ex.: hipopituitarismo), sempre repor glicocorticoide antes de iniciar levotiroxina — a reposição tireoidiana pode acelerar o metabolismo do cortisol residual e precipitar crise adrenal.",
    ],
    similares: ["Liotironina (T3, uso seletivo em situações específicas)"],
    pontosDeProva: [
      "TSH é o parâmetro central de monitorização no hipotireoidismo primário — não o T4 livre isoladamente, que responde mais lentamente aos ajustes de dose",
      "Deve ser tomada em jejum, com intervalo de cálcio, ferro e inibidores da bomba de prótons, que reduzem significativamente sua absorção",
    ],
    doencasIndicadas: [
      { slug: "hipotireoidismo", nome: "Hipotireoidismo" },
      { slug: "tireoidite", nome: "Tireoidite" },
    ],
    fontes: [
      { tema: "Código ATC e dados de posologia/forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação e farmacocinética", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Monitorização por TSH e ajuste de dose", fonte: "American Thyroid Association, Guidelines for the Treatment of Hypothyroidism, 2014" },
    ],
  },
  {
    slug: "esquema-ripe",
    nome: "Esquema RIPE (rifampicina + isoniazida + pirazinamida + etambutol)",
    nomeComercial: ["Comprimido em dose fixa combinada 4 em 1 (Ministério da Saúde)"],
    principioAtivo: "Rifampicina + Isoniazida + Pirazinamida + Etambutol",
    categoria: "Antituberculostáticos (esquema combinado de primeira linha)",
    codigoAtc: "J04AM06",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido revestido em dose fixa combinada (150+75+400+275 mg), Componente Estratégico",
    viaAdministracao: "Oral",
    resumo: "Esquema padronizado de primeira linha para tuberculose sensível: 2 meses de rifampicina, isoniazida, pirazinamida e etambutol (fase intensiva), seguidos de 4 meses de rifampicina e isoniazida (fase de manutenção).",
    indicacoes: [
      "Tuberculose pulmonar e extrapulmonar sensível (fase intensiva, 2 primeiros meses)",
      "Continuação do tratamento com rifampicina e isoniazida isoladas na fase de manutenção (meses 3-6)",
    ],
    mecanismoAcao:
      "Cada componente atua por mecanismo distinto, combinados para maximizar a eficácia e prevenir seleção de resistência: a rifampicina inibe a RNA polimerase bacteriana dependente de DNA; a isoniazida inibe a síntese de ácidos micólicos da parede celular micobacteriana (pró-droga ativada pela catalase-peroxidase bacteriana); a pirazinamida é ativa principalmente no ambiente ácido intracelular/de necrose caseosa, com mecanismo relacionado à disrupção da membrana bacteriana; o etambutol inibe arabinosil-transferases envolvidas na síntese do arabinogalactano da parede celular.",
    farmacocinetica:
      "Boa absorção oral para os quatro componentes. A rifampicina é um potente indutor do citocromo P450 hepático, com implicações importantes para interações medicamentosas. A isoniazida sofre acetilação hepática com polimorfismo genético (acetiladores rápidos/lentos), influenciando eficácia e toxicidade. O etambutol tem eliminação predominantemente renal, exigindo ajuste em insuficiência renal.",
    posologia:
      "Dose ajustada por faixa de peso corporal, uma vez ao dia, em jejum: fase intensiva com os quatro fármacos combinados por 2 meses, seguida de fase de manutenção com rifampicina e isoniazida por mais 4 meses, totalizando 6 meses no esquema básico para tuberculose sensível sem comprometimento do sistema nervoso central.",
    ajusteRenalHepatico:
      "Etambutol requer ajuste de dose em insuficiência renal (risco de acúmulo e neurite óptica). Monitorização hepática rigorosa é necessária para todos os componentes hepatotóxicos (rifampicina, isoniazida, pirazinamida); reduzir ou ajustar esquema em hepatopatia significativa, individualizando com apoio especializado.",
    gestacaoLactacao:
      "O esquema RIPE é considerado seguro e é o tratamento padrão da tuberculose na gestação; suplementação de piridoxina (vitamina B6) é recomendada para reduzir o risco de neuropatia periférica por isoniazida. Compatível com a lactação.",
    contraindicacoes: [
      "Hepatopatia grave descompensada (individualizar esquema com apoio especializado)",
      "Hipersensibilidade conhecida a algum dos componentes",
    ],
    efeitosColaterais: [
      "Hepatotoxicidade (risco compartilhado pelos três componentes hepatotóxicos: rifampicina, isoniazida e pirazinamida)",
      "Coloração alaranjada de urina, suor e lágrimas pela rifampicina (efeito esperado, não indica toxicidade)",
      "Neuropatia periférica pela isoniazida (prevenível com suplementação de piridoxina)",
      "Hiperuricemia e artralgia pela pirazinamida",
      "Neurite óptica dose-dependente pelo etambutol (redução de acuidade visual e discriminação de cores, geralmente reversível se identificada precocemente)",
    ],
    interacoes: [
      "Rifampicina é potente indutor do CYP450, reduzindo significativamente a eficácia de anticoncepcionais orais, varfarina e diversos outros fármacos metabolizados por essa via",
      "Isoniazida inibe algumas enzimas hepáticas, podendo aumentar a toxicidade de fármacos como a fenitoína",
      "Álcool aumenta o risco de hepatotoxicidade do esquema",
    ],
    monitorizacao: [
      "Função hepática (transaminases) periódica, especialmente nas primeiras semanas e em pacientes de maior risco",
      "Acuidade visual e discriminação de cores durante o uso de etambutol (rastreamento de neurite óptica)",
      "Ácido úrico sérico (hiperuricemia relacionada à pirazinamida)",
    ],
    alertas: [
      "Orientar o paciente a suspender o tratamento e procurar avaliação imediata diante de icterícia, náuseas persistentes ou dor abdominal, pelo risco de hepatotoxicidade grave.",
      "A adesão via tratamento diretamente observado (DOT) é essencial — o abandono do tratamento é o principal fator associado ao desenvolvimento de tuberculose multirresistente.",
    ],
    similares: ["Esquemas de retratamento com fármacos de segunda linha em falha terapêutica ou multirresistência (Componente Especializado)"],
    pontosDeProva: [
      "O tratamento diretamente observado (DOT) e a garantia de adesão são mais determinantes para o desfecho do que a escolha do esquema em si",
      "A neurite óptica pelo etambutol é dose-dependente e geralmente reversível se identificada precocemente — justifica o acompanhamento periódico de acuidade visual",
      "A piridoxina (vitamina B6) é usada para prevenir a neuropatia periférica induzida pela isoniazida, especialmente em gestantes, desnutridos, etilistas e diabéticos",
    ],
    doencasIndicadas: [
      { slug: "tuberculose-pulmonar", nome: "Tuberculose pulmonar" },
    ],
    fontes: [
      { tema: "Esquema, duração das fases e posologia por peso", fonte: "Manual de Recomendações para o Controle da Tuberculose no Brasil, Ministério da Saúde" },
      { tema: "Mecanismo de ação de cada componente", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Código ATC, forma farmacêutica e componente de financiamento (Estratégico)", fonte: "RENAME 2024, Apêndice A" },
    ],
  },
  {
    slug: "metotrexato",
    nome: "Metotrexato",
    nomeComercial: ["Reumatrex"],
    principioAtivo: "Metotrexato",
    categoria: "Imunossupressor / antimetabólito (DMARD sintético convencional)",
    codigoAtc: "L04AX03",
    tarja: "Tarja preta",
    formaFarmaceutica: "Comprimido 2,5 mg; solução injetável 25 mg/mL",
    viaAdministracao: "Oral, subcutânea ou intramuscular (dose semanal)",
    resumo: "Droga modificadora do curso da doença (DMARD) de primeira linha na artrite reumatoide, usada em dose baixa semanal — regime completamente distinto da dose oncológica alta.",
    indicacoes: [
      "Artrite reumatoide",
      "Artrite psoriásica (especialmente forma poliarticular periférica)",
      "Dermatopoliomiosite (poupador de corticosteroide)",
      "Psoríase grave",
    ],
    mecanismoAcao:
      "Inibe a di-hidrofolato redutase, reduzindo a síntese de purinas e pirimidinas dependente de folato. No regime de dose baixa semanal usado em doenças autoimunes, o mecanismo anti-inflamatório predominante é atribuído principalmente ao aumento da liberação de adenosina extracelular, distinto do efeito antimetabólito citotóxico observado em doses oncológicas muito mais altas.",
    farmacocinetica:
      "Absorção oral variável e saturável em doses mais altas (a via subcutânea contorna essa limitação). Metabolização parcial hepática, com eliminação predominantemente renal — acumula-se significativamente em insuficiência renal, aumentando o risco de toxicidade.",
    posologia:
      "Adultos: 7,5–25 mg por via oral, subcutânea ou intramuscular, uma vez por SEMANA (nunca diariamente), associado a suplementação de ácido fólico nos dias sem metotrexato para reduzir toxicidade.",
    ajusteRenalHepatico:
      "Contraindicado ou com dose fortemente reduzida em insuficiência renal significativa, pelo risco de acúmulo e toxicidade grave. Contraindicado em hepatopatia significativa.",
    gestacaoLactacao:
      "Teratogênico e abortivo — contraindicado de forma absoluta na gestação, exigindo contracepção eficaz durante o uso e por período definido após a suspensão, tanto em mulheres quanto em homens em tratamento. Contraindicado na lactação.",
    contraindicacoes: [
      "Gestação e tentativa de concepção (em ambos os sexos)",
      "Hepatopatia significativa",
      "Insuficiência renal significativa",
      "Consumo abusivo de álcool",
      "Imunodeficiência significativa",
    ],
    efeitosColaterais: [
      "Hepatotoxicidade, incluindo fibrose hepática com uso crônico",
      "Mielossupressão",
      "Estomatite e náuseas",
      "Pneumonite por hipersensibilidade (rara, mas potencialmente grave)",
    ],
    interacoes: [
      "Anti-inflamatórios não esteroidais podem reduzir a eliminação renal do metotrexato, aumentando seus níveis séricos e toxicidade",
      "Sulfametoxazol-trimetoprima aumenta o risco de toxicidade hematológica por efeito antifolato aditivo",
      "Álcool aumenta o risco de hepatotoxicidade",
    ],
    monitorizacao: [
      "Hemograma completo e função hepática/renal antes do início e periodicamente durante o tratamento, especialmente após ajustes de dose",
    ],
    alertas: [
      "A dose é SEMANAL, não diária — erro de posologia (administração diária por engano) já causou toxicidade grave e óbitos, exigindo dupla checagem rigorosa na prescrição e dispensação.",
      "Suplementar ácido fólico para reduzir efeitos adversos sem comprometer a eficácia terapêutica.",
    ],
    similares: ["Leflunomida (DMARD sintético convencional alternativo)"],
    pontosDeProva: [
      "A posologia semanal (não diária) é um dos pontos de segurança mais cobrados sobre este medicamento — a confusão já causou intoxicações fatais",
      "A teratogenicidade exige contracepção eficaz e suspensão do medicamento antes de tentativa de gravidez, tanto em mulheres quanto em homens",
    ],
    doencasIndicadas: [
      { slug: "artrite-reumatoide", nome: "Artrite reumatoide" },
      { slug: "artropatias-psoriasicas-enteropaticas", nome: "Artropatias psoriásicas e enteropáticas" },
      { slug: "dermatopoliomiosite", nome: "Dermatopoliomiosite" },
    ],
    fontes: [
      { tema: "Código ATC, forma farmacêutica e componente de financiamento", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação em dose baixa semanal (liberação de adenosina)", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "DMARD de primeira linha na artrite reumatoide", fonte: "American College of Rheumatology Guideline for the Treatment of Rheumatoid Arthritis, 2021" },
    ],
  },
  {
    slug: "hidroxicloroquina",
    nome: "Sulfato de hidroxicloroquina",
    nomeComercial: ["Reuquinol"],
    principioAtivo: "Sulfato de hidroxicloroquina",
    categoria: "Antimalárico / imunomodulador (antirreumático)",
    codigoAtc: "P01BA02",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido revestido",
    viaAdministracao: "Oral",
    resumo: "Base do tratamento do lúpus eritematoso sistêmico na maioria dos pacientes, mantida indefinidamente pelo benefício em reduzir crises e proteger órgãos a longo prazo.",
    indicacoes: [
      "Lúpus eritematoso sistêmico (base do tratamento na maioria dos pacientes)",
      "Artrite reumatoide leve (uso adjuvante)",
      "Profilaxia e tratamento de malária sensível à cloroquina (uso hoje menos comum, pela resistência)",
    ],
    mecanismoAcao:
      "Acumula-se em organelas ácidas intracelulares (lisossomos), elevando o pH e interferindo no processamento de antígenos e na sinalização de receptores toll-like, reduzindo a ativação imune autoimune. No contexto antimalárico, interfere na desintoxicação do heme pelo parasita.",
    farmacocinetica:
      "Boa absorção oral, ampla distribuição tecidual com acúmulo relevante em retina e pele, meia-vida muito longa (semanas), eliminação renal parcial do fármaco inalterado.",
    posologia:
      "Adultos: 200–400 mg/dia por via oral, em uma ou duas tomadas, com dose máxima diária ajustada ao peso corporal para reduzir o risco de toxicidade retiniana.",
    ajusteRenalHepatico:
      "Ajustar dose com cautela em insuficiência renal significativa, pelo risco de acúmulo. Usar com cautela em hepatopatia.",
    gestacaoLactacao:
      "Considerada segura na gestação e mantida em gestantes com LES — a suspensão durante a gravidez associa-se a maior risco de crise da doença. Compatível com a lactação.",
    contraindicacoes: [
      "Retinopatia preexistente",
      "Hipersensibilidade a antimaláricos 4-aminoquinolínicos",
    ],
    efeitosColaterais: [
      "Retinopatia (toxicidade cumulativa dose-dependente — principal risco a longo prazo)",
      "Náuseas e desconforto gastrointestinal",
      "Hiperpigmentação cutânea",
      "Miopatia (rara)",
    ],
    interacoes: [
      "Aumenta os níveis séricos de digoxina",
      "Cautela com outros fármacos que prolongam o intervalo QT",
    ],
    monitorizacao: [
      "Exame oftalmológico basal e depois anual (a partir de 5 anos de uso, ou antes se houver fatores de risco adicionais) para rastreamento de retinopatia",
    ],
    alertas: [
      "Não suspender abruptamente em paciente com LES estável, mesmo em remissão, salvo por toxicidade — a suspensão associa-se a risco aumentado de crise da doença.",
    ],
    similares: ["Cloroquina (mesma classe, maior toxicidade retiniana relativa)"],
    pontosDeProva: [
      "A hidroxicloroquina é mantida indefinidamente na maioria dos pacientes com LES, mesmo em remissão, pelo benefício comprovado em reduzir crises e proteger órgãos a longo prazo",
      "O rastreamento oftalmológico anual é obrigatório pela toxicidade retiniana cumulativa dose-dependente",
    ],
    doencasIndicadas: [
      { slug: "lupus-eritematoso-sistemico", nome: "Lúpus eritematoso sistêmico" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação e toxicidade retiniana", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Papel como base do tratamento e manutenção mesmo em remissão", fonte: "EULAR Recommendations for the Management of Systemic Lupus Erythematosus, 2019" },
    ],
  },
  {
    slug: "donepezila",
    nome: "Donepezila",
    nomeComercial: ["Eranz"],
    principioAtivo: "Cloridrato de donepezila",
    categoria: "Inibidor da acetilcolinesterase (anti-demência)",
    codigoAtc: "N06DA02",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido revestido 5 mg e 10 mg, Componente Especializado",
    viaAdministracao: "Oral",
    resumo: "Inibidor da acetilcolinesterase de uso mais consolidado no tratamento sintomático da doença de Alzheimer leve a moderada.",
    indicacoes: [
      "Doença de Alzheimer leve a moderada",
      "Doença de Alzheimer moderada a grave (em associação com memantina, conforme protocolo)",
    ],
    mecanismoAcao:
      "Inibe reversivelmente a acetilcolinesterase, aumentando a disponibilidade sináptica de acetilcolina no sistema nervoso central, compensando parcialmente o déficit colinérgico característico da doença de Alzheimer.",
    farmacocinetica:
      "Boa absorção oral, meia-vida longa (aproximadamente 70 horas) que permite dose única diária. Metabolização hepática pelas isoenzimas CYP2D6 e CYP3A4, com eliminação renal e fecal.",
    posologia:
      "Adultos: iniciar com 5 mg por via oral, uma vez ao dia, à noite, com possível aumento para 10 mg/dia após 4-6 semanas conforme tolerância.",
    ajusteRenalHepatico:
      "Usar com cautela em hepatopatia (metabolização predominantemente hepática). Não requer ajuste renal relevante.",
    gestacaoLactacao:
      "Uso não indicado para a população em que a gestação seria relevante; dados de segurança limitados nesse contexto.",
    contraindicacoes: [
      "Hipersensibilidade a derivados de piperidina",
      "Doença do nó sinusal ou outros distúrbios significativos de condução cardíaca não avaliados (cautela)",
    ],
    efeitosColaterais: [
      "Náuseas e diarreia",
      "Insônia",
      "Cãibras musculares",
      "Bradicardia (efeito colinérgico)",
    ],
    interacoes: [
      "Efeito aditivo com outros agentes colinérgicos",
      "Pode antagonizar o efeito de fármacos anticolinérgicos",
      "Cautela com betabloqueadores e outros bradicardizantes, pelo risco de bradicardia significativa",
    ],
    monitorizacao: [
      "Frequência cardíaca (risco de bradicardia)",
      "Avaliação cognitiva e funcional periódica para monitorar benefício continuado",
    ],
    alertas: [
      "O efeito é sintomático e modesto, sem modificar a progressão patológica subjacente da doença — orientar expectativas realistas à família do paciente.",
    ],
    similares: ["Rivastigmina", "Galantamina"],
    pontosDeProva: [
      "Os inibidores da colinesterase têm efeito sintomático modesto, sem modificar o curso patológico subjacente da doença de Alzheimer",
      "A bradicardia é um efeito colinérgico relevante a monitorizar, especialmente em associação com outros fármacos bradicardizantes",
    ],
    doencasIndicadas: [
      { slug: "doenca-de-alzheimer", nome: "Doença de Alzheimer" },
    ],
    fontes: [
      { tema: "Mecanismo de ação e farmacocinética", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Efeito sintomático sem modificação da progressão da doença", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Código ATC, forma farmacêutica e componente de financiamento (Especializado)", fonte: "RENAME 2024, Apêndice A" },
    ],
  },
  {
    slug: "memantina",
    nome: "Memantina",
    nomeComercial: ["Alois"],
    principioAtivo: "Cloridrato de memantina",
    categoria: "Antagonista do receptor NMDA (anti-demência)",
    codigoAtc: "N06DX01",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido revestido 10 mg, Componente Especializado",
    viaAdministracao: "Oral",
    resumo: "Antagonista do receptor NMDA usado na doença de Alzheimer moderada a grave, com mecanismo distinto e potencialmente complementar aos inibidores da colinesterase.",
    indicacoes: [
      "Doença de Alzheimer moderada a grave",
      "Associação com inibidor da colinesterase em doença mais avançada",
    ],
    mecanismoAcao:
      "Antagonista não competitivo de afinidade baixa a moderada do receptor NMDA de glutamato, reduzindo a excitotoxicidade glutamatérgica crônica associada à neurodegeneração, sem bloquear de forma relevante a transmissão glutamatérgica fisiológica normal (bloqueio voltagem-dependente).",
    farmacocinetica:
      "Boa biodisponibilidade oral, eliminação predominantemente renal (grande parte do fármaco inalterado), meia-vida longa (aproximadamente 60-100 horas).",
    posologia:
      "Adultos: titulação gradual iniciando com 5 mg/dia por via oral, aumentando semanalmente até a dose-alvo de 20 mg/dia.",
    ajusteRenalHepatico:
      "Ajuste de dose necessário em insuficiência renal moderada a grave, pela eliminação predominantemente renal. Não requer ajuste hepático significativo.",
    gestacaoLactacao:
      "Dados de segurança limitados; uso não indicado para a população em que a gestação seria relevante.",
    contraindicacoes: [
      "Hipersensibilidade ao fármaco",
    ],
    efeitosColaterais: [
      "Tontura",
      "Cefaleia",
      "Confusão mental",
      "Constipação",
      "Sonolência",
    ],
    interacoes: [
      "Efeito aditivo com outros antagonistas do receptor NMDA",
      "Fármacos que alcalinizam a urina podem reduzir a eliminação renal da memantina",
    ],
    monitorizacao: [
      "Função renal periódica",
      "Avaliação cognitiva e funcional para monitorar benefício continuado",
    ],
    alertas: [
      "Assim como os inibidores da colinesterase, o efeito é sintomático, sem modificar a progressão patológica subjacente da doença.",
    ],
    similares: [],
    pontosDeProva: [
      "O mecanismo distinto dos inibidores da colinesterase (antagonismo NMDA vs. inibição da acetilcolinesterase) permite a associação das duas classes em doença mais avançada, com potencial benefício aditivo",
    ],
    doencasIndicadas: [
      { slug: "doenca-de-alzheimer", nome: "Doença de Alzheimer" },
    ],
    fontes: [
      { tema: "Mecanismo de ação (antagonismo NMDA)", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Uso em associação com inibidor da colinesterase em doença avançada", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Código ATC, forma farmacêutica e componente de financiamento (Especializado)", fonte: "RENAME 2024, Apêndice A" },
    ],
  },
  {
    slug: "sulfato-ferroso",
    nome: "Sulfato ferroso",
    nomeComercial: ["Combiron"],
    principioAtivo: "Sulfato ferroso",
    categoria: "Suplemento de ferro (antianêmico)",
    codigoAtc: "B03AA07",
    tarja: "Venda livre (MIP)",
    formaFarmaceutica: "Comprimido revestido, xarope/gotas (apresentação pediátrica)",
    viaAdministracao: "Oral",
    resumo: "Reposição de ferro oral de primeira linha para o tratamento e a profilaxia da anemia ferropriva.",
    indicacoes: [
      "Anemia ferropriva",
      "Profilaxia de deficiência de ferro em gestantes e lactentes",
    ],
    mecanismoAcao:
      "Repõe os estoques de ferro necessários para a síntese de hemoglobina, sendo absorvido principalmente no duodeno e jejuno proximal por transportadores específicos, sob regulação primária da hepcidina hepática.",
    farmacocinetica:
      "Absorção aumentada em jejum e na presença de vitamina C; reduzida significativamente por alimentos, cálcio, antiácidos e inibidores da bomba de prótons administrados concomitantemente. A regulação da homeostase do ferro ocorre principalmente pela absorção, não pela excreção.",
    posologia:
      "Adultos: 60–120 mg de ferro elementar por dia por via oral (variando conforme a apresentação do sal), preferencialmente em jejum, ajustando conforme tolerância gastrointestinal.",
    ajusteRenalHepatico:
      "Não requer ajuste renal ou hepático específico em disfunção leve a moderada.",
    gestacaoLactacao:
      "Seguro e frequentemente indicado na gestação para profilaxia e tratamento de anemia ferropriva; compatível com a lactação.",
    contraindicacoes: [
      "Hemocromatose e outras condições de sobrecarga de ferro",
      "Anemia não relacionada à deficiência de ferro",
    ],
    efeitosColaterais: [
      "Desconforto gastrointestinal e náuseas",
      "Constipação",
      "Fezes escurecidas (efeito esperado, não deve ser confundido com melena)",
    ],
    interacoes: [
      "Reduz a absorção de levotiroxina, tetraciclinas e quinolonas quando administrados concomitantemente — espaçar os horários de administração",
      "Antiácidos e inibidores da bomba de prótons reduzem a absorção do ferro oral",
    ],
    monitorizacao: [
      "Hemoglobina e contagem de reticulócitos em 2-4 semanas para confirmar resposta terapêutica",
      "Ferritina sérica para confirmar reposição adequada dos estoques de ferro",
    ],
    alertas: [
      "Fezes escurecidas são um efeito esperado do ferro oral e não devem ser confundidas com sinal de sangramento digestivo.",
      "A superdosagem acidental em crianças é uma emergência toxicológica grave, pela alta toxicidade do ferro livre em overdose.",
    ],
    similares: ["Ferro polimaltosado", "Ferro quelato glicinato"],
    pontosDeProva: [
      "A resposta reticulocitária em 5-10 dias é o primeiro sinal objetivo de resposta terapêutica adequada à reposição de ferro",
      "A intoxicação por ferro é uma emergência toxicológica pediátrica grave, pela alta toxicidade do ferro livre em superdosagem",
    ],
    doencasIndicadas: [
      { slug: "anemia-ferropriva", nome: "Anemia ferropriva" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação e farmacocinética da absorção de ferro", fonte: "Goodman & Gilman, 13ª ed." },
    ],
  },
  {
    slug: "dexametasona",
    nome: "Dexametasona",
    nomeComercial: ["Decadron"],
    principioAtivo: "Dexametasona",
    categoria: "Corticosteroide sistêmico (glicocorticoide de longa duração)",
    codigoAtc: "H02AB02",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido, solução injetável, elixir/solução oral",
    viaAdministracao: "Oral ou intravenosa/intramuscular",
    resumo: "Corticosteroide potente de longa duração e atividade mineralocorticoide desprezível, com papel central no tratamento da COVID-19 grave, do crupe e como adjuvante na meningite bacteriana.",
    indicacoes: [
      "COVID-19 grave com necessidade de oxigênio suplementar",
      "Crupe (laringite obstrutiva aguda)",
      "Adjuvante em meningite bacteriana (redução de complicações neurológicas)",
      "Edema cerebral vasogênico associado a tumores",
    ],
    mecanismoAcao:
      "Liga-se a receptores glicocorticoides citoplasmáticos, modulando a transcrição gênica para suprimir múltiplas vias inflamatórias (redução de citocinas pró-inflamatórias, migração leucocitária, síntese de prostaglandinas). Tem potência anti-inflamatória muito maior que a hidrocortisona, com atividade mineralocorticoide desprezível.",
    farmacocinetica:
      "Boa absorção oral, meia-vida biológica longa (36-72 horas), permitindo dose única diária em muitos contextos. Metabolização hepática.",
    posologia:
      "COVID-19 grave: 6 mg por via oral ou intravenosa, uma vez ao dia, por até 10 dias. Crupe: dose única de 0,15-0,6 mg/kg. Meningite bacteriana: iniciada antes ou junto da primeira dose de antibiótico, conforme protocolo específico.",
    ajusteRenalHepatico:
      "Geralmente não requer ajuste renal. Usar com cautela em hepatopatia grave.",
    gestacaoLactacao:
      "Usar apenas se claramente necessário, avaliando riscos e benefícios; atravessa a placenta de forma menos inativada que outros corticosteroides, propriedade que fundamenta seu uso obstétrico específico para maturação pulmonar fetal (indicação distinta do tratamento de doenças do adulto).",
    contraindicacoes: [
      "Infecção fúngica sistêmica não tratada",
      "Hipersensibilidade ao fármaco",
    ],
    efeitosColaterais: [
      "Hiperglicemia",
      "Insônia e alterações de humor",
      "Imunossupressão com maior risco de infecções",
      "Miopatia com uso prolongado",
    ],
    interacoes: [
      "Reduz a eficácia de vacinas de vírus vivos",
      "Pode alterar a necessidade de insulina ou hipoglicemiantes orais",
      "Anti-inflamatórios não esteroidais aumentam o risco de sangramento gastrointestinal quando associados",
    ],
    monitorizacao: [
      "Glicemia durante o uso",
      "Sinais de infecção secundária",
    ],
    alertas: [
      "No tratamento da COVID-19, o benefício de mortalidade foi demonstrado apenas em pacientes que necessitam de oxigênio suplementar — não deve ser usado rotineiramente em casos leves, contexto em que pode até ser prejudicial.",
      "Na meningite bacteriana, deve ser administrada antes ou junto com a primeira dose de antibiótico, não depois, para preservar o benefício de redução de complicações neurológicas.",
    ],
    similares: ["Betametasona (potência e meia-vida semelhantes)"],
    pontosDeProva: [
      "O estudo RECOVERY estabeleceu o benefício de mortalidade da dexametasona na COVID-19 especificamente em pacientes com necessidade de oxigênio suplementar, não em casos leves",
      "Na meningite bacteriana, o momento da administração (antes ou junto da primeira dose de antibiótico) é determinante para o benefício neurológico observado",
    ],
    doencasIndicadas: [
      { slug: "covid-19", nome: "COVID-19" },
      { slug: "crupe-epiglotite", nome: "Laringite obstrutiva aguda (crupe) e epiglotite" },
      { slug: "meningite-bacteriana", nome: "Meningite bacteriana" },
      { slug: "neoplasia-maligna-encefalo", nome: "Neoplasia maligna do encéfalo" },
      { slug: "displasia-broncopulmonar", nome: "Displasia broncopulmonar" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Benefício de mortalidade na COVID-19 em quem necessita de O2", fonte: "RECOVERY Collaborative Group, NEJM, 2021" },
      { tema: "Timing da administração na meningite bacteriana", fonte: "IDSA Practice Guidelines for the Management of Bacterial Meningitis, 2004" },
    ],
  },
  {
    slug: "digoxina",
    nome: "Digoxina",
    nomeComercial: ["Digoxina genérico", "Lanoxin"],
    principioAtivo: "Digoxina",
    categoria: "Glicosídeo cardíaco",
    codigoAtc: "C01AA05",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido, solução injetável",
    viaAdministracao: "Oral, intravenosa",
    resumo: "Glicosídeo cardíaco de janela terapêutica estreita, usado hoje principalmente para controle de frequência na fibrilação atrial e como adjuvante sintomático na insuficiência cardíaca refratária.",
    indicacoes: [
      "Controle de frequência ventricular na fibrilação/flutter atrial, especialmente em pacientes sedentários ou com insuficiência cardíaca associada",
      "Insuficiência cardíaca com fração de ejeção reduzida sintomática, como adjuvante após os quatro pilares farmacológicos estabelecidos",
    ],
    mecanismoAcao:
      "Inibe a bomba Na+/K+-ATPase da membrana do miócito cardíaco, aumentando o sódio intracelular e, secundariamente, o cálcio intracelular via troca Na+/Ca2+, o que aumenta a força de contração (efeito inotrópico positivo); também aumenta o tônus vagal, reduzindo a condução pelo nó atrioventricular (efeito cronotrópico negativo, base do uso no controle de frequência da FA).",
    farmacocinetica:
      "Absorção oral variável, meia-vida longa (36-48h em função renal normal), eliminação predominantemente renal na forma inalterada. Janela terapêutica estreita, com necessidade frequente de monitorização de nível sérico.",
    posologia: "Adultos: dose de manutenção usual de 0,125-0,25 mg por via oral, uma vez ao dia, ajustada conforme função renal, idade e nível sérico.",
    ajusteRenalHepatico:
      "Requer ajuste de dose proporcional à função renal, dada a eliminação predominantemente renal e a janela terapêutica estreita; risco aumentado de toxicidade em idosos e em insuficiência renal não ajustada.",
    gestacaoLactacao:
      "Considerada relativamente segura na gestação quando indicada, com monitorização de nível sérico; compatível com a lactação em doses habituais.",
    contraindicacoes: [
      "Bloqueio atrioventricular de segundo/terceiro grau sem marca-passo",
      "Fibrilação ventricular",
      "Cardiomiopatia hipertrófica obstrutiva",
    ],
    efeitosColaterais: [
      "Náuseas, vômitos e anorexia (frequentemente os primeiros sinais de toxicidade)",
      "Distúrbios visuais (xantopsia, visão amarelada/esverdeada)",
      "Arritmias cardíacas diversas em caso de toxicidade",
    ],
    interacoes: [
      "Diuréticos que causam hipocalemia: aumentam o risco de toxicidade digitálica",
      "Amiodarona, verapamil e quinidina: aumentam o nível sérico de digoxina, exigindo redução de dose",
    ],
    monitorizacao: [
      "Nível sérico de digoxina, especialmente ao iniciar, ajustar dose, ou diante de suspeita de toxicidade",
      "Potássio sérico, dado que a hipocalemia potencializa a toxicidade digitálica",
      "Função renal periódica, dada a eliminação predominantemente renal",
    ],
    alertas: [
      "A toxicidade digitálica pode se manifestar com praticamente qualquer tipo de arritmia cardíaca, exigindo alto índice de suspeição em paciente em uso da medicação com sintomas gastrointestinais ou visuais novos.",
    ],
    similares: ["Nenhum glicosídeo cardíaco alternativo amplamente utilizado na prática atual"],
    pontosDeProva: [
      "Digoxina tem janela terapêutica estreita — hipocalemia potencializa sua toxicidade mesmo com nível sérico dentro da faixa considerada terapêutica",
      "O uso atual é predominantemente para controle de frequência na FA (efeito vagotônico) e como adjuvante sintomático na IC, não mais como tratamento inotrópico de primeira linha",
    ],
    doencasIndicadas: [
      { slug: "fibrilacao-flutter-atrial", nome: "Fibrilação e flutter atrial" },
      { slug: "insuficiencia-cardiaca", nome: "Insuficiência cardíaca" },
      { slug: "cardiopatias-congenitas", nome: "Cardiopatias congênitas" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação e farmacocinética", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Papel atual no controle de frequência da FA e como adjuvante na IC", fonte: "Diretriz de Fibrilação Atrial, SBC 2016 / Diretriz de Insuficiência Cardíaca Crônica, SBC 2021" },
    ],
  },
  {
    slug: "bissulfato-clopidogrel",
    nome: "Bissulfato de clopidogrel",
    nomeComercial: ["Plavix", "Iscover"],
    principioAtivo: "Bissulfato de clopidogrel",
    categoria: "Antiplaquetário (inibidor do receptor P2Y12)",
    codigoAtc: "B01AC04",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido revestido",
    viaAdministracao: "Oral",
    resumo: "Antiplaquetário inibidor do P2Y12, componente central da dupla antiagregação plaquetária após síndrome coronariana aguda, intervenção coronária percutânea e eventos cerebrovasculares isquêmicos.",
    indicacoes: [
      "Síndrome coronariana aguda, isolado ou em dupla antiagregação com AAS",
      "Após intervenção coronária percutânea com implante de stent",
      "Prevenção secundária de AVC isquêmico/AIT, isolado ou em curso curto de dupla antiagregação conforme o perfil de risco",
    ],
    mecanismoAcao:
      "Inibe irreversivelmente o receptor plaquetário P2Y12 do ADP, bloqueando a via de ativação e agregação plaquetária dependente dessa via; é uma pró-droga que requer ativação hepática pelo citocromo P450 (principalmente CYP2C19).",
    farmacocinetica:
      "Absorção oral rápida, ativação hepática necessária (pró-droga), efeito antiplaquetário irreversível durando toda a vida útil da plaqueta (cerca de 7-10 dias após suspensão). Polimorfismos do CYP2C19 podem reduzir a eficácia em uma proporção de pacientes (metabolizadores lentos).",
    posologia: "Adultos: dose de ataque de 300-600 mg por via oral em contexto agudo, seguida de manutenção de 75 mg uma vez ao dia.",
    ajusteRenalHepatico:
      "Não requer ajuste específico em insuficiência renal leve a moderada; uso cauteloso em insuficiência hepática grave, dada a necessidade de ativação hepática.",
    gestacaoLactacao:
      "Dados limitados na gestação; uso apenas quando o benefício justifica o risco. Evitar na lactação por dados insuficientes.",
    contraindicacoes: [
      "Sangramento ativo significativo",
      "Hipersensibilidade conhecida ao clopidogrel",
    ],
    efeitosColaterais: [
      "Sangramento (o efeito adverso mais relevante, variando de leve a grave)",
      "Dispepsia",
      "Púrpura trombocitopênica trombótica (raríssima, mas grave)",
    ],
    interacoes: [
      "Inibidores da bomba de prótons (especialmente omeprazol): podem reduzir a ativação do clopidogrel via inibição do CYP2C19, com relevância clínica debatida",
      "Anticoagulantes orais: aumento significativo do risco de sangramento quando associados",
    ],
    monitorizacao: [
      "Sinais clínicos de sangramento",
      "Hemograma periódico durante uso prolongado",
    ],
    alertas: [
      "A suspensão perioperatória deve ser cuidadosamente balanceada entre o risco de sangramento cirúrgico e o risco de trombose de stent, especialmente em stents farmacológicos recentes.",
    ],
    similares: ["Ticagrelor", "Prasugrel"],
    pontosDeProva: [
      "Clopidogrel é pró-droga ativada pelo CYP2C19 — metabolizadores lentos desse citocromo têm resposta antiplaquetária reduzida",
      "O efeito antiplaquetário é irreversível, durando toda a vida útil da plaqueta, ao contrário de antiplaquetários reversíveis mais modernos",
    ],
    doencasIndicadas: [
      { slug: "infarto-agudo-miocardio", nome: "Infarto agudo do miocárdio" },
      { slug: "ait-ataque-isquemico-transitorio", nome: "Ataque isquêmico transitório (AIT)" },
      { slug: "avc-isquemico-infarto-cerebral", nome: "Infarto cerebral (AVC isquêmico)" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação e farmacogenética (CYP2C19)", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Indicação em SCA, pós-ICP e prevenção secundária de AVC/AIT", fonte: "ACC/AHA/ACEP/NAEMSP/SCAI Guideline for the Management of Patients With Acute Coronary Syndromes, 2025" },
    ],
  },
  {
    slug: "atorvastatina-calcica",
    nome: "Atorvastatina cálcica",
    nomeComercial: ["Lipitor", "Citalor"],
    principioAtivo: "Atorvastatina cálcica",
    categoria: "Hipolipemiante (inibidor da HMG-CoA redutase)",
    codigoAtc: "C10AA05",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido revestido",
    viaAdministracao: "Oral",
    resumo: "Estatina de alta potência, pilar da prevenção secundária cardiovascular e cerebrovascular, com maior capacidade de redução do LDL-colesterol que estatinas de menor potência.",
    indicacoes: [
      "Dislipidemia, isolada ou associada a outros fatores de risco cardiovascular",
      "Prevenção secundária após infarto agudo do miocárdio, angina ou AVC isquêmico/AIT (terapia de alta intensidade)",
      "Prevenção primária em pacientes de alto risco cardiovascular calculado",
    ],
    mecanismoAcao:
      "Inibe competitivamente a HMG-CoA redutase, enzima limitante da síntese hepática de colesterol, reduzindo a produção de colesterol intra-hepático e aumentando a expressão de receptores de LDL na superfície dos hepatócitos, o que aumenta a depuração plasmática de LDL-colesterol; também exibe efeitos pleiotrópicos (estabilização de placa, ação anti-inflamatória) que contribuem para o benefício cardiovascular além da redução lipídica isolada.",
    farmacocinetica:
      "Meia-vida mais longa que a sinvastatina, permitindo administração em qualquer horário do dia (não restrita à noite). Metabolização hepática pelo CYP3A4, eliminação predominantemente biliar/fecal.",
    posologia: "Adultos: 10-80 mg por via oral, uma vez ao dia, dose ajustada conforme a meta de LDL e o risco cardiovascular calculado.",
    ajusteRenalHepatico:
      "Não requer ajuste específico em insuficiência renal. Contraindicada em hepatopatia ativa ou elevação persistente e inexplicada de transaminases.",
    gestacaoLactacao:
      "Contraindicada na gestação (categoria X, risco teórico ao desenvolvimento fetal pela inibição da síntese de colesterol) e na lactação.",
    contraindicacoes: [
      "Gestação e lactação",
      "Hepatopatia ativa",
      "Hipersensibilidade conhecida",
    ],
    efeitosColaterais: [
      "Mialgia (o efeito adverso mais comumente relatado)",
      "Elevação de transaminases hepáticas",
      "Rabdomiólise (rara, mas grave, com risco aumentado em interações medicamentosas específicas)",
    ],
    interacoes: [
      "Inibidores potentes do CYP3A4 (como certos antifúngicos azólicos e macrolídeos): aumentam o risco de miopatia/rabdomiólise",
      "Ciclosporina e outros imunossupressores: aumento do nível sérico da estatina",
    ],
    monitorizacao: [
      "Perfil lipídico periódico para avaliação de resposta à meta terapêutica",
      "Transaminases hepáticas basais, com reavaliação diante de sintomas sugestivos de hepatotoxicidade",
      "Sintomas musculares, dado o risco de miopatia/rabdomiólise",
    ],
    alertas: [
      "É considerada estatina de alta intensidade (junto com a rosuvastatina) nas doses mais altas, sendo a opção preferencial para prevenção secundária pós-evento cardiovascular agudo.",
    ],
    similares: ["Sinvastatina (menor potência)", "Rosuvastatina (alta intensidade, alternativa)"],
    pontosDeProva: [
      "Atorvastatina e rosuvastatina são as estatinas de alta intensidade, preferidas para prevenção secundária pós-síndrome coronariana aguda ou AVC isquêmico",
      "Diferentemente da sinvastatina, sua meia-vida mais longa permite administração em qualquer horário do dia",
    ],
    doencasIndicadas: [
      { slug: "infarto-agudo-miocardio", nome: "Infarto agudo do miocárdio" },
      { slug: "angina-pectoris", nome: "Angina pectoris" },
      { slug: "doenca-isquemica-cronica-coracao", nome: "Doença isquêmica crônica do coração" },
      { slug: "dislipidemia", nome: "Dislipidemia" },
      { slug: "ait-ataque-isquemico-transitorio", nome: "Ataque isquêmico transitório (AIT)" },
      { slug: "avc-isquemico-infarto-cerebral", nome: "Infarto cerebral (AVC isquêmico)" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação e efeitos pleiotrópicos", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Classificação como estatina de alta intensidade e indicação em prevenção secundária", fonte: "AHA/ACC/AACVPR Guideline on the Management of Blood Cholesterol, 2018" },
    ],
  },
  {
    slug: "hidroclorotiazida",
    nome: "Hidroclorotiazida",
    nomeComercial: ["Clorana", "Hidroclorotiazida genérico"],
    principioAtivo: "Hidroclorotiazida",
    categoria: "Diurético tiazídico",
    codigoAtc: "C03AA03",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido",
    viaAdministracao: "Oral",
    resumo: "Diurético tiazídico de referência na Atenção Básica, um dos anti-hipertensivos de primeira linha mais amplamente utilizados, especialmente eficaz em associação com outras classes.",
    indicacoes: [
      "Hipertensão arterial sistêmica, isolada ou em associação com outras classes anti-hipertensivas",
      "Edema leve a moderado de origem cardíaca, hepática ou renal",
    ],
    mecanismoAcao:
      "Inibe o cotransportador Na+/Cl- no túbulo contorcido distal do néfron, reduzindo a reabsorção de sódio e água e promovendo natriurese/diurese; o efeito anti-hipertensivo crônico também envolve redução da resistência vascular periférica, mecanismo que persiste mesmo após a normalização do volume plasmático.",
    farmacocinetica:
      "Boa absorção oral, início de ação em cerca de 2 horas, duração de efeito de 6-12 horas. Eliminação predominantemente renal na forma inalterada, com eficácia reduzida em taxa de filtração glomerular muito baixa.",
    posologia: "Adultos: 12,5-25 mg por via oral, uma vez ao dia, preferencialmente pela manhã.",
    ajusteRenalHepatico:
      "Perde eficácia progressivamente com taxa de filtração glomerular abaixo de determinado limiar, situação em que diuréticos de alça são preferidos. Uso cauteloso em hepatopatia grave pelo risco de precipitar encefalopatia hepática por distúrbio eletrolítico.",
    gestacaoLactacao:
      "Uso geralmente evitado na gestação exceto quando claramente indicado; compatível com a lactação em doses habituais, com monitorização do lactente.",
    contraindicacoes: [
      "Anúria",
      "Hipersensibilidade a sulfonamidas (reatividade cruzada)",
      "Hipocalemia ou hiponatremia grave não corrigidas",
    ],
    efeitosColaterais: [
      "Hipocalemia",
      "Hiponatremia",
      "Hiperuricemia (pode precipitar crise de gota)",
      "Hiperglicemia leve com uso prolongado",
    ],
    interacoes: [
      "Lítio: redução da depuração renal de lítio, com risco de toxicidade",
      "AINEs: podem reduzir o efeito anti-hipertensivo e diurético",
      "Digoxina: hipocalemia induzida pelo tiazídico potencializa o risco de toxicidade digitálica",
    ],
    monitorizacao: [
      "Eletrólitos séricos (sódio, potássio) periodicamente, especialmente após início ou ajuste de dose",
      "Ácido úrico e glicemia em uso prolongado",
    ],
    alertas: [
      "Um dos poucos anti-hipertensivos com evidência robusta de redução de desfechos cardiovasculares quando usado como monoterapia inicial ou em associação, sendo pilar das diretrizes de HAS.",
    ],
    similares: ["Clortalidona (tiazídico-símile, meia-vida mais longa)", "Indapamida (tiazídico-símile)"],
    pontosDeProva: [
      "Perde eficácia com taxa de filtração glomerular muito reduzida, situação em que diuréticos de alça (furosemida) são preferidos",
      "A hipocalemia induzida pode potencializar a toxicidade digitálica em pacientes em uso concomitante de digoxina",
    ],
    doencasIndicadas: [
      { slug: "hipertensao-arterial-sistemica", nome: "Hipertensão arterial sistêmica" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação e farmacocinética", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Papel como anti-hipertensivo de primeira linha", fonte: "Diretriz Brasileira de Hipertensão Arterial, 2020" },
    ],
  },
  {
    slug: "furosemida",
    nome: "Furosemida",
    nomeComercial: ["Lasix", "Furosemida genérico"],
    principioAtivo: "Furosemida",
    categoria: "Diurético de alça",
    codigoAtc: "C03CA01",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido, solução injetável",
    viaAdministracao: "Oral, intravenosa",
    resumo: "Diurético de alça de referência, tratamento central do alívio sintomático da congestão na insuficiência cardíaca descompensada e em outros estados edematosos.",
    indicacoes: [
      "Alívio sintomático da congestão na insuficiência cardíaca (aguda descompensada e crônica)",
      "Edema associado a síndrome nefrótica, doença renal crônica ou cirrose hepática",
      "Edema agudo de pulmão",
    ],
    mecanismoAcao:
      "Inibe o cotransportador Na+/K+/2Cl- na porção espessa ascendente da alça de Henle, promovendo natriurese e diurese potentes; por atuar em um segmento que reabsorve grande fração do sódio filtrado, tem efeito diurético significativamente maior que os tiazídicos, mantendo eficácia mesmo em função renal reduzida.",
    farmacocinetica:
      "Início de ação rápido (dentro de minutos por via intravenosa, cerca de 30-60 minutos por via oral), duração de efeito de aproximadamente 6 horas. Eliminação renal, com biodisponibilidade oral variável entre pacientes.",
    posologia: "Adultos: 20-80 mg por via oral ou intravenosa, ajustada conforme resposta clínica e gravidade da congestão; doses maiores frequentemente necessárias em insuficiência renal.",
    ajusteRenalHepatico:
      "Mantém eficácia mesmo em taxa de filtração glomerular reduzida, ao contrário dos tiazídicos, embora frequentemente sejam necessárias doses mais altas. Uso cauteloso em hepatopatia grave pelo risco de precipitar encefalopatia hepática por distúrbio eletrolítico.",
    gestacaoLactacao:
      "Uso na gestação apenas quando claramente indicado (pode reduzir a perfusão placentária pela redução do volume plasmático); compatível com a lactação em doses habituais, com monitorização.",
    contraindicacoes: [
      "Anúria não responsiva",
      "Depleção grave de volume ou eletrólitos não corrigida",
      "Hipersensibilidade a sulfonamidas (reatividade cruzada)",
    ],
    efeitosColaterais: [
      "Hipocalemia e hipomagnesemia",
      "Hipotensão e depleção de volume por diurese excessiva",
      "Ototoxicidade (associada a doses altas e infusão intravenosa rápida)",
      "Hiperuricemia",
    ],
    interacoes: [
      "Aminoglicosídeos: potencialização do risco de ototoxicidade",
      "Digoxina: hipocalemia induzida potencializa o risco de toxicidade digitálica",
      "Lítio: redução da depuração renal de lítio, com risco de toxicidade",
    ],
    monitorizacao: [
      "Eletrólitos séricos (potássio, magnésio, sódio) frequentemente durante uso intravenoso ou doses altas",
      "Função renal e peso corporal como indicadores de resposta e de depleção de volume excessiva",
    ],
    alertas: [
      "Infusão intravenosa rápida em doses altas está associada a risco de ototoxicidade, devendo ser administrada lentamente quando doses elevadas são necessárias.",
    ],
    similares: ["Bumetanida (diurético de alça alternativo)", "Espironolactona (mecanismo distinto, frequentemente associado)"],
    pontosDeProva: [
      "Ao contrário dos tiazídicos, mantém eficácia diurética mesmo com função renal significativamente reduzida, sendo o diurético de escolha nessa situação",
      "A hipocalemia induzida pode potencializar a toxicidade digitálica em uso concomitante com digoxina",
    ],
    doencasIndicadas: [
      { slug: "insuficiencia-cardiaca", nome: "Insuficiência cardíaca" },
      { slug: "cardiomiopatias", nome: "Cardiomiopatias" },
      { slug: "sindrome-nefrotica", nome: "Síndrome nefrótica" },
      { slug: "cardiopatias-congenitas", nome: "Cardiopatias congênitas" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação e farmacocinética", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Papel no alívio sintomático da congestão na IC", fonte: "Diretriz de Insuficiência Cardíaca Crônica, SBC 2021" },
    ],
  },
  {
    slug: "cloridrato-propranolol",
    nome: "Cloridrato de propranolol",
    nomeComercial: ["Inderal", "Propranolol genérico"],
    principioAtivo: "Cloridrato de propranolol",
    categoria: "Betabloqueador não seletivo",
    codigoAtc: "C07AA05",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido",
    viaAdministracao: "Oral",
    resumo: "Betabloqueador não seletivo de uso versátil, com indicações que vão além do sistema cardiovascular, incluindo profilaxia de enxaqueca, controle sintomático do hipertireoidismo e profilaxia de sangramento por varizes esofágicas.",
    indicacoes: [
      "Profilaxia de enxaqueca episódica",
      "Controle sintomático da tireotoxicose (tremor, taquicardia, ansiedade) enquanto o tratamento definitivo faz efeito",
      "Profilaxia primária/secundária de sangramento por varizes esofágicas em hipertensão portal (cirrose hepática)",
      "Hipertensão arterial sistêmica e angina pectoris (uso menos frequente atualmente que betabloqueadores cardiosseletivos)",
    ],
    mecanismoAcao:
      "Bloqueia de forma não seletiva os receptores beta-1 (predominantemente cardíacos) e beta-2 (predominantemente brônquicos e vasculares) adrenérgicos, reduzindo frequência cardíaca, contratilidade e débito cardíaco, além de reduzir a secreção de renina; por bloquear também receptores beta-2, tem maior risco de broncoespasmo que os betabloqueadores cardiosseletivos.",
    farmacocinetica:
      "Boa absorção oral, mas com extenso metabolismo de primeira passagem hepática, resultando em biodisponibilidade variável entre indivíduos. Metabolização hepática, meia-vida curta exigindo múltiplas tomadas diárias na formulação de liberação imediata.",
    posologia: "Adultos: dose variável conforme indicação — 40-160 mg/dia em doses divididas para profilaxia de enxaqueca ou hipertensão; doses ajustadas individualmente nas demais indicações.",
    ajusteRenalHepatico:
      "Não requer ajuste específico em insuficiência renal. Requer cautela e possível redução de dose em insuficiência hepática significativa, dado o extenso metabolismo hepático de primeira passagem.",
    gestacaoLactacao:
      "Uso na gestação apenas quando o benefício justifica o risco (pode causar bradicardia fetal e restrição de crescimento); compatível com a lactação em doses habituais, com monitorização do lactente.",
    contraindicacoes: [
      "Asma e doença pulmonar obstrutiva com broncoespasmo significativo",
      "Bloqueio atrioventricular de segundo/terceiro grau sem marca-passo",
      "Bradicardia sintomática grave",
      "Insuficiência cardíaca descompensada aguda",
    ],
    efeitosColaterais: [
      "Bradicardia",
      "Fadiga",
      "Broncoespasmo (mais relevante que em betabloqueadores cardiosseletivos, pelo bloqueio beta-2 concomitante)",
      "Mascaramento de sintomas de hipoglicemia em diabéticos",
    ],
    interacoes: [
      "Verapamil/diltiazem: risco aumentado de bradicardia e bloqueio atrioventricular quando associados",
      "Insulina/hipoglicemiantes: mascaramento dos sintomas adrenérgicos de hipoglicemia",
    ],
    monitorizacao: [
      "Frequência cardíaca e pressão arterial",
      "Sintomas respiratórios em pacientes com risco de broncoespasmo",
    ],
    alertas: [
      "Nunca suspender abruptamente após uso prolongado — risco de taquicardia/hipertensão de rebote e precipitação de eventos coronarianos. Desmame gradual é recomendado.",
    ],
    similares: ["Metoprolol (cardiosseletivo, preferido quando há risco de broncoespasmo)", "Carvedilol (não seletivo com ação alfa-bloqueadora adicional)"],
    pontosDeProva: [
      "É o único betabloqueador com indicação estabelecida de profilaxia de sangramento por varizes esofágicas na hipertensão portal, refletindo seu efeito não seletivo (redução do fluxo esplâncnico via bloqueio beta-2)",
      "Por bloquear também receptores beta-2, tem maior risco de broncoespasmo que betabloqueadores cardiosseletivos como o metoprolol",
    ],
    doencasIndicadas: [
      { slug: "enxaqueca", nome: "Enxaqueca" },
      { slug: "hipertireoidismo", nome: "Tireotoxicose (hipertireoidismo)" },
      { slug: "cirrose-hepatica", nome: "Fibrose e cirrose hepáticas" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação não seletivo e farmacocinética", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Profilaxia de sangramento varicoso na hipertensão portal", fonte: "AASLD Practice Guidance, Portal Hypertensive Bleeding in Cirrhosis, 2017" },
    ],
  },
  {
    slug: "metoprolol",
    nome: "Succinato de metoprolol / Tartarato de metoprolol",
    nomeComercial: ["Selozok", "Lopressor"],
    principioAtivo: "Succinato de metoprolol (liberação prolongada) / Tartarato de metoprolol (liberação imediata)",
    categoria: "Betabloqueador cardiosseletivo",
    codigoAtc: "C07AB02",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido (liberação imediata e prolongada)",
    viaAdministracao: "Oral",
    resumo: "Betabloqueador cardiosseletivo de uso amplo em cardiologia, sendo o succinato (liberação prolongada) um dos quatro pilares farmacológicos da insuficiência cardíaca com fração de ejeção reduzida.",
    indicacoes: [
      "Insuficiência cardíaca com fração de ejeção reduzida (succinato, liberação prolongada)",
      "Hipertensão arterial sistêmica",
      "Angina pectoris e prevenção secundária pós-infarto agudo do miocárdio",
      "Controle de frequência ventricular na fibrilação/flutter atrial",
    ],
    mecanismoAcao:
      "Bloqueia seletivamente os receptores beta-1 adrenérgicos (predominantemente cardíacos) em doses habituais, reduzindo frequência cardíaca, contratilidade e consumo miocárdico de oxigênio, com menor efeito sobre receptores beta-2 brônquicos/vasculares que os betabloqueadores não seletivos, embora a seletividade se perca em doses mais altas.",
    farmacocinetica:
      "A formulação de succinato (liberação prolongada) permite administração uma vez ao dia com níveis plasmáticos mais estáveis, preferida na insuficiência cardíaca; a formulação de tartarato (liberação imediata) tem meia-vida mais curta, exigindo múltiplas tomadas diárias. Metabolização hepática pelo CYP2D6.",
    posologia: "Insuficiência cardíaca (succinato): iniciar com dose baixa (12,5-25 mg/dia) e titular lentamente até a dose-alvo tolerada. Hipertensão/angina: dose ajustada conforme resposta e formulação utilizada.",
    ajusteRenalHepatico:
      "Não requer ajuste específico em insuficiência renal. Uso cauteloso com possível redução de dose em insuficiência hepática significativa, dado o metabolismo hepático.",
    gestacaoLactacao:
      "Uso na gestação apenas quando o benefício justifica o risco; compatível com a lactação em doses habituais, com monitorização do lactente.",
    contraindicacoes: [
      "Bloqueio atrioventricular de segundo/terceiro grau sem marca-passo",
      "Bradicardia sintomática grave",
      "Insuficiência cardíaca descompensada aguda (iniciar apenas após estabilização)",
      "Choque cardiogênico",
    ],
    efeitosColaterais: [
      "Bradicardia",
      "Fadiga e tontura",
      "Hipotensão",
      "Piora inicial transitória dos sintomas de IC ao se iniciar o tratamento (justifica a titulação lenta e gradual)",
    ],
    interacoes: [
      "Verapamil/diltiazem: risco aumentado de bradicardia e bloqueio atrioventricular",
      "Inibidores do CYP2D6 (como certos antidepressivos): podem aumentar o nível sérico de metoprolol",
    ],
    monitorizacao: [
      "Frequência cardíaca e pressão arterial durante titulação de dose",
      "Sinais de descompensação da insuficiência cardíaca ao se iniciar ou ajustar a dose",
    ],
    alertas: [
      "Na insuficiência cardíaca, deve ser iniciado apenas após estabilização clínica (não em descompensação aguda) e titulado lentamente ao longo de semanas até a dose-alvo, dado o risco de piora sintomática transitória inicial.",
    ],
    similares: ["Carvedilol (não seletivo, alternativa estabelecida na IC)", "Bisoprolol (cardiosseletivo, alternativa)"],
    pontosDeProva: [
      "O succinato de metoprolol (liberação prolongada), não o tartarato, é a formulação com evidência estabelecida como um dos quatro pilares farmacológicos da IC-FEr",
      "Betabloqueadores devem ser iniciados apenas após estabilização clínica na IC descompensada aguda, nunca durante a própria descompensação",
    ],
    doencasIndicadas: [
      { slug: "infarto-agudo-miocardio", nome: "Infarto agudo do miocárdio" },
      { slug: "angina-pectoris", nome: "Angina pectoris" },
      { slug: "fibrilacao-flutter-atrial", nome: "Fibrilação e flutter atrial" },
      { slug: "hipertensao-arterial-sistemica", nome: "Hipertensão arterial sistêmica" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Cardiosseletividade e diferenças entre succinato e tartarato", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Succinato de metoprolol como pilar farmacológico da IC-FEr", fonte: "Diretriz de Insuficiência Cardíaca Crônica, SBC 2021" },
    ],
  },
  {
    slug: "dinitrato-isossorbida",
    nome: "Dinitrato de isossorbida",
    nomeComercial: ["Isordil", "Sorbitrato"],
    principioAtivo: "Dinitrato de isossorbida",
    categoria: "Vasodilatador (nitrato orgânico)",
    codigoAtc: "C01DA08",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido sublingual e oral",
    viaAdministracao: "Oral, sublingual",
    resumo: "Nitrato orgânico de ação relativamente curta, usado no alívio agudo da crise anginosa e, em associação com hidralazina, como alternativa farmacológica na insuficiência cardíaca em populações selecionadas.",
    indicacoes: [
      "Alívio agudo da crise de angina pectoris (via sublingual)",
      "Profilaxia de angina antes de atividades desencadeantes conhecidas",
      "Insuficiência cardíaca com fração de ejeção reduzida, em associação com hidralazina, particularmente em pacientes que não toleram IECA/BRA ou como terapia adicional em populações específicas",
    ],
    mecanismoAcao:
      "É metabolizado a óxido nítrico, que ativa a guanilato ciclase solúvel na musculatura lisa vascular, aumentando o GMP cíclico e promovendo vasodilatação; em doses habituais, predomina a venodilatação (reduzindo a pré-carga e o consumo miocárdico de oxigênio), com vasodilatação arterial coronariana adicional que melhora a perfusão miocárdica.",
    farmacocinetica:
      "Via sublingual: início de ação em minutos, útil para alívio agudo da crise anginosa. Via oral: extenso metabolismo de primeira passagem hepática, com metabólitos ativos (mononitrato de isossorbida) contribuindo para o efeito prolongado.",
    posologia: "Crise aguda: 5 mg por via sublingual, podendo repetir conforme necessário. Profilaxia oral: 10-40 mg, 2-3 vezes ao dia, com intervalo assimétrico entre doses para evitar tolerância.",
    ajusteRenalHepatico:
      "Não requer ajuste específico em insuficiência renal. Uso cauteloso em insuficiência hepática grave, dado o extenso metabolismo hepático de primeira passagem.",
    gestacaoLactacao:
      "Dados limitados; uso apenas quando claramente indicado, com avaliação individualizada de risco-benefício.",
    contraindicacoes: [
      "Uso concomitante com inibidores da fosfodiesterase-5 (como sildenafila): risco de hipotensão grave e potencialmente fatal",
      "Hipotensão significativa ou hipovolemia não corrigida",
      "Anemia grave",
    ],
    efeitosColaterais: [
      "Cefaleia (efeito adverso mais comum, relacionado à vasodilatação)",
      "Hipotensão, especialmente postural",
      "Taquicardia reflexa",
    ],
    interacoes: [
      "Inibidores da fosfodiesterase-5: interação absolutamente contraindicada pelo risco de hipotensão grave",
      "Outros vasodilatadores e anti-hipertensivos: efeito hipotensor aditivo",
    ],
    monitorizacao: [
      "Pressão arterial, especialmente ao iniciar ou ajustar a dose",
      "Frequência e intensidade dos episódios anginosos como medida de resposta terapêutica",
    ],
    alertas: [
      "É essencial questionar ativamente sobre uso de inibidores da fosfodiesterase-5 antes de prescrever nitrato, dado o risco de interação potencialmente fatal.",
    ],
    similares: ["Mononitrato de isossorbida (metabólito ativo, meia-vida mais previsível)", "Nitroglicerina (ação ainda mais rápida)"],
    pontosDeProva: [
      "A interação com inibidores da fosfodiesterase-5 é absolutamente contraindicada pelo risco de hipotensão grave e potencialmente fatal — pergunta clássica de prova",
      "O intervalo assimétrico entre doses orais é necessário para evitar o desenvolvimento de tolerância ao efeito vasodilatador",
    ],
    doencasIndicadas: [
      { slug: "angina-pectoris", nome: "Angina pectoris" },
      { slug: "infarto-agudo-miocardio", nome: "Infarto agudo do miocárdio" },
      { slug: "insuficiencia-cardiaca", nome: "Insuficiência cardíaca" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação via óxido nítrico e farmacocinética", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Associação com hidralazina na IC-FEr em populações selecionadas", fonte: "Diretriz de Insuficiência Cardíaca Crônica, SBC 2021" },
    ],
  },
  {
    slug: "mononitrato-isossorbida",
    nome: "Mononitrato de isossorbida",
    nomeComercial: ["Monocordil", "Cardiacap"],
    principioAtivo: "Mononitrato de isossorbida",
    categoria: "Vasodilatador (nitrato orgânico)",
    codigoAtc: "C01DA14",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido",
    viaAdministracao: "Oral",
    resumo: "Metabólito ativo do dinitrato de isossorbida, com farmacocinética mais previsível e uso predominante na profilaxia de longo prazo da angina pectoris estável.",
    indicacoes: [
      "Profilaxia de longo prazo da angina pectoris estável/doença isquêmica crônica do coração",
    ],
    mecanismoAcao:
      "Mesmo mecanismo do dinitrato de isossorbida (metabolizado a óxido nítrico, ativando a guanilato ciclase solúvel e promovendo vasodilatação venosa e arterial coronariana), mas já é o metabólito ativo, não exigindo conversão hepática, o que confere farmacocinética mais previsível entre pacientes.",
    farmacocinetica:
      "Não sofre metabolismo de primeira passagem significativo (já é o metabólito ativo), resultando em biodisponibilidade oral mais alta e previsível que o dinitrato. Meia-vida mais longa, permitindo posologia mais conveniente.",
    posologia: "Adultos: 20-40 mg por via oral, 1-2 vezes ao dia, com intervalo assimétrico entre doses para evitar tolerância; formulações de liberação prolongada permitem administração única diária.",
    ajusteRenalHepatico:
      "Não requer ajuste específico em insuficiência renal ou hepática, dado que não depende de metabolismo hepático de primeira passagem para ativação.",
    gestacaoLactacao:
      "Dados limitados; uso apenas quando claramente indicado, com avaliação individualizada de risco-benefício.",
    contraindicacoes: [
      "Uso concomitante com inibidores da fosfodiesterase-5: risco de hipotensão grave e potencialmente fatal",
      "Hipotensão significativa ou hipovolemia não corrigida",
    ],
    efeitosColaterais: [
      "Cefaleia",
      "Hipotensão postural",
      "Taquicardia reflexa",
    ],
    interacoes: [
      "Inibidores da fosfodiesterase-5: interação absolutamente contraindicada pelo risco de hipotensão grave",
    ],
    monitorizacao: [
      "Pressão arterial ao iniciar ou ajustar a dose",
      "Frequência dos episódios anginosos como medida de resposta terapêutica",
    ],
    alertas: [
      "Assim como o dinitrato, questionar ativamente sobre uso de inibidores da fosfodiesterase-5 antes de prescrever, pelo risco de interação potencialmente fatal.",
    ],
    similares: ["Dinitrato de isossorbida (pró-droga precursora)", "Nitroglicerina transdérmica (uso profilático alternativo)"],
    pontosDeProva: [
      "Por já ser o metabólito ativo, tem biodisponibilidade oral mais previsível que o dinitrato de isossorbida, que depende de conversão hepática",
      "É usado predominantemente para profilaxia de longo prazo, não para alívio agudo da crise anginosa (papel do dinitrato sublingual)",
    ],
    doencasIndicadas: [
      { slug: "angina-pectoris", nome: "Angina pectoris" },
      { slug: "doenca-isquemica-cronica-coracao", nome: "Doença isquêmica crônica do coração" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Farmacocinética como metabólito ativo e diferenças com o dinitrato", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Uso profilático na angina estável", fonte: "Diretriz de Doença Coronária Estável, SBC 2014" },
    ],
  },
  {
    slug: "cloridrato-amiodarona",
    nome: "Cloridrato de amiodarona",
    nomeComercial: ["Ancoron", "Atlansil"],
    principioAtivo: "Cloridrato de amiodarona",
    categoria: "Antiarrítmico (classe III)",
    codigoAtc: "C01BD01",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido, solução injetável",
    viaAdministracao: "Oral, intravenosa",
    resumo: "Antiarrítmico de amplo espectro e alta eficácia, usado tanto no controle de ritmo/frequência da fibrilação atrial quanto no manejo de arritmias ventriculares malignas, incluindo a parada cardíaca por fibrilação ventricular refratária.",
    indicacoes: [
      "Fibrilação/flutter atrial, para controle de ritmo ou frequência em pacientes selecionados",
      "Taquicardia ventricular e fibrilação ventricular, incluindo no contexto de parada cardiorrespiratória refratária à desfibrilação",
      "Arritmias ventriculares recorrentes e refratárias a outros antiarrítmicos",
    ],
    mecanismoAcao:
      "Antiarrítmico de classe III predominante (bloqueio de canais de potássio, prolongando a repolarização e o período refratário), mas com propriedades adicionais das classes I (bloqueio de canais de sódio), II (bloqueio beta-adrenérgico) e IV (bloqueio de canais de cálcio), conferindo-lhe amplo espectro de ação antiarrítmica.",
    farmacocinetica:
      "Meia-vida extremamente longa (semanas), com acúmulo tecidual significativo (incluindo tireoide, pulmão, fígado e córnea) que explica tanto a persistência do efeito após suspensão quanto o perfil de toxicidade de órgão-alvo em uso crônico. Metabolização hepática.",
    posologia: "Dose de ataque variável conforme a indicação (oral ou intravenosa), seguida de dose de manutenção geralmente entre 100-400 mg/dia por via oral, ajustada à resposta e à tolerância.",
    ajusteRenalHepatico:
      "Não requer ajuste específico em insuficiência renal. Uso cauteloso em insuficiência hepática significativa, com monitorização de função hepática dado o potencial de hepatotoxicidade.",
    gestacaoLactacao:
      "Uso na gestação apenas em situações de risco de vida materna, dado o risco de disfunção tireoidiana fetal (a molécula contém iodo) e outros efeitos adversos fetais; contraindicada na lactação.",
    contraindicacoes: [
      "Bloqueio atrioventricular avançado sem marca-passo",
      "Disfunção tireoidiana não controlada",
      "Hipersensibilidade conhecida ao iodo (a molécula contém iodo em sua estrutura)",
    ],
    efeitosColaterais: [
      "Disfunção tireoidiana (hipo ou hipertireoidismo, pelo alto conteúdo de iodo da molécula)",
      "Toxicidade pulmonar (pneumonite intersticial, potencialmente grave e irreversível)",
      "Hepatotoxicidade",
      "Microdepósitos corneanos (geralmente assintomáticos)",
      "Fotossensibilidade e coloração azul-acinzentada da pele com uso prolongado",
    ],
    interacoes: [
      "Varfarina: potencializa significativamente o efeito anticoagulante, exigindo redução de dose e monitorização mais próxima do INR",
      "Digoxina: aumenta o nível sérico de digoxina, com risco de toxicidade",
      "Outros antiarrítmicos e medicamentos que prolongam o intervalo QT: risco aumentado de arritmias ventriculares",
    ],
    monitorizacao: [
      "Função tireoidiana (TSH) periodicamente, dado o risco de disfunção tireoidiana induzida",
      "Função hepática periodicamente",
      "Radiografia de tórax e função pulmonar em uso crônico, dado o risco de toxicidade pulmonar",
      "Exame oftalmológico se sintomas visuais surgirem",
    ],
    alertas: [
      "A meia-vida extremamente longa significa que os efeitos (terapêuticos e tóxicos) podem persistir por semanas após a suspensão do medicamento, e as interações medicamentosas (como com a varfarina) também podem se manter por esse período prolongado.",
    ],
    similares: ["Sotalol (classe III alternativa, com propriedades betabloqueadoras)", "Dronedarona (análogo sem iodo, perfil de toxicidade diferente)"],
    pontosDeProva: [
      "A amiodarona tem propriedades das quatro classes antiarrítmicas de Vaughan-Williams, não apenas da classe III em que é classicamente enquadrada",
      "O alto conteúdo de iodo da molécula é a base fisiopatológica da disfunção tireoidiana induzida, um dos efeitos adversos mais característicos e mais cobrados",
      "A meia-vida extremamente longa (semanas) explica por que interações medicamentosas e efeitos adversos podem persistir muito tempo após a suspensão",
    ],
    doencasIndicadas: [
      { slug: "fibrilacao-flutter-atrial", nome: "Fibrilação e flutter atrial" },
      { slug: "parada-cardiaca", nome: "Parada cardíaca" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação multiclasse e farmacocinética", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Uso na parada cardiorrespiratória refratária à desfibrilação", fonte: "AHA Guidelines for CPR and Emergency Cardiovascular Care, 2020" },
    ],
  },
  {
    slug: "besilato-anlodipino",
    nome: "Besilato de anlodipino",
    nomeComercial: ["Norvasc", "Pressat"],
    principioAtivo: "Besilato de anlodipino",
    categoria: "Bloqueador de canal de cálcio (di-hidropiridínico)",
    codigoAtc: "C08CA01",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido",
    viaAdministracao: "Oral",
    resumo: "Bloqueador de canal de cálcio di-hidropiridínico de meia-vida longa, um dos anti-hipertensivos mais utilizados, com ação predominantemente vasodilatadora e mínimo efeito direto sobre a condução cardíaca.",
    indicacoes: [
      "Hipertensão arterial sistêmica, isolada ou em associação com outras classes",
      "Angina pectoris, incluindo a variante vasoespástica (angina de Prinzmetal)",
    ],
    mecanismoAcao:
      "Bloqueia seletivamente os canais de cálcio tipo L na musculatura lisa vascular (com efeito muito menor sobre o miocárdio e o sistema de condução que os bloqueadores não di-hidropiridínicos), promovendo vasodilatação arterial periférica e coronariana, com redução da resistência vascular sistêmica e da pressão arterial.",
    farmacocinetica:
      "Absorção oral lenta e meia-vida muito longa (30-50 horas), permitindo administração uma vez ao dia com início de ação gradual e efeito sustentado, com menor variabilidade pressórica entre doses. Metabolização hepática pelo CYP3A4.",
    posologia: "Adultos: 2,5-10 mg por via oral, uma vez ao dia.",
    ajusteRenalHepatico:
      "Não requer ajuste específico em insuficiência renal. Considerar dose inicial mais baixa em insuficiência hepática significativa, dado o metabolismo hepático.",
    gestacaoLactacao:
      "Uso na gestação apenas quando o benefício justifica o risco, dados limitados; uso cauteloso na lactação.",
    contraindicacoes: [
      "Hipersensibilidade conhecida aos di-hidropiridínicos",
      "Choque cardiogênico",
      "Estenose aórtica grave sintomática",
    ],
    efeitosColaterais: [
      "Edema periférico (efeito adverso mais característico e dose-dependente)",
      "Cefaleia",
      "Rubor facial",
      "Taquicardia reflexa (menos pronunciada que com di-hidropiridínicos de ação mais curta, pelo início de ação gradual)",
    ],
    interacoes: [
      "Inibidores potentes do CYP3A4: podem aumentar o nível sérico e o risco de efeitos adversos",
      "Simvastatina em doses altas: risco aumentado de miopatia quando associada",
    ],
    monitorizacao: [
      "Pressão arterial",
      "Edema de membros inferiores como indicador de efeito adverso dose-dependente",
    ],
    alertas: [
      "O edema periférico associado ao anlodipino decorre de vasodilatação arteriolar desproporcional à venular (não de retenção de sódio/água), por isso responde mal a diuréticos e melhora com redução de dose ou associação com IECA/BRA.",
    ],
    similares: ["Nifedipino (di-hidropiridínico de ação mais curta)", "Felodipino (di-hidropiridínico alternativo)"],
    pontosDeProva: [
      "O edema periférico do anlodipino é de origem vascular (desequilíbrio arteriolar-venular), não retenção volêmica — não responde bem a diuréticos isoladamente",
      "Sua meia-vida muito longa permite administração única diária com efeito pressórico sustentado e menor variabilidade entre doses",
    ],
    doencasIndicadas: [
      { slug: "hipertensao-arterial-sistemica", nome: "Hipertensão arterial sistêmica" },
      { slug: "angina-pectoris", nome: "Angina pectoris" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação seletivo vascular e farmacocinética", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Fisiopatologia do edema periférico vascular", fonte: "Diretriz Brasileira de Hipertensão Arterial, 2020" },
    ],
  },
  {
    slug: "cloridrato-verapamil",
    nome: "Cloridrato de verapamil",
    nomeComercial: ["Dilacoron", "Veracoron"],
    principioAtivo: "Cloridrato de verapamil",
    categoria: "Bloqueador de canal de cálcio (não di-hidropiridínico)",
    codigoAtc: "C08DA01",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido, comprimido de liberação prolongada",
    viaAdministracao: "Oral",
    resumo: "Bloqueador de canal de cálcio não di-hidropiridínico com efeito direto significativo sobre a condução atrioventricular, usado no controle de frequência da fibrilação atrial e no tratamento da angina e hipertensão.",
    indicacoes: [
      "Controle de frequência ventricular na fibrilação/flutter atrial, alternativa aos betabloqueadores",
      "Angina pectoris, incluindo a variante vasoespástica",
      "Hipertensão arterial sistêmica",
    ],
    mecanismoAcao:
      "Bloqueia canais de cálcio tipo L tanto na musculatura lisa vascular quanto, de forma clinicamente relevante, no nó sinoatrial e atrioventricular, reduzindo a frequência cardíaca e a velocidade de condução atrioventricular, além de promover vasodilatação; essa ação direta sobre o sistema de condução o distingue dos di-hidropiridínicos como o anlodipino.",
    farmacocinetica:
      "Boa absorção oral, mas com metabolismo de primeira passagem hepática significativo. Meia-vida relativamente curta na formulação de liberação imediata, com formulações de liberação prolongada disponíveis para administração menos frequente.",
    posologia: "Adultos: 80-120 mg por via oral, 3 vezes ao dia (liberação imediata), ou dose equivalente uma vez ao dia em formulação de liberação prolongada.",
    ajusteRenalHepatico:
      "Não requer ajuste específico em insuficiência renal. Requer redução de dose em insuficiência hepática significativa, dado o extenso metabolismo hepático.",
    gestacaoLactacao:
      "Uso na gestação apenas quando o benefício justifica o risco; compatível com a lactação em doses habituais, com monitorização.",
    contraindicacoes: [
      "Bloqueio atrioventricular de segundo/terceiro grau sem marca-passo",
      "Insuficiência cardíaca com fração de ejeção reduzida (efeito inotrópico negativo pode piorar a descompensação)",
      "Síndrome do nó sinusal sem marca-passo",
      "Uso concomitante intravenoso com betabloqueadores (risco de bloqueio atrioventricular grave e assistolia)",
    ],
    efeitosColaterais: [
      "Constipação (efeito adverso mais característico do verapamil entre os bloqueadores de canal de cálcio)",
      "Bradicardia e bloqueio atrioventricular",
      "Edema periférico",
      "Hipotensão",
    ],
    interacoes: [
      "Betabloqueadores: risco aumentado de bradicardia grave e bloqueio atrioventricular quando associados, especialmente por via intravenosa",
      "Digoxina: aumenta o nível sérico de digoxina, com risco de toxicidade",
      "Estatinas metabolizadas pelo CYP3A4: risco aumentado de miopatia",
    ],
    monitorizacao: [
      "Frequência cardíaca e condução atrioventricular (eletrocardiograma)",
      "Sinais de constipação em uso prolongado",
    ],
    alertas: [
      "Contraindicado na insuficiência cardíaca com fração de ejeção reduzida pelo efeito inotrópico negativo significativo, ao contrário dos di-hidropiridínicos como o anlodipino, que têm perfil de segurança mais favorável nessa condição.",
    ],
    similares: ["Diltiazem (não di-hidropiridínico alternativo, perfil semelhante)", "Metoprolol (alternativa para controle de frequência na FA)"],
    pontosDeProva: [
      "Verapamil (e diltiazem) têm efeito direto significativo sobre a condução atrioventricular, ao contrário dos di-hidropiridínicos (anlodipino, nifedipino), que atuam predominantemente na vasculatura",
      "É contraindicado na insuficiência cardíaca com fração de ejeção reduzida pelo efeito inotrópico negativo, diferentemente do anlodipino",
      "Constipação é o efeito adverso mais característico e distintivo do verapamil entre os bloqueadores de canal de cálcio",
    ],
    doencasIndicadas: [
      { slug: "hipertensao-arterial-sistemica", nome: "Hipertensão arterial sistêmica" },
      { slug: "angina-pectoris", nome: "Angina pectoris" },
      { slug: "fibrilacao-flutter-atrial", nome: "Fibrilação e flutter atrial" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação sobre condução atrioventricular e diferenças com di-hidropiridínicos", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Contraindicação na IC-FEr e uso no controle de frequência da FA", fonte: "Diretriz de Insuficiência Cardíaca Crônica, SBC 2021" },
    ],
  },
  {
    slug: "cloridrato-hidralazina",
    nome: "Cloridrato de hidralazina",
    nomeComercial: ["Apresolina", "Nepresol"],
    principioAtivo: "Cloridrato de hidralazina",
    categoria: "Vasodilatador arterial direto",
    codigoAtc: "C02DB02",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido, solução injetável",
    viaAdministracao: "Oral, intravenosa",
    resumo: "Vasodilatador arterial direto de uso versátil, com papel estabelecido na crise hipertensiva da pré-eclâmpsia, na insuficiência cardíaca (associado a nitrato) e como anti-hipertensivo adicional em casos refratários.",
    indicacoes: [
      "Crise hipertensiva na pré-eclâmpsia/eclâmpsia (via intravenosa)",
      "Insuficiência cardíaca com fração de ejeção reduzida, em associação com dinitrato de isossorbida, particularmente em populações e contextos específicos",
      "Hipertensão arterial sistêmica refratária, como agente adicional",
    ],
    mecanismoAcao:
      "Promove relaxamento direto da musculatura lisa arteriolar (com efeito muito menor sobre o leito venoso), por mecanismo não completamente elucidado envolvendo abertura de canais de potássio e possivelmente liberação de óxido nítrico endotelial, resultando em redução da resistência vascular periférica sem o efeito venodilatador dos nitratos.",
    farmacocinetica:
      "Boa absorção oral, com metabolismo hepático por acetilação (sujeito a polimorfismo genético — acetiladores lentos têm maior biodisponibilidade e risco de efeitos adversos). Início de ação rápido por via intravenosa, útil em crises hipertensivas.",
    posologia: "Crise hipertensiva (intravenosa): 5-10 mg em bolus, repetido conforme resposta. Manutenção oral: 25-100 mg, 2-4 vezes ao dia, ajustada conforme resposta.",
    ajusteRenalHepatico:
      "Requer cautela em insuficiência renal, dado o risco aumentado de síndrome lúpus-like induzida por hidralazina nessa população. Ajuste de dose considerado conforme status de acetilador e função hepática.",
    gestacaoLactacao:
      "Amplamente utilizada e considerada segura na gestação para tratamento de crise hipertensiva na pré-eclâmpsia; compatível com a lactação.",
    contraindicacoes: [
      "Doença arterial coronariana grave (pode desencadear taquicardia reflexa e isquemia miocárdica)",
      "Lúpus eritematoso sistêmico ativo (risco de exacerbação/indução de síndrome lúpus-like)",
      "Dissecção de aorta",
    ],
    efeitosColaterais: [
      "Taquicardia reflexa e palpitações (pela vasodilatação arterial sem efeito cronotrópico direto)",
      "Cefaleia",
      "Síndrome lúpus-like (associada a uso prolongado em doses mais altas, mais comum em acetiladores lentos)",
      "Retenção hídrica reflexa com uso prolongado",
    ],
    interacoes: [
      "Outros anti-hipertensivos: efeito hipotensor aditivo",
      "AINEs: podem reduzir o efeito anti-hipertensivo",
    ],
    monitorizacao: [
      "Pressão arterial e frequência cardíaca, especialmente durante administração intravenosa em crise hipertensiva",
      "Sinais/sintomas de síndrome lúpus-like em uso prolongado (artralgia, rash, sorologia quando indicado)",
    ],
    alertas: [
      "O risco de síndrome lúpus-like está relacionado à dose cumulativa e à duração do tratamento, sendo mais relevante em uso crônico prolongado do que no uso agudo em crise hipertensiva.",
    ],
    similares: ["Nitroprussiato de sódio (vasodilatador alternativo para crise hipertensiva, ação arterial e venosa)", "Metildopa (alternativa oral segura na gestação)"],
    pontosDeProva: [
      "É um dos poucos anti-hipertensivos com uso estabelecido e seguro na crise hipertensiva da pré-eclâmpsia/eclâmpsia",
      "A síndrome lúpus-like é um efeito adverso característico associado a uso prolongado em doses mais altas, mais comum em acetiladores lentos (polimorfismo genético da N-acetiltransferase hepática)",
      "Ao contrário dos nitratos, atua predominantemente no leito arterial, com efeito venodilatador mínimo",
    ],
    doencasIndicadas: [
      { slug: "pre-eclampsia", nome: "Hipertensão gestacional com proteinúria (pré-eclâmpsia)" },
      { slug: "insuficiencia-cardiaca", nome: "Insuficiência cardíaca" },
      { slug: "hipertensao-arterial-sistemica", nome: "Hipertensão arterial sistêmica" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação vasodilatador arterial e farmacogenética da acetilação", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Uso na crise hipertensiva da pré-eclâmpsia", fonte: "ACOG Practice Bulletin No. 222, Gestational Hypertension and Preeclampsia, 2020" },
    ],
  },
  {
    slug: "metildopa",
    nome: "Metildopa",
    nomeComercial: ["Aldomet"],
    principioAtivo: "Metildopa",
    categoria: "Anti-hipertensivo de ação central (agonista alfa-2 adrenérgico)",
    codigoAtc: "C02AB01",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido",
    viaAdministracao: "Oral",
    resumo: "Anti-hipertensivo de ação central com o mais longo e robusto histórico de segurança na gestação, sendo tratamento de primeira linha para hipertensão crônica durante a gravidez.",
    indicacoes: [
      "Hipertensão crônica durante a gestação, tratamento de primeira linha pelo extenso histórico de segurança materno-fetal",
      "Hipertensão arterial sistêmica em população geral (uso menos frequente atualmente, dado o perfil de efeitos adversos em comparação a classes mais modernas)",
    ],
    mecanismoAcao:
      "É convertida no sistema nervoso central em alfa-metilnorepinefrina, que atua como agonista dos receptores alfa-2 adrenérgicos pré-sinápticos no tronco encefálico, reduzindo o efluxo simpático central e, consequentemente, a resistência vascular periférica e a pressão arterial.",
    farmacocinetica:
      "Absorção oral variável, necessidade de conversão ao metabólito ativo no sistema nervoso central. Eliminação predominantemente renal.",
    posologia: "Adultos: 250-500 mg por via oral, 2-3 vezes ao dia, podendo ser titulada até 2-3 g/dia conforme resposta.",
    ajusteRenalHepatico:
      "Requer ajuste de dose em insuficiência renal, dada a eliminação predominantemente renal. Contraindicada em hepatopatia ativa (risco de hepatotoxicidade).",
    gestacaoLactacao:
      "Extensamente estudada e considerada de primeira linha para hipertensão crônica na gestação, com o mais longo histórico de segurança materno-fetal entre os anti-hipertensivos; compatível com a lactação.",
    contraindicacoes: [
      "Hepatopatia ativa ou história de disfunção hepática associada a uso prévio de metildopa",
      "Depressão ativa (pode exacerbar sintomas depressivos)",
      "Anemia hemolítica associada a uso prévio",
    ],
    efeitosColaterais: [
      "Sedação e fadiga (efeitos adversos mais comuns, relacionados à ação central)",
      "Hepatotoxicidade (elevação de transaminases, raramente hepatite)",
      "Anemia hemolítica autoimune (associada a teste de Coombs positivo)",
      "Depressão",
    ],
    interacoes: [
      "Outros anti-hipertensivos: efeito hipotensor aditivo",
      "Ferro oral: pode reduzir a absorção da metildopa quando administrados simultaneamente",
    ],
    monitorizacao: [
      "Função hepática periodicamente, especialmente nos primeiros meses de tratamento",
      "Hemograma se houver suspeita clínica de anemia hemolítica",
      "Sintomas depressivos durante o tratamento",
    ],
    alertas: [
      "É o anti-hipertensivo com o mais extenso histórico de segurança na gestação entre todas as classes disponíveis, sendo por isso o tratamento de primeira linha para hipertensão crônica gestacional apesar do perfil de efeitos adversos que limita seu uso na população geral.",
    ],
    similares: ["Hidralazina (alternativa segura na gestação)", "Nifedipino (alternativa oral segura na gestação para casos que exigem associação)"],
    pontosDeProva: [
      "Metildopa é o anti-hipertensivo de primeira linha para hipertensão crônica na gestação pelo extenso histórico de segurança materno-fetal, apesar de ser menos utilizada na população geral não gestante",
      "Pode causar anemia hemolítica autoimune com teste de Coombs positivo, achado laboratorial característico associado ao seu uso",
      "É convertida centralmente em alfa-metilnorepinefrina, que atua como agonista alfa-2 pré-sináptico reduzindo o efluxo simpático central",
    ],
    doencasIndicadas: [
      { slug: "disturbios-hipertensivos-cronicos-gestacionais-leves", nome: "Distúrbios hipertensivos crônicos e gestacionais leves da gravidez" },
      { slug: "hipertensao-arterial-sistemica", nome: "Hipertensão arterial sistêmica" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação central e efeitos adversos característicos", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Primeira linha para hipertensão crônica na gestação", fonte: "ACOG Practice Bulletin No. 203, Chronic Hypertension in Pregnancy, 2019" },
    ],
  },
  {
    slug: "mesilato-doxazosina",
    nome: "Mesilato de doxazosina",
    nomeComercial: ["Carduran"],
    principioAtivo: "Mesilato de doxazosina",
    categoria: "Anti-hipertensivo (antagonista alfa-1 adrenérgico)",
    codigoAtc: "C02CA04",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido",
    viaAdministracao: "Oral",
    resumo: "Antagonista alfa-1 adrenérgico seletivo, útil tanto no tratamento da hipertensão arterial refratária quanto no alívio dos sintomas obstrutivos da hiperplasia prostática benigna, refletindo sua dupla ação sobre a musculatura lisa vascular e prostática.",
    indicacoes: [
      "Hiperplasia prostática benigna sintomática, para alívio dos sintomas obstrutivos do trato urinário inferior",
      "Hipertensão arterial sistêmica, geralmente como agente adicional em esquemas de combinação para casos refratários",
    ],
    mecanismoAcao:
      "Bloqueia seletivamente os receptores alfa-1 adrenérgicos pós-sinápticos, tanto na musculatura lisa vascular (promovendo vasodilatação e redução da resistência periférica) quanto na musculatura lisa do colo vesical e da cápsula prostática (reduzindo o tônus e aliviando a obstrução funcional do fluxo urinário na hiperplasia prostática benigna).",
    farmacocinetica:
      "Boa absorção oral, meia-vida longa (cerca de 22 horas) permitindo administração uma vez ao dia. Metabolização hepática, eliminação predominantemente biliar/fecal.",
    posologia: "Adultos: iniciar com 1 mg por via oral, ao deitar (para minimizar hipotensão postural na primeira dose), titulando conforme resposta até 2-8 mg/dia.",
    ajusteRenalHepatico:
      "Não requer ajuste específico em insuficiência renal. Uso cauteloso em insuficiência hepática significativa.",
    gestacaoLactacao:
      "Não indicada para uso em mulheres (indicação prostática) e dados limitados na gestação para a indicação anti-hipertensiva; uso apenas quando claramente indicado.",
    contraindicacoes: [
      "Hipotensão postural sintomática preexistente",
      "Hipersensibilidade conhecida a antagonistas alfa-1",
    ],
    efeitosColaterais: [
      "Hipotensão postural, mais pronunciada com a primeira dose ('efeito de primeira dose')",
      "Tontura",
      "Síndrome da íris flácida intraoperatória (relevante em cirurgia de catarata, exigindo comunicação prévia ao oftalmologista)",
    ],
    interacoes: [
      "Inibidores da fosfodiesterase-5: risco aumentado de hipotensão quando associados",
      "Outros anti-hipertensivos: efeito hipotensor aditivo",
    ],
    monitorizacao: [
      "Pressão arterial em posição ortostática, especialmente ao iniciar o tratamento",
      "Sintomas urinários obstrutivos como medida de resposta terapêutica na hiperplasia prostática benigna",
    ],
    alertas: [
      "A primeira dose deve ser administrada ao deitar pelo risco de hipotensão postural significativa ('efeito de primeira dose'), e pacientes com cirurgia de catarata planejada devem informar o uso ao oftalmologista pelo risco de síndrome da íris flácida intraoperatória.",
    ],
    similares: ["Tansulosina (alfa-1 bloqueador mais seletivo para próstata, menor efeito hipotensor)", "Finasterida (mecanismo distinto, reduz o volume prostático)"],
    pontosDeProva: [
      "O 'efeito de primeira dose' (hipotensão postural significativa) justifica a recomendação de administrar a dose inicial ao deitar",
      "A síndrome da íris flácida intraoperatória é uma associação relevante que exige comunicação ao cirurgião oftalmológico antes de cirurgia de catarata em uso atual ou prévio de alfa-bloqueadores",
      "Sua dupla ação (vascular e prostática) explica a utilidade em pacientes que apresentam tanto hipertensão quanto hiperplasia prostática benigna concomitantes",
    ],
    doencasIndicadas: [
      { slug: "hiperplasia-prostatica-benigna", nome: "Hiperplasia da próstata (HPB)" },
      { slug: "hipertensao-arterial-sistemica", nome: "Hipertensão arterial sistêmica" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação alfa-1 seletivo e dupla indicação vascular/prostática", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Síndrome da íris flácida intraoperatória e efeito de primeira dose", fonte: "AUA Guideline on the Surgical Management of Benign Prostatic Hyperplasia, 2021" },
    ],
  },
  {
    slug: "cloridrato-dobutamina",
    nome: "Cloridrato de dobutamina",
    nomeComercial: ["Dobutrex", "Dobutamina genérico"],
    principioAtivo: "Cloridrato de dobutamina",
    categoria: "Inotrópico (agonista beta-1 adrenérgico)",
    codigoAtc: "C01CA07",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Solução injetável (infusão contínua)",
    viaAdministracao: "Intravenosa",
    resumo: "Inotrópico intravenoso de ação rápida e curta duração, usado no suporte hemodinâmico de curto prazo da insuficiência cardíaca aguda descompensada e do choque cardiogênico.",
    indicacoes: [
      "Insuficiência cardíaca aguda descompensada com baixo débito cardíaco, refratária a medidas iniciais",
      "Choque cardiogênico, como suporte inotrópico temporário",
    ],
    mecanismoAcao:
      "Agonista predominantemente dos receptores beta-1 adrenérgicos cardíacos, com efeito inotrópico positivo significativo e cronotrópico relativamente menor que outras catecolaminas, aumentando o débito cardíaco com impacto comparativamente modesto sobre a resistência vascular periférica.",
    farmacocinetica:
      "Início de ação em minutos após início da infusão intravenosa contínua, meia-vida muito curta (cerca de 2 minutos), exigindo infusão contínua para manutenção do efeito. Metabolização rápida por enzimas teciduais e hepáticas.",
    posologia: "Infusão intravenosa contínua, iniciando em 2,5-5 mcg/kg/min, titulada conforme resposta hemodinâmica até doses mais altas conforme necessário.",
    ajusteRenalHepatico:
      "Não requer ajuste específico de dose em insuficiência renal ou hepática, dado o metabolismo extra-hepático rápido, mas a resposta deve ser guiada por monitorização hemodinâmica contínua independentemente da função de órgãos.",
    gestacaoLactacao:
      "Uso restrito a situações de risco de vida materna, com avaliação individualizada; dados limitados na lactação.",
    contraindicacoes: [
      "Cardiomiopatia hipertrófica obstrutiva",
      "Taquiarritmias ventriculares não controladas",
      "Hipovolemia não corrigida (deve ser tratada antes do suporte inotrópico)",
    ],
    efeitosColaterais: [
      "Taquicardia e arritmias",
      "Hipertensão ou hipotensão, conforme a dose e o contexto hemodinâmico",
      "Isquemia miocárdica pelo aumento do consumo de oxigênio",
    ],
    interacoes: [
      "Betabloqueadores: podem antagonizar o efeito inotrópico ao competir pelos mesmos receptores",
      "Outras catecolaminas/vasopressores: efeito aditivo sobre frequência cardíaca e pressão arterial",
    ],
    monitorizacao: [
      "Monitorização hemodinâmica contínua (pressão arterial, frequência cardíaca, e idealmente parâmetros de débito cardíaco) durante toda a infusão",
      "Eletrocardiograma contínuo pelo risco de arritmias",
    ],
    alertas: [
      "Deve ser usada apenas em ambiente com monitorização hemodinâmica contínua, e a hipovolemia deve ser corrigida antes de seu início, dado que o suporte inotrópico não substitui a reposição volêmica adequada quando indicada.",
    ],
    similares: ["Dopamina (outro inotrópico/vasopressor, perfil hemodinâmico diferente conforme a dose)", "Milrinona (inodilatador, mecanismo distinto)"],
    pontosDeProva: [
      "A meia-vida extremamente curta da dobutamina exige infusão contínua para manter o efeito hemodinâmico, permitindo também ajuste rápido de dose conforme a resposta",
      "A hipovolemia deve sempre ser corrigida antes de iniciar suporte inotrópico, dado que a droga não compensa um déficit de volume circulante",
    ],
    doencasIndicadas: [
      { slug: "insuficiencia-cardiaca", nome: "Insuficiência cardíaca" },
      { slug: "cardiomiopatias", nome: "Cardiomiopatias" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação beta-1 seletivo e farmacocinética", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Uso no suporte hemodinâmico da IC aguda descompensada", fonte: "Diretriz Brasileira de Insuficiência Cardíaca Crônica e Aguda, SBC 2018" },
    ],
  },
  {
    slug: "nifedipino",
    nome: "Nifedipino",
    nomeComercial: ["Adalat", "Oxcord"],
    principioAtivo: "Nifedipino",
    categoria: "Bloqueador de canal de cálcio (di-hidropiridínico)",
    codigoAtc: "C08CA05",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido de liberação prolongada, cápsula",
    viaAdministracao: "Oral",
    resumo: "Bloqueador de canal de cálcio di-hidropiridínico com dupla relevância clínica: anti-hipertensivo/antianginoso na população geral e um dos poucos anti-hipertensivos orais e tocolíticos considerados seguros na gestação.",
    indicacoes: [
      "Hipertensão arterial sistêmica",
      "Angina pectoris, incluindo a variante vasoespástica",
      "Hipertensão na gestação, como opção oral segura",
      "Tocólise (inibição do trabalho de parto pré-termo), como agente de primeira linha em protocolos atuais",
    ],
    mecanismoAcao:
      "Bloqueia seletivamente os canais de cálcio tipo L na musculatura lisa vascular (com mínimo efeito direto sobre o miocárdio e o sistema de condução cardíaco), promovendo vasodilatação arterial; na tocólise, o mesmo mecanismo reduz o influxo de cálcio na musculatura lisa uterina, diminuindo a contratilidade.",
    farmacocinetica:
      "A formulação de liberação prolongada permite administração menos frequente com menor variabilidade pressórica; a formulação de liberação imediata tem início de ação mais rápido, mas está associada a maior risco de hipotensão reflexa abrupta e atualmente é evitada para tratamento crônico da hipertensão. Metabolização hepática pelo CYP3A4.",
    posologia: "Hipertensão/angina (liberação prolongada): 30-90 mg por via oral, uma vez ao dia. Tocólise: dose de ataque seguida de manutenção conforme protocolo obstétrico específico.",
    ajusteRenalHepatico:
      "Não requer ajuste específico em insuficiência renal. Considerar redução de dose em insuficiência hepática significativa, dado o metabolismo hepático.",
    gestacaoLactacao:
      "Considerado anti-hipertensivo oral e tocolítico seguro na gestação, com extenso histórico de uso nessa população; compatível com a lactação.",
    contraindicacoes: [
      "Choque cardiogênico",
      "Hipersensibilidade conhecida aos di-hidropiridínicos",
    ],
    efeitosColaterais: [
      "Edema periférico",
      "Cefaleia",
      "Rubor facial",
      "Hipotensão, mais pronunciada com a formulação de liberação imediata",
    ],
    interacoes: [
      "Sulfato de magnésio: uso concomitante na tocólise/pré-eclâmpsia requer cautela pelo risco de potencialização do bloqueio neuromuscular e hipotensão",
      "Inibidores do CYP3A4: podem aumentar o nível sérico e o risco de efeitos adversos",
    ],
    monitorizacao: [
      "Pressão arterial",
      "Frequência e intensidade das contrações uterinas quando usado para tocólise",
    ],
    alertas: [
      "A formulação de liberação imediata (cápsula sublingual/oral de ação rápida) deve ser evitada para tratamento crônico da hipertensão pelo risco de queda pressórica abrupta e eventos isquêmicos reflexos, sendo a liberação prolongada a formulação preferida nessa indicação.",
    ],
    similares: ["Besilato de anlodipino (meia-vida mais longa, perfil mais estável)", "Nicardipino (di-hidropiridínico intravenoso alternativo)"],
    pontosDeProva: [
      "É um dos poucos anti-hipertensivos orais e o tocolítico de primeira linha considerados seguros na gestação, junto com a metildopa e a hidralazina",
      "A formulação de liberação imediata deve ser evitada no tratamento crônico da hipertensão pelo risco de hipotensão reflexa abrupta, ao contrário da formulação de liberação prolongada",
    ],
    doencasIndicadas: [
      { slug: "hipertensao-arterial-sistemica", nome: "Hipertensão arterial sistêmica" },
      { slug: "angina-pectoris", nome: "Angina pectoris" },
      { slug: "trabalho-parto-pre-termo", nome: "Trabalho de parto pré-termo" },
      { slug: "disturbios-hipertensivos-cronicos-gestacionais-leves", nome: "Distúrbios hipertensivos crônicos e gestacionais leves da gravidez" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação seletivo vascular/uterino e farmacocinética", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Uso como tocolítico de primeira linha no trabalho de parto pré-termo", fonte: "ACOG Practice Bulletin No. 234, Prediction and Prevention of Spontaneous Preterm Birth, 2021" },
    ],
  },
  {
    slug: "estreptoquinase",
    nome: "Estreptoquinase",
    nomeComercial: ["Streptase"],
    principioAtivo: "Estreptoquinase",
    categoria: "Trombolítico (fibrinolítico)",
    codigoAtc: "B01AD01",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Pó liofilizado para solução injetável",
    viaAdministracao: "Intravenosa",
    resumo: "Trombolítico de primeira geração, ainda amplamente utilizado em sistemas de saúde com acesso limitado à intervenção coronária percutânea primária para reperfusão no infarto agudo do miocárdio com supradesnivelamento do segmento ST.",
    indicacoes: [
      "Infarto agudo do miocárdio com supradesnivelamento do segmento ST, quando a intervenção coronária percutânea primária não está disponível dentro do tempo recomendado",
      "Embolia pulmonar maciça com instabilidade hemodinâmica",
    ],
    mecanismoAcao:
      "Forma um complexo ativador com o plasminogênio circulante, que converte plasminogênio adicional em plasmina, a enzima responsável pela degradação da fibrina do trombo; ao contrário dos trombolíticos mais modernos, não é fibrino-específica, ativando plasminogênio de forma mais sistêmica e generalizada.",
    farmacocinetica:
      "Meia-vida curta (cerca de 20 minutos), administrada em infusão intravenosa por tempo determinado conforme protocolo. É uma proteína de origem bacteriana (estreptocócica), o que a torna antigênica.",
    posologia: "Infarto agudo do miocárdio: 1.500.000 UI em infusão intravenosa ao longo de 30-60 minutos, conforme protocolo institucional.",
    ajusteRenalHepatico:
      "Não requer ajuste específico de dose em insuficiência renal ou hepática, mas ambas as condições podem aumentar o risco hemorrágico geral associado ao uso de trombolíticos.",
    gestacaoLactacao:
      "Uso na gestação apenas em situações de risco de vida materna, dado o risco hemorrágico significativo tanto materno quanto potencialmente fetal.",
    contraindicacoes: [
      "Sangramento ativo significativo",
      "AVC hemorrágico prévio ou AVC isquêmico recente (dentro de determinado intervalo)",
      "Cirurgia de grande porte ou trauma significativo recente",
      "Uso prévio de estreptoquinase nos últimos 6 meses a 1 ano (risco de reação alérgica e de resistência por anticorpos neutralizantes)",
    ],
    efeitosColaterais: [
      "Sangramento (o efeito adverso mais relevante e temido)",
      "Reações alérgicas/anafilactoides, dada a natureza antigênica da proteína bacteriana",
      "Hipotensão durante a infusão",
    ],
    interacoes: [
      "Anticoagulantes e antiplaquetários: aumento significativo do risco de sangramento quando associados",
    ],
    monitorizacao: [
      "Sinais de sangramento durante e após a infusão",
      "Sinais vitais durante a infusão, dado o risco de hipotensão e reação alérgica",
      "Resposta eletrocardiográfica/clínica como indicador de sucesso da reperfusão no IAM",
    ],
    alertas: [
      "Por ser antigênica (proteína bacteriana), o uso prévio de estreptoquinase (nos últimos 6 meses a 1 ano) contraindica seu reuso, tanto pelo risco de reação alérgica quanto pela redução de eficácia por anticorpos neutralizantes já formados — situação em que um trombolítico fibrino-específico como a alteplase deve ser preferido.",
    ],
    similares: ["Alteplase (trombolítico fibrino-específico, sem o problema da antigenicidade)", "Tenecteplase (trombolítico de terceira geração)"],
    pontosDeProva: [
      "Ao contrário da alteplase, a estreptoquinase não é fibrino-específica, causando um estado lítico sistêmico mais generalizado",
      "É uma proteína bacteriana antigênica — uso prévio contraindica reuso pelo risco de reação alérgica e de resistência por anticorpos neutralizantes",
      "Permanece relevante em sistemas de saúde sem acesso oportuno à intervenção coronária percutânea primária, apesar de trombolíticos mais modernos existirem",
    ],
    doencasIndicadas: [
      { slug: "infarto-agudo-miocardio", nome: "Infarto agudo do miocárdio" },
      { slug: "embolia-pulmonar", nome: "Embolia pulmonar" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação não fibrino-específico e antigenicidade", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Uso como alternativa à ICP primária indisponível no IAMCSST", fonte: "2013 ACCF/AHA Guideline for the Management of ST-Elevation Myocardial Infarction" },
    ],
  },
  {
    slug: "alteplase",
    nome: "Alteplase",
    nomeComercial: ["Actilyse"],
    principioAtivo: "Alteplase (ativador do plasminogênio tecidual recombinante)",
    categoria: "Trombolítico (fibrinolítico fibrino-específico)",
    codigoAtc: "B01AD02",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Pó liofilizado para solução injetável",
    viaAdministracao: "Intravenosa",
    resumo: "Trombolítico fibrino-específico de referência, com papel estabelecido tanto no infarto agudo do miocárdio quanto, de forma exclusiva entre os trombolíticos, no AVC isquêmico dentro da janela terapêutica.",
    indicacoes: [
      "Infarto agudo do miocárdio com supradesnivelamento do segmento ST, quando a intervenção coronária percutânea primária não está disponível dentro do tempo recomendado",
      "AVC isquêmico agudo, dentro da janela terapêutica estabelecida a partir do início dos sintomas",
      "Embolia pulmonar maciça com instabilidade hemodinâmica",
    ],
    mecanismoAcao:
      "Ativador do plasminogênio tecidual produzido por tecnologia recombinante, com maior afinidade pelo plasminogênio ligado à fibrina do trombo do que pelo plasminogênio circulante livre, resultando em ação trombolítica mais localizada e fibrino-específica que a estreptoquinase, com menor efeito lítico sistêmico generalizado.",
    farmacocinetica:
      "Meia-vida plasmática muito curta (poucos minutos), metabolização hepática rápida, exigindo protocolo de infusão específico (bolus seguido de infusão) conforme a indicação.",
    posologia: "IAMCSST: protocolo específico com bolus inicial seguido de infusão ao longo de 90 minutos. AVC isquêmico: dose ajustada por peso, com 10% em bolus e o restante em infusão ao longo de 60 minutos, dentro da janela terapêutica.",
    ajusteRenalHepatico:
      "Não requer ajuste específico de dose em insuficiência renal. Uso cauteloso em hepatopatia significativa pelo risco hemorrágico aumentado (produção reduzida de fatores de coagulação).",
    gestacaoLactacao:
      "Uso na gestação apenas em situações de risco de vida materna, dado o risco hemorrágico significativo.",
    contraindicacoes: [
      "Sangramento ativo significativo",
      "AVC hemorrágico prévio",
      "No AVC isquêmico: fora da janela terapêutica estabelecida, ou critérios de imagem/clínicos específicos de exclusão (extensa área de infarto estabelecido, uso recente de anticoagulantes com INR elevado)",
      "Cirurgia intracraniana/medular recente",
    ],
    efeitosColaterais: [
      "Sangramento (o efeito adverso mais relevante, incluindo o risco específico de hemorragia intracraniana no uso para AVC isquêmico)",
      "Reação alérgica, menos comum que com a estreptoquinase, dado que não é uma proteína bacteriana antigênica",
    ],
    interacoes: [
      "Anticoagulantes e antiplaquetários: aumento significativo do risco de sangramento quando associados",
    ],
    monitorizacao: [
      "Sinais de sangramento, especialmente neurológicos (sinais de hemorragia intracraniana) no uso para AVC isquêmico",
      "Pressão arterial rigorosamente controlada durante e após a infusão no AVC isquêmico, dado que a hipertensão não controlada aumenta o risco de transformação hemorrágica",
    ],
    alertas: [
      "No AVC isquêmico, o tempo desde o início dos sintomas até a administração é o determinante mais crítico tanto da elegibilidade quanto do benefício esperado — 'tempo é cérebro' resume a urgência do processo de decisão e administração.",
    ],
    similares: ["Tenecteplase (trombolítico de terceira geração, meia-vida mais longa, administração em bolus único)", "Estreptoquinase (trombolítico não fibrino-específico, alternativa quando alteplase indisponível)"],
    pontosDeProva: [
      "Alteplase é fibrino-específica (maior afinidade pelo plasminogênio ligado à fibrina do trombo), ao contrário da estreptoquinase, que causa lise sistêmica generalizada",
      "É o único trombolítico com papel estabelecido no tratamento do AVC isquêmico agudo dentro da janela terapêutica, refletindo décadas de estudos específicos nessa indicação",
      "No AVC isquêmico, o tempo desde o início dos sintomas é o fator mais determinante da elegibilidade e do benefício — daí a máxima 'tempo é cérebro'",
    ],
    doencasIndicadas: [
      { slug: "infarto-agudo-miocardio", nome: "Infarto agudo do miocárdio" },
      { slug: "avc-isquemico-infarto-cerebral", nome: "Infarto cerebral (AVC isquêmico)" },
      { slug: "embolia-pulmonar", nome: "Embolia pulmonar" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação fibrino-específico e farmacocinética", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Janela terapêutica e critérios de elegibilidade no AVC isquêmico", fonte: "AHA/ASA Guideline for the Early Management of Patients With Acute Ischemic Stroke, 2019" },
    ],
  },
  {
    slug: "sacubitril-valsartana",
    nome: "Sacubitril + valsartana sódica hidratada",
    nomeComercial: ["Entresto"],
    principioAtivo: "Sacubitril + valsartana sódica hidratada",
    categoria: "Inibidor da neprilisina e do receptor de angiotensina (ARNI)",
    codigoAtc: "C09DX04",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido revestido",
    viaAdministracao: "Oral",
    resumo: "Combinação em dose fixa que representa avanço terapêutico na insuficiência cardíaca com fração de ejeção reduzida, substituindo o IECA/BRA como um dos quatro pilares farmacológicos em pacientes elegíveis.",
    indicacoes: [
      "Insuficiência cardíaca com fração de ejeção reduzida, em substituição ao IECA/BRA, em pacientes sintomáticos apesar de tratamento otimizado",
    ],
    mecanismoAcao:
      "Combina dois mecanismos: o sacubitril inibe a neprilisina, enzima responsável pela degradação de peptídeos natriuréticos (que têm efeitos vasodilatador, natriurético e antifibrótico benéficos na IC), enquanto a valsartana bloqueia o receptor AT1 da angiotensina II, suprimindo os efeitos deletérios da ativação do sistema renina-angiotensina; a combinação amplifica os efeitos natriuréticos/vasodilatadores enquanto bloqueia a vasoconstrição, com benefício de mortalidade superior ao enalapril isolado em estudo de referência.",
    farmacocinetica:
      "Boa absorção oral, com sacubitril convertido ao metabólito ativo LBQ657. Eliminação renal e biliar. Meia-vida permite administração duas vezes ao dia.",
    posologia: "Adultos: iniciar com 49/51 mg (ou dose menor em pacientes virgens de IECA/BRA ou com função renal/hepática reduzida) por via oral, duas vezes ao dia, titulando até 97/103 mg duas vezes ao dia conforme tolerância.",
    ajusteRenalHepatico:
      "Requer dose inicial menor em insuficiência renal moderada a grave e em insuficiência hepática moderada; contraindicado em insuficiência hepática grave.",
    gestacaoLactacao:
      "Contraindicado na gestação (mesmo risco fetotóxico dos IECA/BRA pela presença do componente valsartana); evitar na lactação.",
    contraindicacoes: [
      "Uso concomitante ou nas 36 horas seguintes ao uso de IECA (risco de angioedema grave por acúmulo de bradicinina)",
      "Histórico de angioedema relacionado a IECA/BRA",
      "Gestação",
      "Insuficiência hepática grave",
    ],
    efeitosColaterais: [
      "Hipotensão",
      "Hipercalemia",
      "Disfunção renal",
      "Angioedema (risco aumentado especialmente na transição a partir de IECA sem o intervalo de 36 horas)",
    ],
    interacoes: [
      "IECA: combinação absolutamente contraindicada pelo risco de angioedema grave — necessário intervalo de 36 horas na transição entre as duas classes",
      "Diuréticos poupadores de potássio e suplementos de potássio: risco aumentado de hipercalemia",
    ],
    monitorizacao: [
      "Função renal e potássio sérico, especialmente após início ou ajuste de dose",
      "Pressão arterial",
      "Sinais de angioedema, particularmente na transição a partir de IECA",
    ],
    alertas: [
      "A transição de um IECA para sacubitril-valsartana exige intervalo obrigatório de 36 horas sem uso de IECA, pelo risco de angioedema grave por acúmulo de bradicinina quando as duas classes se sobrepõem.",
    ],
    similares: ["Enalapril (IECA que o ARNI substitui em pacientes elegíveis)", "Losartana potássica (BRA isolado, alternativa quando o ARNI não é indicado/disponível)"],
    pontosDeProva: [
      "O estudo PARADIGM-HF demonstrou superioridade de mortalidade do sacubitril-valsartana sobre o enalapril isolado na IC-FEr, mudança de paradigma no tratamento farmacológico da doença",
      "A transição a partir de IECA exige intervalo de 36 horas pelo risco de angioedema grave por acúmulo de bradicinina — um dos pontos de segurança mais cobrados sobre esse medicamento",
    ],
    doencasIndicadas: [
      { slug: "insuficiencia-cardiaca", nome: "Insuficiência cardíaca" },
      { slug: "cardiomiopatias", nome: "Cardiomiopatias" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação dual (neprilisina + receptor AT1) e farmacocinética", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Superioridade de mortalidade sobre enalapril (estudo PARADIGM-HF) e posicionamento como pilar da IC-FEr", fonte: "Diretriz de Insuficiência Cardíaca Crônica, SBC 2021" },
    ],
  },
  {
    slug: "acido-acetilsalicilico",
    nome: "Ácido acetilsalicílico (AAS)",
    nomeComercial: ["Aspirina", "AAS infantil (100 mg)"],
    principioAtivo: "Ácido acetilsalicílico",
    categoria: "Antiplaquetário (dose baixa) / Anti-inflamatório não esteroidal e analgésico (dose alta)",
    codigoAtc: "B01AC06 (100 mg, uso antiplaquetário) / N02BA01 (500 mg, uso analgésico)",
    tarja: "Venda livre (MIP)",
    formaFarmaceutica: "Comprimido",
    viaAdministracao: "Oral",
    resumo: "Medicamento de duplo perfil de uso conforme a dose: em dose baixa (100 mg), é o antiplaquetário de referência na prevenção cardiovascular; em dose alta (500 mg), é analgésico/antitérmico/anti-inflamatório comum.",
    indicacoes: [
      "Dose baixa (100 mg): prevenção secundária (e, em casos selecionados, primária de alto risco) de eventos cardiovasculares e cerebrovasculares — infarto agudo do miocárdio, angina, AVC isquêmico/AIT",
      "Dose alta (500 mg): analgesia leve a moderada, febre, processos inflamatórios",
    ],
    mecanismoAcao:
      "Inibe irreversivelmente a enzima ciclo-oxigenase (COX-1 e COX-2) por acetilação, bloqueando a síntese de prostaglandinas e tromboxano A2; em dose baixa, o efeito predominante é a inibição da produção plaquetária de tromboxano A2 (agregante plaquetário), conferindo efeito antiplaquetário duradouro (toda a vida útil da plaqueta, pela inibição irreversível); em doses mais altas, o efeito anti-inflamatório/analgésico/antitérmico sistêmico predomina.",
    farmacocinetica:
      "Boa absorção oral, hidrolisada a ácido salicílico (metabólito com atividade anti-inflamatória própria). O efeito antiplaquetário da dose baixa persiste por toda a vida útil da plaqueta (7-10 dias) mesmo após uma única dose, pela inibição irreversível da COX-1 plaquetária.",
    posologia: "Prevenção cardiovascular: 100 mg por via oral, uma vez ao dia. Analgesia/febre: 500-1000 mg por via oral, a cada 4-6 horas conforme necessário.",
    ajusteRenalHepatico:
      "Uso cauteloso em insuficiência renal (pode piorar a função renal, especialmente em doses altas) e em hepatopatia significativa.",
    gestacaoLactacao:
      "Em dose baixa, usado em indicações obstétricas específicas (como profilaxia de pré-eclâmpsia em populações de risco) sob orientação médica; em dose alta, evitar no terceiro trimestre pelo risco de fechamento precoce do ducto arterioso, semelhante a outros AINEs.",
    contraindicacoes: [
      "Úlcera péptica ativa ou histórico de sangramento digestivo significativo",
      "Hipersensibilidade a salicilatos",
      "Crianças e adolescentes com quadro viral (varicela, influenza): risco de síndrome de Reye",
      "Terceiro trimestre da gestação em dose alta",
    ],
    efeitosColaterais: [
      "Dispepsia e risco de sangramento gastrointestinal",
      "Sangramento (relevante especialmente no uso antiplaquetário crônico)",
      "Broncoespasmo em pacientes com sensibilidade a AINEs (doença respiratória exacerbada por AAS)",
    ],
    interacoes: [
      "Anticoagulantes e outros antiplaquetários: aumento significativo do risco de sangramento",
      "Outros AINEs: podem interferir na ligação irreversível do AAS à COX-1 plaquetária, potencialmente reduzindo seu efeito antiplaquetário quando administrados antes do AAS",
    ],
    monitorizacao: [
      "Sinais de sangramento em uso antiplaquetário crônico",
      "Sintomas dispépticos/gastrointestinais",
    ],
    alertas: [
      "AAS é absolutamente contraindicado em crianças e adolescentes com infecção viral aguda (varicela, influenza) pelo risco de síndrome de Reye, uma encefalopatia hepática grave e potencialmente fatal.",
    ],
    similares: ["Bissulfato de clopidogrel (antiplaquetário alternativo/associado)", "Paracetamol (analgésico/antitérmico alternativo sem efeito antiplaquetário ou gastrointestinal significativo)"],
    pontosDeProva: [
      "O efeito antiplaquetário do AAS é irreversível e dura toda a vida útil da plaqueta, mesmo após dose única, pela acetilação permanente da COX-1 plaquetária",
      "A síndrome de Reye é a razão pela qual o AAS é contraindicado em crianças/adolescentes com infecção viral aguda",
      "A mesma molécula tem códigos ATC e usos distintos conforme a dose: antiplaquetário em dose baixa (100 mg), analgésico/anti-inflamatório em dose alta (500 mg)",
    ],
    doencasIndicadas: [
      { slug: "infarto-agudo-miocardio", nome: "Infarto agudo do miocárdio" },
      { slug: "angina-pectoris", nome: "Angina pectoris" },
      { slug: "ait-ataque-isquemico-transitorio", nome: "Ataque isquêmico transitório (AIT)" },
      { slug: "avc-isquemico-infarto-cerebral", nome: "Infarto cerebral (AVC isquêmico)" },
      { slug: "restricao-crescimento-intrauterino", nome: "Restrição de crescimento intrauterino" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação e inibição irreversível da COX-1 plaquetária", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Síndrome de Reye e contraindicação pediátrica em infecção viral", fonte: "CDC, MMWR — Surgeon General's Advisory on the Use of Salicylates and Reye Syndrome, 1982" },
    ],
  },
  {
    slug: "glibenclamida",
    nome: "Glibenclamida",
    nomeComercial: ["Daonil", "Glibenclamida genérico"],
    principioAtivo: "Glibenclamida",
    categoria: "Hipoglicemiante oral (sulfonilureia)",
    codigoAtc: "A10BB01",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido",
    viaAdministracao: "Oral",
    resumo: "Sulfonilureia de segunda geração, hipoglicemiante oral de longa duração e alta potência, mas com risco de hipoglicemia comparativamente maior que outras sulfonilureias, motivo pelo qual seu uso vem sendo progressivamente limitado, especialmente em idosos.",
    indicacoes: [
      "Diabetes mellitus tipo 2, como opção quando a metformina isoladamente é insuficiente ou não tolerada",
    ],
    mecanismoAcao:
      "Estimula a secreção de insulina pelas células beta pancreáticas ao se ligar ao receptor de sulfonilureia (SUR1) associado a canais de potássio dependentes de ATP, promovendo seu fechamento, despolarização da célula beta, influxo de cálcio e liberação de insulina, independentemente dos níveis glicêmicos (mecanismo que explica o risco de hipoglicemia mesmo em jejum).",
    farmacocinetica:
      "Boa absorção oral, meia-vida relativamente longa com metabólitos ativos que prolongam ainda mais o efeito hipoglicemiante, contribuindo para o maior risco de hipoglicemia prolongada em comparação a sulfonilureias de meia-vida mais curta. Metabolização hepática, eliminação renal e biliar dos metabólitos.",
    posologia: "Adultos: iniciar com 2,5-5 mg por via oral, uma vez ao dia antes do café da manhã, titulando até no máximo 20 mg/dia conforme resposta glicêmica.",
    ajusteRenalHepatico:
      "Uso cauteloso ou evitado em insuficiência renal moderada a grave e em hepatopatia significativa, dado o risco aumentado de hipoglicemia prolongada pelo acúmulo de metabólitos ativos.",
    gestacaoLactacao:
      "Não recomendada na gestação (insulina é o tratamento de escolha para diabetes gestacional ou pré-gestacional); evitar na lactação.",
    contraindicacoes: [
      "Diabetes mellitus tipo 1",
      "Cetoacidose diabética",
      "Insuficiência renal ou hepática significativas",
      "Hipersensibilidade a sulfonamidas",
    ],
    efeitosColaterais: [
      "Hipoglicemia (o efeito adverso mais relevante e mais frequente entre as sulfonilureias, pelo mecanismo de ação independente da glicemia e pela meia-vida prolongada)",
      "Ganho de peso",
    ],
    interacoes: [
      "Álcool: pode potencializar o efeito hipoglicemiante e causar reação tipo dissulfiram",
      "Betabloqueadores: podem mascarar os sintomas adrenérgicos de hipoglicemia",
    ],
    monitorizacao: [
      "Glicemia capilar regular, especialmente ao iniciar ou ajustar a dose",
      "Sinais e sintomas de hipoglicemia, particularmente em idosos e em insuficiência renal",
    ],
    alertas: [
      "Entre as sulfonilureias, a glibenclamida tem o maior risco de hipoglicemia prolongada e grave, sendo geralmente evitada em idosos e preferindo-se sulfonilureias de ação mais curta (como a gliclazida) quando essa classe é indicada nessa população.",
    ],
    similares: ["Gliclazida (sulfonilureia de menor risco de hipoglicemia)", "Metformina (primeira linha, mecanismo distinto sem risco de hipoglicemia)"],
    pontosDeProva: [
      "A glibenclamida tem o maior risco de hipoglicemia entre as sulfonilureias, pela combinação de alta potência e meia-vida prolongada com metabólitos ativos",
      "O mecanismo de ação (fechamento de canais de potássio dependentes de ATP na célula beta) é independente dos níveis glicêmicos, o que explica o risco de hipoglicemia mesmo em jejum ou com baixa ingesta calórica",
    ],
    doencasIndicadas: [
      { slug: "diabetes-mellitus-tipo-2", nome: "Diabetes mellitus tipo 2" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação (canal de potássio dependente de ATP) e farmacocinética", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Risco comparativamente maior de hipoglicemia entre sulfonilureias e uso cauteloso em idosos", fonte: "Diretrizes da Sociedade Brasileira de Diabetes, 2023-2024" },
    ],
  },
  {
    slug: "gliclazida",
    nome: "Gliclazida",
    nomeComercial: ["Diamicron", "Azukon"],
    principioAtivo: "Gliclazida",
    categoria: "Hipoglicemiante oral (sulfonilureia)",
    codigoAtc: "A10BB09",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido, comprimido de liberação prolongada",
    viaAdministracao: "Oral",
    resumo: "Sulfonilureia de segunda geração com perfil de segurança mais favorável que a glibenclamida quanto ao risco de hipoglicemia, sendo a sulfonilureia preferida quando essa classe é indicada, especialmente em idosos.",
    indicacoes: [
      "Diabetes mellitus tipo 2, como opção quando a metformina isoladamente é insuficiente ou não tolerada",
    ],
    mecanismoAcao:
      "Mesmo mecanismo das demais sulfonilureias: liga-se ao receptor SUR1 associado a canais de potássio dependentes de ATP nas células beta pancreáticas, promovendo despolarização, influxo de cálcio e liberação de insulina, independentemente dos níveis glicêmicos.",
    farmacocinetica:
      "A formulação de liberação prolongada permite administração uma vez ao dia com liberação mais gradual e previsível, contribuindo para menor risco de hipoglicemia em comparação a sulfonilureias de ação mais prolongada e menos controlada como a glibenclamida. Metabolização hepática, eliminação predominantemente renal dos metabólitos, a maioria sem atividade hipoglicemiante significativa (ao contrário da glibenclamida).",
    posologia: "Adultos: 30-120 mg por via oral, uma vez ao dia (formulação de liberação prolongada), pela manhã.",
    ajusteRenalHepatico:
      "Uso cauteloso em insuficiência renal moderada a grave, embora com risco de hipoglicemia comparativamente menor que a glibenclamida nessa situação, dado que a maioria dos metabólitos não é ativa. Uso cauteloso em hepatopatia significativa.",
    gestacaoLactacao:
      "Não recomendada na gestação (insulina é o tratamento de escolha); evitar na lactação.",
    contraindicacoes: [
      "Diabetes mellitus tipo 1",
      "Cetoacidose diabética",
      "Insuficiência renal ou hepática graves",
      "Hipersensibilidade a sulfonamidas",
    ],
    efeitosColaterais: [
      "Hipoglicemia (risco menor que com a glibenclamida, mas ainda presente)",
      "Ganho de peso",
    ],
    interacoes: [
      "Álcool: pode potencializar o efeito hipoglicemiante",
      "Betabloqueadores: podem mascarar os sintomas adrenérgicos de hipoglicemia",
    ],
    monitorizacao: [
      "Glicemia capilar regular",
      "Sinais e sintomas de hipoglicemia",
    ],
    alertas: [
      "É a sulfonilureia geralmente preferida em idosos e em insuficiência renal leve a moderada, quando essa classe terapêutica é indicada, pelo perfil de hipoglicemia mais favorável que a glibenclamida.",
    ],
    similares: ["Glibenclamida (sulfonilureia de maior potência e maior risco de hipoglicemia)", "Metformina (primeira linha, sem risco de hipoglicemia)"],
    pontosDeProva: [
      "Ao contrário da glibenclamida, a maioria dos metabólitos da gliclazida não é ativa, contribuindo para seu perfil de hipoglicemia mais previsível e seguro",
      "É a sulfonilureia preferida em idosos quando essa classe é indicada, exatamente pelo menor risco de hipoglicemia grave/prolongada",
    ],
    doencasIndicadas: [
      { slug: "diabetes-mellitus-tipo-2", nome: "Diabetes mellitus tipo 2" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação e diferenças farmacocinéticas com a glibenclamida", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Preferência em idosos pelo perfil de hipoglicemia mais favorável", fonte: "Diretrizes da Sociedade Brasileira de Diabetes, 2023-2024" },
    ],
  },
  {
    slug: "propiltiouracila",
    nome: "Propiltiouracila",
    nomeComercial: ["Propiltiouracil genérico"],
    principioAtivo: "Propiltiouracila",
    categoria: "Antitireoidiano",
    codigoAtc: "H03BA02",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido",
    viaAdministracao: "Oral",
    resumo: "Antitireoidiano com papel específico e preferencial no primeiro trimestre da gestação e na tempestade tireotóxica, situações em que suas propriedades farmacológicas particulares (incluindo inibição periférica da conversão de T4 em T3) oferecem vantagem sobre o tiamazol.",
    indicacoes: [
      "Hipertireoidismo (doença de Graves, bócio multinodular tóxico), particularmente no primeiro trimestre da gestação",
      "Tempestade tireotóxica (crise tireotóxica), pela ação adicional de inibição da conversão periférica de T4 em T3",
    ],
    mecanismoAcao:
      "Inibe a enzima tireoperoxidase, bloqueando a organificação do iodo e a síntese de hormônios tireoidianos; adicionalmente, e de forma distintiva em relação ao tiamazol, inibe a enzima deiodinase periférica responsável pela conversão de T4 (menos ativo) em T3 (mais ativo), conferindo efeito adicional relevante na tempestade tireotóxica.",
    farmacocinetica:
      "Meia-vida curta, exigindo múltiplas tomadas diárias. Menor transferência placentária e para o leite materno que o tiamazol, características que fundamentam sua preferência no primeiro trimestre da gestação.",
    posologia: "Adultos: dose inicial de 100-150 mg por via oral, 3 vezes ao dia, ajustada conforme resposta clínica e laboratorial.",
    ajusteRenalHepatico:
      "Não requer ajuste específico em insuficiência renal. Contraindicada em hepatopatia ativa, dado o risco de hepatotoxicidade grave associado a esse medicamento especificamente.",
    gestacaoLactacao:
      "Preferida sobre o tiamazol especificamente no primeiro trimestre da gestação pelo menor risco teratogênico associado; o tiamazol é preferido a partir do segundo trimestre pelo menor risco de hepatotoxicidade materna grave.",
    contraindicacoes: [
      "Hepatopatia ativa ou história de hepatotoxicidade grave por propiltiouracila",
      "Hipersensibilidade conhecida",
    ],
    efeitosColaterais: [
      "Hepatotoxicidade grave (incluindo insuficiência hepática fulminante, raro mas grave, mais associado à propiltiouracila que ao tiamazol)",
      "Agranulocitose (efeito adverso grave compartilhado com o tiamazol, exigindo alerta imediato diante de febre/infecção)",
      "Rash cutâneo",
      "Artralgia",
    ],
    interacoes: [
      "Anticoagulantes orais: pode potencializar o efeito anticoagulante",
    ],
    monitorizacao: [
      "Função hepática, particularmente relevante dado o risco específico de hepatotoxicidade grave desse medicamento",
      "Hemograma diante de febre ou sinais de infecção, pelo risco de agranulocitose",
      "Função tireoidiana periódica para ajuste de dose",
    ],
    alertas: [
      "Ao contrário do tiamazol (preferido na maior parte do tratamento do hipertireoidismo), a propiltiouracila tem indicações específicas e restritas: primeiro trimestre da gestação e tempestade tireotóxica, dado seu maior risco de hepatotoxicidade grave em uso prolongado.",
    ],
    similares: ["Tiamazol (antitireoidiano preferido fora do primeiro trimestre da gestação)"],
    pontosDeProva: [
      "A propiltiouracila, ao contrário do tiamazol, inibe também a conversão periférica de T4 em T3, propriedade que fundamenta seu uso preferencial na tempestade tireotóxica",
      "É preferida especificamente no primeiro trimestre da gestação pelo menor risco teratogênico comparado ao tiamazol, mas o tiamazol é preferido a partir do segundo trimestre pelo menor risco de hepatotoxicidade materna grave",
      "Agranulocitose é um efeito adverso grave compartilhado entre propiltiouracila e tiamazol, exigindo orientação ao paciente para procurar atendimento imediato diante de febre ou sinais de infecção",
    ],
    doencasIndicadas: [
      { slug: "hipertireoidismo", nome: "Tireotoxicose (hipertireoidismo)" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação e inibição da deiodinase periférica", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Preferência no primeiro trimestre da gestação e na tempestade tireotóxica", fonte: "American Thyroid Association Guidelines for Diagnosis and Management of Hyperthyroidism, 2016" },
    ],
  },
  {
    slug: "tiamazol",
    nome: "Tiamazol (metimazol)",
    nomeComercial: ["Tapazol"],
    principioAtivo: "Tiamazol",
    categoria: "Antitireoidiano",
    codigoAtc: "H03BB02",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido",
    viaAdministracao: "Oral",
    resumo: "Antitireoidiano de primeira escolha para a maioria dos pacientes com hipertireoidismo, conhecido no Brasil também pela denominação comercial 'metimazol', com perfil de segurança mais favorável que a propiltiouracila fora do contexto gestacional/tempestade tireotóxica.",
    indicacoes: [
      "Hipertireoidismo (doença de Graves, bócio multinodular tóxico), tratamento antitireoidiano de primeira escolha na maioria dos pacientes não gestantes ou a partir do segundo trimestre da gestação",
      "Preparo pré-operatório para tireoidectomia ou antes do tratamento com iodo radioativo, para normalização da função tireoidiana",
    ],
    mecanismoAcao:
      "Inibe a enzima tireoperoxidase, bloqueando a organificação do iodo e o acoplamento das iodotirosinas, reduzindo a síntese de novos hormônios tireoidianos; ao contrário da propiltiouracila, não tem efeito significativo sobre a conversão periférica de T4 em T3.",
    farmacocinetica:
      "Meia-vida mais longa que a propiltiouracila, permitindo administração uma ou duas vezes ao dia (maior comodidade posológica e melhor adesão). Metabolização hepática.",
    posologia: "Adultos: dose inicial de 10-40 mg por via oral, uma vez ao dia, ajustada conforme resposta clínica e laboratorial, com redução progressiva até dose de manutenção.",
    ajusteRenalHepatico:
      "Não requer ajuste específico em insuficiência renal. Uso cauteloso em hepatopatia, com monitorização, embora o risco de hepatotoxicidade grave seja menor que com a propiltiouracila.",
    gestacaoLactacao:
      "Preferido a partir do segundo trimestre da gestação (a propiltiouracila é preferida no primeiro trimestre pelo menor risco teratogênico); dados de segurança permitem uso cauteloso na lactação em doses baixas a moderadas.",
    contraindicacoes: [
      "Hipersensibilidade conhecida",
      "Primeiro trimestre da gestação (propiltiouracila é preferida nesse período específico)",
    ],
    efeitosColaterais: [
      "Agranulocitose (efeito adverso grave, exigindo orientação para procura imediata de atendimento diante de febre ou sinais de infecção)",
      "Rash cutâneo e prurido",
      "Hepatotoxicidade (menos comum e geralmente menos grave que com a propiltiouracila)",
      "Artralgia",
    ],
    interacoes: [
      "Anticoagulantes orais: pode alterar o efeito anticoagulante conforme a função tireoidiana se normaliza",
    ],
    monitorizacao: [
      "Hemograma diante de febre ou sinais de infecção, pelo risco de agranulocitose",
      "Função hepática periódica",
      "Função tireoidiana periódica para ajuste de dose",
    ],
    alertas: [
      "Todo paciente iniciando tiamazol deve ser orientado a procurar atendimento médico imediato diante de febre, dor de garganta ou outros sinais de infecção, pelo risco de agranulocitose, efeito adverso grave compartilhado com a propiltiouracila.",
    ],
    similares: ["Propiltiouracila (antitireoidiano preferido no primeiro trimestre da gestação e na tempestade tireotóxica)"],
    pontosDeProva: [
      "Tiamazol é a DCB oficial do medicamento comercialmente conhecido no Brasil como 'metimazol' — mesma substância, nomenclaturas diferentes",
      "É o antitireoidiano de primeira escolha para a maioria dos pacientes, exceto no primeiro trimestre da gestação e na tempestade tireotóxica, situações em que a propiltiouracila é preferida",
      "Sua meia-vida mais longa permite posologia mais simples (uma a duas vezes ao dia) que a propiltiouracila, favorecendo a adesão ao tratamento",
    ],
    doencasIndicadas: [
      { slug: "hipertireoidismo", nome: "Tireotoxicose (hipertireoidismo)" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação e farmacocinética comparada à propiltiouracila", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Posicionamento como antitireoidiano de primeira escolha fora do primeiro trimestre gestacional", fonte: "American Thyroid Association Guidelines for Diagnosis and Management of Hyperthyroidism, 2016" },
    ],
  },
  {
    slug: "succinato-sodico-hidrocortisona",
    nome: "Succinato sódico de hidrocortisona",
    nomeComercial: ["Solu-Cortef"],
    principioAtivo: "Succinato sódico de hidrocortisona",
    categoria: "Corticosteroide (glicocorticoide de ação curta)",
    codigoAtc: "H02AB09",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Pó liofilizado para solução injetável",
    viaAdministracao: "Intravenosa, intramuscular",
    resumo: "Corticosteroide injetável de escolha na crise adrenal (insuficiência adrenal aguda), pela combinação de rápido início de ação e atividade mineralocorticoide relevante, ausente em corticosteroides sintéticos mais modernos.",
    indicacoes: [
      "Crise adrenal (insuficiência adrenal aguda), tratamento de escolha por sua rápida ação e atividade mineralocorticoide intrínseca",
      "Terapia de reposição em insuficiência adrenal crônica durante estresse fisiológico agudo (cirurgia, infecção grave)",
      "Choque séptico refratário a vasopressores, como terapia adjuvante em protocolos selecionados",
    ],
    mecanismoAcao:
      "Glicocorticoide de ação curta que, diferentemente de corticosteroides sintéticos mais modernos (como a dexametasona), preserva atividade mineralocorticoide relevante (retenção de sódio e água, excreção de potássio), propriedade que é vantajosa na crise adrenal, onde a deficiência mineralocorticoide contribui para a instabilidade hemodinâmica.",
    farmacocinetica:
      "Início de ação rápido por via intravenosa, meia-vida biológica curta a intermediária, exigindo doses repetidas ou infusão contínua conforme o contexto clínico de uso agudo.",
    posologia: "Crise adrenal: 100 mg em bolus intravenoso, seguido de 100-200 mg/dia em doses divididas ou infusão contínua, com redução progressiva conforme a estabilização clínica.",
    ajusteRenalHepatico:
      "Não requer ajuste específico em insuficiência renal. Uso cauteloso em insuficiência hepática, dado que a conversão à forma ativa pode estar prejudicada.",
    gestacaoLactacao:
      "Uso na gestação quando clinicamente indicado (a crise adrenal é emergência que exige tratamento independentemente da gestação); compatível com a lactação em uso pontual.",
    contraindicacoes: [
      "Infecção fúngica sistêmica não tratada (exceto quando o benefício supera claramente o risco em contexto de emergência)",
      "Hipersensibilidade conhecida",
    ],
    efeitosColaterais: [
      "Hiperglicemia",
      "Retenção hídrica e hipertensão (pela atividade mineralocorticoide)",
      "Imunossupressão com uso prolongado",
    ],
    interacoes: [
      "Hipoglicemiantes: pode reduzir o efeito hipoglicemiante pelo antagonismo glicocorticoide",
      "Diuréticos poupadores de potássio: interação relacionada à atividade mineralocorticoide",
    ],
    monitorizacao: [
      "Sinais vitais e estado hemodinâmico durante o tratamento da crise adrenal",
      "Glicemia e eletrólitos durante o uso",
    ],
    alertas: [
      "É o corticosteroide de escolha na crise adrenal especificamente pela atividade mineralocorticoide preservada, ausente em corticosteroides sintéticos como a dexametasona, que não substituem adequadamente essa função na insuficiência adrenal aguda.",
    ],
    similares: ["Dexametasona (sem atividade mineralocorticoide relevante, usada quando essa característica não é necessária)", "Fosfato sódico de prednisolona (atividade mineralocorticoide intermediária)"],
    pontosDeProva: [
      "A hidrocortisona preserva atividade mineralocorticoide significativa, ao contrário da dexametasona, o que a torna a escolha específica na crise adrenal, onde essa atividade é clinicamente relevante",
      "Na crise adrenal, o tratamento com hidrocortisona não deve ser postergado para confirmação laboratorial completa, dado o risco de vida da condição não tratada",
    ],
    doencasIndicadas: [
      { slug: "insuficiencia-adrenal", nome: "Insuficiência adrenal" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Atividade mineralocorticoide e mecanismo de ação", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Tratamento de escolha na crise adrenal", fonte: "Endocrine Society Clinical Practice Guideline, Diagnosis and Treatment of Primary Adrenal Insufficiency, 2016" },
    ],
  },
  {
    slug: "fosfato-sodico-prednisolona",
    nome: "Fosfato sódico de prednisolona",
    nomeComercial: ["Predsim", "Prelone"],
    principioAtivo: "Fosfato sódico de prednisolona",
    categoria: "Corticosteroide (glicocorticoide sistêmico)",
    codigoAtc: "H02AB06",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Solução oral, comprimido",
    viaAdministracao: "Oral",
    resumo: "Corticosteroide sistêmico de formulação líquida amplamente utilizado em pediatria, com potência e propriedades farmacológicas semelhantes às da prednisona, da qual é o metabólito ativo.",
    indicacoes: [
      "Asma e crise asmática, incluindo em população pediátrica",
      "Laringite obstrutiva aguda (crupe), quando corticosteroide sistêmico está indicado",
      "Outras condições inflamatórias/alérgicas agudas em que corticosteroide sistêmico de curto prazo é indicado",
    ],
    mecanismoAcao:
      "É o metabólito ativo da prednisona (que precisa ser convertida no fígado à prednisolona para exercer seu efeito); a formulação de prednisolona já fornece diretamente a molécula ativa, com o mesmo mecanismo de ação glicocorticoide (ligação a receptores citoplasmáticos, modulação da transcrição de genes inflamatórios) característico dessa classe.",
    farmacocinetica:
      "Por já ser a forma ativa (ao contrário da prednisona, que exige conversão hepática), tem farmacocinética mais previsível em pacientes com função hepática comprometida. Disponível em formulação líquida, facilitando a administração em crianças pequenas.",
    posologia: "Crianças: 1-2 mg/kg/dia por via oral, em dose única ou dividida, conforme a indicação e a gravidade. Adultos: dose equivalente à prednisona (aproximadamente equipotentes).",
    ajusteRenalHepatico:
      "Não requer ajuste específico em insuficiência renal. Preferível à prednisona em hepatopatia significativa, dado que não depende de conversão hepática para ativação.",
    gestacaoLactacao:
      "Uso na gestação apenas quando o benefício justifica o risco, com preferência por corticosteroides que não atravessam a placenta extensamente quando o efeito fetal não é desejado; compatível com a lactação em doses habituais.",
    contraindicacoes: [
      "Infecção fúngica sistêmica não tratada",
      "Hipersensibilidade conhecida",
    ],
    efeitosColaterais: [
      "Hiperglicemia",
      "Alterações do humor e comportamento (mais notáveis em crianças)",
      "Aumento do apetite",
      "Imunossupressão com uso prolongado",
    ],
    interacoes: [
      "AINEs: risco aumentado de úlcera péptica quando associados",
      "Hipoglicemiantes: pode reduzir seu efeito pelo antagonismo glicocorticoide",
    ],
    monitorizacao: [
      "Glicemia em uso prolongado ou em pacientes de risco",
      "Crescimento estatural em uso prolongado pediátrico",
    ],
    alertas: [
      "Por já ser a forma ativa (não exigindo conversão hepática, ao contrário da prednisona), a prednisolona é preferida em pacientes com hepatopatia significativa quando um corticosteroide sistêmico dessa potência é indicado.",
    ],
    similares: ["Prednisona (pró-droga convertida a prednisolona no fígado)", "Dexametasona (maior potência, meia-vida mais longa)"],
    pontosDeProva: [
      "A prednisolona é o metabólito ativo da prednisona — em hepatopatas graves, a prednisolona é preferida por não depender da conversão hepática",
      "A disponibilidade em formulação líquida torna a prednisolona particularmente útil em pediatria, onde a administração de comprimidos é mais difícil",
    ],
    doencasIndicadas: [
      { slug: "asma", nome: "Asma" },
      { slug: "crupe-epiglotite", nome: "Laringite obstrutiva aguda (crupe) e epiglotite" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Relação metabólica com a prednisona e mecanismo de ação glicocorticoide", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Uso em crupe e asma pediátrica", fonte: "GINA (Global Initiative for Asthma), 2024" },
    ],
  },
  {
    slug: "insulina-analoga",
    nome: "Insulina análoga (ação prolongada / ação rápida)",
    nomeComercial: ["Lantus", "Levemir", "NovoRapid", "Humalog"],
    principioAtivo: "Insulina glargina / insulina detemir (ação prolongada); insulina lispro / insulina asparte (ação rápida)",
    categoria: "Antidiabético (insulina análoga)",
    codigoAtc: "A10AE / A10AB",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Solução injetável (caneta ou frasco-ampola)",
    viaAdministracao: "Subcutânea",
    resumo: "Insulinas análogas com perfil farmacocinético modificado em relação às insulinas humanas convencionais (NPH e regular), oferecendo maior previsibilidade de ação e menor risco de hipoglicemia em esquemas basal-bolus.",
    indicacoes: [
      "Diabetes mellitus tipo 1, como componente do esquema basal-bolus",
      "Diabetes mellitus tipo 2, quando a insulinoterapia é necessária, especialmente em esquemas mais intensivos ou quando há hipoglicemia recorrente com insulina humana convencional",
    ],
    mecanismoAcao:
      "Mesmo mecanismo de ação da insulina humana (ligação ao receptor de insulina, promovendo captação celular de glicose e demais efeitos metabólicos anabólicos), mas com modificações na sequência de aminoácidos que alteram a cinética de absorção subcutânea: as insulinas de ação prolongada (glargina, detemir) formam microprecipitados ou se ligam à albumina, resultando em liberação mais lenta e constante, sem pico pronunciado; as insulinas de ação rápida (lispro, asparte) têm menor tendência a formar hexâmeros, absorvendo-se mais rapidamente que a insulina regular.",
    farmacocinetica:
      "Insulinas de ação prolongada: início de ação gradual, perfil relativamente sem pico ('peakless'), duração de ação de 18-24 horas, permitindo cobertura basal mais estável que a NPH. Insulinas de ação rápida: início de ação em 10-15 minutos, pico em 1-2 horas, duração de 3-5 horas, permitindo administração mais próxima da refeição que a insulina regular.",
    posologia: "Individualizada conforme peso, sensibilidade à insulina e metas glicêmicas; esquema basal-bolus tipicamente combina uma insulina de ação prolongada (dose diária) com insulina de ação rápida antes das refeições.",
    ajusteRenalHepatico:
      "Requer redução de dose e monitorização mais próxima em insuficiência renal e hepática, dado o risco aumentado de hipoglicemia pela alteração do metabolismo e depuração da insulina nessas condições.",
    gestacaoLactacao:
      "Insulina (incluindo análogos com perfil de segurança estabelecido, como a lispro, a asparte e a detemir) é o tratamento de escolha para diabetes na gestação quando insulinoterapia é necessária; compatível com a lactação.",
    contraindicacoes: [
      "Hipoglicemia atual",
      "Hipersensibilidade conhecida à formulação específica",
    ],
    efeitosColaterais: [
      "Hipoglicemia (risco menor que com insulinas humanas convencionais em esquemas equivalentes, mas ainda o principal risco)",
      "Reações no local de aplicação",
      "Ganho de peso",
      "Lipodistrofia com aplicações repetidas no mesmo local",
    ],
    interacoes: [
      "Betabloqueadores: podem mascarar os sintomas adrenérgicos de hipoglicemia",
      "Corticosteroides: antagonizam o efeito hipoglicemiante, podendo exigir ajuste de dose",
    ],
    monitorizacao: [
      "Glicemia capilar regular, conforme o esquema terapêutico",
      "Hemoglobina glicada periodicamente para avaliação do controle glicêmico global",
      "Locais de aplicação, para identificação precoce de lipodistrofia",
    ],
    alertas: [
      "As insulinas análogas de ação prolongada têm perfil de ação mais previsível e sem pico pronunciado em comparação à NPH, reduzindo o risco de hipoglicemia noturna/entre refeições, vantagem clínica relevante em pacientes com hipoglicemias recorrentes.",
    ],
    similares: ["Insulina NPH humana (ação intermediária, perfil com pico mais pronunciado)", "Insulina regular humana (ação rápida convencional, início de ação mais lento que os análogos)"],
    pontosDeProva: [
      "As insulinas análogas de ação prolongada (glargina, detemir) têm perfil 'sem pico', ao contrário da NPH, reduzindo o risco de hipoglicemia entre as doses",
      "As insulinas análogas de ação rápida (lispro, asparte) podem ser administradas mais próximas do horário da refeição que a insulina regular, pela absorção subcutânea mais rápida",
      "Insulina é sempre o tratamento de escolha para diabetes que necessita de tratamento farmacológico na gestação, com análogos específicos (lispro, asparte, detemir) tendo perfil de segurança estabelecido nessa população",
    ],
    doencasIndicadas: [
      { slug: "diabetes-mellitus-tipo-1", nome: "Diabetes mellitus tipo 1" },
      { slug: "diabetes-mellitus-tipo-2", nome: "Diabetes mellitus tipo 2" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Diferenças farmacocinéticas entre análogos e insulinas humanas convencionais", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Papel no esquema basal-bolus e redução do risco de hipoglicemia", fonte: "Standards of Care in Diabetes, American Diabetes Association, 2024" },
    ],
  },
  {
    slug: "sulfato-magnesio",
    nome: "Sulfato de magnésio",
    nomeComercial: ["Sulfato de magnésio genérico"],
    principioAtivo: "Sulfato de magnésio",
    categoria: "Anticonvulsivante / repositor eletrolítico",
    codigoAtc: "A06AD04 (uso oral) / A12CC02, B05XA05 (uso injetável)",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Solução injetável, pó para solução oral",
    viaAdministracao: "Intravenosa, oral",
    resumo: "Medicamento de uso versátil conforme a via e a indicação, sendo o tratamento de escolha para profilaxia e tratamento de convulsões eclâmpticas e um agente de neuroproteção fetal no trabalho de parto pré-termo extremo.",
    indicacoes: [
      "Profilaxia e tratamento de convulsões na pré-eclâmpsia com sinais de gravidade e na eclâmpsia",
      "Neuroproteção fetal quando o parto pré-termo é iminente antes de 32 semanas de gestação",
      "Broncoespasmo grave refratário no estado de mal asmático, como terapia adjuvante",
      "Hipomagnesemia sintomática",
    ],
    mecanismoAcao:
      "O magnésio atua como antagonista fisiológico do cálcio em múltiplos níveis: na placa neuromuscular, reduz a liberação de acetilcolina e a excitabilidade da membrana, com efeito anticonvulsivante central relevante na eclâmpsia; na musculatura lisa brônquica e vascular, promove relaxamento por bloqueio de canais de cálcio, contribuindo tanto para o efeito broncodilatador adjuvante quanto para propriedades vasodilatadoras.",
    farmacocinetica:
      "Por via intravenosa, início de ação rápido. Eliminação predominantemente renal, exigindo ajuste cuidadoso e monitorização em insuficiência renal pelo risco de acúmulo e toxicidade.",
    posologia: "Pré-eclâmpsia/eclâmpsia: dose de ataque intravenosa seguida de infusão de manutenção conforme protocolo obstétrico, com monitorização rigorosa. Neuroproteção fetal: protocolo específico conforme diretriz obstétrica.",
    ajusteRenalHepatico:
      "Requer ajuste de dose e monitorização mais rigorosa e frequente (incluindo nível sérico) em insuficiência renal, dado o risco significativamente aumentado de acúmulo e toxicidade (incluindo depressão respiratória e parada cardíaca) nessa população.",
    gestacaoLactacao:
      "Uso extensamente estabelecido e considerado de escolha nas indicações obstétricas específicas (pré-eclâmpsia/eclâmpsia, neuroproteção fetal); compatível com a lactação.",
    contraindicacoes: [
      "Miastenia gravis (pode precipitar crise miastênica pelo bloqueio da transmissão neuromuscular)",
      "Bloqueio cardíaco",
      "Insuficiência renal grave não monitorizada",
    ],
    efeitosColaterais: [
      "Rubor facial e sensação de calor durante a infusão",
      "Depressão dos reflexos tendinosos profundos (sinal precoce de toxicidade, monitorizado ativamente)",
      "Depressão respiratória e parada cardíaca em toxicidade grave não reconhecida",
      "Hipotensão",
    ],
    interacoes: [
      "Bloqueadores neuromusculares: potencialização do bloqueio",
      "Bloqueadores de canal de cálcio: risco aumentado de hipotensão e bloqueio neuromuscular quando associados (relevante na tocólise concomitante com nifedipino)",
    ],
    monitorizacao: [
      "Reflexos tendinosos profundos, frequência respiratória e débito urinário durante a infusão, sinais clínicos que precedem a toxicidade grave",
      "Nível sérico de magnésio, especialmente em insuficiência renal ou uso prolongado",
    ],
    alertas: [
      "O gluconato de cálcio é o antídoto específico para toxicidade grave por sulfato de magnésio (depressão respiratória, parada cardíaca), devendo estar disponível à beira-leito sempre que a infusão for administrada.",
    ],
    similares: ["Nenhum agente com o mesmo perfil de indicações específicas em obstetrícia"],
    pontosDeProva: [
      "A depressão dos reflexos tendinosos profundos é o sinal clínico mais precoce de toxicidade por magnésio, devendo ser monitorizada ativamente durante toda a infusão",
      "O gluconato de cálcio é o antídoto específico para toxicidade grave por sulfato de magnésio",
      "É indicado tanto para tratamento materno (convulsões eclâmpticas) quanto para neuroproteção fetal (parto pré-termo extremo antes de 32 semanas), duas indicações obstétricas distintas com o mesmo agente",
    ],
    doencasIndicadas: [
      { slug: "eclampsia", nome: "Eclâmpsia" },
      { slug: "pre-eclampsia", nome: "Hipertensão gestacional com proteinúria (pré-eclâmpsia)" },
      { slug: "trabalho-parto-pre-termo", nome: "Trabalho de parto pré-termo" },
      { slug: "estado-de-mal-asmatico", nome: "Estado de mal asmático" },
      { slug: "prematuridade-complicacoes-baixo-peso-nascer", nome: "Prematuridade e complicações do baixo peso ao nascer" },
    ],
    fontes: [
      { tema: "Mecanismo de ação anticonvulsivante e broncodilatador", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Sinais de toxicidade e antídoto (gluconato de cálcio)", fonte: "ACOG Practice Bulletin No. 222, Gestational Hypertension and Preeclampsia, 2020" },
      { tema: "Neuroproteção fetal antes de 32 semanas", fonte: "ACOG Committee Opinion No. 455, Magnesium Sulfate Before Anticipated Preterm Birth for Neuroprotection, 2010" },
    ],
  },
  {
    slug: "brometo-de-ipratropio",
    nome: "Brometo de ipratrópio",
    nomeComercial: ["Atrovent"],
    principioAtivo: "Brometo de ipratrópio",
    categoria: "Broncodilatador anticolinérgico (antimuscarínico de curta duração)",
    codigoAtc: "R03BB01",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Solução para nebulização, aerossol para inalação",
    viaAdministracao: "Inalatória",
    resumo: "Broncodilatador anticolinérgico de curta duração usado como adjuvante aos beta-2 agonistas de curta ação nas exacerbações agudas de DPOC e asma, e como opção de manutenção na DPOC estável.",
    indicacoes: [
      "Exacerbação aguda de DPOC, em associação ao salbutamol",
      "Exacerbação aguda de asma grave, como terapia adjuvante ao salbutamol no pronto-socorro",
      "Manutenção broncodilatadora na DPOC estável (grupo A do GOLD, isolado ou em associação)",
    ],
    mecanismoAcao:
      "Antagonista competitivo dos receptores muscarínicos (M1, M2 e M3) da musculatura lisa brônquica, bloqueando a broncoconstrição mediada pela acetilcolina liberada pelo nervo vago; ao contrário dos beta-2 agonistas, não tem efeito direto sobre mastócitos ou mediadores inflamatórios.",
    farmacocinetica:
      "Absorção sistêmica mínima pela via inalatória, o que explica o baixo perfil de efeitos colaterais sistêmicos anticolinérgicos. Início de ação em 15 minutos, com pico em 1-2 horas e duração de 4-6 horas.",
    posologia: "Exacerbação aguda: 250-500 mcg por nebulização, a cada 20 minutos por até 3 doses, depois conforme necessário, sempre associado ao salbutamol. Manutenção na DPOC: 2 jatos (40 mcg), 4 vezes ao dia.",
    ajusteRenalHepatico: "Não requer ajuste específico em insuficiência renal ou hepática, dada a absorção sistêmica mínima pela via inalatória.",
    gestacaoLactacao: "Considerado compatível com a gestação e a lactação pela absorção sistêmica mínima; usado quando a broncodilatação adjuvante é clinicamente necessária.",
    contraindicacoes: [
      "Hipersensibilidade à atropina e derivados",
    ],
    efeitosColaterais: [
      "Xerostomia (boca seca)",
      "Gosto metálico",
      "Cefaleia",
      "Retenção urinária, mais relevante em homens com hiperplasia prostática benigna",
    ],
    interacoes: [
      "Outros anticolinérgicos: risco aumentado de efeitos anticolinérgicos aditivos (boca seca, retenção urinária, glaucoma de ângulo fechado)",
    ],
    monitorizacao: [
      "Resposta clínica broncodilatadora (dispneia, ausculta pulmonar, saturação de oxigênio)",
      "Sintomas de retenção urinária em pacientes com HPB",
    ],
    alertas: [
      "Deve ser evitado o contato do spray/nebulização com os olhos, pelo risco de precipitar ou agravar glaucoma de ângulo fechado.",
    ],
    similares: ["Tiotrópio (anticolinérgico de longa duração, manutenção)"],
    pontosDeProva: [
      "Ao contrário dos beta-2 agonistas, tem absorção sistêmica mínima pela via inalatória, o que explica seu baixo perfil de efeitos colaterais sistêmicos",
      "Na exacerbação aguda de DPOC e asma grave, é usado sempre em associação ao salbutamol, nunca isoladamente",
    ],
    doencasIndicadas: [
      { slug: "dpoc", nome: "Outras doenças pulmonares obstrutivas crônicas (DPOC)" },
      { slug: "asma", nome: "Asma" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação antimuscarínico e farmacocinética", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Uso como adjuvante ao SABA nas exacerbações e na manutenção da DPOC (grupo A)", fonte: "Global Initiative for Chronic Obstructive Lung Disease (GOLD), 2024 Report" },
    ],
  },
  {
    slug: "fosfato-de-oseltamivir",
    nome: "Fosfato de oseltamivir",
    nomeComercial: ["Tamiflu"],
    principioAtivo: "Fosfato de oseltamivir",
    categoria: "Antiviral (inibidor da neuraminidase)",
    codigoAtc: "J05AH02",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Cápsula, pó para suspensão oral",
    viaAdministracao: "Oral",
    resumo: "Antiviral inibidor da neuraminidase de escolha para tratamento e quimioprofilaxia da influenza, com maior benefício clínico quando iniciado até 48 horas do início dos sintomas.",
    indicacoes: [
      "Tratamento da influenza (gripe) em pacientes sintomáticos, idealmente iniciado até 48 horas do início dos sintomas",
      "Quimioprofilaxia pós-exposição à influenza em contatos de alto risco",
      "Tratamento de casos graves ou em populações de risco (gestantes, idosos, imunossuprimidos, comorbidades), mesmo além de 48 horas",
    ],
    mecanismoAcao:
      "Inibe seletivamente a neuraminidase viral, enzima de superfície essencial para a liberação de novas partículas virais das células infectadas e para a disseminação do vírus influenza pelo trato respiratório, reduzindo a duração e a gravidade dos sintomas.",
    farmacocinetica:
      "Pró-droga administrada por via oral, convertida pelas esterases hepáticas em seu metabólito ativo (carboxilato de oseltamivir). Eliminação predominantemente renal, exigindo ajuste de dose na insuficiência renal.",
    posologia: "Tratamento: 75 mg por via oral, 2 vezes ao dia, por 5 dias, iniciado idealmente até 48 horas do início dos sintomas. Profilaxia pós-exposição: 75 mg, 1 vez ao dia, por 10 dias.",
    ajusteRenalHepatico: "Requer redução de dose conforme o clearance de creatinina na insuficiência renal (ex.: 75 mg 1x/dia ou dose única, conforme a gravidade da disfunção renal).",
    gestacaoLactacao: "Considerado o antiviral de escolha na gestação quando indicado, dado o maior risco de complicações da influenza nesse grupo; compatível com a lactação.",
    contraindicacoes: [
      "Hipersensibilidade conhecida ao oseltamivir",
    ],
    efeitosColaterais: [
      "Náusea e vômitos, mais comuns quando administrado sem alimentos",
      "Cefaleia",
      "Eventos neuropsiquiátricos transitórios (relatados mais em crianças e adolescentes, causalidade não totalmente estabelecida)",
    ],
    interacoes: [
      "Sem interações medicamentosas clinicamente relevantes de grande magnitude descritas",
    ],
    monitorizacao: [
      "Resolução dos sintomas e ausência de sinais de agravamento (dispneia, hipoxemia) que sugiram progressão para pneumonia viral ou bacteriana secundária",
    ],
    alertas: [
      "O benefício clínico (redução da duração dos sintomas) é maior quanto mais precoce o início, idealmente até 48 horas do início dos sintomas; ainda assim, deve ser considerado em pacientes graves ou de alto risco mesmo após esse prazo.",
    ],
    similares: ["Zanamivir (inibidor da neuraminidase inalatório)", "Baloxavir marboxila (inibidor da endonuclease cap-dependente, dose única)"],
    pontosDeProva: [
      "O maior benefício clínico ocorre quando iniciado até 48 horas do início dos sintomas, mas pacientes graves ou de alto risco ainda se beneficiam de tratamento tardio",
      "É pró-droga, ativada por esterases hepáticas em seu metabólito ativo, com eliminação predominantemente renal",
    ],
    doencasIndicadas: [],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação inibidor da neuraminidase e farmacocinética", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Janela terapêutica de 48 horas e indicação em populações de risco", fonte: "Uyeki TM et al., Clinical Practice Guidelines by the IDSA: 2018 Update on Diagnosis, Treatment, Chemoprophylaxis, and Institutional Outbreak Management of Seasonal Influenza, Clinical Infectious Diseases, 2019" },
    ],
  },
  {
    slug: "ceftriaxona",
    nome: "Ceftriaxona",
    nomeComercial: ["Rocefin"],
    principioAtivo: "Ceftriaxona sódica",
    categoria: "Antibiótico (cefalosporina de 3ª geração)",
    codigoAtc: "J01DD04",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Pó para solução injetável",
    viaAdministracao: "Intravenosa, intramuscular",
    resumo: "Cefalosporina de 3ª geração de amplo espectro e boa penetração liquórica, sendo o antibiótico empírico de escolha para meningite bacteriana, sepse de origem comunitária e diversas infecções graves.",
    indicacoes: [
      "Meningite bacteriana, como parte do esquema empírico inicial",
      "Sepse e infecções graves de origem comunitária, como parte do esquema antibiótico empírico",
      "Gonorreia (dose única intramuscular)",
      "Pneumonia adquirida na comunidade grave, em associação a um macrolídeo",
    ],
    mecanismoAcao:
      "Inibe a síntese da parede celular bacteriana ao se ligar às proteínas ligadoras de penicilina (PBPs), bloqueando a transpeptidação final da síntese do peptidoglicano; a estrutura de 3ª geração confere maior estabilidade a beta-lactamases e maior atividade contra Gram-negativos em comparação às cefalosporinas de gerações anteriores, além de excelente penetração na barreira hematoencefálica quando as meninges estão inflamadas.",
    farmacocinetica:
      "Meia-vida longa (cerca de 8 horas), permitindo dose única ou a cada 12-24 horas. Eliminação dupla (renal e biliar), o que a torna uma das poucas cefalosporinas que não exige ajuste de dose na insuficiência renal isolada.",
    posologia: "Meningite bacteriana/infecções graves: 2 g por via intravenosa, a cada 12-24 horas. Gonorreia não complicada: 500 mg a 1 g, dose única intramuscular.",
    ajusteRenalHepatico: "Não requer ajuste de dose na insuficiência renal isolada, dada a eliminação biliar concomitante. Considerar redução de dose apenas em insuficiência renal E hepática combinadas.",
    gestacaoLactacao: "Considerada segura na gestação e compatível com a lactação, com extenso histórico de uso obstétrico.",
    contraindicacoes: [
      "Hipersensibilidade a cefalosporinas",
      "Neonatos com hiperbilirrubinemia (risco de deslocamento da bilirrubina da albumina)",
      "Uso concomitante com soluções contendo cálcio em neonatos (risco de precipitação fatal no pulmão e rim)",
    ],
    efeitosColaterais: [
      "Diarreia",
      "Reações no local da injeção",
      "Colelitíase reversível (lama biliar) por precipitação com cálcio na bile",
      "Reações de hipersensibilidade",
    ],
    interacoes: [
      "Soluções intravenosas contendo cálcio: risco de precipitação, contraindicado especialmente em neonatos",
      "Anticoagulantes orais: pode potencializar o efeito anticoagulante",
    ],
    monitorizacao: [
      "Resposta clínica e laboratorial (hemograma, PCR) conforme a indicação",
      "Função renal e hepática em uso prolongado",
    ],
    alertas: [
      "Não deve ser administrada com soluções intravenosas contendo cálcio (incluindo nutrição parenteral) na mesma via, especialmente em neonatos, pelo risco de precipitação fatal.",
    ],
    similares: ["Cefotaxima (cefalosporina de 3ª geração alternativa, preferida em neonatos)"],
    pontosDeProva: [
      "É uma das poucas cefalosporinas que não exige ajuste de dose na insuficiência renal isolada, pela eliminação dupla renal e biliar",
      "Não deve ser administrada com soluções contendo cálcio, especialmente em neonatos, pelo risco de precipitação fatal no pulmão e rim",
      "Tem excelente penetração liquórica quando as meninges estão inflamadas, justificando seu uso empírico na meningite bacteriana",
    ],
    doencasIndicadas: [
      { slug: "meningite-bacteriana", nome: "Meningite bacteriana" },
      { slug: "sepse", nome: "Outras septicemias (sepse)" },
      { slug: "leptospirose", nome: "Leptospirose" },
      { slug: "doenca-inflamatoria-pelvica", nome: "Doença inflamatória pélvica (salpingite e ooforite)" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação beta-lactâmico e farmacocinética (eliminação dupla)", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Uso empírico na meningite bacteriana e penetração liquórica", fonte: "Tunkel AR et al., Practice Guidelines for the Management of Bacterial Meningitis, Infectious Diseases Society of America, Clinical Infectious Diseases, 2004" },
    ],
  },
  {
    slug: "benzilpenicilina-benzatina",
    nome: "Benzilpenicilina benzatina",
    nomeComercial: ["Benzetacil"],
    principioAtivo: "Benzilpenicilina benzatina",
    categoria: "Antibiótico (penicilina de depósito)",
    codigoAtc: "J01CE08",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Pó para suspensão injetável",
    viaAdministracao: "Intramuscular",
    resumo: "Penicilina de depósito de liberação prolongada, sendo o tratamento de escolha para sífilis em todos os estágios e para profilaxia secundária da febre reumática.",
    indicacoes: [
      "Sífilis precoce (primária, secundária e latente recente), dose única",
      "Sífilis latente tardia ou de duração indeterminada, três doses semanais",
      "Profilaxia secundária da febre reumática, em esquema de doses regulares (a cada 21-28 dias)",
      "Faringotonsilite estreptocócica, como alternativa de dose única",
    ],
    mecanismoAcao:
      "Assim como as demais penicilinas, inibe a síntese da parede celular bacteriana ao se ligar às proteínas ligadoras de penicilina (PBPs), bloqueando a transpeptidação do peptidoglicano; a formulação de depósito (sal de benzatina) tem absorção intramuscular muito lenta, mantendo níveis séricos terapêuticos baixos, porém sustentados, por semanas — suficiente contra o Treponema pallidum, que tem tempo de duplicação lento, mas inadequado para infecções agudas que exigem picos séricos elevados.",
    farmacocinetica:
      "Absorção intramuscular lenta e sustentada a partir do local de depósito, com níveis séricos terapêuticos mantidos por até 2-4 semanas após uma única dose, mas em concentrações baixas — por isso não deve ser usada em infecções que exigem níveis séricos altos e rápidos.",
    posologia: "Sífilis precoce: 2,4 milhões UI, dose única intramuscular (metade em cada glúteo). Sífilis tardia: 2,4 milhões UI semanais, por 3 semanas. Profilaxia secundária da febre reumática: 1,2 milhão UI a cada 21-28 dias.",
    ajusteRenalHepatico: "Não requer ajuste específico de dose na insuficiência renal ou hepática, dado o perfil farmacocinético de depósito intramuscular.",
    gestacaoLactacao: "É o único tratamento considerado eficaz e seguro para a sífilis na gestação (nenhuma alternativa oral substitui a penicilina nesse contexto, sendo necessária dessensibilização em gestantes alérgicas); compatível com a lactação.",
    contraindicacoes: [
      "Hipersensibilidade a penicilinas (exceto após dessensibilização, quando estritamente indicada, como na sífilis em gestantes alérgicas)",
    ],
    efeitosColaterais: [
      "Dor no local da injeção",
      "Reações de hipersensibilidade, incluindo anafilaxia",
      "Reação de Jarisch-Herxheimer (febre, mialgia, exacerbação transitória de lesões) nas primeiras 24 horas do tratamento da sífilis",
    ],
    interacoes: [
      "Sem interações medicamentosas clinicamente relevantes de grande magnitude descritas",
    ],
    monitorizacao: [
      "Titulação sorológica não treponêmica (VDRL/RPR) seriada para confirmar resposta ao tratamento da sífilis",
      "Sinais de reação de Jarisch-Herxheimer nas primeiras 24 horas",
    ],
    alertas: [
      "Não deve ser administrada por via intravenosa (risco de embolia e morte); é exclusivamente intramuscular.",
      "Em gestantes com alergia confirmada à penicilina e sífilis, a dessensibilização é obrigatória, pois não há alternativa terapêutica equivalente comprovadamente eficaz para a mãe e o feto.",
    ],
    similares: ["Nenhum agente com o mesmo perfil de depósito prolongado e eficácia comprovada contra T. pallidum"],
    pontosDeProva: [
      "É a única opção considerada eficaz e segura para tratar sífilis na gestação; gestantes alérgicas devem ser dessensibilizadas, nunca tratadas com alternativa oral",
      "A reação de Jarisch-Herxheimer (febre, mialgia) nas primeiras 24 horas do tratamento da sífilis é uma reação sistêmica à lise de espiroquetas, não uma alergia à penicilina",
      "É exclusivamente intramuscular; a administração intravenosa acidental pode causar embolia e morte",
    ],
    doencasIndicadas: [
      { slug: "sifilis-precoce", nome: "Sífilis precoce" },
      { slug: "febre-reumatica", nome: "Febre reumática com comprometimento do coração" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação beta-lactâmico e farmacocinética de depósito", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Esquema posológico por estágio da sífilis e uso na gestação", fonte: "CDC, Sexually Transmitted Infections Treatment Guidelines, 2021 (MMWR Recommendations and Reports, Vol. 70, No. 4)" },
    ],
  },
  {
    slug: "sulfametoxazol-trimetoprima",
    nome: "Sulfametoxazol + trimetoprima",
    nomeComercial: ["Bactrim"],
    principioAtivo: "Sulfametoxazol + Trimetoprima",
    categoria: "Antibiótico (combinação sulfonamida + inibidor da di-hidrofolato redutase)",
    codigoAtc: "J01EE01",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido, suspensão oral, solução injetável",
    viaAdministracao: "Oral, intravenosa",
    resumo: "Combinação antibacteriana sinérgica de dupla inibição da via do folato, sendo tratamento de primeira linha para infecção urinária não complicada e o agente de escolha para profilaxia e tratamento da pneumonia por Pneumocystis jirovecii em pacientes imunossuprimidos.",
    indicacoes: [
      "Cistite não complicada e outras infecções do trato urinário",
      "Profilaxia e tratamento da pneumonia por Pneumocystis jirovecii (PCP) em pacientes com HIV/AIDS ou outra imunossupressão",
      "Toxoplasmose, como alternativa em determinados contextos",
    ],
    mecanismoAcao:
      "Bloqueia sequencialmente duas etapas da via de síntese do ácido fólico bacteriano: o sulfametoxazol inibe competitivamente a di-hidropteroato sintetase, e a trimetoprima inibe a di-hidrofolato redutase; o bloqueio duplo e sequencial da mesma via produz sinergismo bactericida, superior ao efeito bacteriostático de cada componente isolado.",
    farmacocinetica:
      "Boa absorção oral e boa penetração tecidual, incluindo líquor em doses adequadas. Eliminação predominantemente renal de ambos os componentes, exigindo ajuste de dose na insuficiência renal.",
    posologia: "Cistite não complicada: 800/160 mg (comprimido dose dupla), por via oral, a cada 12 horas, por 3 dias. Profilaxia de PCP: 400/80 mg (dose simples), 1 vez ao dia. Tratamento de PCP: dose calculada por trimetoprima (15-20 mg/kg/dia), dividida a cada 6-8 horas.",
    ajusteRenalHepatico: "Requer redução de dose conforme o clearance de creatinina na insuficiência renal; contraindicado em insuficiência renal grave sem possibilidade de monitorização de níveis.",
    gestacaoLactacao: "Uso no primeiro trimestre associado a risco de defeitos do tubo neural (antagonismo do folato) e próximo ao termo a risco de kernicterus (deslocamento da bilirrubina); evitar na gestação quando houver alternativa. Compatibilidade com a lactação deve ser avaliada caso a caso.",
    contraindicacoes: [
      "Hipersensibilidade a sulfonamidas",
      "Deficiência de G6PD (risco de hemólise)",
      "Gestação (especialmente primeiro trimestre e próximo ao termo), quando houver alternativa",
      "Insuficiência renal grave",
    ],
    efeitosColaterais: [
      "Exantema cutâneo, incluindo reações graves (síndrome de Stevens-Johnson) em casos raros",
      "Hipercalemia",
      "Hemólise em pacientes com deficiência de G6PD",
      "Náusea e vômitos",
    ],
    interacoes: [
      "Varfarina: potencialização do efeito anticoagulante por deslocamento da ligação proteica e inibição do metabolismo",
      "Metotrexato: risco aumentado de toxicidade hematológica por antagonismo adicional do folato",
      "Inibidores da ECA/BRA e diuréticos poupadores de potássio: risco aumentado de hipercalemia",
    ],
    monitorizacao: [
      "Função renal e eletrólitos (potássio), especialmente em uso prolongado ou em pacientes com PCP",
      "Hemograma em uso prolongado, pelo risco de mielotoxicidade",
    ],
    alertas: [
      "Deve ser evitada em pacientes com deficiência de G6PD, pelo risco de hemólise aguda.",
      "Deve ser evitada na gestação quando houver alternativa, pelo risco de defeitos do tubo neural no primeiro trimestre e kernicterus próximo ao termo.",
    ],
    similares: ["Nitrofurantoína (alternativa para cistite não complicada, ainda sem ficha própria no site)"],
    pontosDeProva: [
      "O sinergismo bactericida vem do bloqueio sequencial de duas etapas da mesma via de síntese do folato bacteriano, diferente do efeito apenas bacteriostático de cada componente isolado",
      "É o agente de escolha para profilaxia e tratamento da pneumonia por Pneumocystis jirovecii em pacientes com HIV/AIDS",
      "Deve ser evitada em pacientes com deficiência de G6PD e, quando possível, na gestação",
    ],
    doencasIndicadas: [
      { slug: "cistite-itu", nome: "Cistite (infecção do trato urinário baixo)" },
      { slug: "hiv-aids", nome: "Doença pelo HIV" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação sinérgico na via do folato e farmacocinética", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Uso como primeira linha na cistite não complicada", fonte: "Gupta K et al., International Clinical Practice Guidelines for the Treatment of Acute Uncomplicated Cystitis and Pyelonephritis in Women: A 2010 Update by the IDSA and ESCMID, Clinical Infectious Diseases, 2011" },
    ],
  },
  {
    slug: "fluconazol",
    nome: "Fluconazol",
    nomeComercial: ["Zoltec", "Triazol"],
    principioAtivo: "Fluconazol",
    categoria: "Antifúngico sistêmico (triazólico)",
    codigoAtc: "J02AC01",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Cápsula, solução injetável",
    viaAdministracao: "Oral, intravenosa",
    resumo: "Antifúngico triazólico de amplo uso sistêmico, sendo tratamento de escolha oral para candidíase vulvovaginal e candidíase mucocutânea em pacientes imunossuprimidos, com boa biodisponibilidade oral e penetração liquórica.",
    indicacoes: [
      "Candidíase vulvovaginal, dose única oral",
      "Candidíase orofaríngea e esofágica, especialmente em pacientes com HIV/AIDS ou outra imunossupressão",
      "Candidíase invasiva/candidemia, em pacientes clinicamente estáveis com isolado suscetível",
      "Profilaxia antifúngica em populações de alto risco (neutropenia prolongada, transplante)",
    ],
    mecanismoAcao:
      "Inibe a enzima fúngica lanosterol 14-alfa-demetilase (CYP51), bloqueando a conversão de lanosterol em ergosterol, componente essencial da membrana celular fúngica; a depleção de ergosterol e o acúmulo de precursores metilados alteram a permeabilidade e a função da membrana, com efeito predominantemente fungistático.",
    farmacocinetica:
      "Excelente biodisponibilidade oral (>90%), praticamente equivalente à via intravenosa, e boa penetração liquórica e tecidual, incluindo urina. Eliminação predominantemente renal na forma inalterada, exigindo ajuste de dose na insuficiência renal.",
    posologia: "Candidíase vulvovaginal: 150 mg, dose única oral. Candidíase orofaríngea/esofágica: 100-200 mg, 1 vez ao dia, por 7-14 (orofaríngea) ou 14-21 dias (esofágica). Candidemia: 400-800 mg/dia.",
    ajusteRenalHepatico: "Requer redução de dose proporcional ao clearance de creatinina na insuficiência renal. Usar com cautela e monitorizar enzimas hepáticas em disfunção hepática.",
    gestacaoLactacao: "Dose única em baixa dose (150 mg) para candidíase vulvovaginal é geralmente considerada de baixo risco, mas doses altas ou uso prolongado no primeiro trimestre foram associados a malformações congênitas raras; usar com cautela e preferir antifúngicos tópicos quando possível na gestação.",
    contraindicacoes: [
      "Hipersensibilidade a triazólicos",
      "Uso concomitante com terfenadina, cisaprida ou outros fármacos com risco de prolongamento do intervalo QT dependente de CYP3A4 (contraindicações específicas conforme a bula)",
    ],
    efeitosColaterais: [
      "Náusea e desconforto abdominal",
      "Cefaleia",
      "Elevação de transaminases hepáticas",
      "Prolongamento do intervalo QT (raro, dose-dependente)",
    ],
    interacoes: [
      "Inibidor do CYP2C9 e CYP3A4: aumenta níveis séricos de varfarina, fenitoína, sulfonilureias e outros substratos dessas enzimas",
      "Fármacos que prolongam o intervalo QT: risco aumentado de arritmia quando associados",
    ],
    monitorizacao: [
      "Enzimas hepáticas em uso prolongado ou em doses altas",
      "Resposta clínica e, quando aplicável, cultura de controle",
    ],
    alertas: [
      "É inibidor significativo do CYP2C9 e CYP3A4, exigindo atenção a interações com varfarina, fenitoína e outros substratos dessas enzimas.",
    ],
    similares: ["Nitrato de miconazol (antifúngico tópico, primeira linha na candidíase vulvovaginal não complicada)", "Anfotericina B (reservada para infecções fúngicas invasivas graves ou refratárias)"],
    pontosDeProva: [
      "Tem biodisponibilidade oral praticamente equivalente à intravenosa, permitindo transição precoce da via parenteral para a oral em pacientes estáveis",
      "É inibidor significativo do CYP2C9 e CYP3A4, com interações relevantes com varfarina e fenitoína",
      "É o antifúngico de escolha para candidíase esofágica/orofaríngea em pacientes com HIV/AIDS",
    ],
    doencasIndicadas: [
      { slug: "vaginite-vulvite", nome: "Vaginite e vulvite" },
      { slug: "hiv-aids", nome: "Doença pelo HIV" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação triazólico e farmacocinética", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Dose única na candidíase vulvovaginal e uso na candidíase mucocutânea em imunossupressão", fonte: "Pappas PG et al., Clinical Practice Guideline for the Management of Candidiasis: 2016 Update by the Infectious Diseases Society of America, Clinical Infectious Diseases, 2016" },
    ],
  },
  {
    slug: "metronidazol",
    nome: "Metronidazol",
    nomeComercial: ["Flagyl"],
    principioAtivo: "Metronidazol",
    categoria: "Antibacteriano/antiparasitário (nitroimidazólico)",
    codigoAtc: "J01XD01",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido, suspensão oral, solução injetável, gel vaginal",
    viaAdministracao: "Oral, intravenosa, vaginal",
    resumo: "Nitroimidazólico com excelente atividade contra bactérias anaeróbias e protozoários, sendo componente-chave dos esquemas de tratamento da vaginose bacteriana, tricomoníase e doença inflamatória pélvica.",
    indicacoes: [
      "Vaginose bacteriana e tricomoníase",
      "Doença inflamatória pélvica, como componente da cobertura para anaeróbios no esquema combinado",
      "Infecções intra-abdominais e anaeróbias (ex.: abscesso, peritonite), como componente do esquema combinado",
      "Amebíase e giardíase",
    ],
    mecanismoAcao:
      "Após difusão passiva para o interior de células bacterianas ou protozoários anaeróbios/microaerófilos, é reduzido por proteínas de transporte de elétrons próprias desses organismos, gerando metabólitos citotóxicos que causam quebra da fita de DNA e morte celular; a seletividade pelo ambiente anaeróbio explica por que não tem atividade relevante contra bactérias aeróbias.",
    farmacocinetica:
      "Excelente biodisponibilidade oral e boa penetração tecidual, incluindo líquor e abscessos. Metabolização hepática, com eliminação renal dos metabólitos.",
    posologia: "Vaginose bacteriana/tricomoníase: 500 mg por via oral, a cada 12 horas, por 7 dias (ou dose única de 2 g na tricomoníase em homens). DIP/infecções anaeróbias: 500 mg por via intravenosa ou oral, a cada 8-12 horas, em associação a outros antibióticos.",
    ajusteRenalHepatico: "Não requer ajuste específico na insuficiência renal. Requer redução de dose em insuficiência hepática grave, dado o metabolismo hepático.",
    gestacaoLactacao: "Considerado seguro após o primeiro trimestre para as indicações ginecológicas; evitar dose única em altas doses durante a lactação (suspender temporariamente a amamentação por 12-24 horas após dose única, se optado por esse esquema).",
    contraindicacoes: [
      "Hipersensibilidade a nitroimidazólicos",
      "Primeiro trimestre da gestação (evitar quando possível, embora não haja evidência definitiva de teratogenicidade)",
      "Uso concomitante com álcool (reação tipo dissulfiram)",
    ],
    efeitosColaterais: [
      "Gosto metálico",
      "Náusea e desconforto gastrointestinal",
      "Neuropatia periférica com uso prolongado",
      "Reação tipo dissulfiram com álcool (rubor, taquicardia, náusea intensa)",
    ],
    interacoes: [
      "Álcool: reação tipo dissulfiram, deve ser evitado durante o tratamento e por 48-72 horas após",
      "Varfarina: potencialização do efeito anticoagulante por inibição do metabolismo hepático",
    ],
    monitorizacao: [
      "Sintomas neurológicos (parestesias) em uso prolongado, pelo risco de neuropatia periférica",
    ],
    alertas: [
      "O paciente deve ser orientado a evitar álcool durante todo o tratamento e por 48-72 horas após a última dose, pelo risco de reação tipo dissulfiram.",
    ],
    similares: ["Secnidazol e tinidazol (nitroimidazólicos alternativos, dose única)"],
    pontosDeProva: [
      "Sua atividade seletiva contra anaeróbios e protozoários vem da redução do fármaco por proteínas de transporte de elétrons exclusivas desses organismos, gerando metabólitos que quebram o DNA",
      "Deve ser evitado o consumo de álcool durante o tratamento pelo risco de reação tipo dissulfiram",
      "É componente-chave do esquema combinado da doença inflamatória pélvica, cobrindo a fração anaeróbia da infecção polimicrobiana",
    ],
    doencasIndicadas: [
      { slug: "vaginite-vulvite", nome: "Vaginite e vulvite" },
      { slug: "doenca-inflamatoria-pelvica", nome: "Doença inflamatória pélvica (salpingite e ooforite)" },
      { slug: "enterocolite-necrosante", nome: "Enterocolite necrosante" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação seletivo em ambiente anaeróbio e farmacocinética", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Esquemas terapêuticos para vaginose bacteriana e tricomoníase", fonte: "CDC, Sexually Transmitted Infections Treatment Guidelines, 2021 (MMWR Recommendations and Reports, Vol. 70, No. 4)" },
    ],
  },
  {
    slug: "claritromicina",
    nome: "Claritromicina",
    nomeComercial: ["Klaricid"],
    principioAtivo: "Claritromicina",
    categoria: "Antibiótico (macrolídeo)",
    codigoAtc: "J01FA09",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido, suspensão oral",
    viaAdministracao: "Oral",
    resumo: "Macrolídeo com boa cobertura para patógenos atípicos, usado em associação a beta-lactâmicos na pneumonia adquirida na comunidade e como componente da terapia tríplice de erradicação do Helicobacter pylori na úlcera péptica.",
    indicacoes: [
      "Pneumonia adquirida na comunidade, em associação a um beta-lactâmico, para cobertura de patógenos atípicos",
      "Erradicação do Helicobacter pylori, como componente da terapia tríplice ou quádrupla na úlcera péptica",
      "Faringotonsilite estreptocócica, em pacientes alérgicos a penicilina",
      "Infecções por micobactérias atípicas (ex.: Mycobacterium avium complex), em esquemas combinados",
    ],
    mecanismoAcao:
      "Liga-se reversivelmente à subunidade ribossômica 50S bacteriana, bloqueando a translocação da cadeia peptídica em formação e inibindo a síntese proteica bacteriana; tem efeito predominantemente bacteriostático, com boa penetração intracelular, o que explica sua atividade contra patógenos atípicos intracelulares (Mycoplasma, Chlamydophila, Legionella).",
    farmacocinetica:
      "Boa biodisponibilidade oral e extensa penetração tecidual intracelular. Metabolização hepática pelo CYP3A4, com um metabólito ativo (14-hidroxiclaritromicina), e eliminação renal e biliar combinadas.",
    posologia: "PAC: 500 mg por via oral, a cada 12 horas, por 7-14 dias, em associação a um beta-lactâmico. Erradicação de H. pylori: 500 mg, a cada 12 horas, por 10-14 dias, associada a inibidor de bomba de prótons e amoxicilina (ou metronidazol).",
    ajusteRenalHepatico: "Requer redução de dose em insuficiência renal grave (clearance de creatinina < 30 mL/min). Usar com cautela em insuficiência hepática significativa.",
    gestacaoLactacao: "Dados de segurança na gestação são mais limitados que para a azitromicina; usar apenas quando o benefício superar o risco potencial e preferir alternativas mais estudadas quando possível.",
    contraindicacoes: [
      "Hipersensibilidade a macrolídeos",
      "Uso concomitante com fármacos com risco significativo de prolongamento do intervalo QT ou substratos sensíveis do CYP3A4 (ex.: ergotamina, colchicina em disfunção renal/hepática, algumas estatinas)",
    ],
    efeitosColaterais: [
      "Desconforto gastrointestinal (menos frequente que com a eritromicina)",
      "Gosto metálico/alteração do paladar",
      "Prolongamento do intervalo QT (raro)",
      "Elevação de transaminases hepáticas",
    ],
    interacoes: [
      "Inibidor potente do CYP3A4: aumenta níveis séricos de estatinas, varfarina, colchicina e outros substratos dessa enzima",
      "Fármacos que prolongam o intervalo QT: risco aumentado de arritmia quando associados",
    ],
    monitorizacao: [
      "Resposta clínica ao tratamento",
      "Intervalo QT em pacientes com fatores de risco cardiovascular associados",
    ],
    alertas: [
      "É inibidor potente do CYP3A4, com risco de interação significativa com estatinas (rabdomiólise), colchicina e outros substratos dessa enzima — sempre revisar a lista de medicamentos em uso antes de prescrever.",
    ],
    similares: ["Azitromicina (macrolídeo com meia-vida mais longa e menor interação medicamentosa, já documentada)"],
    pontosDeProva: [
      "É inibidor potente do CYP3A4, com risco de interação grave com estatinas (rabdomiólise) e colchicina",
      "Sua boa penetração intracelular explica a cobertura eficaz contra patógenos atípicos como Mycoplasma, Chlamydophila e Legionella",
      "É componente padrão da terapia tríplice de erradicação do H. pylori, junto com IBP e amoxicilina",
    ],
    doencasIndicadas: [
      { slug: "pneumonia-adquirida-na-comunidade", nome: "Pneumonia adquirida na comunidade" },
      { slug: "ulcera-peptica", nome: "Úlcera péptica" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação macrolídeo e farmacocinética", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Cobertura de patógenos atípicos na PAC", fonte: "Metlay JP et al., Diagnosis and Treatment of Adults with Community-acquired Pneumonia. An Official Clinical Practice Guideline of the American Thoracic Society and Infectious Diseases Society of America, American Journal of Respiratory and Critical Care Medicine, 2019" },
    ],
  },
  {
    slug: "ciprofloxacino",
    nome: "Ciprofloxacino",
    nomeComercial: ["Cipro", "Ciproxina"],
    principioAtivo: "Cloridrato de ciprofloxacino",
    categoria: "Antibiótico (fluoroquinolona)",
    codigoAtc: "J01MA02",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido, solução injetável",
    viaAdministracao: "Oral, intravenosa",
    resumo: "Fluoroquinolona de amplo espectro com boa atividade contra Gram-negativos, historicamente usada em infecção urinária complicada e diarreia infecciosa bacteriana, hoje com uso mais restrito pelo perfil de efeitos adversos e resistência crescente.",
    indicacoes: [
      "Diarreia infecciosa bacteriana (incluindo diarreia do viajante), quando indicado tratamento antimicrobiano",
      "Infecção do trato urinário complicada e pielonefrite, como alternativa quando outras opções não são adequadas",
      "Profilaxia e tratamento de exposição ao antraz (Bacillus anthracis)",
    ],
    mecanismoAcao:
      "Inibe as topoisomerases bacterianas tipo II (DNA-girase) e tipo IV, enzimas essenciais para o superenovelamento, replicação e segregação do DNA bacteriano; o bloqueio dessas enzimas impede a replicação do DNA e leva à morte bacteriana, com efeito bactericida dependente de concentração.",
    farmacocinetica:
      "Boa biodisponibilidade oral e ampla distribuição tecidual, incluindo próstata, ossos e pulmão. Eliminação predominantemente renal na forma inalterada, exigindo ajuste de dose na insuficiência renal.",
    posologia: "Diarreia infecciosa: 500 mg por via oral, a cada 12 horas, por 1-3 dias, conforme o agente etiológico. ITU complicada/pielonefrite: 500-750 mg, a cada 12 horas, por 7-14 dias.",
    ajusteRenalHepatico: "Requer redução de dose proporcional ao clearance de creatinina na insuficiência renal.",
    gestacaoLactacao: "Contraindicado na gestação e a evitar na lactação, pelo risco de artropatia em cartilagens de crescimento demonstrado em estudos animais e pela preferência por alternativas mais estudadas nessa população.",
    contraindicacoes: [
      "Gestação",
      "Crianças e adolescentes em fase de crescimento, exceto quando não houver alternativa (risco de artropatia)",
      "Hipersensibilidade a fluoroquinolonas",
      "Miastenia gravis (risco de exacerbação da fraqueza muscular)",
    ],
    efeitosColaterais: [
      "Tendinite e risco de ruptura de tendão (especialmente tendão de Aquiles), mais frequente em idosos e usuários de corticoide",
      "Prolongamento do intervalo QT",
      "Neuropatia periférica",
      "Efeitos neuropsiquiátricos (confusão, convulsões em predispostos)",
    ],
    interacoes: [
      "Antiácidos, sais de cálcio, ferro e zinco: reduzem significativamente a absorção oral por quelação",
      "Corticoides sistêmicos: risco aumentado de tendinite e ruptura de tendão quando associados",
      "Teofilina: aumento do nível sérico por inibição do metabolismo hepático",
    ],
    monitorizacao: [
      "Sintomas de tendinite (dor, edema em tendões), especialmente em idosos e usuários de corticoide",
      "Intervalo QT em pacientes com fatores de risco cardiovascular associados",
    ],
    alertas: [
      "Todas as fluoroquinolonas carregam alerta de tendinite e ruptura de tendão, risco maior em idosos, usuários de corticoide sistêmico e transplantados; o uso deve ser reservado a situações sem alternativa adequada, dado esse perfil de segurança.",
    ],
    similares: ["Levofloxacino (fluoroquinolona com melhor cobertura para pneumococo)"],
    pontosDeProva: [
      "Deve ser evitado na gestação e em crianças em crescimento pelo risco de artropatia demonstrado em estudos animais",
      "Antiácidos, cálcio, ferro e zinco reduzem significativamente sua absorção oral por quelação, devendo ser espaçados da administração",
      "Carrega alerta de classe para tendinite e ruptura de tendão, risco potencializado pelo uso concomitante de corticoide sistêmico",
    ],
    doencasIndicadas: [
      { slug: "cistite-itu", nome: "Cistite (infecção do trato urinário baixo)" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação inibidor de topoisomerases e farmacocinética", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Uso empírico na diarreia infecciosa bacteriana", fonte: "Shane AL et al., 2017 Infectious Diseases Society of America Clinical Practice Guidelines for the Diagnosis and Management of Infectious Diarrhea, Clinical Infectious Diseases, 2017" },
    ],
  },
  {
    slug: "cloridrato-de-doxiciclina",
    nome: "Cloridrato de doxiciclina",
    nomeComercial: ["Vibramicina"],
    principioAtivo: "Cloridrato de doxiciclina",
    categoria: "Antibiótico (tetraciclina)",
    codigoAtc: "J01AA02",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido, cápsula",
    viaAdministracao: "Oral",
    resumo: "Tetraciclina de segunda geração com excelente atividade contra Leptospira, Chlamydia e diversas zoonoses, sendo hoje o tratamento de primeira linha da leptospirose e da infecção por clamídia.",
    indicacoes: [
      "Leptospirose, nas formas leves a moderadas e como profilaxia pós-exposição em situações de risco",
      "Infecção por Chlamydia trachomatis, atualmente tratamento de primeira linha",
      "Sífilis precoce, como alternativa em pacientes com alergia confirmada à penicilina fora da gestação",
      "Doença de Lyme e riquetsioses (ex.: febre maculosa)",
    ],
    mecanismoAcao:
      "Liga-se reversivelmente à subunidade ribossômica 30S bacteriana, bloqueando a ligação do RNA transportador aminoacil ao sítio A do ribossomo e impedindo a incorporação de novos aminoácidos à cadeia peptídica em formação, com efeito bacteriostático de amplo espectro.",
    farmacocinetica:
      "Excelente biodisponibilidade oral, pouco afetada por alimentos (diferente das tetraciclinas de primeira geração). Eliminação predominantemente fecal/biliar, o que a torna a tetraciclina de escolha em pacientes com disfunção renal.",
    posologia: "Leptospirose: 100 mg por via oral, a cada 12 horas, por 7 dias. Clamídia: 100 mg, a cada 12 horas, por 7 dias.",
    ajusteRenalHepatico: "Não requer ajuste de dose na insuficiência renal, dada a eliminação predominantemente biliar/fecal — diferencial importante em relação a outras tetraciclinas.",
    gestacaoLactacao: "Contraindicada na gestação e em crianças menores de 8 anos, pelo risco de deposição em ossos e dentes em formação (descoloração dentária permanente, inibição do crescimento ósseo).",
    contraindicacoes: [
      "Gestação",
      "Crianças menores de 8 anos, exceto em situações específicas sem alternativa (ex.: algumas riquetsioses graves)",
      "Hipersensibilidade a tetraciclinas",
    ],
    efeitosColaterais: [
      "Fotossensibilidade cutânea",
      "Esofagite/ulceração esofágica quando ingerida sem água suficiente ou deitado logo após",
      "Descoloração dentária permanente e inibição do crescimento ósseo em crianças pequenas",
      "Desconforto gastrointestinal",
    ],
    interacoes: [
      "Antiácidos, sais de cálcio, ferro e zinco: reduzem significativamente a absorção oral por quelação",
      "Varfarina: pode potencializar o efeito anticoagulante",
    ],
    monitorizacao: [
      "Resposta clínica ao tratamento",
      "Orientação sobre fotoproteção durante o uso",
    ],
    alertas: [
      "Contraindicada na gestação e em crianças menores de 8 anos pelo risco de descoloração dentária permanente e inibição do crescimento ósseo.",
      "Deve ser ingerida com bastante água e o paciente deve permanecer sentado ou em pé por pelo menos 30 minutos após a dose, pelo risco de esofagite/ulceração esofágica.",
    ],
    similares: ["Azitromicina (alternativa para clamídia em gestantes, já documentada)"],
    pontosDeProva: [
      "É a única tetraciclina com eliminação predominantemente biliar/fecal, não exigindo ajuste de dose na insuficiência renal",
      "Substituiu a azitromicina como tratamento de primeira linha para clamídia por maior eficácia, especialmente em infecção retal",
      "É contraindicada na gestação e em crianças menores de 8 anos pelo risco de descoloração dentária permanente",
    ],
    doencasIndicadas: [
      { slug: "leptospirose", nome: "Leptospirose" },
      { slug: "doenca-inflamatoria-pelvica", nome: "Doença inflamatória pélvica (salpingite e ooforite)" },
      { slug: "sifilis-precoce", nome: "Sífilis precoce" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação ribossômico 30S e farmacocinética (eliminação biliar/fecal)", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Tratamento de primeira linha para clamídia", fonte: "CDC, Sexually Transmitted Infections Treatment Guidelines, 2021 (MMWR Recommendations and Reports, Vol. 70, No. 4)" },
    ],
  },
  {
    slug: "aciclovir",
    nome: "Aciclovir",
    nomeComercial: ["Zovirax"],
    principioAtivo: "Aciclovir",
    categoria: "Antiviral (análogo nucleosídeo)",
    codigoAtc: "J05AB01",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido, solução injetável, creme tópico",
    viaAdministracao: "Oral, intravenosa, tópica",
    resumo: "Antiviral análogo nucleosídeo ativo contra os vírus herpes simples e varicela-zóster, com apresentações sistêmica (comprimido/injetável) e tópica (creme) para diferentes indicações clínicas.",
    indicacoes: [
      "Herpes genital, episódio inicial e recorrências (apresentação sistêmica)",
      "Herpes labial e lesões mucocutâneas localizadas (apresentação tópica)",
      "Varicela em populações de maior risco de complicações e herpes-zóster (apresentação sistêmica)",
      "Encefalite herpética, em altas doses intravenosas",
    ],
    mecanismoAcao:
      "É ativado seletivamente pela timidina-quinase viral (presente apenas em células infectadas pelo herpesvírus) em aciclovir monofosfato, posteriormente convertido pelas quinases celulares em aciclovir trifosfato, que inibe competitivamente a DNA-polimerase viral e causa terminação da cadeia de DNA viral em formação — mecanismo que confere alta seletividade e baixa toxicidade para células não infectadas.",
    farmacocinetica:
      "Biodisponibilidade oral baixa (15-30%), exigindo doses orais frequentes e altas. Eliminação predominantemente renal na forma inalterada, exigindo ajuste de dose na insuficiência renal e hidratação adequada para prevenir nefrotoxicidade por cristalização tubular.",
    posologia: "Herpes genital, episódio inicial: 400 mg por via oral, 3 vezes ao dia, por 7-10 dias. Herpes-zóster: 800 mg, 5 vezes ao dia, por 7-10 dias. Apresentação tópica: aplicar na lesão, 5 vezes ao dia.",
    ajusteRenalHepatico: "Requer redução de dose proporcional ao clearance de creatinina na insuficiência renal, com hidratação adequada para reduzir o risco de nefrotoxicidade por cristalização intratubular.",
    gestacaoLactacao: "Considerado seguro na gestação quando indicado (ex.: episódio inicial de herpes genital, supressão próximo ao parto para reduzir risco de transmissão neonatal); compatível com a lactação.",
    contraindicacoes: [
      "Hipersensibilidade ao aciclovir ou ao valaciclovir",
    ],
    efeitosColaterais: [
      "Cefaleia e náusea (via oral)",
      "Nefrotoxicidade por cristalização tubular, especialmente com infusão intravenosa rápida ou hidratação inadequada",
      "Flebite no local da infusão intravenosa",
      "Irritação local leve (apresentação tópica)",
    ],
    interacoes: [
      "Probenecida: reduz a eliminação renal do aciclovir, aumentando seus níveis séricos",
      "Outros fármacos nefrotóxicos: risco aumentado de nefrotoxicidade quando associados",
    ],
    monitorizacao: [
      "Função renal antes e durante o tratamento intravenoso, especialmente em doses altas",
      "Hidratação adequada durante a infusão intravenosa",
    ],
    alertas: [
      "A infusão intravenosa deve ser lenta e acompanhada de hidratação adequada, pelo risco de nefrotoxicidade por cristalização tubular do fármaco.",
    ],
    similares: ["Valaciclovir (pró-droga do aciclovir, maior biodisponibilidade oral e posologia mais cômoda)", "Fanciclovir (análogo nucleosídeo alternativo)"],
    pontosDeProva: [
      "Sua alta seletividade vem da ativação inicial pela timidina-quinase viral, presente apenas em células infectadas pelo herpesvírus",
      "A biodisponibilidade oral baixa exige doses frequentes; o valaciclovir (pró-droga) resolve essa limitação com posologia mais cômoda",
      "A nefrotoxicidade por cristalização tubular é prevenível com infusão lenta e hidratação adequada",
    ],
    doencasIndicadas: [],
    fontes: [
      { tema: "Código ATC e forma farmacêutica (apresentações sistêmica e tópica)", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação seletivo pela timidina-quinase viral e farmacocinética", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Esquema posológico para herpes genital", fonte: "CDC, Sexually Transmitted Infections Treatment Guidelines, 2021 (MMWR Recommendations and Reports, Vol. 70, No. 4)" },
    ],
  },
  {
    slug: "ivermectina",
    nome: "Ivermectina",
    nomeComercial: ["Revectina"],
    principioAtivo: "Ivermectina",
    categoria: "Antiparasitário (avermectina)",
    codigoAtc: "P02CF01",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido",
    viaAdministracao: "Oral",
    resumo: "Antiparasitário de amplo espectro contra nematódeos e ectoparasitas, sendo tratamento de escolha oral para escabiose e estrongiloidíase, com boa tolerabilidade em dose única ou poucas doses.",
    indicacoes: [
      "Escabiose (sarna), incluindo forma crostosa em esquema combinado com permetrina tópica",
      "Estrongiloidíase",
      "Oncocercose e outras filarioses, em programas de controle",
    ],
    mecanismoAcao:
      "Liga-se seletivamente a canais de cloro dependentes de glutamato presentes nas células nervosas e musculares de invertebrados (ausentes em mamíferos), causando hiperpolarização da membrana, paralisia flácida e morte do parasita; a ausência desses canais no sistema nervoso central de mamíferos, protegido também pela barreira hematoencefálica, explica sua boa margem de segurança em humanos.",
    farmacocinetica:
      "Boa absorção oral, potencializada pela ingestão com alimentos gordurosos. Metabolização hepática e eliminação predominantemente fecal.",
    posologia: "Escabiose: 200 mcg/kg, dose única por via oral, repetida em 7-14 dias. Estrongiloidíase: 200 mcg/kg/dia, por 1-2 dias.",
    ajusteRenalHepatico: "Não requer ajuste específico na insuficiência renal. Usar com cautela em disfunção hepática significativa.",
    gestacaoLactacao: "Segurança na gestação não estabelecida; evitar quando possível e preferir permetrina tópica para escabiose nesse grupo. Uso na lactação requer avaliação individualizada.",
    contraindicacoes: [
      "Gestação, quando houver alternativa tópica adequada",
      "Crianças com menos de 15 kg (segurança não estabelecida)",
    ],
    efeitosColaterais: [
      "Tontura",
      "Náusea",
      "Prurido transitório (reação à morte dos parasitas)",
      "Reações neurológicas graves em pacientes com coinfecção por Loa loa em áreas endêmicas (raro, contexto de programas de controle de filariose)",
    ],
    interacoes: [
      "Sem interações medicamentosas clinicamente relevantes de grande magnitude descritas",
    ],
    monitorizacao: [
      "Resposta clínica (resolução do prurido e das lesões na escabiose)",
    ],
    alertas: [
      "Na escabiose, o prurido pode persistir por até 2-4 semanas após tratamento eficaz devido à reação de hipersensibilidade residual, não devendo ser confundido com falha terapêutica.",
    ],
    similares: ["Permetrina tópica (primeira linha na escabiose não complicada, alternativa segura na gestação)"],
    pontosDeProva: [
      "Sua seletividade e margem de segurança vêm da ausência de canais de cloro dependentes de glutamato no sistema nervoso central de mamíferos",
      "Na escabiose, o prurido residual por até 2-4 semanas após tratamento eficaz não indica falha terapêutica",
      "É administrada em dose única repetida em 7-14 dias na escabiose, para cobrir o ciclo de eclosão de ovos não afetados pela primeira dose",
    ],
    doencasIndicadas: [],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação em canais de cloro dependentes de glutamato e farmacocinética", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Esquema posológico oral para escabiose", fonte: "CDC — Clinical Care of Scabies, Guidance for Health Professionals (Parasites — Scabies)" },
    ],
  },
  {
    slug: "albendazol",
    nome: "Albendazol",
    nomeComercial: ["Zentel"],
    principioAtivo: "Albendazol",
    categoria: "Antiparasitário (benzimidazólico)",
    codigoAtc: "P02CA03",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido, suspensão oral",
    viaAdministracao: "Oral",
    resumo: "Antiparasitário benzimidazólico de amplo espectro contra helmintos intestinais, sendo o agente de escolha para desparasitação em massa e tratamento de geo-helmintíases (ascaridíase, ancilostomíase, tricuríase).",
    indicacoes: [
      "Helmintíases intestinais (ascaridíase, ancilostomíase, tricuríase, enterobíase)",
      "Desparasitação em massa em programas de saúde pública em áreas endêmicas",
      "Neurocisticercose e hidatidose, em esquemas prolongados sob supervisão especializada",
    ],
    mecanismoAcao:
      "Liga-se seletivamente à beta-tubulina dos helmintos, inibindo a polimerização de microtúbulos necessária para a absorção de glicose e outras funções celulares essenciais do parasita, levando à depleção energética, imobilização e morte; a maior afinidade pela beta-tubulina do helminto em relação à do hospedeiro explica sua seletividade.",
    farmacocinetica:
      "Absorção oral baixa e variável, potencializada por refeições gordurosas; a baixa absorção sistêmica é vantajosa para ação local no lúmen intestinal, mas exige doses maiores e prolongadas nas indicações que exigem ação sistêmica (neurocisticercose, hidatidose).",
    posologia: "Helmintíases intestinais: 400 mg, dose única por via oral (repetir em 2-3 semanas se necessário). Neurocisticercose/hidatidose: esquemas prolongados (7-28 dias) sob supervisão especializada.",
    ajusteRenalHepatico: "Não requer ajuste específico na insuficiência renal para dose única. Monitorizar função hepática em esquemas prolongados.",
    gestacaoLactacao: "Evitar no primeiro trimestre da gestação pelo risco teratogênico observado em estudos animais; considerado de baixo risco após o primeiro trimestre quando o benefício justificar. Compatível com a lactação.",
    contraindicacoes: [
      "Primeiro trimestre da gestação",
      "Hipersensibilidade a benzimidazólicos",
    ],
    efeitosColaterais: [
      "Desconforto abdominal e diarreia leve",
      "Cefaleia",
      "Elevação de transaminases hepáticas em esquemas prolongados",
      "Supressão de medula óssea em uso prolongado (raro)",
    ],
    interacoes: [
      "Dexametasona e cimetidina: aumentam os níveis séricos do albendazol quando usado em esquemas prolongados (neurocisticercose)",
    ],
    monitorizacao: [
      "Hemograma e enzimas hepáticas em esquemas prolongados (neurocisticercose, hidatidose)",
    ],
    alertas: [
      "Deve ser evitado no primeiro trimestre da gestação pelo risco teratogênico observado em estudos animais.",
    ],
    similares: ["Mebendazol (benzimidazólico de mecanismo semelhante, não constante na RENAME 2024)"],
    pontosDeProva: [
      "Sua baixa absorção sistêmica em dose única é vantajosa para ação local nas helmintíases intestinais, mas exige esquemas prolongados quando a ação sistêmica é necessária (neurocisticercose)",
      "É contraindicado no primeiro trimestre da gestação pelo risco teratogênico",
      "É o agente de escolha para desparasitação em massa em programas de saúde pública, pela eficácia em dose única",
    ],
    doencasIndicadas: [],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação na beta-tubulina do helminto e farmacocinética", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Uso em desparasitação em massa contra geo-helmintos", fonte: "World Health Organization, Guideline: Preventive Chemotherapy to Control Soil-Transmitted Helminth Infections in At-Risk Population Groups, 2017" },
    ],
  },
  {
    slug: "cloridrato-de-clindamicina",
    nome: "Cloridrato de clindamicina",
    nomeComercial: ["Dalacin"],
    principioAtivo: "Cloridrato de clindamicina",
    categoria: "Antibiótico (lincosamida)",
    codigoAtc: "J01FF01",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Cápsula, solução injetável",
    viaAdministracao: "Oral, intravenosa",
    resumo: "Lincosamida com excelente atividade contra Gram-positivos (incluindo cepas de MRSA sensíveis) e anaeróbios, sendo alternativa importante em infecções de pele e partes moles em pacientes alérgicos a beta-lactâmicos.",
    indicacoes: [
      "Celulite e outras infecções de pele e partes moles, especialmente em pacientes alérgicos a penicilina ou com suspeita de MRSA adquirido na comunidade",
      "Abscesso cutâneo, furúnculo e antraz, como alternativa ou adjuvante ao tratamento cirúrgico (incisão e drenagem)",
      "Vaginose bacteriana, como alternativa ao metronidazol",
      "Infecções anaeróbias e profilaxia de endocardite em pacientes alérgicos a penicilina",
    ],
    mecanismoAcao:
      "Liga-se à subunidade ribossômica 50S bacteriana, no mesmo sítio de ligação dos macrolídeos, bloqueando a translocação da cadeia peptídica e inibindo a síntese proteica bacteriana; tem excelente atividade contra cocos Gram-positivos aeróbios e a maioria dos anaeróbios, mas nenhuma atividade contra bactérias Gram-negativas aeróbias.",
    farmacocinetica:
      "Boa biodisponibilidade oral e excelente penetração óssea e em abscessos. Metabolização hepática, com eliminação biliar predominante — não exige ajuste de dose na insuficiência renal isolada.",
    posologia: "Infecções de pele e partes moles: 300-450 mg por via oral, a cada 6-8 horas. Infecções graves/anaeróbias: 600-900 mg por via intravenosa, a cada 8 horas.",
    ajusteRenalHepatico: "Não requer ajuste específico na insuficiência renal, dada a eliminação biliar predominante. Requer cautela e possível redução de dose em insuficiência hepática grave.",
    gestacaoLactacao: "Considerada segura na gestação e compatível com a lactação, com extenso histórico de uso obstétrico (incluindo tópica/vaginal para vaginose bacteriana).",
    contraindicacoes: [
      "Hipersensibilidade a clindamicina ou lincomicina",
      "História de colite associada a Clostridioides difficile relacionada ao uso prévio de clindamicina",
    ],
    efeitosColaterais: [
      "Diarreia, incluindo risco elevado de colite pseudomembranosa por Clostridioides difficile em comparação a outros antibióticos",
      "Exantema cutâneo",
      "Desconforto gastrointestinal",
      "Alteração do paladar",
    ],
    interacoes: [
      "Bloqueadores neuromusculares: pode potencializar o bloqueio neuromuscular",
      "Eritromicina/macrolídeos: antagonismo pelo mesmo sítio de ligação ribossômica, evitar associação",
    ],
    monitorizacao: [
      "Frequência e características das evacuações durante e após o tratamento, pelo risco de colite por C. difficile",
    ],
    alertas: [
      "Carrega um dos maiores riscos entre os antibióticos de uso comum para colite pseudomembranosa por Clostridioides difficile; diarreia persistente ou grave durante ou após o uso deve ser investigada antes de ser atribuída a efeito colateral benigno.",
    ],
    similares: ["Amoxicilina + clavulanato (alternativa de amplo espectro para infecções de pele, já documentada)"],
    pontosDeProva: [
      "Carrega um dos maiores riscos entre os antibióticos comuns para colite pseudomembranosa por Clostridioides difficile",
      "Compete pelo mesmo sítio ribossômico dos macrolídeos, sendo antagônica quando associada à eritromicina/azitromicina",
      "É opção importante em infecções de pele e partes moles em pacientes alérgicos a beta-lactâmicos, incluindo cobertura para MRSA comunitário sensível",
    ],
    doencasIndicadas: [
      { slug: "celulite-flegmao", nome: "Celulite e flegmão" },
      { slug: "abscesso-cutaneo-furunculo-antraz", nome: "Abscesso cutâneo, furúnculo e antraz" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação ribossômico 50S e farmacocinética (eliminação biliar)", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Uso em infecções de pele e partes moles, incluindo cobertura para MRSA comunitário", fonte: "Stevens DL et al., Practice Guidelines for the Diagnosis and Management of Skin and Soft Tissue Infections: 2014 Update by the Infectious Diseases Society of America, Clinical Infectious Diseases, 2014" },
    ],
  },
  {
    slug: "sulfato-de-morfina",
    nome: "Sulfato de morfina",
    nomeComercial: ["Dimorf"],
    principioAtivo: "Sulfato de morfina",
    categoria: "Analgésico opioide (agonista de receptor mu)",
    codigoAtc: "N02AA01",
    tarja: "Tarja preta",
    formaFarmaceutica: "Comprimido de liberação imediata e prolongada, solução oral, solução injetável",
    viaAdministracao: "Oral, intravenosa, subcutânea",
    resumo: "Opioide de referência e padrão-ouro para comparação com os demais analgésicos opioides, essencial no manejo da dor moderada a intensa aguda (síndrome coronariana aguda, cólica renal, pancreatite) e crônica (dor oncológica e cuidados paliativos).",
    indicacoes: [
      "Dor torácica na síndrome coronariana aguda, quando não controlada por nitratos",
      "Cólica nefrética, quando a dor não é controlada por anti-inflamatórios não esteroidais",
      "Dor da pancreatite aguda",
      "Dor oncológica moderada a intensa e cuidados paliativos",
    ],
    mecanismoAcao:
      "Agonista dos receptores opioides mu, principalmente no sistema nervoso central (substância cinzenta periaquedutal, corno dorsal da medula espinhal), inibindo a transmissão nociceptiva ascendente e ativando vias descendentes inibitórias da dor; também produz euforia, sedação e depressão do centro respiratório bulbar por ativação do mesmo receptor.",
    farmacocinetica:
      "Biodisponibilidade oral reduzida (cerca de 30%) pelo extenso metabolismo de primeira passagem hepático, exigindo doses orais maiores que as parenterais para efeito equivalente. Metabolização hepática em metabólitos ativos (morfina-6-glicuronídeo) e eliminação renal, exigindo ajuste de dose na insuficiência renal pelo risco de acúmulo do metabólito ativo.",
    posologia: "Dor aguda intensa: 2-4 mg por via intravenosa, repetido conforme resposta e titulação cuidadosa. Dor crônica/oncológica: dose individualizada por via oral, com formulação de liberação prolongada para manutenção e liberação imediata para dor irruptiva.",
    ajusteRenalHepatico: "Requer redução de dose e intervalo maior entre doses na insuficiência renal, pelo risco de acúmulo do metabólito ativo (morfina-6-glicuronídeo) e depressão respiratória prolongada.",
    gestacaoLactacao: "Uso apenas quando estritamente indicado, com risco de síndrome de abstinência neonatal em uso prolongado próximo ao parto; monitorizar o recém-nascido quando usado no periparto. Passa para o leite materno, exigindo avaliação individualizada do risco-benefício na lactação.",
    contraindicacoes: [
      "Depressão respiratória significativa não monitorizada",
      "Íleo paralítico",
      "Hipersensibilidade conhecida à morfina",
      "Uso concomitante ou recente de inibidores da MAO (risco de síndrome serotoninérgica/reações graves)",
    ],
    efeitosColaterais: [
      "Depressão respiratória, o efeito adverso mais grave e potencialmente fatal",
      "Constipação intestinal, efeito que não desenvolve tolerância com o uso prolongado",
      "Náusea e vômitos",
      "Sedação e, com uso prolongado, tolerância e dependência física",
    ],
    interacoes: [
      "Benzodiazepínicos e outros depressores do SNC: risco significativamente aumentado de depressão respiratória grave e óbito quando associados",
      "Inibidores da MAO: risco de reações graves, incluindo síndrome serotoninérgica",
      "Álcool: potencializa a depressão do SNC e respiratória",
    ],
    monitorizacao: [
      "Frequência respiratória e nível de sedação, especialmente no início do tratamento e após ajustes de dose",
      "Função intestinal, com profilaxia laxativa proativa em uso prolongado",
      "Sinais de tolerância, dependência física e uso inadequado em tratamento crônico",
    ],
    alertas: [
      "A naloxona é o antídoto específico para reverter a depressão respiratória por overdose de opioides, devendo estar disponível sempre que opioides forem prescritos em contexto de risco.",
      "A associação com benzodiazepínicos ou outros depressores do SNC aumenta significativamente o risco de depressão respiratória fatal e deve ser evitada sempre que possível.",
    ],
    similares: ["Fentanila (opioide sintético mais potente, ação mais rápida)", "Tramadol (opioide fraco, menor risco de depressão respiratória em doses habituais)"],
    pontosDeProva: [
      "É o opioide de referência (padrão-ouro) usado para calcular a potência equianalgésica de todos os demais opioides",
      "A constipação intestinal é o único efeito adverso que não desenvolve tolerância com o uso prolongado, exigindo profilaxia laxativa proativa",
      "A naloxona é o antídoto específico para a depressão respiratória por intoxicação opioide",
    ],
    doencasIndicadas: [
      { slug: "infarto-agudo-miocardio", nome: "Infarto agudo do miocárdio" },
      { slug: "colica-nefretica", nome: "Cólica nefrética" },
      { slug: "pancreatite-aguda", nome: "Pancreatite aguda" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação agonista mu e farmacocinética", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Uso na dor oncológica e princípios de titulação", fonte: "World Health Organization, WHO Guidelines for the Pharmacological and Radiotherapeutic Management of Cancer Pain in Adults and Adolescents, 2018" },
    ],
  },
  {
    slug: "mesalazina",
    nome: "Mesalazina",
    nomeComercial: ["Asalit", "Mesacol"],
    principioAtivo: "Mesalazina (ácido 5-aminossalicílico)",
    categoria: "Anti-inflamatório intestinal (aminossalicilato)",
    codigoAtc: "A07EC02",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido de liberação prolongada/entérica, supositório, enema retal",
    viaAdministracao: "Oral, retal",
    resumo: "Aminossalicilato de ação tópica intestinal, sendo o tratamento de indução e manutenção de primeira linha para retocolite ulcerativa leve a moderada.",
    indicacoes: [
      "Retocolite ulcerativa leve a moderada, indução e manutenção da remissão",
      "Proctite ulcerativa, com formulação retal (supositório) como primeira linha",
      "Colite esquerda leve a moderada, com enema retal preferido a corticoide tópico",
    ],
    mecanismoAcao:
      "Atua topicamente na mucosa intestinal inflamada, inibindo a via da ciclo-oxigenase e da lipo-oxigenase (reduzindo prostaglandinas e leucotrienos) e bloqueando a produção de citocinas pró-inflamatórias e espécies reativas de oxigênio pelos neutrófilos; diferentes formulações de liberação (entérica, dependente de pH, ou pró-droga clivada por bactérias colônicas) direcionam a liberação do fármaco para o segmento intestinal afetado.",
    farmacocinetica:
      "Formulada para liberação tópica no intestino (não para absorção sistêmica ampla), com diferentes tecnologias de liberação conforme o segmento-alvo (delgado distal, cólon proximal ou distal). A fração absorvida é metabolizada no fígado e eliminada por via renal.",
    posologia: "Indução: 2,4-4,8 g/dia por via oral, dividida ou em dose única diária, associada a enema ou supositório retal quando a doença acomete o reto/cólon esquerdo. Manutenção: 2-2,4 g/dia.",
    ajusteRenalHepatico: "Contraindicada em insuficiência renal grave (risco de nefrite intersticial); requer monitorização da função renal mesmo em função renal normal, dado o potencial nefrotóxico da classe.",
    gestacaoLactacao: "Considerada segura na gestação e compatível com a lactação, sendo a manutenção do tratamento geralmente recomendada durante a gestação para evitar reativação da doença.",
    contraindicacoes: [
      "Hipersensibilidade a salicilatos",
      "Insuficiência renal grave",
    ],
    efeitosColaterais: [
      "Cefaleia",
      "Desconforto abdominal e diarreia",
      "Nefrite intersticial (rara, mas justifica monitorização renal periódica)",
      "Pancreatite (rara)",
    ],
    interacoes: [
      "Azatioprina/mercaptopurina: risco aumentado de mielotoxicidade quando associados",
      "Fármacos nefrotóxicos: risco aumentado de nefrotoxicidade quando associados",
    ],
    monitorizacao: [
      "Função renal periodicamente, mesmo em pacientes com função renal basal normal",
      "Resposta clínica e endoscópica ao tratamento",
    ],
    alertas: [
      "A monitorização periódica da função renal é recomendada durante todo o tratamento, mesmo na ausência de fatores de risco, pelo potencial de nefrite intersticial da classe.",
    ],
    similares: ["Sulfassalazina (aminossalicilato de primeira geração, mais efeitos colaterais)"],
    pontosDeProva: [
      "Atua topicamente na mucosa intestinal inflamada; diferentes formulações de liberação direcionam o fármaco para o segmento intestinal afetado",
      "É a primeira linha de indução e manutenção na retocolite ulcerativa leve a moderada, com a via retal preferida para doença limitada ao reto/cólon esquerdo",
      "Exige monitorização periódica da função renal durante todo o tratamento pelo risco de nefrite intersticial",
    ],
    doencasIndicadas: [
      { slug: "colite-ulcerativa", nome: "Colite ulcerativa" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação tópico intestinal e farmacocinética", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Indução e manutenção da remissão na retocolite ulcerativa", fonte: "Rubin DT et al., ACG Clinical Guideline: Ulcerative Colitis in Adults, American Journal of Gastroenterology, 2019" },
    ],
  },
  {
    slug: "cloridrato-de-ondansetrona",
    nome: "Cloridrato de ondansetrona",
    nomeComercial: ["Zofran", "Nausedron"],
    principioAtivo: "Cloridrato de ondansetrona",
    categoria: "Antiemético (antagonista do receptor 5-HT3)",
    codigoAtc: "A04AA01",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido, comprimido orodispersível, solução injetável",
    viaAdministracao: "Oral, intravenosa",
    resumo: "Antagonista seletivo do receptor 5-HT3 de escolha para náusea e vômitos induzidos por quimioterapia, no pós-operatório e na hiperêmese gravídica refratária a medidas iniciais.",
    indicacoes: [
      "Náusea e vômitos induzidos por quimioterapia e radioterapia",
      "Náusea e vômitos pós-operatórios",
      "Hiperêmese gravídica refratária a antieméticos de primeira linha (ex.: piridoxina/doxilamina, prometazina)",
    ],
    mecanismoAcao:
      "Antagoniza seletivamente os receptores de serotonina 5-HT3, localizados tanto perifericamente (terminações vagais aferentes no trato gastrointestinal) quanto centralmente (zona de gatilho quimiorreceptora na área postrema); bloqueia a ativação desses receptores pela serotonina liberada por células enterocromafins lesadas (ex.: por quimioterápicos), interrompendo o reflexo do vômito.",
    farmacocinetica:
      "Boa biodisponibilidade oral e metabolização hepática extensa pelo citocromo P450 (múltiplas isoenzimas), com eliminação predominantemente urinária dos metabólitos.",
    posologia: "Quimioterapia: 8-24 mg por via oral ou intravenosa antes do agente emetogênico, conforme o potencial emetogênico. Hiperêmese gravídica: 4-8 mg por via oral ou intravenosa, a cada 8 horas conforme necessário.",
    ajusteRenalHepatico: "Não requer ajuste específico na insuficiência renal. Dose máxima diária reduzida (8 mg) em insuficiência hepática grave, dado o metabolismo hepático extenso.",
    gestacaoLactacao: "Uso na gestação reservado a hiperêmese refratária a antieméticos de primeira linha, dados de segurança em grande escala tranquilizadores mas não completamente isentos de sinais controversos (estudos com achados conflitantes sobre risco cardíaco fetal); a decisão deve pesar a gravidade da hiperêmese materna.",
    contraindicacoes: [
      "Hipersensibilidade a antagonistas 5-HT3",
      "Uso concomitante com apomorfina (risco de hipotensão profunda e perda de consciência)",
      "Síndrome do QT longo congênito",
    ],
    efeitosColaterais: [
      "Cefaleia",
      "Constipação intestinal",
      "Prolongamento do intervalo QT, dose-dependente",
      "Elevação transitória de transaminases hepáticas",
    ],
    interacoes: [
      "Fármacos que prolongam o intervalo QT: risco aumentado de arritmia quando associados",
      "Tramadol: pode reduzir a eficácia analgésica do tramadol por antagonismo serotoninérgico",
    ],
    monitorizacao: [
      "Intervalo QT em pacientes com fatores de risco cardiovascular ou uso de doses altas intravenosas",
      "Resposta clínica ao controle da náusea e vômitos",
    ],
    alertas: [
      "O prolongamento do intervalo QT é dose-dependente, sendo motivo de restrição da dose intravenosa única máxima em uso oncológico; deve-se ter cautela especial em pacientes com fatores de risco cardiovascular associados.",
    ],
    similares: ["Granisetrona (outro antagonista 5-HT3)", "Metoclopramida (antiemético procinético, mecanismo distinto, já documentada)"],
    pontosDeProva: [
      "Bloqueia os receptores 5-HT3 tanto perifericamente (terminações vagais) quanto centralmente (área postrema), interrompendo o reflexo do vômito mediado pela serotonina liberada por células enterocromafins lesadas",
      "O prolongamento do intervalo QT é dose-dependente e limita a dose intravenosa única máxima recomendada",
      "Na hiperêmese gravídica, é reservado a casos refratários às medidas de primeira linha",
    ],
    doencasIndicadas: [
      { slug: "hiperemese-gravidica", nome: "Hiperêmese gravídica" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação antagonista 5-HT3 e farmacocinética", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Uso na hiperêmese gravídica refratária", fonte: "ACOG Practice Bulletin No. 189, Nausea and Vomiting of Pregnancy, 2018" },
    ],
  },
  {
    slug: "cianocobalamina",
    nome: "Cianocobalamina (vitamina B12)",
    nomeComercial: ["Amicored"],
    principioAtivo: "Cianocobalamina",
    categoria: "Vitamina hidrossolúvel (complexo B)",
    codigoAtc: "B03BA01",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Solução injetável, comprimido",
    viaAdministracao: "Intramuscular, oral",
    resumo: "Forma sintética da vitamina B12, usada na reposição da deficiência de cobalamina, cofator essencial da síntese de DNA e da mielinização do sistema nervoso, cuja carência causa anemia macrocítica e neuropatia.",
    indicacoes: [
      "Anemia por deficiência de vitamina B12 (anemia perniciosa ou por má absorção)",
      "Deficiência de B12 por causas dietéticas (dietas veganas restritas) ou pós-gastrectomia/bariátrica",
      "Neuropatia e outras manifestações neurológicas da deficiência de B12",
    ],
    mecanismoAcao:
      "Repõe o cofator cianocobalamina, necessário para duas reações enzimáticas essenciais: a conversão de homocisteína em metionina (via metionina sintase, essencial para a síntese de DNA e a regeneração do folato ativo) e a conversão de metilmalonil-CoA em succinil-CoA (essencial para a integridade da mielina); a deficiência compromete a hematopoiese (anemia macrocítica megaloblástica) e, se prolongada, causa dano neurológico irreversível.",
    farmacocinetica:
      "A absorção oral depende do fator intrínseco gástrico para grande parte da dose, mas uma fração é absorvida por difusão passiva independente do fator intrínseco, permitindo reposição oral em altas doses mesmo na anemia perniciosa. A via intramuscular contorna completamente a necessidade de absorção intestinal, sendo preferida quando a causa é má absorção confirmada.",
    posologia: "Reposição intramuscular: 1.000 mcg, 1 vez ao dia ou semanal por algumas semanas (fase de ataque), seguida de manutenção mensal. Reposição oral em altas doses: 1.000-2.000 mcg/dia.",
    ajusteRenalHepatico: "Não requer ajuste específico na insuficiência renal ou hepática.",
    gestacaoLactacao: "Considerada segura na gestação e compatível com a lactação; a reposição é indicada quando há deficiência confirmada, sem restrição adicional nesse contexto.",
    contraindicacoes: [
      "Hipersensibilidade à cianocobalamina ou ao cobalto",
    ],
    efeitosColaterais: [
      "Dor no local da injeção intramuscular",
      "Reações de hipersensibilidade (raras)",
      "Hipocalemia no início do tratamento de deficiência grave (pela reativação abrupta da hematopoiese)",
    ],
    interacoes: [
      "Sem interações medicamentosas clinicamente relevantes de grande magnitude descritas",
    ],
    monitorizacao: [
      "Hemograma e reticulócitos para confirmar resposta à reposição (crise reticulocitária esperada em cerca de 1 semana)",
      "Potássio sérico no início do tratamento de deficiência grave, pelo risco de hipocalemia por reativação hematopoiética",
    ],
    alertas: [
      "A reposição de B12 na deficiência grave deve incluir monitorização do potássio sérico nos primeiros dias, pelo risco de hipocalemia por reativação abrupta da hematopoiese medular.",
    ],
    similares: ["Hidroxocobalamina (forma alternativa de B12, meia-vida mais longa)"],
    pontosDeProva: [
      "Uma fração da dose oral é absorvida por difusão passiva independente do fator intrínseco, permitindo reposição oral em altas doses mesmo em pacientes com anemia perniciosa",
      "A deficiência prolongada de B12 causa dano neurológico que pode ser irreversível, mesmo após correção da anemia — reforçando a importância do diagnóstico e tratamento precoces",
      "A reativação hematopoiética abrupta no início do tratamento de deficiência grave pode causar hipocalemia, exigindo monitorização",
    ],
    doencasIndicadas: [
      { slug: "anemia-deficiencia-vitamina-b12", nome: "Anemia por deficiência de vitamina B12" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Papel de cofator na síntese de DNA e mielinização e farmacocinética", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Diagnóstico e esquema de reposição na deficiência de cobalamina", fonte: "Devalia V et al., Guidelines for the Diagnosis and Treatment of Cobalamin and Folate Disorders, British Committee for Standards in Haematology, British Journal of Haematology, 2014" },
    ],
  },
  {
    slug: "carbamazepina",
    nome: "Carbamazepina",
    nomeComercial: ["Tegretol"],
    principioAtivo: "Carbamazepina",
    categoria: "Anticonvulsivante (bloqueador de canal de sódio)",
    codigoAtc: "N03AF01",
    tarja: "Tarja preta",
    formaFarmaceutica: "Comprimido, comprimido de liberação controlada, suspensão oral",
    viaAdministracao: "Oral",
    resumo: "Anticonvulsivante bloqueador de canal de sódio de primeira linha para epilepsia focal e neuralgia do trigêmeo, com necessidade de monitorização por interações medicamentosas relevantes e risco de reações cutâneas graves em populações geneticamente predispostas.",
    indicacoes: [
      "Epilepsia focal (crises parciais), primeira linha",
      "Neuralgia do trigêmeo",
      "Transtorno afetivo bipolar, como estabilizador de humor alternativo",
    ],
    mecanismoAcao:
      "Bloqueia canais de sódio dependentes de voltagem no estado inativado, estabilizando a membrana neuronal e reduzindo disparos repetitivos de alta frequência sem afetar a excitabilidade neuronal normal; esse mecanismo uso-dependente confere seletividade para tecido neural hiperexcitável.",
    farmacocinetica:
      "Absorção oral variável e indutor potente do próprio metabolismo (autoindução do CYP3A4), o que exige aumento gradual da dose nas primeiras semanas de tratamento. Metabolização hepática extensa, com um metabólito ativo (10,11-epóxido).",
    posologia: "Início: 100-200 mg por via oral, 1-2 vezes ao dia, com aumento gradual até a dose de manutenção (400-1.200 mg/dia, dividida), guiado por resposta clínica e nível sérico.",
    ajusteRenalHepatico: "Requer cautela e possível redução de dose em insuficiência hepática significativa, dado o metabolismo hepático extenso.",
    gestacaoLactacao: "Associada a risco aumentado de malformações congênitas (incluindo defeitos do tubo neural) quando usada no primeiro trimestre; a decisão de manutenção na gestação deve pesar o risco de crises não controladas contra o risco teratogênico, com suplementação de ácido fólico recomendada.",
    contraindicacoes: [
      "Hipersensibilidade a antidepressivos tricíclicos (reatividade cruzada estrutural)",
      "Bloqueio atrioventricular",
      "História de supressão de medula óssea",
      "Alelo HLA-B*1502 (populações de ascendência asiática), pelo risco muito aumentado de síndrome de Stevens-Johnson/necrólise epidérmica tóxica",
    ],
    efeitosColaterais: [
      "Tontura, diplopia e ataxia (dose-dependentes)",
      "Hiponatremia por síndrome de secreção inapropriada de hormônio antidiurético",
      "Reações cutâneas graves (síndrome de Stevens-Johnson/necrólise epidérmica tóxica), com risco maior em portadores do alelo HLA-B*1502",
      "Supressão de medula óssea (rara, mas exige monitorização hematológica)",
    ],
    interacoes: [
      "Indutor potente do CYP3A4: reduz significativamente os níveis séricos de contraceptivos hormonais, varfarina e diversos outros substratos dessa enzima",
      "Autoindução do próprio metabolismo: exige reavaliação e possível aumento de dose nas primeiras semanas de tratamento",
    ],
    monitorizacao: [
      "Hemograma completo, sódio sérico e enzimas hepáticas periodicamente",
      "Nível sérico do fármaco para ajuste de dose e avaliação de adesão/toxicidade",
      "Rastreamento do alelo HLA-B*1502 antes de iniciar em pacientes de ascendência asiática, quando disponível",
    ],
    alertas: [
      "Antes de iniciar em pacientes de ascendência asiática (han chinesa, tailandesa, entre outras), recomenda-se rastrear o alelo HLA-B*1502 pelo risco muito aumentado de síndrome de Stevens-Johnson/necrólise epidérmica tóxica.",
      "É indutor potente do CYP3A4, reduzindo significativamente a eficácia de contraceptivos hormonais — deve-se orientar método contraceptivo alternativo ou adicional.",
    ],
    similares: ["Oxcarbazepina (análogo estrutural com menor indução enzimática)"],
    pontosDeProva: [
      "O bloqueio de canais de sódio é uso-dependente (estado inativado), conferindo seletividade para tecido neural hiperexcitável sem afetar a função neuronal normal",
      "O rastreamento do alelo HLA-B*1502 é recomendado em populações de ascendência asiática antes do início, pelo risco muito aumentado de reações cutâneas graves",
      "É indutor potente do CYP3A4, reduzindo a eficácia de contraceptivos hormonais — interação clinicamente crítica e frequentemente subestimada",
    ],
    doencasIndicadas: [
      { slug: "epilepsia", nome: "Epilepsia" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação bloqueador de canal de sódio uso-dependente e farmacocinética", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Primeira linha na epilepsia focal e monitorização de segurança", fonte: "National Institute for Health and Care Excellence (NICE), Guideline NG217, Epilepsies in Children, Young People and Adults, 2022" },
    ],
  },
  {
    slug: "acido-valproico",
    nome: "Ácido valproico",
    nomeComercial: ["Depakene", "Depakote"],
    principioAtivo: "Ácido valproico / valproato de sódio",
    categoria: "Anticonvulsivante (ácido graxo de cadeia ramificada)",
    codigoAtc: "N03AG01",
    tarja: "Tarja preta",
    formaFarmaceutica: "Comprimido, comprimido de liberação prolongada, xarope, solução injetável",
    viaAdministracao: "Oral, intravenosa",
    resumo: "Anticonvulsivante de amplo espectro eficaz em praticamente todos os tipos de crise epiléptica, também usado como estabilizador de humor no transtorno afetivo bipolar, com teratogenicidade significativa que restringe seu uso em mulheres em idade fértil.",
    indicacoes: [
      "Epilepsia generalizada (crises tônico-clônicas, de ausência e mioclônicas), primeira linha em homens e mulheres sem potencial reprodutivo",
      "Transtorno afetivo bipolar, fase maníaca e manutenção",
      "Profilaxia de enxaqueca, como opção alternativa",
    ],
    mecanismoAcao:
      "Mecanismo múltiplo e não completamente elucidado: bloqueia canais de sódio dependentes de voltagem de forma uso-dependente (semelhante à carbamazepina), aumenta a disponibilidade do neurotransmissor inibitório GABA (por inibição de enzimas que o degradam) e modula canais de cálcio tipo T, o que explica seu amplo espectro de eficácia contra múltiplos tipos de crise.",
    farmacocinetica:
      "Boa biodisponibilidade oral e alta ligação a proteínas plasmáticas (o que gera interações relevantes por deslocamento). Metabolização hepática extensa por múltiplas vias, incluindo uma via minoritária que gera metabólitos hepatotóxicos.",
    posologia: "Início: 10-15 mg/kg/dia, com aumento gradual até a dose de manutenção (usualmente 1.000-2.000 mg/dia, dividida), guiado por resposta clínica e nível sérico.",
    ajusteRenalHepatico: "Contraindicado em doença hepática significativa preexistente; requer monitorização hepática rigorosa em todos os pacientes, especialmente nos primeiros 6 meses de tratamento.",
    gestacaoLactacao: "Alto risco teratogênico (defeitos do tubo neural e outras malformações maiores) e associação com comprometimento do neurodesenvolvimento; contraindicado em mulheres em idade fértil, salvo quando não há alternativa terapêutica eficaz e sob programa de prevenção de gravidez com contracepção eficaz obrigatória.",
    contraindicacoes: [
      "Mulheres em idade fértil, salvo sem alternativa terapêutica e sob programa de prevenção de gravidez",
      "Doença hepática significativa preexistente",
      "Distúrbios do ciclo da ureia conhecidos",
      "Porfiria hepática",
    ],
    efeitosColaterais: [
      "Ganho de peso",
      "Tremor",
      "Alopecia reversível",
      "Hepatotoxicidade, incluindo insuficiência hepática fulminante rara, com maior risco em crianças pequenas e nos primeiros 6 meses",
      "Trombocitopenia e pancreatite (raras)",
    ],
    interacoes: [
      "Lamotrigina: inibe o metabolismo da lamotrigina, exigindo redução da dose desta quando associadas",
      "Alta ligação a proteínas plasmáticas: risco de deslocamento e toxicidade de outros fármacos altamente ligados quando associados",
      "Carbapenêmicos: reduzem significativamente o nível sérico do ácido valproico por mecanismo não completamente elucidado, podendo precipitar crises",
    ],
    monitorizacao: [
      "Enzimas hepáticas, especialmente nos primeiros 6 meses de tratamento",
      "Hemograma completo, pelo risco de trombocitopenia",
      "Nível sérico do fármaco para ajuste de dose",
    ],
    alertas: [
      "É contraindicado em mulheres em idade fértil salvo ausência de alternativa terapêutica eficaz, dado o alto risco teratogênico e de comprometimento do neurodesenvolvimento — exige programa de prevenção de gravidez com contracepção eficaz obrigatória quando usado nessa população.",
      "A hepatotoxicidade tem maior risco nos primeiros 6 meses de tratamento e em crianças pequenas, especialmente em politerapia anticonvulsivante.",
    ],
    similares: ["Lamotrigina (alternativa com melhor perfil na gestação)", "Levetiracetam (alternativa com menor potencial teratogênico e menos interações)"],
    pontosDeProva: [
      "É eficaz contra praticamente todos os tipos de crise epiléptica pelo seu mecanismo múltiplo (canais de sódio, GABA, canais de cálcio tipo T), ao contrário da maioria dos outros anticonvulsivantes",
      "É contraindicado em mulheres em idade fértil salvo ausência de alternativa, pelo alto risco teratogênico e de comprometimento do neurodesenvolvimento",
      "A hepatotoxicidade tem maior risco nos primeiros 6 meses de tratamento, exigindo monitorização hepática rigorosa nesse período",
    ],
    doencasIndicadas: [
      { slug: "epilepsia", nome: "Epilepsia" },
      { slug: "transtorno-afetivo-bipolar", nome: "Transtorno afetivo bipolar" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação múltiplo (canais de sódio, GABA, canais de cálcio) e farmacocinética", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Restrição de uso em mulheres em idade fértil pelo risco teratogênico", fonte: "National Institute for Health and Care Excellence (NICE), Guideline NG217, Epilepsies in Children, Young People and Adults, 2022" },
    ],
  },
  {
    slug: "fenitoina",
    nome: "Fenitoína",
    nomeComercial: ["Hidantal"],
    principioAtivo: "Fenitoína sódica",
    categoria: "Anticonvulsivante (bloqueador de canal de sódio)",
    codigoAtc: "N03AB02",
    tarja: "Tarja preta",
    formaFarmaceutica: "Comprimido, suspensão oral, solução injetável",
    viaAdministracao: "Oral, intravenosa",
    resumo: "Anticonvulsivante clássico bloqueador de canal de sódio, sendo agente de segunda linha padrão no estado de mal epiléptico refratário à primeira linha com benzodiazepínico, com cinética não linear que exige monitorização cuidadosa de nível sérico.",
    indicacoes: [
      "Estado de mal epiléptico, como agente de segunda linha após benzodiazepínico inicial",
      "Epilepsia com crises tônico-clônicas generalizadas e crises focais, como alternativa de manutenção",
    ],
    mecanismoAcao:
      "Bloqueia canais de sódio dependentes de voltagem no estado inativado, de forma uso-dependente, estabilizando a membrana neuronal e limitando disparos repetitivos de alta frequência, mecanismo compartilhado com a carbamazepina.",
    farmacocinetica:
      "Apresenta cinética de eliminação não linear (saturável) dentro da faixa terapêutica usual: pequenos aumentos de dose podem causar aumentos desproporcionais do nível sérico e toxicidade, exigindo ajustes cuidadosos e monitorização de nível sérico. Alta ligação a proteínas plasmáticas e metabolização hepática pelo CYP2C9.",
    posologia: "Estado de mal epiléptico: dose de ataque de 15-20 mg/kg por via intravenosa (velocidade de infusão limitada pelo risco cardiovascular), seguida de manutenção. Manutenção oral: 300-400 mg/dia, guiada por nível sérico.",
    ajusteRenalHepatico: "Requer atenção especial em hipoalbuminemia e insuficiência renal, que aumentam a fração livre (ativa) do fármaco mesmo com nível sérico total normal, exigindo interpretação cuidadosa ou correção do valor medido.",
    gestacaoLactacao: "Associada a risco teratogênico (síndrome fetal do hidantoinato, incluindo fenda labial/palatina e anomalias digitais); usar apenas quando o benefício do controle de crises superar o risco, com suplementação de ácido fólico.",
    contraindicacoes: [
      "Bloqueio atrioventricular de segundo ou terceiro grau",
      "Bradicardia sinusal significativa",
      "Hipersensibilidade a hidantoínas",
    ],
    efeitosColaterais: [
      "Nistagmo, ataxia e sedação (sinais precoces de toxicidade dose-dependente)",
      "Hiperplasia gengival com uso prolongado",
      "Hirsutismo",
      "Hipotensão e arritmia com infusão intravenosa rápida",
      "Síndrome de Stevens-Johnson/necrólise epidérmica tóxica (rara)",
    ],
    interacoes: [
      "Indutor do CYP3A4 e CYP2C9: reduz níveis séricos de contraceptivos hormonais, varfarina e outros substratos dessas enzimas",
      "Fármacos que competem por ligação proteica ou pelo CYP2C9: risco de toxicidade por deslocamento e aumento da fração livre",
    ],
    monitorizacao: [
      "Nível sérico do fármaco, com atenção à cinética não linear e à necessidade de corrigir o valor conforme a albumina sérica",
      "Frequência cardíaca e pressão arterial durante a infusão intravenosa, pelo risco de arritmia e hipotensão com infusão rápida",
      "Exame gengival periódico em uso prolongado",
    ],
    alertas: [
      "A infusão intravenosa deve ser lenta (velocidade máxima limitada), pelo risco de hipotensão grave e arritmia cardíaca (incluindo o chamado 'síndrome do luva púrpura' no local de infusão).",
      "Tem cinética de eliminação não linear (saturável): pequenos aumentos de dose próximos à faixa terapêutica podem causar toxicidade desproporcional, exigindo ajustes cautelosos.",
    ],
    similares: ["Fosfenitoína (pró-droga com infusão intravenosa mais rápida e segura, preferida quando disponível)"],
    pontosDeProva: [
      "Tem cinética de eliminação não linear (saturável) dentro da faixa terapêutica, ao contrário da maioria dos fármacos — pequenos aumentos de dose podem causar toxicidade desproporcional",
      "É o agente de segunda linha padrão no estado de mal epiléptico refratário ao benzodiazepínico inicial",
      "A infusão intravenosa rápida pode causar hipotensão e arritmia, por isso a fosfenitoína (pró-droga) é preferida quando disponível para infusão mais rápida e segura",
    ],
    doencasIndicadas: [
      { slug: "epilepsia", nome: "Epilepsia" },
      { slug: "estado-de-mal-epileptico", nome: "Estado de mal epiléptico" },
      { slug: "convulsoes-neonatais", nome: "Convulsões neonatais" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação bloqueador de canal de sódio e cinética não linear", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Uso como segunda linha no estado de mal epiléptico refratário a benzodiazepínico", fonte: "Glauser T et al., Evidence-Based Guideline: Treatment of Convulsive Status Epilepticus in Children and Adults, American Epilepsy Society, Epilepsy Currents, 2016" },
    ],
  },
  {
    slug: "clonazepam",
    nome: "Clonazepam",
    nomeComercial: ["Rivotril"],
    principioAtivo: "Clonazepam",
    categoria: "Ansiolítico/anticonvulsivante (benzodiazepínico de longa duração)",
    codigoAtc: "N03AE01",
    tarja: "Tarja preta",
    formaFarmaceutica: "Comprimido, comprimido sublingual, solução oral em gotas",
    viaAdministracao: "Oral, sublingual",
    resumo: "Benzodiazepínico de longa duração com dupla indicação em epilepsia (crises mioclônicas e de ausência) e psiquiatria (transtorno do pânico refratário), reservado a tratamento de curto prazo ou casos refratários pelo risco de dependência.",
    indicacoes: [
      "Crises epilépticas mioclônicas e de ausência, como terapia adjuvante",
      "Transtorno do pânico refratário a antidepressivos de primeira linha, como monoterapia inicial ou adjuvante de curto prazo",
      "Ansiedade grave aguda, uso pontual de curto prazo",
    ],
    mecanismoAcao:
      "Potencializa a ação do neurotransmissor inibitório GABA ao se ligar a um sítio alostérico específico no receptor GABA-A, aumentando a frequência de abertura do canal de cloro e a hiperpolarização neuronal; essa potenciação da inibição gabaérgica explica tanto o efeito anticonvulsivante quanto o efeito ansiolítico/sedativo.",
    farmacocinetica:
      "Boa absorção oral e meia-vida longa (cerca de 30-40 horas), permitindo administração em 1-2 tomadas diárias e associada a menor síndrome de abstinência abrupta em comparação a benzodiazepínicos de meia-vida curta. Metabolização hepática.",
    posologia: "Epilepsia: 1,5-20 mg/dia, dividida, com aumento gradual. Transtorno do pânico: 0,25-1 mg, 2 vezes ao dia, com aumento gradual conforme resposta e tolerância.",
    ajusteRenalHepatico: "Requer redução de dose e cautela em insuficiência hepática significativa, dado o metabolismo hepático.",
    gestacaoLactacao: "Uso próximo ao parto associado a risco de síndrome do bebê hipotônico (floppy infant syndrome) e sintomas de abstinência neonatal; evitar quando possível, especialmente no terceiro trimestre.",
    contraindicacoes: [
      "Insuficiência respiratória grave",
      "Síndrome da apneia do sono",
      "Insuficiência hepática grave",
      "Miastenia gravis",
      "Glaucoma de ângulo fechado não tratado",
    ],
    efeitosColaterais: [
      "Sedação e sonolência",
      "Ataxia e tontura",
      "Dependência física e tolerância com uso prolongado",
      "Síndrome de abstinência (incluindo risco de convulsão) com suspensão abrupta após uso prolongado",
    ],
    interacoes: [
      "Álcool e outros depressores do SNC: potencialização da sedação e depressão respiratória",
      "Opioides: risco significativamente aumentado de depressão respiratória grave e óbito quando associados",
    ],
    monitorizacao: [
      "Sinais de sedação excessiva e função respiratória, especialmente em associação com outros depressores do SNC",
      "Sinais de tolerância e uso inadequado em tratamento prolongado",
    ],
    alertas: [
      "A suspensão após uso prolongado deve ser sempre gradual, nunca abrupta, pelo risco de síndrome de abstinência grave, incluindo convulsões.",
      "A associação com opioides aumenta significativamente o risco de depressão respiratória fatal e deve ser evitada sempre que possível.",
    ],
    similares: ["Diazepam (benzodiazepínico de longa duração, já documentado, mais usado agudamente)"],
    pontosDeProva: [
      "Sua meia-vida longa (30-40 horas) é associada a síndrome de abstinência menos abrupta que benzodiazepínicos de meia-vida curta (ex.: alprazolam), sendo por isso preferido no transtorno do pânico refratário",
      "No transtorno do pânico, é reservado a casos refratários a antidepressivos de primeira linha, pelo risco de dependência com uso prolongado",
      "A suspensão após uso prolongado deve ser sempre gradual pelo risco de convulsões por abstinência",
    ],
    doencasIndicadas: [
      { slug: "epilepsia", nome: "Epilepsia" },
      { slug: "transtornos-ansiosos-tag-panico", nome: "Transtorno de ansiedade generalizada e transtorno do pânico" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação gabaérgico e farmacocinética (meia-vida longa)", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Uso no transtorno do pânico refratário", fonte: "American Psychiatric Association, Practice Guideline for the Treatment of Patients with Panic Disorder, 2009" },
    ],
  },
  {
    slug: "levodopa-benserazida-carbidopa",
    nome: "Levodopa + benserazida ou + carbidopa",
    nomeComercial: ["Prolopa", "Sinemet"],
    principioAtivo: "Levodopa + benserazida / Levodopa + carbidopa",
    categoria: "Antiparkinsoniano (precursor dopaminérgico + inibidor da descarboxilase periférica)",
    codigoAtc: "N04BA02",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido, comprimido de liberação controlada",
    viaAdministracao: "Oral",
    resumo: "Combinação mais eficaz disponível para os sintomas motores da doença de Parkinson, associando o precursor dopaminérgico levodopa a um inibidor da descarboxilase periférica que reduz seus efeitos colaterais sistêmicos e aumenta sua chegada ao sistema nervoso central.",
    indicacoes: [
      "Doença de Parkinson, tratamento sintomático motor de primeira linha, especialmente em pacientes mais idosos ou com sintomas mais incapacitantes",
      "Parkinsonismo secundário, quando responsivo a reposição dopaminérgica",
    ],
    mecanismoAcao:
      "A levodopa, precursor metabólico da dopamina capaz de atravessar a barreira hematoencefálica (ao contrário da dopamina em si), é convertida em dopamina pela enzima dopa-descarboxilase nos neurônios dopaminérgicos remanescentes da substância negra, repondo o neurotransmissor deficiente na doença de Parkinson; a associação com benserazida ou carbidopa (inibidores da dopa-descarboxilase que não atravessam a barreira hematoencefálica) bloqueia a conversão periférica prematura da levodopa em dopamina, reduzindo efeitos colaterais periféricos (náusea, hipotensão) e aumentando a fração da dose que chega ao sistema nervoso central.",
    farmacocinetica:
      "Absorção oral competida por aminoácidos da dieta (proteínas), o que pode reduzir sua absorção quando administrada junto a refeições ricas em proteína. Meia-vida curta, o que contribui para as flutuações motoras (fenômenos on-off) que emergem com o uso prolongado.",
    posologia: "Dose inicial baixa (ex.: 100-200 mg/dia de levodopa, dividida), com titulação gradual até a dose mínima eficaz para controle sintomático, fracionada em múltiplas tomadas diárias conforme a evolução da doença.",
    ajusteRenalHepatico: "Não requer ajuste específico na insuficiência renal ou hepática leve a moderada; usar com cautela em disfunção hepática grave.",
    gestacaoLactacao: "Dados de segurança limitados na gestação, dado que a doença de Parkinson é rara nessa faixa etária; uso apenas quando estritamente necessário e sob avaliação especializada.",
    contraindicacoes: [
      "Glaucoma de ângulo fechado não tratado",
      "Uso concomitante ou recente de inibidores da MAO não seletivos",
      "Melanoma maligno ou lesões cutâneas suspeitas não avaliadas (a levodopa pode teoricamente ativar melanoma)",
    ],
    efeitosColaterais: [
      "Náusea e hipotensão ortostática, mais frequentes no início do tratamento",
      "Discinesias e flutuações motoras (fenômenos on-off) com uso prolongado",
      "Alucinações e transtornos do controle de impulsos",
      "Sonolência excessiva diurna",
    ],
    interacoes: [
      "Inibidores da MAO não seletivos: risco de crise hipertensiva, contraindicado",
      "Antipsicóticos típicos e alguns atípicos (antagonistas dopaminérgicos): antagonizam o efeito terapêutico e podem piorar o parkinsonismo",
      "Refeições ricas em proteína: podem reduzir a absorção e a eficácia da dose oral",
    ],
    monitorizacao: [
      "Resposta motora e presença de discinesias/flutuações on-off, guiando ajustes de dose e fracionamento",
      "Sinais de transtornos do controle de impulsos (jogo patológico, hipersexualidade) e alucinações",
    ],
    alertas: [
      "O uso prolongado está associado ao desenvolvimento de discinesias e flutuações motoras (fenômenos on-off), o que motiva a estratégia de iniciar com a menor dose eficaz e retardar o início em pacientes mais jovens quando clinicamente razoável.",
      "A suspensão abrupta pode precipitar uma síndrome semelhante à síndrome neuroléptica maligna, devendo a retirada ser sempre gradual quando indicada.",
    ],
    similares: ["Agonistas dopaminérgicos (pramipexol, ropinirol — menor eficácia motora, mas menor risco de discinesia, preferidos em pacientes mais jovens)"],
    pontosDeProva: [
      "A associação com um inibidor da dopa-descarboxilase periférica (benserazida ou carbidopa) reduz efeitos colaterais sistêmicos e aumenta a fração da dose que chega ao sistema nervoso central",
      "É a terapia sintomática mais eficaz disponível para os sintomas motores da doença de Parkinson, mas seu uso prolongado está associado a discinesias e flutuações motoras",
      "Refeições ricas em proteína podem reduzir sua absorção, por competição de aminoácidos pelo mesmo transportador intestinal",
    ],
    doencasIndicadas: [
      { slug: "doenca-de-parkinson", nome: "Doença de Parkinson" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação precursor dopaminérgico e farmacocinética", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Eficácia nos sintomas motores e manejo de flutuações", fonte: "Fox SH et al., International Parkinson and Movement Disorder Society Evidence-Based Medicine Review: Update on Treatments for the Motor Symptoms of Parkinson's Disease, Movement Disorders, 2018" },
    ],
  },
  {
    slug: "cloridrato-de-amitriptilina",
    nome: "Cloridrato de amitriptilina",
    nomeComercial: ["Amytril", "Tryptanol"],
    principioAtivo: "Cloridrato de amitriptilina",
    categoria: "Antidepressivo tricíclico",
    codigoAtc: "N06AA09",
    tarja: "Tarja preta",
    formaFarmaceutica: "Comprimido",
    viaAdministracao: "Oral",
    resumo: "Antidepressivo tricíclico com amplo uso além da depressão, sendo opção de primeira linha para profilaxia de enxaqueca e dor neuropática crônica em doses mais baixas que as antidepressivas.",
    indicacoes: [
      "Profilaxia de enxaqueca episódica, dose baixa a moderada",
      "Dor neuropática crônica e fibromialgia, dose baixa",
      "Episódios depressivos, especialmente quando há insônia e dor associadas, dose antidepressiva plena",
    ],
    mecanismoAcao:
      "Inibe a recaptação pré-sináptica de serotonina e noradrenalina, aumentando a disponibilidade desses neurotransmissores na fenda sináptica; também bloqueia receptores muscarínicos, histamínicos H1 e alfa-1 adrenérgicos, o que explica seu perfil pronunciado de efeitos colaterais anticolinérgicos, sedativos e hipotensores em comparação a antidepressivos mais modernos.",
    farmacocinetica:
      "Boa absorção oral e metabolização hepática em um metabólito ativo (nortriptilina). Meia-vida longa, permitindo dose única, geralmente à noite, dado o efeito sedativo.",
    posologia: "Profilaxia de enxaqueca/dor neuropática: 10-25 mg por via oral, à noite, com aumento gradual conforme tolerância. Depressão: 75-150 mg/dia, dose mais alta que a usada nas indicações não psiquiátricas.",
    ajusteRenalHepatico: "Usar com cautela e considerar redução de dose em insuficiência hepática significativa, dado o metabolismo hepático.",
    gestacaoLactacao: "Uso na gestação requer avaliação individualizada de risco-benefício; dados não indicam risco teratogênico maior estabelecido, mas o uso próximo ao parto pode causar sintomas de abstinência neonatal transitórios.",
    contraindicacoes: [
      "Infarto agudo do miocárdio recente",
      "Arritmias cardíacas, especialmente distúrbios de condução",
      "Glaucoma de ângulo fechado não tratado",
      "Uso concomitante ou recente de inibidores da MAO",
    ],
    efeitosColaterais: [
      "Efeitos anticolinérgicos (boca seca, constipação, retenção urinária, visão turva)",
      "Sedação e ganho de peso",
      "Hipotensão ortostática",
      "Prolongamento do intervalo QT e risco de arritmia em superdosagem (potencialmente fatal)",
    ],
    interacoes: [
      "Inibidores da MAO: contraindicado, risco de síndrome serotoninérgica grave",
      "Outros fármacos anticolinérgicos: efeitos anticolinérgicos aditivos",
      "Fármacos que prolongam o intervalo QT: risco aumentado de arritmia quando associados",
    ],
    monitorizacao: [
      "Eletrocardiograma basal em pacientes com fatores de risco cardiovascular antes de iniciar em dose antidepressiva plena",
      "Resposta clínica e efeitos anticolinérgicos, especialmente em idosos",
    ],
    alertas: [
      "É particularmente perigosa em superdosagem, pelo risco de arritmia cardíaca fatal (prolongamento do QT e efeito quinidina-símile) — atenção especial ao prescrever para pacientes com risco de suicídio.",
      "Doses baixas usadas para enxaqueca/dor neuropática são muito menores que as doses antidepressivas, não devendo ser confundidas quanto ao objetivo terapêutico.",
    ],
    similares: ["Nortriptilina (metabólito ativo, perfil de efeitos colaterais um pouco mais favorável)"],
    pontosDeProva: [
      "As doses usadas para profilaxia de enxaqueca e dor neuropática são muito mais baixas que as doses antidepressivas plenas",
      "É particularmente perigosa em superdosagem, pelo risco de arritmia cardíaca fatal — relevante ao prescrever para pacientes com risco de suicídio",
      "Seu perfil pronunciado de efeitos anticolinérgicos, histamínicos e alfa-adrenérgicos a diferencia dos antidepressivos mais modernos, com mais efeitos colaterais mas também eficácia estabelecida na dor crônica",
    ],
    doencasIndicadas: [
      { slug: "enxaqueca", nome: "Enxaqueca" },
      { slug: "episodios-depressivos", nome: "Episódios depressivos" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação tricíclico e farmacocinética", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Uso na profilaxia de enxaqueca episódica", fonte: "Silberstein SD et al., Evidence-Based Guideline Update: Pharmacologic Treatment for Episodic Migraine Prevention in Adults, American Academy of Neurology and American Headache Society, Neurology, 2012" },
    ],
  },
  {
    slug: "cloridrato-de-fluoxetina",
    nome: "Cloridrato de fluoxetina",
    nomeComercial: ["Prozac", "Daforin"],
    principioAtivo: "Cloridrato de fluoxetina",
    categoria: "Antidepressivo (inibidor seletivo da recaptação de serotonina)",
    codigoAtc: "N06AB03",
    tarja: "Tarja preta",
    formaFarmaceutica: "Cápsula, comprimido, solução oral",
    viaAdministracao: "Oral",
    resumo: "Inibidor seletivo da recaptação de serotonina (ISRS) de referência, sendo a primeira linha farmacológica para episódios depressivos e diversos transtornos ansiosos, com perfil de segurança mais favorável que os antidepressivos tricíclicos.",
    indicacoes: [
      "Episódios depressivos e transtorno depressivo recorrente, primeira linha farmacológica",
      "Transtornos fóbico-ansiosos e transtorno de ansiedade generalizada/pânico, primeira linha farmacológica em dose geralmente mais alta que a antidepressiva",
      "Transtorno obsessivo-compulsivo, em doses mais altas que as usadas na depressão",
    ],
    mecanismoAcao:
      "Inibe seletivamente o transportador de recaptação de serotonina na fenda sináptica, aumentando a disponibilidade desse neurotransmissor sem o bloqueio significativo de receptores muscarínicos, histamínicos e alfa-adrenérgicos característico dos tricíclicos, o que confere melhor perfil de tolerabilidade e maior segurança em superdosagem.",
    farmacocinetica:
      "Meia-vida muito longa (1-4 dias) e de seu metabólito ativo (norfluoxetina, meia-vida de 7-15 dias), a mais longa entre os ISRS, o que reduz o risco de síndrome de descontinuação abrupta mas prolonga a eliminação em caso de necessidade de troca de antidepressivo (período de washout mais longo antes de iniciar um IMAO, por exemplo).",
    posologia: "Depressão: 20 mg/dia, podendo aumentar até 60-80 mg/dia conforme resposta. TOC/transtornos ansiosos: doses geralmente mais altas (40-80 mg/dia). Resposta antidepressiva plena esperada em 4-6 semanas.",
    ajusteRenalHepatico: "Requer cautela e possível redução de dose em insuficiência hepática significativa, dada a meia-vida já prolongada do fármaco e de seu metabólito ativo.",
    gestacaoLactacao: "Um dos ISRS com maior volume de dados de segurança na gestação; uso próximo ao parto associado a síndrome de adaptação neonatal transitória (irritabilidade, dificuldade de sucção). Compatível com a lactação, com passagem limitada para o leite.",
    contraindicacoes: [
      "Uso concomitante ou recente (menos de 14 dias) de inibidores da MAO",
      "Hipersensibilidade à fluoxetina",
    ],
    efeitosColaterais: [
      "Náusea e desconforto gastrointestinal, mais comuns no início do tratamento",
      "Disfunção sexual (redução da libido, anorgasmia)",
      "Insônia e ansiedade inicial (ativação paradoxal)",
      "Síndrome serotoninérgica em associação com outros serotoninérgicos (rara, mas grave)",
    ],
    interacoes: [
      "Inibidores da MAO: contraindicado, risco de síndrome serotoninérgica grave, exigindo período de washout de pelo menos 5 semanas após suspender a fluoxetina antes de iniciar um IMAO (dada a meia-vida longa)",
      "Inibidor do CYP2D6: aumenta níveis séricos de diversos fármacos metabolizados por essa enzima (ex.: tamoxifeno, reduzindo sua eficácia)",
      "Outros serotoninérgicos (triptanos, tramadol, outros antidepressivos): risco aumentado de síndrome serotoninérgica",
    ],
    monitorizacao: [
      "Resposta clínica ao longo de 4-6 semanas antes de considerar troca por falha terapêutica",
      "Risco de ideação suicida, especialmente em crianças, adolescentes e adultos jovens nas primeiras semanas de tratamento",
    ],
    alertas: [
      "Devido à meia-vida muito longa (incluindo o metabólito ativo), o período de washout necessário antes de iniciar um inibidor da MAO é de pelo menos 5 semanas — muito mais longo que para outros ISRS.",
      "Como toda a classe, carrega alerta de aumento do risco de ideação e comportamento suicida em crianças, adolescentes e adultos jovens no início do tratamento.",
    ],
    similares: ["Sertralina (ISRS alternativo, não constante na RENAME 2024)", "Escitalopram (ISRS com menor potencial de interação medicamentosa)"],
    pontosDeProva: [
      "Tem a meia-vida mais longa entre os ISRS (incluindo seu metabólito ativo, norfluoxetina), exigindo um período de washout mais longo antes de iniciar um IMAO",
      "É usada em doses mais altas para TOC e transtornos ansiosos do que para depressão",
      "Seu perfil de segurança em superdosagem é muito mais favorável que o dos antidepressivos tricíclicos, pela ausência de bloqueio significativo de receptores muscarínicos e alfa-adrenérgicos",
    ],
    doencasIndicadas: [
      { slug: "episodios-depressivos", nome: "Episódios depressivos" },
      { slug: "transtorno-depressivo-recorrente", nome: "Transtorno depressivo recorrente" },
      { slug: "transtornos-fobico-ansiosos", nome: "Transtornos fóbico-ansiosos" },
      { slug: "transtornos-ansiosos-tag-panico", nome: "Transtorno de ansiedade generalizada e transtorno do pânico" },
      { slug: "transtorno-obsessivo-compulsivo", nome: "Transtorno obsessivo-compulsivo" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação seletivo e farmacocinética (meia-vida longa)", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "ISRS como primeira linha farmacológica na depressão", fonte: "American Psychiatric Association, Practice Guideline for the Treatment of Patients With Major Depressive Disorder, Third Edition, 2010" },
    ],
  },
  {
    slug: "haloperidol",
    nome: "Haloperidol",
    nomeComercial: ["Haldol"],
    principioAtivo: "Haloperidol",
    categoria: "Antipsicótico típico (de primeira geração)",
    codigoAtc: "N05AD01",
    tarja: "Tarja preta",
    formaFarmaceutica: "Comprimido, solução oral em gotas, solução injetável",
    viaAdministracao: "Oral, intramuscular, intravenosa",
    resumo: "Antipsicótico típico de alta potência, referência histórica da classe, com uso atual concentrado no controle agudo de agitação psicomotora grave (psicose, mania, delirium) mais do que como primeira escolha de manutenção.",
    indicacoes: [
      "Agitação psicomotora aguda grave (psicose, mania, delirium), por via intramuscular ou intravenosa",
      "Esquizofrenia, como alternativa de manutenção, especialmente quando o custo ou a disponibilidade de apresentação injetável de depósito são fatores relevantes",
      "Controle sintomático de náusea/vômitos refratários, em doses baixas (uso off-label pouco frequente)",
    ],
    mecanismoAcao:
      "Antagoniza com alta afinidade os receptores dopaminérgicos D2, principalmente na via mesolímbica, reduzindo a hiperatividade dopaminérgica associada aos sintomas positivos da psicose; sua alta potência antidopaminérgica e a menor atividade sobre outros receptores (histamínicos, muscarínicos) em comparação a antipsicóticos de baixa potência explicam seu perfil de efeitos colaterais predominantemente extrapiramidais.",
    farmacocinetica:
      "Boa absorção oral e biodisponibilidade intramuscular mais previsível para uso agudo. Metabolização hepática extensa, com eliminação biliar e renal combinadas. Existe formulação de depósito de longa duração (decanoato) para manutenção com menor frequência de administração.",
    posologia: "Agitação aguda: 2-5 mg por via intramuscular, repetido conforme necessário. Manutenção oral: 1-15 mg/dia, dividida, guiada por resposta clínica e tolerabilidade.",
    ajusteRenalHepatico: "Requer cautela e possível redução de dose em insuficiência hepática significativa, dado o metabolismo hepático extenso.",
    gestacaoLactacao: "Uso na gestação reservado a quando estritamente necessário, com risco de sintomas extrapiramidais e de abstinência transitórios no recém-nascido quando usado próximo ao parto.",
    contraindicacoes: [
      "Doença de Parkinson e outras condições com parkinsonismo preexistente (pode agravar significativamente)",
      "Depressão grave do sistema nervoso central",
      "Prolongamento conhecido do intervalo QT",
    ],
    efeitosColaterais: [
      "Sintomas extrapiramidais (distonia aguda, acatisia, parkinsonismo induzido, discinesia tardia com uso prolongado), mais frequentes que com antipsicóticos atípicos",
      "Prolongamento do intervalo QT, com risco de arritmia grave (torsades de pointes)",
      "Síndrome neuroléptica maligna (rara, mas potencialmente fatal)",
      "Hiperprolactinemia",
    ],
    interacoes: [
      "Fármacos que prolongam o intervalo QT: risco aumentado de arritmia grave quando associados",
      "Levodopa e agonistas dopaminérgicos: antagonismo mútuo, piora do parkinsonismo ou do efeito antipsicótico",
    ],
    monitorizacao: [
      "Sinais extrapiramidais (rigidez, tremor, acatisia) e discinesia tardia em uso prolongado",
      "Eletrocardiograma em pacientes com fatores de risco cardiovascular ou uso de doses altas intravenosas",
      "Sinais precoces de síndrome neuroléptica maligna (rigidez, hipertermia, instabilidade autonômica)",
    ],
    alertas: [
      "Tem um dos maiores riscos de sintomas extrapiramidais e discinesia tardia entre os antipsicóticos, dada sua alta potência e seletividade pelo receptor D2.",
      "A síndrome neuroléptica maligna, embora rara, é uma emergência potencialmente fatal que exige reconhecimento e suspensão imediata do fármaco.",
    ],
    similares: ["Risperidona (antipsicótico atípico, menor risco extrapiramidal em doses habituais)", "Clorpromazina (antipsicótico típico de baixa potência, mais sedativo e menos extrapiramidal)"],
    pontosDeProva: [
      "A American Psychiatric Association não recomenda preferência entre antipsicóticos de primeira e segunda geração — a escolha deve ser guiada pelo perfil de efeitos colaterais, não pela geração do fármaco",
      "Tem um dos maiores riscos de sintomas extrapiramidais entre os antipsicóticos, pela alta potência e seletividade pelo receptor D2",
      "É amplamente usado por via intramuscular/intravenosa no controle agudo de agitação psicomotora grave, independentemente da causa (psicose, mania, delirium)",
    ],
    doencasIndicadas: [
      { slug: "esquizofrenia", nome: "Esquizofrenia" },
      { slug: "transtorno-afetivo-bipolar", nome: "Transtorno afetivo bipolar" },
      { slug: "delirium-nao-induzido-alcool", nome: "Delirium não induzido pelo álcool" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação antagonista D2 de alta potência e farmacocinética", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Ausência de preferência entre gerações de antipsicóticos, guiada pelo perfil de efeitos colaterais", fonte: "American Psychiatric Association, Practice Guideline for the Treatment of Patients With Schizophrenia, American Journal of Psychiatry, 2020" },
    ],
  },
  {
    slug: "risperidona",
    nome: "Risperidona",
    nomeComercial: ["Risperdal"],
    principioAtivo: "Risperidona",
    categoria: "Antipsicótico atípico (de segunda geração)",
    codigoAtc: "N05AX08",
    tarja: "Tarja preta",
    formaFarmaceutica: "Comprimido, solução oral, solução injetável de depósito",
    viaAdministracao: "Oral, intramuscular",
    resumo: "Antipsicótico atípico com eficácia comparável aos antipsicóticos típicos para sintomas positivos, mas com menor risco de efeitos extrapiramidais em doses habituais, sendo opção de primeira linha para esquizofrenia e adjuvante no manejo agudo de mania.",
    indicacoes: [
      "Esquizofrenia, tratamento agudo e de manutenção",
      "Episódio maníaco no transtorno afetivo bipolar, como adjuvante ao estabilizador de humor",
      "Irritabilidade associada ao transtorno do espectro autista em crianças (uso pediátrico específico)",
    ],
    mecanismoAcao:
      "Antagoniza tanto receptores dopaminérgicos D2 quanto receptores serotoninérgicos 5-HT2A, o antagonismo serotoninérgico modulando a liberação de dopamina em vias nigroestriatais e reduzindo, em doses habituais, o risco de sintomas extrapiramidais em comparação aos antipsicóticos típicos que bloqueiam D2 isoladamente; em doses mais altas, esse efeito protetor diminui e o perfil extrapiramidal se aproxima do haloperidol.",
    farmacocinetica:
      "Boa absorção oral e metabolização hepática pelo CYP2D6 em um metabólito ativo (9-hidroxi-risperidona/paliperidona), com atividade farmacológica equivalente. Existe formulação injetável de depósito de longa duração para manutenção com menor frequência de administração.",
    posologia: "Esquizofrenia: 2-6 mg/dia, dividida ou em dose única, com início em dose baixa e titulação gradual. Mania aguda: 2-6 mg/dia, associada ao estabilizador de humor.",
    ajusteRenalHepatico: "Requer redução da dose inicial e titulação mais lenta em insuficiência renal ou hepática significativas, dado o risco aumentado de acúmulo do metabólito ativo.",
    gestacaoLactacao: "Uso na gestação reservado a quando estritamente necessário, com risco de sintomas extrapiramidais e de abstinência transitórios no recém-nascido quando usado próximo ao parto.",
    contraindicacoes: [
      "Hipersensibilidade à risperidona ou à paliperidona",
    ],
    efeitosColaterais: [
      "Ganho de peso e alterações metabólicas (dislipidemia, resistência à insulina), embora menos pronunciadas que com olanzapina",
      "Hiperprolactinemia, mais pronunciada que com outros antipsicóticos atípicos",
      "Sintomas extrapiramidais, dose-dependentes (menores em doses baixas, aproximando-se do perfil típico em doses altas)",
      "Sedação e hipotensão ortostática",
    ],
    interacoes: [
      "Inibidores do CYP2D6: podem aumentar os níveis séricos da risperidona",
      "Outros depressores do SNC: potencialização da sedação",
    ],
    monitorizacao: [
      "Peso, perfil lipídico e glicemia periodicamente, pelo risco de síndrome metabólica",
      "Sinais extrapiramidais, especialmente em doses mais altas",
      "Sintomas de hiperprolactinemia (galactorreia, disfunção sexual, irregularidade menstrual)",
    ],
    alertas: [
      "O efeito protetor contra sintomas extrapiramidais em relação aos antipsicóticos típicos é dose-dependente e se perde em doses mais altas, quando o perfil se aproxima do haloperidol.",
      "Tem o maior risco de hiperprolactinemia entre os antipsicóticos atípicos mais usados, relevante para a escolha em pacientes com essa sensibilidade específica.",
    ],
    similares: ["Paliperidona (metabólito ativo da risperidona, comercializado como fármaco próprio)", "Olanzapina (maior risco metabólico, menor risco de hiperprolactinemia)"],
    pontosDeProva: [
      "O antagonismo serotoninérgico 5-HT2A somado ao antagonismo D2 reduz o risco extrapiramidal em doses habituais, mas esse efeito protetor se perde em doses mais altas",
      "Tem o maior risco de hiperprolactinemia entre os antipsicóticos atípicos mais usados",
      "A American Psychiatric Association não recomenda preferência entre antipsicóticos de primeira e segunda geração — a escolha deve ser guiada pelo perfil de efeitos colaterais",
    ],
    doencasIndicadas: [
      { slug: "esquizofrenia", nome: "Esquizofrenia" },
      { slug: "transtorno-afetivo-bipolar", nome: "Transtorno afetivo bipolar" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação antagonista D2/5-HT2A e farmacocinética", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Eficácia e perfil de efeitos colaterais na esquizofrenia", fonte: "American Psychiatric Association, Practice Guideline for the Treatment of Patients With Schizophrenia, American Journal of Psychiatry, 2020" },
    ],
  },
  {
    slug: "carbonato-de-litio",
    nome: "Carbonato de lítio",
    nomeComercial: ["Carbolitium"],
    principioAtivo: "Carbonato de lítio",
    categoria: "Estabilizador de humor",
    codigoAtc: "N05AN01",
    tarja: "Tarja preta",
    formaFarmaceutica: "Comprimido, comprimido de liberação controlada",
    viaAdministracao: "Oral",
    resumo: "Estabilizador de humor de referência histórica para o transtorno afetivo bipolar, com eficácia comprovada na prevenção de recaídas maníacas e depressivas e efeito antissuicida único entre os estabilizadores de humor, mas com margem terapêutica estreita que exige monitorização rigorosa.",
    indicacoes: [
      "Transtorno afetivo bipolar, tratamento agudo do episódio maníaco e manutenção profilática de longo prazo",
      "Potencialização de antidepressivo em depressão resistente ao tratamento (uso adjuvante)",
    ],
    mecanismoAcao:
      "Mecanismo não completamente elucidado: interfere em múltiplas vias de sinalização intracelular, incluindo a inibição da enzima glicogênio sintase quinase-3 (GSK-3) e a modulação do sistema de segundo mensageiro do inositol fosfato, efeitos que parecem contribuir para a estabilização da excitabilidade neuronal e para propriedades neuroprotetoras observadas com o uso crônico.",
    farmacocinetica:
      "Eliminação exclusivamente renal, sem metabolização hepática, o que faz com que qualquer condição que altere a filtração glomerular ou o balanço de sódio (desidratação, uso de diuréticos, dieta hipossódica) altere diretamente seu nível sérico. Margem terapêutica estreita entre a dose eficaz e a dose tóxica.",
    posologia: "Início: 300 mg, 2-3 vezes ao dia, com ajuste guiado por nível sérico até atingir a faixa terapêutica (geralmente 0,6-1,2 mEq/L), verificada 12 horas após a última dose.",
    ajusteRenalHepatico: "Contraindicado ou requer ajuste rigoroso com monitorização intensiva em insuficiência renal significativa, dada a eliminação exclusivamente renal e a margem terapêutica estreita.",
    gestacaoLactacao: "Associado a risco aumentado de anomalia de Ebstein (malformação cardíaca) quando usado no primeiro trimestre, embora o risco absoluto seja menor do que se pensava anteriormente; a decisão de manutenção deve pesar o risco de recaída grave contra o risco teratogênico. Contraindicado na lactação pela concentração significativa no leite materno.",
    contraindicacoes: [
      "Insuficiência renal significativa",
      "Depleção significativa de sódio ou uso de dieta hipossódica rigorosa",
      "Lactação",
    ],
    efeitosColaterais: [
      "Tremor fino de mãos",
      "Poliúria e polidipsia (diabetes insípido nefrogênico induzido)",
      "Hipotireoidismo com uso prolongado",
      "Ganho de peso",
      "Toxicidade aguda (níveis séricos elevados): tremor grosseiro, ataxia, confusão, convulsão, arritmia — emergência médica",
    ],
    interacoes: [
      "Diuréticos tiazídicos e inibidores da ECA/BRA: reduzem a depuração renal do lítio, aumentando significativamente seu nível sérico e o risco de toxicidade",
      "Anti-inflamatórios não esteroidais: reduzem a depuração renal do lítio por mecanismo semelhante",
      "Desidratação e dieta hipossódica: aumentam o risco de toxicidade por redução da depuração renal",
    ],
    monitorizacao: [
      "Nível sérico do lítio periodicamente, sempre coletado 12 horas após a última dose, com maior frequência no início do tratamento e após qualquer ajuste de dose",
      "Função renal e função tireoidiana periodicamente durante todo o tratamento de manutenção",
      "Sinais precoces de toxicidade (tremor grosseiro, confusão, ataxia), que exigem suspensão imediata e dosagem urgente do nível sérico",
    ],
    alertas: [
      "Tem margem terapêutica estreita entre a dose eficaz e a dose tóxica, exigindo monitorização rigorosa e regular do nível sérico durante todo o tratamento.",
      "É o único estabilizador de humor com efeito antissuicida comprovado de forma consistente, relevante na escolha em pacientes bipolares com risco de suicídio.",
      "Diuréticos, inibidores da ECA/BRA, anti-inflamatórios não esteroidais e desidratação podem precipitar toxicidade por redução da depuração renal — atenção redobrada ao prescrever esses fármacos concomitantemente.",
    ],
    similares: ["Ácido valproico (estabilizador de humor alternativo, sem o efeito antissuicida específico do lítio)"],
    pontosDeProva: [
      "É o único estabilizador de humor com efeito antissuicida comprovado de forma consistente",
      "Sua eliminação é exclusivamente renal, sem metabolização hepática, tornando seu nível sérico sensível a qualquer alteração da função renal ou do balanço de sódio",
      "Diuréticos tiazídicos, inibidores da ECA/BRA e AINEs reduzem sua depuração renal e podem precipitar toxicidade — interação clinicamente crítica e frequentemente subestimada",
    ],
    doencasIndicadas: [
      { slug: "transtorno-afetivo-bipolar", nome: "Transtorno afetivo bipolar" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação e farmacocinética (eliminação renal, margem terapêutica estreita)", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Eficácia na prevenção de recaídas e monitorização de nível sérico", fonte: "National Institute for Health and Care Excellence (NICE), Guideline CG185, Bipolar Disorder: Assessment and Management, 2014" },
    ],
  },
  {
    slug: "cloridrato-de-clorpromazina",
    nome: "Cloridrato de clorpromazina",
    nomeComercial: ["Amplictil"],
    principioAtivo: "Cloridrato de clorpromazina",
    categoria: "Antipsicótico típico (de baixa potência)",
    codigoAtc: "N05AA01",
    tarja: "Tarja preta",
    formaFarmaceutica: "Comprimido, solução oral em gotas, solução injetável",
    viaAdministracao: "Oral, intramuscular",
    resumo: "Antipsicótico típico de baixa potência, o primeiro antipsicótico desenvolvido, com efeito sedativo pronunciado e menor risco extrapiramidal que os antipsicóticos de alta potência, à custa de maiores efeitos anticolinérgicos e hipotensores.",
    indicacoes: [
      "Esquizofrenia e outros transtornos psicóticos, especialmente quando a sedação é clinicamente desejável",
      "Agitação psicomotora aguda, como alternativa ao haloperidol quando a sedação é priorizada",
      "Soluço intratável e náusea/vômitos refratários (uso off-label)",
    ],
    mecanismoAcao:
      "Antagoniza receptores dopaminérgicos D2 com potência menor que o haloperidol, mas com bloqueio significativo adicional de receptores muscarínicos, histamínicos H1 e alfa-1 adrenérgicos, o que explica seu efeito sedativo pronunciado e seu perfil de efeitos colaterais anticolinérgicos e hipotensores mais proeminente, em troca de um risco extrapiramidal comparativamente menor que os antipsicóticos de alta potência.",
    farmacocinetica:
      "Boa absorção oral e metabolização hepática extensa, com múltiplos metabólitos, alguns ativos. Boa penetração no sistema nervoso central.",
    posologia: "Esquizofrenia/psicose: 75-300 mg/dia, dividida, com ajuste conforme resposta e tolerabilidade. Agitação aguda: 25-50 mg por via intramuscular.",
    ajusteRenalHepatico: "Requer cautela e possível redução de dose em insuficiência hepática significativa, dado o metabolismo hepático extenso.",
    gestacaoLactacao: "Uso na gestação reservado a quando estritamente necessário; dados de segurança mais limitados que os antipsicóticos mais modernos.",
    contraindicacoes: [
      "Depressão grave do sistema nervoso central",
      "Glaucoma de ângulo fechado não tratado",
      "Discrasias sanguíneas",
    ],
    efeitosColaterais: [
      "Sedação pronunciada",
      "Efeitos anticolinérgicos (boca seca, constipação, retenção urinária, visão turva)",
      "Hipotensão ortostática, mais pronunciada que com antipsicóticos de alta potência",
      "Fotossensibilidade cutânea e pigmentação cutânea/ocular com uso prolongado",
      "Sintomas extrapiramidais, menos frequentes que com haloperidol mas ainda presentes",
    ],
    interacoes: [
      "Outros depressores do SNC: potencialização da sedação",
      "Outros fármacos anticolinérgicos: efeitos anticolinérgicos aditivos",
      "Fármacos que prolongam o intervalo QT: risco aumentado de arritmia quando associados",
    ],
    monitorizacao: [
      "Pressão arterial, especialmente ortostática, no início do tratamento e após ajustes de dose",
      "Sinais extrapiramidais em uso prolongado",
      "Orientação sobre fotoproteção durante o uso",
    ],
    alertas: [
      "A hipotensão ortostática é mais pronunciada que com antipsicóticos de alta potência, exigindo atenção especial em idosos e no início do tratamento.",
    ],
    similares: ["Haloperidol (antipsicótico típico de alta potência, menos sedativo, mais extrapiramidal)"],
    pontosDeProva: [
      "Foi o primeiro antipsicótico desenvolvido, marco histórico no tratamento farmacológico da psicose",
      "Seu perfil de baixa potência antidopaminérgica com bloqueio adicional significativo de outros receptores explica a troca entre menor risco extrapiramidal e maior sedação/efeitos anticolinérgicos/hipotensão em comparação ao haloperidol",
      "Causa fotossensibilidade e pigmentação cutânea/ocular com uso prolongado, efeito colateral característico da classe de baixa potência",
    ],
    doencasIndicadas: [
      { slug: "esquizofrenia", nome: "Esquizofrenia" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação antagonista D2 de baixa potência e farmacocinética", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Ausência de preferência entre gerações de antipsicóticos, guiada pelo perfil de efeitos colaterais", fonte: "American Psychiatric Association, Practice Guideline for the Treatment of Patients With Schizophrenia, American Journal of Psychiatry, 2020" },
    ],
  },
  {
    slug: "olanzapina",
    nome: "Olanzapina",
    nomeComercial: ["Zyprexa"],
    principioAtivo: "Olanzapina",
    categoria: "Antipsicótico atípico (de segunda geração)",
    codigoAtc: "N05AH03",
    tarja: "Tarja preta",
    formaFarmaceutica: "Comprimido, comprimido orodispersível, solução injetável",
    viaAdministracao: "Oral, intramuscular",
    resumo: "Antipsicótico atípico de amplo uso em esquizofrenia e transtorno afetivo bipolar, com baixo risco extrapiramidal, mas com o maior risco de ganho de peso e alterações metabólicas entre os antipsicóticos atípicos comuns.",
    indicacoes: [
      "Esquizofrenia, tratamento agudo e de manutenção",
      "Episódio maníaco no transtorno afetivo bipolar, monoterapia ou associado a estabilizador de humor",
      "Manutenção profilática no transtorno afetivo bipolar",
    ],
    mecanismoAcao:
      "Antagoniza múltiplos receptores, incluindo dopaminérgicos D2, serotoninérgicos 5-HT2A, histamínicos H1, muscarínicos e alfa-1 adrenérgicos; o antagonismo serotoninérgico-dopaminérgico combinado confere baixo risco extrapiramidal, enquanto o bloqueio histamínico e muscarínico pronunciado contribui para os efeitos sedativos e, especialmente, para o ganho de peso e as alterações metabólicas características do fármaco.",
    farmacocinetica:
      "Boa absorção oral e metabolização hepática extensa, principalmente pelo CYP1A2 (relevante para interação com o tabagismo, que induz essa enzima e reduz o nível sérico do fármaco).",
    posologia: "Esquizofrenia: 10-20 mg/dia, dose única, geralmente à noite pela sedação. Mania aguda: 10-15 mg/dia, podendo ser associada a estabilizador de humor.",
    ajusteRenalHepatico: "Requer cautela e possível redução de dose em insuficiência hepática significativa, dado o metabolismo hepático extenso.",
    gestacaoLactacao: "Uso na gestação reservado a quando estritamente necessário, com monitorização adicional do ganho de peso materno e da glicemia, dado o perfil metabólico do fármaco.",
    contraindicacoes: [
      "Hipersensibilidade à olanzapina",
      "Glaucoma de ângulo fechado não tratado (pelo efeito anticolinérgico)",
    ],
    efeitosColaterais: [
      "Ganho de peso significativo, o maior entre os antipsicóticos atípicos comuns",
      "Dislipidemia e resistência à insulina/diabetes de início recente",
      "Sedação",
      "Efeitos anticolinérgicos leves a moderados",
    ],
    interacoes: [
      "Tabagismo: induz o CYP1A2, reduzindo significativamente o nível sérico da olanzapina — fumantes podem precisar de doses mais altas",
      "Outros depressores do SNC: potencialização da sedação",
    ],
    monitorizacao: [
      "Peso, perímetro abdominal, perfil lipídico e glicemia periodicamente, dado o alto risco de síndrome metabólica",
      "Sinais de diabetes de início recente durante todo o tratamento",
    ],
    alertas: [
      "Tem o maior risco de ganho de peso e alterações metabólicas (dislipidemia, diabetes) entre os antipsicóticos atípicos de uso comum, exigindo monitorização metabólica proativa e regular durante todo o tratamento.",
    ],
    similares: ["Risperidona (menor risco metabólico, maior risco de hiperprolactinemia)", "Quetiapina (perfil metabólico intermediário)"],
    pontosDeProva: [
      "Tem o maior risco de ganho de peso e síndrome metabólica entre os antipsicóticos atípicos de uso comum, exigindo monitorização proativa",
      "O tabagismo induz o CYP1A2 e reduz significativamente seu nível sérico — interação relevante e frequentemente esquecida na prática clínica",
      "É usada tanto na esquizofrenia quanto no episódio maníaco e na manutenção do transtorno afetivo bipolar",
    ],
    doencasIndicadas: [
      { slug: "esquizofrenia", nome: "Esquizofrenia" },
      { slug: "transtorno-afetivo-bipolar", nome: "Transtorno afetivo bipolar" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação antagonista multirreceptor e farmacocinética (CYP1A2)", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Perfil de risco metabólico e monitorização recomendada", fonte: "American Psychiatric Association, Practice Guideline for the Treatment of Patients With Schizophrenia, American Journal of Psychiatry, 2020" },
    ],
  },
  {
    slug: "clobazam",
    nome: "Clobazam",
    nomeComercial: ["Frisium"],
    principioAtivo: "Clobazam",
    categoria: "Anticonvulsivante/ansiolítico (benzodiazepínico 1,5-difuncionalizado)",
    codigoAtc: "N05BA09",
    tarja: "Tarja preta",
    formaFarmaceutica: "Comprimido",
    viaAdministracao: "Oral",
    resumo: "Benzodiazepínico de estrutura química distinta com menor efeito sedativo relativo à potência anticonvulsivante, usado principalmente como terapia adjuvante em epilepsias refratárias, incluindo síndromes epilépticas graves da infância.",
    indicacoes: [
      "Epilepsia refratária, terapia adjuvante, incluindo síndrome de Lennox-Gastaut",
      "Ansiedade grave, uso de curto prazo",
    ],
    mecanismoAcao:
      "Potencializa a ação do neurotransmissor inibitório GABA ao se ligar a um sítio alostérico no receptor GABA-A, aumentando a frequência de abertura do canal de cloro; sua estrutura química 1,5-difuncionalizada (diferente da maioria dos benzodiazepínicos, que são 1,4-difuncionalizados) é associada a um perfil relativamente menos sedativo em relação à potência anticonvulsivante, embora o mecanismo exato dessa diferença não seja completamente elucidado.",
    farmacocinetica:
      "Boa absorção oral e metabolização hepática em um metabólito ativo (N-desmetilclobazam), com meia-vida ainda mais longa que a do próprio clobazam, contribuindo para o efeito terapêutico sustentado.",
    posologia: "Epilepsia refratária (adjuvante): dose inicial baixa, com titulação gradual até a dose de manutenção, guiada por resposta clínica e tolerabilidade.",
    ajusteRenalHepatico: "Requer redução de dose e titulação mais lenta em insuficiência hepática significativa, dado o metabolismo hepático em metabólito ativo.",
    gestacaoLactacao: "Uso próximo ao parto associado a risco de síndrome do bebê hipotônico e sintomas de abstinência neonatal; evitar quando possível, especialmente no terceiro trimestre.",
    contraindicacoes: [
      "Insuficiência respiratória grave",
      "Miastenia gravis",
      "Insuficiência hepática grave",
    ],
    efeitosColaterais: [
      "Sedação, embora menos pronunciada que com outros benzodiazepínicos em doses anticonvulsivantes equivalentes",
      "Ataxia e tontura",
      "Dependência física com uso prolongado",
      "Reações cutâneas graves (raras)",
    ],
    interacoes: [
      "Álcool e outros depressores do SNC: potencialização da sedação e depressão respiratória",
      "Inibidores do CYP2C19: podem aumentar o nível sérico do metabólito ativo",
    ],
    monitorizacao: [
      "Resposta clínica (frequência de crises) e sinais de sedação excessiva",
      "Sinais de tolerância e dependência em uso prolongado",
    ],
    alertas: [
      "A suspensão após uso prolongado deve ser sempre gradual, nunca abrupta, pelo risco de síndrome de abstinência, incluindo convulsões.",
    ],
    similares: ["Clonazepam (benzodiazepínico convencional 1,4-difuncionalizado, mais sedativo em doses anticonvulsivantes equivalentes)"],
    pontosDeProva: [
      "Sua estrutura química 1,5-difuncionalizada (diferente da maioria dos benzodiazepínicos) confere um perfil relativamente menos sedativo em relação à potência anticonvulsivante",
      "É usado principalmente como terapia adjuvante em epilepsias refratárias, incluindo síndromes graves da infância como Lennox-Gastaut",
      "Seu metabólito ativo (N-desmetilclobazam) tem meia-vida ainda mais longa que o próprio fármaco, contribuindo para o efeito sustentado",
    ],
    doencasIndicadas: [
      { slug: "epilepsia", nome: "Epilepsia" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação gabaérgico e farmacocinética (metabólito ativo)", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Uso como terapia adjuvante em epilepsia refratária", fonte: "National Institute for Health and Care Excellence (NICE), Guideline NG217, Epilepsies in Children, Young People and Adults, 2022" },
    ],
  },
  {
    slug: "alopurinol",
    nome: "Alopurinol",
    nomeComercial: ["Zyloric"],
    principioAtivo: "Alopurinol",
    categoria: "Inibidor da xantina oxidase (hipouricemiante)",
    codigoAtc: "M04AA01",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido",
    viaAdministracao: "Oral",
    resumo: "Inibidor da xantina oxidase de primeira linha para terapia hipouricemiante de longo prazo na gota, reduzindo a produção de ácido úrico e prevenindo novas crises e o acúmulo de tofos, mas nunca iniciado durante uma crise aguda.",
    indicacoes: [
      "Gota, terapia hipouricemiante de manutenção para prevenção de novas crises e de tofos",
      "Hiperuricemia secundária à síndrome de lise tumoral, profilaxia",
      "Nefrolitíase por ácido úrico recorrente",
    ],
    mecanismoAcao:
      "Inibe a enzima xantina oxidase, responsável pela conversão de hipoxantina em xantina e desta em ácido úrico na via de degradação das purinas; a redução da produção de ácido úrico diminui progressivamente os níveis séricos de urato, permitindo a dissolução de cristais de urato monossódico já depositados nas articulações e tecidos moles ao longo do tempo.",
    farmacocinetica:
      "Boa absorção oral e metabolização hepática em um metabólito ativo (oxipurinol), de meia-vida muito mais longa que o próprio alopurinol, o que permite dose única diária apesar da meia-vida curta do fármaco original. Eliminação renal do oxipurinol, exigindo ajuste de dose na insuficiência renal.",
    posologia: "Início: 100 mg/dia (dose ainda menor em disfunção renal), com aumento gradual guiado pelo nível sérico de ácido úrico (meta: menor que 6 mg/dL) até a dose de manutenção eficaz, que pode superar 300 mg/dia em alguns pacientes.",
    ajusteRenalHepatico: "Requer dose inicial reduzida e titulação mais lenta na insuficiência renal, dada a eliminação renal do metabólito ativo (oxipurinol) e o risco aumentado de reações de hipersensibilidade grave nessa população.",
    gestacaoLactacao: "Dados de segurança limitados na gestação; usar apenas quando o benefício justificar claramente o uso, sob avaliação especializada.",
    contraindicacoes: [
      "Hipersensibilidade conhecida ao alopurinol",
      "Início durante uma crise aguda de gota (pode prolongar ou intensificar a crise)",
    ],
    efeitosColaterais: [
      "Exantema cutâneo leve (mais comum)",
      "Síndrome de hipersensibilidade ao alopurinol (reação cutânea grave, incluindo síndrome de Stevens-Johnson/necrólise epidérmica tóxica), com risco muito aumentado em portadores do alelo HLA-B*5801",
      "Elevação de transaminases hepáticas",
      "Precipitação de crise aguda de gota no início do tratamento, pela mobilização de cristais durante a queda do urato sérico",
    ],
    interacoes: [
      "Azatioprina/mercaptopurina: inibe seu metabolismo pela xantina oxidase, exigindo redução significativa da dose desses fármacos quando associados (risco de mielotoxicidade grave se não ajustado)",
      "Anticoagulantes orais: pode potencializar o efeito anticoagulante",
    ],
    monitorizacao: [
      "Nível sérico de ácido úrico periodicamente, com meta terapêutica abaixo de 6 mg/dL",
      "Função hepática e renal periodicamente",
      "Rastreamento do alelo HLA-B*5801 antes de iniciar em populações de maior risco (ex.: ascendência han chinesa, coreana, tailandesa), quando disponível",
    ],
    alertas: [
      "Nunca deve ser iniciado durante uma crise aguda de gota — o início ou ajuste de dose deve aguardar a resolução completa da crise, pelo risco de prolongá-la ou intensificá-la.",
      "Antes de iniciar em populações de maior risco genético, recomenda-se rastrear o alelo HLA-B*5801 pelo risco muito aumentado de síndrome de hipersensibilidade grave ao alopurinol.",
      "A dose de azatioprina/mercaptopurina deve ser significativamente reduzida quando associada ao alopurinol, pelo risco de mielotoxicidade grave por inibição do metabolismo desses fármacos.",
    ],
    similares: ["Febuxostate (inibidor da xantina oxidase alternativo, não constante na RENAME 2024)"],
    pontosDeProva: [
      "Nunca deve ser iniciado durante uma crise aguda de gota, apenas após sua resolução completa, pelo risco de prolongá-la ou intensificá-la",
      "A dose de azatioprina/mercaptopurina deve ser significativamente reduzida quando associada, pelo risco de mielotoxicidade grave por inibição do metabolismo desses fármacos pela xantina oxidase",
      "É o agente hipouricemiante de primeira linha preferido mesmo em pacientes com doença renal crônica moderada a grave",
    ],
    doencasIndicadas: [
      { slug: "gota", nome: "Gota" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação inibidor da xantina oxidase e farmacocinética (metabólito ativo)", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Primeira linha de terapia hipouricemiante, inclusive em DRC moderada a grave", fonte: "FitzGerald JD et al., 2020 American College of Rheumatology Guideline for the Management of Gout, Arthritis Care & Research, 2020" },
    ],
  },
  {
    slug: "cloridrato-de-naloxona",
    nome: "Cloridrato de naloxona",
    nomeComercial: ["Narcan"],
    principioAtivo: "Cloridrato de naloxona",
    categoria: "Antídoto (antagonista opioide)",
    codigoAtc: "V03AB15",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Solução injetável, spray nasal",
    viaAdministracao: "Intravenosa, intramuscular, subcutânea, intranasal",
    resumo: "Antagonista opioide de ação rápida, antídoto específico para reverter a depressão respiratória e a sedação da intoxicação por opioides, com papel central em programas de redução de danos e resposta a overdose na comunidade.",
    indicacoes: [
      "Reversão da depressão respiratória por intoxicação/overdose por opioides",
      "Diagnóstico diferencial em coma de causa indeterminada com suspeita de intoxicação opioide",
      "Distribuição para uso comunitário por leigos em programas de prevenção de morte por overdose",
    ],
    mecanismoAcao:
      "Antagoniza competitivamente os receptores opioides, principalmente o receptor mu, com maior afinidade que a maioria dos agonistas opioides, deslocando-os do receptor e revertendo rapidamente a depressão respiratória, a sedação e a miose característicos da intoxicação opioide.",
    farmacocinetica:
      "Início de ação rápido (1-2 minutos por via intravenosa, ligeiramente mais lento por via intramuscular/intranasal) e meia-vida curta (30-90 minutos), frequentemente mais curta que a de muitos opioides de ação prolongada — por isso a re-sedação após reversão inicial é comum e pode exigir doses repetidas ou infusão contínua.",
    posologia: "Overdose por opioides: 0,4-2 mg por via intravenosa, intramuscular ou intranasal, repetida a cada 2-3 minutos conforme necessário até reversão da depressão respiratória, podendo exigir doses cumulativas mais altas em intoxicação por opioides sintéticos potentes.",
    ajusteRenalHepatico: "Não requer ajuste específico na insuficiência renal ou hepática, dado o uso em situação de emergência com titulação pela resposta clínica.",
    gestacaoLactacao: "Uso na gestação reservado à emergência de depressão respiratória materna por overdose; pode precipitar síndrome de abstinência aguda no feto/neonato se a mãe for dependente de opioides, mas a prioridade imediata é a reversão da hipóxia materna, que também ameaça o feto.",
    contraindicacoes: [
      "Nenhuma contraindicação absoluta relevante no contexto de emergência de depressão respiratória por opioides",
    ],
    efeitosColaterais: [
      "Síndrome de abstinência aguda precipitada em pacientes com dependência opioide (agitação, taquicardia, hipertensão, náusea, dor)",
      "Náusea e vômitos",
      "Reversão abrupta da analgesia, podendo causar dor intensa em pacientes tratados cronicamente com opioides para dor",
      "Edema pulmonar (raro, mais associado à reversão abrupta em overdose grave)",
    ],
    interacoes: [
      "Sem interações medicamentosas clinicamente relevantes de grande magnitude descritas, dado o contexto de uso em emergência",
    ],
    monitorizacao: [
      "Frequência respiratória e nível de consciência após a administração, com reavaliação frequente pelo risco de re-sedação (meia-vida da naloxona mais curta que a de muitos opioides)",
      "Sinais de síndrome de abstinência aguda em pacientes com dependência opioide conhecida",
    ],
    alertas: [
      "A meia-vida curta da naloxona é frequentemente menor que a de opioides de ação prolongada, exigindo observação contínua após a reversão inicial pelo risco de re-sedação e depressão respiratória recorrente.",
      "A distribuição de naloxona para uso comunitário por leigos (familiares, pessoas que usam drogas) é uma estratégia de saúde pública recomendada para reduzir mortes por overdose.",
    ],
    similares: ["Naltrexona (antagonista opioide de ação mais longa, usado para manutenção da abstinência, não para reversão aguda)"],
    pontosDeProva: [
      "Sua meia-vida curta, frequentemente menor que a de muitos opioides de ação prolongada, explica o risco de re-sedação após a reversão inicial, exigindo observação contínua",
      "É recomendada para distribuição comunitária a leigos como estratégia de saúde pública para reduzir mortes por overdose",
      "Pode precipitar síndrome de abstinência aguda em pacientes com dependência opioide, mas isso não deve impedir seu uso diante de depressão respiratória com risco de morte",
    ],
    doencasIndicadas: [],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação antagonista opioide e farmacocinética (meia-vida curta)", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Distribuição comunitária como estratégia de redução de mortes por overdose", fonte: "World Health Organization, Community Management of Opioid Overdose, 2014" },
    ],
  },
  {
    slug: "flumazenil",
    nome: "Flumazenil",
    nomeComercial: ["Lanexat"],
    principioAtivo: "Flumazenil",
    categoria: "Antídoto (antagonista de benzodiazepínico)",
    codigoAtc: "V03AB25",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Solução injetável",
    viaAdministracao: "Intravenosa",
    resumo: "Antagonista competitivo do receptor benzodiazepínico, antídoto específico para reverter a sedação por benzodiazepínicos, com uso restrito por risco significativo de precipitar convulsões em determinados contextos de intoxicação mista.",
    indicacoes: [
      "Reversão da sedação por benzodiazepínico após procedimento (sedação consciente iatrogênica)",
      "Intoxicação isolada por benzodiazepínico, com cautela e avaliação individualizada do risco de convulsão",
    ],
    mecanismoAcao:
      "Antagoniza competitivamente o sítio de ligação dos benzodiazepínicos no receptor GABA-A, sem atividade agonista ou antagonista intrínseca significativa sobre o próprio receptor GABA-A, deslocando o benzodiazepínico do seu sítio de ligação e revertendo seus efeitos sedativos e ansiolíticos.",
    farmacocinetica:
      "Início de ação rápido (1-2 minutos) e meia-vida curta (cerca de 1 hora), mais curta que a da maioria dos benzodiazepínicos — por isso a re-sedação após reversão inicial é comum, especialmente após benzodiazepínicos de ação prolongada, exigindo observação contínua.",
    posologia: "Reversão de sedação: 0,2 mg por via intravenosa, repetida a cada minuto conforme necessário até resposta, até dose máxima cumulativa geralmente de 1-3 mg.",
    ajusteRenalHepatico: "Requer cautela e possível redução de dose em insuficiência hepática significativa, dado o metabolismo hepático.",
    gestacaoLactacao: "Dados de segurança limitados na gestação; uso reservado a situações de emergência quando o benefício justificar claramente o risco.",
    contraindicacoes: [
      "Uso concomitante de benzodiazepínico para controle de condição com risco de vida (ex.: status epilepticus, hipertensão intracraniana)",
      "Suspeita ou confirmação de intoxicação mista com antidepressivos tricíclicos ou outros pró-convulsivantes",
      "Dependência crônica conhecida de benzodiazepínico",
    ],
    efeitosColaterais: [
      "Náusea e vômitos",
      "Agitação e ansiedade de rebote",
      "Convulsão, especialmente em pacientes com uso crônico de benzodiazepínico, epilepsia preexistente, ou intoxicação mista com pró-convulsivantes",
      "Sintomas de abstinência aguda em pacientes com dependência de benzodiazepínico",
    ],
    interacoes: [
      "Antidepressivos tricíclicos: risco significativamente aumentado de convulsão ao antagonizar o efeito protetor do benzodiazepínico sobre a atividade pró-convulsivante do tricíclico",
      "Outros fármacos pró-convulsivantes: risco aumentado de convulsão por mecanismo semelhante",
    ],
    monitorizacao: [
      "Nível de consciência e frequência respiratória após a administração, pelo risco de re-sedação (meia-vida mais curta que a maioria dos benzodiazepínicos)",
      "Sinais de convulsão iminente, especialmente em populações de risco",
    ],
    alertas: [
      "O uso rotineiro em intoxicação mista ou de causa indeterminada não é recomendado, pelo risco significativo de precipitar convulsões, especialmente na presença de antidepressivos tricíclicos ou em usuários crônicos de benzodiazepínico.",
      "A meia-vida curta exige observação contínua após a reversão inicial, pelo risco de re-sedação, especialmente após benzodiazepínicos de ação prolongada.",
    ],
    similares: ["Naloxona (antagonista opioide, mecanismo análogo mas para classe de fármacos distinta)"],
    pontosDeProva: [
      "Ao contrário da naloxona para opioides, seu uso rotineiro em intoxicação de causa indeterminada não é recomendado, pelo risco significativo de precipitar convulsões",
      "É contraindicado em suspeita de intoxicação mista com antidepressivos tricíclicos, pois antagoniza o efeito protetor do benzodiazepínico sobre a atividade pró-convulsivante do tricíclico",
      "Sua meia-vida curta, mais curta que a maioria dos benzodiazepínicos, explica o risco de re-sedação após a reversão inicial",
    ],
    doencasIndicadas: [],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação antagonista competitivo e farmacocinética (meia-vida curta)", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Risco de convulsão em intoxicação mista com pró-convulsivantes", fonte: "Kreshak AA et al., A Poison Center's Ten-Year Experience with Flumazenil Administration to Acutely Poisoned Adults, Journal of Emergency Medicine, 2012" },
    ],
  },
  {
    slug: "estrogenios-conjugados",
    nome: "Estrogênios conjugados",
    nomeComercial: ["Premarin"],
    principioAtivo: "Estrogênios conjugados",
    categoria: "Hormônio (terapia estrogênica)",
    codigoAtc: "G03CA57",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido, creme vaginal",
    viaAdministracao: "Oral, vaginal",
    resumo: "Mistura de estrogênios de origem equina, tratamento mais eficaz disponível para os sintomas vasomotores da menopausa, com benefício-risco favorável em mulheres mais jovens ou dentro de 10 anos do início da menopausa.",
    indicacoes: [
      "Sintomas vasomotores da menopausa (fogachos, sudorese noturna), tratamento sistêmico mais eficaz disponível",
      "Síndrome geniturinária da menopausa (atrofia vaginal), formulação vaginal em baixa dose",
      "Prevenção de perda óssea em mulheres com risco elevado de osteoporose, quando outras terapias não são adequadas",
    ],
    mecanismoAcao:
      "Repõe os níveis de estrogênio circulante próximos aos pré-menopáusicos, atuando em receptores estrogênicos alfa e beta amplamente distribuídos (hipotálamo, endométrio, osso, vasos sanguíneos), revertendo a instabilidade termorregulatória hipotalâmica responsável pelos fogachos e restaurando o trofismo do epitélio urogenital.",
    farmacocinetica:
      "Boa absorção oral, com metabolização hepática extensa de primeira passagem; a formulação vaginal tem absorção sistêmica mínima, adequada para tratamento local da atrofia com menor exposição sistêmica.",
    posologia: "Sintomas vasomotores: 0,3-0,625 mg/dia por via oral, na menor dose eficaz pelo menor tempo necessário. Atrofia vaginal isolada: creme vaginal em baixa dose, uso local.",
    ajusteRenalHepatico: "Contraindicado em disfunção hepática significativa, dado o metabolismo hepático extenso e o risco de agravamento da função hepática.",
    gestacaoLactacao: "Contraindicado na gestação (sem indicação nessa população) e não recomendado durante a lactação.",
    contraindicacoes: [
      "Câncer de mama atual ou história prévia",
      "Doença tromboembólica venosa atual ou história prévia",
      "Doença hepática ativa",
      "Sangramento vaginal não diagnosticado",
      "Gestação conhecida ou suspeita",
    ],
    efeitosColaterais: [
      "Sensibilidade mamária",
      "Sangramento uterino irregular, especialmente no início do tratamento",
      "Náusea",
      "Risco aumentado de tromboembolismo venoso, acidente vascular cerebral e câncer de mama com uso prolongado, variável conforme idade de início e tempo desde a menopausa",
    ],
    interacoes: [
      "Indutores do CYP3A4: podem reduzir a eficácia do estrogênio por aumento do metabolismo",
      "Anticoagulantes: o estado pró-trombótico do estrogênio pode interferir com o controle da anticoagulação",
    ],
    monitorizacao: [
      "Reavaliação periódica da indicação de continuidade do tratamento, sempre na menor dose eficaz pelo menor tempo necessário",
      "Rastreamento mamográfico de rotina conforme diretrizes de rastreamento de câncer de mama",
      "Sangramento vaginal anormal, que exige investigação endometrial",
    ],
    alertas: [
      "Em mulheres com útero intacto, o estrogênio sistêmico deve sempre ser associado a um progestagênio, pelo risco de hiperplasia e câncer de endométrio quando usado isoladamente.",
      "O benefício-risco é mais favorável em mulheres com menos de 60 anos ou dentro de 10 anos do início da menopausa, sem contraindicações — a chamada 'janela de oportunidade' da terapia hormonal.",
    ],
    similares: ["Estradiol (estrogênio bioidêntico, formulações orais e transdérmicas alternativas)"],
    pontosDeProva: [
      "É o tratamento mais eficaz disponível para os sintomas vasomotores da menopausa, superior a qualquer alternativa não hormonal",
      "Em mulheres com útero intacto, deve sempre ser associado a um progestagênio para proteção endometrial — nunca usado isoladamente nessa população",
      "O benefício-risco é mais favorável dentro da 'janela de oportunidade' (menos de 60 anos ou até 10 anos do início da menopausa)",
    ],
    doencasIndicadas: [
      { slug: "transtornos-menopausa-perimenopausa", nome: "Transtornos da menopausa e da perimenopausa" },
      { slug: "sindrome-de-turner", nome: "Síndrome de Turner" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação estrogênico e farmacocinética", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Benefício-risco por faixa etária e necessidade de progestagênio associado", fonte: "The 2022 Hormone Therapy Position Statement of The North American Menopause Society, Menopause, 2022" },
    ],
  },
  {
    slug: "etinilestradiol-levonorgestrel",
    nome: "Etinilestradiol + levonorgestrel",
    nomeComercial: ["Microvlar", "Level"],
    principioAtivo: "Etinilestradiol + Levonorgestrel",
    categoria: "Contraceptivo hormonal (combinado oral)",
    codigoAtc: "G03AA07",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido (cartela de 21 ou 28 dias)",
    viaAdministracao: "Oral",
    resumo: "Contraceptivo oral combinado de referência, com usos não contraceptivos relevantes no manejo de dismenorreia, sangramento uterino anormal por anovulação e endometriose, além da contracepção.",
    indicacoes: [
      "Contracepção hormonal oral",
      "Dismenorreia e síndrome pré-menstrual, uso não contraceptivo",
      "Sangramento uterino anormal por anovulação, regularização do ciclo",
      "Endometriose, supressão hormonal como opção de tratamento clínico",
    ],
    mecanismoAcao:
      "O componente estrogênico (etinilestradiol) suprime o hormônio folículo-estimulante, inibindo o recrutamento folicular; o componente progestagênico (levonorgestrel) suprime o pico de hormônio luteinizante, inibindo a ovulação, além de espessar o muco cervical e tornar o endométrio menos receptivo à implantação — mecanismos combinados que também explicam os benefícios não contraceptivos (regularização do ciclo, redução do fluxo menstrual e da dismenorreia).",
    farmacocinetica:
      "Boa absorção oral e metabolização hepática extensa de ambos os componentes, com circulação êntero-hepática do etinilestradiol.",
    posologia: "1 comprimido por via oral, 1 vez ao dia, na mesma hora, seguindo o esquema da cartela (21 dias ativos + 7 dias de pausa ou placebo, conforme a apresentação).",
    ajusteRenalHepatico: "Contraindicado em disfunção hepática significativa, dado o metabolismo hepático extenso de ambos os componentes.",
    gestacaoLactacao: "Contraindicado na gestação (sem indicação nessa população). Uso na lactação deve ser adiado até o estabelecimento completo da amamentação, preferindo-se contraceptivos apenas de progestagênio nesse período pelo potencial efeito do estrogênio sobre a produção de leite.",
    contraindicacoes: [
      "Tabagismo em mulheres acima de 35 anos (risco cardiovascular/trombótico aumentado)",
      "História de tromboembolismo venoso ou trombofilia conhecida",
      "Enxaqueca com aura",
      "Hipertensão não controlada",
      "Câncer de mama atual",
    ],
    efeitosColaterais: [
      "Náusea, mais comum no início do uso",
      "Sensibilidade mamária",
      "Sangramento de escape (spotting), mais comum nos primeiros ciclos",
      "Risco aumentado de tromboembolismo venoso, mais pronunciado em fumantes acima de 35 anos",
    ],
    interacoes: [
      "Indutores do CYP3A4 (ex.: carbamazepina, rifampicina): reduzem a eficácia contraceptiva por aumento do metabolismo hormonal",
      "Alguns antibióticos de amplo espectro: podem reduzir marginalmente a eficácia em situações específicas, sendo prudente orientar método de barreira adicional",
    ],
    monitorizacao: [
      "Pressão arterial periodicamente",
      "Fatores de risco cardiovascular e tabagismo em cada consulta de seguimento",
    ],
    alertas: [
      "A combinação de tabagismo e idade acima de 35 anos é contraindicação relativa forte, pelo risco cardiovascular e trombótico significativamente aumentado nessa associação específica.",
      "Enxaqueca com aura é contraindicação pelo risco aumentado de acidente vascular cerebral isquêmico associado ao componente estrogênico.",
    ],
    similares: ["Levonorgestrel isolado (contraceptivo apenas de progestagênio, alternativa quando o estrogênio é contraindicado)"],
    pontosDeProva: [
      "A combinação de tabagismo com idade acima de 35 anos é uma contraindicação relativa forte pelo risco cardiovascular/trombótico",
      "Enxaqueca com aura contraindica o uso pelo risco aumentado de AVC isquêmico associado ao componente estrogênico",
      "Além da contracepção, tem benefícios não contraceptivos estabelecidos: regularização do ciclo, redução da dismenorreia e do fluxo menstrual",
    ],
    doencasIndicadas: [
      { slug: "dismenorreia-sindrome-pre-menstrual", nome: "Dismenorreia e síndrome pré-menstrual" },
      { slug: "sangramento-uterino-anormal", nome: "Sangramento uterino anormal (incluindo menorragia)" },
      { slug: "endometriose", nome: "Endometriose" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação supressor do eixo hipotálamo-hipófise-ovário e farmacocinética", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Usos não contraceptivos (dismenorreia, sangramento anovulatório, endometriose)", fonte: "ACOG Practice Bulletin No. 110, Noncontraceptive Uses of Hormonal Contraceptives, Obstetrics & Gynecology, 2010" },
    ],
  },
  {
    slug: "levonorgestrel-isolado",
    nome: "Levonorgestrel isolado",
    nomeComercial: ["Postinor-2", "Pilem"],
    principioAtivo: "Levonorgestrel",
    categoria: "Contraceptivo hormonal (progestagênio isolado, contracepção de emergência)",
    codigoAtc: "G03AC03",
    tarja: "Venda livre (MIP)",
    formaFarmaceutica: "Comprimido",
    viaAdministracao: "Oral",
    resumo: "Progestagênio isolado usado como contracepção de emergência, mais eficaz e com menos efeitos colaterais gastrointestinais que o esquema combinado histórico, sendo mais eficaz quanto mais precoce a administração após a relação desprotegida.",
    indicacoes: [
      "Contracepção de emergência após relação sexual desprotegida ou falha de método contraceptivo, idealmente até 72 horas",
    ],
    mecanismoAcao:
      "Retarda ou inibe a ovulação ao suprimir o pico pré-ovulatório de hormônio luteinizante, quando administrado antes desse pico; não tem efeito comprovado sobre um óvulo já fertilizado ou sobre a implantação, o que o distingue mecanisticamente de um método abortivo.",
    farmacocinetica:
      "Boa absorção oral, com pico sérico em poucas horas. Eficácia decrescente quanto maior o intervalo desde a relação desprotegida, sendo licenciado para uso em até 72 horas, mas com melhor eficácia quanto mais precoce a administração.",
    posologia: "1,5 mg, dose única por via oral, o quanto antes possível após a relação desprotegida, até no máximo 72 horas.",
    ajusteRenalHepatico: "Não requer ajuste específico na insuficiência renal ou hepática leve a moderada.",
    gestacaoLactacao: "Não deve ser usado em gestação já estabelecida (não tem efeito sobre gestação em curso, não sendo abortivo). Compatível com a lactação.",
    contraindicacoes: [
      "Gestação confirmada (ineficaz nesse contexto, não por risco fetal)",
      "Hipersensibilidade ao levonorgestrel",
    ],
    efeitosColaterais: [
      "Náusea, com incidência menor que o esquema combinado histórico de contracepção de emergência",
      "Sangramento irregular ou alteração da data prevista para a próxima menstruação",
      "Cefaleia",
      "Fadiga",
    ],
    interacoes: [
      "Indutores do CYP3A4: podem reduzir a eficácia contraceptiva de emergência, podendo justificar dose adicional ou método alternativo conforme orientação especializada",
    ],
    monitorizacao: [
      "Atraso menstrual superior a uma semana após o uso, que deve motivar teste de gravidez",
    ],
    alertas: [
      "Não tem efeito comprovado sobre um óvulo já fertilizado ou sobre a implantação — não deve ser confundido com método abortivo, distinção clinicamente e eticamente relevante.",
      "A eficácia diminui progressivamente quanto maior o intervalo desde a relação desprotegida, reforçando a importância da administração o mais precoce possível.",
    ],
    similares: ["Acetato de ulipristal (contracepção de emergência alternativa, eficaz por mais tempo após a relação, não constante na RENAME 2024)"],
    pontosDeProva: [
      "Atua retardando ou inibindo a ovulação, sem efeito comprovado sobre um óvulo já fertilizado ou sobre a implantação — não é um método abortivo",
      "É mais eficaz e tem menos efeitos colaterais gastrointestinais que o antigo esquema combinado de contracepção de emergência (método de Yuzpe)",
      "Sua eficácia é tempo-dependente, diminuindo progressivamente quanto maior o intervalo desde a relação desprotegida",
    ],
    doencasIndicadas: [],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação sobre a ovulação e farmacocinética", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Eficácia tempo-dependente e ausência de efeito sobre gestação estabelecida", fonte: "ACOG Practice Bulletin No. 152, Emergency Contraception, Obstetrics & Gynecology, 2015" },
    ],
  },
  {
    slug: "misoprostol",
    nome: "Misoprostol",
    nomeComercial: ["Cytotec"],
    principioAtivo: "Misoprostol",
    categoria: "Análogo de prostaglandina E1 (uterotônico/ocitócico)",
    codigoAtc: "G02AD06",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido",
    viaAdministracao: "Oral, sublingual, vaginal",
    resumo: "Análogo sintético da prostaglandina E1 com efeito uterotônico, usado no manejo do abortamento incompleto/espontâneo, na hemorragia pós-parto quando a ocitocina não está disponível, e no amadurecimento cervical.",
    indicacoes: [
      "Tratamento médico do abortamento incompleto ou retido, como alternativa ou complemento ao esvaziamento cirúrgico",
      "Hemorragia pós-parto, alternativa quando a ocitocina intravenosa não está disponível ou como adjuvante quando a resposta à ocitocina é inadequada",
      "Amadurecimento cervical e indução do trabalho de parto",
    ],
    mecanismoAcao:
      "Atua como agonista dos receptores de prostaglandina E na musculatura lisa uterina e cervical, promovendo contração miometrial e amolecimento/dilatação do colo uterino, mecanismo que sustenta tanto seu uso obstétrico (indução, tratamento do abortamento, hemorragia pós-parto) quanto seu uso ginecológico.",
    farmacocinetica:
      "Boa absorção por múltiplas vias (oral, sublingual, vaginal), com a via sublingual apresentando pico sérico mais rápido e a via vaginal proporcionando efeito uterino mais sustentado. Metabolização hepática rápida.",
    posologia: "Abortamento incompleto: 600 mcg por via oral ou 400 mcg por via sublingual, dose única. Hemorragia pós-parto: 800 mcg por via sublingual. Amadurecimento cervical: doses menores por via vaginal, conforme protocolo obstétrico.",
    ajusteRenalHepatico: "Não requer ajuste específico na insuficiência renal ou hepática.",
    gestacaoLactacao: "Uso obstétrico deliberado é a própria indicação terapêutica nas situações listadas; fora dessas indicações, é rigorosamente contraindicado na gestação pelo risco de aborto e malformações (síndrome de Möbius) se usado inadvertidamente em gestação que se deseja manter.",
    contraindicacoes: [
      "Gestação que se deseja manter, fora das indicações terapêuticas específicas",
      "Alergia a prostaglandinas",
      "Cicatriz uterina prévia quando usado para indução de trabalho de parto (risco de ruptura uterina), com avaliação individualizada",
    ],
    efeitosColaterais: [
      "Cólicas uterinas intensas",
      "Náusea, vômitos e diarreia",
      "Febre e calafrios transitórios (efeito da prostaglandina, não necessariamente infeccioso)",
      "Sangramento vaginal, esperado no contexto do uso terapêutico",
    ],
    interacoes: [
      "Sem interações medicamentosas clinicamente relevantes de grande magnitude descritas",
    ],
    monitorizacao: [
      "Intensidade e frequência das contrações uterinas durante o uso para indução/amadurecimento cervical",
      "Sangramento vaginal e sinais vitais no tratamento da hemorragia pós-parto",
    ],
    alertas: [
      "É um dos poucos medicamentos cujo uso indevido/não médico para provocar abortamento fora do contexto legal e assistencial é uma preocupação de saúde pública reconhecida, reforçando a importância da orientação sobre seu uso terapêutico apropriado.",
      "Febre e calafrios após a administração são efeitos esperados da prostaglandina e não devem ser automaticamente interpretados como sinal de infecção.",
    ],
    similares: ["Ocitocina (uterotônico de primeira linha para hemorragia pós-parto, ainda sem ficha própria no site — pendente do Apêndice B da RENAME)"],
    pontosDeProva: [
      "Febre e calafrios transitórios após a administração são efeito esperado da prostaglandina, não necessariamente sinal de infecção",
      "É alternativa à ocitocina na hemorragia pós-parto quando esta não está disponível, mas a ocitocina permanece o uterotônico de primeira linha",
      "Tem múltiplas vias de administração (oral, sublingual, vaginal) com perfis de absorção e efeito uterino distintos entre si",
    ],
    doencasIndicadas: [
      { slug: "aborto-espontaneo", nome: "Aborto espontâneo" },
      { slug: "hemorragia-pos-parto", nome: "Hemorragia pós-parto" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação agonista de prostaglandina E e farmacocinética", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Uso como alternativa à ocitocina na hemorragia pós-parto", fonte: "World Health Organization, WHO Recommendations for the Prevention and Treatment of Postpartum Haemorrhage, 2012" },
    ],
  },
  {
    slug: "finasterida",
    nome: "Finasterida",
    nomeComercial: ["Propecia", "Proscar"],
    principioAtivo: "Finasterida",
    categoria: "Inibidor da 5-alfa-redutase",
    codigoAtc: "G04CB01",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido",
    viaAdministracao: "Oral",
    resumo: "Inibidor da 5-alfa-redutase que reduz o volume prostático ao bloquear a conversão de testosterona em di-hidrotestosterona, sendo opção de primeira linha na hiperplasia prostática benigna com próstata aumentada, com efeito mais lento que os alfabloqueadores.",
    indicacoes: [
      "Hiperplasia prostática benigna sintomática com próstata aumentada de volume, isolada ou associada a alfabloqueador",
      "Prevenção de progressão da HPB e redução do risco de retenção urinária aguda e necessidade de cirurgia",
      "Alopecia androgenética masculina, dose menor (uso off-label frequente nessa indicação em muitos países)",
    ],
    mecanismoAcao:
      "Inibe seletivamente a enzima 5-alfa-redutase tipo 2, responsável pela conversão periférica e prostática de testosterona em di-hidrotestosterona (DHT), o andrógeno mais potente na próstata; a redução da DHT leva à diminuição progressiva do volume prostático ao longo de meses, ao contrário dos alfabloqueadores, que agem rapidamente sobre o componente dinâmico (tônus muscular) sem reduzir o volume da glândula.",
    farmacocinetica:
      "Boa absorção oral e metabolização hepática. O efeito máximo sobre a redução do volume prostático requer cerca de 6 meses de uso contínuo, ao contrário do alívio sintomático mais rápido proporcionado pelos alfabloqueadores.",
    posologia: "HPB: 5 mg/dia, por via oral, uso contínuo. Alopecia androgenética: 1 mg/dia (dose menor que a usada na HPB).",
    ajusteRenalHepatico: "Não requer ajuste específico na insuficiência renal. Usar com cautela em disfunção hepática significativa, dado o metabolismo hepático.",
    gestacaoLactacao: "Contraindicado em mulheres grávidas ou que possam engravidar — comprimidos fraturados ou triturados não devem ser manuseados por gestantes, pelo risco de malformação genital em feto masculino por absorção cutânea.",
    contraindicacoes: [
      "Mulheres grávidas ou que possam engravidar (incluindo contato com comprimidos fraturados/triturados)",
      "Hipersensibilidade à finasterida",
    ],
    efeitosColaterais: [
      "Disfunção erétil e redução da libido",
      "Ginecomastia (rara)",
      "Redução do nível de PSA sérico em aproximadamente 50%, mesmo na ausência de câncer de próstata — achado que exige ajuste na interpretação do exame",
    ],
    interacoes: [
      "Sem interações medicamentosas clinicamente relevantes de grande magnitude descritas",
    ],
    monitorizacao: [
      "PSA sérico, com valor ajustado (dobrado) para interpretação correta durante o uso do fármaco",
      "Sintomas urinários e volume prostático ao longo do tratamento",
    ],
    alertas: [
      "Reduz o PSA sérico em aproximadamente 50% mesmo sem câncer de próstata subjacente — o valor medido deve ser dobrado (ou interpretado com essa correção) para avaliação adequada do risco oncológico durante o uso.",
      "Mulheres grávidas ou que possam engravidar não devem manusear comprimidos fraturados ou triturados, pelo risco de malformação genital em feto masculino por absorção cutânea do fármaco.",
    ],
    similares: ["Dutasterida (outro inibidor da 5-alfa-redutase, inibe também o tipo 1)", "Mesilato de doxazosina (alfabloqueador, efeito sintomático mais rápido, sem redução do volume prostático)"],
    pontosDeProva: [
      "Reduz o PSA sérico em aproximadamente 50% mesmo sem câncer de próstata — o valor deve ser ajustado (dobrado) durante a interpretação do exame em pacientes em uso do fármaco",
      "Seu efeito máximo sobre o volume prostático requer cerca de 6 meses, ao contrário do alívio sintomático mais rápido dos alfabloqueadores, que atuam sobre o componente dinâmico",
      "É contraindicado o manuseio de comprimidos fraturados por gestantes, pelo risco de malformação genital em feto masculino por absorção cutânea",
    ],
    doencasIndicadas: [
      { slug: "hiperplasia-prostatica-benigna", nome: "Hiperplasia da próstata (HPB)" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação inibidor da 5-alfa-redutase e farmacocinética", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Papel na redução do volume prostático e prevenção de progressão da HPB", fonte: "American Urological Association, Management of Lower Urinary Tract Symptoms Attributed to Benign Prostatic Hyperplasia: AUA Guideline, Part I, Journal of Urology, 2021" },
    ],
  },
  {
    slug: "citrato-de-sildenafila",
    nome: "Citrato de sildenafila",
    nomeComercial: ["Viagra"],
    principioAtivo: "Citrato de sildenafila",
    categoria: "Inibidor da fosfodiesterase tipo 5",
    codigoAtc: "G04BE03",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido",
    viaAdministracao: "Oral",
    resumo: "Inibidor da fosfodiesterase tipo 5 de primeira linha para disfunção erétil, atuando apenas na presença de estímulo sexual ao potencializar a via do óxido nítrico/GMP cíclico já ativada fisiologicamente.",
    indicacoes: [
      "Disfunção erétil, tratamento de primeira linha oral",
      "Hipertensão arterial pulmonar, em apresentação e dosagem específicas (uso distinto da indicação urológica)",
    ],
    mecanismoAcao:
      "Inibe seletivamente a fosfodiesterase tipo 5 (PDE-5), enzima responsável pela degradação do GMP cíclico no corpo cavernoso; ao bloquear essa degradação, prolonga e potencializa o efeito vasodilatador do óxido nítrico liberado durante o estímulo sexual, aumentando o fluxo sanguíneo peniano — por isso seu efeito depende da presença de estímulo sexual e da liberação fisiológica prévia de óxido nítrico, não produzindo ereção na ausência de estímulo.",
    farmacocinetica:
      "Absorção oral relativamente rápida (pico sérico em cerca de 1 hora), reduzida por refeições ricas em gordura. Meia-vida curta (cerca de 4 horas), início de ação em 30-60 minutos antes da atividade sexual planejada.",
    posologia: "25-100 mg por via oral, conforme necessário, cerca de 1 hora antes da atividade sexual planejada, no máximo uma vez ao dia.",
    ajusteRenalHepatico: "Requer redução da dose inicial em insuficiência renal ou hepática significativas, dado o risco aumentado de efeitos adversos por acúmulo.",
    gestacaoLactacao: "Não aplicável (uso exclusivo em homens para a indicação urológica).",
    contraindicacoes: [
      "Uso concomitante de nitratos orgânicos, em qualquer forma ou frequência (risco de hipotensão grave e potencialmente fatal)",
      "Uso concomitante de doadores de óxido nítrico",
      "Hipotensão significativa ou infarto do miocárdio recente",
    ],
    efeitosColaterais: [
      "Cefaleia",
      "Rubor facial",
      "Dispepsia",
      "Alterações visuais transitórias (percepção azulada, sensibilidade à luz), pela inibição cruzada da PDE-6 retiniana",
      "Priapismo (raro, mas emergência urológica)",
    ],
    interacoes: [
      "Nitratos orgânicos: contraindicação absoluta, risco de hipotensão grave e potencialmente fatal por potencialização do efeito vasodilatador",
      "Alfabloqueadores: risco aumentado de hipotensão sintomática quando associados, exigindo espaçamento das doses ou ajuste",
      "Inibidores potentes do CYP3A4: aumentam o nível sérico da sildenafila, exigindo redução de dose",
    ],
    monitorizacao: [
      "Pressão arterial em pacientes usando concomitantemente anti-hipertensivos, especialmente alfabloqueadores",
      "Sintomas de ereção prolongada (mais de 4 horas), que exigem avaliação urológica de emergência (priapismo)",
    ],
    alertas: [
      "A associação com nitratos orgânicos, em qualquer forma, é contraindicação absoluta pelo risco de hipotensão grave e potencialmente fatal — pergunta obrigatória antes de prescrever ou dispensar.",
      "Ereção prolongada por mais de 4 horas (priapismo) é uma emergência urológica que exige atendimento imediato para prevenir dano tecidual permanente.",
    ],
    similares: ["Tadalafila (inibidor da PDE-5 de meia-vida mais longa, permitindo uso não vinculado ao momento da relação sexual)"],
    pontosDeProva: [
      "Seu efeito depende da presença de estímulo sexual e da liberação fisiológica de óxido nítrico — não produz ereção na ausência de estímulo",
      "É absolutamente contraindicado com nitratos orgânicos, pelo risco de hipotensão grave e potencialmente fatal — pergunta obrigatória antes da prescrição",
      "Causa alterações visuais transitórias (percepção azulada) pela inibição cruzada da PDE-6 retiniana, estruturalmente semelhante à PDE-5",
    ],
    doencasIndicadas: [],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação inibidor da PDE-5 dependente de estímulo sexual e farmacocinética", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Primeira linha oral para disfunção erétil e contraindicação com nitratos", fonte: "American Urological Association, Erectile Dysfunction: AUA Guideline, Journal of Urology, 2018" },
    ],
  },
  {
    slug: "cetoconazol",
    nome: "Cetoconazol",
    nomeComercial: ["Nizoral"],
    principioAtivo: "Cetoconazol",
    categoria: "Antifúngico (imidazólico) / inibidor da esteroidogênese",
    codigoAtc: "D01AC08",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Comprimido, creme tópico, xampu",
    viaAdministracao: "Oral, tópica",
    resumo: "Antifúngico imidazólico de uso tópico para dermatofitoses e dermatite seborreica, com uso sistêmico adicional relevante como inibidor da esteroidogênese adrenal no manejo clínico da síndrome de Cushing.",
    indicacoes: [
      "Dermatite seborreica, xampu ou creme tópico",
      "Dermatofitoses e candidíase cutânea superficial, uso tópico",
      "Síndrome de Cushing, uso sistêmico como inibidor da esteroidogênese quando a cirurgia não é possível, não é curativa, ou enquanto se aguarda seu efeito",
    ],
    mecanismoAcao:
      "Como antifúngico, inibe a enzima fúngica lanosterol 14-alfa-demetilase, bloqueando a síntese de ergosterol da membrana celular fúngica, de forma análoga a outros azólicos. Sistemicamente, em doses mais altas, inibe múltiplas enzimas do citocromo P450 envolvidas na esteroidogênese adrenal e gonadal (incluindo a clivagem da cadeia lateral do colesterol, a 17,20-liase e a 11-beta-hidroxilase), reduzindo a produção de cortisol — mecanismo explorado terapeuticamente na síndrome de Cushing.",
    farmacocinetica:
      "Absorção oral variável, dependente da acidez gástrica (reduzida por antiácidos e inibidores da bomba de prótons). Metabolização hepática extensa, com potencial hepatotóxico relevante no uso sistêmico prolongado.",
    posologia: "Dermatite seborreica/dermatofitose: aplicação tópica 1-2 vezes ao dia. Síndrome de Cushing: dose sistêmica inicial de 400-600 mg/dia, dividida, com titulação guiada pelo cortisol livre urinário, podendo chegar a 1.200 mg/dia.",
    ajusteRenalHepatico: "Contraindicado em disfunção hepática significativa preexistente, dado o potencial hepatotóxico do uso sistêmico; requer monitorização hepática rigorosa mesmo em pacientes sem disfunção basal.",
    gestacaoLactacao: "Uso sistêmico contraindicado na gestação pelo efeito antiandrogênico e inibidor da esteroidogênese. Uso tópico considerado de baixo risco pela absorção sistêmica mínima.",
    contraindicacoes: [
      "Doença hepática significativa (uso sistêmico)",
      "Uso concomitante com fármacos que prolongam o intervalo QT ou são substratos sensíveis do CYP3A4 (uso sistêmico)",
      "Gestação (uso sistêmico)",
    ],
    efeitosColaterais: [
      "Irritação cutânea local (uso tópico)",
      "Hepatotoxicidade, incluindo insuficiência hepática grave (uso sistêmico, exige monitorização rigorosa)",
      "Insuficiência adrenal por supressão excessiva do cortisol (uso sistêmico na síndrome de Cushing, exige monitorização cuidadosa)",
      "Ginecomastia e disfunção erétil por efeito antiandrogênico (uso sistêmico prolongado)",
    ],
    interacoes: [
      "Inibidor potente do CYP3A4: aumenta significativamente os níveis séricos de diversos substratos dessa enzima (uso sistêmico)",
      "Antiácidos e inibidores da bomba de prótons: reduzem a absorção oral pela redução da acidez gástrica",
    ],
    monitorizacao: [
      "Enzimas hepáticas antes e periodicamente durante o uso sistêmico, dado o risco de hepatotoxicidade grave",
      "Cortisol livre urinário para guiar a titulação de dose na síndrome de Cushing, evitando insuficiência adrenal por supressão excessiva",
    ],
    alertas: [
      "O uso sistêmico exige monitorização hepática rigorosa pelo risco de hepatotoxicidade grave, incluindo casos de insuficiência hepática fulminante.",
      "Na síndrome de Cushing, a titulação de dose deve ser cuidadosamente guiada pelo cortisol livre urinário, pelo risco de insuficiência adrenal por supressão excessiva da esteroidogênese.",
    ],
    similares: ["Nitrato de miconazol (antifúngico tópico alternativo)", "Metirapona (inibidor da esteroidogênese alternativo na síndrome de Cushing)"],
    pontosDeProva: [
      "Tem duplo mecanismo terapêutico: antifúngico tópico convencional e, sistemicamente, inibidor de múltiplas enzimas da esteroidogênese adrenal — usado terapeuticamente na síndrome de Cushing",
      "O uso sistêmico exige monitorização hepática rigorosa pelo risco de hepatotoxicidade grave",
      "Na síndrome de Cushing, a dose deve ser titulada pelo cortisol livre urinário, pelo risco de insuficiência adrenal por supressão excessiva",
    ],
    doencasIndicadas: [
      { slug: "dermatite-seborreica", nome: "Dermatite seborreica" },
      { slug: "sindrome-de-cushing", nome: "Síndrome de Cushing" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação antifúngico e inibidor da esteroidogênese, e farmacocinética", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Uso sistêmico como inibidor da esteroidogênese na síndrome de Cushing", fonte: "Nieman LK et al., Treatment of Cushing's Syndrome: An Endocrine Society Clinical Practice Guideline, Journal of Clinical Endocrinology & Metabolism, 2015" },
    ],
  },
  {
    slug: "permetrina",
    nome: "Permetrina",
    nomeComercial: ["Nedax"],
    principioAtivo: "Permetrina",
    categoria: "Antiparasitário tópico (piretroide sintético)",
    codigoAtc: "P03AC04",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Loção/creme tópico",
    viaAdministracao: "Tópica",
    resumo: "Piretroide sintético de uso tópico, tratamento de primeira linha para escabiose e pediculose, com boa margem de segurança pela absorção sistêmica mínima.",
    indicacoes: [
      "Escabiose (sarna), primeira linha de tratamento tópico",
      "Pediculose (piolhos), primeira linha de tratamento tópico",
    ],
    mecanismoAcao:
      "Atua sobre os canais de sódio dependentes de voltagem da membrana neuronal do parasita, retardando sua repolarização e causando paralisia da musculatura respiratória e locomotora do ácaro/piolho, com toxicidade seletiva pela maior sensibilidade desses canais nos artrópodes em comparação aos mamíferos.",
    farmacocinetica:
      "Absorção sistêmica mínima através da pele íntegra, o que confere boa margem de segurança mesmo em populações mais sensíveis (crianças pequenas, gestantes).",
    posologia: "Escabiose: aplicação em todo o corpo do pescoço para baixo, permanecendo por 8-14 horas antes de remover com banho, repetida em 7 dias se necessário. Pediculose: aplicação no couro cabeludo conforme instrução do produto.",
    ajusteRenalHepatico: "Não requer ajuste específico, dada a absorção sistêmica mínima pela via tópica.",
    gestacaoLactacao: "Considerada segura na gestação e na lactação, sendo a primeira escolha tópica para escabiose nessa população, dada a absorção sistêmica mínima.",
    contraindicacoes: [
      "Hipersensibilidade a piretroides",
    ],
    efeitosColaterais: [
      "Irritação e ardor cutâneo transitório no local de aplicação",
      "Prurido, que pode persistir por semanas após tratamento eficaz (reação de hipersensibilidade residual)",
    ],
    interacoes: [
      "Sem interações medicamentosas clinicamente relevantes de grande magnitude descritas",
    ],
    monitorizacao: [
      "Resolução das lesões e do prurido, com orientação sobre a persistência esperada do prurido residual por algumas semanas",
    ],
    alertas: [
      "O prurido pode persistir por até várias semanas após tratamento eficaz, pela reação de hipersensibilidade residual ao ácaro morto, não devendo ser confundido com falha terapêutica ou reinfestação.",
      "É a primeira escolha tópica para escabiose em gestantes e crianças pequenas, dada a absorção sistêmica mínima.",
    ],
    similares: ["Ivermectina oral (alternativa sistêmica, especialmente em escabiose crostosa ou falha do tratamento tópico)"],
    pontosDeProva: [
      "Atua sobre canais de sódio neuronais do parasita, com toxicidade seletiva pela maior sensibilidade desses canais em artrópodes que em mamíferos",
      "É a primeira escolha tópica para escabiose em gestantes e crianças pequenas, pela absorção sistêmica mínima",
      "O prurido residual por semanas após tratamento eficaz não indica falha terapêutica, sendo reação de hipersensibilidade ao parasita morto",
    ],
    doencasIndicadas: [],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação em canais de sódio neuronais e farmacocinética", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Primeira linha tópica para escabiose, incluindo em gestantes", fonte: "CDC — Clinical Care of Scabies, Guidance for Health Professionals (Parasites — Scabies)" },
    ],
  },
  {
    slug: "acetato-de-hidrocortisona-topica",
    nome: "Acetato de hidrocortisona tópica",
    nomeComercial: ["Hidrocortisona (medicamento genérico, sem marca comercial de destaque no Brasil)"],
    principioAtivo: "Acetato de hidrocortisona",
    categoria: "Corticosteroide tópico (baixa potência)",
    codigoAtc: "D07AA02",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Creme, pomada",
    viaAdministracao: "Tópica",
    resumo: "Corticosteroide tópico de baixa potência, indicado para dermatoses inflamatórias leves e em áreas de pele fina (face, dobras, genitais), onde corticosteroides mais potentes trazem maior risco de atrofia cutânea.",
    indicacoes: [
      "Dermatite atópica leve, especialmente em face e áreas de dobras",
      "Dermatite alérgica de contato leve",
      "Dermatite das fraldas e outras dermatoses inflamatórias leves em crianças pequenas",
    ],
    mecanismoAcao:
      "Liga-se a receptores glicocorticoides citoplasmáticos, translocando-se ao núcleo e modulando a transcrição gênica para reduzir a produção de citocinas pró-inflamatórias, prostaglandinas e leucotrienos, além de induzir a síntese de proteínas anti-inflamatórias (lipocortina), resultando em redução do eritema, edema e prurido; sendo de baixa potência, tem penetração cutânea limitada e menor risco de efeitos adversos locais e sistêmicos que os corticosteroides de potência intermediária a alta.",
    farmacocinetica:
      "Absorção sistêmica mínima pela via tópica em uso convencional, mas aumentada em pele lesada, áreas de dobras (uso oclusivo natural) e em crianças pequenas (maior relação superfície/peso corporal).",
    posologia: "Aplicação em camada fina, 1-2 vezes ao dia, na área afetada, por período limitado (geralmente até 1-2 semanas nas exacerbações agudas).",
    ajusteRenalHepatico: "Não requer ajuste específico, dada a absorção sistêmica mínima pela via tópica em uso convencional.",
    gestacaoLactacao: "Considerada segura na gestação e na lactação em uso tópico convencional, evitando aplicação extensa ou prolongada sobre a mama antes da amamentação.",
    contraindicacoes: [
      "Infecção cutânea não tratada no local de aplicação (bacteriana, fúngica ou viral)",
      "Hipersensibilidade a corticosteroides tópicos",
    ],
    efeitosColaterais: [
      "Atrofia cutânea, menos frequente que com corticosteroides de maior potência, mas ainda possível em uso prolongado",
      "Telangiectasias com uso prolongado",
      "Foliculite e acne localizada",
      "Supressão do eixo hipotálamo-hipófise-adrenal, rara nessa baixa potência, mas possível com uso extenso e prolongado em crianças pequenas",
    ],
    interacoes: [
      "Sem interações medicamentosas clinicamente relevantes de grande magnitude descritas",
    ],
    monitorizacao: [
      "Sinais de atrofia cutânea ou telangiectasias em uso prolongado",
      "Resposta clínica com reavaliação da necessidade de continuidade além do período inicial recomendado",
    ],
    alertas: [
      "É a potência preferida para uso em face, dobras cutâneas e área de fraldas em crianças, justamente pelo menor risco de atrofia cutânea nessas áreas de pele mais fina e sensível.",
    ],
    similares: ["Betametasona (corticosteroide tópico de maior potência, reservado a áreas de pele mais espessa ou lesões mais refratárias)"],
    pontosDeProva: [
      "É a potência preferida para uso em face, dobras cutâneas e área de fraldas, pelo menor risco de atrofia cutânea nessas áreas de pele fina",
      "A escolha da potência do corticosteroide tópico deve sempre considerar o sítio anatômico, não apenas a gravidade da dermatose",
      "Mesmo sendo de baixa potência, o uso extenso e prolongado em crianças pequenas pode causar supressão do eixo hipotálamo-hipófise-adrenal",
    ],
    doencasIndicadas: [
      { slug: "dermatite-atopica", nome: "Dermatite atópica" },
      { slug: "dermatite-alergica-contato", nome: "Dermatite alérgica de contato" },
      { slug: "dermatite-seborreica", nome: "Dermatite seborreica" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação glicocorticoide e farmacocinética", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Escolha da potência do corticosteroide tópico por sítio anatômico na dermatite atópica", fonte: "Eichenfield LF et al., Guidelines of Care for the Management of Atopic Dermatitis: Section 2, Management and Treatment with Topical Therapies, Journal of the American Academy of Dermatology, 2014" },
    ],
  },
  {
    slug: "betametasona",
    nome: "Betametasona (acetato + fosfato dissódico)",
    nomeComercial: ["Diprospan", "Celestone"],
    principioAtivo: "Acetato de betametasona + Fosfato dissódico de betametasona",
    categoria: "Corticosteroide (tópico de alta potência / injetável de depósito)",
    codigoAtc: "H02AB01",
    tarja: "Tarja vermelha",
    formaFarmaceutica: "Creme/pomada tópica, suspensão injetável",
    viaAdministracao: "Tópica, intramuscular, intra-articular",
    resumo: "Corticosteroide de alta potência com apresentação tópica (primeira linha para placas de psoríase) e injetável de depósito combinando ação rápida e prolongada, usada em infiltrações articulares e em situações que exigem efeito anti-inflamatório sistêmico sustentado.",
    indicacoes: [
      "Psoríase em placas, tratamento tópico de primeira linha em áreas não intertriginosas",
      "Dermatoses inflamatórias moderadas a graves refratárias a corticosteroides de menor potência, uso tópico",
      "Infiltração intra-articular ou periarticular em processos inflamatórios localizados, apresentação injetável",
    ],
    mecanismoAcao:
      "Como corticosteroide, liga-se a receptores glicocorticoides citoplasmáticos, modulando a transcrição gênica para suprimir a produção de citocinas, prostaglandinas e leucotrienos pró-inflamatórios; a apresentação injetável combina o fosfato dissódico (solúvel, de ação rápida) com o acetato (menos solúvel, de liberação prolongada), proporcionando início de ação rápido e efeito sustentado por semanas a partir de uma única aplicação.",
    farmacocinetica:
      "Uso tópico: absorção sistêmica variável conforme a extensão da área tratada, a oclusão e a integridade da pele. Uso injetável de depósito: a combinação de componentes solúvel e insolúvel proporciona liberação bifásica, com efeito inicial rápido e duração prolongada de semanas.",
    posologia: "Psoríase (tópico): aplicação 1-2 vezes ao dia, por período limitado (geralmente até 2-4 semanas contínuas, reavaliando a necessidade de continuidade). Infiltração articular: dose única conforme o tamanho da articulação e a resposta clínica.",
    ajusteRenalHepatico: "Não requer ajuste específico na insuficiência renal ou hepática para uso tópico ocasional; uso sistêmico repetido requer monitorização metabólica geral dos corticosteroides.",
    gestacaoLactacao: "Uso tópico em pequenas áreas considerado de baixo risco na gestação; uso extenso ou repetido, e a via injetável, requerem avaliação individualizada de risco-benefício.",
    contraindicacoes: [
      "Infecção cutânea não tratada no local de aplicação tópica",
      "Infecção articular ou periarticular ativa, para a via intra-articular",
      "Hipersensibilidade a corticosteroides",
    ],
    efeitosColaterais: [
      "Atrofia cutânea, estrias e telangiectasias com uso tópico prolongado, mais pronunciadas por ser corticosteroide de alta potência",
      "Taquifilaxia (redução da resposta terapêutica) com uso tópico contínuo além do período recomendado",
      "Supressão do eixo hipotálamo-hipófise-adrenal com uso extenso, oclusivo ou repetido",
      "Atrofia local e despigmentação no sítio de infiltração intra-articular",
    ],
    interacoes: [
      "Sem interações medicamentosas clinicamente relevantes de grande magnitude descritas para uso tópico ou infiltração ocasional",
    ],
    monitorizacao: [
      "Sinais de atrofia cutânea e taquifilaxia em uso tópico contínuo além de 2-4 semanas",
      "Número de infiltrações articulares na mesma articulação ao longo do tempo, pelo risco cumulativo de dano à cartilagem com uso repetido",
    ],
    alertas: [
      "O uso tópico contínuo além de 2-4 semanas favorece taquifilaxia e atrofia cutânea, sendo recomendado o uso intermitente ou a alternância com agentes poupadores de corticosteroide (análogos de vitamina D, inibidores de calcineurina).",
      "Infiltrações intra-articulares repetidas na mesma articulação devem ser limitadas ao longo do tempo, pelo risco cumulativo de dano à cartilagem.",
    ],
    similares: ["Acetato de hidrocortisona tópica (corticosteroide de baixa potência, para áreas de pele fina)", "Prednisona (corticosteroide sistêmico oral, já documentada)"],
    pontosDeProva: [
      "A apresentação injetável combina fosfato dissódico (ação rápida) com acetato (liberação prolongada), proporcionando início rápido e efeito sustentado por semanas a partir de uma única dose",
      "O uso tópico contínuo além de 2-4 semanas favorece taquifilaxia, justificando estratégias de uso intermitente ou associação com poupadores de corticosteroide",
      "Infiltrações intra-articulares repetidas devem ser limitadas pelo risco cumulativo de dano à cartilagem",
    ],
    doencasIndicadas: [
      { slug: "psoriase", nome: "Psoríase" },
      { slug: "sindrome-desconforto-respiratorio-recem-nascido", nome: "Síndrome do desconforto respiratório do recém-nascido" },
      { slug: "prematuridade-complicacoes-baixo-peso-nascer", nome: "Prematuridade e complicações do baixo peso ao nascer" },
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação glicocorticoide e farmacocinética de depósito bifásica", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Corticosteroide tópico de primeira linha na psoríase em placas", fonte: "Elmets CA et al., Joint AAD-NPF Guidelines of Care for the Management and Treatment of Psoriasis with Topical Therapy, Journal of the American Academy of Dermatology, 2021" },
    ],
  },
];
