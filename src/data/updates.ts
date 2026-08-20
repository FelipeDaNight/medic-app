import type { ClinicalUpdate } from "./types";

export const updates: ClinicalUpdate[] = [
  {
    slug: "meta-pressorica-alto-risco-cardiovascular",
    titulo: "Metas pressóricas mais rígidas para pacientes de alto risco cardiovascular",
    resumo:
      "Diretrizes recentes de hipertensão reforçam metas mais próximas de 130/80 mmHg em pacientes de alto risco, e não apenas o limiar diagnóstico de 140/90 mmHg.",
    especialidade: "Cardiologia",
    importancia: "Alta",
    fonte: "Diretriz Brasileira de Hipertensão Arterial",
    data: "2026-02-10",
    destaque:
      "Em pacientes de alto risco cardiovascular, perseguir metas mais próximas de 130/80 mmHg — e não apenas normalizar a pressão — reduz desfechos cardiovasculares maiores.",
    corpo: [
      "As diretrizes de hipertensão vêm consolidando a ideia de que o alvo terapêutico deve ser individualizado pelo risco cardiovascular global, e não apenas pelo limiar diagnóstico. Para pacientes de alto risco — diabéticos, com doença renal crônica ou doença cardiovascular estabelecida — metas mais próximas de 130/80 mmHg têm se mostrado associadas a menor incidência de eventos cardiovasculares maiores em comparação a metas mais permissivas.",
      "Na prática, isso reforça a importância de reavaliar pacientes considerados \"controlados\" sob os critérios antigos, mas que ainda mantêm pressão acima de 130/80 mmHg e possuem fatores de risco adicionais.",
      "A individualização continua central: em idosos frágeis ou com múltiplas comorbidades, metas muito rígidas podem aumentar o risco de hipotensão sintomática e quedas, exigindo avaliação cuidadosa da relação risco-benefício antes da intensificação terapêutica.",
    ],
  },
  {
    slug: "segunda-linha-diabetes-tipo-2",
    titulo: "Escolha do segundo agente após metformina passa a priorizar proteção cardiorrenal",
    resumo:
      "Algoritmos atuais recomendam considerar inibidores de SGLT2 ou análogos de GLP-1 como segunda linha no diabetes tipo 2 com base no perfil de risco do paciente, não apenas no controle glicêmico.",
    especialidade: "Endocrinologia",
    importancia: "Alta",
    fonte: "Sociedade Brasileira de Diabetes",
    data: "2026-01-22",
    destaque:
      "A escolha do segundo agente após metformina deve considerar primeiro a presença de doença cardiovascular, insuficiência cardíaca ou doença renal crônica — não apenas a redução da HbA1c.",
    corpo: [
      "O algoritmo de tratamento do diabetes mellitus tipo 2 vem se afastando de uma lógica puramente centrada na redução da hemoglobina glicada para incorporar a proteção de órgão-alvo como critério central na escolha do segundo agente após a metformina.",
      "Pacientes com doença cardiovascular aterosclerótica estabelecida se beneficiam preferencialmente de análogos de GLP-1 ou inibidores de SGLT2 com benefício cardiovascular comprovado. Já pacientes com insuficiência cardíaca ou doença renal crônica se beneficiam particularmente de inibidores de SGLT2, com redução de hospitalizações e progressão da doença renal.",
      "Essa mudança de paradigma exige que o raciocínio clínico incorpore o perfil de comorbidades do paciente desde o início da terapia combinada, e não apenas ao final de uma escalada terapêutica guiada exclusivamente por metas glicêmicas.",
    ],
  },
  {
    slug: "corticoide-inalatorio-asma-leve",
    titulo: "Corticoide inalatório passa a ser recomendado mesmo na asma leve",
    resumo:
      "Diretrizes internacionais de asma não recomendam mais o uso isolado de broncodilatador de curta duração (SABA) como monoterapia, mesmo em quadros leves e intermitentes.",
    especialidade: "Pneumologia",
    importancia: "Alta",
    fonte: "GINA (Global Initiative for Asthma)",
    data: "2025-12-05",
    destaque:
      "O uso isolado de broncodilatador de curta duração como única terapia da asma — mesmo em casos leves — deixou de ser recomendado; todo paciente com asma deve receber corticoide inalatório, ao menos sob demanda associado a formoterol.",
    corpo: [
      "Por décadas, o tratamento da asma leve intermitente baseou-se no uso de broncodilatador de curta duração (SABA) apenas quando necessário. Estudos demonstraram, porém, que essa abordagem subestima a inflamação crônica presente mesmo em quadros leves e está associada a maior risco de exacerbações graves.",
      "A recomendação atual é que todos os pacientes com asma recebam corticoide inalatório como parte do tratamento, seja em esquema de manutenção regular, seja em esquema combinado de corticoide inalatório com formoterol utilizado sob demanda para alívio dos sintomas.",
      "Esse ponto é frequentemente cobrado em provas e residência: a ideia de que \"asma leve não precisa de corticoide, só bombinha quando tiver falta de ar\" está desatualizada e não reflete mais a prática recomendada.",
    ],
  },
  {
    slug: "escore-gravidade-pac",
    titulo: "Reforço do uso sistemático de escores de gravidade na pneumonia comunitária",
    resumo:
      "Escores como CURB-65 continuam centrais para decidir entre tratamento ambulatorial, internação em enfermaria ou UTI na pneumonia adquirida na comunidade.",
    especialidade: "Pneumologia",
    importancia: "Média",
    fonte: "Consenso de Pneumonia Adquirida na Comunidade",
    data: "2025-11-18",
    destaque:
      "A decisão sobre local de tratamento na PAC deve ser sistematicamente guiada por escore de gravidade validado, e não apenas pela impressão clínica isolada.",
    corpo: [
      "A avaliação de gravidade segue sendo um dos pontos mais cobrados na abordagem da pneumonia adquirida na comunidade. O escore CURB-65 (confusão mental, ureia elevada, frequência respiratória, pressão arterial baixa e idade ≥ 65 anos) continua sendo a ferramenta mais usada na prática brasileira pela sua simplicidade à beira-leito.",
      "Reforça-se que a decisão sobre local de tratamento — ambulatorial, enfermaria ou UTI — não deve se basear apenas na impressão clínica inicial, mas na combinação do escore de gravidade com o julgamento clínico e fatores sociais (capacidade de acompanhamento ambulatorial, comorbidades descompensadas).",
      "Pacientes com pontuação ≥ 3 no CURB-65 apresentam risco de mortalidade significativamente maior e geralmente necessitam de internação hospitalar, muitas vezes com necessidade de suporte em unidade de terapia intensiva.",
    ],
  },
  {
    slug: "sinais-alarme-dengue",
    titulo: "Atualização dos critérios de sinais de alarme e internação na dengue",
    resumo:
      "Reforço da importância da reclassificação de risco contínua na dengue, especialmente no período de defervescência, quando ocorrem a maioria dos casos graves.",
    especialidade: "Infectologia",
    importancia: "Alta",
    fonte: "Ministério da Saúde — Guia de Manejo Clínico da Dengue",
    data: "2026-03-01",
    destaque:
      "O período de maior risco para complicações na dengue é a defervescência (queda da febre), não o pico febril — é quando os sinais de alarme devem ser ativamente pesquisados.",
    corpo: [
      "O manejo clínico da dengue segue enfatizando que a fase crítica da doença coincide, na maioria dos casos, com a defervescência — o momento em que a febre cede, frequentemente interpretado erroneamente pelo paciente e pela família como sinal de melhora.",
      "Os sinais de alarme (dor abdominal intensa e contínua, vômitos persistentes, sangramento de mucosas, letargia ou irritabilidade, hepatomegalia dolorosa, aumento progressivo do hematócrito associado a queda rápida de plaquetas) devem ser ativamente pesquisados nessa fase, com reclassificação de risco a cada reavaliação.",
      "Reforça-se também a contraindicação de anti-inflamatórios não esteroidais e ácido acetilsalicílico durante o quadro, pelo risco aumentado de sangramento — paracetamol permanece a opção segura para controle de febre e dor.",
    ],
  },
  {
    slug: "reposicao-ferro-oral-vs-intravenosa",
    titulo: "Ferro intravenoso ganha espaço em situações antes reservadas ao ferro oral",
    resumo:
      "A reposição intravenosa de ferro tem sido cada vez mais considerada em pacientes com intolerância gastrointestinal ou necessidade de correção mais rápida, além das indicações clássicas.",
    especialidade: "Hematologia",
    importancia: "Média",
    fonte: "Revisão em Hematologia Clínica",
    data: "2025-10-14",
    destaque:
      "A intolerância gastrointestinal ao ferro oral não deve levar ao abandono do tratamento — é uma das indicações mais comuns, e subutilizadas, para migrar precocemente ao ferro intravenoso.",
    corpo: [
      "O ferro oral continua sendo a primeira escolha para a maioria dos pacientes com anemia ferropriva, por custo, disponibilidade e segurança. No entanto, tem crescido o reconhecimento de que a baixa adesão por intolerância gastrointestinal (náusea, constipação, desconforto abdominal) é uma causa comum e subestimada de falha terapêutica.",
      "Nesses casos, e também em pacientes com doenças inflamatórias intestinais, má absorção, doença renal crônica em diálise ou necessidade de correção rápida (por exemplo, no pré-operatório), o ferro intravenoso tem sido cada vez mais considerado precocemente, e não apenas como último recurso.",
      "As formulações modernas de ferro intravenoso permitem reposição de doses maiores em menos infusões, com perfil de segurança favorável quando administradas em ambiente apropriado.",
    ],
  },
  {
    slug: "terapias-alvo-les",
    titulo: "Terapias-alvo ampliam o arsenal terapêutico no lúpus eritematoso sistêmico",
    resumo:
      "Belimumabe e anifrolumabe consolidam-se como opções para pacientes com LES ativo apesar da terapia padrão, especialmente em acometimento renal e cutâneo.",
    especialidade: "Reumatologia",
    importancia: "Média",
    fonte: "Sociedade Brasileira de Reumatologia",
    data: "2025-09-27",
    destaque:
      "Pacientes com LES que permanecem com atividade de doença apesar de hidroxicloroquina, corticoide e imunossupressor convencional devem ser considerados para terapia biológica direcionada, e não apenas para escalada de corticoide.",
    corpo: [
      "O tratamento do lúpus eritematoso sistêmico continua tendo a hidroxicloroquina como base para a maioria dos pacientes, mas o arsenal terapêutico para casos refratários se ampliou de forma relevante nos últimos anos.",
      "Belimumabe, que atua inibindo o BLyS (estimulador de linfócitos B), e anifrolumabe, que bloqueia o receptor do interferon tipo I, têm demonstrado benefício em pacientes com atividade persistente de doença apesar do tratamento convencional, incluindo redução da necessidade de corticoide em uso crônico.",
      "Isso reforça um princípio importante no manejo do LES: a escalada indefinida da dose de corticoide para controlar atividade de doença deve ser evitada, dado seu perfil cumulativo de toxicidade, favorecendo a introdução mais precoce de terapias poupadoras de corticoide.",
    ],
  },
  {
    slug: "categorias-kdigo-encaminhamento-nefrologia",
    titulo: "Critérios de encaminhamento ao nefrologista reforçados pelas categorias KDIGO",
    resumo:
      "A classificação combinada de TFG e albuminúria (categorias KDIGO) segue sendo a principal ferramenta para decidir o momento do encaminhamento ao especialista na doença renal crônica.",
    especialidade: "Nefrologia",
    importancia: "Média",
    fonte: "KDIGO (Kidney Disease: Improving Global Outcomes)",
    data: "2025-08-19",
    destaque:
      "A decisão de encaminhar ao nefrologista não deve se basear apenas na taxa de filtração glomerular isolada — a albuminúria é um marcador de risco independente e deve sempre ser avaliada em conjunto.",
    corpo: [
      "A classificação da doença renal crônica pelas categorias KDIGO combina a taxa de filtração glomerular estimada (G1 a G5) com o grau de albuminúria (A1 a A3), reconhecendo que ambos os eixos contribuem de forma independente para o risco de progressão e de eventos cardiovasculares.",
      "Pacientes com albuminúria significativa, mesmo com TFG ainda preservada, apresentam risco aumentado e podem se beneficiar de avaliação e acompanhamento conjunto com a nefrologia, o que muitas vezes é subestimado na atenção primária quando o foco recai apenas sobre a creatinina sérica isolada.",
      "Reforça-se também o papel dos inibidores de SGLT2 como terapia com benefício consistente na redução de progressão da doença renal crônica, inclusive em pacientes não diabéticos com proteinúria significativa.",
    ],
  },
  {
    slug: "estatinas-alto-risco-independente-ldl",
    titulo: "Uso de estatina reforçado em pacientes de alto risco independentemente do LDL basal",
    resumo:
      "Em pacientes de alto risco cardiovascular, a indicação de estatina não deve depender exclusivamente de um valor de corte de LDL-colesterol.",
    especialidade: "Cardiologia",
    importancia: "Alta",
    fonte: "Diretriz Brasileira de Dislipidemia",
    data: "2026-01-05",
    destaque:
      "Em prevenção secundária e em pacientes de alto risco cardiovascular, a estatina está indicada independentemente do valor basal do LDL-colesterol — o objetivo é reduzir o risco relativo, não apenas \"normalizar\" um número.",
    corpo: [
      "Um equívoco comum na prática clínica é considerar que a estatina só está indicada quando o LDL-colesterol está \"alto\". As diretrizes atuais reforçam que, em pacientes de alto risco cardiovascular — especialmente em prevenção secundária, após infarto ou AVC isquêmico —, a estatina de alta potência está indicada independentemente do valor basal do LDL.",
      "O racional é que o benefício da estatina nesses pacientes decorre da redução relativa do risco cardiovascular associada à queda do LDL a partir do valor individual de cada paciente, e não da simples correção de um número absoluto considerado \"normal\".",
      "Isso é frequentemente cobrado em provas: um paciente com LDL de 90 mg/dL após um infarto do miocárdio ainda tem indicação de estatina de alta potência, e não deve ter o tratamento adiado por já estar com LDL considerado \"dentro da normalidade\" para a população geral.",
    ],
  },
  {
    slug: "terapias-anti-amiloide-alzheimer",
    titulo: "Terapias anti-amiloide no Alzheimer: benefício modesto e necessidade de monitorização",
    resumo:
      "Anticorpos monoclonais anti-amiloide mostram redução estatisticamente significativa, porém clinicamente modesta, na progressão do declínio cognitivo, com necessidade de monitorização de efeitos adversos.",
    especialidade: "Neurologia",
    importancia: "Baixa",
    fonte: "Revisão em Neurologia Clínica",
    data: "2025-07-30",
    destaque:
      "As terapias anti-amiloide não substituem o cuidado multidisciplinar na doença de Alzheimer — seu benefício é modesto, restrito a fases iniciais selecionadas, e exige monitorização por imagem pelo risco de anormalidades relacionadas ao amiloide.",
    corpo: [
      "Os anticorpos monoclonais direcionados contra placas de beta-amiloide representam uma mudança conceitual importante no tratamento da doença de Alzheimer, ao atuarem sobre um mecanismo fisiopatológico central da doença, e não apenas sobre os sintomas.",
      "Entretanto, é importante que o estudante compreenda as limitações atuais dessas terapias: o benefício clínico observado até o momento é modesto em termos absolutos, restrito a pacientes em fases muito iniciais da doença (comprometimento cognitivo leve ou demência leve), e associado a um efeito adverso relevante — as chamadas anormalidades de imagem relacionadas ao amiloide (ARIA), que exigem monitorização periódica por ressonância magnética.",
      "Na prática, essas terapias não substituem os pilares tradicionais do cuidado: suporte multidisciplinar, orientação de cuidadores, manejo de comorbidades e, quando indicado, uso de inibidores da colinesterase e memantina.",
    ],
  },
  {
    slug: "menor-tempo-possivel-benzodiazepinicos",
    titulo: "Reforço das recomendações de uso pelo menor tempo possível para benzodiazepínicos",
    resumo:
      "Diretrizes de saúde mental continuam enfatizando o uso de benzodiazepínicos pelo menor tempo e na menor dose eficaz, dado o risco de tolerância, dependência e prejuízo cognitivo em idosos.",
    especialidade: "Psiquiatria",
    importancia: "Média",
    fonte: "Associação Brasileira de Psiquiatria",
    data: "2025-06-12",
    destaque:
      "Benzodiazepínicos devem ser prescritos, sempre que possível, por tempo limitado (idealmente poucas semanas) — o uso crônico deve ser exceção justificada, e não a regra em transtornos de ansiedade.",
    corpo: [
      "Apesar de amplamente prescritos, os benzodiazepínicos continuam sendo recomendados preferencialmente para uso de curta duração, no manejo de crises agudas de ansiedade, insônia pontual ou como ponte terapêutica até que outras intervenções (psicoterapia, antidepressivos) façam efeito.",
      "O uso crônico está associado a tolerância, risco de dependência física e psicológica, além de prejuízo cognitivo e maior risco de quedas e fraturas em idosos — nessa população, o uso deve ser particularmente cauteloso e, quando necessário, com doses reduzidas.",
      "Para transtornos de ansiedade generalizada e outros transtornos crônicos, antidepressivos (como os inibidores seletivos da recaptação de serotonina) e psicoterapia continuam sendo a base do tratamento de manutenção, reservando-se os benzodiazepínicos para o controle sintomático inicial.",
    ],
  },
  {
    slug: "calendario-vacinal-adultos",
    titulo: "Atualização do calendário de vacinação para adultos reforça coberturas historicamente negligenciadas",
    resumo:
      "Campanhas recentes reforçam a importância da atualização vacinal em adultos, grupo frequentemente esquecido fora dos calendários pediátrico e do idoso.",
    especialidade: "Infectologia",
    importancia: "Baixa",
    fonte: "Programa Nacional de Imunizações",
    data: "2025-05-08",
    destaque:
      "A anamnese de rotina em adultos deve incluir a revisão da carteira de vacinação — é uma das intervenções preventivas mais custo-efetivas e mais frequentemente esquecidas na consulta clínica.",
    corpo: [
      "Diferentemente dos calendários pediátrico e do idoso, que costumam ser mais lembrados na prática clínica, a vacinação do adulto jovem e de meia-idade frequentemente é negligenciada, apesar de fazer parte do calendário nacional de imunizações.",
      "Reforça-se a importância de verificar e atualizar, conforme o caso, as vacinas contra hepatite B, tríplice viral, dupla adulto (difteria e tétano), febre amarela (em áreas recomendadas) e influenza anual, além de esquemas específicos para gestantes e profissionais de saúde.",
      "Essa é uma oportunidade frequentemente perdida em consultas de rotina — incorporar a revisão vacinal à anamnese padrão é uma medida simples com alto impacto em saúde preventiva.",
    ],
  },
];
