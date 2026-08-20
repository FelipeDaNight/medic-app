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
    prognostico:
      "Com controle adequado, o risco de eventos cardiovasculares e renais é significativamente reduzido. Hipertensão não controlada é a principal causa evitável de AVC, infarto e doença renal crônica.",
    casoIlustrativo:
      "Paciente de 52 anos, assintomático, com PA de 152/96 mmHg em três consultas consecutivas e discreta hipertrofia ventricular esquerda ao ECG — ilustra a importância do rastreamento ativo, já que a doença raramente causa sintomas até haver lesão de órgão-alvo.",
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
    tratamento: [
      "IECA/BRA ou inibidor da neprilisina-angiotensina (sacubitril-valsartana)",
      "Betabloqueador em dose otimizada",
      "Antagonista do receptor mineralocorticoide",
      "Inibidor de SGLT2 (classe incorporada mais recentemente ao tratamento independentemente da presença de diabetes)",
      "Diuréticos para controle de sintomas congestivos",
    ],
    prognostico:
      "Doença crônica e progressiva; o tratamento com as quatro classes farmacológicas pilares reduz significativamente mortalidade e hospitalizações, mas a sobrevida ainda é inferior à de muitos cânceres em estágios avançados da síndrome.",
    casoIlustrativo:
      "Paciente de 68 anos, hipertenso de longa data, procura o pronto-socorro com dispneia progressiva, ortopneia e edema bilateral de membros inferiores — quadro clássico de descompensação de insuficiência cardíaca.",
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
    tratamento: [
      "Mudanças de estilo de vida: dieta, atividade física e perda de peso",
      "Metformina como primeira linha farmacológica",
      "Associação de inibidores de SGLT2 ou análogos de GLP-1, especialmente com doença cardiovascular ou renal estabelecida",
      "Insulinização quando há falha das terapias orais/injetáveis não insulínicas",
    ],
    prognostico:
      "Controle glicêmico adequado reduz significativamente o risco de complicações microvasculares e macrovasculares. Doença progressiva, exigindo intensificação terapêutica ao longo do tempo na maioria dos pacientes.",
    casoIlustrativo:
      "Paciente de 45 anos, obeso, assintomático, com glicemia de jejum de 138 mg/dL confirmada em nova coleta — reforça a importância do rastreamento em pacientes com fatores de risco, já que o diagnóstico costuma preceder os sintomas em anos.",
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
    tratamento: [
      "Reposição com levotiroxina em dose individualizada, em jejum",
      "Monitorização periódica do TSH para ajuste de dose",
      "Ajuste de dose em situações especiais (gestação, uso de outras medicações que interferem na absorção)",
    ],
    prognostico:
      "Excelente com reposição hormonal adequada e adesão ao tratamento; a maioria dos pacientes mantém qualidade de vida normal com controle laboratorial regular.",
    casoIlustrativo:
      "Mulher de 38 anos com fadiga progressiva, ganho de peso e pele seca há 6 meses; TSH de 18 mUI/L e anti-TPO fortemente positivo confirmam tireoidite de Hashimoto.",
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
    tratamento: [
      "Corticoide inalatório como base do tratamento de manutenção, mesmo em quadros leves",
      "Associação com broncodilatador de longa duração conforme gravidade",
      "Broncodilatador de curta duração para alívio (resgate)",
      "Educação sobre técnica inalatória e controle de gatilhos ambientais",
    ],
    prognostico:
      "Com tratamento adequado, a maioria dos pacientes atinge bom controle dos sintomas e função pulmonar preservada. Exacerbações graves não controladas podem ser fatais.",
    casoIlustrativo:
      "Adolescente de 15 anos com episódios recorrentes de tosse noturna e sibilância aos esforços, com espirometria mostrando obstrução reversível — quadro típico de asma subdiagnosticada quando os sintomas são atribuídos apenas a \"bronquite\".",
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
    tratamento: [
      "Antibioticoterapia empírica guiada por escore de gravidade e comorbidades",
      "Ambulatorial sem comorbidades: amoxicilina ou macrolídeo",
      "Internação: betalactâmico associado a macrolídeo ou monoterapia com fluoroquinolona respiratória",
      "Suporte com oxigenoterapia conforme necessidade",
    ],
    prognostico:
      "Bom na maioria dos casos tratados precocemente; mortalidade significativamente maior em idosos, imunossuprimidos e casos com necessidade de UTI.",
    casoIlustrativo:
      "Paciente de 70 anos, diabético, apresenta febre, tosse produtiva e confusão mental há 2 dias; CURB-65 de 3 pontos indica necessidade de internação hospitalar.",
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
    tratamento: [
      "Esquema padrão RIPE (rifampicina, isoniazida, pirazinamida, etambutol) por 2 meses, seguido de rifampicina e isoniazida por mais 4 meses",
      "Tratamento diretamente observado (DOT) para garantir adesão",
      "Notificação compulsória e investigação de contatos",
    ],
    prognostico:
      "Alta taxa de cura com tratamento completo e adequado. Abandono do tratamento é o principal fator associado à resistência bacteriana (multirresistência).",
    casoIlustrativo:
      "Paciente de 34 anos, em situação de vulnerabilidade social, com tosse há 5 semanas, febre vespertina e emagrecimento de 6 kg — quadro clássico que exige investigação ativa para tuberculose.",
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
    tratamento: [
      "Hidratação oral ou venosa conforme classificação de risco",
      "Paracetamol para febre e dor (evitar AINEs e AAS pelo risco de sangramento)",
      "Monitorização de sinais de alarme e reclassificação frequente",
      "Internação e reposição volêmica intensiva nas formas graves",
    ],
    prognostico:
      "Bom na maioria dos casos com hidratação adequada; a identificação precoce dos sinais de alarme é determinante para reduzir mortalidade nas formas graves.",
    casoIlustrativo:
      "Paciente de 25 anos com febre há 4 dias que evolui com dor abdominal intensa e vômitos persistentes na defervescência — sinais de alarme que exigem reclassificação de risco e hidratação venosa imediata.",
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
    tratamento: [
      "Suporte sintomático na maioria dos casos leves",
      "Corticoide sistêmico (dexametasona) em casos com necessidade de oxigênio suplementar",
      "Antivirais específicos em pacientes de alto risco, quando indicados precocemente",
      "Suporte ventilatório em casos graves",
    ],
    prognostico:
      "Maioria dos casos é leve e autolimitada; idade avançada, obesidade e comorbidades cardiopulmonares aumentam o risco de evolução grave. Vacinação reduz significativamente hospitalização e óbito.",
    casoIlustrativo:
      "Paciente de 60 anos, não vacinado, com febre e tosse há 5 dias evolui com dispneia e saturação de 91% em ar ambiente — indicação de internação e consideração de corticoterapia.",
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
    tratamento: [
      "Inibidor da bomba de prótons",
      "Erradicação do H. pylori quando identificado (esquema combinado com antibióticos)",
      "Suspensão de AINEs e álcool quando fatores causais",
    ],
    prognostico:
      "Geralmente favorável com remoção do fator causal e tratamento adequado; gastrite atrófica crônica não tratada associa-se a maior risco de neoplasia gástrica a longo prazo.",
    casoIlustrativo:
      "Paciente de 40 anos, usuário crônico de AINE para dor lombar, refere dor epigástrica em queimação há 3 semanas — quadro sugestivo de gastrite associada a AINE, com indicação de investigação endoscópica se sinais de alarme.",
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
    tratamento: [
      "Medidas comportamentais (elevação da cabeceira, evitar deitar após refeições, perda de peso)",
      "Inibidor da bomba de prótons por 4–8 semanas",
      "Tratamento cirúrgico (fundoplicatura) em casos refratários selecionados",
    ],
    prognostico:
      "Bom controle sintomático na maioria dos pacientes com IBP; esôfago de Barrett exige vigilância endoscópica pelo risco de progressão para adenocarcinoma esofágico.",
    casoIlustrativo:
      "Paciente de 35 anos, obeso, com pirose diária há 6 meses, pior após refeições copiosas e ao deitar — quadro típico de DRGE, com boa resposta esperada a IBP e medidas comportamentais.",
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
    tratamento: [
      "Metotrexato como droga modificadora do curso da doença (DMARD) de primeira linha",
      "Corticoide em baixa dose como ponte terapêutica",
      "Terapias biológicas (anti-TNF, anti-IL-6, entre outras) em casos refratários",
      "Reabilitação e terapia ocupacional para preservação funcional",
    ],
    prognostico:
      "Diagnóstico e tratamento precoces (\"janela de oportunidade\") melhoram significativamente o prognóstico funcional e reduzem dano articular irreversível.",
    casoIlustrativo:
      "Mulher de 42 anos com dor e edema simétricos em punhos e articulações metacarpofalângicas há 3 meses, com rigidez matinal de 90 minutos e anti-CCP positivo — quadro característico de artrite reumatoide inicial.",
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
    tratamento: [
      "Hidroxicloroquina como base do tratamento na maioria dos pacientes",
      "Corticoide em dose ajustada à gravidade do acometimento",
      "Imunossupressores (micofenolato, azatioprina, ciclofosfamida) em acometimento de órgãos maiores",
      "Terapias biológicas (belimumabe, anifrolumabe) em casos selecionados",
    ],
    prognostico:
      "Variável conforme órgãos acometidos; acometimento renal e neurológico grave determina pior prognóstico. Sobrevida em 10 anos aumentou substancialmente com o tratamento moderno.",
    casoIlustrativo:
      "Mulher de 24 anos com eritema malar, artralgia e proteinúria, FAN positivo em altos títulos e anti-DNA de dupla hélice positivo — quadro sugestivo de LES com possível nefrite associada.",
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
    tratamento: [
      "Inibidores da colinesterase (donepezila, rivastigmina) em fases leve a moderada",
      "Memantina em fases moderada a grave",
      "Terapias anti-amiloide mais recentes, com benefício modesto e necessidade de monitorização de efeitos adversos",
      "Suporte multidisciplinar ao paciente e à família/cuidadores",
    ],
    prognostico:
      "Doença progressiva sem cura estabelecida; o tratamento atual busca retardar a progressão e manter qualidade de vida pelo maior tempo possível.",
    casoIlustrativo:
      "Paciente de 78 anos, trazido pela família por esquecimentos progressivos há 1 ano, repetindo perguntas e se perdendo em trajetos conhecidos — quadro clássico de comprometimento de memória episódica sugestivo de Alzheimer.",
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
    tratamento: [
      "Reposição de ferro oral como primeira linha na maioria dos casos",
      "Ferro intravenoso em intolerância ao ferro oral, má absorção ou necessidade de reposição rápida",
      "Investigação e tratamento da causa de base, especialmente perdas sanguíneas ocultas",
    ],
    prognostico:
      "Excelente com reposição adequada e correção da causa subjacente; recorrência é comum se a causa base não for identificada e tratada.",
    casoIlustrativo:
      "Mulher de 29 anos com fadiga e palidez, menstruações intensas há vários ciclos, hemoglobina de 9,2 g/dL com VCM reduzido e ferritina de 8 ng/mL — quadro típico de anemia ferropriva por perda menstrual excessiva.",
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
    tratamento: [
      "Controle rigoroso da pressão arterial e glicemia",
      "IECA/BRA para redução da proteinúria e proteção renal",
      "Inibidores de SGLT2, com benefício adicional na progressão da DRC",
      "Encaminhamento ao nefrologista conforme categoria de risco KDIGO",
      "Terapia renal substitutiva (diálise ou transplante) em estágios avançados",
    ],
    prognostico:
      "Progressão variável conforme etiologia e controle dos fatores de risco; detecção precoce e manejo adequado podem retardar significativamente a evolução para doença renal terminal.",
    casoIlustrativo:
      "Paciente de 58 anos, diabético e hipertenso há 15 anos, com TFGe de 42 mL/min/1,73m² e relação albumina/creatinina elevada — indica DRC estágio 3, com necessidade de otimização terapêutica e encaminhamento à nefrologia.",
  },
];
