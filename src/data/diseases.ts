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
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Definição, diagnóstico e classificação subclínico/clínico", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Posologia e monitorização da levotiroxina", fonte: "fonte pendente — levotiroxina ainda sem ficha própria de medicamento no site" },
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
    medicamentosPrimeiraLinha: [],
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
    medicamentosPrimeiraLinha: [],
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
    ],
    fontes: [
      { tema: "Critérios classificatórios ACR/EULAR 2010 e DAS28", fonte: "American College of Rheumatology / EULAR, critérios classificatórios 2010" },
      { tema: "Metotrexato como DMARD de 1ª linha (ainda sem ficha própria de medicamento no site)", fonte: "fonte pendente" },
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
    ],
    fontes: [
      { tema: "Critérios classificatórios EULAR/ACR 2019 e SLEDAI", fonte: "EULAR/ACR, critérios classificatórios 2019" },
      { tema: "Hidroxicloroquina como base do tratamento (ainda sem ficha própria de medicamento no site)", fonte: "fonte pendente" },
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
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Estadiamento clínico funcional e escala CDR", fonte: "fonte pendente" },
      { tema: "Inibidores da colinesterase e memantina (ainda sem ficha própria de medicamento no site)", fonte: "fonte pendente" },
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
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Pontos de corte de ferritina e saturação de transferrina", fonte: "fonte pendente" },
      { tema: "Sulfato ferroso como 1ª linha (ainda sem ficha própria de medicamento no site)", fonte: "fonte pendente" },
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
    medicamentosPrimeiraLinha: [],
    fontes: [
      { tema: "Classificação etiológica e fases evolutivas", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Diagnóstico diferencial com doença de Graves via captação de iodo", fonte: "American Thyroid Association Guidelines for Diagnosis and Management of Hyperthyroidism, 2016" },
      { tema: "Tratamento farmacológico específico por subtipo (ainda sem fichas próprias no site com essa indicação)", fonte: "fonte pendente" },
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
];
