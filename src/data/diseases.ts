import type { Disease } from "./types";

export const diseases: Disease[] = [
  {
    slug: "hipertensao-arterial-sistemica",
    nome: "Hipertensão arterial sistêmica",
    sinonimos: ["HAS", "Pressão alta"],
    cid10: "I10",
    especialidade: "Cardiologia",
    etiologia: "Multifatorial",
    resumo: "Elevação crônica e sustentada da pressão arterial, principal fator de risco cardiovascular modificável.",
    definicao:
      "Condição clínica caracterizada por elevação persistente dos níveis pressóricos (em geral PA ≥ 140/90 mmHg em consultório, ou limiares menores conforme método de aferição), associada a alterações funcionais e/ou estruturais de órgãos-alvo.",
    epidemiologia:
      "Afeta cerca de 1 em cada 4 adultos no Brasil, com prevalência crescente com a idade. É o principal fator de risco atribuível para doença cardiovascular e mortalidade global.",
    fisiopatologia:
      "Resulta da interação entre predisposição genética e fatores ambientais (dieta rica em sódio, sedentarismo, obesidade), envolvendo disfunção endotelial, ativação do sistema renina-angiotensina-aldosterona, aumento da resistência vascular periférica e remodelamento vascular.",
    classificacao:
      "PA ótima <120/80; normal 120–129/80–84; pré-hipertensão 130–139/85–89; HAS estágio 1: 140–159/90–99; estágio 2: 160–179/100–109; estágio 3: ≥180/110. Crise hipertensiva (PA ≥180/120) se subdivide em urgência (sem lesão aguda de órgão-alvo) e emergência (com lesão aguda).",
    quadroClinico: [
      "Frequentemente assintomática (\"assassina silenciosa\")",
      "Cefaleia occipital matinal em casos de PA muito elevada",
      "Tontura, zumbido, alterações visuais em crises hipertensivas",
      "Sintomas de lesão de órgão-alvo em fases avançadas (dispneia, dor torácica, déficit neurológico)",
    ],
    diagnostico: [
      "Média de pelo menos duas aferições em consultório, em ocasiões distintas",
      "MAPA (monitorização ambulatorial da pressão arterial) ou MRPA para confirmação",
      "Avaliação de lesão de órgão-alvo: ECG, função renal, fundo de olho, microalbuminúria",
    ],
    examesComplementares: [
      "Potássio e creatinina séricos (basal e periódico, especialmente antes de iniciar IECA/BRA)",
      "ECG de repouso (hipertrofia ventricular esquerda)",
      "Relação albumina/creatinina urinária",
      "Perfil lipídico e glicemia de jejum para risco cardiovascular global",
    ],
    diagnosticoDiferencial: [
      "Hipertensão do avental branco",
      "Hipertensão secundária (renovascular, endócrina, apneia do sono)",
      "Hipertensão induzida por medicamentos (AINEs, corticoides, descongestionantes)",
    ],
    tratamento: [
      "Mudança de estilo de vida: redução de sódio, atividade física, controle de peso, redução do álcool",
      "IECA ou BRA, bloqueadores de canal de cálcio e diuréticos tiazídicos como primeira linha",
      "Associação de classes quando meta não é atingida em monoterapia",
      "Meta pressórica individualizada conforme risco cardiovascular",
    ],
    complicacoes: [
      "AVC isquêmico e hemorrágico",
      "Infarto agudo do miocárdio",
      "Insuficiência cardíaca",
      "Doença renal crônica",
      "Retinopatia hipertensiva",
      "Dissecção de aorta",
    ],
    redFlags: [
      "PA ≥180/120 mmHg com sintomas (cefaleia intensa, dor torácica, dispneia, déficit neurológico) — emergência hipertensiva",
      "Papiledema ao fundo de olho",
    ],
    prognostico:
      "Com controle adequado, o risco de eventos cardiovasculares e renais é significativamente reduzido. Hipertensão não controlada é a principal causa evitável de AVC, infarto e doença renal crônica.",
    pontosDeProva: [
      "Emergência hipertensiva tem lesão aguda de órgão-alvo; urgência não — essa distinção define a velocidade de redução da PA, não o valor absoluto isolado",
      "IECA e BRA nunca devem ser associados entre si (duplo bloqueio do SRAA aumenta risco de hipercalemia e lesão renal sem benefício adicional)",
      "A meta pressórica em pacientes de alto risco é ~130/80 mmHg, não apenas <140/90 mmHg",
    ],
    casoClinico: {
      vinheta:
        "Homem, 54 anos, obeso, tabagista, assintomático em consulta de rotina. PA em três consultas: 148/94, 152/96, 146/92 mmHg. Nega uso de medicações. ECG mostra sinais de sobrecarga ventricular esquerda.",
      pergunta: "Qual o diagnóstico e a conduta inicial mais apropriada?",
      raciocinio:
        "PA persistentemente ≥140/90 mmHg em múltiplas aferições confirma hipertensão estágio 1–2. A sobrecarga ao ECG já indica lesão de órgão-alvo, o que eleva o risco cardiovascular e reforça a indicação de tratamento farmacológico imediato, não apenas mudança de estilo de vida isolada.",
      conduta:
        "Iniciar mudança de estilo de vida associada a anti-hipertensivo (IECA/BRA, bloqueador de canal de cálcio ou diurético tiazídico), com meta pressórica próxima de 130/80 mmHg dado o risco cardiovascular já evidenciado.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "losartana-potassica", nome: "Losartana potássica" },
      { slug: "captopril", nome: "Captopril" },
      { slug: "enalapril", nome: "Enalapril" },
    ],
    fontes: [
      { tema: "Classificação pressórica e metas de tratamento", fonte: "Diretriz Brasileira de Hipertensão Arterial, 2020" },
      { tema: "Definição, epidemiologia e fisiopatologia", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Escolha de anti-hipertensivos de 1ª linha", fonte: "Diretriz Brasileira de Hipertensão Arterial, 2020" },
    ],
  },
  {
    slug: "insuficiencia-cardiaca",
    nome: "Insuficiência cardíaca",
    sinonimos: ["IC", "Insuficiência cardíaca congestiva"],
    cid10: "I50",
    especialidade: "Cardiologia",
    etiologia: "Multifatorial",
    resumo: "Síndrome clínica decorrente da incapacidade do coração em bombear sangue suficiente para atender às demandas metabólicas do organismo.",
    definicao:
      "Síndrome caracterizada por sintomas típicos (dispneia, fadiga, edema) causados por anormalidade estrutural e/ou funcional cardíaca, resultando em pressões de enchimento elevadas ou débito cardíaco inadequado.",
    epidemiologia:
      "Principal causa de internação hospitalar em cardiologia no Brasil, com prevalência crescente relacionada ao envelhecimento populacional e à maior sobrevida após infarto do miocárdio.",
    fisiopatologia:
      "Pode originar-se de doença coronariana, hipertensão crônica, valvopatias ou cardiomiopatias. Envolve ativação neuro-hormonal compensatória (sistema renina-angiotensina-aldosterona e sistema nervoso simpático) que, a longo prazo, promove remodelamento cardíaco deletério.",
    classificacao:
      "Classificação funcional NYHA (I a IV, conforme limitação para atividades) e estadiamento estrutural ACC/AHA (A: risco sem doença estrutural; B: doença estrutural sem sintomas; C: doença estrutural com sintomas atuais/prévios; D: IC refratária). Também classificada pela fração de ejeção: reduzida (<40%), levemente reduzida (41–49%) ou preservada (≥50%).",
    quadroClinico: [
      "Dispneia aos esforços, progredindo para ortopneia e dispneia paroxística noturna",
      "Edema de membros inferiores",
      "Fadiga e intolerância ao exercício",
      "Turgência jugular e estertores pulmonares ao exame físico",
    ],
    diagnostico: [
      "Peptídeos natriuréticos (BNP ou NT-proBNP) elevados",
      "Ecocardiograma para avaliação da fração de ejeção e função diastólica",
      "Radiografia de tórax (congestão, cardiomegalia)",
      "Critérios clínicos (ex.: critérios de Framingham)",
    ],
    diagnosticoDiferencial: [
      "Doença pulmonar obstrutiva crônica",
      "Síndrome nefrótica e outras causas de edema",
      "Tromboembolismo pulmonar",
    ],
    examesComplementares: [
      "BNP >100 pg/mL ou NT-proBNP >300 pg/mL sugerem IC descompensada",
      "Ecocardiograma: fração de ejeção, dimensões de câmaras, função diastólica",
      "Radiografia de tórax: cardiomegalia, congestão pulmonar, derrame pleural",
    ],
    tratamento: [
      "IECA/BRA ou inibidor da neprilisina-angiotensina (sacubitril-valsartana)",
      "Betabloqueador em dose otimizada",
      "Antagonista do receptor mineralocorticoide",
      "Inibidor de SGLT2 (classe incorporada mais recentemente ao tratamento independentemente da presença de diabetes)",
      "Diuréticos para controle de sintomas congestivos",
    ],
    complicacoes: [
      "Choque cardiogênico",
      "Arritmias (fibrilação atrial, taquicardia ventricular)",
      "Tromboembolismo",
      "Disfunção renal (síndrome cardiorrenal)",
      "Caquexia cardíaca",
    ],
    redFlags: [
      "Dispneia em repouso com hipotensão e extremidades frias — sinais de baixo débito/choque cardiogênico",
      "Edema agudo de pulmão com insuficiência respiratória",
    ],
    prognostico:
      "Doença crônica e progressiva; o tratamento com as quatro classes farmacológicas pilares reduz significativamente mortalidade e hospitalizações, mas a sobrevida ainda é inferior à de muitos cânceres em estágios avançados da síndrome.",
    pontosDeProva: [
      "As quatro classes com redução de mortalidade comprovada na IC com fração de ejeção reduzida (IECA/BRA ou sacubitril-valsartana, betabloqueador, antagonista mineralocorticoide, iSGLT2) devem ser iniciadas o mais cedo possível, não sequencialmente ao longo de meses",
      "BNP pode estar falsamente baixo em obesos e falsamente elevado na doença renal crônica",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 68 anos, hipertensa há 20 anos, procura pronto-socorro com dispneia progressiva há 1 semana, ortopneia (dorme com 3 travesseiros). Estertores crepitantes bibasais, turgência jugular a 45°, edema de membros inferiores +++/4+.",
      pergunta: "Qual a hipótese diagnóstica e o exame inicial mais útil à beira-leito?",
      raciocinio:
        "Ortopneia, estertores, turgência jugular e edema formam a tríade clássica de congestão sistêmica e pulmonar da IC descompensada. Um BNP/NT-proBNP elevado reforça o diagnóstico à beira-leito, e o ecocardiograma define o mecanismo (fração de ejeção reduzida ou preservada).",
      conduta:
        "Internação, oxigenoterapia se necessário, diurético de alça IV para controle da congestão, investigação da causa de descompensação e otimização das quatro classes de medicações com benefício de mortalidade após estabilização.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "losartana-potassica", nome: "Losartana potássica" },
      { slug: "captopril", nome: "Captopril" },
      { slug: "enalapril", nome: "Enalapril" },
      { slug: "carvedilol", nome: "Carvedilol" },
      { slug: "espironolactona", nome: "Espironolactona" },
      { slug: "dapagliflozina", nome: "Dapagliflozina" },
    ],
    fontes: [
      { tema: "Classificação NYHA/ACC-AHA e por fração de ejeção", fonte: "Diretriz Brasileira de Insuficiência Cardíaca Crônica, SBC 2021" },
      { tema: "Pontos de corte de BNP/NT-proBNP", fonte: "fonte pendente" },
      { tema: "As quatro classes farmacológicas com benefício de mortalidade", fonte: "Diretriz Brasileira de Insuficiência Cardíaca Crônica, SBC 2021" },
    ],
  },
  {
    slug: "diabetes-mellitus-tipo-2",
    nome: "Diabetes mellitus tipo 2",
    sinonimos: ["DM2", "Diabetes tipo 2"],
    cid10: "E11",
    especialidade: "Endocrinologia",
    etiologia: "Metabólica",
    resumo: "Distúrbio metabólico crônico caracterizado por hiperglicemia decorrente de resistência à insulina e deficiência relativa de sua secreção.",
    definicao:
      "Doença metabólica crônica definida por hiperglicemia persistente, resultante da combinação de resistência periférica à ação da insulina e disfunção progressiva das células beta pancreáticas.",
    epidemiologia:
      "Corresponde a cerca de 90% dos casos de diabetes. Fortemente associada a obesidade, sedentarismo e história familiar, com prevalência crescente em todas as faixas etárias.",
    fisiopatologia:
      "A resistência insulínica em tecido muscular, hepático e adiposo leva a hiperinsulinemia compensatória; com o tempo, ocorre exaustão progressiva das células beta, resultando em hiperglicemia franca.",
    classificacao:
      "Controle glicêmico avaliado pela HbA1c: meta geral <7% (individualizar — metas mais flexíveis, até 8–8,5%, em idosos frágeis ou multimorbidade). Estágios de risco: pré-diabetes (glicemia de jejum 100–125 mg/dL ou HbA1c 5,7–6,4%) e diabetes estabelecido conforme critérios diagnósticos.",
    quadroClinico: [
      "Frequentemente assintomático no início, diagnosticado em rastreamento",
      "Poliúria, polidipsia e perda de peso em casos mais avançados",
      "Visão turva",
      "Complicações crônicas em fases tardias (neuropatia, retinopatia, nefropatia)",
    ],
    diagnostico: [
      "Glicemia de jejum ≥ 126 mg/dL em duas ocasiões",
      "Hemoglobina glicada (HbA1c) ≥ 6,5%",
      "Glicemia ao acaso ≥ 200 mg/dL com sintomas clássicos",
      "Teste oral de tolerância à glicose (TOTG) alterado",
    ],
    diagnosticoDiferencial: [
      "Diabetes mellitus tipo 1 (geralmente instalação mais abrupta, cetose)",
      "Diabetes tipo MODY",
      "Hiperglicemia de estresse (em contexto agudo hospitalar)",
    ],
    examesComplementares: [
      "HbA1c a cada 3–6 meses conforme controle glicêmico",
      "Relação albumina/creatinina urinária anual (rastreio de nefropatia)",
      "Fundo de olho anual (rastreio de retinopatia)",
      "Perfil lipídico anual",
    ],
    tratamento: [
      "Mudanças de estilo de vida: dieta, atividade física e perda de peso",
      "Metformina como primeira linha farmacológica",
      "Associação de inibidores de SGLT2 ou análogos de GLP-1, especialmente com doença cardiovascular ou renal estabelecida",
      "Insulinização quando há falha das terapias orais/injetáveis não insulínicas",
    ],
    complicacoes: [
      "Retinopatia diabética",
      "Nefropatia diabética",
      "Neuropatia periférica e autonômica",
      "Pé diabético",
      "Doença cardiovascular aterosclerótica (principal causa de morte)",
    ],
    redFlags: [
      "Glicemia muito elevada com desidratação e alteração do nível de consciência — suspeitar de estado hiperosmolar hiperglicêmico",
      "Cetoacidose (mais típica do DM1, mas pode ocorrer no DM2 sob estresse metabólico grave)",
    ],
    prognostico:
      "Controle glicêmico adequado reduz significativamente o risco de complicações microvasculares e macrovasculares. Doença progressiva, exigindo intensificação terapêutica ao longo do tempo na maioria dos pacientes.",
    pontosDeProva: [
      "Metformina segue sendo a primeira linha mesmo na era dos iSGLT2/GLP-1 — o que mudou foi a priorização do SEGUNDO agente por proteção cardiorrenal, não a primeira escolha",
      "HbA1c estima a glicemia média dos últimos 2–3 meses e não substitui a glicemia capilar para ajuste fino de insulina",
    ],
    casoClinico: {
      vinheta:
        "Homem, 47 anos, obesidade grau II, assintomático, em check-up de rotina. Glicemia de jejum: 142 mg/dL, repetida em outra amostra: 138 mg/dL.",
      pergunta: "O diagnóstico de diabetes está confirmado? Qual a conduta inicial?",
      raciocinio:
        "Duas glicemias de jejum ≥126 mg/dL em ocasiões distintas confirmam diabetes mellitus, mesmo sem sintomas clássicos (poliúria, polidipsia, perda de peso), que costumam surgir apenas em fases mais avançadas.",
      conduta:
        "Iniciar mudança de estilo de vida associada a metformina desde o diagnóstico, com HbA1c basal, perfil lipídico e avaliação de complicações (fundo de olho, albuminúria) para estratificação de risco.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "metformina", nome: "Metformina" },
      { slug: "dapagliflozina", nome: "Dapagliflozina" },
      { slug: "insulina-nph", nome: "Insulina NPH humana" },
    ],
    fontes: [
      { tema: "Critérios diagnósticos e metas de HbA1c", fonte: "Diretrizes da Sociedade Brasileira de Diabetes, 2023-2024" },
      { tema: "Algoritmo terapêutico e priorização de 2º agente por comorbidade", fonte: "Diretrizes da Sociedade Brasileira de Diabetes, 2023-2024" },
    ],
  },
  {
    slug: "hipotireoidismo",
    nome: "Hipotireoidismo (Tireoidite de Hashimoto)",
    sinonimos: ["Tireoidite autoimune crônica"],
    cid10: "E03.9",
    especialidade: "Endocrinologia",
    etiologia: "Autoimune",
    resumo: "Deficiência de hormônios tireoidianos, mais comumente causada por tireoidite autoimune crônica no adulto.",
    definicao:
      "Síndrome clínica decorrente da produção insuficiente de hormônios tireoidianos (T3 e T4), sendo a tireoidite de Hashimoto a causa mais comum em áreas com suficiência de iodo.",
    epidemiologia:
      "Mais prevalente em mulheres, com pico entre 30 e 60 anos. Frequentemente associada a outras doenças autoimunes.",
    fisiopatologia:
      "Processo autoimune com infiltração linfocitária da tireoide e produção de anticorpos antitireoidianos (anti-TPO, antitireoglobulina), levando à destruição progressiva do parênquima glandular e queda na produção hormonal.",
    classificacao:
      "Hipotireoidismo subclínico (TSH elevado com T4 livre normal) versus clínico/franco (TSH elevado com T4 livre reduzido). A gravidade também pode ser estimada pelo grau de elevação do TSH.",
    quadroClinico: [
      "Fadiga e intolerância ao frio",
      "Ganho de peso e constipação",
      "Pele seca, queda de cabelo, edema periorbitário",
      "Bradicardia e lentificação psicomotora",
      "Bócio (em fases iniciais) ou tireoide atrófica (fases avançadas)",
    ],
    diagnostico: [
      "TSH elevado com T4 livre reduzido (hipotireoidismo primário)",
      "Anticorpos anti-TPO positivos",
      "Ultrassonografia tireoidiana (padrão heterogêneo)",
    ],
    diagnosticoDiferencial: [
      "Hipotireoidismo central (hipofisário)",
      "Síndrome do eutireoidiano doente",
      "Depressão e outras causas de fadiga crônica",
    ],
    examesComplementares: [
      "TSH: referência geral 0,4–4,0 mUI/L (elevado no hipotireoidismo primário)",
      "T4 livre reduzido no hipotireoidismo clínico (normal no subclínico)",
      "Anti-TPO positivo em mais de 90% dos casos de tireoidite de Hashimoto",
    ],
    tratamento: [
      "Reposição com levotiroxina em dose individualizada, em jejum",
      "Monitorização periódica do TSH para ajuste de dose",
      "Ajuste de dose em situações especiais (gestação, uso de outras medicações que interferem na absorção)",
    ],
    complicacoes: [
      "Coma mixedematoso (forma extrema, rara, com risco de vida)",
      "Dislipidemia secundária",
      "Infertilidade e complicações gestacionais se não tratado",
    ],
    redFlags: [
      "Hipotermia, rebaixamento do nível de consciência e bradicardia grave em paciente hipotireoideo — suspeitar de coma mixedematoso, emergência endócrina",
    ],
    prognostico:
      "Excelente com reposição hormonal adequada e adesão ao tratamento; a maioria dos pacientes mantém qualidade de vida normal com controle laboratorial regular.",
    pontosDeProva: [
      "TSH é o exame de rastreio mais sensível para hipotireoidismo primário — pode alterar antes mesmo de o T4 livre cair (hipotireoidismo subclínico)",
      "Levotiroxina deve ser tomada em jejum, com 30–60 min de intervalo de alimentos e de cálcio, ferro ou IBP, que reduzem sua absorção",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 38 anos, com fadiga, ganho de 5 kg em 6 meses, intolerância ao frio e constipação. Pele seca, bradicardia leve. TSH: 18 mUI/L; T4 livre: 0,6 ng/dL.",
      pergunta: "Qual o diagnóstico mais provável e como iniciar o tratamento?",
      raciocinio:
        "TSH elevado com T4 livre reduzido confirma hipotireoidismo primário clínico. Anti-TPO positiva confirmaria a etiologia autoimune (Hashimoto), a causa mais comum em áreas com suficiência de iodo.",
      conduta:
        "Iniciar levotiroxina em dose ajustada ao peso, pela manhã em jejum, com reavaliação do TSH em 6–8 semanas para ajuste de dose.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "levotiroxina-sodica", nome: "Levotiroxina sódica" },
    ],
    fontes: [
      { tema: "Definição, diagnóstico e classificação subclínico/clínico", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Posologia e monitorização da levotiroxina", fonte: "American Thyroid Association, Guidelines for the Treatment of Hypothyroidism, 2014" },
    ],
  },
  {
    slug: "asma",
    nome: "Asma",
    sinonimos: ["Asma brônquica"],
    cid10: "J45",
    especialidade: "Pneumologia",
    etiologia: "Multifatorial",
    resumo: "Doença inflamatória crônica das vias aéreas, caracterizada por hiper-responsividade brônquica e obstrução reversível ao fluxo aéreo.",
    definicao:
      "Doença heterogênea, geralmente caracterizada por inflamação crônica das vias aéreas, definida por história de sintomas respiratórios variáveis (sibilância, dispneia, aperto no peito, tosse) associados a limitação variável do fluxo aéreo expiratório.",
    epidemiologia:
      "Uma das doenças crônicas mais comuns na infância, podendo persistir ou surgir na vida adulta. Associada a atopia, história familiar e exposições ambientais.",
    fisiopatologia:
      "Envolve inflamação crônica mediada predominantemente por eosinófilos e linfócitos Th2, resultando em hiper-responsividade brônquica, broncoconstrição, edema de mucosa e hipersecreção de muco frente a estímulos diversos (alérgenos, exercício, infecções).",
    classificacao:
      "Gravidade classificada em intermitente, persistente leve, moderada e grave, conforme frequência de sintomas diurnos/noturnos e função pulmonar. O controle é reavaliado a cada consulta (controlada, parcialmente controlada, não controlada), guiando o ajuste de degrau terapêutico (step up/step down).",
    quadroClinico: [
      "Sibilância, mais evidente à expiração",
      "Dispneia episódica",
      "Tosse seca, frequentemente noturna",
      "Sensação de aperto no peito",
      "Sintomas desencadeados por exercício, alérgenos ou infecções respiratórias",
    ],
    diagnostico: [
      "Espirometria com padrão obstrutivo e resposta ao broncodilatador (aumento do VEF1 ≥ 12% e 200 mL)",
      "Variabilidade do pico de fluxo expiratório",
      "Teste de broncoprovocação em casos duvidosos",
    ],
    diagnosticoDiferencial: [
      "DPOC",
      "Refluxo gastroesofágico com tosse crônica",
      "Disfunção de cordas vocais",
      "Insuficiência cardíaca (asma cardíaca)",
    ],
    examesComplementares: [
      "Espirometria com prova broncodilatadora: aumento ≥12% e 200 mL do VEF1 pós-broncodilatador confirma reversibilidade",
      "Pico de fluxo expiratório (PFE) seriado: variabilidade >10–20% sugere asma",
      "Teste de broncoprovocação (metacolina) em casos duvidosos com espirometria normal",
    ],
    tratamento: [
      "Corticoide inalatório como base do tratamento de manutenção, mesmo em quadros leves",
      "Associação com broncodilatador de longa duração conforme gravidade",
      "Broncodilatador de curta duração para alívio (resgate)",
      "Educação sobre técnica inalatória e controle de gatilhos ambientais",
    ],
    complicacoes: [
      "Estado de mal asmático (crise grave refratária ao tratamento inicial)",
      "Remodelamento das vias aéreas com perda de função pulmonar em asma crônica não controlada",
      "Pneumotórax (raro, em crises graves)",
    ],
    redFlags: [
      "Dificuldade para falar frases completas, uso de musculatura acessória, saturação <92% ou silêncio auscultatório — sinais de crise grave/iminência de parada respiratória",
    ],
    prognostico:
      "Com tratamento adequado, a maioria dos pacientes atinge bom controle dos sintomas e função pulmonar preservada. Exacerbações graves não controladas podem ser fatais.",
    pontosDeProva: [
      "Uso frequente de SABA de resgate (>2x/semana) sem corticoide inalatório associado é hoje considerado tratamento inadequado, independentemente da gravidade classificada",
      "Silêncio auscultatório numa crise asmática é sinal de gravidade extrema (fluxo tão reduzido que nem sibilo se ausculta), não de melhora",
    ],
    casoClinico: {
      vinheta:
        "Adolescente, 16 anos, tosse seca noturna recorrente há 3 meses e aperto no peito após educação física. Usa salbutamol de resgate ~4 vezes por semana. Espirometria: VEF1/CVF reduzido, VEF1 aumenta 15% pós-broncodilatador.",
      pergunta: "O tratamento atual (apenas resgate) está adequado? Qual a conduta?",
      raciocinio:
        "A espirometria confirma obstrução reversível, compatível com asma. Resgate mais de 2x/semana indica controle inadequado — pelas diretrizes atuais, é indicação de corticoide inalatório de manutenção, mesmo em asma rotulada como 'leve'.",
      conduta:
        "Iniciar corticoide inalatório em dose baixa (ou esquema combinado corticoide + formoterol sob demanda), reforçar técnica inalatória e reavaliar controle em 4–6 semanas.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "budesonida-inalatoria", nome: "Budesonida inalatória" },
      { slug: "salbutamol", nome: "Salbutamol" },
      { slug: "prednisona", nome: "Prednisona" },
    ],
    fontes: [
      { tema: "Classificação de gravidade/controle e algoritmo terapêutico", fonte: "GINA (Global Initiative for Asthma), 2024" },
      { tema: "Critérios diagnósticos espirométricos", fonte: "GINA (Global Initiative for Asthma), 2024" },
    ],
  },
  {
    slug: "pneumonia-adquirida-na-comunidade",
    nome: "Pneumonia adquirida na comunidade",
    sinonimos: ["PAC"],
    cid10: "J18",
    especialidade: "Pneumologia",
    etiologia: "Bacteriana",
    resumo: "Infecção aguda do parênquima pulmonar adquirida fora do ambiente hospitalar, principal causa infecciosa de internação.",
    definicao:
      "Infecção aguda do parênquima pulmonar adquirida na comunidade, manifestada por sintomas respiratórios agudos associados a infiltrado radiológico novo.",
    epidemiologia:
      "Streptococcus pneumoniae é o agente mais comum; patógenos atípicos (Mycoplasma, Chlamydophila, Legionella) e vírus respiratórios também são relevantes, especialmente em pacientes mais jovens.",
    fisiopatologia:
      "Ocorre quando mecanismos de defesa das vias aéreas (clearance mucociliar, resposta imune local) são superados por um patógeno, levando à inflamação e consolidação alveolar.",
    classificacao:
      "Gravidade estratificada pelo escore CURB-65 (confusão, ureia >50 mg/dL, FR ≥30, PA sistólica <90 ou diastólica ≤60, idade ≥65 — 1 ponto cada): 0–1 ambulatorial, 2 considerar internação, ≥3 internação (avaliar UTI se ≥4). O PSI (Pneumonia Severity Index) é uma alternativa mais complexa.",
    quadroClinico: [
      "Febre e calafrios",
      "Tosse produtiva",
      "Dor torácica pleurítica",
      "Dispneia",
      "Estertores crepitantes localizados ao exame físico",
    ],
    diagnostico: [
      "Radiografia de tórax com infiltrado/consolidação",
      "Escores de gravidade (CURB-65 ou PSI) para definir local de tratamento",
      "Hemocultura e cultura de escarro em casos selecionados/graves",
    ],
    diagnosticoDiferencial: [
      "Bronquite aguda",
      "Tromboembolismo pulmonar",
      "Tuberculose pulmonar",
      "Insuficiência cardíaca descompensada",
    ],
    examesComplementares: [
      "Radiografia de tórax PA e perfil: infiltrado/consolidação novo",
      "PCR e leucograma: apoiam mas não confirmam isoladamente",
      "Hemocultura e cultura de escarro em casos graves ou internados, antes do antibiótico",
      "Saturação de O2/gasometria arterial se dispneia significativa",
    ],
    tratamento: [
      "Antibioticoterapia empírica guiada por escore de gravidade e comorbidades",
      "Ambulatorial sem comorbidades: amoxicilina ou macrolídeo",
      "Internação: betalactâmico associado a macrolídeo ou monoterapia com fluoroquinolona respiratória",
      "Suporte com oxigenoterapia conforme necessidade",
    ],
    complicacoes: [
      "Derrame pleural parapneumônico e empiema",
      "Abscesso pulmonar",
      "Sepse e choque séptico",
      "Insuficiência respiratória aguda",
    ],
    redFlags: [
      "Confusão mental aguda em idoso com quadro respiratório — pode ser a única manifestação de gravidade e sepse",
      "Hipotensão ou taquipneia importante (FR ≥30)",
    ],
    prognostico:
      "Bom na maioria dos casos tratados precocemente; mortalidade significativamente maior em idosos, imunossuprimidos e casos com necessidade de UTI.",
    pontosDeProva: [
      "CURB-65 baixo não exclui necessidade de internação por fatores sociais (impossibilidade de cuidado domiciliar, comorbidades descompensadas) — o escore orienta, não substitui o julgamento clínico",
      "Cobertura para atípicos (macrolídeo ou fluoroquinolona respiratória) é recomendada mesmo empiricamente, pois Mycoplasma e Chlamydophila não são diferenciáveis clinicamente de forma confiável",
    ],
    casoClinico: {
      vinheta:
        "Homem, 72 anos, diabético, trazido por confusão mental de início há 1 dia, tosse produtiva e febre. PA 88/56 mmHg, FR 32 irpm, FC 110 bpm. Radiografia: consolidação em lobo inferior direito.",
      pergunta: "Qual a pontuação estimada no CURB-65 e a conduta apropriada?",
      raciocinio:
        "Confusão (1) + PA sistólica <90 (1) + FR ≥30 (1) + idade ≥65 (1) já somam 4 pontos, indicando pneumonia grave com necessidade de internação e avaliação para UTI.",
      conduta:
        "Internação com avaliação para UTI, hemoculturas antes da antibioticoterapia, antibiótico empírico de amplo espectro cobrindo típicos e atípicos, e suporte hemodinâmico/ventilatório conforme necessidade.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "amoxicilina", nome: "Amoxicilina" },
      { slug: "amoxicilina-clavulanato", nome: "Amoxicilina + Clavulanato" },
      { slug: "azitromicina", nome: "Azitromicina" },
    ],
    fontes: [
      { tema: "Escore CURB-65 e estratificação de gravidade", fonte: "fonte pendente" },
      { tema: "Escolha empírica de antibiótico por gravidade", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "tuberculose-pulmonar",
    nome: "Tuberculose pulmonar",
    sinonimos: ["TB", "Tísica (termo histórico)"],
    cid10: "A15",
    especialidade: "Infectologia",
    etiologia: "Bacteriana",
    resumo: "Infecção causada pelo Mycobacterium tuberculosis, ainda um importante problema de saúde pública no Brasil.",
    definicao:
      "Doença infecciosa crônica causada pelo Mycobacterium tuberculosis, acometendo predominantemente os pulmões, transmitida por via aérea através de gotículas respiratórias (bacilos de Koch).",
    epidemiologia:
      "O Brasil está entre os países com alta carga de tuberculose no mundo; fatores de risco incluem pobreza, superlotação, HIV/AIDS e imunossupressão.",
    fisiopatologia:
      "Após inalação, os bacilos são fagocitados por macrófagos alveolares; a resposta imune celular forma granulomas que podem conter a infecção (latente) ou, em caso de falha imunológica, progredir para doença ativa com necrose caseosa e cavitação.",
    classificacao:
      "Classificada quanto à baciloscopia (positiva/negativa), forma (pulmonar cavitária clássica vs. extrapulmonar) e histórico de tratamento (caso novo, recidiva, retratamento após abandono, falência terapêutica) — relevante para escolha do esquema e risco de resistência.",
    quadroClinico: [
      "Tosse persistente por mais de 3 semanas",
      "Febre vespertina e sudorese noturna",
      "Perda de peso e astenia",
      "Hemoptise em casos mais avançados",
    ],
    diagnostico: [
      "Baciloscopia de escarro (BAAR)",
      "Teste rápido molecular para tuberculose (TRM-TB)",
      "Cultura para micobactérias com teste de sensibilidade",
      "Radiografia de tórax (cavitação em lobos superiores é sugestiva)",
    ],
    diagnosticoDiferencial: [
      "Pneumonia bacteriana de resolução lenta",
      "Neoplasia pulmonar",
      "Micoses pulmonares (paracoccidioidomicose, histoplasmose)",
    ],
    examesComplementares: [
      "Teste rápido molecular (TRM-TB): resultado em ~2h, também detecta resistência à rifampicina",
      "Baciloscopia de escarro (2 amostras): mais acessível, menor sensibilidade",
      "Cultura com teste de sensibilidade: padrão-ouro, resultado mais demorado",
      "Radiografia de tórax: cavitação em lobos superiores é sugestiva mas não exclusiva",
    ],
    tratamento: [
      "Esquema padrão RIPE (rifampicina, isoniazida, pirazinamida, etambutol) por 2 meses, seguido de rifampicina e isoniazida por mais 4 meses",
      "Tratamento diretamente observado (DOT) para garantir adesão",
      "Notificação compulsória e investigação de contatos",
    ],
    complicacoes: [
      "Hemoptise maciça",
      "Fibrose pulmonar e bronquiectasias sequelares",
      "Disseminação miliar (especialmente em imunossuprimidos)",
      "Resistência medicamentosa (multirresistência) por abandono do tratamento",
    ],
    redFlags: [
      "Hemoptise volumosa — risco de asfixia, não apenas de anemia",
      "Sinais de disseminação miliar (febre prolongada, hepatoesplenomegalia, padrão radiológico micronodular difuso)",
    ],
    prognostico:
      "Alta taxa de cura com tratamento completo e adequado. Abandono do tratamento é o principal fator associado à resistência bacteriana (multirresistência).",
    pontosDeProva: [
      "O tratamento diretamente observado (DOT) e a garantia de adesão são mais determinantes para o desfecho do que a escolha do esquema em si",
      "Tuberculose é de notificação compulsória — a investigação de contactantes é parte obrigatória do manejo, não opcional",
    ],
    casoClinico: {
      vinheta:
        "Homem, 34 anos, em situação de rua, tosse há 5 semanas, febre vespertina, sudorese noturna e emagrecimento de 6 kg. Nega comorbidades conhecidas.",
      pergunta: "Qual a investigação inicial obrigatória diante desse quadro?",
      raciocinio:
        "Tosse persistente por mais de 3 semanas com febre vespertina, sudorese noturna e emagrecimento é a apresentação clássica de tuberculose pulmonar e deve sempre disparar investigação ativa, especialmente em populações vulneráveis.",
      conduta:
        "Solicitar teste rápido molecular para TB e baciloscopia de escarro, associados a radiografia de tórax. Se confirmado, iniciar esquema RIPE, notificação compulsória e investigação de contactantes, preferencialmente com DOT.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "esquema-ripe", nome: "Esquema RIPE (rifampicina + isoniazida + pirazinamida + etambutol)" },
    ],
    fontes: [
      { tema: "Esquema RIPE, diagnóstico (TRM-TB, baciloscopia) e DOT", fonte: "Manual de Recomendações para o Controle da Tuberculose no Brasil, Ministério da Saúde" },
    ],
  },
  {
    slug: "dengue",
    nome: "Dengue",
    sinonimos: ["Febre da dengue"],
    cid10: "A90",
    especialidade: "Infectologia",
    etiologia: "Viral",
    resumo: "Arbovirose transmitida pelo Aedes aegypti, de grande relevância epidemiológica no Brasil, com potencial evolução para formas graves.",
    definicao:
      "Doença febril aguda causada pelo vírus da dengue (DENV, sorotipos 1 a 4), transmitida pela picada do mosquito Aedes aegypti, podendo variar de quadro autolimitado a formas graves com choque.",
    epidemiologia:
      "Endêmica em grande parte do Brasil, com surtos sazonais associados ao período chuvoso. A reinfecção por sorotipo diferente aumenta o risco de formas graves.",
    fisiopatologia:
      "Após a picada do mosquito infectado, o vírus replica-se e dissemina-se, causando resposta imune que, em infecções secundárias por sorotipo distinto, pode gerar aumento da permeabilidade vascular (fenômeno de facilitação imunológica), predispondo a extravasamento plasmático.",
    classificacao:
      "Classificação de risco em grupos: A (sem sinais de alarme, sem comorbidades — acompanhamento ambulatorial), B (sem sinais de alarme, mas com comorbidades/risco social — observação), C (com sinais de alarme — internação e hidratação IV), D (choque/sinais de gravidade — internação em UTI, reposição volêmica imediata).",
    quadroClinico: [
      "Febre alta de início súbito",
      "Cefaleia, dor retro-orbitária, mialgia e artralgia intensas",
      "Exantema maculopapular",
      "Sinais de alarme: dor abdominal intensa, vômitos persistentes, sangramento de mucosas, letargia",
    ],
    diagnostico: [
      "Prova do laço e avaliação clínica de sinais de alarme",
      "Sorologia (IgM/IgG) ou antígeno NS1",
      "Hemograma seriado (hemoconcentração, plaquetopenia)",
      "RT-PCR em fase virêmica precoce",
    ],
    diagnosticoDiferencial: [
      "Chikungunya e Zika",
      "Influenza",
      "Leptospirose",
      "Malária (em áreas endêmicas)",
    ],
    examesComplementares: [
      "Hemograma seriado: hemoconcentração (hematócrito elevado) e plaquetopenia progressiva indicam extravasamento plasmático",
      "NS1 (antígeno viral): positivo nos primeiros dias de febre",
      "Sorologia IgM: positiva a partir do 6º dia de sintomas",
    ],
    tratamento: [
      "Hidratação oral ou venosa conforme classificação de risco",
      "Paracetamol para febre e dor (evitar AINEs e AAS pelo risco de sangramento)",
      "Monitorização de sinais de alarme e reclassificação frequente",
      "Internação e reposição volêmica intensiva nas formas graves",
    ],
    complicacoes: [
      "Síndrome do choque da dengue",
      "Hemorragias graves (digestivas, intracranianas)",
      "Miocardite e outras manifestações viscerais atípicas",
      "Insuficiência hepática aguda",
    ],
    redFlags: [
      "Dor abdominal intensa e contínua",
      "Vômitos persistentes",
      "Sangramento de mucosas",
      "Letargia ou irritabilidade",
      "Queda abrupta da temperatura com piora clínica (defervescência de risco)",
    ],
    prognostico:
      "Bom na maioria dos casos com hidratação adequada; a identificação precoce dos sinais de alarme é determinante para reduzir mortalidade nas formas graves.",
    pontosDeProva: [
      "A fase mais perigosa da dengue é a defervescência (queda da febre), não o pico febril — é quando o extravasamento plasmático se intensifica",
      "AINEs e AAS são contraindicados pelo risco de sangramento; paracetamol é a opção segura para febre e dor",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 25 anos, febre há 4 dias que cedeu subitamente hoje. Dor abdominal intensa e contínua e dois episódios de vômito nas últimas horas. Hematócrito subiu de 38% para 46% em 24h; plaquetas: 78.000/mm³.",
      pergunta: "Em qual grupo de risco a paciente se classifica e qual a conduta?",
      raciocinio:
        "Queda da febre associada a dor abdominal intensa, vômitos persistentes e hemoconcentração com plaquetopenia são sinais de alarme clássicos, classificando a paciente no grupo C — risco de evolução para choque por extravasamento plasmático.",
      conduta:
        "Internação para hidratação venosa vigorosa conforme protocolo, monitorização seriada de hematócrito, plaquetas e sinais vitais, com reclassificação de risco a cada reavaliação.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "paracetamol", nome: "Paracetamol" },
    ],
    fontes: [
      { tema: "Classificação de risco (grupos A-D) e sinais de alarme", fonte: "Guia de Manejo Clínico da Dengue, Ministério da Saúde" },
      { tema: "Contraindicação de AINEs/AAS e uso de paracetamol", fonte: "Guia de Manejo Clínico da Dengue, Ministério da Saúde" },
    ],
  },
  {
    slug: "covid-19",
    nome: "COVID-19",
    sinonimos: ["Doença pelo coronavírus 2019", "SARS-CoV-2"],
    cid10: "U07.1",
    especialidade: "Infectologia",
    etiologia: "Viral",
    resumo: "Doença respiratória causada pelo SARS-CoV-2, com espectro clínico variando de infecção assintomática a síndrome respiratória aguda grave.",
    definicao:
      "Doença infecciosa causada pelo coronavírus SARS-CoV-2, transmitida principalmente por gotículas e aerossóis respiratórios, com apresentação clínica heterogênea.",
    epidemiologia:
      "Responsável por pandemia global iniciada em 2020; atualmente com padrão de circulação sazonal semelhante a outros vírus respiratórios, com surtos periódicos associados a novas variantes.",
    fisiopatologia:
      "O vírus liga-se ao receptor ACE2 em células epiteliais respiratórias, podendo causar desde resposta inflamatória local leve até resposta inflamatória sistêmica exacerbada (\"tempestade de citocinas\") nos casos graves, com lesão endotelial e risco de fenômenos trombóticos.",
    classificacao:
      "Gravidade classificada em assintomática, leve (sintomas sem dispneia/hipóxia), moderada (dispneia ou infiltrado pulmonar sem hipóxia grave), grave (SpO2 <94% em ar ambiente, FR >30, infiltrado >50%) e crítica (insuficiência respiratória, choque séptico, disfunção de múltiplos órgãos).",
    quadroClinico: [
      "Febre, tosse seca e fadiga",
      "Anosmia e ageusia (mais características das cepas iniciais)",
      "Dispneia progressiva nos casos moderados a graves",
      "Manifestações extrapulmonares (trombose, síndrome inflamatória multissistêmica em crianças)",
    ],
    diagnostico: [
      "RT-PCR em swab nasofaríngeo (padrão-ouro)",
      "Teste antigênico rápido",
      "Tomografia de tórax (opacidades em vidro fosco) em casos selecionados",
    ],
    diagnosticoDiferencial: [
      "Influenza e outras viroses respiratórias",
      "Pneumonia bacteriana",
      "Outras causas de síndrome respiratória aguda grave",
    ],
    examesComplementares: [
      "RT-PCR: padrão-ouro, positivo geralmente por até 2–3 semanas",
      "Teste antigênico rápido: menor sensibilidade, resultado em minutos, útil em triagem",
      "Tomografia de tórax: opacidades em vidro fosco bilaterais e periféricas em casos moderados/graves",
    ],
    tratamento: [
      "Suporte sintomático na maioria dos casos leves",
      "Corticoide sistêmico (dexametasona) em casos com necessidade de oxigênio suplementar",
      "Antivirais específicos em pacientes de alto risco, quando indicados precocemente",
      "Suporte ventilatório em casos graves",
    ],
    complicacoes: [
      "Síndrome do desconforto respiratório agudo (SDRA)",
      "Fenômenos tromboembólicos",
      "Síndrome inflamatória multissistêmica (mais descrita em crianças)",
      "Condição pós-COVID (sintomas persistentes por semanas a meses)",
    ],
    redFlags: [
      "Saturação de O2 <94% em ar ambiente",
      "Frequência respiratória >30 irpm",
      "Confusão mental ou sonolência de início agudo",
    ],
    prognostico:
      "Maioria dos casos é leve e autolimitada; idade avançada, obesidade e comorbidades cardiopulmonares aumentam o risco de evolução grave. Vacinação reduz significativamente hospitalização e óbito.",
    pontosDeProva: [
      "Corticoide sistêmico (dexametasona) só demonstrou benefício de mortalidade em pacientes que necessitam de oxigênio suplementar — não deve ser usado rotineiramente em casos leves",
      "Vacinação reduz principalmente hospitalização e óbito, não elimina completamente a transmissão",
    ],
    casoClinico: {
      vinheta:
        "Homem, 60 anos, não vacinado, obeso, febre e tosse há 5 dias, evolui com dispneia progressiva. SpO2 em ar ambiente: 91%. RT-PCR positivo para SARS-CoV-2.",
      pergunta: "O paciente preencheu critério para qual intervenção terapêutica específica?",
      raciocinio:
        "SpO2 <94% em ar ambiente classifica o quadro como grave e indica necessidade de oxigênio suplementar. É justamente nesse subgrupo que o corticoide sistêmico (dexametasona) demonstrou redução de mortalidade em estudos robustos.",
      conduta:
        "Internação, oxigenoterapia suplementar, início de dexametasona, e monitorização para sinais de progressão que exijam suporte ventilatório mais avançado.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "dexametasona", nome: "Dexametasona" },
    ],
    medicamentosSecaoTitulo: "Medicamento para casos graves (com necessidade de O2)",
    medicamentosNota:
      "A dexametasona só demonstrou benefício de mortalidade em pacientes que necessitam de oxigênio suplementar. Não deve ser usada rotineiramente em casos leves, contexto em que pode ser prejudicial.",
    fontes: [
      { tema: "Classificação de gravidade", fonte: "NIH COVID-19 Treatment Guidelines" },
      { tema: "Indicação de corticoide sistêmico em quem necessita de O2 suplementar", fonte: "RECOVERY trial (NEJM, 2021) / NIH COVID-19 Treatment Guidelines" },
    ],
  },
  {
    slug: "gastrite",
    nome: "Gastrite",
    sinonimos: ["Gastrite aguda e crônica"],
    cid10: "K29",
    especialidade: "Gastroenterologia",
    etiologia: "Multifatorial",
    resumo: "Processo inflamatório da mucosa gástrica, podendo ser agudo ou crônico, com múltiplas causas possíveis.",
    definicao:
      "Termo histopatológico que descreve inflamação da mucosa gástrica, podendo ser causada por infecção, uso de medicamentos, álcool, estresse fisiológico grave ou processos autoimunes.",
    epidemiologia:
      "Extremamente prevalente; a infecção por Helicobacter pylori é a causa mais comum de gastrite crônica em nível mundial.",
    fisiopatologia:
      "Ocorre desequilíbrio entre fatores agressores (ácido, pepsina, H. pylori, AINEs) e mecanismos protetores da mucosa gástrica (muco, bicarbonato, fluxo sanguíneo), resultando em inflamação e, eventualmente, erosões.",
    classificacao:
      "Classificação de Sydney (histopatológica): aguda vs. crônica, por etiologia (associada a H. pylori, autoimune, química/reacional — por AINE, álcool, bile). A gastrite atrófica crônica é o subtipo de maior relevância pelo risco neoplásico.",
    quadroClinico: [
      "Dor ou desconforto epigástrico",
      "Náusea e sensação de plenitude pós-prandial",
      "Pode ser assintomática",
      "Hematêmese ou melena em casos de gastrite erosiva com sangramento",
    ],
    diagnostico: [
      "Endoscopia digestiva alta com biópsia",
      "Teste para H. pylori (teste respiratório, antígeno fecal ou biópsia)",
      "Correlação clínico-histopatológica",
    ],
    diagnosticoDiferencial: [
      "Doença do refluxo gastroesofágico",
      "Úlcera péptica",
      "Dispepsia funcional",
      "Síndrome coronariana (dor referida em casos atípicos)",
    ],
    examesComplementares: [
      "Endoscopia digestiva alta com biópsia: padrão-ouro para confirmação e classificação histológica",
      "Teste respiratório da ureia ou antígeno fecal para H. pylori: não invasivos, úteis para diagnóstico e controle de cura",
      "Sorologia anti-H. pylori: indica exposição prévia, não diferencia infecção ativa",
    ],
    tratamento: [
      "Inibidor da bomba de prótons",
      "Erradicação do H. pylori quando identificado (esquema combinado com antibióticos)",
      "Suspensão de AINEs e álcool quando fatores causais",
    ],
    complicacoes: [
      "Úlcera péptica",
      "Hemorragia digestiva alta (gastrite erosiva)",
      "Gastrite atrófica com metaplasia intestinal (lesão pré-neoplásica)",
      "Anemia por deficiência de B12 na gastrite atrófica autoimune",
    ],
    redFlags: [
      "Emagrecimento, disfagia, hematêmese/melena, anemia ou idade >45–50 anos com sintomas novos — indicam endoscopia obrigatória, não apenas tratamento empírico",
    ],
    prognostico:
      "Geralmente favorável com remoção do fator causal e tratamento adequado; gastrite atrófica crônica não tratada associa-se a maior risco de neoplasia gástrica a longo prazo.",
    pontosDeProva: [
      "Nem toda dor epigástrica é gastrite — o termo é histopatológico; o diagnóstico clínico correto na ausência de endoscopia é 'dispepsia'",
      "Erradicar H. pylori reduz risco de câncer gástrico a longo prazo, principal justificativa para tratar mesmo em pacientes pouco sintomáticos",
    ],
    casoClinico: {
      vinheta:
        "Homem, 40 anos, usa ibuprofeno diariamente há 1 mês para dor lombar crônica. Dor epigástrica em queimação há 3 semanas, sem sinais de alarme.",
      pergunta: "Qual a conduta inicial mais apropriada?",
      raciocinio:
        "O quadro é altamente sugestivo de gastrite associada a AINE, sem sinais de alarme que justifiquem endoscopia imediata em paciente jovem. A conduta inicial pode ser empírica, com reavaliação do uso do AINE.",
      conduta:
        "Suspender ou substituir o AINE (ou associar IBP se o uso for imprescindível), iniciar inibidor da bomba de prótons, e reservar endoscopia para refratariedade ou sinais de alarme.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "omeprazol", nome: "Omeprazol" },
      { slug: "amoxicilina", nome: "Amoxicilina" },
    ],
    fontes: [
      { tema: "Classificação de Sydney e conduta terapêutica", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "drge",
    nome: "Doença do refluxo gastroesofágico",
    sinonimos: ["DRGE", "Refluxo"],
    cid10: "K21",
    especialidade: "Gastroenterologia",
    etiologia: "Multifatorial",
    resumo: "Retorno do conteúdo gástrico para o esôfago, causando sintomas ou complicações da mucosa esofágica.",
    definicao:
      "Condição na qual o refluxo do conteúdo gástrico para o esôfago causa sintomas incômodos e/ou complicações, como esofagite erosiva ou esôfago de Barrett.",
    epidemiologia:
      "Uma das doenças gastrointestinais mais prevalentes, associada a obesidade, gestação, hérnia de hiato e determinados hábitos alimentares.",
    fisiopatologia:
      "Relaxamentos transitórios inapropriados do esfíncter esofágico inferior permitem o refluxo de conteúdo ácido (ou não ácido) para o esôfago, cuja mucosa não possui a mesma proteção da mucosa gástrica, resultando em inflamação.",
    classificacao:
      "Classificação de Los Angeles para esofagite erosiva à endoscopia (graus A a D, conforme extensão e confluência das lesões). Também classificada em DRGE erosiva vs. não erosiva (endoscopia normal com sintomas típicos).",
    quadroClinico: [
      "Pirose (queimação retroesternal)",
      "Regurgitação ácida",
      "Tosse crônica e rouquidão (manifestações atípicas)",
      "Disfagia em casos de estenose péptica",
    ],
    diagnostico: [
      "Diagnóstico clínico na maioria dos casos típicos",
      "Endoscopia digestiva alta em sinais de alarme ou refratariedade",
      "pHmetria esofágica de 24 horas em casos duvidosos",
    ],
    diagnosticoDiferencial: [
      "Doença coronariana (dor torácica atípica)",
      "Gastrite e úlcera péptica",
      "Distúrbios motores esofágicos",
    ],
    examesComplementares: [
      "Endoscopia digestiva alta: avalia esofagite, hérnia de hiato, esôfago de Barrett",
      "pHmetria esofágica de 24h: padrão-ouro para quantificar exposição ácida em casos atípicos ou refratários",
      "Manometria esofágica: pré-operatória, avalia motilidade antes de cirurgia antirrefluxo",
    ],
    tratamento: [
      "Medidas comportamentais (elevação da cabeceira, evitar deitar após refeições, perda de peso)",
      "Inibidor da bomba de prótons por 4–8 semanas",
      "Tratamento cirúrgico (fundoplicatura) em casos refratários selecionados",
    ],
    complicacoes: [
      "Esofagite erosiva",
      "Estenose péptica esofágica",
      "Esôfago de Barrett (lesão pré-maligna)",
      "Adenocarcinoma de esôfago (em Barrett não vigiado)",
    ],
    redFlags: [
      "Disfagia progressiva",
      "Emagrecimento não intencional",
      "Hematêmese ou melena",
      "Anemia — qualquer um desses exige endoscopia, não tratamento empírico prolongado",
    ],
    prognostico:
      "Bom controle sintomático na maioria dos pacientes com IBP; esôfago de Barrett exige vigilância endoscópica pelo risco de progressão para adenocarcinoma esofágico.",
    pontosDeProva: [
      "Sintomas atípicos (tosse crônica, rouquidão, dor torácica) podem ser a única manifestação de DRGE — sempre considerar no diagnóstico diferencial de tosse crônica inexplicada",
      "Esôfago de Barrett exige vigilância endoscópica periódica pelo risco de progressão para adenocarcinoma, não apenas tratamento sintomático",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 35 anos, obesa, pirose quase diária há 6 meses, pior após refeições copiosas e ao deitar. Sem disfagia, emagrecimento ou sangramento.",
      pergunta: "É necessário solicitar endoscopia antes de iniciar tratamento?",
      raciocinio:
        "Sintomas típicos de DRGE em paciente jovem sem sinais de alarme permitem tratamento empírico sem necessidade de endoscopia inicial, reservando o exame para refratariedade ou surgimento de sinais de alarme.",
      conduta:
        "Orientar medidas comportamentais (perda de peso, elevar cabeceira, evitar deitar após refeições) e iniciar inibidor da bomba de prótons por 4–8 semanas, reavaliando resposta.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "omeprazol", nome: "Omeprazol" },
    ],
    fontes: [
      { tema: "Classificação de Los Angeles para esofagite erosiva", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "artrite-reumatoide",
    nome: "Artrite reumatoide",
    sinonimos: ["AR"],
    cid10: "M06",
    especialidade: "Reumatologia",
    etiologia: "Autoimune",
    resumo: "Doença autoimune sistêmica que causa artrite simétrica erosiva, podendo levar a deformidades articulares progressivas.",
    definicao:
      "Doença inflamatória autoimune crônica que acomete predominantemente as articulações sinoviais de forma simétrica, podendo também apresentar manifestações extra-articulares.",
    epidemiologia:
      "Mais comum em mulheres, com pico de incidência entre 30 e 60 anos. Fatores genéticos (HLA-DR4) e ambientais (tabagismo) contribuem para o risco.",
    fisiopatologia:
      "Processo autoimune com ativação de linfócitos T e B contra antígenos articulares, formação de pannus sinovial e produção de citocinas pró-inflamatórias (TNF-alfa, IL-6) que promovem destruição da cartilagem e erosão óssea.",
    classificacao:
      "Critérios classificatórios ACR/EULAR 2010 (pontuação combinando número/tipo de articulações acometidas, sorologia, provas de fase aguda e duração dos sintomas — ≥6 pontos classifica como AR definitiva). Atividade de doença mensurada pelo DAS28 (remissão, atividade leve, moderada, alta).",
    quadroClinico: [
      "Poliartrite simétrica de pequenas articulações (mãos, punhos, pés)",
      "Rigidez matinal prolongada (> 1 hora)",
      "Edema e dor articular",
      "Deformidades articulares em fases avançadas (desvio ulnar, pescoço de cisne)",
      "Manifestações extra-articulares (nódulos reumatoides, doença pulmonar intersticial)",
    ],
    diagnostico: [
      "Fator reumatoide e anti-CCP (anticorpo antipeptídeo citrulinado cíclico)",
      "Provas de atividade inflamatória (VHS, PCR)",
      "Radiografia de mãos e pés (erosões, redução do espaço articular)",
      "Critérios classificatórios ACR/EULAR",
    ],
    diagnosticoDiferencial: [
      "Lúpus eritematoso sistêmico",
      "Osteoartrite",
      "Artrite psoriásica",
      "Febre reumática",
    ],
    examesComplementares: [
      "Fator reumatoide: sensível, pouco específico",
      "Anti-CCP: mais específico, pode preceder sintomas em anos e tem valor prognóstico (associado a doença mais erosiva)",
      "Radiografia de mãos/pés: erosões marginais e redução do espaço articular em fases mais avançadas",
    ],
    tratamento: [
      "Metotrexato como droga modificadora do curso da doença (DMARD) de primeira linha",
      "Corticoide em baixa dose como ponte terapêutica",
      "Terapias biológicas (anti-TNF, anti-IL-6, entre outras) em casos refratários",
      "Reabilitação e terapia ocupacional para preservação funcional",
    ],
    complicacoes: [
      "Deformidades articulares (desvio ulnar, pescoço de cisne, botoeira)",
      "Doença pulmonar intersticial",
      "Síndrome de Felty (AR + esplenomegalia + neutropenia)",
      "Aumento do risco cardiovascular",
    ],
    redFlags: [
      "Início agudo de fraqueza muscular proximal ou dor cervical alta em AR de longa data — pode indicar subluxação atlantoaxial, risco de compressão medular",
    ],
    prognostico:
      "Diagnóstico e tratamento precoces (\"janela de oportunidade\") melhoram significativamente o prognóstico funcional e reduzem dano articular irreversível.",
    pontosDeProva: [
      "Rigidez matinal prolongada (>1 hora) é mais sugestiva de doença inflamatória do que rigidez de poucos minutos, típica de osteoartrite",
      "'Janela de oportunidade': iniciar DMARD precocemente melhora significativamente o prognóstico funcional a longo prazo",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 42 anos, dor e edema simétricos em punhos e articulações metacarpofalângicas há 3 meses, rigidez matinal de 90 minutos. Anti-CCP positivo, FR positivo, VHS elevado.",
      pergunta: "O quadro preenche critérios para o diagnóstico? Qual a urgência do tratamento?",
      raciocinio:
        "Poliartrite simétrica de pequenas articulações com rigidez matinal prolongada e sorologia positiva preenche critérios ACR/EULAR para AR. O anti-CCP positivo indica maior risco de doença erosiva, reforçando a urgência terapêutica.",
      conduta:
        "Iniciar metotrexato o quanto antes, associado a corticoide em baixa dose como ponte até o efeito pleno do metotrexato, respeitando a 'janela de oportunidade'.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "prednisona", nome: "Prednisona" },
      { slug: "metotrexato", nome: "Metotrexato" },
    ],
    medicamentosNota:
      "O metotrexato é o DMARD de primeira linha para controle de longo prazo da doença. A prednisona em baixa dose é usada como ponte até o efeito pleno do metotrexato (semanas), não como tratamento isolado.",
    fontes: [
      { tema: "Critérios classificatórios ACR/EULAR 2010 e DAS28", fonte: "American College of Rheumatology / EULAR, critérios classificatórios 2010" },
      { tema: "Metotrexato como DMARD de 1ª linha", fonte: "American College of Rheumatology Guideline for the Treatment of Rheumatoid Arthritis, 2021" },
    ],
  },
  {
    slug: "lupus-eritematoso-sistemico",
    nome: "Lúpus eritematoso sistêmico",
    sinonimos: ["LES", "Lúpus"],
    cid10: "M32",
    especialidade: "Reumatologia",
    etiologia: "Autoimune",
    resumo: "Doença autoimune multissistêmica de apresentação heterogênea, predominante em mulheres jovens.",
    definicao:
      "Doença autoimune crônica caracterizada pela produção de autoanticorpos e formação de imunocomplexos que podem acometer praticamente qualquer órgão, com curso caracterizado por períodos de exacerbação e remissão.",
    epidemiologia:
      "Predomina em mulheres em idade fértil (proporção de cerca de 9:1 em relação aos homens), com maior prevalência e gravidade em populações afrodescendentes.",
    fisiopatologia:
      "Perda de tolerância imunológica leva à produção de autoanticorpos (como anti-DNA de dupla hélice) e formação de imunocomplexos que se depositam em tecidos, ativando o sistema complemento e causando inflamação e dano tecidual.",
    classificacao:
      "Critérios classificatórios EULAR/ACR 2019 (exigem FAN positivo como critério de entrada, seguido de pontuação por domínios clínicos e imunológicos). Atividade de doença frequentemente mensurada pelo SLEDAI.",
    quadroClinico: [
      "Eritema malar (\"em asa de borboleta\")",
      "Fotossensibilidade",
      "Artrite não erosiva",
      "Serosite (pleurite, pericardite)",
      "Nefrite lúpica",
      "Alterações hematológicas (citopenias) e neurológicas",
    ],
    diagnostico: [
      "FAN (fator antinuclear) como teste de triagem",
      "Anti-DNA de dupla hélice e anti-Sm (mais específicos)",
      "Consumo de complemento (C3/C4 baixos em atividade)",
      "Critérios classificatórios EULAR/ACR",
    ],
    diagnosticoDiferencial: [
      "Artrite reumatoide",
      "Síndrome do anticorpo antifosfolípide primária",
      "Outras doenças do tecido conjuntivo (síndrome de Sjögren, dermatomiosite)",
    ],
    examesComplementares: [
      "FAN: triagem, alta sensibilidade mas baixa especificidade",
      "Anti-DNA de dupla hélice e anti-Sm: mais específicos para LES",
      "C3/C4: consumo de complemento indica atividade de doença, especialmente na nefrite lúpica",
      "Relação proteína/creatinina urinária: rastreio de acometimento renal",
    ],
    tratamento: [
      "Hidroxicloroquina como base do tratamento na maioria dos pacientes",
      "Corticoide em dose ajustada à gravidade do acometimento",
      "Imunossupressores (micofenolato, azatioprina, ciclofosfamida) em acometimento de órgãos maiores",
      "Terapias biológicas (belimumabe, anifrolumabe) em casos selecionados",
    ],
    complicacoes: [
      "Nefrite lúpica com evolução para doença renal terminal",
      "Trombose (especialmente se síndrome antifosfolípide associada)",
      "Neurolúpus (convulsões, psicose)",
      "Maior suscetibilidade a infecções (doença + imunossupressão)",
    ],
    redFlags: [
      "Edema, hipertensão e proteinúria de início recente em paciente com LES — suspeitar de nefrite lúpica ativa",
      "Convulsão ou alteração aguda de comportamento — neurolúpus até prova em contrário",
    ],
    prognostico:
      "Variável conforme órgãos acometidos; acometimento renal e neurológico grave determina pior prognóstico. Sobrevida em 10 anos aumentou substancialmente com o tratamento moderno.",
    pontosDeProva: [
      "FAN positivo isoladamente não fecha diagnóstico de LES — é critério de entrada altamente sensível, mas pouco específico",
      "Queda de C3/C4 costuma acompanhar atividade de doença, ao contrário de outras doenças inflamatórias em que o complemento tende a subir (reagente de fase aguda)",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 24 anos, eritema malar há 2 meses, fotossensibilidade, artralgia e edema de membros inferiores. FAN 1:640, anti-DNA de dupla hélice positivo, proteinúria de 24h elevada.",
      pergunta: "Qual a principal preocupação a investigar de imediato?",
      raciocinio:
        "Eritema malar, fotossensibilidade e artralgia com FAN e anti-DNA positivos confirmam LES ativo. A proteinúria significativa levanta suspeita de nefrite lúpica, complicação que define grande parte do prognóstico da doença.",
      conduta:
        "Solicitar avaliação renal completa (função renal, sedimento urinário, relação proteína/creatinina, considerar biópsia renal) e iniciar/otimizar tratamento imunossupressor conforme gravidade do acometimento.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "prednisona", nome: "Prednisona" },
      { slug: "hidroxicloroquina", nome: "Sulfato de hidroxicloroquina" },
    ],
    medicamentosNota:
      "A hidroxicloroquina é a base do tratamento na maioria dos pacientes, mantida indefinidamente mesmo em remissão. A prednisona é usada para controle de crises de atividade, em dose e duração conforme a gravidade do acometimento.",
    fontes: [
      { tema: "Critérios classificatórios EULAR/ACR 2019 e SLEDAI", fonte: "EULAR/ACR, critérios classificatórios 2019" },
      { tema: "Hidroxicloroquina como base do tratamento", fonte: "EULAR Recommendations for the Management of Systemic Lupus Erythematosus, 2019" },
    ],
  },
  {
    slug: "doenca-de-alzheimer",
    nome: "Doença de Alzheimer",
    sinonimos: ["DA", "Demência de Alzheimer"],
    cid10: "G30",
    especialidade: "Neurologia",
    etiologia: "Degenerativa",
    resumo: "Principal causa de demência no idoso, caracterizada por declínio cognitivo progressivo e irreversível.",
    definicao:
      "Doença neurodegenerativa progressiva caracterizada por declínio cognitivo, especialmente da memória episódica, com impacto funcional significativo, associada histopatologicamente a placas de beta-amiloide e emaranhados neurofibrilares de proteína tau.",
    epidemiologia:
      "Principal causa de demência em idosos, com prevalência que aumenta exponencialmente após os 65 anos. Idade avançada é o principal fator de risco.",
    fisiopatologia:
      "Acúmulo extracelular de placas beta-amiloide e formação intracelular de emaranhados neurofibrilares de proteína tau hiperfosforilada levam à disfunção sináptica e morte neuronal progressiva, inicialmente em regiões límbicas (hipocampo).",
    classificacao:
      "Estadiamento clínico funcional: leve (esquecimentos que já afetam atividades instrumentais complexas, mas independência básica preservada), moderado (necessita supervisão/ajuda em atividades básicas) e grave (dependência total). Escalas como CDR (Clinical Dementia Rating) formalizam essa gradação.",
    quadroClinico: [
      "Perda de memória episódica recente como sintoma inicial mais característico",
      "Desorientação temporoespacial progressiva",
      "Dificuldades de linguagem e planejamento",
      "Alterações comportamentais e de humor em fases mais avançadas",
      "Perda de autonomia para atividades de vida diária com a progressão",
    ],
    diagnostico: [
      "Avaliação cognitiva estruturada (ex.: MEEM, MoCA)",
      "Exclusão de causas reversíveis de demência (hipotireoidismo, deficiência de B12, neuroimagem)",
      "Ressonância magnética (atrofia hipocampal)",
      "Biomarcadores liquóricos ou PET amiloide em contextos específicos",
    ],
    diagnosticoDiferencial: [
      "Demência vascular",
      "Demência com corpos de Lewy",
      "Demência frontotemporal",
      "Depressão em idosos (pseudodemência)",
    ],
    examesComplementares: [
      "Avaliação cognitiva estruturada (MEEM, MoCA) com pontos de corte ajustados por escolaridade",
      "Ressonância magnética de crânio: atrofia hipocampal e de lobos temporais mediais, além de excluir causas estruturais",
      "TSH e vitamina B12: rastreio de causas reversíveis de declínio cognitivo",
    ],
    tratamento: [
      "Inibidores da colinesterase (donepezila, rivastigmina) em fases leve a moderada",
      "Memantina em fases moderada a grave",
      "Terapias anti-amiloide mais recentes, com benefício modesto e necessidade de monitorização de efeitos adversos",
      "Suporte multidisciplinar ao paciente e à família/cuidadores",
    ],
    complicacoes: [
      "Perda progressiva de autonomia para atividades de vida diária",
      "Distúrbios comportamentais e psicológicos da demência (agitação, psicose)",
      "Maior risco de quedas, desnutrição e infecções em fases avançadas",
    ],
    redFlags: [
      "Declínio cognitivo de instalação rápida (dias a semanas) — não é típico de Alzheimer e exige investigação de causas alternativas (delirium, causa vascular aguda, encefalite)",
    ],
    prognostico:
      "Doença progressiva sem cura estabelecida; o tratamento atual busca retardar a progressão e manter qualidade de vida pelo maior tempo possível.",
    pontosDeProva: [
      "Antes de rotular como Alzheimer, é obrigatório excluir causas reversíveis de declínio cognitivo (hipotireoidismo, deficiência de B12, depressão/pseudodemência, hidrocefalia de pressão normal)",
      "A perda de memória episódica recente costuma ser o sintoma mais precoce e característico",
    ],
    casoClinico: {
      vinheta:
        "Paciente, 78 anos, trazido pela família por esquecimentos progressivos há 1 ano: repete perguntas, esquece compromissos, perdeu-se em trajeto conhecido uma vez. Ainda toma banho e se veste sozinho. TSH e B12 normais.",
      pergunta: "Em que estágio clínico o quadro se enquadra e qual a conduta terapêutica inicial?",
      raciocinio:
        "Comprometimento de memória episódica recente com preservação de atividades básicas mas já com prejuízo em tarefas mais complexas é compatível com Alzheimer em estágio leve. Causas reversíveis já foram razoavelmente excluídas.",
      conduta:
        "Iniciar inibidor da colinesterase, orientar a família sobre a natureza progressiva da doença, estruturar suporte multidisciplinar e reavaliar periodicamente a progressão funcional.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "donepezila", nome: "Donepezila" },
      { slug: "memantina", nome: "Memantina" },
    ],
    medicamentosNota:
      "A donepezila (inibidor da colinesterase) é usada em fases leve a moderada. A memantina (antagonista NMDA) é usada em fases moderada a grave, podendo ser associada à donepezila em doença mais avançada. Não são intercambiáveis nem indicadas indistintamente em qualquer estágio.",
    fontes: [
      { tema: "Estadiamento clínico funcional e escala CDR", fonte: "fonte pendente" },
      { tema: "Uso escalonado de inibidor da colinesterase e memantina por estágio", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "anemia-ferropriva",
    nome: "Anemia ferropriva",
    sinonimos: ["Anemia por deficiência de ferro"],
    cid10: "D50",
    especialidade: "Hematologia",
    etiologia: "Nutricional",
    resumo: "Causa mais comum de anemia no mundo, decorrente de reservas insuficientes de ferro para a eritropoiese.",
    definicao:
      "Anemia microcítica e hipocrômica resultante de deficiência de ferro, que pode decorrer de ingestão inadequada, má absorção ou perdas sanguíneas crônicas.",
    epidemiologia:
      "Causa mais frequente de anemia globalmente, com maior prevalência em crianças, gestantes e mulheres em idade fértil.",
    fisiopatologia:
      "A deficiência de ferro compromete a síntese de hemoglobina, resultando em hemácias pequenas (microcíticas) e com menor conteúdo de hemoglobina (hipocrômicas), reduzindo a capacidade de transporte de oxigênio.",
    classificacao:
      "Estadiamento funcional da deficiência de ferro: depleção de estoques (ferritina baixa, hemoglobina ainda normal) → deficiência de ferro sem anemia → anemia ferropriva estabelecida (ferritina baixa + hemoglobina reduzida + microcitose/hipocromia).",
    quadroClinico: [
      "Fadiga e fraqueza",
      "Palidez cutaneomucosa",
      "Taquicardia e dispneia aos esforços em casos mais intensos",
      "Coiloníquia (unhas em colher) e queilite angular em deficiência grave",
      "Pica (desejo por substâncias não alimentares) em alguns casos",
    ],
    diagnostico: [
      "Hemograma: anemia microcítica e hipocrômica",
      "Ferritina sérica reduzida (principal marcador de depleção de estoques)",
      "Saturação de transferrina reduzida",
      "Investigação da causa base (ex.: endoscopia/colonoscopia em suspeita de perda digestiva)",
    ],
    diagnosticoDiferencial: [
      "Anemia de doença crônica",
      "Talassemias",
      "Anemia sideroblástica",
    ],
    examesComplementares: [
      "Ferritina sérica: <15–30 ng/mL confirma depleção de estoques (corte pode ser maior em contexto inflamatório)",
      "Saturação de transferrina reduzida (<16–20%)",
      "VCM reduzido (<80 fL) e RDW aumentado no hemograma",
    ],
    tratamento: [
      "Reposição de ferro oral como primeira linha na maioria dos casos",
      "Ferro intravenoso em intolerância ao ferro oral, má absorção ou necessidade de reposição rápida",
      "Investigação e tratamento da causa de base, especialmente perdas sanguíneas ocultas",
    ],
    complicacoes: [
      "Fadiga significativa com impacto funcional",
      "Descompensação cardiovascular em anemia grave (especialmente em cardiopatas)",
      "Atraso no desenvolvimento neurocognitivo em crianças",
      "Complicações gestacionais (prematuridade, baixo peso ao nascer) se não tratada na gravidez",
    ],
    redFlags: [
      "Anemia ferropriva em homem adulto ou mulher pós-menopausa sem causa evidente — investigar perda digestiva oculta (incluindo neoplasia) com endoscopia/colonoscopia",
    ],
    prognostico:
      "Excelente com reposição adequada e correção da causa subjacente; recorrência é comum se a causa base não for identificada e tratada.",
    pontosDeProva: [
      "Ferritina é reagente de fase aguda — pode estar falsamente normal/elevada em contexto inflamatório mesmo com deficiência de ferro real, exigindo interpretação junto à saturação de transferrina",
      "Anemia ferropriva em homens ou mulheres sem causa ginecológica evidente é indicação forte de investigação do trato gastrointestinal",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 29 anos, fadiga e palidez há meses, menstruações intensas e prolongadas há vários ciclos. Hemoglobina: 9,2 g/dL; VCM: 68 fL; ferritina: 8 ng/mL.",
      pergunta: "A causa provável já está estabelecida ou é necessário investigar mais?",
      raciocinio:
        "Hemoglobina reduzida com microcitose importante e ferritina muito baixa confirma anemia ferropriva. A menorragia é causa suficiente e plausível nessa faixa etária, permitindo focar a investigação inicial na avaliação ginecológica.",
      conduta:
        "Iniciar reposição de ferro oral, investigar e tratar a causa da menorragia, e reavaliar hemoglobina em 4–6 semanas para confirmar resposta ao tratamento.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "sulfato-ferroso", nome: "Sulfato ferroso" },
    ],
    fontes: [
      { tema: "Pontos de corte de ferritina e saturação de transferrina", fonte: "fonte pendente" },
      { tema: "Sulfato ferroso como 1ª linha", fonte: "Goodman & Gilman, 13ª ed." },
    ],
  },
  {
    slug: "doenca-renal-cronica",
    nome: "Doença renal crônica",
    sinonimos: ["DRC", "Insuficiência renal crônica"],
    cid10: "N18",
    especialidade: "Nefrologia",
    etiologia: "Metabólica",
    resumo: "Perda progressiva e geralmente irreversível da função renal, frequentemente associada a diabetes e hipertensão.",
    definicao:
      "Anormalidades da estrutura ou função renal, presentes por mais de 3 meses, com implicações para a saúde, classificadas por categorias de taxa de filtração glomerular (TFG) e albuminúria.",
    epidemiologia:
      "Diabetes mellitus e hipertensão arterial são as principais causas em todo o mundo, incluindo no Brasil. Prevalência crescente relacionada ao envelhecimento populacional e ao aumento de doenças metabólicas.",
    fisiopatologia:
      "A lesão renal progressiva leva à perda de néfrons funcionais; os néfrons remanescentes sofrem hiperfiltração compensatória, o que paradoxalmente acelera a esclerose glomerular e a progressão da doença ao longo do tempo.",
    classificacao:
      "Categorias KDIGO combinando TFG (G1: ≥90; G2: 60–89; G3a: 45–59; G3b: 30–44; G4: 15–29; G5: <15 ou diálise) e albuminúria (A1: <30 mg/g; A2: 30–300 mg/g; A3: >300 mg/g) — o cruzamento das duas define o risco de progressão e complicações.",
    quadroClinico: [
      "Frequentemente assintomática em estágios iniciais",
      "Edema e hipertensão de difícil controle",
      "Fadiga relacionada à anemia associada",
      "Sintomas urêmicos em fases avançadas (náusea, prurido, alterações do sono)",
    ],
    diagnostico: [
      "Taxa de filtração glomerular estimada (TFGe) por creatinina sérica",
      "Relação albumina/creatinina em amostra de urina",
      "Classificação por categorias KDIGO (TFG e albuminúria)",
      "Ultrassonografia renal quando indicada",
    ],
    diagnosticoDiferencial: [
      "Lesão renal aguda sobreposta",
      "Doença renal policística",
      "Glomerulopatias primárias",
    ],
    examesComplementares: [
      "TFG estimada por creatinina sérica (fórmula CKD-EPI)",
      "Relação albumina/creatinina em amostra isolada de urina",
      "Ultrassonografia renal: tamanho, assimetria, sinais de doença obstrutiva/policística",
      "Cálcio, fósforo e PTH em estágios mais avançados (doença óssea mineral da DRC)",
    ],
    tratamento: [
      "Controle rigoroso da pressão arterial e glicemia",
      "IECA/BRA para redução da proteinúria e proteção renal",
      "Inibidores de SGLT2, com benefício adicional na progressão da DRC",
      "Encaminhamento ao nefrologista conforme categoria de risco KDIGO",
      "Terapia renal substitutiva (diálise ou transplante) em estágios avançados",
    ],
    complicacoes: [
      "Doença cardiovascular (principal causa de morte nesses pacientes, mais que a progressão renal em si)",
      "Anemia por deficiência de eritropoetina",
      "Distúrbio mineral e ósseo (hiperparatireoidismo secundário)",
      "Hipercalemia e acidose metabólica em estágios avançados",
    ],
    redFlags: [
      "Queda abrupta e rápida da TFG (não gradual) — sugere lesão renal aguda sobreposta, exige investigação imediata",
    ],
    prognostico:
      "Progressão variável conforme etiologia e controle dos fatores de risco; detecção precoce e manejo adequado podem retardar significativamente a evolução para doença renal terminal.",
    pontosDeProva: [
      "A principal causa de morte na DRC é cardiovascular, não a progressão para diálise — o controle de risco cardiovascular é tão prioritário quanto a proteção renal",
      "iSGLT2 reduzem progressão da DRC mesmo em pacientes não diabéticos com proteinúria significativa",
    ],
    casoClinico: {
      vinheta:
        "Homem, 58 anos, diabético e hipertenso há 15 anos, em consulta de rotina. TFGe: 42 mL/min/1,73m² (estável em exame de 6 meses atrás). Relação albumina/creatinina: 180 mg/g.",
      pergunta: "Em qual categoria KDIGO o paciente se enquadra e ele precisa de encaminhamento?",
      raciocinio:
        "TFG entre 30–44 corresponde à categoria G3b, e albuminúria entre 30–300 mg/g corresponde à categoria A2. A combinação G3b/A2 já representa risco moderadamente alto a alto de progressão, justificando encaminhamento ao nefrologista.",
      conduta:
        "Otimizar controle pressórico e glicêmico, manter IECA/BRA e considerar iSGLT2 para proteção renal adicional, e encaminhar ao nefrologista dada a categoria de risco.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "losartana-potassica", nome: "Losartana potássica" },
      { slug: "captopril", nome: "Captopril" },
      { slug: "dapagliflozina", nome: "Dapagliflozina" },
    ],
    fontes: [
      { tema: "Categorias KDIGO (TFG e albuminúria)", fonte: "KDIGO Clinical Practice Guideline for CKD, 2024" },
      { tema: "IECA/BRA e iSGLT2 na proteção renal", fonte: "KDIGO Clinical Practice Guideline for CKD, 2024" },
    ],
  },
  {
    slug: "infarto-agudo-miocardio",
    nome: "Infarto agudo do miocárdio",
    sinonimos: ["IAM", "Ataque cardíaco", "Infarto"],
    cid10: "I21",
    especialidade: "Cardiologia",
    etiologia: "Multifatorial",
    resumo: "Necrose do músculo cardíaco por isquemia prolongada, geralmente por ruptura de placa aterosclerótica com trombose coronariana aguda.",
    definicao:
      "Lesão miocárdica aguda com evidência clínica de isquemia aguda, definida pela elevação e/ou queda de biomarcadores cardíacos (troponina) associada a pelo menos um critério clínico, eletrocardiográfico ou de imagem de isquemia.",
    epidemiologia:
      "Principal causa de morte cardiovascular no mundo e uma das principais causas de mortalidade geral no Brasil. Incidência aumenta com idade, sendo mais precoce em homens; fatores de risco cardiovascular clássicos (hipertensão, diabetes, dislipidemia, tabagismo) elevam substancialmente o risco.",
    fisiopatologia:
      "Na maioria dos casos, ruptura ou erosão de placa aterosclerótica instável expõe material trombogênico, desencadeando formação de trombo que oclui total ou parcialmente a artéria coronária. A isquemia prolongada leva à morte celular miocárdica (necrose), progredindo da região subendocárdica para a transmural conforme o tempo de oclusão.",
    classificacao:
      "Pela Quarta Definição Universal do Infarto do Miocárdio (ESC/ACC/AHA/WHF, 2018): Tipo 1 (aterotrombótico espontâneo), Tipo 2 (desequilíbrio oferta-demanda sem trombose coronariana), Tipo 3 (morte súbita sem biomarcadores disponíveis), Tipos 4 e 5 (relacionados a procedimentos, ICP e cirurgia de revascularização). Também classificado eletrocardiograficamente em IAM com supradesnivelamento do segmento ST (IAMCSST) e sem supradesnivelamento (IAMSSST).",
    quadroClinico: [
      "Dor torácica em aperto/opressão, retroesternal, com irradiação para membro superior esquerdo, mandíbula ou dorso, geralmente >20 minutos",
      "Sudorese fria, náusea e vômitos associados",
      "Dispneia, podendo ser a queixa predominante em idosos e diabéticos (isquemia silenciosa/atípica)",
      "Sensação de morte iminente (angor animi)",
    ],
    diagnostico: [
      "Troponina cardíaca de alta sensibilidade com padrão de ascensão e/ou queda",
      "Eletrocardiograma seriado (supradesnivelamento de ST, infradesnivelamento, inversão de onda T ou novo bloqueio de ramo esquerdo)",
      "Correlação clínica (dor torácica típica ou equivalente anginoso)",
    ],
    examesComplementares: [
      "Troponina de alta sensibilidade seriada (0h/1h ou 0h/3h conforme protocolo)",
      "Eletrocardiograma de 12 derivações repetido, especialmente se persistência de sintomas",
      "Ecocardiograma para avaliação de função ventricular e alterações segmentares de contratilidade",
      "Coronariografia (cateterismo cardíaco) para definição anatômica e planejamento de reperfusão",
    ],
    diagnosticoDiferencial: [
      "Dissecção aórtica",
      "Embolia pulmonar",
      "Pericardite aguda",
      "Espasmo esofágico e doença do refluxo gastroesofágico",
      "Costocondrite",
    ],
    tratamento: [
      "IAMCSST: reperfusão imediata, preferencialmente por intervenção coronária percutânea primária dentro da janela recomendada; trombólise se ICP não disponível em tempo hábil",
      "Dupla antiagregação plaquetária (AAS + inibidor de P2Y12)",
      "Anticoagulação parenteral no período agudo",
      "Betabloqueador, IECA/BRA e estatina de alta potência iniciados precocemente, conforme estabilidade hemodinâmica",
      "Reabilitação cardiovascular e controle agressivo de fatores de risco após a fase aguda",
    ],
    complicacoes: [
      "Arritmias ventriculares malignas e morte súbita",
      "Choque cardiogênico",
      "Insuficiência cardíaca e remodelamento ventricular adverso",
      "Complicações mecânicas (ruptura de parede livre, comunicação interventricular, insuficiência mitral aguda por ruptura de músculo papilar)",
      "Pericardite pós-infarto (síndrome de Dressler)",
    ],
    redFlags: [
      "Dor torácica associada a hipotensão, sinais de choque ou nova insuficiência mitral — suspeitar de complicação mecânica grave",
      "Supradesnivelamento de ST em paciente com dor torácica — reperfusão é tempo-dependente, não aguardar confirmação laboratorial para iniciar o protocolo",
    ],
    prognostico:
      "Fortemente dependente do tempo até a reperfusão ('tempo é músculo'); mortalidade intra-hospitalar significativamente maior no choque cardiogênico. Prognóstico a longo prazo melhora muito com adesão à terapia medicamentosa otimizada e reabilitação cardiovascular.",
    pontosDeProva: [
      "'Tempo é músculo': o benefício da reperfusão é máximo nas primeiras horas e cai progressivamente com o atraso",
      "IAM sem supradesnivelamento de ST pode ter tanta gravidade quanto o com supra — a estratificação de risco (não apenas o ECG) direciona a urgência da estratégia invasiva",
      "Isquemia silenciosa/atípica é mais comum em diabéticos e idosos, exigindo alto índice de suspeição mesmo sem dor torácica típica",
    ],
    casoClinico: {
      vinheta:
        "Homem, 62 anos, hipertenso e tabagista, chega ao pronto-socorro com dor torácica em aperto há 40 minutos, irradiando para o braço esquerdo, associada a sudorese fria. ECG mostra supradesnivelamento de ST de 3mm em derivações V2-V4.",
      pergunta: "Qual é a conduta imediata prioritária?",
      raciocinio:
        "O quadro clínico e o ECG são compatíveis com IAM com supradesnivelamento de ST em parede anterior. Nesse cenário, o tempo até a reperfusão é o principal determinante de sobrevida e de preservação miocárdica.",
      conduta:
        "Ativar protocolo de dor torácica, administrar dupla antiagregação plaquetária e anticoagulação, e encaminhar imediatamente para intervenção coronária percutânea primária, sem aguardar resultado de troponina para iniciar a reperfusão.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "sinvastatina", nome: "Sinvastatina" },
      { slug: "captopril", nome: "Captopril" },
      { slug: "enalapril", nome: "Enalapril" },
    ],
    medicamentosSecaoTitulo: "Medicamentos de manutenção/prevenção secundária",
    medicamentosNota:
      "A conduta farmacológica prioritária na fase aguda do IAM é a dupla antiagregação plaquetária (AAS + inibidor de P2Y12) e a anticoagulação parenteral, ainda sem fichas próprias no site. Os medicamentos listados abaixo entram após a fase aguda, na prevenção secundária de novos eventos.",
    fontes: [
      { tema: "Definição e classificação do IAM", fonte: "Quarta Definição Universal do Infarto do Miocárdio (ESC/ACC/AHA/WHF, 2018)" },
      { tema: "Estratégia de reperfusão e antiagregação", fonte: "Diretriz da Sociedade Brasileira de Cardiologia sobre Síndromes Coronarianas Agudas, 2021" },
      { tema: "Complicações mecânicas pós-IAM", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "angina-pectoris",
    nome: "Angina pectoris",
    sinonimos: ["Angina do peito", "Angina estável"],
    cid10: "I20",
    especialidade: "Cardiologia",
    etiologia: "Multifatorial",
    resumo: "Dor torácica isquêmica transitória, tipicamente desencadeada por esforço e aliviada por repouso ou nitrato, causada por desequilíbrio entre oferta e demanda de oxigênio ao miocárdio.",
    definicao:
      "Síndrome clínica caracterizada por desconforto torácico transitório decorrente de isquemia miocárdica reversível, sem necrose celular, geralmente associada a doença arterial coronariana obstrutiva.",
    epidemiologia:
      "Manifestação mais comum da doença arterial coronariana crônica; prevalência aumenta com idade e é maior em homens até a menopausa, quando o risco se equipara entre os sexos. Fortemente associada aos mesmos fatores de risco cardiovascular do infarto agudo do miocárdio.",
    fisiopatologia:
      "Estenose aterosclerótica fixa da luz coronariana (tipicamente >70%) limita o aumento do fluxo sanguíneo em situações de maior demanda metabólica (esforço, estresse), gerando isquemia transitória sem necrose, com reversão dos sintomas ao repouso pela redução da demanda de oxigênio.",
    classificacao:
      "Angina estável: padrão prevísivel, desencadeada por esforço reprodutível. Classificação de gravidade pela Canadian Cardiovascular Society (CCS): classe I (esforços extenuantes), II (limitação leve nas atividades habituais), III (limitação marcada), IV (sintomas em repouso ou mínimo esforço). Distingue-se da angina instável, que é considerada síndrome coronariana aguda.",
    quadroClinico: [
      "Dor ou desconforto retroesternal em aperto/peso, desencadeado por esforço físico ou estresse emocional",
      "Alívio em minutos com repouso ou uso de nitrato sublingual",
      "Irradiação para membro superior esquerdo, mandíbula ou dorso",
      "Dispneia associada em alguns casos (equivalente anginoso)",
    ],
    diagnostico: [
      "Caracterização clínica do padrão de dor (desencadeante, duração, fatores de alívio)",
      "Teste ergométrico ou teste de estresse com imagem em pacientes com probabilidade intermediária",
      "Angiotomografia de coronárias ou cateterismo cardíaco para confirmação anatômica quando indicado",
    ],
    examesComplementares: [
      "Eletrocardiograma de repouso (frequentemente normal entre as crises)",
      "Teste ergométrico ou cintilografia miocárdica de estresse",
      "Angiotomografia computadorizada de coronárias em pacientes selecionados",
      "Cateterismo cardíaco quando há alto risco ou refratariedade ao tratamento clínico",
    ],
    diagnosticoDiferencial: [
      "Síndrome coronariana aguda (angina instável/IAM)",
      "Doença do refluxo gastroesofágico",
      "Costocondrite",
      "Espasmo esofágico",
      "Ansiedade e transtorno de pânico",
    ],
    tratamento: [
      "Nitrato sublingual para alívio agudo dos episódios",
      "Betabloqueador ou bloqueador de canal de cálcio como terapia antianginosa de base",
      "Estatina de alta potência e antiagregação plaquetária para redução de eventos cardiovasculares",
      "Controle rigoroso de fatores de risco (pressão arterial, glicemia, tabagismo)",
      "Revascularização (angioplastia ou cirurgia) em casos selecionados, especialmente refratários ao tratamento clínico otimizado",
    ],
    complicacoes: [
      "Progressão para síndrome coronariana aguda (angina instável ou infarto)",
      "Redução da capacidade funcional e qualidade de vida",
      "Arritmias associadas à isquemia recorrente",
    ],
    redFlags: [
      "Mudança no padrão habitual da angina — dor em repouso, aumento da frequência/intensidade ou menor limiar de esforço — sugere angina instável e exige avaliação urgente",
    ],
    prognostico:
      "Geralmente favorável com tratamento clínico otimizado e controle de fatores de risco; risco de eventos cardiovasculares maiores correlaciona-se com a extensão da doença coronariana e a presença de comorbidades.",
    pontosDeProva: [
      "A diferenciação entre angina estável e instável é essencialmente clínica (padrão de início, duração, resposta ao repouso/nitrato) e determina a urgência da investigação",
      "Nitrato sublingual que não alivia a dor em 5-10 minutos deve levantar suspeita de síndrome coronariana aguda",
    ],
    casoClinico: {
      vinheta:
        "Homem, 58 anos, dislipidêmico, relata dor torácica em aperto ao subir dois lances de escada há 3 meses, que cede em cerca de 5 minutos com repouso. Nega dor em repouso. Exame físico e ECG de repouso normais.",
      pergunta: "O padrão descrito é compatível com angina estável ou instável?",
      raciocinio:
        "Dor desencadeada de forma reprodutível pelo esforço, com alívio ao repouso e sem piora recente do padrão, é característica de angina estável, correspondendo a uma limitação leve das atividades habituais (CCS II).",
      conduta:
        "Solicitar teste ergométrico para estratificação de risco, iniciar terapia antianginosa (betabloqueador) e otimizar controle de fatores de risco cardiovascular, incluindo estatina de alta potência.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "sinvastatina", nome: "Sinvastatina" },
    ],
    fontes: [
      { tema: "Definição e fisiopatologia", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Classificação de gravidade (CCS)", fonte: "Canadian Cardiovascular Society Angina Grading Scale" },
      { tema: "Tratamento antianginoso e revascularização", fonte: "Diretriz da Sociedade Brasileira de Cardiologia sobre Doença Coronariana Estável, 2014" },
    ],
  },
  {
    slug: "doenca-isquemica-cronica-coracao",
    nome: "Doença isquêmica crônica do coração",
    sinonimos: ["Doença arterial coronariana crônica", "Cardiopatia isquêmica crônica"],
    cid10: "I25",
    especialidade: "Cardiologia",
    etiologia: "Multifatorial",
    resumo: "Doença coronariana aterosclerótica estabelecida e persistente, abrangendo desde angina estável até disfunção ventricular isquêmica e histórico de infarto prévio.",
    definicao:
      "Espectro de manifestações cardíacas decorrentes de aterosclerose coronariana estabelecida, incluindo pacientes assintomáticos com doença documentada, angina estável, disfunção ventricular isquêmica e sobreviventes de infarto agudo do miocárdio prévio.",
    epidemiologia:
      "Principal forma crônica de doença cardiovascular aterosclerótica, com prevalência crescente relacionada ao envelhecimento populacional e à maior sobrevida após eventos coronarianos agudos. Compartilha os mesmos fatores de risco de outras formas de doença coronariana.",
    fisiopatologia:
      "Aterosclerose coronariana progressiva causa estenoses fixas que limitam a reserva de fluxo coronariano; áreas de miocárdio cronicamente hipoperfundido podem desenvolver hibernação miocárdica (disfunção reversível com revascularização) ou fibrose irreversível pós-infarto, contribuindo para disfunção ventricular progressiva.",
    classificacao:
      "Inclui subgrupos: doença coronariana estável assintomática, angina estável, cardiomiopatia isquêmica (disfunção ventricular predominantemente por doença coronariana) e estado pós-infarto do miocárdio. A gravidade anatômica é frequentemente descrita pelo número de vasos acometidos (uniarterial, biarterial, triarterial, lesão de tronco de coronária esquerda).",
    quadroClinico: [
      "Pode ser assintomática, detectada apenas por exames complementares ou histórico de evento prévio",
      "Angina de esforço recorrente",
      "Dispneia por disfunção ventricular isquêmica",
      "Fadiga e redução da capacidade funcional",
    ],
    diagnostico: [
      "Histórico clínico de eventos coronarianos prévios ou sintomas anginosos",
      "Testes de isquemia (ergometria, cintilografia, ecocardiograma de estresse)",
      "Angiotomografia ou cateterismo cardíaco para definição anatômica",
      "Ecocardiograma para avaliação da função ventricular",
    ],
    examesComplementares: [
      "Ecocardiograma com avaliação de fração de ejeção e alterações segmentares de contratilidade",
      "Teste de estresse (ergométrico, com imagem) para pesquisa de isquemia induzível",
      "Cateterismo cardíaco em pacientes com alto risco ou refratários ao tratamento clínico",
      "Perfil lipídico e demais marcadores de risco cardiovascular",
    ],
    diagnosticoDiferencial: [
      "Cardiomiopatia não isquêmica",
      "Doença valvar cardíaca",
      "Angina de origem não coronariana (síndrome X cardíaca, disfunção microvascular)",
    ],
    tratamento: [
      "Terapia clínica otimizada: antiagregação plaquetária, estatina de alta potência, IECA/BRA e betabloqueador conforme perfil de risco e função ventricular",
      "Controle agressivo de fatores de risco cardiovascular modificáveis",
      "Revascularização miocárdica (percutânea ou cirúrgica) em pacientes selecionados, especialmente com lesão de tronco, múltiplos vasos ou disfunção ventricular significativa",
      "Reabilitação cardiovascular estruturada",
    ],
    complicacoes: [
      "Progressão para insuficiência cardíaca",
      "Arritmias ventriculares e morte súbita cardíaca",
      "Novos eventos coronarianos agudos",
    ],
    redFlags: [
      "Piora da capacidade funcional ou surgimento de sintomas em repouso em paciente previamente estável — reavaliar risco de evento agudo",
    ],
    prognostico:
      "Variável conforme extensão da doença coronariana e grau de disfunção ventricular; a adesão à terapia clínica otimizada e ao controle de fatores de risco reduz significativamente a progressão e o risco de novos eventos.",
    pontosDeProva: [
      "A distinção entre miocárdio hibernante (viável, potencialmente recuperável com revascularização) e tecido cicatricial fibrótico (irreversível) é central na decisão de revascularizar pacientes com disfunção ventricular isquêmica",
      "Terapia clínica otimizada isolada pode ter desfechos comparáveis à revascularização em doença estável sem critérios de alto risco, conforme estudos como o ISCHEMIA",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 67 anos, com infarto do miocárdio há 5 anos, em acompanhamento ambulatorial, relata dispneia progressiva aos esforços moderados nos últimos meses. Ecocardiograma mostra fração de ejeção de 38%, com hipocinesia de parede anterior.",
      pergunta: "Qual é a principal hipótese para a disfunção ventricular encontrada?",
      raciocinio:
        "O histórico de infarto prévio associado à hipocinesia segmentar em território compatível sugere cardiomiopatia isquêmica, com possível componente de miocárdio hibernante na área acometida.",
      conduta:
        "Otimizar terapia clínica para insuficiência cardíaca com fração de ejeção reduzida e considerar avaliação de viabilidade miocárdica para definir benefício potencial de revascularização.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "sinvastatina", nome: "Sinvastatina" },
    ],
    fontes: [
      { tema: "Definição e espectro clínico", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Papel da terapia clínica otimizada vs. revascularização em doença estável", fonte: "ISCHEMIA Trial (New England Journal of Medicine, 2020)" },
      { tema: "Viabilidade miocárdica e miocárdio hibernante", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "fibrilacao-flutter-atrial",
    nome: "Fibrilação e flutter atrial",
    sinonimos: ["FA", "Fibrilação atrial", "Flutter atrial"],
    cid10: "I48",
    especialidade: "Cardiologia",
    etiologia: "Multifatorial",
    resumo: "Arritmias supraventriculares caracterizadas por atividade atrial desorganizada (fibrilação) ou circuito de reentrada organizado (flutter), com risco de resposta ventricular irregular ou rápida e de fenômenos tromboembólicos.",
    definicao:
      "Fibrilação atrial: arritmia supraventricular caracterizada por ativação atrial rápida e desorganizada, resultando em contração atrial ineficaz e resposta ventricular irregular. Flutter atrial: taquiarritmia atrial organizada por macrorreentrada, tipicamente com frequência atrial em torno de 300 bpm e condução ventricular variável.",
    epidemiologia:
      "Arritmia sustentada mais comum na prática clínica, com prevalência crescente com a idade; associada a hipertensão, valvopatias, insuficiência cardíaca, hipertireoidismo, obesidade e apneia obstrutiva do sono.",
    fisiopatologia:
      "Na fibrilação atrial, focos ectópicos (frequentemente nas veias pulmonares) e um substrato atrial remodelado geram múltiplos circuitos de reentrada desorganizados. No flutter atrial típico, um circuito de macrorreentrada estável ao redor do átrio direito (envolvendo o istmo cavotricuspídeo) gera atividade elétrica organizada e regular.",
    classificacao:
      "Fibrilação atrial classificada por padrão temporal: paroxística (reverte espontaneamente em até 7 dias), persistente (>7 dias), persistente de longa duração (>1 ano) e permanente. Risco tromboembólico estratificado pelo escore CHA2DS2-VASc e risco hemorrágico pelo escore HAS-BLED.",
    quadroClinico: [
      "Palpitações e sensação de coração acelerado/irregular",
      "Dispneia e fadiga, especialmente com resposta ventricular rápida",
      "Pode ser assintomática, achado incidental em exame de rotina",
      "Tontura ou síncope em casos de resposta ventricular muito rápida ou muito lenta",
    ],
    diagnostico: [
      "Eletrocardiograma: ausência de ondas P organizadas com resposta ventricular irregular na FA; ondas 'F' em serrote no flutter atrial",
      "Monitorização Holter ou monitor de eventos para arritmias paroxísticas",
      "Ecocardiograma para avaliação estrutural e de trombo em apêndice atrial esquerdo",
    ],
    examesComplementares: [
      "Eletrocardiograma de 12 derivações",
      "Ecocardiograma transtorácico (e transesofágico quando cardioversão é planejada e a duração da arritmia é incerta)",
      "Função tireoidiana (hipertireoidismo como causa reversível)",
      "Eletrólitos e função renal",
    ],
    diagnosticoDiferencial: [
      "Taquicardia sinusal",
      "Taquicardia supraventricular paroxística",
      "Extrassístoles atriais frequentes",
    ],
    tratamento: [
      "Controle de frequência (betabloqueador ou bloqueador de canal de cálcio não di-hidropiridínico) ou controle de ritmo (cardioversão elétrica/farmacológica, ablação por cateter) conforme perfil do paciente",
      "Anticoagulação oral baseada no escore CHA2DS2-VASc, independentemente da estratégia de controle de ritmo ou frequência",
      "Tratamento de causas reversíveis (hipertireoidismo, distúrbios hidroeletrolíticos)",
      "Ablação por cateter do istmo cavotricuspídeo como tratamento definitivo altamente eficaz no flutter atrial típico",
    ],
    complicacoes: [
      "Acidente vascular cerebral isquêmico embólico",
      "Insuficiência cardíaca por taquicardiomiopatia em resposta ventricular rápida sustentada",
      "Instabilidade hemodinâmica em resposta ventricular muito rápida",
    ],
    redFlags: [
      "FA de início incerto associada a instabilidade hemodinâmica — cardioversão de emergência é indicada independentemente da anticoagulação prévia",
      "Défice neurológico focal agudo em paciente com FA conhecida — investigar AVC embólico imediatamente",
    ],
    prognostico:
      "Variável conforme cardiopatia de base e adesão à anticoagulação; o principal determinante de morbimortalidade evitável é a prevenção do AVC embólico através da anticoagulação adequada.",
    pontosDeProva: [
      "A decisão de anticoagular depende do escore CHA2DS2-VASc, não da estratégia de controle de ritmo ou frequência escolhida — mesmo pacientes assintomáticos e em ritmo sinusal após cardioversão podem precisar de anticoagulação contínua",
      "Antes de cardioversão eletiva em FA com duração >48h ou incerta, é necessário anticoagulação por pelo menos 3 semanas ou ecocardiograma transesofágico para excluir trombo atrial",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 74 anos, hipertensa e diabética, relata palpitações intermitentes há 2 meses. ECG na consulta mostra ritmo irregularmente irregular, sem ondas P identificáveis, frequência ventricular de 110 bpm.",
      pergunta: "Qual escore deve guiar a decisão de anticoagulação nesta paciente?",
      raciocinio:
        "O quadro é compatível com fibrilação atrial. A decisão de anticoagulação independe da estratégia de controle de ritmo/frequência e deve ser guiada pelo escore CHA2DS2-VASc, que nesta paciente já soma pontos por idade, hipertensão e diabetes.",
      conduta:
        "Calcular o CHA2DS2-VASc (indicando anticoagulação nesta paciente), iniciar controle de frequência cardíaca e investigar causas reversíveis como disfunção tireoidiana antes de definir manejo definitivo.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "varfarina-sodica", nome: "Varfarina sódica" },
    ],
    fontes: [
      { tema: "Classificação temporal e fisiopatologia", fonte: "Diretriz da Sociedade Brasileira de Cardiologia sobre Fibrilação Atrial, 2016" },
      { tema: "Escores CHA2DS2-VASc e HAS-BLED", fonte: "ESC Guidelines for the diagnosis and management of atrial fibrillation, 2020" },
      { tema: "Flutter atrial típico e ablação do istmo cavotricuspídeo", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "parada-cardiaca",
    nome: "Parada cardíaca",
    sinonimos: ["Parada cardiorrespiratória", "PCR", "Morte súbita cardíaca"],
    cid10: "I46",
    especialidade: "Cardiologia",
    etiologia: "Multifatorial",
    resumo: "Cessação abrupta da atividade mecânica cardíaca eficaz, com perda de pulso e consciência, exigindo reconhecimento e ressuscitação cardiopulmonar imediatos.",
    definicao:
      "Interrupção súbita da função cardíaca de bombeamento eficaz, levando à ausência de pulso palpável, perda de consciência e cessação da respiração normal (ou respiração agônica/gasping), com risco de morte se não revertida rapidamente.",
    epidemiologia:
      "A doença arterial coronariana é a causa mais comum de parada cardíaca súbita em adultos. Ocorre tanto em ambiente extra-hospitalar quanto intra-hospitalar, sendo a sobrevida fortemente dependente da rapidez do reconhecimento e do início da ressuscitação cardiopulmonar e da desfibrilação, quando indicada.",
    fisiopatologia:
      "Pode resultar de arritmias malignas (fibrilação ventricular, taquicardia ventricular sem pulso), atividade elétrica sem pulso ou assistolia, geralmente desencadeadas por isquemia miocárdica aguda, cardiomiopatias, distúrbios eletrolíticos graves ou causas não cardíacas (hipóxia, intoxicações, tromboembolismo pulmonar maciço).",
    classificacao:
      "Classificada pelo ritmo cardíaco identificado no monitor: ritmos chocáveis (fibrilação ventricular e taquicardia ventricular sem pulso) e ritmos não chocáveis (assistolia e atividade elétrica sem pulso) — essa distinção determina diretamente a conduta imediata durante a ressuscitação.",
    quadroClinico: [
      "Perda súbita de consciência",
      "Ausência de pulso central palpável",
      "Ausência de respiração normal ou presença de respiração agônica (gasping)",
      "Cianose e ausência de resposta a estímulos",
    ],
    diagnostico: [
      "Diagnóstico clínico imediato: ausência de responsividade, ausência de respiração normal e ausência de pulso central (verificação rápida, sem atrasar o início da ressuscitação)",
      "Identificação do ritmo pelo monitor/desfibrilador assim que disponível",
    ],
    examesComplementares: [
      "Monitorização eletrocardiográfica contínua durante a ressuscitação",
      "Gasometria arterial e eletrólitos após retorno da circulação espontânea",
      "Investigação da causa de base (troponina, ecocardiograma, angiotomografia de coronárias/pulmonar conforme suspeita) após estabilização",
    ],
    diagnosticoDiferencial: [
      "Síncope (recuperação espontânea da consciência, presença de pulso)",
      "Estado de choque grave com pulso ainda palpável",
    ],
    tratamento: [
      "Início imediato de compressões torácicas de alta qualidade e ressuscitação cardiopulmonar",
      "Desfibrilação precoce em ritmos chocáveis (fibrilação ventricular/taquicardia ventricular sem pulso)",
      "Manejo avançado da via aérea e acesso vascular para administração de medicações conforme algoritmo de suporte avançado de vida",
      "Identificação e correção das causas reversíveis (os '5 Hs e 5 Ts': hipóxia, hipovolemia, hidrogênio/acidose, hipo/hipercalemia, hipotermia; tensão no tórax por pneumotórax, tamponamento, toxinas, trombose coronariana, trombose pulmonar)",
      "Cuidados pós-parada cardíaca, incluindo controle direcionado de temperatura, após retorno da circulação espontânea",
    ],
    complicacoes: [
      "Lesão neurológica hipóxico-isquêmica",
      "Síndrome pós-parada cardíaca (disfunção miocárdica, resposta inflamatória sistêmica)",
      "Óbito",
    ],
    redFlags: [
      "Qualquer atraso no início das compressões torácicas reduz drasticamente a sobrevida — o reconhecimento deve ser imediato e a ressuscitação não deve aguardar confirmação diagnóstica completa",
    ],
    prognostico:
      "Fortemente dependente do tempo até o início da ressuscitação cardiopulmonar e da desfibrilação (quando indicada), do ritmo inicial identificado (chocável tem melhor prognóstico que não chocável) e da presença de testemunhas/ressuscitação leiga precoce.",
    pontosDeProva: [
      "A distinção entre ritmos chocáveis e não chocáveis é o ponto de decisão mais importante no algoritmo de suporte avançado de vida",
      "Compressões torácicas de alta qualidade e minimamente interrompidas têm impacto maior na sobrevida do que a maioria das intervenções farmacológicas durante a ressuscitação",
      "Os '5 Hs e 5 Ts' resumem as causas reversíveis que devem ser ativamente pesquisadas e tratadas durante a ressuscitação",
    ],
    casoClinico: {
      vinheta:
        "Homem, 55 anos, colapsa subitamente em via pública. Transeuntes não encontram pulso e ele não respira normalmente.",
      pergunta: "Qual é a conduta imediata antes mesmo de qualquer diagnóstico etiológico?",
      raciocinio:
        "A ausência de responsividade, respiração normal e pulso caracteriza parada cardiorrespiratória. Nesse cenário, cada minuto sem ressuscitação reduz significativamente a chance de sobrevida, tornando o início imediato das compressões torácicas prioridade absoluta sobre qualquer investigação diagnóstica.",
      conduta:
        "Iniciar compressões torácicas de alta qualidade imediatamente, acionar serviço de emergência e aplicar desfibrilador automático externo assim que disponível, seguindo o algoritmo de suporte básico/avançado de vida.",
    },
    medicamentosPrimeiraLinha: [],
    medicamentosNota:
      "A conduta prioritária na parada cardíaca é não farmacológica: compressões torácicas de alta qualidade e desfibrilação precoce, quando indicada. A adrenalina e os antiarrítmicos usados no suporte avançado de vida ainda não têm ficha própria no site.",
    fontes: [
      { tema: "Ritmos chocáveis vs. não chocáveis e algoritmo de RCP", fonte: "American Heart Association, Diretrizes de Ressuscitação Cardiopulmonar e Cuidados Cardiovasculares de Emergência" },
      { tema: "Causas reversíveis ('5 Hs e 5 Ts')", fonte: "American Heart Association, Diretrizes de Ressuscitação Cardiopulmonar e Cuidados Cardiovasculares de Emergência" },
      { tema: "Adrenalina e antiarrítmicos no suporte avançado de vida (ainda sem ficha própria de medicamento no site)", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "febre-reumatica",
    nome: "Febre reumática",
    sinonimos: ["Febre reumática aguda", "Cardite reumática"],
    cid10: "I01",
    especialidade: "Cardiologia",
    etiologia: "Autoimune",
    resumo: "Sequela inflamatória autoimune tardia de faringoamigdalite estreptocócica não tratada, que pode acometer coração, articulações, sistema nervoso central e pele.",
    definicao:
      "Doença inflamatória sistêmica autoimune que ocorre como sequela tardia (2-4 semanas) de faringoamigdalite por Streptococcus pyogenes (estreptococo beta-hemolítico do grupo A) não tratada adequadamente, podendo causar dano cardíaco valvar permanente (cardiopatia reumática crônica).",
    epidemiologia:
      "Mais prevalente em países em desenvolvimento, incluindo regiões do Brasil com menor acesso a cuidados de saúde; acomete predominantemente crianças e adolescentes entre 5-15 anos. Principal causa de doença valvar cardíaca adquirida em países de baixa e média renda.",
    fisiopatologia:
      "Mimetismo molecular entre antígenos do estreptococo do grupo A (proteína M) e proteínas de tecidos humanos (miosina cardíaca, tecido articular, núcleos da base) desencadeia resposta autoimune cruzada, causando inflamação em válvulas cardíacas, articulações, sistema nervoso central e pele.",
    classificacao:
      "Diagnóstico baseado nos critérios de Jones revisados, que exigem evidência de infecção estreptocócica prévia associada a manifestações maiores (cardite, poliartrite migratória, coreia de Sydenham, eritema marginado, nódulos subcutâneos) e/ou menores (febre, artralgia, elevação de provas inflamatórias, intervalo PR prolongado), com critérios diferenciados para populações de alto e baixo risco.",
    quadroClinico: [
      "Poliartrite migratória de grandes articulações, geralmente o achado mais comum",
      "Cardite (pode ser subclínica, detectada apenas ao ecocardiograma)",
      "Coreia de Sydenham (movimentos involuntários, mais tardia)",
      "Eritema marginado e nódulos subcutâneos (menos comuns)",
      "Febre e mal-estar geral",
    ],
    diagnostico: [
      "Critérios de Jones revisados (manifestações maiores e menores associadas a evidência de infecção estreptocócica prévia)",
      "Evidência de infecção estreptocócica recente: cultura de orofaringe, teste rápido de antígeno ou títulos elevados/ascendentes de anticorpos (ASLO)",
      "Ecocardiograma para avaliação de cardite, incluindo casos subclínicos",
    ],
    examesComplementares: [
      "Antiestreptolisina O (ASLO) e anti-DNAse B",
      "Provas de atividade inflamatória (VHS, proteína C-reativa)",
      "Ecocardiograma com Doppler para avaliação valvar",
      "Eletrocardiograma (avaliação de intervalo PR)",
    ],
    diagnosticoDiferencial: [
      "Artrite idiopática juvenil",
      "Endocardite infecciosa",
      "Lúpus eritematoso sistêmico",
      "Artrite reativa pós-infecciosa",
    ],
    tratamento: [
      "Erradicação do estreptococo com antibioticoterapia (penicilina benzatina em dose única ou equivalente oral)",
      "Anti-inflamatórios (AAS ou corticosteroide em cardite grave) para controle da inflamação aguda",
      "Profilaxia secundária prolongada com penicilina benzatina para prevenir recorrências e progressão do dano valvar",
      "Manejo cardiológico específico conforme gravidade da cardite e sequela valvar",
    ],
    complicacoes: [
      "Cardiopatia reumática crônica, especialmente estenose mitral",
      "Insuficiência cardíaca por dano valvar progressivo",
      "Recorrências com novos surtos em exposições estreptocócicas subsequentes",
    ],
    redFlags: [
      "Cardite grave com sinais de insuficiência cardíaca aguda — pode exigir tratamento intensivo e avaliação cirúrgica precoce",
    ],
    prognostico:
      "O dano valvar cardíaco é o principal determinante de morbidade a longo prazo; a adesão à profilaxia secundária prolongada é essencial para prevenir recorrências e progressão para cardiopatia reumática crônica.",
    pontosDeProva: [
      "A profilaxia secundária com penicilina benzatina deve ser mantida por anos (a duração varia conforme presença e gravidade de cardite) — é a intervenção mais importante para prevenir dano valvar cumulativo",
      "A poliartrite da febre reumática é classicamente migratória e responde dramaticamente a anti-inflamatórios, ao contrário de artrites infecciosas",
    ],
    casoClinico: {
      vinheta:
        "Menino, 9 anos, apresenta dor articular migratória (joelho, depois tornozelo) há 5 dias, febre e histórico de dor de garganta há 3 semanas não tratada com antibiótico. Ausculta cardíaca revela sopro novo.",
      pergunta: "Quais critérios sustentam o diagnóstico de febre reumática aguda neste caso?",
      raciocinio:
        "A poliartrite migratória e o sopro cardíaco novo (sugestivo de cardite) são critérios maiores de Jones. Associados à história de faringoamigdalite prévia (evidência de infecção estreptocócica), o quadro é altamente sugestivo de febre reumática aguda.",
      conduta:
        "Confirmar infecção estreptocócica prévia com ASLO, solicitar ecocardiograma para caracterizar a cardite, iniciar antibioticoterapia para erradicação do estreptococo e anti-inflamatório, e programar profilaxia secundária prolongada.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Fisiopatologia (mimetismo molecular)", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Critérios de Jones revisados", fonte: "Critérios de Jones revisados (American Heart Association, 2015)" },
      { tema: "Penicilina benzatina no tratamento e profilaxia secundária (ainda sem ficha própria de medicamento no site)", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "endocardite-infecciosa",
    nome: "Endocardite infecciosa",
    sinonimos: ["Endocardite bacteriana", "Endocardite aguda e subaguda"],
    cid10: "I33",
    especialidade: "Cardiologia",
    etiologia: "Bacteriana",
    resumo: "Infecção do endocárdio, tipicamente das valvas cardíacas, causada mais comumente por estafilococos e estreptococos, com risco de destruição valvar e embolização séptica.",
    definicao:
      "Infecção microbiana do endocárdio, mais frequentemente envolvendo as valvas cardíacas nativas ou protéticas, caracterizada pela formação de vegetações compostas por plaquetas, fibrina e microrganismos.",
    epidemiologia:
      "Fatores de risco incluem valvopatia estrutural prévia, próteses valvares, uso de drogas injetáveis, dispositivos intracardíacos e procedimentos invasivos recentes. Staphylococcus aureus é atualmente a causa mais comum em muitos contextos, seguido por estreptococos do grupo viridans e enterococos.",
    fisiopatologia:
      "Lesão endotelial (por turbulência de fluxo em valva anormal, dispositivo ou trauma) predispõe à adesão de plaquetas e fibrina, formando um nicho para colonização bacteriana durante bacteremia transitória ou persistente, resultando em vegetações que podem causar destruição valvar local e embolização séptica a distância.",
    classificacao:
      "Classificada quanto à evolução temporal em aguda (curso fulminante, tipicamente por S. aureus) e subaguda (curso insidioso ao longo de semanas, classicamente por estreptococos do grupo viridans); também classificada quanto ao substrato acometido (valva nativa vs. valva protética) e quanto à origem (comunitária, associada a cuidados de saúde ou associada a uso de drogas injetáveis).",
    quadroClinico: [
      "Febre persistente, frequentemente o achado mais consistente",
      "Sopro cardíaco novo ou modificação de sopro preexistente",
      "Fenômenos embólicos (AVC, embolia arterial periférica, infartos esplênicos/renais)",
      "Manifestações imunológicas/vasculíticas: petéquias, hemorragias em estilhaço subungueais, nódulos de Osler, manchas de Janeway, manchas de Roth",
    ],
    diagnostico: [
      "Critérios de Duke modificados, combinando critérios maiores (hemoculturas positivas persistentes com microrganismo típico, evidência ecocardiográfica de envolvimento endocárdico) e menores (fatores predisponentes, febre, fenômenos vasculares/imunológicos)",
      "Hemoculturas seriadas antes do início de antibioticoterapia",
      "Ecocardiograma transtorácico e, quando necessário, transesofágico para visualização de vegetações",
    ],
    examesComplementares: [
      "Três a mais séries de hemoculturas colhidas de sítios diferentes antes de iniciar antibiótico",
      "Ecocardiograma transesofágico quando o transtorácico é inconclusivo ou há suspeita de complicação (abscesso perivalvar, prótese)",
      "Provas de atividade inflamatória (VHS, proteína C-reativa)",
      "Eletrocardiograma seriado (avaliação de novo distúrbio de condução, sugestivo de extensão perivalvar)",
    ],
    diagnosticoDiferencial: [
      "Febre reumática aguda",
      "Lúpus eritematoso sistêmico (endocardite de Libman-Sacks)",
      "Mixoma atrial",
      "Sepse de outro foco com fenômenos embólicos",
    ],
    tratamento: [
      "Antibioticoterapia intravenosa prolongada e dirigida ao microrganismo identificado em hemocultura, por período tipicamente de 4-6 semanas",
      "Avaliação cirúrgica precoce em casos de insuficiência cardíaca refratária, infecção não controlada, abscesso perivalvar ou embolização recorrente apesar de antibioticoterapia adequada",
      "Profilaxia antibiótica em procedimentos odontológicos de risco para pacientes com condições cardíacas de alto risco previamente estabelecidas",
    ],
    complicacoes: [
      "Insuficiência cardíaca aguda por destruição valvar",
      "Fenômenos embólicos sistêmicos, incluindo AVC",
      "Abscesso perivalvar e distúrbios de condução",
      "Choque séptico",
    ],
    redFlags: [
      "Novo sopro cardíaco associado a febre inexplicada — investigar endocardite infecciosa ativamente, especialmente em usuário de drogas injetáveis ou portador de prótese valvar",
      "Sinais de insuficiência cardíaca aguda em paciente com endocardite conhecida — indicação frequente de avaliação cirúrgica urgente",
    ],
    prognostico:
      "Mortalidade significativa mesmo com tratamento adequado, especialmente em endocardite de prótese valvar ou por S. aureus; diagnóstico e tratamento precoces, junto com avaliação cirúrgica oportuna quando indicada, melhoram substancialmente o desfecho.",
    pontosDeProva: [
      "Colher hemoculturas antes de iniciar antibiótico é essencial — o resultado direciona toda a terapia e integra os critérios diagnósticos maiores de Duke",
      "As manifestações imunológicas/vasculíticas clássicas (nódulos de Osler, manchas de Janeway, manchas de Roth) são achados de prova, mas relativamente incomuns na prática atual",
    ],
    casoClinico: {
      vinheta:
        "Homem, 34 anos, usuário de drogas injetáveis, apresenta febre há 10 dias, mal-estar e um sopro sistólico novo à ausculta cardíaca. Refere lesões dolorosas nas polpas digitais.",
      pergunta: "Qual é a conduta diagnóstica imediata antes de iniciar tratamento?",
      raciocinio:
        "O quadro de febre persistente, sopro novo e fenômenos vasculares em usuário de drogas injetáveis (fator de risco clássico para acometimento de valva tricúspide) é altamente sugestivo de endocardite infecciosa aguda, provavelmente por S. aureus.",
      conduta:
        "Colher pelo menos três séries de hemoculturas de sítios diferentes antes de iniciar antibioticoterapia empírica, solicitar ecocardiograma para pesquisa de vegetações e avaliar critérios de Duke modificados para confirmação diagnóstica.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Fisiopatologia e etiologia predominante", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Critérios de Duke modificados", fonte: "Critérios de Duke modificados (Li et al., Clinical Infectious Diseases, 2000)" },
      { tema: "Antibioticoterapia dirigida (ainda sem fichas próprias de medicamentos parenterais no site)", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "valvopatia-mitral-nao-reumatica",
    nome: "Transtornos não-reumáticos da valva mitral",
    sinonimos: ["Prolapso da valva mitral", "Insuficiência mitral degenerativa", "Estenose mitral não reumática"],
    cid10: "I34",
    especialidade: "Cardiologia",
    etiologia: "Degenerativa",
    resumo: "Disfunções estruturais da valva mitral (regurgitação ou, mais raramente, estenose) de causa não reumática, mais comumente degenerativa, como o prolapso valvar mitral.",
    definicao:
      "Conjunto de anormalidades estruturais e funcionais da valva mitral não relacionadas a sequela de febre reumática, incluindo prolapso valvar mitral, degeneração mixomatosa, calcificação do anel mitral e insuficiência mitral funcional secundária à dilatação ventricular.",
    epidemiologia:
      "O prolapso da valva mitral é a valvopatia mais comum na população geral, com prevalência estimada em torno de 2-3%. A insuficiência mitral degenerativa aumenta em frequência com o envelhecimento populacional, sendo hoje a principal causa de insuficiência mitral primária em países desenvolvidos.",
    fisiopatologia:
      "Na degeneração mixomatosa, alterações no tecido conjuntivo valvar levam a alongamento e enfraquecimento das cordas tendíneas e dos folhetos, causando prolapso de um ou ambos os folhetos para o átrio esquerdo durante a sístole, com regurgitação mitral resultante. A insuficiência mitral funcional decorre de dilatação do ventrículo esquerdo e do anel mitral, sem anormalidade estrutural primária dos folhetos.",
    classificacao:
      "Classificada pela Sociedade Americana de Ecocardiografia em disfunção primária (estrutural, ex.: prolapso, degeneração mixomatosa) e secundária/funcional (por doença ventricular ou atrial subjacente, com folhetos estruturalmente normais). A gravidade da regurgitação é graduada em leve, moderada e importante por critérios ecocardiográficos quantitativos e qualitativos.",
    quadroClinico: [
      "Frequentemente assintomático por longos períodos, mesmo com regurgitação significativa",
      "Dispneia aos esforços progressiva quando há repercussão hemodinâmica",
      "Palpitações associadas a arritmias atriais",
      "Fadiga e redução da capacidade funcional em casos avançados",
    ],
    diagnostico: [
      "Ausculta cardíaca: sopro holossistólico em foco mitral, com ou sem click mesossistólico (sugestivo de prolapso)",
      "Ecocardiograma transtorácico com Doppler para caracterização anatômica e quantificação da gravidade",
      "Ecocardiograma transesofágico em casos de dúvida diagnóstica ou planejamento cirúrgico",
    ],
    examesComplementares: [
      "Ecocardiograma transtorácico com Doppler colorido para graduação da regurgitação/estenose",
      "Ecocardiograma transesofágico para avaliação anatômica detalhada pré-operatória",
      "Ressonância magnética cardíaca em casos selecionados para quantificação de volume regurgitante",
    ],
    diagnosticoDiferencial: [
      "Valvopatia mitral reumática",
      "Insuficiência mitral isquêmica (por disfunção de músculo papilar pós-infarto)",
      "Endocardite infecciosa com destruição valvar",
    ],
    tratamento: [
      "Acompanhamento clínico e ecocardiográfico seriado em pacientes assintomáticos com disfunção leve a moderada",
      "Correção cirúrgica (preferencialmente reparo valvar) ou intervenção percutânea em pacientes sintomáticos ou com critérios ecocardiográficos de gravidade e repercussão ventricular",
      "Tratamento farmacológico de suporte para sintomas de congestão quando presente, sem alterar o curso natural da valvopatia estrutural",
    ],
    complicacoes: [
      "Insuficiência cardíaca por sobrecarga de volume crônica",
      "Fibrilação atrial por dilatação atrial esquerda",
      "Hipertensão pulmonar em casos avançados",
      "Endocardite infecciosa em valva estruturalmente anormal",
    ],
    redFlags: [
      "Dispneia de início recente ou piora funcional em paciente com prolapso mitral previamente estável — reavaliar gravidade da regurgitação, pode indicar indicação cirúrgica",
    ],
    prognostico:
      "Geralmente favorável quando assintomático e com disfunção leve; o momento adequado de intervenção cirúrgica antes do surgimento de disfunção ventricular irreversível é determinante para o prognóstico a longo prazo.",
    pontosDeProva: [
      "O reparo valvar é preferível à troca valvar sempre que anatomicamente viável, por preservar melhor a função ventricular e evitar necessidade de anticoagulação vitalícia",
      "Regurgitação mitral significativa pode permanecer assintomática por anos às custas de dilatação ventricular compensatória — a decisão cirúrgica não deve depender apenas de sintomas",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 45 anos, assintomática, é encaminhada após ausculta de sopro sistólico com click mesossistólico em foco mitral durante exame de rotina. Ecocardiograma confirma prolapso do folheto posterior com regurgitação moderada.",
      pergunta: "Qual é a conduta mais apropriada neste momento?",
      raciocinio:
        "O achado é compatível com prolapso da valva mitral com regurgitação moderada em paciente assintomática. Nesse cenário, o acompanhamento clínico e ecocardiográfico seriado é indicado, reservando a intervenção cirúrgica para progressão de sintomas ou critérios de gravidade.",
      conduta:
        "Manter seguimento ambulatorial com ecocardiogramas periódicos para monitorar progressão da regurgitação e função ventricular, orientando a paciente sobre sinais de alarme que justificariam reavaliação precoce.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Fisiopatologia da degeneração mixomatosa", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Classificação e critérios de gravidade da regurgitação mitral", fonte: "Diretriz ACC/AHA sobre Doença Valvar Cardíaca, 2020" },
      { tema: "Indicação e momento de tratamento farmacológico/cirúrgico específico (ainda sem ficha própria de medicamento no site)", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "valvopatia-aortica-nao-reumatica",
    nome: "Transtornos não-reumáticos da valva aórtica",
    sinonimos: ["Estenose aórtica degenerativa", "Valva aórtica bicúspide"],
    cid10: "I35",
    especialidade: "Cardiologia",
    etiologia: "Degenerativa",
    resumo: "Disfunções estruturais da valva aórtica de causa não reumática, mais comumente a estenose aórtica calcificada degenerativa relacionada ao envelhecimento e a valva aórtica bicúspide congênita.",
    definicao:
      "Conjunto de anormalidades estruturais e funcionais da valva aórtica não relacionadas a sequela de febre reumática, principalmente a estenose aórtica calcificada senil (degenerativa) e alterações associadas a valva aórtica bicúspide, podendo também incluir insuficiência aórtica de causas variadas (dilatação da raiz aórtica, degeneração).",
    epidemiologia:
      "A estenose aórtica calcificada degenerativa é a valvopatia mais comum em idosos nos países desenvolvidos, com prevalência crescendo acentuadamente após os 65 anos. A valva aórtica bicúspide é a malformação cardíaca congênita mais comum, presente em cerca de 1-2% da população, e predispõe à calcificação precoce.",
    fisiopatologia:
      "Na estenose aórtica degenerativa, um processo semelhante à aterosclerose (inflamação, deposição lipídica e calcificação progressiva dos folhetos) causa espessamento e rigidez valvar, reduzindo progressivamente a área de abertura e gerando obstrução à ejeção do ventrículo esquerdo, com hipertrofia ventricular compensatória e, eventualmente, disfunção sistólica.",
    classificacao:
      "Gravidade da estenose aórtica graduada por área valvar, gradiente médio transvalvar e velocidade de jato ao Doppler em leve, moderada e importante (grave), conforme critérios ecocardiográficos padronizados; estágios clínicos (A a D) definidos pela presença de sintomas e repercussão hemodinâmica conforme diretrizes ACC/AHA.",
    quadroClinico: [
      "Longo período assintomático mesmo com estenose progressiva",
      "Tríade clássica em estenose grave sintomática: angina, síncope e dispneia (insuficiência cardíaca)",
      "Sopro sistólico ejetivo em foco aórtico, com irradiação para carótidas",
      "Insuficiência aórtica: dispneia progressiva, sopro diastólico aspirativo",
    ],
    diagnostico: [
      "Ausculta cardíaca característica (sopro sistólico ejetivo em foco aórtico, irradiado para carótidas, na estenose)",
      "Ecocardiograma transtorácico com Doppler para quantificação da área valvar e gradientes",
      "Cateterismo cardíaco em casos de discordância entre achados clínicos e ecocardiográficos",
    ],
    examesComplementares: [
      "Ecocardiograma transtorácico com Doppler (área valvar, gradiente médio, velocidade de jato)",
      "Ecocardiograma de estresse com dobutamina em estenose aórtica de baixo fluxo/baixo gradiente com disfunção ventricular",
      "Angiotomografia computadorizada para avaliação de calcificação valvar e planejamento de intervenção percutânea",
    ],
    diagnosticoDiferencial: [
      "Cardiomiopatia hipertrófica obstrutiva",
      "Estenose subaórtica",
      "Esclerose aórtica sem obstrução significativa",
    ],
    tratamento: [
      "Acompanhamento clínico e ecocardiográfico seriado em pacientes assintomáticos",
      "Troca valvar aórtica cirúrgica ou implante valvar aórtico transcateter (TAVI) em pacientes sintomáticos com estenose grave ou com critérios de gravidade estabelecidos",
      "Manejo farmacológico de suporte para sintomas de insuficiência cardíaca quando presentes, sem substituir a indicação de troca valvar em casos graves",
    ],
    complicacoes: [
      "Insuficiência cardíaca",
      "Morte súbita cardíaca, especialmente em estenose grave sintomática não tratada",
      "Angina por desequilíbrio entre demanda e oferta de oxigênio miocárdico mesmo sem doença coronariana associada",
    ],
    redFlags: [
      "Síncope, angina ou dispneia em paciente com estenose aórtica conhecida — sintomas mudam drasticamente o prognóstico e indicam avaliação urgente para troca valvar",
    ],
    prognostico:
      "Excelente enquanto assintomático, mas o surgimento de sintomas (angina, síncope, dispneia) na estenose aórtica grave associa-se a mortalidade elevada em curto prazo sem intervenção, tornando os sintomas o principal gatilho para indicação de troca valvar.",
    pontosDeProva: [
      "O surgimento de qualquer um dos sintomas da tríade clássica (angina, síncope, dispneia) na estenose aórtica grave é indicação de troca valvar, independentemente de outros achados",
      "Valva aórtica bicúspide predispõe à calcificação e estenose em idade mais precoce que a forma tricúspide degenerativa, além de associação com dilatação da aorta ascendente",
    ],
    casoClinico: {
      vinheta:
        "Homem, 72 anos, relata episódios de síncope ao esforço nas últimas semanas. Ausculta cardíaca revela sopro sistólico ejetivo rude em foco aórtico, irradiado para carótidas. Ecocardiograma mostra área valvar aórtica de 0,8 cm² e gradiente médio de 48 mmHg.",
      pergunta: "Qual é a conduta mais apropriada diante deste quadro?",
      raciocinio:
        "A síncope de esforço associada a estenose aórtica grave (área valvar <1,0 cm², gradiente médio elevado) caracteriza estenose aórtica grave sintomática, condição com risco significativo de morte súbita e indicação formal de troca valvar.",
      conduta:
        "Encaminhar com prioridade para avaliação de troca valvar aórtica (cirúrgica ou transcateter, conforme risco cirúrgico e anatomia), sem postergar a intervenção diante da presença de sintomas.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Fisiopatologia da estenose aórtica degenerativa", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Estágios clínicos e critérios de gravidade", fonte: "Diretriz ACC/AHA sobre Doença Valvar Cardíaca, 2020" },
      { tema: "Tríade clássica e prognóstico pós-sintomas", fonte: "Diretriz ACC/AHA sobre Doença Valvar Cardíaca, 2020" },
    ],
  },
  {
    slug: "cardiomiopatias",
    nome: "Cardiomiopatias",
    sinonimos: ["Miocardiopatias", "Doenças do músculo cardíaco"],
    cid10: "I42",
    especialidade: "Cardiologia",
    etiologia: "Multifatorial",
    resumo: "Grupo heterogêneo de doenças do músculo cardíaco que causam disfunção mecânica e/ou elétrica, classificadas em dilatada, hipertrófica, restritiva e arritmogênica de ventrículo direito.",
    definicao:
      "Doenças do miocárdio associadas a disfunção mecânica e/ou elétrica cardíaca, geralmente (mas não exclusivamente) exibindo hipertrofia ou dilatação ventricular inapropriada, e que resultam de diversas causas, frequentemente genéticas.",
    epidemiologia:
      "A cardiomiopatia dilatada é a forma mais comum e a principal causa de transplante cardíaco relacionada a cardiomiopatia primária. A cardiomiopatia hipertrófica é a causa genética mais comum de morte súbita cardíaca em atletas jovens. Etiologias incluem genéticas, isquêmicas, infecciosas (miocardite viral), tóxicas (álcool, quimioterápicos) e infiltrativas.",
    fisiopatologia:
      "Cardiomiopatia dilatada: dilatação e disfunção sistólica do ventrículo esquerdo (e frequentemente também direito), reduzindo a fração de ejeção. Cardiomiopatia hipertrófica: hipertrofia miocárdica desproporcional (frequentemente septal assimétrica), muitas vezes de causa genética (mutações em proteínas sarcoméricas), podendo gerar obstrução dinâmica da via de saída do ventrículo esquerdo. Cardiomiopatia restritiva: enchimento ventricular diastólico prejudicado por miocárdio rígido, com função sistólica frequentemente preservada, associada a doenças infiltrativas (amiloidose, sarcoidose).",
    classificacao:
      "Classificação fenotípica clássica: dilatada, hipertrófica, restritiva e arritmogênica de ventrículo direito, além de formas não classificadas. Também classificadas etiologicamente em primárias (genéticas, adquiridas, mistas) e secundárias a doenças sistêmicas.",
    quadroClinico: [
      "Dispneia, fadiga e sinais de congestão (dilatada e restritiva)",
      "Dispneia, angina, síncope ou pré-síncope aos esforços e palpitações (hipertrófica, especialmente na forma obstrutiva)",
      "Arritmias ventriculares, com risco de morte súbita, particularmente na hipertrófica e na arritmogênica de ventrículo direito",
      "Sinais de insuficiência cardíaca direita proeminentes na forma restritiva",
    ],
    diagnostico: [
      "Ecocardiograma para caracterização morfológica e funcional (padrão dilatado, hipertrófico ou restritivo)",
      "Ressonância magnética cardíaca para caracterização tecidual detalhada (fibrose, infiltração)",
      "Investigação etiológica dirigida (sorologias, biópsia endomiocárdica, triagem genética familiar quando indicado)",
    ],
    examesComplementares: [
      "Ecocardiograma transtorácico com Doppler",
      "Ressonância magnética cardíaca com realce tardio por gadolínio",
      "Eletrocardiograma (padrões sugestivos de hipertrofia ou infiltração)",
      "Triagem genética e avaliação de familiares de primeiro grau em formas hereditárias confirmadas ou suspeitas",
    ],
    diagnosticoDiferencial: [
      "Cardiomiopatia isquêmica (doença coronariana como causa da disfunção ventricular)",
      "Hipertensão arterial de longa data com hipertrofia ventricular secundária",
      "Pericardite constritiva (diagnóstico diferencial importante da cardiomiopatia restritiva)",
    ],
    tratamento: [
      "Cardiomiopatia dilatada: terapia farmacológica otimizada para insuficiência cardíaca com fração de ejeção reduzida (IECA/BRA, betabloqueador, antagonista mineralocorticoide, iSGLT2), com dispositivos (cardiodesfibrilador implantável, ressincronizador) em casos selecionados",
      "Cardiomiopatia hipertrófica: betabloqueadores como terapia inicial para sintomas obstrutivos, evitar depleção de volume e vasodilatadores excessivos, avaliação de risco de morte súbita para indicação de cardiodesfibrilador implantável",
      "Cardiomiopatia restritiva: tratamento predominantemente da causa de base (ex.: terapia específica para amiloidose), com manejo cuidadoso da congestão",
      "Aconselhamento genético e rastreamento familiar em formas hereditárias",
    ],
    complicacoes: [
      "Insuficiência cardíaca progressiva",
      "Arritmias ventriculares malignas e morte súbita cardíaca",
      "Fenômenos tromboembólicos em câmaras dilatadas ou com estase sanguínea",
    ],
    redFlags: [
      "Síncope de esforço ou história familiar de morte súbita em paciente jovem com hipertrofia ventricular — investigar cardiomiopatia hipertrófica e risco de morte súbita imediatamente",
    ],
    prognostico:
      "Muito variável conforme o fenótipo e a etiologia; formas com fração de ejeção muito reduzida ou alto risco arrítmico têm prognóstico mais reservado, mas a terapia farmacológica moderna para insuficiência cardíaca reduziu significativamente a mortalidade na cardiomiopatia dilatada.",
    pontosDeProva: [
      "Na cardiomiopatia hipertrófica obstrutiva, diuréticos e vasodilatadores excessivos podem piorar a obstrução dinâmica da via de saída — o manejo difere fundamentalmente de outras causas de dispneia cardíaca",
      "O tratamento farmacológico da cardiomiopatia dilatada segue os mesmos quatro pilares da insuficiência cardíaca com fração de ejeção reduzida, independentemente da etiologia primária",
    ],
    casoClinico: {
      vinheta:
        "Homem, 19 anos, atleta, apresenta síncope durante treino de corrida. Histórico familiar de morte súbita em tio paterno aos 35 anos. Ecocardiograma mostra hipertrofia septal assimétrica de 18mm.",
      pergunta: "Qual é a principal preocupação a ser investigada neste paciente?",
      raciocinio:
        "A associação de síncope de esforço, hipertrofia septal assimétrica e história familiar de morte súbita precoce é altamente sugestiva de cardiomiopatia hipertrófica, condição associada a risco significativo de morte súbita cardíaca em jovens atletas.",
      conduta:
        "Afastar o paciente de esportes competitivos até avaliação completa, estratificar risco de morte súbita (incluindo Holter e avaliação de obstrução da via de saída), considerar indicação de cardiodesfibrilador implantável conforme critérios de risco, e realizar triagem em familiares de primeiro grau.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "captopril", nome: "Captopril" },
      { slug: "enalapril", nome: "Enalapril" },
      { slug: "carvedilol", nome: "Carvedilol" },
      { slug: "espironolactona", nome: "Espironolactona" },
      { slug: "dapagliflozina", nome: "Dapagliflozina" },
    ],
    fontes: [
      { tema: "Classificação fenotípica das cardiomiopatias", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Tratamento da cardiomiopatia dilatada (pilares da IC-FEr)", fonte: "Diretriz de Insuficiência Cardíaca Crônica, SBC 2021" },
      { tema: "Cardiomiopatia hipertrófica e estratificação de risco de morte súbita", fonte: "ESC Guidelines for the diagnosis and management of hypertrophic cardiomyopathy, 2023" },
    ],
  },
  {
    slug: "pericardite-aguda",
    nome: "Pericardite aguda",
    sinonimos: ["Pericardite"],
    cid10: "I30",
    especialidade: "Cardiologia",
    etiologia: "Idiopática",
    resumo: "Inflamação aguda do pericárdio, mais comumente de causa idiopática/presumivelmente viral, caracterizada por dor torácica pleurítica posicional e atrito pericárdico.",
    definicao:
      "Síndrome inflamatória do pericárdio, diagnosticada pela presença de pelo menos dois dos seguintes critérios: dor torácica pericárdica característica, atrito pericárdico à ausculta, alterações eletrocardiográficas sugestivas (supradesnivelamento difuso do segmento ST) e novo ou piora de derrame pericárdico.",
    epidemiologia:
      "Causa mais comum de dor torácica de origem pericárdica em pronto-socorro; a maioria dos casos em países desenvolvidos é idiopática ou presumivelmente viral. Outras causas incluem pós-infarto do miocárdio, doenças autoimunes, neoplasias, uremia e tuberculose (mais relevante em regiões endêmicas).",
    fisiopatologia:
      "Processo inflamatório do pericárdio visceral e parietal, geralmente desencadeado por infecção viral ou mecanismo autoimune/pós-viral, levando a dor por irritação de terminações nervosas pericárdicas e podendo se associar a exsudação de líquido para o espaço pericárdico (derrame pericárdico).",
    classificacao:
      "Classificada quanto à evolução temporal em aguda (<4-6 semanas), incessante (>4-6 semanas mas <3 meses com atividade contínua), crônica (>3 meses) e recorrente (recidiva após período assintomático). Classificada etiologicamente em idiopática/viral, autoimune, neoplásica, urêmica, purulenta (bacteriana) e pós-cardíaca (síndrome de Dressler, pós-pericardiotomia).",
    quadroClinico: [
      "Dor torácica pleurítica, aguda, que piora com decúbito dorsal e melhora ao sentar-se inclinado para frente",
      "Atrito pericárdico à ausculta (som áspero, semelhante a raspar couro)",
      "Febre baixa e mal-estar, especialmente em causas virais",
      "Dispneia associada a derrame pericárdico volumoso",
    ],
    diagnostico: [
      "Pelo menos dois dos critérios: dor pericárdica típica, atrito pericárdico, supradesnivelamento difuso de ST ao ECG, novo/piora de derrame pericárdico",
      "Eletrocardiograma seriado (supradesnivelamento difuso e côncavo de ST, sem correlação com território coronariano específico, diferente do IAM)",
      "Ecocardiograma para avaliação de derrame pericárdico e sinais de repercussão hemodinâmica",
    ],
    examesComplementares: [
      "Eletrocardiograma de 12 derivações",
      "Ecocardiograma transtorácico",
      "Provas de atividade inflamatória (proteína C-reativa, VHS)",
      "Troponina (pode estar discretamente elevada em miopericardite associada)",
    ],
    diagnosticoDiferencial: [
      "Infarto agudo do miocárdio",
      "Embolia pulmonar",
      "Dissecção aórtica",
      "Pleurite",
    ],
    tratamento: [
      "Anti-inflamatório não esteroidal em dose plena como primeira linha na pericardite idiopática/viral",
      "Colchicina associada, para redução do risco de recorrência",
      "Corticosteroide reservado para casos refratários, contraindicação a AINE ou etiologias autoimunes específicas",
      "Restrição de atividade física intensa até resolução dos sintomas e normalização de marcadores inflamatórios",
    ],
    complicacoes: [
      "Derrame pericárdico volumoso com risco de tamponamento cardíaco",
      "Pericardite recorrente",
      "Pericardite constritiva (complicação tardia, mais associada a causas específicas como tuberculose)",
    ],
    redFlags: [
      "Dispneia, hipotensão e turgência jugular associadas à pericardite — suspeitar de tamponamento cardíaco e avaliar necessidade de pericardiocentese urgente",
      "Febre alta, leucocitose importante e quadro toxêmico — considerar pericardite purulenta bacteriana, com abordagem distinta",
    ],
    prognostico:
      "Geralmente excelente na pericardite idiopática/viral não complicada, com resolução completa na maioria dos casos; recorrência ocorre em uma parcela significativa dos pacientes, sendo reduzida pelo uso de colchicina desde o episódio inicial.",
    pontosDeProva: [
      "O supradesnivelamento de ST na pericardite é difuso e côncavo, sem corresponder a um território coronariano específico — diferencial eletrocardiográfico chave com o IAM",
      "A colchicina, associada ao AINE desde o primeiro episódio, reduz significativamente o risco de recorrência da pericardite",
    ],
    casoClinico: {
      vinheta:
        "Homem, 28 anos, previamente hígido, relata dor torácica aguda há 2 dias, que piora ao deitar e melhora ao sentar inclinado para frente, associada a febre baixa e quadro gripal recente. ECG mostra supradesnivelamento difuso e côncavo do segmento ST.",
      pergunta: "Quais achados sustentam pericardite aguda em vez de síndrome coronariana aguda?",
      raciocinio:
        "A dor com características posicionais (piora ao deitar, melhora ao inclinar-se para frente), o contexto de infecção viral recente e o padrão difuso e côncavo do supradesnivelamento de ST — sem corresponder a um território coronariano específico — favorecem fortemente pericardite aguda em vez de IAM.",
      conduta:
        "Confirmar ausência de repercussão hemodinâmica e derrame significativo ao ecocardiograma, iniciar anti-inflamatório não esteroidal em dose plena associado a colchicina, e orientar restrição de atividade física até resolução do quadro.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Critérios diagnósticos e classificação temporal", fonte: "Diretriz ESC sobre Doenças do Pericárdio, 2015" },
      { tema: "Tratamento com AINE e colchicina", fonte: "Diretriz ESC sobre Doenças do Pericárdio, 2015" },
      { tema: "AINE/colchicina no tratamento (ainda sem fichas próprias no site com essa indicação)", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "aneurisma-dissecao-aorta",
    nome: "Aneurisma e dissecção da aorta",
    sinonimos: ["Dissecção aórtica", "Aneurisma de aorta"],
    cid10: "I71",
    especialidade: "Cardiologia",
    etiologia: "Degenerativa",
    resumo: "Dilatação patológica da parede aórtica (aneurisma) ou separação das camadas da parede por laceração da íntima com fluxo de sangue no espaço criado (dissecção), condições fortemente associadas à hipertensão arterial crônica.",
    definicao:
      "Aneurisma de aorta: dilatação permanente e localizada da aorta envolvendo todas as camadas da parede, geralmente definida como diâmetro >50% maior que o esperado para o segmento. Dissecção aórtica: laceração da camada íntima que permite a entrada de sangue na camada média, criando um falso lúmen que se propaga ao longo do vaso.",
    epidemiologia:
      "Hipertensão arterial crônica mal controlada é o principal fator de risco para ambas as condições. Aneurismas de aorta abdominal são mais comuns em homens idosos tabagistas; dissecção aórtica tem incidência maior em homens de meia-idade a idosos hipertensos, além de associação com doenças do tecido conjuntivo (síndrome de Marfan, Ehlers-Danlos) em pacientes mais jovens.",
    fisiopatologia:
      "No aneurisma, degeneração da média aórtica (perda de fibras elásticas e musculares lisas) enfraquece a parede, permitindo dilatação progressiva sob a pressão do fluxo sanguíneo, com risco de ruptura quando o diâmetro aumenta. Na dissecção, uma laceração da íntima (frequentemente favorecida por degeneração cística da média, comum em hipertensos crônicos) permite que o sangue penetre e disseque a camada média, formando um falso lúmen que pode comprometer ramos arteriais e propagar-se retrógrada ou anterogradamente.",
    classificacao:
      "Dissecção aórtica classificada pela classificação de Stanford em Tipo A (envolve a aorta ascendente, emergência cirúrgica) e Tipo B (não envolve a aorta ascendente, geralmente tratada clinicamente salvo complicações). Aneurismas classificados por localização (torácico, abdominal, toracoabdominal) e por morfologia (fusiforme ou sacular).",
    quadroClinico: [
      "Aneurisma: geralmente assintomático até ruptura ou compressão de estruturas adjacentes; massa pulsátil abdominal palpável em aneurismas de aorta abdominal grandes",
      "Dissecção: dor torácica ou dorsal súbita, intensa, descrita como lancinante ou em rasgo, podendo migrar acompanhando a progressão da dissecção",
      "Assimetria de pulsos entre membros na dissecção",
      "Sinais de comprometimento de ramos arteriais (isquemia de membros, AVC, isquemia mesentérica, insuficiência renal aguda) conforme extensão da dissecção",
    ],
    diagnostico: [
      "Angiotomografia computadorizada de aorta como exame de escolha na suspeita de dissecção aguda (rápida disponibilidade e alta acurácia)",
      "Ecocardiograma transesofágico em pacientes instáveis para transporte",
      "Ultrassonografia abdominal como rastreamento e seguimento de aneurisma de aorta abdominal",
    ],
    examesComplementares: [
      "Angiotomografia computadorizada de tórax/abdome com contraste",
      "Ecocardiograma transesofágico em instabilidade hemodinâmica",
      "Ressonância magnética em pacientes estáveis, especialmente no seguimento ambulatorial",
      "Radiografia de tórax (alargamento de mediastino, achado inespecífico de suspeita)",
    ],
    diagnosticoDiferencial: [
      "Infarto agudo do miocárdio",
      "Embolia pulmonar",
      "Pericardite aguda",
    ],
    tratamento: [
      "Dissecção Tipo A: cirurgia de emergência (reparo/substituição da aorta ascendente)",
      "Dissecção Tipo B não complicada: controle rigoroso de pressão arterial e frequência cardíaca (betabloqueador primeiro, seguido de vasodilatador se necessário) com manejo clínico intensivo",
      "Dissecção Tipo B complicada (má perfusão de órgãos, expansão, ruptura iminente): intervenção endovascular ou cirúrgica",
      "Aneurisma: seguimento por imagem seriado abaixo do limiar cirúrgico; reparo eletivo (cirúrgico ou endovascular) ao atingir critérios de tamanho/crescimento que superam o risco do procedimento",
    ],
    complicacoes: [
      "Ruptura aórtica com choque hemorrágico e óbito",
      "Tamponamento cardíaco (dissecção proximal com extensão ao pericárdio)",
      "Isquemia de órgãos-alvo por oclusão de ramos arteriais (AVC, isquemia mesentérica, lesão renal aguda, isquemia de membros)",
      "Insuficiência aórtica aguda na dissecção proximal",
    ],
    redFlags: [
      "Dor torácica/dorsal súbita e intensa em rasgo, associada a assimetria de pulsos ou de pressão arterial entre membros — suspeitar de dissecção aórtica e solicitar angiotomografia com urgência",
      "Dissecção Tipo A é emergência cirúrgica — mortalidade aumenta significativamente a cada hora sem correção cirúrgica",
    ],
    prognostico:
      "Dissecção Tipo A não tratada tem mortalidade muito elevada nas primeiras horas, justificando cirurgia de emergência; dissecção Tipo B não complicada tem prognóstico mais favorável com tratamento clínico intensivo. Aneurismas identificados e acompanhados adequadamente antes da ruptura têm excelente prognóstico com reparo eletivo.",
    pontosDeProva: [
      "A classificação de Stanford (Tipo A envolve aorta ascendente, Tipo B não envolve) é o principal determinante da conduta: cirúrgica de emergência versus manejo clínico inicial",
      "Controle da pressão arterial e, principalmente, da frequência cardíaca (para reduzir a força de cisalhamento na parede aórtica, dP/dt) é a base do tratamento clínico da dissecção Tipo B, com betabloqueador como primeira escolha antes de vasodilatadores",
    ],
    casoClinico: {
      vinheta:
        "Homem, 60 anos, hipertenso mal controlado, apresenta dor torácica súbita e intensa, descrita como 'rasgando', que migrou para a região dorsal. Pressão arterial no braço direito: 170x100 mmHg; braço esquerdo: 130x85 mmHg.",
      pergunta: "Qual é a hipótese diagnóstica principal e a conduta imediata?",
      raciocinio:
        "A dor súbita em rasgo com migração e a assimetria pressórica entre os membros superiores são altamente sugestivas de dissecção aórtica. A definição do tipo (Stanford A ou B) por angiotomografia é urgente, pois determina se a conduta será cirúrgica de emergência ou clínica.",
      conduta:
        "Solicitar angiotomografia de aorta com urgência para classificação de Stanford, iniciar controle de frequência cardíaca e pressão arterial com betabloqueador enquanto aguarda definição, e acionar cirurgia vascular/cardíaca imediatamente se confirmado envolvimento da aorta ascendente.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "losartana-potassica", nome: "Losartana potássica" },
      { slug: "captopril", nome: "Captopril" },
    ],
    medicamentosSecaoTitulo: "Medicamentos de manutenção/controle pressórico",
    medicamentosNota:
      "Na dissecção aórtica aguda, o controle imediato de frequência cardíaca e pressão arterial é feito preferencialmente com betabloqueador intravenoso (ex.: esmolol, labetalol), ainda sem ficha própria no site. Os medicamentos listados abaixo são usados no controle pressórico crônico após a fase aguda ou no acompanhamento de aneurismas não complicados.",
    fontes: [
      { tema: "Fisiopatologia do aneurisma e da dissecção", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Classificação de Stanford e conduta por tipo", fonte: "Diretriz ACC/AHA sobre Doença da Aorta Torácica, 2022" },
      { tema: "Controle farmacológico de frequência/pressão na dissecção Tipo B (betabloqueador IV ainda sem ficha própria no site)", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "trombose-venosa-profunda",
    nome: "Trombose venosa profunda",
    sinonimos: ["TVP", "Flebite e tromboflebite"],
    cid10: "I80",
    especialidade: "Cardiologia",
    etiologia: "Multifatorial",
    resumo: "Formação de trombo em veias profundas, mais comumente dos membros inferiores, com risco de embolia pulmonar e de síndrome pós-trombótica.",
    definicao:
      "Formação de coágulo sanguíneo (trombo) dentro do sistema venoso profundo, mais frequentemente nos membros inferiores, que pode obstruir o retorno venoso e embolizar para a circulação pulmonar.",
    epidemiologia:
      "Fatores de risco resumidos pela tríade de Virchow (estase venosa, lesão endotelial e hipercoagulabilidade); incluem imobilização prolongada, cirurgia recente, neoplasia ativa, gestação/puerpério, uso de contraceptivos hormonais, trombofilias hereditárias e histórico prévio de tromboembolismo venoso.",
    fisiopatologia:
      "A tríade de Virchow explica a formação do trombo: estase sanguínea (imobilização, insuficiência venosa), lesão endotelial (cirurgia, trauma, cateteres) e estado de hipercoagulabilidade (neoplasia, trombofilias, gestação) predispõem à ativação da cascata de coagulação e formação de trombo, predominantemente nas veias profundas da panturrilha, com potencial de propagação proximal.",
    classificacao:
      "Classificada por localização em distal (panturrilha, menor risco embólico isolado) e proximal (poplítea ou mais central, maior risco de embolia pulmonar); também classificada quanto à provocação em provocada (fator de risco transitório identificável) e não provocada (idiopática, maior investigação de trombofilia/neoplasia oculta em casos recorrentes).",
    quadroClinico: [
      "Edema unilateral do membro acometido",
      "Dor e sensibilidade à palpação da panturrilha ou trajeto venoso",
      "Eritema e aumento de temperatura local",
      "Sinal de Homans (dor à dorsiflexão do pé) — pouco sensível e específico, não deve ser usado isoladamente",
    ],
    diagnostico: [
      "Escore de Wells para probabilidade pré-teste de TVP",
      "D-dímero em pacientes de baixa probabilidade pré-teste (alto valor preditivo negativo)",
      "Ultrassonografia com Doppler venoso de membros inferiores (exame de escolha para confirmação)",
    ],
    examesComplementares: [
      "Ultrassonografia com Doppler venoso de membros inferiores",
      "D-dímero (em conjunto com probabilidade clínica pré-teste)",
      "Investigação de trombofilia em casos recorrentes, não provocados ou em jovens sem fator de risco claro",
    ],
    diagnosticoDiferencial: [
      "Celulite",
      "Insuficiência venosa crônica/estase",
      "Ruptura de cisto de Baker",
      "Linfedema",
    ],
    tratamento: [
      "Anticoagulação plena como pilar do tratamento (heparina de baixo peso molecular, anticoagulantes orais diretos ou varfarina, conforme disponibilidade e contexto clínico)",
      "Duração do tratamento variável conforme se a TVP foi provocada (geralmente 3 meses) ou não provocada/recorrente (podendo ser indefinida após avaliação de risco-benefício)",
      "Meias de compressão elástica para redução de sintomas e prevenção de síndrome pós-trombótica",
      "Filtro de veia cava inferior reservado para contraindicação absoluta à anticoagulação",
    ],
    complicacoes: [
      "Embolia pulmonar",
      "Síndrome pós-trombótica (edema crônico, dor, alterações tróficas de pele)",
      "TVP recorrente",
    ],
    redFlags: [
      "Dispneia súbita, dor torácica pleurítica ou hipoxemia em paciente com TVP — suspeitar de embolia pulmonar concomitante e investigar imediatamente",
    ],
    prognostico:
      "Bom com anticoagulação adequada e precoce; risco de síndrome pós-trombótica aumenta com atraso diagnóstico/terapêutico e com trombose proximal extensa.",
    pontosDeProva: [
      "O sinal de Homans tem baixa sensibilidade e especificidade e não deve ser usado como critério isolado para excluir ou confirmar TVP",
      "D-dímero negativo tem alto valor preditivo negativo em pacientes de baixa probabilidade pré-teste (Wells), mas tem baixa especificidade — não deve ser usado para 'confirmar' TVP quando positivo",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 45 anos, em pós-operatório de cirurgia ortopédica há 5 dias, com edema, dor e eritema unilateral na panturrilha esquerda.",
      pergunta: "Qual é a conduta diagnóstica mais apropriada?",
      raciocinio:
        "O contexto de imobilização pós-cirúrgica recente (fator de risco clássico da tríade de Virchow) associado a edema unilateral doloroso sugere TVP com probabilidade pré-teste elevada pelo escore de Wells, o que justifica investigação direta por imagem em vez de depender apenas do D-dímero.",
      conduta:
        "Solicitar ultrassonografia com Doppler venoso de membro inferior para confirmação diagnóstica e, se confirmado, iniciar anticoagulação plena, avaliando a duração do tratamento conforme o fator de risco identificado (provocada por cirurgia).",
    },
    medicamentosPrimeiraLinha: [
      { slug: "varfarina-sodica", nome: "Varfarina sódica" },
    ],
    fontes: [
      { tema: "Tríade de Virchow e fisiopatologia", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Escore de Wells e estratégia diagnóstica", fonte: "Diretriz CHEST sobre Terapia Antitrombótica para Doença Tromboembólica Venosa, 2021" },
      { tema: "Duração da anticoagulação conforme TVP provocada/não provocada", fonte: "Diretriz CHEST sobre Terapia Antitrombótica para Doença Tromboembólica Venosa, 2021" },
    ],
  },
  {
    slug: "embolia-pulmonar",
    nome: "Embolia pulmonar",
    sinonimos: ["Tromboembolismo pulmonar", "TEP"],
    cid10: "I26",
    especialidade: "Cardiologia",
    etiologia: "Multifatorial",
    resumo: "Obstrução aguda da circulação arterial pulmonar por êmbolo, mais comumente originado de trombose venosa profunda de membros inferiores, com risco de instabilidade hemodinâmica e morte súbita.",
    definicao:
      "Obstrução aguda de uma ou mais artérias pulmonares por material embólico, na grande maioria dos casos trombos originados do sistema venoso profundo (geralmente de membros inferiores), resultando em comprometimento variável da troca gasosa e da função ventricular direita.",
    epidemiologia:
      "Compartilha os mesmos fatores de risco da trombose venosa profunda (tríade de Virchow), sendo ambas manifestações do mesmo espectro de doença tromboembólica venosa. Terceira causa cardiovascular aguda mais comum, atrás de infarto do miocárdio e AVC.",
    fisiopatologia:
      "A obstrução mecânica do leito arterial pulmonar aumenta a resistência vascular pulmonar e a pós-carga do ventrículo direito; em embolia maciça, a sobrecarga aguda do ventrículo direito pode levar a disfunção e choque obstrutivo. Simultaneamente, a redistribuição do fluxo sanguíneo para áreas ainda ventiladas causa desequilíbrio ventilação-perfusão e hipoxemia.",
    classificacao:
      "Estratificada por risco de mortalidade precoce em: alto risco (instabilidade hemodinâmica/choque), risco intermediário (disfunção de ventrículo direito e/ou biomarcadores elevados sem instabilidade hemodinâmica, subdividido em intermediário-alto e intermediário-baixo) e baixo risco (sem disfunção de VD nem instabilidade), conforme diretrizes ESC — essa estratificação orienta diretamente a intensidade do tratamento.",
    quadroClinico: [
      "Dispneia súbita, frequentemente o sintoma mais comum",
      "Dor torácica pleurítica",
      "Taquicardia e taquipneia",
      "Síncope ou instabilidade hemodinâmica em embolia maciça (alto risco)",
      "Sinais concomitantes de TVP em membro inferior em parte dos casos",
    ],
    diagnostico: [
      "Escore de Wells ou critério de Genebra para probabilidade pré-teste",
      "D-dímero em pacientes de baixa/intermediária probabilidade pré-teste",
      "Angiotomografia computadorizada de artérias pulmonares como exame de confirmação de escolha",
    ],
    examesComplementares: [
      "Angiotomografia computadorizada de tórax com protocolo para artérias pulmonares",
      "Cintilografia de ventilação-perfusão em pacientes com contraindicação a contraste iodado",
      "Ecocardiograma transtorácico para avaliação de disfunção de ventrículo direito e estratificação de risco",
      "Troponina e peptídeo natriurético (BNP/NT-proBNP) para estratificação de risco intermediário",
    ],
    diagnosticoDiferencial: [
      "Infarto agudo do miocárdio",
      "Pneumonia",
      "Pneumotórax",
      "Exacerbação de doença pulmonar obstrutiva crônica ou asma",
    ],
    tratamento: [
      "Anticoagulação plena imediata em pacientes sem contraindicação, mesmo antes da confirmação definitiva quando a suspeita clínica é alta",
      "Trombólise sistêmica em embolia pulmonar de alto risco (com instabilidade hemodinâmica), na ausência de contraindicações absolutas",
      "Considerar trombólise, embolectomia ou terapia dirigida por cateter em risco intermediário-alto conforme evolução clínica",
      "Duração da anticoagulação seguindo os mesmos princípios da TVP (provocada vs. não provocada)",
    ],
    complicacoes: [
      "Choque obstrutivo e parada cardiorrespiratória em embolia maciça",
      "Hipertensão pulmonar tromboembólica crônica",
      "Disfunção ventricular direita persistente",
    ],
    redFlags: [
      "Dispneia súbita associada a hipotensão, síncope ou sinais de disfunção de ventrículo direito — embolia pulmonar de alto risco, com indicação potencial de trombólise de emergência",
    ],
    prognostico:
      "Mortalidade elevada na embolia pulmonar de alto risco não tratada rapidamente; prognóstico substancialmente melhor com diagnóstico e anticoagulação precoces nas formas de risco intermediário e baixo.",
    pontosDeProva: [
      "A estratificação de risco (alto, intermediário, baixo) — e não apenas a confirmação diagnóstica — é o que determina a intensidade do tratamento, incluindo a indicação de trombólise",
      "Em suspeita clínica alta de embolia pulmonar com instabilidade hemodinâmica, a anticoagulação empírica não deve ser postergada aguardando confirmação por imagem",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 38 anos, em uso de contraceptivo oral combinado, apresenta dispneia súbita e dor torácica pleurítica após viagem aérea longa. Frequência cardíaca 118 bpm, saturação de oxigênio 91% em ar ambiente.",
      pergunta: "Qual é a conduta diagnóstica e terapêutica inicial mais apropriada?",
      raciocinio:
        "Os fatores de risco (imobilização prolongada em voo, uso de contraceptivo hormonal) somados ao quadro clínico de dispneia súbita, dor pleurítica, taquicardia e hipoxemia elevam a probabilidade pré-teste de embolia pulmonar, justificando investigação por imagem e, dada a probabilidade alta, considerar anticoagulação empírica enquanto aguarda confirmação.",
      conduta:
        "Solicitar angiotomografia de artérias pulmonares com urgência, iniciar anticoagulação plena enquanto aguarda o exame (na ausência de contraindicações) e reavaliar necessidade de estratificação adicional de risco (ecocardiograma, troponina/BNP) após confirmação diagnóstica.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "varfarina-sodica", nome: "Varfarina sódica" },
    ],
    medicamentosSecaoTitulo: "Medicamentos de manutenção (pós-estabilização)",
    medicamentosNota:
      "Na fase aguda, a anticoagulação é habitualmente iniciada com heparina não fracionada, heparina de baixo peso molecular ou anticoagulante oral direto, ainda sem fichas próprias no site. A varfarina listada abaixo é usada principalmente na manutenção após a estabilização inicial, exigindo associação (bridging) com heparina até atingir INR terapêutico.",
    fontes: [
      { tema: "Fisiopatologia e relação com TVP", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Estratificação de risco e conduta terapêutica", fonte: "Diretriz ESC sobre Diagnóstico e Manejo do Tromboembolismo Pulmonar Agudo, 2019" },
      { tema: "Escore de Wells/Genebra e estratégia diagnóstica", fonte: "Diretriz CHEST sobre Terapia Antitrombótica para Doença Tromboembólica Venosa, 2021" },
    ],
  },
  {
    slug: "sincope",
    nome: "Síncope",
    sinonimos: ["Síncope e colapso", "Desmaio"],
    cid10: "R55",
    especialidade: "Cardiologia",
    etiologia: "Multifatorial",
    resumo: "Perda transitória de consciência por hipoperfusão cerebral global, de início súbito, curta duração e recuperação espontânea completa, com causas que vão de reflexas benignas a cardíacas potencialmente fatais.",
    definicao:
      "Perda transitória da consciência causada por hipoperfusão cerebral global transitória, caracterizada por início rápido, curta duração e recuperação completa e espontânea, distinta de outras causas de perda de consciência (convulsão, hipoglicemia, causas psicogênicas).",
    epidemiologia:
      "Extremamente comum, respondendo por parcela significativa dos atendimentos de emergência; síncope reflexa (vasovagal) é a causa mais comum em todas as faixas etárias, mas a proporção de causas cardíacas aumenta com a idade e com a presença de cardiopatia estrutural, sendo essas as de maior risco de morte súbita.",
    fisiopatologia:
      "Qualquer mecanismo que reduza transitoriamente o fluxo sanguíneo cerebral abaixo do limiar necessário para manter a consciência pode causar síncope: queda da resistência vascular periférica e/ou bradicardia reflexa (síncope reflexa/vasovagal), incapacidade de manter o retorno venoso e a pressão arterial ao assumir a posição ortostática (síncope ortostática), ou redução aguda do débito cardíaco por arritmia ou obstrução mecânica ao fluxo (síncope cardíaca).",
    classificacao:
      "Classificada em três grandes categorias etiológicas: síncope reflexa/neuromediada (vasovagal, situacional, síndrome do seio carotídeo), síncope por hipotensão ortostática (hipovolemia, disautonomia, medicamentos) e síncope cardíaca (arritmias, doença estrutural cardíaca como estenose aórtica ou cardiomiopatia hipertrófica, e causas vasculares como embolia pulmonar) — sendo esta última a de maior risco de morte súbita.",
    quadroClinico: [
      "Perda súbita e transitória da consciência com recuperação espontânea completa",
      "Pródromos frequentes na síncope reflexa (náusea, sudorese, visão turva, palidez)",
      "Ausência de pródromos ou palpitações precedentes sugerem maior probabilidade de causa cardíaca/arrítmica",
      "Síncope durante esforço físico é um sinal de alarme para causa cardíaca estrutural",
    ],
    diagnostico: [
      "Anamnese detalhada (circunstâncias, pródromos, posição, duração, recuperação) é o principal instrumento diagnóstico",
      "Eletrocardiograma de 12 derivações em todos os pacientes",
      "Estratificação de risco para definir necessidade de investigação cardíaca adicional e/ou internação",
    ],
    examesComplementares: [
      "Eletrocardiograma de 12 derivações",
      "Monitorização com Holter ou monitor de eventos prolongado em suspeita de causa arrítmica intermitente",
      "Ecocardiograma quando há suspeita de cardiopatia estrutural",
      "Teste de inclinação (tilt test) em suspeita de síncope reflexa recorrente de difícil caracterização",
    ],
    diagnosticoDiferencial: [
      "Crise convulsiva",
      "Hipoglicemia",
      "Ataque isquêmico transitório (raramente causa perda de consciência isolada)",
      "Causas psicogênicas (pseudossíncope)",
    ],
    tratamento: [
      "Síncope reflexa: educação sobre fatores desencadeantes, manobras de contrapressão física, hidratação e ingesta de sal adequadas em casos selecionados",
      "Síncope ortostática: revisão e ajuste de medicações hipotensoras, medidas posturais, hidratação adequada",
      "Síncope cardíaca: tratamento dirigido à causa de base (antiarrítmicos, marca-passo, cardiodesfibrilador implantável, correção de doença estrutural conforme etiologia)",
    ],
    complicacoes: [
      "Trauma físico decorrente da queda",
      "Morte súbita cardíaca, quando a causa é arrítmica maligna ou obstrutiva grave não identificada",
      "Recorrência com impacto significativo na qualidade de vida e restrição de atividades (ex.: direção veicular)",
    ],
    redFlags: [
      "Síncope durante esforço físico, sem pródromos, associada a palpitações ou história familiar de morte súbita — investigar causa cardíaca com prioridade",
      "Síncope associada a dor torácica, dispneia ou déficit neurológico focal — investigar causas graves concomitantes (síndrome coronariana aguda, embolia pulmonar, AVC)",
    ],
    prognostico:
      "Excelente na síncope reflexa isolada, sem impacto na sobrevida; prognóstico reservado quando a etiologia é cardíaca, especialmente arrítmica maligna ou associada a cardiopatia estrutural significativa, exigindo investigação e tratamento direcionados.",
    pontosDeProva: [
      "A anamnese detalhada das circunstâncias do episódio é a ferramenta diagnóstica mais custo-efetiva na síncope, superando a maioria dos exames complementares isolados",
      "Síncope durante esforço (e não após) é um red flag clássico para causa cardíaca estrutural, como estenose aórtica grave ou cardiomiopatia hipertrófica obstrutiva",
    ],
    casoClinico: {
      vinheta:
        "Homem, 22 anos, previamente hígido, relata episódio de síncope após ficar em pé por tempo prolongado em ambiente quente, precedido por sudorese, visão turva e náusea, com recuperação espontânea completa em menos de 1 minuto.",
      pergunta: "Qual é a hipótese diagnóstica mais provável e a conduta inicial?",
      raciocinio:
        "O contexto desencadeante (posição ortostática prolongada, calor), a presença de pródromos típicos (sudorese, visão turva, náusea) e a recuperação rápida e completa são altamente sugestivos de síncope reflexa vasovagal, condição de baixo risco na ausência de sinais de alarme.",
      conduta:
        "Realizar eletrocardiograma para exclusão de causas cardíacas associadas, orientar sobre reconhecimento de pródromos e manobras de contrapressão física, e reforçar hidratação adequada, sem necessidade de investigação cardíaca extensa na ausência de red flags.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Classificação etiológica e fisiopatologia", fonte: "Diretriz ESC sobre Diagnóstico e Manejo da Síncope, 2018" },
      { tema: "Sinais de alarme para causa cardíaca", fonte: "Diretriz ESC sobre Diagnóstico e Manejo da Síncope, 2018" },
    ],
  },
  {
    slug: "diabetes-mellitus-tipo-1",
    nome: "Diabetes mellitus tipo 1",
    sinonimos: ["DM1", "Diabetes insulinodependente"],
    cid10: "E10",
    especialidade: "Endocrinologia",
    etiologia: "Autoimune",
    resumo: "Destruição autoimune das células beta pancreáticas, levando à deficiência absoluta de insulina e à necessidade de insulinoterapia desde o diagnóstico.",
    definicao:
      "Doença autoimune caracterizada pela destruição progressiva das células beta das ilhotas pancreáticas, mediada por linfócitos T, resultando em deficiência absoluta de insulina e dependência de insulina exógena para sobrevivência.",
    epidemiologia:
      "Responsável por cerca de 5-10% dos casos de diabetes mellitus, com pico de incidência na infância e adolescência, embora possa se manifestar em qualquer idade (incluindo a forma LADA em adultos). Associada a outras doenças autoimunes (tireoidite de Hashimoto, doença celíaca) com maior frequência que na população geral.",
    fisiopatologia:
      "Predisposição genética (associação com alelos HLA de classe II) combinada a um gatilho ambiental (possivelmente viral) desencadeia resposta autoimune contra antígenos das células beta, com infiltração linfocitária das ilhotas (insulite) e destruição progressiva da massa de células beta ao longo de meses a anos, até a manifestação clínica quando a maior parte da capacidade secretora já foi perdida.",
    classificacao:
      "Estadiamento pré-clínico ISPAD/ADA: Estágio 1 (autoimunidade presente — dois ou mais autoanticorpos — com normoglicemia), Estágio 2 (autoimunidade presente com disglicemia subclínica) e Estágio 3 (hiperglicemia clínica manifesta, diagnóstico tradicional de DM1). Também classificada em DM1A (autoimune, com autoanticorpos detectáveis) e DM1B (idiopática, sem autoanticorpos identificáveis, mais rara).",
    quadroClinico: [
      "Poliúria, polidipsia e perda de peso de início relativamente rápido (dias a poucas semanas)",
      "Polifagia associada",
      "Fadiga e visão turva",
      "Pode se manifestar diretamente como cetoacidose diabética, especialmente em crianças pequenas",
    ],
    diagnostico: [
      "Critérios diagnósticos de diabetes da American Diabetes Association: glicemia de jejum ≥126 mg/dL, glicemia ao acaso ≥200 mg/dL com sintomas, HbA1c ≥6,5% ou glicemia 2h pós-sobrecarga ≥200 mg/dL no TOTG",
      "Autoanticorpos positivos (anti-GAD65, anti-IA2, anti-ZnT8, anticélulas de ilhota) sustentam a etiologia autoimune",
      "Peptídeo C baixo ou indetectável, refletindo a deficiência de secreção endógena de insulina",
    ],
    examesComplementares: [
      "HbA1c ≥6,5% (American Diabetes Association)",
      "Peptídeo C sérico reduzido, mais informativo após alguns anos de doença",
      "Painel de autoanticorpos (anti-GAD65, anti-IA2, anti-ZnT8, ICA)",
      "Gasometria e cetonemia/cetonúria na suspeita de cetoacidose diabética ao diagnóstico",
    ],
    diagnosticoDiferencial: [
      "Diabetes mellitus tipo 2 (especialmente em adolescentes com obesidade)",
      "Diabetes tipo LADA (latent autoimmune diabetes in adults)",
      "Diabetes monogênico (MODY)",
    ],
    tratamento: [
      "Insulinoterapia basal-bolus desde o diagnóstico, combinando insulina de ação prolongada/intermediária (basal) com insulina de ação rápida antes das refeições (bolus)",
      "Contagem de carboidratos e ajuste de dose conforme glicemia capilar ou monitorização contínua de glicose",
      "Educação estruturada em diabetes para o paciente e a família",
      "Rastreamento e manejo de comorbidades autoimunes associadas (tireoidite, doença celíaca)",
    ],
    complicacoes: [
      "Aguda: cetoacidose diabética, hipoglicemia grave relacionada ao tratamento insulínico",
      "Crônica: retinopatia, nefropatia e neuropatia diabéticas; maior risco cardiovascular a longo prazo",
    ],
    redFlags: [
      "Poliúria, polidipsia e perda de peso associadas a hálito cetônico, taquipneia (respiração de Kussmaul) e rebaixamento do nível de consciência — suspeitar de cetoacidose diabética e tratar como emergência",
    ],
    prognostico:
      "Com insulinoterapia adequada e bom controle glicêmico, expectativa de vida próxima à da população geral; o risco de complicações crônicas correlaciona-se diretamente com o grau de controle glicêmico ao longo do tempo.",
    pontosDeProva: [
      "Diferente do DM2, o DM1 tipicamente se apresenta com sintomas de início mais agudo e pode debutar diretamente como cetoacidose diabética, sobretudo em crianças",
      "Peptídeo C baixo com autoanticorpos positivos confirma a etiologia autoimune e a deficiência absoluta de insulina, distinguindo de DM2 (onde o peptídeo C costuma estar normal ou elevado, refletindo resistência insulínica)",
    ],
    casoClinico: {
      vinheta:
        "Menino, 8 anos, previamente hígido, é trazido por poliúria, polidipsia e perda de peso há 2 semanas, associadas a hálito com odor adocicado e respiração rápida e profunda. Glicemia capilar: 480 mg/dL.",
      pergunta: "Qual é a hipótese diagnóstica mais provável e a conduta imediata?",
      raciocinio:
        "O quadro de poliúria, polidipsia e perda de peso rápida em criança, associado a hálito cetônico e respiração de Kussmaul, é altamente sugestivo de diabetes mellitus tipo 1 debutando como cetoacidose diabética — uma emergência que exige tratamento imediato.",
      conduta:
        "Confirmar cetoacidose com gasometria e cetonemia/cetonúria, iniciar hidratação venosa e insulinoterapia conforme protocolo de cetoacidose diabética, e programar transição para esquema basal-bolus de insulina após estabilização.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "insulina-nph", nome: "Insulina NPH" },
    ],
    fontes: [
      { tema: "Fisiopatologia autoimune", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Estadiamento pré-clínico (Estágios 1-3) e critérios diagnósticos", fonte: "American Diabetes Association, Standards of Care in Diabetes, 2024" },
      { tema: "Insulinoterapia basal-bolus", fonte: "American Diabetes Association, Standards of Care in Diabetes, 2024" },
    ],
  },
  {
    slug: "hipertireoidismo",
    nome: "Tireotoxicose (hipertireoidismo)",
    sinonimos: ["Hipertireoidismo", "Tireotoxicose"],
    cid10: "E05",
    especialidade: "Endocrinologia",
    etiologia: "Multifatorial",
    resumo: "Síndrome causada pelo excesso de hormônios tireoidianos circulantes, mais comumente por doença de Graves, com efeitos hipermetabólicos sistêmicos.",
    definicao:
      "Síndrome clínica resultante da exposição dos tecidos a níveis excessivos de hormônios tireoidianos, podendo decorrer de hiperfunção da própria glândula tireoide (hipertireoidismo verdadeiro) ou de liberação excessiva de hormônio pré-formado sem hiperfunção glandular (tireotoxicose sem hipertireoidismo, como nas tireoidites).",
    epidemiologia:
      "A doença de Graves é a causa mais comum de tireotoxicose, predominando em mulheres jovens a de meia-idade. Bócio multinodular tóxico e adenoma tóxico são mais frequentes em pacientes idosos e em regiões com histórico de deficiência de iodo.",
    fisiopatologia:
      "Na doença de Graves, autoanticorpos estimulantes (TRAb) ligam-se ao receptor de TSH na tireoide, ativando-o de forma sustentada e independente do eixo hipotálamo-hipófise, causando hiperplasia glandular difusa e hipersecreção de T3/T4. No bócio multinodular tóxico e no adenoma tóxico, mutações somáticas ativadoras do receptor de TSH em nódulos específicos causam produção autônoma de hormônio, independente de estímulo ou de autoanticorpos.",
    classificacao:
      "Classificação etiológica (não há sistema formal de estadiamento de gravidade amplamente usado): doença de Graves (autoimune, mais comum), bócio multinodular tóxico, adenoma tóxico (nódulo autônomo único) e tireotoxicose transitória por tireoidite (sem hiperfunção glandular verdadeira). A captação de iodo radioativo (RAIU) diferencia essas causas: elevada e difusa na Graves, focal nos nódulos autônomos, e baixa/suprimida nas tireoidites.",
    quadroClinico: [
      "Perda de peso apesar de apetite preservado ou aumentado",
      "Palpitações, taquicardia e intolerância ao calor",
      "Tremores finos, ansiedade e insônia",
      "Bócio, podendo ser difuso (Graves) ou nodular",
      "Oftalmopatia (exoftalmia, retração palpebral) especificamente na doença de Graves",
    ],
    diagnostico: [
      "TSH suprimido associado a T4 livre e/ou T3 elevados",
      "TRAb (anticorpo antirreceptor de TSH) positivo sustenta o diagnóstico de doença de Graves",
      "Cintilografia com captação de iodo radioativo para diferenciar etiologias quando o quadro clínico não é definidor",
    ],
    examesComplementares: [
      "TSH sérico suprimido (<0,4 mUI/L)",
      "T4 livre e T3 total/livre elevados",
      "TRAb positivo na doença de Graves",
      "Captação de iodo radioativo (RAIU): elevada e difusa na Graves, focal em nódulo autônomo, suprimida (<5%) nas tireoidites",
    ],
    diagnosticoDiferencial: [
      "Tireoidite subaguda ou pós-parto (tireotoxicose transitória)",
      "Transtorno de ansiedade/pânico (mimetiza sintomas adrenérgicos)",
      "Uso exógeno excessivo de levotiroxina",
    ],
    tratamento: [
      "Betabloqueador para controle rápido dos sintomas adrenérgicos (taquicardia, tremor) enquanto se define o tratamento definitivo",
      "Antitireoidianos (tiamazol ou propiltiouracila) para reduzir a síntese hormonal, especialmente na doença de Graves",
      "Iodo radioativo como opção de tratamento definitivo, ablando o tecido tireoidiano hiperfuncionante",
      "Tireoidectomia em casos selecionados (bócio volumoso, suspeita de malignidade, preferência da paciente, contraindicação a outras opções)",
    ],
    complicacoes: [
      "Aguda: crise tireotóxica (tempestade tireoidiana), emergência endócrina com risco de vida",
      "Crônica: fibrilação atrial, osteoporose, oftalmopatia de Graves com risco de comprometimento visual",
    ],
    redFlags: [
      "Febre alta, taquicardia importante, alteração do estado mental e disfunção de múltiplos órgãos em paciente tireotóxico — suspeitar de crise tireotóxica (tempestade tireoidiana), emergência com alta mortalidade",
    ],
    prognostico:
      "Bom com tratamento adequado da causa de base; a oftalmopatia de Graves pode persistir ou mesmo piorar transitoriamente após o tratamento definitivo do hipertireoidismo, exigindo acompanhamento oftalmológico específico.",
    pontosDeProva: [
      "A captação de iodo radioativo é a principal ferramenta para diferenciar doença de Graves (captação difusa elevada) de tireoidite (captação suprimida), quando a clínica não é conclusiva",
      "A oftalmopatia é específica da doença de Graves entre as causas de tireotoxicose, refletindo o processo autoimune que também acomete a musculatura e o tecido retro-orbitário",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 32 anos, relata perda de peso de 6 kg em 2 meses apesar de apetite aumentado, palpitações e intolerância ao calor. Exame físico mostra bócio difuso, taquicardia e leve proptose ocular bilateral.",
      pergunta: "Qual é a hipótese diagnóstica mais provável?",
      raciocinio:
        "A combinação de sintomas hipermetabólicos, bócio difuso e proptose (sugestiva de oftalmopatia) é altamente específica de doença de Graves como causa da tireotoxicose, diferente de outras causas que não cursam com envolvimento ocular.",
      conduta:
        "Confirmar com TSH suprimido, T4 livre elevado e TRAb positivo, iniciar betabloqueador para controle sintomático imediato e antitireoidiano para controle da síntese hormonal, e encaminhar para avaliação oftalmológica.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Fisiopatologia da doença de Graves e do bócio multinodular tóxico", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Diagnóstico e uso da captação de iodo radioativo", fonte: "American Thyroid Association Guidelines for Diagnosis and Management of Hyperthyroidism, 2016" },
      { tema: "Antitireoidianos e betabloqueador no tratamento (ainda sem fichas próprias no site)", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "tireoidite",
    nome: "Tireoidite",
    sinonimos: ["Inflamação da tireoide"],
    cid10: "E06",
    especialidade: "Endocrinologia",
    etiologia: "Multifatorial",
    resumo: "Grupo heterogêneo de doenças inflamatórias da tireoide, de causas autoimune, infecciosa ou medicamentosa, que podem cursar com fases transitórias de tireotoxicose e/ou hipotireoidismo.",
    definicao:
      "Termo que engloba diferentes processos inflamatórios da glândula tireoide, com etiologias e apresentações clínicas distintas, desde a tireoidite autoimune crônica (Hashimoto) até formas agudas/subagudas de causa infecciosa, viral presumida ou induzida por medicamentos.",
    epidemiologia:
      "A tireoidite de Hashimoto (autoimune crônica) é a causa mais comum de hipotireoidismo em áreas com suficiência de iodo e predomina em mulheres. A tireoidite subaguda (de Quervain) é menos comum, frequentemente precedida por infecção viral de vias aéreas superiores. Tireoidite pós-parto ocorre em uma parcela de puérperas nos primeiros meses após o parto.",
    fisiopatologia:
      "Varia conforme o subtipo: na tireoidite de Hashimoto, infiltração linfocitária autoimune crônica destrói progressivamente o parênquima tireoidiano; na tireoidite subaguda, um processo inflamatório granulomatoso (presumivelmente pós-viral) causa destruição folicular transitória com liberação de hormônio pré-formado; na tireoidite induzida por drogas (amiodarona, lítio, imunoterápicos), o mecanismo varia entre efeito tóxico direto e desencadeamento de autoimunidade.",
    classificacao:
      "Classificação etiológica e temporal (sem sistema formal único de estadiamento): tireoidite autoimune crônica (Hashimoto), tireoidite subaguda granulomatosa (de Quervain, dolorosa), tireoidite subaguda linfocítica (silenciosa/indolor, incluindo a forma pós-parto) e tireoidite induzida por drogas. Classicamente, as formas subagudas evoluem em três fases: tireotóxica inicial, hipotireóidea intermediária e recuperação (eutireoidismo), nem sempre completas.",
    quadroClinico: [
      "Tireoidite subaguda: dor cervical anterior, por vezes irradiada para mandíbula/ouvido, associada a febre e mal-estar",
      "Tireoidite de Hashimoto: geralmente indolor, com bócio firme e sintomas progressivos de hipotireoidismo",
      "Fase tireotóxica transitória (quando presente): palpitações, perda de peso, ansiedade",
      "Fase hipotireóidea subsequente (quando presente): fadiga, ganho de peso, intolerância ao frio",
    ],
    diagnostico: [
      "TSH e T4 livre seriados para acompanhar a fase da doença (tireotóxica, hipotireóidea ou eutireóidea)",
      "Provas de atividade inflamatória (VHS, proteína C-reativa) elevadas na tireoidite subaguda",
      "Captação de iodo radioativo suprimida nas fases tireotóxicas das tireoidites (distingue de doença de Graves)",
      "Anti-TPO e antitireoglobulina positivos na tireoidite de Hashimoto",
    ],
    examesComplementares: [
      "TSH e T4 livre seriados conforme a fase clínica",
      "VHS e proteína C-reativa (elevadas na tireoidite subaguda, tipicamente normais na de Hashimoto)",
      "Anticorpos anti-TPO e antitireoglobulina",
      "Captação de iodo radioativo suprimida (<5%) na fase tireotóxica das tireoidites",
    ],
    diagnosticoDiferencial: [
      "Doença de Graves (principal diferencial na fase tireotóxica)",
      "Nódulo tireoidiano doloroso hemorrágico",
      "Faringite/infecção cervical de outra origem (na tireoidite subaguda)",
    ],
    tratamento: [
      "Tireoidite subaguda: anti-inflamatórios para controle da dor e inflamação; corticosteroide em casos mais intensos ou refratários",
      "Controle sintomático da fase tireotóxica transitória com betabloqueador, quando presente",
      "Reposição com levotiroxina se a fase hipotireóidea for sintomática ou persistente (definitiva na tireoidite de Hashimoto estabelecida)",
      "Suspensão do agente causal quando a tireoidite é induzida por medicamento, quando clinicamente possível",
    ],
    complicacoes: [
      "Aguda: tireotoxicose transitória sintomática",
      "Crônica: hipotireoidismo permanente, especialmente na tireoidite de Hashimoto",
    ],
    redFlags: [
      "Dor cervical intensa associada a febre alta e sinais flogísticos importantes — considerar tireoidite supurativa aguda (rara, geralmente bacteriana), que exige abordagem distinta com antibioticoterapia",
    ],
    prognostico:
      "A tireoidite subaguda geralmente é autolimitada, com resolução em semanas a poucos meses, embora possa deixar hipotireoidismo permanente em uma minoria dos casos; a tireoidite de Hashimoto tende à progressão lenta para hipotireoidismo permanente ao longo dos anos.",
    pontosDeProva: [
      "A captação de iodo radioativo suprimida na fase tireotóxica é o principal achado que diferencia tireoidite de doença de Graves, ambas cursando com TSH suprimido e T4 livre elevado",
      "A tireoidite de Hashimoto é a causa mais comum de hipotireoidismo primário em áreas com suficiência de iodo, sendo o anti-TPO positivo o marcador sorológico mais sensível",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 38 anos, relata dor cervical anterior intensa há 5 dias, associada a febre baixa e mal-estar, após um quadro gripal na semana anterior. TSH suprimido, T4 livre elevado, VHS elevada.",
      pergunta: "Qual exame ajudaria a diferenciar esse quadro de doença de Graves?",
      raciocinio:
        "A dor cervical, o contexto pós-viral, a febre e a elevação de provas inflamatórias, associados a TSH suprimido e T4 livre elevado, sugerem tireoidite subaguda em vez de doença de Graves. A captação de iodo radioativo suprimida confirmaria a tireoidite (ao contrário da captação elevada esperada na Graves).",
      conduta:
        "Solicitar captação de iodo radioativo para confirmação diagnóstica, iniciar anti-inflamatório para controle da dor e, se sintomas adrenérgicos significativos, considerar betabloqueador para controle sintomático da fase tireotóxica transitória.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "levotiroxina-sodica", nome: "Levotiroxina sódica" },
    ],
    medicamentosSecaoTitulo: "Medicamento para a fase hipotireóidea",
    medicamentosNota:
      "A levotiroxina é usada apenas quando a fase hipotireóidea (tardia, em algumas tireoidites) é sintomática ou persistente. O tratamento da dor na fase subaguda (anti-inflamatório/corticosteroide) e o controle da fase tireotóxica transitória (betabloqueador) ainda não têm fichas próprias no site.",
    fontes: [
      { tema: "Classificação etiológica e fases evolutivas", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Diagnóstico diferencial com doença de Graves via captação de iodo", fonte: "American Thyroid Association Guidelines for Diagnosis and Management of Hyperthyroidism, 2016" },
    ],
  },
  {
    slug: "sindrome-de-cushing",
    nome: "Síndrome de Cushing",
    sinonimos: ["Hipercortisolismo"],
    cid10: "E24",
    especialidade: "Endocrinologia",
    etiologia: "Multifatorial",
    resumo: "Conjunto de manifestações clínicas decorrentes da exposição crônica a níveis excessivos de glicocorticoides, seja por produção endógena excessiva ou por uso exógeno prolongado.",
    definicao:
      "Síndrome clínica resultante da exposição prolongada a níveis suprafisiológicos de glicocorticoides, de causa endógena (hiperprodução de cortisol pelas adrenais, geralmente por estímulo excessivo de ACTH) ou exógena (uso terapêutico prolongado de corticosteroides, a causa mais comum na prática clínica geral).",
    epidemiologia:
      "A causa exógena (uso terapêutico de corticosteroides) é, de longe, a mais comum na prática clínica geral. Entre as causas endógenas, a doença de Cushing (adenoma hipofisário produtor de ACTH) é a mais frequente, seguida por tumores adrenais e síndrome do ACTH ectópico (geralmente neoplasias, como carcinoma pulmonar de pequenas células).",
    fisiopatologia:
      "O excesso crônico de cortisol promove catabolismo proteico, redistribuição de gordura corporal, resistência à insulina, retenção de sódio e água, e supressão do eixo imunológico, gerando o fenótipo característico da síndrome. Nas formas ACTH-dependentes, o excesso de ACTH (hipofisário ou ectópico) estimula hiperplasia e hiperfunção adrenal bilateral; nas formas ACTH-independentes, um tumor adrenal produz cortisol autonomamente, suprimindo o ACTH hipofisário por retroalimentação negativa.",
    classificacao:
      "Classificada em ACTH-dependente (doença de Cushing por adenoma hipofisário — mais comum entre as endógenas; síndrome do ACTH ectópico) e ACTH-independente (adenoma ou carcinoma adrenal, hiperplasia adrenal nodular). A dosagem de ACTH sérico é o principal exame para essa distinção inicial após confirmação bioquímica do hipercortisolismo.",
    quadroClinico: [
      "Obesidade centrípeta com fácies em lua cheia e giba dorsal ('corcova de búfalo')",
      "Estrias violáceas largas, fragilidade capilar e equimoses fáceis",
      "Fraqueza muscular proximal e osteoporose",
      "Hipertensão arterial e hiperglicemia/diabetes secundário",
      "Irregularidade menstrual e hirsutismo em mulheres (quando há componente androgênico associado)",
    ],
    diagnostico: [
      "Confirmação bioquímica do hipercortisolismo por pelo menos dois testes de rastreamento distintos: cortisol livre urinário de 24h elevado, cortisol salivar noturno elevado ou teste de supressão com dexametasona 1mg overnight sem supressão adequada",
      "Dosagem de ACTH sérico para diferenciar formas ACTH-dependentes de ACTH-independentes",
      "Exames de imagem direcionados conforme a etiologia suspeitada (ressonância de hipófise, tomografia de adrenais)",
    ],
    examesComplementares: [
      "Cortisol livre urinário de 24h elevado (tipicamente >3x o limite superior da normalidade sustenta o diagnóstico)",
      "Teste de supressão com dexametasona 1mg overnight: cortisol matinal >1,8 μg/dL após supressão sugere hipercortisolismo",
      "Cortisol salivar noturno elevado (perda do ritmo circadiano normal)",
      "ACTH sérico: suprimido nas formas adrenais (ACTH-independentes), normal/elevado nas formas ACTH-dependentes",
    ],
    diagnosticoDiferencial: [
      "Obesidade simples com componentes da síndrome metabólica",
      "Pseudo-Cushing (depressão grave, alcoolismo, obesidade importante) — hipercortisolismo funcional sem tumor",
      "Síndrome dos ovários policísticos (quando há hirsutismo e irregularidade menstrual predominantes)",
    ],
    tratamento: [
      "Ressecção cirúrgica da fonte do excesso hormonal: cirurgia transesfenoidal na doença de Cushing, adrenalectomia no tumor adrenal, ressecção do tumor produtor de ACTH ectópico quando localizável",
      "Inibidores da esteroidogênese (ex.: cetoconazol, metirapona) como ponte pré-operatória ou em casos não cirúrgicos",
      "Suspensão gradual do corticosteroide exógeno, quando essa é a causa, com atenção ao risco de insuficiência adrenal secundária pela supressão do eixo",
      "Radioterapia hipofisária como opção adjuvante em doença de Cushing persistente/recorrente após cirurgia",
    ],
    complicacoes: [
      "Aguda: crises hipertensivas, descompensação glicêmica",
      "Crônica: osteoporose com fraturas, doença cardiovascular acelerada, maior suscetibilidade a infecções, insuficiência adrenal após remoção da fonte de excesso (pelo eixo hipotálamo-hipófise-adrenal cronicamente suprimido)",
    ],
    redFlags: [
      "Perda de peso rápida associada a hipercortisolismo, em vez do ganho de peso habitual — levanta suspeita de síndrome do ACTH ectópico por neoplasia maligna de crescimento rápido",
    ],
    prognostico:
      "Potencialmente reversível com tratamento adequado da causa de base, embora algumas manifestações (osteoporose, alterações cardiovasculares) possam persistir parcialmente mesmo após a cura bioquímica; hipercortisolismo não tratado associa-se a mortalidade cardiovascular significativamente aumentada.",
    pontosDeProva: [
      "A causa mais comum de síndrome de Cushing na prática clínica é o uso exógeno de corticosteroides — sempre investigar uso medicamentoso antes de partir para investigação extensa de causas endógenas",
      "Após remoção cirúrgica bem-sucedida da fonte de excesso de cortisol, o eixo hipotálamo-hipófise-adrenal permanece suprimido temporariamente, exigindo reposição de glicocorticoide no pós-operatório para evitar insuficiência adrenal aguda",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 34 anos, relata ganho de peso centrípeta progressivo, aparecimento de estrias violáceas no abdome e fraqueza para subir escadas nos últimos 8 meses. Pressão arterial 150x95 mmHg. Nega uso de medicamentos.",
      pergunta: "Qual é a próxima etapa diagnóstica mais apropriada?",
      raciocinio:
        "O fenótipo clínico (obesidade centrípeta, estrias violáceas largas, fraqueza muscular proximal, hipertensão) é sugestivo de síndrome de Cushing. Na ausência de uso de corticosteroide exógeno, a investigação deve começar pela confirmação bioquímica do hipercortisolismo endógeno.",
      conduta:
        "Confirmar hipercortisolismo com pelo menos dois testes de rastreamento (cortisol livre urinário de 24h, teste de supressão com dexametasona overnight ou cortisol salivar noturno) e, se confirmado, dosar ACTH sérico para direcionar a investigação etiológica.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Classificação ACTH-dependente/independente e fisiopatologia", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Critérios diagnósticos bioquímicos", fonte: "Endocrine Society Clinical Practice Guideline for Cushing's Syndrome, 2008" },
      { tema: "Inibidores da esteroidogênese no tratamento (ainda sem fichas próprias no site)", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "hiperparatireoidismo",
    nome: "Hiperparatireoidismo",
    sinonimos: ["Transtornos da paratireóide", "Hiperparatireoidismo primário"],
    cid10: "E21",
    especialidade: "Endocrinologia",
    etiologia: "Multifatorial",
    resumo: "Secreção excessiva de paratormônio, mais comumente por adenoma de paratireoide isolado, causando hipercalcemia e suas repercussões ósseas e renais.",
    definicao:
      "Condição caracterizada pela secreção excessiva de paratormônio (PTH), classificada em primária (produção autônoma anormal, geralmente por adenoma), secundária (resposta compensatória apropriada a hipocalcemia crônica, mais comumente por doença renal crônica) e terciária (hiperfunção autônoma que persiste após correção prolongada da causa secundária).",
    epidemiologia:
      "O hiperparatireoidismo primário é uma das causas mais comuns de hipercalcemia na população ambulatorial, predominando em mulheres pós-menopausa; frequentemente diagnosticado hoje de forma assintomática, em exames de rotina que revelam hipercalcemia incidental. O hiperparatireoidismo secundário é extremamente comum em pacientes com doença renal crônica avançada.",
    fisiopatologia:
      "No hiperparatireoidismo primário, um adenoma de paratireoide (causa mais comum, isolada em cerca de 80-85% dos casos) secreta PTH de forma autônoma, independente dos níveis de cálcio sérico, promovendo reabsorção óssea, reabsorção tubular renal de cálcio e aumento da conversão de vitamina D para sua forma ativa, resultando em hipercalcemia. No secundário, a hipocalcemia crônica (tipicamente por doença renal crônica, com redução de vitamina D ativa e retenção de fósforo) estimula secreção compensatória sustentada de PTH pelas paratireoides.",
    classificacao:
      "Primário (adenoma único — mais comum, hiperplasia de múltiplas glândulas, ou raramente carcinoma de paratireoide), secundário (compensatório, mais comumente à doença renal crônica) e terciário (autonomia adquirida após hiperparatireoidismo secundário prolongado, com hipercalcemia mesmo após correção da causa de base).",
    quadroClinico: [
      "Frequentemente assintomático, detectado por hipercalcemia incidental em exames de rotina",
      "Quando sintomático: fadiga, constipação, poliúria e polidipsia (efeitos da hipercalcemia)",
      "Nefrolitíase de repetição",
      "Dor óssea e, em casos avançados e não tratados, osteíte fibrosa cística",
    ],
    diagnostico: [
      "Cálcio sérico elevado (ou no limite superior da normalidade) associado a PTH elevado ou inapropriadamente normal (não suprimido, como seria esperado fisiologicamente diante de hipercalcemia)",
      "Dosagem de vitamina D, fósforo e função renal para caracterização completa e diagnóstico diferencial",
      "Localização pré-operatória do adenoma por cintilografia com sestamibi e/ou ultrassonografia cervical quando indicada cirurgia",
    ],
    examesComplementares: [
      "Cálcio sérico total e/ou cálcio iônico elevados",
      "PTH sérico elevado ou inapropriadamente normal diante da hipercalcemia",
      "Cálcio urinário de 24h (para diferenciar de hipercalcemia hipocalciúrica familiar, condição benigna que mimetiza hiperparatireoidismo primário)",
      "Densitometria óssea (avaliação de perda de massa óssea associada)",
    ],
    diagnosticoDiferencial: [
      "Hipercalcemia hipocalciúrica familiar benigna",
      "Hipercalcemia de malignidade (PTH tipicamente suprimido, diferente do hiperparatireoidismo)",
      "Intoxicação por vitamina D",
    ],
    tratamento: [
      "Paratireoidectomia como tratamento definitivo no hiperparatireoidismo primário sintomático ou que preenche critérios de gravidade estabelecidos (mesmo assintomático)",
      "Vigilância clínica e laboratorial periódica em casos assintomáticos leves que não preenchem critérios cirúrgicos",
      "Cinacalcete (calcimimético) como opção medicamentosa em pacientes não candidatos à cirurgia ou no hiperparatireoidismo secundário à doença renal crônica",
      "Hidratação e, quando necessário, tratamento específico da hipercalcemia significativa",
    ],
    complicacoes: [
      "Aguda: crise hipercalcêmica (hipercalcemia grave sintomática)",
      "Crônica: nefrolitíase recorrente, doença óssea (osteíte fibrosa cística em casos avançados), redução de densidade mineral óssea",
    ],
    redFlags: [
      "Cálcio sérico muito elevado associado a confusão mental, desidratação importante e disfunção renal aguda — crise hipercalcêmica, exige tratamento intensivo imediato",
    ],
    prognostico:
      "Excelente após paratireoidectomia bem-sucedida no hiperparatireoidismo primário, com normalização do cálcio e melhora da densidade óssea; casos assintomáticos em vigilância têm evolução geralmente estável, mas requerem acompanhamento contínuo.",
    pontosDeProva: [
      "PTH elevado ou inapropriadamente normal diante de hipercalcemia é a chave diagnóstica do hiperparatireoidismo primário — na hipercalcemia de malignidade, o PTH está tipicamente suprimido",
      "A hipercalcemia hipocalciúrica familiar benigna é um diferencial importante que mimetiza hiperparatireoidismo primário bioquimicamente, mas não deve ser operada — o cálcio urinário de 24h baixo a diferencia",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 62 anos, assintomática, tem hipercalcemia (cálcio 11,2 mg/dL) identificada em exame de rotina. PTH sérico: 95 pg/mL (valor de referência até 65 pg/mL).",
      pergunta: "Qual é a hipótese diagnóstica mais provável diante desses achados?",
      raciocinio:
        "A combinação de hipercalcemia com PTH elevado (não suprimido, como seria esperado fisiologicamente) é característica de hiperparatireoidismo primário, mais comumente por adenoma isolado de paratireoide nessa faixa etária e sexo.",
      conduta:
        "Solicitar cálcio urinário de 24h para excluir hipercalcemia hipocalciúrica familiar, avaliar função renal e densitometria óssea, e discutir critérios de indicação cirúrgica (mesmo na ausência de sintomas) conforme diretrizes de consenso.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Classificação primário/secundário/terciário e fisiopatologia", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Critérios de indicação cirúrgica em hiperparatireoidismo assintomático", fonte: "Fourth International Workshop on Asymptomatic Primary Hyperparathyroidism, 2014" },
      { tema: "Cinacalcete no tratamento medicamentoso (ainda sem ficha própria no site)", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "insuficiencia-adrenal",
    nome: "Insuficiência adrenal",
    sinonimos: ["Doença de Addison", "Insuficiência adrenal primária"],
    cid10: "E27",
    especialidade: "Endocrinologia",
    etiologia: "Multifatorial",
    resumo: "Produção insuficiente de cortisol (e, na forma primária, também de aldosterona), de causa primária (adrenal) ou secundária (deficiência de ACTH), com risco de crise adrenal aguda potencialmente fatal.",
    definicao:
      "Condição caracterizada pela produção insuficiente de glicocorticoides, podendo ser primária (destruição ou disfunção do córtex adrenal, também chamada doença de Addison, com deficiência combinada de cortisol e aldosterona) ou secundária/terciária (deficiência de ACTH por doença hipofisária ou de CRH por doença hipotalâmica/supressão por corticoterapia exógena prolongada, preservando a secreção de aldosterona, que depende primariamente do sistema renina-angiotensina).",
    epidemiologia:
      "A causa mais comum de insuficiência adrenal secundária é a supressão do eixo hipotálamo-hipófise-adrenal por uso prolongado de corticosteroides exógenos, seguida de doença hipofisária/hipotalâmica estrutural. A insuficiência adrenal primária (doença de Addison) é mais rara, sendo a adrenalite autoimune a causa mais comum em países desenvolvidos.",
    fisiopatologia:
      "Na insuficiência adrenal primária, destruição do córtex adrenal (autoimune, infecciosa como tuberculose, ou infiltrativa) reduz a produção de cortisol e aldosterona; a queda de cortisol remove a retroalimentação negativa sobre a hipófise, elevando o ACTH (que compartilha precursor com hormônios estimulantes de melanócitos, explicando a hiperpigmentação característica). Na insuficiência adrenal secundária, a deficiência de ACTH reduz a produção de cortisol, mas a aldosterona permanece preservada por depender predominantemente do sistema renina-angiotensina-aldosterona, não do ACTH.",
    classificacao:
      "Primária (doença de Addison — adrenal, com deficiência combinada de cortisol e aldosterona, ACTH elevado), secundária (deficiência hipofisária de ACTH, aldosterona preservada) e terciária (deficiência hipotalâmica de CRH ou supressão do eixo por corticoterapia exógena crônica, também com aldosterona preservada).",
    quadroClinico: [
      "Fadiga crônica, fraqueza e perda de peso progressivas",
      "Hipotensão, especialmente postural",
      "Hiperpigmentação cutânea e de mucosas (específica da forma primária, pelo excesso de ACTH)",
      "Náuseas, dor abdominal e avidez por sal (na forma primária, refletindo a deficiência de aldosterona)",
    ],
    diagnostico: [
      "Cortisol matinal basal baixo sustenta a suspeita; teste de estimulação com ACTH sintético (cosintropina) é o padrão-ouro para confirmação",
      "ACTH sérico elevado na forma primária, baixo/inapropriadamente normal na forma secundária/terciária",
      "Eletrólitos: hipercalemia e hiponatremia sugerem forma primária (deficiência de aldosterona associada)",
    ],
    examesComplementares: [
      "Cortisol sérico matinal (8h): valores muito baixos (<3-5 μg/dL) são altamente sugestivos; valores normais não excluem",
      "Teste de estimulação com ACTH sintético (cosintropina): cortisol pico <18-20 μg/dL após estímulo confirma insuficiência adrenal",
      "ACTH sérico: elevado na forma primária, baixo ou inapropriadamente normal na secundária/terciária",
      "Sódio e potássio séricos (hiponatremia e hipercalemia na forma primária)",
    ],
    diagnosticoDiferencial: [
      "Hipotireoidismo (fadiga e sintomas inespecíficos sobrepostos)",
      "Outras causas de hiponatremia e hipercalemia",
      "Doenças gastrointestinais crônicas (quando predominam náusea e perda de peso)",
    ],
    tratamento: [
      "Reposição de glicocorticoide (hidrocortisona é a droga de escolha, por mimetizar melhor o ritmo circadiano fisiológico do cortisol)",
      "Reposição adicional de mineralocorticoide (fludrocortisona) na insuficiência adrenal primária",
      "Aumento da dose de glicocorticoide ('dose de estresse') em situações de doença aguda, cirurgia ou trauma, para prevenir crise adrenal",
      "Educação do paciente sobre reconhecimento de sinais de crise adrenal e necessidade de ajuste de dose em situações de estresse fisiológico",
    ],
    complicacoes: [
      "Aguda: crise adrenal (insuficiência adrenal aguda), emergência com hipotensão refratária e risco de vida",
      "Crônica: qualidade de vida reduzida mesmo em tratamento adequado, maior suscetibilidade a infecções em períodos de subdosagem",
    ],
    redFlags: [
      "Hipotensão refratária, dor abdominal intensa, vômitos e rebaixamento do nível de consciência em paciente com insuficiência adrenal conhecida ou fator precipitante (infecção, cirurgia, suspensão abrupta de corticoide) — suspeitar de crise adrenal e tratar imediatamente com hidrocortisona parenteral, sem aguardar confirmação laboratorial",
    ],
    prognostico:
      "Excelente com reposição hormonal adequada e educação do paciente sobre ajuste de dose em situações de estresse; a crise adrenal não reconhecida e não tratada tem mortalidade significativa.",
    pontosDeProva: [
      "A hiperpigmentação cutânea ocorre apenas na insuficiência adrenal primária, pelo ACTH elevado (que compartilha via de clivagem com o hormônio estimulante de melanócitos) — ausente nas formas secundária/terciária",
      "Em suspeita de crise adrenal, o tratamento com hidrocortisona não deve ser postergado para aguardar resultado de cortisol basal ou teste de estimulação — a hipótese clínica já justifica tratamento imediato",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 45 anos, relata fadiga progressiva, perda de peso e tontura postural há meses. Exame físico revela hiperpigmentação de pregas palmares e mucosa oral. Sódio sérico: 129 mEq/L; potássio: 5,6 mEq/L.",
      pergunta: "Qual é a hipótese diagnóstica mais provável e como confirmá-la?",
      raciocinio:
        "A combinação de fadiga crônica, hipotensão postural, hiperpigmentação e o padrão eletrolítico de hiponatremia com hipercalemia é altamente sugestiva de insuficiência adrenal primária (doença de Addison), com deficiência combinada de cortisol e aldosterona.",
      conduta:
        "Confirmar com cortisol basal e teste de estimulação com ACTH sintético, dosar ACTH sérico (esperado elevado na forma primária), e iniciar reposição de hidrocortisona e fludrocortisona assim que o diagnóstico for confirmado ou a suspeita clínica for muito alta.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Fisiopatologia primária vs. secundária/terciária", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Critérios diagnósticos e teste de estimulação com ACTH", fonte: "Endocrine Society Clinical Practice Guideline for Primary Adrenal Insufficiency, 2016" },
      { tema: "Hidrocortisona e fludrocortisona na reposição (ainda sem fichas próprias no site)", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "acromegalia",
    nome: "Acromegalia",
    sinonimos: ["Hiperfunção da hipófise (GH)", "Gigantismo (forma pré-puberal)"],
    cid10: "E22",
    especialidade: "Endocrinologia",
    etiologia: "Neoplásica",
    resumo: "Excesso crônico de hormônio do crescimento, quase sempre por adenoma hipofisário somatotrófico, causando crescimento ósseo e de partes moles e risco cardiovascular e metabólico aumentado.",
    definicao:
      "Síndrome causada pela secreção excessiva e sustentada de hormônio do crescimento (GH) na vida adulta (após o fechamento das epífises ósseas), levando a crescimento de partes moles e ossos (especialmente extremidades e face) e a um espectro de complicações metabólicas e cardiovasculares. Quando o excesso de GH ocorre antes do fechamento epifisário, o resultado é o gigantismo.",
    epidemiologia:
      "Doença rara, com diagnóstico frequentemente tardio (anos após o início dos sintomas) pela progressão insidiosa das alterações físicas. Mais de 95% dos casos decorrem de adenoma hipofisário produtor de GH; causas ectópicas (tumores secretores de GHRH) são raras.",
    fisiopatologia:
      "Um adenoma hipofisário somatotrófico secreta GH de forma autônoma e sustentada, estimulando a produção hepática de IGF-1, que medeia a maior parte dos efeitos sistêmicos: crescimento de tecido conjuntivo, cartilagem e osso, resistência à insulina e hipertrofia de tecidos moles (incluindo miocárdio, causando cardiomiopatia acromegálica).",
    classificacao:
      "Não há sistema formal de estadiamento de gravidade amplamente usado; a doença é classificada por critérios de controle bioquímico (ativa/não controlada vs. em remissão/controlada), definidos pela normalização do IGF-1 ajustado para idade e sexo e pela supressão adequada do GH após sobrecarga oral de glicose.",
    quadroClinico: [
      "Crescimento de extremidades (mãos e pés maiores, exigindo troca de anéis/calçados) e alterações faciais progressivas (prognatismo, aumento de nariz e lábios)",
      "Macroglossia e alteração de voz (mais grave)",
      "Síndrome do túnel do carpo",
      "Sudorese excessiva e pele espessada/oleosa",
      "Sintomas de efeito de massa hipofisária (cefaleia, alterações visuais) quando o adenoma é volumoso",
    ],
    diagnostico: [
      "IGF-1 sérico elevado para idade e sexo é o exame de rastreamento inicial",
      "Confirmação por teste de supressão de GH após sobrecarga oral de glicose (75g): ausência de supressão adequada confirma o diagnóstico",
      "Ressonância magnética de hipófise para localização e caracterização do adenoma após confirmação bioquímica",
    ],
    examesComplementares: [
      "IGF-1 sérico elevado para idade e sexo",
      "Teste de supressão de GH com sobrecarga oral de glicose: GH não suprimido a <1 ng/mL confirma acromegalia",
      "Ressonância magnética de hipófise com contraste",
      "Avaliação de outras funções hipofisárias (pode haver hipopituitarismo associado por efeito de massa do adenoma)",
    ],
    diagnosticoDiferencial: [
      "Acromegalia pseudoacromegálica (obesidade grave, algumas formas de resistência insulínica extrema)",
      "Paquidermoperiostose (rara, sem elevação de GH/IGF-1)",
    ],
    tratamento: [
      "Cirurgia transesfenoidal para ressecção do adenoma hipofisário como tratamento de primeira linha na maioria dos casos",
      "Análogos de somatostatina (ex.: octreotide) como tratamento medicamentoso de primeira linha em doença persistente pós-cirúrgica ou em pacientes não candidatos à cirurgia",
      "Antagonista do receptor de GH (pegvisomanto) ou agonistas dopaminérgicos em casos selecionados",
      "Radioterapia hipofisária como opção adjuvante em doença persistente refratária",
    ],
    complicacoes: [
      "Aguda: apoplexia hipofisária (hemorragia/infarto do adenoma), emergência neuroendócrina",
      "Crônica: cardiomiopatia acromegálica, hipertensão, diabetes mellitus secundário, síndrome da apneia obstrutiva do sono, maior risco de pólipos e neoplasia colorretal",
    ],
    redFlags: [
      "Cefaleia súbita e intensa associada a alteração visual aguda e/ou rebaixamento do nível de consciência em paciente com adenoma hipofisário conhecido — suspeitar de apoplexia hipofisária, emergência que pode exigir descompressão cirúrgica urgente",
    ],
    prognostico:
      "Com controle bioquímico adequado (normalização de IGF-1), o risco de mortalidade cardiovascular se aproxima do da população geral; a doença não controlada associa-se a redução significativa da expectativa de vida, principalmente por complicações cardiovasculares.",
    pontosDeProva: [
      "O diagnóstico bioquímico de acromegalia depende da ausência de supressão do GH após sobrecarga oral de glicose — em indivíduos normais, a glicose suprime o GH, o que não ocorre na secreção autônoma do adenoma",
      "O diagnóstico costuma ser tardio (anos após o início) porque as alterações físicas progridem lentamente e são frequentemente notadas primeiro por fotografias antigas comparativas do próprio paciente",
    ],
    casoClinico: {
      vinheta:
        "Homem, 48 anos, é levado pela esposa que notou mudanças graduais no rosto e crescimento das mãos nos últimos anos, ao comparar fotos antigas. Relata também cefaleia frequente e ronco importante. Exame mostra prognatismo e mãos alargadas.",
      pergunta: "Qual é o exame inicial mais apropriado para investigar essa suspeita?",
      raciocinio:
        "As alterações faciais progressivas e o crescimento de extremidades, associados a cefaleia (sugerindo possível efeito de massa hipofisária), são altamente sugestivos de acromegalia. O IGF-1 sérico é o exame de rastreamento inicial recomendado antes de exames confirmatórios mais específicos.",
      conduta:
        "Solicitar IGF-1 sérico como rastreamento inicial; se elevado, confirmar com teste de supressão de GH após sobrecarga oral de glicose e, uma vez confirmado bioquimicamente, solicitar ressonância de hipófise para localizar o adenoma.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Fisiopatologia e papel do IGF-1", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Critérios diagnósticos e de controle bioquímico", fonte: "Endocrine Society Clinical Practice Guideline for Acromegaly, 2014" },
      { tema: "Análogos de somatostatina no tratamento medicamentoso (ainda sem ficha própria no site)", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "hipopituitarismo",
    nome: "Hipopituitarismo",
    sinonimos: ["Hipofunção da hipófise", "Insuficiência hipofisária"],
    cid10: "E23",
    especialidade: "Endocrinologia",
    etiologia: "Multifatorial",
    resumo: "Deficiência de um ou mais hormônios hipofisários, mais comumente causada por tumores hipofisários/hipotalâmicos e seu tratamento, com repercussões nos eixos tireoidiano, adrenal, gonadal e do crescimento.",
    definicao:
      "Condição caracterizada pela produção deficiente de um (deficiência isolada) ou mais (panhipopituitarismo) hormônios hipofisários, decorrente de doença estrutural da hipófise ou do hipotálamo, ou de lesão adquirida por cirurgia, radioterapia, trauma ou eventos isquêmicos/hemorrágicos.",
    epidemiologia:
      "Adenomas hipofisários (funcionantes ou não) e seu tratamento (cirurgia, radioterapia) são as causas mais comuns em adultos. Outras causas incluem síndrome de Sheehan (necrose hipofisária pós-parto por hemorragia obstétrica grave), traumatismo cranioencefálico, apoplexia hipofisária e doenças infiltrativas/inflamatórias da região selar.",
    fisiopatologia:
      "Lesão estrutural ou funcional da hipófise anterior (ou do hipotálamo, comprometendo os fatores liberadores hipotalâmicos) reduz a secreção de um ou mais hormônios tróficos (ACTH, TSH, gonadotrofinas, GH, prolactina), com repercussão nos órgãos-alvo correspondentes. A perda hormonal costuma seguir um padrão sequencial característico, com GH e gonadotrofinas geralmente afetados precocemente, e ACTH/TSH mais tardiamente, embora isso varie conforme a causa.",
    classificacao:
      "Classificado por extensão (deficiência hormonal isolada vs. panhipopituitarismo) e por eixo(s) acometido(s): corticotrófico (ACTH/cortisol), tireotrófico (TSH/T4), gonadotrófico (LH/FSH/esteroides sexuais) e somatotrófico (GH/IGF-1), além da deficiência de prolactina (rara clinicamente relevante) e de ADH (diabetes insípido central, quando há acometimento hipotalâmico/hipofisário posterior).",
    quadroClinico: [
      "Deficiência de ACTH: fadiga, hipotensão, hipoglicemia (sem a hiperpigmentação da insuficiência adrenal primária, pois o ACTH está baixo, não elevado)",
      "Deficiência de TSH: sintomas de hipotireoidismo central (fadiga, intolerância ao frio, ganho de peso)",
      "Deficiência de gonadotrofinas: amenorreia e infertilidade em mulheres; disfunção erétil e redução de libido em homens",
      "Deficiência de GH: em adultos, fadiga, redução de massa muscular e qualidade de vida reduzida; em crianças, baixa estatura",
    ],
    diagnostico: [
      "Dosagem simultânea dos hormônios hipofisários tróficos e de seus respectivos hormônios-alvo periféricos (ex.: TSH e T4 livre; ACTH e cortisol; LH/FSH e testosterona/estradiol)",
      "Testes dinâmicos de estimulação (ex.: teste de tolerância à insulina) quando a avaliação basal é inconclusiva, especialmente para os eixos corticotrófico e somatotrófico",
      "Ressonância magnética de hipófise/hipotálamo para investigação etiológica estrutural",
    ],
    examesComplementares: [
      "TSH e T4 livre (TSH tipicamente baixo/normal-inapropriado com T4 livre baixo, diferente do hipotireoidismo primário onde o TSH estaria elevado)",
      "ACTH e cortisol basal, com teste de estimulação quando necessário",
      "LH, FSH e testosterona/estradiol conforme o sexo",
      "IGF-1 como triagem inicial para deficiência de GH, com confirmação por teste dinâmico quando indicado",
    ],
    diagnosticoDiferencial: [
      "Doença primária de cada glândula-alvo isoladamente (tireoide, adrenal, gônadas)",
      "Síndrome consumptiva por doença crônica sistêmica não endócrina",
    ],
    tratamento: [
      "Reposição hormonal específica de cada eixo deficiente: hidrocortisona (eixo corticotrófico, sempre priorizada antes da reposição de levotiroxina para evitar precipitar crise adrenal), levotiroxina (eixo tireotrófico), esteroides sexuais (eixo gonadotrófico) e GH recombinante em casos selecionados",
      "Priorização da reposição de glicocorticoide antes de iniciar levotiroxina, quando ambos os eixos estão deficientes, pelo risco de a reposição tireoidiana acelerar o metabolismo do cortisol residual e precipitar crise adrenal",
      "Tratamento da causa estrutural de base (cirurgia, se indicada) quando aplicável",
      "Acompanhamento endocrinológico contínuo com reavaliação periódica dos eixos hormonais",
    ],
    complicacoes: [
      "Aguda: crise adrenal precipitada por estresse fisiológico não coberto por ajuste de dose de glicocorticoide",
      "Crônica: infertilidade, osteoporose (por múltiplas deficiências hormonais combinadas), redução de qualidade de vida",
    ],
    redFlags: [
      "Hipotensão e rebaixamento do nível de consciência em paciente com hipopituitarismo conhecido, especialmente em contexto de doença aguda ou estresse fisiológico — suspeitar de crise adrenal por deficiência de ACTH e tratar imediatamente",
    ],
    prognostico:
      "Bom com reposição hormonal adequada e acompanhamento regular; a principal causa evitável de morbimortalidade é a crise adrenal não reconhecida em situações de estresse fisiológico.",
    pontosDeProva: [
      "Ao contrário da insuficiência adrenal primária, a deficiência de ACTH no hipopituitarismo não causa hiperpigmentação, já que o ACTH está baixo, não elevado",
      "Sempre repor glicocorticoide antes de iniciar levotiroxina em paciente com deficiência combinada de ACTH e TSH, pelo risco de precipitar crise adrenal",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 36 anos, com histórico de hemorragia obstétrica grave há 2 anos, sem sangramento menstrual desde então e sem conseguir amamentar por ausência de produção de leite. Relata fadiga importante e intolerância ao frio.",
      pergunta: "Qual é a hipótese diagnóstica mais provável e o mecanismo subjacente?",
      raciocinio:
        "O histórico de hemorragia obstétrica grave associado a amenorreia, agalactia e sintomas de hipotireoidismo é clássico de síndrome de Sheehan — necrose hipofisária isquêmica secundária a hipotensão grave no periparto, levando a hipopituitarismo.",
      conduta:
        "Avaliar todos os eixos hipofisários (corticotrófico, tireotrófico, gonadotrófico, somatotrófico), priorizar a reposição de glicocorticoide antes de iniciar levotiroxina caso ambos os eixos estejam deficientes, e solicitar ressonância de hipófise para caracterização estrutural.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Padrão sequencial de perda hormonal e síndrome de Sheehan", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Priorização da reposição de glicocorticoide antes de levotiroxina", fonte: "Endocrine Society Clinical Practice Guideline for Hypopituitarism, 2016" },
      { tema: "Reposição hormonal específica por eixo (ainda sem fichas próprias no site)", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "obesidade",
    nome: "Obesidade",
    sinonimos: ["Excesso de peso"],
    cid10: "E66",
    especialidade: "Endocrinologia",
    etiologia: "Multifatorial",
    resumo: "Doença crônica caracterizada por acúmulo excessivo de gordura corporal, resultante da interação entre fatores genéticos, comportamentais e ambientais, associada a risco cardiometabólico aumentado.",
    definicao:
      "Doença crônica multifatorial caracterizada por acúmulo excessivo de tecido adiposo, com repercussões metabólicas, mecânicas e psicossociais, definida operacionalmente por índice de massa corporal (IMC) elevado.",
    epidemiologia:
      "Prevalência crescente globalmente e no Brasil, associada a mudanças no padrão alimentar, sedentarismo e fatores socioeconômicos; afeta todas as faixas etárias, com impacto direto no aumento de diabetes tipo 2, doença cardiovascular e alguns tipos de câncer.",
    fisiopatologia:
      "Resulta de um desequilíbrio crônico entre ingestão e gasto energético, modulado por fatores genéticos (poligênicos na maioria dos casos, raramente monogênicos), hormonais (leptina, grelina e outros reguladores do apetite) e ambientais/comportamentais. O tecido adiposo em excesso, especialmente visceral, funciona como órgão endócrino ativo, secretando adipocinas pró-inflamatórias que contribuem para resistência à insulina e risco cardiovascular.",
    classificacao:
      "Classificação por IMC (Organização Mundial da Saúde): sobrepeso (25,0-29,9 kg/m²), obesidade grau I (30,0-34,9 kg/m²), obesidade grau II (35,0-39,9 kg/m²) e obesidade grau III ou mórbida (≥40,0 kg/m²). A circunferência abdominal complementa a avaliação de risco cardiometabólico associado à adiposidade central.",
    quadroClinico: [
      "Acúmulo de tecido adiposo, frequentemente com distribuição centrípeta (visceral) associada a maior risco cardiometabólico",
      "Frequentemente assintomática isoladamente, mas associada a comorbidades (hipertensão, resistência insulínica/diabetes, dislipidemia, apneia do sono, osteoartrose)",
      "Impacto psicossocial significativo, incluindo estigma e comorbidades psiquiátricas associadas",
    ],
    diagnostico: [
      "Cálculo do índice de massa corporal (peso em kg dividido pela altura em metros ao quadrado)",
      "Medida da circunferência abdominal para avaliação complementar de adiposidade central",
      "Rastreamento de comorbidades associadas (glicemia, perfil lipídico, pressão arterial)",
    ],
    examesComplementares: [
      "IMC ≥30 kg/m² define obesidade (Organização Mundial da Saúde)",
      "Circunferência abdominal: risco cardiometabólico aumentado com >102 cm em homens e >88 cm em mulheres",
      "Glicemia de jejum, HbA1c e perfil lipídico para rastreamento de comorbidades metabólicas",
    ],
    diagnosticoDiferencial: [
      "Causas endócrinas secundárias de ganho de peso (hipotireoidismo, síndrome de Cushing) — devem ser consideradas, especialmente diante de ganho de peso desproporcional ou de início abrupto",
      "Obesidade de causa genética/monogênica (rara, geralmente com início muito precoce e hiperfagia intensa)",
    ],
    tratamento: [
      "Modificação de estilo de vida (dieta hipocalórica estruturada, atividade física regular, terapia comportamental) como base do tratamento em todos os pacientes",
      "Farmacoterapia adjuvante (ex.: agonistas do receptor de GLP-1) em pacientes selecionados com IMC elevado ou com comorbidades, quando a mudança de estilo de vida isolada é insuficiente",
      "Cirurgia bariátrica em obesidade grave (grau III, ou grau II com comorbidades significativas) refratária a tratamento clínico otimizado",
      "Manejo multidisciplinar das comorbidades associadas",
    ],
    complicacoes: [
      "Metabólicas: resistência à insulina, diabetes mellitus tipo 2, dislipidemia, síndrome metabólica",
      "Cardiovasculares: hipertensão arterial, doença arterial coronariana",
      "Mecânicas/outras: apneia obstrutiva do sono, osteoartrose, esteatose hepática, maior risco de determinados cânceres",
    ],
    redFlags: [
      "Ganho de peso muito rápido e desproporcional, associado a outros sinais sugestivos (estrias violáceas largas, fraqueza muscular proximal) — investigar causas endócrinas secundárias como síndrome de Cushing antes de assumir obesidade primária",
    ],
    prognostico:
      "A perda de peso sustentada, mesmo modesta (5-10% do peso corporal), já traz benefícios metabólicos e cardiovasculares significativos; a obesidade não tratada associa-se a redução da expectativa de vida e aumento expressivo de morbidade cardiometabólica.",
    pontosDeProva: [
      "Uma perda de peso de apenas 5-10% já produz benefícios metabólicos clinicamente relevantes, mesmo sem normalização completa do IMC — meta realista frequentemente mais eficaz que buscar peso 'ideal' de forma abrupta",
      "Antes de rotular obesidade como primária, é importante excluir causas endócrinas secundárias (hipotireoidismo, síndrome de Cushing) quando a história ou o exame físico sugerem essa possibilidade",
    ],
    casoClinico: {
      vinheta:
        "Homem, 41 anos, IMC 34 kg/m², sedentário, procura avaliação após diagnóstico recente de pré-diabetes. Circunferência abdominal: 108 cm. Nega uso de medicamentos ou sintomas sugestivos de causa endócrina secundária.",
      pergunta: "Qual é a conduta inicial mais apropriada?",
      raciocinio:
        "O IMC de 34 kg/m² caracteriza obesidade grau I, e a circunferência abdominal aumentada reforça o risco cardiometabólico associado, já manifesto pelo pré-diabetes. Na ausência de sinais de causa endócrina secundária, a abordagem inicial deve priorizar mudança de estilo de vida.",
      conduta:
        "Iniciar programa estruturado de dieta hipocalórica e atividade física regular, com acompanhamento multidisciplinar, reservando farmacoterapia adjuvante para caso a resposta à mudança de estilo de vida isolada seja insuficiente.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Classificação por IMC (OMS)", fonte: "Organização Mundial da Saúde, classificação de IMC para adultos" },
      { tema: "Pontos de corte de circunferência abdominal", fonte: "fonte pendente" },
      { tema: "Farmacoterapia com agonistas de GLP-1 (ainda sem ficha própria no site)", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "dislipidemia",
    nome: "Dislipidemia",
    sinonimos: ["Distúrbios do metabolismo de lipoproteínas", "Hipercolesterolemia"],
    cid10: "E78",
    especialidade: "Endocrinologia",
    etiologia: "Metabólica",
    resumo: "Alterações nos níveis séricos de lipoproteínas (LDL, HDL, triglicerídeos), de causa primária (genética) ou secundária, que constituem fator de risco central para doença cardiovascular aterosclerótica.",
    definicao:
      "Conjunto de alterações quantitativas ou qualitativas das lipoproteínas plasmáticas — elevação de LDL-colesterol e/ou triglicerídeos, redução de HDL-colesterol, ou combinações destas — associadas a maior risco de doença cardiovascular aterosclerótica.",
    epidemiologia:
      "Extremamente prevalente na população adulta, com forte componente de hábitos de vida (dieta, sedentarismo, obesidade) somado a predisposição genética; a hipercolesterolemia familiar (causa monogênica) é sub-diagnosticada e associa-se a risco cardiovascular muito elevado e precoce quando não identificada.",
    fisiopatologia:
      "O excesso de LDL-colesterol circulante infiltra a íntima arterial, sofre oxidação e é capturado por macrófagos, formando células espumosas que iniciam e perpetuam o processo de aterosclerose. Triglicerídeos muito elevados também se associam a risco de pancreatite aguda, por mecanismo distinto do processo aterosclerótico.",
    classificacao:
      "Classificada etiologicamente em primária (genética, incluindo hipercolesterolemia familiar monogênica) e secundária (diabetes, hipotireoidismo, doença renal crônica, síndrome nefrótica, uso de determinados medicamentos, consumo excessivo de álcool). Estratificação de risco cardiovascular (baixo, intermediário, alto, muito alto) determina as metas terapêuticas de LDL-colesterol, conforme diretrizes de sociedades de cardiologia.",
    quadroClinico: [
      "Geralmente assintomática, identificada em exames laboratoriais de rotina",
      "Xantomas tendíneos e arco corneano precoce sugerem hipercolesterolemia familiar",
      "Xantomas eruptivos e dor abdominal por pancreatite aguda em hipertrigliceridemia grave",
    ],
    diagnostico: [
      "Perfil lipídico em jejum ou não-jejum (colesterol total, LDL-c, HDL-c, triglicerídeos)",
      "Estratificação do risco cardiovascular global (calculadoras de risco validadas) para definir metas de LDL-colesterol",
      "Critérios clínicos (ex.: Dutch Lipid Clinic Network) quando há suspeita de hipercolesterolemia familiar",
    ],
    examesComplementares: [
      "LDL-colesterol: metas variam por categoria de risco cardiovascular (ex.: <50 mg/dL em risco muito alto, <70 mg/dL em risco alto, <100 mg/dL em risco intermediário, conforme diretrizes)",
      "Triglicerídeos >500 mg/dL indicam risco significativo de pancreatite aguda e exigem tratamento prioritário",
      "HDL-colesterol e colesterol não-HDL como parâmetros complementares",
    ],
    diagnosticoDiferencial: [
      "Causas secundárias de dislipidemia (hipotireoidismo, síndrome nefrótica, diabetes descompensado, uso de álcool ou medicamentos) devem ser investigadas e tratadas antes de assumir causa primária isolada",
    ],
    tratamento: [
      "Mudança de estilo de vida (dieta, atividade física, cessação do tabagismo) como base do tratamento em todos os pacientes",
      "Estatina como primeira linha farmacológica para redução de LDL-colesterol, com intensidade ajustada à categoria de risco cardiovascular",
      "Associação de outros hipolipemiantes (ezetimiba, inibidores de PCSK9) em pacientes que não atingem a meta apenas com estatina",
      "Tratamento de hipertrigliceridemia grave (fibratos, ácidos graxos ômega-3 em altas doses) quando há risco de pancreatite",
    ],
    complicacoes: [
      "Aguda: pancreatite aguda em hipertrigliceridemia grave (triglicerídeos muito elevados)",
      "Crônica: doença arterial coronariana, acidente vascular cerebral isquêmico, doença arterial periférica",
    ],
    redFlags: [
      "Xantomas tendíneos, arco corneano antes dos 45 anos ou histórico familiar de evento cardiovascular precoce — investigar hipercolesterolemia familiar, condição sub-diagnosticada com risco cardiovascular muito elevado",
    ],
    prognostico:
      "O tratamento adequado, especialmente a redução do LDL-colesterol conforme a meta de risco, reduz de forma consistente e proporcional o risco de eventos cardiovasculares maiores ao longo do tempo.",
    pontosDeProva: [
      "As metas de LDL-colesterol são definidas pela categoria de risco cardiovascular global do paciente, não por um valor único universal — quanto maior o risco, mais baixa a meta",
      "Triglicerídeos muito elevados (>500 mg/dL) representam prioridade terapêutica pelo risco de pancreatite aguda, distinto do mecanismo aterosclerótico associado ao LDL-colesterol",
    ],
    casoClinico: {
      vinheta:
        "Homem, 52 anos, hipertenso, tabagista, com infarto do miocárdio prévio, apresenta LDL-colesterol de 145 mg/dL em exame de rotina, apesar de dieta e exercício regular há meses.",
      pergunta: "Qual deve ser a meta de LDL-colesterol para este paciente e a conduta apropriada?",
      raciocinio:
        "O histórico de infarto do miocárdio prévio classifica o paciente na categoria de risco cardiovascular muito alto, para a qual as metas de LDL-colesterol são as mais rigorosas. O valor atual está distante da meta, mesmo com mudança de estilo de vida já em curso.",
      conduta:
        "Iniciar estatina de alta potência em dose otimizada, reforçar mudança de estilo de vida e cessação do tabagismo, e reavaliar o perfil lipídico após algumas semanas para verificar se a meta de LDL-colesterol de risco muito alto foi atingida, associando outros hipolipemiantes se necessário.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "sinvastatina", nome: "Sinvastatina" },
    ],
    fontes: [
      { tema: "Fisiopatologia da aterosclerose", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Metas de LDL-colesterol por categoria de risco", fonte: "Diretriz Brasileira de Dislipidemias e Prevenção da Aterosclerose, 2017 (atualização 2021)" },
      { tema: "Hipertrigliceridemia grave e risco de pancreatite", fonte: "ESC/EAS Guidelines for the Management of Dyslipidaemias, 2019" },
    ],
  },
  {
    slug: "coma-hipoglicemico-nao-diabetico",
    nome: "Coma hipoglicêmico não-diabético",
    sinonimos: ["Hipoglicemia não-diabética", "Hipoglicemia em não-diabéticos"],
    cid10: "E15",
    especialidade: "Endocrinologia",
    etiologia: "Multifatorial",
    resumo: "Queda sintomática da glicemia em indivíduos sem diabetes, causada por condições como insulinoma, doença hepática/renal grave, insuficiência adrenal ou hipoglicemia reativa pós-prandial.",
    definicao:
      "Síndrome caracterizada por níveis plasmáticos de glicose baixos o suficiente para causar sintomas neuroglicopênicos e/ou adrenérgicos em indivíduos sem diagnóstico de diabetes mellitus, confirmada classicamente pela tríade de Whipple: sintomas compatíveis, glicemia baixa documentada no momento dos sintomas, e resolução dos sintomas após correção da glicemia.",
    epidemiologia:
      "Muito menos comum que a hipoglicemia em pacientes diabéticos (relacionada ao tratamento com insulina/secretagogos). Em adultos hospitalizados, frequentemente relacionada a doença grave (sepse, insuficiência hepática ou renal); em ambulatoriais, causas incluem insulinoma (raro), hipoglicemia factícia (uso oculto de insulina/secretagogos) e hipoglicemia pós-prandial (reativa).",
    fisiopatologia:
      "Resulta de desequilíbrio entre produção/disponibilidade de glicose e sua utilização periférica: hiperinsulinismo endógeno inapropriado (insulinoma, hipoglicemia factícia), redução da produção hepática de glicose (insuficiência hepática grave, deficiência de cortisol/GH), consumo excessivo de glicose por tumores não-ilhota, ou alteração da resposta contrarregulatória em determinadas condições pós-cirúrgicas (ex.: pós-bypass gástrico, hipoglicemia pós-prandial).",
    classificacao:
      "Classificada quanto ao momento de ocorrência em hipoglicemia de jejum (mais sugestiva de causa orgânica como insulinoma, insuficiência adrenal ou hepática grave) e hipoglicemia pós-prandial/reativa (mais comum após cirurgia bariátrica ou gástrica, ou idiopática). A gravidade dos episódios pode ser descrita pelos níveis da American Diabetes Association: nível 1 (glicemia <70 mg/dL), nível 2 (<54 mg/dL, clinicamente significativa) e nível 3 (hipoglicemia grave, com alteração do estado mental exigindo assistência de terceiros).",
    quadroClinico: [
      "Sintomas adrenérgicos: sudorese, tremor, palpitações, ansiedade",
      "Sintomas neuroglicopênicos: confusão mental, dificuldade de concentração, alterações visuais, convulsões e, em casos graves, coma",
      "Sintomas tipicamente desencadeados por jejum prolongado (causas orgânicas) ou 2-4 horas após refeições (hipoglicemia reativa)",
    ],
    diagnostico: [
      "Tríade de Whipple: sintomas compatíveis, glicemia plasmática baixa documentada concomitante, e melhora dos sintomas após correção da glicemia",
      "Dosagem simultânea de insulina, peptídeo C e beta-hidroxibutirato durante episódio espontâneo ou teste de jejum prolongado supervisionado, para diferenciar hiperinsulinismo endógeno de outras causas",
      "Investigação de causas secundárias (função hepática, renal e adrenal) conforme o contexto clínico",
    ],
    examesComplementares: [
      "Glicemia plasmática <54 mg/dL durante episódio sintomático sustenta hipoglicemia clinicamente significativa (nível 2, American Diabetes Association)",
      "Insulina e peptídeo C elevados durante hipoglicemia espontânea sugerem hiperinsulinismo endógeno (insulinoma ou uso oculto de secretagogos)",
      "Peptídeo C suprimido com insulina elevada sugere administração exógena de insulina (hipoglicemia factícia)",
      "Teste de jejum prolongado supervisionado (até 72h) quando a hipoglicemia espontânea não é facilmente documentada",
    ],
    diagnosticoDiferencial: [
      "Hipoglicemia relacionada a álcool (inibição da gliconeogênese hepática)",
      "Insuficiência adrenal",
      "Tumores não-ilhota produtores de IGF-2",
      "Hipoglicemia factícia (uso oculto de insulina ou secretagogos)",
    ],
    tratamento: [
      "Correção imediata da hipoglicemia aguda com glicose oral (se consciente) ou glicose intravenosa/glucagon (se inconsciente ou incapaz de deglutir)",
      "Investigação e tratamento da causa de base (ressecção cirúrgica de insulinoma, correção de insuficiência adrenal/hepática, ajuste dietético em hipoglicemia reativa)",
      "Orientação nutricional (fracionamento de refeições, redução de carboidratos simples) em hipoglicemia pós-prandial",
    ],
    complicacoes: [
      "Aguda: convulsões, coma, lesão neurológica por hipoglicemia grave e prolongada, arritmias cardíacas",
      "Crônica: episódios recorrentes não reconhecidos podem levar a hipoglicemia despercebida, com perda dos sintomas de alarme adrenérgicos",
    ],
    redFlags: [
      "Hipoglicemia grave com alteração do nível de consciência ou convulsão — tratar imediatamente com glicose intravenosa, sem aguardar investigação etiológica completa",
    ],
    prognostico:
      "Depende diretamente da causa de base; hipoglicemia por insulinoma tem excelente prognóstico após ressecção cirúrgica bem-sucedida, enquanto a hipoglicemia relacionada a insuficiência hepática ou renal terminal reflete a gravidade da doença de base.",
    pontosDeProva: [
      "A tríade de Whipple é o critério central para confirmar que os sintomas são de fato causados por hipoglicemia, evitando investigação excessiva em pacientes com sintomas inespecíficos sem documentação de glicemia baixa concomitante",
      "Peptídeo C suprimido na vigência de insulina elevada é a chave para diferenciar hipoglicemia factícia por insulina exógena de hiperinsulinismo endógeno verdadeiro (insulinoma)",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 45 anos, sem diabetes, relata episódios recorrentes de sudorese, tremor e confusão mental pela manhã, antes do café da manhã, que melhoram rapidamente após se alimentar. Glicemia capilar durante um episódio: 42 mg/dL.",
      pergunta: "Quais exames ajudariam a esclarecer a causa da hipoglicemia?",
      raciocinio:
        "O padrão de hipoglicemia de jejum matinal, documentada e com melhora após alimentação, preenche a tríade de Whipple e sugere causa orgânica (possível insulinoma), justificando investigação com dosagem simultânea de insulina, peptídeo C e beta-hidroxibutirato durante um episódio espontâneo ou teste de jejum prolongado supervisionado.",
      conduta:
        "Documentar novo episódio com dosagens simultâneas de glicemia, insulina, peptídeo C e beta-hidroxibutirato (ou realizar teste de jejum prolongado supervisionado), e prosseguir com investigação de imagem para localizar possível insulinoma se o perfil for compatível com hiperinsulinismo endógeno.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Tríade de Whipple e classificação de gravidade", fonte: "American Diabetes Association, Standards of Care in Diabetes, 2024" },
      { tema: "Diferenciação de hiperinsulinismo endógeno vs. factícia", fonte: "Endocrine Society Clinical Practice Guideline for Evaluation and Management of Adult Hypoglycemic Disorders, 2009" },
      { tema: "Glicose IV e glucagon no tratamento agudo (ainda sem fichas próprias no site)", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "dpoc",
    nome: "Doença pulmonar obstrutiva crônica",
    sinonimos: ["DPOC", "Bronquite crônica/enfisema"],
    cid10: "J44",
    especialidade: "Pneumologia",
    etiologia: "Multifatorial",
    resumo: "Doença respiratória crônica caracterizada por limitação persistente e progressiva do fluxo aéreo, majoritariamente causada pelo tabagismo, com componentes de bronquite crônica e/ou enfisema.",
    definicao:
      "Doença respiratória crônica comum, caracterizada por sintomas respiratórios persistentes e limitação do fluxo aéreo, decorrente de anormalidades das vias aéreas e/ou alveolares, geralmente causadas por exposição significativa a partículas ou gases nocivos, mais comumente a fumaça de cigarro.",
    epidemiologia:
      "Uma das principais causas de morbimortalidade crônica no mundo, fortemente associada ao tabagismo (embora exposição ocupacional e à fumaça de biomassa também sejam fatores de risco relevantes, especialmente em não-tabagistas). Subdiagnosticada, muitas vezes identificada apenas em estágios avançados.",
    fisiopatologia:
      "A exposição crônica a partículas nocivas desencadeia inflamação das vias aéreas e do parênquima pulmonar, levando a estreitamento e remodelamento das pequenas vias aéreas (componente de bronquite crônica) e/ou destruição dos septos alveolares com perda de retração elástica (componente de enfisema), resultando em limitação ao fluxo aéreo predominantemente expiratória e aprisionamento de ar.",
    classificacao:
      "Classificação espirométrica GOLD por grau de obstrução (baseada no VEF1 pós-broncodilatador, em pacientes com relação VEF1/CVF <0,70): GOLD 1 (VEF1 ≥80% do previsto), GOLD 2 (50-79%), GOLD 3 (30-49%) e GOLD 4 (<30%). Classificação combinada de sintomas e risco de exacerbação (grupos A/B/E, atualização GOLD 2023) direciona a escolha do tratamento farmacológico inicial.",
    quadroClinico: [
      "Dispneia progressiva, inicialmente aos esforços",
      "Tosse crônica, com ou sem expectoração",
      "Sibilância e opressão torácica em alguns pacientes",
      "Exacerbações recorrentes com piora aguda dos sintomas respiratórios",
    ],
    diagnostico: [
      "Espirometria com relação VEF1/CVF pós-broncodilatador <0,70 confirma limitação ao fluxo aéreo não totalmente reversível",
      "História de exposição a fator de risco relevante (tabagismo, biomassa, ocupacional) associada a sintomas respiratórios crônicos",
      "Classificação de gravidade espirométrica (GOLD 1-4) e de grupo sintomático/de risco (A/B/E) para orientar o tratamento",
    ],
    examesComplementares: [
      "Espirometria: VEF1/CVF <0,70 pós-broncodilatador confirma obstrução; VEF1 % previsto define o grau GOLD",
      "Radiografia ou tomografia de tórax (hiperinsuflação, achados de enfisema, exclusão de diagnósticos alternativos)",
      "Gasometria arterial em doença avançada ou exacerbação (avaliação de hipoxemia/hipercapnia)",
      "Dosagem de alfa-1 antitripsina em pacientes jovens, não-tabagistas ou com enfisema de predomínio basilar",
    ],
    diagnosticoDiferencial: [
      "Asma (limitação ao fluxo aéreo tipicamente reversível, diferente da DPOC)",
      "Bronquiectasia",
      "Insuficiência cardíaca (dispneia com outra fisiopatologia)",
      "Deficiência de alfa-1 antitripsina (causa genética de enfisema precoce)",
    ],
    tratamento: [
      "Cessação do tabagismo — intervenção isolada mais eficaz para modificar o curso da doença",
      "Broncodilatadores de longa duração (LABA e/ou LAMA) como base da terapia de manutenção, conforme grupo sintomático/de risco",
      "Broncodilatador de curta duração (SABA) para alívio de sintomas agudos/intermitentes em qualquer estágio",
      "Corticosteroide inalatório associado a broncodilatador de longa duração em pacientes com exacerbações frequentes e eosinofilia, não como monoterapia",
      "Reabilitação pulmonar e vacinação (influenza, pneumocócica) como parte do manejo integral",
    ],
    complicacoes: [
      "Aguda: exacerbações agudas, insuficiência respiratória aguda",
      "Crônica: cor pulmonale (hipertensão pulmonar e insuficiência cardíaca direita secundárias), perda de massa muscular e caquexia em doença avançada",
    ],
    redFlags: [
      "Piora aguda da dispneia associada a cianose, uso de musculatura acessória e confusão mental — sinais de exacerbação grave com risco de insuficiência respiratória, exigindo avaliação de emergência",
    ],
    prognostico:
      "Doença progressiva sem cura, mas a cessação do tabagismo pode reduzir significativamente a velocidade de declínio da função pulmonar; exacerbações frequentes associam-se a pior prognóstico e maior mortalidade.",
    pontosDeProva: [
      "A relação VEF1/CVF <0,70 pós-broncodilatador é o critério espirométrico que define obstrução ao fluxo aéreo na DPOC — sem reversibilidade completa, diferente da asma",
      "A cessação do tabagismo é a única intervenção comprovadamente capaz de alterar a história natural da doença, mais importante que qualquer terapia farmacológica isolada",
    ],
    casoClinico: {
      vinheta:
        "Homem, 63 anos, tabagista de 40 maços-ano, relata tosse produtiva crônica e dispneia progressiva aos esforços há 3 anos, com piora nos últimos meses. Espirometria: VEF1/CVF pós-broncodilatador de 0,58; VEF1 62% do previsto.",
      pergunta: "Qual é o diagnóstico e a classificação de gravidade espirométrica deste paciente?",
      raciocinio:
        "A relação VEF1/CVF pós-broncodilatador abaixo de 0,70 confirma obstrução ao fluxo aéreo não totalmente reversível, compatível com DPOC no contexto de tabagismo importante. O VEF1 de 62% do previsto classifica o paciente como GOLD 2 (obstrução moderada).",
      conduta:
        "Reforçar cessação do tabagismo como prioridade, iniciar broncodilatador de longa duração conforme o grupo sintomático/de risco, disponibilizar broncodilatador de curta duração para alívio, e orientar vacinação e reabilitação pulmonar.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "salbutamol", nome: "Salbutamol" },
    ],
    medicamentosSecaoTitulo: "Medicamento de alívio (resgate)",
    medicamentosNota:
      "Os broncodilatadores de longa duração (LABA e/ou LAMA) são a base da terapia de manutenção da DPOC conforme o grupo sintomático/de risco, e ainda não têm ficha própria no site. O salbutamol listado abaixo é o broncodilatador de curta duração usado para alívio de sintomas agudos, em qualquer estágio da doença.",
    fontes: [
      { tema: "Definição, fisiopatologia e classificação espirométrica/GOLD", fonte: "GOLD (Global Initiative for Chronic Obstructive Lung Disease), Relatório 2024" },
      { tema: "Grupos sintomáticos/de risco (A/B/E) e escolha inicial de tratamento", fonte: "GOLD (Global Initiative for Chronic Obstructive Lung Disease), Relatório 2024" },
    ],
  },
  {
    slug: "estado-de-mal-asmatico",
    nome: "Estado de mal asmático",
    sinonimos: ["Crise asmática grave", "Exacerbação grave de asma"],
    cid10: "J46",
    especialidade: "Pneumologia",
    etiologia: "Multifatorial",
    resumo: "Exacerbação grave e potencialmente fatal da asma, com broncoespasmo intenso refratário ao tratamento inicial habitual, exigindo abordagem de emergência.",
    definicao:
      "Forma grave de exacerbação asmática, caracterizada por broncoespasmo intenso e sustentado com resposta inadequada ao tratamento broncodilatador inicial, associada a risco de insuficiência respiratória e morte se não tratada agressiva e rapidamente.",
    epidemiologia:
      "Pode ocorrer em qualquer paciente asmático, mas o risco é maior em pacientes com asma mal controlada, má adesão ao tratamento de manutenção, exacerbações graves prévias (especialmente com necessidade de internação em UTI ou ventilação mecânica) e exposição a gatilhos importantes (infecções respiratórias, alérgenos, irritantes).",
    fisiopatologia:
      "Broncoconstrição intensa, edema da mucosa brônquica e hipersecreção de muco causam obstrução grave e difusa das vias aéreas, levando a aprisionamento de ar, hiperinsuflação pulmonar e aumento do trabalho respiratório; a fadiga da musculatura respiratória associada à hipoxemia e, em fases avançadas, à hipercapnia (indicando exaustão respiratória) caracteriza a progressão para insuficiência respiratória.",
    classificacao:
      "Classificação de gravidade da exacerbação asmática (GINA): leve a moderada (fala frases completas, sem uso significativo de musculatura acessória, PFE >50% do previsto/melhor pessoal) e grave (fala apenas palavras isoladas, uso de musculatura acessória, frequência respiratória >30 irpm, PFE ≤50%); exacerbação com risco de vida iminente apresenta sonolência, confusão, tórax silencioso ou SpO2 <90% apesar de oxigênio suplementar.",
    quadroClinico: [
      "Dispneia intensa, com dificuldade para falar frases completas",
      "Sibilância difusa, podendo estar ausente ('tórax silencioso') em obstrução extrema — sinal de gravidade extrema, não de melhora",
      "Uso de musculatura acessória e tiragem",
      "Taquicardia, taquipneia e, em casos graves, alteração do nível de consciência",
    ],
    diagnostico: [
      "Avaliação clínica de gravidade (fala, frequência respiratória, uso de musculatura acessória, nível de consciência)",
      "Pico de fluxo expiratório (PFE) ou VEF1, quando exequível, para quantificar objetivamente a gravidade da obstrução",
      "Oximetria de pulso e, em casos graves, gasometria arterial para avaliar troca gasosa",
    ],
    examesComplementares: [
      "Pico de fluxo expiratório (PFE) ≤50% do previsto/melhor pessoal indica exacerbação grave",
      "Saturação de oxigênio <90% apesar de oxigenoterapia suplementar sinaliza risco de vida iminente",
      "Gasometria arterial: normocapnia ou hipercapnia em paciente taquipneico é sinal de alarme (esperar-se-ia hipocapnia pela taquipneia; sua ausência sugere exaustão respiratória)",
    ],
    diagnosticoDiferencial: [
      "Exacerbação de DPOC",
      "Anafilaxia com broncoespasmo",
      "Disfunção de cordas vocais (pode mimetizar asma refratária)",
      "Embolia pulmonar",
    ],
    tratamento: [
      "Broncodilatador de curta duração (salbutamol) inalatório repetido/contínuo, associado a brometo de ipratrópio em casos moderados a graves",
      "Corticosteroide sistêmico precoce (via oral ou intravenosa) em todas as exacerbações moderadas a graves, para reduzir a inflamação de base",
      "Oxigenoterapia suplementar para manter saturação adequada",
      "Sulfato de magnésio intravenoso e suporte ventilatório (não invasivo ou invasivo) em casos refratários ao tratamento inicial",
    ],
    complicacoes: [
      "Aguda: insuficiência respiratória aguda, pneumotórax, parada cardiorrespiratória",
      "Crônica: remodelamento das vias aéreas com exacerbações graves recorrentes",
    ],
    redFlags: [
      "Tórax silencioso, confusão mental, bradicardia ou SpO2 <90% apesar de oxigênio suplementar — sinais de exacerbação com risco de vida iminente, exigindo manejo de emergência e consideração imediata de suporte ventilatório",
    ],
    prognostico:
      "Potencialmente fatal se não tratado rapidamente, mas geralmente reversível com tratamento broncodilatador e anti-inflamatório agressivo e precoce; história de exacerbação grave prévia é o principal preditor de risco de nova exacerbação grave.",
    pontosDeProva: [
      "A ausência de sibilos ('tórax silencioso') em paciente com dispneia intensa não indica melhora — reflete obstrução tão grave que não há fluxo aéreo suficiente para gerar o ruído, sendo sinal de gravidade extrema",
      "A normocapnia (não a hipocapnia esperada pela taquipneia) em gasometria de paciente com exacerbação grave é sinal de alarme, sugerindo fadiga da musculatura respiratória e progressão iminente para insuficiência respiratória",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 24 anos, asmática, chega ao pronto-socorro com dispneia intensa após infecção respiratória viral, falando apenas palavras isoladas, com tiragem intercostal importante. SpO2 88% em ar ambiente. Ausculta pulmonar com sibilos difusos.",
      pergunta: "Qual é a classificação de gravidade desta exacerbação e a conduta imediata?",
      raciocinio:
        "A incapacidade de falar frases completas, o uso de musculatura acessória e a hipoxemia significativa classificam esta exacerbação como grave, exigindo tratamento imediato e agressivo, com risco de progressão para insuficiência respiratória se não revertida rapidamente.",
      conduta:
        "Iniciar oxigenoterapia suplementar, broncodilatador de curta duração inalatório repetido associado a brometo de ipratrópio, corticosteroide sistêmico precoce, e reavaliar continuamente sinais de gravidade extrema que indiquem necessidade de suporte ventilatório.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "salbutamol", nome: "Salbutamol" },
      { slug: "prednisona", nome: "Prednisona" },
    ],
    fontes: [
      { tema: "Classificação de gravidade da exacerbação asmática", fonte: "GINA (Global Initiative for Asthma), 2024" },
      { tema: "Tratamento broncodilatador e corticosteroide sistêmico precoce", fonte: "GINA (Global Initiative for Asthma), 2024" },
      { tema: "'Tórax silencioso' e normocapnia como sinais de gravidade", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "bronquiectasia",
    nome: "Bronquiectasia",
    sinonimos: ["Bronquectasia"],
    cid10: "J47",
    especialidade: "Pneumologia",
    etiologia: "Multifatorial",
    resumo: "Dilatação anormal e permanente dos brônquios, causada por ciclo de infecção e inflamação crônica das vias aéreas, com tosse produtiva crônica e exacerbações infecciosas recorrentes.",
    definicao:
      "Doença respiratória crônica caracterizada por dilatação irreversível dos brônquios, com espessamento da parede brônquica e disfunção do clearance mucociliar, associada a infecção e inflamação crônicas das vias aéreas e a exacerbações recorrentes.",
    epidemiologia:
      "Pode ser causada por múltiplas condições subjacentes: sequela pós-infecciosa (a causa mais comum globalmente, incluindo pós-tuberculose), discinesia ciliar primária, fibrose cística, imunodeficiências primárias ou adquiridas, aspergilose broncopulmonar alérgica e doenças do tecido conjuntivo; uma parcela significativa permanece idiopática mesmo após investigação completa.",
    fisiopatologia:
      "Um ciclo vicioso de infecção-inflamação ('vicious cycle hypothesis') se estabelece: a lesão inicial da parede brônquica (infecciosa ou de outra causa) compromete o clearance mucociliar, favorecendo colonização bacteriana persistente, que perpetua a resposta inflamatória neutrofílica e causa dano estrutural progressivo à parede brônquica, com dilatação permanente e perda da arquitetura normal das vias aéreas.",
    classificacao:
      "Classificação radiológica morfológica (tomografia de alta resolução): cilíndrica (mais comum, dilatação uniforme), varicosa (contorno irregular, com áreas alternadas de dilatação e constrição) e cística/sacular (a mais grave, com dilatação em forma de cachos). Classificação etiológica ampla (pós-infecciosa, por imunodeficiência, discinesia ciliar, fibrose cística, aspergilose broncopulmonar alérgica, idiopática, entre outras) orienta a investigação e o tratamento direcionado à causa quando identificável.",
    quadroClinico: [
      "Tosse produtiva crônica, com expectoração purulenta persistente",
      "Exacerbações recorrentes com aumento do volume/purulência do escarro, associadas a piora da dispneia",
      "Hemoptise, podendo ser significativa em alguns casos",
      "Dispneia progressiva conforme a extensão da doença",
    ],
    diagnostico: [
      "Tomografia computadorizada de tórax de alta resolução é o exame de escolha para confirmação, com critérios morfológicos específicos (relação broncoarterial aumentada, falta de afilamento brônquico normal, visualização de brônquios na periferia pulmonar)",
      "Investigação etiológica direcionada conforme o contexto clínico (função ciliar, imunoglobulinas, teste do suor, sorologia para aspergilose, entre outros)",
      "Cultura de escarro para identificação de patógenos colonizantes/infectantes, especialmente Pseudomonas aeruginosa (marcador de pior prognóstico)",
    ],
    examesComplementares: [
      "Tomografia de tórax de alta resolução com critérios morfológicos de bronquiectasia (relação broncoarterial >1, entre outros)",
      "Cultura de escarro direcionada, com atenção especial à identificação de Pseudomonas aeruginosa",
      "Investigação etiológica (imunoglobulinas séricas, teste do suor, função ciliar) conforme suspeita clínica",
      "Espirometria para avaliação funcional e acompanhamento longitudinal",
    ],
    diagnosticoDiferencial: [
      "DPOC (pode coexistir com bronquiectasia)",
      "Fibrose cística (causa específica de bronquiectasia, geralmente com apresentação mais precoce)",
      "Tuberculose ativa (deve ser excluída, especialmente em áreas endêmicas, antes de assumir sequela cicatricial)",
    ],
    tratamento: [
      "Fisioterapia respiratória para higiene brônquica (técnicas de clearance de vias aéreas) como pilar do tratamento crônico",
      "Antibioticoterapia dirigida por cultura de escarro nas exacerbações agudas",
      "Macrolídeo em uso prolongado (terapia supressiva) em pacientes com exacerbações frequentes, para reduzir a frequência de exacerbações",
      "Tratamento da causa de base quando identificável (ex.: reposição de imunoglobulina em imunodeficiência humoral, tratamento de aspergilose broncopulmonar alérgica)",
      "Vacinação (influenza, pneumocócica) como parte do manejo preventivo",
    ],
    complicacoes: [
      "Aguda: exacerbações infecciosas, hemoptise significativa",
      "Crônica: perda progressiva de função pulmonar, infecção crônica por patógenos multirresistentes (especialmente Pseudomonas aeruginosa), cor pulmonale em doença extensa",
    ],
    redFlags: [
      "Hemoptise volumosa ou de repetição — pode indicar erosão de vaso brônquico hipertrofiado e exigir avaliação urgente, incluindo possível embolização arterial brônquica",
    ],
    prognostico:
      "Variável conforme extensão da doença, causa de base e presença de infecção crônica por patógenos multirresistentes; o Bronchiectasis Severity Index é usado para estratificar risco de exacerbação, hospitalização e mortalidade, orientando a intensidade do acompanhamento.",
    pontosDeProva: [
      "A 'hipótese do ciclo vicioso' (infecção → inflamação → dano estrutural → mais infecção) explica por que a bronquiectasia tende a ser progressiva mesmo após o evento inicial ter sido resolvido",
      "A colonização por Pseudomonas aeruginosa é um marcador de pior prognóstico funcional e maior frequência de exacerbações na bronquiectasia",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 56 anos, com histórico de tuberculose pulmonar tratada há 20 anos, relata tosse produtiva crônica com expectoração purulenta diária há anos, com episódios recorrentes de piora associada a febre e aumento do volume de escarro.",
      pergunta: "Qual é a hipótese diagnóstica mais provável e o exame confirmatório de escolha?",
      raciocinio:
        "A tosse produtiva crônica com expectoração purulenta persistente e exacerbações recorrentes, em paciente com histórico de tuberculose pulmonar prévia (causa pós-infecciosa clássica), é altamente sugestiva de bronquiectasia. A tomografia de tórax de alta resolução é o exame de escolha para confirmação.",
      conduta:
        "Solicitar tomografia de tórax de alta resolução para confirmação morfológica, cultura de escarro para identificar patógenos colonizantes (incluindo pesquisa de Pseudomonas aeruginosa), e iniciar fisioterapia respiratória para higiene brônquica como parte do manejo crônico.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Hipótese do ciclo vicioso e fisiopatologia", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Critérios diagnósticos tomográficos e classificação morfológica", fonte: "Diretriz ERS (European Respiratory Society) para Manejo de Bronquiectasia em Adultos, 2017" },
      { tema: "Antibioticoterapia dirigida e macrolídeo em uso prolongado (ainda sem fichas próprias no site com essa indicação)", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "pneumotorax",
    nome: "Pneumotórax",
    sinonimos: ["Colapso pulmonar"],
    cid10: "J93",
    especialidade: "Pneumologia",
    etiologia: "Multifatorial",
    resumo: "Presença de ar no espaço pleural, causando colapso pulmonar parcial ou total, de causa espontânea, traumática ou iatrogênica.",
    definicao:
      "Acúmulo de ar no espaço pleural, entre a pleura visceral e a parietal, resultando em perda da pressão negativa intrapleural normal e colapso do parênquima pulmonar subjacente em grau variável.",
    epidemiologia:
      "O pneumotórax espontâneo primário (sem doença pulmonar de base aparente) acomete predominantemente homens jovens, altos e magros, muitas vezes tabagistas. O pneumotórax espontâneo secundário ocorre em pacientes com doença pulmonar estrutural de base, mais comumente DPOC.",
    fisiopatologia:
      "A entrada de ar no espaço pleural (por ruptura de bolha subpleural no espontâneo primário, por doença pulmonar estrutural no secundário, ou por lesão direta da pleura no traumático/iatrogênico) elimina a pressão negativa que mantém o pulmão expandido, causando colapso pulmonar proporcional ao volume de ar acumulado. No pneumotórax hipertensivo, um mecanismo valvular unidirecional permite entrada progressiva de ar sem saída, aumentando a pressão intrapleural a ponto de deslocar o mediastino e comprometer o retorno venoso.",
    classificacao:
      "Classificado em espontâneo primário (sem doença pulmonar de base identificável), espontâneo secundário (doença pulmonar de base, como DPOC ou fibrose cística), traumático e iatrogênico (por procedimentos como punção venosa central ou biópsia pulmonar). O British Thoracic Society classifica o tamanho pela distância entre a margem pulmonar e a parede torácica na radiografia: pequeno (<2 cm) e grande (≥2 cm) ao nível do hilo. O pneumotórax hipertensivo é uma categoria à parte, definida pela repercussão hemodinâmica, e constitui emergência.",
    quadroClinico: [
      "Dor torácica pleurítica de início súbito",
      "Dispneia de intensidade variável, proporcional ao tamanho do pneumotórax e à reserva pulmonar prévia",
      "Redução ou abolição do murmúrio vesicular e hipertimpanismo à percussão no lado acometido",
      "No pneumotórax hipertensivo: hipotensão, turgência jugular e desvio da traqueia para o lado contralateral",
    ],
    diagnostico: [
      "Radiografia de tórax evidenciando linha da pleura visceral deslocada da parede torácica, sem trama pulmonar periférica a ela",
      "Tomografia de tórax em casos duvidosos ou para melhor caracterização, especialmente de pneumotórax pequenos",
      "O pneumotórax hipertensivo é diagnóstico clínico — não deve aguardar confirmação radiológica para tratamento",
    ],
    examesComplementares: [
      "Radiografia de tórax em inspiração (avalia extensão do colapso e desvio de estruturas mediastinais)",
      "Tomografia de tórax para pneumotórax pequenos ou de difícil caracterização radiográfica",
      "Gasometria arterial em pacientes com repercussão respiratória significativa",
    ],
    diagnosticoDiferencial: [
      "Infarto agudo do miocárdio",
      "Embolia pulmonar",
      "Bolha enfisematosa gigante (pode mimetizar pneumotórax na radiografia)",
    ],
    tratamento: [
      "Observação clínica em pneumotórax pequeno, primário e assintomático ou pouco sintomático",
      "Aspiração por agulha ou drenagem torácica em pneumotórax grande ou sintomático",
      "Descompressão torácica imediata por agulha, seguida de drenagem, no pneumotórax hipertensivo — não deve aguardar confirmação radiológica",
      "Pleurodese ou abordagem cirúrgica (videotoracoscopia) em casos recorrentes ou persistentes",
    ],
    complicacoes: [
      "Aguda: pneumotórax hipertensivo com colapso cardiovascular, insuficiência respiratória",
      "Crônica: recorrência (especialmente após primeiro episódio de pneumotórax espontâneo, sobretudo se tabagismo mantido)",
    ],
    redFlags: [
      "Dor torácica súbita associada a hipotensão, turgência jugular e desvio traqueal — pneumotórax hipertensivo, emergência que exige descompressão imediata por agulha antes mesmo de confirmação radiológica",
    ],
    prognostico:
      "Bom na maioria dos casos com tratamento adequado; a taxa de recorrência após um primeiro episódio de pneumotórax espontâneo é significativa, sendo maior em tabagistas persistentes e naqueles com doença pulmonar de base.",
    pontosDeProva: [
      "O pneumotórax hipertensivo é diagnóstico clínico, e a descompressão por agulha não deve ser postergada para aguardar radiografia de tórax",
      "O perfil clássico do pneumotórax espontâneo primário é o homem jovem, alto e magro, frequentemente tabagista, por ruptura de bolhas subpleurais apicais",
    ],
    casoClinico: {
      vinheta:
        "Homem, 22 anos, alto e magro, tabagista, apresenta dor torácica súbita em pontada à direita e dispneia enquanto jogava futebol. Ausculta com murmúrio vesicular abolido à direita e hipertimpanismo à percussão. Pressão arterial normal, sem desvio de traqueia.",
      pergunta: "Qual é a hipótese diagnóstica mais provável e a conduta inicial?",
      raciocinio:
        "O perfil do paciente (jovem, alto, magro, tabagista) associado a dor torácica súbita e achados de ausência de murmúrio vesicular com hipertimpanismo é clássico de pneumotórax espontâneo primário. A ausência de repercussão hemodinâmica afasta pneumotórax hipertensivo no momento.",
      conduta:
        "Confirmar com radiografia de tórax e avaliar o tamanho do pneumotórax pelos critérios do British Thoracic Society, optando por observação clínica se pequeno e pouco sintomático ou por drenagem/aspiração se grande ou sintomático.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Classificação e critério de tamanho (British Thoracic Society)", fonte: "British Thoracic Society Pleural Disease Guideline, 2010" },
      { tema: "Fisiopatologia e perfil epidemiológico", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "derrame-pleural",
    nome: "Derrame pleural",
    sinonimos: ["Efusão pleural"],
    cid10: "J90",
    especialidade: "Pneumologia",
    etiologia: "Multifatorial",
    resumo: "Acúmulo anormal de líquido no espaço pleural, classificado em transudato ou exsudato conforme os critérios de Light, com amplo espectro de causas subjacentes.",
    definicao:
      "Acúmulo patológico de líquido no espaço pleural, acima da pequena quantidade fisiológica normalmente presente para lubrificação entre as pleuras visceral e parietal, decorrente de desequilíbrio entre produção e reabsorção desse líquido.",
    epidemiologia:
      "Causa extremamente comum de investigação pneumológica; insuficiência cardíaca é a causa mais frequente de transudato, enquanto pneumonia (derrame parapneumônico) e neoplasia estão entre as causas mais comuns de exsudato.",
    fisiopatologia:
      "Transudatos resultam de alterações sistêmicas na pressão hidrostática ou oncótica (ex.: insuficiência cardíaca, cirrose, síndrome nefrótica), sem doença pleural primária — a pleura permanece normal e o líquido reflete um desequilíbrio de pressões. Exsudatos resultam de aumento da permeabilidade capilar pleural ou de obstrução da drenagem linfática, geralmente por processo inflamatório, infeccioso ou neoplásico envolvendo diretamente a pleura ou o parênquima adjacente.",
    classificacao:
      "Classificado por critérios de Light em transudato ou exsudato: é exsudato se pelo menos um dos critérios estiver presente — relação proteína pleural/sérica >0,5, relação LDH pleural/sérica >0,6, ou LDH pleural maior que dois terços do limite superior da normalidade sérica. Essa distinção direciona toda a investigação etiológica subsequente.",
    quadroClinico: [
      "Dispneia, proporcional ao volume do derrame",
      "Dor torácica pleurítica, quando há inflamação pleural associada",
      "Tosse seca",
      "Redução do murmúrio vesicular, macicez à percussão e frêmito toracovocal reduzido no lado acometido",
    ],
    diagnostico: [
      "Radiografia de tórax (obliteração do seio costofrênico, opacidade basal com curva de Damoiseau)",
      "Toracocentese diagnóstica para aplicação dos critérios de Light e direcionamento etiológico",
      "Ultrassonografia torácica para localização e quantificação, especialmente úteis para guiar a toracocentese",
    ],
    examesComplementares: [
      "Critérios de Light no líquido pleural (proteína, LDH, comparados aos valores séricos simultâneos)",
      "Citologia oncótica do líquido pleural quando há suspeita de malignidade",
      "Cultura e Gram do líquido pleural quando há suspeita infecciosa",
      "pH do líquido pleural (valores baixos sugerem processo complicado, como empiema)",
    ],
    diagnosticoDiferencial: [
      "Espessamento pleural sem líquido livre",
      "Consolidação pulmonar sem derrame associado",
    ],
    tratamento: [
      "Tratamento da causa de base (ex.: otimização de terapia para insuficiência cardíaca em transudato cardiogênico)",
      "Toracocentese terapêutica de alívio em derrames volumosos sintomáticos",
      "Drenagem torácica em derrames complicados (empiema, pH baixo, achados de infecção)",
      "Pleurodese em derrames recorrentes e refratários, especialmente de causa maligna",
    ],
    complicacoes: [
      "Aguda: insuficiência respiratória em derrames volumosos de instalação rápida",
      "Crônica: espessamento pleural residual, encarceramento pulmonar em derrames complicados não tratados adequadamente",
    ],
    redFlags: [
      "Derrame pleural associado a febre alta e toxemia — investigar ativamente derrame parapneumônico complicado/empiema, que pode exigir drenagem torácica urgente",
    ],
    prognostico:
      "Depende diretamente da causa de base; transudatos por insuficiência cardíaca respondem bem ao tratamento da doença de base, enquanto derrames malignos tendem a ser recorrentes e associam-se a prognóstico da neoplasia subjacente.",
    pontosDeProva: [
      "Os critérios de Light têm alta sensibilidade para exsudato, mas podem classificar erroneamente alguns transudatos (ex.: em uso de diuréticos) como exsudato — a diferença entre albumina sérica e pleural pode ajudar nesses casos duvidosos",
      "Derrame parapneumônico com pH pleural baixo é sinal de complicação que geralmente exige drenagem, não apenas antibioticoterapia isolada",
    ],
    casoClinico: {
      vinheta:
        "Homem, 68 anos, com insuficiência cardíaca conhecida, apresenta dispneia progressiva e é encontrado com derrame pleural bilateral à radiografia. Toracocentese: proteína pleural/sérica 0,3; LDH pleural/sérica 0,4.",
      pergunta: "Qual é a classificação do derrame pelos critérios de Light e a implicação clínica?",
      raciocinio:
        "Nenhum dos critérios de Light está presente (relações abaixo dos pontos de corte), classificando o derrame como transudato. Associado ao contexto de insuficiência cardíaca e à bilateralidade, é consistente com derrame cardiogênico, não exigindo investigação etiológica extensa adicional na ausência de sinais atípicos.",
      conduta:
        "Otimizar o tratamento da insuficiência cardíaca de base e reavaliar a resposta do derrame ao tratamento clínico, reservando toracocentese terapêutica para alívio sintomático se o derrame for volumoso.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Critérios de Light", fonte: "Light RW et al., critérios diagnósticos clássicos de derrame pleural exsudativo" },
      { tema: "Fisiopatologia transudato vs. exsudato", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "abscesso-pulmonar",
    nome: "Abscesso do pulmão e do mediastino",
    sinonimos: ["Abscesso pulmonar"],
    cid10: "J85",
    especialidade: "Pneumologia",
    etiologia: "Bacteriana",
    resumo: "Cavitação necrótica do parênquima pulmonar preenchida por material purulento, mais comumente causada por aspiração de flora orofaríngea anaeróbia.",
    definicao:
      "Lesão cavitária necrótica do parênquima pulmonar, contendo material purulento, resultante de infecção bacteriana localizada com destruição tecidual, geralmente secundária à aspiração de conteúdo orofaríngeo em pacientes com fatores predisponentes.",
    epidemiologia:
      "Mais comum em pacientes com fatores de risco para aspiração (rebaixamento do nível de consciência, distúrbios de deglutição, alcoolismo, doença periodontal). Também pode ocorrer secundariamente à obstrução brônquica (corpo estranho, neoplasia) ou em contexto de imunossupressão.",
    fisiopatologia:
      "A aspiração de secreção orofaríngea contendo flora polimicrobiana, predominantemente anaeróbia, para segmentos pulmonares dependentes da gravidade (segmentos posteriores dos lobos superiores ou segmentos superiores dos lobos inferiores, conforme a posição do paciente no momento da aspiração) causa pneumonia necrosante que evolui para cavitação com nível hidroaéreo ao longo de 1-2 semanas.",
    classificacao:
      "Classificado em primário (por aspiração, em pulmão previamente normal — a forma mais comum) e secundário (associado a obstrução brônquica, imunossupressão ou disseminação hematogênica). Também classificado por tempo de evolução em agudo (<6 semanas) e crônico (≥6 semanas).",
    quadroClinico: [
      "Febre, tosse produtiva e mal-estar de evolução subaguda (dias a semanas)",
      "Escarro pútrido e fétido, característico do envolvimento anaeróbio",
      "Perda de peso e sintomas constitucionais em apresentações mais arrastadas",
      "Dor torácica pleurítica quando há envolvimento pleural adjacente",
    ],
    diagnostico: [
      "Radiografia ou tomografia de tórax evidenciando cavitação com nível hidroaéreo",
      "Contexto clínico de fatores de risco para aspiração reforça a hipótese diagnóstica",
      "Cultura de escarro ou de material obtido por broncoscopia, quando indicada, para orientar ajuste da antibioticoterapia",
    ],
    examesComplementares: [
      "Tomografia de tórax: cavitação com nível hidroaéreo, geralmente >2 cm",
      "Hemograma com leucocitose e provas inflamatórias elevadas",
      "Broncoscopia em casos atípicos, refratários ao tratamento inicial, ou para excluir obstrução brônquica subjacente",
    ],
    diagnosticoDiferencial: [
      "Neoplasia pulmonar cavitada",
      "Tuberculose pulmonar cavitária",
      "Embolia pulmonar séptica",
      "Granulomatose com poliangiite (cavitações associadas a vasculite)",
    ],
    tratamento: [
      "Antibioticoterapia prolongada com cobertura para anaeróbios (semanas), ajustada conforme resposta clínica e, quando disponível, cultura direcionada",
      "Drenagem postural e fisioterapia respiratória como medidas adjuvantes",
      "Drenagem percutânea ou intervenção cirúrgica reservadas para casos refratários ao tratamento clínico ou com complicações",
    ],
    complicacoes: [
      "Aguda: ruptura para o espaço pleural com empiema, hemoptise",
      "Crônica: abscesso crônico refratário, bronquiectasia localizada residual",
    ],
    redFlags: [
      "Hemoptise volumosa em paciente com abscesso pulmonar conhecido — pode indicar erosão vascular e exigir avaliação urgente",
    ],
    prognostico:
      "Bom na maioria dos casos com antibioticoterapia prolongada adequada, com resolução radiológica podendo levar semanas a meses mesmo após melhora clínica; casos refratários ou complicados podem exigir intervenção invasiva.",
    pontosDeProva: [
      "A localização típica do abscesso por aspiração (segmentos posteriores de lobos superiores ou superiores de lobos inferiores) reflete a posição do paciente no momento da aspiração, um ponto clássico de prova",
      "Escarro pútrido/fétido é sugestivo de infecção por anaeróbios, orientando a escolha de antibioticoterapia com essa cobertura",
    ],
    casoClinico: {
      vinheta:
        "Homem, 54 anos, com histórico de etilismo importante e episódio de rebaixamento do nível de consciência há 3 semanas, apresenta febre, tosse produtiva com escarro fétido e perda de peso. Tomografia de tórax mostra cavitação com nível hidroaéreo em segmento posterior do lobo superior direito.",
      pergunta: "Qual é a hipótese diagnóstica mais provável e o mecanismo fisiopatológico subjacente?",
      raciocinio:
        "O contexto de rebaixamento do nível de consciência por etilismo (fator de risco para aspiração), associado a escarro fétido e cavitação com nível hidroaéreo em localização típica de aspiração, é altamente sugestivo de abscesso pulmonar primário por aspiração de flora orofaríngea anaeróbia.",
      conduta:
        "Iniciar antibioticoterapia prolongada com cobertura para anaeróbios, associar fisioterapia respiratória e drenagem postural, e reservar intervenção invasiva para casos refratários ao tratamento clínico.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "amoxicilina-clavulanato", nome: "Amoxicilina + Clavulanato" },
    ],
    fontes: [
      { tema: "Fisiopatologia e localização típica por aspiração", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Antibioticoterapia com cobertura anaeróbia", fonte: "Sanford Guide to Antimicrobial Therapy" },
    ],
  },
  {
    slug: "sdra",
    nome: "Síndrome do desconforto respiratório agudo",
    sinonimos: ["SDRA", "ARDS"],
    cid10: "J80",
    especialidade: "Pneumologia",
    etiologia: "Multifatorial",
    resumo: "Insuficiência respiratória hipoxêmica aguda por lesão pulmonar difusa e aumento da permeabilidade alveolocapilar, desencadeada por diversas agressões pulmonares diretas ou sistêmicas.",
    definicao:
      "Síndrome de insuficiência respiratória aguda hipoxêmica, definida pela combinação de início agudo (até 1 semana de um insulto conhecido), infiltrados bilaterais à imagem torácica não totalmente explicados por sobrecarga de volume ou insuficiência cardíaca, e hipoxemia com relação PaO2/FiO2 reduzida.",
    epidemiologia:
      "A sepse é a causa mais comum, seguida por pneumonia grave, aspiração de conteúdo gástrico, trauma grave, pancreatite aguda grave e transfusão maciça. Associa-se a alta mortalidade, especialmente nas formas graves.",
    fisiopatologia:
      "Uma agressão pulmonar direta (pneumonia, aspiração) ou indireta/sistêmica (sepse, pancreatite) desencadeia lesão difusa do endotélio capilar e do epitélio alveolar, com aumento da permeabilidade vascular, extravasamento de líquido rico em proteínas para o interstício e alvéolos, formação de membrana hialina e perda de surfactante, resultando em colapso alveolar difuso, redução da complacência pulmonar e hipoxemia refratária por shunt intrapulmonar.",
    classificacao:
      "Definição de Berlim (2012): classificada em leve (PaO2/FiO2 entre 201-300 mmHg), moderada (101-200 mmHg) e grave (≤100 mmHg), todas com PEEP ou CPAP ≥5 cmH2O, início agudo (até 1 semana) e infiltrados bilaterais não totalmente explicados por insuficiência cardíaca ou sobrecarga de volume.",
    quadroClinico: [
      "Dispneia de início agudo, geralmente dentro de horas a poucos dias do insulto desencadeante",
      "Taquipneia e uso de musculatura acessória",
      "Hipoxemia refratária à suplementação de oxigênio em graus variáveis",
      "Estertores difusos à ausculta pulmonar",
    ],
    diagnostico: [
      "Aplicação dos critérios da Definição de Berlim: tempo de início, imagem, origem do edema e grau de hipoxemia (relação PaO2/FiO2)",
      "Radiografia ou tomografia de tórax com infiltrados bilaterais",
      "Exclusão de sobrecarga hídrica/insuficiência cardíaca como explicação predominante para os infiltrados (ecocardiograma quando a diferenciação clínica é incerta)",
    ],
    examesComplementares: [
      "Gasometria arterial com relação PaO2/FiO2 para classificação de gravidade (Berlim)",
      "Radiografia/tomografia de tórax com infiltrados bilaterais",
      "Peptídeo natriurético (BNP/NT-proBNP) e/ou ecocardiograma para auxiliar na exclusão de causa cardiogênica quando há dúvida diagnóstica",
    ],
    diagnosticoDiferencial: [
      "Edema pulmonar cardiogênico",
      "Pneumonia extensa bilateral sem os demais critérios de SDRA",
      "Hemorragia alveolar difusa",
    ],
    tratamento: [
      "Ventilação mecânica protetora, com volume corrente baixo (aproximadamente 6 mL/kg de peso corporal predito) para limitar lesão pulmonar induzida pelo ventilador",
      "Tratamento agressivo da causa de base (ex.: controle do foco infeccioso na sepse)",
      "Posição prona em SDRA moderada a grave, com benefício de sobrevida demonstrado",
      "Estratégia conservadora de fluidos após estabilização hemodinâmica inicial",
    ],
    complicacoes: [
      "Aguda: hipoxemia refratária, barotrauma associado à ventilação mecânica, disfunção de múltiplos órgãos",
      "Crônica: fibrose pulmonar residual, redução persistente da capacidade funcional em sobreviventes",
    ],
    redFlags: [
      "Hipoxemia refratária apesar de altas frações inspiradas de oxigênio em paciente com fatores de risco conhecidos — reconhecer precocemente e iniciar estratégia ventilatória protetora",
    ],
    prognostico:
      "Mortalidade significativa, proporcional à gravidade (leve, moderada, grave pela Definição de Berlim) e à disfunção de órgãos associada; sobreviventes podem apresentar sequelas funcionais e cognitivas a longo prazo.",
    pontosDeProva: [
      "A ventilação mecânica com volume corrente baixo (estratégia protetora) é a intervenção com maior impacto comprovado na redução de mortalidade na SDRA",
      "A posição prona melhora a sobrevida especificamente em SDRA moderada a grave, por otimizar a relação ventilação-perfusão",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 45 anos, internada por pancreatite aguda grave, evolui em 48 horas com dispneia importante e hipoxemia progressiva. Radiografia de tórax mostra infiltrados bilaterais difusos. PaO2/FiO2: 130 mmHg em PEEP de 8 cmH2O. Ecocardiograma sem disfunção ventricular significativa.",
      pergunta: "Qual é a classificação de gravidade desta síndrome pelos critérios de Berlim?",
      raciocinio:
        "O início agudo dentro de uma semana de um insulto conhecido (pancreatite grave), os infiltrados bilaterais não explicados por disfunção cardíaca, e a relação PaO2/FiO2 de 130 mmHg com PEEP ≥5 cmH2O preenchem os critérios de Berlim para SDRA moderada.",
      conduta:
        "Iniciar ventilação mecânica protetora com volume corrente baixo, considerar posição prona dado o grau moderado a grave de hipoxemia, e manter estratégia conservadora de fluidos após estabilização hemodinâmica.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Definição de Berlim e classificação de gravidade", fonte: "ARDS Definition Task Force, JAMA, 2012 (Definição de Berlim)" },
      { tema: "Ventilação protetora e posição prona", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "doencas-pulmonares-intersticiais",
    nome: "Doenças pulmonares intersticiais",
    sinonimos: ["Pneumopatias intersticiais", "DPI"],
    cid10: "J84",
    especialidade: "Pneumologia",
    etiologia: "Multifatorial",
    resumo: "Grupo heterogêneo de doenças que acometem o interstício pulmonar, causando inflamação e/ou fibrose progressiva, com destaque para a fibrose pulmonar idiopática entre as formas de pior prognóstico.",
    definicao:
      "Grupo heterogêneo de mais de 200 doenças que acometem difusamente o parênquima pulmonar (interstício, alvéolos e vias aéreas de pequeno calibre), causando graus variáveis de inflamação e/ou fibrose, com repercussão restritiva na função pulmonar.",
    epidemiologia:
      "A fibrose pulmonar idiopática é a forma mais estudada e uma das de pior prognóstico entre as pneumonias intersticiais idiopáticas, predominando em homens mais velhos, frequentemente ex-tabagistas. Outras formas associam-se a doenças do tecido conjuntivo, exposições ambientais/ocupacionais (pneumonite de hipersensibilidade) ou são de causa não identificada.",
    fisiopatologia:
      "Varia conforme o subtipo: na fibrose pulmonar idiopática, acredita-se que microlesões repetidas do epitélio alveolar levem a reparo aberrante com deposição excessiva de colágeno e fibrose progressiva, mais do que um processo primariamente inflamatório. Em formas associadas a doenças autoimunes ou exposições (pneumonite de hipersensibilidade), um processo inflamatório imunomediado predomina, ao menos nas fases iniciais, sendo potencialmente mais responsivo a imunossupressão.",
    classificacao:
      "Classificação ATS/ERS por categoria etiológica: pneumonias intersticiais idiopáticas (incluindo fibrose pulmonar idiopática, a mais comum e estudada), doenças intersticiais associadas a doenças do tecido conjuntivo, pneumonite de hipersensibilidade (por exposição a antígenos orgânicos), doenças granulomatosas (sarcoidose) e outras formas (pneumoconioses ocupacionais, induzidas por drogas). O padrão radiológico/histológico de pneumonia intersticial usual (UIP), com faveolamento na tomografia de alta resolução, é característico da fibrose pulmonar idiopática.",
    quadroClinico: [
      "Dispneia progressiva aos esforços, de instalação insidiosa ao longo de meses a anos",
      "Tosse seca persistente",
      "Baqueteamento digital em formas fibrosantes avançadas, especialmente na fibrose pulmonar idiopática",
      "Estertores crepitantes finos ('em velcro') nas bases pulmonares à ausculta",
    ],
    diagnostico: [
      "Tomografia de tórax de alta resolução como exame central, com padrões radiológicos específicos orientando a classificação (ex.: padrão UIP com faveolamento na fibrose pulmonar idiopática)",
      "Prova de função pulmonar com padrão restritivo (redução de capacidade pulmonar total e volumes) e redução da capacidade de difusão de monóxido de carbono (DLCO)",
      "Investigação etiológica dirigida (sorologias para doença do tecido conjuntivo, história de exposição ambiental/ocupacional) e, em casos selecionados, biópsia pulmonar",
    ],
    examesComplementares: [
      "Tomografia de tórax de alta resolução (padrão UIP, vidro fosco, faveolamento, conforme o subtipo)",
      "Espirometria e pletismografia: padrão restritivo com redução de capacidade pulmonar total",
      "DLCO reduzida, refletindo comprometimento da troca gasosa",
      "Painel de autoanticorpos quando há suspeita de doença do tecido conjuntivo associada",
    ],
    diagnosticoDiferencial: [
      "Insuficiência cardíaca com edema pulmonar crônico",
      "Infecção pulmonar crônica (tuberculose, micobacterioses atípicas)",
      "Pneumoconioses ocupacionais",
    ],
    tratamento: [
      "Antifibróticos (ex.: pirfenidona, nintedanibe) especificamente na fibrose pulmonar idiopática, retardando a progressão da perda de função pulmonar",
      "Corticosteroide (isoladamente ou associado a imunossupressor) em formas predominantemente inflamatórias, como sarcoidose sintomática, pneumonite de hipersensibilidade e algumas doenças associadas a doença do tecido conjuntivo — importante ressalva: corticosteroide não é indicado como tratamento isolado da fibrose pulmonar idiopática, onde não demonstra benefício e pode ser prejudicial",
      "Afastamento da exposição causal identificada, quando aplicável (ex.: pneumonite de hipersensibilidade ocupacional)",
      "Oxigenoterapia suplementar e reabilitação pulmonar como medidas de suporte; transplante pulmonar em doença avançada refratária",
    ],
    complicacoes: [
      "Aguda: exacerbação aguda da fibrose pulmonar idiopática (piora respiratória rápida e grave, com alta mortalidade)",
      "Crônica: insuficiência respiratória progressiva, hipertensão pulmonar secundária, cor pulmonale",
    ],
    redFlags: [
      "Piora respiratória rápida e significativa em paciente com fibrose pulmonar idiopática conhecida — investigar exacerbação aguda, condição grave com alta mortalidade",
    ],
    prognostico:
      "Muito variável conforme o subtipo: a fibrose pulmonar idiopática tem prognóstico reservado, com sobrevida mediana historicamente limitada após o diagnóstico; formas predominantemente inflamatórias e responsivas a corticosteroide/imunossupressão (ex.: muitas pneumonites de hipersensibilidade, sarcoidose) têm prognóstico geralmente mais favorável.",
    pontosDeProva: [
      "Corticosteroide isolado não é tratamento eficaz para fibrose pulmonar idiopática — diferente de outras doenças pulmonares intersticiais predominantemente inflamatórias, onde é frequentemente a base do tratamento; essa distinção é um ponto de prova clássico",
      "O padrão de pneumonia intersticial usual (UIP) com faveolamento na tomografia de alta resolução é a chave radiológica para reconhecer fibrose pulmonar idiopática, muitas vezes dispensando biópsia em casos típicos",
    ],
    casoClinico: {
      vinheta:
        "Homem, 68 anos, ex-tabagista, relata dispneia progressiva aos esforços e tosse seca há 1 ano. Ausculta com estertores crepitantes finos bibasais. Tomografia de alta resolução mostra faveolamento de predomínio basal e subpleural, sem vidro fosco significativo.",
      pergunta: "Qual é a hipótese diagnóstica mais provável e a implicação terapêutica dessa distinção?",
      raciocinio:
        "O padrão tomográfico de faveolamento basal e subpleural, associado a estertores em velcro e ao perfil epidemiológico (homem idoso, ex-tabagista), é característico do padrão de pneumonia intersticial usual, sugerindo fibrose pulmonar idiopática. Essa distinção é crucial porque, ao contrário de outras DPIs, o corticosteroide isolado não é eficaz e pode ser prejudicial nessa condição.",
      conduta:
        "Confirmar o padrão radiológico e afastar causas secundárias identificáveis (doença do tecido conjuntivo, exposições), e considerar tratamento antifibrótico (pirfenidona ou nintedanibe) em vez de corticosteroide isolado, dado o diagnóstico provável de fibrose pulmonar idiopática.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "prednisona", nome: "Prednisona" },
    ],
    medicamentosNota:
      "O corticosteroide (como a prednisona) é usado nas formas predominantemente inflamatórias das doenças pulmonares intersticiais (ex.: sarcoidose sintomática, pneumonite de hipersensibilidade). Ele NÃO é eficaz como tratamento isolado da fibrose pulmonar idiopática, cujo tratamento específico são os antifibróticos (pirfenidona, nintedanibe), ainda sem ficha própria no site.",
    fontes: [
      { tema: "Classificação ATS/ERS e padrão UIP", fonte: "American Thoracic Society/European Respiratory Society, Classificação das Pneumonias Intersticiais Idiopáticas, 2013" },
      { tema: "Fisiopatologia e tratamento por subtipo", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Ausência de benefício do corticosteroide isolado na fibrose pulmonar idiopática", fonte: "ATS/ERS/JRS/ALAT Clinical Practice Guideline for Idiopathic Pulmonary Fibrosis, 2015" },
    ],
  },
  {
    slug: "insuficiencia-respiratoria",
    nome: "Insuficiência respiratória",
    sinonimos: ["Falência respiratória"],
    cid10: "J96",
    especialidade: "Pneumologia",
    etiologia: "Multifatorial",
    resumo: "Incapacidade do sistema respiratório de manter trocas gasosas adequadas, classificada em hipoxêmica (tipo I) ou hipercápnica (tipo II), decorrente de múltiplas causas pulmonares e extrapulmonares.",
    definicao:
      "Síndrome caracterizada pela incapacidade do sistema respiratório de manter oxigenação e/ou ventilação adequadas, definida por critérios gasométricos de hipoxemia e/ou hipercapnia, podendo ser aguda ou crônica conforme o tempo de instalação e mecanismos compensatórios.",
    epidemiologia:
      "Via final comum de uma ampla variedade de doenças pulmonares (DPOC, SDRA, pneumonia grave) e extrapulmonares (doenças neuromusculares, intoxicações, obesidade grave), sendo causa frequente de admissão em unidades de terapia intensiva.",
    fisiopatologia:
      "A insuficiência respiratória hipoxêmica (tipo I) decorre predominantemente de desequilíbrio ventilação-perfusão ou shunt intrapulmonar, como em pneumonia ou SDRA, com hipoxemia sem retenção significativa de CO2. A insuficiência respiratória hipercápnica (tipo II) decorre de falência da bomba ventilatória — redução do drive respiratório central, doença neuromuscular ou fadiga da musculatura respiratória — resultando em hipoventilação alveolar com retenção de CO2, geralmente acompanhada de hipoxemia secundária.",
    classificacao:
      "Classificada em tipo I (hipoxêmica: PaO2 <60 mmHg em ar ambiente, com PaCO2 normal ou baixa) e tipo II (hipercápnica: PaCO2 >45-50 mmHg, geralmente acompanhada de hipoxemia). Também classificada quanto ao tempo de instalação em aguda (minutos a horas, sem tempo para compensação renal) e crônica (dias a semanas, com compensação metabólica renal já estabelecida, refletida por bicarbonato elevado compensatório).",
    quadroClinico: [
      "Dispneia e taquipneia",
      "Cianose em hipoxemia significativa",
      "Confusão mental e sonolência, especialmente na hipercapnia (narcose por CO2)",
      "Uso de musculatura acessória e, em casos graves, sinais de fadiga respiratória (respiração paradoxal)",
    ],
    diagnostico: [
      "Gasometria arterial é o exame central para confirmação e classificação (tipo I vs. tipo II)",
      "Identificação da causa de base por história clínica, exame físico e exames de imagem torácica direcionados",
      "Avaliação do tempo de instalação (aguda vs. crônica) pelo grau de compensação metabólica renal (bicarbonato)",
    ],
    examesComplementares: [
      "Gasometria arterial: PaO2 <60 mmHg define hipoxemia; PaCO2 >45-50 mmHg define hipercapnia",
      "Oximetria de pulso contínua para monitorização",
      "Radiografia/tomografia de tórax para investigação etiológica",
    ],
    diagnosticoDiferencial: [
      "Ansiedade/hiperventilação (pode mimetizar taquipneia sem verdadeira insuficiência respiratória)",
      "Causas cardíacas de dispneia sem falência respiratória primária",
    ],
    tratamento: [
      "Suplementação de oxigênio para correção da hipoxemia, com cautela em retentores crônicos de CO2 (risco de piora da hipercapnia por supressão do drive hipóxico)",
      "Suporte ventilatório não invasivo ou invasivo conforme gravidade e causa de base",
      "Tratamento específico da causa subjacente (ex.: antibioticoterapia em pneumonia, broncodilatador em exacerbação de DPOC/asma)",
    ],
    complicacoes: [
      "Aguda: parada cardiorrespiratória por hipoxemia ou acidose respiratória grave não corrigidas",
      "Crônica: cor pulmonale por hipoxemia crônica sustentada",
    ],
    redFlags: [
      "Rebaixamento do nível de consciência associado a hipercapnia progressiva — sinal de exaustão respiratória iminente, exigindo consideração imediata de suporte ventilatório",
    ],
    prognostico:
      "Depende diretamente da causa de base e da rapidez do reconhecimento e tratamento; insuficiência respiratória aguda não reconhecida e não tratada tem alto risco de progressão para parada cardiorrespiratória.",
    pontosDeProva: [
      "Em pacientes retentores crônicos de CO2 (ex.: DPOC avançada), a oxigenoterapia deve ser titulada com cautela, pois a hiperoxigenação pode suprimir o drive respiratório hipóxico e piorar a hipercapnia",
      "A distinção entre insuficiência respiratória aguda e crônica pelo grau de compensação metabólica (bicarbonato) tem implicação prática direta na urgência e na abordagem terapêutica",
    ],
    casoClinico: {
      vinheta:
        "Homem, 70 anos, com DPOC grave conhecida, é trazido por confusão mental progressiva e sonolência há 1 dia, após piora da tosse produtiva. Gasometria arterial: pH 7,30; PaCO2 68 mmHg; PaO2 52 mmHg; bicarbonato 30 mEq/L.",
      pergunta: "Qual é a classificação da insuficiência respiratória deste paciente?",
      raciocinio:
        "A PaCO2 elevada com PaO2 reduzida caracteriza insuficiência respiratória tipo II (hipercápnica). O bicarbonato já elevado sugere algum grau de compensação metabólica prévia (componente crônico), mas o pH reduzido indica descompensação aguda sobreposta a uma condição crônica.",
      conduta:
        "Iniciar suporte ventilatório não invasivo, ofertar oxigênio com cautela e titulação cuidadosa pelo risco de agravar a hipercapnia, tratar a causa desencadeante (provável exacerbação infecciosa de DPOC) e monitorizar de perto sinais de exaustão respiratória.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Classificação tipo I/tipo II e critérios gasométricos", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Risco de supressão do drive hipóxico em retentores crônicos de CO2", fonte: "GOLD (Global Initiative for Chronic Obstructive Lung Disease), Relatório 2024" },
    ],
  },
  {
    slug: "bronquiolite-aguda",
    nome: "Bronquiolite aguda",
    sinonimos: ["Bronquiolite viral aguda"],
    cid10: "J21",
    especialidade: "Pneumologia",
    etiologia: "Viral",
    resumo: "Infecção viral aguda das pequenas vias aéreas, mais comumente pelo vírus sincicial respiratório, e principal causa de hospitalização respiratória em lactentes.",
    definicao:
      "Infecção viral aguda das vias aéreas de pequeno calibre (bronquíolos), caracterizada por inflamação, edema e necrose do epitélio, com obstrução ao fluxo aéreo, ocorrendo tipicamente em lactentes menores de 2 anos, com pico entre 2-6 meses de idade.",
    epidemiologia:
      "Principal causa de hospitalização por infecção respiratória em lactentes; o vírus sincicial respiratório (VSR) é o agente mais comum, seguido por rinovírus, parainfluenza, metapneumovírus e adenovírus. Ocorre em surtos sazonais, mais comum no outono/inverno em climas temperados.",
    fisiopatologia:
      "A infecção viral do epitélio bronquiolar causa necrose celular, edema da submucosa e hipersecreção de muco, resultando em obstrução das vias aéreas de pequeno calibre — que, por seu diâmetro reduzido em lactentes, são desproporcionalmente mais sensíveis a esse estreitamento do que em crianças maiores ou adultos, explicando a maior gravidade nessa faixa etária.",
    classificacao:
      "Classificação de gravidade clínica (leve, moderada, grave) baseada em escores clínicos que consideram frequência respiratória, retrações, ausculta e saturação de oxigênio — não há um escore único universalmente padronizado, mas a diretriz da American Academy of Pediatrics orienta a avaliação por esses parâmetros clínicos combinados.",
    quadroClinico: [
      "Pródromo de coriza e tosse leve, seguido por taquipneia, sibilância e/ou estertores",
      "Retrações intercostais/subcostais e batimento de asas nasais em casos moderados a graves",
      "Dificuldade alimentar, pela taquipneia interferindo na sucção",
      "Apneia como manifestação possível em lactentes muito jovens, especialmente prematuros",
    ],
    diagnostico: [
      "Diagnóstico predominantemente clínico, baseado em história e exame físico típicos em lactente na faixa etária característica",
      "Testes virológicos (antígeno ou PCR para VSR e outros vírus respiratórios) não são rotineiramente necessários para o manejo, mas podem auxiliar em decisões de isolamento hospitalar",
      "Radiografia de tórax não é rotineiramente indicada, reservada para apresentações atípicas ou suspeita de complicação",
    ],
    examesComplementares: [
      "Oximetria de pulso para avaliação de hipoxemia",
      "Testes virológicos (PCR/antígeno) quando relevantes para coorte/isolamento hospitalar, não para decisão terapêutica de rotina",
    ],
    diagnosticoDiferencial: [
      "Crise de asma/sibilância recorrente em lactente maior",
      "Pneumonia bacteriana",
      "Aspiração de corpo estranho",
      "Insuficiência cardíaca em lactente com cardiopatia congênita",
    ],
    tratamento: [
      "Suporte: manutenção de hidratação e oxigenação adequadas, aspiração de secreções nasais",
      "Oxigenoterapia suplementar para manter saturação adequada em casos com hipoxemia",
      "Broncodilatadores e corticosteroides NÃO são recomendados de forma rotineira, pela ausência de benefício consistente demonstrado em ensaios clínicos nessa condição",
      "Suporte ventilatório (não invasivo ou invasivo) em casos graves com insuficiência respiratória",
    ],
    complicacoes: [
      "Aguda: apneia (especialmente em lactentes jovens/prematuros), insuficiência respiratória",
      "Crônica: possível associação com maior risco de sibilância recorrente/asma na infância posterior, ainda em debate quanto à causalidade",
    ],
    redFlags: [
      "Apneia, cianose ou sinais de exaustão respiratória em lactente com bronquiolite — indicam gravidade e necessidade de monitorização e suporte respiratório mais intensivos",
    ],
    prognostico:
      "Geralmente autolimitada, com resolução em 1-2 semanas na maioria dos casos; lactentes prematuros, cardiopatas ou com doença pulmonar crônica de base têm maior risco de evolução grave.",
    pontosDeProva: [
      "Broncodilatadores e corticosteroides não são recomendados rotineiramente na bronquiolite viral aguda — diferente do manejo da asma, apesar da sibilância presente em ambas, é uma armadilha clássica de prova",
      "Apneia pode ser a manifestação inicial da bronquiolite em lactentes muito jovens, antes mesmo dos sintomas respiratórios mais evidentes se tornarem proeminentes",
    ],
    casoClinico: {
      vinheta:
        "Lactente, 3 meses, apresenta coriza há 2 dias, evoluindo com tosse, taquipneia e sibilância difusa à ausculta. Saturação de oxigênio: 94% em ar ambiente. Alimenta-se com dificuldade pela taquipneia.",
      pergunta: "Qual é a conduta terapêutica mais apropriada?",
      raciocinio:
        "O quadro clínico (lactente pequeno, pródromo catarral, taquipneia e sibilância) é típico de bronquiolite viral aguda. Apesar da sibilância, broncodilatadores e corticosteroides não têm benefício comprovado nessa condição e não devem ser usados rotineiramente.",
      conduta:
        "Priorizar medidas de suporte: manter hidratação adequada, aspirar secreções nasais, monitorizar saturação de oxigênio e oferecer oxigenoterapia se necessário, evitando broncodilatadores/corticosteroides de rotina.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Epidemiologia e agente etiológico predominante (VSR)", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Recomendação contra uso rotineiro de broncodilatador/corticosteroide", fonte: "American Academy of Pediatrics, Clinical Practice Guideline: The Diagnosis, Management, and Prevention of Bronchiolitis, 2014" },
    ],
  },
  {
    slug: "crupe-epiglotite",
    nome: "Laringite obstrutiva aguda (crupe) e epiglotite",
    sinonimos: ["Crupe", "Laringotraqueobronquite aguda", "Epiglotite aguda"],
    cid10: "J05",
    especialidade: "Pneumologia",
    etiologia: "Multifatorial",
    resumo: "Duas causas de obstrução aguda de via aérea superior em crianças: o crupe (viral, mais comum e geralmente leve) e a epiglotite (bacteriana, rara e potencialmente fatal).",
    definicao:
      "Crupe (laringotraqueobronquite aguda): inflamação viral aguda da laringe e traqueia subglótica, causando estridor característico. Epiglotite aguda: inflamação bacteriana grave e rapidamente progressiva da epiglote e estruturas supraglóticas, constituindo emergência de via aérea, hoje rara em locais com boa cobertura vacinal contra Haemophilus influenzae tipo b.",
    epidemiologia:
      "O crupe é comum em crianças entre 6 meses e 3 anos, com pico no outono/inverno, mais frequentemente causado por vírus parainfluenza. A epiglotite tornou-se rara após a introdução da vacina conjugada contra Haemophilus influenzae tipo b, mas pode ocorrer por esse ou outros patógenos em crianças não vacinadas ou, ocasionalmente, em adultos.",
    fisiopatologia:
      "No crupe, a infecção viral causa edema inflamatório da mucosa subglótica, região mais estreita da via aérea pediátrica, gerando estridor e tosse característica ('tosse de cachorro/metálica'). Na epiglotite, a infecção bacteriana da epiglote e estruturas supraglóticas causa edema rapidamente progressivo que pode obstruir completamente a via aérea superior em poucas horas.",
    classificacao:
      "O crupe é classificado por gravidade clínica pelo Westley Croup Score (baseado em nível de consciência, cianose, estridor, entrada de ar e retrações), com categorias leve, moderada e grave orientando a conduta. A epiglotite não possui um sistema formal de estadiamento de gravidade amplamente usado — é tratada uniformemente como emergência de via aérea desde a suspeita clínica inicial.",
    quadroClinico: [
      "Crupe: tosse metálica ('de cachorro'), rouquidão, estridor inspiratório, geralmente após pródromo catarral, com piora tipicamente noturna",
      "Epiglotite: início abrupto de febre alta, toxemia, disfagia, sialorreia e posição em tripé, com estridor de instalação rápida e progressiva",
      "Ambos podem apresentar retrações e desconforto respiratório variável conforme a gravidade",
    ],
    diagnostico: [
      "Crupe: diagnóstico clínico, baseado no estridor característico e no contexto epidemiológico, sem necessidade de exames de imagem na maioria dos casos",
      "Epiglotite: diagnóstico clínico de alta suspeição (criança toxemiada, sialorreia, posição em tripé) — a inspeção direta da orofaringe deve ser evitada até que a via aérea esteja segura, pelo risco de precipitar obstrução completa",
      "Radiografia cervical lateral pode mostrar o 'sinal do polegar' (epiglote edemaciada) na epiglotite, mas não deve atrasar o manejo da via aérea quando a suspeita clínica é alta",
    ],
    examesComplementares: [
      "Radiografia cervical lateral no crupe (sinal do 'campanário', estreitamento subglótico) — geralmente desnecessária para diagnóstico clínico típico",
      "Radiografia cervical lateral na epiglotite (sinal do 'polegar') — apenas se a criança estiver estável o suficiente e não atrasar o manejo de via aérea",
    ],
    diagnosticoDiferencial: [
      "Aspiração de corpo estranho em via aérea",
      "Traqueíte bacteriana",
      "Abscesso retrofaríngeo/periamigdaliano",
    ],
    tratamento: [
      "Crupe leve a moderado: corticosteroide sistêmico em dose única (reduz gravidade e duração dos sintomas)",
      "Crupe moderado a grave: adrenalina nebulizada associada ao corticosteroide, com observação pelo risco de efeito rebote",
      "Epiglotite: manejo imediato e prioritário da via aérea (idealmente em ambiente controlado, como centro cirúrgico, por equipe experiente), seguido de antibioticoterapia intravenosa",
      "Evitar manipulação da orofaringe/agitar a criança com suspeita de epiglotite antes da via aérea estar seguramente estabelecida",
    ],
    complicacoes: [
      "Crupe: obstrução respiratória grave em casos raros mais intensos",
      "Epiglotite: obstrução completa da via aérea superior, risco de morte se não reconhecida e tratada rapidamente",
    ],
    redFlags: [
      "Criança toxemiada, com sialorreia, posição em tripé e estridor de instalação rápida — suspeitar de epiglotite e manter a criança calma, evitando qualquer manipulação da via aérea/orofaringe fora de ambiente controlado até a via aérea estar segura",
    ],
    prognostico:
      "O crupe geralmente tem evolução benigna e autolimitada, especialmente com tratamento adequado; a epiglotite, quando reconhecida e tratada precocemente com manejo definitivo de via aérea, também tem bom prognóstico, mas o atraso no reconhecimento pode ser fatal.",
    pontosDeProva: [
      "Na suspeita de epiglotite, a inspeção da orofaringe com abaixador de língua deve ser evitada fora de ambiente controlado, pelo risco de precipitar obstrução completa da via aérea por espasmo/edema",
      "A epiglotite tornou-se rara após a vacinação universal contra Haemophilus influenzae tipo b, mas deve permanecer na lista de diagnósticos diferenciais em crianças não vacinadas com quadro toxêmico agudo de via aérea superior",
    ],
    casoClinico: {
      vinheta:
        "Menino, 2 anos, não vacinado, apresenta início súbito de febre alta, recusa alimentar, sialorreia e voz abafada, sentado com o corpo inclinado para frente. Extremamente ansioso e taquipneico.",
      pergunta: "Qual é a hipótese diagnóstica mais provável e a conduta imediata?",
      raciocinio:
        "O início abrupto, febre alta, sialorreia, posição em tripé e ausência de vacinação são altamente sugestivos de epiglotite aguda, uma emergência de via aérea que pode progredir rapidamente para obstrução completa.",
      conduta:
        "Manter a criança calma e em posição confortável, evitar qualquer manipulação da orofaringe ou exames que possam agitá-la, e acionar imediatamente equipe experiente para manejo definitivo da via aérea em ambiente controlado, seguido de antibioticoterapia intravenosa.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "dexametasona", nome: "Dexametasona" },
    ],
    medicamentosSecaoTitulo: "Medicamento para o crupe (leve a moderado)",
    medicamentosNota:
      "A dexametasona em dose única trata o crupe. Ela não trata a epiglotite, cuja prioridade absoluta é a via aérea — a adrenalina nebulizada (crupe moderado a grave) e a ceftriaxona (epiglotite) ainda não têm fichas próprias no site.",
    fontes: [
      { tema: "Fisiopatologia e epidemiologia do crupe e da epiglotite", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Westley Croup Score e tratamento do crupe", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "apneia-obstrutiva-do-sono",
    nome: "Apneia obstrutiva do sono",
    sinonimos: ["AOS", "Distúrbios do sono (apneia)", "SAHOS"],
    cid10: "G47",
    especialidade: "Pneumologia",
    etiologia: "Multifatorial",
    resumo: "Episódios recorrentes de colapso parcial ou total da via aérea superior durante o sono, causando hipoxemia intermitente e fragmentação do sono, fortemente associada à obesidade.",
    definicao:
      "Distúrbio respiratório do sono caracterizado por episódios recorrentes de obstrução completa (apneia) ou parcial (hipopneia) da via aérea superior durante o sono, apesar do esforço respiratório mantido, resultando em dessaturação intermitente de oxigênio e despertares frequentes que fragmentam a arquitetura do sono.",
    epidemiologia:
      "Extremamente prevalente, especialmente subdiagnosticada; a obesidade é o principal fator de risco modificável, junto com anatomia craniofacial predisponente, hipertrofia amigdaliana (mais relevante em crianças) e sexo masculino, embora a prevalência em mulheres aumente após a menopausa.",
    fisiopatologia:
      "Durante o sono, o relaxamento fisiológico da musculatura da via aérea superior (especialmente faríngea) é exagerado ou ocorre sobre uma via aérea anatomicamente predisposta ao colapso (por obesidade, retrognatia, hipertrofia amigdaliana), causando obstrução parcial ou completa recorrente, com hipoxemia intermitente, hipercapnia transitória e microdespertares que fragmentam o sono e ativam o sistema simpático repetidamente.",
    classificacao:
      "Classificada pelo índice de apneia-hipopneia (IAH, número de eventos por hora de sono) segundo a American Academy of Sleep Medicine: leve (5-15 eventos/hora), moderada (15-30 eventos/hora) e grave (>30 eventos/hora), sempre associado a critérios clínicos (sonolência diurna excessiva ou outros sintomas/comorbidades) para caracterizar a síndrome clinicamente relevante.",
    quadroClinico: [
      "Ronco alto e habitual, frequentemente relatado pelo parceiro de cama",
      "Pausas respiratórias observadas durante o sono, seguidas de engasgos/despertares",
      "Sonolência diurna excessiva e fadiga",
      "Cefaleia matinal, dificuldade de concentração e irritabilidade",
    ],
    diagnostico: [
      "Polissonografia (padrão-ouro) para quantificação do índice de apneia-hipopneia e caracterização da gravidade",
      "Poligrafia respiratória domiciliar como alternativa em pacientes com alta probabilidade pré-teste e sem comorbidades complexas",
      "Questionários de rastreamento (ex.: STOP-BANG) para triagem inicial do risco",
    ],
    examesComplementares: [
      "Polissonografia com IAH ≥5 eventos/hora associado a sintomas, ou IAH ≥15 mesmo sem sintomas, confirma o diagnóstico",
      "Oximetria noturna como triagem inicial, menos sensível e específica que a polissonografia completa",
    ],
    diagnosticoDiferencial: [
      "Apneia central do sono (mecanismo distinto, sem esforço respiratório mantido durante os eventos)",
      "Síndrome de hipoventilação por obesidade",
      "Insônia primária (sem os eventos obstrutivos característicos)",
    ],
    tratamento: [
      "Pressão positiva contínua em via aérea (CPAP) como tratamento de primeira linha na maioria dos casos moderados a graves",
      "Perda de peso e mudança de estilo de vida em pacientes com sobrepeso/obesidade associada",
      "Aparelhos intraorais de avanço mandibular em casos leves a moderados selecionados ou como alternativa ao CPAP",
      "Cirurgia de via aérea superior (ex.: adenoamigdalectomia em crianças, procedimentos selecionados em adultos) em casos específicos",
    ],
    complicacoes: [
      "Aguda: acidentes por sonolência diurna excessiva (ex.: acidentes automobilísticos)",
      "Crônica: hipertensão arterial sistêmica, maior risco cardiovascular (incluindo fibrilação atrial e outras arritmias), hipertensão pulmonar em casos graves não tratados",
    ],
    redFlags: [
      "Sonolência diurna excessiva grave com relato de quase-acidentes ao dirigir — orientar sobre o risco e priorizar avaliação e tratamento",
    ],
    prognostico:
      "Bom controle sintomático e redução do risco cardiovascular associado com uso regular e adequado do CPAP; a adesão ao tratamento é o principal determinante do benefício a longo prazo.",
    pontosDeProva: [
      "O diagnóstico definitivo depende do índice de apneia-hipopneia à polissonografia, não apenas da impressão clínica de ronco/sonolência, embora questionários de triagem ajudem a priorizar quem investigar",
      "A apneia obstrutiva do sono é fator de risco independente para hipertensão arterial e fibrilação atrial, relação frequentemente cobrada em prova ao integrar pneumologia e cardiologia",
    ],
    casoClinico: {
      vinheta:
        "Homem, 48 anos, obeso (IMC 34 kg/m²), relata ronco alto habitual e sonolência diurna importante, com episódios relatados pela esposa de pausas respiratórias durante o sono seguidas de engasgos. Hipertensão de difícil controle apesar de três anti-hipertensivos.",
      pergunta: "Qual é a hipótese diagnóstica mais provável e sua relação com a hipertensão de difícil controle?",
      raciocinio:
        "O quadro de ronco alto, pausas respiratórias observadas e sonolência diurna em paciente obeso é altamente sugestivo de apneia obstrutiva do sono, condição associada de forma independente à hipertensão arterial, o que pode explicar a resistência ao tratamento anti-hipertensivo habitual.",
      conduta:
        "Solicitar polissonografia para confirmação diagnóstica e classificação de gravidade pelo índice de apneia-hipopneia, orientar perda de peso, e considerar CPAP como tratamento de primeira linha se confirmada apneia moderada a grave.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Classificação por índice de apneia-hipopneia", fonte: "American Academy of Sleep Medicine, Critérios Diagnósticos de Distúrbios do Sono" },
      { tema: "CPAP como tratamento de primeira linha", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Associação com hipertensão e risco cardiovascular", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "empiema-pleural",
    nome: "Piotórax (empiema pleural)",
    sinonimos: ["Empiema pleural", "Piotórax"],
    cid10: "J86",
    especialidade: "Pneumologia",
    etiologia: "Bacteriana",
    resumo: "Acúmulo de pus no espaço pleural, mais comumente como complicação de pneumonia bacteriana (derrame parapneumônico complicado), exigindo antibioticoterapia associada a drenagem.",
    definicao:
      "Presença de líquido purulento franco no espaço pleural, geralmente representando a fase mais avançada de um derrame parapneumônico complicado, embora também possa resultar de trauma torácico, cirurgia ou extensão de infecção de estrutura adjacente.",
    epidemiologia:
      "Complicação de uma parcela dos casos de pneumonia bacteriana, sendo mais comum em extremos de idade e em pacientes com comorbidades ou atraso no início da antibioticoterapia apropriada.",
    fisiopatologia:
      "Um derrame parapneumônico evolui em três fases: exsudativa (líquido estéril, resposta inicial à inflamação pleural adjacente à pneumonia), fibrinopurulenta (invasão bacteriana do líquido pleural, com deposição de fibrina e formação de loculações) e organização (proliferação de fibroblastos formando uma 'casca' pleural espessa e fixa, o chamado peel pleural). O empiema representa a fase francamente purulenta desse continuum.",
    classificacao:
      "Classificação evolutiva em três estágios (American College of Chest Physicians / classificação clássica): exsudativo simples (não complicado), fibrinopurulento (complicado, com loculações e/ou pH baixo) e de organização (formação de peel pleural espesso). Essa classificação orienta diretamente a necessidade e o tipo de drenagem.",
    quadroClinico: [
      "Febre persistente ou recorrente apesar de antibioticoterapia para pneumonia",
      "Dor torácica pleurítica",
      "Dispneia proporcional ao volume do derrame",
      "Toxemia e mal-estar geral mais pronunciados que em derrame parapneumônico simples",
    ],
    diagnostico: [
      "Toracocentese com aspecto macroscopicamente purulento do líquido confirma empiema",
      "pH pleural baixo (<7,2), glicose baixa e LDH muito elevada no líquido pleural indicam derrame complicado, mesmo sem pus macroscópico evidente",
      "Cultura do líquido pleural para identificação do agente e ajuste da antibioticoterapia",
    ],
    examesComplementares: [
      "Análise do líquido pleural: pH <7,2, glicose <40-60 mg/dL e LDH muito elevada indicam necessidade de drenagem",
      "Tomografia de tórax para avaliação de loculações e planejamento de drenagem",
      "Cultura e Gram do líquido pleural",
    ],
    diagnosticoDiferencial: [
      "Derrame parapneumônico simples (não complicado, sem necessidade de drenagem)",
      "Abscesso pulmonar roto para o espaço pleural",
      "Derrame pleural maligno secundariamente infectado",
    ],
    tratamento: [
      "Antibioticoterapia sistêmica de amplo espectro, ajustada conforme cultura quando disponível",
      "Drenagem torácica é essencial na presença de pus franco, pH baixo ou loculações — antibioticoterapia isolada é insuficiente nessas situações",
      "Fibrinolíticos intrapleurais em casos loculados selecionados, como alternativa a intervenção cirúrgica mais invasiva",
      "Decorticação cirúrgica (videotoracoscopia ou toracotomia) em empiema organizado com peel pleural espesso, refratário a drenagem simples",
    ],
    complicacoes: [
      "Aguda: sepse, insuficiência respiratória por compressão pulmonar extensa",
      "Crônica: encarceramento pulmonar por peel pleural espesso não tratado, fístula broncopleural",
    ],
    redFlags: [
      "Febre persistente e piora clínica apesar de antibioticoterapia adequada para pneumonia — investigar ativamente empiema como complicação, especialmente se houver derrame pleural associado",
    ],
    prognostico:
      "Bom com reconhecimento e drenagem precoces; atraso no diagnóstico e tratamento aumenta o risco de organização pleural (peel), com necessidade de intervenção cirúrgica mais extensa e maior morbidade.",
    pontosDeProva: [
      "A presença de pH pleural baixo já indica necessidade de drenagem, mesmo antes de o líquido se tornar macroscopicamente purulento — não é necessário aguardar pus franco para intervir",
      "Antibioticoterapia isolada, sem drenagem adequada, é insuficiente no empiema estabelecido — a drenagem do espaço pleural é etapa essencial do tratamento, não opcional",
    ],
    casoClinico: {
      vinheta:
        "Homem, 45 anos, em tratamento para pneumonia adquirida na comunidade há 5 dias, mantém febre persistente e piora da dor torácica pleurítica. Radiografia mostra derrame pleural loculado à direita. Toracocentese: líquido turvo, pH 7,05, glicose 30 mg/dL.",
      pergunta: "Qual é a conduta apropriada diante desses achados?",
      raciocinio:
        "A persistência de febre apesar de antibioticoterapia, associada a derrame loculado com pH pleural muito baixo e glicose reduzida, indica derrame parapneumônico complicado/empiema, situação em que a antibioticoterapia isolada é insuficiente.",
      conduta:
        "Indicar drenagem torácica sem demora, ajustar a antibioticoterapia conforme cultura do líquido pleural quando disponível, e considerar fibrinolíticos intrapleurais ou abordagem cirúrgica se houver loculações extensas refratárias à drenagem simples.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Fases evolutivas do derrame parapneumônico/empiema", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Critérios de pH/glicose para indicação de drenagem", fonte: "American College of Chest Physicians, Consenso sobre Manejo de Derrame Parapneumônico" },
      { tema: "Antibioticoterapia de amplo espectro dirigida (ainda sem fichas próprias no site com essa indicação)", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "bronquite-cronica",
    nome: "Bronquite crônica",
    sinonimos: ["Bronquite crônica não especificada"],
    cid10: "J42",
    especialidade: "Pneumologia",
    etiologia: "Multifatorial",
    resumo: "Definição clínica de tosse produtiva na maioria dos dias por pelo menos três meses ao ano, em dois anos consecutivos, sem outra causa identificável — pode ocorrer com ou sem obstrução ao fluxo aéreo confirmada.",
    definicao:
      "Definição clínica (não espirométrica) caracterizada por tosse produtiva presente na maioria dos dias por pelo menos três meses ao ano, durante dois anos consecutivos, na ausência de outra causa identificável para a tosse crônica. É um fenótipo clínico que pode ou não se associar à obstrução ao fluxo aéreo comprovada por espirometria — quando essa obstrução está presente, a condição passa a ser classificada como DPOC.",
    epidemiologia:
      "Fortemente associada ao tabagismo, compartilhando os principais fatores de risco da DPOC; pode ocorrer em tabagistas sem obstrução espirométrica demonstrável (bronquite crônica simples) ou como um dos fenótipos clínicos dentro do espectro da DPOC estabelecida.",
    fisiopatologia:
      "A exposição crônica a irritantes (mais comumente fumaça de cigarro) causa hipertrofia das glândulas submucosas produtoras de muco e hiperplasia de células caliciformes nas vias aéreas, resultando em hipersecreção crônica de muco e tosse produtiva persistente, com ou sem o componente adicional de limitação ao fluxo aéreo que caracteriza a DPOC.",
    classificacao:
      "Não há sistema formal de estadiamento de gravidade específico para a bronquite crônica isolada (diferente da classificação espirométrica GOLD, aplicável quando há obstrução confirmada). A distinção fundamental é clínica: bronquite crônica simples (tosse produtiva crônica sem obstrução espirométrica) versus bronquite crônica como fenótipo de DPOC estabelecida (quando a espirometria confirma VEF1/CVF <0,70 pós-broncodilatador).",
    quadroClinico: [
      "Tosse produtiva crônica, presente na maioria dos dias, com expectoração mucoide ou mucopurulenta",
      "Sintomas mais proeminentes pela manhã em muitos pacientes",
      "Dispneia associada apenas quando há componente obstrutivo (DPOC) sobreposto",
      "Exacerbações com aumento de tosse e expectoração, por vezes com infecção respiratória associada",
    ],
    diagnostico: [
      "Diagnóstico clínico pela definição de tosse produtiva na maioria dos dias por ≥3 meses/ano, em ≥2 anos consecutivos",
      "Espirometria é essencial para determinar se há obstrução associada (definindo a sobreposição com DPOC) ou se a função pulmonar está preservada",
      "Exclusão de outras causas de tosse crônica (refluxo gastroesofágico, gotejamento pós-nasal, uso de IECA, asma) antes de firmar o diagnóstico",
    ],
    examesComplementares: [
      "Espirometria: normal ou obstrutiva (VEF1/CVF <0,70 pós-broncodilatador, caracterizando sobreposição com DPOC)",
      "Radiografia de tórax para exclusão de outras causas de tosse crônica",
    ],
    diagnosticoDiferencial: [
      "DPOC estabelecida (quando há obstrução espirométrica confirmada)",
      "Bronquiectasia",
      "Doença do refluxo gastroesofágico",
      "Gotejamento pós-nasal crônico (rinossinusite crônica)",
      "Tosse induzida por IECA",
    ],
    tratamento: [
      "Cessação do tabagismo, intervenção central independentemente de haver ou não obstrução associada",
      "Tratamento sintomático da tosse e expectoração conforme necessidade",
      "Se espirometria confirmar obstrução (sobreposição com DPOC), seguir o tratamento farmacológico específico da DPOC conforme grupo sintomático/de risco",
      "Investigação e tratamento de causas alternativas/concomitantes de tosse crônica quando identificadas",
    ],
    complicacoes: [
      "Aguda: exacerbações infecciosas com piora de tosse e expectoração",
      "Crônica: progressão para obstrução ao fluxo aéreo estabelecida (DPOC) em uma parcela dos pacientes, especialmente se o tabagismo for mantido",
    ],
    redFlags: [
      "Mudança no padrão da tosse crônica (hemoptise, perda de peso, piora súbita) — investigar diagnósticos alternativos, incluindo neoplasia pulmonar, antes de atribuir à bronquite crônica simples",
    ],
    prognostico:
      "Bom quando não há obstrução ao fluxo aéreo associada e o tabagismo é cessado; a evolução para DPOC estabelecida está diretamente relacionada à manutenção da exposição ao fator causal, principalmente o tabagismo contínuo.",
    pontosDeProva: [
      "Bronquite crônica é uma definição clínica (baseada em tempo e padrão de tosse), enquanto DPOC exige confirmação espirométrica de obstrução — os dois termos não são sinônimos, apesar de frequentemente coexistirem",
      "Um paciente pode ter bronquite crônica (clinicamente definida) com espirometria normal, sem preencher critérios de DPOC",
    ],
    casoClinico: {
      vinheta:
        "Homem, 55 anos, tabagista de 25 maços-ano, relata tosse produtiva matinal quase diária há mais de 3 anos, sem dispneia significativa. Espirometria: VEF1/CVF pós-broncodilatador de 0,78 (normal).",
      pergunta: "Este paciente preenche critérios para DPOC? Por quê?",
      raciocinio:
        "O paciente preenche a definição clínica de bronquite crônica (tosse produtiva na maioria dos dias por mais de 3 meses/ano, por mais de 2 anos). No entanto, a espirometria não mostra obstrução ao fluxo aéreo (relação VEF1/CVF ≥0,70), portanto ele não preenche os critérios diagnósticos de DPOC, que exigem confirmação espirométrica.",
      conduta:
        "Reforçar fortemente a cessação do tabagismo (para reduzir o risco de progressão futura para obstrução estabelecida), tratar sintomaticamente a tosse/expectoração, e manter reavaliação espirométrica periódica dado o risco de desenvolvimento de DPOC se o tabagismo persistir.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Definição clínica e distinção de DPOC", fonte: "GOLD (Global Initiative for Chronic Obstructive Lung Disease), Relatório 2024" },
      { tema: "Fisiopatologia (hipertrofia de glândulas submucosas)", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "cancer-de-pulmao",
    nome: "Neoplasia maligna dos brônquios e dos pulmões",
    sinonimos: ["Câncer de pulmão", "Carcinoma broncogênico"],
    cid10: "C34",
    especialidade: "Pneumologia",
    etiologia: "Neoplásica",
    resumo: "Neoplasia maligna originada do epitélio brônquico ou pulmonar, fortemente associada ao tabagismo, classificada histologicamente em pequenas células e não-pequenas células, com grande impacto na mortalidade por câncer.",
    definicao:
      "Neoplasia maligna originada do epitélio das vias aéreas ou do parênquima pulmonar, principal causa de morte por câncer em homens e mulheres em muitos países, fortemente associada à exposição cumulativa ao tabagismo.",
    epidemiologia:
      "O tabagismo é o principal fator de risco, responsável pela grande maioria dos casos; outros fatores incluem exposição ocupacional (asbesto, radônio) e, em não-tabagistas, mutações genéticas específicas (ex.: EGFR), mais comuns em determinados subgrupos populacionais.",
    fisiopatologia:
      "Exposição cumulativa a carcinógenos (principalmente da fumaça do tabaco) causa acúmulo progressivo de mutações genéticas no epitélio respiratório, levando a transformação maligna. O comportamento biológico e a resposta terapêutica variam substancialmente conforme o subtipo histológico e o perfil molecular do tumor (mutações acionáveis, como EGFR, ALK, ROS1, entre outras, relevantes principalmente no adenocarcinoma).",
    classificacao:
      "Classificação histológica fundamental em carcinoma de pequenas células (menor proporção, biologicamente mais agressivo e frequentemente disseminado ao diagnóstico) e carcinoma de não-pequenas células (maioria dos casos, incluindo adenocarcinoma, carcinoma escamoso e carcinoma de grandes células). O estadiamento segue o sistema TNM (8ª edição, AJCC/UICC), definindo extensão tumoral, comprometimento linfonodal e presença de metástases, orientando diretamente a estratégia terapêutica.",
    quadroClinico: [
      "Tosse persistente ou mudança do padrão de tosse crônica preexistente",
      "Hemoptise",
      "Perda de peso e sintomas constitucionais",
      "Dor torácica, dispneia, rouquidão (por acometimento do nervo laríngeo recorrente) em doença localmente avançada",
      "Síndromes paraneoplásicas em alguns casos (ex.: hipercalcemia no carcinoma escamoso, síndrome de secreção inapropriada de ADH no carcinoma de pequenas células)",
    ],
    diagnostico: [
      "Tomografia de tórax para caracterização inicial da lesão",
      "Confirmação histológica por biópsia (broncoscopia, biópsia transtorácica guiada por imagem, ou outra via conforme localização)",
      "Estadiamento por PET-CT e, quando indicado, avaliação de sistema nervoso central, para definir extensão da doença conforme o sistema TNM",
    ],
    examesComplementares: [
      "Tomografia de tórax com contraste para caracterização da lesão primária e linfonodos",
      "PET-CT para estadiamento metabólico e pesquisa de doença metastática",
      "Biópsia com análise histológica e, no adenocarcinoma, painel molecular (EGFR, ALK, ROS1, entre outros) para orientar terapia-alvo quando aplicável",
      "Ressonância magnética de crânio no estadiamento de casos com potencial doença avançada, pela frequência de metástase cerebral",
    ],
    diagnosticoDiferencial: [
      "Nódulo pulmonar benigno (granuloma, hamartoma)",
      "Metástase pulmonar de outro sítio primário",
      "Pneumonia ou abscesso pulmonar (podem mimetizar massa em alguns casos)",
    ],
    tratamento: [
      "Ressecção cirúrgica em doença localizada de não-pequenas células, quando o paciente é candidato cirúrgico",
      "Quimioterapia, radioterapia, imunoterapia e/ou terapia-alvo (conforme perfil molecular) em doença localmente avançada ou metastática de não-pequenas células",
      "Quimioterapia associada a radioterapia (frequentemente concomitante) no carcinoma de pequenas células, dada sua alta sensibilidade inicial a esses tratamentos apesar do comportamento agressivo",
      "Cuidados paliativos integrados desde estágios iniciais em doença avançada, com foco em controle sintomático e qualidade de vida",
    ],
    complicacoes: [
      "Aguda: hemoptise maciça, síndrome da veia cava superior por compressão tumoral",
      "Crônica: metástases a distância (osso, fígado, sistema nervoso central, glândula adrenal), caquexia neoplásica",
    ],
    redFlags: [
      "Hemoptise maciça ou sinais de síndrome da veia cava superior (edema facial/cervical, distensão venosa cervical) em paciente com massa pulmonar conhecida ou suspeita — emergências oncológicas que exigem avaliação e manejo imediatos",
    ],
    prognostico:
      "Fortemente dependente do estágio ao diagnóstico e do subtipo histológico; a detecção em estágios iniciais associa-se a chance real de cura pela ressecção cirúrgica, enquanto a doença metastática ao diagnóstico (comum, especialmente no carcinoma de pequenas células) tem prognóstico reservado, apesar dos avanços recentes em imunoterapia e terapia-alvo.",
    pontosDeProva: [
      "A distinção histológica entre pequenas células e não-pequenas células é central para a escolha terapêutica — o carcinoma de pequenas células raramente é candidato à ressecção cirúrgica, mesmo em estágios aparentemente localizados, pela sua tendência à disseminação precoce",
      "A pesquisa de mutações acionáveis (EGFR, ALK, ROS1) é particularmente relevante no adenocarcinoma, orientando terapia-alvo com impacto significativo no desfecho de pacientes selecionados",
    ],
    casoClinico: {
      vinheta:
        "Homem, 68 anos, tabagista de 50 maços-ano, relata mudança no padrão de tosse crônica habitual, com episódios recentes de hemoptise e perda de 8 kg em 3 meses. Tomografia de tórax mostra massa espiculada de 4 cm em lobo superior direito, com linfonodomegalia mediastinal.",
      pergunta: "Qual é a próxima etapa mais apropriada na investigação deste paciente?",
      raciocinio:
        "O perfil de risco (tabagismo importante), os sintomas de alarme (mudança do padrão de tosse, hemoptise, perda de peso) e o achado de massa pulmonar espiculada com linfonodomegalia são altamente sugestivos de neoplasia maligna de pulmão, exigindo confirmação histológica antes de definir a estratégia terapêutica.",
      conduta:
        "Obter confirmação histológica por biópsia (broncoscopia ou biópsia guiada por imagem, conforme acessibilidade da lesão), complementar com PET-CT para estadiamento, e, no adenocarcinoma, solicitar painel molecular para orientar potencial terapia-alvo.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Classificação histológica e estadiamento TNM", fonte: "AJCC Cancer Staging Manual, 8ª edição, 2017" },
      { tema: "Fatores de risco e fisiopatologia molecular", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Estratégias terapêuticas por subtipo histológico", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "hiv-aids",
    nome: "Doença pelo HIV",
    sinonimos: ["HIV", "AIDS", "SIDA"],
    cid10: "B20",
    especialidade: "Infectologia",
    etiologia: "Viral",
    resumo: "Infecção crônica pelo vírus da imunodeficiência humana, que destrói progressivamente linfócitos T CD4+, levando a imunossupressão progressiva e risco de infecções oportunistas.",
    definicao:
      "Infecção crônica causada pelo vírus da imunodeficiência humana (HIV), um retrovírus que infecta e destrói progressivamente linfócitos T CD4+, comprometendo a imunidade celular. A síndrome da imunodeficiência adquirida (AIDS) representa o estágio mais avançado da infecção, definido por contagem de CD4 muito baixa e/ou pela presença de doenças definidoras de AIDS.",
    epidemiologia:
      "Transmitido por via sexual, sanguínea (compartilhamento de agulhas, transfusão) e vertical (mãe-filho). A introdução da terapia antirretroviral combinada transformou a infecção pelo HIV em condição crônica controlável, reduzindo drasticamente a mortalidade e a transmissão quando a carga viral está suprimida.",
    fisiopatologia:
      "O HIV infecta células que expressam o receptor CD4 (principalmente linfócitos T auxiliares), utilizando a enzima transcriptase reversa para converter seu RNA em DNA proviral, que se integra ao genoma da célula hospedeira. A replicação viral contínua e a ativação imune crônica levam à depleção progressiva de linfócitos T CD4+, comprometendo a imunidade celular e predispondo a infecções oportunistas e neoplasias associadas conforme o grau de imunossupressão se aprofunda.",
    classificacao:
      "Classificação do CDC por estágios (1, 2, 3/AIDS) combinando contagem de linfócitos T CD4+ (estágio 3 se <200 células/mm³) e presença de condições definidoras de AIDS (infecções oportunistas específicas, certas neoplasias, encefalopatia pelo HIV, síndrome consumptiva), independentemente da contagem de CD4.",
    quadroClinico: [
      "Síndrome retroviral aguda (infecção primária): febre, linfadenopatia, faringite, exantema, mialgia, geralmente 2-4 semanas após exposição",
      "Fase crônica assintomática, podendo durar anos sem tratamento antes de progressão imunológica significativa",
      "Manifestações de imunossupressão avançada: infecções oportunistas (pneumocistose, candidíase esofágica, tuberculose, toxoplasmose cerebral), neoplasias associadas (sarcoma de Kaposi, linfomas)",
      "Síndrome consumptiva (perda de peso involuntária significativa) em doença avançada não tratada",
    ],
    diagnostico: [
      "Teste de triagem combinado de 4ª geração (antígeno p24 + anticorpos anti-HIV), com confirmação por teste complementar (ex.: teste molecular ou Western blot, conforme fluxograma vigente)",
      "Contagem de linfócitos T CD4+ e carga viral (HIV-RNA) para estadiamento e monitorização",
      "Investigação de infecções oportunistas conforme o grau de imunossupressão e apresentação clínica",
    ],
    examesComplementares: [
      "Teste de 4ª geração (Ag/Ac combinado) como triagem inicial",
      "Contagem de linfócitos T CD4+: <200 células/mm³ define estágio 3 (AIDS) pelo CDC",
      "Carga viral (HIV-RNA) para monitorização de resposta à terapia antirretroviral",
    ],
    diagnosticoDiferencial: [
      "Mononucleose infecciosa (mimetiza a síndrome retroviral aguda)",
      "Outras causas de linfadenopatia generalizada",
      "Outras causas de imunodeficiência secundária",
    ],
    tratamento: [
      "Terapia antirretroviral combinada (TARV) para todos os pacientes diagnosticados, independentemente da contagem de CD4, iniciada o mais precocemente possível",
      "Profilaxia de infecções oportunistas específicas conforme o grau de imunossupressão (ex.: profilaxia para pneumocistose em CD4 muito baixo)",
      "Monitorização periódica de carga viral e CD4 para avaliar resposta terapêutica e adesão",
      "Rastreamento e tratamento de comorbidades associadas e de outras infecções sexualmente transmissíveis",
    ],
    complicacoes: [
      "Aguda: síndrome retroviral aguda sintomática, infecções oportunistas agudas em imunossupressão avançada",
      "Crônica: infecções oportunistas recorrentes, neoplasias associadas ao HIV, complicações cardiovasculares e metabólicas relacionadas tanto à infecção crônica quanto a alguns antirretrovirais",
    ],
    redFlags: [
      "Febre persistente, perda de peso significativa e sintomas neurológicos em paciente com HIV e CD4 muito baixo — investigar ativamente infecções oportunistas do sistema nervoso central (ex.: toxoplasmose cerebral, criptococose)",
    ],
    prognostico:
      "Com terapia antirretroviral adequada e boa adesão, a expectativa de vida se aproxima da população geral, com supressão viral sustentada praticamente eliminando o risco de transmissão sexual (conceito de 'indetectável = intransmissível').",
    pontosDeProva: [
      "O conceito 'indetectável = intransmissível' (I=I) resume que a supressão viral sustentada com TARV praticamente elimina o risco de transmissão sexual do HIV, mudança de paradigma na abordagem da doença",
      "A contagem de CD4 <200 células/mm³ define o estágio 3 (AIDS) pelo CDC independentemente de sintomas, mas a presença de uma doença definidora de AIDS também classifica o paciente nesse estágio mesmo com CD4 mais preservado",
    ],
    casoClinico: {
      vinheta:
        "Homem, 29 anos, relata febre, faringite, exantema maculopapular e linfadenopatia cervical há 10 dias, cerca de 3 semanas após relação sexual desprotegida. Teste rápido de HIV convencional (apenas anticorpos) resultou negativo.",
      pergunta: "O teste negativo exclui infecção pelo HIV neste contexto?",
      raciocinio:
        "O quadro é sugestivo de síndrome retroviral aguda, que ocorre na 'janela imunológica' antes da soroconversão completa, quando testes baseados apenas em anticorpos podem ser falso-negativos. Testes de 4ª geração (que detectam também o antígeno p24) ou testes moleculares têm maior sensibilidade nesse período.",
      conduta:
        "Repetir a investigação com teste de 4ª geração (Ag/Ac combinado) ou carga viral, dada a alta suspeita clínica de síndrome retroviral aguda apesar do teste convencional negativo, e orientar sobre reteste em algumas semanas se persistir a suspeita.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Fisiopatologia e ciclo de replicação viral", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Estadiamento CDC e critérios de AIDS", fonte: "CDC, Revised Surveillance Case Definition for HIV Infection, 2014" },
      { tema: "Terapia antirretroviral combinada (ainda sem fichas próprias no site)", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "sifilis-precoce",
    nome: "Sífilis precoce",
    sinonimos: ["Sífilis primária", "Sífilis secundária", "Sífilis latente recente"],
    cid10: "A51",
    especialidade: "Infectologia",
    etiologia: "Bacteriana",
    resumo: "Infecção sexualmente transmissível causada pelo Treponema pallidum, nos estágios iniciais (primária, secundária e latente recente, até 1 ano de infecção).",
    definicao:
      "Infecção sistêmica causada pela bactéria espiroqueta Treponema pallidum, transmitida predominantemente por via sexual, classificada como sífilis precoce quando a infecção ocorreu há menos de 1 ano (englobando as formas primária, secundária e latente recente).",
    epidemiologia:
      "Infecção sexualmente transmissível de distribuição global, com incidência crescente em diversos países nas últimas décadas; a sífilis congênita (transmissão vertical) permanece um problema de saúde pública relevante, reforçando a importância do rastreamento no pré-natal.",
    fisiopatologia:
      "O Treponema pallidum penetra através de mucosas ou pele com solução de continuidade, disseminando-se rapidamente por via linfática e hematogênica. A lesão primária (cancro duro) reflete a resposta imune local no sítio de inoculação; a disseminação sistêmica subsequente causa as manifestações da sífilis secundária, após o que a infecção pode entrar em fase latente (assintomática, detectável apenas por sorologia).",
    classificacao:
      "Sífilis primária (cancro duro no sítio de inoculação, geralmente único, indolor), sífilis secundária (disseminação sistêmica, com exantema, lesões mucocutâneas, linfadenopatia generalizada, geralmente semanas após a lesão primária) e sífilis latente recente (sorologia reagente sem sintomas, infecção adquirida há menos de 1 ano). A sífilis latente tardia (>1 ano ou tempo indeterminado) e a sífilis terciária não fazem parte deste grupo precoce.",
    quadroClinico: [
      "Sífilis primária: cancro duro — úlcera geralmente única, indolor, de bordas endurecidas, no sítio de inoculação (genital, anal ou oral)",
      "Sífilis secundária: exantema maculopapular que tipicamente acomete palmas e plantas, condiloma plano, lesões mucosas, linfadenopatia generalizada, sintomas constitucionais leves",
      "Sífilis latente recente: ausência de sintomas, com sorologia reagente e infecção adquirida há menos de 1 ano",
    ],
    diagnostico: [
      "Combinação de teste treponêmico (ex.: FTA-ABS, TPHA, testes rápidos treponêmicos) e teste não treponêmico (VDRL ou RPR, com titulação)",
      "Titulação do teste não treponêmico é usada tanto para apoio diagnóstico quanto para monitorização de resposta ao tratamento",
      "Pesquisa direta do treponema (campo escuro) na lesão de cancro duro, quando disponível, para diagnóstico precoce antes da soroconversão",
    ],
    examesComplementares: [
      "VDRL/RPR (teste não treponêmico) com titulação — a resposta ao tratamento é definida por queda de pelo menos 4 vezes (2 diluições) no título em alguns meses",
      "Teste treponêmico (FTA-ABS, TPHA ou teste rápido) para confirmação, permanecendo reagente indefinidamente na maioria dos pacientes mesmo após tratamento adequado",
      "Sorologia para HIV e outras infecções sexualmente transmissíveis (coinfecção frequente)",
    ],
    diagnosticoDiferencial: [
      "Herpes genital (cancro geralmente doloroso, diferente da sífilis primária)",
      "Cancroide (úlcera genital dolorosa, por Haemophilus ducreyi)",
      "Outras causas de exantema maculopapular sistêmico (sífilis secundária pode mimetizar diversas erupções)",
    ],
    tratamento: [
      "Penicilina benzatina em dose única intramuscular é o tratamento de escolha para sífilis precoce (primária, secundária e latente recente)",
      "Dessensibilização e uso de penicilina em gestantes alérgicas, dada a superioridade da penicilina no tratamento da sífilis na gestação (evita falha terapêutica com transmissão vertical)",
      "Seguimento sorológico com VDRL/RPR seriado para confirmar resposta adequada ao tratamento",
      "Rastreamento e tratamento de parceiros sexuais",
    ],
    complicacoes: [
      "Aguda: reação de Jarisch-Herxheimer (reação febril autolimitada nas primeiras 24h após o início do tratamento, por lise treponêmica maciça)",
      "Crônica: progressão para sífilis terciária (cardiovascular, neurológica, gomas) se não tratada adequadamente; sífilis congênita se não tratada na gestação",
    ],
    redFlags: [
      "Gestante com sífilis não tratada ou tratada com esquema não penicilínico — risco significativo de transmissão vertical e sífilis congênita, exigindo tratamento com penicilina mesmo em caso de alergia relatada (via dessensibilização)",
    ],
    prognostico:
      "Excelente com tratamento adequado e precoce nos estágios primário e secundário, com cura completa; a progressão para sífilis terciária, hoje rara em contextos com bom acesso a diagnóstico e tratamento, associa-se a complicações cardiovasculares e neurológicas potencialmente graves.",
    pontosDeProva: [
      "A penicilina benzatina é insubstituível no tratamento da sífilis na gestação — mesmo gestantes com alergia relatada devem ser dessensibilizadas e tratadas com penicilina, pois outros esquemas não previnem adequadamente a transmissão vertical",
      "A reação de Jarisch-Herxheimer (febre, mialgia, piora transitória de lesões após o início do tratamento) não é alergia à penicilina, mas resposta inflamatória à lise maciça de treponemas — diferencial importante de prova",
    ],
    casoClinico: {
      vinheta:
        "Homem, 26 anos, procura atendimento por exantema maculopapular em tronco, palmas e plantas, associado a linfadenopatia generalizada, 6 semanas após ter notado uma úlcera genital indolor que resolveu espontaneamente.",
      pergunta: "Qual é a hipótese diagnóstica mais provável e a conduta terapêutica?",
      raciocinio:
        "A história de úlcera genital indolor autolimitada seguida de exantema envolvendo palmas e plantas, com linfadenopatia generalizada, é o quadro clássico de progressão de sífilis primária para secundária.",
      conduta:
        "Confirmar com teste treponêmico e não treponêmico (VDRL/RPR com titulação), tratar com penicilina benzatina em dose única, testar para HIV e outras ISTs, e orientar seguimento sorológico e tratamento de parceiros.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Fisiopatologia e classificação por estágios", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Critérios sorológicos e resposta ao tratamento (queda de titulação)", fonte: "CDC Sexually Transmitted Infections Treatment Guidelines, 2021" },
      { tema: "Penicilina benzatina no tratamento (ainda sem ficha própria no site)", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "hepatite-aguda-b",
    nome: "Hepatite aguda B",
    sinonimos: ["Hepatite B aguda"],
    cid10: "B16",
    especialidade: "Infectologia",
    etiologia: "Viral",
    resumo: "Infecção aguda do fígado pelo vírus da hepatite B, na maioria dos adultos autolimitada, mas com risco de cronificação maior quanto mais precoce a idade de aquisição.",
    definicao:
      "Infecção aguda do fígado causada pelo vírus da hepatite B (HBV), transmitido por via sexual, parenteral (sangue, compartilhamento de agulhas) e vertical (mãe-filho), definida pela detecção de marcadores sorológicos de infecção recente (HBsAg e anti-HBc IgM reagentes).",
    epidemiologia:
      "A probabilidade de cronificação após infecção aguda é inversamente relacionada à idade de aquisição: muito alta em recém-nascidos infectados verticalmente (>90%), e baixa em adultos imunocompetentes infectados (cerca de 5%), que na maioria dos casos eliminam o vírus espontaneamente.",
    fisiopatologia:
      "O HBV infecta hepatócitos, e a lesão hepática decorre principalmente da resposta imune do hospedeiro contra células infectadas (lesão imunomediada, não citopática direta do vírus), explicando por que a intensidade da resposta imune influencia tanto a gravidade da hepatite aguda quanto a chance de clareamento viral espontâneo.",
    classificacao:
      "Classificada quanto à evolução em autolimitada (resolução espontânea com desenvolvimento de anti-HBs, a maioria dos casos em adultos), fulminante (insuficiência hepática aguda grave, rara mas potencialmente fatal) e progressão para cronicidade (definida por persistência de HBsAg por mais de 6 meses). Os marcadores sorológicos (HBsAg, anti-HBc IgM/IgG, HBeAg, anti-HBs) definem a fase da infecção.",
    quadroClinico: [
      "Pode ser assintomática, especialmente em crianças pequenas",
      "Fase prodrômica com mal-estar, náuseas, anorexia e, por vezes, artralgia (fenômeno imunomediado)",
      "Icterícia, colúria e acolia fecal na fase ictérica, quando presente",
      "Dor em hipocôndrio direito e hepatomegalia discreta",
    ],
    diagnostico: [
      "HBsAg reagente confirma infecção pelo vírus B (aguda ou crônica)",
      "Anti-HBc IgM reagente indica infecção recente/aguda, diferenciando de hepatite B crônica com exacerbação",
      "Transaminases (ALT/AST) elevadas, frequentemente de forma acentuada na fase aguda sintomática",
    ],
    examesComplementares: [
      "HBsAg e anti-HBc IgM (confirmação de infecção aguda)",
      "HBeAg (marcador de replicação viral ativa e maior infectividade, quando positivo)",
      "ALT/AST, bilirrubinas e coagulograma (INR) para avaliação de gravidade e triagem de forma fulminante",
    ],
    diagnosticoDiferencial: [
      "Hepatite aguda por outros vírus (A, C, E)",
      "Hepatite medicamentosa/tóxica",
      "Hepatite autoimune",
    ],
    tratamento: [
      "Suporte clínico na maioria dos casos em adultos imunocompetentes, já que a resolução espontânea ocorre na grande maioria — não há indicação rotineira de antiviral específico na hepatite B aguda não complicada",
      "Monitorização de sinais de gravidade (coagulopatia, encefalopatia) para identificação precoce de forma fulminante",
      "Terapia antiviral e avaliação para transplante hepático em casos de hepatite fulminante",
      "Aconselhamento sobre prevenção de transmissão (uso de preservativo, vacinação de contatos suscetíveis)",
    ],
    complicacoes: [
      "Aguda: hepatite fulminante (insuficiência hepática aguda), rara mas grave",
      "Crônica: progressão para hepatite B crônica em uma minoria dos adultos infectados, com risco a longo prazo de cirrose e carcinoma hepatocelular",
    ],
    redFlags: [
      "Alteração do nível de consciência (encefalopatia) ou coagulopatia significativa (INR elevado) em paciente com hepatite aguda B — sinais de hepatite fulminante, exigindo avaliação urgente para transplante hepático",
    ],
    prognostico:
      "Excelente na maioria dos adultos imunocompetentes, com resolução espontânea e desenvolvimento de imunidade (anti-HBs); o risco de cronificação é maior quanto mais precoce a idade de aquisição da infecção.",
    pontosDeProva: [
      "A lesão hepática na hepatite B é predominantemente imunomediada, não por efeito citopático direto do vírus — por isso, paradoxalmente, uma resposta imune mais vigorosa pode causar hepatite mais sintomática, mas também maior chance de clareamento viral",
      "O risco de cronificação após infecção aguda é inversamente proporcional à idade de aquisição — altíssimo em transmissão vertical, baixo em adultos imunocompetentes",
    ],
    casoClinico: {
      vinheta:
        "Homem, 32 anos, sem comorbidades, relata mal-estar, náuseas e icterícia progressiva há 1 semana, sem uso de medicamentos ou álcool relevante. Refere relação sexual desprotegida há cerca de 2 meses. HBsAg reagente, anti-HBc IgM reagente, ALT 1200 U/L.",
      pergunta: "Qual é a conduta apropriada neste momento?",
      raciocinio:
        "O quadro clínico e sorológico confirma hepatite aguda B sintomática. Em adulto imunocompetente sem sinais de gravidade (sem coagulopatia ou alteração do nível de consciência), a conduta é predominantemente de suporte, já que a resolução espontânea é esperada na grande maioria dos casos.",
      conduta:
        "Monitorizar função hepática e coagulograma para identificar precocemente sinais de evolução fulminante, orientar suporte clínico e repouso relativo, e reavaliar sorologia (HBsAg, anti-HBs) após alguns meses para confirmar resolução ou identificar cronificação.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Fisiopatologia imunomediada e risco de cronificação por idade", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Marcadores sorológicos e interpretação", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "hepatite-viral-cronica",
    nome: "Hepatite viral crônica",
    sinonimos: ["Hepatite B crônica", "Hepatite C crônica"],
    cid10: "B18",
    especialidade: "Infectologia",
    etiologia: "Viral",
    resumo: "Infecção persistente pelo vírus da hepatite B ou C por mais de 6 meses, com risco progressivo de fibrose hepática, cirrose e carcinoma hepatocelular ao longo dos anos.",
    definicao:
      "Infecção hepática persistente pelo vírus da hepatite B (definida pela permanência de HBsAg por mais de 6 meses) ou pelo vírus da hepatite C (definida pela persistência de HCV-RNA detectável), associada a inflamação hepática contínua e risco progressivo de fibrose.",
    epidemiologia:
      "A hepatite C tem alta taxa de cronificação após infecção aguda (a maioria dos infectados não elimina o vírus espontaneamente), enquanto a hepatite B cronifica predominantemente quando adquirida em idade precoce (transmissão vertical ou primeira infância). Ambas são causas importantes de cirrose e carcinoma hepatocelular globalmente.",
    fisiopatologia:
      "Na hepatite B crônica, a persistência do vírus e a resposta imune continuamente ativada contra hepatócitos infectados geram lesão hepática recorrente, fibrose progressiva e risco de carcinogênese (inclusive por integração do DNA viral ao genoma do hospedeiro, mecanismo carcinogênico distinto da fibrose). Na hepatite C crônica, a replicação viral persistente sustenta inflamação hepática crônica, com fibrose progressiva ao longo de décadas na ausência de tratamento.",
    classificacao:
      "Classificada pelo grau de atividade necroinflamatória e pelo estágio de fibrose hepática, avaliados por biópsia hepática ou métodos não invasivos (elastografia hepática, escores séricos). Na hepatite B crônica, também se distinguem fases conforme HBeAg, carga viral e transaminases (fase imunotolerante, imunoativa, portador inativo, reativação).",
    quadroClinico: [
      "Frequentemente assintomática por anos, detectada em rastreamento ou exames de rotina",
      "Fadiga inespecífica quando sintomática",
      "Sinais de doença hepática avançada (icterícia, ascite, encefalopatia) apenas em estágios de cirrose já estabelecida",
      "Manifestações extra-hepáticas ocasionais (ex.: crioglobulinemia associada à hepatite C)",
    ],
    diagnostico: [
      "Hepatite B crônica: HBsAg persistente por mais de 6 meses",
      "Hepatite C crônica: HCV-RNA detectável, geralmente após triagem inicial positiva com anti-HCV",
      "Avaliação do grau de fibrose hepática por elastografia hepática, escores não invasivos ou biópsia",
    ],
    examesComplementares: [
      "HBsAg, HBeAg, anti-HBe e carga viral (HBV-DNA) na hepatite B crônica",
      "Anti-HCV como triagem e HCV-RNA para confirmação de infecção ativa na hepatite C",
      "Elastografia hepática (avaliação não invasiva de fibrose) e transaminases seriadas",
    ],
    diagnosticoDiferencial: [
      "Doença hepática gordurosa não alcoólica",
      "Doença hepática alcoólica",
      "Hepatite autoimune",
      "Hemocromatose e outras doenças hepáticas metabólicas",
    ],
    tratamento: [
      "Hepatite B crônica: análogos de nucleos(t)ídeos orais (ex.: tenofovir, entecavir) para supressão viral sustentada em pacientes com indicação de tratamento",
      "Hepatite C crônica: antivirais de ação direta (esquemas orais combinados), com taxas de cura virológica muito altas na maioria dos genótipos",
      "Rastreamento periódico de carcinoma hepatocelular em pacientes com fibrose avançada/cirrose, independentemente do tratamento antiviral",
      "Vacinação contra hepatite A e aconselhamento sobre álcool em todos os portadores de hepatopatia crônica",
    ],
    complicacoes: [
      "Aguda: reativação viral em contexto de imunossupressão (mais relevante na hepatite B)",
      "Crônica: cirrose hepática, carcinoma hepatocelular, hipertensão portal e suas complicações",
    ],
    redFlags: [
      "Início de imunossupressão (ex.: quimioterapia, biológicos) em portador de hepatite B crônica sem profilaxia antiviral adequada — risco de reativação viral grave, por vezes fulminante",
    ],
    prognostico:
      "Variável conforme o grau de fibrose ao diagnóstico e a resposta ao tratamento antiviral; a hepatite C crônica tratada com antivirais de ação direta tem taxas de cura virológica muito altas, enquanto a hepatite B crônica geralmente requer supressão viral prolongada, já que a cura completa (eliminação do HBsAg) é menos frequente.",
    pontosDeProva: [
      "Diferente da hepatite C, onde antivirais de ação direta podem curar a infecção na maioria dos casos, o tratamento da hepatite B crônica geralmente suprime a replicação viral sem eliminar completamente o vírus, exigindo terapia prolongada",
      "Pacientes com hepatite B crônica que iniciarão imunossupressão devem ser avaliados para profilaxia antiviral antes do início do tratamento imunossupressor, pelo risco de reativação viral grave",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 45 anos, assintomática, com HBsAg reagente identificado há mais de 1 ano em exame de rotina, sem tratamento até o momento. Vai iniciar quimioterapia para tratamento oncológico em breve.",
      pergunta: "Qual é a conduta prioritária antes do início da quimioterapia?",
      raciocinio:
        "A persistência de HBsAg por mais de 6 meses confirma hepatite B crônica. O início de quimioterapia imunossupressora em portador de hepatite B crônica sem profilaxia antiviral adequada representa risco significativo de reativação viral, por vezes grave.",
      conduta:
        "Avaliar carga viral e função hepática, iniciar profilaxia/tratamento antiviral (análogo de nucleos(t)ídeo) antes do início da quimioterapia, e manter monitorização durante e após o tratamento oncológico.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Fisiopatologia e diferenças entre hepatite B e C crônicas", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Risco de reativação viral em imunossupressão", fonte: "AASLD Guidance for the Prevention, Diagnosis, and Treatment of Chronic Hepatitis B, 2018" },
      { tema: "Antivirais orais no tratamento (ainda sem fichas próprias no site)", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "chikungunya-zika",
    nome: "Febres virais transmitidas por mosquitos (chikungunya e zika)",
    sinonimos: ["Chikungunya", "Zika", "Arboviroses"],
    cid10: "A92",
    especialidade: "Infectologia",
    etiologia: "Viral",
    resumo: "Arboviroses transmitidas pelo mosquito Aedes aegypti, com febre e exantema semelhantes à dengue, mas com padrões próprios — artralgia intensa e potencialmente crônica no chikungunya, e risco de malformações congênitas no zika.",
    definicao:
      "Grupo de arboviroses transmitidas pelo mosquito Aedes aegypti (o mesmo vetor da dengue), incluindo febre de chikungunya (causada por alfavírus) e febre pelo vírus zika (flavivírus), com sobreposição clínica parcial com a dengue, mas com manifestações e complicações características de cada uma.",
    epidemiologia:
      "Circulam em áreas com infestação pelo Aedes aegypti, frequentemente em cocirculação com a dengue, tornando o diagnóstico diferencial clínico isolado difícil. O vírus zika ganhou destaque epidemiológico pela associação com microcefalia e outras malformações congênitas quando a infecção ocorre na gestação.",
    fisiopatologia:
      "Após a picada do mosquito infectado, o vírus se replica localmente e dissemina-se por via hematogênica. No chikungunya, o vírus tem tropismo por tecido articular e sinovial, explicando a artralgia intensa e por vezes persistente. No zika, o neurotropismo do vírus, especialmente relevante durante a gestação, está implicado na embriopatia e nas malformações do sistema nervoso central fetal.",
    classificacao:
      "Chikungunya classificado por fase: aguda (até 14 dias, com febre e artralgia intensa), subaguda (até 3 meses) e crônica (artralgia persistente além de 3 meses, presente em parcela significativa dos pacientes). O zika é predominantemente classificado pela apresentação (sintomática leve vs. assintomática) e pelo contexto de risco (gestante vs. não gestante), dada a relevância da síndrome congênita do zika.",
    quadroClinico: [
      "Chikungunya: febre alta de início súbito e artralgia intensa e simétrica, tipicamente em pequenas articulações de mãos e pés, podendo ser incapacitante",
      "Zika: quadro geralmente mais leve, com febre baixa, exantema maculopapular pruriginoso, conjuntivite não purulenta e artralgia leve",
      "Ambos podem cursar com cefaleia, mialgia e exantema, sobrepondo-se clinicamente à dengue",
    ],
    diagnostico: [
      "Diagnóstico clínico-epidemiológico em contexto de circulação viral confirmada na região",
      "Confirmação laboratorial por RT-PCR na fase virêmica inicial ou sorologia (IgM) em fase mais tardia",
      "Diagnóstico diferencial com dengue é essencial, já que as três arboviroses podem cocircular e compartilham vetor e apresentação inicial semelhante",
    ],
    examesComplementares: [
      "RT-PCR para detecção viral direta nos primeiros dias de sintomas",
      "Sorologia IgM/IgG específica após a fase virêmica inicial",
      "Hemograma (menos leucopenia/plaquetopenia marcantes que na dengue, de forma geral)",
    ],
    diagnosticoDiferencial: [
      "Dengue (principal diferencial, mesmo vetor, apresentação inicial semelhante)",
      "Outras causas de febre exantemática",
      "Artrite reativa/outras artropatias agudas (no diagnóstico diferencial do chikungunya)",
    ],
    tratamento: [
      "Tratamento sintomático: paracetamol para febre e dor, evitando anti-inflamatórios não esteroidais e ácido acetilsalicílico enquanto a dengue não for excluída, pelo risco de sangramento nessa condição",
      "Hidratação adequada e repouso",
      "Analgesia para artralgia intensa no chikungunya, podendo necessitar de abordagem multimodal em casos de dor persistente/crônica",
      "Acompanhamento obstétrico especializado em gestantes com suspeita/confirmação de zika, pelo risco de síndrome congênita",
    ],
    complicacoes: [
      "Chikungunya: artralgia crônica persistente por meses a anos em parcela significativa dos pacientes",
      "Zika: síndrome congênita do zika (microcefalia e outras malformações do sistema nervoso central) quando a infecção ocorre na gestação; associação descrita com síndrome de Guillain-Barré",
    ],
    redFlags: [
      "Gestante com quadro sugestivo de zika — encaminhar para acompanhamento obstétrico especializado e monitorização fetal, dado o risco de síndrome congênita",
      "Sinais de alarme de dengue (dor abdominal intensa, sangramento, hipotensão) devem ser sempre ativamente pesquisados enquanto esse diagnóstico não for excluído, dada a sobreposição clínica inicial",
    ],
    prognostico:
      "Geralmente autolimitado e de bom prognóstico na fase aguda para ambas as infecções; o chikungunya pode deixar sequela articular crônica significativa, enquanto o principal risco do zika está associado à infecção congênita, não à doença aguda em si no adulto não gestante.",
    pontosDeProva: [
      "A tríade artralgia intensa e simétrica de pequenas articulações, associada a período de febre alta, favorece chikungunya sobre dengue e zika no diagnóstico diferencial clínico",
      "Como na dengue, anti-inflamatórios não esteroidais e AAS devem ser evitados no tratamento sintomático dessas arboviroses enquanto a dengue não for excluída, pelo risco de sangramento",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 34 anos, em área com circulação confirmada de chikungunya, apresenta febre alta de início súbito há 3 dias, associada a dor intensa e simétrica em punhos, mãos e tornozelos, dificultando até mesmo tarefas simples.",
      pergunta: "Qual é a hipótese diagnóstica mais provável e qual classe de analgésico deve ser evitada até exclusão de diagnóstico diferencial importante?",
      raciocinio:
        "O padrão de artralgia intensa e simétrica de pequenas articulações associado a febre alta, em área de circulação confirmada, é altamente sugestivo de chikungunya. Anti-inflamatórios não esteroidais e AAS devem ser evitados até que a dengue seja excluída, pelo risco de sangramento nessa condição.",
      conduta:
        "Tratar sintomaticamente com paracetamol, orientar hidratação e repouso, monitorizar sinais de alarme de dengue enquanto esse diagnóstico não for excluído, e considerar confirmação laboratorial (RT-PCR ou sorologia) conforme o tempo de evolução dos sintomas.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "paracetamol", nome: "Paracetamol" },
    ],
    fontes: [
      { tema: "Fisiopatologia e tropismo viral", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Classificação de fases do chikungunya e síndrome congênita do zika", fonte: "Guia de Vigilância em Saúde, Ministério da Saúde" },
      { tema: "Uso preferencial de paracetamol e restrição a AINEs/AAS (mesma lógica da dengue)", fonte: "Guia de Manejo Clínico da Dengue, Ministério da Saúde" },
    ],
  },
  {
    slug: "leptospirose",
    nome: "Leptospirose",
    sinonimos: ["Doença de Weil (forma grave)"],
    cid10: "A27",
    especialidade: "Infectologia",
    etiologia: "Bacteriana",
    resumo: "Zoonose bacteriana transmitida por contato com água ou solo contaminados pela urina de roedores infectados, variando de quadro febril leve a forma grave (doença de Weil) com icterícia, insuficiência renal e hemorragia.",
    definicao:
      "Zoonose bacteriana causada por espiroquetas do gênero Leptospira, transmitida ao ser humano principalmente pelo contato de pele com solução de continuidade ou mucosas com água ou solo contaminados pela urina de animais infectados, especialmente roedores.",
    epidemiologia:
      "Associada a enchentes e exposição a água contaminada em áreas urbanas com infraestrutura sanitária deficiente, além de exposição ocupacional (agricultores, veterinários, trabalhadores de esgoto). Incidência aumenta sazonalmente em períodos de maior pluviosidade e enchentes.",
    fisiopatologia:
      "As leptospiras penetram através de pele lesada ou mucosas, disseminando-se por via hematogênica e alcançando múltiplos órgãos (rim, fígado, pulmão, sistema nervoso central). A lesão tecidual decorre tanto do efeito direto da bactéria (especialmente sobre o endotélio vascular, explicando o componente hemorrágico) quanto da resposta imune do hospedeiro na fase mais tardia da doença.",
    classificacao:
      "Classificada em forma anictérica (leve a moderada, a maioria dos casos, autolimitada) e forma ictérica grave, também chamada doença de Weil (icterícia, insuficiência renal aguda e diátese hemorrágica), que representa uma minoria dos casos mas com mortalidade significativa se não tratada adequadamente.",
    quadroClinico: [
      "Fase precoce (leptospirêmica): febre de início súbito, mialgia intensa (especialmente em panturrilhas), cefaleia, hiperemia conjuntival sem secreção",
      "Fase tardia (imune), quando presente: icterícia rubínica (tonalidade avermelhada característica), disfunção renal, manifestações hemorrágicas",
      "Sufusão hemorrágica conjuntival e, em casos graves, hemoptise e outros sangramentos",
    ],
    diagnostico: [
      "Suspeita clínico-epidemiológica (exposição a água/solo contaminados, especialmente após enchentes) associada aos achados clínicos",
      "Testes sorológicos (ELISA IgM, teste de aglutinação microscópica — MAT, padrão-ouro mas de resultado mais tardio) para confirmação",
      "PCR em fase precoce, quando disponível, permite detecção antes da soroconversão",
    ],
    examesComplementares: [
      "ELISA IgM como triagem sorológica inicial",
      "Teste de aglutinação microscópica (MAT) como padrão-ouro confirmatório",
      "Função renal (ureia, creatinina), bilirrubinas, transaminases e coagulograma para avaliação de gravidade e triagem da forma ictérica/doença de Weil",
      "CPK elevada, refletindo o acometimento muscular (mialgia intensa característica)",
    ],
    diagnosticoDiferencial: [
      "Dengue e outras arboviroses (sobreposição clínica na fase febril inicial)",
      "Hepatites virais (quando há icterícia predominante)",
      "Malária (em áreas endêmicas sobrepostas)",
    ],
    tratamento: [
      "Doxiciclina oral em casos leves a moderados, ambulatoriais",
      "Penicilina G cristalina ou ceftriaxona intravenosa em casos graves (doença de Weil), com internação hospitalar",
      "Suporte intensivo em casos graves: terapia renal substitutiva quando indicada, suporte hemodinâmico e ventilatório conforme necessidade",
      "Início precoce da antibioticoterapia é importante, idealmente ainda na fase leptospirêmica inicial",
    ],
    complicacoes: [
      "Aguda: insuficiência renal aguda, hemorragia pulmonar maciça (síndrome hemorrágica pulmonar associada à leptospirose), miocardite",
      "Crônica: uveíte pode ocorrer como manifestação tardia em uma parcela dos pacientes, semanas a meses após a infecção aguda",
    ],
    redFlags: [
      "Icterícia associada a oligúria e sangramento em paciente com quadro febril e história de exposição a água contaminada — sinais de doença de Weil, exigindo internação e suporte intensivo imediatos",
    ],
    prognostico:
      "Excelente na forma anictérica leve, geralmente autolimitada; a forma ictérica grave (doença de Weil) tem mortalidade significativa mesmo com tratamento, sendo maior quanto mais tardio o reconhecimento e início do suporte adequado.",
    pontosDeProva: [
      "A mialgia intensa em panturrilhas associada a hiperemia conjuntival sem secreção é um achado clássico e relativamente específico da leptospirose na fase precoce",
      "A doença de Weil (icterícia + insuficiência renal + hemorragia) representa a minoria dos casos, mas concentra praticamente toda a mortalidade da leptospirose",
    ],
    casoClinico: {
      vinheta:
        "Homem, 38 anos, trabalhador de limpeza urbana, relata febre súbita, mialgia intensa em panturrilhas e cefaleia há 4 dias, uma semana após período de enchente na região onde trabalha. Ao exame, hiperemia conjuntival bilateral sem secreção.",
      pergunta: "Qual é a hipótese diagnóstica mais provável e a conduta inicial?",
      raciocinio:
        "A exposição ocupacional a água de enchente, associada à mialgia intensa em panturrilhas e hiperemia conjuntival sem secreção, é um quadro clássico de leptospirose na fase precoce (leptospirêmica).",
      conduta:
        "Iniciar antibioticoterapia precocemente (doxiciclina, se ambulatorial e sem sinais de gravidade), solicitar exames para avaliar função renal, hepática e coagulação, e reavaliar de perto sinais de progressão para a forma ictérica grave (doença de Weil).",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Fisiopatologia e fases da doença", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Formas clínicas e critérios de gravidade", fonte: "Guia de Vigilância em Saúde, Ministério da Saúde" },
      { tema: "Doxiciclina/penicilina/ceftriaxona no tratamento (ainda sem fichas próprias no site com essa indicação)", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "malaria-falciparum",
    nome: "Malária por Plasmodium falciparum",
    sinonimos: ["Malária falciparum", "Malária grave"],
    cid10: "B50",
    especialidade: "Infectologia",
    etiologia: "Parasitária",
    resumo: "Infecção parasitária transmitida pelo mosquito Anopheles, causada pelo Plasmodium falciparum — a espécie associada às formas mais graves de malária, com risco de complicações potencialmente fatais.",
    definicao:
      "Doença parasitária causada pelo protozoário Plasmodium falciparum, transmitido pela picada de fêmeas infectadas do mosquito Anopheles, caracterizada por infecção e destruição de hemácias, sendo a espécie de Plasmodium associada ao maior risco de malária grave/complicada.",
    epidemiologia:
      "Endêmica em regiões tropicais, incluindo a região amazônica no Brasil, onde coexiste com outras espécies (P. vivax, mais comum localmente, mas com P. falciparum concentrando a maior parte da gravidade e mortalidade).",
    fisiopatologia:
      "O Plasmodium falciparum infecta hemácias de todas as idades (diferente de outras espécies, que preferem hemácias jovens ou maduras especificamente), permitindo parasitemias muito mais elevadas. A citoaderência de hemácias infectadas ao endotélio vascular (sequestro microvascular), característica dessa espécie, obstrui a microcirculação em órgãos como cérebro, rim e placenta, sendo o mecanismo central das formas graves (malária cerebral, insuficiência renal, malária na gestação).",
    classificacao:
      "Classificada em malária não complicada e malária grave/complicada, conforme critérios da Organização Mundial da Saúde: parasitemia elevada (>5% das hemácias parasitadas), malária cerebral (rebaixamento do nível de consciência/coma), insuficiência renal aguda, edema pulmonar/SDRA, acidose metabólica grave, hipoglicemia, anemia grave e sangramento espontâneo, entre outros critérios — a presença de qualquer um já define a forma grave.",
    quadroClinico: [
      "Febre em picos, associada a calafrios e sudorese, podendo ter padrão cíclico menos regular no P. falciparum que em outras espécies",
      "Cefaleia, mialgia e mal-estar geral",
      "Esplenomegalia e, por vezes, hepatomegalia discreta",
      "Em malária grave: alteração do nível de consciência, dispneia, oligúria, icterícia, sangramento",
    ],
    diagnostico: [
      "Gota espessa e esfregaço sanguíneo (padrão-ouro) para identificação da espécie e quantificação da parasitemia",
      "Testes rápidos de detecção de antígeno como alternativa quando a microscopia não está prontamente disponível",
      "Classificação em malária não complicada ou grave conforme critérios da OMS, orientando a via de tratamento (oral vs. parenteral)",
    ],
    examesComplementares: [
      "Gota espessa/esfregaço sanguíneo: identificação de espécie e percentual de parasitemia",
      "Glicemia (hipoglicemia é achado de gravidade e complicação do próprio tratamento com quinina)",
      "Função renal, gasometria e lactato para avaliação de disfunção orgânica em suspeita de malária grave",
    ],
    diagnosticoDiferencial: [
      "Dengue e outras arboviroses",
      "Febre tifoide",
      "Sepse de outro foco",
    ],
    tratamento: [
      "Terapia combinada baseada em artemisinina (ACT) como tratamento de primeira linha para malária não complicada por P. falciparum",
      "Artesunato intravenoso para malária grave/complicada, com internação e suporte intensivo conforme disfunções orgânicas presentes",
      "Correção de complicações associadas (hipoglicemia, anemia grave, insuficiência renal) conforme necessário",
      "Monitorização de parasitemia seriada para avaliar resposta terapêutica",
    ],
    complicacoes: [
      "Aguda: malária cerebral, insuficiência renal aguda, edema pulmonar/SDRA, hipoglicemia grave, coagulação intravascular disseminada",
      "Crônica: anemia persistente pós-malária, recorrências em áreas de reexposição",
    ],
    redFlags: [
      "Febre associada a rebaixamento do nível de consciência em paciente com exposição a área endêmica — malária cerebral por P. falciparum é diagnóstico diferencial obrigatório e emergência médica",
    ],
    prognostico:
      "Excelente na malária não complicada com tratamento adequado; a malária grave tem mortalidade significativa mesmo com tratamento, sendo a rapidez do reconhecimento e início da terapia parenteral determinante para o desfecho.",
    pontosDeProva: [
      "A citoaderência microvascular de hemácias infectadas por P. falciparum ao endotélio é o mecanismo central das formas graves, incluindo a malária cerebral — mecanismo específico dessa espécie, diferente de outras espécies de Plasmodium",
      "Qualquer critério de gravidade da OMS (não apenas alteração de consciência) já classifica o caso como malária grave, exigindo tratamento parenteral com artesunato",
    ],
    casoClinico: {
      vinheta:
        "Homem, 40 anos, retornando de viagem à região amazônica há 10 dias, apresenta febre alta, calafrios e confusão mental progressiva nas últimas horas. Gota espessa confirma Plasmodium falciparum, com parasitemia de 8%.",
      pergunta: "Este caso é classificado como malária não complicada ou grave, e qual a implicação terapêutica?",
      raciocinio:
        "A parasitemia de 8% (acima de 5%) e a alteração do nível de consciência (sugestiva de malária cerebral) já preenchem critérios de malária grave pela OMS, independentemente de outros achados, exigindo tratamento parenteral imediato.",
      conduta:
        "Iniciar artesunato intravenoso sem demora, internar em unidade com suporte intensivo disponível, e monitorizar de perto glicemia, função renal e nível de consciência durante o tratamento.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Fisiopatologia da citoaderência microvascular", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Critérios de malária grave e tratamento com artesunato", fonte: "World Health Organization, Guidelines for the Treatment of Malaria, 3ª ed., 2015" },
      { tema: "Terapia combinada com artemisinina (ainda sem ficha própria no site)", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "infeccao-meningococica",
    nome: "Infecção meningocócica",
    sinonimos: ["Meningococcemia", "Doença meningocócica"],
    cid10: "A39",
    especialidade: "Infectologia",
    etiologia: "Bacteriana",
    resumo: "Infecção invasiva causada pela Neisseria meningitidis, podendo se manifestar como meningite, meningococcemia (sepse) ou ambas, com potencial de evolução fulminante em poucas horas.",
    definicao:
      "Infecção invasiva causada pela bactéria Neisseria meningitidis (meningococo), que pode se manifestar como meningite meningocócica, meningococcemia (sepse meningocócica, com ou sem meningite associada) ou a combinação de ambas, com potencial de progressão extremamente rápida para choque séptico e óbito.",
    epidemiologia:
      "Ocorre em surtos e casos esporádicos, com maior incidência em crianças pequenas e adolescentes/adultos jovens; a transmissão ocorre por gotículas respiratórias, e portadores assintomáticos de orofaringe são reservatório importante para transmissão comunitária.",
    fisiopatologia:
      "A bactéria coloniza a nasofaringe e, em uma minoria dos colonizados, invade a corrente sanguínea, podendo alcançar as meninges (meningite) e/ou causar bacteremia maciça com liberação de endotoxina, desencadeando resposta inflamatória sistêmica intensa, coagulação intravascular disseminada e lesão endotelial difusa — a base fisiopatológica das petéquias/púrpura e do choque séptico fulminante.",
    classificacao:
      "Classificada por apresentação clínica: meningite meningocócica isolada, meningococcemia sem meningite, e a forma combinada (a mais comum). A síndrome de Waterhouse-Friderichsen (meningococcemia fulminante com hemorragia adrenal bilateral e choque refratário) representa a forma mais grave e rapidamente fatal.",
    quadroClinico: [
      "Febre de início súbito, cefaleia intensa, mal-estar",
      "Exantema petequial/purpúrico, característico e de progressão rápida na meningococcemia",
      "Sinais meníngeos (rigidez de nuca, sinais de Kernig/Brudzinski) quando há meningite associada",
      "Sinais de choque séptico (hipotensão, extremidades frias, tempo de enchimento capilar prolongado) em casos fulminantes",
    ],
    diagnostico: [
      "Alta suspeição clínica em paciente com febre e exantema petequial/purpúrico de evolução rápida — o tratamento antibiótico empírico não deve ser postergado para confirmação laboratorial",
      "Hemocultura e cultura de líquido cefalorraquidiano (quando há indicação de punção lombar) para confirmação e identificação do agente",
      "PCR para Neisseria meningitidis quando disponível, especialmente útil após início de antibioticoterapia",
    ],
    examesComplementares: [
      "Hemocultura antes do início do antibiótico, sem atrasar seu início diante de alta suspeita clínica",
      "Análise do líquido cefalorraquidiano quando não há contraindicação para punção lombar",
      "Coagulograma e função renal para avaliação de coagulação intravascular disseminada e disfunção orgânica",
    ],
    diagnosticoDiferencial: [
      "Outras causas de meningite bacteriana",
      "Outras causas de púrpura febril (incluindo causas não infecciosas, menos prováveis no contexto agudo febril)",
      "Sepse por outros agentes",
    ],
    tratamento: [
      "Antibioticoterapia empírica imediata (ceftriaxona ou penicilina cristalina) diante de suspeita clínica, sem aguardar confirmação laboratorial",
      "Suporte hemodinâmico agressivo (fluidos, vasopressores conforme necessidade) em meningococcemia com choque",
      "Isolamento respiratório (gotículas) nas primeiras 24 horas de antibioticoterapia eficaz",
      "Quimioprofilaxia para contatos próximos, para reduzir o risco de casos secundários",
    ],
    complicacoes: [
      "Aguda: choque séptico refratário, coagulação intravascular disseminada, síndrome de Waterhouse-Friderichsen, óbito em horas se não tratada",
      "Crônica: sequelas neurológicas quando há meningite associada, necrose de extremidades (amputações) em casos graves de púrpura fulminante",
    ],
    redFlags: [
      "Febre associada a exantema petequial/purpúrico de progressão rápida — emergência médica absoluta, exigindo antibioticoterapia empírica imediata sem aguardar confirmação diagnóstica",
    ],
    prognostico:
      "Potencialmente fatal em poucas horas se não tratada; mesmo com tratamento adequado, a mortalidade da forma fulminante (síndrome de Waterhouse-Friderichsen) permanece significativa, reforçando a importância do reconhecimento precocíssimo.",
    pontosDeProva: [
      "Diante de suspeita clínica de doença meningocócica com exantema petequial/purpúrico, a antibioticoterapia empírica deve ser iniciada imediatamente, mesmo antes de hemocultura ou punção lombar",
      "A síndrome de Waterhouse-Friderichsen (hemorragia adrenal bilateral com choque refratário) é a manifestação mais temida da meningococcemia fulminante",
    ],
    casoClinico: {
      vinheta:
        "Adolescente, 16 anos, previamente hígido, apresenta febre alta de início há 6 horas, cefaleia intensa e, na última hora, surgimento de lesões petequiais que rapidamente evoluem para equimoses em tronco e membros. Extremidades frias, tempo de enchimento capilar de 4 segundos.",
      pergunta: "Qual é a conduta imediata diante deste quadro?",
      raciocinio:
        "A combinação de febre de início súbito, exantema petequial/purpúrico de progressão rápida e sinais de choque (extremidades frias, enchimento capilar prolongado) é altamente sugestiva de meningococcemia fulminante, uma emergência com risco de óbito em horas.",
      conduta:
        "Iniciar antibioticoterapia empírica imediata (ceftriaxona) sem aguardar confirmação laboratorial, iniciar ressuscitação hemodinâmica agressiva, colher hemocultura antes ou concomitantemente ao antibiótico sem atrasar seu início, e providenciar isolamento respiratório e quimioprofilaxia para contatos próximos.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Fisiopatologia e síndrome de Waterhouse-Friderichsen", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Urgência da antibioticoterapia empírica e quimioprofilaxia de contatos", fonte: "Guia de Vigilância em Saúde, Ministério da Saúde" },
      { tema: "Ceftriaxona/penicilina cristalina no tratamento (ainda sem fichas próprias no site)", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "meningite-bacteriana",
    nome: "Meningite bacteriana",
    sinonimos: ["Meningite piogênica"],
    cid10: "G00",
    especialidade: "Infectologia",
    etiologia: "Bacteriana",
    resumo: "Infecção bacteriana aguda das meninges, emergência neurológica com agentes etiológicos que variam conforme a faixa etária, exigindo antibioticoterapia empírica imediata.",
    definicao:
      "Infecção bacteriana aguda das meninges (membranas que revestem o cérebro e a medula espinhal) e do líquido cefalorraquidiano, caracterizada por resposta inflamatória purulenta, constituindo emergência neurológica com risco de sequelas graves e morte se o tratamento for postergado.",
    epidemiologia:
      "Os agentes etiológicos mais comuns variam conforme a faixa etária: Streptococcus pneumoniae e Neisseria meningitidis predominam em crianças maiores, adolescentes e adultos; Streptococcus agalactiae (grupo B) e Escherichia coli são mais relevantes em neonatos; Listeria monocytogenes é mais relevante em neonatos, idosos e imunossuprimidos.",
    fisiopatologia:
      "Bactérias alcançam o espaço subaracnóideo por disseminação hematogênica (a partir de colonização de nasofaringe ou outro foco) ou, mais raramente, por contiguidade (sinusite, otite, trauma craniano). A resposta inflamatória à presença bacteriana e seus produtos no líquido cefalorraquidiano — mais do que a bactéria em si — é responsável por grande parte da lesão neurológica, incluindo edema cerebral, aumento da pressão intracraniana e comprometimento do fluxo sanguíneo cerebral.",
    classificacao:
      "Classificação predominantemente etiológica por faixa etária (neonatal, pediátrica, adulto, idoso/imunossuprimido), já que o agente mais provável direciona a escolha do esquema antibiótico empírico inicial antes da identificação do patógeno.",
    quadroClinico: [
      "Febre, cefaleia intensa e rigidez de nuca (tríade clássica, nem sempre completa, especialmente em extremos de idade)",
      "Alteração do nível de consciência, de leve confusão a coma",
      "Sinais de irritação meníngea (sinais de Kernig e Brudzinski) ao exame físico",
      "Em neonatos e idosos, apresentação frequentemente atípica, com sintomas mais inespecíficos",
    ],
    diagnostico: [
      "Punção lombar com análise do líquido cefalorraquidiano é o exame central para diagnóstico e identificação do agente",
      "Padrão típico de meningite bacteriana no LCR: pleocitose com predomínio de neutrófilos (tipicamente >1000 células/mm³), proteína elevada (>100 mg/dL) e glicose reduzida (glicorraquia/glicemia <0,4)",
      "Tomografia de crânio antes da punção lombar apenas em situações específicas (sinais de hipertensão intracraniana, déficit focal, imunossupressão, convulsão recente), para não atrasar o início do antibiótico nos demais casos",
    ],
    examesComplementares: [
      "Líquido cefalorraquidiano: celularidade, proteína, glicose, Gram e cultura",
      "Hemoculturas (frequentemente positivas, especialmente antes do início do antibiótico)",
      "PCR para patógenos específicos quando disponível, particularmente útil após antibioticoterapia já iniciada",
    ],
    diagnosticoDiferencial: [
      "Meningite viral (líquido cefalorraquidiano com predomínio linfocitário, glicose geralmente normal)",
      "Meningite tuberculosa/fúngica (evolução mais insidiosa, perfil liquórico distinto)",
      "Hemorragia subaracnóidea (pode mimetizar cefaleia intensa súbita com rigidez de nuca)",
    ],
    tratamento: [
      "Antibioticoterapia empírica intravenosa imediata, sem aguardar resultado da punção lombar quando há atraso previsto para realizá-la, guiada pelo perfil etiológico esperado por faixa etária",
      "Corticosteroide adjuvante (dexametasona), idealmente administrado antes ou junto da primeira dose de antibiótico, reduz complicações neurológicas em meningite pneumocócica",
      "Ajuste do esquema antibiótico conforme identificação do agente e perfil de sensibilidade",
      "Suporte de suas complicações (manejo de hipertensão intracraniana, convulsões, quando presentes)",
    ],
    complicacoes: [
      "Aguda: edema cerebral com hipertensão intracraniana, convulsões, choque séptico",
      "Crônica: perda auditiva neurossensorial, déficits cognitivos e neurológicos focais, hidrocefalia",
    ],
    redFlags: [
      "Febre, cefaleia e rigidez de nuca associadas a rebaixamento do nível de consciência ou déficit focal — a antibioticoterapia empírica não deve ser postergada para realização de exames de imagem ou mesmo da punção lombar, se houver atraso previsto",
    ],
    prognostico:
      "Mortalidade e risco de sequelas neurológicas significativos mesmo com tratamento adequado, sendo o tempo até o início da antibioticoterapia o principal determinante modificável do desfecho — cada hora de atraso piora o prognóstico.",
    pontosDeProva: [
      "O padrão liquórico de meningite bacteriana (neutrofílico, proteína alta, glicose baixa) contrasta com o padrão viral (linfocitário, glicose normal), sendo distinção clássica de prova",
      "A dexametasona, quando indicada, deve ser administrada antes ou junto com a primeira dose de antibiótico — não depois —, pois seu benefício em reduzir complicações neurológicas está ligado ao momento da administração em relação à lise bacteriana",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 24 anos, previamente hígida, apresenta febre alta, cefaleia intensa e rigidez de nuca há 12 horas, com confusão mental progressiva nas últimas 2 horas. Exame neurológico sem déficit focal.",
      pergunta: "Qual é a conduta diagnóstica e terapêutica imediata?",
      raciocinio:
        "A tríade febre, cefaleia intensa e rigidez de nuca associada a rebaixamento do nível de consciência é altamente sugestiva de meningite bacteriana aguda, uma emergência neurológica. A ausência de déficit focal e de outros sinais de hipertensão intracraniana permite punção lombar imediata sem necessidade de tomografia prévia.",
      conduta:
        "Colher hemoculturas e realizar punção lombar imediatamente, iniciar antibioticoterapia empírica intravenosa sem demora (associada a dexametasona antes ou junto da primeira dose), e ajustar o esquema conforme resultado do Gram/cultura do líquido cefalorraquidiano.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "dexametasona", nome: "Dexametasona" },
    ],
    medicamentosSecaoTitulo: "Medicamento adjuvante (não substitui o antibiótico)",
    medicamentosNota:
      "A dexametasona é adjuvante — administrada antes ou junto da primeira dose de antibiótico para reduzir complicações neurológicas, principalmente na meningite pneumocócica. A antibioticoterapia empírica (ceftriaxona ± vancomicina), que é o tratamento central e não pode ser substituída pelo corticosteroide, ainda não tem ficha própria no site.",
    fontes: [
      { tema: "Fisiopatologia e agentes etiológicos por faixa etária", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Critérios liquóricos e indicação de tomografia antes da punção lombar", fonte: "IDSA Practice Guidelines for the Management of Bacterial Meningitis, 2004" },
    ],
  },
  {
    slug: "sepse",
    nome: "Sepse",
    sinonimos: ["Septicemia", "Choque séptico"],
    cid10: "A41",
    especialidade: "Infectologia",
    etiologia: "Multifatorial",
    resumo: "Disfunção orgânica potencialmente fatal causada por uma resposta desregulada do hospedeiro à infecção, exigindo reconhecimento e tratamento precoces (antibiótico e ressuscitação volêmica) para reduzir mortalidade.",
    definicao:
      "Segundo o Consenso Sepsis-3, sepse é definida como disfunção orgânica com risco de vida causada por uma resposta desregulada do hospedeiro à infecção, operacionalizada clinicamente como aumento agudo de pelo menos 2 pontos no escore SOFA (Sequential Organ Failure Assessment) atribuível à infecção. Choque séptico é o subgrupo de sepse com anormalidades circulatórias, celulares e metabólicas graves o suficiente para aumentar substancialmente a mortalidade.",
    epidemiologia:
      "Causa importante de morbimortalidade em pacientes hospitalizados, especialmente em unidades de terapia intensiva; pode se originar de qualquer foco infeccioso (pulmonar, urinário, abdominal, de pele/partes moles, entre outros), com o agente etiológico variando conforme o foco e o contexto (comunitário vs. associado a cuidados de saúde).",
    fisiopatologia:
      "A infecção desencadeia uma resposta imune sistêmica desregulada, com liberação maciça de mediadores pró-inflamatórios que causam disfunção endotelial generalizada, vasodilatação inapropriada, aumento da permeabilidade capilar e comprometimento da microcirculação, levando a hipoperfusão tecidual e disfunção de múltiplos órgãos, mesmo à distância do foco infeccioso original.",
    classificacao:
      "Pelo Sepsis-3 (2016): sepse (disfunção orgânica com aumento de SOFA ≥2 pontos por infecção) e choque séptico (sepse com necessidade de vasopressor para manter pressão arterial média ≥65 mmHg e lactato >2 mmol/L, apesar de ressuscitação volêmica adequada). O qSOFA (frequência respiratória ≥22 irpm, alteração do nível de consciência, pressão arterial sistólica ≤100 mmHg) é usado como ferramenta rápida de triagem à beira-leito para identificar pacientes com maior risco de desfecho desfavorável, fora da UTI.",
    quadroClinico: [
      "Febre ou hipotermia, taquicardia, taquipneia",
      "Sinais de hipoperfusão: extremidades frias, tempo de enchimento capilar prolongado, alteração do nível de consciência, oligúria",
      "Sinais e sintomas relacionados ao foco infeccioso primário (ex.: tosse e dispneia em foco pulmonar, dor abdominal em foco intra-abdominal)",
      "Hipotensão refratária a fluidos no choque séptico estabelecido",
    ],
    diagnostico: [
      "Identificação clínica de infecção suspeita ou confirmada associada a disfunção orgânica aguda (aumento de SOFA ≥2 pontos)",
      "qSOFA como triagem rápida à beira-leito fora da UTI, para identificar pacientes de maior risco que merecem avaliação mais detalhada",
      "Lactato sérico elevado (>2 mmol/L) reforça a suspeita de hipoperfusão tecidual, mesmo na ausência de hipotensão franca",
    ],
    examesComplementares: [
      "Lactato sérico: >2 mmol/L sugere hipoperfusão; >4 mmol/L associa-se a maior gravidade e é critério de choque séptico quando associado a necessidade de vasopressor",
      "Hemoculturas (idealmente antes do início do antibiótico, sem atrasar seu início) e culturas direcionadas ao foco suspeito",
      "Função renal, hepática, coagulograma e gasometria para cálculo do escore SOFA e avaliação de disfunções orgânicas",
    ],
    diagnosticoDiferencial: [
      "Síndrome da resposta inflamatória sistêmica de causa não infecciosa (pancreatite, trauma, grande queimado)",
      "Choque de outras etiologias (cardiogênico, hipovolêmico, obstrutivo)",
    ],
    tratamento: [
      "Antibioticoterapia empírica de amplo espectro o mais precocemente possível, idealmente na primeira hora de reconhecimento (conceito de 'hora de ouro'), ajustada posteriormente conforme cultura e foco identificado",
      "Ressuscitação volêmica com cristaloides como medida inicial para restaurar a perfusão tecidual",
      "Vasopressores (norepinefrina como primeira escolha) quando a hipotensão persiste apesar de ressuscitação volêmica adequada, caracterizando choque séptico",
      "Controle do foco infeccioso quando aplicável (drenagem de abscesso, remoção de dispositivo infectado, desbridamento cirúrgico)",
    ],
    complicacoes: [
      "Aguda: disfunção de múltiplos órgãos, coagulação intravascular disseminada, síndrome do desconforto respiratório agudo",
      "Crônica: síndrome pós-sepse, com fraqueza muscular prolongada, disfunção cognitiva e maior risco de novas infecções em sobreviventes",
    ],
    redFlags: [
      "Hipotensão refratária a fluidos associada a lactato elevado em paciente com infecção suspeita — choque séptico estabelecido, exigindo vasopressor e manejo intensivo imediato",
    ],
    prognostico:
      "Mortalidade significativa, especialmente no choque séptico, fortemente relacionada à precocidade do reconhecimento e do início de antibioticoterapia e ressuscitação adequadas — cada hora de atraso no início do antibiótico associa-se a pior desfecho.",
    pontosDeProva: [
      "O qSOFA é uma ferramenta de triagem rápida, não um critério diagnóstico formal de sepse (que depende do SOFA completo) — um qSOFA negativo não exclui sepse, apenas indica menor probabilidade imediata de desfecho desfavorável",
      "A 'hora de ouro' no início da antibioticoterapia é um dos pilares mais citados em prova sobre sepse, refletindo a relação direta entre atraso terapêutico e aumento de mortalidade",
    ],
    casoClinico: {
      vinheta:
        "Homem, 68 anos, diabético, é internado por pielonefrite. Após 12 horas, apresenta confusão mental aguda, frequência respiratória de 26 irpm e pressão arterial de 88x52 mmHg. Lactato: 3,8 mmol/L.",
      pergunta: "Este paciente preenche critérios de sepse/choque séptico? Qual a conduta imediata?",
      raciocinio:
        "A infecção urinária confirmada associada a disfunção orgânica aguda (alteração do nível de consciência, hipotensão, taquipneia) e lactato elevado é compatível com sepse; a hipotensão associada ao lactato elevado levanta suspeita de evolução para choque séptico, a depender da resposta à ressuscitação volêmica inicial.",
      conduta:
        "Iniciar antibioticoterapia empírica de amplo espectro imediatamente, colher hemoculturas sem atrasar o antibiótico, iniciar ressuscitação volêmica com cristaloides, e considerar vasopressor (norepinefrina) se a hipotensão persistir apesar de fluidos adequados.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Definições de sepse e choque séptico (Sepsis-3)", fonte: "Singer M et al., The Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3), JAMA, 2016" },
      { tema: "Pacotes de tratamento precoce (antibiótico, fluidos, lactato)", fonte: "Surviving Sepsis Campaign: International Guidelines, 2021" },
      { tema: "Antibioticoterapia empírica e vasopressores (ainda sem fichas próprias no site com essa indicação)", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "doenca-de-chagas",
    nome: "Doença de Chagas",
    sinonimos: ["Tripanossomíase americana"],
    cid10: "B57",
    especialidade: "Infectologia",
    etiologia: "Parasitária",
    resumo: "Infecção parasitária crônica causada pelo Trypanosoma cruzi, transmitida principalmente por triatomíneos (barbeiro), com potencial de acometimento cardíaco e digestivo décadas após a infecção inicial.",
    definicao:
      "Doença infecciosa parasitária causada pelo protozoário Trypanosoma cruzi, transmitida classicamente pela picada e contato com as fezes de triatomíneos infectados (o 'barbeiro'), além de transmissão oral (alimentos contaminados), transfusional, vertical e por transplante de órgãos, com evolução de uma fase aguda para uma fase crônica que pode durar décadas.",
    epidemiologia:
      "Endêmica em áreas rurais da América Latina, incluindo o Brasil, embora a urbanização e a migração tenham levado a casos também em áreas urbanas e em outros continentes; surtos de transmissão oral por alimentos contaminados têm ganhado relevância epidemiológica em algumas regiões.",
    fisiopatologia:
      "Após a infecção, o Trypanosoma cruzi se dissemina e invade células de diversos tecidos, incluindo miocárdio e plexos nervosos do tubo digestivo, onde persiste cronicamente. A lesão tecidual crônica na fase cardíaca/digestiva decorre de uma combinação de persistência parasitária de baixo grau e resposta imunoinflamatória crônica, causando destruição progressiva do miocárdio (com fibrose e arritmias) e denervação do plexo mioentérico (causando megaesôfago e megacólon).",
    classificacao:
      "Classificada em fase aguda (semanas após a infecção, geralmente oligossintomática ou assintomática) e fase crônica, que se subdivide em forma indeterminada (assintomática, sem alterações cardíacas ou digestivas detectáveis, a mais comum), forma cardíaca (cardiomiopatia chagásica, com arritmias e insuficiência cardíaca) e forma digestiva (megaesôfago, megacólon).",
    quadroClinico: [
      "Fase aguda: geralmente assintomática ou com febre inespecífica; sinal de Romaña (edema bipalpebral unilateral) ou chagoma de inoculação quando há porta de entrada cutânea/conjuntival identificável",
      "Forma indeterminada crônica: assintomática, com sorologia positiva mas sem alterações cardíacas ou digestivas detectáveis nos exames",
      "Forma cardíaca crônica: palpitações por arritmias, sintomas de insuficiência cardíaca, síncope",
      "Forma digestiva crônica: disfagia progressiva (megaesôfago), constipação importante (megacólon)",
    ],
    diagnostico: [
      "Fase aguda: pesquisa direta do parasita (exame a fresco de sangue periférico, método de concentração) ou PCR, dada a parasitemia mais elevada nessa fase",
      "Fase crônica: sorologia (pelo menos dois métodos diferentes reagentes, como ELISA e imunofluorescência indireta), já que a parasitemia é muito baixa e a pesquisa direta tem baixa sensibilidade",
      "Eletrocardiograma e ecocardiograma para avaliação cardíaca, e estudos radiológicos contrastados (esofagograma, enema opaco) para avaliação digestiva na fase crônica",
    ],
    examesComplementares: [
      "Exame parasitológico direto (fase aguda) ou sorologia com dois métodos distintos (fase crônica)",
      "Eletrocardiograma (bloqueio de ramo direito associado a hemibloqueio anterior esquerdo é achado clássico da cardiopatia chagásica)",
      "Ecocardiograma para avaliação de função ventricular e aneurisma de ponta (achado característico)",
    ],
    diagnosticoDiferencial: [
      "Outras cardiomiopatias dilatadas",
      "Outras causas de megaesôfago/megacólon (acalasia idiopática, doença de Hirschsprung)",
    ],
    tratamento: [
      "Benznidazol como tratamento antiparasitário de escolha, com maior eficácia quando iniciado na fase aguda ou em crianças/jovens na fase crônica recente",
      "Tratamento sintomático e específico das complicações cardíacas (conforme princípios do tratamento de arritmias e insuficiência cardíaca) e digestivas (dilatação endoscópica, cirurgia em megaesôfago/megacólon avançados) na fase crônica estabelecida",
      "Acompanhamento cardiológico regular em portadores crônicos, mesmo na forma indeterminada, pela possibilidade de evolução tardia para forma cardíaca",
    ],
    complicacoes: [
      "Aguda: miocardite aguda grave (rara, mas pode ser fatal, especialmente em imunossuprimidos ou transmissão oral com alta carga parasitária)",
      "Crônica: insuficiência cardíaca progressiva, arritmias malignas e morte súbita, tromboembolismo (por aneurisma de ponta ventricular), megaesôfago/megacólon com suas complicações (aspiração, volvo)",
    ],
    redFlags: [
      "Síncope ou palpitações significativas em paciente com doença de Chagas conhecida — investigar arritmias malignas, que são causa importante de morte súbita nessa condição",
    ],
    prognostico:
      "A maioria dos infectados permanece na forma indeterminada por toda a vida sem repercussão clínica significativa; uma parcela evolui para forma cardíaca ou digestiva ao longo de décadas, sendo a forma cardíaca a de maior impacto na mortalidade, principalmente por morte súbita arrítmica.",
    pontosDeProva: [
      "O bloqueio de ramo direito associado a hemibloqueio anterior esquerdo no eletrocardiograma é um achado clássico e sugestivo de cardiopatia chagásica, especialmente em pacientes de área endêmica",
      "O tratamento com benznidazol tem eficácia muito maior na fase aguda e em crianças/jovens na fase crônica recente do que na fase crônica estabelecida em adultos, onde o benefício sobre a progressão da doença é mais controverso",
    ],
    casoClinico: {
      vinheta:
        "Homem, 55 anos, natural de área rural endêmica para doença de Chagas, é encaminhado após ECG de rotina mostrar bloqueio de ramo direito associado a hemibloqueio anterior esquerdo. Assintomático, sem queixas cardiovasculares.",
      pergunta: "Qual é a hipótese diagnóstica mais provável e a investigação subsequente apropriada?",
      raciocinio:
        "O padrão eletrocardiográfico de bloqueio de ramo direito com hemibloqueio anterior esquerdo, em paciente de área endêmica, é altamente sugestivo de cardiopatia chagásica crônica, mesmo na ausência de sintomas.",
      conduta:
        "Confirmar a infecção por sorologia com dois métodos distintos, complementar com ecocardiograma para avaliação de função ventricular e pesquisa de aneurisma de ponta, e manter acompanhamento cardiológico regular dado o risco de progressão e arritmias.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Fisiopatologia e formas clínicas", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Achados eletrocardiográficos característicos", fonte: "Diretriz da Sociedade Brasileira de Cardiologia sobre Doença de Chagas, 2018" },
      { tema: "Benznidazol no tratamento (ainda sem ficha própria no site)", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "toxoplasmose",
    nome: "Toxoplasmose",
    sinonimos: ["Toxoplasmose adquirida", "Neurotoxoplasmose"],
    cid10: "B58",
    especialidade: "Infectologia",
    etiologia: "Parasitária",
    resumo: "Infecção parasitária causada pelo Toxoplasma gondii, geralmente assintomática ou leve em imunocompetentes, mas potencialmente grave em imunossuprimidos (reativação cerebral) e na transmissão congênita.",
    definicao:
      "Infecção causada pelo protozoário Toxoplasma gondii, adquirida por ingestão de oocistos (contato com fezes de felinos) ou cistos teciduais (carne malcozida), geralmente assintomática ou autolimitada em indivíduos imunocompetentes, mas com potencial de doença grave em contextos específicos: reativação em imunossuprimidos e infecção congênita quando adquirida na gestação.",
    epidemiologia:
      "Infecção extremamente comum globalmente, com soroprevalência elevada em muitas populações adultas, refletindo a alta frequência de infecção assintomática prévia. A relevância clínica concentra-se em gestantes não imunes (risco de toxoplasmose congênita) e em pacientes imunossuprimidos, especialmente com AIDS avançada (risco de reativação cerebral).",
    fisiopatologia:
      "Após a infecção primária, o parasita forma cistos teciduais latentes, principalmente em tecido muscular e sistema nervoso central, controlados pela resposta imune celular do hospedeiro imunocompetente. Em estados de imunossupressão significativa, esses cistos podem reativar, causando encefalite/abscessos cerebrais focais (neurotoxoplasmose). Na gestação, a parasitemia materna durante a infecção aguda pode atravessar a placenta e infectar o feto, com gravidade da doença congênita inversamente relacionada à idade gestacional no momento da infecção (mais grave quanto mais precoce, mas transmissão mais provável quanto mais tardia).",
    classificacao:
      "Classificada por contexto clínico: toxoplasmose aguda adquirida em imunocompetente (geralmente assintomática ou oligossintomática), toxoplasmose em imunossuprimido (principalmente reativação com neurotoxoplasmose) e toxoplasmose congênita (transmissão vertical durante infecção materna aguda na gestação).",
    quadroClinico: [
      "Imunocompetente: geralmente assintomática; quando sintomática, linfadenopatia cervical, febre baixa e mal-estar, semelhante a uma síndrome mononucleose-like",
      "Imunossuprimido (neurotoxoplasmose): cefaleia, febre, déficits neurológicos focais, convulsões, alteração do nível de consciência",
      "Congênita: espectro amplo, de assintomática ao nascimento (com sequelas tardias possíveis) a tétrade clássica grave (coriorretinite, hidrocefalia, calcificações intracranianas, convulsões)",
    ],
    diagnostico: [
      "Sorologia IgG/IgM para triagem e caracterização da fase da infecção",
      "Teste de avidez de IgG para estimar o período aproximado da infecção, particularmente relevante para datar infecção na gestação",
      "Neuroimagem (tomografia ou ressonância) mostrando lesões com efeito de massa, tipicamente múltiplas e com realce em anel, na suspeita de neurotoxoplasmose em imunossuprimido",
    ],
    examesComplementares: [
      "Sorologia IgG e IgM para Toxoplasma gondii",
      "Teste de avidez de IgG (avidez alta sugere infecção mais antiga, útil para datar a infecção na gestação)",
      "Ressonância magnética de crânio na suspeita de neurotoxoplasmose (lesões com realce em anel, geralmente múltiplas, em núcleos da base e junção corticossubcortical)",
    ],
    diagnosticoDiferencial: [
      "Linfoma primário do sistema nervoso central (principal diferencial de neurotoxoplasmose em paciente com AIDS)",
      "Mononucleose infecciosa (no diagnóstico diferencial da toxoplasmose aguda em imunocompetente)",
      "Outras causas de infecção congênita (citomegalovírus, rubéola, sífilis, herpes — grupo TORCH)",
    ],
    tratamento: [
      "Imunocompetente assintomático ou oligossintomático: geralmente não requer tratamento específico, pela evolução benigna autolimitada",
      "Neurotoxoplasmose em imunossuprimido: combinação de sulfadiazina e pirimetamina (com ácido folínico associado, para reduzir toxicidade hematológica), como esquema de escolha",
      "Toxoplasmose aguda confirmada na gestação: tratamento específico direcionado a reduzir risco/gravidade de transmissão congênita, conforme protocolo obstétrico especializado",
      "Profilaxia secundária de neurotoxoplasmose em pacientes com AIDS até recuperação imunológica sustentada com terapia antirretroviral",
    ],
    complicacoes: [
      "Aguda: neurotoxoplasmose com efeito de massa significativo e hipertensão intracraniana em imunossuprimidos",
      "Crônica: sequelas neurológicas e coriorretinite na toxoplasmose congênita, podendo se manifestar tardiamente mesmo em crianças assintomáticas ao nascimento",
    ],
    redFlags: [
      "Cefaleia, febre e déficit neurológico focal em paciente com AIDS e CD4 muito baixo — suspeitar de neurotoxoplasmose e iniciar investigação e tratamento empírico prontamente, dado o risco de deterioração rápida",
    ],
    prognostico:
      "Excelente na infecção adquirida em imunocompetentes, geralmente autolimitada; a neurotoxoplasmose responde bem ao tratamento específico na maioria dos casos, mas exige diagnóstico e início terapêutico oportunos; a toxoplasmose congênita tem prognóstico variável, desde assintomática até sequelas neurológicas e visuais significativas.",
    pontosDeProva: [
      "Em paciente com AIDS e lesão cerebral com efeito de massa, o principal diagnóstico diferencial de neurotoxoplasmose é o linfoma primário do sistema nervoso central — a resposta clínica e radiológica ao tratamento empírico para toxoplasmose em poucas semanas favorece esse diagnóstico e frequentemente evita biópsia cerebral inicial",
      "O teste de avidez de IgG é fundamental para datar a infecção por toxoplasmose na gestação, distinguindo infecção recente (maior risco fetal se ainda na gestação) de infecção antiga (sem risco de transmissão congênita)",
    ],
    casoClinico: {
      vinheta:
        "Homem, 34 anos, com AIDS avançada (CD4 de 45 células/mm³) e má adesão à terapia antirretroviral, apresenta cefaleia progressiva, febre e hemiparesia direita de início há 5 dias. Ressonância magnética mostra múltiplas lesões com realce em anel em núcleos da base.",
      pergunta: "Qual é a hipótese diagnóstica mais provável e a conduta apropriada?",
      raciocinio:
        "O contexto de imunossupressão avançada (CD4 muito baixo) associado a déficit neurológico focal e lesões com realce em anel em localização típica é altamente sugestivo de neurotoxoplasmose, embora linfoma primário do sistema nervoso central seja diferencial importante.",
      conduta:
        "Iniciar tratamento empírico com sulfadiazina e pirimetamina associadas a ácido folínico, e reavaliar com nova neuroimagem em 1-2 semanas — a resposta clínica e radiológica favorável reforça o diagnóstico de neurotoxoplasmose, reservando biópsia cerebral para os casos sem resposta ao tratamento empírico.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Fisiopatologia e reativação em imunossuprimidos", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Diagnóstico diferencial com linfoma primário do SNC e resposta ao tratamento empírico", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Sulfadiazina/pirimetamina no tratamento (ainda sem fichas próprias no site)", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "leishmaniose",
    nome: "Leishmaniose",
    sinonimos: ["Calazar (forma visceral)", "Úlcera de Bauru (forma cutânea)"],
    cid10: "B55",
    especialidade: "Infectologia",
    etiologia: "Parasitária",
    resumo: "Infecção parasitária transmitida por flebotomíneos, com espectro clínico que varia de lesões cutâneas localizadas a uma forma visceral grave e potencialmente fatal se não tratada.",
    definicao:
      "Doença causada por protozoários do gênero Leishmania, transmitidos pela picada de fêmeas infectadas de flebotomíneos, com apresentação clínica variável conforme a espécie do parasita e a resposta imune do hospedeiro, variando de lesões cutâneas localizadas a doença visceral sistêmica grave.",
    epidemiologia:
      "Endêmica em diversas regiões do Brasil, com a forma cutânea sendo mais amplamente distribuída e a forma visceral concentrada em áreas endêmicas específicas, associada a maior letalidade quando não tratada, especialmente em crianças pequenas, idosos e imunossuprimidos.",
    fisiopatologia:
      "Após a picada do vetor, promastigotas infectam macrófagos e se transformam em amastigotas, que se multiplicam intracelularmente. O comportamento clínico depende do equilíbrio entre a resposta imune celular do hospedeiro e a espécie/virulência do parasita: uma resposta imune celular eficaz tende a limitar a infecção à pele (forma cutânea localizada), enquanto uma resposta inadequada, especialmente com determinadas espécies viscerotrópicas, permite disseminação para o sistema reticuloendotelial (baço, fígado, medula óssea), causando a forma visceral.",
    classificacao:
      "Classificada em leishmaniose cutânea (lesões ulceradas localizadas na pele, no sítio da picada), leishmaniose mucocutânea (acometimento secundário de mucosas nasal/oral, potencialmente destrutivo, mais tardio) e leishmaniose visceral (calazar — acometimento sistêmico do sistema reticuloendotelial, forma mais grave e potencialmente fatal se não tratada).",
    quadroClinico: [
      "Cutânea: úlcera de bordas elevadas e bem delimitadas, geralmente indolor, no sítio da picada, com evolução lenta",
      "Mucocutânea: lesões destrutivas de mucosa nasal/oral, geralmente anos após a lesão cutânea inicial não tratada adequadamente",
      "Visceral: febre prolongada, hepatoesplenomegalia importante, perda de peso, palidez (pancitopenia associada)",
    ],
    diagnostico: [
      "Cutânea/mucocutânea: identificação parasitológica direta (esfregaço, biópsia) ou histopatológico da lesão; testes moleculares quando disponíveis",
      "Visceral: identificação parasitológica em aspirado de medula óssea ou baço, ou teste rápido sorológico (rK39) como método menos invasivo de triagem",
      "Hemograma na forma visceral tipicamente mostra pancitopenia, refletindo o acometimento medular/hiperesplenismo",
    ],
    examesComplementares: [
      "Teste rápido rK39 (sorológico) para triagem da leishmaniose visceral",
      "Aspirado de medula óssea ou baço com identificação parasitológica para confirmação da forma visceral",
      "Hemograma completo (pancitopenia na forma visceral) e proteínas séricas (hipergamaglobulinemia com inversão da relação albumina/globulina)",
    ],
    diagnosticoDiferencial: [
      "Leishmaniose cutânea: outras causas de úlceras cutâneas crônicas (esporotricose, paracoccidioidomicose, úlceras neoplásicas)",
      "Leishmaniose visceral: malária, esquistossomose hepatoesplênica, linfomas e leucemias (diagnóstico diferencial de febre prolongada com hepatoesplenomegalia e pancitopenia)",
    ],
    tratamento: [
      "Antimoniato de meglumina como tratamento de primeira linha clássico para leishmaniose cutânea e visceral em muitos contextos",
      "Anfotericina B (formulação lipossomal preferencialmente) como alternativa, especialmente em gestantes, imunossuprimidos, doença grave ou falha ao antimonial",
      "Acompanhamento clínico prolongado pós-tratamento para monitorar resposta e possível recidiva, especialmente na forma visceral",
    ],
    complicacoes: [
      "Aguda: pancitopenia grave com risco de infecções secundárias e sangramento na forma visceral não tratada",
      "Crônica: destruição mutilante de estruturas nasais/orofaríngeas na forma mucocutânea não tratada adequadamente",
    ],
    redFlags: [
      "Febre prolongada associada a hepatoesplenomegalia importante e pancitopenia em área endêmica — investigar ativamente leishmaniose visceral, que é fatal na maioria dos casos não tratados",
    ],
    prognostico:
      "A forma cutânea tem bom prognóstico com tratamento adequado, geralmente com cicatrização completa, embora possa deixar cicatriz. A forma visceral não tratada tem mortalidade muito alta, mas responde bem ao tratamento quando iniciado oportunamente; a forma mucocutânea pode deixar sequelas destrutivas permanentes se o diagnóstico e tratamento forem tardios.",
    pontosDeProva: [
      "A combinação de febre prolongada, hepatoesplenomegalia e pancitopenia em área endêmica é a apresentação clássica da leishmaniose visceral (calazar) e deve sempre entrar no diagnóstico diferencial nesse contexto",
      "A leishmaniose mucocutânea geralmente surge anos após uma lesão cutânea prévia não tratada adequadamente, reforçando a importância do tratamento correto da forma cutânea inicial para prevenir essa complicação tardia",
    ],
    casoClinico: {
      vinheta:
        "Criança, 4 anos, residente em área endêmica, apresenta febre há 6 semanas, associada a distensão abdominal progressiva e palidez importante. Exame físico revela hepatoesplenomegalia volumosa. Hemograma: pancitopenia.",
      pergunta: "Qual é a hipótese diagnóstica mais provável e o exame confirmatório mais apropriado?",
      raciocinio:
        "A combinação de febre prolongada, hepatoesplenomegalia importante e pancitopenia em criança de área endêmica é altamente sugestiva de leishmaniose visceral (calazar). O teste rápido rK39 é um método sorológico rápido e menos invasivo para triagem inicial.",
      conduta:
        "Solicitar teste rápido rK39 para triagem sorológica e, se necessário para confirmação definitiva, aspirado de medula óssea com identificação parasitológica; iniciar tratamento (antimoniato de meglumina ou anfotericina B lipossomal, conforme protocolo e gravidade) assim que confirmado.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Fisiopatologia e formas clínicas", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Diagnóstico e tratamento da leishmaniose visceral", fonte: "Guia de Vigilância em Saúde, Ministério da Saúde" },
      { tema: "Antimoniato de meglumina/anfotericina B no tratamento (ainda sem fichas próprias no site)", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "cancer-de-esofago",
    nome: "Neoplasia maligna do esôfago",
    sinonimos: ["Câncer de esôfago", "Carcinoma esofágico"],
    cid10: "C15",
    especialidade: "Gastroenterologia",
    etiologia: "Neoplásica",
    resumo: "Neoplasia maligna do esôfago, dividida em dois principais tipos histológicos com fatores de risco distintos: carcinoma escamoso (tabagismo/álcool) e adenocarcinoma (esôfago de Barrett/DRGE crônica).",
    definicao:
      "Neoplasia maligna originada do epitélio esofágico, com dois principais subtipos histológicos — carcinoma escamoso e adenocarcinoma — que diferem em epidemiologia, fatores de risco e localização predominante ao longo do órgão.",
    epidemiologia:
      "O carcinoma escamoso predomina em regiões com alta prevalência de tabagismo e etilismo, tipicamente no terço médio/superior do esôfago; o adenocarcinoma vem aumentando em incidência em países ocidentais, associado ao esôfago de Barrett secundário à doença do refluxo gastroesofágico crônica, predominando no terço distal.",
    fisiopatologia:
      "No carcinoma escamoso, a exposição crônica a carcinógenos (tabaco, álcool) causa displasia progressiva do epitélio escamoso nativo. No adenocarcinoma, o refluxo ácido crônico causa metaplasia intestinal do epitélio escamoso distal (esôfago de Barrett), que pode progredir por displasia de baixo grau, displasia de alto grau, até adenocarcinoma invasivo.",
    classificacao:
      "Classificação histológica em carcinoma escamoso e adenocarcinoma, com estadiamento pelo sistema TNM (8ª edição, AJCC/UICC), considerando profundidade de invasão tumoral, comprometimento linfonodal e metástases a distância — determinante central da estratégia terapêutica.",
    quadroClinico: [
      "Disfagia progressiva, inicialmente para sólidos e depois também para líquidos, geralmente sintoma tardio",
      "Perda de peso significativa e não intencional",
      "Odinofagia (dor à deglutição) em alguns casos",
      "Rouquidão (invasão do nervo laríngeo recorrente) ou tosse (fístula traqueoesofágica) em doença localmente avançada",
    ],
    diagnostico: [
      "Endoscopia digestiva alta com biópsia é o exame central para diagnóstico histológico",
      "Ecoendoscopia para avaliação da profundidade de invasão tumoral (estadiamento T)",
      "Tomografia de tórax/abdome e, quando disponível, PET-CT para pesquisa de doença locorregional e a distância",
    ],
    examesComplementares: [
      "Endoscopia digestiva alta com biópsia",
      "Ecoendoscopia para estadiamento T/N locorregional",
      "Tomografia de tórax e abdome com contraste para pesquisa de metástases",
    ],
    diagnosticoDiferencial: [
      "Estenose esofágica benigna (péptica, cáustica)",
      "Acalasia",
      "Espasmo esofágico difuso",
    ],
    tratamento: [
      "Ressecção cirúrgica (esofagectomia) em doença localizada, potencialmente curativa, em pacientes candidatos ao procedimento",
      "Quimioterapia e radioterapia neoadjuvantes (antes da cirurgia) em doença localmente avançada, para reduzir o tumor e melhorar a ressecabilidade",
      "Quimioterapia paliativa e/ou colocação de prótese esofágica para alívio de disfagia em doença metastática ou irressecável",
      "Vigilância endoscópica periódica em pacientes com esôfago de Barrett, para detecção precoce de displasia/adenocarcinoma",
    ],
    complicacoes: [
      "Aguda: obstrução esofágica completa, hemorragia digestiva alta por invasão tumoral",
      "Crônica: fístula traqueoesofágica, disseminação metastática (linfonodos, fígado, pulmão)",
    ],
    redFlags: [
      "Disfagia progressiva associada a perda de peso significativa em paciente com fatores de risco — investigar neoplasia esofágica com endoscopia digestiva alta prioritária",
    ],
    prognostico:
      "Reservado na maioria dos casos, já que o diagnóstico frequentemente ocorre em estágio avançado (a disfagia só surge quando há obstrução significativa da luz esofágica); a detecção precoce por vigilância em pacientes de risco (esôfago de Barrett) melhora substancialmente o prognóstico.",
    pontosDeProva: [
      "A disfagia progressiva (sólidos antes de líquidos) é sintoma tardio no câncer de esôfago, pois exige obstrução significativa da luz — por isso o diagnóstico frequentemente ocorre em estágio avançado",
      "O esôfago de Barrett é a lesão precursora do adenocarcinoma esofágico e justifica vigilância endoscópica periódica em pacientes com DRGE crônica de longa data",
    ],
    casoClinico: {
      vinheta:
        "Homem, 62 anos, tabagista e etilista importantes, relata disfagia progressiva para sólidos há 2 meses, atualmente também com dificuldade para líquidos, associada a perda de 10 kg no período.",
      pergunta: "Qual é a conduta diagnóstica mais apropriada?",
      raciocinio:
        "A disfagia progressiva (sólidos evoluindo para líquidos) associada a perda de peso significativa em paciente com fatores de risco clássicos (tabagismo e etilismo, associados ao carcinoma escamoso) é altamente sugestiva de neoplasia esofágica.",
      conduta:
        "Solicitar endoscopia digestiva alta com biópsia com prioridade para confirmação histológica, e, se confirmado o diagnóstico, complementar com ecoendoscopia e tomografia para estadiamento antes de definir a estratégia terapêutica.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Subtipos histológicos e fatores de risco", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Estadiamento TNM", fonte: "AJCC Cancer Staging Manual, 8ª edição, 2017" },
      { tema: "Esôfago de Barrett como lesão precursora", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "cancer-de-estomago",
    nome: "Neoplasia maligna do estômago",
    sinonimos: ["Câncer gástrico", "Câncer de estômago"],
    cid10: "C16",
    especialidade: "Gastroenterologia",
    etiologia: "Neoplásica",
    resumo: "Neoplasia maligna do estômago, fortemente associada à infecção crônica por Helicobacter pylori, com diagnóstico frequentemente tardio pela inespecificidade dos sintomas iniciais.",
    definicao:
      "Neoplasia maligna originada do epitélio gástrico, na grande maioria adenocarcinoma, associada a fatores de risco ambientais e infecciosos, com dois principais padrões histológicos (intestinal e difuso) de comportamento biológico distinto.",
    epidemiologia:
      "A infecção crônica por Helicobacter pylori é o principal fator de risco identificável, atuando através da sequência de gastrite crônica, atrofia gástrica, metaplasia intestinal, displasia e carcinoma (mais relevante para o tipo intestinal). Outros fatores incluem dieta rica em alimentos defumados/salgados, tabagismo e histórico familiar.",
    fisiopatologia:
      "No tipo intestinal (Lauren), a sequência carcinogênica passa por gastrite crônica atrófica, metaplasia intestinal e displasia antes do carcinoma invasivo, fortemente ligada à infecção crônica por H. pylori. No tipo difuso, células neoplásicas infiltram a parede gástrica de forma não coesa (células em anel de sinete), sem lesão precursora bem definida, associado a pior prognóstico e, em alguns casos, a mutações genéticas hereditárias específicas (ex.: mutação no gene CDH1).",
    classificacao:
      "Classificação de Lauren em tipo intestinal (mais comum, associado a H. pylori, melhor prognóstico relativo) e tipo difuso (infiltrativo, células em anel de sinete, pior prognóstico, mais associado a formas hereditárias). Estadiamento pelo sistema TNM (8ª edição, AJCC/UICC).",
    quadroClinico: [
      "Sintomas iniciais inespecíficos: dispepsia, saciedade precoce, desconforto epigástrico vago",
      "Perda de peso e anorexia em estágios mais avançados",
      "Hemorragia digestiva (melena, anemia ferropriva) em alguns casos",
      "Massa epigástrica palpável ou linfonodo supraclavicular (linfonodo de Virchow) em doença avançada",
    ],
    diagnostico: [
      "Endoscopia digestiva alta com biópsia é o exame central para diagnóstico histológico",
      "Tomografia de abdome/pelve e, quando indicado, ecoendoscopia para estadiamento locorregional",
      "Investigação e erradicação de H. pylori como parte do manejo, embora não substitua a biópsia diagnóstica",
    ],
    examesComplementares: [
      "Endoscopia digestiva alta com biópsia",
      "Tomografia de abdome/pelve com contraste para estadiamento",
      "Ecoendoscopia para avaliação da profundidade de invasão tumoral",
    ],
    diagnosticoDiferencial: [
      "Úlcera péptica gástrica benigna",
      "Linfoma gástrico (MALT ou difuso de grandes células B)",
      "Tumor estromal gastrointestinal (GIST)",
    ],
    tratamento: [
      "Gastrectomia (parcial ou total, conforme localização) com linfadenectomia em doença localizada ressecável, potencialmente curativa",
      "Quimioterapia perioperatória (neoadjuvante e adjuvante) em doença localmente avançada",
      "Quimioterapia paliativa e/ou terapia-alvo (conforme perfil molecular, ex.: HER2) em doença metastática",
      "Erradicação de H. pylori quando identificado, tanto no contexto de prevenção quanto associado ao tratamento",
    ],
    complicacoes: [
      "Aguda: hemorragia digestiva alta, perfuração gástrica",
      "Crônica: obstrução da via de saída gástrica, carcinomatose peritoneal, metástases a distância",
    ],
    redFlags: [
      "Dispepsia de início recente em paciente acima de 45-50 anos, ou dispepsia associada a sinais de alarme (perda de peso, anemia, disfagia, massa palpável) — investigar com endoscopia digestiva alta prioritária, sem tratamento empírico prolongado sem investigação",
    ],
    prognostico:
      "Fortemente dependente do estágio ao diagnóstico; a detecção precoce (mais comum em países com rastreamento sistemático, como o Japão) associa-se a excelente prognóstico, enquanto a doença avançada ao diagnóstico (mais comum em países sem rastreamento populacional, dado o caráter inespecífico dos sintomas iniciais) tem prognóstico reservado.",
    pontosDeProva: [
      "A sequência de Correa (gastrite crônica → atrofia → metaplasia intestinal → displasia → carcinoma) descreve a carcinogênese do tipo intestinal, fortemente ligada à infecção por H. pylori",
      "Dispepsia com sinais de alarme (perda de peso, anemia, disfagia, sangramento, massa palpável) exige investigação endoscópica prioritária, independentemente da idade",
    ],
    casoClinico: {
      vinheta:
        "Homem, 58 anos, relata dispepsia e saciedade precoce há 3 meses, associadas a perda de peso não intencional de 6 kg. Hemograma mostra anemia microcítica leve.",
      pergunta: "Qual é a conduta diagnóstica mais apropriada?",
      raciocinio:
        "A dispepsia associada a sinais de alarme (perda de peso, anemia) em paciente acima de 45 anos exige investigação endoscópica prioritária, não tratamento empírico prolongado, dado o risco de neoplasia gástrica subjacente.",
      conduta:
        "Solicitar endoscopia digestiva alta com biópsia com prioridade, e, se confirmada neoplasia, complementar com tomografia de abdome/pelve para estadiamento antes de definir a estratégia terapêutica.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Classificação de Lauren e sequência de Correa", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Estadiamento TNM", fonte: "AJCC Cancer Staging Manual, 8ª edição, 2017" },
      { tema: "Sinais de alarme na dispepsia", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "cancer-colorretal",
    nome: "Neoplasia maligna do cólon",
    sinonimos: ["Câncer colorretal", "CCR"],
    cid10: "C18",
    especialidade: "Gastroenterologia",
    etiologia: "Neoplásica",
    resumo: "Uma das neoplasias malignas mais comuns, majoritariamente originada da sequência adenoma-carcinoma, com rastreamento populacional eficaz na redução de mortalidade.",
    definicao:
      "Neoplasia maligna originada do epitélio do cólon ou reto, na grande maioria adenocarcinoma, resultante na maior parte dos casos da progressão de pólipos adenomatosos ao longo de anos (sequência adenoma-carcinoma), com uma minoria de casos associada a síndromes hereditárias específicas.",
    epidemiologia:
      "Uma das neoplasias malignas mais comuns e uma das principais causas de morte por câncer; fatores de risco incluem idade avançada, histórico familiar, doença inflamatória intestinal de longa data, dieta rica em carne processada e pobre em fibras, obesidade e sedentarismo. Síndromes hereditárias (síndrome de Lynch, polipose adenomatosa familiar) respondem por uma minoria dos casos, mas com risco muito elevado nos portadores.",
    fisiopatologia:
      "A sequência adenoma-carcinoma descreve a progressão, ao longo de anos, de mucosa normal para pólipo adenomatoso, displasia progressiva e, eventualmente, carcinoma invasivo, acumulando mutações genéticas sucessivas (incluindo genes como APC, KRAS e TP53 na via clássica). A síndrome de Lynch decorre de mutações germinativas em genes de reparo de DNA (mismatch repair), levando a instabilidade de microssatélites e carcinogênese acelerada.",
    classificacao:
      "Estadiamento pelo sistema TNM (8ª edição, AJCC/UICC), considerando profundidade de invasão na parede intestinal, comprometimento linfonodal e metástases a distância — principal determinante da estratégia terapêutica e do prognóstico.",
    quadroClinico: [
      "Alteração do hábito intestinal (constipação ou diarreia de início recente)",
      "Sangramento retal ou sangue oculto nas fezes",
      "Anemia ferropriva inexplicada, especialmente em homens e mulheres pós-menopausa (associação clássica com neoplasia de cólon direito)",
      "Dor abdominal e, em casos avançados, obstrução intestinal",
    ],
    diagnostico: [
      "Colonoscopia com biópsia é o exame de escolha para diagnóstico e também permite rastreamento/remoção de pólipos precursores",
      "Antígeno carcinoembrionário (CEA) não é usado para rastreamento, mas é útil para monitorização de resposta terapêutica e recorrência após tratamento",
      "Tomografia de abdome/pelve e tórax para estadiamento de doença locorregional e a distância",
    ],
    examesComplementares: [
      "Colonoscopia com biópsia",
      "CEA sérico (monitorização, não rastreamento nem diagnóstico isolado)",
      "Tomografia de tórax, abdome e pelve para estadiamento",
      "Rastreamento populacional: pesquisa de sangue oculto nas fezes ou colonoscopia periódica a partir de idade recomendada em risco padrão",
    ],
    diagnosticoDiferencial: [
      "Doença diverticular",
      "Doença inflamatória intestinal",
      "Pólipos benignos sem malignização",
    ],
    tratamento: [
      "Ressecção cirúrgica (colectomia segmentar com linfadenectomia) em doença localizada, potencialmente curativa",
      "Quimioterapia adjuvante em doença com comprometimento linfonodal ou outros fatores de alto risco",
      "Quimioterapia associada a radioterapia neoadjuvante em câncer de reto localmente avançado",
      "Quimioterapia paliativa, com ou sem terapia-alvo (conforme perfil molecular), em doença metastática",
    ],
    complicacoes: [
      "Aguda: obstrução intestinal, perfuração com peritonite, hemorragia digestiva baixa significativa",
      "Crônica: recorrência locorregional, metástases hepáticas e pulmonares",
    ],
    redFlags: [
      "Anemia ferropriva em homem ou mulher pós-menopausa sem causa ginecológica evidente, ou alteração do hábito intestinal persistente em paciente acima de 45-50 anos — investigar com colonoscopia",
    ],
    prognostico:
      "Fortemente dependente do estágio ao diagnóstico, com excelente prognóstico em doença localizada detectada por rastreamento e prognóstico mais reservado em doença metastática; o rastreamento populacional reduz significativamente a mortalidade ao permitir detecção e remoção de lesões precursoras antes da progressão para carcinoma invasivo.",
    pontosDeProva: [
      "Anemia ferropriva inexplicada em homens ou mulheres pós-menopausa é indicação forte de investigação do trato gastrointestinal, incluindo colonoscopia, pela associação clássica com neoplasia de cólon direito",
      "O CEA não deve ser usado como ferramenta de rastreamento ou diagnóstico isolado — sua utilidade principal é na monitorização de resposta ao tratamento e detecção de recorrência",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 61 anos, pós-menopausa, relata mudança do hábito intestinal (alternância entre constipação e diarreia) há 3 meses. Hemograma mostra anemia ferropriva sem outra causa identificada.",
      pergunta: "Qual é a conduta diagnóstica mais apropriada?",
      raciocinio:
        "A alteração do hábito intestinal associada a anemia ferropriva inexplicada em mulher pós-menopausa é um conjunto de sinais de alarme clássico para neoplasia colorretal, exigindo investigação direta com colonoscopia.",
      conduta:
        "Solicitar colonoscopia com biópsia de qualquer lesão suspeita, e, se confirmada neoplasia, complementar com tomografia de tórax, abdome e pelve para estadiamento antes de definir a estratégia terapêutica.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Sequência adenoma-carcinoma e síndromes hereditárias", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Estadiamento TNM", fonte: "AJCC Cancer Staging Manual, 8ª edição, 2017" },
      { tema: "Papel do CEA na monitorização, não no rastreamento", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "cancer-de-pancreas",
    nome: "Neoplasia maligna do pâncreas",
    sinonimos: ["Câncer de pâncreas", "Adenocarcinoma pancreático"],
    cid10: "C25",
    especialidade: "Gastroenterologia",
    etiologia: "Neoplásica",
    resumo: "Neoplasia maligna agressiva do pâncreas, com diagnóstico frequentemente tardio pela apresentação inespecífica e prognóstico geralmente reservado mesmo com tratamento.",
    definicao:
      "Neoplasia maligna originada do pâncreas, na grande maioria adenocarcinoma ductal, com comportamento biológico agressivo e tendência a diagnóstico em estágio avançado devido à localização retroperitoneal e à apresentação clínica inicialmente inespecífica.",
    epidemiologia:
      "Fatores de risco incluem tabagismo, obesidade, diabetes mellitus de início recente (pode ser manifestação paraneoplásica precoce), pancreatite crônica e histórico familiar/síndromes genéticas específicas. Entre as neoplasias digestivas, está associada a uma das piores taxas de sobrevida global.",
    fisiopatologia:
      "A carcinogênese pancreática progride através de lesões precursoras microscópicas (neoplasia intraepitelial pancreática, PanIN) que acumulam mutações genéticas sucessivas (incluindo KRAS, presente na grande maioria dos casos) até o adenocarcinoma invasivo. O comportamento localmente invasivo precoce (envolvimento de estruturas vasculares peripancreáticas) e a disseminação metastática precoce contribuem para o diagnóstico tardio e o prognóstico reservado.",
    classificacao:
      "Estadiamento pelo sistema TNM (8ª edição, AJCC/UICC), com relevância prática destacada para a classificação de ressecabilidade: ressecável, borderline ressecável (envolvimento vascular limitado) e irressecável/metastático — essa classificação orienta diretamente a sequência terapêutica (cirurgia primária vs. terapia neoadjuvante vs. tratamento paliativo).",
    quadroClinico: [
      "Dor abdominal (frequentemente em andar superior, podendo irradiar para o dorso) e perda de peso, sintomas mais comuns mas inespecíficos",
      "Icterícia indolor progressiva quando o tumor acomete a cabeça do pâncreas (obstrução biliar)",
      "Diabetes mellitus de início recente ou descompensação inexplicada de diabetes prévio, podendo preceder o diagnóstico",
      "Tromboembolismo venoso recorrente (fenômeno paraneoplásico associado)",
    ],
    diagnostico: [
      "Tomografia de abdome com protocolo específico para pâncreas (trifásico) para caracterização da lesão e avaliação de envolvimento vascular",
      "Ecoendoscopia com biópsia por agulha fina para confirmação histológica",
      "CA 19-9 como marcador tumoral de apoio, útil para monitorização, mas não recomendado isoladamente para rastreamento ou diagnóstico (pode estar elevado em outras condições e ausente em parte dos tumores)",
    ],
    examesComplementares: [
      "Tomografia de abdome trifásica (protocolo pâncreas) para caracterização e avaliação de ressecabilidade",
      "Ecoendoscopia com biópsia por agulha fina",
      "CA 19-9 sérico (marcador de apoio e monitorização)",
      "Bilirrubinas e enzimas canaliculares quando há icterícia obstrutiva",
    ],
    diagnosticoDiferencial: [
      "Pancreatite crônica (pode mimetizar massa pancreática em alguns casos)",
      "Colangiocarcinoma (quando a icterícia obstrutiva é o achado predominante)",
      "Neoplasias císticas pancreáticas de comportamento distinto (mucinosas vs. serosas)",
    ],
    tratamento: [
      "Ressecção cirúrgica (ex.: duodenopancreatectomia/cirurgia de Whipple para tumores de cabeça de pâncreas) em doença ressecável, única modalidade potencialmente curativa",
      "Quimioterapia neoadjuvante em doença borderline ressecável, buscando melhorar a taxa de ressecção completa",
      "Quimioterapia paliativa em doença irressecável/metastática",
      "Manejo paliativo de sintomas (drenagem biliar para icterícia obstrutiva, controle da dor) em todos os estágios, integrado desde o início",
    ],
    complicacoes: [
      "Aguda: obstrução biliar com colangite associada, trombose venosa",
      "Crônica: caquexia neoplásica, metástases hepáticas e peritoneais",
    ],
    redFlags: [
      "Icterícia indolor progressiva associada a perda de peso — investigar neoplasia pancreática/periampular com prioridade, mesmo na ausência de dor abdominal significativa",
    ],
    prognostico:
      "Reservado na maioria dos casos, mesmo com tratamento, dado o diagnóstico frequentemente tardio; a ressecção cirúrgica completa em doença localizada oferece a melhor chance de sobrevida prolongada, mas representa a minoria dos casos ao diagnóstico.",
    pontosDeProva: [
      "Diabetes mellitus de início recente em paciente sem fatores de risco típicos, especialmente associado a perda de peso, pode ser manifestação paraneoplásica precoce do câncer de pâncreas",
      "A icterícia indolor progressiva (sem dor associada) é um sinal de alarme clássico que diferencia obstrução biliar por neoplasia de obstrução por cálculo (geralmente dolorosa)",
    ],
    casoClinico: {
      vinheta:
        "Homem, 64 anos, sem diabetes prévio, é diagnosticado com diabetes mellitus há 2 meses, associado a perda de peso não intencional de 8 kg e icterícia progressiva indolor nas últimas 2 semanas.",
      pergunta: "Qual é a hipótese diagnóstica mais provável e a investigação apropriada?",
      raciocinio:
        "A associação de diabetes de início recente, perda de peso significativa e icterícia indolor progressiva é altamente sugestiva de neoplasia de cabeça de pâncreas, com obstrução biliar secundária.",
      conduta:
        "Solicitar tomografia de abdome trifásica com protocolo para pâncreas e ecoendoscopia com biópsia para confirmação histológica, avaliando a ressecabilidade da lesão para definir a sequência terapêutica.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Fisiopatologia e lesões precursoras (PanIN)", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Classificação de ressecabilidade e estadiamento TNM", fonte: "AJCC Cancer Staging Manual, 8ª edição, 2017" },
      { tema: "Diabetes de início recente como manifestação paraneoplásica", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "ulcera-peptica",
    nome: "Úlcera péptica",
    sinonimos: ["Úlcera gástrica", "Úlcera duodenal"],
    cid10: "K27",
    especialidade: "Gastroenterologia",
    etiologia: "Multifatorial",
    resumo: "Lesão erosiva da mucosa gastroduodenal que ultrapassa a muscular da mucosa, causada predominantemente por infecção por Helicobacter pylori ou uso de anti-inflamatórios não esteroidais.",
    definicao:
      "Solução de continuidade da mucosa gástrica ou duodenal que se estende através da muscular da mucosa, resultante de desequilíbrio entre fatores agressores (ácido gástrico, pepsina, Helicobacter pylori, AINEs) e mecanismos protetores da mucosa.",
    epidemiologia:
      "As duas causas mais comuns e amplamente predominantes são a infecção por Helicobacter pylori e o uso de anti-inflamatórios não esteroidais (incluindo AAS em baixas doses); uma minoria de casos não tem causa identificável (úlcera idiopática) ou está associada a condições raras como a síndrome de Zollinger-Ellison.",
    fisiopatologia:
      "O Helicobacter pylori coloniza a mucosa gástrica, induzindo inflamação crônica que compromete os mecanismos protetores locais e, em parte dos pacientes, aumenta a secreção ácida. Os AINEs comprometem a proteção da mucosa por inibição da síntese de prostaglandinas (via inibição da COX-1), reduzindo a produção de muco e bicarbonato protetores, independentemente da infecção por H. pylori.",
    classificacao:
      "Classificada por localização (gástrica vs. duodenal) e por etiologia predominante (associada a H. pylori, associada a AINE, ou idiopática). A classificação de Forrest, aplicada endoscopicamente em úlceras sangrantes, estratifica o risco de ressangramento (de sangramento ativo, Forrest Ia/Ib, a base limpa sem estigmas, Forrest III) e orienta a necessidade de terapia endoscópica.",
    quadroClinico: [
      "Dor ou desconforto epigástrico em queimação, podendo ter relação característica com as refeições (alívio com alimentação na úlcera duodenal, piora na úlcera gástrica, embora essa distinção clássica nem sempre seja confiável na prática)",
      "Pode ser assintomática, especialmente em usuários crônicos de AINE",
      "Náuseas e plenitude pós-prandial em alguns casos",
      "Sintomas de complicação (melena, hematêmese, dor abdominal súbita e intensa) quando há sangramento ou perfuração",
    ],
    diagnostico: [
      "Endoscopia digestiva alta é o exame de escolha para diagnóstico, permitindo biópsia da lesão (especialmente úlceras gástricas, pelo risco de malignidade) e teste para H. pylori",
      "Testes para H. pylori: teste respiratório da ureia, antígeno fecal, ou teste rápido da urease em biópsia endoscópica",
      "Investigação de síndrome de Zollinger-Ellison (dosagem de gastrina) em úlceras múltiplas, refratárias ou associadas a diarreia",
    ],
    examesComplementares: [
      "Endoscopia digestiva alta com biópsia (obrigatória em úlceras gástricas, para excluir malignidade)",
      "Teste respiratório da ureia ou antígeno fecal para H. pylori",
      "Classificação de Forrest em úlceras sangrantes, para estratificação de risco de ressangramento",
    ],
    diagnosticoDiferencial: [
      "Neoplasia gástrica (especialmente em úlceras gástricas, sempre biopsiadas e reavaliadas endoscopicamente até cicatrização completa)",
      "Doença do refluxo gastroesofágico",
      "Dispepsia funcional",
    ],
    tratamento: [
      "Inibidor da bomba de prótons como base do tratamento, para redução da acidez e cicatrização da úlcera",
      "Erradicação de H. pylori quando identificado, com esquema combinado de antibióticos e IBP",
      "Suspensão do AINE causal quando possível, ou associação de IBP profilático se o uso for imprescindível",
      "Terapia endoscópica (hemostasia) em úlceras sangrantes com estigmas de alto risco (Forrest Ia, Ib, IIa)",
    ],
    complicacoes: [
      "Aguda: hemorragia digestiva alta, perfuração com peritonite",
      "Crônica: estenose pilórica por cicatrização repetida (obstrução da via de saída gástrica)",
    ],
    redFlags: [
      "Dor abdominal súbita e intensa com sinais de irritação peritoneal em paciente com úlcera péptica conhecida — suspeitar de perfuração, emergência cirúrgica",
      "Hematêmese ou melena associadas a instabilidade hemodinâmica — hemorragia digestiva alta significativa, exigindo estabilização e endoscopia de urgência",
    ],
    prognostico:
      "Excelente com tratamento adequado, incluindo erradicação de H. pylori quando presente, com taxas de cura muito altas e baixo risco de recorrência quando a causa de base é corrigida; úlceras gástricas exigem reavaliação endoscópica até confirmação de cicatrização completa, pelo risco de malignidade subjacente.",
    pontosDeProva: [
      "Toda úlcera gástrica deve ser biopsiada e reavaliada endoscopicamente até cicatrização completa, pelo risco de malignidade — diferente da úlcera duodenal, onde a biópsia rotineira não é obrigatória (risco de malignidade muito menor)",
      "H. pylori e AINEs são as duas causas mais comuns de úlcera péptica e devem ser sistematicamente investigados e corrigidos, já que a erradicação/suspensão reduz drasticamente a recorrência",
    ],
    casoClinico: {
      vinheta:
        "Homem, 55 anos, em uso crônico de AINE para osteoartrose, relata dor epigástrica em queimação há semanas, com um episódio de fezes escurecidas há 2 dias. Hemoglobina: 10,8 g/dL (previamente normal).",
      pergunta: "Qual é a conduta diagnóstica e terapêutica mais apropriada?",
      raciocinio:
        "O uso crônico de AINE associado a dor epigástrica e melena sugestiva de sangramento digestivo é compatível com úlcera péptica complicada por hemorragia, provavelmente relacionada ao uso do anti-inflamatório.",
      conduta:
        "Solicitar endoscopia digestiva alta para diagnóstico, classificação de Forrest e eventual hemostasia endoscópica se houver estigmas de sangramento, suspender o AINE, iniciar inibidor da bomba de prótons, e investigar H. pylori.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "omeprazol", nome: "Omeprazol" },
    ],
    fontes: [
      { tema: "Fisiopatologia por H. pylori e AINEs", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Classificação de Forrest", fonte: "Forrest JA et al., classificação endoscópica de úlceras sangrantes" },
      { tema: "Necessidade de biópsia e reavaliação em úlcera gástrica", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "doenca-alcoolica-do-figado",
    nome: "Doença alcoólica do fígado",
    sinonimos: ["Hepatopatia alcoólica"],
    cid10: "K70",
    especialidade: "Gastroenterologia",
    etiologia: "Metabólica",
    resumo: "Espectro de lesão hepática causada pelo consumo crônico e/ou excessivo de álcool, variando de esteatose reversível a hepatite alcoólica e cirrose estabelecida.",
    definicao:
      "Espectro de doença hepática causada pelo consumo de álcool em quantidade e duração suficientes para causar lesão hepatocelular, variando desde esteatose simples (reversível com abstinência) até hepatite alcoólica aguda e cirrose hepática estabelecida.",
    epidemiologia:
      "O risco e a gravidade da lesão hepática correlacionam-se com a quantidade e duração do consumo de álcool, embora exista variabilidade individual significativa (fatores genéticos, sexo — mulheres têm maior suscetibilidade para o mesmo volume de álcool — e comorbidades associadas, como obesidade).",
    fisiopatologia:
      "O metabolismo hepático do etanol gera acetaldeído (metabólito tóxico) e altera o estado redox celular, favorecendo acúmulo de gordura nos hepatócitos (esteatose). Com exposição contínua, um processo inflamatório se sobrepõe (hepatite alcoólica), podendo evoluir para fibrose progressiva e cirrose com a persistência do consumo, através de ativação de células estelares hepáticas e deposição de colágeno.",
    classificacao:
      "Classificada pelo espectro histológico/clínico em esteatose hepática alcoólica (reversível), hepatite alcoólica (aguda, de gravidade variável) e cirrose alcoólica (fibrose avançada estabelecida). A gravidade da hepatite alcoólica aguda é estratificada pela função discriminante de Maddrey, calculada a partir do tempo de protrombina e da bilirrubina, com escore ≥32 definindo forma grave e maior indicação de tratamento específico.",
    quadroClinico: [
      "Esteatose: frequentemente assintomática, achado incidental",
      "Hepatite alcoólica: icterícia de início relativamente rápido, febre, dor em hipocôndrio direito, hepatomegalia dolorosa, em contexto de consumo importante de álcool recente",
      "Cirrose estabelecida: sinais de doença hepática crônica (telangiectasias, eritema palmar) e de hipertensão portal quando presente (ascite, varizes)",
    ],
    diagnostico: [
      "História detalhada de consumo de álcool (quantidade, duração, padrão) é essencial e frequentemente subestimada pelo paciente",
      "Relação AST/ALT tipicamente >2 sugere etiologia alcoólica (diferente de outras hepatopatias, onde ALT costuma predominar)",
      "Biópsia hepática reservada para casos de dúvida diagnóstica ou necessidade de definição de gravidade/estadiamento",
    ],
    examesComplementares: [
      "AST e ALT: elevação geralmente modesta, com relação AST/ALT >2 sugestiva de etiologia alcoólica",
      "Gama-glutamil transferase (GGT) frequentemente elevada, reforçando a suspeita de consumo de álcool",
      "Função discriminante de Maddrey em hepatite alcoólica aguda (tempo de protrombina e bilirrubina) para estratificação de gravidade",
    ],
    diagnosticoDiferencial: [
      "Doença hepática gordurosa não alcoólica",
      "Hepatites virais",
      "Hepatite induzida por drogas",
    ],
    tratamento: [
      "Abstinência completa de álcool é a intervenção mais importante em todos os estágios, sendo a única capaz de reverter a esteatose e deter a progressão da fibrose",
      "Suporte nutricional, já que a desnutrição é comum e agrava o prognóstico",
      "Corticosteroide (prednisolona, preferida à prednisona em hepatopatas pela ausência de necessidade de conversão hepática) em hepatite alcoólica grave (Maddrey ≥32), quando não há contraindicação",
      "Tratamento das complicações da cirrose quando presente, incluindo rastreamento de varizes esofágicas e carcinoma hepatocelular",
    ],
    complicacoes: [
      "Aguda: hepatite alcoólica grave com insuficiência hepática aguda sobre doença crônica",
      "Crônica: cirrose hepática e suas complicações (hipertensão portal, ascite, encefalopatia, carcinoma hepatocelular)",
    ],
    redFlags: [
      "Icterícia associada a febre e dor em hipocôndrio direito em paciente com consumo importante de álcool recente — investigar hepatite alcoólica aguda e calcular a função discriminante de Maddrey para avaliar gravidade",
    ],
    prognostico:
      "A esteatose isolada tem excelente prognóstico com abstinência; a hepatite alcoólica grave (Maddrey ≥32) tem mortalidade significativa a curto prazo mesmo com tratamento; a progressão para cirrose está diretamente relacionada à manutenção do consumo de álcool ao longo do tempo.",
    pontosDeProva: [
      "A relação AST/ALT >2 é sugestiva (embora não exclusiva) de doença hepática alcoólica, contrastando com a maioria das outras hepatopatias, em que a ALT costuma ser predominante",
      "A prednisolona é preferida à prednisona no tratamento da hepatite alcoólica grave, já que a prednisona é pró-droga que depende de conversão hepática à forma ativa — conversão que pode estar comprometida em hepatopatia significativa",
    ],
    casoClinico: {
      vinheta:
        "Homem, 48 anos, com histórico de etilismo importante há anos, apresenta icterícia progressiva, febre baixa e dor em hipocôndrio direito há 1 semana, após episódio de consumo intenso de álcool. AST 180 U/L, ALT 70 U/L, bilirrubina total 8 mg/dL, tempo de protrombina prolongado.",
      pergunta: "Qual é a hipótese diagnóstica e como avaliar a gravidade deste quadro?",
      raciocinio:
        "O contexto de consumo importante de álcool associado a icterícia, febre e dor hepática, com relação AST/ALT >2, é compatível com hepatite alcoólica aguda. A gravidade deve ser avaliada pela função discriminante de Maddrey, calculada a partir do tempo de protrombina e da bilirrubina.",
      conduta:
        "Calcular a função discriminante de Maddrey; se ≥32 (forma grave), considerar corticosteroide (prednisolona) na ausência de contraindicações, associado a suporte nutricional e reforço da abstinência alcoólica completa.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Espectro histológico e fisiopatologia", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Função discriminante de Maddrey e indicação de corticosteroide", fonte: "Maddrey WC et al., critério clássico de gravidade da hepatite alcoólica" },
      { tema: "Prednisolona no tratamento da hepatite alcoólica grave (ainda sem ficha própria no site)", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "cirrose-hepatica",
    nome: "Fibrose e cirrose hepáticas",
    sinonimos: ["Cirrose hepática"],
    cid10: "K74",
    especialidade: "Gastroenterologia",
    etiologia: "Multifatorial",
    resumo: "Estágio final e irreversível de fibrose hepática difusa, com distorção da arquitetura normal do fígado em nódulos de regeneração, resultante de diversas doenças hepáticas crônicas.",
    definicao:
      "Estágio avançado de fibrose hepática, caracterizado pela substituição difusa do parênquima hepático normal por tecido fibroso e nódulos de regeneração, resultando em disfunção hepatocelular progressiva e hipertensão portal.",
    epidemiologia:
      "Causas mais comuns incluem doença hepática alcoólica, hepatites virais crônicas (B e C), doença hepática gordurosa não alcoólica/esteato-hepatite associada à disfunção metabólica, e, menos comumente, doenças autoimunes e metabólicas hereditárias (hemocromatose, doença de Wilson).",
    fisiopatologia:
      "A lesão hepatocelular crônica e persistente, independentemente da causa, ativa células estelares hepáticas, que se transformam em miofibroblastos produtores de colágeno, depositando tecido fibroso progressivamente. A distorção da arquitetura vascular hepática resultante aumenta a resistência ao fluxo portal, causando hipertensão portal, com suas consequências clínicas (varizes, ascite, esplenomegalia).",
    classificacao:
      "Classificação de Child-Pugh (baseada em bilirrubina, albumina, tempo de protrombina/INR, presença e grau de ascite e de encefalopatia) estratifica em classes A (compensada, melhor prognóstico), B (intermediária) e C (descompensada, pior prognóstico). O escore MELD (baseado em bilirrubina, INR e creatinina) é usado principalmente para priorização em lista de transplante hepático.",
    quadroClinico: [
      "Fase compensada: pode ser assintomática ou com sintomas inespecíficos (fadiga, mal-estar)",
      "Estigmas de hepatopatia crônica: telangiectasias (aranhas vasculares), eritema palmar, ginecomastia",
      "Descompensação: ascite, icterícia, encefalopatia hepática, hemorragia digestiva por varizes esofágicas",
      "Esplenomegalia e circulação colateral abdominal (caput medusae) em hipertensão portal estabelecida",
    ],
    diagnostico: [
      "Combinação de achados clínicos, laboratoriais (plaquetopenia, coagulopatia, hipoalbuminemia) e de imagem (nodularidade hepática, esplenomegalia) sustentam o diagnóstico",
      "Elastografia hepática (não invasiva) ou biópsia hepática para confirmação e quantificação do grau de fibrose",
      "Investigação etiológica dirigida (sorologias virais, autoanticorpos, ferritina/saturação de transferrina, ceruloplasmina) para identificar a causa de base",
    ],
    examesComplementares: [
      "Plaquetas (trombocitopenia por hiperesplenismo é achado precoce sugestivo de hipertensão portal)",
      "Albumina e tempo de protrombina/INR (refletem função de síntese hepática)",
      "Elastografia hepática para quantificação não invasiva de fibrose",
      "Endoscopia digestiva alta para rastreamento de varizes esofágicas em cirrose estabelecida",
    ],
    diagnosticoDiferencial: [
      "Hipertensão portal não cirrótica (trombose de veia porta, esquistossomose hepatoesplênica)",
      "Insuficiência cardíaca direita com congestão hepática crônica",
    ],
    tratamento: [
      "Tratamento e controle da causa de base sempre que possível (abstinência alcoólica, antivirais na hepatite viral, controle metabólico na esteato-hepatite)",
      "Diurético (espironolactona, associada ou não a furosemida) como base do tratamento da ascite por hipertensão portal, refletindo o hiperaldosteronismo secundário característico da cirrose",
      "Betabloqueador não seletivo e/ou ligadura elástica endoscópica para profilaxia de sangramento por varizes esofágicas de médio/grosso calibre",
      "Avaliação para transplante hepático em cirrose descompensada (Child-Pugh B/C) ou MELD elevado",
    ],
    complicacoes: [
      "Aguda: hemorragia digestiva alta por ruptura de varizes esofágicas, peritonite bacteriana espontânea, encefalopatia hepática aguda",
      "Crônica: ascite refratária, síndrome hepatorrenal, carcinoma hepatocelular (exigindo rastreamento periódico em todos os cirróticos)",
    ],
    redFlags: [
      "Hematêmese volumosa em paciente cirrótico conhecido — suspeitar de sangramento varicoso, emergência com necessidade de estabilização hemodinâmica e endoscopia urgente",
      "Confusão mental de início ou piora recente em cirrótico — investigar encefalopatia hepática e seus fatores precipitantes (infecção, sangramento, constipação, distúrbio eletrolítico)",
    ],
    prognostico:
      "Diretamente relacionado à classificação de Child-Pugh e ao escore MELD; a cirrose compensada (Child A) pode ter sobrevida prolongada, enquanto a cirrose descompensada (Child C) tem prognóstico reservado sem transplante hepático.",
    pontosDeProva: [
      "A trombocitopenia é frequentemente o primeiro sinal laboratorial de hipertensão portal em cirrose compensada, precedendo outras alterações mais evidentes de disfunção hepática",
      "Todos os pacientes cirróticos devem ser incluídos em programa de rastreamento periódico de carcinoma hepatocelular, independentemente da etiologia da cirrose",
    ],
    casoClinico: {
      vinheta:
        "Homem, 56 anos, com hepatite C crônica não tratada, é encontrado com plaquetas de 90.000/mm³ em exame de rotina, sem outras alterações laboratoriais significativas. Ultrassonografia mostra fígado heterogêneo e nodular, com esplenomegalia leve.",
      pergunta: "Qual é a hipótese diagnóstica mais provável e a conduta subsequente?",
      raciocinio:
        "A trombocitopenia associada a fígado nodular e esplenomegalia em paciente com hepatite C crônica de longa data é sugestiva de cirrose hepática já estabelecida, mesmo em fase compensada e com outros parâmetros laboratoriais ainda preservados.",
      conduta:
        "Confirmar o grau de fibrose por elastografia hepática, calcular a classificação de Child-Pugh, iniciar rastreamento de varizes esofágicas por endoscopia e de carcinoma hepatocelular por ultrassonografia periódica, e encaminhar para tratamento antiviral da hepatite C.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "espironolactona", nome: "Espironolactona" },
    ],
    medicamentosNota:
      "A espironolactona é usada especificamente para o controle da ascite por hipertensão portal (hiperaldosteronismo secundário). Ela não trata a fibrose hepática em si nem substitui o tratamento da causa de base ou a profilaxia de varizes (betabloqueador não seletivo, ainda sem ficha própria no site).",
    fontes: [
      { tema: "Fisiopatologia e ativação de células estelares", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Classificação de Child-Pugh e escore MELD", fonte: "Pugh RN et al. / United Network for Organ Sharing, critérios de MELD para priorização de transplante" },
      { tema: "Espironolactona no tratamento da ascite cirrótica", fonte: "Goodman & Gilman, 13ª ed." },
    ],
  },
  {
    slug: "insuficiencia-hepatica",
    nome: "Insuficiência hepática",
    sinonimos: ["Falência hepática", "Insuficiência hepática aguda"],
    cid10: "K72",
    especialidade: "Gastroenterologia",
    etiologia: "Multifatorial",
    resumo: "Perda grave da função hepática, podendo ser aguda (em fígado previamente normal) ou representar a descompensação de doença hepática crônica de base, com risco de encefalopatia e coagulopatia significativas.",
    definicao:
      "Síndrome caracterizada por perda grave da capacidade funcional do fígado, classicamente definida na forma aguda (insuficiência hepática aguda/fulminante) pela combinação de coagulopatia (INR ≥1,5) e encefalopatia hepática de qualquer grau, em paciente sem doença hepática crônica prévia conhecida, com início dos sintomas há menos de 26 semanas.",
    epidemiologia:
      "A insuficiência hepática aguda é relativamente rara, com causas variando conforme a região — intoxicação por paracetamol é a causa mais comum em muitos países desenvolvidos, enquanto hepatites virais predominam em outras regiões. A insuficiência hepática crônica descompensada, mais comum, geralmente representa a evolução de cirrose de base já estabelecida.",
    fisiopatologia:
      "Na insuficiência hepática aguda, uma agressão hepatocelular maciça e rápida (tóxica, viral, isquêmica, autoimune) supera a capacidade regenerativa do fígado, levando à perda abrupta das funções de síntese (fatores de coagulação, albumina) e de depuração (amônia, toxinas), com consequente coagulopatia e encefalopatia. Na insuficiência hepática crônica descompensada, um fator precipitante (infecção, sangramento, uso de sedativos, distúrbio eletrolítico) desestabiliza uma reserva funcional hepática já cronicamente comprometida pela cirrose de base.",
    classificacao:
      "Classificada em insuficiência hepática aguda (sem doença hepática prévia, definida por coagulopatia + encefalopatia em até 26 semanas do início dos sintomas) e insuficiência hepática crônica agudizada/descompensação aguda sobre crônica (fator precipitante desestabilizando cirrose de base já estabelecida) — distinção fundamental, já que a abordagem, o prognóstico e os critérios de transplante diferem entre as duas formas.",
    quadroClinico: [
      "Icterícia progressiva",
      "Encefalopatia hepática: de confusão leve a coma, conforme a gravidade",
      "Sinais de coagulopatia (sangramentos, equimoses)",
      "Na descompensação de doença crônica: piora de ascite, encefalopatia ou surgimento de novas complicações sobre um quadro de cirrose já conhecida",
    ],
    diagnostico: [
      "Coagulograma (INR) e avaliação do grau de encefalopatia hepática (critérios de West Haven) são centrais para caracterização e classificação de gravidade",
      "Investigação etiológica dirigida: dosagem de paracetamol e outras toxinas, sorologias virais, autoanticorpos, conforme suspeita clínica",
      "Identificação de fator precipitante em pacientes com cirrose de base conhecida (infecção, sangramento, uso de sedativos, distúrbio eletrolítico)",
    ],
    examesComplementares: [
      "INR ≥1,5 associado a encefalopatia hepática de qualquer grau, em paciente sem hepatopatia prévia, define insuficiência hepática aguda",
      "Amônia sérica (apoio ao diagnóstico de encefalopatia, embora a correlação com gravidade clínica seja imperfeita)",
      "Dosagem de paracetamol sérico quando há suspeita de intoxicação (causa importante e potencialmente tratável)",
    ],
    diagnosticoDiferencial: [
      "Outras causas de alteração do nível de consciência (intoxicações, distúrbios metabólicos, causas neurológicas primárias)",
      "Coagulopatia por outras causas (deficiência de vitamina K, coagulação intravascular disseminada)",
    ],
    tratamento: [
      "Suporte intensivo, com monitorização e manejo de complicações (hipoglicemia, edema cerebral, coagulopatia, infecções)",
      "N-acetilcisteína em insuficiência hepática aguda por intoxicação por paracetamol (antídoto específico), independentemente do tempo decorrido da ingestão em muitos protocolos",
      "Identificação e correção do fator precipitante em descompensação de doença hepática crônica de base",
      "Avaliação precoce para transplante hepático de urgência em critérios de mau prognóstico (ex.: critérios de King's College na insuficiência hepática aguda)",
    ],
    complicacoes: [
      "Aguda: edema cerebral com hipertensão intracraniana, coagulopatia grave com sangramento, disfunção de múltiplos órgãos",
      "Crônica (na forma de descompensação aguda sobre crônica): progressão para insuficiência hepática terminal irreversível sem transplante",
    ],
    redFlags: [
      "Encefalopatia hepática associada a coagulopatia significativa em paciente sem doença hepática prévia conhecida — reconhecer como insuficiência hepática aguda, emergência que exige avaliação imediata para transplante de urgência",
    ],
    prognostico:
      "Variável conforme a causa e a gravidade; a insuficiência hepática aguda por paracetamol, quando tratada precocemente com N-acetilcisteína, tem prognóstico mais favorável que outras etiologias; casos que preenchem critérios de mau prognóstico (ex.: King's College) têm indicação de transplante hepático de urgência, com sobrevida significativamente reduzida sem esse recurso.",
    pontosDeProva: [
      "A definição clássica de insuficiência hepática aguda exige ausência de doença hepática prévia — a mesma combinação de coagulopatia e encefalopatia em paciente com cirrose conhecida caracteriza descompensação aguda sobre crônica, entidade com abordagem e prognóstico distintos",
      "A N-acetilcisteína deve ser considerada na insuficiência hepática aguda por paracetamol mesmo além da janela clássica de 8-10 horas usada para prevenção primária, pelo benefício demonstrado mesmo em apresentações mais tardias com lesão hepática já estabelecida",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 27 anos, sem doença hepática prévia, é trazida por confusão mental progressiva 3 dias após ingestão intencional de grande quantidade de paracetamol. INR: 2,8. Bilirrubina total: 6 mg/dL.",
      pergunta: "Qual é o diagnóstico e a conduta terapêutica específica imediata?",
      raciocinio:
        "A combinação de coagulopatia significativa (INR ≥1,5) e encefalopatia hepática em paciente sem doença hepática prévia, após ingestão de grande quantidade de paracetamol, caracteriza insuficiência hepática aguda por intoxicação paracetamol-induzida.",
      conduta:
        "Iniciar N-acetilcisteína imediatamente, independentemente do tempo decorrido da ingestão, dado o quadro de lesão hepática já estabelecida, oferecer suporte intensivo para as complicações, e avaliar critérios de mau prognóstico para indicação precoce de transplante hepático de urgência.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Definição e distinção aguda vs. descompensação crônica", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Critérios de King's College para indicação de transplante", fonte: "O'Grady JG et al., critérios de King's College para insuficiência hepática aguda" },
      { tema: "N-acetilcisteína na intoxicação por paracetamol (ainda sem ficha própria no site com essa indicação)", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "pancreatite-aguda",
    nome: "Pancreatite aguda",
    sinonimos: ["Pancreatite"],
    cid10: "K85",
    especialidade: "Gastroenterologia",
    etiologia: "Multifatorial",
    resumo: "Inflamação aguda do pâncreas, mais comumente causada por cálculos biliares ou consumo de álcool, variando de quadro leve autolimitado a formas graves com falência orgânica.",
    definicao:
      "Processo inflamatório agudo do pâncreas, com ativação prematura de enzimas digestivas dentro do próprio parênquima pancreático, causando autodigestão tecidual, definido pela presença de pelo menos dois dos três critérios: dor abdominal característica, elevação de enzimas pancreáticas (lipase/amilase) pelo menos três vezes o limite superior da normalidade, e achados de imagem compatíveis.",
    epidemiologia:
      "Cálculos biliares (obstrução do ducto pancreático por migração de cálculo) e consumo excessivo de álcool são as duas causas mais comuns, respondendo pela maioria dos casos. Outras causas incluem hipertrigliceridemia grave, medicamentos, procedimentos (pancreatite pós-CPRE) e causas idiopáticas.",
    fisiopatologia:
      "A ativação prematura de tripsinogênio em tripsina dentro do parênquima pancreático (em vez de no duodeno, seu local fisiológico de ativação) desencadeia uma cascata de ativação de outras enzimas digestivas, causando autodigestão do tecido pancreático, resposta inflamatória local intensa e, em casos graves, resposta inflamatória sistêmica com potencial de disfunção de múltiplos órgãos.",
    classificacao:
      "Classificação de Atlanta revisada (2012) em leve (sem falência orgânica nem complicações locais/sistêmicas), moderadamente grave (falência orgânica transitória, resolvendo em até 48 horas, e/ou complicações locais) e grave (falência orgânica persistente por mais de 48 horas) — determinante central do prognóstico e da intensidade do suporte necessário.",
    quadroClinico: [
      "Dor abdominal intensa em andar superior, frequentemente irradiada para o dorso ('em faixa'), de início agudo",
      "Náuseas e vômitos associados",
      "Distensão abdominal e redução de ruídos hidroaéreos (íleo paralítico associado)",
      "Sinais de gravidade em casos avançados: equimose periumbilical (sinal de Cullen) ou em flancos (sinal de Grey-Turner), refletindo hemorragia retroperitoneal",
    ],
    diagnostico: [
      "Pelo menos dois dos três critérios: dor abdominal característica, lipase ou amilase ≥3 vezes o limite superior da normalidade, e achados de imagem compatíveis (tomografia ou ressonância)",
      "Lipase é preferível à amilase por maior sensibilidade e especificidade, com elevação mais prolongada",
      "Investigação etiológica: ultrassonografia abdominal para pesquisa de colelitíase, triglicerídeos e histórico de consumo de álcool",
    ],
    examesComplementares: [
      "Lipase sérica ≥3 vezes o limite superior da normalidade (mais sensível/específica que amilase)",
      "Ultrassonografia abdominal para investigação de etiologia biliar",
      "Tomografia de abdome com contraste (idealmente após 72 horas, se necessária, para avaliar necrose pancreática) em casos de dúvida diagnóstica ou suspeita de complicações",
      "Proteína C-reativa e hematócrito seriados como marcadores indiretos de gravidade/hemoconcentração",
    ],
    diagnosticoDiferencial: [
      "Úlcera péptica perfurada",
      "Colecistite aguda",
      "Isquemia mesentérica aguda",
      "Infarto agudo do miocárdio de parede inferior (pode mimetizar dor em andar superior do abdome)",
    ],
    tratamento: [
      "Hidratação venosa vigorosa nas primeiras 24 horas, pilar central do tratamento inicial",
      "Analgesia adequada para controle da dor",
      "Suporte nutricional precoce (via oral ou enteral assim que tolerado), preferível à nutrição parenteral quando possível",
      "Colecistectomia durante a mesma internação em pancreatite biliar leve, para prevenção de recorrência; CPRE de urgência em colangite associada ou obstrução biliar persistente",
    ],
    complicacoes: [
      "Aguda: necrose pancreática (estéril ou infectada), falência orgânica (respiratória, renal, cardiovascular), síndrome compartimental abdominal",
      "Crônica: pseudocisto pancreático, pancreatite crônica em casos de episódios recorrentes",
    ],
    redFlags: [
      "Sinais de Cullen ou Grey-Turner, hipotensão ou disfunção orgânica associada à dor pancreática — sinais de gravidade que exigem suporte intensivo e reavaliação frequente",
    ],
    prognostico:
      "Bom na maioria dos casos leves, com resolução completa; a forma grave (falência orgânica persistente) associa-se a mortalidade significativa, especialmente quando há necrose pancreática infectada.",
    pontosDeProva: [
      "A lipase é preferível à amilase para diagnóstico de pancreatite aguda, por maior sensibilidade e especificidade e por permanecer elevada por mais tempo",
      "A hidratação venosa vigorosa nas primeiras 24 horas é a intervenção inicial mais importante e com maior impacto no desfecho da pancreatite aguda",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 45 anos, obesa, relata dor abdominal intensa em andar superior, irradiada para o dorso, associada a náuseas e vômitos há 6 horas, após refeição gordurosa. Lipase sérica: 5 vezes o limite superior da normalidade. Ultrassonografia mostra colelitíase.",
      pergunta: "Qual é o diagnóstico e a conduta inicial mais apropriada?",
      raciocinio:
        "A dor característica associada à lipase elevada (≥3 vezes o limite superior) já preenche 2 dos 3 critérios diagnósticos de pancreatite aguda, dispensando necessariamente imagem adicional para confirmação. O achado de colelitíase sugere etiologia biliar.",
      conduta:
        "Iniciar hidratação venosa vigorosa, analgesia adequada e jejum inicial com reintrodução precoce da alimentação conforme tolerância, e planejar colecistectomia durante a mesma internação, dada a etiologia biliar identificada.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Critérios diagnósticos e classificação de Atlanta revisada", fonte: "Classificação de Atlanta Revisada, 2012 (Banks PA et al.)" },
      { tema: "Fisiopatologia da ativação enzimática prematura", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Analgesia específica no tratamento (ainda sem ficha própria no site com essa indicação)", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "colelitiase",
    nome: "Colelitíase",
    sinonimos: ["Cálculo biliar", "Cálculo de vesícula"],
    cid10: "K80",
    especialidade: "Gastroenterologia",
    etiologia: "Metabólica",
    resumo: "Presença de cálculos na vesícula biliar, majoritariamente de colesterol, geralmente assintomática mas com risco de complicações como cólica biliar, colecistite e coledocolitíase.",
    definicao:
      "Presença de cálculos formados dentro da vesícula biliar, resultantes de desequilíbrio na composição da bile (predominantemente supersaturação de colesterol na maioria dos casos em países ocidentais), podendo permanecer assintomática por toda a vida ou causar sintomas e complicações quando migram ou obstruem o trato biliar.",
    epidemiologia:
      "Extremamente comum, com fatores de risco clássicos resumidos informalmente pelos '4 Fs' (female, forty, fertile, fat — sexo feminino, idade em torno de 40 anos, multiparidade/fertilidade e obesidade), embora ocorra em ampla variedade de perfis. A maioria dos portadores de colelitíase permanece assintomática por toda a vida.",
    fisiopatologia:
      "Os cálculos de colesterol (predominantes) formam-se quando a bile se torna supersaturada em colesterol em relação à capacidade solubilizadora dos sais biliares e da lecitina, favorecendo a nucleação e o crescimento de cristais. A hipomotilidade da vesícula biliar (favorecida por jejum prolongado, gestação, nutrição parenteral) contribui para a estase biliar que facilita esse processo. Cálculos de pigmento (menos comuns) associam-se a hemólise crônica ou infecção biliar.",
    classificacao:
      "Classificados por composição em cálculos de colesterol (predominantes, geralmente radiotransparentes) e cálculos pigmentares (pretos, associados a hemólise crônica; ou marrons, associados a infecção biliar crônica/estase). Clinicamente, a colelitíase é classificada em assintomática (a maioria) e sintomática (cólica biliar) ou complicada (colecistite, coledocolitíase, colangite, pancreatite biliar).",
    quadroClinico: [
      "Assintomática na maioria dos casos, achado incidental em exame de imagem",
      "Cólica biliar: dor em hipocôndrio direito ou epigástrio, de início súbito, geralmente pós-prandial (especialmente após refeições gordurosas), com duração de minutos a poucas horas e resolução espontânea",
      "Náuseas associadas à dor, sem febre ou sinais de irritação peritoneal (diferente de colecistite)",
    ],
    diagnostico: [
      "Ultrassonografia abdominal é o exame de escolha, com alta sensibilidade e especificidade para identificação de cálculos na vesícula biliar",
      "Ausência de febre, leucocitose ou sinais de irritação peritoneal ajuda a diferenciar cólica biliar simples de colecistite aguda",
    ],
    examesComplementares: [
      "Ultrassonografia abdominal (exame de escolha, alta acurácia diagnóstica)",
      "Provas de função hepática e bilirrubinas quando há suspeita de migração de cálculo para o colédoco (coledocolitíase)",
    ],
    diagnosticoDiferencial: [
      "Úlcera péptica",
      "Colecistite aguda (quando há febre e sinais de irritação peritoneal associados)",
      "Pancreatite aguda de etiologia biliar",
    ],
    tratamento: [
      "Observação em colelitíase assintomática, sem indicação rotineira de tratamento invasivo",
      "Colecistectomia eletiva (preferencialmente laparoscópica) em colelitíase sintomática recorrente, para prevenir complicações",
      "Orientação dietética (redução de gorduras) para minimizar episódios de cólica biliar enquanto aguarda ou não indica cirurgia",
    ],
    complicacoes: [
      "Aguda: colecistite aguda, coledocolitíase com icterícia obstrutiva, colangite, pancreatite aguda biliar",
      "Crônica: colecistite crônica com vesícula em porcelana (calcificação, associada a maior risco de neoplasia)",
    ],
    redFlags: [
      "Dor biliar associada a febre, icterícia ou sinais de irritação peritoneal — sugere complicação (colecistite, coledocolitíase, colangite), exigindo investigação e conduta distintas da colelitíase simples",
    ],
    prognostico:
      "Excelente na colelitíase assintomática, que na maioria dos casos nunca se torna sintomática; a colecistectomia eletiva em pacientes sintomáticos tem baixa morbidade e previne complicações mais graves.",
    pontosDeProva: [
      "A colelitíase assintomática, achado incidental muito comum, geralmente não requer tratamento — a colecistectomia profilática não é indicada rotineiramente nesses casos",
      "Os '4 Fs' (female, forty, fertile, fat) resumem informalmente o perfil de risco clássico, mas não devem ser usados para excluir a hipótese em pacientes fora desse perfil",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 42 anos, obesa, relata episódios recorrentes de dor em hipocôndrio direito após refeições gordurosas, com duração de cerca de 1 hora e resolução espontânea, sem febre. Ultrassonografia confirma múltiplos cálculos na vesícula biliar, sem espessamento de parede.",
      pergunta: "Qual é a conduta mais apropriada diante deste quadro?",
      raciocinio:
        "O padrão de dor biliar recorrente pós-prandial, sem febre ou sinais de irritação peritoneal, associado à confirmação ultrassonográfica de colelitíase sem espessamento de parede vesicular, caracteriza colelitíase sintomática (cólica biliar), sem sinais de colecistite associada.",
      conduta:
        "Indicar colecistectomia eletiva (preferencialmente laparoscópica), dada a recorrência dos sintomas, orientando quanto a medidas dietéticas enquanto aguarda o procedimento.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Fisiopatologia da formação de cálculos de colesterol", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Perfil de risco e história natural", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "colecistite",
    nome: "Colecistite",
    sinonimos: ["Colecistite aguda"],
    cid10: "K81",
    especialidade: "Gastroenterologia",
    etiologia: "Multifatorial",
    resumo: "Inflamação aguda da vesícula biliar, na grande maioria dos casos secundária à obstrução do ducto cístico por cálculo, com risco de infecção secundária e complicações se não tratada.",
    definicao:
      "Inflamação aguda da parede da vesícula biliar, na grande maioria dos casos (colecistite calculosa) decorrente da obstrução persistente do ducto cístico por um cálculo, com inflamação química inicial seguida frequentemente de infecção bacteriana secundária.",
    epidemiologia:
      "É a principal complicação sintomática da colelitíase; a colecistite acalculosa (sem cálculo identificável), menos comum, ocorre predominantemente em pacientes graves internados em unidade de terapia intensiva, com estase biliar e isquemia da vesícula biliar como mecanismos propostos.",
    fisiopatologia:
      "A obstrução persistente do ducto cístico por um cálculo impactado impede o esvaziamento da vesícula biliar, causando distensão, aumento da pressão intraluminal e inflamação química da parede pela bile concentrada e estagnada; a infecção bacteriana secundária (frequentemente por bactérias entéricas) se sobrepõe em uma parcela significativa dos casos, podendo progredir para complicações como empiema vesicular, gangrena ou perfuração se não tratada.",
    classificacao:
      "Classificada em calculosa (a grande maioria dos casos) e acalculosa (mais rara, em pacientes graves/críticos). Os critérios de Tóquio (atualização de 2018) estratificam a gravidade em grau I (leve), grau II (moderada, com marcadores inflamatórios importantes ou achados locais mais extensos) e grau III (grave, com disfunção orgânica associada), orientando o momento ideal da cirurgia.",
    quadroClinico: [
      "Dor persistente em hipocôndrio direito, mais prolongada que a cólica biliar simples (geralmente >6 horas)",
      "Febre e sinal de Murphy positivo (interrupção da inspiração à palpação do hipocôndrio direito, por dor)",
      "Náuseas e vômitos associados",
      "Leucocitose ao hemograma",
    ],
    diagnostico: [
      "Combinação de achados clínicos (dor localizada, sinal de Murphy, febre), laboratoriais (leucocitose, provas inflamatórias elevadas) e de imagem (espessamento de parede vesicular >4 mm, distensão vesicular, líquido pericolecístico) conforme os critérios de Tóquio",
      "Ultrassonografia abdominal é o exame de imagem inicial de escolha",
      "Cintilografia biliar (HIDA) reservada para casos de dúvida diagnóstica, quando a ultrassonografia não é conclusiva",
    ],
    examesComplementares: [
      "Ultrassonografia abdominal: espessamento de parede vesicular (>4 mm), distensão, líquido pericolecístico, sinal de Murphy ultrassonográfico",
      "Hemograma com leucocitose e proteína C-reativa elevada",
      "Provas de função hepática (avaliação de coledocolitíase/colangite associada quando há icterícia)",
    ],
    diagnosticoDiferencial: [
      "Cólica biliar simples (sem febre nem sinais inflamatórios sistêmicos)",
      "Úlcera péptica perfurada",
      "Pancreatite aguda",
      "Apendicite aguda (especialmente em posições atípicas do apêndice)",
    ],
    tratamento: [
      "Antibioticoterapia empírica com cobertura para flora entérica, associada ao manejo cirúrgico",
      "Colecistectomia (preferencialmente laparoscópica) precoce, idealmente dentro das primeiras 72 horas do início dos sintomas em pacientes com boas condições clínicas",
      "Colecistostomia percutânea (drenagem) como alternativa em pacientes com alto risco cirúrgico ou colecistite grave (grau III) instáveis, com colecistectomia postergada",
      "Analgesia e hidratação de suporte",
    ],
    complicacoes: [
      "Aguda: empiema vesicular, gangrena e perfuração da vesícula biliar, peritonite",
      "Crônica: fístula colecistoentérica, síndrome de Mirizzi (compressão extrínseca do ducto hepático comum por cálculo impactado no ducto cístico/colo vesicular)",
    ],
    redFlags: [
      "Dor em hipocôndrio direito associada a febre alta, hipotensão e confusão mental — sugere colecistite grave (grau III, critérios de Tóquio) com risco de sepse, exigindo manejo intensivo imediato",
    ],
    prognostico:
      "Bom com tratamento cirúrgico adequado e oportuno, especialmente quando a colecistectomia é realizada precocemente; atraso no diagnóstico e tratamento aumenta o risco de complicações locais graves (gangrena, perfuração).",
    pontosDeProva: [
      "A colecistite se diferencia clinicamente da cólica biliar simples pela duração prolongada da dor (>6 horas), febre e sinais inflamatórios sistêmicos — a cólica biliar simples não deve ter febre nem leucocitose associadas",
      "A colecistectomia precoce (idealmente nas primeiras 72 horas) é preferível à cirurgia tardia na maioria dos pacientes com boas condições clínicas, associando-se a menor morbidade que o tratamento conservador seguido de cirurgia de intervalo",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 50 anos, relata dor persistente em hipocôndrio direito há 10 horas, associada a febre (38,5°C) e vômitos. Exame físico com sinal de Murphy positivo. Leucócitos: 15.000/mm³. Ultrassonografia mostra espessamento de parede vesicular de 6 mm e múltiplos cálculos.",
      pergunta: "Qual é o diagnóstico mais provável e a conduta terapêutica apropriada?",
      raciocinio:
        "A dor prolongada (>6 horas), associada a febre, leucocitose, sinal de Murphy positivo e espessamento de parede vesicular à ultrassonografia, preenche os critérios de Tóquio para colecistite aguda, diferenciando-se da cólica biliar simples.",
      conduta:
        "Iniciar antibioticoterapia empírica com cobertura para flora entérica, hidratação e analgesia, e programar colecistectomia laparoscópica precoce, idealmente dentro das primeiras 72 horas do início dos sintomas.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "amoxicilina-clavulanato", nome: "Amoxicilina + Clavulanato" },
    ],
    fontes: [
      { tema: "Fisiopatologia e critérios diagnósticos de Tóquio", fonte: "Tokyo Guidelines 2018 for the Diagnosis and Management of Acute Cholecystitis" },
      { tema: "Momento ideal da colecistectomia", fonte: "Tokyo Guidelines 2018 for the Diagnosis and Management of Acute Cholecystitis" },
      { tema: "Cobertura antibiótica empírica com amoxicilina-clavulanato", fonte: "Sanford Guide to Antimicrobial Therapy" },
    ],
  },
  {
    slug: "doenca-de-crohn",
    nome: "Doença de Crohn",
    sinonimos: ["Crohn"],
    cid10: "K50",
    especialidade: "Gastroenterologia",
    etiologia: "Autoimune",
    resumo: "Doença inflamatória intestinal crônica que pode acometer qualquer segmento do trato gastrointestinal de forma transmural e descontínua, com predileção pelo íleo terminal.",
    definicao:
      "Doença inflamatória intestinal crônica de etiologia imunomediada, caracterizada por inflamação transmural (acometendo todas as camadas da parede intestinal) que pode afetar qualquer segmento do trato gastrointestinal, da boca ao ânus, de forma tipicamente descontínua ('lesões salteadas').",
    epidemiologia:
      "Incidência crescente globalmente, com pico de início entre o final da adolescência e o início da idade adulta; fatores genéticos (predisposição poligênica) e ambientais (tabagismo como fator de risco, diferente da colite ulcerativa) interagem na patogênese.",
    fisiopatologia:
      "Uma resposta imune anormal e persistente contra a microbiota intestinal, em indivíduos geneticamente predispostos, causa inflamação transmural crônica com formação de granulomas não caseosos em uma parcela dos casos, fibrose e, ao longo do tempo, complicações estruturais como estenoses e fístulas, decorrentes do acometimento de espessura total da parede intestinal.",
    classificacao:
      "Classificação de Montreal considera idade ao diagnóstico, localização (ileal, colônica, ileocolônica, ou alta gastrointestinal isolada) e comportamento da doença (inflamatório não estenosante/não penetrante, estenosante, ou penetrante/fistulizante) — o comportamento evolui frequentemente ao longo do tempo, de inflamatório para estenosante/penetrante.",
    quadroClinico: [
      "Dor abdominal, frequentemente em quadrante inferior direito (refletindo o acometimento preferencial do íleo terminal)",
      "Diarreia crônica, podendo ou não ter sangue (menos comum que na colite ulcerativa)",
      "Perda de peso e sintomas constitucionais",
      "Manifestações perianais (fístulas, abscessos, fissuras) e extraintestinais (artrite, eritema nodoso, uveíte) em uma parcela dos pacientes",
    ],
    diagnostico: [
      "Colonoscopia com ileoscopia e biópsias múltiplas, evidenciando lesões descontínuas ('salteadas'), úlceras aftoides, padrão em paralelepípedo ('cobblestone') e, histologicamente, inflamação transmural com granulomas não caseosos em parte dos casos",
      "Exames de imagem (entero-ressonância ou entero-tomografia) para avaliação de acometimento de intestino delgado não alcançado pela colonoscopia e de complicações (estenoses, fístulas, abscessos)",
      "Calprotectina fecal elevada como marcador não invasivo de atividade inflamatória intestinal",
    ],
    examesComplementares: [
      "Colonoscopia com ileoscopia e biópsias múltiplas",
      "Entero-ressonância magnética ou entero-tomografia para avaliação de intestino delgado e complicações estruturais",
      "Calprotectina fecal (marcador de atividade inflamatória, útil também no seguimento)",
    ],
    diagnosticoDiferencial: [
      "Colite ulcerativa (principal diferencial, distinção por padrão de acometimento e características endoscópicas/histológicas)",
      "Tuberculose intestinal (importante diferencial em áreas endêmicas, pode mimetizar acometimento ileocecal)",
      "Colite infecciosa aguda",
    ],
    tratamento: [
      "Corticosteroide sistêmico para indução de remissão em surtos de atividade moderada a grave",
      "Imunossupressores (ex.: azatioprina) e/ou terapia biológica (anti-TNF e outras classes) para manutenção de remissão e poupança de corticosteroide a longo prazo",
      "Cessação do tabagismo, fator de risco reconhecido para pior evolução da doença de Crohn (diferente da colite ulcerativa, onde a relação com tabagismo é inversa)",
      "Abordagem cirúrgica (ressecção segmentar) reservada para complicações (estenose sintomática, fístulas, abscessos refratários), sem intenção curativa, já que a doença pode recorrer em outros segmentos",
    ],
    complicacoes: [
      "Aguda: obstrução intestinal por estenose, abscesso intra-abdominal, megacólon tóxico (menos comum que na colite ulcerativa)",
      "Crônica: fístulas (entero-entéricas, enterocutâneas, perianais), síndrome do intestino curto após ressecções extensas repetidas, maior risco de neoplasia em segmentos cronicamente inflamados",
    ],
    redFlags: [
      "Distensão abdominal importante associada a febre alta e toxemia em paciente com Crohn conhecido — investigar megacólon tóxico ou abscesso intra-abdominal, complicações graves que exigem avaliação urgente",
    ],
    prognostico:
      "Doença crônica com curso recidivante-remitente; a maioria dos pacientes necessitará de cirurgia em algum momento da vida pela natureza transmural e tendência a complicações estruturais, mas a terapia biológica moderna reduziu significativamente a necessidade de cirurgias repetidas em muitos pacientes.",
    pontosDeProva: [
      "O tabagismo piora o curso da doença de Crohn, ao contrário da colite ulcerativa, onde paradoxalmente parece ter algum efeito protetor — distinção clássica de prova entre as duas doenças inflamatórias intestinais",
      "O acometimento transmural com lesões descontínuas ('salteadas') e possíveis granulomas não caseosos diferencia a doença de Crohn da colite ulcerativa, que acomete apenas mucosa/submucosa de forma contínua a partir do reto",
    ],
    casoClinico: {
      vinheta:
        "Homem, 24 anos, tabagista, relata dor abdominal em quadrante inferior direito e diarreia sem sangue há 4 meses, associadas a perda de 6 kg. Colonoscopia mostra úlceras aftoides intercaladas com mucosa normal no íleo terminal e cólon direito, com biópsia revelando inflamação transmural e granuloma não caseoso.",
      pergunta: "Qual é o diagnóstico mais provável e um fator de risco modificável relevante identificado na história?",
      raciocinio:
        "O padrão de lesões descontínuas ('salteadas'), acometimento preferencial do íleo terminal, inflamação transmural e granuloma não caseoso na biópsia são achados característicos de doença de Crohn. O tabagismo é um fator de risco reconhecido para pior evolução dessa doença especificamente.",
      conduta:
        "Iniciar corticosteroide sistêmico para indução de remissão do surto atual, avaliar necessidade de terapia biológica/imunossupressora para manutenção, e orientar fortemente a cessação do tabagismo, dado seu impacto negativo comprovado no curso da doença de Crohn.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "prednisona", nome: "Prednisona" },
    ],
    medicamentosSecaoTitulo: "Medicamento de indução de remissão (crise aguda)",
    medicamentosNota:
      "A prednisona é usada para indução de remissão em surtos de atividade moderada a grave, não como terapia de manutenção prolongada (pelo risco de efeitos adversos cumulativos). A manutenção de longo prazo é feita com imunossupressores (ex.: azatioprina) e/ou terapia biológica, evitando corticoide crônico pela toxicidade — ainda sem fichas próprias no site.",
    fontes: [
      { tema: "Fisiopatologia e classificação de Montreal", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Papel do tabagismo como fator de risco", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Corticosteroide para indução de remissão", fonte: "ACG Clinical Guideline: Management of Crohn's Disease in Adults, 2018" },
    ],
  },
  {
    slug: "colite-ulcerativa",
    nome: "Colite ulcerativa",
    sinonimos: ["Retocolite ulcerativa"],
    cid10: "K51",
    especialidade: "Gastroenterologia",
    etiologia: "Autoimune",
    resumo: "Doença inflamatória intestinal crônica limitada ao cólon, com acometimento contínuo da mucosa a partir do reto, causando diarreia sanguinolenta recorrente.",
    definicao:
      "Doença inflamatória intestinal crônica de etiologia imunomediada, caracterizada por inflamação limitada à mucosa e submucosa do cólon, sempre envolvendo o reto e estendendo-se proximalmente de forma contínua (sem lesões salteadas), diferente da doença de Crohn.",
    epidemiologia:
      "Incidência crescente globalmente, com pico de início em adultos jovens, embora possa ocorrer em qualquer idade; ao contrário da doença de Crohn, o tabagismo parece ter algum efeito protetor (não sendo, porém, motivo para recomendar seu início) e a doença é mais comum em ex-tabagistas e não fumantes.",
    fisiopatologia:
      "Uma resposta imune anormal contra antígenos da microbiota intestinal, em indivíduos geneticamente predispostos, causa inflamação contínua limitada à mucosa e submucosa do cólon, iniciando invariavelmente no reto e podendo se estender proximalmente até acometer todo o cólon (pancolite) em casos mais extensos, sem o componente transmural característico da doença de Crohn.",
    classificacao:
      "Classificação de Montreal por extensão: proctite (limitada ao reto), colite esquerda (até a flexura esplênica) e colite extensa/pancolite (além da flexura esplênica). A atividade da doença é frequentemente avaliada pelo escore de Mayo (combinando frequência de evacuações, sangramento retal, achados endoscópicos e avaliação global do médico).",
    quadroClinico: [
      "Diarreia sanguinolenta recorrente, geralmente com muco associado",
      "Urgência e tenesmo retal",
      "Dor abdominal em cólica, tipicamente menos intensa que na doença de Crohn",
      "Manifestações extraintestinais (artrite, colangite esclerosante primária — associação específica e importante com a colite ulcerativa, eritema nodoso) em alguns pacientes",
    ],
    diagnostico: [
      "Colonoscopia com biópsias, evidenciando inflamação contínua a partir do reto, sem lesões salteadas, limitada à mucosa/submucosa",
      "Histologia mostrando distorção de criptas, abscessos crípticos e infiltrado inflamatório limitado à mucosa/submucosa (sem granulomas, diferente de Crohn)",
      "Calprotectina fecal elevada como marcador de atividade inflamatória",
    ],
    examesComplementares: [
      "Colonoscopia com biópsias seriadas",
      "Calprotectina fecal (atividade inflamatória e seguimento)",
      "Colangiorressonância em pacientes com alteração de enzimas canaliculares, para rastreamento de colangite esclerosante primária associada",
    ],
    diagnosticoDiferencial: [
      "Doença de Crohn (principal diferencial)",
      "Colite infecciosa aguda (incluindo colite por Clostridioides difficile)",
      "Colite isquêmica",
    ],
    tratamento: [
      "Aminossalicilatos (mesalazina) como base do tratamento em doença leve a moderada, tanto para indução quanto manutenção de remissão",
      "Corticosteroide sistêmico para indução de remissão em surtos moderados a graves, não recomendado para manutenção prolongada",
      "Imunossupressores e/ou terapia biológica em doença refratária ao corticosteroide ou corticodependente",
      "Colectomia total (potencialmente curativa, diferente da doença de Crohn) reservada para doença refratária, displasia/neoplasia ou complicações graves como megacólon tóxico",
    ],
    complicacoes: [
      "Aguda: megacólon tóxico (complicação grave e potencialmente fatal, mais característica da colite ulcerativa que da doença de Crohn), hemorragia digestiva baixa significativa",
      "Crônica: maior risco de câncer colorretal em doença extensa de longa duração (exigindo vigilância colonoscópica periódica), colangite esclerosante primária associada",
    ],
    redFlags: [
      "Distensão abdominal importante, febre e taquicardia em paciente com colite ulcerativa em atividade — suspeitar de megacólon tóxico, emergência com risco de perfuração colônica",
    ],
    prognostico:
      "Curso crônico recidivante-remitente; diferente da doença de Crohn, a colectomia total é potencialmente curativa da doença intestinal (embora não das manifestações extraintestinais associadas, como a colangite esclerosante primária), sendo reservada para casos refratários ou com complicações graves.",
    pontosDeProva: [
      "A colectomia total é potencialmente curativa na colite ulcerativa (já que a doença se limita ao cólon), diferente da doença de Crohn, onde a cirurgia não é curativa pelo potencial de recorrência em outros segmentos do trato digestivo",
      "A associação entre colite ulcerativa e colangite esclerosante primária é uma relação clássica de prova, e todo paciente com colite ulcerativa e alteração de enzimas canaliculares deve ser investigado para essa condição",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 29 anos, não tabagista, relata diarreia sanguinolenta recorrente com muco, urgência retal e dor abdominal em cólica há 3 meses. Colonoscopia mostra inflamação contínua da mucosa desde o reto até o cólon descendente, sem áreas de mucosa normal intercaladas.",
      pergunta: "Qual é o diagnóstico mais provável e qual associação extraintestinal importante deve ser investigada?",
      raciocinio:
        "O padrão de acometimento contínuo da mucosa a partir do reto, sem lesões salteadas, associado a diarreia sanguinolenta, é característico de colite ulcerativa (colite esquerda pela extensão descrita). A colangite esclerosante primária é uma associação extraintestinal clássica e importante dessa doença.",
      conduta:
        "Iniciar mesalazina como base do tratamento para indução e manutenção de remissão, avaliar necessidade de corticosteroide se a atividade for moderada a grave, e solicitar avaliação de enzimas canaliculares para rastreamento de colangite esclerosante primária associada.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "prednisona", nome: "Prednisona" },
    ],
    medicamentosSecaoTitulo: "Medicamento de indução de remissão (crise aguda)",
    medicamentosNota:
      "A prednisona é usada para indução de remissão em surtos moderados a graves, não como terapia de manutenção prolongada. A manutenção de longo prazo é feita com mesalazina (aminossalicilato) e, em casos refratários, imunossupressores/terapia biológica, evitando corticoide crônico pela toxicidade — ainda sem fichas próprias no site.",
    fontes: [
      { tema: "Fisiopatologia e classificação de Montreal", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Associação com colangite esclerosante primária", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Corticosteroide para indução de remissão", fonte: "ACG Clinical Guideline: Ulcerative Colitis in Adults, 2019" },
    ],
  },
  {
    slug: "sindrome-do-colon-irritavel",
    nome: "Síndrome do cólon irritável",
    sinonimos: ["Síndrome do intestino irritável", "SII"],
    cid10: "K58",
    especialidade: "Gastroenterologia",
    etiologia: "Multifatorial",
    resumo: "Distúrbio funcional gastrointestinal crônico caracterizado por dor abdominal recorrente associada a alteração do hábito intestinal, sem doença estrutural identificável.",
    definicao:
      "Distúrbio gastrointestinal funcional crônico, caracterizado por dor abdominal recorrente associada a alteração do hábito intestinal (constipação, diarreia ou padrão misto), na ausência de alterações estruturais ou bioquímicas identificáveis que expliquem os sintomas.",
    epidemiologia:
      "Um dos distúrbios gastrointestinais mais comuns na prática clínica, mais prevalente em mulheres, frequentemente associado a comorbidades como ansiedade e transtornos do humor, embora a relação causal entre esses fatores e os sintomas intestinais seja complexa e bidirecional.",
    fisiopatologia:
      "Fisiopatologia multifatorial, envolvendo alteração da motilidade gastrointestinal, hipersensibilidade visceral (percepção aumentada de estímulos intestinais normais), alterações da microbiota intestinal e desregulação do eixo cérebro-intestino, sem lesão estrutural identificável pelos métodos diagnósticos convencionais.",
    classificacao:
      "Diagnóstico baseado nos critérios de Roma IV: dor abdominal recorrente, em média pelo menos 1 dia por semana nos últimos 3 meses, associada a pelo menos dois dos seguintes: relação com a evacuação, mudança na frequência das evacuações, ou mudança na forma/aparência das fezes. Subclassificada conforme o padrão predominante em SII com predomínio de constipação, SII com predomínio de diarreia, SII com padrão misto, ou SII não classificada.",
    quadroClinico: [
      "Dor ou desconforto abdominal recorrente, frequentemente aliviado pela evacuação",
      "Alteração do hábito intestinal (constipação, diarreia, ou alternância entre ambos)",
      "Distensão abdominal e sensação de evacuação incompleta",
      "Sintomas frequentemente exacerbados por estresse emocional ou determinados alimentos",
    ],
    diagnostico: [
      "Diagnóstico clínico baseado nos critérios de Roma IV, na ausência de sinais de alarme",
      "Exames complementares direcionados para excluir diagnósticos orgânicos quando há sinais de alarme (perda de peso, sangramento, anemia, início após os 50 anos, história familiar de neoplasia/doença inflamatória intestinal)",
      "Em pacientes sem sinais de alarme e que preenchem os critérios de Roma IV, investigação extensa geralmente não é necessária para confirmação diagnóstica",
    ],
    examesComplementares: [
      "Hemograma completo (excluir anemia como sinal de alarme)",
      "Calprotectina fecal (auxilia a diferenciar de doença inflamatória intestinal quando há dúvida diagnóstica)",
      "Colonoscopia reservada para pacientes com sinais de alarme ou idade de rastreamento apropriada, não rotineiramente necessária para confirmar SII em pacientes típicos sem sinais de alarme",
    ],
    diagnosticoDiferencial: [
      "Doença inflamatória intestinal",
      "Doença celíaca",
      "Intolerância à lactose ou outras intolerâncias alimentares",
      "Neoplasia colorretal (especialmente quando há sinais de alarme)",
    ],
    tratamento: [
      "Orientação dietética individualizada, incluindo consideração de dieta com restrição de FODMAPs (carboidratos fermentáveis de baixa absorção) em pacientes selecionados",
      "Antiespasmódicos para controle da dor abdominal em cólica",
      "Agentes específicos conforme o subtipo predominante: laxativos formadores de bolo/agentes específicos para constipação, antidiarreicos para o subtipo com diarreia",
      "Abordagem do componente psicológico associado (terapia cognitivo-comportamental, manejo do estresse) quando relevante, dada a relação bidirecional entre sintomas intestinais e fatores emocionais",
    ],
    complicacoes: [
      "Aguda: nenhuma complicação orgânica grave direta é esperada, diferente de doenças estruturais",
      "Crônica: impacto significativo na qualidade de vida, absenteísmo e uso de serviços de saúde pela natureza recorrente e crônica dos sintomas",
    ],
    redFlags: [
      "Sinais de alarme (perda de peso, sangramento retal, anemia, início dos sintomas após os 50 anos, história familiar de neoplasia colorretal ou doença inflamatória intestinal) não são compatíveis com SII isolada — exigem investigação para excluir doença orgânica antes de firmar esse diagnóstico",
    ],
    prognostico:
      "Doença crônica benigna do ponto de vista estrutural (sem progressão para doença orgânica grave ou aumento de mortalidade), mas com impacto significativo na qualidade de vida; o curso é tipicamente flutuante, com períodos de melhora e piora ao longo do tempo.",
    pontosDeProva: [
      "A síndrome do cólon irritável é um diagnóstico baseado em critérios clínicos positivos (Roma IV), não apenas um diagnóstico de exclusão — não é necessário excluir exaustivamente todas as outras causas em pacientes típicos sem sinais de alarme",
      "A presença de qualquer sinal de alarme deve levar à investigação de causa orgânica antes de atribuir os sintomas à SII, mesmo que o padrão clínico geral seja sugestivo",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 32 anos, relata dor abdominal recorrente há 8 meses, quase sempre aliviada pela evacuação, associada a alternância entre períodos de constipação e diarreia. Nega perda de peso, sangramento ou sintomas noturnos. Exame físico e hemograma normais.",
      pergunta: "Este quadro preenche critérios para síndrome do cólon irritável? Que passo é essencial antes de confirmar o diagnóstico?",
      raciocinio:
        "A dor abdominal recorrente associada à evacuação e à alteração do padrão intestinal (padrão misto) preenche os critérios de Roma IV para SII. A ausência de sinais de alarme (perda de peso, sangramento, sintomas noturnos) é importante para não postergar investigação de causas orgânicas quando presentes, mas sua ausência aqui é tranquilizadora.",
      conduta:
        "Confirmar a ausência completa de sinais de alarme, considerar calprotectina fecal se houver qualquer dúvida quanto à diferenciação de doença inflamatória intestinal, e iniciar tratamento (orientação dietética, antiespasmódicos conforme sintoma predominante) sem necessidade de investigação extensa adicional.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Critérios diagnósticos de Roma IV", fonte: "Rome IV Diagnostic Criteria for Functional Gastrointestinal Disorders, 2016" },
      { tema: "Fisiopatologia (hipersensibilidade visceral, eixo cérebro-intestino)", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Antiespasmódicos/laxativos/antidiarreicos no tratamento (ainda sem fichas próprias no site com essa indicação)", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "doenca-diverticular",
    nome: "Doença diverticular do intestino",
    sinonimos: ["Diverticulose", "Diverticulite"],
    cid10: "K57",
    especialidade: "Gastroenterologia",
    etiologia: "Multifatorial",
    resumo: "Presença de divertículos na parede do cólon (diverticulose), geralmente assintomática, com risco de inflamação aguda (diverticulite) em uma minoria dos portadores.",
    definicao:
      "Presença de divertículos (herniações da mucosa e submucosa através de pontos de fraqueza na camada muscular) na parede do cólon, mais comumente no sigmoide, denominada diverticulose quando assintomática e diverticulite quando ocorre inflamação/microperfuração aguda de um divertículo.",
    epidemiologia:
      "Prevalência crescente com a idade, associada a dieta pobre em fibras e rica em carne vermelha/gordura, sedentarismo e obesidade; a grande maioria dos portadores de diverticulose permanece assintomática por toda a vida.",
    fisiopatologia:
      "O aumento da pressão intraluminal do cólon, associado a fraqueza focal da parede muscular (frequentemente em pontos de penetração de vasos retos), favorece a herniação da mucosa formando divertículos, mais comumente no cólon sigmoide. A diverticulite ocorre quando há obstrução do colo de um divertículo por material fecal, levando a proliferação bacteriana local, inflamação e microperfuração contida.",
    classificacao:
      "Classificação de Hinchey (para diverticulite complicada, por tomografia): estágio I (abscesso pericólico pequeno e contido), estágio II (abscesso pélvico ou a distância), estágio III (peritonite purulenta generalizada) e estágio IV (peritonite fecal generalizada) — determina diretamente a necessidade e urgência de intervenção cirúrgica.",
    quadroClinico: [
      "Diverticulose: geralmente assintomática, achado incidental em colonoscopia ou exame de imagem",
      "Diverticulite não complicada: dor abdominal em fossa ilíaca esquerda (localização mais comum), febre baixa, alteração do hábito intestinal",
      "Diverticulite complicada: dor mais intensa, febre alta, sinais de irritação peritoneal quando há perfuração",
      "Hemorragia diverticular: sangramento indolor, geralmente autolimitado, causa comum de hemorragia digestiva baixa em idosos",
    ],
    diagnostico: [
      "Tomografia de abdome com contraste é o exame de escolha na suspeita de diverticulite aguda, confirmando o diagnóstico e classificando a gravidade (Hinchey)",
      "Colonoscopia contraindicada na fase aguda da diverticulite (risco de perfuração), reservada para 6-8 semanas após resolução do quadro agudo, para excluir neoplasia associada",
      "Diverticulose geralmente identificada incidentalmente em colonoscopia de rotina ou exame de imagem",
    ],
    examesComplementares: [
      "Tomografia de abdome com contraste (diagnóstico e classificação de Hinchey na diverticulite aguda)",
      "Hemograma com leucocitose e proteína C-reativa elevada na diverticulite",
      "Colonoscopia de intervalo (6-8 semanas após resolução do episódio agudo) para exclusão de neoplasia colônica associada",
    ],
    diagnosticoDiferencial: [
      "Neoplasia colorretal (especialmente importante excluir após diverticulite, pela sobreposição de sintomas)",
      "Doença inflamatória intestinal",
      "Apendicite aguda (quando o sigmoide redundante se projeta para a direita) ou colecistite (diverticulite de cólon direito, menos comum)",
    ],
    tratamento: [
      "Diverticulose assintomática: orientação dietética (dieta rica em fibras), sem necessidade de tratamento específico",
      "Diverticulite aguda não complicada e sem fatores de risco: tratamento ambulatorial com dieta líquida e observação, com antibioticoterapia reservada para casos selecionados (imunossupressão, comorbidades significativas, sinais sistêmicos), refletindo diretrizes atuais que se afastaram do uso rotineiro de antibiótico em todos os casos leves",
      "Diverticulite complicada (Hinchey II-IV) ou com sinais sistêmicos significativos: antibioticoterapia com cobertura para flora entérica (aeróbios gram-negativos e anaeróbios), associada a drenagem percutânea (abscessos) ou cirurgia (peritonite generalizada)",
      "Colectomia eletiva considerada em casos de diverticulite recorrente complicada, individualizada conforme o paciente",
    ],
    complicacoes: [
      "Aguda: abscesso pericólico, perfuração com peritonite, formação de fístula (mais comumente colovesical), obstrução intestinal",
      "Crônica: estenose colônica por episódios recorrentes de inflamação, diverticulite recorrente",
    ],
    redFlags: [
      "Dor abdominal intensa e difusa associada a sinais de irritação peritoneal em paciente com diverticulite conhecida — suspeitar de perfuração livre (Hinchey III/IV), emergência cirúrgica",
    ],
    prognostico:
      "Excelente na diverticulose assintomática; a maioria dos episódios de diverticulite não complicada resolve com tratamento conservador, mas uma parcela dos pacientes apresenta recorrência, e as formas complicadas (Hinchey III/IV) têm maior morbimortalidade e frequentemente exigem cirurgia.",
    pontosDeProva: [
      "As diretrizes atuais se afastaram do uso rotineiro de antibiótico em toda diverticulite aguda não complicada — em pacientes selecionados sem fatores de risco, o tratamento conservador sem antibiótico é uma opção validada, mudança de paradigma relevante para prova",
      "A colonoscopia é contraindicada na fase aguda da diverticulite pelo risco de perfuração, devendo ser realizada 6-8 semanas após a resolução do quadro para exclusão de neoplasia",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 68 anos, relata dor em fossa ilíaca esquerda há 2 dias, associada a febre baixa (37,8°C) e alteração do hábito intestinal. Tomografia de abdome mostra espessamento da parede do sigmoide com divertículos e pequena coleção pericólica contida de 2 cm.",
      pergunta: "Qual é a classificação de gravidade deste quadro e a conduta apropriada?",
      raciocinio:
        "O achado tomográfico de abscesso pericólico pequeno e contido caracteriza diverticulite aguda Hinchey I. Dependendo da presença de fatores de risco e gravidade clínica, o tratamento pode ser conservador, com antibioticoterapia reservada a casos selecionados.",
      conduta:
        "Avaliar necessidade de antibioticoterapia conforme fatores de risco e gravidade clínica, manter dieta líquida com progressão conforme tolerância, e programar colonoscopia de intervalo em 6-8 semanas para exclusão de neoplasia associada.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "amoxicilina-clavulanato", nome: "Amoxicilina + Clavulanato" },
    ],
    medicamentosNota:
      "As diretrizes atuais reservam a antibioticoterapia para diverticulite complicada ou com fatores de risco/sinais sistêmicos significativos — em diverticulite não complicada e sem esses fatores, o tratamento conservador sem antibiótico é uma opção validada, e não uma indicação universal.",
    fontes: [
      { tema: "Fisiopatologia e classificação de Hinchey", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Manejo seletivo de antibioticoterapia na diverticulite não complicada", fonte: "ACG Clinical Guideline: Diverticulitis, 2021" },
    ],
  },
  {
    slug: "apendicite-aguda",
    nome: "Apendicite aguda",
    sinonimos: ["Apendicite"],
    cid10: "K35",
    especialidade: "Gastroenterologia",
    etiologia: "Multifatorial",
    resumo: "Inflamação aguda do apêndice vermiforme, causa mais comum de abdome agudo cirúrgico, geralmente por obstrução luminal seguida de proliferação bacteriana.",
    definicao:
      "Inflamação aguda do apêndice vermiforme, resultante na maioria dos casos de obstrução da luz apendicular (por fecalito, hiperplasia linfoide ou, mais raramente, corpo estranho ou neoplasia), seguida de distensão, proliferação bacteriana, isquemia da parede e, se não tratada, perfuração.",
    epidemiologia:
      "Causa mais comum de abdome agudo cirúrgico, podendo ocorrer em qualquer idade, com maior incidência em crianças maiores, adolescentes e adultos jovens; a hiperplasia linfoide é causa obstrutiva mais comum nessa faixa etária, enquanto fecalitos predominam em adultos mais velhos.",
    fisiopatologia:
      "A obstrução da luz apendicular impede a drenagem de secreções, causando distensão progressiva, aumento da pressão intraluminal, comprometimento do fluxo sanguíneo e linfático da parede apendicular, proliferação bacteriana e, se não tratada, progressão para necrose isquêmica e perfuração, com risco de peritonite localizada (abscesso) ou generalizada.",
    classificacao:
      "Não há sistema formal de estadiamento amplamente padronizado; classificada clinicamente em não complicada (inflamação simples, sem perfuração) e complicada (perfurada, com abscesso ou peritonite associada), distinção com implicação direta na abordagem terapêutica e no prognóstico.",
    quadroClinico: [
      "Dor abdominal que classicamente migra da região periumbilical para a fossa ilíaca direita, tornando-se mais localizada e intensa",
      "Anorexia, náuseas e vômitos associados",
      "Febre baixa, geralmente após o início da dor",
      "Dor à descompressão brusca em ponto de McBurney; sinais de irritação peritoneal em casos mais avançados",
    ],
    diagnostico: [
      "Diagnóstico predominantemente clínico em apresentações típicas, apoiado por escores clínicos (ex.: escore de Alvarado) que combinam sintomas, sinais e leucocitose",
      "Ultrassonografia ou tomografia de abdome em casos de dúvida diagnóstica, gestantes (preferencialmente ultrassonografia) ou apresentações atípicas",
      "Leucocitose com desvio à esquerda é achado laboratorial de apoio, embora inespecífico",
    ],
    examesComplementares: [
      "Hemograma com leucocitose (frequente, mas inespecífica)",
      "Ultrassonografia ou tomografia de abdome: apêndice espessado (diâmetro >6-7 mm), com sinais inflamatórios periapendiculares",
      "Proteína C-reativa elevada como apoio adicional em casos de dúvida diagnóstica",
    ],
    diagnosticoDiferencial: [
      "Adenite mesentérica (especialmente em crianças, pode mimetizar apendicite)",
      "Diverticulite de Meckel",
      "Doença inflamatória pélvica e gravidez ectópica (em mulheres em idade fértil)",
      "Diverticulite de sigmoide redundante projetando-se para a direita",
    ],
    tratamento: [
      "Apendicectomia (preferencialmente laparoscópica) é o tratamento de escolha na maioria dos casos, incluindo apendicite não complicada",
      "Tratamento não operatório com antibioticoterapia isolada é uma alternativa validada em pacientes selecionados com apendicite não complicada, embora associado a risco de recorrência e não seja a abordagem padrão universal",
      "Drenagem percutânea de abscesso seguida de apendicectomia de intervalo em casos de apendicite perfurada com abscesso bem formado",
      "Antibioticoterapia perioperatória em todos os casos, com cobertura para flora entérica",
    ],
    complicacoes: [
      "Aguda: perfuração com peritonite localizada (abscesso) ou generalizada, sepse",
      "Crônica: aderências abdominais pós-operatórias (complicação tardia da cirurgia, não da doença em si)",
    ],
    redFlags: [
      "Dor abdominal difusa com rigidez de parede ('abdome em tábua') e febre alta em paciente com quadro sugestivo de apendicite — suspeitar de perfuração com peritonite generalizada, exigindo cirurgia de emergência",
    ],
    prognostico:
      "Excelente com apendicectomia oportuna em apendicite não complicada; o atraso no diagnóstico e tratamento aumenta significativamente o risco de perfuração e suas complicações, que elevam a morbimortalidade.",
    pontosDeProva: [
      "A migração clássica da dor de periumbilical para fossa ilíaca direita reflete a transição de dor visceral (inervação autonômica difusa do intestino médio embrionário) para dor somática (irritação peritoneal parietal localizada)",
      "O tratamento não operatório com antibiótico isolado é uma alternativa validada em casos selecionados de apendicite não complicada, mas a apendicectomia continua sendo o tratamento padrão na maioria dos contextos",
    ],
    casoClinico: {
      vinheta:
        "Homem, 22 anos, relata dor abdominal iniciada na região periumbilical há 18 horas, que migrou e se intensificou em fossa ilíaca direita, associada a náuseas, anorexia e febre baixa. Exame físico com dor à descompressão brusca em ponto de McBurney.",
      pergunta: "Qual é a hipótese diagnóstica mais provável e a conduta apropriada?",
      raciocinio:
        "O padrão clássico de migração da dor de periumbilical para fossa ilíaca direita, associado a anorexia, náuseas, febre baixa e sinais de irritação peritoneal localizada (McBurney positivo), é altamente sugestivo de apendicite aguda.",
      conduta:
        "Confirmar com exame de imagem se houver qualquer dúvida diagnóstica, iniciar antibioticoterapia perioperatória e encaminhar para apendicectomia, preferencialmente por via laparoscópica.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Fisiopatologia e migração clássica da dor", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Tratamento não operatório como alternativa em casos selecionados", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "peritonite",
    nome: "Peritonite",
    sinonimos: ["Peritonite bacteriana"],
    cid10: "K65",
    especialidade: "Gastroenterologia",
    etiologia: "Multifatorial",
    resumo: "Inflamação do peritônio, geralmente de causa infecciosa, classificada em primária (espontânea, sem foco intra-abdominal identificável), secundária (por perfuração/foco intra-abdominal) e terciária (persistente após tratamento adequado de peritonite secundária).",
    definicao:
      "Processo inflamatório do peritônio, na grande maioria dos casos de origem infecciosa bacteriana, classificado conforme a origem e o mecanismo em primária, secundária e terciária, com implicações diretas na abordagem terapêutica.",
    epidemiologia:
      "A peritonite bacteriana espontânea (primária) ocorre predominantemente em pacientes cirróticos com ascite; a peritonite secundária, mais comum, decorre de perfuração de víscera oca (por apendicite, diverticulite, úlcera péptica perfurada, entre outras causas) ou de complicações pós-operatórias.",
    fisiopatologia:
      "Na peritonite primária, acredita-se que ocorra translocação bacteriana através da parede intestinal ou disseminação hematogênica para o líquido ascítico, sem fonte identificável de contaminação direta. Na peritonite secundária, a perfuração de uma víscera oca permite contaminação direta da cavidade peritoneal por flora entérica polimicrobiana, desencadeando resposta inflamatória local e, se não controlada, sistêmica.",
    classificacao:
      "Classificada em primária/espontânea (sem foco intra-abdominal identificável, tipicamente em cirróticos com ascite), secundária (por perfuração ou contaminação de foco intra-abdominal identificável) e terciária (infecção peritoneal persistente ou recorrente após tratamento adequado de peritonite secundária, frequentemente em pacientes críticos).",
    quadroClinico: [
      "Dor abdominal difusa, geralmente intensa, com piora à movimentação",
      "Rigidez de parede abdominal ('abdome em tábua') e sinais de irritação peritoneal (descompressão brusca dolorosa)",
      "Febre e taquicardia",
      "Na peritonite bacteriana espontânea, o quadro pode ser mais sutil, com piora inexplicada da função hepática/renal ou encefalopatia em paciente cirrótico, sem dor abdominal proeminente em uma parcela dos casos",
    ],
    diagnostico: [
      "Peritonite secundária: quadro clínico de abdome agudo associado a exame de imagem (tomografia) identificando a fonte (perfuração, foco inflamatório)",
      "Peritonite bacteriana espontânea: paracentese diagnóstica com contagem de neutrófilos no líquido ascítico ≥250 células/mm³ confirma o diagnóstico, mesmo na ausência de sintomas clássicos",
      "Hemoculturas e cultura do líquido peritoneal/ascítico para identificação do agente etiológico",
    ],
    examesComplementares: [
      "Contagem de neutrófilos no líquido ascítico ≥250 células/mm³ (diagnóstico de peritonite bacteriana espontânea)",
      "Tomografia de abdome com contraste para identificação de foco de peritonite secundária",
      "Hemograma com leucocitose, lactato e função renal para avaliação de gravidade",
    ],
    diagnosticoDiferencial: [
      "Pancreatite aguda grave (pode mimetizar sinais de irritação peritoneal)",
      "Isquemia mesentérica",
      "Ascite não complicada, sem infecção associada",
    ],
    tratamento: [
      "Peritonite secundária: controle cirúrgico do foco (correção da perfuração, drenagem) associado a antibioticoterapia empírica de amplo espectro — a fonte deve ser controlada, já que antibiótico isolado é insuficiente",
      "Peritonite bacteriana espontânea: antibioticoterapia empírica dirigida aos patógenos mais prováveis (tipicamente bactérias entéricas gram-negativas), sem necessidade de intervenção cirúrgica",
      "Suporte hemodinâmico e tratamento das disfunções orgânicas associadas em casos graves",
      "Albumina intravenosa associada ao antibiótico em peritonite bacteriana espontânea em pacientes com maior risco, para redução do risco de síndrome hepatorrenal",
    ],
    complicacoes: [
      "Aguda: choque séptico, disfunção de múltiplos órgãos, síndrome hepatorrenal (na peritonite bacteriana espontânea)",
      "Crônica: peritonite terciária (infecção persistente/recorrente), aderências abdominais",
    ],
    redFlags: [
      "Piora inexplicada de encefalopatia ou função renal em paciente cirrótico com ascite, mesmo sem dor abdominal proeminente — investigar peritonite bacteriana espontânea com paracentese diagnóstica",
      "Abdome em tábua com sinais de choque — peritonite secundária grave, emergência cirúrgica com necessidade de controle de foco imediato",
    ],
    prognostico:
      "Variável conforme o tipo e a causa de base; a peritonite secundária com controle cirúrgico precoce da fonte tem prognóstico mais favorável que casos com atraso terapêutico; a peritonite bacteriana espontânea recorrente é comum em cirróticos e associa-se a pior prognóstico hepático global.",
    pontosDeProva: [
      "A peritonite bacteriana espontânea é diagnosticada por contagem de neutrófilos no líquido ascítico ≥250 células/mm³, mesmo sem sintomas abdominais clássicos — deve ser ativamente pesquisada em cirróticos com qualquer sinal de descompensação",
      "Na peritonite secundária, o controle cirúrgico da fonte é indispensável — antibioticoterapia isolada, sem correção do foco, não é suficiente para o tratamento adequado",
    ],
    casoClinico: {
      vinheta:
        "Homem, 58 anos, cirrótico com ascite volumosa, é internado por confusão mental progressiva nos últimos 2 dias, sem dor abdominal significativa relatada. Paracentese diagnóstica: 450 neutrófilos/mm³ no líquido ascítico.",
      pergunta: "Qual é o diagnóstico e a conduta terapêutica apropriada?",
      raciocinio:
        "A contagem de neutrófilos no líquido ascítico acima de 250 células/mm³ confirma peritonite bacteriana espontânea, mesmo na ausência de dor abdominal proeminente — a encefalopatia pode ser a manifestação predominante nesse contexto.",
      conduta:
        "Iniciar antibioticoterapia empírica dirigida aos patógenos entéricos gram-negativos mais prováveis, associar albumina intravenosa conforme critérios de risco para prevenção de síndrome hepatorrenal, e reavaliar a resposta clínica e laboratorial.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Classificação primária/secundária/terciária", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Critério diagnóstico de peritonite bacteriana espontânea (neutrófilos ≥250/mm³)", fonte: "AASLD Practice Guidance: Ascites, Spontaneous Bacterial Peritonitis, 2021" },
      { tema: "Antibioticoterapia empírica dirigida (ainda sem fichas próprias no site com essa indicação)", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "osteoartrose",
    nome: "Osteoartrose",
    sinonimos: ["Osteoartrite", "Artrose", "Doença articular degenerativa"],
    cid10: "M15",
    especialidade: "Reumatologia",
    etiologia: "Degenerativa",
    resumo: "Doença articular degenerativa mais comum, caracterizada por degeneração progressiva da cartilagem articular e remodelamento ósseo subcondral, fortemente associada à idade e à sobrecarga mecânica.",
    definicao:
      "Doença articular crônica degenerativa caracterizada por perda progressiva da cartilagem articular, remodelamento do osso subcondral (formação de osteófitos) e alterações inflamatórias secundárias de baixo grau, resultando em dor e limitação funcional.",
    epidemiologia:
      "Doença articular mais comum globalmente, com prevalência aumentando acentuadamente com a idade; fatores de risco incluem obesidade, sobrecarga articular repetitiva/ocupacional, trauma articular prévio e predisposição genética. Acomete preferencialmente joelhos, quadris, coluna e pequenas articulações das mãos.",
    fisiopatologia:
      "Um desequilíbrio entre síntese e degradação da matriz cartilaginosa, favorecido por fatores mecânicos (sobrecarga, trauma) e biológicos (envelhecimento, predisposição genética), leva à perda progressiva de cartilagem articular. O osso subcondral exposto sofre remodelamento reativo, com formação de osteófitos marginais e esclerose subcondral, enquanto um componente inflamatório sinovial secundário de baixo grau contribui para a dor.",
    classificacao:
      "Classificação radiográfica de Kellgren-Lawrence, de grau 0 (sem alterações) a grau 4 (osteoartrose grave, com redução acentuada do espaço articular, osteófitos volumosos e deformidade óssea), amplamente usada para graduar a gravidade estrutural, embora a correlação com a intensidade dos sintomas seja imperfeita.",
    quadroClinico: [
      "Dor articular mecânica, que piora com uso/atividade e melhora com repouso (diferente do padrão inflamatório de piora matinal prolongada)",
      "Rigidez matinal de curta duração (tipicamente <30 minutos), diferente da rigidez prolongada das artrites inflamatórias",
      "Crepitação articular à movimentação",
      "Nódulos de Heberden (interfalangeanas distais) e Bouchard (interfalangeanas proximais) nas mãos",
    ],
    diagnostico: [
      "Diagnóstico predominantemente clínico em pacientes com perfil epidemiológico típico e quadro característico",
      "Radiografia simples da articulação acometida para confirmação e graduação (Kellgren-Lawrence), embora não seja obrigatória para diagnóstico clínico em casos típicos",
      "Ausência de marcadores inflamatórios sistêmicos significativos, ajudando a diferenciar de artrites inflamatórias",
    ],
    examesComplementares: [
      "Radiografia simples: redução do espaço articular, osteófitos, esclerose subcondral, cistos subcondrais",
      "Provas de atividade inflamatória (VHS, PCR) tipicamente normais ou apenas discretamente alteradas, diferente das artrites inflamatórias",
    ],
    diagnosticoDiferencial: [
      "Artrite reumatoide e outras artrites inflamatórias",
      "Gota e outras artrites por cristais",
      "Necrose avascular",
    ],
    tratamento: [
      "Medidas não farmacológicas como base do tratamento: perda de peso, exercício físico e fortalecimento muscular, fisioterapia",
      "Anti-inflamatório não esteroidal tópico como opção preferencial quando viável (especialmente em articulações superficiais, como mãos e joelhos), pelo menor risco sistêmico",
      "Anti-inflamatório não esteroidal oral quando a via tópica é insuficiente ou inviável, respeitando contraindicações e riscos cardiovasculares/gastrointestinais/renais",
      "Artroplastia (prótese articular) em doença avançada e refratária ao tratamento clínico, com impacto funcional significativo",
    ],
    complicacoes: [
      "Aguda: sinovite reativa aguda em episódios de sobrecarga",
      "Crônica: deformidade articular progressiva, limitação funcional significativa, necessidade de artroplastia",
    ],
    redFlags: [
      "Dor articular com sinais inflamatórios importantes (calor, rubor, derrame significativo) e febre — reconsiderar diagnóstico de artrite séptica ou por cristais, diferenciais que exigem investigação e conduta distintas",
    ],
    prognostico:
      "Doença crônica e progressiva na maioria dos casos, mas com curso lento e resposta parcial às medidas de controle de fatores modificáveis (peso, atividade física); a artroplastia oferece alívio significativo em doença avançada refratária.",
    pontosDeProva: [
      "A rigidez matinal breve (<30 minutos) na osteoartrose contrasta com a rigidez matinal prolongada (>1 hora) típica das artrites inflamatórias como a artrite reumatoide — diferencial clínico clássico de prova",
      "As diretrizes atuais (ACR 2019) recomendam preferencialmente AINE tópico sobre oral quando viável, e recomendam condicionalmente contra o uso rotineiro de paracetamol isolado pela eficácia limitada demonstrada",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 64 anos, obesa, relata dor em joelhos bilateralmente há 2 anos, pior ao final do dia e após caminhadas longas, com rigidez matinal de cerca de 15 minutos. Exame físico com crepitação à mobilização e nódulos de Heberden nas mãos.",
      pergunta: "Qual é a hipótese diagnóstica mais provável e a conduta terapêutica inicial?",
      raciocinio:
        "O padrão de dor mecânica (pior com uso, no final do dia), rigidez matinal breve, crepitação e nódulos de Heberden é característico de osteoartrose, sem sugerir componente inflamatório sistêmico importante.",
      conduta:
        "Orientar perda de peso e programa de exercícios/fortalecimento muscular como base do tratamento, considerar AINE tópico para as articulações mais sintomáticas, e reservar AINE oral para casos refratários às medidas iniciais.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "ibuprofeno", nome: "Ibuprofeno" },
    ],
    medicamentosNota:
      "As medidas não farmacológicas (perda de peso, exercício, fisioterapia) são a base do tratamento da osteoartrose. O AINE tópico é preferido ao oral quando viável, pelo menor risco sistêmico; o ibuprofeno listado representa a opção oral, reservada para quando a via tópica é insuficiente.",
    fontes: [
      { tema: "Fisiopatologia e classificação de Kellgren-Lawrence", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Recomendações de tratamento farmacológico (AINE tópico preferencial)", fonte: "American College of Rheumatology/Arthritis Foundation Guideline for Management of Osteoarthritis, 2019" },
    ],
  },
  {
    slug: "gota",
    nome: "Gota",
    sinonimos: ["Artrite gotosa"],
    cid10: "M10",
    especialidade: "Reumatologia",
    etiologia: "Metabólica",
    resumo: "Artrite inflamatória causada pela deposição de cristais de urato monossódico nas articulações, decorrente de hiperuricemia crônica, classicamente acometendo a primeira articulação metatarsofalangeana.",
    definicao:
      "Doença metabólica caracterizada pela deposição de cristais de urato monossódico em articulações e tecidos periarticulares, decorrente de hiperuricemia crônica (produção excessiva ou, mais comumente, excreção renal reduzida de ácido úrico), causando episódios recorrentes de artrite inflamatória aguda.",
    epidemiologia:
      "Mais comum em homens, com incidência aumentando após a menopausa em mulheres (efeito protetor relativo dos estrogênios na excreção de urato antes desse período); associada a obesidade, síndrome metabólica, consumo de álcool (especialmente cerveja) e determinados alimentos ricos em purinas, além de uso de diuréticos.",
    fisiopatologia:
      "A hiperuricemia crônica sustentada favorece a precipitação de cristais de urato monossódico nas articulações, especialmente em locais mais frios (periféricos, como o primeiro pododáctilo). Esses cristais desencadeiam resposta inflamatória aguda intensa, mediada por ativação do inflamassoma NLRP3 em macrófagos, com liberação maciça de citocinas pró-inflamatórias (especialmente IL-1β), explicando a intensidade da dor no ataque agudo.",
    classificacao:
      "Evolução em estágios: hiperuricemia assintomática (sem sintomas articulares, não requer tratamento isoladamente na maioria dos casos), gota aguda intermitente (crises recorrentes com períodos assintomáticos entre elas, chamados intercríticos) e gota tofácea crônica (doença estabelecida com depósitos visíveis de urato — tofos — e dano articular estrutural, em casos não tratados adequadamente a longo prazo).",
    quadroClinico: [
      "Crise aguda: dor articular intensa e súbita, classicamente na primeira articulação metatarsofalangeana (podagra), com eritema, calor e edema importantes",
      "Crises frequentemente noturnas, de início abrupto, atingindo intensidade máxima em 12-24 horas",
      "Tofos (depósitos subcutâneos de urato) em doença crônica não tratada adequadamente, tipicamente em hélice auricular, cotovelos e ao redor de articulações",
      "Períodos intercríticos assintomáticos entre as crises na fase intermitente",
    ],
    diagnostico: [
      "Identificação de cristais de urato monossódico (birrefringência negativa à luz polarizada) no líquido sinovial é o padrão-ouro diagnóstico",
      "Ácido úrico sérico elevado sustenta a suspeita, mas pode estar normal durante a crise aguda (não deve ser usado isoladamente para confirmar ou excluir o diagnóstico)",
      "Critérios de classificação ACR/EULAR (2015) combinam achados clínicos, laboratoriais e de imagem quando a análise do líquido sinovial não está disponível",
    ],
    examesComplementares: [
      "Análise do líquido sinovial com identificação de cristais de urato monossódico (padrão-ouro)",
      "Ácido úrico sérico (elevado cronicamente, mas pode estar normal na crise aguda)",
      "Radiografia articular em doença crônica (erosões características 'em saca-bocado', com bordas escleróticas)",
    ],
    diagnosticoDiferencial: [
      "Artrite séptica (diagnóstico diferencial obrigatório em monoartrite aguda, pela gravidade)",
      "Condrocalcinose/pseudogota (cristais de pirofosfato de cálcio)",
      "Celulite (quando há eritema e edema periarticular importantes)",
    ],
    tratamento: [
      "Crise aguda: anti-inflamatório não esteroidal, colchicina ou corticosteroide (sistêmico ou intra-articular), conforme perfil do paciente e contraindicações — não se deve iniciar terapia hipouricemiante durante a crise aguda",
      "Terapia hipouricemiante de manutenção (ex.: alopurinol) indicada em gota recorrente, tofácea ou com dano articular/renal estabelecido, iniciada somente após resolução da crise aguda e mantida indefinidamente",
      "Profilaxia com colchicina ou AINE em baixa dose nos primeiros meses após início da terapia hipouricemiante, pelo risco de precipitar novas crises durante a fase inicial de redução do urato",
      "Orientação dietética e de estilo de vida (redução de álcool, purinas, controle de peso) como medida adjuvante",
    ],
    complicacoes: [
      "Aguda: crise gotosa incapacitante",
      "Crônica: gota tofácea crônica com dano articular estrutural, nefrolitíase por urato, nefropatia por urato",
    ],
    redFlags: [
      "Monoartrite aguda com febre e toxemia — sempre excluir artrite séptica antes de assumir crise de gota, já que ambas podem coexistir e a artrite séptica exige drenagem e antibioticoterapia de emergência",
    ],
    prognostico:
      "Excelente controle das crises agudas com tratamento adequado; a adesão à terapia hipouricemiante de manutenção previne a progressão para gota tofácea crônica e dano articular estrutural, mas a descontinuação frequente do tratamento é um desafio prático comum.",
    pontosDeProva: [
      "Não se deve iniciar terapia hipouricemiante (como alopurinol) durante a crise aguda de gota, pois a flutuação do ácido úrico pode prolongar ou agravar a crise — o tratamento hipouricemiante é iniciado após resolução do episódio agudo",
      "O ácido úrico sérico pode estar normal durante a crise aguda de gota, não devendo ser usado isoladamente para excluir o diagnóstico nesse momento",
    ],
    casoClinico: {
      vinheta:
        "Homem, 52 anos, obeso, etilista moderado, acorda com dor intensa e súbita no primeiro pododáctilo direito, associada a eritema, calor e edema importantes. Ácido úrico sérico: 6,8 mg/dL (limite superior da normalidade).",
      pergunta: "O ácido úrico normal/limítrofe exclui o diagnóstico de gota neste momento?",
      raciocinio:
        "O quadro é clinicamente muito sugestivo de crise aguda de gota (podagra clássica). O ácido úrico sérico pode estar normal durante a crise aguda, mesmo em pacientes com gota verdadeira, não devendo ser usado isoladamente para excluir o diagnóstico nesse momento.",
      conduta:
        "Tratar a crise aguda com anti-inflamatório não esteroidal, colchicina ou corticosteroide conforme perfil do paciente, sem iniciar terapia hipouricemiante nesse momento, e reavaliar ácido úrico e indicação de tratamento de manutenção após resolução da crise.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "ibuprofeno", nome: "Ibuprofeno" },
    ],
    medicamentosSecaoTitulo: "Medicamento para a crise aguda",
    medicamentosNota:
      "O ibuprofeno (ou outro AINE) é usado no tratamento da crise aguda de gota. A terapia hipouricemiante de manutenção (ex.: alopurinol), indicada em gota recorrente/tofácea e iniciada somente após resolução da crise, ainda não tem ficha própria no site.",
    fontes: [
      { tema: "Fisiopatologia e papel do inflamassoma NLRP3", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Estágios da doença e critérios ACR/EULAR 2015", fonte: "ACR/EULAR Classification Criteria for Gout, 2015" },
      { tema: "Tratamento da crise aguda e terapia hipouricemiante", fonte: "American College of Rheumatology Guideline for the Management of Gout, 2020" },
    ],
  },
  {
    slug: "espondilite-anquilosante",
    nome: "Espondilite anquilosante",
    sinonimos: ["Espondiloartrite axial"],
    cid10: "M45",
    especialidade: "Reumatologia",
    etiologia: "Autoimune",
    resumo: "Espondiloartrite inflamatória crônica que acomete predominantemente as articulações sacroilíacas e a coluna vertebral, fortemente associada ao HLA-B27, mais comum em homens jovens.",
    definicao:
      "Doença inflamatória crônica do grupo das espondiloartrites, caracterizada por acometimento predominante do esqueleto axial (articulações sacroilíacas e coluna vertebral), com potencial de anquilose (fusão óssea) progressiva em casos avançados não tratados.",
    epidemiologia:
      "Mais comum em homens, com início tipicamente antes dos 40 anos; fortemente associada à presença do antígeno HLA-B27, embora a maioria dos portadores de HLA-B27 na população geral nunca desenvolva a doença, indicando papel de outros fatores genéticos e ambientais.",
    fisiopatologia:
      "Mecanismo não completamente elucidado, mas envolve resposta imune anormal nas ênteses (locais de inserção de tendões e ligamentos no osso) e nas articulações sacroilíacas, com inflamação crônica que evolui para formação óssea reativa (sindesmófitos) e, em casos avançados, fusão vertebral progressiva ('coluna em bambu').",
    classificacao:
      "Critérios de Nova York modificados (1984) para espondilite anquilosante estabelecida, exigindo sacroiliíte radiográfica associada a critérios clínicos. Os critérios ASAS (Assessment of SpondyloArthritis International Society) para espondiloartrite axial ampliam o espectro diagnóstico, incluindo formas não radiográficas (sem sacroiliíte visível em radiografia simples, mas com inflamação identificável por ressonância magnética e/ou HLA-B27 positivo associado a características clínicas compatíveis) — permitindo diagnóstico mais precoce.",
    quadroClinico: [
      "Dor lombar/glútea inflamatória crônica: início insidioso antes dos 40 anos, piora com repouso e melhora com exercício, rigidez matinal prolongada (>30 minutos)",
      "Limitação progressiva da mobilidade da coluna vertebral",
      "Entesite (dor em locais de inserção tendínea, como tendão de Aquiles) e, em alguns casos, artrite periférica de grandes articulações",
      "Uveíte anterior aguda como manifestação extra-articular mais comum",
    ],
    diagnostico: [
      "Combinação de dor lombar inflamatória crônica, limitação da mobilidade espinhal e evidência de sacroiliíte (radiografia simples ou ressonância magnética)",
      "HLA-B27 como apoio diagnóstico, especialmente relevante nos critérios ASAS para formas não radiográficas",
      "Ressonância magnética de articulações sacroilíacas mais sensível que radiografia simples para detecção precoce de inflamação, antes do dano estrutural visível",
    ],
    examesComplementares: [
      "Radiografia de sacroilíacas (sacroiliíte bilateral grau ≥2 ou unilateral grau ≥3, critérios de Nova York modificados)",
      "Ressonância magnética de sacroilíacas (edema ósseo/inflamação ativa, mais sensível para doença precoce)",
      "HLA-B27 (positivo na grande maioria dos pacientes, mas não exclusivo nem obrigatório para o diagnóstico)",
      "Provas de atividade inflamatória (VHS, PCR), frequentemente elevadas mas nem sempre correlacionadas com atividade clínica",
    ],
    diagnosticoDiferencial: [
      "Dor lombar mecânica comum (não inflamatória)",
      "Outras espondiloartrites (psoriásica, reativa, associada a doença inflamatória intestinal)",
      "Hiperostose esquelética idiopática difusa (DISH)",
    ],
    tratamento: [
      "Anti-inflamatório não esteroidal como primeira linha farmacológica, com resposta frequentemente significativa e característica da doença",
      "Exercício físico regular e fisioterapia, componente central do tratamento para manutenção da mobilidade espinhal",
      "Terapia biológica (anti-TNF ou outras classes) em doença com resposta inadequada a AINEs, especialmente em doença axial ativa persistente",
      "Encaminhamento oftalmológico urgente em episódios de uveíte anterior aguda (olho vermelho doloroso, fotofobia)",
    ],
    complicacoes: [
      "Aguda: uveíte anterior aguda, fraturas vertebrais (coluna anquilosada e rígida é mais suscetível a fraturas mesmo com trauma de baixa energia)",
      "Crônica: anquilose vertebral progressiva com limitação funcional significativa, cifose torácica, doença cardiovascular associada (incluindo comprometimento da valva aórtica em casos avançados)",
    ],
    redFlags: [
      "Dor lombar de início antes dos 40 anos, com melhora ao exercício e piora ao repouso, associada a rigidez matinal prolongada — diferenciar ativamente de lombalgia mecânica comum, que tem padrão oposto",
    ],
    prognostico:
      "Variável, mas o diagnóstico e tratamento precoces (incluindo exercício regular e, quando indicado, terapia biológica) melhoram significativamente a função e retardam a progressão estrutural; a doença não tratada pode evoluir para anquilose vertebral significativa ao longo de anos.",
    pontosDeProva: [
      "A dor lombar inflamatória (melhora com exercício, piora com repouso, rigidez matinal prolongada) contrasta com o padrão mecânico da lombalgia comum (piora com atividade, melhora com repouso) — distinção fundamental de prova",
      "A resposta significativa e característica a AINEs é um elemento de apoio diagnóstico na espondiloartrite axial, diferente de muitas outras causas de dor lombar crônica",
    ],
    casoClinico: {
      vinheta:
        "Homem, 26 anos, relata dor lombar baixa e em nádegas há 8 meses, pior pela manhã e após períodos de repouso, com melhora notável ao longo do dia com atividade física. Rigidez matinal de cerca de 1 hora. HLA-B27 positivo.",
      pergunta: "Qual é a hipótese diagnóstica mais provável e a conduta inicial?",
      raciocinio:
        "O padrão de dor lombar inflamatória (piora com repouso, melhora com exercício, rigidez matinal prolongada) em homem jovem com HLA-B27 positivo é altamente sugestivo de espondiloartrite axial, mesmo que a radiografia de sacroilíacas ainda não mostre alterações estruturais avançadas.",
      conduta:
        "Solicitar ressonância magnética de sacroilíacas para pesquisa de inflamação ativa precoce (mais sensível que radiografia simples), iniciar anti-inflamatório não esteroidal como primeira linha, e orientar programa de exercícios regulares para preservação da mobilidade espinhal.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "ibuprofeno", nome: "Ibuprofeno" },
    ],
    fontes: [
      { tema: "Fisiopatologia e associação com HLA-B27", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Critérios de Nova York modificados e critérios ASAS", fonte: "Assessment of SpondyloArthritis International Society (ASAS) Classification Criteria, 2009" },
      { tema: "AINE como primeira linha farmacológica", fonte: "ASAS-EULAR Recommendations for the Management of Axial Spondyloarthritis, 2016" },
    ],
  },
  {
    slug: "artropatias-psoriasicas-enteropaticas",
    nome: "Artropatias psoriásicas e enteropáticas",
    sinonimos: ["Artrite psoriásica", "Artrite enteropática"],
    cid10: "M07",
    especialidade: "Reumatologia",
    etiologia: "Autoimune",
    resumo: "Espondiloartrites associadas à psoríase cutânea (artrite psoriásica) ou à doença inflamatória intestinal (artrite enteropática), com espectro variável de acometimento articular periférico e/ou axial.",
    definicao:
      "Grupo de espondiloartrites soronegativas associadas a doenças sistêmicas específicas: artrite psoriásica (associada à psoríase cutânea, podendo precedê-la, coincidir ou segui-la) e artrite enteropática (associada à doença inflamatória intestinal, Crohn ou colite ulcerativa), com espectro de acometimento articular periférico, axial ou ambos.",
    epidemiologia:
      "A artrite psoriásica acomete uma parcela significativa dos pacientes com psoríase cutânea, podendo a artrite anteceder as lesões de pele em uma minoria dos casos, o que dificulta o diagnóstico inicial. A artrite enteropática ocorre em pacientes com doença inflamatória intestinal estabelecida, com atividade articular periférica frequentemente (mas não sempre) acompanhando a atividade da doença intestinal de base.",
    fisiopatologia:
      "Compartilham mecanismos imunomediados com as demais espondiloartrites, com ativação de vias inflamatórias (incluindo o eixo IL-23/IL-17, particularmente relevante na artrite psoriásica) que causam sinovite, entesite e, em casos axiais, sacroiliíte. Na artrite enteropática, acredita-se que a inflamação intestinal crônica contribua para a ativação imune sistêmica que se manifesta também nas articulações.",
    classificacao:
      "Artrite psoriásica classificada pelos critérios CASPAR (Classification Criteria for Psoriatic Arthritis), que combinam evidência de psoríase (atual, pessoal ou familiar) com características articulares inflamatórias. Padrões de acometimento articular incluem oligoarticular assimétrico, poliarticular simétrico (mimetizando artrite reumatoide), predominantemente axial, acometimento de interfalangeanas distais e artrite mutilante (forma rara e mais destrutiva). A artrite enteropática é classificada por padrão periférico (tipo 1, oligoarticular, associado a atividade da doença intestinal; tipo 2, poliarticular, com curso mais independente da atividade intestinal) ou axial.",
    quadroClinico: [
      "Artrite psoriásica: dor e edema articular periférico (frequentemente assimétrico), dactilite ('dedo em salsicha'), entesite, acometimento de interfalangeanas distais associado a alterações ungueais psoriásicas",
      "Artrite enteropática: artrite periférica (mono ou oligoarticular, geralmente de grandes articulações de membros inferiores) associada a sintomas de doença inflamatória intestinal ativa ou história prévia dela",
      "Ambas podem cursar com acometimento axial (dor lombar inflamatória) semelhante ao da espondilite anquilosante",
      "Lesões cutâneas de psoríase (placas eritematoescamosas) ou sintomas gastrointestinais (diarreia, sangue nas fezes) conforme a condição associada",
    ],
    diagnostico: [
      "Artrite psoriásica: critérios CASPAR, combinando evidência de psoríase com características articulares inflamatórias compatíveis",
      "Artrite enteropática: contexto de doença inflamatória intestinal estabelecida associado a artrite inflamatória sem outra causa identificada",
      "Exames de imagem (radiografia, ressonância) para avaliação de dano estrutural e entesite/sacroiliíte quando há suspeita de acometimento axial",
    ],
    examesComplementares: [
      "Fator reumatoide e anti-CCP tipicamente negativos (soronegatividade característica das espondiloartrites)",
      "Provas de atividade inflamatória (VHS, PCR) frequentemente elevadas em atividade de doença",
      "Radiografia de mãos/pés em artrite psoriásica avançada (achados característicos incluem erosões associadas a formação óssea nova, padrão distinto de outras artrites erosivas)",
    ],
    diagnosticoDiferencial: [
      "Artrite reumatoide (especialmente na forma poliarticular simétrica de artrite psoriásica)",
      "Gota (especialmente quando há acometimento de interfalangeanas distais e dactilite)",
      "Outras espondiloartrites",
    ],
    tratamento: [
      "Anti-inflamatório não esteroidal para controle sintomático de dor e rigidez em doença de atividade leve, usado com cautela e evitado em vigência de atividade da doença inflamatória intestinal na forma enteropática, pelo potencial de exacerbar os sintomas gastrointestinais",
      "Terapia biológica (anti-TNF e outras classes conforme perfil, incluindo inibidores de IL-17/IL-23 na artrite psoriásica) em doença moderada a grave ou refratária, com benefício frequentemente concomitante sobre as manifestações cutâneas/intestinais associadas",
      "Metotrexato e outros imunossupressores convencionais em artrite psoriásica periférica, especialmente na forma poliarticular",
      "Tratamento coordenado com dermatologia (psoríase) ou gastroenterologia (doença inflamatória intestinal) conforme a condição associada",
    ],
    complicacoes: [
      "Aguda: dactilite/entesite incapacitante em crises de atividade",
      "Crônica: dano articular estrutural e deformidade (especialmente na artrite mutilante, forma rara e grave da artrite psoriásica), limitação funcional progressiva",
    ],
    redFlags: [
      "Uso de anti-inflamatório não esteroidal em paciente com artrite enteropática e doença inflamatória intestinal ativa — risco de exacerbação dos sintomas intestinais, exigindo reavaliação da estratégia analgésica",
    ],
    prognostico:
      "Variável conforme o padrão de acometimento e a resposta ao tratamento; a terapia biológica moderna melhorou significativamente o controle de doença em casos refratários, mas a artrite mutilante e o dano estrutural acumulado em doença não controlada podem causar incapacidade funcional significativa.",
    pontosDeProva: [
      "Anti-inflamatórios não esteroidais devem ser usados com cautela na artrite enteropática associada a doença inflamatória intestinal ativa, pelo risco de exacerbar os sintomas gastrointestinais de base — diferencial importante em relação a outras espondiloartrites",
      "A dactilite ('dedo em salsicha') é um achado característico e relativamente específico da artrite psoriásica, útil para diferenciá-la de outras poliartrites",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 34 anos, com colite ulcerativa conhecida em atividade, relata dor e edema em joelho direito e tornozelo esquerdo há 2 semanas, coincidindo com piora da diarreia sanguinolenta habitual.",
      pergunta: "Qual é a hipótese diagnóstica mais provável e uma consideração importante na escolha do analgésico?",
      raciocinio:
        "A artrite periférica oligoarticular assimétrica de grandes articulações, coincidindo temporalmente com atividade da doença inflamatória intestinal de base, é sugestiva de artrite enteropática tipo 1 (associada à atividade intestinal).",
      conduta:
        "Evitar anti-inflamatório não esteroidal como analgésico de escolha, pelo risco de exacerbar a atividade da colite ulcerativa, priorizando o controle da doença intestinal de base (que tende a melhorar a artrite associada) e analgesia alternativa conforme necessário.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "metotrexato", nome: "Metotrexato" },
    ],
    medicamentosSecaoTitulo: "Medicamento para artrite psoriásica poliarticular periférica",
    medicamentosNota:
      "O metotrexato é usado especificamente na forma poliarticular periférica da artrite psoriásica, não no acometimento axial isolado nem como escolha na artrite enteropática. O AINE é usado com cautela nessas condições e evitado durante atividade da doença inflamatória intestinal na forma enteropática. A terapia biológica, para doença moderada a grave ou refratária, ainda não tem ficha própria no site.",
    fontes: [
      { tema: "Fisiopatologia e eixo IL-23/IL-17", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Critérios CASPAR e classificação de padrões articulares", fonte: "CASPAR Classification Criteria for Psoriatic Arthritis, 2006" },
      { tema: "Cautela com AINE na artrite enteropática ativa", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "esclerose-sistemica",
    nome: "Esclerose sistêmica",
    sinonimos: ["Esclerodermia"],
    cid10: "M34",
    especialidade: "Reumatologia",
    etiologia: "Autoimune",
    resumo: "Doença autoimune sistêmica caracterizada por fibrose cutânea e de órgãos internos, vasculopatia e disfunção imunológica, com formas limitada e difusa de gravidade e prognóstico distintos.",
    definicao:
      "Doença autoimune sistêmica caracterizada pela tríade de fibrose excessiva de pele e órgãos internos, vasculopatia de pequenos vasos e disfunção imunológica com produção de autoanticorpos específicos, com espectro de gravidade que varia da forma cutânea limitada à forma cutânea difusa.",
    epidemiologia:
      "Mais comum em mulheres, com pico de incidência entre 30-50 anos; doença rara em comparação a outras doenças autoimunes reumatológicas, mas com potencial de acometimento multissistêmico grave, particularmente pulmonar, cardíaco e renal na forma difusa.",
    fisiopatologia:
      "Uma combinação de lesão endotelial vascular precoce, ativação imune com produção de autoanticorpos específicos e ativação excessiva de fibroblastos leva a deposição descontrolada de colágeno, causando fibrose progressiva de pele e órgãos internos (pulmão, coração, trato gastrointestinal, rins). A vasculopatia de pequenos vasos explica o fenômeno de Raynaud (quase universal na doença) e a crise renal esclerodérmica.",
    classificacao:
      "Classificada em forma cutânea limitada (acometimento cutâneo distal a cotovelos/joelhos e face, historicamente descrita pelo acrônimo CREST — calcinose, Raynaud, dismotilidade esofágica, esclerodactilia, telangiectasias — associada a anticorpo anticentrômero) e forma cutânea difusa (acometimento cutâneo mais extenso, incluindo tronco, progressão mais rápida, maior risco de acometimento visceral precoce, incluindo crise renal, associada a anticorpo antitopoisomerase I/Scl-70). Critérios de classificação ACR/EULAR (2013) combinam achados cutâneos, vasculares, sorológicos e viscerais.",
    quadroClinico: [
      "Fenômeno de Raynaud, quase universal e frequentemente a manifestação inicial",
      "Espessamento e endurecimento progressivo da pele (esclerodactilia nas mãos, face com perda de expressividade)",
      "Dismotilidade esofágica com disfagia e refluxo importante",
      "Dispneia progressiva por doença pulmonar intersticial ou hipertensão arterial pulmonar, conforme o subtipo",
    ],
    diagnostico: [
      "Critérios de classificação ACR/EULAR (2013), combinando espessamento cutâneo característico, fenômeno de Raynaud, alterações capilaroscópicas, autoanticorpos específicos (anticentrômero, antitopoisomerase I) e acometimento visceral",
      "Capilaroscopia periungueal (padrão esclerodérmico) como ferramenta de apoio diagnóstico precoce",
      "Rastreamento sistemático de acometimento visceral (função pulmonar com DLCO, ecocardiograma, função renal) mesmo em pacientes com sintomas cutâneos predominantes, pela relevância prognóstica",
    ],
    examesComplementares: [
      "Anticorpo anticentrômero (forma limitada) e antitopoisomerase I/Scl-70 (forma difusa) como marcadores sorológicos de apoio e de perfil de risco",
      "Prova de função pulmonar com DLCO e tomografia de tórax de alta resolução (rastreamento de doença pulmonar intersticial)",
      "Ecocardiograma (rastreamento de hipertensão arterial pulmonar)",
      "Função renal e pressão arterial monitorizadas de perto, pelo risco de crise renal esclerodérmica",
    ],
    diagnosticoDiferencial: [
      "Outras doenças do tecido conjuntivo com sobreposição (doença mista do tecido conjuntivo)",
      "Fasciite eosinofílica",
      "Esclerodermia localizada (morfeia, sem acometimento sistêmico)",
    ],
    tratamento: [
      "Tratamento direcionado a cada manifestação de órgão-alvo, já que não há terapia única que reverta a fibrose sistêmica de forma abrangente",
      "Bloqueadores de canal de cálcio para fenômeno de Raynaud sintomático",
      "Inibidor da enzima conversora de angiotensina (IECA) como pilar do tratamento da crise renal esclerodérmica — emergência que exige controle pressórico agressivo e rápido, com o captopril classicamente preferido pela facilidade de titulação rápida (meia-vida curta)",
      "Imunossupressores (conforme órgão acometido) para doença pulmonar intersticial ou outras manifestações inflamatórias significativas",
    ],
    complicacoes: [
      "Aguda: crise renal esclerodérmica (hipertensão maligna com insuficiência renal aguda), emergência com risco de vida",
      "Crônica: doença pulmonar intersticial progressiva, hipertensão arterial pulmonar, dismotilidade gastrointestinal grave, calcinose cutânea",
    ],
    redFlags: [
      "Elevação abrupta da pressão arterial associada a piora da função renal em paciente com esclerose sistêmica, especialmente na forma difusa e em fase inicial da doença — reconhecer crise renal esclerodérmica imediatamente e iniciar IECA sem demora, mesmo antes de investigação completa",
    ],
    prognostico:
      "Variável conforme o subtipo: a forma limitada tem curso mais indolente, embora com risco de hipertensão arterial pulmonar tardia; a forma difusa tem maior risco de acometimento visceral grave precoce, incluindo doença pulmonar intersticial rapidamente progressiva e crise renal, sendo historicamente associada a pior prognóstico, embora o reconhecimento e tratamento precoce da crise renal com IECA tenha mudado drasticamente esse desfecho específico.",
    pontosDeProva: [
      "O IECA (classicamente o captopril, pela meia-vida curta que permite titulação rápida) é o tratamento de escolha na crise renal esclerodérmica — antes de sua introdução, essa complicação era quase invariavelmente fatal, sendo um dos maiores avanços terapêuticos da reumatologia",
      "O anticorpo antitopoisomerase I (Scl-70) associa-se à forma difusa e a maior risco de doença pulmonar intersticial, enquanto o anticentrômero associa-se à forma limitada e a maior risco de hipertensão arterial pulmonar isolada tardia",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 45 anos, com esclerose sistêmica forma difusa diagnosticada há 8 meses, é internada com cefaleia intensa, pressão arterial 210x120 mmHg e creatinina em elevação progressiva nos últimos 2 dias.",
      pergunta: "Qual é a hipótese diagnóstica e a conduta terapêutica imediata?",
      raciocinio:
        "A combinação de esclerose sistêmica de forma difusa em fase inicial (maior risco), hipertensão grave de início abrupto e piora aguda da função renal é altamente sugestiva de crise renal esclerodérmica, uma emergência que exige tratamento imediato.",
      conduta:
        "Iniciar IECA (captopril) imediatamente, com titulação rápida da dose conforme resposta pressórica, sem aguardar investigação diagnóstica completa, dado o risco de progressão rápida para insuficiência renal irreversível se o tratamento for postergado.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "captopril", nome: "Captopril" },
    ],
    medicamentosSecaoTitulo: "Medicamento para crise renal esclerodérmica",
    medicamentosNota:
      "O captopril é usado especificamente no tratamento da crise renal esclerodérmica (emergência hipertensiva com insuficiência renal aguda), não para a doença sistêmica em si. O tratamento das demais manifestações (Raynaud, doença pulmonar intersticial) depende de outras classes de medicamentos, ainda sem fichas próprias no site.",
    fontes: [
      { tema: "Fisiopatologia e classificação limitada/difusa", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Critérios ACR/EULAR 2013 e autoanticorpos específicos", fonte: "ACR/EULAR Classification Criteria for Systemic Sclerosis, 2013" },
      { tema: "IECA na crise renal esclerodérmica", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "dermatopoliomiosite",
    nome: "Dermatopoliomiosite",
    sinonimos: ["Dermatomiosite", "Polimiosite"],
    cid10: "M33",
    especialidade: "Reumatologia",
    etiologia: "Autoimune",
    resumo: "Miopatias inflamatórias idiopáticas caracterizadas por fraqueza muscular proximal simétrica, com achados cutâneos característicos na dermatomiosite e ausência deles na polimiosite.",
    definicao:
      "Grupo de miopatias inflamatórias idiopáticas caracterizadas por inflamação muscular autoimune, causando fraqueza muscular proximal simétrica progressiva; a dermatomiosite se distingue pela presença de achados cutâneos característicos, ausentes na polimiosite.",
    epidemiologia:
      "Mais comum em mulheres; a dermatomiosite pode ocorrer em qualquer idade, incluindo uma forma juvenil, enquanto a polimiosite tipicamente acomete adultos. Ambas têm associação reconhecida com neoplasias malignas ocultas, particularmente relevante e mais forte na dermatomiosite do adulto.",
    fisiopatologia:
      "Na dermatomiosite, a lesão primária é vascular, com ativação do complemento contra capilares endomisiais mediada por autoanticorpos, causando isquemia muscular e atrofia perifascicular característica. Na polimiosite, um processo de citotoxicidade mediada por linfócitos T CD8+ ataca diretamente as fibras musculares que expressam antígenos de classe I do complexo principal de histocompatibilidade, com padrão de lesão endomisial (dentro dos fascículos), distinto do padrão perivascular da dermatomiosite.",
    classificacao:
      "Critérios clássicos de Bohan e Peter (1975) para diagnóstico, combinando fraqueza muscular proximal simétrica, elevação de enzimas musculares, alterações eletromiográficas características, achados histopatológicos na biópsia muscular e, na dermatomiosite, achados cutâneos característicos (heliotropo, pápulas de Gottron).",
    quadroClinico: [
      "Fraqueza muscular proximal simétrica progressiva (dificuldade para subir escadas, levantar os braços, levantar-se de cadeiras), geralmente indolor ou com desconforto leve",
      "Dermatomiosite: heliotropo (coloração violácea nas pálpebras superiores, frequentemente com edema periorbital), pápulas de Gottron (lesões eritematoescamosas sobre articulações interfalangeanas e metacarpofalangeanas)",
      "Disfagia por acometimento da musculatura estriada da orofaringe/esôfago proximal em casos mais avançados",
      "Sintomas de doença pulmonar intersticial associada (dispneia, tosse seca) em uma parcela dos pacientes",
    ],
    diagnostico: [
      "Combinação de fraqueza muscular proximal simétrica, enzimas musculares elevadas, alterações eletromiográficas e, quando necessário, biópsia muscular",
      "Autoanticorpos específicos (ex.: anti-Jo-1, associado à síndrome antissintetase com acometimento pulmonar) auxiliam na caracterização do subtipo e do perfil de risco",
      "Rastreamento de neoplasia oculta recomendado em adultos com dermatomiosite recém-diagnosticada, dada a associação bem estabelecida",
    ],
    examesComplementares: [
      "Creatinofosfoquinase (CPK) e outras enzimas musculares (aldolase, transaminases, DHL) elevadas",
      "Eletromiografia com padrão miopático característico",
      "Biópsia muscular: atrofia perifascicular com inflamação perivascular na dermatomiosite; infiltrado inflamatório endomisial com invasão de fibras musculares não necróticas na polimiosite",
      "Autoanticorpos miosite-específicos (anti-Jo-1, anti-Mi-2, entre outros) conforme suspeita clínica",
    ],
    diagnosticoDiferencial: [
      "Miopatia induzida por estatina ou outros medicamentos",
      "Distrofias musculares",
      "Miosite por corpos de inclusão (mais comum em idosos, com fraqueza assimétrica e distal associada, resposta pior a imunossupressão)",
    ],
    tratamento: [
      "Corticosteroide sistêmico em dose imunossupressora como tratamento de primeira linha para indução",
      "Imunossupressores poupadores de corticosteroide (ex.: metotrexato, azatioprina) associados precocemente na maioria dos casos, para permitir desmame do corticosteroide e controle a longo prazo",
      "Investigação e tratamento de neoplasia oculta quando identificada, particularmente relevante na dermatomiosite do adulto",
      "Fisioterapia para preservação de força e função muscular ao longo do tratamento",
    ],
    complicacoes: [
      "Aguda: disfagia grave com risco de aspiração, fraqueza da musculatura respiratória em casos graves",
      "Crônica: doença pulmonar intersticial progressiva (especialmente na síndrome antissintetase), calcinose cutânea (mais comum na forma juvenil), neoplasia maligna associada (dermatomiosite do adulto)",
    ],
    redFlags: [
      "Disfagia progressiva ou dispneia de início recente em paciente com miosite inflamatória — investigar acometimento da musculatura orofaríngea/respiratória ou doença pulmonar intersticial associada, ambas com potencial de gravidade significativa",
    ],
    prognostico:
      "Variável conforme resposta ao tratamento imunossupressor e presença de complicações associadas (doença pulmonar intersticial, neoplasia); a maioria dos pacientes responde ao tratamento com melhora significativa da força muscular, mas a recuperação pode ser gradual ao longo de meses.",
    pontosDeProva: [
      "A dermatomiosite do adulto tem associação bem estabelecida com neoplasia maligna oculta, justificando rastreamento oncológico direcionado ao diagnóstico, especialmente em pacientes acima de determinada idade",
      "A distinção histopatológica entre dermatomiosite (inflamação perivascular, atrofia perifascicular) e polimiosite (inflamação endomisial, invasão de fibras não necróticas) reflete mecanismos fisiopatológicos distintos (humoral vs. celular direto)",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 58 anos, relata dificuldade progressiva para subir escadas e pentear o cabelo há 2 meses, associada a coloração violácea nas pálpebras superiores e lesões eritematoescamosas sobre as articulações dos dedos. CPK: 3200 U/L.",
      pergunta: "Qual é o diagnóstico mais provável e uma investigação adicional importante a ser considerada?",
      raciocinio:
        "A fraqueza muscular proximal simétrica associada a heliotropo e pápulas de Gottron, com CPK muito elevada, é diagnóstica de dermatomiosite. Dada a idade da paciente e o diagnóstico recente de dermatomiosite do adulto, o rastreamento de neoplasia oculta é uma consideração importante pela associação bem estabelecida entre as duas condições.",
      conduta:
        "Confirmar com eletromiografia e, se necessário, biópsia muscular, iniciar corticosteroide sistêmico em dose imunossupressora associado a imunossupressor poupador de corticosteroide, e realizar rastreamento oncológico direcionado dada a associação com neoplasia oculta.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "prednisona", nome: "Prednisona" },
      { slug: "metotrexato", nome: "Metotrexato" },
    ],
    medicamentosNota:
      "A prednisona é usada para indução do tratamento. O metotrexato é um dos imunossupressores poupadores de corticosteroide associados precocemente na maioria dos casos, para permitir o desmame do corticosteroide. A azatioprina, outra opção comum na mesma função, ainda não tem ficha própria no site.",
    fontes: [
      { tema: "Fisiopatologia e distinção histopatológica dermatomiosite/polimiosite", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Critérios de Bohan e Peter", fonte: "Bohan A, Peter JB, critérios clássicos de diagnóstico de miopatias inflamatórias, 1975" },
      { tema: "Associação com neoplasia oculta na dermatomiosite do adulto", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "poliarterite-nodosa-vasculites",
    nome: "Poliarterite nodosa e outras vasculites",
    sinonimos: ["PAN", "Vasculites sistêmicas"],
    cid10: "M30",
    especialidade: "Reumatologia",
    etiologia: "Autoimune",
    resumo: "Grupo de doenças caracterizadas por inflamação da parede dos vasos sanguíneos, classificadas pelo calibre do vaso predominantemente acometido, com a poliarterite nodosa clássica afetando artérias de médio calibre.",
    definicao:
      "Grupo heterogêneo de doenças caracterizadas por inflamação e necrose da parede de vasos sanguíneos, com a poliarterite nodosa clássica definida como vasculite necrosante de artérias de médio calibre, sem envolvimento de vasos menores (arteríolas, capilares, vênulas) e sem associação com ANCA.",
    epidemiologia:
      "Doença rara; historicamente associada à infecção crônica pelo vírus da hepatite B em uma parcela dos casos, embora essa associação tenha se tornado menos comum com a redução da prevalência de hepatite B crônica em muitas populações.",
    fisiopatologia:
      "Inflamação transmural necrosante de artérias musculares de médio calibre causa formação de microaneurismas, trombose e estenose segmentar, comprometendo o fluxo sanguíneo para os órgãos supridos por esses vasos (mais comumente rins, trato gastrointestinal, pele, nervos periféricos e músculos), com padrão de acometimento tipicamente multissistêmico e assimétrico.",
    classificacao:
      "Classificação de Chapel Hill (nomenclatura consensual das vasculites) organiza as vasculites por calibre predominante do vaso acometido: grandes vasos (arterite de células gigantes, arterite de Takayasu), médios vasos (poliarterite nodosa, doença de Kawasaki) e pequenos vasos (subdivididas em associadas a ANCA — granulomatose com poliangiite, poliangiite microscópica, granulomatose eosinofílica com poliangiite — e não associadas a ANCA, como vasculite por IgA). A poliarterite nodosa clássica é ANCA-negativa, distinção importante em relação às vasculites de pequenos vasos.",
    quadroClinico: [
      "Sintomas constitucionais (febre, perda de peso, mal-estar) frequentemente proeminentes",
      "Mononeurite múltipla (acometimento assimétrico de múltiplos nervos periféricos individuais) é achado característico",
      "Dor abdominal (isquemia mesentérica), livedo reticular e nódulos subcutâneos dolorosos ao longo de trajetos vasculares",
      "Hipertensão arterial de início ou piora recente, refletindo acometimento renal vascular (sem glomerulonefrite, diferente das vasculites de pequenos vasos)",
    ],
    diagnostico: [
      "Biópsia de tecido acometido (nervo, músculo, pele) demonstrando vasculite necrosante de vasos de médio calibre é o método diagnóstico preferencial",
      "Angiografia visceral (mesentérica ou renal) demonstrando microaneurismas e estenoses segmentares quando a biópsia não é acessível ou conclusiva",
      "Investigação de infecção por hepatite B em todos os casos recém-diagnosticados, pela associação etiológica reconhecida",
    ],
    examesComplementares: [
      "Biópsia de tecido clinicamente acometido (nervo sural, músculo, pele)",
      "Angiografia visceral: microaneurismas e estenoses segmentares em artérias de médio calibre",
      "ANCA (tipicamente negativo na poliarterite nodosa clássica, ajudando a diferenciá-la das vasculites de pequenos vasos associadas a ANCA)",
      "Sorologia para hepatite B",
    ],
    diagnosticoDiferencial: [
      "Vasculites de pequenos vasos associadas a ANCA",
      "Endocardite infecciosa (pode mimetizar vasculite sistêmica por êmbolos sépticos)",
      "Neoplasias com síndrome paraneoplásica",
    ],
    tratamento: [
      "Corticosteroide sistêmico em dose imunossupressora como base do tratamento de indução",
      "Imunossupressor citotóxico (ex.: ciclofosfamida) associado ao corticosteroide em doença grave, com acometimento de órgão-alvo com risco de vida ou de perda funcional significativa",
      "Tratamento antiviral específico associado ao imunossupressor quando há associação com hepatite B ativa",
      "Terapia de manutenção com imunossupressor menos tóxico após indução de remissão, para reduzir risco de recidiva e toxicidade cumulativa do tratamento inicial",
    ],
    complicacoes: [
      "Aguda: isquemia mesentérica com perfuração intestinal, infarto renal, acidente vascular cerebral",
      "Crônica: neuropatia periférica residual, hipertensão arterial secundária, insuficiência renal crônica",
    ],
    redFlags: [
      "Dor abdominal intensa associada a sinais de irritação peritoneal em paciente com vasculite sistêmica conhecida — suspeitar de isquemia mesentérica com risco de perfuração, emergência cirúrgica",
      "Início súbito de fraqueza ou alteração de sensibilidade em território de nervo periférico específico (mononeurite múltipla) em paciente com sintomas constitucionais — investigar vasculite sistêmica ativamente",
    ],
    prognostico:
      "Sem tratamento, a poliarterite nodosa clássica tem mortalidade muito alta; com tratamento imunossupressor adequado (corticosteroide associado a ciclofosfamida em casos graves), a sobrevida e o controle de doença melhoram substancialmente, embora recidivas possam ocorrer.",
    pontosDeProva: [
      "A mononeurite múltipla (acometimento assimétrico de nervos periféricos individuais, diferente da polineuropatia simétrica distal comum) é um achado altamente sugestivo de vasculite sistêmica e deve sempre levantar essa suspeita",
      "A poliarterite nodosa clássica é ANCA-negativa e não causa glomerulonefrite (diferente das vasculites de pequenos vasos associadas a ANCA), pois poupa capilares glomerulares — a hipertensão decorre de isquemia por acometimento de artérias renais de médio calibre, não de inflamação glomerular direta",
    ],
    casoClinico: {
      vinheta:
        "Homem, 55 anos, relata febre, perda de peso de 8 kg e dor abdominal difusa há 6 semanas, associados a dormência e fraqueza súbitas no pé direito e, dias depois, na mão esquerda, em territórios de nervos distintos. Hipertensão arterial de início recente.",
      pergunta: "Qual é o padrão neurológico descrito e qual doença ele sugere fortemente?",
      raciocinio:
        "O acometimento assimétrico e sequencial de nervos periféricos individuais em territórios distintos caracteriza mononeurite múltipla, achado altamente sugestivo de vasculite sistêmica, reforçado pelos sintomas constitucionais, dor abdominal e hipertensão de início recente.",
      conduta:
        "Investigar com biópsia de nervo/músculo ou angiografia visceral (pesquisa de microaneurismas), solicitar ANCA e sorologia para hepatite B, e iniciar corticosteroide sistêmico associado a imunossupressor citotóxico se confirmado acometimento grave de órgão-alvo.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "prednisona", nome: "Prednisona" },
    ],
    medicamentosNota:
      "A prednisona é a base do tratamento de indução. Em doença grave com acometimento de órgão-alvo, associa-se um imunossupressor citotóxico (ex.: ciclofosfamida), ainda sem ficha própria no site.",
    fontes: [
      { tema: "Classificação de Chapel Hill por calibre de vaso", fonte: "2012 Revised International Chapel Hill Consensus Conference Nomenclature of Vasculitides" },
      { tema: "Fisiopatologia e associação com hepatite B", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Mononeurite múltipla como achado característico", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "osteoporose",
    nome: "Osteoporose",
    sinonimos: ["Osteoporose primária"],
    cid10: "M81",
    especialidade: "Reumatologia",
    etiologia: "Metabólica",
    resumo: "Doença esquelética sistêmica caracterizada por baixa massa óssea e deterioração da microarquitetura óssea, aumentando a fragilidade e o risco de fraturas, mais comum em mulheres pós-menopausa.",
    definicao:
      "Doença esquelética sistêmica caracterizada por redução da densidade mineral óssea e deterioração da microarquitetura do tecido ósseo, resultando em maior fragilidade óssea e risco aumentado de fraturas, definida operacionalmente por critério densitométrico (T-score).",
    epidemiologia:
      "Mais comum em mulheres pós-menopausa, pela perda acelerada de massa óssea relacionada à queda dos níveis de estrogênio; também ocorre em homens, especialmente idosos, e pode ser secundária a diversas condições (uso crônico de corticosteroide, hipertireoidismo, hipogonadismo, imobilização prolongada).",
    fisiopatologia:
      "O osso é constantemente remodelado por um equilíbrio entre reabsorção (osteoclastos) e formação (osteoblastos). Na osteoporose pós-menopausa, a queda do estrogênio remove um importante freio sobre a atividade osteoclástica, acelerando a reabsorção óssea em relação à formação, resultando em perda progressiva de massa óssea e deterioração da microarquitetura trabecular, com consequente fragilidade estrutural.",
    classificacao:
      "Classificação da Organização Mundial da Saúde por T-score em densitometria óssea (DXA): normal (T-score ≥ -1,0), osteopenia (T-score entre -1,0 e -2,5) e osteoporose (T-score ≤ -2,5); osteoporose grave/estabelecida quando há fratura por fragilidade associada ao critério densitométrico. Também classificada em primária (pós-menopausa ou senil) e secundária (associada a condições ou medicamentos específicos identificáveis).",
    quadroClinico: [
      "Frequentemente assintomática até a ocorrência de uma fratura por fragilidade (trauma de baixa energia)",
      "Fraturas características: vértebras (podem ser assintomáticas ou causar dor lombar/cifose progressiva), fêmur proximal (quadril) e rádio distal (punho)",
      "Perda de altura e cifose torácica progressiva em fraturas vertebrais múltiplas não diagnosticadas",
    ],
    diagnostico: [
      "Densitometria óssea (DXA) em colo de fêmur e coluna lombar é o método padrão para diagnóstico e classificação por T-score",
      "Ferramentas de avaliação de risco de fratura (como o FRAX) auxiliam a estimar o risco absoluto de fratura em 10 anos, integrando fatores clínicos além da densitometria",
      "Investigação de causas secundárias (função tireoidiana, cálcio, vitamina D, função renal) especialmente em casos atípicos (homens, mulheres jovens, perda óssea desproporcional)",
    ],
    examesComplementares: [
      "Densitometria óssea (DXA): T-score ≤ -2,5 define osteoporose (critério OMS)",
      "Cálcio, fósforo, vitamina D e função renal (rastreamento de causas secundárias e otimização antes do tratamento)",
      "Radiografia de coluna quando há suspeita de fratura vertebral assintomática",
    ],
    diagnosticoDiferencial: [
      "Osteomalácia (deficiência de mineralização, diferente da perda quantitativa de massa óssea normalmente mineralizada)",
      "Mieloma múltiplo e outras causas de fratura patológica",
      "Osteoporose secundária a causas endócrinas ou medicamentosas",
    ],
    tratamento: [
      "Suplementação adequada de cálcio e vitamina D, medidas de estilo de vida (exercício com sustentação de peso, cessação do tabagismo, redução do consumo de álcool) e prevenção de quedas em todos os pacientes",
      "Bisfosfonatos como primeira linha farmacológica na maioria dos pacientes com osteoporose estabelecida ou alto risco de fratura",
      "Terapias alternativas (ex.: denosumabe, teriparatida, terapia de reposição hormonal em contextos específicos) em pacientes com contraindicação ou resposta inadequada aos bisfosfonatos",
      "Reavaliação periódica com densitometria óssea para monitorização de resposta ao tratamento",
    ],
    complicacoes: [
      "Aguda: fratura de quadril, associada a morbimortalidade significativa em idosos, especialmente nos primeiros meses após o evento",
      "Crônica: cifose progressiva, dor crônica, perda de independência funcional após fraturas de repetição",
    ],
    redFlags: [
      "Fratura por trauma de baixa energia (fragilidade) em qualquer sítio esquelético — deve sempre levantar suspeita de osteoporose subjacente e motivar investigação e tratamento, mesmo na ausência de diagnóstico prévio",
    ],
    prognostico:
      "O tratamento adequado reduz significativamente o risco de novas fraturas; a fratura de quadril em idosos associa-se a mortalidade e perda de independência funcional significativas nos primeiros meses após o evento, reforçando a importância da prevenção primária e do tratamento precoce.",
    pontosDeProva: [
      "O T-score ≤ -2,5 na densitometria óssea é o critério diagnóstico central da osteoporose pela definição da OMS, com osteopenia definida no intervalo entre -1,0 e -2,5",
      "Uma fratura por fragilidade (trauma de baixa energia) já caracteriza osteoporose estabelecida clinicamente, independentemente do valor de T-score, e deve sempre motivar investigação e tratamento",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 68 anos, pós-menopausa há 18 anos, sofre queda da própria altura e sofre fratura de punho. Densitometria óssea posterior mostra T-score de -2,8 em coluna lombar.",
      pergunta: "Este quadro caracteriza osteoporose? Qual é a conduta terapêutica de primeira linha?",
      raciocinio:
        "A fratura por trauma de baixa energia (queda da própria altura) já caracteriza osteoporose estabelecida clinicamente, achado corroborado pelo T-score de -2,8, abaixo do limiar diagnóstico de -2,5 pela definição da OMS.",
      conduta:
        "Iniciar suplementação de cálcio e vitamina D, orientar exercício com sustentação de peso e prevenção de quedas, e iniciar bisfosfonato como tratamento farmacológico de primeira linha, dado o diagnóstico já estabelecido de osteoporose com fratura associada.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Classificação por T-score (critério OMS)", fonte: "Organização Mundial da Saúde, critérios densitométricos de osteoporose" },
      { tema: "Fisiopatologia da perda óssea pós-menopausa", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Bisfosfonatos como primeira linha farmacológica (ainda sem ficha própria no site)", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "dorsalgia-lombalgia",
    nome: "Dorsalgia (lombalgia)",
    sinonimos: ["Lombalgia", "Dor lombar"],
    cid10: "M54",
    especialidade: "Reumatologia",
    etiologia: "Multifatorial",
    resumo: "Dor na região lombar, queixa extremamente comum na prática clínica, majoritariamente de causa mecânica inespecífica e autolimitada, mas exigindo triagem ativa de sinais de alarme.",
    definicao:
      "Dor localizada na região lombar da coluna vertebral, podendo ou não irradiar para membros inferiores, classificada quanto à duração (aguda, subaguda, crônica) e à presença ou ausência de sinais de alarme para causas graves subjacentes, sendo a grande maioria dos casos de origem mecânica inespecífica.",
    epidemiologia:
      "Uma das queixas musculoesqueléticas mais comuns na prática clínica, afetando a maior parte da população em algum momento da vida; a grande maioria dos episódios é autolimitada e de causa mecânica inespecífica, sem necessidade de investigação extensa.",
    fisiopatologia:
      "Na lombalgia mecânica inespecífica (a grande maioria dos casos), a dor origina-se de estruturas musculoesqueléticas da coluna (músculos paravertebrais, ligamentos, articulações facetárias, discos intervertebrais) sem uma causa estrutural específica claramente identificável nos exames de imagem, frequentemente relacionada a esforço físico, má postura ou sobrecarga mecânica. Em uma minoria de casos, causas específicas identificáveis incluem hérnia discal com compressão radicular, estenose do canal vertebral, fratura, infecção, neoplasia ou espondiloartrite.",
    classificacao:
      "Classificada por duração em aguda (<4 semanas), subaguda (4-12 semanas) e crônica (>12 semanas). Classificada também por presença de sinais de alarme ('red flags': febre, perda de peso inexplicada, história de câncer, trauma significativo, déficit neurológico progressivo, disfunção de esfíncteres, idade de início atípica) que direcionam a necessidade de investigação adicional imediata, versus lombalgia mecânica inespecífica sem sinais de alarme.",
    quadroClinico: [
      "Dor lombar mecânica: piora com atividade/movimento, melhora com repouso, sem irradiação significativa para membros inferiores na maioria dos casos",
      "Dor irradiada (ciática) quando há compressão radicular associada, seguindo o trajeto do dermátomo correspondente",
      "Espasmo muscular paravertebral palpável em episódios agudos",
      "Sinais de alarme quando presentes: febre, perda de peso, dor noturna que não melhora com repouso, déficit neurológico progressivo, disfunção de esfíncteres (síndrome da cauda equina)",
    ],
    diagnostico: [
      "Anamnese e exame físico dirigidos à identificação de sinais de alarme são a etapa central da avaliação inicial",
      "Exames de imagem NÃO são rotineiramente indicados na lombalgia aguda mecânica inespecífica sem sinais de alarme, pela baixa correlação entre achados de imagem e sintomas e pelo risco de sobreinvestigação/sobretratamento",
      "Ressonância magnética indicada quando há sinais de alarme, déficit neurológico progressivo, ou dor persistente além de um período razoável de tratamento conservador",
    ],
    examesComplementares: [
      "Ressonância magnética de coluna lombar (reservada para sinais de alarme, déficit neurológico progressivo ou falha de tratamento conservador)",
      "Radiografia simples em suspeita de fratura ou quando ressonância não está disponível",
      "Exames laboratoriais (hemograma, VHS/PCR) quando há suspeita de causa infecciosa, inflamatória ou neoplásica",
    ],
    diagnosticoDiferencial: [
      "Hérnia discal com radiculopatia",
      "Estenose do canal vertebral lombar",
      "Espondiloartrite axial (quando o padrão é inflamatório, em paciente jovem)",
      "Causas viscerais referidas (nefrolitíase, aneurisma de aorta abdominal, doença ginecológica)",
    ],
    tratamento: [
      "Manutenção de atividade física dentro do tolerável (evitar repouso prolongado no leito, que piora o desfecho funcional) como orientação central na lombalgia aguda mecânica",
      "Anti-inflamatório não esteroidal como primeira linha farmacológica para controle da dor, quando não contraindicado",
      "Fisioterapia e exercícios de fortalecimento em lombalgia subaguda/crônica",
      "Avaliação para intervenção específica (infiltração, cirurgia) reservada a casos com compressão radicular significativa e refratária, estenose sintomática grave, ou sinais de alarme confirmados",
    ],
    complicacoes: [
      "Aguda: síndrome da cauda equina (compressão significativa das raízes nervosas caudais, com disfunção de esfíncteres e anestesia em sela) — emergência cirúrgica rara mas grave",
      "Crônica: cronificação da dor com impacto funcional e psicossocial significativo, especialmente quando há fatores de risco psicossociais não abordados",
    ],
    redFlags: [
      "Disfunção de esfíncteres (retenção urinária, incontinência) associada a anestesia em região perineal ('em sela') e fraqueza em membros inferiores — síndrome da cauda equina, emergência cirúrgica que exige ressonância magnética e avaliação neurocirúrgica imediatas",
      "Dor lombar noturna que não melhora com repouso, associada a perda de peso ou história de câncer — investigar causa neoplásica antes de assumir origem mecânica",
    ],
    prognostico:
      "Excelente na lombalgia aguda mecânica inespecífica, com a maioria dos episódios resolvendo em poucas semanas com tratamento conservador; uma minoria evolui para dor crônica, sendo fatores psicossociais frequentemente mais determinantes para essa cronificação do que achados estruturais de imagem.",
    pontosDeProva: [
      "Exames de imagem não são indicados rotineiramente na lombalgia aguda sem sinais de alarme — a correlação entre achados de imagem (como protrusões discais) e sintomas é fraca, e muitos adultos assintomáticos têm alterações significativas em exames de imagem",
      "A síndrome da cauda equina é uma emergência cirúrgica verdadeira entre as causas de lombalgia — a disfunção de esfíncteres e a anestesia em sela não podem ser subestimadas ou aguardadas",
    ],
    casoClinico: {
      vinheta:
        "Homem, 35 anos, relata dor lombar após levantar peso no trabalho há 3 dias, sem irradiação para membros inferiores, sem febre, perda de peso ou alteração urinária. Exame neurológico normal.",
      pergunta: "Qual é a conduta diagnóstica e terapêutica apropriada?",
      raciocinio:
        "O quadro é compatível com lombalgia aguda mecânica inespecífica, sem sinais de alarme identificados na história ou exame físico. Nesse cenário, exames de imagem não são indicados rotineiramente, e o tratamento conservador é a conduta apropriada.",
      conduta:
        "Orientar manutenção de atividade dentro do tolerável (evitar repouso prolongado), iniciar anti-inflamatório não esteroidal para controle da dor, e reavaliar caso os sintomas persistam além de algumas semanas ou surjam sinais de alarme.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "ibuprofeno", nome: "Ibuprofeno" },
    ],
    fontes: [
      { tema: "Classificação por duração e sinais de alarme", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Recomendação contra imagem rotineira sem sinais de alarme e AINE como primeira linha", fonte: "American College of Physicians Clinical Practice Guideline: Low Back Pain, 2017" },
    ],
  },
  {
    slug: "conjuntivite",
    nome: "Conjuntivite",
    sinonimos: ["Olho vermelho agudo"],
    cid10: "H10",
    especialidade: "Oftalmologia",
    etiologia: "Multifatorial",
    resumo: "Inflamação da conjuntiva de causa viral, bacteriana ou alérgica — motivo extremamente comum de consulta por olho vermelho, geralmente autolimitada.",
    definicao:
      "Processo inflamatório da conjuntiva (membrana mucosa que reveste a superfície interna das pálpebras e a esclera visível), de etiologia infecciosa (viral ou bacteriana) ou alérgica, caracterizado por hiperemia conjuntival associada a secreção ocular de características variáveis conforme a causa.",
    epidemiologia:
      "Uma das causas mais comuns de olho vermelho na atenção primária e no pronto-atendimento oftalmológico. A conjuntivite viral (frequentemente por adenovírus) é a causa infecciosa mais comum em adultos; a conjuntivite bacteriana é mais frequente em crianças. A conjuntivite alérgica tem caráter sazonal ou perene, associada a atopia.",
    fisiopatologia:
      "Na conjuntivite viral, o adenovírus (o agente mais comum) infecta diretamente o epitélio conjuntival, gerando resposta inflamatória linfocitária intensa e alta contagiosidade por contato direto ou fômites. Na conjuntivite bacteriana, bactérias (Staphylococcus aureus, Streptococcus pneumoniae, Haemophilus influenzae em crianças; Neisseria gonorrhoeae na forma hiperaguda) colonizam e invadem a superfície conjuntival, gerando exsudato purulento pela resposta neutrofílica. Na conjuntivite alérgica, alérgenos desencadeiam degranulação de mastócitos mediada por IgE (hipersensibilidade tipo I), liberando histamina e outros mediadores responsáveis pelo prurido característico.",
    classificacao:
      "Classificada por etiologia: viral (a mais comum em adultos, tipicamente adenoviral), bacteriana (mais comum em crianças, secreção purulenta), alérgica (sazonal ou perene) e formas específicas de maior gravidade, como a conjuntivite neonatal e a conjuntivite hiperaguda gonocócica. Não há um sistema de estadiamento formal amplamente usado — a classificação é fundamentalmente etiológica.",
    quadroClinico: [
      "Hiperemia conjuntival (olho vermelho), uni ou bilateral",
      "Secreção aquosa/serosa na viral; purulenta ou mucopurulenta na bacteriana (pálpebras podem 'grudar' ao acordar); aquosa com prurido intenso na alérgica",
      "Prurido ocular proeminente sugere etiologia alérgica",
      "Adenopatia pré-auricular palpável sugere etiologia viral",
      "Quemose (edema conjuntival), presente em qualquer etiologia, mais intensa na alérgica e na forma hiperaguda gonocócica",
      "Ausência de dor ocular importante, fotofobia intensa ou baixa acuidade visual significativa — a presença desses achados aponta para diagnóstico diferencial mais grave",
    ],
    diagnostico: [
      "Diagnóstico primariamente clínico, baseado nas características da secreção, sintomas associados (prurido, adenopatia) e contexto epidemiológico (contato com outras pessoas com quadro semelhante, sazonalidade alérgica)",
      "Cultura e antibiograma da secreção reservados a casos refratários, neonatos ou suspeita de conjuntivite gonocócica",
    ],
    examesComplementares: [
      "Exame com lâmpada de fenda, quando disponível, para avaliar a córnea e excluir comprometimento corneano associado",
      "Cultura de secreção ocular na conjuntivite neonatal, em casos hiperagudos ou refratários ao tratamento empírico",
      "Teste com fluoresceína para excluir lesão corneana quando há dor ou fotofobia desproporcionais ao quadro conjuntival",
    ],
    diagnosticoDiferencial: [
      "Ceratite (compromete a córnea, com dor e fotofobia mais intensas e risco à visão)",
      "Uveíte anterior / iridociclite (dor mais intensa, miose, fotofobia, hiperemia perilímbica)",
      "Glaucoma agudo de ângulo fechado (dor intensa, náusea, midríase média fixa — emergência)",
      "Episclerite / esclerite (hiperemia localizada, tipicamente sem secreção)",
    ],
    tratamento: [
      "Conjuntivite viral: tratamento de suporte (compressas frias, lubrificantes oculares); quadro autolimitado em 1 a 3 semanas; evitar corticosteroide tópico sem avaliação oftalmológica, pelo risco de prolongar a replicação viral",
      "Conjuntivite bacteriana: colírio antibiótico tópico de amplo espectro (classe ainda sem ficha própria de medicamento no site); a maioria dos casos também é autolimitada, mas o tratamento acelera a resolução e reduz a transmissão",
      "Conjuntivite alérgica: anti-histamínico tópico e/ou compressas frias; evitar o alérgeno identificado quando possível",
      "Higiene rigorosa das mãos e não compartilhar toalhas/objetos de uso pessoal — a conjuntivite viral é altamente contagiosa",
    ],
    complicacoes: [
      "Aguda: ceratoconjuntivite epidêmica (adenoviral), com infiltrados corneanos subepiteliais causando fotofobia e turvação visual prolongadas",
      "Crônica: conjuntivite alérgica não tratada pode evoluir com alterações conjuntivais crônicas, como papilas gigantes na ceratoconjuntivite vernal",
    ],
    redFlags: [
      "Dor ocular intensa, fotofobia importante ou diminuição da acuidade visual — sugerem comprometimento corneano ou uveal, não conjuntivite isolada, e exigem avaliação oftalmológica",
      "Secreção purulenta abundante de início hiperagudo (menos de 24h), especialmente em neonato ou adulto sexualmente ativo — suspeitar de conjuntivite gonocócica, capaz de perfurar a córnea rapidamente; emergência oftalmológica",
      "Uso de lentes de contato associado a dor e hiperemia — maior risco de ceratite bacteriana (incluindo por Pseudomonas), não conjuntivite simples",
    ],
    prognostico:
      "Excelente na grande maioria dos casos, com resolução completa em dias a poucas semanas. A conjuntivite viral pode cursar com fotofobia e turvação visual residual por semanas a meses quando há acometimento corneano associado (ceratoconjuntivite epidêmica).",
    pontosDeProva: [
      "Prurido intenso sugere etiologia alérgica; secreção purulenta sugere bacteriana; adenopatia pré-auricular sugere viral — é a tríade mais cobrada para diferenciar as três causas mais comuns",
      "Dor importante, fotofobia intensa e queda de acuidade visual NÃO são típicas de conjuntivite isolada — sempre reconsiderar o diagnóstico e pensar em ceratite, uveíte ou glaucoma agudo",
      "Conjuntivite gonocócica é hiperaguda e pode perfurar a córnea em horas — diagnóstico diferencial obrigatório em neonato com conjuntivite purulenta importante ou adulto sexualmente ativo",
    ],
    casoClinico: {
      vinheta:
        "Estudante universitário, 22 anos, procura atendimento por olho vermelho bilateral há 2 dias, com secreção aquosa abundante e sensação de areia nos olhos. Refere que o colega de quarto teve quadro semelhante na semana anterior. Ao exame, nota-se linfonodo pré-auricular palpável à direita.",
      pergunta: "Qual a hipótese diagnóstica mais provável e qual a conduta?",
      raciocinio:
        "Secreção aquosa, contexto de contato com outra pessoa com quadro semelhante e adenopatia pré-auricular são achados clássicos de conjuntivite viral, a causa infecciosa mais comum em adultos.",
      conduta:
        "Tratamento de suporte com compressas frias e lubrificantes oculares, orientação sobre a natureza autolimitada e altamente contagiosa do quadro (higiene das mãos, evitar compartilhar objetos pessoais), e retorno se surgir dor importante, fotofobia ou queda de visão.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Classificação etiológica e quadro clínico diferencial", fonte: "Kanski's Clinical Ophthalmology, 9ª ed." },
      { tema: "Conduta terapêutica por etiologia", fonte: "American Academy of Ophthalmology, Preferred Practice Pattern: Conjunctivitis" },
    ],
  },
  {
    slug: "hordeolo-calazio",
    nome: "Hordéolo e calázio",
    sinonimos: ["Terçol"],
    cid10: "H00",
    especialidade: "Oftalmologia",
    etiologia: "Multifatorial",
    resumo: "Lesões nodulares palpebrais comuns: o hordéolo é uma infecção bacteriana aguda e dolorosa; o calázio é uma inflamação granulomatosa crônica por obstrução de glândula, geralmente indolor.",
    definicao:
      "Hordéolo é uma infecção bacteriana aguda de uma glândula palpebral (glândula de Zeis/Moll no hordéolo externo, glândula de Meibômio no interno), formando um nódulo dolorido e hiperemiado. Calázio é uma inflamação granulomatosa crônica por obstrução de uma glândula de Meibômio, formando um nódulo indolor de crescimento lento, sem sinais infecciosos agudos.",
    epidemiologia:
      "Condições extremamente comuns na prática oftalmológica e de atenção primária, em qualquer faixa etária. Blefarite crônica e disfunção das glândulas de Meibômio são fatores predisponentes para ambos.",
    fisiopatologia:
      "O hordéolo resulta de infecção bacteriana aguda (tipicamente por Staphylococcus aureus) de uma glândula palpebral, com resposta inflamatória aguda supurativa. O calázio resulta da obstrução do ducto de uma glândula de Meibômio, com extravasamento de secreção sebácea (lipídica) para o tecido adjacente, desencadeando reação inflamatória granulomatosa crônica de corpo estranho — sem infecção bacteriana ativa, ainda que possa evoluir a partir de um hordéolo interno não resolvido.",
    classificacao:
      "Hordéolo classificado em externo (glândula de Zeis ou Moll, na base do cílio) e interno (glândula de Meibômio, mais profundo e geralmente mais doloroso). Calázio é considerado uma entidade distinta, crônica e não infecciosa, embora didaticamente agrupado com o hordéolo por acometerem estruturas semelhantes. Não há sistema de estadiamento formal para nenhuma das duas condições.",
    quadroClinico: [
      "Hordéolo: nódulo palpebral doloroso, hiperemiado, de início agudo, por vezes com ponto de drenagem purulenta visível",
      "Calázio: nódulo palpebral indolor (ou pouco doloroso), de crescimento lento ao longo de semanas, sem hiperemia importante",
      "Ambos podem causar sensação de peso ou desconforto palpebral leve; visão geralmente preservada, salvo calázios muito grandes causando astigmatismo induzido por compressão da córnea",
    ],
    diagnostico: [
      "Diagnóstico clínico, pela inspeção e palpação da lesão palpebral e pelo tempo de evolução e presença ou ausência de dor/sinais inflamatórios agudos",
    ],
    examesComplementares: [
      "Geralmente nenhum exame complementar é necessário",
      "Biópsia excisional indicada em calázio recorrente no mesmo local, especialmente em pacientes idosos, para excluir carcinoma sebáceo (diagnóstico diferencial importante e potencialmente grave)",
    ],
    diagnosticoDiferencial: [
      "Carcinoma sebáceo da pálpebra (mimetiza calázio recorrente, sobretudo em idosos — sempre suspeitar em lesão que recorre no mesmo local)",
      "Celulite pré-septal (quando há disseminação da infecção além da glândula, com edema palpebral mais extenso)",
      "Blefarite (inflamação difusa da margem palpebral, sem nódulo focal)",
    ],
    tratamento: [
      "Hordéolo: compressas mornas repetidas ao longo do dia, que favorecem a drenagem espontânea; pomada oftálmica antibiótica tópica (classe ainda sem ficha própria de medicamento no site) em casos com celulite associada",
      "Calázio: compressas mornas como primeira linha; se persistente após algumas semanas, incisão e curetagem cirúrgica ou infiltração intralesional de corticosteroide são opções de segunda linha",
      "Manejo da blefarite/disfunção de Meibômio de base reduz recorrências em ambas as condições",
    ],
    complicacoes: [
      "Aguda: celulite pré-septal por disseminação da infecção do hordéolo",
      "Crônica: calázios recorrentes podem causar astigmatismo induzido por compressão mecânica da córnea, e calázio recorrente no mesmo local levanta suspeita de carcinoma sebáceo",
    ],
    redFlags: [
      "Calázio recorrente repetidamente no mesmo local, sobretudo em paciente idoso — biópsia para excluir carcinoma sebáceo, que classicamente mimetiza essa apresentação",
      "Edema palpebral extenso, dor importante, febre ou limitação da motilidade ocular — sugerem celulite pré-septal ou orbitária, não hordéolo/calázio simples",
    ],
    prognostico:
      "Excelente na maioria dos casos: hordéolo geralmente resolve em poucos dias a uma semana com tratamento conservador; calázio pode levar semanas a meses para resolução espontânea, mas responde bem à intervenção cirúrgica quando persistente.",
    pontosDeProva: [
      "Hordéolo é agudo, doloroso e infeccioso; calázio é crônico, indolor e inflamatório não infeccioso — essa distinção é o ponto mais cobrado",
      "Calázio recorrente no mesmo local em paciente idoso deve sempre levantar suspeita de carcinoma sebáceo, um diagnóstico diferencial clássico e potencialmente grave",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 34 anos, apresenta nódulo na pálpebra superior direita há 3 semanas, indolor, de crescimento lento, sem hiperemia significativa. Nega dor ou secreção purulenta.",
      pergunta: "Qual a hipótese diagnóstica mais provável e a conduta inicial?",
      raciocinio:
        "Nódulo palpebral indolor, de evolução lenta e sem sinais inflamatórios agudos é típico de calázio (inflamação granulomatosa crônica por obstrução de glândula de Meibômio), diferente do hordéolo, que seria agudo e doloroso.",
      conduta:
        "Iniciar compressas mornas repetidas como primeira linha; se não houver resolução em algumas semanas, encaminhar para incisão e curetagem ou infiltração intralesional de corticosteroide.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Diferenciação fisiopatológica hordéolo vs. calázio e conduta", fonte: "Vaughan & Asbury's General Ophthalmology, 19ª ed." },
      { tema: "Carcinoma sebáceo como diagnóstico diferencial de calázio recorrente", fonte: "Kanski's Clinical Ophthalmology, 9ª ed." },
    ],
  },
  {
    slug: "ceratite",
    nome: "Ceratite",
    sinonimos: ["Inflamação da córnea"],
    cid10: "H16",
    especialidade: "Oftalmologia",
    etiologia: "Multifatorial",
    resumo: "Inflamação da córnea de causa infecciosa (bacteriana, viral, fúngica ou por Acanthamoeba) ou não infecciosa, com potencial de ameaçar a visão — diagnóstico diferencial obrigatório de olho vermelho doloroso.",
    definicao:
      "Processo inflamatório da córnea, de etiologia infecciosa (bacteriana, viral — sobretudo herpética —, fúngica ou por protozoário Acanthamoeba) ou não infecciosa (exposição, autoimune), caracterizado por dor, fotofobia, hiperemia perilímbica e, frequentemente, defeito epitelial ou infiltrado corneano visível.",
    epidemiologia:
      "O uso de lentes de contato é o principal fator de risco para ceratite bacteriana e por Acanthamoeba em países desenvolvidos. A ceratite herpética (por herpes simples) é uma causa importante de cegueira corneana evitável em todo o mundo. Trauma ocular e uso de corticosteroide tópico sem supervisão também são fatores de risco relevantes.",
    fisiopatologia:
      "Na ceratite bacteriana, a ruptura da barreira epitelial corneana (trauma, lente de contato) permite invasão bacteriana com necrose estromal rapidamente progressiva, sobretudo por Pseudomonas aeruginosa. Na ceratite herpética, o vírus herpes simples estabelece latência no gânglio trigeminal e reativa periodicamente, causando lesões dendríticas epiteliais características por replicação viral direta. Na ceratite por Acanthamoeba (associada a lentes de contato e exposição à água contaminada), o protozoário invade o estroma corneano, causando dor desproporcional ao achado inicial ao exame. A ceratite fúngica geralmente segue trauma com material vegetal.",
    classificacao:
      "Classificada por etiologia (bacteriana, viral/herpética, fúngica, por Acanthamoeba, não infecciosa/exposição) e por camada acometida (epitelial, estromal). Não há sistema de estadiamento formal amplamente usado — a classificação etiológica é a mais relevante para conduta.",
    quadroClinico: [
      "Dor ocular importante, geralmente desproporcional ao achado visual inicial",
      "Fotofobia intensa e lacrimejamento reflexo",
      "Hiperemia perilímbica (mais concentrada ao redor da córnea do que na periferia conjuntival)",
      "Infiltrado ou opacidade corneana visível, por vezes com hipópio (nível de pus na câmara anterior) em casos bacterianos graves",
      "Diminuição da acuidade visual proporcional à localização e extensão da lesão",
      "Lesão dendrítica característica na ceratite herpética epitelial",
    ],
    diagnostico: [
      "Exame com lâmpada de fenda é essencial para caracterizar o infiltrado/defeito epitelial e orientar a suspeita etiológica",
      "Coloração com fluoresceína para delimitar defeitos epiteliais, incluindo o padrão dendrítico característico da ceratite herpética",
      "Raspado corneano com cultura e coloração (Gram, KOH) indicado em infiltrados centrais ou de rápida progressão, para guiar terapia antimicrobiana dirigida",
    ],
    examesComplementares: [
      "Cultura de raspado corneano (bacteriana, fúngica) — obrigatória antes de iniciar antibiótico tópico fortificado em infiltrados significativos",
      "Microscopia confocal ou cultura específica quando há suspeita de Acanthamoeba (uso de lente de contato, dor desproporcional, resposta inadequada a antibiótico convencional)",
    ],
    diagnosticoDiferencial: [
      "Conjuntivite (dor e fotofobia bem menos intensas, sem infiltrado corneano)",
      "Uveíte anterior / iridociclite (dor e fotofobia semelhantes, mas sem defeito epitelial ou infiltrado estromal à lâmpada de fenda)",
      "Glaucoma agudo de ângulo fechado (dor intensa associada a náusea e midríase média fixa)",
      "Corpo estranho corneano (história de trauma, sensação de corpo estranho localizada)",
    ],
    tratamento: [
      "Ceratite bacteriana: colírio antibiótico tópico fortificado de amplo espectro, guiado por cultura quando possível — emergência oftalmológica, tratamento iniciado sem aguardar resultado de cultura em casos graves (classe de medicamento ainda sem ficha própria no site)",
      "Ceratite herpética epitelial: antiviral tópico ou oral (aciclovir ou similar); corticosteroide tópico contraindicado na forma epitelial ativa, pelo risco de piora",
      "Ceratite fúngica: antifúngico tópico específico, tratamento prolongado",
      "Ceratite por Acanthamoeba: tratamento prolongado com antissépticos tópicos específicos (biguanidas/diamidinas), frequentemente de difícil manejo",
      "Suspensão do uso de lentes de contato em qualquer ceratite associada a seu uso",
    ],
    complicacoes: [
      "Aguda: perfuração corneana em ceratite bacteriana grave não tratada a tempo, sobretudo por Pseudomonas",
      "Crônica: cicatriz corneana (leucoma) com redução permanente da acuidade visual, podendo exigir transplante de córnea",
    ],
    redFlags: [
      "Infiltrado corneano central, hipópio ou dor intensa em usuário de lente de contato — ceratite bacteriana potencialmente grave, encaminhamento oftalmológico urgente",
      "Dor desproporcional ao achado inicial em usuário de lente de contato com exposição a água (piscina, torneira, lago) — suspeitar de Acanthamoeba",
      "Lesão dendrítica com uso concomitante de corticosteroide tópico — a ceratite herpética pode ser dramaticamente agravada pelo corticosteroide não indicado",
    ],
    prognostico:
      "Variável conforme etiologia e tempo até o tratamento: ceratite bacteriana tratada precocemente tem bom prognóstico visual, mas pode evoluir para perfuração e perda visual permanente se houver atraso; a ceratite herpética tende a recorrer ao longo da vida e é causa importante de cegueira corneana evitável quando mal manejada.",
    pontosDeProva: [
      "Dor ocular importante e desproporcional, com hiperemia perilímbica, distingue ceratite de conjuntivite simples — é o ponto-chave para não subestimar um olho vermelho doloroso",
      "Corticosteroide tópico é contraindicado na ceratite herpética epitelial ativa — pode agravar dramaticamente a lesão",
      "Usuário de lente de contato com ceratite deve sempre suspender o uso e ser considerado de maior risco para Pseudomonas e Acanthamoeba",
    ],
    casoClinico: {
      vinheta:
        "Homem, 28 anos, usuário de lentes de contato, procura atendimento por dor ocular intensa, fotofobia e hiperemia no olho direito há 2 dias. Refere ter dormido com as lentes na noite anterior a um episódio de natação em piscina.",
      pergunta: "Qual a principal preocupação diagnóstica e a conduta imediata?",
      raciocinio:
        "Uso de lente de contato associado a exposição à água e dor ocular intensa desproporcional levanta suspeita de ceratite infecciosa, incluindo a possibilidade de Acanthamoeba além das causas bacterianas mais comuns — quadro que exige avaliação oftalmológica urgente com lâmpada de fenda.",
      conduta:
        "Suspender imediatamente o uso das lentes de contato, encaminhar para avaliação oftalmológica urgente com lâmpada de fenda e, se houver infiltrado corneano, coletar raspado para cultura antes de iniciar tratamento antimicrobiano tópico dirigido.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Etiologia, fatores de risco e fisiopatologia por tipo", fonte: "Kanski's Clinical Ophthalmology, 9ª ed." },
      { tema: "Contraindicação de corticosteroide na ceratite herpética epitelial ativa", fonte: "American Academy of Ophthalmology, Preferred Practice Pattern: Bacterial Keratitis" },
    ],
  },
  {
    slug: "catarata-senil",
    nome: "Catarata senil",
    sinonimos: ["Catarata relacionada à idade"],
    cid10: "H25",
    especialidade: "Oftalmologia",
    etiologia: "Degenerativa",
    resumo: "Opacificação progressiva do cristalino relacionada ao envelhecimento — principal causa de baixa visual reversível no mundo, tratada cirurgicamente quando compromete a função visual.",
    definicao:
      "Opacificação progressiva e gradual do cristalino associada ao envelhecimento, causando embaçamento visual progressivo, sem dor ou hiperemia ocular associada.",
    epidemiologia:
      "É a principal causa de cegueira reversível no mundo e uma das causas mais comuns de baixa acuidade visual em idosos. A prevalência aumenta progressivamente com a idade, sendo praticamente universal em graus variados após os 80 anos.",
    fisiopatologia:
      "Com o envelhecimento, ocorre acúmulo de proteínas cristalinas modificadas e agregadas (por oxidação e outras alterações bioquímicas cumulativas) nas fibras do cristalino, resultando em perda da transparência e formação de opacidades que dispersam a luz incidente, degradando progressivamente a qualidade da imagem retiniana.",
    classificacao:
      "Classificada morfologicamente conforme a localização da opacidade no cristalino: nuclear (mais associada a miopização progressiva e dificuldade para enxergar à distância), cortical (opacidades em cunha na periferia do córtex) e subcapsular posterior (mais sintomática em ambientes com muita luz, comum em usuários crônicos de corticosteroide e em diabéticos). É comum a coexistência de mais de um tipo morfológico no mesmo olho.",
    quadroClinico: [
      "Embaçamento visual progressivo e indolor, geralmente bilateral mas frequentemente assimétrico",
      "Dificuldade visual maior em ambientes de luz intensa (mais típico da subcapsular posterior) ou para leitura/visão de longe, conforme o tipo morfológico predominante",
      "Percepção de halos ao redor de luzes, sobretudo à noite",
      "Alteração na percepção de cores (tons amarelados/acastanhados) em cataratas avançadas",
      "Ausência de dor, hiperemia ou fotofobia — achados que, se presentes, sugerem outra etiologia associada",
    ],
    diagnostico: [
      "Diagnóstico clínico pela biomicroscopia com lâmpada de fenda, identificando a opacidade do cristalino e seu padrão morfológico",
      "Avaliação da acuidade visual corrigida é essencial para quantificar o impacto funcional e orientar a indicação cirúrgica",
    ],
    examesComplementares: [
      "Biomicroscopia com lâmpada de fenda para caracterizar tipo e densidade da opacidade",
      "Biometria ocular (ultrassom ou óptica) no pré-operatório, para cálculo do poder da lente intraocular a ser implantada",
      "Exame de fundo de olho antes da cirurgia, quando possível, para excluir doenças retinianas associadas que possam limitar o ganho visual esperado",
    ],
    diagnosticoDiferencial: [
      "Degeneração macular relacionada à idade (perda visual central específica, com metamorfopsia, em vez de embaçamento global)",
      "Retinopatia diabética (história de diabetes, alterações no fundo de olho)",
      "Glaucoma (perda de campo visual periférico, não embaçamento central típico da catarata)",
    ],
    tratamento: [
      "Atualização de correção óptica (óculos) enquanto a catarata é incipiente e não compromete significativamente a função visual",
      "Cirurgia de facoemulsificação com implante de lente intraocular é o tratamento definitivo, indicada quando a catarata compromete a função visual e a qualidade de vida do paciente — não há tratamento clínico/medicamentoso capaz de reverter ou deter a progressão da opacificação",
    ],
    complicacoes: [
      "Crônica: catarata hipermadura pode evoluir com glaucoma facolítico (obstrução do escoamento do humor aquoso por proteínas do cristalino) ou facomórfico (bloqueio pupilar por aumento do volume do cristalino), ambos emergências oftalmológicas",
      "Pós-operatória: opacificação da cápsula posterior (a complicação tardia mais comum após cirurgia de catarata, tratada facilmente com capsulotomia a laser)",
    ],
    redFlags: [
      "Dor ocular importante associada a catarata avançada — sugere glaucoma facomórfico ou facolítico, complicações que exigem intervenção oftalmológica urgente",
      "Perda visual súbita ou assimétrica desproporcional à progressão lenta esperada da catarata — investigar outra causa concomitante antes de atribuir a piora só à catarata",
    ],
    prognostico:
      "Excelente após cirurgia, com a grande maioria dos pacientes recuperando boa acuidade visual, desde que não haja doença ocular associada limitante (como degeneração macular avançada ou retinopatia diabética grave). Sem cirurgia, a progressão é lenta mas constante, podendo levar à cegueira.",
    pontosDeProva: [
      "Catarata é a principal causa de cegueira reversível no mundo — cirurgia de facoemulsificação é altamente eficaz e um dos procedimentos cirúrgicos mais realizados globalmente",
      "Não existe tratamento medicamentoso ou colírio capaz de reverter ou deter a progressão da catarata — só a cirurgia é definitiva",
      "Opacificação da cápsula posterior é a complicação tardia mais comum da cirurgia de catarata, facilmente resolvida com capsulotomia a YAG laser",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 74 anos, relata piora progressiva da visão nos últimos 2 anos, bilateral, sem dor ou hiperemia, com maior dificuldade para dirigir à noite por halos ao redor de faróis.",
      pergunta: "Qual a hipótese diagnóstica mais provável e a conduta?",
      raciocinio:
        "Embaçamento visual progressivo, indolor, bilateral, com halos noturnos, em paciente idosa, é o quadro clássico de catarata senil.",
      conduta:
        "Encaminhar para avaliação oftalmológica com biomicroscopia para confirmar o diagnóstico e avaliar o grau de comprometimento funcional; se a catarata estiver impactando significativamente a qualidade de vida, indicar cirurgia de facoemulsificação com implante de lente intraocular.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Fisiopatologia e classificação morfológica", fonte: "Vaughan & Asbury's General Ophthalmology, 19ª ed." },
      { tema: "Catarata como principal causa de cegueira reversível no mundo", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "glaucoma",
    nome: "Glaucoma",
    sinonimos: ["Neuropatia óptica glaucomatosa"],
    cid10: "H40",
    especialidade: "Oftalmologia",
    etiologia: "Degenerativa",
    resumo: "Neuropatia óptica progressiva, frequentemente (mas não sempre) associada a pressão intraocular elevada — principal causa de cegueira irreversível no mundo, por isso o rastreio é essencial.",
    definicao:
      "Grupo de neuropatias ópticas progressivas caracterizadas por perda de fibras do nervo óptico e alterações características do disco óptico (escavação aumentada), associadas a perda de campo visual progressiva, tipicamente periférica antes de acometer a visão central. A pressão intraocular elevada é o principal fator de risco modificável, mas o glaucoma pode ocorrer com pressão intraocular normal (glaucoma de pressão normal).",
    epidemiologia:
      "É a principal causa de cegueira irreversível no mundo. O glaucoma primário de ângulo aberto é a forma mais comum, de curso insidioso e assintomático até fases avançadas — daí a importância do rastreio em grupos de risco (idade avançada, história familiar, etnia negra, miopia alta).",
    fisiopatologia:
      "No glaucoma de ângulo aberto, há resistência aumentada à drenagem do humor aquoso através da malha trabecular, mesmo com o ângulo iridocorneano anatomicamente aberto, levando a elevação crônica e geralmente assintomática da pressão intraocular. Essa pressão elevada (ou, em alguns casos, uma vulnerabilidade intrínseca do nervo óptico mesmo sem pressão elevada) causa dano progressivo às células ganglionares da retina e suas fibras, com escavação progressiva do disco óptico e perda de campo visual correspondente, tipicamente iniciando na periferia.",
    classificacao:
      "Classificado principalmente em glaucoma primário de ângulo aberto (a forma mais comum, crônica e assintomática até fase avançada), glaucoma primário de ângulo fechado (agudo ou crônico, por bloqueio mecânico da drenagem do humor aquoso) e formas secundárias (associadas a outras doenças oculares, uso de corticosteroide, trauma, neovascularização). O glaucoma agudo de ângulo fechado é uma emergência oftalmológica distinta da forma crônica, com quadro clínico e conduta completamente diferentes.",
    quadroClinico: [
      "Glaucoma primário de ângulo aberto: assintomático na grande maioria dos casos até fase avançada, quando o paciente já perdeu campo visual periférico significativo — raramente percebido pelo próprio paciente antes disso",
      "Glaucoma agudo de ângulo fechado (apresentação distinta e urgente): dor ocular intensa de início súbito, hiperemia, náusea e vômitos, halos coloridos ao redor de luzes, córnea com edema (aspecto embaçado) e pupila em midríase média fixa",
      "Perda de campo visual periférico progressiva e irreversível na forma crônica, evoluindo para visão 'em túnel' em fases avançadas se não tratada",
    ],
    diagnostico: [
      "Tonometria (medida da pressão intraocular) — pressão elevada é o principal fator de risco, mas seu valor isolado não confirma nem exclui o diagnóstico",
      "Avaliação do disco óptico (fundoscopia ou tomografia de coerência óptica) buscando escavação aumentada e assimetria entre os olhos",
      "Campimetria (perimetria computadorizada) para documentar e monitorar a perda de campo visual característica",
      "Gonioscopia para diferenciar ângulo aberto de ângulo fechado, definindo a classificação e a conduta",
    ],
    examesComplementares: [
      "Tonometria de aplanação (padrão-ouro para medida da pressão intraocular)",
      "Tomografia de coerência óptica (OCT) de nervo óptico e camada de fibras nervosas da retina, para detecção e monitorização objetiva da progressão",
      "Campimetria computadorizada seriada para acompanhar a progressão funcional ao longo do tempo",
    ],
    diagnosticoDiferencial: [
      "Neuropatia óptica isquêmica anterior não arterítica (perda visual súbita, disco óptico edemaciado na fase aguda, não escavado)",
      "Neurite óptica (mais comum em jovens, com dor à movimentação ocular)",
      "Outras causas de perda de campo visual, incluindo lesões compressivas da via óptica",
    ],
    tratamento: [
      "Glaucoma crônico (ângulo aberto): colírios hipotensores oculares como primeira linha (classes ainda sem ficha própria de medicamento no site, como betabloqueadores tópicos, análogos de prostaglandina e inibidores da anidrase carbônica), com objetivo de reduzir a pressão intraocular e deter a progressão do dano",
      "Trabeculoplastia a laser ou cirurgia filtrante (trabeculectomia) reservadas a casos refratários ao tratamento clínico ou com progressão apesar do tratamento",
      "Glaucoma agudo de ângulo fechado: emergência oftalmológica — redução imediata da pressão intraocular com medicação tópica/sistêmica e iridotomia a laser definitiva assim que possível",
    ],
    complicacoes: [
      "Aguda (na crise de ângulo fechado): perda visual permanente em horas se não tratada a tempo, pelo dano isquêmico agudo ao nervo óptico",
      "Crônica: cegueira irreversível progressiva na forma de ângulo aberto não tratada ou não controlada adequadamente",
    ],
    redFlags: [
      "Dor ocular súbita e intensa com náusea, vômitos e halos coloridos ao redor de luzes — glaucoma agudo de ângulo fechado, emergência oftalmológica com risco de perda visual permanente em horas",
      "Perda de campo visual periférico assimétrica em paciente com fatores de risco (idade avançada, história familiar) — rastreio ativo necessário, pois o paciente frequentemente não percebe a perda até fase avançada",
    ],
    prognostico:
      "O dano ao nervo óptico já estabelecido é irreversível, mas o tratamento adequado (redução da pressão intraocular) é eficaz para deter ou retardar significativamente a progressão na maioria dos pacientes. O diagnóstico precoce por rastreio é determinante para o prognóstico visual em longo prazo, já que a forma crônica é assintomática até fase avançada.",
    pontosDeProva: [
      "O glaucoma primário de ângulo aberto é assintomático até fase avançada — é a principal causa de cegueira irreversível evitável no mundo justamente por isso, reforçando a importância do rastreio em grupos de risco",
      "Glaucoma agudo de ângulo fechado é uma emergência oftalmológica verdadeira: dor ocular intensa + midríase média fixa + halos coloridos + náusea/vômitos — não confundir com enxaqueca ou quadro gastrointestinal",
      "O dano ao nervo óptico já estabelecido no glaucoma é irreversível — o tratamento visa deter a progressão, não recuperar a visão já perdida",
    ],
    casoClinico: {
      vinheta:
        "Homem, 68 anos, sem queixas visuais, é encontrado em exame oftalmológico de rotina com escavação de disco óptico aumentada e assimétrica entre os olhos, e pressão intraocular de 26 mmHg em ambos os olhos.",
      pergunta: "Qual a hipótese diagnóstica mais provável e a conduta?",
      raciocinio:
        "Escavação aumentada e assimétrica do disco óptico associada a pressão intraocular elevada, em paciente assintomático, é o quadro clássico de glaucoma primário de ângulo aberto — corretamente detectado apenas por rastreio de rotina, já que é tipicamente assintomático até fase avançada.",
      conduta:
        "Confirmar o diagnóstico com campimetria computadorizada e gonioscopia (para classificar o ângulo), e iniciar colírio hipotensor ocular como primeira linha para reduzir a pressão intraocular e deter a progressão do dano ao nervo óptico.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Fisiopatologia, classificação e conduta por tipo", fonte: "American Academy of Ophthalmology, Preferred Practice Pattern: Primary Open-Angle Glaucoma" },
      { tema: "Glaucoma como principal causa de cegueira irreversível no mundo", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "blefarite",
    nome: "Blefarite",
    sinonimos: ["Inflamação da margem palpebral"],
    cid10: "H01",
    especialidade: "Oftalmologia",
    etiologia: "Multifatorial",
    resumo: "Inflamação crônica da margem palpebral, extremamente comum, geralmente associada a disfunção das glândulas de Meibômio ou colonização estafilocócica — causa frequente de irritação ocular crônica.",
    definicao:
      "Inflamação crônica bilateral da margem palpebral, classicamente dividida em anterior (acometendo a base dos cílios) e posterior (acometendo as glândulas de Meibômio), frequentemente coexistindo com olho seco e sendo uma causa comum de irritação ocular crônica recorrente.",
    epidemiologia:
      "Condição extremamente comum, sobretudo em adultos e idosos, frequentemente subdiagnosticada por ser confundida com outras causas de olho vermelho/irritado. Associada a rosácea, dermatite seborreica e disfunção das glândulas de Meibômio.",
    fisiopatologia:
      "Na blefarite anterior estafilocócica, há colonização bacteriana da base dos cílios com resposta inflamatória local. Na blefarite seborreica, há disfunção das glândulas sebáceas adjacentes com descamação aumentada. Na blefarite posterior (a forma mais comum), há disfunção das glândulas de Meibômio, com espessamento e obstrução da secreção lipídica meibomiana, alterando a composição do filme lacrimal e favorecendo evaporação excessiva (associação frequente com olho seco evaporativo).",
    classificacao:
      "Classificada em anterior (estafilocócica ou seborreica, acometendo a base dos cílios) e posterior (disfunção das glândulas de Meibômio, a forma mais prevalente), podendo coexistir. Também classificada quanto à cronicidade, sendo tipicamente uma condição crônica e recorrente, sem cura definitiva, apenas controle dos sintomas.",
    quadroClinico: [
      "Irritação ocular crônica, sensação de queimação ou corpo estranho, geralmente bilateral e pior pela manhã",
      "Crostas e descamação na base dos cílios (mais evidente na forma anterior)",
      "Hiperemia da margem palpebral",
      "Sintomas de olho seco associados (sensação de secura, flutuação visual) são comuns pela alteração do filme lacrimal",
      "Curso crônico com exacerbações e remissões, sem resolução espontânea definitiva",
    ],
    diagnostico: [
      "Diagnóstico clínico, pela inspeção da margem palpebral e base dos cílios à lâmpada de fenda",
      "Expressão manual das glândulas de Meibômio para avaliar a qualidade da secreção (espessada/obstruída na disfunção meibomiana)",
    ],
    examesComplementares: [
      "Exame com lâmpada de fenda da margem palpebral, cílios e filme lacrimal",
      "Teste de tempo de ruptura do filme lacrimal (break-up time) quando há olho seco associado",
    ],
    diagnosticoDiferencial: [
      "Conjuntivite (mais aguda, com secreção mais abundante e hiperemia conjuntival difusa)",
      "Olho seco isolado (sem os achados de margem palpebral característicos da blefarite, embora frequentemente coexistam)",
      "Dermatite de contato periocular",
    ],
    tratamento: [
      "Higiene palpebral diária (compressas mornas seguidas de limpeza mecânica da margem palpebral) é a base do tratamento em todas as formas",
      "Lubrificantes oculares (lágrimas artificiais) para os sintomas de olho seco associado",
      "Pomada oftálmica antibiótica tópica na base dos cílios em casos com componente estafilocócico importante (classe ainda sem ficha própria de medicamento no site)",
      "Tratamento de rosácea ou dermatite seborreica de base, quando presentes, contribui para o controle da blefarite",
    ],
    complicacoes: [
      "Crônica: olho seco evaporativo persistente, calázios de repetição, e em casos graves e prolongados, alterações da superfície corneana",
    ],
    redFlags: [
      "Blefarite assimétrica ou unilateral persistente e refratária ao tratamento, especialmente em idoso — considerar carcinoma sebáceo como diagnóstico diferencial, já que pode mimetizar blefarite crônica",
    ],
    prognostico:
      "Condição crônica e recorrente, sem cura definitiva — o tratamento visa controle sintomático e prevenção de complicações (olho seco, calázios), com boa resposta à higiene palpebral consistente na maioria dos pacientes, ainda que exigindo manutenção contínua.",
    pontosDeProva: [
      "Blefarite é uma das causas mais comuns e mais subdiagnosticadas de irritação ocular crônica — deve ser ativamente pesquisada em pacientes com queixas oculares inespecíficas persistentes",
      "Higiene palpebral é a base do tratamento em qualquer forma de blefarite, e precisa ser mantida cronicamente, já que não há cura definitiva",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 58 anos, com rosácea facial conhecida, relata irritação ocular crônica bilateral há meses, pior ao acordar, com crostas nos cílios e sensação de olho seco.",
      pergunta: "Qual a hipótese diagnóstica mais provável e a conduta?",
      raciocinio:
        "Irritação ocular crônica bilateral com crostas nos cílios, pior pela manhã, associada a rosácea (condição classicamente associada a disfunção das glândulas de Meibômio), é compatível com blefarite crônica.",
      conduta:
        "Orientar higiene palpebral diária (compressas mornas e limpeza mecânica da margem palpebral) como base do tratamento, associar lubrificante ocular para os sintomas de olho seco, e considerar tratamento dermatológico da rosácea de base.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Classificação anterior/posterior e fisiopatologia da disfunção meibomiana", fonte: "Kanski's Clinical Ophthalmology, 9ª ed." },
    ],
  },
  {
    slug: "entropio-ectropio-ptose",
    nome: "Entrópio, ectrópio e ptose palpebral",
    sinonimos: ["Malposições palpebrais"],
    cid10: "H02",
    especialidade: "Oftalmologia",
    etiologia: "Degenerativa",
    resumo: "Malposições da pálpebra (entrópio: margem voltada para dentro; ectrópio: margem voltada para fora; ptose: queda da pálpebra superior) — predominantemente relacionadas ao envelhecimento, mas com causas paralíticas e congênitas importantes.",
    definicao:
      "Entrópio é a rotação da margem palpebral (geralmente inferior) para dentro, em direção ao globo ocular, com os cílios entrando em contato com a córnea. Ectrópio é a rotação da margem palpebral (geralmente inferior) para fora, afastando-se do globo ocular. Ptose é a queda da pálpebra superior abaixo de sua posição normal, podendo obstruir parcialmente o eixo visual.",
    epidemiologia:
      "Entrópio e ectrópio involucionais (relacionados ao envelhecimento, por frouxidão dos tecidos de sustentação palpebral) são as formas mais comuns em idosos. Ptose pode ser congênita (a partir do nascimento) ou adquirida — sendo, entre as adquiridas, a forma aponeurótica relacionada à idade a mais comum, além das formas paralíticas (comprometimento do III par craniano) e miogênicas (miastenia gravis).",
    fisiopatologia:
      "No entrópio e ectrópio involucionais, a frouxidão progressiva dos ligamentos cantais e do músculo orbicular relacionada ao envelhecimento permite a rotação anômala da margem palpebral. Causas cicatriciais (trauma, queimadura, cirurgia prévia) também podem causar ambas as malposições por retração tecidual. Na ptose aponeurótica (a forma adquirida mais comum), há desinserção ou afinamento da aponeurose do músculo levantador da pálpebra superior relacionada à idade; na ptose paralítica, há comprometimento da inervação do III par craniano; na miogênica, há disfunção da junção neuromuscular (miastenia gravis) ou miopatia do próprio músculo levantador.",
    classificacao:
      "Entrópio e ectrópio classificados quanto à causa em involucional (a mais comum, relacionada à idade), cicatricial, paralítico (no ectrópio, por paralisia facial) e espástico. Ptose classificada em congênita e adquirida, sendo esta subdividida em aponeurótica (a mais comum), paralítica (III par), miogênica (miastenia gravis, distrofias musculares) e mecânica (por massa palpebral).",
    quadroClinico: [
      "Entrópio: irritação ocular crônica, sensação de corpo estranho e hiperemia pelo contato dos cílios com a córnea (triquíase secundária)",
      "Ectrópio: olho vermelho crônico, lacrimejamento excessivo (epífora) por má aposição do ponto lacrimal, e exposição corneana em casos mais graves",
      "Ptose: queda visível da pálpebra superior, podendo causar obstrução do campo visual superior quando significativa; posição compensatória de elevação do queixo em casos bilaterais importantes",
    ],
    diagnostico: [
      "Diagnóstico clínico pela inspeção da posição palpebral em repouso e durante a movimentação ocular",
      "Na ptose, medida da distância margem-reflexo e da função do músculo levantador são essenciais para classificar a gravidade e orientar a conduta cirúrgica",
      "Investigação de causa paralítica (avaliação do III par craniano) ou miogênica (teste para miastenia gravis) quando a ptose é de início recente ou variável ao longo do dia",
    ],
    examesComplementares: [
      "Exame com lâmpada de fenda para avaliar exposição corneana associada ao ectrópio ou triquíase associada ao entrópio",
      "Teste do gelo ou dosagem de anticorpo anti-receptor de acetilcolina quando há suspeita de ptose por miastenia gravis",
      "Neuroimagem quando há suspeita de paralisia do III par craniano de causa compressiva (aneurisma), sobretudo se houver midríase associada",
    ],
    diagnosticoDiferencial: [
      "Dermatocalase (excesso de pele palpebral que mimetiza ptose sem comprometimento real do músculo levantador)",
      "Blefaroespasmo (contração involuntária do orbicular, mimetizando fechamento palpebral)",
      "Paralisia do III par craniano (ptose associada a midríase e limitação da motilidade ocular — sinal de alarme para causa compressiva)",
    ],
    tratamento: [
      "Entrópio e ectrópio: correção cirúrgica é o tratamento definitivo quando sintomático, encurtando ou realinhando os tecidos de sustentação palpebral; lubrificação ocular como medida temporária de suporte",
      "Ptose: correção cirúrgica (cirurgia do músculo levantador ou suspensão frontal, conforme a função residual do levantador) quando há obstrução visual ou impacto estético significativo; tratamento da causa de base quando identificável (por exemplo, manejo clínico da miastenia gravis na ptose miogênica)",
    ],
    complicacoes: [
      "Aguda: exposição corneana com risco de úlcera de córnea em ectrópio grave não tratado",
      "Crônica: ambliopia em crianças com ptose congênita significativa não corrigida em tempo hábil, pela privação visual no período crítico do desenvolvimento",
    ],
    redFlags: [
      "Ptose de início súbito associada a midríase e limitação da motilidade ocular — suspeitar de paralisia do III par craniano por aneurisma compressivo, emergência neurológica",
      "Ptose variável ao longo do dia, piorando com fadiga — investigar miastenia gravis",
      "Ptose congênita significativa não corrigida na infância — risco de ambliopia por privação, com janela de tempo limitada para correção eficaz",
    ],
    prognostico:
      "Excelente após correção cirúrgica na maioria dos casos de entrópio, ectrópio e ptose aponeurótica/congênita. O prognóstico da ptose paralítica ou miogênica depende do controle da doença de base.",
    pontosDeProva: [
      "Ptose associada a midríase (pupila dilatada) é um sinal de alarme para paralisia do III par por causa compressiva (aneurisma) e exige investigação urgente — diferente da ptose com pupila poupada, mais sugestiva de causa microvascular/isquêmica",
      "Ptose congênita significativa não corrigida em tempo hábil pode causar ambliopia por privação — a correção cirúrgica na infância não é só estética",
    ],
    casoClinico: {
      vinheta:
        "Homem, 45 anos, apresenta ptose palpebral direita de início há 6 horas, associada a pupila direita dilatada e dificuldade para movimentar o olho para dentro e para cima.",
      pergunta: "Qual a principal preocupação diagnóstica e a conduta imediata?",
      raciocinio:
        "Ptose de início agudo associada a midríase e limitação da motilidade ocular é o quadro clássico de paralisia do III par craniano com acometimento pupilar, que levanta suspeita de causa compressiva (classicamente aneurisma de artéria comunicante posterior) até prova em contrário.",
      conduta:
        "Encaminhamento neurológico/neurocirúrgico urgente com neuroimagem (angiotomografia ou angiorressonância) para investigar causa compressiva, dada a gravidade potencial e a necessidade de intervenção rápida se confirmado aneurisma.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Classificação e fisiopatologia de entrópio, ectrópio e ptose", fonte: "Vaughan & Asbury's General Ophthalmology, 19ª ed." },
      { tema: "Ptose com midríase como sinal de alarme para aneurisma compressivo do III par", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "olho-seco-dacriocistite",
    nome: "Olho seco e dacriocistite",
    sinonimos: ["Síndrome do olho seco", "Xeroftalmia"],
    cid10: "H04",
    especialidade: "Oftalmologia",
    etiologia: "Multifatorial",
    resumo: "Olho seco é a alteração da quantidade ou qualidade do filme lacrimal, condição extremamente comum; dacriocistite é a infecção do saco lacrimal por obstrução do ducto nasolacrimal — apresentações distintas do aparelho lacrimal.",
    definicao:
      "Olho seco (doença da superfície ocular multifatorial) resulta de deficiência na produção lacrimal (aquodeficiente) ou de evaporação excessiva do filme lacrimal (evaporativo, mais comumente por disfunção das glândulas de Meibômio), causando instabilidade do filme lacrimal e sintomas crônicos de desconforto ocular. Dacriocistite é a infecção aguda ou crônica do saco lacrimal, geralmente secundária à obstrução do ducto nasolacrimal.",
    epidemiologia:
      "Olho seco é uma condição extremamente prevalente, mais comum em mulheres e com prevalência crescente com a idade; associado a doenças autoimunes (síndrome de Sjögren), uso de certos medicamentos e uso prolongado de telas. Dacriocistite é mais comum em lactentes (obstrução congênita do ducto nasolacrimal) e em adultos idosos, sobretudo mulheres, por estreitamento involutivo do ducto.",
    fisiopatologia:
      "No olho seco aquodeficiente, há produção lacrimal reduzida pela glândula lacrimal principal, frequentemente por processo autoimune (síndrome de Sjögren) ou envelhecimento glandular. No olho seco evaporativo (a forma mais comum), a disfunção das glândulas de Meibômio compromete a camada lipídica do filme lacrimal, permitindo evaporação excessiva da camada aquosa subjacente. Em ambos os casos, a instabilidade do filme lacrimal expõe a superfície ocular a hiperosmolaridade e inflamação crônica, perpetuando o quadro. Na dacriocistite, a obstrução do ducto nasolacrimal causa estase de lágrima no saco lacrimal, favorecendo colonização e infecção bacteriana secundária (tipicamente por Staphylococcus aureus e Streptococcus pneumoniae).",
    classificacao:
      "Olho seco classificado em aquodeficiente e evaporativo (frequentemente com componentes mistos). Dacriocistite classificada em aguda (infecção franca, dolorosa) e crônica (obstrução com secreção intermitente, sem sinais inflamatórios agudos), e também quanto à idiopatia (congênita em lactentes vs. involutiva em adultos).",
    quadroClinico: [
      "Olho seco: sensação de areia/corpo estranho, queimação, flutuação da qualidade visual ao longo do dia, e paradoxalmente lacrimejamento reflexo em alguns casos (olho seco reflexo)",
      "Dacriocistite aguda: dor, hiperemia e edema na região do saco lacrimal (canto interno do olho, abaixo do tendão cantal medial), podendo haver secreção purulenta à expressão da região",
      "Dacriocistite crônica: epífora (lacrimejamento constante) com secreção mucopurulenta intermitente à expressão do saco lacrimal, sem os sinais inflamatórios agudos importantes",
    ],
    diagnostico: [
      "Olho seco: diagnóstico clínico apoiado em questionários de sintomas e testes objetivos do filme lacrimal",
      "Dacriocistite: diagnóstico clínico pela inspeção e palpação da região do saco lacrimal, com expressão manual para observar refluxo de secreção",
    ],
    examesComplementares: [
      "Teste de Schirmer (mede produção lacrimal aquosa) e tempo de ruptura do filme lacrimal (break-up time) para caracterizar o olho seco",
      "Coloração da superfície ocular com corantes vitais (fluoresceína, verde de lissamina) para avaliar dano epitelial associado ao olho seco",
      "Cultura de secreção do saco lacrimal em dacriocistite recorrente ou refratária, para guiar antibioticoterapia dirigida",
    ],
    diagnosticoDiferencial: [
      "Blefarite (frequentemente coexiste com olho seco evaporativo, mas com achados de margem palpebral próprios)",
      "Conjuntivite alérgica (prurido proeminente, em vez do desconforto/queimação típico do olho seco)",
      "Celulite pré-septal (no caso da dacriocistite aguda, quando há dúvida sobre extensão da infecção além do saco lacrimal)",
    ],
    tratamento: [
      "Olho seco: lubrificantes oculares (lágrimas artificiais) como primeira linha; medidas ambientais (umidificação, pausas em uso de telas); tratamento da blefarite/disfunção meibomiana de base quando presente; casos refratários podem necessitar de anti-inflamatório tópico específico ou tampões lacrimais",
      "Dacriocistite aguda: antibiótico sistêmico (a infecção do saco lacrimal tem risco de disseminação para celulite orbitária) associado a compressas mornas; drenagem cirúrgica se houver abscesso formado",
      "Dacriocistite crônica/obstrução do ducto nasolacrimal: dacriocistorrinostomia (cirurgia para criar via alternativa de drenagem) é o tratamento definitivo em casos persistentes",
      "Obstrução congênita do ducto nasolacrimal em lactentes: massagem do saco lacrimal e observação, já que a maioria resolve espontaneamente no primeiro ano de vida; sondagem reservada a casos persistentes",
    ],
    complicacoes: [
      "Aguda: celulite orbitária secundária à disseminação de dacriocistite aguda não tratada — emergência oftalmológica",
      "Crônica: dano à superfície ocular (ceratopatia por exposição/instabilidade do filme lacrimal) em olho seco grave não controlado",
    ],
    redFlags: [
      "Edema, hiperemia e dor na região do saco lacrimal associados a proptose, limitação da motilidade ocular ou febre — suspeitar de extensão para celulite orbitária, emergência que exige internação e antibiótico intravenoso",
      "Olho seco grave com dano corneano importante à coloração com fluoresceína — risco de ceratopatia por exposição e infecção secundária se não tratado adequadamente",
    ],
    prognostico:
      "Olho seco é uma condição crônica, controlável mas raramente curável definitivamente, exigindo tratamento de manutenção contínuo. Dacriocistite aguda tem bom prognóstico com antibioticoterapia oportuna; a obstrução crônica de base geralmente necessita de correção cirúrgica definitiva para resolução permanente.",
    pontosDeProva: [
      "Olho seco evaporativo por disfunção de Meibômio é mais comum que o aquodeficiente puro — a distinção orienta o tratamento (lubrificante isolado vs. manejo da disfunção meibomiana associada)",
      "Dacriocistite aguda tem risco real de evoluir para celulite orbitária — não deve ser subestimada como uma simples infecção localizada",
      "Obstrução congênita do ducto nasolacrimal resolve espontaneamente na maioria dos lactentes no primeiro ano de vida — massagem e observação são a conduta inicial, não sondagem imediata",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 62 anos, com diagnóstico prévio de síndrome de Sjögren, relata sensação crônica de areia nos olhos, queimação e flutuação visual ao longo do dia, há vários meses.",
      pergunta: "Qual a hipótese diagnóstica mais provável e a conduta inicial?",
      raciocinio:
        "Sintomas crônicos de desconforto ocular em paciente com síndrome de Sjögren (doença autoimune classicamente associada a olho seco aquodeficiente por comprometimento da glândula lacrimal) são compatíveis com olho seco.",
      conduta:
        "Iniciar lubrificantes oculares (lágrimas artificiais) como primeira linha, orientar medidas ambientais de suporte, e considerar avaliação oftalmológica com teste de Schirmer e coloração da superfície ocular para quantificar a gravidade e guiar necessidade de tratamento adicional.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Classificação e fisiopatologia do olho seco (aquodeficiente vs. evaporativo)", fonte: "TFOS DEWS II (Tear Film & Ocular Surface Society, Dry Eye WorkShop II), 2017" },
      { tema: "Fisiopatologia e conduta na dacriocistite", fonte: "Vaughan & Asbury's General Ophthalmology, 19ª ed." },
    ],
  },
  {
    slug: "pterigio-pinguecula",
    nome: "Pterígio e pinguécula",
    sinonimos: ["Carne crescida"],
    cid10: "H11",
    especialidade: "Oftalmologia",
    etiologia: "Degenerativa",
    resumo: "Alterações conjuntivais degenerativas associadas à exposição solar crônica: a pinguécula é um espessamento amarelado limitado à conjuntiva; o pterígio é um crescimento fibrovascular que pode invadir a córnea.",
    definicao:
      "Pinguécula é um espessamento nodular amarelado, benigno, da conjuntiva bulbar adjacente ao limbo (mais comumente nasal), sem invasão corneana. Pterígio é um crescimento fibrovascular triangular da conjuntiva que se estende sobre a córnea, tipicamente na região nasal, podendo progredir e comprometer a visão se atingir o eixo visual central.",
    epidemiologia:
      "Ambas as condições estão fortemente associadas à exposição solar (radiação ultravioleta) crônica, sendo mais prevalentes em populações que vivem próximas ao equador e em pessoas com maior exposição ocupacional ao sol, vento e poeira.",
    fisiopatologia:
      "A exposição crônica à radiação ultravioleta causa degeneração elastótica do colágeno conjuntival subepitelial, formando o depósito característico da pinguécula. No pterígio, além dessa degeneração, há proliferação fibrovascular que invade a córnea a partir do limbo, com potencial para induzir astigmatismo por tração mecânica quando se aproxima do eixo visual.",
    classificacao:
      "Pinguécula não tem sistema de classificação formal amplamente usado, sendo definida pela localização (tipicamente nasal ou temporal) e tamanho. Pterígio é classificado por grau de invasão corneana (da margem limbar até proximidade progressiva do eixo visual) e por atividade (inativo/atrófico vs. ativo/vascularizado e de crescimento progressivo).",
    quadroClinico: [
      "Pinguécula: lesão amarelada, elevada, geralmente assintomática, podendo causar irritação leve ou hiperemia localizada (pingueculite) em episódios de inflamação",
      "Pterígio: lesão triangular fibrovascular avançando sobre a córnea a partir do limbo nasal (mais comum) ou temporal, podendo causar irritação crônica, hiperemia, e, quando avançado, astigmatismo induzido ou redução da acuidade visual",
    ],
    diagnostico: [
      "Diagnóstico clínico pela inspeção direta e biomicroscopia com lâmpada de fenda, caracterizando localização, tamanho e grau de invasão corneana",
    ],
    examesComplementares: [
      "Topografia corneana quando há suspeita de astigmatismo induzido por pterígio significativo, para quantificar o impacto refracional antes de decisão cirúrgica",
      "Fotografia seriada para documentar e monitorar a progressão ao longo do tempo",
    ],
    diagnosticoDiferencial: [
      "Neoplasia intraepitelial conjuntival/carcinoma espinocelular conjuntival (lesão atípica, de crescimento mais rápido ou com características incomuns deve ser biopsiada para excluir esse diagnóstico)",
      "Pseudopterígio (aderência conjuntival à córnea secundária a trauma ou queimadura prévia, que mimetiza o pterígio verdadeiro mas tem causa e história distintas)",
    ],
    tratamento: [
      "Proteção contra radiação ultravioleta (óculos de sol com proteção UV, chapéu) é a medida preventiva mais importante para ambas as condições e para deter a progressão",
      "Lubrificantes oculares para o desconforto associado à pinguécula ou ao pterígio inativo",
      "Corticosteroide tópico de curta duração em episódios de pingueculite/inflamação aguda",
      "Excisão cirúrgica do pterígio indicada quando há progressão significativa em direção ao eixo visual, astigmatismo induzido relevante, desconforto crônico importante ou por razões estéticas",
    ],
    complicacoes: [
      "Crônica: astigmatismo induzido e redução da acuidade visual em pterígio avançado que atinge o eixo visual central; recidiva do pterígio após excisão cirúrgica, mais comum em pacientes jovens e sem uso de técnicas cirúrgicas adjuvantes",
    ],
    redFlags: [
      "Lesão conjuntival de crescimento rápido, atípica, com vascularização irregular ou sangramento — biopsiar para excluir neoplasia intraepitelial conjuntival ou carcinoma espinocelular, que podem mimetizar pterígio/pinguécula",
    ],
    prognostico:
      "Excelente na maioria dos casos, com progressão lenta ou estabilização espontânea. Quando indicada, a excisão cirúrgica do pterígio tem bom resultado, ainda que com risco de recidiva, especialmente em pacientes mais jovens.",
    pontosDeProva: [
      "Proteção UV é a medida mais eficaz tanto para prevenir quanto para deter a progressão de pterígio e pinguécula — reforça a importância da orientação preventiva em populações de maior exposição solar",
      "Pterígio de crescimento atípico ou muito rápido não deve ser assumido automaticamente como benigno — sempre considerar neoplasia intraepitelial conjuntival como diagnóstico diferencial",
    ],
    casoClinico: {
      vinheta:
        "Homem, 52 anos, agricultor, apresenta lesão triangular fibrovascular na conjuntiva nasal do olho direito, avançando em direção à córnea, com irritação ocular crônica leve.",
      pergunta: "Qual a hipótese diagnóstica mais provável e a conduta?",
      raciocinio:
        "Lesão fibrovascular triangular avançando do limbo nasal sobre a córnea, em paciente com alta exposição solar ocupacional, é o quadro clássico de pterígio.",
      conduta:
        "Orientar proteção ocular contra radiação ultravioleta (óculos de sol, chapéu) como medida central para deter a progressão, prescrever lubrificante ocular para o desconforto, e encaminhar para avaliação da necessidade de excisão cirúrgica caso a lesão continue progredindo em direção ao eixo visual.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Fisiopatologia associada à radiação ultravioleta e classificação", fonte: "Kanski's Clinical Ophthalmology, 9ª ed." },
    ],
  },
  {
    slug: "episclerite-esclerite",
    nome: "Episclerite e esclerite",
    sinonimos: [],
    cid10: "H15",
    especialidade: "Oftalmologia",
    etiologia: "Multifatorial",
    resumo: "Inflamações da esclera e do tecido episcleral: a episclerite é benigna e geralmente idiopática; a esclerite é mais dolorosa e frequentemente associada a doença autoimune sistêmica subjacente.",
    definicao:
      "Episclerite é a inflamação do tecido episcleral (camada entre a conjuntiva e a esclera), geralmente idiopática, autolimitada e benigna. Esclerite é a inflamação da própria esclera, mais dolorosa, potencialmente destrutiva para a integridade do globo ocular, e frequentemente associada a doença autoimune sistêmica (artrite reumatoide, granulomatose com poliangeíte, entre outras).",
    epidemiologia:
      "Episclerite é relativamente comum e tipicamente idiopática (a causa identificável, quando presente, é menos comum que na esclerite). Esclerite é mais rara, e cerca de metade dos casos está associada a uma doença autoimune sistêmica subjacente, sendo a artrite reumatoide a associação mais frequente.",
    fisiopatologia:
      "Na episclerite, há inflamação superficial do tecido episcleral, geralmente sem mecanismo autoimune sistêmico identificável na maioria dos casos. Na esclerite, o processo inflamatório é mais profundo, acometendo a esclera propriamente dita, com mecanismo frequentemente imunomediado (vasculite de pequenos vasos ou processo granulomatoso), podendo levar a afinamento e, em casos graves, perfuração escleral.",
    classificacao:
      "Episclerite classificada em simples (setorial ou difusa, mais comum) e nodular. Esclerite classificada em anterior (não necrotizante — a forma mais comum e menos grave —, e necrotizante, com ou sem inflamação, a forma mais grave e associada a maior risco de perda visual) e posterior (mais rara, de diagnóstico mais difícil por não ser visível externamente).",
    quadroClinico: [
      "Episclerite: hiperemia setorial ou difusa, desconforto leve a moderado, sem dor importante à palpação, sem fotofobia significativa, geralmente autolimitada em 1 a 3 semanas",
      "Esclerite: dor ocular intensa, característica por piorar à palpação do globo ocular e por vezes irradiando para a face/cabeça, hiperemia com tonalidade violácea (diferente do vermelho vivo da episclerite), fotofobia e lacrimejamento",
      "Esclerite necrotizante: afinamento visível da esclera, podendo expor a coróide subjacente (aspecto azulado) em casos avançados",
    ],
    diagnostico: [
      "Diferenciação clínica entre episclerite e esclerite é essencial: teste de instilação de fenilefrina tópica (vasoconstritor) — a hiperemia da episclerite branqueia com fenilefrina, enquanto a da esclerite não branqueia significativamente, por acometer vasos mais profundos",
      "Investigação sistêmica ativa (história e exames direcionados) em todo paciente com esclerite, dada a alta frequência de associação com doença autoimune subjacente",
    ],
    examesComplementares: [
      "Teste de branqueamento com fenilefrina tópica para diferenciar episclerite de esclerite",
      "Investigação laboratorial para doença autoimune sistêmica na esclerite (fator reumatoide, ANCA, entre outros conforme suspeita clínica)",
      "Ecografia ocular (modo B) em suspeita de esclerite posterior, já que não é visível ao exame externo",
    ],
    diagnosticoDiferencial: [
      "Conjuntivite (hiperemia difusa com secreção, sem a dor característica da esclerite nem o padrão setorial típico da episclerite)",
      "Uveíte anterior / iridociclite (dor e fotofobia semelhantes à esclerite, mas com hiperemia perilímbica e alterações de câmara anterior à lâmpada de fenda, não hiperemia escleral)",
    ],
    tratamento: [
      "Episclerite: geralmente autolimitada; lubrificantes oculares para conforto, ou anti-inflamatório não esteroidal oral em casos mais sintomáticos ou recorrentes",
      "Esclerite não necrotizante leve a moderada: anti-inflamatório não esteroidal oral como primeira linha",
      "Esclerite grave, necrotizante ou refratária: corticosteroide sistêmico e, frequentemente, imunossupressor poupador de corticosteroide, sobretudo quando há doença autoimune sistêmica associada — tratamento conduzido em conjunto com reumatologia (classes de imunossupressor sistêmico ainda sem ficha própria de medicamento no site)",
      "Investigação e tratamento da doença autoimune sistêmica de base, quando identificada, é essencial para o controle da esclerite e para reduzir o risco de complicações oculares e sistêmicas",
    ],
    complicacoes: [
      "Aguda: perfuração escleral em esclerite necrotizante grave não tratada a tempo — emergência com risco de perda do globo ocular",
      "Crônica: afinamento escleral permanente, ceratite periférica associada, e catarata ou glaucoma secundários ao uso prolongado de corticosteroide sistêmico no tratamento",
    ],
    redFlags: [
      "Dor ocular intensa que piora à palpação do globo ocular, com hiperemia violácea — sugere esclerite, não episclerite, e exige investigação de doença autoimune sistêmica associada",
      "Afinamento escleral visível com exposição da coróide subjacente (aspecto azulado) — esclerite necrotizante, risco de perfuração, emergência oftalmológica",
      "Esclerite associada a sintomas sistêmicos (artralgia, lesões cutâneas, sintomas respiratórios/renais) — reforça a necessidade de investigação de vasculite sistêmica (como granulomatose com poliangeíte)",
    ],
    prognostico:
      "Episclerite tem excelente prognóstico, geralmente autolimitada e sem sequelas. Esclerite tem prognóstico mais reservado, dependente do controle da doença autoimune sistêmica associada — a forma necrotizante carrega risco real de perda visual e mesmo de perda do globo ocular se não tratada agressivamente.",
    pontosDeProva: [
      "O teste de branqueamento com fenilefrina tópica é o achado mais cobrado para diferenciar episclerite (branqueia) de esclerite (não branqueia) à beira do leito",
      "Cerca de metade dos casos de esclerite está associada a doença autoimune sistêmica, mais comumente artrite reumatoide — todo paciente com esclerite deve ser investigado sistemicamente",
      "Esclerite necrotizante é uma emergência oftalmológica com risco de perfuração do globo ocular, exigindo tratamento sistêmico agressivo, não apenas tópico",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 54 anos, com artrite reumatoide de longa data, apresenta dor ocular intensa há 3 dias, que piora ao tocar o olho, com hiperemia de tonalidade violácea. A instilação de colírio vasoconstritor não branqueia significativamente a hiperemia.",
      pergunta: "Qual a hipótese diagnóstica mais provável e a conduta?",
      raciocinio:
        "Dor ocular intensa que piora à palpação, hiperemia violácea que não branqueia com vasoconstritor tópico, em paciente com artrite reumatoide de base, é o quadro clássico de esclerite associada a doença autoimune sistêmica.",
      conduta:
        "Encaminhamento oftalmológico urgente para confirmação diagnóstica e classificação (necrotizante vs. não necrotizante), com avaliação conjunta da reumatologia para otimizar o controle da doença de base; iniciar anti-inflamatório não esteroidal oral se a forma for não necrotizante leve a moderada, ou corticosteroide sistêmico/imunossupressor se houver critérios de gravidade.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "ibuprofeno", nome: "Ibuprofeno" },
    ],
    medicamentosSecaoTitulo: "Medicamento oral para episclerite sintomática e esclerite não necrotizante leve",
    medicamentosNota:
      "O ibuprofeno cobre apenas o tratamento anti-inflamatório oral de primeira linha para episclerite mais sintomática ou esclerite não necrotizante leve a moderada. Esclerite necrotizante ou refratária exige corticosteroide sistêmico e, frequentemente, imunossupressor poupador de corticosteroide — classes ainda sem ficha própria no site.",
    fontes: [
      { tema: "Diferenciação clínica episclerite vs. esclerite e teste da fenilefrina", fonte: "Kanski's Clinical Ophthalmology, 9ª ed." },
      { tema: "Frequência de associação com doença autoimune sistêmica (~metade dos casos de esclerite)", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "iridociclite-uveite-anterior",
    nome: "Iridociclite (uveíte anterior)",
    sinonimos: ["Uveíte anterior", "Irite"],
    cid10: "H20",
    especialidade: "Oftalmologia",
    etiologia: "Multifatorial",
    resumo: "Inflamação da íris e do corpo ciliar, causa importante de olho vermelho doloroso — idiopática na maior parte dos casos, mas com associações autoimunes (HLA-B27) e infecciosas relevantes.",
    definicao:
      "Inflamação da íris e do corpo ciliar (segmento anterior da úvea), caracterizada por dor ocular, fotofobia e hiperemia perilímbica, com achados característicos de células e flare (proteína) na câmara anterior ao exame com lâmpada de fenda.",
    epidemiologia:
      "Cerca de metade dos casos é idiopática. Entre as causas identificáveis, a associação com o antígeno HLA-B27 (presente em espondiloartrites como espondilite anquilosante e artrite reativa, e em doença inflamatória intestinal) é a mais frequente. Causas infecciosas (herpética, tuberculose, sífilis) e traumáticas também são relevantes.",
    fisiopatologia:
      "Na uveíte anterior associada a HLA-B27, acredita-se em um mecanismo de resposta imune aberrante direcionada a componentes teciduais oculares, análogo ao mecanismo proposto para o acometimento articular nas espondiloartrites associadas. Na uveíte infecciosa, o agente (vírus herpético, Mycobacterium tuberculosis, Treponema pallidum) invade diretamente o trato uveal ou desencadeia resposta imune secundária à sua presença. Em ambos os mecanismos, o resultado é quebra da barreira hemato-aquosa, com extravasamento de células inflamatórias e proteína para a câmara anterior.",
    classificacao:
      "Classificada quanto à evolução em aguda (até 3 meses) e crônica (mais de 3 meses, ou recorrente); quanto à etiologia em idiopática, associada a HLA-B27, infecciosa, traumática e associada a outras doenças sistêmicas (sarcoidose, doença de Behçet, artrite idiopática juvenil, entre outras); e quanto ao padrão em granulomatosa (precipitados ceráticos grandes, tipo 'gordura de carneiro', mais associada a causas como sarcoidose e tuberculose) e não granulomatosa (precipitados finos, mais associada a HLA-B27 e causa idiopática).",
    quadroClinico: [
      "Dor ocular, geralmente de início gradual ao longo de horas a poucos dias (diferente da dor mais súbita do glaucoma agudo)",
      "Fotofobia importante, frequentemente com fotofobia consensual (dor no olho afetado ao incidir luz no olho contralateral, achado relativamente específico)",
      "Hiperemia perilímbica (mais concentrada ao redor da córnea)",
      "Miose (pupila contraída) no olho afetado, por espasmo do músculo esfíncter da íris",
      "Visão turva leve a moderada; dor à acomodação (espasmo ciliar)",
      "Sinais sistêmicos associados quando há doença de base identificável (dor lombar inflamatória na espondiloartrite associada a HLA-B27, por exemplo)",
    ],
    diagnostico: [
      "Exame com lâmpada de fenda demonstrando células e flare na câmara anterior é o achado definidor",
      "Investigação de causa sistêmica direcionada pela história e pelo padrão do achado (granulomatoso vs. não granulomatoso, uni vs. bilateral, recorrência) — não é indicado investigar exaustivamente todo primeiro episódio unilateral não granulomatoso, dada a alta frequência de causa idiopática",
    ],
    examesComplementares: [
      "Biomicroscopia com lâmpada de fenda para graduar células e flare na câmara anterior",
      "Tipagem HLA-B27 e investigação de espondiloartrite (radiografia de sacroilíacas, avaliação reumatológica) em casos recorrentes, bilaterais ou com sintomas sistêmicos sugestivos",
      "Sorologias para sífilis e investigação para tuberculose latente/ativa em casos com padrão granulomatoso ou fatores de risco epidemiológicos",
    ],
    diagnosticoDiferencial: [
      "Conjuntivite (sem dor importante nem miose, sem células/flare na câmara anterior)",
      "Ceratite (defeito epitelial ou infiltrado corneano visível à lâmpada de fenda, achado ausente na uveíte anterior isolada)",
      "Glaucoma agudo de ângulo fechado (midríase média fixa, em vez de miose, e pressão intraocular muito elevada)",
    ],
    tratamento: [
      "Corticosteroide tópico é o tratamento de primeira linha para controlar a inflamação da câmara anterior (classe ainda sem ficha própria de medicamento no site)",
      "Cicloplégico/midriático tópico associado, para aliviar a dor por espasmo ciliar e prevenir sinéquias (aderências entre a íris e o cristalino)",
      "Tratamento da causa de base quando identificada (por exemplo, terapia antiviral na uveíte herpética, tratamento específico na tuberculose ou sífilis)",
      "Casos recorrentes ou crônicos associados a doença sistêmica podem necessitar de imunossupressão sistêmica em conjunto com reumatologia, quando refratários ao tratamento tópico isolado",
    ],
    complicacoes: [
      "Aguda: sinéquias posteriores (aderências entre a íris e o cristalino), que podem levar a bloqueio pupilar e glaucoma secundário agudo se extensas",
      "Crônica: catarata secundária (favorecida também pelo uso prolongado de corticosteroide), glaucoma secundário crônico, e edema macular cistoide em casos recorrentes ou mal controlados",
    ],
    redFlags: [
      "Hipópio (nível de pus na câmara anterior) — sugere uveíte mais grave, por vezes associada a doença de Behçet ou infecção, exigindo investigação e conduta mais agressivas",
      "Uveíte recorrente ou bilateral com sintomas sistêmicos (dor lombar inflamatória, lesões orais/genitais, diarreia crônica) — investigar espondiloartrite associada a HLA-B27, doença de Behçet ou doença inflamatória intestinal",
      "Dor ocular importante com pressão intraocular elevada na vigência de uveíte — risco de glaucoma secundário por sinéquias, requer manejo oftalmológico ativo",
    ],
    prognostico:
      "Bom na maioria dos episódios agudos isolados, com resolução completa em semanas com tratamento adequado. Casos recorrentes ou crônicos, especialmente quando associados a doença sistêmica mal controlada, carregam maior risco de complicações cumulativas (catarata, glaucoma secundário, edema macular) e de perda visual permanente.",
    pontosDeProva: [
      "Miose e fotofobia consensual (dor no olho afetado ao iluminar o olho contralateral) são achados clássicos e relativamente específicos de uveíte anterior, ajudando a diferenciá-la de outras causas de olho vermelho doloroso",
      "Cerca de metade dos casos de uveíte anterior é idiopática — não é necessário investigar exaustivamente todo primeiro episódio unilateral não granulomatoso e não recorrente",
      "Uveíte anterior recorrente ou bilateral, sobretudo com sintomas sistêmicos, deve levantar suspeita ativa de espondiloartrite associada a HLA-B27 — associação clássica e frequentemente cobrada",
    ],
    casoClinico: {
      vinheta:
        "Homem, 27 anos, com história de dor lombar inflamatória crônica (pior pela manhã, melhora com atividade), procura atendimento por dor ocular, fotofobia e hiperemia perilímbica de início há 2 dias no olho esquerdo. Ao exame, pupila esquerda em miose e achado de células e flare na câmara anterior.",
      pergunta: "Qual a hipótese diagnóstica mais provável e a associação sistêmica a investigar?",
      raciocinio:
        "Dor ocular com miose, fotofobia e células/flare na câmara anterior confirmam uveíte anterior. A associação com dor lombar inflamatória crônica em homem jovem sugere fortemente espondiloartrite associada a HLA-B27 (como espondilite anquilosante) como causa de base.",
      conduta:
        "Iniciar corticosteroide tópico e cicloplégico para tratar o episódio agudo e prevenir sinéquias, e encaminhar para avaliação reumatológica com investigação de espondiloartrite (tipagem HLA-B27, radiografia de sacroilíacas), dado o forte padrão sugestivo pela história associada.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Classificação, causas associadas e achados clínicos", fonte: "Kanski's Clinical Ophthalmology, 9ª ed." },
      { tema: "Associação com HLA-B27 e espondiloartrites", fonte: "American Academy of Ophthalmology, Preferred Practice Pattern: Uveitis" },
    ],
  },
  {
    slug: "descolamento-retina",
    nome: "Descolamento e outros defeitos da retina",
    sinonimos: ["Descolamento de retina"],
    cid10: "H33",
    especialidade: "Oftalmologia",
    etiologia: "Multifatorial",
    resumo: "Separação da retina neurossensorial do epitélio pigmentar subjacente — emergência oftalmológica, já que o tempo até o tratamento determina diretamente o prognóstico visual.",
    definicao:
      "Separação da retina neurossensorial do epitélio pigmentar retiniano subjacente, interrompendo o suprimento metabólico da retina e causando perda visual progressiva na área acometida se não corrigida cirurgicamente em tempo hábil.",
    epidemiologia:
      "A forma regmatogênica é a mais comum, com fatores de risco incluindo miopia alta, cirurgia de catarata prévia, trauma ocular e história familiar. Descolamento tracional é mais associado à retinopatia diabética proliferativa avançada; o exsudativo é mais raro, associado a doenças inflamatórias ou neoplásicas da coróide.",
    fisiopatologia:
      "No descolamento regmatogênico (o mais comum), uma ruptura (rasgo) na retina neurossensorial, geralmente favorecida por degeneração e liquefação do vítreo relacionada à idade ou à miopia, permite a passagem de vítreo liquefeito para o espaço sub-retiniano, descolando progressivamente a retina. No descolamento tracional, membranas fibrovasculares (como na retinopatia diabética proliferativa) tracionam mecanicamente a retina, descolando-a sem ruptura primária. No descolamento exsudativo, acúmulo de líquido sub-retiniano ocorre por doença da coróide ou epitélio pigmentar (inflamatória, neoplásica), sem ruptura nem tração.",
    classificacao:
      "Classificado em regmatogênico (por ruptura retiniana, o mais comum), tracional (por membranas fibrovasculares, associado a retinopatia diabética proliferativa) e exsudativo (por doença coroideana/inflamatória, sem ruptura ou tração). A localização (envolvendo ou não a mácula) é o principal determinante prognóstico dentro de cada tipo.",
    quadroClinico: [
      "Fotopsias (flashes de luz), tipicamente de início súbito, por tração vítreo-retiniana",
      "Miodesopsias (moscas volantes) de início ou piora súbita, podendo indicar hemorragia vítrea associada à ruptura retiniana",
      "Escotoma (sombra ou 'cortina') no campo visual periférico, que progride em direção ao centro conforme o descolamento avança",
      "Perda de acuidade visual central quando a mácula é acometida — divisor prognóstico fundamental para a urgência do tratamento",
    ],
    diagnostico: [
      "Fundoscopia com pupila dilatada é o exame central para visualizar diretamente a retina descolada e identificar rupturas",
      "Ultrassonografia ocular (modo B) quando há opacidade de meios (catarata densa, hemorragia vítrea) que impede a visualização direta da retina",
    ],
    examesComplementares: [
      "Oftalmoscopia indireta binocular com depressão escleral, padrão-ouro para mapear a extensão do descolamento e localizar todas as rupturas retinianas",
      "Ultrassonografia ocular (modo B) na presença de opacidade de meios",
      "Tomografia de coerência óptica (OCT) para avaliar envolvimento macular em casos limítrofes",
    ],
    diagnosticoDiferencial: [
      "Descolamento do vítreo posterior isolado (sem ruptura ou descolamento retiniano — fotopsias/miodesopsias semelhantes, mas sem defeito de campo visual)",
      "Retinosquise degenerativa (separação das camadas da própria retina, curso mais estável e menos urgente)",
      "Enxaqueca com aura visual (fotopsias bilaterais, tipicamente com escotoma cintilante migrando ao longo de minutos, sem defeito de campo fixo)",
    ],
    tratamento: [
      "Correção cirúrgica é o tratamento definitivo em praticamente todos os casos regmatogênicos e tracionais, com técnicas incluindo vitrectomia, introflexão escleral (retinopexia por indentação) ou retinopexia pneumática, conforme características do descolamento",
      "Descolamento exsudativo: tratamento dirigido à causa de base (doença coroideana/inflamatória subjacente), sem indicação cirúrgica direta na maioria dos casos",
      "Urgência da intervenção cirúrgica é maior quando a mácula ainda está aplicada ('macula-on'), já que o prognóstico visual piora significativamente após o descolamento macular ('macula-off')",
    ],
    complicacoes: [
      "Aguda: extensão do descolamento para a mácula, com perda de acuidade visual central que pode ser permanente mesmo após cirurgia bem-sucedida",
      "Crônica: proliferação vitreorretiniana (formação de membranas cicatriciais que tracionam e podem causar redescolamento, principal causa de falha cirúrgica)",
    ],
    redFlags: [
      "Fotopsias e miodesopsias de início súbito, especialmente associadas a sombra/cortina no campo visual — avaliação oftalmológica de urgência com fundoscopia dilatada, pelo risco de progressão para envolvimento macular",
      "Defeito de campo visual que progride rapidamente em direção ao centro — sinaliza descolamento se aproximando da mácula, com janela de tempo limitada para preservar o prognóstico visual",
    ],
    prognostico:
      "Excelente quando a mácula ainda está aplicada no momento da cirurgia ('macula-on'), com taxas altas de reaplicação anatômica e bom retorno funcional. Quando a mácula já está descolada ('macula-off'), a acuidade visual final tende a ser pior mesmo com reaplicação cirúrgica bem-sucedida, e quanto maior o tempo de descolamento macular, pior o prognóstico visual final.",
    pontosDeProva: [
      "Fotopsias e miodesopsias de início súbito são o par de sintomas mais cobrado para suspeitar de descolamento de retina/ruptura retiniana",
      "O status macular ('macula-on' vs. 'macula-off') no momento da cirurgia é o principal determinante prognóstico — daí a urgência real em encaminhar antes que a mácula descole",
      "Descolamento tracional (retinopatia diabética proliferativa) e regmatogênico têm mecanismos e às vezes condutas diferentes, mas ambos requerem avaliação cirúrgica especializada",
    ],
    casoClinico: {
      vinheta:
        "Homem, 58 anos, míope alto, relata início súbito de flashes de luz no olho esquerdo há 2 dias, seguido por sensação de 'cortina' cobrindo a parte inferior do campo visual nas últimas horas.",
      pergunta: "Qual a hipótese diagnóstica mais provável e a conduta imediata?",
      raciocinio:
        "Fotopsias seguidas de defeito de campo visual em progressão ('cortina'), em paciente com miopia alta (fator de risco conhecido), é o quadro clássico de descolamento de retina regmatogênico, com a mácula ainda potencialmente aplicada dado o acometimento inferior recente (a sombra costuma progredir do quadrante correspondente à ruptura em direção à mácula).",
      conduta:
        "Encaminhamento oftalmológico de urgência (mesmo dia) para fundoscopia com pupila dilatada e oftalmoscopia indireta, visando confirmar o diagnóstico e indicar correção cirúrgica antes que o descolamento progrida para envolvimento macular.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Classificação por mecanismo e fisiopatologia", fonte: "Kanski's Clinical Ophthalmology, 9ª ed." },
      { tema: "Prognóstico conforme status macular ('macula-on' vs. 'macula-off')", fonte: "American Academy of Ophthalmology, Preferred Practice Pattern: Posterior Vitreous Detachment, Retinal Breaks, and Lattice Degeneration" },
    ],
  },
  {
    slug: "oclusoes-vasculares-retina",
    nome: "Oclusões vasculares da retina",
    sinonimos: ["Oclusão de artéria central da retina", "Oclusão de veia central da retina"],
    cid10: "H34",
    especialidade: "Oftalmologia",
    etiologia: "Multifatorial",
    resumo: "Obstrução aguda da circulação arterial ou venosa retiniana, causando perda visual súbita — a oclusão arterial é considerada um equivalente de AVC e exige avaliação vascular sistêmica imediata.",
    definicao:
      "Obstrução do fluxo sanguíneo na artéria ou na veia central da retina (ou seus ramos), causando isquemia (na oclusão arterial) ou congestão e edema (na oclusão venosa) do território retiniano correspondente, com perda visual súbita e indolor.",
    epidemiologia:
      "Compartilha os mesmos fatores de risco cardiovasculares das doenças vasculares sistêmicas: hipertensão arterial, diabetes, dislipidemia, tabagismo e fibrilação atrial (fonte embólica) para a oclusão arterial; hipertensão, glaucoma e estados de hipercoagulabilidade para a oclusão venosa. A oclusão de veia central é a segunda causa vascular retiniana mais comum de perda visual, atrás apenas da retinopatia diabética.",
    fisiopatologia:
      "Na oclusão arterial, um êmbolo (mais comumente de origem carotídea ou cardíaca) ou trombose local interrompe o fluxo sanguíneo retiniano, causando infarto isquêmico da retina interna em minutos a poucas horas — analogamente a um AVC isquêmico, mas restrito à retina. Na oclusão venosa, trombose no local de cruzamento arteriovenoso (mais comum na oclusão de ramo, por compressão da veia pela arteríola esclerótica adjacente) ou na própria veia central causa aumento da pressão venosa retrógrada, com hemorragias, edema macular e, em casos graves, isquemia retiniana secundária que pode desencadear neovascularização.",
    classificacao:
      "Classificada quanto ao vaso acometido em arterial (central ou de ramo) e venosa (central ou de ramo), e quanto à oclusão venosa, em não isquêmica (a maioria, melhor prognóstico) e isquêmica (maior risco de neovascularização e glaucoma neovascular secundário).",
    quadroClinico: [
      "Perda visual súbita, indolor, unilateral — achado central em ambos os tipos",
      "Oclusão arterial: perda visual profunda e imediata (frequentemente contagem de dedos ou pior), podendo haver história de amaurose fugaz (perda visual transitória prévia) como sinal de alerta",
      "Oclusão venosa: perda visual de magnitude variável, frequentemente menos súbita e severa que a arterial, podendo ser percebida ao acordar",
    ],
    diagnostico: [
      "Fundoscopia é essencial: na oclusão arterial, observa-se retina esbranquiçada/edemaciada com 'mancha vermelho-cereja' na região macular; na oclusão venosa, observam-se hemorragias retinianas difusas ('retina em explosão de tomate'), veias dilatadas e tortuosas, e edema de disco óptico",
      "Investigação sistêmica ativa e imediata é obrigatória na oclusão arterial, análoga à investigação de um AVC — a retina funciona como uma 'janela' para o sistema vascular cerebral",
    ],
    examesComplementares: [
      "Avaliação carotídea (ultrassom Doppler de carótidas) e cardíaca (ecocardiograma, holter para fibrilação atrial) na oclusão arterial, para identificar fonte embólica",
      "Velocidade de hemossedimentação (VHS) e proteína C reativa urgentes em idoso com oclusão arterial, para excluir arterite de células gigantes, causa tratável e potencialmente bilateral se não tratada a tempo",
      "Angiofluoresceinografia para diferenciar oclusão venosa isquêmica de não isquêmica e guiar a necessidade de tratamento com anti-VEGF ou laser",
    ],
    diagnosticoDiferencial: [
      "Neuropatia óptica isquêmica anterior (perda visual súbita também, mas com edema de disco óptico e sem os achados retinianos característicos de oclusão vascular)",
      "Descolamento de retina (perda visual progressiva com escotoma em cortina, não súbita e completa como na oclusão arterial)",
      "Arterite de células gigantes (causa sistêmica tratável de oclusão arterial em idosos — precisa ser ativamente excluída)",
    ],
    tratamento: [
      "Oclusão arterial central: emergência com janela terapêutica muito estreita (poucas horas); medidas para tentar deslocar o êmbolo (massagem ocular, redução da pressão intraocular) têm eficácia limitada e incerta; o foco real e mais importante é a investigação e prevenção secundária de novo evento vascular (incluindo cerebral), de forma análoga ao manejo pós-AVC",
      "Oclusão venosa com edema macular: injeção intravítrea de anti-VEGF é o tratamento de primeira linha atual para preservar/recuperar a visão central",
      "Oclusão venosa isquêmica com neovascularização: fotocoagulação a laser panretiniana para prevenir glaucoma neovascular",
      "Controle rigoroso dos fatores de risco cardiovasculares sistêmicos (hipertensão, diabetes, dislipidemia) é essencial em ambos os tipos, tratando a doença de base com os medicamentos já indicados para ela",
    ],
    complicacoes: [
      "Aguda: perda visual permanente e profunda na oclusão arterial não revertida na janela terapêutica inicial",
      "Crônica: glaucoma neovascular secundário à isquemia retiniana extensa (mais comum na oclusão venosa isquêmica), com prognóstico visual reservado",
    ],
    redFlags: [
      "Perda visual súbita e indolor em paciente idoso — sempre investigar arterite de células gigantes (VHS/PCR urgentes, sintomas associados como cefaleia temporal, claudicação de mandíbula) pelo risco de acometimento do olho contralateral se não tratada com corticosteroide imediatamente",
      "Amaurose fugaz recorrente prévia à perda visual definitiva — equivalente a um ataque isquêmico transitório retiniano, exige investigação vascular urgente para prevenir evento maior (AVC)",
    ],
    prognostico:
      "Reservado na oclusão arterial central, com recuperação visual significativa sendo rara mesmo com tratamento precoce, dada a baixa tolerância da retina à isquemia. Mais variável na oclusão venosa, com boa resposta ao anti-VEGF em muitos casos de edema macular, mas risco de sequelas visuais e neovasculares na forma isquêmica.",
    pontosDeProva: [
      "A oclusão de artéria central da retina é funcionalmente um 'AVC da retina' — exige a mesma urgência de investigação de fonte embólica/vascular sistêmica que um AVC verdadeiro",
      "Mancha vermelho-cereja macular é o achado clássico de fundoscopia na oclusão arterial central; hemorragias difusas em 'explosão de tomate' são o achado clássico da oclusão venosa central",
      "Arterite de células gigantes deve ser sempre excluída em idoso com perda visual súbita, pelo risco real e evitável de acometimento bilateral se não tratada com corticosteroide de urgência",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 74 anos, hipertensa, relata perda visual súbita e indolor no olho direito ao acordar. Refere um episódio de 'visão escurecendo' por cerca de um minuto na semana anterior, que melhorou espontaneamente.",
      pergunta: "Qual a hipótese diagnóstica mais provável e a conduta?",
      raciocinio:
        "Perda visual súbita e indolor precedida por um episódio de amaurose fugaz é altamente sugestiva de oclusão da artéria central da retina de causa embólica, funcionando como um evento vascular equivalente a um AVC.",
      conduta:
        "Encaminhamento oftalmológico e vascular de urgência para confirmação fundoscópica e investigação imediata de fonte embólica (ultrassom de carótidas, avaliação cardíaca), com condução análoga à investigação pós-AVC, além de exames laboratoriais urgentes (VHS/PCR) para excluir arterite de células gigantes dada a idade da paciente.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Fisiopatologia e achados de fundoscopia por tipo de oclusão", fonte: "Kanski's Clinical Ophthalmology, 9ª ed." },
      { tema: "Oclusão arterial como equivalente de AVC e necessidade de investigação vascular sistêmica", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "retinopatia-diabetica-dmri",
    nome: "Retinopatia diabética e degeneração macular relacionada à idade",
    sinonimos: ["DMRI", "Retinopatia diabética"],
    cid10: "H35",
    especialidade: "Oftalmologia",
    etiologia: "Multifatorial",
    resumo: "As duas principais causas de perda visual crônica em adultos nos países desenvolvidos: a retinopatia diabética (complicação microvascular do diabetes) e a degeneração macular relacionada à idade (DMRI, degenerativa).",
    definicao:
      "Retinopatia diabética é uma complicação microvascular crônica do diabetes mellitus, causando dano progressivo aos vasos retinianos. Degeneração macular relacionada à idade (DMRI) é uma doença degenerativa progressiva da mácula associada ao envelhecimento, causando perda da visão central.",
    epidemiologia:
      "Retinopatia diabética é uma das principais causas de cegueira evitável em adultos em idade produtiva, com risco proporcional ao tempo de doença e ao controle glicêmico. DMRI é a principal causa de perda visual central irreversível em idosos nos países desenvolvidos, com prevalência crescente com a idade.",
    fisiopatologia:
      "Na retinopatia diabética, a hiperglicemia crônica causa dano microvascular progressivo (espessamento da membrana basal capilar, perda de pericitos), levando a microaneurismas, exsudatos, hemorragias e, em fases avançadas, isquemia retiniana que desencadeia neovascularização (retinopatia diabética proliferativa) e risco de hemorragia vítrea e descolamento tracional. Na DMRI, ocorre acúmulo de material extracelular (drusas) sob o epitélio pigmentar retiniano na forma seca (atrófica, mais comum e de progressão mais lenta), ou neovascularização coroideana anômala na forma úmida (exsudativa, menos comum mas responsável pela maioria dos casos de perda visual grave e rápida por DMRI).",
    classificacao:
      "Retinopatia diabética classificada em não proliferativa (leve, moderada, grave, conforme achados de fundoscopia) e proliferativa (presença de neovascularização, a forma mais grave, com maior risco de complicações que ameaçam a visão). Edema macular diabético pode ocorrer em qualquer estágio e é a causa mais comum de perda visual na retinopatia diabética. DMRI classificada em seca/atrófica (a mais comum, progressão lenta) e úmida/exsudativa (menos comum, mas responsável pela maior parte da perda visual grave e súbita associada à doença).",
    quadroClinico: [
      "Retinopatia diabética não proliferativa: frequentemente assintomática nas fases iniciais, daí a importância do rastreio anual em todo diabético",
      "Edema macular diabético: embaçamento visual central progressivo, principal causa sintomática de perda visual na retinopatia diabética",
      "Retinopatia diabética proliferativa: risco de perda visual súbita por hemorragia vítrea (miodesopsias abruptas, sombras) ou descolamento de retina tracional",
      "DMRI seca: perda visual central gradual e progressiva ao longo de anos, com escotoma central relativo",
      "DMRI úmida: perda visual central mais rápida (dias a semanas), frequentemente com metamorfopsia (distorção de linhas retas) como sintoma de alerta precoce",
    ],
    diagnostico: [
      "Fundoscopia com pupila dilatada é essencial para ambas: rastreio anual obrigatório em todo paciente diabético (mesmo assintomático) e avaliação de rotina em idosos para DMRI",
      "Grade de Amsler como ferramenta simples de automonitorização para detectar metamorfopsia precoce sugestiva de conversão para DMRI úmida",
    ],
    examesComplementares: [
      "Tomografia de coerência óptica (OCT) para quantificar edema macular diabético e para diagnóstico e monitorização da DMRI (seca vs. úmida)",
      "Angiofluoresceinografia para mapear áreas de isquemia e neovascularização na retinopatia diabética proliferativa, e para caracterizar a neovascularização coroideana na DMRI úmida",
      "Angiografia com indocianina verde em casos selecionados de DMRI úmida para melhor caracterização da neovascularização coroideana",
    ],
    diagnosticoDiferencial: [
      "Oclusão de veia central/ramo da retina (hemorragias mais confluentes e agudas, história e fundoscopia distintas)",
      "Retinopatia hipertensiva (achados de fundoscopia relacionados a hipertensão, sem os microaneurismas característicos do diabetes)",
      "Outras maculopatias (buraco macular, membrana epirretiniana) no diagnóstico diferencial de metamorfopsia isolada",
    ],
    tratamento: [
      "Retinopatia diabética: controle glicêmico rigoroso e controle de pressão arterial e lipídios são a base da prevenção e da desaceleração da progressão (ver Diabetes mellitus tipo 2/tipo 1 para o tratamento farmacológico sistêmico de base)",
      "Edema macular diabético e retinopatia diabética proliferativa: injeção intravítrea de anti-VEGF é o tratamento de primeira linha atual; fotocoagulação a laser panretiniana reservada a casos proliferativos refratários ou de maior risco",
      "DMRI seca: suplementação vitamínica antioxidante específica (fórmula tipo AREDS2) pode reduzir o risco de progressão em estágios intermediários/avançados selecionados; sem tratamento capaz de reverter a atrofia já estabelecida",
      "DMRI úmida: injeção intravítrea de anti-VEGF é o tratamento de primeira linha, podendo estabilizar ou melhorar a visão quando iniciado precocemente",
    ],
    complicacoes: [
      "Aguda: hemorragia vítrea e descolamento de retina tracional na retinopatia diabética proliferativa avançada",
      "Crônica: cegueira legal irreversível em ambas as condições quando não tratadas ou diagnosticadas tardiamente — a principal causa evitável de perda visual permanente em adultos (diabetes) e idosos (DMRI) nos países desenvolvidos",
    ],
    redFlags: [
      "Diabético que nunca realizou fundoscopia de rastreio — a retinopatia diabética é frequentemente assintomática até fases avançadas, justificando rastreio anual obrigatório independente de sintomas",
      "Metamorfopsia de início recente em paciente idoso — sinal de alerta para conversão de DMRI seca para úmida, exigindo avaliação oftalmológica urgente, já que o tratamento precoce com anti-VEGF muda significativamente o prognóstico visual",
      "Miodesopsias abruptas e numerosas em diabético de longa data — suspeitar de hemorragia vítrea por retinopatia proliferativa",
    ],
    prognostico:
      "Na retinopatia diabética, o prognóstico visual é bom quando há rastreio regular e tratamento oportuno do edema macular e das formas proliferativas; sem isso, é uma das principais causas de cegueira evitável. Na DMRI, a forma seca tem progressão lenta mas geralmente sem tratamento capaz de reverter a perda já estabelecida; a forma úmida, quando tratada precocemente com anti-VEGF, frequentemente estabiliza ou até recupera parte da visão perdida, mas a perda visual pode ser rápida e significativa se o tratamento for tardio.",
    pontosDeProva: [
      "Todo paciente diabético deve realizar fundoscopia de rastreio anual, mesmo sem sintomas visuais — a retinopatia diabética é classicamente assintomática até fases avançadas",
      "Metamorfopsia (distorção de linhas retas, testável pela grade de Amsler) é o sintoma de alerta mais cobrado para conversão de DMRI seca para úmida",
      "Anti-VEGF intravítreo revolucionou o tratamento tanto do edema macular diabético/retinopatia proliferativa quanto da DMRI úmida — é hoje a primeira linha para ambas as condições exsudativas/proliferativas",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 78 anos, relata que linhas retas (como o batente de portas) têm parecido 'onduladas' há alguns dias, com leve embaçamento central no olho esquerdo. Não tem diabetes.",
      pergunta: "Qual a hipótese diagnóstica mais provável e a conduta?",
      raciocinio:
        "Metamorfopsia de início recente em paciente idosa, sem diabetes, é o sintoma de alerta clássico para conversão de degeneração macular relacionada à idade da forma seca para a forma úmida (neovascular), que exige tratamento rápido para preservar a visão central.",
      conduta:
        "Encaminhamento oftalmológico urgente para tomografia de coerência óptica e, se confirmada neovascularização coroideana, iniciar injeção intravítrea de anti-VEGF o quanto antes, já que o prognóstico visual depende diretamente da rapidez do tratamento.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Classificação e fisiopatologia da retinopatia diabética", fonte: "American Academy of Ophthalmology, Preferred Practice Pattern: Diabetic Retinopathy" },
      { tema: "Classificação seca/úmida e tratamento da DMRI", fonte: "American Academy of Ophthalmology, Preferred Practice Pattern: Age-Related Macular Degeneration" },
    ],
  },
  {
    slug: "celulite-orbitaria",
    nome: "Celulite orbitária",
    sinonimos: ["Infecção orbitária"],
    cid10: "H05",
    especialidade: "Oftalmologia",
    etiologia: "Bacteriana",
    resumo: "Infecção bacteriana dos tecidos moles posteriores ao septo orbitário, geralmente por extensão de sinusite — emergência oftalmológica com risco de perda visual e complicações intracranianas.",
    definicao:
      "Infecção bacteriana dos tecidos moles da órbita posteriores ao septo orbitário, tipicamente secundária à extensão de sinusite bacteriana adjacente (mais comumente etmoidal), distinta e mais grave que a celulite pré-septal (infecção limitada às pálpebras e tecidos anteriores ao septo).",
    epidemiologia:
      "Mais comum em crianças, geralmente como complicação de sinusite bacteriana aguda, sobretudo etmoidal (a fina lâmina papirácea que separa o seio etmoidal da órbita facilita a disseminação direta da infecção).",
    fisiopatologia:
      "A infecção bacteriana dos seios paranasais (mais comumente por Streptococcus pneumoniae, Staphylococcus aureus, Haemophilus influenzae e, em infecções polimicrobianas, anaeróbios) estende-se diretamente para a órbita através da fina lâmina papirácea do seio etmoidal ou por via hematogênica/trombose de veias oftálmicas, causando inflamação e infecção dos tecidos moles orbitários posteriores ao septo, com risco de compressão do nervo óptico e dos músculos extraoculares.",
    classificacao:
      "Didaticamente distinguida da celulite pré-septal (anterior ao septo orbitário, mais branda, sem proptose ou limitação da motilidade ocular) pela localização posterior ao septo. Pode ser subclassificada conforme a presença de abscesso subperiosteal ou orbitário associado, achado que frequentemente exige drenagem cirúrgica além da antibioticoterapia.",
    quadroClinico: [
      "Proptose (protrusão do globo ocular)",
      "Limitação dolorosa da motilidade ocular (oftalmoplegia), achado-chave que diferencia de celulite pré-septal",
      "Edema e hiperemia palpebral importantes, calor local",
      "Dor ocular, febre e comprometimento do estado geral",
      "Diminuição da acuidade visual e alteração da percepção de cores quando há compressão do nervo óptico — sinal de gravidade",
    ],
    diagnostico: [
      "Diagnóstico clínico pela presença de proptose e limitação da motilidade ocular associadas a sinais infecciosos, distinguindo de celulite pré-septal",
      "Tomografia computadorizada de órbitas e seios paranasais com contraste é essencial para confirmar a extensão posterior ao septo, identificar abscesso subperiosteal/orbitário e avaliar extensão intracraniana",
    ],
    examesComplementares: [
      "Tomografia computadorizada de órbitas e seios paranasais com contraste (exame de escolha para avaliar extensão e complicações)",
      "Hemograma e hemoculturas, sobretudo em quadros com toxemia sistêmica importante",
      "Avaliação otorrinolaringológica conjunta, dada a origem sinusal na maioria dos casos",
    ],
    diagnosticoDiferencial: [
      "Celulite pré-septal (sem proptose ou limitação da motilidade ocular, quadro mais brando)",
      "Tumor orbitário (proptose de instalação mais lenta, geralmente sem sinais infecciosos agudos)",
      "Doença de Graves com oftalmopatia (proptose bilateral mais comum, sem sinais infecciosos)",
    ],
    tratamento: [
      "Internação hospitalar e antibioticoterapia intravenosa de amplo espectro é a conduta padrão, dado o risco de complicações graves — celulite orbitária verdadeira não deve ser tratada apenas com antibiótico oral ambulatorial (classe de antibiótico intravenoso de amplo espectro ainda sem ficha própria de medicamento no site)",
      "Drenagem cirúrgica indicada quando há abscesso subperiosteal ou orbitário significativo, ou quando não há melhora com antibioticoterapia isolada em 24 a 48 horas",
      "Avaliação e tratamento conjunto da sinusite de base, frequentemente com abordagem otorrinolaringológica",
    ],
    complicacoes: [
      "Aguda: perda visual por compressão do nervo óptico ou síndrome compartimental orbitária; trombose do seio cavernoso e meningite por extensão intracraniana da infecção — complicações potencialmente fatais",
      "Crônica: fibrose orbitária residual com limitação permanente da motilidade ocular em casos graves ou tratados tardiamente",
    ],
    redFlags: [
      "Limitação da motilidade ocular, diminuição da acuidade visual ou alteração da percepção de cores — sinais de compressão do nervo óptico, exigindo intervenção (incluindo cirúrgica) imediata para preservar a visão",
      "Alteração do nível de consciência, cefaleia intensa ou sinais meníngeos associados — suspeitar de trombose de seio cavernoso ou extensão intracraniana, emergências com risco de vida",
      "Ausência de melhora clínica após 24-48 horas de antibioticoterapia intravenosa adequada — reavaliar imagem para abscesso não drenado",
    ],
    prognostico:
      "Bom quando tratada precocemente com antibioticoterapia intravenosa e, quando indicada, drenagem cirúrgica oportuna. O atraso no diagnóstico ou tratamento aumenta significativamente o risco de perda visual permanente e de complicações intracranianas potencialmente fatais.",
    pontosDeProva: [
      "A limitação da motilidade ocular (oftalmoplegia) e a proptose são os achados que diferenciam celulite orbitária (posterior ao septo, grave) de celulite pré-septal (anterior, mais branda) — distinção clínica central e muito cobrada",
      "A lâmina papirácea do seio etmoidal, extremamente fina, é a via de disseminação mais comum da sinusite para a órbita, explicando por que a celulite orbitária é predominantemente uma complicação de sinusite etmoidal",
      "Celulite orbitária é uma emergência com risco de perda visual e de complicações intracranianas potencialmente fatais (trombose de seio cavernoso, meningite) — sempre trata-se com internação e antibiótico intravenoso, nunca ambulatorialmente",
    ],
    casoClinico: {
      vinheta:
        "Menino, 7 anos, com quadro de sinusite há 5 dias, desenvolve edema palpebral importante, proptose e dificuldade para movimentar o olho direito, associados a febre de 38,9°C.",
      pergunta: "Qual a hipótese diagnóstica mais provável e a conduta imediata?",
      raciocinio:
        "Proptose e limitação da motilidade ocular associadas a sinusite recente e febre são achados que definem celulite orbitária (posterior ao septo), diferente de uma celulite pré-septal mais branda, e configuram emergência oftalmológica.",
      conduta:
        "Internação hospitalar imediata para antibioticoterapia intravenosa de amplo espectro, tomografia computadorizada de órbitas e seios paranasais com contraste para avaliar extensão e eventual abscesso, e avaliação otorrinolaringológica e oftalmológica conjuntas.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Fisiopatologia, via de disseminação e diferenciação de celulite pré-septal", fonte: "Vaughan & Asbury's General Ophthalmology, 19ª ed." },
      { tema: "Conduta com antibioticoterapia intravenosa e critérios de drenagem cirúrgica", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "endoftalmite-corpo-estranho-intraocular",
    nome: "Endoftalmite e corpo estranho intraocular",
    sinonimos: ["Infecção intraocular"],
    cid10: "H44",
    especialidade: "Oftalmologia",
    etiologia: "Multifatorial",
    resumo: "Endoftalmite é a infecção grave do interior do globo ocular, geralmente pós-cirúrgica ou pós-traumática — emergência oftalmológica com alto risco de perda visual irreversível se não tratada rapidamente.",
    definicao:
      "Endoftalmite é a inflamação/infecção grave dos tecidos intraoculares (câmaras anterior e posterior, vítreo), geralmente de causa bacteriana ou fúngica, mais comumente secundária a cirurgia intraocular recente (sobretudo facoemulsificação) ou a trauma ocular penetrante, por vezes com corpo estranho intraocular retido.",
    epidemiologia:
      "A endoftalmite pós-operatória é rara, mas é a complicação infecciosa mais temida da cirurgia de catarata, dada a altíssima frequência desse procedimento. Endoftalmite pós-traumática tem incidência maior quando há corpo estranho intraocular retido, sobretudo de origem orgânica/vegetal.",
    fisiopatologia:
      "Na endoftalmite pós-operatória, microrganismos da própria flora periocular do paciente (mais comumente estafilococos coagulase-negativos) contaminam o interior do olho durante a cirurgia, proliferando no ambiente intraocular nos dias seguintes. Na endoftalmite pós-traumática, a ruptura da integridade do globo ocular permite entrada direta de microrganismos do ambiente, com maior gravidade e pior prognóstico quando há corpo estranho retido (que serve como nicho persistente de infecção) ou contaminação por material vegetal/orgânico (associado a fungos e a curso mais agressivo).",
    classificacao:
      "Classificada por momento e via de instalação em pós-operatória (aguda, nos primeiros dias após cirurgia, ou tardia, semanas a meses depois, geralmente por organismos menos virulentos), pós-traumática e endógena (mais rara, por disseminação hematogênica a partir de foco infeccioso sistêmico em paciente imunocomprometido ou com bacteremia/fungemia).",
    quadroClinico: [
      "Dor ocular importante, de início e piora rápidos",
      "Diminuição significativa e rápida da acuidade visual",
      "Hiperemia ocular intensa, hipópio (nível de pus na câmara anterior) em casos avançados",
      "Turvação vítrea importante, dificultando ou impedindo a visualização do fundo de olho",
      "Histórico recente de cirurgia intraocular ou trauma penetrante é o dado de anamnese mais relevante",
    ],
    diagnostico: [
      "Diagnóstico clínico de alta suspeição em paciente com dor e perda visual rápidas após cirurgia intraocular recente ou trauma penetrante",
      "Coleta de amostra intraocular (aspirado de vítreo e/ou humor aquoso) para cultura e coloração de Gram é essencial para identificar o agente e guiar o tratamento antimicrobiano específico",
      "Investigação radiológica (radiografia ou tomografia computadorizada de órbita) para localizar corpo estranho intraocular quando há história de trauma compatível",
    ],
    examesComplementares: [
      "Cultura e Gram de aspirado vítreo/humor aquoso (padrão para confirmação microbiológica e ajuste terapêutico)",
      "Tomografia computadorizada de órbita para localizar corpo estranho intraocular radiopaco, quando suspeitado",
      "Ultrassonografia ocular quando a opacidade dos meios impede a visualização direta do segmento posterior",
    ],
    diagnosticoDiferencial: [
      "Uveíte pós-operatória inflamatória estéril (sem microrganismo isolado, resposta inflamatória sem infecção verdadeira, quadro geralmente menos grave)",
      "Hemorragia vítrea isolada (sem os sinais inflamatórios/infecciosos característicos da endoftalmite)",
      "Descolamento de retina pós-operatório (perda visual também associada a cirurgia recente, mas sem dor importante nem hipópio)",
    ],
    tratamento: [
      "Injeção intravítrea imediata de antibiótico de amplo espectro é o tratamento de primeira linha na suspeita de endoftalmite pós-operatória, feita idealmente logo após a coleta de material para cultura, sem aguardar o resultado (classe de antibiótico intravítreo ainda sem ficha própria de medicamento no site)",
      "Vitrectomia (remoção cirúrgica do vítreo infectado) indicada em casos com perda visual grave já instalada ou resposta inadequada ao tratamento intravítreo isolado",
      "Remoção cirúrgica de corpo estranho intraocular retido é indicada na maioria dos casos, associada a antibioticoterapia, dado o risco de infecção persistente e toxicidade tecidual (sobretudo em corpos estranhos metálicos com potencial de siderose ocular)",
    ],
    complicacoes: [
      "Aguda: perda visual grave e rápida, podendo evoluir para perda total da percepção de luz em horas a dias se o tratamento for tardio ou inadequado",
      "Crônica: phthisis bulbi (atrofia e desorganização final do globo ocular) em casos graves não controlados",
    ],
    redFlags: [
      "Dor ocular importante e queda rápida da acuidade visual nos primeiros dias após cirurgia intraocular — suspeitar de endoftalmite pós-operatória, emergência que exige coleta de material e injeção intravítrea de antibiótico sem demora",
      "Trauma ocular penetrante com suspeita de corpo estranho intraocular retido — investigação de imagem obrigatória, mesmo sem sinais infecciosos imediatos, pelo risco de endoftalmite tardia e toxicidade tecidual direta do material retido",
    ],
    prognostico:
      "Reservado mesmo com tratamento adequado, sobretudo na endoftalmite pós-traumática e naquela por organismos mais virulentos — o tempo entre o início dos sintomas e o tratamento é o principal determinante do desfecho visual final. A endoftalmite pós-operatória tratada precocemente com injeção intravítrea tem prognóstico relativamente melhor que a pós-traumática.",
    pontosDeProva: [
      "Dor e perda visual rápidas e importantes após cirurgia intraocular recente devem sempre levantar suspeita de endoftalmite — é a complicação infecciosa mais temida da cirurgia de catarata, apesar de rara",
      "A coleta de material intraocular para cultura deve ser feita antes, mas sem atrasar, o início da injeção intravítrea de antibiótico — o tempo até o tratamento é crítico para o prognóstico visual",
      "Corpo estranho intraocular metálico retido pode causar siderose ocular por toxicidade direta, independentemente de infecção — reforça a indicação de remoção cirúrgica na maioria dos casos",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 71 anos, submetida a facoemulsificação com sucesso há 3 dias, retorna com dor ocular importante, hiperemia intensa e queda rápida da acuidade visual no olho operado.",
      pergunta: "Qual a principal preocupação diagnóstica e a conduta imediata?",
      raciocinio:
        "Dor importante e queda rápida da acuidade visual nos primeiros dias após cirurgia de catarata são altamente sugestivas de endoftalmite pós-operatória, a complicação infecciosa mais temida desse procedimento, exigindo ação imediata para preservar a visão.",
      conduta:
        "Encaminhamento oftalmológico de emergência para coleta de aspirado vítreo/humor aquoso para cultura e Gram, seguida de injeção intravítrea imediata de antibiótico de amplo espectro sem aguardar o resultado da cultura, dado o risco de perda visual rápida e progressiva.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Fisiopatologia e classificação por momento/via de instalação", fonte: "Kanski's Clinical Ophthalmology, 9ª ed." },
      { tema: "Conduta com injeção intravítrea imediata e indicação de vitrectomia", fonte: "American Academy of Ophthalmology, Preferred Practice Pattern: Endophthalmitis" },
    ],
  },
  {
    slug: "uveite-posterior-toxoplasmose-ocular",
    nome: "Uveíte posterior e toxoplasmose ocular",
    sinonimos: ["Coriorretinite toxoplásmica", "Uveíte posterior"],
    cid10: "H30",
    especialidade: "Oftalmologia",
    etiologia: "Parasitária",
    resumo: "Inflamação da coróide e retina adjacente; a toxoplasmose ocular é a causa infecciosa mais comum de uveíte posterior no mundo, classicamente reativando a partir de cicatrizes coriorretinianas congênitas.",
    definicao:
      "Inflamação da coróide (camada vascular do olho) associada a comprometimento da retina adjacente (coriorretinite), de causa infecciosa (mais comumente por Toxoplasma gondii) ou não infecciosa (associada a doenças autoimunes sistêmicas), causando lesões focais características ao exame de fundo de olho.",
    epidemiologia:
      "A toxoplasmose ocular é a causa infecciosa mais comum de uveíte posterior em todo o mundo, incluindo no Brasil, onde a prevalência de infecção por Toxoplasma gondii é elevada. A maioria dos casos resulta de reativação de uma lesão coriorretiniana previamente cicatrizada, adquirida por transmissão congênita ou por infecção pós-natal.",
    fisiopatologia:
      "A infecção por Toxoplasma gondii (congênita, transplacentária, ou adquirida pós-natalmente pela ingestão de oocistos ou cistos teciduais) estabelece cistos teciduais latentes na retina. A reativação desses cistos, por motivos não totalmente esclarecidos (podendo estar relacionada a imunossupressão ou fatores locais), causa necrose retiniana focal com inflamação coriorretiniana intensa adjacente a uma cicatriz pigmentada preexistente — achado característico ('lesão satélite' junto a uma cicatriz antiga).",
    classificacao:
      "Classificada quanto à origem em congênita (transmissão transplacentária, geralmente bilateral e mais grave) e adquirida (pós-natal, geralmente unilateral). Também classificada quanto à atividade em ativa (foco inflamatório com turvação vítrea sobrejacente) e inativa/cicatricial (lesão pigmentada estável, sem sinais inflamatórios).",
    quadroClinico: [
      "Turvação visual e miodesopsias, por inflamação e turvação do vítreo sobrejacente à lesão retiniana ativa",
      "Fotofobia e, por vezes, dor ocular leve a moderada associada a uveíte anterior concomitante (reação inflamatória de câmara anterior associada, comum na toxoplasmose ocular)",
      "Escotoma correspondente à localização da lesão, mais perceptível quando próxima à mácula ou ao nervo óptico",
      "Lesão focal branco-amarelada, com bordas mal definidas, tipicamente adjacente a uma cicatriz pigmentada antiga ao exame de fundo de olho",
    ],
    diagnostico: [
      "Diagnóstico primariamente clínico, pelo achado característico de lesão coriorretiniana ativa adjacente a uma cicatriz pigmentada preexistente ('lesão satélite'), em contexto epidemiológico compatível",
      "Sorologia para toxoplasmose (IgG positivo) apoia o diagnóstico, mas não confirma atividade ocular por si só, já que a soroprevalência populacional é alta — a interpretação deve ser sempre conjunta ao quadro clínico/fundoscópico",
    ],
    examesComplementares: [
      "Sorologia para toxoplasmose (IgG e IgM)",
      "Investigação para imunossupressão de base (incluindo sorologia para HIV) em casos atípicos, multifocais, bilaterais ou de curso mais grave que o habitual",
      "Angiofluoresceinografia em casos selecionados para melhor delimitar a extensão da lesão ativa",
    ],
    diagnosticoDiferencial: [
      "Outras uveítes posteriores infecciosas (citomegalovírus, sobretudo em imunocomprometidos; sífilis; tuberculose)",
      "Uveíte posterior não infecciosa associada a doença autoimune sistêmica (sarcoidose, doença de Behçet)",
      "Linfoma intraocular (diagnóstico diferencial importante em idosos com uveíte posterior atípica refratária ao tratamento habitual)",
    ],
    tratamento: [
      "Tratamento antiparasitário sistêmico combinado (classicamente pirimetamina, sulfadiazina e ácido folínico, com corticosteroide sistêmico associado quando há lesão que ameace a visão) é a base do tratamento em lesões ativas significativas, sobretudo próximas à mácula, ao nervo óptico ou a vasos retinianos maiores (classes de medicamento ainda sem ficha própria no site)",
      "Lesões pequenas e periféricas, distantes de estruturas visualmente críticas, podem ser observadas sem tratamento sistêmico em pacientes imunocompetentes, dada a tendência a cicatrização espontânea",
      "Corticosteroide tópico e cicloplégico quando há uveíte anterior associada",
    ],
    complicacoes: [
      "Aguda: perda visual quando a lesão ativa acomete diretamente a mácula, o nervo óptico ou vasos retinianos maiores (com risco de oclusão vascular associada)",
      "Crônica: recorrências múltiplas ao longo da vida a partir da mesma cicatriz ou de novas cicatrizes, cada uma com potencial de deixar sequela visual adicional",
    ],
    redFlags: [
      "Lesão coriorretiniana ativa próxima à mácula, ao nervo óptico ou a vasos retinianos calibrosos — risco imediato de perda visual, exigindo tratamento sistêmico sem demora, diferente de lesões periféricas que podem ser apenas observadas",
      "Quadro atípico, multifocal, bilateral ou particularmente grave — investigar imunossupressão de base, incluindo infecção por HIV",
    ],
    prognostico:
      "Bom na maioria das lesões periféricas isoladas, com cicatrização espontânea e impacto visual mínimo. Reservado quando a lesão acomete estruturas centrais (mácula, nervo óptico), com risco de perda visual permanente proporcional à localização e ao número de recorrências ao longo da vida.",
    pontosDeProva: [
      "A lesão ativa adjacente a uma cicatriz pigmentada antiga ('lesão satélite') é o achado fundoscópico clássico e mais cobrado da toxoplasmose ocular reativada",
      "Sorologia IgG positiva para toxoplasmose apenas confirma exposição prévia — não confirma que a lesão ocular ativa observada seja realmente toxoplásmica, dada a alta soroprevalência populacional",
      "Toxoplasmose ocular é a causa infecciosa mais comum de uveíte posterior no mundo, incluindo no Brasil — deve ser a primeira hipótese considerada nesse contexto",
    ],
    casoClinico: {
      vinheta:
        "Homem, 24 anos, previamente hígido, relata miodesopsias e turvação visual no olho esquerdo há 1 semana. Ao exame de fundo de olho, observa-se lesão coriorretiniana branco-amarelada ativa, adjacente a uma cicatriz pigmentada antiga, com turvação vítrea sobrejacente.",
      pergunta: "Qual a hipótese diagnóstica mais provável e a conduta?",
      raciocinio:
        "O achado de lesão coriorretiniana ativa adjacente a uma cicatriz pigmentada preexistente é o padrão clássico de reativação de toxoplasmose ocular, a causa infecciosa mais comum de uveíte posterior.",
      conduta:
        "Solicitar sorologia para toxoplasmose como apoio diagnóstico, avaliar a proximidade da lesão a estruturas centrais (mácula, nervo óptico, vasos maiores) para decidir sobre tratamento antiparasitário sistêmico combinado versus apenas observação em caso de lesão periférica isolada.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Fisiopatologia, achado de lesão satélite e conduta", fonte: "Kanski's Clinical Ophthalmology, 9ª ed." },
      { tema: "Toxoplasmose ocular como causa infecciosa mais comum de uveíte posterior", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "outros-transtornos-coroide",
    nome: "Outros transtornos da coróide",
    sinonimos: ["Coriorretinopatia serosa central", "Nevo de coróide"],
    cid10: "H31",
    especialidade: "Oftalmologia",
    etiologia: "Multifatorial",
    resumo: "Grupo heterogêneo de condições da coróide, das quais a coriorretinopatia serosa central (acúmulo idiopático de líquido sub-retiniano, associado a estresse/corticosteroide) e o nevo de coróide (lesão pigmentada benigna) são as mais relevantes na prática.",
    definicao:
      "Grupo heterogêneo de condições que acometem a coróide (camada vascular entre a retina e a esclera), incluindo a coriorretinopatia serosa central (acúmulo idiopático de líquido sob a retina, por disfunção do epitélio pigmentar), o nevo de coróide (lesão pigmentada benigna, achado incidental comum) e o descolamento de coróide (geralmente secundário a hipotonia ocular pós-cirúrgica ou inflamação).",
    epidemiologia:
      "A coriorretinopatia serosa central acomete predominantemente homens jovens a de meia-idade, classicamente associada a estresse psicológico e ao uso de corticosteroide (sistêmico, tópico ou até inalatório) como principal fator de risco identificável. Nevo de coróide é um achado extremamente comum e geralmente incidental em exames de rotina, com risco muito baixo de transformação maligna para melanoma de coróide.",
    fisiopatologia:
      "Na coriorretinopatia serosa central, há disfunção focal do epitélio pigmentar retiniano, com aumento da permeabilidade da coriocapilar subjacente, levando ao acúmulo de líquido seroso entre o epitélio pigmentar e a retina neurossensorial — o corticosteroide, em qualquer via de administração, é um fator de risco bem estabelecido para desencadear ou agravar episódios. O nevo de coróide resulta da proliferação benigna e estável de melanócitos coroideanos.",
    classificacao:
      "Coriorretinopatia serosa central classificada em aguda (a mais comum, tipicamente autolimitada em meses) e crônica (recorrente ou persistente, com maior risco de dano permanente ao epitélio pigmentar e à visão central). Nevo de coróide acompanhado por características de risco para transformação em melanoma (espessura, presença de líquido sub-retiniano, sintomas, entre outras), usadas para definir a frequência de monitorização.",
    quadroClinico: [
      "Coriorretinopatia serosa central: embaçamento visual central unilateral, metamorfopsia leve e micropsia (objetos parecendo menores) são sintomas relativamente característicos",
      "Nevo de coróide: tipicamente assintomático, achado incidental em fundoscopia de rotina",
      "Descolamento de coróide: geralmente assintomático quando pequeno; quando extenso, pode causar embaçamento visual e, raramente, dor por elevação da pressão intraocular",
    ],
    diagnostico: [
      "Fundoscopia e tomografia de coerência óptica (OCT) para identificar o líquido sub-retiniano na coriorretinopatia serosa central",
      "Investigação ativa de uso de corticosteroide (qualquer via) e de fatores de estresse psicológico na anamnese da coriorretinopatia serosa central",
      "Documentação fotográfica seriada do nevo de coróide para monitorar crescimento ao longo do tempo",
    ],
    examesComplementares: [
      "Tomografia de coerência óptica (OCT) para confirmar e quantificar o líquido sub-retiniano na coriorretinopatia serosa central",
      "Angiofluoresceinografia, mostrando classicamente um ponto de extravasamento focal ('smokestack' ou em mancha) na coriorretinopatia serosa central ativa",
      "Ecografia ocular (modo B) para nevo de coróide, medindo espessura e monitorando crescimento",
    ],
    diagnosticoDiferencial: [
      "Degeneração macular relacionada à idade, forma úmida (mais comum em idosos, com neovascularização coroideana, diferente do simples acúmulo seroso)",
      "Melanoma de coróide (diagnóstico diferencial obrigatório de nevo de coróide com características de risco)",
      "Descolamento de retina exsudativo de outras causas",
    ],
    tratamento: [
      "Coriorretinopatia serosa central aguda: observação é apropriada na maioria dos casos, já que a resolução espontânea ocorre na maioria das vezes em semanas a poucos meses; suspensão do corticosteroide (quando identificado como fator desencadeante) é a medida mais importante",
      "Coriorretinopatia serosa central crônica ou recorrente: fotocoagulação a laser focal ou terapia fotodinâmica podem ser consideradas em casos persistentes",
      "Nevo de coróide: observação com monitorização periódica (fotografia e ecografia seriadas) é a conduta padrão na ausência de características de risco para malignidade",
      "Descolamento de coróide: tratamento dirigido à causa de base (correção de hipotonia, controle de inflamação associada)",
    ],
    complicacoes: [
      "Crônica: atrofia do epitélio pigmentar retiniano e perda visual central permanente em casos recorrentes ou crônicos de coriorretinopatia serosa central não controlados",
    ],
    redFlags: [
      "Nevo de coróide com crescimento documentado, líquido sub-retiniano associado ou sintomas visuais novos — características de risco para transformação em melanoma de coróide, exigindo encaminhamento para oncologia ocular",
      "Coriorretinopatia serosa central recorrente em uso continuado de corticosteroide — reforça a necessidade de suspender ou minimizar o corticosteroide sempre que clinicamente possível",
    ],
    prognostico:
      "Excelente na coriorretinopatia serosa central aguda, com resolução espontânea completa na maioria dos casos. Reservado nas formas crônicas/recorrentes, com risco de dano permanente ao epitélio pigmentar. Nevo de coróide sem características de risco tem prognóstico excelente, com risco de transformação maligna muito baixo ao longo da vida.",
    pontosDeProva: [
      "Corticosteroide (por qualquer via — sistêmica, tópica, inalatória, intranasal) é o fator de risco mais cobrado e clinicamente mais acionável para coriorretinopatia serosa central — sempre perguntar ativamente sobre uso de corticosteroide",
      "Micropsia associada a metamorfopsia em homem jovem com embaçamento visual central unilateral é um padrão clássico sugestivo de coriorretinopatia serosa central",
      "Todo nevo de coróide deve ser documentado e acompanhado, já que características de crescimento ou líquido associado mudam a conduta para investigação de melanoma",
    ],
    casoClinico: {
      vinheta:
        "Homem, 38 anos, em uso de corticosteroide oral para tratamento de uma dermatite, relata embaçamento visual central unilateral e percepção de que os objetos parecem 'menores' com o olho afetado, há 2 semanas, em um período de grande estresse no trabalho.",
      pergunta: "Qual a hipótese diagnóstica mais provável e a conduta?",
      raciocinio:
        "Embaçamento visual central unilateral com micropsia, em homem jovem com uso de corticosteroide e período de estresse significativo (os dois principais fatores de risco reconhecidos), é o quadro clássico de coriorretinopatia serosa central.",
      conduta:
        "Encaminhar para avaliação oftalmológica com tomografia de coerência óptica para confirmar o líquido sub-retiniano, orientar suspensão ou redução do corticosteroide sempre que clinicamente possível em conjunto com o médico prescritor, e manter conduta expectante na maioria dos casos agudos, dada a alta taxa de resolução espontânea.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Fisiopatologia e associação com corticosteroide na coriorretinopatia serosa central", fonte: "Kanski's Clinical Ophthalmology, 9ª ed." },
      { tema: "Conduta de monitorização do nevo de coróide e sinais de risco para melanoma", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "cicatrizes-opacidades-cornea",
    nome: "Cicatrizes e opacidades da córnea",
    sinonimos: ["Leucoma corneano"],
    cid10: "H17",
    especialidade: "Oftalmologia",
    etiologia: "Multifatorial",
    resumo: "Opacificação permanente da córnea, sequela de trauma, infecção (ceratite prévia) ou outras agressões corneanas — causa importante de baixa visual evitável, tratável com transplante de córnea quando significativa.",
    definicao:
      "Opacificação permanente e localizada da córnea, resultante da cicatrização de uma lesão corneana prévia (trauma, ceratite infecciosa, queimadura química ou cirúrgica), com impacto visual proporcional à densidade, extensão e localização da opacidade em relação ao eixo visual.",
    epidemiologia:
      "É uma causa importante de baixa visão e cegueira evitável, sobretudo em regiões com maior incidência de trauma ocular e de ceratites infecciosas não tratadas adequadamente (incluindo a ceratite herpética recorrente, causa clássica de cicatrizes corneanas centrais recorrentes).",
    fisiopatologia:
      "Após uma lesão que rompe a integridade e a organização regular das lamelas de colágeno estromais (infecção, trauma, queimadura), o processo de reparo tecidual resulta em deposição de colágeno desorganizado e fibrose, que dispersa a luz de forma diferente do estroma corneano normal e transparente, causando a opacidade visível clinicamente como uma mancha esbranquiçada (leucoma) ou mais sutil (nébula, mácula, conforme a densidade).",
    classificacao:
      "Classificada pela densidade da opacidade em nébula (opacidade leve e semitransparente), mácula (opacidade mais densa, mas ainda permitindo alguma visualização de detalhes da íris) e leucoma (opacidade densa e esbranquiçada, obscurecendo completamente os detalhes subjacentes da íris). Também classificada pela localização em relação ao eixo visual central, principal determinante do impacto funcional.",
    quadroClinico: [
      "Opacidade corneana visível ao exame externo, de extensão e densidade variáveis",
      "Redução da acuidade visual proporcional à densidade da opacidade e à sua localização em relação ao eixo visual central — opacidades periféricas podem ser assintomáticas",
      "Astigmatismo irregular induzido pela cicatriz, contribuindo para a redução da qualidade visual mesmo quando a opacidade não está exatamente no eixo visual",
      "História pregressa de trauma ocular, ceratite (sobretudo herpética recorrente) ou queimadura química/térmica é o dado de anamnese mais relevante",
    ],
    diagnostico: [
      "Diagnóstico clínico pela biomicroscopia com lâmpada de fenda, caracterizando densidade, extensão e localização da opacidade",
      "Investigação da causa de base (história de trauma, episódios recorrentes de ceratite herpética, queimadura prévia) orienta o risco de recorrência e a estratégia de manejo",
    ],
    examesComplementares: [
      "Topografia corneana para quantificar o astigmatismo irregular associado",
      "Paquimetria e microscopia especular quando há indicação de transplante de córnea, para avaliar espessura e contagem de células endoteliais antes da cirurgia",
    ],
    diagnosticoDiferencial: [
      "Ceratocone (opacidade e afinamento corneano progressivos de causa degenerativa, não cicatricial, ainda que possa haver cicatriz sobreposta em casos avançados)",
      "Distrofias corneanas hereditárias (opacidades bilaterais, simétricas, sem história de trauma/infecção prévia)",
      "Catarata (opacidade do cristalino, não da córnea — diferenciável à biomicroscopia)",
    ],
    tratamento: [
      "Correção óptica com lentes de contato rígidas gás-permeáveis pode melhorar a acuidade visual em opacidades com astigmatismo irregular associado, mascarando parcialmente a irregularidade da superfície",
      "Transplante de córnea (ceratoplastia, penetrante ou lamelar conforme a profundidade do acometimento) é o tratamento definitivo quando a opacidade compromete significativamente a visão e não há resposta satisfatória a correção óptica conservadora",
      "Tratamento e prevenção da causa de base (antiviral supressivo em ceratite herpética recorrente, por exemplo) para reduzir o risco de novas cicatrizes",
    ],
    complicacoes: [
      "Crônica: rejeição do enxerto após transplante de córnea, principal complicação de longo prazo do tratamento cirúrgico definitivo, exigindo monitorização e uso prolongado de corticosteroide tópico",
    ],
    redFlags: [
      "Opacidade corneana central de instalação recente com dor e hiperemia associadas — sugere ceratite ativa em curso, não uma cicatriz estável, e exige avaliação e tratamento da infecção ativa antes de considerar a opacidade como sequela definitiva",
    ],
    prognostico:
      "Variável conforme localização e densidade: opacidades periféricas fora do eixo visual costumam ter impacto funcional mínimo; opacidades centrais densas causam redução visual significativa, mas frequentemente respondem bem ao transplante de córnea quando bem indicado e sem doença de base ativa não controlada.",
    pontosDeProva: [
      "A localização da opacidade em relação ao eixo visual central, mais do que sua extensão absoluta, é o principal determinante do impacto funcional na visão",
      "Ceratite herpética recorrente é uma causa clássica de cicatrizes corneanas centrais recorrentes — a supressão antiviral crônica é uma estratégia para reduzir novas recorrências e cicatrizes adicionais",
      "Transplante de córnea é altamente eficaz para opacidades visualmente significativas, mas a rejeição do enxerto é a principal complicação de longo prazo a monitorar",
    ],
    casoClinico: {
      vinheta:
        "Homem, 34 anos, com história de múltiplos episódios de ceratite herpética no olho direito ao longo dos últimos 10 anos, apresenta opacidade corneana central densa e esbranquiçada, com acuidade visual significativamente reduzida nesse olho.",
      pergunta: "Qual a conduta mais apropriada?",
      raciocinio:
        "Opacidade corneana central densa (leucoma) secundária a episódios recorrentes de ceratite herpética, com impacto visual significativo, é uma indicação clássica de transplante de córnea, já que a opacidade central não responde a tratamento conservador.",
      conduta:
        "Encaminhar para avaliação de transplante de córnea (ceratoplastia), associada à manutenção de terapia antiviral supressiva de longo prazo para reduzir o risco de novas recorrências de ceratite herpética que possam comprometer o enxerto.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Classificação por densidade e fisiopatologia da cicatrização corneana", fonte: "Vaughan & Asbury's General Ophthalmology, 19ª ed." },
      { tema: "Indicação e complicações do transplante de córnea", fonte: "Kanski's Clinical Ophthalmology, 9ª ed." },
    ],
  },
  {
    slug: "ceratocone",
    nome: "Ceratocone e outros transtornos da córnea",
    sinonimos: ["Ectasia corneana"],
    cid10: "H18",
    especialidade: "Oftalmologia",
    etiologia: "Degenerativa",
    resumo: "Ceratocone é uma ectasia corneana progressiva, com afinamento e protrusão cônica da córnea, tipicamente iniciando na adolescência — causa de astigmatismo irregular progressivo e indicação clássica de crosslinking corneano.",
    definicao:
      "Doença corneana progressiva caracterizada por afinamento estromal e protrusão cônica anômala da córnea, geralmente bilateral (embora frequentemente assimétrica), causando astigmatismo irregular progressivo e redução da acuidade visual não totalmente corrigível com óculos.",
    epidemiologia:
      "Tipicamente inicia-se na adolescência ou início da vida adulta, com progressão ao longo de anos até estabilizar geralmente por volta da terceira ou quarta década de vida. Associado a coçar ocular crônico/vigoroso, atopia e certas condições genéticas (como síndrome de Down), além de história familiar em uma parcela dos casos.",
    fisiopatologia:
      "Há afinamento progressivo do estroma corneano por alteração na organização e nas propriedades biomecânicas das fibras de colágeno, cuja causa exata permanece incompletamente compreendida, mas envolve provavelmente fatores genéticos predisponentes combinados a fatores mecânicos (o coçar ocular crônico é fortemente associado e considerado um fator agravante/desencadeante importante). O afinamento progressivo permite que a pressão intraocular normal deforme a córnea em uma configuração cônica irregular, gerando astigmatismo irregular crescente.",
    classificacao:
      "Classificado por gravidade/estágio conforme parâmetros topográficos e paquimétricos (curvatura corneana, espessura mínima), de formas leves e subclínicas a formas avançadas com afinamento extremo e cicatrizes centrais. Hidropsia aguda é uma complicação classificada à parte, correspondendo à ruptura aguda da membrana de Descemet em casos avançados.",
    quadroClinico: [
      "Piora progressiva da acuidade visual ao longo de meses a anos, tipicamente iniciando na adolescência",
      "Astigmatismo irregular de correção difícil com óculos, frequentemente necessitando trocas frequentes de grau",
      "Fotofobia e halos ao redor de luzes",
      "Coçar ocular crônico é um achado frequente na história e um fator de risco reconhecido para progressão",
      "Hidropsia aguda (complicação): dor ocular súbita, hiperemia intensa e opacificação corneana abrupta, por ruptura aguda da membrana de Descemet",
    ],
    diagnostico: [
      "Topografia/tomografia corneana computadorizada é o exame central para diagnóstico e estadiamento, identificando o padrão característico de curvatura irregular e afinamento focal",
      "Retinoscopia com reflexo em 'tesoura' é um achado clássico sugestivo ao exame, embora menos sensível que a topografia computadorizada",
    ],
    examesComplementares: [
      "Topografia/tomografia corneana computadorizada (Scheimpflug), exame de escolha para diagnóstico, estadiamento e monitorização de progressão",
      "Paquimetria corneana para quantificar o afinamento estromal, relevante para indicação de crosslinking",
    ],
    diagnosticoDiferencial: [
      "Astigmatismo regular comum (sem o padrão de irregularidade e progressão característico do ceratocone à topografia)",
      "Degeneração marginal pelúcida (variante relacionada, com afinamento em localização inferior periférica distinta)",
      "Ectasia corneana pós-cirurgia refrativa (história de cirurgia a laser prévia, mecanismo relacionado mas etiologia iatrogênica)",
    ],
    tratamento: [
      "Correção óptica com óculos nas fases iniciais; lentes de contato rígidas gás-permeáveis (ou lentes esclerais) nas fases intermediárias a avançadas, quando os óculos não corrigem satisfatoriamente o astigmatismo irregular",
      "Crosslinking corneano (fortalecimento das ligações do colágeno estromal por aplicação de riboflavina e luz ultravioleta) é o tratamento indicado para deter a progressão documentada da doença, sendo mais eficaz quanto mais precocemente realizado",
      "Transplante de córnea (ceratoplastia) reservado a casos avançados com afinamento extremo, cicatriz central significativa ou intolerância a lentes de contato",
      "Orientação enfática para cessar o hábito de coçar os olhos, medida simples com impacto real na progressão",
    ],
    complicacoes: [
      "Aguda: hidropsia aguda, com edema corneano súbito e dor, que geralmente resolve com cicatrização em semanas a meses, mas pode deixar opacidade residual",
      "Crônica: progressão até necessidade de transplante de córnea em uma parcela dos casos não estabilizados a tempo com crosslinking",
    ],
    redFlags: [
      "Adolescente ou adulto jovem com troca frequente e progressiva de grau de óculos, especialmente com astigmatismo de difícil correção — investigar ceratocone com topografia corneana antes de simplesmente aumentar o grau repetidamente",
      "Dor ocular súbita e opacificação corneana abrupta em paciente com ceratocone conhecido — hidropsia aguda, geralmente manejada de forma conservadora, mas que exige avaliação oftalmológica para confirmar o diagnóstico e excluir outras causas",
    ],
    prognostico:
      "Variável: a doença tende a estabilizar espontaneamente por volta da terceira/quarta década de vida na maioria dos pacientes. Com diagnóstico precoce e crosslinking oportuno, a progressão pode ser efetivamente detida na maior parte dos casos, evitando a necessidade de transplante de córnea no futuro.",
    pontosDeProva: [
      "Troca frequente e progressiva de grau de óculos em adolescente, sobretudo com astigmatismo de correção difícil, deve levantar suspeita ativa de ceratocone",
      "Coçar ocular crônico é um fator de risco modificável importante para progressão do ceratocone — orientação para cessar esse hábito faz parte do tratamento",
      "Crosslinking corneano é indicado para deter a progressão (não para reverter o afinamento já estabelecido) — quanto mais precoce, maior a eficácia em preservar a córnea sem necessidade de transplante",
    ],
    casoClinico: {
      vinheta:
        "Adolescente, 16 anos, com hábito de coçar os olhos frequentemente por prurido alérgico, relata necessidade de trocar o grau dos óculos três vezes no último ano, com astigmatismo de difícil correção relatado pelo oftalmologista anterior.",
      pergunta: "Qual a hipótese diagnóstica mais provável e a conduta?",
      raciocinio:
        "Troca frequente e progressiva de grau em adolescente, com astigmatismo de correção difícil e hábito de coçar os olhos (fator de risco reconhecido), é altamente sugestiva de ceratocone.",
      conduta:
        "Solicitar topografia/tomografia corneana computadorizada para confirmar o diagnóstico e estadiar a doença; se houver progressão documentada, indicar crosslinking corneano para deter a evolução, além de orientar enfaticamente a cessação do hábito de coçar os olhos.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Fisiopatologia, fatores de risco e história natural", fonte: "Kanski's Clinical Ophthalmology, 9ª ed." },
      { tema: "Indicação e mecanismo do crosslinking corneano", fonte: "American Academy of Ophthalmology, Preferred Practice Pattern: Corneal Ectasia" },
    ],
  },
  {
    slug: "hifema-transtornos-iris",
    nome: "Hifema e outros transtornos da íris e do corpo ciliar",
    sinonimos: ["Hemorragia de câmara anterior"],
    cid10: "H21",
    especialidade: "Oftalmologia",
    etiologia: "Traumática",
    resumo: "Hifema é o acúmulo de sangue na câmara anterior do olho, mais comumente por trauma contuso — requer monitorização ativa da pressão intraocular e do ressangramento, que pode ser mais grave que o sangramento inicial.",
    definicao:
      "Hifema é a presença de sangue na câmara anterior do olho, visível como um nível líquido entre o sangue (que se deposita por gravidade) e o humor aquoso, mais comumente resultante de trauma ocular contuso que rompe vasos da íris ou do corpo ciliar.",
    epidemiologia:
      "Mais comum em crianças e adultos jovens, geralmente associado a trauma esportivo ou acidental. Hifema espontâneo (sem trauma) é mais raro e levanta suspeita de neovascularização da íris, discrasia sanguínea ou uso de anticoagulante.",
    fisiopatologia:
      "O trauma contuso ocular causa uma onda de compressão e descompressão rápida do globo ocular, rompendo vasos sanguíneos da íris ou do corpo ciliar na base do ângulo iridocorneano, com sangramento para a câmara anterior. O ressangramento (mais comum entre o segundo e o quinto dia após o trauma inicial) ocorre pela lise e retração do coágulo inicial antes da cicatrização vascular completa, e tende a ser mais volumoso e de pior prognóstico que o sangramento inicial.",
    classificacao:
      "Classificado por grau conforme a proporção da câmara anterior preenchida por sangue, de microscópico (células circulantes sem nível visível) a grau IV/'bola preta' (câmara anterior totalmente preenchida por sangue coagulado escurecido), sendo o risco de complicações (glaucoma secundário, impregnação hemática da córnea) proporcional ao grau e à duração do hifema.",
    quadroClinico: [
      "Nível de sangue visível na câmara anterior, mais evidente com o paciente sentado (deposição por gravidade)",
      "Dor ocular e fotofobia, de intensidade proporcional ao trauma associado e à elevação da pressão intraocular",
      "Diminuição da acuidade visual proporcional ao grau do hifema",
      "História de trauma ocular contuso recente na maioria dos casos",
    ],
    diagnostico: [
      "Diagnóstico clínico direto pela visualização do nível de sangue na câmara anterior à lâmpada de fenda",
      "Avaliação cuidadosa para excluir lesões oculares associadas mais graves (ruptura do globo ocular, luxação do cristalino, lesões do segmento posterior), que podem estar mascaradas pelo próprio hifema",
    ],
    examesComplementares: [
      "Tonometria seriada (medida repetida da pressão intraocular), essencial no acompanhamento, pelo risco de elevação da pressão pela obstrução do escoamento do humor aquoso pelo sangue",
      "Investigação para hemoglobinopatia falciforme em pacientes de risco epidemiológico, já que hemácias falcizadas obstruem mais facilmente a malha trabecular, aumentando o risco de complicações mesmo com hifemas pequenos",
      "Ultrassonografia ocular quando a opacidade do hifema impede a avaliação direta do segmento posterior, para excluir lesões associadas",
    ],
    diagnosticoDiferencial: [
      "Hipópio (nível de pus, não sangue, na câmara anterior — de causa infecciosa/inflamatória, não traumática)",
      "Hifema espontâneo por neovascularização da íris (rubeosis iridis, associada a isquemia retiniana crônica como na retinopatia diabética proliferativa ou em oclusões vasculares)",
      "Discrasias sanguíneas ou uso de anticoagulante como causa de hifema espontâneo ou desproporcional ao trauma relatado",
    ],
    tratamento: [
      "Repouso relativo com elevação da cabeceira, para favorecer a deposição do sangue por gravidade e reduzir o risco de ressangramento",
      "Proteção ocular física (uso de protetor rígido, sem oclusão compressiva) para evitar novo trauma durante a fase de cicatrização vascular",
      "Monitorização seriada da pressão intraocular, com tratamento hipotensor ocular tópico ou sistêmico se houver elevação significativa",
      "Cicloplégico tópico para conforto e redução do risco de sinéquias; corticosteroide tópico em casos selecionados para reduzir inflamação associada",
      "Evacuação cirúrgica do hifema reservada a casos com pressão intraocular refratária ao tratamento clínico, impregnação hemática corneana iminente, ou hifema total persistente por vários dias",
    ],
    complicacoes: [
      "Aguda: ressangramento (mais comum entre o segundo e o quinto dia), tipicamente mais volumoso e de pior prognóstico que o sangramento inicial; elevação aguda da pressão intraocular por obstrução do escoamento do humor aquoso",
      "Crônica: impregnação hemática da córnea (depósito de produtos de degradação do sangue no estroma corneano, causando opacidade permanente) em hifemas volumosos ou de longa duração associados a pressão intraocular elevada persistente",
    ],
    redFlags: [
      "Elevação importante da pressão intraocular associada a hifema, sobretudo em paciente com hemoglobinopatia falciforme (ou traço falciforme) — risco maior de dano ao nervo óptico mesmo com pressões moderadamente elevadas, exigindo manejo mais agressivo",
      "Ressangramento entre o segundo e o quinto dia após o trauma inicial — geralmente mais grave que o hifema inicial, com maior risco de complicações",
      "Hifema espontâneo, sem história de trauma — investigar causa sistêmica (discrasia sanguínea, uso de anticoagulante, neovascularização ocular de base)",
    ],
    prognostico:
      "Bom na maioria dos hifemas traumáticos de pequeno a moderado volume, com resolução completa em dias a poucas semanas e sem sequelas visuais quando não há complicações. Reservado em hifemas volumosos, recorrentes (ressangramento) ou associados a pressão intraocular persistentemente elevada, com risco de dano ao nervo óptico e impregnação hemática corneana permanente.",
    pontosDeProva: [
      "O ressangramento (entre o 2º e o 5º dia após o trauma) tende a ser mais grave que o sangramento inicial — é o período de maior vigilância no acompanhamento do hifema",
      "Pacientes com hemoglobinopatia falciforme (mesmo traço falciforme) têm maior risco de dano ao nervo óptico com hifema, mesmo com elevações modestas da pressão intraocular — investigação ativa recomendada em populações de risco",
      "Hifema espontâneo, sem trauma, deve sempre levantar suspeita de causa sistêmica ou de neovascularização ocular de base, não ser assumido como traumático por padrão",
    ],
    casoClinico: {
      vinheta:
        "Menino, 12 anos, atingido por uma bola durante jogo de futebol, apresenta dor ocular, fotofobia e nível de sangue visível na câmara anterior do olho direito ao exame.",
      pergunta: "Qual a conduta inicial e o principal risco a monitorar nos dias seguintes?",
      raciocinio:
        "O quadro é compatível com hifema traumático por trauma contuso ocular direto. O principal risco nos dias seguintes é o ressangramento, que classicamente ocorre entre o segundo e o quinto dia após o trauma e tende a ser mais grave que o episódio inicial.",
      conduta:
        "Orientar repouso relativo com elevação da cabeceira, proteção ocular física, e monitorização seriada da pressão intraocular nos dias seguintes, com atenção especial ao período de maior risco de ressangramento (2º ao 5º dia).",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Fisiopatologia, classificação por grau e risco de ressangramento", fonte: "Kanski's Clinical Ophthalmology, 9ª ed." },
      { tema: "Maior risco de dano ao nervo óptico em portadores de hemoglobinopatia falciforme", fonte: "American Academy of Ophthalmology, Preferred Practice Pattern: Traumatic Hyphema" },
    ],
  },
  {
    slug: "hemorragia-vitrea",
    nome: "Hemorragia vítrea e outros transtornos do humor vítreo",
    sinonimos: ["Hemovítreo"],
    cid10: "H43",
    especialidade: "Oftalmologia",
    etiologia: "Multifatorial",
    resumo: "Extravasamento de sangue para a cavidade vítrea, mais comumente por retinopatia diabética proliferativa, descolamento do vítreo posterior com ruptura retiniana associada, ou trauma — causa comum de perda visual súbita indolor.",
    definicao:
      "Presença de sangue na cavidade vítrea, resultante de sangramento de vasos retinianos anômalos (neovascularização), ruptura de vaso retiniano normal associada a tração vítreo-retiniana, ou trauma ocular, causando graus variáveis de obscurecimento visual conforme a quantidade de sangue.",
    epidemiologia:
      "A retinopatia diabética proliferativa é a causa mais comum de hemorragia vítrea em adultos de meia-idade; em pacientes mais velhos sem diabetes, o descolamento do vítreo posterior com ruptura retiniana associada é uma causa importante; em jovens, o trauma é a causa predominante.",
    fisiopatologia:
      "Na retinopatia diabética proliferativa, vasos neoformados anômalos e friáveis na superfície retiniana rompem-se facilmente, sangrando para a cavidade vítrea. No descolamento do vítreo posterior, a tração sobre um vaso retiniano normal durante o processo de separação do vítreo da retina pode causar sua ruptura e sangramento, frequentemente associado a uma ruptura retiniana concomitante que precisa ser ativamente investigada. Em trauma, o sangramento pode originar-se de qualquer estrutura vascular intraocular lesada pelo impacto.",
    classificacao:
      "Não há um sistema de estadiamento formal amplamente usado; a hemorragia vítrea é descrita pela densidade/extensão (leve, com visualização parcial do fundo de olho, a densa, impedindo completamente a visualização) e sempre investigada quanto à causa de base subjacente, que determina a conduta.",
    quadroClinico: [
      "Miodesopsias de início súbito, descritas classicamente como 'chuva de fuligem' ou pontos escuros múltiplos",
      "Perda visual súbita e indolor, de magnitude proporcional à densidade do sangramento — de leve embaçamento a perda visual profunda em hemorragias densas",
      "Ausência de dor ou hiperemia significativa na maioria dos casos, exceto quando há trauma associado",
    ],
    diagnostico: [
      "Fundoscopia com pupila dilatada para tentar visualizar a origem do sangramento e identificar a causa de base",
      "Ultrassonografia ocular (modo B) quando a densidade do sangramento impede a visualização direta da retina, essencial para excluir descolamento de retina associado, que muda completamente a urgência do encaminhamento",
    ],
    examesComplementares: [
      "Ultrassonografia ocular (modo B), exame-chave quando a hemorragia impede visualização direta, para excluir descolamento de retina e orientar a urgência da intervenção",
      "Investigação para retinopatia diabética (glicemia, hemoglobina glicada) quando a causa não é evidente ou não há diagnóstico prévio de diabetes",
    ],
    diagnosticoDiferencial: [
      "Descolamento de retina isolado sem hemorragia significativa (miodesopsias também presentes, mas com defeito de campo visual em cortina mais característico)",
      "Uveíte posterior com turvação vítrea inflamatória (sem o padrão de 'chuva de fuligem' hemorrágico típico)",
      "Enxaqueca com aura (fotopsias bilaterais transitórias, sem miodesopsias persistentes nem achado à fundoscopia)",
    ],
    tratamento: [
      "Observação com elevação da cabeceira (para favorecer a sedimentação do sangue por gravidade, melhorando temporariamente a visualização) é apropriada em hemorragias leves a moderadas sem evidência de descolamento de retina associado, aguardando reabsorção espontânea ao longo de semanas",
      "Tratamento da causa de base é essencial: fotocoagulação a laser panretiniana ou injeção intravítrea de anti-VEGF na retinopatia diabética proliferativa; reparo da ruptura retiniana quando identificada",
      "Vitrectomia indicada em hemorragia densa e persistente sem sinais de reabsorção espontânea após período de observação, ou quando há suspeita de descolamento de retina associado que precise de correção cirúrgica direta",
    ],
    complicacoes: [
      "Aguda: descolamento de retina associado não identificado a tempo pela dificuldade de visualização direta através do sangue — reforça a importância da ultrassonografia quando a fundoscopia é inconclusiva",
      "Crônica: hemossiderose ocular (toxicidade tecidual pelo depósito prolongado de produtos de degradação do sangue) em hemorragias densas e persistentes por longos períodos sem reabsorção ou intervenção",
    ],
    redFlags: [
      "Miodesopsias súbitas tipo 'chuva de fuligem' associadas a fotopsias — investigar ativamente ruptura ou descolamento de retina associado com ultrassonografia, mesmo quando a fundoscopia direta é inconclusiva",
      "Ausência de reabsorção espontânea após período razoável de observação — reavaliar a necessidade de vitrectomia, sobretudo pelo risco de descolamento de retina oculto pela hemorragia",
    ],
    prognostico:
      "Variável conforme a causa de base: hemorragias por descolamento do vítreo posterior isolado (sem ruptura retiniana) geralmente reabsorvem espontaneamente com bom prognóstico visual; hemorragias por retinopatia diabética proliferativa têm prognóstico dependente do controle da doença de base e da resposta ao tratamento com laser/anti-VEGF; hemorragias associadas a descolamento de retina não identificado e tratado a tempo têm prognóstico reservado.",
    pontosDeProva: [
      "Toda hemorragia vítrea que impede a visualização direta da retina exige ultrassonografia ocular para excluir descolamento de retina associado antes de simplesmente observar aguardando reabsorção espontânea",
      "Retinopatia diabética proliferativa é a causa mais comum de hemorragia vítrea em adultos de meia-idade — sempre investigar diabetes não diagnosticado quando a causa não é evidente",
      "'Chuva de fuligem' é a descrição clássica cobrada para o sintoma de miodesopsias da hemorragia vítrea aguda",
    ],
    casoClinico: {
      vinheta:
        "Homem, 55 anos, diabético de longa data com mau controle glicêmico, relata início súbito de múltiplos pontos escuros móveis na visão do olho direito, descritos como uma 'chuva de fuligem', sem dor associada.",
      pergunta: "Qual a hipótese diagnóstica mais provável e a conduta?",
      raciocinio:
        "Miodesopsias súbitas em 'chuva de fuligem', sem dor, em paciente diabético de longa data com mau controle, sugerem fortemente hemorragia vítrea secundária a retinopatia diabética proliferativa, a causa mais comum nessa faixa etária e contexto clínico.",
      conduta:
        "Encaminhamento oftalmológico para fundoscopia dilatada e, se a hemorragia impedir visualização adequada, ultrassonografia ocular para excluir descolamento de retina associado; uma vez confirmada a causa, iniciar tratamento da retinopatia diabética proliferativa de base (fotocoagulação a laser panretiniana ou anti-VEGF) além do controle glicêmico rigoroso.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Causas mais comuns por faixa etária e conduta diagnóstica", fonte: "Kanski's Clinical Ophthalmology, 9ª ed." },
      { tema: "Papel da ultrassonografia ocular na exclusão de descolamento de retina associado", fonte: "American Academy of Ophthalmology, Preferred Practice Pattern: Posterior Vitreous Detachment, Retinal Breaks, and Lattice Degeneration" },
    ],
  },
  {
    slug: "outras-cataratas",
    nome: "Outras cataratas (congênita, secundária e traumática)",
    sinonimos: [],
    cid10: "H26",
    especialidade: "Oftalmologia",
    etiologia: "Multifatorial",
    resumo: "Cataratas não relacionadas à idade — congênita (presente ao nascimento ou na infância), secundária (a outra doença ocular ou uso de corticosteroide) e traumática — com implicações diagnósticas e de urgência distintas da catarata senil.",
    definicao:
      "Opacificação do cristalino de causa distinta do envelhecimento fisiológico: catarata congênita (presente ao nascimento ou desenvolvida na infância precoce), catarata secundária (a doenças oculares como uveíte crônica, ou ao uso prolongado de corticosteroide, sistêmico ou tópico) e catarata traumática (por trauma ocular contuso ou penetrante).",
    epidemiologia:
      "Catarata congênita é uma causa importante de cegueira infantil evitável, com etiologias variando entre genética (hereditária), infecciosa (infecções congênitas do grupo TORCH, sobretudo rubéola congênita) e metabólica (galactosemia). Catarata secundária ao uso de corticosteroide é dose e tempo-dependente, ocorrendo com qualquer via de administração prolongada. Catarata traumática pode ocorrer em qualquer idade após trauma ocular significativo.",
    fisiopatologia:
      "Na catarata congênita, a opacificação resulta de alteração no desenvolvimento embrionário/pós-natal precoce do cristalino, por mutação genética, infecção intrauterina ou distúrbio metabólico que compromete a transparência das fibras cristalinianas em formação. Na catarata por corticosteroide, o mecanismo mais aceito envolve alteração do metabolismo das proteínas cristalinianas, favorecendo tipicamente a opacificação subcapsular posterior. Na catarata traumática, a ruptura direta da cápsula do cristalino (trauma penetrante) ou a concussão do tecido cristaliniano (trauma contuso) desencadeia opacificação, que pode ser imediata ou de instalação mais tardia.",
    classificacao:
      "Classificada por causa em congênita (subdividida por etiologia: genética, infecciosa/TORCH, metabólica), secundária (a corticosteroide, uveíte crônica, diabetes) e traumática (por trauma penetrante ou contuso). A catarata congênita também é classificada pela morfologia (nuclear, polar, lamelar), relevante para o risco de ambliopia associado.",
    quadroClinico: [
      "Catarata congênita: leucocoria (reflexo pupilar branco, em vez do reflexo vermelho normal) é o achado de alerta mais importante, por vezes notado pelos pais em fotografias com flash",
      "Catarata secundária a corticosteroide: embaçamento visual progressivo em paciente com uso prolongado de corticosteroide identificável na história",
      "Catarata traumática: opacificação do cristalino de instalação aguda ou subaguda após trauma ocular relatado, podendo estar associada a outras lesões oculares traumáticas",
    ],
    diagnostico: [
      "Teste do reflexo vermelho (teste do olhinho) é o rastreio universal para catarata congênita, devendo ser realizado em todo recém-nascido antes da alta da maternidade",
      "Biomicroscopia com lâmpada de fenda para caracterizar o tipo e a localização da opacidade em qualquer forma de catarata",
    ],
    examesComplementares: [
      "Investigação para infecções congênitas (sorologias TORCH) e triagem metabólica (galactosemia) em catarata congênita, sobretudo quando bilateral",
      "Biometria ocular no pré-operatório para cálculo da lente intraocular, com particularidades técnicas na catarata congênita pelo crescimento ocular ainda em curso",
    ],
    diagnosticoDiferencial: [
      "Retinoblastoma (principal diagnóstico diferencial de leucocoria na infância — sempre deve ser ativamente excluído, dada a gravidade)",
      "Persistência de vasculatura fetal primária (outra causa de leucocoria congênita, de mecanismo distinto)",
      "Catarata senil (quando a catarata secundária ocorre em paciente idoso, a distinção etiológica depende da história de exposição a corticosteroide ou doença ocular associada)",
    ],
    tratamento: [
      "Catarata congênita significativa: cirurgia precoce (idealmente nas primeiras semanas de vida em casos bilaterais densos) é essencial para prevenir ambliopia por privação, seguida de reabilitação visual (correção óptica e, frequentemente, terapia de oclusão)",
      "Catarata secundária a corticosteroide: minimizar ou suspender o corticosteroide quando clinicamente possível; cirurgia de facoemulsificação quando a catarata compromete significativamente a função visual, de forma semelhante à catarata senil",
      "Catarata traumática: avaliação cuidadosa de lesões oculares associadas antes de definir o momento cirúrgico; cirurgia frequentemente mais complexa pela possível instabilidade zonular/capsular associada ao trauma",
    ],
    complicacoes: [
      "Aguda: glaucoma secundário em catarata traumática com ruptura capsular extensa",
      "Crônica: ambliopia por privação visual irreversível em catarata congênita não tratada dentro da janela crítica do desenvolvimento visual — a complicação mais grave e evitável dessa forma específica",
    ],
    redFlags: [
      "Leucocoria em lactente — sempre investigar ativamente retinoblastoma antes de assumir catarata congênita isolada, dada a gravidade potencial do diagnóstico diferencial",
      "Catarata congênita bilateral densa não operada dentro das primeiras semanas a poucos meses de vida — janela crítica para prevenir ambliopia por privação, com impacto visual permanente se perdida",
    ],
    prognostico:
      "Excelente na catarata congênita unilateral ou bilateral operada precocemente e com reabilitação visual adequada, ainda que exigindo acompanhamento intensivo para tratamento da ambliopia associada. Bom na catarata secundária e traumática após cirurgia, dependendo da extensão de lesões oculares associadas no caso traumático.",
    pontosDeProva: [
      "Leucocoria em lactente exige exclusão ativa de retinoblastoma antes de qualquer outra hipótese, incluindo catarata congênita",
      "O teste do reflexo vermelho (teste do olhinho) é o rastreio universal obrigatório para catarata congênita em todo recém-nascido — não depende de sintomas visuais relatados, já que o lactente não consegue relatá-los",
      "Catarata congênita bilateral densa tem janela cirúrgica muito estreita (semanas) para evitar ambliopia por privação — diferente da urgência da catarata senil, que é eletiva",
    ],
    casoClinico: {
      vinheta:
        "Recém-nascido de 6 semanas é levado ao pediatra pelos pais, que notaram um reflexo esbranquiçado na pupila direita em fotos tiradas com flash.",
      pergunta: "Qual a principal preocupação diagnóstica e a conduta imediata?",
      raciocinio:
        "Leucocoria em lactente é um achado de alerta que exige avaliação oftalmológica urgente, com dois principais diagnósticos diferenciais a excluir: catarata congênita e retinoblastoma, sendo este último o mais grave e que não pode ser negligenciado.",
      conduta:
        "Encaminhamento oftalmológico de urgência para exame com dilatação pupilar, avaliando a necessidade de exames de imagem para excluir retinoblastoma; se confirmada catarata congênita densa bilateral, planejar cirurgia precoce para prevenir ambliopia por privação.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Classificação etiológica e importância do teste do reflexo vermelho", fonte: "Vaughan & Asbury's General Ophthalmology, 19ª ed." },
      { tema: "Janela cirúrgica crítica na catarata congênita e risco de ambliopia por privação", fonte: "American Academy of Ophthalmology, Preferred Practice Pattern: Pediatric Cataract" },
    ],
  },
  {
    slug: "afacia-subluxacao-cristalino",
    nome: "Afacia e subluxação do cristalino",
    sinonimos: ["Luxação do cristalino", "Ectopia lentis"],
    cid10: "H27",
    especialidade: "Oftalmologia",
    etiologia: "Multifatorial",
    resumo: "Afacia é a ausência do cristalino (geralmente pós-cirúrgica); subluxação/luxação é o deslocamento do cristalino de sua posição normal — achado com associações sistêmicas importantes, sobretudo síndrome de Marfan.",
    definicao:
      "Afacia é a ausência do cristalino do olho, mais comumente após remoção cirúrgica (extração de catarata sem implante de lente intraocular) ou, mais raramente, por luxação completa/trauma. Subluxação do cristalino (ectopia lentis) é o deslocamento parcial do cristalino de sua posição anatômica normal por comprometimento das fibras zonulares que o sustentam; luxação é o deslocamento completo.",
    epidemiologia:
      "Afacia hoje é rara como condição isolada persistente, já que a maioria das cirurgias de catarata inclui implante de lente intraocular. Subluxação/luxação do cristalino está classicamente associada a síndromes genéticas do tecido conjuntivo (síndrome de Marfan, síndrome de Weill-Marchesani, homocistinúria), além de trauma ocular contuso como causa adquirida importante.",
    fisiopatologia:
      "Na subluxação/luxação, há comprometimento estrutural das fibras zonulares (que suspendem o cristalino ao corpo ciliar), seja por fragilidade intrínseca do tecido conjuntivo (nas síndromes genéticas associadas, como mutações da fibrilina-1 na síndrome de Marfan) ou por ruptura traumática direta das fibras zonulares em trauma contuso significativo. Na afacia pós-cirúrgica, a ausência do cristalino elimina uma fonte importante de poder refrativo do olho, exigindo correção óptica compensatória significativa.",
    classificacao:
      "Subluxação/luxação classificada por grau de deslocamento (subluxação leve a luxação completa, inclusive para a câmara anterior ou para a cavidade vítrea) e por causa (genética/sindrômica vs. traumática adquirida). Afacia classificada simplesmente pela presença ou ausência de suporte capsular residual, relevante para a técnica de correção óptica secundária possível.",
    quadroClinico: [
      "Afacia: hipermetropia importante não corrigida (o olho perde grande parte de seu poder refrativo sem o cristalino), com baixa acuidade visual significativa até a correção óptica adequada",
      "Subluxação do cristalino: astigmatismo irregular flutuante, diplopia monocular, e por vezes visualização direta da borda do cristalino deslocado (iridodonese — tremor da íris à movimentação ocular, por perda de suporte)",
      "Luxação completa para a câmara vítrea: pode ser assintomática por período prolongado, ou causar inflamação e glaucoma secundário",
    ],
    diagnostico: [
      "Biomicroscopia com lâmpada de fenda e pupila dilatada para visualizar a posição do cristalino e o grau de deslocamento",
      "Investigação sistêmica ativa (avaliação de estatura, envergadura, achados cardiovasculares) quando há subluxação bilateral ou em paciente jovem, buscando síndrome de Marfan ou outras causas genéticas",
    ],
    examesComplementares: [
      "Biomicroscopia com pupila dilatada para avaliar zônulas e posição do cristalino",
      "Ecocardiograma e avaliação cardiovascular quando há suspeita de síndrome de Marfan, dado o risco de complicações aórticas potencialmente fatais associadas",
      "Dosagem de homocisteína quando há suspeita de homocistinúria (subluxação tipicamente inferior, diferente do padrão superior mais típico da síndrome de Marfan)",
    ],
    diagnosticoDiferencial: [
      "Catarata simples sem deslocamento associado (opacidade sem comprometimento zonular)",
      "Coloboma de cristalino (defeito congênito localizado, não deslocamento verdadeiro)",
    ],
    tratamento: [
      "Afacia: correção óptica com óculos de alto poder, lentes de contato, ou implante secundário de lente intraocular (fixada à esclera ou à íris quando não há suporte capsular adequado)",
      "Subluxação leve, assintomática: observação e correção óptica conservadora podem ser suficientes",
      "Subluxação significativa/luxação com comprometimento visual importante: remoção cirúrgica do cristalino deslocado com implante de lente intraocular por técnica especializada (fixação escleral ou iriana)",
      "Investigação e manejo conjunto da doença sistêmica de base quando identificada (acompanhamento cardiovascular regular na síndrome de Marfan, por exemplo)",
    ],
    complicacoes: [
      "Aguda: glaucoma agudo por bloqueio pupilar quando o cristalino luxado obstrui a passagem do humor aquoso",
      "Crônica: uveíte crônica e dano endotelial corneano por contato prolongado do cristalino luxado com estruturas adjacentes",
    ],
    redFlags: [
      "Subluxação bilateral do cristalino em paciente jovem, magro e alto — investigar síndrome de Marfan, dado o risco associado de dissecção/aneurisma de aorta, uma condição sistêmica potencialmente fatal que exige acompanhamento cardiovascular ativo",
      "Luxação do cristalino para a câmara anterior com dor e hiperemia associadas — risco de glaucoma agudo por bloqueio pupilar, exigindo intervenção oftalmológica urgente",
    ],
    prognostico:
      "Bom na maioria dos casos com correção óptica ou cirúrgica adequada. Nos casos associados a síndromes sistêmicas (Marfan, homocistinúria), o prognóstico visual depende do manejo oftalmológico, mas o prognóstico geral do paciente depende criticamente do diagnóstico e acompanhamento da doença sistêmica de base.",
    pontosDeProva: [
      "Subluxação do cristalino em paciente jovem deve sempre levantar suspeita de síndrome de Marfan — a subluxação típica é superior e temporal na síndrome de Marfan, enquanto é tipicamente inferior na homocistinúria, uma distinção clássica de prova",
      "O achado ocular pode ser a primeira manifestação identificada de uma síndrome sistêmica grave (Marfan) — reforça a importância de investigação sistêmica sempre que subluxação de cristalino for identificada, especialmente em jovens",
    ],
    casoClinico: {
      vinheta:
        "Adolescente, 15 anos, alto e magro, com envergadura dos braços desproporcionalmente maior que a altura, é encontrado com subluxação bilateral do cristalino em direção súpero-temporal durante exame oftalmológico de rotina.",
      pergunta: "Qual a principal suspeita diagnóstica sistêmica e a conduta?",
      raciocinio:
        "Subluxação bilateral do cristalino em direção súpero-temporal, associada a hábito corporal marfanoide (alto, magro, envergadura aumentada), é um achado clássico de síndrome de Marfan, uma doença do tecido conjuntivo com risco sistêmico importante, sobretudo cardiovascular.",
      conduta:
        "Encaminhamento para avaliação cardiológica com ecocardiograma para investigar dilatação/dissecção de aorta, além de avaliação genética, dado o risco potencialmente fatal associado à síndrome de Marfan se não identificada e acompanhada adequadamente.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Associações sistêmicas (Marfan, homocistinúria) e padrão de deslocamento", fonte: "Kanski's Clinical Ophthalmology, 9ª ed." },
      { tema: "Risco cardiovascular associado à síndrome de Marfan", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "neurite-optica",
    nome: "Neurite óptica",
    sinonimos: [],
    cid10: "H46",
    especialidade: "Oftalmologia",
    etiologia: "Autoimune",
    resumo: "Inflamação desmielinizante do nervo óptico, causa importante de perda visual súbita em adultos jovens — fortemente associada à esclerose múltipla, com implicações prognósticas relevantes.",
    definicao:
      "Inflamação desmielinizante do nervo óptico, causando perda visual súbita, tipicamente unilateral, associada a dor à movimentação ocular, mais comum em adultos jovens e fortemente associada à esclerose múltipla como primeira manifestação ou evento subsequente da doença.",
    epidemiologia:
      "Mais comum em mulheres jovens (entre 20 e 40 anos). É frequentemente a manifestação inicial da esclerose múltipla, e o risco de conversão para esclerose múltipla clinicamente definida após um episódio de neurite óptica isolada aumenta substancialmente na presença de lesões de substância branca compatíveis à ressonância magnética cerebral.",
    fisiopatologia:
      "Processo inflamatório autoimune desmielinizante acomete o nervo óptico, de forma análoga às placas de desmielinização encontradas na esclerose múltipla em outras localizações do sistema nervoso central. A inflamação e desmielinização comprometem a condução do impulso nervoso visual, causando perda de acuidade visual e de sensibilidade a contraste e cores, tipicamente com recuperação parcial a completa ao longo de semanas a meses pela remielinização.",
    classificacao:
      "Classificada quanto à localização em anterior (papilite, com edema de disco óptico visível à fundoscopia) e retrobulbar (mais comum, com disco óptico de aparência normal na fase aguda, apesar da perda visual — resumida na máxima clássica 'o paciente não vê nada e o médico não vê nada'). Também classificada quanto à associação etiológica: idiopática/associada à esclerose múltipla (a mais comum) versus associada a outras causas (neuromielite óptica, infecciosa, tóxica-nutricional).",
    quadroClinico: [
      "Perda de acuidade visual subaguda (piora ao longo de horas a poucos dias), tipicamente unilateral",
      "Dor à movimentação ocular, presente na grande maioria dos casos e um achado relativamente característico",
      "Discromatopsia (alteração da percepção de cores, sobretudo vermelho) desproporcional à perda de acuidade visual",
      "Defeito pupilar aferente relativo (pupila de Marcus Gunn) no olho afetado, achado objetivo importante ao exame",
      "Fenômeno de Uhthoff (piora transitória dos sintomas visuais com aumento da temperatura corporal, como durante exercício ou febre) pode ocorrer mesmo após a resolução do episódio agudo",
    ],
    diagnostico: [
      "Diagnóstico clínico apoiado no quadro característico (perda visual subaguda unilateral com dor à movimentação ocular e defeito pupilar aferente relativo)",
      "Ressonância magnética de crânio e órbitas com contraste é essencial não apenas para confirmar a inflamação do nervo óptico, mas principalmente para avaliar lesões de substância branca sugestivas de esclerose múltipla, com implicação prognóstica direta",
    ],
    examesComplementares: [
      "Ressonância magnética de crânio e órbitas com contraste (avalia tanto o nervo óptico quanto lesões desmielinizantes cerebrais associadas)",
      "Campimetria computadorizada, tipicamente mostrando escotoma central ou cecocentral",
      "Investigação para neuromielite óptica (anticorpo anti-aquaporina-4) em casos bilaterais, muito graves, ou com pouca recuperação, já que o manejo e prognóstico diferem significativamente da neurite óptica típica associada a esclerose múltipla",
    ],
    diagnosticoDiferencial: [
      "Neuropatia óptica isquêmica anterior não arterítica (mais comum em idosos, geralmente indolor, com fatores de risco vascular)",
      "Papiledema por hipertensão intracraniana (tipicamente bilateral, sem dor à movimentação ocular nem perda visual central proeminente na fase inicial)",
      "Neuromielite óptica (neurite óptica mais grave, frequentemente bilateral ou recorrente, com pior recuperação e associada a mielite transversa)",
    ],
    tratamento: [
      "Corticosteroide intravenoso em altas doses (metilprednisolona) é o tratamento de escolha em casos com perda visual significativa, acelerando a recuperação visual, embora sem alterar o prognóstico visual final em longo prazo (classe/via de administração ainda sem ficha própria de medicamento no site)",
      "Corticosteroide oral isolado em dose convencional (não em pulsoterapia) é classicamente contraindicado como tratamento inicial da neurite óptica, por associação com maior taxa de recorrência demonstrada em estudo clínico de referência — distinção importante da conduta em outras causas de uveíte/inflamação ocular",
      "Investigação e, quando indicado, início de terapia modificadora de doença para esclerose múltipla em pacientes com lesões de substância branca compatíveis à ressonância magnética, conduzida em conjunto com neurologia",
    ],
    complicacoes: [
      "Aguda: perda visual severa transitória, com possibilidade de sequela visual residual mesmo após tratamento (mais comum em casos graves ou atípicos)",
      "Crônica: conversão para esclerose múltipla clinicamente definida em uma proporção significativa dos pacientes, sobretudo naqueles com lesões de substância branca já presentes na ressonância inicial",
    ],
    redFlags: [
      "Neurite óptica bilateral simultânea, ou com recuperação visual pobre/incompleta — considerar neuromielite óptica em vez de neurite óptica típica associada a esclerose múltipla, com implicações terapêuticas e prognósticas distintas",
      "Ausência de dor à movimentação ocular ou perda visual indolor em paciente idoso com fatores de risco vascular — reconsiderar o diagnóstico em favor de neuropatia óptica isquêmica, não neurite óptica típica",
    ],
    prognostico:
      "Geralmente favorável para a recuperação visual do episódio agudo, com melhora substancial (frequentemente quase completa) ao longo de semanas a poucos meses na maioria dos pacientes, mesmo sem tratamento. O prognóstico em longo prazo é determinado principalmente pelo risco de conversão para esclerose múltipla, que aumenta proporcionalmente ao número de lesões de substância branca identificadas na ressonância magnética inicial.",
    pontosDeProva: [
      "Dor à movimentação ocular associada a perda visual subaguda unilateral é a combinação mais cobrada para sugerir neurite óptica",
      "Corticosteroide oral isolado (não em pulsoterapia intravenosa) é contraindicado como tratamento inicial da neurite óptica por aumentar o risco de recorrência — achado clássico de um estudo de referência amplamente cobrado em prova",
      "A presença de lesões de substância branca na ressonância magnética no momento do episódio de neurite óptica é o principal preditor de conversão futura para esclerose múltipla clinicamente definida",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 29 anos, relata perda visual progressiva no olho esquerdo ao longo dos últimos 3 dias, associada a dor ao movimentar o olho. Ao exame, nota-se defeito pupilar aferente relativo à esquerda e discromatopsia desproporcional à perda de acuidade visual.",
      pergunta: "Qual a hipótese diagnóstica mais provável e a investigação prioritária?",
      raciocinio:
        "Perda visual subaguda unilateral com dor à movimentação ocular, defeito pupilar aferente relativo e discromatopsia desproporcional são o quadro clássico de neurite óptica, mais comum em mulheres jovens dessa faixa etária, com forte associação a esclerose múltipla.",
      conduta:
        "Solicitar ressonância magnética de crânio e órbitas com contraste, tanto para confirmar a inflamação do nervo óptico quanto para avaliar lesões de substância branca sugestivas de esclerose múltipla, que determinam o risco de conversão futura e orientam a necessidade de terapia modificadora de doença em conjunto com neurologia; considerar pulsoterapia com corticosteroide intravenoso se a perda visual for significativa.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Quadro clínico, associação com esclerose múltipla e conduta terapêutica", fonte: "Kanski's Clinical Ophthalmology, 9ª ed." },
      { tema: "Contraindicação de corticosteroide oral isolado como tratamento inicial (risco de recorrência) — achado do Optic Neuritis Treatment Trial (ONTT)", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "papiledema-atrofia-optica",
    nome: "Papiledema e atrofia óptica",
    sinonimos: ["Edema de disco óptico"],
    cid10: "H47",
    especialidade: "Oftalmologia",
    etiologia: "Multifatorial",
    resumo: "Papiledema é o edema do disco óptico por hipertensão intracraniana, achado de alto valor localizatório e de urgência; atrofia óptica é a via final comum de dano ao nervo óptico de qualquer causa.",
    definicao:
      "Papiledema é o edema do disco óptico especificamente causado por elevação da pressão intracraniana, transmitida ao nervo óptico através do espaço subaracnóideo que o envolve — termo reservado para essa etiologia específica, distinto de outras causas de edema de disco óptico. Atrofia óptica é a palidez e afinamento do disco óptico resultante da perda de axônios do nervo óptico, representando a via final comum de dano crônico ao nervo óptico por praticamente qualquer causa.",
    epidemiologia:
      "Papiledema ocorre em qualquer condição que eleve a pressão intracraniana: hipertensão intracraniana idiopática (mais comum em mulheres jovens com obesidade), tumores do sistema nervoso central, trombose de seio venoso cerebral, hidrocefalia, entre outras. Atrofia óptica pode resultar de qualquer neuropatia óptica crônica ou repetida (glaucoma, neurite óptica recorrente, compressão tumoral, isquemia, entre muitas outras causas).",
    fisiopatologia:
      "No papiledema, a elevação da pressão intracraniana é transmitida através do espaço subaracnóideo perióptico até a lâmina crivosa, comprometendo o transporte axoplasmático normal dentro das fibras do nervo óptico na região do disco, causando edema visível à fundoscopia — tipicamente bilateral, já que a pressão intracraniana afeta ambos os nervos ópticos igualmente. Na atrofia óptica, a perda progressiva e irreversível de axônios do nervo óptico (por qualquer mecanismo de dano prévio) resulta em afinamento e palidez do disco à fundoscopia, refletindo a perda estrutural já estabelecida.",
    classificacao:
      "Papiledema classificado por gravidade conforme a escala de Frisén (graus 0 a 5, de normal a edema muito avançado com hemorragias e exsudatos peripapilares). Atrofia óptica classificada por padrão (difusa vs. setorial) e por causa (glaucomatosa, pós-inflamatória, compressiva, isquêmica, hereditária), distinção relevante porque o padrão de afinamento pode sugerir a causa de base.",
    quadroClinico: [
      "Papiledema: frequentemente assintomático em relação à visão nas fases iniciais (a acuidade visual central é tipicamente preservada até fases avançadas), mas associado a sintomas de hipertensão intracraniana — cefaleia (pior ao deitar/pela manhã, piora com manobra de Valsalva), náuseas e vômitos, e obscurecimentos visuais transitórios (episódios de escurecimento visual breve, tipicamente ao mudar de posição)",
      "Papiledema crônico não tratado: pode eventualmente evoluir para perda de campo visual periférico e, em fases avançadas, perda de acuidade visual central, refletindo dano axonal já estabelecido",
      "Atrofia óptica: perda visual estável (não progressiva, a menos que a causa de base ainda esteja ativa), com disco óptico pálido à fundoscopia, sem sinais inflamatórios ou de edema agudo",
    ],
    diagnostico: [
      "Fundoscopia é essencial para ambos: edema de disco bilateral com bordas borradas no papiledema; palidez e afinamento do disco na atrofia óptica",
      "Diante de papiledema, neuroimagem urgente (tomografia ou ressonância de crânio) é mandatória antes de qualquer punção lombar, para excluir lesão expansiva que contraindique o procedimento pelo risco de herniação",
      "Investigação da causa de base é essencial na atrofia óptica, já que o achado por si só não define a etiologia",
    ],
    examesComplementares: [
      "Neuroimagem (tomografia ou ressonância magnética de crânio, com venografia quando há suspeita de trombose de seio venoso) antes de qualquer punção lombar em paciente com papiledema",
      "Punção lombar com medida da pressão de abertura, após exclusão de lesão expansiva por neuroimagem, essencial para o diagnóstico de hipertensão intracraniana idiopática",
      "Tomografia de coerência óptica (OCT) de nervo óptico para quantificação objetiva do edema no papiledema e do afinamento na atrofia óptica",
      "Campimetria computadorizada seriada para monitorar a progressão do dano funcional em ambas as condições",
    ],
    diagnosticoDiferencial: [
      "Pseudopapiledema (drusas de disco óptico, uma variante anatômica benigna que pode mimetizar papiledema à fundoscopia, mas sem hipertensão intracraniana associada)",
      "Neurite óptica (edema de disco unilateral tipicamente, com dor e perda visual central proeminente, diferente do papiledema bilateral e frequentemente indolor)",
      "Neuropatia óptica isquêmica anterior (edema de disco geralmente unilateral, sem os sintomas sistêmicos de hipertensão intracraniana)",
    ],
    tratamento: [
      "Papiledema: tratamento dirigido à causa da hipertensão intracraniana de base — na hipertensão intracraniana idiopática, perda de peso e acetazolamida são a primeira linha (classe de medicamento ainda sem ficha própria no site); tratamento cirúrgico/específico quando há lesão expansiva ou trombose venosa identificada; derivação liquórica ou fenestração da bainha do nervo óptico em casos refratários com risco visual iminente",
      "Atrofia óptica: não há tratamento capaz de reverter a perda axonal já estabelecida — o foco é identificar e tratar a causa de base para prevenir progressão adicional, e reabilitação visual quando há perda funcional significativa",
    ],
    complicacoes: [
      "Aguda: herniação cerebral se punção lombar for realizada antes de excluir lesão expansiva por neuroimagem em paciente com papiledema — erro potencialmente fatal e evitável",
      "Crônica: perda visual permanente e irreversível por atrofia óptica secundária a papiledema crônico não tratado (hipertensão intracraniana mantida por tempo prolongado)",
    ],
    redFlags: [
      "Papiledema com cefaleia, náuseas/vômitos e obscurecimentos visuais transitórios — investigação neurológica urgente com neuroimagem antes de qualquer punção lombar, pelo risco de herniação em caso de lesão expansiva não identificada",
      "Papiledema com perda progressiva de acuidade visual central — sinaliza dano axonal já significativo e risco de evolução para atrofia óptica permanente, exigindo tratamento mais agressivo da hipertensão intracraniana de base",
    ],
    prognostico:
      "No papiledema, o prognóstico visual é excelente quando a causa de base é identificada e tratada precocemente, mas pode evoluir para perda visual permanente por atrofia óptica secundária se a hipertensão intracraniana permanecer não controlada por período prolongado. A atrofia óptica já estabelecida representa dano permanente e irreversível, independentemente da causa original.",
    pontosDeProva: [
      "Neuroimagem é sempre obrigatória antes de punção lombar em paciente com papiledema, para excluir lesão expansiva que contraindique o procedimento pelo risco de herniação — um dos erros mais perigosos e mais cobrados nessa área",
      "Papiledema verdadeiro é bilateral (reflete pressão intracraniana elevada transmitida a ambos os nervos ópticos) — edema de disco unilateral sugere outra causa (neurite óptica, neuropatia isquêmica), não papiledema verdadeiro",
      "Atrofia óptica representa dano axonal permanente e irreversível, seja qual for a causa — reforça a importância de identificar e tratar precocemente qualquer neuropatia óptica antes que evolua para esse estágio final",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 27 anos, obesa, relata cefaleia holocraniana pior pela manhã e ao se abaixar, associada a episódios breves de escurecimento visual ao levantar-se rapidamente, há 3 semanas. Fundoscopia revela edema de disco óptico bilateral com bordas borradas.",
      pergunta: "Qual a hipótese diagnóstica mais provável e a conduta antes de qualquer procedimento diagnóstico invasivo?",
      raciocinio:
        "Cefaleia postural, obscurecimentos visuais transitórios e papiledema bilateral em mulher jovem obesa são o quadro clássico de hipertensão intracraniana idiopática. Antes de confirmar esse diagnóstico com punção lombar, é obrigatório excluir uma lesão expansiva intracraniana por neuroimagem, pelo risco de herniação se a punção for realizada nessa situação.",
      conduta:
        "Solicitar tomografia ou ressonância magnética de crânio (com venografia, para excluir trombose de seio venoso) antes de qualquer punção lombar; se a neuroimagem for normal, prosseguir com punção lombar para medir a pressão de abertura e confirmar hipertensão intracraniana idiopática, iniciando perda de peso e acetazolamida como primeira linha terapêutica.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Fisiopatologia do papiledema e necessidade de neuroimagem antes de punção lombar", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Classificação de gravidade (escala de Frisén) e conduta na hipertensão intracraniana idiopática", fonte: "Kanski's Clinical Ophthalmology, 9ª ed." },
    ],
  },
  {
    slug: "estrabismo-paralitico",
    nome: "Estrabismo paralítico",
    sinonimos: ["Paralisia oculomotora"],
    cid10: "H49",
    especialidade: "Oftalmologia",
    etiologia: "Multifatorial",
    resumo: "Desalinhamento ocular por paralisia de um ou mais nervos cranianos oculomotores (III, IV ou VI), causando diplopia de início súbito — investigação da causa de base é sempre obrigatória, incluindo causas potencialmente graves.",
    definicao:
      "Desalinhamento ocular resultante da paralisia ou paresia de um ou mais músculos extraoculares, por comprometimento de sua inervação pelos nervos cranianos oculomotores (III par — oculomotor, IV par — troclear, VI par — abducente), causando diplopia (visão dupla) de início tipicamente súbito, diferente do estrabismo concomitante crônico da infância.",
    epidemiologia:
      "Em adultos, as causas mais comuns incluem doença microvascular (diabetes, hipertensão — causando mononeuropatia isquêmica dos nervos cranianos, mais comumente o III e o VI pares), trauma, tumores e aneurismas (sobretudo de artéria comunicante posterior, comprimindo o III par). Em crianças, trauma e tumores do sistema nervoso central são causas relativamente mais proeminentes.",
    fisiopatologia:
      "O comprometimento de um nervo craniano oculomotor — por isquemia (mononeuropatia microvascular diabética/hipertensiva, tipicamente poupando a pupila), compressão (aneurisma, tumor, tipicamente acometendo a pupila quando envolve o III par) ou trauma — interrompe a inervação normal de um ou mais músculos extraoculares, causando desequilíbrio da força muscular ocular e desalinhamento dos eixos visuais, com diplopia resultante da estimulação de pontos retinianos não correspondentes nos dois olhos.",
    classificacao:
      "Classificado pelo nervo craniano acometido: paralisia do III par (ptose, midríase quando há acometimento pupilar, e limitação da adução/elevação/depressão do olho), paralisia do IV par (dificuldade de olhar para baixo e para dentro, compensada classicamente por inclinação compensatória da cabeça) e paralisia do VI par (limitação da abdução, o nervo mais longo e mais vulnerável a efeitos inespecíficos de hipertensão intracraniana). Também classificado quanto à causa em microvascular/isquêmica (poupa pupila, tipicamente resolve em semanas a meses) e compressiva/estrutural (frequentemente acomete a pupila no III par, exigindo investigação urgente).",
    quadroClinico: [
      "Diplopia binocular de início súbito (desaparece quando um dos olhos é ocluído — achado que a distingue de diplopia monocular, de causa oftalmológica local, não neurológica)",
      "Paralisia do III par: ptose, olho desviado para baixo e para fora ('down and out'), com ou sem midríase associada (achado crucial para diferenciar causa compressiva de microvascular)",
      "Paralisia do IV par: dificuldade para descer escadas ou ler (que exigem olhar para baixo e para dentro), com inclinação compensatória da cabeça para o lado oposto",
      "Paralisia do VI par: limitação da abdução do olho acometido, com esotropia (desvio para dentro) mais evidente no olhar para o lado da paralisia",
    ],
    diagnostico: [
      "Exame da motilidade ocular extrínseca detalhado para identificar o padrão específico de limitação, apontando o nervo craniano acometido",
      "Avaliação pupilar é o passo mais crítico na paralisia do III par: pupila poupada (reativa, sem midríase) sugere causa microvascular/isquêmica; pupila acometida (midríase, pouco reativa) sugere causa compressiva (aneurisma), exigindo investigação de imagem urgente",
    ],
    examesComplementares: [
      "Neuroimagem urgente (angiotomografia ou angiorressonância) em paralisia do III par com acometimento pupilar, ou em qualquer paralisia oculomotora com outros sinais neurológicos associados, para excluir aneurisma ou lesão compressiva",
      "Investigação de fatores de risco vascular (glicemia, pressão arterial, perfil lipídico) em suspeita de causa microvascular, sobretudo em paralisia do III par com pupila poupada em paciente de meia-idade/idoso",
      "Velocidade de hemossedimentação (VHS) e proteína C reativa em idosos, para excluir arterite de células gigantes como causa rara mas tratável",
    ],
    diagnosticoDiferencial: [
      "Estrabismo concomitante da infância (crônico, sem diplopia relatada pela criança, que suprime a imagem do olho desviado)",
      "Miastenia gravis (pode mimetizar qualquer padrão de paralisia oculomotora, tipicamente com flutuação ao longo do dia e fadigabilidade, sem acometimento pupilar)",
      "Oftalmopatia de Graves (limitação da motilidade por infiltração/fibrose muscular, não paralisia neurogênica verdadeira, geralmente com proptose associada)",
    ],
    tratamento: [
      "Paralisia do III par com pupila acometida — emergência: investigação e tratamento imediatos da causa compressiva (aneurisma), incluindo intervenção neurocirúrgica/endovascular quando indicada",
      "Paralisia microvascular (pupila poupada): observação, com resolução espontânea esperada em semanas a poucos meses na maioria dos casos, e controle otimizado dos fatores de risco vascular de base (diabetes, hipertensão)",
      "Uso de oclusor ou prisma para alívio sintomático da diplopia enquanto se aguarda resolução espontânea ou se define o tratamento definitivo",
      "Correção cirúrgica dos músculos extraoculares reservada a casos com paralisia persistente sem recuperação espontânea, após período de observação adequado",
    ],
    complicacoes: [
      "Aguda: ruptura de aneurisma não diagnosticado a tempo em paralisia do III par com acometimento pupilar não investigada adequadamente — risco de hemorragia subaracnóidea catastrófica",
      "Crônica: diplopia persistente e desconforto funcional significativo em paralisias sem recuperação espontânea completa",
    ],
    redFlags: [
      "Paralisia do III par com midríase (pupila dilatada e pouco reativa) — aneurisma compressivo (classicamente de artéria comunicante posterior) até prova em contrário, exigindo neuroimagem vascular urgente",
      "Paralisia oculomotora de qualquer nervo associada a outros sinais neurológicos (cefaleia intensa, alteração do nível de consciência, outros déficits de nervos cranianos) — investigação neurológica urgente para causa estrutural",
      "Progressão de paralisia inicialmente incompleta para completa, ou envolvimento sequencial de múltiplos nervos cranianos — sugere processo expansivo ou infiltrativo em curso, não uma mononeuropatia isquêmica isolada",
    ],
    prognostico:
      "Excelente na paralisia microvascular isolada, com resolução espontânea completa na grande maioria dos casos em até 3 meses. Variável na paralisia compressiva/estrutural, dependendo do tratamento oportuno da causa de base — potencialmente grave se houver atraso diagnóstico em caso de aneurisma.",
    pontosDeProva: [
      "'A pupila poupada é boa notícia' — a regra mnemônica mais cobrada em paralisia do III par: pupila poupada sugere causa microvascular benigna e autolimitada; pupila acometida sugere aneurisma compressivo, uma emergência",
      "Diplopia binocular (que desaparece à oclusão de um olho) indica causa neuro-oftalmológica verdadeira; diplopia monocular (persiste com um olho ocluído) indica causa oftalmológica local (catarata, irregularidade corneana), não paralisia de nervo craniano",
      "O VI par craniano, por seu longo trajeto intracraniano, é classicamente mais vulnerável a efeitos inespecíficos de hipertensão intracraniana — sua paralisia isolada nem sempre indica lesão localizada no próprio trajeto do nervo",
    ],
    casoClinico: {
      vinheta:
        "Homem, 58 anos, diabético e hipertenso de longa data, apresenta diplopia de início há 2 dias, com ptose e desvio do olho direito para baixo e para fora. A pupila direita está isocórica e fotorreagente, idêntica à esquerda.",
      pergunta: "Qual a hipótese diagnóstica mais provável e a conduta?",
      raciocinio:
        "Paralisia do III par com pupila poupada (isocórica e reativa), em paciente com fatores de risco vascular importantes (diabetes, hipertensão de longa data), é altamente sugestiva de mononeuropatia microvascular isquêmica, um quadro benigno e autolimitado, diferente de uma causa compressiva.",
      conduta:
        "Otimizar o controle dos fatores de risco vascular de base (glicemia, pressão arterial), orientar sobre a expectativa de resolução espontânea em semanas a poucos meses, e considerar uso de oclusor para alívio sintomático da diplopia enquanto aguarda a recuperação; reavaliar e ampliar a investigação se não houver melhora no prazo esperado.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Diferenciação entre causa microvascular (pupila poupada) e compressiva (pupila acometida) na paralisia do III par", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Padrões clínicos por nervo craniano acometido", fonte: "Kanski's Clinical Ophthalmology, 9ª ed." },
    ],
  },
  {
    slug: "outros-estrabismos",
    nome: "Outros estrabismos (concomitantes)",
    sinonimos: ["Estrabismo infantil", "Esotropia", "Exotropia"],
    cid10: "H50",
    especialidade: "Oftalmologia",
    etiologia: "Multifatorial",
    resumo: "Desalinhamento ocular constante em todas as posições do olhar (concomitante), tipicamente de início na infância — diagnóstico e tratamento precoces são essenciais para prevenir ambliopia permanente.",
    definicao:
      "Desalinhamento dos eixos visuais dos dois olhos que se mantém constante (o mesmo ângulo de desvio) em todas as posições do olhar, diferente do estrabismo paralítico, cujo ângulo varia conforme a direção do olhar. Classificado quanto à direção do desvio em esotropia (desvio para dentro, o tipo mais comum na infância) e exotropia (desvio para fora).",
    epidemiologia:
      "É uma das condições oftalmológicas mais comuns na infância, com início tipicamente antes dos 5-6 anos de idade. Fatores de risco incluem história familiar, erros refrativos significativos (sobretudo hipermetropia alta, associada a esotropia acomodativa) e prematuridade.",
    fisiopatologia:
      "O mecanismo exato do estrabismo concomitante idiopático permanece incompletamente compreendido, envolvendo provavelmente um desequilíbrio no desenvolvimento da fusão binocular normal, por vezes desencadeado ou agravado por um erro refrativo não corrigido (na esotropia acomodativa, o esforço acomodativo excessivo para compensar hipermetropia não corrigida desencadeia convergência excessiva associada). Uma vez estabelecido o estrabismo na infância, o cérebro tende a suprimir a imagem proveniente do olho desviado para evitar diplopia, o que pode levar a ambliopia (desenvolvimento visual inadequado) no olho cronicamente suprimido se não tratado a tempo.",
    classificacao:
      "Classificado pela direção do desvio (esotropia, exotropia, hipertropia/hipotropia verticais) e pela causa quando identificável (acomodativa, por erro refrativo; sensorial, secundária a baixa visão em um olho por outra causa oftalmológica; idiopática, a mais comum). Também classificado por constância (constante vs. intermitente) e por olho acometido (unilateral constante vs. alternante).",
    quadroClinico: [
      "Desvio ocular visível, constante em todas as direções do olhar, tipicamente identificado pelos pais ou no rastreio pediátrico de rotina",
      "Ausência de queixa de diplopia pela própria criança na maioria dos casos, pela supressão adaptativa da imagem do olho desviado",
      "Tortícolo compensatório ocasional em alguns padrões específicos de estrabismo",
      "Sinais de ambliopia (quando já instalada) podem ser sutis e não percebidos pela família até o rastreio visual formal",
    ],
    diagnostico: [
      "Teste do reflexo corneano à luz (teste de Hirschberg) e cover test são os exames clínicos centrais para identificar e quantificar o desvio",
      "Refração cicloplégica (com colírio ciclopégico para paralisar temporariamente a acomodação) é essencial para identificar erro refrativo associado, sobretudo hipermetropia significativa na esotropia acomodativa",
      "Avaliação da acuidade visual de cada olho separadamente para rastrear ambliopia associada",
    ],
    examesComplementares: [
      "Refração cicloplégica para quantificação precisa do erro refrativo",
      "Fundoscopia para excluir causas sensoriais de estrabismo (catarata congênita, retinoblastoma, cicatriz retiniana) que comprometam a visão em um olho e secundariamente causem o desvio",
    ],
    diagnosticoDiferencial: [
      "Pseudoestrabismo (aparência de desvio por características anatômicas faciais, como prega epicântica proeminente, sem desvio real ao cover test — muito comum e importante de diferenciar para evitar investigação/tratamento desnecessários)",
      "Estrabismo paralítico (desvio que varia conforme a posição do olhar, diferente do padrão constante do estrabismo concomitante)",
      "Estrabismo sensorial secundário a doença ocular que causa baixa visão unilateral (catarata congênita, retinoblastoma) — sempre excluída por fundoscopia antes de assumir causa idiopática",
    ],
    tratamento: [
      "Correção óptica completa do erro refrativo (óculos) é o primeiro passo e pode resolver completamente a esotropia puramente acomodativa",
      "Tratamento da ambliopia associada (quando presente), tipicamente com oclusão do olho de melhor visão para forçar o desenvolvimento visual do olho ambliope, é prioritário e deve ser feito antes ou concomitantemente à correção cirúrgica do desvio",
      "Correção cirúrgica dos músculos extraoculares indicada quando o desvio persiste apesar da correção óptica adequada e do tratamento de eventual ambliopia, visando alinhamento ocular e potencial de fusão binocular",
    ],
    complicacoes: [
      "Crônica: ambliopia permanente no olho cronicamente suprimido se o estrabismo não for diagnosticado e tratado dentro da janela crítica do desenvolvimento visual (aproximadamente até os 7-9 anos de idade) — a complicação mais importante e evitável",
    ],
    redFlags: [
      "Estrabismo de início recente em criança maior ou adolescente, sobretudo se associado a outros sintomas neurológicos — reconsiderar estrabismo paralítico ou causa neurológica, não estrabismo concomitante idiopático típico da primeira infância",
      "Leucocoria associada ao estrabismo — sempre excluir retinoblastoma e catarata congênita como causa sensorial de base antes de assumir estrabismo idiopático",
    ],
    prognostico:
      "Excelente quando diagnosticado e tratado dentro da janela crítica do desenvolvimento visual, com boa resposta à correção óptica, tratamento da ambliopia e, quando indicada, cirurgia de alinhamento. O atraso no diagnóstico é o principal determinante de sequela visual permanente (ambliopia).",
    pontosDeProva: [
      "Pseudoestrabismo (por prega epicântica proeminente, comum em lactentes) deve ser diferenciado do estrabismo verdadeiro pelo cover test — é uma armadilha clássica de exame físico",
      "Toda criança com leucocoria associada a estrabismo precisa de fundoscopia para excluir retinoblastoma antes de qualquer outra consideração diagnóstica",
      "A janela crítica para tratamento da ambliopia associada ao estrabismo é limitada (aproximadamente até os 7-9 anos) — quanto mais precoce o diagnóstico e tratamento, melhor o prognóstico visual definitivo",
    ],
    casoClinico: {
      vinheta:
        "Menina, 3 anos, é levada ao pediatra pelos pais, que notaram que o olho direito 'vira para dentro' às vezes, mais perceptível quando ela está cansada. Ao exame, cover test confirma esotropia intermitente do olho direito.",
      pergunta: "Qual a conduta apropriada?",
      raciocinio:
        "Esotropia intermitente identificada por cover test em criança pequena requer avaliação oftalmológica completa, incluindo refração cicloplégica (para investigar componente acomodativo) e fundoscopia (para excluir causa sensorial), dado o risco de ambliopia se não tratada dentro da janela crítica do desenvolvimento visual.",
      conduta:
        "Encaminhamento oftalmológico pediátrico para refração cicloplégica e fundoscopia; se houver hipermetropia significativa, prescrever correção óptica completa como primeira medida, que pode resolver o componente acomodativo do desvio; acompanhar a resposta e considerar cirurgia se o desvio persistir apesar da correção adequada.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Classificação, fisiopatologia da esotropia acomodativa e conduta terapêutica", fonte: "American Academy of Ophthalmology, Preferred Practice Pattern: Esotropia and Exotropia" },
      { tema: "Janela crítica do desenvolvimento visual e risco de ambliopia", fonte: "Kanski's Clinical Ophthalmology, 9ª ed." },
    ],
  },
  {
    slug: "transtornos-movimento-binocular",
    nome: "Outros transtornos do movimento binocular",
    sinonimos: ["Insuficiência de convergência", "Heteroforia sintomática"],
    cid10: "H51",
    especialidade: "Oftalmologia",
    etiologia: "Multifatorial",
    resumo: "Alterações sutis da coordenação binocular sem desvio manifesto constante — a insuficiência de convergência é a mais comum na prática, causando desconforto visual e cefaleia associados a leitura/trabalho de perto.",
    definicao:
      "Grupo de condições caracterizadas por dificuldade na coordenação fina dos movimentos oculares binoculares sem um desvio ocular manifesto e constante como no estrabismo, incluindo a insuficiência de convergência (dificuldade para manter a convergência ocular durante tarefas de visão de perto) e as heteroforias sintomáticas (desvios latentes, controlados pela fusão binocular na maior parte do tempo, mas que causam sintomas quando o mecanismo de compensação é sobrecarregado).",
    epidemiologia:
      "Insuficiência de convergência é relativamente comum, sobretudo em crianças em idade escolar e adultos jovens com demanda visual intensa de perto (leitura, uso de telas), podendo ser confundida com transtorno de déficit de atenção pela sobreposição de sintomas de dificuldade de concentração durante a leitura.",
    fisiopatologia:
      "Na insuficiência de convergência, há uma incapacidade de manter adequadamente a convergência dos eixos visuais durante tarefas prolongadas de visão de perto, levando a esforço muscular extraocular excessivo e fadiga. Nas heteroforias, existe um desvio latente dos eixos visuais que é normalmente compensado pelo mecanismo de fusão binocular cortical; quando esse mecanismo compensatório é sobrecarregado (fadiga, tarefas visuais prolongadas), os sintomas se manifestam.",
    classificacao:
      "Classificada em insuficiência de convergência (a mais comum e mais relevante clinicamente), excesso de convergência, insuficiência de divergência e heteroforias (desvios latentes classificados por direção, de forma análoga aos estrabismos manifestos, mas compensados a maior parte do tempo).",
    quadroClinico: [
      "Desconforto visual (astenopia), cefaleia frontal e visão borrada ou dupla intermitente associados a tarefas visuais de perto prolongadas (leitura, telas), tipicamente aliviados com o repouso visual",
      "Dificuldade de concentração durante a leitura, que pode ser confundida com transtorno de déficit de atenção/hiperatividade",
      "Ausência de desvio ocular constante e visível ao exame simples, diferente do estrabismo manifesto",
    ],
    diagnostico: [
      "Medida do ponto próximo de convergência (distância mínima em que a convergência ainda é mantida sem diplopia), tipicamente aumentada na insuficiência de convergência",
      "Avaliação ortóptica completa com testes específicos de vergência e cover test para heteroforias",
    ],
    examesComplementares: [
      "Refração completa para excluir erro refrativo não corrigido como causa contribuinte dos sintomas",
      "Avaliação ortóptica formal com testes de amplitude de vergência fusional",
    ],
    diagnosticoDiferencial: [
      "Erro refrativo não corrigido (causa sintomas semelhantes de astenopia, mas sem a alteração específica de convergência)",
      "Transtorno de déficit de atenção/hiperatividade (sobreposição de sintomas de dificuldade de concentração na leitura — importante não atribuir automaticamente à insuficiência de convergência sem avaliação ortóptica adequada, nem o inverso)",
      "Estrabismo intermitente manifesto (desvio ocasionalmente visível ao exame, diferente da heteroforia puramente latente)",
    ],
    tratamento: [
      "Terapia ortóptica (exercícios de convergência, como o uso de régua de leitura ou exercícios com prismas) é o tratamento de primeira linha para insuficiência de convergência sintomática, com boa evidência de eficácia",
      "Correção óptica de qualquer erro refrativo associado",
      "Prismas em óculos podem ser usados em casos selecionados de heteroforia sintomática refratária à terapia ortóptica",
    ],
    complicacoes: [
      "Crônica: impacto no desempenho escolar/acadêmico quando não reconhecido e tratado, pela associação entre os sintomas e dificuldade sustentada de leitura",
    ],
    redFlags: [
      "Diplopia de início súbito e recente, diferente do padrão crônico e relacionado a tarefas de perto da insuficiência de convergência — reconsiderar causa neurológica aguda (paralisia de nervo craniano), não um transtorno de vergência binocular crônico",
    ],
    prognostico:
      "Excelente na maioria dos casos de insuficiência de convergência com terapia ortóptica dirigida, com boa resposta aos exercícios de convergência na maior parte dos pacientes.",
    pontosDeProva: [
      "Insuficiência de convergência pode mimetizar ou se sobrepor a queixas de transtorno de déficit de atenção durante a leitura — deve ser ativamente considerada e investigada com avaliação ortóptica antes de atribuir os sintomas exclusivamente a causas comportamentais/atencionais",
      "Terapia ortóptica com exercícios de convergência é o tratamento de primeira linha com boa evidência para insuficiência de convergência sintomática, diferente de outras condições oftalmológicas que exigem intervenção óptica ou cirúrgica",
    ],
    casoClinico: {
      vinheta:
        "Menino, 10 anos, com bom desempenho escolar prévio, passa a apresentar dificuldade de concentração durante a leitura, cefaleia frontal e visão borrada intermitente ao ler por períodos prolongados, sem esses sintomas em outras atividades.",
      pergunta: "Qual a hipótese diagnóstica a ser investigada antes de considerar transtorno de déficit de atenção?",
      raciocinio:
        "Sintomas de dificuldade de concentração especificamente durante a leitura, associados a cefaleia e visão borrada relacionadas a tarefas de perto, sugerem insuficiência de convergência como causa a ser ativamente excluída antes de atribuir o quadro a um transtorno de déficit de atenção.",
      conduta:
        "Encaminhamento para avaliação oftalmológica/ortóptica com medida do ponto próximo de convergência e refração completa; se confirmada insuficiência de convergência, iniciar terapia ortóptica com exercícios de convergência como tratamento de primeira linha.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Fisiopatologia da insuficiência de convergência e sobreposição sintomática com TDAH", fonte: "fonte pendente" },
      { tema: "Eficácia da terapia ortóptica com exercícios de convergência", fonte: "Kanski's Clinical Ophthalmology, 9ª ed." },
    ],
  },
  {
    slug: "erros-refrativos",
    nome: "Erros de refração e da acomodação",
    sinonimos: ["Miopia", "Hipermetropia", "Astigmatismo", "Presbiopia"],
    cid10: "H52",
    especialidade: "Oftalmologia",
    etiologia: "Multifatorial",
    resumo: "Miopia, hipermetropia, astigmatismo e presbiopia — as condições oftalmológicas mais prevalentes de todas, causadoras da grande maioria das consultas por baixa visão corrigível com óculos.",
    definicao:
      "Alterações na forma como a luz é focalizada pelo sistema óptico do olho na retina: miopia (o foco se forma antes da retina, tipicamente por olho mais alongado, causando dificuldade para enxergar de longe), hipermetropia (o foco se forma atrás da retina, causando esforço acomodativo compensatório, mais sintomático de perto), astigmatismo (curvatura corneana irregular, causando foco distorcido em diferentes eixos) e presbiopia (perda relacionada à idade da capacidade de acomodação do cristalino, causando dificuldade progressiva para foco de perto a partir geralmente da quarta década de vida).",
    epidemiologia:
      "Coletivamente, são as condições oftalmológicas mais prevalentes na população mundial. A prevalência de miopia tem aumentado significativamente nas últimas décadas, sobretudo em populações urbanas e associada a maior tempo de atividades de perto e menor exposição a luz natural na infância. Presbiopia é universal, acometendo virtualmente toda a população a partir de determinada idade.",
    fisiopatologia:
      "Na miopia, o comprimento axial do olho é desproporcionalmente maior em relação ao seu poder refrativo (ou, mais raramente, o poder refrativo é excessivo para um comprimento axial normal), fazendo a imagem focar antes da retina. Na hipermetropia, ocorre o oposto — olho relativamente mais curto ou poder refrativo insuficiente, com foco atrás da retina, meso compensado por acomodação em graus leves a moderados. No astigmatismo, a córnea (mais comumente) tem curvatura diferente em meridianos distintos, gerando múltiplos pontos focais em vez de um único ponto nítido. Na presbiopia, o cristalino perde progressivamente sua elasticidade relacionada à idade, reduzindo a amplitude de acomodação disponível para foco de perto.",
    classificacao:
      "Classificados pelo tipo de erro (miopia, hipermetropia, astigmatismo, presbiopia, podendo coexistir mais de um no mesmo olho) e pela magnitude (leve, moderado, alto/elevado), sendo miopia e hipermetropia de alto grau associadas a maior risco de complicações oculares específicas (descolamento de retina na miopia alta; glaucoma de ângulo fechado na hipermetropia alta, por câmara anterior mais rasa).",
    quadroClinico: [
      "Miopia: dificuldade para enxergar objetos distantes, com boa visão de perto preservada",
      "Hipermetropia: dificuldade variável conforme o grau — leve pode ser assintomática em jovens (compensada por acomodação), mas causa fadiga visual e cefaleia com esforço prolongado de perto, sobretudo com o avançar da idade",
      "Astigmatismo: borramento visual em todas as distâncias, por vezes descrito como distorção ou 'fantasmas' de imagem",
      "Presbiopia: dificuldade progressiva para foco de perto (leitura, uso de celular), tipicamente notada a partir dos 40-45 anos, com necessidade de afastar o material de leitura para enxergar com nitidez",
    ],
    diagnostico: [
      "Refração (subjetiva e, quando indicado, cicloplégica em crianças) é o exame central para quantificar e caracterizar o erro refrativo",
      "Acuidade visual com e sem correção óptica para documentar o grau de comprometimento e a resposta à correção",
    ],
    examesComplementares: [
      "Refração subjetiva e objetiva (autorrefratômetro)",
      "Topografia corneana em casos de astigmatismo irregular ou suspeita de ceratocone associado",
      "Biometria e comprimento axial em miopia de alto grau, para monitorização de risco de complicações retinianas associadas",
    ],
    diagnosticoDiferencial: [
      "Ambliopia (baixa visão que não melhora completamente mesmo com correção óptica adequada, diferente do erro refrativo simples plenamente corrigível)",
      "Ceratocone (astigmatismo irregular progressivo, com topografia corneana característica, diferente do astigmatismo regular comum)",
      "Catarata (embaçamento visual que não é totalmente corrigido por lentes, com opacidade visível do cristalino à biomicroscopia)",
    ],
    tratamento: [
      "Correção óptica com óculos ou lentes de contato é o tratamento de primeira linha para todos os erros refrativos, sendo altamente eficaz e de baixo risco",
      "Cirurgia refrativa a laser (como LASIK ou PRK) é uma opção eletiva para pacientes selecionados que desejam reduzir a dependência de óculos/lentes de contato, após avaliação cuidadosa de elegibilidade (topografia corneana normal, espessura corneana adequada, refração estável)",
      "Óculos multifocais/bifocais ou lentes de contato específicas para correção da presbiopia associada a outros erros refrativos coexistentes",
      "Monitorização oftalmológica periódica em miopia de alto grau, dado o maior risco de complicações retinianas (descolamento de retina, degeneração macular miópica) ao longo da vida",
    ],
    complicacoes: [
      "Crônica: miopia de alto grau aumenta significativamente o risco de descolamento de retina regmatogênico e de degeneração macular miópica ao longo da vida; hipermetropia alta aumenta o risco de glaucoma de ângulo fechado, pela câmara anterior mais rasa",
    ],
    redFlags: [
      "Miopia de progressão muito rápida na infância — considerar acompanhamento mais intensivo e discussão sobre estratégias de controle de progressão (tempo ao ar livre, correções ópticas específicas), dado o risco cumulativo de complicações associado a graus mais altos na vida adulta",
      "Baixa visão que não melhora completamente com a melhor correção óptica testada — investigar ambliopia ou outra causa orgânica associada, não assumir que é apenas um erro refrativo não corrigido adequadamente",
    ],
    prognostico:
      "Excelente na grande maioria dos casos, com correção óptica simples proporcionando visão funcional plena. O prognóstico de longo prazo em miopia e hipermetropia de alto grau está mais relacionado ao risco de complicações oculares associadas (retinianas ou de glaucoma, respectivamente) do que à própria qualidade visual corrigida.",
    pontosDeProva: [
      "Miopia de alto grau é um fator de risco reconhecido e importante para descolamento de retina regmatogênico, pela maior fragilidade retiniana periférica associada ao alongamento axial do olho",
      "Hipermetropia de alto grau, por sua câmara anterior tipicamente mais rasa, é um fator de risco para glaucoma de ângulo fechado — associação inversa e frequentemente confundida com a de miopia e descolamento de retina",
      "Presbiopia é uma alteração fisiológica universal relacionada à idade, não uma doença — importante diferenciá-la de embaçamento visual patológico ao orientar pacientes de meia-idade",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 44 anos, sem queixas visuais para longe, relata dificuldade progressiva para ler letras pequenas e uso de celular nos últimos meses, precisando afastar o material de leitura para enxergar com nitidez.",
      pergunta: "Qual a hipótese diagnóstica mais provável e a conduta?",
      raciocinio:
        "Dificuldade progressiva e específica para foco de perto, com boa visão de longe preservada, em paciente na faixa etária típica (a partir dos 40-45 anos), é o quadro clássico de presbiopia, uma alteração fisiológica esperada relacionada à idade, não uma doença ocular.",
      conduta:
        "Realizar refração completa para confirmar presbiopia e excluir outros erros refrativos associados, e prescrever correção óptica para perto (óculos de leitura ou lentes multifocais, conforme a preferência e necessidade da paciente).",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Fisiopatologia dos erros refrativos e associação com complicações oculares (miopia alta e descolamento de retina; hipermetropia alta e glaucoma de ângulo fechado)", fonte: "Vaughan & Asbury's General Ophthalmology, 19ª ed." },
      { tema: "Prevalência crescente de miopia e fatores ambientais associados", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "ambliopia-diplopia-disturbios-visuais",
    nome: "Ambliopia, diplopia e outros distúrbios visuais",
    sinonimos: ["Olho preguiçoso"],
    cid10: "H53",
    especialidade: "Oftalmologia",
    etiologia: "Multifatorial",
    resumo: "Ambliopia é a redução do desenvolvimento visual por privação/desuso na infância, potencialmente reversível apenas dentro de uma janela crítica — a causa mais comum de baixa visão unilateral evitável em crianças.",
    definicao:
      "Ambliopia é a redução da acuidade visual em um (mais comumente) ou ambos os olhos, não explicada completamente por uma anormalidade estrutural ocular identificável e não totalmente corrigível apenas com lentes, resultante de desenvolvimento visual cortical inadequado durante o período crítico da infância. Diplopia é a percepção de duas imagens de um único objeto, podendo ser binocular (desaparece com oclusão de um olho — causa neuro-oftalmológica) ou monocular (persiste com um olho ocluído — causa oftalmológica local, como astigmatismo irregular ou catarata).",
    epidemiologia:
      "Ambliopia é a causa mais comum de baixa visão unilateral evitável em crianças, com prevalência estimada em torno de 2 a 3% da população, resultante mais comumente de estrabismo, erro refrativo assimétrico entre os olhos (anisometropia) ou privação visual por opacidade de meios (catarata congênita, ptose significativa).",
    fisiopatologia:
      "Durante o período crítico do desenvolvimento visual (que se estende aproximadamente até os 7-9 anos de idade, com maior plasticidade nos primeiros anos), qualquer condição que impeça a formação de uma imagem retiniana nítida e bem correspondente entre os dois olhos (estrabismo, erro refrativo assimétrico não corrigido, opacidade de meios) resulta em desenvolvimento cortical visual inadequado para o olho afetado, com o córtex visual passando a favorecer preferencialmente as vias do olho não afetado — um processo de plasticidade neural que, se não revertido dentro da janela crítica, causa déficit visual permanente mesmo após a correção da causa original.",
    classificacao:
      "Ambliopia classificada por mecanismo em estrábica (por supressão da imagem do olho desviado), anisometrópica (por erro refrativo significativamente assimétrico entre os olhos, favorecendo o desenvolvimento do olho com melhor foco) e por privação (a mais grave e de pior prognóstico, por opacidade de meios impedindo completamente a formação de imagem nítida, como na catarata congênita densa). Diplopia classificada em binocular e monocular, distinção fundamental para direcionar a investigação.",
    quadroClinico: [
      "Ambliopia: tipicamente assintomática do ponto de vista da criança (que não percebe a diferença, já que nunca desenvolveu visão normal naquele olho), sendo detectada por rastreio visual formal ou por achados incidentais (estrabismo visível, diferença de reação ao ocluir cada olho separadamente)",
      "Diplopia binocular: desaparece quando um dos olhos é ocluído, geralmente de início súbito quando de causa neurológica adquirida",
      "Diplopia monocular: persiste mesmo com o olho contralateral ocluído, geralmente descrita como uma 'imagem fantasma' sobreposta, associada a causas oftalmológicas locais",
    ],
    diagnostico: [
      "Rastreio visual formal (medida de acuidade visual de cada olho separadamente) é essencial em toda criança, mesmo assintomática, pela natureza tipicamente silenciosa da ambliopia",
      "Diferenciação entre diplopia monocular e binocular pela simples oclusão alternada de cada olho é o passo diagnóstico inicial mais importante diante de uma queixa de visão dupla",
    ],
    examesComplementares: [
      "Refração cicloplégica para identificar anisometropia como causa de ambliopia",
      "Exame oftalmológico completo (incluindo fundoscopia) para excluir causas de privação (catarata, ptose significativa, opacidade corneana)",
    ],
    diagnosticoDiferencial: [
      "Erro refrativo simples não corrigido (melhora completamente com a correção óptica adequada, diferente da ambliopia, que não melhora totalmente mesmo com a melhor correção)",
      "Neurite óptica ou outra neuropatia óptica (causa de baixa visão que não é ambliopia, geralmente com início identificável em criança maior/adulto, não desde a infância precoce)",
    ],
    tratamento: [
      "Correção do erro refrativo (óculos) é o primeiro passo em toda ambliopia, podendo por si só melhorar parcial ou completamente a acuidade visual em casos de anisometropia",
      "Terapia de oclusão (tampão no olho de melhor visão, forçando o uso e desenvolvimento do olho ambliope) é o tratamento clássico e mais eficaz, com duração e regime dependentes da gravidade e idade da criança",
      "Tratamento da causa de base de privação (cirurgia de catarata congênita, correção de ptose significativa) deve ser feito o mais precocemente possível, já que o tempo de privação é diretamente proporcional à gravidade da ambliopia resultante",
      "Diplopia monocular: correção do erro refrativo/astigmatismo irregular ou tratamento da causa oftalmológica local identificada (por exemplo, cirurgia de catarata)",
      "Diplopia binocular: tratamento dirigido à causa neuro-oftalmológica de base identificada",
    ],
    complicacoes: [
      "Crônica: ambliopia permanente e irreversível se não tratada dentro da janela crítica do desenvolvimento visual — a principal e mais evitável causa de baixa visão unilateral permanente em adultos jovens",
    ],
    redFlags: [
      "Ausência de rastreio visual formal em criança em idade pré-escolar — a ambliopia é frequentemente assintomática e não seria detectada sem avaliação ativa da acuidade visual de cada olho separadamente",
      "Diagnóstico e início de tratamento da ambliopia após o encerramento da janela crítica do desenvolvimento visual — chance de reversão significativamente reduzida, reforçando a importância do rastreio precoce",
    ],
    prognostico:
      "Excelente quando diagnosticada e tratada dentro da janela crítica do desenvolvimento visual, sobretudo quanto mais precocemente iniciado o tratamento. Reservado (com potencial de déficit visual permanente) quando o diagnóstico ocorre tardiamente, após o fechamento da janela de plasticidade neural.",
    pontosDeProva: [
      "A ambliopia é, por definição, silenciosa para a própria criança — nunca depende de queixa espontânea, e sim de rastreio visual ativo, reforçando a importância da avaliação oftalmológica pediátrica de rotina",
      "A distinção entre diplopia monocular (persiste com oclusão do olho contralateral, causa oftalmológica local) e binocular (desaparece com oclusão de qualquer um dos olhos, causa neuro-oftalmológica) é o primeiro e mais importante passo diagnóstico diante de uma queixa de visão dupla",
      "A ambliopia por privação (catarata congênita densa, ptose significativa) é a forma mais grave e de pior prognóstico, exigindo correção da causa de base o mais precocemente possível",
    ],
    casoClinico: {
      vinheta:
        "Menino, 5 anos, é levado para avaliação oftalmológica de rotina pré-escolar. Ao testar a acuidade visual de cada olho separadamente, nota-se acuidade visual significativamente reduzida no olho esquerdo em comparação ao direito, sem queixas prévias da criança ou dos pais.",
      pergunta: "Qual a hipótese diagnóstica mais provável e a conduta?",
      raciocinio:
        "Redução assintomática e unilateral da acuidade visual detectada apenas por rastreio formal, sem queixa prévia da criança, é o quadro típico de ambliopia — condição tipicamente silenciosa, daí a importância desse tipo de avaliação de rotina.",
      conduta:
        "Investigar a causa (refração cicloplégica para anisometropia, exame oftalmológico completo para excluir estrabismo ou opacidade de meios) e iniciar tratamento apropriado o quanto antes — correção óptica e, se necessário, terapia de oclusão do olho de melhor visão — dado que a eficácia do tratamento depende diretamente da proximidade com a janela crítica do desenvolvimento visual.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Fisiopatologia, classificação e janela crítica do desenvolvimento visual na ambliopia", fonte: "American Academy of Ophthalmology, Preferred Practice Pattern: Amblyopia" },
      { tema: "Diferenciação entre diplopia monocular e binocular", fonte: "Kanski's Clinical Ophthalmology, 9ª ed." },
    ],
  },
  {
    slug: "cegueira-visao-subnormal",
    nome: "Cegueira e visão subnormal",
    sinonimos: ["Baixa visão", "Deficiência visual"],
    cid10: "H54",
    especialidade: "Oftalmologia",
    etiologia: "Multifatorial",
    resumo: "Categorias funcionais de comprometimento visual grave, definidas por critérios de acuidade visual e campo visual — resultado final de múltiplas doenças oculares, com foco terapêutico voltado à reabilitação visual.",
    definicao:
      "Classificação funcional do grau de comprometimento visual, definida por critérios padronizados de acuidade visual central (medida no melhor olho, com a melhor correção óptica possível) e/ou de extensão do campo visual, distinguindo visão subnormal (baixa visão) de cegueira legal, sendo esta última definida por critérios ainda mais restritivos de acuidade visual e/ou campo visual residual.",
    epidemiologia:
      "É o desfecho final comum de múltiplas doenças oculares não tratadas, tratadas tardiamente, ou refratárias ao tratamento disponível — catarata não operada, glaucoma avançado, retinopatia diabética, degeneração macular relacionada à idade e erros refrativos não corrigidos estão entre as causas mais prevalentes de cegueira e baixa visão evitáveis no mundo.",
    fisiopatologia:
      "Não representa uma entidade fisiopatológica única, mas sim uma categoria funcional que resulta do dano cumulativo de qualquer doença ocular ou da via visual (retina, nervo óptico, vias ópticas centrais) suficientemente grave para comprometer a acuidade visual e/ou o campo visual abaixo dos limiares definidos, seja por doença primária não tratada, tratamento tardio, ou ausência de tratamento eficaz disponível para a condição de base.",
    classificacao:
      "Classificada pela Organização Mundial da Saúde em categorias de comprometimento visual conforme a acuidade visual no melhor olho com a melhor correção possível, com termos que vão de visão normal a cegueira, e critérios adicionais para restrição significativa de campo visual (independentemente da acuidade central). A distinção entre causas evitáveis (tratáveis ou preveníveis, como catarata e erros refrativos não corrigidos) e não evitáveis (dano irreversível já estabelecido) orienta as prioridades de saúde pública.",
    quadroClinico: [
      "Dificuldade funcional variável conforme o grau e o padrão de comprometimento visual (central vs. periférico), impactando atividades cotidianas como leitura, mobilidade e reconhecimento facial",
      "O quadro clínico específico depende inteiramente da doença de base causadora — não há um conjunto de sintomas próprio dessa classificação funcional",
    ],
    diagnostico: [
      "Medida padronizada da acuidade visual (com a melhor correção óptica possível) e do campo visual são os critérios objetivos que definem a categoria de comprometimento visual",
      "Identificação da causa de base subjacente é sempre necessária, tanto para eventual tratamento específico quanto para orientar o prognóstico e a estratégia de reabilitação",
    ],
    examesComplementares: [
      "Acuidade visual com melhor correção óptica (critério central de classificação)",
      "Campimetria computadorizada quando há suspeita de comprometimento significativo do campo visual",
      "Investigação completa da causa oftalmológica de base, conforme a suspeita clínica",
    ],
    diagnosticoDiferencial: [
      "Não se aplica no sentido tradicional, já que se trata de uma categoria funcional e não de uma doença específica — o diagnóstico diferencial relevante é sempre o da causa de base (catarata, glaucoma, retinopatia diabética, DMRI, erro refrativo não corrigido, entre outras)",
    ],
    tratamento: [
      "Tratamento específico da causa de base sempre que disponível e ainda passível de reverter ou deter a progressão (cirurgia de catarata, controle de glaucoma, tratamento de retinopatia diabética/DMRI, correção de erro refrativo)",
      "Reabilitação visual (auxílios ópticos para baixa visão, treinamento de orientação e mobilidade, tecnologia assistiva) é fundamental quando o dano visual já é permanente e não passível de reversão pelo tratamento da causa de base",
      "Suporte psicossocial e orientação vocacional/educacional são componentes importantes do manejo integral, sobretudo em perda visual de início na infância ou na vida adulta produtiva",
    ],
    complicacoes: [
      "Crônica: impacto funcional, psicossocial e socioeconômico significativo e cumulativo quando a causa de base não é identificada e tratada precocemente",
    ],
    redFlags: [
      "Causa de base potencialmente tratável ou evitável (catarata, erro refrativo não corrigido, glaucoma em fase ainda controlável) classificada erroneamente como perda visual definitiva sem investigação e tentativa de tratamento adequados — sempre investigar e tratar a causa antes de assumir irreversibilidade",
    ],
    prognostico:
      "Extremamente variável, dependendo inteiramente da causa de base: excelente reversibilidade quando a causa é tratável e identificada a tempo (catarata, erro refrativo), e prognóstico permanente quando o dano estrutural já está estabelecido e irreversível (glaucoma avançado, atrofia óptica, DMRI avançada).",
    pontosDeProva: [
      "Uma parcela substancial da cegueira e baixa visão no mundo é evitável — catarata não operada e erro refrativo não corrigido estão entre as causas mais comuns e mais facilmente tratáveis, reforçando a importância do acesso a cuidados oftalmológicos básicos",
      "A classificação de comprometimento visual é funcional (baseada em acuidade visual e campo visual), não etiológica — sempre é necessário identificar a causa de base para definir o potencial de tratamento e a estratégia de reabilitação",
    ],
    casoClinico: {
      vinheta:
        "Homem, 68 anos, de uma comunidade rural com acesso limitado a cuidados de saúde, apresenta baixa visão bilateral progressiva há anos, nunca avaliada por oftalmologista, atualmente com dificuldade importante para atividades cotidianas.",
      pergunta: "Qual a conduta inicial mais apropriada antes de assumir perda visual definitiva?",
      raciocinio:
        "Baixa visão progressiva de longa data sem avaliação oftalmológica prévia, em contexto de acesso limitado a cuidados de saúde, levanta a possibilidade real de uma causa tratável e comum (catarata, erro refrativo não corrigido) nunca ter sido diagnosticada ou tratada.",
      conduta:
        "Realizar avaliação oftalmológica completa, incluindo refração e biomicroscopia, antes de qualquer conclusão sobre irreversibilidade — catarata e erros refrativos não corrigidos são causas altamente tratáveis e comuns de baixa visão nessa população, e devem ser ativamente excluídas ou tratadas antes de encaminhar para reabilitação de baixa visão.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Classificação de comprometimento visual e principais causas evitáveis no mundo", fonte: "fonte pendente" },
      { tema: "Papel da reabilitação visual em perda visual permanente", fonte: "Vaughan & Asbury's General Ophthalmology, 19ª ed." },
    ],
  },
  {
    slug: "nistagmo",
    nome: "Nistagmo e outros movimentos irregulares do olho",
    sinonimos: [],
    cid10: "H55",
    especialidade: "Oftalmologia",
    etiologia: "Multifatorial",
    resumo: "Movimento ocular rítmico e involuntário, congênito ou adquirido — a distinção entre essas duas formas orienta toda a investigação e é o ponto central da avaliação clínica.",
    definicao:
      "Movimento ocular rítmico, repetitivo e involuntário, que pode ser congênito (presente desde os primeiros meses de vida) ou adquirido (de início em qualquer idade posterior, geralmente sinalizando doença neurológica ou vestibular de base), classificado quanto ao padrão do movimento (pendular, com velocidade igual em ambas as direções, ou em solavanco/jerk, com uma fase rápida e uma lenta).",
    epidemiologia:
      "Nistagmo congênito geralmente se manifesta nos primeiros meses de vida, podendo ser idiopático (isolado) ou associado a outras condições oculares congênitas (albinismo, acromatopsia, catarata congênita, hipoplasia do nervo óptico). Nistagmo adquirido no adulto é sempre um achado que exige investigação neurológica, dada a associação frequente com doença do tronco encefálico, cerebelo ou do sistema vestibular.",
    fisiopatologia:
      "No nistagmo congênito, acredita-se em uma alteração no desenvolvimento dos mecanismos neurais de fixação e estabilização ocular nos primeiros meses de vida, por vezes associada a comprometimento sensorial visual congênito de base (o próprio comprometimento da visão nos primeiros meses pode contribuir para o desenvolvimento do nistagmo). No nistagmo adquirido, uma lesão estrutural ou funcional das vias vestibulares, cerebelares ou do tronco encefálico que controlam a estabilização do olhar resulta no padrão de movimento ocular rítmico, cujas características específicas (direção, padrão) frequentemente ajudam a localizar a lesão dentro do sistema nervoso central.",
    classificacao:
      "Classificado quanto ao início em congênito (primeiros meses de vida) e adquirido (qualquer idade posterior). Classificado quanto ao padrão de movimento em pendular (velocidade simétrica nas duas direções) e em solavanco/jerk (fase rápida e lenta assimétricas, com a direção do nistagmo definida convencionalmente pela fase rápida). Nistagmo adquirido subclassificado conforme a localização neuroanatômica sugerida pelo padrão específico (por exemplo, nistagmo vertical batendo para baixo sugerindo lesão de junção cervicomedular/cerebelar).",
    quadroClinico: [
      "Nistagmo congênito: geralmente bem tolerado subjetivamente (o paciente não percebe oscilopsia, ou percepção de que o ambiente está se movendo, apesar do movimento ocular objetivamente visível), frequentemente associado a uma 'posição de bloqueio' onde a amplitude do nistagmo diminui e a acuidade visual melhora",
      "Nistagmo adquirido: frequentemente associado a oscilopsia (percepção subjetiva de que o ambiente está se movendo), o que o distingue clinicamente do nistagmo congênito, além de outros sintomas neurológicos ou vestibulares associados (vertigem, ataxia, diplopia) conforme a causa de base",
    ],
    diagnostico: [
      "Caracterização detalhada do padrão do nistagmo (direção, se pendular ou em solavanco, se varia com a posição do olhar ou da cabeça) é essencial tanto para diferenciar congênito de adquirido quanto para sugerir a localização neuroanatômica no caso adquirido",
      "Investigação neurológica completa é sempre indicada em nistagmo de início adquirido, dada a associação frequente com doença estrutural do sistema nervoso central",
    ],
    examesComplementares: [
      "Ressonância magnética de crânio (com atenção a fossa posterior/tronco encefálico e cerebelo) em todo nistagmo adquirido, para investigar lesão estrutural de base",
      "Avaliação oftalmológica completa em nistagmo congênito, para identificar condições oculares associadas (albinismo, hipoplasia do nervo óptico, acromatopsia, catarata congênita)",
      "Avaliação otoneurológica quando há suspeita de componente vestibular periférico associado",
    ],
    diagnosticoDiferencial: [
      "Opsoclonus (movimentos oculares caóticos e multidirecionais, distintos do padrão rítmico do nistagmo, associados a diferentes causas, incluindo síndromes paraneoplásicas)",
      "Movimentos oculares voluntários rítmicos (raros, mas que podem mimetizar nistagmo em avaliação superficial)",
    ],
    tratamento: [
      "Nistagmo congênito: correção óptica de erros refrativos associados; em casos selecionados com posição de bloqueio significativa e tortícolo compensatório importante, cirurgia dos músculos extraoculares pode reduzir a necessidade dessa posição compensatória",
      "Nistagmo adquirido: tratamento dirigido à causa neurológica ou vestibular de base identificada; tratamento farmacológico sintomático (conforme a causa) pode ser considerado em casos selecionados para reduzir a oscilopsia incapacitante",
    ],
    complicacoes: [
      "Crônica: baixa acuidade visual associada ao nistagmo congênito quando há condição ocular de base significativa concomitante (albinismo, hipoplasia do nervo óptico); impacto funcional da oscilopsia persistente no nistagmo adquirido não tratável",
    ],
    redFlags: [
      "Nistagmo de início na vida adulta (adquirido) — sempre investigação neurológica ativa, dada a associação frequente e potencialmente grave com doença estrutural do sistema nervoso central (tumor, doença desmielinizante, doença vascular)",
      "Nistagmo associado a outros sinais neurológicos focais (ataxia, diplopia, disartria) — reforça a necessidade de investigação neurológica urgente para localizar e caracterizar a lesão de base",
    ],
    prognostico:
      "No nistagmo congênito isolado, o prognóstico visual funcional é geralmente bom, sobretudo quando não há condição ocular associada significativa. No nistagmo adquirido, o prognóstico depende inteiramente da causa neurológica de base identificada e de sua tratabilidade.",
    pontosDeProva: [
      "A presença de oscilopsia (percepção de que o ambiente está se movendo) é um achado importante que sugere nistagmo adquirido, diferente do nistagmo congênito, tipicamente bem tolerado subjetivamente apesar do movimento ocular objetivo",
      "Todo nistagmo de início na vida adulta deve ser considerado adquirido até prova em contrário e investigado neurologicamente — não deve ser atribuído a uma variante idiopática sem essa investigação",
      "A 'posição de bloqueio' (posição da cabeça onde a amplitude do nistagmo congênito diminui e a visão melhora) explica por que crianças com nistagmo congênito frequentemente adotam uma inclinação característica da cabeça",
    ],
    casoClinico: {
      vinheta:
        "Homem, 45 anos, relata início de movimentos oculares involuntários e sensação de que o ambiente está 'tremendo' (oscilopsia) há 2 semanas, associados a desequilíbrio para caminhar.",
      pergunta: "Qual a principal preocupação diagnóstica e a conduta?",
      raciocinio:
        "Nistagmo de início recente na vida adulta, associado a oscilopsia e desequilíbrio, é um nistagmo adquirido até prova em contrário, achado que exige investigação neurológica ativa para lesão estrutural do sistema nervoso central, sobretudo de fossa posterior/cerebelo.",
      conduta:
        "Encaminhamento neurológico urgente com ressonância magnética de crânio, com atenção especial à fossa posterior e ao tronco encefálico, para investigar a causa estrutural de base do nistagmo adquirido e do desequilíbrio associado.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Classificação congênito vs. adquirido e valor localizatório do padrão de nistagmo", fonte: "Kanski's Clinical Ophthalmology, 9ª ed." },
      { tema: "Associação de nistagmo adquirido com doença neurológica estrutural", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "ait-ataque-isquemico-transitorio",
    nome: "Ataque isquêmico transitório (AIT)",
    sinonimos: ["AIT", "Isquemia cerebral transitória"],
    cid10: "G45",
    especialidade: "Neurologia",
    etiologia: "Multifatorial",
    resumo: "Episódio transitório de disfunção neurológica focal por isquemia cerebral, sem infarto estabelecido — um alerta de altíssimo risco de AVC iminente, exigindo investigação e conduta com a mesma urgência de um evento já estabelecido.",
    definicao:
      "Episódio transitório de disfunção neurológica focal causado por isquemia cerebral, medular ou retiniana, sem evidência de infarto agudo em exame de imagem (definição tecidual atual, que substituiu o antigo critério puramente temporal de duração menor que 24 horas).",
    epidemiologia:
      "O risco de AVC estabelecido após um AIT é maior nos primeiros dias após o evento, concentrando-se predominantemente na primeira semana — daí a classificação do AIT como uma emergência médica equivalente a um AVC em termos de urgência de investigação e tratamento, não um evento benigno a ser investigado ambulatorialmente com calma.",
    fisiopatologia:
      "Mecanismo idêntico ao do AVC isquêmico estabelecido (embolia de origem cardíaca ou arterial, doença aterosclerótica de grandes vasos, doença de pequenos vasos), diferindo apenas pela resolução completa do déficit antes que ocorra infarto tecidual permanente, geralmente por reperfusão espontânea rápida (lise do êmbolo ou resolução do vasoespasmo/hipoperfusão transitória).",
    classificacao:
      "Não há mais classificação baseada em duração (o antigo critério de menos de 24 horas foi abandonado) — a definição atual é tecidual, baseada na ausência de infarto em imagem, independentemente da duração dos sintomas. O escore ABCD2 (idade, pressão arterial, achados clínicos, duração, diabetes) é usado para estratificar o risco de AVC subsequente e orientar a urgência da investigação.",
    quadroClinico: [
      "Déficit neurológico focal de início súbito, com resolução completa em minutos a poucas horas (por definição, sem infarto residual em imagem)",
      "Sintomas variam conforme o território vascular acometido: fraqueza/dormência unilateral, alteração de fala (disartria/afasia), amaurose fugaz (perda visual monocular transitória, quando há acometimento da circulação retiniana), ataxia, entre outros",
      "Resolução completa dos sintomas é a regra, mas não deve ser interpretada como tranquilizadora — o risco de AVC subsequente permanece alto",
    ],
    diagnostico: [
      "Diagnóstico clínico pela história do episódio transitório, mas exige confirmação por neuroimagem para excluir infarto estabelecido (que reclassificaria o evento como AVC, não AIT) e para iniciar a investigação etiológica imediatamente",
      "Estratificação de risco pelo escore ABCD2 para definir a urgência da investigação e conduta (internação vs. investigação ambulatorial acelerada)",
    ],
    examesComplementares: [
      "Ressonância magnética de crânio com sequência de difusão (mais sensível que tomografia para identificar infarto agudo, mesmo pequeno) é o exame de escolha quando disponível",
      "Avaliação vascular (ultrassom Doppler de carótidas e vertebrais, angiotomografia ou angiorressonância) para identificar estenose significativa como fonte do evento",
      "Avaliação cardíaca (eletrocardiograma, ecocardiograma, monitorização de ritmo prolongada) para investigar fonte embólica cardíaca, sobretudo fibrilação atrial",
    ],
    diagnosticoDiferencial: [
      "Enxaqueca com aura (sintomas neurológicos transitórios, mas tipicamente com progressão mais lenta e características visuais positivas, diferente do déficit negativo súbito do AIT)",
      "Crise epiléptica focal com paralisia de Todd (déficit motor pós-ictal transitório, contexto de crise convulsiva observada ou relatada)",
      "Hipoglicemia (pode mimetizar déficit focal transitório, facilmente excluída/tratada com glicemia capilar)",
    ],
    tratamento: [
      "Antiagregação plaquetária (classe de medicamento ainda sem ficha própria de uso agudo no site) é a base do tratamento imediato na maioria dos casos não cardioembólicos",
      "Anticoagulação quando há fonte cardioembólica identificada (fibrilação atrial, por exemplo), com a varfarina entre as opções terapêuticas já documentadas no site para essa indicação",
      "Estatina de alta potência como parte do pacote de prevenção secundária, independentemente do nível basal de LDL, reduzindo o risco de eventos vasculares recorrentes",
      "Controle rigoroso de fatores de risco vascular (hipertensão, diabetes, tabagismo) e investigação/tratamento cirúrgico de estenose carotídea significativa quando identificada",
    ],
    complicacoes: [
      "Aguda: AVC isquêmico estabelecido nos dias seguintes ao AIT — a complicação mais temida e o motivo da urgência investigativa equivalente a um AVC já estabelecido",
    ],
    redFlags: [
      "Escore ABCD2 elevado (idade ≥60 anos, pressão arterial elevada, déficit motor/de fala, duração prolongada, diabetes) — indica risco muito alto de AVC nos dias seguintes e justifica internação para investigação e início imediato de tratamento",
      "Múltiplos episódios de AIT em curto intervalo de tempo ('AIT em crescendo') — sinaliza instabilidade hemodinâmica ou trombótica ativa, com risco iminente de AVC estabelecido",
    ],
    prognostico:
      "O AIT em si não deixa sequela neurológica permanente por definição, mas representa um marcador de altíssimo risco para AVC subsequente, concentrado principalmente na primeira semana após o evento — a intervenção precoce e agressiva (investigação e tratamento iniciados em caráter de urgência) reduz substancialmente esse risco.",
    pontosDeProva: [
      "A definição atual de AIT é tecidual (ausência de infarto em imagem), não mais temporal (menos de 24 horas) — mudança conceitual importante em relação a definições mais antigas",
      "O risco de AVC após AIT é maior justamente nos primeiros dias — por isso o AIT deve ser investigado e tratado com a mesma urgência de um AVC estabelecido, nunca como um evento benigno a ser avaliado com calma ambulatorialmente",
      "O escore ABCD2 é a ferramenta clássica de estratificação de risco cobrada para decidir a urgência da investigação e da internação",
    ],
    casoClinico: {
      vinheta:
        "Homem, 67 anos, hipertenso, relata episódio de fraqueza no braço e na perna esquerdos e dificuldade para falar, com duração de cerca de 20 minutos e resolução espontânea completa antes de chegar ao pronto-socorro.",
      pergunta: "Qual a conduta apropriada diante desse quadro, apesar da resolução completa dos sintomas?",
      raciocinio:
        "Resolução completa dos sintomas não torna o quadro benigno — trata-se de um ataque isquêmico transitório, com risco elevado de AVC estabelecido nos dias seguintes, concentrado principalmente na primeira semana após o evento.",
      conduta:
        "Internação para investigação urgente (ressonância magnética com difusão, avaliação vascular carotídea, avaliação cardíaca para fonte embólica) e início imediato de antiagregação plaquetária e estatina de alta potência, com a mesma urgência que seria dada a um AVC já estabelecido.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "sinvastatina", nome: "Sinvastatina" },
    ],
    medicamentosSecaoTitulo: "Medicamento para prevenção secundária (não trata o evento agudo)",
    medicamentosNota:
      "A sinvastatina cobre apenas a prevenção secundária de eventos vasculares recorrentes. O tratamento agudo de primeira linha é a antiagregação plaquetária (AAS/clopidogrel) e, quando há fonte cardioembólica, anticoagulação — classes ainda sem ficha própria específica para essa indicação no site.",
    fontes: [
      { tema: "Definição tecidual atual e uso do escore ABCD2", fonte: "American Heart Association/American Stroke Association Guideline for the Prevention of Stroke in Patients With Stroke and Transient Ischemic Attack" },
      { tema: "Estatina de alta potência na prevenção secundária independente do LDL basal", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "avc-isquemico-infarto-cerebral",
    nome: "Infarto cerebral (AVC isquêmico)",
    sinonimos: ["AVC isquêmico", "Acidente vascular cerebral isquêmico"],
    cid10: "I63",
    especialidade: "Neurologia",
    etiologia: "Multifatorial",
    resumo: "Infarto de tecido cerebral por interrupção do fluxo sanguíneo, principal causa de incapacidade neurológica adquirida em adultos — o tratamento é extremamente tempo-dependente ('tempo é cérebro').",
    definicao:
      "Infarto (morte tecidual) de uma área do encéfalo resultante da interrupção do fluxo sanguíneo arterial, causando déficit neurológico focal correspondente ao território vascular acometido, com potencial de sequela permanente proporcional à extensão e localização da lesão e ao tempo até a reperfusão.",
    epidemiologia:
      "É uma das principais causas de morte e a principal causa de incapacidade neurológica adquirida em adultos no mundo. Os principais mecanismos etiológicos incluem doença aterosclerótica de grandes vasos, doença de pequenos vasos (lacunar, associada a hipertensão crônica) e embolia de origem cardíaca (sobretudo por fibrilação atrial).",
    fisiopatologia:
      "A interrupção do fluxo sanguíneo arterial (por trombose local sobre placa aterosclerótica, embolia de origem cardíaca ou arterial, ou oclusão de pequenos vasos perfurantes) priva o tecido cerebral de oxigênio e glicose, iniciando uma cascata isquêmica com falência energética, despolarização anóxica, excitotoxicidade por glutamato e, progressivamente, morte celular (necrose no núcleo isquêmico central, com uma zona de penumbra ao redor que permanece potencialmente salvável por um período limitado se o fluxo for restaurado a tempo).",
    classificacao:
      "Classificado etiologicamente pelo sistema TOAST em aterotrombótico (grandes vasos), cardioembólico, lacunar (pequenos vasos), de outra causa determinada (dissecção arterial, estados de hipercoagulabilidade, entre outras) e de causa indeterminada. Também classificado pela extensão e território vascular acometido (circulação anterior vs. posterior), relevante para o quadro clínico e as opções terapêuticas.",
    quadroClinico: [
      "Déficit neurológico focal de início súbito, cujo padrão específico depende do território vascular acometido: fraqueza e/ou dormência unilateral (face, braço, perna), alteração de fala (disartria ou afasia), desvio do olhar conjugado, ataxia, ou alteração de campo visual",
      "Sintomas de circulação posterior (vertebrobasilar): vertigem, diplopia, ataxia, disartria, podendo ser mais sutis e confundidos com causas periféricas/vestibulares",
      "Cefaleia, náusea e rebaixamento do nível de consciência são menos proeminentes que na hemorragia intracerebral, mas podem ocorrer em infartos extensos",
    ],
    diagnostico: [
      "Reconhecimento rápido dos sinais de alarme pela população geral e por profissionais de saúde (escalas simplificadas como FAST — face, arm, speech, time) é essencial para acionamento precoce do sistema de emergência, dado que o tratamento é extremamente tempo-dependente",
      "Tomografia de crânio sem contraste é o exame inicial obrigatório e urgente em todo paciente com suspeita de AVC, tendo como objetivo principal excluir hemorragia antes de qualquer decisão sobre trombólise, já que o quadro clínico isoladamente não distingue com segurança AVC isquêmico de hemorrágico",
    ],
    examesComplementares: [
      "Tomografia de crânio sem contraste, exame inicial obrigatório para excluir hemorragia antes de trombólise",
      "Angiotomografia de crânio e pescoço quando há suspeita de oclusão de grande vaso, para avaliar elegibilidade para trombectomia mecânica",
      "Ressonância magnética com difusão para confirmação e delimitação do infarto quando a tomografia inicial é inconclusiva",
      "Investigação etiológica completa (ecocardiograma, monitorização de ritmo cardíaco, avaliação vascular cervical) para definir a estratégia de prevenção secundária",
    ],
    diagnosticoDiferencial: [
      "Hemorragia intracerebral (clinicamente pode ser indistinguível do AVC isquêmico — a distinção depende da tomografia de crânio, etapa obrigatória antes de qualquer tratamento trombolítico)",
      "Crise epiléptica focal com paralisia de Todd pós-ictal",
      "Hipoglicemia (sempre excluída rapidamente com glicemia capilar, por mimetizar déficit focal e ser prontamente reversível)",
      "Enxaqueca com aura prolongada",
    ],
    tratamento: [
      "Trombólise intravenosa dentro da janela terapêutica estabelecida (classicamente até 4,5 horas do início dos sintomas, em pacientes elegíveis sem contraindicações) é o tratamento de reperfusão de primeira linha (classe de medicamento trombolítico ainda sem ficha própria no site)",
      "Trombectomia mecânica em casos selecionados com oclusão de grande vaso confirmada, podendo ser realizada em janela de tempo mais ampla que a trombólise isolada conforme critérios de imagem",
      "Controle cuidadoso da pressão arterial na fase aguda, com metas específicas que diferem conforme o paciente seja ou não candidato à trombólise",
      "Antiagregação plaquetária (quando a trombólise não é indicada ou após sua janela de segurança) e estatina de alta potência como parte do tratamento e da prevenção secundária desde a fase aguda",
      "Reabilitação multiprofissional precoce (fisioterapia, fonoaudiologia, terapia ocupacional) para maximizar a recuperação funcional",
    ],
    complicacoes: [
      "Aguda: transformação hemorrágica do infarto (mais comum em infartos extensos ou após trombólise), edema cerebral com risco de herniação em infartos extensos ('infarto maligno'), convulsões",
      "Crônica: déficit neurológico permanente proporcional à extensão e localização da lesão, espasticidade, disfagia com risco de pneumonia aspirativa, depressão pós-AVC",
    ],
    redFlags: [
      "Qualquer déficit neurológico focal de início súbito — deve ser tratado como AVC até prova em contrário, com acionamento imediato do sistema de emergência, dado que o benefício da trombólise é diretamente proporcional à rapidez do tratamento ('tempo é cérebro')",
      "Rebaixamento progressivo do nível de consciência ou sinais de herniação em infarto extenso — pode exigir craniectomia descompressiva de urgência em casos selecionados de infarto maligno",
    ],
    prognostico:
      "Extremamente variável, dependendo da extensão e localização do infarto, do tempo até o tratamento de reperfusão, e de comorbidades associadas. O tratamento precoce (trombólise e/ou trombectomia dentro das janelas terapêuticas) melhora substancialmente o desfecho funcional, reforçando a importância crítica do reconhecimento e encaminhamento rápidos.",
    pontosDeProva: [
      "'Tempo é cérebro' — a eficácia da trombólise e da trombectomia é diretamente dependente do tempo decorrido desde o início dos sintomas, tornando o reconhecimento e o transporte rápidos tão importantes quanto o tratamento em si",
      "Tomografia de crânio sem contraste é sempre o primeiro exame, com o objetivo primário de excluir hemorragia — o quadro clínico isoladamente não distingue com segurança AVC isquêmico de hemorrágico",
      "O sistema de classificação TOAST (aterotrombótico, cardioembólico, lacunar, outra causa, indeterminado) organiza a investigação etiológica e orienta a estratégia específica de prevenção secundária",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 72 anos, é trazida ao pronto-socorro por familiares que notaram, há 1 hora, desvio da comissura labial, fraqueza no braço direito e dificuldade importante para falar.",
      pergunta: "Qual a conduta imediata prioritária?",
      raciocinio:
        "Déficit neurológico focal de início súbito é AVC até prova em contrário, e o tratamento é extremamente tempo-dependente — a prioridade absoluta é a tomografia de crânio sem contraste urgente para excluir hemorragia e definir elegibilidade para trombólise dentro da janela terapêutica.",
      conduta:
        "Acionamento imediato do protocolo de AVC, tomografia de crânio sem contraste de urgência para excluir hemorragia, e, se confirmado AVC isquêmico dentro da janela terapêutica e sem contraindicações, iniciar trombólise intravenosa o mais rapidamente possível, avaliando também elegibilidade para trombectomia mecânica se houver oclusão de grande vaso.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "sinvastatina", nome: "Sinvastatina" },
    ],
    medicamentosSecaoTitulo: "Medicamento para prevenção secundária (não trata o evento agudo)",
    medicamentosNota:
      "A sinvastatina cobre apenas a prevenção secundária de novos eventos vasculares. O tratamento agudo de reperfusão (trombolítico) e a antiagregação/anticoagulação de fase aguda ainda não têm ficha própria no site.",
    fontes: [
      { tema: "Fisiopatologia, classificação TOAST e conduta de reperfusão tempo-dependente", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Estatina de alta potência na prevenção secundária desde a fase aguda", fonte: "American Heart Association/American Stroke Association Guideline for the Prevention of Stroke in Patients With Stroke and Transient Ischemic Attack" },
    ],
  },
  {
    slug: "hemorragia-intracerebral",
    nome: "Hemorragia intracerebral (AVC hemorrágico)",
    sinonimos: ["AVC hemorrágico", "Hematoma intraparenquimatoso"],
    cid10: "I61",
    especialidade: "Neurologia",
    etiologia: "Multifatorial",
    resumo: "Sangramento espontâneo dentro do parênquima cerebral, mais comumente por hipertensão arterial crônica — quadro de maior gravidade e mortalidade aguda que o AVC isquêmico, com manejo inicial completamente distinto.",
    definicao:
      "Extravasamento espontâneo de sangue para o interior do parênquima cerebral, formando um hematoma que causa dano tecidual direto (efeito de massa e destruição mecânica) e, frequentemente, edema perilesional progressivo nos dias seguintes, distinto do AVC isquêmico tanto na fisiopatologia quanto no manejo agudo.",
    epidemiologia:
      "A hipertensão arterial crônica não controlada é o principal fator de risco e a causa mais comum, tipicamente acometendo estruturas profundas (gânglios da base, tálamo, ponte, cerebelo) por ruptura de pequenas artérias perfurantes cronicamente lesadas. A angiopatia amiloide cerebral é uma causa importante em idosos, tipicamente com hemorragias lobares (corticais) recorrentes. Uso de anticoagulantes e malformações vasculares (aneurismas, malformações arteriovenosas) são outras causas relevantes.",
    fisiopatologia:
      "A ruptura de um vaso sanguíneo cerebral (mais comumente pequenas artérias perfurantes cronicamente lesadas pela hipertensão) libera sangue diretamente no parênquima, causando dano tecidual mecânico imediato pelo efeito de massa do hematoma, seguido de uma fase de expansão do hematoma nas primeiras horas em uma proporção significativa dos casos, e de edema perilesional progressivo nos dias subsequentes, ambos contribuindo para a deterioração neurológica que pode ocorrer mesmo após a estabilização inicial.",
    classificacao:
      "Classificada pela localização em profunda (gânglios da base, tálamo, ponte, cerebelo — tipicamente associada a hipertensão crônica) e lobar/cortical (mais associada a angiopatia amiloide em idosos ou a malformações vasculares em pacientes mais jovens). Escalas de gravidade (como o escore ICH) combinam volume do hematoma, localização, nível de consciência e idade para estimar prognóstico.",
    quadroClinico: [
      "Déficit neurológico focal de início súbito, frequentemente com progressão ao longo de minutos a horas (diferente da instalação mais estática do déficit isquêmico), refletindo a expansão do hematoma",
      "Cefaleia intensa, náusea/vômitos e rebaixamento do nível de consciência são mais proeminentes e mais precoces que no AVC isquêmico, refletindo o efeito de massa agudo",
      "Elevação da pressão arterial frequentemente muito acentuada no momento do evento",
    ],
    diagnostico: [
      "Tomografia de crânio sem contraste é o exame diagnóstico central e imediato, identificando a hiperdensidade característica do sangue agudo e permitindo a distinção definitiva com o AVC isquêmico, que não pode ser feita com segurança apenas pela clínica",
      "Investigação da causa de base (controle de pressão arterial, uso de anticoagulante, avaliação para malformação vascular subjacente em pacientes jovens ou com localização atípica)",
    ],
    examesComplementares: [
      "Tomografia de crânio sem contraste (exame inicial obrigatório e definidor)",
      "Angiotomografia com sinal de 'spot' (extravasamento de contraste dentro do hematoma), quando disponível, para identificar pacientes com maior risco de expansão do hematoma",
      "Investigação de coagulopatia e uso de anticoagulante/antiagregante, essencial para orientar reversão imediata quando aplicável",
      "Angiografia ou angiorressonância em pacientes jovens, sem hipertensão conhecida, ou com hemorragia de localização atípica, para investigar malformação vascular subjacente",
    ],
    diagnosticoDiferencial: [
      "AVC isquêmico (indistinguível clinicamente com segurança sem tomografia — a distinção é sempre feita por imagem, nunca apenas pela apresentação clínica)",
      "Hemorragia subaracnóidea (cefaleia clássica em 'trovoada', sangue predominantemente no espaço subaracnóideo em vez de intraparenquimatoso à tomografia)",
      "Tumor cerebral com sangramento intratumoral (história mais insidiosa prévia ao evento agudo, achados de imagem sugestivos de lesão de base)",
    ],
    tratamento: [
      "Reversão imediata de anticoagulação quando presente é prioridade absoluta e tempo-dependente, já que reduz o risco de expansão do hematoma",
      "Controle intensivo da pressão arterial na fase aguda, com metas específicas mais rigorosas que no AVC isquêmico, visando reduzir o risco de expansão do hematoma",
      "Monitorização neurológica intensiva, com avaliação seriada do nível de consciência para detectar precocemente sinais de deterioração",
      "Intervenção neurocirúrgica (evacuação do hematoma, ventriculostomia para hidrocefalia obstrutiva associada, craniectomia descompressiva) reservada a casos selecionados conforme volume, localização e nível de consciência",
    ],
    complicacoes: [
      "Aguda: expansão do hematoma nas primeiras horas, hidrocefalia obstrutiva (sobretudo em hemorragias com extensão intraventricular ou de fossa posterior), herniação cerebral em hematomas extensos",
      "Crônica: déficit neurológico permanente proporcional ao volume e localização do hematoma, recorrência (sobretudo na angiopatia amiloide cerebral, com risco de hemorragias lobares repetidas)",
    ],
    redFlags: [
      "Uso de anticoagulante em paciente com hemorragia intracerebral — reversão imediata é prioridade absoluta e tempo-dependente, antes mesmo de considerações sobre intervenção cirúrgica",
      "Deterioração progressiva do nível de consciência nas primeiras horas — sinaliza expansão do hematoma ou hidrocefalia obstrutiva em desenvolvimento, exigindo reavaliação de imagem e possível intervenção neurocirúrgica urgente",
      "Hemorragia lobar recorrente em paciente idoso sem hipertensão significativa — sugere angiopatia amiloide cerebral, com implicações para decisões futuras sobre anticoagulação/antiagregação",
    ],
    prognostico:
      "Reservado, com mortalidade aguda mais alta que a do AVC isquêmico, proporcional ao volume do hematoma, à localização (hemorragias de tronco encefálico e as com extensão intraventricular têm pior prognóstico) e ao nível de consciência na apresentação. Sobreviventes frequentemente apresentam déficit neurológico residual significativo, embora uma recuperação funcional relevante seja possível em casos com hematomas menores e tratamento oportuno.",
    pontosDeProva: [
      "A distinção entre AVC isquêmico e hemorrágico não pode ser feita com segurança apenas pela clínica — a tomografia de crânio sem contraste é sempre obrigatória e definidora antes de qualquer decisão terapêutica",
      "Reversão de anticoagulação é prioridade tempo-dependente na hemorragia intracerebral, reduzindo o risco de expansão do hematoma nas primeiras horas — um dos poucos momentos em que a rapidez da reversão muda diretamente o desfecho",
      "Hipertensão crônica não controlada é a causa mais comum de hemorragia intracerebral profunda (gânglios da base, tálamo, ponte, cerebelo); angiopatia amiloide cerebral é a causa clássica de hemorragia lobar recorrente em idosos",
    ],
    casoClinico: {
      vinheta:
        "Homem, 61 anos, hipertenso com controle irregular, é encontrado por familiares com cefaleia intensa súbita, vômitos e rebaixamento progressivo do nível de consciência ao longo de 30 minutos, associados a hemiparesia esquerda.",
      pergunta: "Qual a conduta diagnóstica imediata e por que ela é indispensável antes de qualquer tratamento específico?",
      raciocinio:
        "O quadro de cefaleia intensa, vômitos e deterioração progressiva do nível de consciência associados a déficit focal sugere hemorragia intracerebral, mas essa distinção do AVC isquêmico não pode ser feita com segurança apenas pela clínica — a tomografia de crânio sem contraste é obrigatória e definidora antes de qualquer decisão terapêutica, já que os tratamentos das duas condições são completamente diferentes (e a trombólise seria contraindicada e perigosa em caso de hemorragia).",
      conduta:
        "Tomografia de crânio sem contraste de urgência para confirmar o diagnóstico; se confirmada hemorragia intracerebral, controle intensivo da pressão arterial, investigação e reversão imediata de qualquer anticoagulação em uso, e monitorização neurológica intensiva com avaliação para intervenção neurocirúrgica conforme volume e evolução do hematoma.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Fisiopatologia, causas por localização e conduta na fase aguda", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Prioridade de reversão de anticoagulação e controle pressórico intensivo", fonte: "American Heart Association/American Stroke Association Guideline for the Management of Spontaneous Intracerebral Hemorrhage" },
    ],
  },
  {
    slug: "epilepsia",
    nome: "Epilepsia",
    sinonimos: ["Transtorno convulsivo crônico"],
    cid10: "G40",
    especialidade: "Neurologia",
    etiologia: "Multifatorial",
    resumo: "Tendência duradoura a crises epilépticas recorrentes e não provocadas, por descargas neuronais excessivas e síncronas — diagnóstico clínico predominantemente baseado na história, com tratamento individualizado por tipo de crise.",
    definicao:
      "Doença cerebral caracterizada por uma predisposição duradoura a gerar crises epilépticas (descargas neuronais excessivas e síncronas causando manifestações clínicas paroxísticas), definida operacionalmente por pelo menos duas crises não provocadas com intervalo maior que 24 horas, ou uma única crise não provocada associada a risco de recorrência similar ao de pacientes com duas crises (por exemplo, na presença de lesão estrutural epileptogênica identificada).",
    epidemiologia:
      "Uma das doenças neurológicas crônicas mais prevalentes em todas as faixas etárias. As causas variam amplamente por idade: causas estruturais/genéticas e malformações são mais relevantes na infância; trauma e causas idiopáticas/genéticas no adulto jovem; doença cerebrovascular, tumores e doenças neurodegenerativas ganham importância crescente em idosos, que representam a faixa etária com incidência de início mais rapidamente crescente.",
    fisiopatologia:
      "Um desequilíbrio entre mecanismos excitatórios (glutamatérgicos) e inibitórios (GABAérgicos) em uma população neuronal, seja por alteração genética de canais iônicos, lesão estrutural (cicatriz cortical, malformação, tumor), ou distúrbio metabólico, permite a geração de descargas elétricas excessivas e sincronizadas que se propagam e geram a manifestação clínica da crise, cuja semiologia depende da área cortical de origem e do padrão de propagação.",
    classificacao:
      "Crises classificadas quanto ao início em focais (originadas em uma rede neuronal localizada em um hemisfério, podendo evoluir para bilateral tônico-clônica) e generalizadas (envolvendo redes neuronais distribuídas bilateralmente desde o início). Também classificadas por manter ou não a consciência preservada durante a crise focal. Etiologicamente classificada em estrutural, genética, infecciosa, metabólica, imune ou de causa desconhecida.",
    quadroClinico: [
      "Crise focal com consciência preservada: sintomas motores, sensitivos, autonômicos ou psíquicos localizados, sem perda de consciência",
      "Crise focal com consciência alterada: automatismos (movimentos repetitivos sem propósito, como mastigação ou manipulação de objetos), confusão pós-ictal",
      "Crise tônico-clônica generalizada: perda súbita de consciência, fase tônica (rigidez) seguida de fase clônica (abalos rítmicos), podendo haver liberação esfincteriana e mordedura de língua, com confusão pós-ictal prolongada característica",
      "Crise de ausência (tipo de crise generalizada, mais comum na infância): breve interrupção da consciência sem queda, sem confusão pós-ictal significativa, podendo ser confundida com desatenção",
    ],
    diagnostico: [
      "Diagnóstico predominantemente clínico, baseado em uma história detalhada do evento (idealmente com relato de testemunha), incluindo pródromos, semiologia da crise, e estado pós-ictal",
      "Eletroencefalograma apoia o diagnóstico e ajuda a classificar o tipo de epilepsia, mas um EEG normal entre crises não exclui o diagnóstico, já que a sensibilidade de um único exame é limitada",
    ],
    examesComplementares: [
      "Eletroencefalograma (idealmente com privação de sono ou prolongado, para aumentar a sensibilidade de detecção de atividade epileptiforme)",
      "Ressonância magnética de crânio para investigar lesão estrutural epileptogênica, exame de escolha na investigação etiológica",
      "Exames laboratoriais (glicemia, eletrólitos, função renal/hepática) para excluir causas metabólicas de crise em contexto agudo, sobretudo na primeira crise",
    ],
    diagnosticoDiferencial: [
      "Síncope (perda de consciência transitória por hipoperfusão cerebral global, pode ter abalos mioclônicos breves que mimetizam crise, mas com recuperação mais rápida e sem confusão pós-ictal prolongada típica)",
      "Crise não epiléptica psicogênica (semiologia atípica, sem correlato eletroencefalográfico durante o evento, frequentemente com duração mais prolongada e variável)",
      "Distúrbios do movimento paroxísticos e enxaqueca com aura em determinados contextos",
    ],
    tratamento: [
      "Fármaco antiepiléptico é a base do tratamento, escolhido conforme o tipo de crise/síndrome epiléptica, comorbidades e perfil de efeitos adversos (classes de medicamento antiepiléptico de manutenção ainda sem ficha própria no site)",
      "Monoterapia é preferida inicialmente, com boa resposta na maioria dos pacientes; politerapia reservada a casos refratários à monoterapia otimizada",
      "Tratamento cirúrgico (ressecção de foco epileptogênico) considerado em epilepsia focal refratária a múltiplos fármacos antiepilépticos, quando um foco bem definido é identificado",
      "Orientação sobre restrições de segurança (direção veicular, atividades de risco) conforme legislação e controle de crises",
    ],
    complicacoes: [
      "Aguda: estado de mal epiléptico (crise prolongada ou crises repetidas sem recuperação completa entre elas) e morte súbita inesperada na epilepsia (SUDEP), mais associada a crises tônico-clônicas generalizadas não controladas",
      "Crônica: impacto psicossocial significativo, comorbidade com depressão e ansiedade, e restrições funcionais (direção, algumas profissões) enquanto as crises não estiverem controladas",
    ],
    redFlags: [
      "Crise prolongada (mais de 5 minutos) ou crises repetidas sem recuperação completa da consciência entre elas — configura estado de mal epiléptico, emergência que exige tratamento imediato",
      "Primeira crise em adulto com febre, rigidez de nuca ou outros sinais de infecção do sistema nervoso central — investigar meningite/encefalite antes de assumir epilepsia idiopática",
      "Crises focais de início recente em paciente idoso, sobretudo com outros sinais neurológicos associados — investigar ativamente lesão estrutural (tumor, AVC) como causa de base",
    ],
    prognostico:
      "Variável: uma proporção substancial dos pacientes alcança controle completo das crises com o primeiro ou segundo fármaco antiepiléptico tentado. Uma minoria evolui com epilepsia refratária, exigindo politerapia ou avaliação para tratamento cirúrgico. O risco de morte súbita inesperada (SUDEP), embora incomum em termos absolutos, é uma preocupação real em pacientes com crises tônico-clônicas generalizadas não controladas.",
    pontosDeProva: [
      "Um EEG normal entre crises NÃO exclui epilepsia — a sensibilidade de um único exame é limitada, e o diagnóstico permanece predominantemente clínico, baseado na história do evento",
      "A distinção entre crise focal e generalizada, e entre epilepsia e síncope ou crise psicogênica não epiléptica, depende primariamente de uma história detalhada e bem colhida do evento, idealmente com relato de testemunha",
      "Crises tônico-clônicas generalizadas não controladas são o principal fator de risco para morte súbita inesperada na epilepsia (SUDEP) — reforça a importância de otimizar o controle de crises, não apenas reduzir sua frequência",
    ],
    casoClinico: {
      vinheta:
        "Adolescente, 16 anos, é trazido por ter apresentado, segundo testemunhas, perda súbita de consciência com rigidez generalizada seguida de abalos rítmicos dos quatro membros, durando cerca de 2 minutos, com confusão e sonolência por 30 minutos após o evento.",
      pergunta: "Qual a hipótese diagnóstica mais provável e a investigação inicial apropriada?",
      raciocinio:
        "A semiologia descrita (perda de consciência, fase tônica seguida de fase clônica, confusão pós-ictal prolongada) é característica de uma crise tônico-clônica generalizada, achado que, se recorrente e não provocado, define epilepsia.",
      conduta:
        "Solicitar eletroencefalograma e ressonância magnética de crânio para investigar etiologia e apoiar a classificação do tipo de epilepsia; se confirmada crise não provocada com risco significativo de recorrência, iniciar fármaco antiepiléptico apropriado ao tipo de crise identificado.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Definição operacional, classificação de crises e conduta terapêutica", fonte: "International League Against Epilepsy (ILAE), Classificação de Crises Epilépticas e Epilepsias, 2017" },
      { tema: "Risco de morte súbita inesperada na epilepsia (SUDEP)", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "estado-de-mal-epileptico",
    nome: "Estado de mal epiléptico",
    sinonimos: ["Status epilepticus"],
    cid10: "G41",
    especialidade: "Neurologia",
    etiologia: "Multifatorial",
    resumo: "Crise epiléptica prolongada ou crises repetidas sem recuperação completa entre elas — emergência neurológica com tratamento em etapas cronometradas, já que a duração da crise é diretamente proporcional ao dano neuronal e à refratariedade.",
    definicao:
      "Crise epiléptica que se prolonga além do tempo em que a maioria das crises do mesmo tipo cessaria espontaneamente (operacionalmente definido como 5 minutos para crises tônico-clônicas generalizadas), ou crises repetidas sem recuperação completa da consciência entre elas, configurando uma emergência neurológica com risco de dano neuronal permanente proporcional à duração.",
    epidemiologia:
      "Pode ocorrer como primeira manifestação de epilepsia, como descompensação de epilepsia previamente conhecida (mais comumente por suspensão abrupta ou irregularidade no uso do fármaco antiepiléptico), ou secundário a uma agressão aguda do sistema nervoso central (AVC, infecção, distúrbio metabólico, abstinência alcoólica, entre outras).",
    fisiopatologia:
      "A persistência da atividade epiléptica além do tempo usual de autolimitação reflete uma falha nos mecanismos inibitórios normais de terminação da crise, com internalização progressiva de receptores GABA-A sinápticos (reduzindo a eficácia dos benzodiazepínicos quanto mais prolongada a crise) e ativação sustentada de mecanismos excitatórios, criando um ciclo que perpetua a atividade elétrica anômala e causa dano neuronal excitotóxico proporcional à duração não tratada.",
    classificacao:
      "Classificado em convulsivo (com manifestações motoras evidentes, como abalos tônico-clônicos) e não convulsivo (alteração do nível de consciência sustentada sem manifestações motoras proeminentes, diagnóstico mais desafiador, exigindo eletroencefalograma para confirmação). Também classificado por estágio de refratariedade: inicial, estabelecido (refratário à primeira linha) e refratário/superrefratário (persistente apesar de múltiplas linhas de tratamento).",
    quadroClinico: [
      "Convulsivo: atividade motora tônico-clônica generalizada contínua ou repetida sem recuperação completa da consciência entre os episódios",
      "Não convulsivo: alteração do nível de consciência (confusão, sonolência, coma) sustentada e inexplicada por outra causa, sem os movimentos motores evidentes do tipo convulsivo — diagnóstico exige alto grau de suspeição e confirmação eletroencefalográfica",
      "Sinais de comprometimento sistêmico secundário à atividade convulsiva prolongada: hipertermia, acidose, rabdomiólise",
    ],
    diagnostico: [
      "Diagnóstico clínico imediato no tipo convulsivo, pela observação direta da atividade motora prolongada ou repetida sem recuperação",
      "Eletroencefalograma contínuo é essencial para diagnosticar o estado de mal não convulsivo e para confirmar a resolução eletrográfica da crise no tipo convulsivo tratado, já que a cessação dos movimentos motores nem sempre significa cessação da atividade elétrica",
    ],
    examesComplementares: [
      "Eletroencefalograma contínuo, sobretudo em pacientes que permanecem com alteração do nível de consciência após cessação aparente dos movimentos motores",
      "Glicemia capilar imediata (para excluir e tratar hipoglicemia, causa rapidamente reversível de crise prolongada)",
      "Eletrólitos, função renal/hepática, dosagem de nível sérico de fármaco antiepiléptico (quando o paciente já faz uso) e exame toxicológico conforme suspeita etiológica",
      "Neuroimagem e, quando indicado, punção lombar para investigar causa estrutural ou infecciosa de base",
    ],
    diagnosticoDiferencial: [
      "Crise psicogênica não epiléptica prolongada (pode mimetizar estado de mal convulsivo, mas sem correlato eletrográfico correspondente)",
      "Distúrbios do movimento paroxísticos prolongados",
      "Rebaixamento do nível de consciência por outras causas (metabólica, tóxica, estrutural) no estado de mal não convulsivo",
    ],
    tratamento: [
      "Benzodiazepínico (diazepam ou lorazepam por via intravenosa) é o tratamento de primeira linha, devendo ser administrado o mais rapidamente possível — a eficácia do benzodiazepínico diminui quanto mais prolongada a crise, reforçando a urgência da primeira dose",
      "Se a crise persistir após a dose adequada de benzodiazepínico, fármaco antiepiléptico de segunda linha por via intravenosa (fenitoína, ácido valproico ou levetiracetam, conforme disponibilidade e perfil do paciente) é iniciado imediatamente na sequência, sem aguardar prazo adicional",
      "Estado de mal refratário (persistente apesar das duas primeiras linhas) exige anestesia geral com infusão contínua de agente anestésico e monitorização eletroencefalográfica contínua em ambiente de terapia intensiva",
      "Investigação e tratamento simultâneos da causa de base precipitante, sobretudo em primeiro episódio ou quando não há epilepsia prévia conhecida",
    ],
    complicacoes: [
      "Aguda: dano neuronal excitotóxico permanente proporcional à duração da crise não controlada, rabdomiólise, aspiração, arritmias cardíacas, hipertermia grave",
      "Crônica: déficit cognitivo residual em casos de estado de mal prolongado e refratário, sobretudo quando o tratamento é tardio",
    ],
    redFlags: [
      "Crise convulsiva com duração maior que 5 minutos — já configura estado de mal epiléptico operacionalmente e exige tratamento imediato com benzodiazepínico, sem aguardar cessação espontânea",
      "Alteração do nível de consciência persistente e inexplicada, sem outra causa evidente, após aparente cessação de uma crise convulsiva — investigar ativamente estado de mal não convulsivo com eletroencefalograma",
      "Falha de resposta ao benzodiazepínico e ao fármaco antiepiléptico de segunda linha — estado de mal refratário, exigindo escalonamento imediato para anestesia geral em terapia intensiva",
    ],
    prognostico:
      "Diretamente relacionado à duração da crise até o início do tratamento eficaz e à causa de base — quanto mais precoce e adequado o tratamento, melhor o prognóstico neurológico. Estado de mal refratário/superrefratário carrega risco substancial de mortalidade e sequela neurológica permanente.",
    pontosDeProva: [
      "A eficácia do benzodiazepínico diminui progressivamente quanto mais prolongada a crise (por internalização de receptores GABA-A) — reforça por que a primeira dose deve ser administrada o mais rápido possível, sem hesitação",
      "Estado de mal não convulsivo é uma armadilha diagnóstica real: um paciente pode permanecer com atividade epiléptica contínua mesmo sem movimentos motores evidentes, exigindo eletroencefalograma para confirmação diante de rebaixamento de consciência inexplicado",
      "O tratamento segue uma sequência cronometrada e escalonada (benzodiazepínico → antiepiléptico de segunda linha → anestesia geral) sem pausas prolongadas de reavaliação entre as etapas quando a crise persiste",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 34 anos, com epilepsia conhecida em uso irregular do fármaco antiepiléptico, é trazida ao pronto-socorro em crise tônico-clônica generalizada contínua há 8 minutos.",
      pergunta: "Qual a conduta imediata?",
      raciocinio:
        "Crise convulsiva com duração maior que 5 minutos já configura estado de mal epiléptico, uma emergência neurológica na qual a eficácia do tratamento é inversamente proporcional ao tempo decorrido — a primeira linha terapêutica deve ser administrada imediatamente, sem aguardar mais tempo de observação.",
      conduta:
        "Administrar benzodiazepínico (diazepam) por via intravenosa imediatamente, associado a medidas de suporte (proteção de via aérea, glicemia capilar); se a crise persistir apesar da dose adequada, iniciar sem demora fármaco antiepiléptico de segunda linha por via intravenosa, investigando concomitantemente a causa da irregularidade no tratamento de base.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "diazepam", nome: "Diazepam" },
    ],
    fontes: [
      { tema: "Definição operacional, fisiopatologia e sequência terapêutica escalonada", fonte: "American Epilepsy Society, Guideline for the Evaluation and Management of Status Epilepticus" },
      { tema: "Diazepam intravenoso como benzodiazepínico de primeira linha", fonte: "Goodman & Gilman, 13ª ed." },
    ],
  },
  {
    slug: "enxaqueca",
    nome: "Enxaqueca",
    sinonimos: ["Migrânea"],
    cid10: "G43",
    especialidade: "Neurologia",
    etiologia: "Multifatorial",
    resumo: "Cefaleia primária recorrente, incapacitante, com fisiopatologia neurovascular — uma das principais causas de incapacidade entre doenças neurológicas, com tratamento dividido entre abortivo (crise) e profilático (prevenção).",
    definicao:
      "Cefaleia primária recorrente, tipicamente unilateral, pulsátil, de intensidade moderada a grave, associada a náusea/vômitos e fotofobia/fonofobia, podendo ser precedida por aura (sintomas neurológicos focais transitórios, mais comumente visuais) em uma parcela dos pacientes.",
    epidemiologia:
      "Uma das cefaleias primárias mais prevalentes, mais comum em mulheres, com pico de incidência entre a segunda e a quarta décadas de vida. É consistentemente listada entre as principais causas de anos vividos com incapacidade entre todas as doenças neurológicas.",
    fisiopatologia:
      "O mecanismo envolve ativação do sistema trigeminovascular, com liberação de neuropeptídeos vasoativos (incluindo o peptídeo relacionado ao gene da calcitonina, CGRP) que promovem vasodilatação e inflamação neurogênica das meninges, além de disfunção de núcleos troncoencefálicos moduladores da dor. A aura, quando presente, é atribuída a uma onda de depressão alastrante cortical (despolarização neuronal seguida de supressão da atividade, propagando-se lentamente pelo córtex).",
    classificacao:
      "Classificada em enxaqueca sem aura (a forma mais comum) e com aura (sintomas neurológicos focais transitórios, tipicamente visuais, precedendo ou acompanhando a cefaleia). Também classificada quanto à frequência em episódica e crônica (cefaleia presente em 15 dias ou mais por mês, por mais de 3 meses, com características de enxaqueca em pelo menos 8 desses dias).",
    quadroClinico: [
      "Cefaleia unilateral (podendo alternar de lado entre episódios), pulsátil, de intensidade moderada a grave, piorando com atividade física rotineira",
      "Náusea e/ou vômitos associados, e fotofobia/fonofobia, levando o paciente a buscar ambiente escuro e silencioso",
      "Aura, quando presente, tipicamente visual (escotomas cintilantes, linhas em zigue-zague progredindo pelo campo visual ao longo de minutos), podendo também ser sensitiva ou de linguagem, sempre com instalação e resolução graduais ao longo de minutos (diferente do início súbito de um evento vascular)",
      "Duração típica do episódio de 4 a 72 horas sem tratamento eficaz",
    ],
    diagnostico: [
      "Diagnóstico clínico, baseado em critérios bem estabelecidos (frequência, características da dor, sintomas associados, presença ou ausência de aura), sem necessidade de exame de imagem de rotina quando o quadro é típico e o exame neurológico é normal",
      "Diário de cefaleia pode auxiliar na caracterização de padrão, gatilhos e frequência, sobretudo antes de decidir sobre tratamento profilático",
    ],
    examesComplementares: [
      "Neuroimagem (ressonância magnética preferencialmente) reservada a casos com sinais de alarme ('red flags' de cefaleia secundária) ou apresentação atípica, não indicada rotineiramente em enxaqueca típica com exame neurológico normal",
    ],
    diagnosticoDiferencial: [
      "Cefaleia tensional (geralmente bilateral, em aperto, sem os sintomas associados proeminentes de náusea/fotofobia da enxaqueca)",
      "Cefaleia em salvas (dor excruciante, estritamente unilateral periorbitária, com sintomas autonômicos ipsilaterais proeminentes, padrão temporal distinto)",
      "Hemorragia subaracnóidea e outras cefaleias secundárias graves (a serem sempre excluídas diante de sinais de alarme, como início em trovoada, febre, rigidez de nuca ou déficit neurológico focal persistente)",
    ],
    tratamento: [
      "Tratamento abortivo da crise: analgésico simples ou anti-inflamatório não esteroidal como primeira linha em crises leves a moderadas, em ambiente calmo e escuro",
      "Triptano (agonista serotoninérgico específico) é a primeira linha para crises moderadas a graves ou refratárias a analgésicos simples (classe de medicamento ainda sem ficha própria no site)",
      "Tratamento profilático (uso diário contínuo) indicado quando há frequência elevada de crises ou impacto funcional significativo, incluindo betabloqueadores, anticonvulsivantes específicos ou anticorpos monoclonais anti-CGRP, conforme o perfil do paciente",
      "Identificação e manejo de gatilhos individuais (privação de sono, jejum prolongado, determinados alimentos, estresse) como medida complementar não farmacológica",
    ],
    complicacoes: [
      "Crônica: cronificação (transformação de enxaqueca episódica em crônica), frequentemente associada ao uso excessivo de analgésicos ('cefaleia por uso excessivo de medicação'), e impacto funcional/psicossocial significativo pela recorrência e incapacidade associada",
    ],
    redFlags: [
      "Cefaleia de início súbito e intensidade máxima em segundos ('cefaleia em trovoada') — investigar hemorragia subaracnóidea, não assumir enxaqueca atípica",
      "Mudança no padrão habitual de uma enxaqueca previamente estável, cefaleia progressivamente pior, ou início após os 50 anos — sinais de alarme que exigem investigação de causa secundária antes de atribuir a uma enxaqueca simples",
      "Aura atípica (motora, prolongada além de uma hora, ou não totalmente reversível) — reconsiderar diagnóstico e investigar causa vascular",
    ],
    prognostico:
      "Geralmente crônica e recorrente ao longo da vida, com flutuação de frequência e intensidade, mas sem risco estrutural direto na enxaqueca primária típica sem sinais de alarme. Boa resposta ao tratamento abortivo e profilático adequados na maioria dos pacientes, embora uma parcela evolua para a forma crônica, sobretudo na presença de uso excessivo de medicação analgésica.",
    pontosDeProva: [
      "Aura tem instalação e resolução graduais ao longo de minutos — diferente do início súbito característico de um evento vascular (AVC/AIT), distinção fundamental no diagnóstico diferencial",
      "'Cefaleia em trovoada' (início súbito, intensidade máxima em segundos) nunca deve ser atribuída a enxaqueca sem excluir ativamente hemorragia subaracnóidea",
      "O uso excessivo de analgésicos para tratar crises frequentes pode paradoxalmente cronificar a cefaleia ('cefaleia por uso excessivo de medicação') — armadilha terapêutica clássica a ser evitada",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 28 anos, relata episódios recorrentes de cefaleia pulsátil unilateral, de forte intensidade, associada a náusea e fotofobia, com duração de cerca de 1 dia, precedidos por visão de linhas brilhantes em zigue-zague que se expandem lentamente pelo campo visual ao longo de 20 minutos antes da dor começar.",
      pergunta: "Qual a hipótese diagnóstica mais provável e a conduta para a crise atual?",
      raciocinio:
        "O quadro descrito, com aura visual de instalação gradual (linhas em zigue-zague progredindo ao longo de minutos) seguida de cefaleia pulsátil unilateral com náusea e fotofobia, é o quadro clássico de enxaqueca com aura.",
      conduta:
        "Para a crise atual, iniciar analgésico/anti-inflamatório em ambiente calmo e escuro; considerar triptano se a resposta for insuficiente. Avaliar necessidade de tratamento profilático conforme a frequência e o impacto funcional dos episódios, além de orientar sobre identificação de possíveis gatilhos individuais.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "ibuprofeno", nome: "Ibuprofeno" },
    ],
    medicamentosSecaoTitulo: "Medicamento abortivo para crises leves a moderadas",
    medicamentosNota:
      "O ibuprofeno cobre o tratamento abortivo de crises leves a moderadas. Crises moderadas a graves ou refratárias têm no triptano a primeira linha específica, e o tratamento profilático (betabloqueador, anticonvulsivante, anti-CGRP) ainda não tem ficha própria no site.",
    fontes: [
      { tema: "Fisiopatologia neurovascular e mecanismo da aura (depressão alastrante cortical)", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Classificação e critérios diagnósticos", fonte: "International Classification of Headache Disorders (ICHD-3), International Headache Society" },
    ],
  },
  {
    slug: "doenca-de-parkinson",
    nome: "Doença de Parkinson",
    sinonimos: ["Parkinsonismo idiopático"],
    cid10: "G20",
    especialidade: "Neurologia",
    etiologia: "Degenerativa",
    resumo: "Doença neurodegenerativa progressiva por perda de neurônios dopaminérgicos da substância negra, causando a tríade clássica de bradicinesia, rigidez e tremor de repouso — segunda doença neurodegenerativa mais comum, atrás apenas da doença de Alzheimer.",
    definicao:
      "Doença neurodegenerativa progressiva caracterizada pela perda de neurônios dopaminérgicos da substância negra do mesencéfalo, causando um distúrbio do movimento definido pela combinação de bradicinesia (lentidão dos movimentos) associada a rigidez muscular e/ou tremor de repouso, frequentemente acompanhados de sintomas não motores significativos ao longo da evolução da doença.",
    epidemiologia:
      "É a segunda doença neurodegenerativa mais comum, atrás apenas da doença de Alzheimer, com prevalência e incidência crescentes com o envelhecimento, sendo incomum antes dos 50 anos (quando presente, chamada de Parkinson de início precoce).",
    fisiopatologia:
      "Perda progressiva de neurônios dopaminérgicos da substância negra pars compacta, associada ao acúmulo intracelular de agregados da proteína alfa-sinucleína (corpos de Lewy), reduz a disponibilidade de dopamina nos circuitos dos gânglios da base responsáveis pelo controle do movimento voluntário, gerando os sintomas motores cardinais da doença. A causa exata da neurodegeneração permanece incompletamente compreendida, envolvendo provavelmente interação entre fatores genéticos de suscetibilidade e fatores ambientais.",
    classificacao:
      "Classificada clinicamente conforme o sintoma motor predominante em forma tremor-dominante e forma acinético-rígida (com bradicinesia e rigidez mais proeminentes que o tremor), esta última geralmente associada a progressão mais rápida. Estadiamento de gravidade classicamente descrito pela escala de Hoehn e Yahr, de acometimento unilateral inicial (estágio 1) a comprometimento bilateral com perda de independência funcional em estágios avançados.",
    quadroClinico: [
      "Bradicinesia: lentidão progressiva dos movimentos voluntários, com redução da amplitude em movimentos repetitivos — achado motor cardinal e obrigatório para o diagnóstico",
      "Tremor de repouso (tipicamente em 'contar moedas'), que diminui ou desaparece com o movimento voluntário do membro, diferente de outros tipos de tremor",
      "Rigidez muscular, classicamente descrita como rigidez em 'roda denteada' quando associada a tremor sobreposto",
      "Instabilidade postural e alterações de marcha (marcha em pequenos passos, festinação, redução do balanço dos braços) em fases mais avançadas",
      "Sintomas não motores significativos ao longo da evolução: hiposmia (frequentemente precede os sintomas motores em anos), constipação, transtorno comportamental do sono REM, depressão, e, em fases avançadas, comprometimento cognitivo",
    ],
    diagnostico: [
      "Diagnóstico clínico, baseado na presença de bradicinesia associada a tremor de repouso e/ou rigidez, com resposta favorável e sustentada à levodopa reforçando a confirmação diagnóstica",
      "Ausência de sinais de alarme para parkinsonismo atípico (progressão muito rápida, quedas precoces e proeminentes, disautonomia importante e precoce, resposta pobre à levodopa) é importante para sustentar o diagnóstico de doença de Parkinson idiopática, em vez de síndromes parkinsonianas atípicas",
    ],
    examesComplementares: [
      "Diagnóstico é predominantemente clínico — exames de imagem não são necessários rotineiramente para confirmação, sendo reservados para excluir diagnósticos alternativos em apresentações atípicas",
      "Ressonância magnética de crânio pode ser considerada para excluir parkinsonismo secundário (vascular, hidrocefalia de pressão normal) em apresentações atípicas",
    ],
    diagnosticoDiferencial: [
      "Tremor essencial (tremor de ação/postural, não de repouso, tipicamente afetando as mãos simetricamente desde o início, sem os demais sinais cardinais)",
      "Parkinsonismo induzido por medicamento (uso de antipsicóticos ou outros bloqueadores dopaminérgicos, geralmente com melhora após suspensão do agente causador)",
      "Parkinsonismo atípico/síndromes 'Parkinson-plus' (paralisia supranuclear progressiva, atrofia de múltiplos sistemas — progressão mais rápida, sinais adicionais e resposta pobre à levodopa)",
      "Parkinsonismo vascular (história de eventos cerebrovasculares, predomínio de sintomas em membros inferiores, marcha característica)",
    ],
    tratamento: [
      "Levodopa associada a um inibidor da descarboxilase periférica é o tratamento sintomático mais eficaz disponível, sobretudo para bradicinesia e rigidez, embora não modifique a progressão da neurodegeneração de base (classe de medicamento ainda sem ficha própria no site)",
      "Agonistas dopaminérgicos e inibidores da monoaminoxidase-B são opções, sobretudo em pacientes mais jovens, para retardar o início do uso de levodopa e suas complicações motoras de longo prazo (flutuações e discinesias)",
      "Fisioterapia, fonoaudiologia e terapia ocupacional têm papel importante complementar ao tratamento farmacológico, sobretudo em fases mais avançadas",
      "Estimulação cerebral profunda considerada em casos selecionados com flutuações motoras significativas refratárias a ajustes farmacológicos, em pacientes sem contraindicações",
    ],
    complicacoes: [
      "Crônica: flutuações motoras e discinesias induzidas por levodopa após anos de uso, quedas e fraturas associadas à instabilidade postural em fases avançadas, comprometimento cognitivo (demência associada à doença de Parkinson) em uma proporção significativa de pacientes com doença de longa duração",
    ],
    redFlags: [
      "Progressão muito rápida, quedas precoces e proeminentes já nos primeiros anos, ou disautonomia grave e precoce (hipotensão ortostática importante, disfunção urinária significativa) — sugerem parkinsonismo atípico ('Parkinson-plus'), não doença de Parkinson idiopática típica",
      "Resposta pobre ou ausente à levodopa em dose adequada — reconsiderar o diagnóstico, já que a boa resposta é esperada e reforça o diagnóstico de doença de Parkinson idiopática",
    ],
    prognostico:
      "Doença crônica e progressiva ao longo de décadas, sem cura disponível atualmente, mas com boa resposta sintomática ao tratamento farmacológico por muitos anos, permitindo qualidade de vida preservada por período prolongado. A progressão para comprometimento funcional e cognitivo significativo ocorre tipicamente após muitos anos de evolução, sendo mais rápida na forma acinético-rígida que na tremor-dominante.",
    pontosDeProva: [
      "Bradicinesia é o achado motor cardinal obrigatório para o diagnóstico — tremor de repouso isolado, sem bradicinesia associada, não caracteriza doença de Parkinson",
      "Boa resposta sustentada à levodopa é um forte indício a favor do diagnóstico de doença de Parkinson idiopática, e sua ausência deve levantar suspeita de parkinsonismo atípico",
      "Sintomas não motores (hiposmia, transtorno comportamental do sono REM, constipação) frequentemente precedem os sintomas motores cardinais em anos — achados prodrômicos cada vez mais reconhecidos e cobrados",
    ],
    casoClinico: {
      vinheta:
        "Homem, 64 anos, é levado pela esposa por lentidão progressiva dos movimentos e tremor na mão direita há 8 meses, que ela descreve como pior quando ele está parado e sentado assistindo TV, melhorando quando ele pega algum objeto.",
      pergunta: "Qual a hipótese diagnóstica mais provável e a conduta?",
      raciocinio:
        "A combinação de bradicinesia (lentidão dos movimentos) com tremor que piora em repouso e melhora com o movimento voluntário é o quadro clássico da doença de Parkinson, distinto de outros tipos de tremor (como o tremor essencial, que é de ação, não de repouso).",
      conduta:
        "Confirmar o diagnóstico clinicamente, avaliando a presença de rigidez associada e excluindo sinais de alarme para parkinsonismo atípico; iniciar tratamento sintomático (levodopa ou, em pacientes mais jovens, considerar inicialmente agonista dopaminérgico ou inibidor da MAO-B) e encaminhar para acompanhamento multiprofissional (fisioterapia, fonoaudiologia).",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Fisiopatologia (perda dopaminérgica, corpos de Lewy) e critérios diagnósticos clínicos", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Sintomas não motores prodrômicos e classificação por subtipo motor", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "esclerose-multipla",
    nome: "Esclerose múltipla",
    sinonimos: [],
    cid10: "G35",
    especialidade: "Neurologia",
    etiologia: "Autoimune",
    resumo: "Doença autoimune desmielinizante do sistema nervoso central, disseminada no espaço e no tempo — principal causa de incapacidade neurológica não traumática em adultos jovens, com neurite óptica como manifestação clássica inicial.",
    definicao:
      "Doença inflamatória autoimune desmielinizante crônica do sistema nervoso central, caracterizada por lesões (placas) disseminadas tanto no espaço (múltiplas localizações no encéfalo e/ou medula espinhal) quanto no tempo (surgindo em momentos distintos), causando uma ampla variedade de sintomas neurológicos conforme a localização das lesões.",
    epidemiologia:
      "Mais comum em mulheres jovens (entre 20 e 40 anos), com prevalência crescente conforme a distância do equador (gradiente latitudinal), sugerindo papel de fatores ambientais (como exposição a vitamina D/luz solar) somados à predisposição genética.",
    fisiopatologia:
      "Processo autoimune direcionado contra a bainha de mielina dos axônios do sistema nervoso central, com infiltração de linfócitos T autorreativos através da barreira hematoencefálica, causando desmielinização focal (placas) e, com a progressão da doença, dano axonal cumulativo que se correlaciona mais diretamente com a incapacidade neurológica permanente do que a própria desmielinização isolada.",
    classificacao:
      "Classificada em remitente-recorrente (a forma mais comum ao diagnóstico, com surtos bem definidos seguidos de recuperação parcial ou completa), secundariamente progressiva (evolução tardia de uma parcela dos casos remitentes-recorrentes, com piora progressiva independente de surtos) e primariamente progressiva (piora progressiva desde o início, sem surtos bem definidos, forma menos comum).",
    quadroClinico: [
      "Neurite óptica (perda visual subaguda unilateral com dor à movimentação ocular) é uma manifestação inicial clássica",
      "Sintomas sensitivos (parestesias, sinal de Lhermitte — sensação de choque elétrico descendo pela coluna à flexão do pescoço), fraqueza em um ou mais membros, ataxia e alterações de coordenação",
      "Disfunção vesical/intestinal e disfunção sexual, mais proeminentes com a progressão da doença",
      "Fadiga significativa e desproporcional à atividade, um dos sintomas mais incapacitantes relatados pelos pacientes",
      "Fenômeno de Uhthoff (piora transitória dos sintomas neurológicos com elevação da temperatura corporal) é um achado característico, embora não exclusivo da esclerose múltipla",
    ],
    diagnostico: [
      "Diagnóstico baseado nos critérios de McDonald, que integram achados clínicos (surtos) com evidência de disseminação no espaço e no tempo por ressonância magnética e, quando necessário, análise do líquido cefalorraquidiano",
      "Ressonância magnética de crânio e medula com contraste é o exame central, identificando lesões características (frequentemente periventriculares, justacorticais, infratentoriais e medulares) e captação de contraste em lesões ativas recentes",
    ],
    examesComplementares: [
      "Ressonância magnética de crânio e medula espinhal com contraste (exame central para diagnóstico e monitorização)",
      "Análise do líquido cefalorraquidiano, buscando bandas oligoclonais (síntese intratecal de imunoglobulina), apoiando o diagnóstico quando os critérios de imagem são insuficientes isoladamente",
      "Potenciais evocados visuais em casos selecionados, para documentar desmielinização subclínica da via óptica",
    ],
    diagnosticoDiferencial: [
      "Neuromielite óptica (quadro clinicamente semelhante, mas com curso e tratamento distintos, diferenciada por sorologia específica — anticorpo anti-aquaporina-4)",
      "Doenças reumatológicas com acometimento do sistema nervoso central (lúpus eritematoso sistêmico, síndrome de Sjögren)",
      "Deficiência de vitamina B12 e outras causas de mielopatia",
      "Doença cerebrovascular de pequenos vasos em pacientes mais velhos com lesões de substância branca inespecíficas à ressonância",
    ],
    tratamento: [
      "Surto agudo com impacto funcional significativo: corticosteroide intravenoso em altas doses para acelerar a recuperação do surto (classe/via de administração ainda sem ficha própria específica no site)",
      "Terapia modificadora de doença de uso contínuo é a base do tratamento em longo prazo, reduzindo a frequência de surtos e a progressão de lesões, com opções variando conforme o perfil de atividade e gravidade da doença (classes ainda sem ficha própria no site)",
      "Tratamento sintomático dirigido a manifestações específicas (espasticidade, disfunção vesical, fadiga, dor neuropática) conforme necessidade individual",
      "Reabilitação multiprofissional (fisioterapia, terapia ocupacional) como parte integral do manejo em longo prazo",
    ],
    complicacoes: [
      "Aguda: déficit neurológico transitório significativo durante surtos, com recuperação parcial ou completa na maioria dos casos, sobretudo nas fases iniciais da doença",
      "Crônica: acúmulo progressivo de incapacidade neurológica ao longo dos anos, sobretudo na transição para a forma secundariamente progressiva, com impacto motor, cognitivo e funcional cumulativo",
    ],
    redFlags: [
      "Surto com comprometimento motor ou visual significativo — indicação de corticosteroide intravenoso em altas doses para acelerar a recuperação funcional",
      "Sintomas atípicos para esclerose múltipla clássica (idade de início muito precoce ou tardia, curso primariamente progressivo desde o início em paciente jovem) — reforça a necessidade de excluir diagnósticos diferenciais antes de firmar o diagnóstico",
    ],
    prognostico:
      "Extremamente variável entre pacientes: uma parcela mantém baixa atividade de doença e função preservada por décadas com tratamento adequado, enquanto outra parcela evolui com acúmulo progressivo de incapacidade, sobretudo após a transição para a forma secundariamente progressiva. O início precoce de terapia modificadora de doença está associado a melhor prognóstico funcional em longo prazo.",
    pontosDeProva: [
      "O diagnóstico exige disseminação no espaço E no tempo — um único episódio ou uma única lesão, por mais sugestiva que seja, não é suficiente para o diagnóstico definitivo sem essa disseminação demonstrada",
      "Neurite óptica é uma manifestação inicial clássica e frequentemente a porta de entrada diagnóstica da esclerose múltipla, reforçando a importância de investigar lesões de substância branca na ressonância magnética diante desse quadro",
      "O dano axonal, não apenas a desmielinização, é o que mais se correlaciona com a incapacidade neurológica permanente acumulada ao longo da doença",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 26 anos, procura atendimento por perda visual no olho direito com dor à movimentação ocular há 4 dias. Refere um episódio de dormência na perna esquerda que durou cerca de 3 semanas e resolveu espontaneamente há 8 meses, não investigado na época.",
      pergunta: "Qual a hipótese diagnóstica mais provável e a investigação prioritária?",
      raciocinio:
        "O episódio atual de neurite óptica associado a um episódio prévio de sintoma neurológico focal (dormência em membro) em localização e momento distintos sugere disseminação no espaço e no tempo, achado central para a suspeita de esclerose múltipla.",
      conduta:
        "Solicitar ressonância magnética de crânio e medula espinhal com contraste para avaliar disseminação de lesões no espaço e no tempo conforme os critérios de McDonald, e considerar análise do líquido cefalorraquidiano para bandas oligoclonais se a imagem for insuficiente para confirmação diagnóstica isolada.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Critérios diagnósticos de McDonald e classificação por curso clínico", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Papel do dano axonal na incapacidade permanente", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "miastenia-gravis",
    nome: "Miastenia gravis",
    sinonimos: [],
    cid10: "G70",
    especialidade: "Neurologia",
    etiologia: "Autoimune",
    resumo: "Doença autoimune da junção neuromuscular por anticorpos contra o receptor de acetilcolina, causando fraqueza muscular flutuante e fatigável — a crise miastênica com insuficiência respiratória é a complicação mais temida.",
    definicao:
      "Doença autoimune da junção neuromuscular, na qual autoanticorpos (mais comumente contra o receptor de acetilcolina, e menos comumente contra outras proteínas da junção neuromuscular, como a tirosina-quinase músculo-específica) comprometem a transmissão neuromuscular, causando fraqueza muscular esquelética flutuante que tipicamente piora ao longo do dia e com esforço repetido (fatigabilidade).",
    epidemiologia:
      "Apresenta distribuição bimodal por idade e sexo: mulheres jovens (segunda e terceira décadas) e homens mais velhos (sexta e sétima décadas) são os grupos mais acometidos. Associação com timoma (tumor do timo) é encontrada em uma parcela significativa dos pacientes, sobretudo naqueles com anticorpo anti-receptor de acetilcolina positivo.",
    fisiopatologia:
      "Autoanticorpos contra o receptor de acetilcolina na membrana pós-sináptica da junção neuromuscular reduzem o número de receptores funcionais disponíveis (por degradação acelerada, bloqueio direto do sítio de ligação, ou dano complemento-mediado à membrana pós-sináptica), comprometendo progressivamente a transmissão do impulso nervoso ao músculo à medida que a estimulação repetida esgota a reserva de segurança da transmissão neuromuscular — mecanismo que explica a fatigabilidade característica.",
    classificacao:
      "Classificada conforme a distribuição em ocular (limitada aos músculos extraoculares e palpebrais, causando ptose e diplopia) e generalizada (acometendo também musculatura bulbar, de membros e respiratória). Também classificada pelo tipo de anticorpo predominante (anti-receptor de acetilcolina, a maioria; anti-MuSK, um subgrupo com características clínicas e de resposta terapêutica distintas).",
    quadroClinico: [
      "Ptose palpebral e diplopia flutuantes, frequentemente os sintomas iniciais, piorando ao longo do dia e com fadiga",
      "Fraqueza bulbar: disartria, disfagia e fadiga à mastigação, piorando ao longo de uma refeição",
      "Fraqueza proximal de membros, tipicamente poupando a sensibilidade e os reflexos (achados que ajudam a diferenciar de outras causas neuromusculares)",
      "Crise miastênica: fraqueza da musculatura respiratória grave o suficiente para exigir suporte ventilatório — a manifestação mais grave e temida da doença",
    ],
    diagnostico: [
      "Dosagem de anticorpo anti-receptor de acetilcolina (positivo na maioria dos pacientes com forma generalizada) é o exame confirmatório mais utilizado",
      "Teste do gelo (aplicação de gelo sobre a pálpebra ptótica, com melhora transitória da ptose) é um teste simples à beira do leito com boa relação custo-benefício em contexto de recursos limitados",
      "Eletroneuromiografia com estimulação repetitiva, demonstrando decremento da resposta muscular com estimulação sucessiva, apoia o diagnóstico quando a sorologia é negativa ou inconclusiva",
    ],
    examesComplementares: [
      "Anticorpo anti-receptor de acetilcolina (e anti-MuSK quando o primeiro é negativo em quadro clinicamente compatível)",
      "Eletroneuromiografia com estimulação repetitiva e/ou fibra única",
      "Tomografia computadorizada de tórax para investigar timoma, indicada em todo paciente com diagnóstico confirmado, dada a associação frequente",
    ],
    diagnosticoDiferencial: [
      "Síndrome miastênica de Lambert-Eaton (também da junção neuromuscular, mas com mecanismo pré-sináptico, associação frequente com neoplasia — sobretudo carcinoma pulmonar de pequenas células —, e padrão de fraqueza que tipicamente melhora com esforço repetido, ao contrário da miastenia gravis)",
      "Botulismo (bloqueio pré-sináptico da liberação de acetilcolina, com quadro agudo e frequentemente associado a disautonomia)",
      "Síndrome de Guillain-Barré (fraqueza ascendente, mas com padrão evolutivo, reflexos e achados liquóricos distintos)",
      "Paralisia oculomotora isolada de causa neurológica estrutural, quando a apresentação é puramente ocular",
    ],
    tratamento: [
      "Inibidor da acetilcolinesterase (piridostigmina) é o tratamento sintomático de primeira linha, prolongando a disponibilidade de acetilcolina na fenda sináptica (classe de medicamento ainda sem ficha própria no site)",
      "Imunossupressão (corticosteroide sistêmico e, frequentemente, agentes poupadores de corticosteroide) indicada em casos com controle inadequado apenas com piridostigmina ou na forma generalizada moderada a grave",
      "Timectomia indicada em pacientes com timoma confirmado e considerada mesmo na ausência de timoma em pacientes selecionados com miastenia generalizada e anticorpo anti-receptor de acetilcolina positivo, podendo melhorar o controle da doença em longo prazo",
      "Crise miastênica: suporte ventilatório quando necessário, associado a plasmaférese ou imunoglobulina intravenosa para tratamento rápido da exacerbação grave",
    ],
    complicacoes: [
      "Aguda: crise miastênica com insuficiência respiratória, exigindo suporte ventilatório de urgência — a complicação mais grave e temida da doença",
      "Crônica: efeitos adversos cumulativos do uso prolongado de imunossupressores quando necessários para controle da doença",
    ],
    redFlags: [
      "Fraqueza respiratória progressiva ou dificuldade importante para deglutir secreções — sinais de crise miastênica iminente, exigindo monitorização respiratória rigorosa (capacidade vital, força inspiratória negativa) e preparação para suporte ventilatório",
      "Uso concomitante de medicamentos que podem piorar a transmissão neuromuscular (certos antibióticos, betabloqueadores, entre outros) em paciente miastênico — sempre revisar a lista de medicamentos antes de prescrever novos fármacos",
    ],
    prognostico:
      "Bom na maioria dos pacientes com tratamento adequado, com controle satisfatório dos sintomas e expectativa de vida próxima à da população geral. A crise miastênica, quando ocorre, é uma emergência com risco de vida, mas geralmente reversível com suporte ventilatório e tratamento imunomodulador oportunos.",
    pontosDeProva: [
      "Fraqueza flutuante que piora ao longo do dia e com esforço repetido (fatigabilidade), poupando sensibilidade e reflexos, é o padrão clínico central que distingue a miastenia gravis de outras causas de fraqueza muscular",
      "O teste do gelo (melhora da ptose com aplicação de gelo) é um teste simples e útil à beira do leito para apoiar a suspeita diagnóstica em qualquer ambiente",
      "Timoma deve ser sempre investigado (tomografia de tórax) em todo paciente com diagnóstico confirmado de miastenia gravis, dada a associação frequente e a implicação terapêutica (timectomia)",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 29 anos, relata ptose palpebral bilateral e visão dupla que pioram ao longo do dia e melhoram com o repouso, além de dificuldade para mastigar ao final das refeições, há 2 meses.",
      pergunta: "Qual a hipótese diagnóstica mais provável e a investigação inicial?",
      raciocinio:
        "Fraqueza muscular flutuante (ptose e diplopia que pioram ao longo do dia) associada a fadiga à mastigação é o padrão clínico clássico de miastenia gravis, uma doença autoimune da junção neuromuscular.",
      conduta:
        "Solicitar dosagem de anticorpo anti-receptor de acetilcolina e considerar eletroneuromiografia com estimulação repetitiva para confirmação diagnóstica; se confirmado o diagnóstico, solicitar tomografia de tórax para investigar timoma e iniciar piridostigmina como tratamento sintomático de primeira linha.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Fisiopatologia, associação com timoma e conduta terapêutica escalonada", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Teste do gelo como ferramenta diagnóstica à beira do leito", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "sindrome-guillain-barre",
    nome: "Polineuropatia inflamatória aguda (síndrome de Guillain-Barré)",
    sinonimos: ["Síndrome de Guillain-Barré", "Polirradiculoneurite aguda"],
    cid10: "G61",
    especialidade: "Neurologia",
    etiologia: "Autoimune",
    resumo: "Polineuropatia autoimune aguda, frequentemente pós-infecciosa, causando fraqueza ascendente progressiva — a principal causa de paralisia flácida aguda generalizada, com risco real de insuficiência respiratória.",
    definicao:
      "Polineuropatia inflamatória aguda de mecanismo autoimune, tipicamente desencadeada por uma resposta imune cruzada após uma infecção prévia (mimetismo molecular), causando fraqueza motora progressiva e simétrica, tipicamente ascendente, com redução ou abolição dos reflexos tendinosos profundos.",
    epidemiologia:
      "É a principal causa de paralisia flácida aguda generalizada em países onde a poliomielite foi erradicada. Cerca de dois terços dos casos são precedidos, nas semanas anteriores, por uma infecção identificável — mais comumente gastrointestinal (Campylobacter jejuni, associado a uma variante axonal mais grave) ou respiratória.",
    fisiopatologia:
      "Uma resposta imune desencadeada contra antígenos do patógeno precedente reage de forma cruzada com componentes da mielina ou dos próprios axônios dos nervos periféricos (mimetismo molecular), causando desmielinização segmentar (na forma clássica e mais comum, a polineuropatia desmielinizante inflamatória aguda) ou dano axonal direto (em variantes menos comuns, mas geralmente mais graves, como a neuropatia axonal motora aguda, mais associada à infecção por Campylobacter jejuni).",
    classificacao:
      "Classificada em subtipos conforme o padrão eletrofisiológico e clínico predominante: polineuropatia desmielinizante inflamatória aguda (a forma clássica e mais comum), neuropatia axonal motora aguda e neuropatia axonal sensitivo-motora aguda (variantes axonais, geralmente mais graves), e síndrome de Miller Fisher (variante rara com a tríade de oftalmoplegia, ataxia e arreflexia, tipicamente sem fraqueza de membros proeminente).",
    quadroClinico: [
      "Fraqueza motora progressiva, tipicamente simétrica e ascendente (iniciando em membros inferiores e progredindo para membros superiores e, em casos graves, musculatura bulbar e respiratória)",
      "Redução ou abolição dos reflexos tendinosos profundos, achado praticamente universal e importante para a suspeita diagnóstica",
      "Sintomas sensitivos (parestesias, dor) frequentemente presentes, mas geralmente menos proeminentes que o comprometimento motor",
      "Disautonomia (labilidade de pressão arterial e frequência cardíaca, íleo paralítico, retenção urinária) pode ocorrer e exige monitorização cuidadosa",
      "Progressão tipicamente ao longo de dias a poucas semanas, com nadir da fraqueza geralmente dentro de 2 a 4 semanas do início",
    ],
    diagnostico: [
      "Diagnóstico clínico apoiado pelo padrão de fraqueza ascendente com arreflexia, história de infecção precedente nas semanas anteriores, e confirmado por análise do líquido cefalorraquidiano e eletroneuromiografia",
      "Análise do líquido cefalorraquidiano tipicamente mostra dissociação albumino-citológica (proteína elevada com celularidade normal ou pouco alterada), achado característico embora possa estar ausente na primeira semana de sintomas",
    ],
    examesComplementares: [
      "Análise do líquido cefalorraquidiano, buscando a dissociação albumino-citológica característica",
      "Eletroneuromiografia, demonstrando padrão desmielinizante (latências prolongadas, bloqueio de condução) ou axonal conforme o subtipo",
      "Monitorização seriada da capacidade vital forçada e da força inspiratória negativa, essenciais para antecipar a necessidade de suporte ventilatório antes que ocorra falência respiratória franca",
    ],
    diagnosticoDiferencial: [
      "Mielopatia aguda (nível sensitivo bem definido e disfunção esfincteriana mais precoce e proeminente, diferente do padrão da síndrome de Guillain-Barré)",
      "Miastenia gravis (fraqueza flutuante e fatigável, sem alteração sensitiva nem abolição de reflexos)",
      "Botulismo (padrão descendente, não ascendente, com disautonomia proeminente e pupilas frequentemente comprometidas)",
      "Neuropatia por porfiria aguda ou por intoxicação (contexto clínico e história diferentes)",
    ],
    tratamento: [
      "Imunoglobulina intravenosa ou plasmaférese são as opções terapêuticas específicas de primeira linha, com eficácia semelhante entre si quando iniciadas precocemente (idealmente dentro das primeiras duas semanas de sintomas) — classes ainda sem ficha própria no site",
      "Corticosteroide sistêmico isolado não é eficaz na síndrome de Guillain-Barré (diferente de outras neuropatias inflamatórias), distinção importante do tratamento de outras condições autoimunes",
      "Monitorização respiratória seriada rigorosa (capacidade vital forçada) para identificar precocemente a necessidade de suporte ventilatório, antes que ocorra falência respiratória estabelecida",
      "Manejo de disautonomia quando presente, e profilaxia de trombose venosa profunda, dada a imobilidade prolongada em casos com fraqueza significativa",
    ],
    complicacoes: [
      "Aguda: insuficiência respiratória por fraqueza da musculatura respiratória, exigindo ventilação mecânica em uma proporção significativa dos pacientes; disautonomia com risco de arritmias e instabilidade hemodinâmica",
      "Crônica: fraqueza residual e fadiga persistente em uma parcela dos pacientes, embora a maioria apresente recuperação funcional substancial ao longo de meses",
    ],
    redFlags: [
      "Progressão rápida da fraqueza com comprometimento da musculatura respiratória ou bulbar (dificuldade para deglutir, voz fraca) — monitorização respiratória intensiva e preparação antecipada para suporte ventilatório, antes que ocorra falência respiratória franca",
      "Instabilidade autonômica significativa (flutuações importantes de pressão arterial e frequência cardíaca) — exige monitorização cardiovascular contínua em ambiente de terapia intensiva",
    ],
    prognostico:
      "A maioria dos pacientes apresenta recuperação funcional substancial ao longo de semanas a meses, embora a recuperação completa possa levar até um ano ou mais em casos mais graves. Uma minoria evolui com déficit residual permanente, mais associado às variantes axonais e a casos com necessidade de ventilação mecânica prolongada. A mortalidade, embora incomum com tratamento e suporte adequados, existe e está mais associada a complicações respiratórias e disautonômicas.",
    pontosDeProva: [
      "Fraqueza ascendente com arreflexia é o padrão clínico central mais cobrado — a abolição dos reflexos tendinosos é praticamente universal e um achado-chave para a suspeita diagnóstica",
      "Dissociação albumino-citológica no líquido cefalorraquidiano (proteína elevada, celularidade normal) é o achado laboratorial clássico, mas pode estar ausente na primeira semana — sua ausência inicial não exclui o diagnóstico",
      "Corticosteroide isolado não funciona na síndrome de Guillain-Barré — distinção importante de outras neuropatias inflamatórias e um ponto clássico de prova",
      "A monitorização seriada da função respiratória é tão importante quanto o tratamento imunomodulador específico, pela necessidade de antecipar e não apenas reagir à insuficiência respiratória",
    ],
    casoClinico: {
      vinheta:
        "Homem, 42 anos, com quadro de diarreia há 3 semanas, atualmente resolvido, procura atendimento por fraqueza progressiva nas pernas há 4 dias, agora também notando fraqueza nos braços. Ao exame, reflexos patelares e aquileus estão abolidos bilateralmente.",
      pergunta: "Qual a hipótese diagnóstica mais provável e a conduta prioritária?",
      raciocinio:
        "Fraqueza ascendente progressiva com abolição de reflexos, precedida por um episódio de diarreia nas semanas anteriores (sugerindo possível infecção por Campylobacter jejuni), é o quadro clássico de síndrome de Guillain-Barré.",
      conduta:
        "Internação para monitorização seriada da função respiratória (capacidade vital forçada) e progressão da fraqueza, análise do líquido cefalorraquidiano e eletroneuromiografia para confirmação diagnóstica, e início precoce de imunoglobulina intravenosa ou plasmaférese assim que o diagnóstico for confirmado.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Fisiopatologia (mimetismo molecular), subtipos e associação com Campylobacter jejuni", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Ineficácia do corticosteroide isolado e eficácia de imunoglobulina/plasmaférese", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "paralisia-de-bell",
    nome: "Paralisia de Bell (paralisia facial periférica idiopática)",
    sinonimos: ["Paralisia facial periférica idiopática"],
    cid10: "G51",
    especialidade: "Neurologia",
    etiologia: "Idiopática",
    resumo: "Paralisia facial periférica aguda idiopática, provavelmente relacionada a reativação viral (herpes simples) com inflamação e compressão do nervo facial em seu trajeto ósseo — corticosteroide oral precoce é o tratamento de primeira linha com maior benefício comprovado.",
    definicao:
      "Paralisia ou paresia facial periférica aguda, unilateral, de causa idiopática (embora fortemente associada a reativação do vírus herpes simples tipo 1 em uma parcela significativa dos casos), acometendo todos os ramos do nervo facial de um lado, diferenciando-se da paralisia facial central pela ausência de poupança da musculatura frontal.",
    epidemiologia:
      "É a causa mais comum de paralisia facial periférica aguda, podendo ocorrer em qualquer idade, com fatores de risco descritos incluindo diabetes, gravidez (sobretudo no terceiro trimestre e puerpério imediato) e infecção respiratória viral recente.",
    fisiopatologia:
      "Acredita-se que a reativação do vírus herpes simples tipo 1 latente no gânglio geniculado do nervo facial desencadeie um processo inflamatório e edema do nervo dentro de seu trajeto ósseo estreito no canal facial (porção petrosa do osso temporal), causando compressão mecânica secundária que compromete a condução nervosa — o espaço anatômico limitado do canal ósseo é o que transforma uma inflamação viral relativamente comum em um comprometimento funcional significativo do nervo.",
    classificacao:
      "Não há um sistema de classificação etiológica formal, já que por definição é idiopática (diagnóstico de exclusão), mas é classificada por gravidade através de escalas clínicas (como a escala de House-Brackmann), que graduam a função facial de normal a paralisia completa e são usadas para acompanhar a evolução e orientar o prognóstico.",
    quadroClinico: [
      "Paralisia facial periférica unilateral de início agudo (horas a 1-2 dias), acometendo toda a hemiface, incluindo a musculatura frontal (testa) — achado que a diferencia da paralisia facial central, na qual a musculatura frontal é poupada por inervação cortical bilateral",
      "Incapacidade de fechar completamente o olho do lado acometido (lagoftalmo), com risco de exposição corneana associado",
      "Alteração do paladar nos dois terços anteriores da língua e hiperacusia (som mais alto que o normal no ouvido do lado afetado) podem ocorrer, dependendo do nível da lesão ao longo do trajeto do nervo",
      "Dor retroauricular pode preceder ou acompanhar o início da paralisia em uma parcela dos pacientes",
    ],
    diagnostico: [
      "Diagnóstico clínico, pela apresentação típica de paralisia facial periférica aguda unilateral com acometimento da musculatura frontal, na ausência de outros achados neurológicos ou sistêmicos que sugiram causa alternativa",
      "Exame cuidadoso deve sempre confirmar o acometimento da musculatura frontal (testa) para diferenciar paralisia periférica de central, distinção fundamental que muda completamente a investigação e as implicações",
    ],
    examesComplementares: [
      "Geralmente nenhum exame complementar é necessário em apresentação típica",
      "Sorologia para doença de Lyme em áreas endêmicas, ressonância magnética em casos atípicos, bilaterais, recorrentes ou com progressão além de 3 semanas, e investigação para outras causas (otite, colesteatoma, tumor de parótida, síndrome de Ramsay Hunt) quando há achados atípicos associados",
    ],
    diagnosticoDiferencial: [
      "AVC (paralisia facial central, com poupança da musculatura frontal, tipicamente associada a outros déficits neurológicos focais)",
      "Síndrome de Ramsay Hunt (paralisia facial periférica associada a vesículas no conduto auditivo externo/pavilhão auricular, por reativação do vírus varicela-zoster, geralmente com pior prognóstico que a paralisia de Bell clássica)",
      "Doença de Lyme (paralisia facial periférica, por vezes bilateral, em contexto epidemiológico compatível)",
      "Tumor de parótida ou colesteatoma (paralisia de instalação mais insidiosa e progressiva, não aguda, frequentemente com outros achados associados)",
    ],
    tratamento: [
      "Corticosteroide oral, iniciado o mais precocemente possível (idealmente dentro de 72 horas do início dos sintomas), é o tratamento de primeira linha com o maior benefício comprovado sobre a recuperação funcional completa",
      "Antiviral associado ao corticosteroide pode ser considerado em casos mais graves, embora sua eficácia isolada seja menos consistente que a do corticosteroide na literatura",
      "Proteção ocular (lubrificante e, se necessário, oclusão noturna) é essencial enquanto houver lagoftalmo, para prevenir ceratopatia por exposição — uma complicação evitável e muitas vezes negligenciada",
      "Fisioterapia facial pode ser considerada como coadjuvante, sobretudo em casos com recuperação incompleta",
    ],
    complicacoes: [
      "Aguda: ceratopatia de exposição por lagoftalmo não protegido adequadamente, podendo evoluir para úlcera de córnea se negligenciada",
      "Crônica: sincinesia facial (contração involuntária de um grupo muscular ao tentar mover outro, por regeneração aberrante das fibras nervosas) e paralisia residual em uma minoria dos casos, mais frequentes quando a paralisia inicial foi completa",
    ],
    redFlags: [
      "Poupança da musculatura frontal (paciente consegue enrugar a testa normalmente do lado 'afetado') — sinaliza paralisia facial central, não periférica, e exige investigação urgente para AVC, não o diagnóstico de paralisia de Bell",
      "Vesículas no conduto auditivo externo ou pavilhão auricular associadas à paralisia facial — síndrome de Ramsay Hunt, com prognóstico pior que a paralisia de Bell e indicação adicional de tratamento antiviral",
      "Ausência de melhora após 3 meses, ou paralisia facial bilateral/recorrente — reconsiderar o diagnóstico e investigar causas alternativas (doença de Lyme, tumor, sarcoidose)",
    ],
    prognostico:
      "Geralmente favorável, com a maioria dos pacientes apresentando recuperação completa ou quase completa em semanas a poucos meses, sobretudo quando o corticosteroide é iniciado precocemente. Uma minoria, mais frequentemente aqueles com paralisia inicial completa, evolui com sequela residual (fraqueza residual, sincinesia).",
    pontosDeProva: [
      "A distinção entre poupança (paralisia central) e acometimento (paralisia periférica) da musculatura frontal é o achado de exame físico mais cobrado e mais importante na avaliação de qualquer paralisia facial aguda",
      "Corticosteroide oral iniciado precocemente (idealmente até 72 horas) é o tratamento com maior benefício comprovado sobre a recuperação completa — atraso no início reduz sua eficácia",
      "Proteção ocular é uma medida simples, mas essencial, para prevenir uma complicação evitável (ceratopatia por exposição) enquanto persiste o lagoftalmo",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 34 anos, acorda com desvio da comissura labial e incapacidade de fechar completamente o olho direito. Ao exame, não consegue enrugar a testa do lado direito, e a hemiface direita está completamente flácida.",
      pergunta: "Qual a hipótese diagnóstica mais provável e a conduta imediata?",
      raciocinio:
        "Paralisia facial aguda unilateral com acometimento da musculatura frontal (incapacidade de enrugar a testa) confirma o padrão de paralisia facial periférica, não central, sendo a paralisia de Bell a causa mais comum e mais provável nesse contexto agudo e idiopático.",
      conduta:
        "Iniciar corticosteroide oral o mais rapidamente possível, dado o maior benefício quando administrado precocemente, e orientar proteção ocular rigorosa (lubrificante e oclusão noturna) enquanto houver incapacidade de fechamento palpebral completo, para prevenir lesão corneana por exposição.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "prednisona", nome: "Prednisona" },
    ],
    fontes: [
      { tema: "Fisiopatologia (reativação viral, compressão no canal facial) e distinção periférica vs. central", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Benefício do corticosteroide precoce sobre a recuperação funcional", fonte: "American Academy of Neurology, Practice Guideline: Steroids and Antivirals for Bell Palsy" },
    ],
  },
  {
    slug: "hidrocefalia",
    nome: "Hidrocefalia",
    sinonimos: [],
    cid10: "G91",
    especialidade: "Neurologia",
    etiologia: "Multifatorial",
    resumo: "Acúmulo excessivo de líquido cefalorraquidiano nos ventrículos cerebrais, por produção excessiva, obstrução da circulação ou absorção deficiente — quadro clínico e urgência variam enormemente conforme a velocidade de instalação e a idade do paciente.",
    definicao:
      "Acúmulo excessivo de líquido cefalorraquidiano dentro do sistema ventricular cerebral, resultante de um desequilíbrio entre produção, circulação e absorção desse líquido, causando dilatação ventricular e, conforme a velocidade de instalação e a complacência craniana (aberta em lactentes, fechada em crianças maiores e adultos), um espectro de manifestações clínicas que vai de assintomático a uma emergência neurológica aguda.",
    epidemiologia:
      "Pode ser congênita (por malformações como estenose do aqueduto cerebral) ou adquirida, sendo nesse caso mais comum secundária a hemorragia intraventricular (sobretudo em prematuros extremos), meningite, tumores obstruindo a circulação liquórica, ou trauma. A hidrocefalia de pressão normal é uma forma específica mais comum em idosos.",
    fisiopatologia:
      "Classificada mecanicamente em obstrutiva (não comunicante), quando há um bloqueio físico da circulação do líquido cefalorraquidiano dentro do sistema ventricular (por exemplo, estenose do aqueduto cerebral, tumor comprimindo uma via de drenagem), e comunicante, quando a obstrução ocorre fora do sistema ventricular, tipicamente por comprometimento da absorção nas granulações aracnóideas (por exemplo, após hemorragia subaracnóidea ou meningite, que causam fibrose e obstrução da reabsorção liquórica).",
    classificacao:
      "Classificada quanto ao mecanismo em obstrutiva/não comunicante e comunicante (conforme descrito acima), e quanto à velocidade de instalação em aguda (manifestação como emergência neurológica franca) e crônica (incluindo a hidrocefalia de pressão normal do idoso, com a tríade clássica de alteração de marcha, incontinência urinária e declínio cognitivo, apesar de pressão intracraniana normal na maior parte do tempo).",
    quadroClinico: [
      "Em lactentes (com suturas cranianas ainda abertas): aumento progressivo do perímetro cefálico, fontanela abaulada e tensa, olhar em 'sol poente' (desvio dos olhos para baixo) em casos avançados",
      "Em crianças maiores e adultos (hidrocefalia aguda): cefaleia, náusea/vômitos, rebaixamento do nível de consciência, sinais de hipertensão intracraniana, podendo evoluir rapidamente para deterioração neurológica grave se não tratada",
      "Hidrocefalia de pressão normal (idosos): tríade clássica de distúrbio de marcha (tipicamente o achado mais precoce e proeminente, com marcha de base alargada e passos curtos), incontinência urinária e declínio cognitivo, de instalação insidiosa ao longo de meses",
    ],
    diagnostico: [
      "Neuroimagem (tomografia ou ressonância magnética de crânio) demonstrando dilatação ventricular é o elemento central do diagnóstico em qualquer forma de hidrocefalia",
      "Na hidrocefalia de pressão normal, a resposta clínica a uma punção lombar de alto volume (retirada de grande quantidade de líquido cefalorraquidiano com melhora transitória da marcha) apoia o diagnóstico e ajuda a prever a resposta a uma eventual derivação ventriculoperitoneal definitiva",
    ],
    examesComplementares: [
      "Tomografia ou ressonância magnética de crânio, demonstrando dilatação ventricular e, quando possível, o nível e a causa da obstrução",
      "Punção lombar com medida da pressão de abertura (contraindicada quando há suspeita de lesão obstrutiva com risco de herniação, situação em que a neuroimagem deve preceder qualquer punção)",
      "Teste de punção lombar de alto volume (tap test) na investigação de hidrocefalia de pressão normal",
    ],
    diagnosticoDiferencial: [
      "Atrofia cerebral (dilatação ventricular ex vacuo, secundária à perda de parênquima cerebral, não por acúmulo patológico de líquido cefalorraquidiano — distinção importante, sobretudo em idosos)",
      "Demências neurodegenerativas (na hidrocefalia de pressão normal, o declínio cognitivo pode ser confundido com doença de Alzheimer isoladamente, mas a presença proeminente de distúrbio de marcha precoce e incontinência urinária deve levantar a suspeita alternativa)",
      "Lesões expansivas intracranianas causando hidrocefalia obstrutiva secundária, que devem ser sempre pesquisadas na neuroimagem",
    ],
    tratamento: [
      "Derivação ventriculoperitoneal (ou outras formas de derivação liquórica) é o tratamento definitivo na maioria dos casos de hidrocefalia sintomática, desviando o excesso de líquido cefalorraquidiano para outra cavidade corporal onde possa ser absorvido",
      "Ventriculostomia (drenagem ventricular externa) como medida temporária de urgência em hidrocefalia aguda com risco iminente de herniação, antes de uma solução definitiva",
      "Terceiro-ventriculostomia endoscópica é uma alternativa cirúrgica em casos selecionados de hidrocefalia obstrutiva, criando uma via alternativa de circulação liquórica sem necessidade de dispositivo de derivação permanente",
      "Tratamento da causa de base (ressecção de tumor obstrutivo, controle de infecção) sempre que aplicável e associado ao tratamento da hidrocefalia em si",
    ],
    complicacoes: [
      "Aguda: herniação cerebral e morte em hidrocefalia aguda obstrutiva não tratada a tempo",
      "Crônica: disfunção ou infecção do dispositivo de derivação ventriculoperitoneal (complicações comuns e recorrentes ao longo da vida de pacientes com derivação permanente, exigindo revisão cirúrgica), déficit cognitivo residual mesmo após tratamento em casos de longa evolução",
    ],
    redFlags: [
      "Cefaleia, vômitos e rebaixamento do nível de consciência de instalação relativamente rápida — hidrocefalia aguda com risco de herniação, exigindo neuroimagem urgente e, frequentemente, intervenção neurocirúrgica de urgência",
      "Aumento anormal e progressivo do perímetro cefálico em lactente — investigação de hidrocefalia mesmo na ausência de outros sinais evidentes, dada a maior sutileza do quadro nessa faixa etária",
      "Tríade de distúrbio de marcha, incontinência urinária e declínio cognitivo em idoso — investigar ativamente hidrocefalia de pressão normal, uma causa potencialmente tratável e reversível de declínio funcional, frequentemente subdiagnosticada como demência primária",
    ],
    prognostico:
      "Variável conforme a causa, a velocidade de instalação e a precocidade do tratamento: excelente na hidrocefalia aguda tratada rapidamente com derivação; reservado quando há atraso diagnóstico com dano neurológico já estabelecido. Na hidrocefalia de pressão normal, a resposta ao tratamento cirúrgico é geralmente melhor quando o distúrbio de marcha é o sintoma predominante e o tratamento é iniciado antes que o declínio cognitivo esteja avançado.",
    pontosDeProva: [
      "A tríade clássica da hidrocefalia de pressão normal (distúrbio de marcha, incontinência urinária, declínio cognitivo) é uma causa potencialmente tratável e reversível de declínio funcional em idosos, frequentemente confundida com demência primária — deve ser ativamente considerada nesse contexto",
      "Neuroimagem deve sempre preceder punção lombar quando há suspeita de hidrocefalia obstrutiva com risco de herniação — o mesmo princípio de segurança já aplicado a qualquer suspeita de hipertensão intracraniana",
      "O distúrbio de marcha é tipicamente o achado mais precoce e proeminente na hidrocefalia de pressão normal, e sua presença antes do declínio cognitivo avançado é um bom sinal prognóstico para resposta à derivação cirúrgica",
    ],
    casoClinico: {
      vinheta:
        "Homem, 74 anos, é levado por familiares devido a declínio cognitivo progressivo nos últimos 6 meses, associado a alteração da marcha (passos curtos, base alargada) que precedeu o declínio cognitivo em vários meses, e episódios recentes de incontinência urinária.",
      pergunta: "Qual a hipótese diagnóstica a ser ativamente investigada antes de assumir demência primária?",
      raciocinio:
        "A combinação da tríade de distúrbio de marcha (de instalação mais precoce), incontinência urinária e declínio cognitivo em um idoso é o quadro clássico de hidrocefalia de pressão normal, uma causa potencialmente tratável e reversível de declínio funcional, que não deve ser confundida automaticamente com uma demência neurodegenerativa primária.",
      conduta:
        "Solicitar neuroimagem (tomografia ou ressonância magnética de crânio) para avaliar dilatação ventricular, e considerar teste de punção lombar de alto volume para avaliar resposta clínica transitória, apoiando a decisão sobre derivação ventriculoperitoneal, que pode melhorar significativamente o quadro se realizada antes de declínio cognitivo avançado.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Classificação mecanicista (obstrutiva vs. comunicante) e tríade da hidrocefalia de pressão normal", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Papel do tap test na predição de resposta à derivação", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "demencia-vascular",
    nome: "Demência vascular",
    sinonimos: ["Demência por múltiplos infartos"],
    cid10: "F01",
    especialidade: "Neurologia",
    etiologia: "Multifatorial",
    resumo: "Segunda causa mais comum de demência (atrás da doença de Alzheimer), resultante de dano cerebrovascular cumulativo — curso tipicamente em degraus, diferente da progressão gradual e contínua do Alzheimer.",
    definicao:
      "Síndrome demencial resultante de dano cerebrovascular cumulativo ao encéfalo, seja por múltiplos infartos cerebrais (grandes ou pequenos, incluindo lacunares), por um infarto único estrategicamente localizado, ou por doença isquêmica crônica de pequenos vasos com lesão extensa de substância branca, causando comprometimento cognitivo significativo o suficiente para interferir na independência funcional.",
    epidemiologia:
      "É a segunda causa mais comum de demência, atrás apenas da doença de Alzheimer, compartilhando os mesmos fatores de risco vascular (hipertensão, diabetes, dislipidemia, tabagismo, fibrilação atrial) das demais doenças cerebrovasculares. Frequentemente coexiste com patologia de Alzheimer concomitante (demência mista), tornando a distinção diagnóstica pura nem sempre possível na prática clínica.",
    fisiopatologia:
      "O dano cerebrovascular cumulativo — seja por múltiplos infartos corticais/subcorticais, um infarto único em uma localização estrategicamente crítica para a cognição (como o tálamo), ou doença extensa de pequenos vasos com desmielinização isquêmica crônica da substância branca — interrompe circuitos neuronais relevantes para funções cognitivas, com o padrão e a gravidade do comprometimento dependendo diretamente da localização e extensão total do dano acumulado, não de um mecanismo degenerativo primário como no Alzheimer.",
    classificacao:
      "Classificada conforme o mecanismo predominante em demência por múltiplos infartos (grandes vasos), demência por infarto estratégico único, e demência vascular subcortical (por doença extensa de pequenos vasos, com lesão difusa de substância branca — a forma mais comum na prática atual). Frequentemente classificada também quanto à coexistência com patologia de Alzheimer (demência mista), reconhecendo que a distinção pura nem sempre é possível clinicamente.",
    quadroClinico: [
      "Curso tipicamente em degraus (piora abrupta associada a um novo evento vascular, seguida de período de relativa estabilidade), diferente da progressão gradual e contínua característica da doença de Alzheimer — embora a forma subcortical de pequenos vasos possa ter curso mais insidioso e progressivo, menos nitidamente em degraus",
      "Comprometimento predominante de funções executivas e velocidade de processamento (mais proeminente que o comprometimento de memória isolado, que é mais típico do Alzheimer nas fases iniciais)",
      "Sinais neurológicos focais associados (relacionados aos infartos prévios) frequentemente presentes ao exame, diferente do exame neurológico tipicamente normal nas fases iniciais do Alzheimer",
      "Alteração de marcha e sintomas de liberação piramidal são comuns na forma subcortical de pequenos vasos",
    ],
    diagnostico: [
      "Diagnóstico clínico apoiado por história de eventos cerebrovasculares prévios (ou fatores de risco vascular significativos) e pelo padrão cognitivo (predomínio de disfunção executiva sobre memória) e evolutivo (em degraus) compatível",
      "Neuroimagem demonstrando lesões vasculares (infartos corticais/subcorticais ou lesão extensa de substância branca) compatíveis com a extensão do comprometimento cognitivo observado é essencial para apoiar o diagnóstico",
    ],
    examesComplementares: [
      "Ressonância magnética de crânio, demonstrando infartos prévios (corticais, subcorticais, lacunares) ou lesão extensa de substância branca de origem isquêmica crônica",
      "Avaliação neuropsicológica formal, tipicamente demonstrando padrão de comprometimento executivo mais proeminente que o de memória, diferente do padrão amnéstico típico do Alzheimer",
      "Investigação de fatores de risco vascular (perfil lipídico, glicemia, avaliação cardiovascular) como parte da avaliação etiológica e da estratégia de prevenção de novos eventos",
    ],
    diagnosticoDiferencial: [
      "Doença de Alzheimer (progressão gradual e contínua, com comprometimento de memória mais proeminente nas fases iniciais, e neuroimagem tipicamente sem lesões vasculares significativas correspondentes)",
      "Demência mista (coexistência de patologia vascular e de Alzheimer, cada vez mais reconhecida como comum na prática clínica, especialmente em idosos)",
      "Hidrocefalia de pressão normal (tríade específica de distúrbio de marcha, incontinência e declínio cognitivo, potencialmente reversível com derivação cirúrgica)",
    ],
    tratamento: [
      "Controle rigoroso dos fatores de risco vascular (hipertensão, diabetes, dislipidemia) é a intervenção central, visando prevenir novos eventos cerebrovasculares e a progressão adicional do dano cognitivo cumulativo — utilizando os medicamentos já indicados para cada fator de risco de base (anti-hipertensivos, estatina, controle glicêmico)",
      "Antiagregação plaquetária conforme indicação da doença cerebrovascular de base, quando aplicável",
      "Inibidores da colinesterase e outros medicamentos usados na doença de Alzheimer têm evidência mais limitada e inconsistente especificamente na demência vascular pura, sendo mais frequentemente considerados quando há componente misto de Alzheimer concomitante",
      "Suporte multiprofissional (terapia ocupacional, orientação a cuidadores) semelhante ao empregado em outras síndromes demenciais",
    ],
    complicacoes: [
      "Crônica: progressão do comprometimento cognitivo e funcional a cada novo evento cerebrovascular, com perda cumulativa de independência ao longo do tempo; maior risco de quedas e de outras complicações relacionadas à doença cerebrovascular de base",
    ],
    redFlags: [
      "Declínio cognitivo em degraus associado a novo déficit neurológico focal — sinaliza novo evento cerebrovascular agudo sobreposto, justificando investigação e manejo agudo apropriados, não apenas atribuição à progressão esperada da demência de base",
    ],
    prognostico:
      "Variável, dependente diretamente do controle dos fatores de risco vascular e da prevenção de novos eventos cerebrovasculares — ao contrário do Alzheimer, cuja progressão é relativamente previsível independentemente de intervenção nos fatores de risco vascular, a demência vascular tem potencial de estabilização relativa quando a doença cerebrovascular de base é bem controlada, embora o dano já estabelecido seja permanente.",
    pontosDeProva: [
      "O curso em degraus (piora associada a eventos vasculares distintos, com platôs de relativa estabilidade entre eles) é o padrão evolutivo clássico que diferencia a demência vascular da progressão gradual e contínua do Alzheimer",
      "Comprometimento de função executiva mais proeminente que o de memória é o padrão neuropsicológico mais associado à demência vascular, diferente do padrão amnéstico predominante do Alzheimer",
      "Demência mista (vascular + Alzheimer) é cada vez mais reconhecida como uma apresentação comum, não uma exceção rara — a distinção pura entre as duas entidades nem sempre é possível ou clinicamente relevante para o manejo",
    ],
    casoClinico: {
      vinheta:
        "Homem, 76 anos, hipertenso e diabético de longa data, com história de dois AVCs isquêmicos prévios, apresenta declínio cognitivo que a família descreve como tendo piorado em 'degraus', associado a cada um dos eventos vasculares, com relativa estabilidade entre eles. A avaliação neuropsicológica mostra comprometimento executivo mais proeminente que de memória.",
      pergunta: "Qual a hipótese diagnóstica mais provável e a conduta terapêutica central?",
      raciocinio:
        "Declínio cognitivo em degraus, associado temporalmente a eventos cerebrovasculares conhecidos, com padrão neuropsicológico de predomínio executivo sobre a memória, é o quadro clássico de demência vascular, diferente da progressão gradual e contínua esperada na doença de Alzheimer.",
      conduta:
        "Otimizar o controle dos fatores de risco vascular de base (pressão arterial, glicemia, considerar antiagregação plaquetária conforme indicação), visando prevenir novos eventos cerebrovasculares e conter a progressão adicional do comprometimento cognitivo cumulativo, além de suporte multiprofissional para o paciente e a família.",
    },
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Classificação, padrão evolutivo em degraus e perfil neuropsicológico", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Evidência limitada de inibidores da colinesterase especificamente na demência vascular pura", fonte: "fonte pendente" },
    ],
  },
  {
    slug: "neoplasia-maligna-encefalo",
    nome: "Neoplasia maligna do encéfalo",
    sinonimos: ["Tumor cerebral maligno", "Glioma"],
    cid10: "C71",
    especialidade: "Neurologia",
    etiologia: "Neoplásica",
    resumo: "Tumores malignos primários (gliomas, sobretudo o glioblastoma) ou metastáticos do encéfalo — o edema perilesional frequentemente contribui tanto ou mais que o próprio tumor para os sintomas, sendo alvo direto de tratamento com corticosteroide.",
    definicao:
      "Neoplasia maligna originada no tecido encefálico (tumor primário, mais comumente um glioma) ou disseminada a partir de um câncer sistêmico (metástase cerebral, na verdade mais frequente que os tumores primários malignos em conjunto), causando sintomas por efeito de massa direto, edema perilesional associado, ou irritação cortical focal (crises epilépticas).",
    epidemiologia:
      "Metástases cerebrais são mais comuns que tumores primários malignos do encéfalo, originando-se mais frequentemente de câncer de pulmão, mama e melanoma. Entre os tumores primários, o glioblastoma é o tumor cerebral primário maligno mais comum e mais agressivo em adultos, com prognóstico historicamente reservado apesar do tratamento multimodal.",
    fisiopatologia:
      "O crescimento tumoral expansivo dentro do compartimento craniano fechado gera efeito de massa direto sobre estruturas adjacentes, além de desencadear edema vasogênico perilesional significativo (por ruptura da barreira hematoencefálica na vascularização tumoral anômala), que frequentemente contribui tanto ou mais que o volume do próprio tumor para os sintomas e para a elevação da pressão intracraniana. A irritação da atividade elétrica cortical adjacente ao tumor pode desencadear crises epilépticas focais, por vezes a manifestação inicial da doença.",
    classificacao:
      "Tumores primários classificados histologicamente (gliomas — incluindo o glioblastoma, o mais agressivo — meningiomas, geralmente benignos mas incluídos no diagnóstico diferencial de massa intracraniana, entre outros) e por grau de malignidade conforme critérios da Organização Mundial da Saúde. Metástases classificadas conforme o sítio primário de origem, sendo frequentemente múltiplas ao diagnóstico.",
    quadroClinico: [
      "Cefaleia, tipicamente pior pela manhã e associada a náusea, refletindo elevação da pressão intracraniana pelo efeito de massa e edema associado",
      "Déficit neurológico focal progressivo, cuja natureza depende diretamente da localização do tumor (fraqueza, alteração de linguagem, alteração de campo visual, entre outros)",
      "Crise epiléptica de início recente em adulto sem história prévia de epilepsia é uma forma de apresentação relativamente comum e importante de ser reconhecida",
      "Alteração cognitiva e de personalidade, sobretudo em tumores de localização frontal",
      "Sinais de hipertensão intracraniana em fases mais avançadas (papiledema, rebaixamento do nível de consciência)",
    ],
    diagnostico: [
      "Ressonância magnética de crânio com contraste é o exame central para caracterizar a lesão (localização, padrão de realce, edema associado) e orientar a suspeita entre tumor primário e metástase",
      "Biópsia estereotáxica ou ressecção cirúrgica com análise histopatológica é necessária para confirmação diagnóstica definitiva e classificação molecular/histológica precisa, que orienta diretamente o tratamento e o prognóstico",
    ],
    examesComplementares: [
      "Ressonância magnética de crânio com contraste (exame de escolha para caracterização inicial da lesão)",
      "Investigação de sítio primário (tomografia de tórax/abdome, entre outros conforme suspeita) quando os achados de imagem sugerem metástase, sobretudo se múltiplas lesões",
      "Biópsia ou ressecção cirúrgica com análise histopatológica e molecular para diagnóstico definitivo, graduação e orientação terapêutica",
    ],
    diagnosticoDiferencial: [
      "Abscesso cerebral (pode ter aparência de imagem semelhante a um tumor, distinção auxiliada por sequências específicas de ressonância e contexto clínico de infecção)",
      "Lesão desmielinizante tumefativa (pode mimetizar tumor à imagem convencional em casos raros de esclerose múltipla atípica)",
      "AVC subagudo (em fase de reabsorção, pode ocasionalmente mimetizar lesão expansiva à imagem)",
    ],
    tratamento: [
      "Corticosteroide (dexametasona) é usado para reduzir o edema vasogênico perilesional, proporcionando melhora sintomática frequentemente rápida e significativa, embora não trate o tumor propriamente dito",
      "Ressecção cirúrgica máxima segura é o primeiro passo do tratamento definitivo na maioria dos tumores primários e em metástases sintomáticas/acessíveis, tanto para alívio de sintomas quanto para obtenção de diagnóstico histológico preciso",
      "Radioterapia (de todo o encéfalo ou estereotáxica, conforme o número e tamanho das lesões) e quimioterapia/terapia sistêmica dirigida, conforme o tipo histológico/molecular do tumor primário ou o tipo de câncer de origem no caso de metástase",
      "Fármaco antiepiléptico quando há crises associadas, mas não indicado profilaticamente na ausência de crise prévia",
    ],
    complicacoes: [
      "Aguda: herniação cerebral por efeito de massa e edema não controlados, crise epiléptica recorrente ou estado de mal epiléptico",
      "Crônica: déficit neurológico progressivo conforme o crescimento tumoral, deterioração cognitiva, e recidiva após tratamento inicial (particularmente comum e esperada no glioblastoma, apesar do tratamento multimodal)",
    ],
    redFlags: [
      "Cefaleia progressiva, pior pela manhã, associada a náusea e sinais neurológicos focais novos — investigação de imagem urgente para excluir lesão expansiva intracraniana",
      "Primeira crise epiléptica em adulto, sobretudo com déficit neurológico focal associado ou idade mais avançada — sempre investigar lesão estrutural, incluindo neoplásica, antes de assumir epilepsia idiopática",
      "Sinais de hipertensão intracraniana com deterioração do nível de consciência — risco de herniação iminente, exigindo intervenção urgente (corticosteroide, medidas para reduzir pressão intracraniana, e avaliação neurocirúrgica)",
    ],
    prognostico:
      "Extremamente variável conforme o tipo histológico/molecular: meningiomas (geralmente benignos) têm excelente prognóstico após ressecção completa; o glioblastoma, o tumor primário maligno mais comum em adultos, mantém prognóstico reservado mesmo com tratamento multimodal agressivo (cirurgia, radioterapia e quimioterapia), com recidiva praticamente universal. O prognóstico de metástases cerebrais depende fortemente do controle do tumor primário sistêmico e do número/localização das lesões cerebrais.",
    pontosDeProva: [
      "Metástases cerebrais são coletivamente mais comuns que tumores primários malignos do encéfalo — sempre considerar e investigar um sítio primário sistêmico, sobretudo pulmão, mama e melanoma, diante de lesão(ões) cerebral(is) suspeita(s)",
      "O edema perilesional frequentemente contribui tanto ou mais que o próprio volume tumoral para os sintomas — por isso o corticosteroide (dexametasona) proporciona melhora sintomática rápida sem tratar o tumor em si, distinção importante para não confundir resposta sintomática com resposta oncológica",
      "Crise epiléptica de início recente em adulto sem epilepsia prévia deve sempre levantar suspeita de lesão estrutural, incluindo neoplásica, e nunca ser tratada como epilepsia idiopática sem investigação de imagem adequada",
    ],
    casoClinico: {
      vinheta:
        "Mulher, 58 anos, com história de câncer de mama tratado há 3 anos, apresenta cefaleia progressiva há 3 semanas, pior pela manhã, associada a um episódio de crise convulsiva focal com generalização secundária ontem.",
      pergunta: "Qual a principal hipótese diagnóstica e a investigação prioritária?",
      raciocinio:
        "Cefaleia progressiva pior pela manhã associada a crise epiléptica de início recente, em paciente com história prévia de câncer de mama, levanta forte suspeita de metástase cerebral, dado que metástases são a causa mais comum de lesão expansiva intracraniana nesse contexto de neoplasia sistêmica conhecida.",
      conduta:
        "Solicitar ressonância magnética de crânio com contraste com urgência para caracterizar a(s) lesão(ões); se confirmada(s) lesão(ões) compatível(is) com metástase, iniciar corticosteroide (dexametasona) para controle do edema perilesional e dos sintomas associados, e encaminhar para avaliação oncológica multidisciplinar para definição de tratamento local (cirurgia/radioterapia) e sistêmico.",
    },
    medicamentosPrimeiraLinha: [
      { slug: "dexametasona", nome: "Dexametasona" },
    ],
    medicamentosSecaoTitulo: "Medicamento para controle do edema perilesional (não trata o tumor)",
    medicamentosNota:
      "A dexametasona controla o edema vasogênico perilesional e alivia sintomas rapidamente, mas não trata o tumor em si. O tratamento oncológico definitivo (cirurgia, radioterapia, quimioterapia/terapia sistêmica) ainda não tem ficha própria no site.",
    fontes: [
      { tema: "Epidemiologia (metástases vs. tumores primários) e fisiopatologia do edema perilesional", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Uso de dexametasona para edema cerebral vasogênico associado a tumores", fonte: "Goodman & Gilman, 13ª ed." },
    ],
  },
];
