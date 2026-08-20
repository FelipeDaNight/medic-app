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
  },
];
