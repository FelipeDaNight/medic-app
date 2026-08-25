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
    ],
    fontes: [
      { tema: "Código ATC e forma farmacêutica", fonte: "RENAME 2024, Apêndice A" },
      { tema: "Mecanismo de ação", fonte: "Goodman & Gilman, 13ª ed." },
      { tema: "Benefício de mortalidade na COVID-19 em quem necessita de O2", fonte: "RECOVERY Collaborative Group, NEJM, 2021" },
      { tema: "Timing da administração na meningite bacteriana", fonte: "IDSA Practice Guidelines for the Management of Bacterial Meningitis, 2004" },
    ],
  },
];
