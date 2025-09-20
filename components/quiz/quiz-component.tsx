"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, XCircle, RotateCcw, Trophy, Brain } from "lucide-react"

interface Question {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: "facil" | "medio" | "dificil"
}

interface QuizComponentProps {
  moduleId: string
  sectionId: string
}

const questionsBank: Record<string, Question[]> = {
  "questoes-modulo1": [
    {
      id: "q1-1",
      question: "Qual é a definição correta de Anatomia?",
      options: [
        "Ciência que estuda apenas os ossos do corpo humano",
        "Ciência que estuda a constituição e desenvolvimento dos seres organizados",
        "Ciência que estuda apenas o funcionamento dos órgãos",
        "Ciência que estuda apenas as doenças do corpo humano",
      ],
      correctAnswer: 1,
      explanation:
        "A Anatomia é uma ciência fundamental que se dedica ao estudo da constituição e do desenvolvimento dos seres organizados, tanto em nível macroscópico quanto microscópico.",
      difficulty: "facil",
    },
    {
      id: "q1-2",
      question: "Quais são os ramos especializados da Anatomia que surgiram com a invenção do microscópio?",
      options: [
        "Citologia, Histologia e Embriologia",
        "Cardiologia, Neurologia e Pneumologia",
        "Osteologia, Miologia e Artrologia",
        "Fisiologia, Patologia e Farmacologia",
      ],
      correctAnswer: 0,
      explanation:
        "Com a invenção do microscópio, surgiram três ramos especializados: Citologia (estudo das células), Histologia (estudo dos tecidos) e Embriologia (estudo do desenvolvimento embrionário).",
      difficulty: "medio",
    },
    {
      id: "q1-3",
      question: "Quem é considerado o 'pai da anatomia científica moderna'?",
      options: ["Galeno", "Hipócrates", "André Vesálio", "Leonardo da Vinci"],
      correctAnswer: 2,
      explanation:
        "André Vesálio (1514-1564) é considerado o 'pai da anatomia científica moderna' por ter demonstrado que as descrições de Galeno não correspondiam à anatomia humana, corrigindo noções equivocadas através da dissecação de corpos humanos.",
      difficulty: "medio",
    },
    {
      id: "q1-4",
      question: "Qual é a hierarquia correta da organização do corpo humano?",
      options: [
        "Células → Órgãos → Tecidos → Sistemas → Aparelhos",
        "Células → Tecidos → Órgãos → Sistemas → Aparelhos",
        "Tecidos → Células → Órgãos → Aparelhos → Sistemas",
        "Órgãos → Tecidos → Células → Sistemas → Aparelhos",
      ],
      correctAnswer: 1,
      explanation:
        "A organização hierárquica correta é: Células (unidades básicas) → Tecidos (células semelhantes) → Órgãos (reunião de tecidos) → Sistemas (órgãos de mesma origem) → Aparelhos (dois ou três sistemas relacionados).",
      difficulty: "facil",
    },
    {
      id: "q1-5",
      question: "Na posição anatômica, como devem estar posicionadas as palmas das mãos?",
      options: ["Voltadas para trás", "Voltadas para baixo", "Voltadas para a frente", "Voltadas para os lados"],
      correctAnswer: 2,
      explanation:
        "Na posição anatômica padrão, as palmas das mãos devem estar voltadas para a frente, com os membros superiores estendidos e aplicados ao tronco.",
      difficulty: "facil",
    },
    {
      id: "q1-6",
      question: "O plano que divide o corpo em duas metades direita e esquerda é chamado de:",
      options: ["Plano frontal", "Plano transversal", "Plano mediano", "Plano sagital"],
      correctAnswer: 2,
      explanation:
        "O plano mediano é um plano sagital especial que divide o corpo em duas metades direita e esquerda semelhantes (antímeros), sendo um plano de simetria bilateral.",
      difficulty: "medio",
    },
    {
      id: "q1-7",
      question:
        "Qual princípio de construção corpórea se refere à superposição de segmentos semelhantes no sentido longitudinal?",
      options: ["Antimeria", "Metameria", "Paquimeria", "Estratificação"],
      correctAnswer: 1,
      explanation:
        "A Metameria refere-se à superposição, no sentido longitudinal, de segmentos semelhantes (metâmeros), como observado na coluna vertebral e na caixa torácica.",
      difficulty: "dificil",
    },
    {
      id: "q1-8",
      question: "Uma variação anatômica que causa prejuízo funcional é denominada:",
      options: ["Variação normal", "Anomalia", "Monstruosidade", "Modificação post-mortem"],
      correctAnswer: 1,
      explanation:
        "Anomalia é uma variação anatômica que causa prejuízo funcional ao indivíduo, diferindo da variação anatômica normal que não compromete a função.",
      difficulty: "medio",
    },
  ],
  "questoes-modulo2": [
    {
      id: "q2-1",
      question: "Quantos ossos possui o esqueleto humano adulto?",
      options: ["198 ossos", "206 ossos", "214 ossos", "270 ossos"],
      correctAnswer: 1,
      explanation:
        "O esqueleto humano adulto possui 206 ossos. No recém-nascido são cerca de 270, mas alguns se fundem durante o desenvolvimento.",
      difficulty: "facil",
    },
    {
      id: "q2-2",
      question: "Quais são as principais funções do sistema esquelético?",
      options: [
        "Apenas sustentação e proteção",
        "Proteção, sustentação, armazenamento de minerais, sistema de alavancas e hematopoiese",
        "Apenas produção de células sanguíneas",
        "Apenas movimentação do corpo",
      ],
      correctAnswer: 1,
      explanation:
        "O sistema esquelético tem cinco funções principais: proteção de órgãos vitais, sustentação e conformação do corpo, armazenamento de minerais, sistema de alavancas para movimento e hematopoiese (produção de células sanguíneas).",
      difficulty: "medio",
    },
    {
      id: "q2-3",
      question: "Os ossos longos são caracterizados por:",
      options: [
        "Ter comprimento e largura equivalentes",
        "Apresentar cavidades cheias de ar",
        "Predominar o comprimento sobre largura e espessura",
        "Não ter forma geométrica definida",
      ],
      correctAnswer: 2,
      explanation:
        "Os ossos longos são caracterizados por predominar o comprimento sobre a largura e espessura, possuindo uma diáfise (parte central) e epífises (extremidades).",
      difficulty: "facil",
    },
    {
      id: "q2-4",
      question: "O que é o periósteo?",
      options: [
        "A medula óssea interna",
        "Uma camada de tecido conjuntivo que reveste os ossos",
        "O canal central do osso",
        "A cartilagem articular",
      ],
      correctAnswer: 1,
      explanation:
        "O periósteo é uma camada de tecido conjuntivo especializado que reveste os ossos (exceto nas superfícies articulares), sendo essencial para a nutrição e crescimento ósseo.",
      difficulty: "medio",
    },
    {
      id: "q2-5",
      question: "A substância óssea esponjosa nos ossos do crânio é chamada de:",
      options: ["Díploe", "Medula óssea", "Periósteo", "Endósteo"],
      correctAnswer: 0,
      explanation:
        "A díploe é a camada de substância óssea esponjosa encontrada entre as duas camadas de osso compacto nos ossos planos do crânio.",
      difficulty: "dificil",
    },
    {
      id: "q2-6",
      question: "Qual tipo de osso é a patela?",
      options: ["Osso longo", "Osso plano", "Osso sesamóide", "Osso irregular"],
      correctAnswer: 2,
      explanation:
        "A patela é o maior exemplo de osso sesamóide, que são ossos pequenos e arredondados que se desenvolvem no interior de tendões musculares.",
      difficulty: "medio",
    },
    {
      id: "q2-7",
      question: "O que acontece com um osso desprovido de periósteo?",
      options: [
        "Cresce mais rapidamente",
        "Torna-se mais resistente",
        "Deixa de ser nutrido e morre",
        "Não sofre alterações",
      ],
      correctAnswer: 2,
      explanation:
        "Um osso desprovido de periósteo deixa de ser nutrido adequadamente e morre (necrose), pois o periósteo é ricamente vascularizado e essencial para a nutrição óssea.",
      difficulty: "medio",
    },
    {
      id: "q2-8",
      question: "A osteoporose é caracterizada por:",
      options: [
        "Aumento da massa óssea",
        "Redução da massa óssea tornando os ossos mais frágeis",
        "Inflamação dos ossos",
        "Crescimento excessivo dos ossos",
      ],
      correctAnswer: 1,
      explanation:
        "A osteoporose é uma doença caracterizada pela redução da massa óssea, tornando os ossos mais frágeis e suscetíveis a fraturas, especialmente em mulheres após os 40 anos.",
      difficulty: "facil",
    },
  ],
  "questoes-modulo3": [
    {
      id: "q3-1",
      question: "O que são articulações?",
      options: [
        "Apenas os ossos do esqueleto",
        "As uniões entre os ossos que constituem o esqueleto",
        "Os músculos que movem os ossos",
        "Os ligamentos que conectam músculos",
      ],
      correctAnswer: 1,
      explanation:
        "As articulações são as uniões entre os ossos que constituem o esqueleto, com o objetivo principal de permitir a mobilidade.",
      difficulty: "facil",
    },
    {
      id: "q3-2",
      question: "Nas articulações fibrosas, o elemento interposto é:",
      options: ["Cartilagem hialina", "Líquido sinovial", "Tecido conjuntivo fibroso", "Fibrocartilagem"],
      correctAnswer: 2,
      explanation:
        "Nas articulações fibrosas, o elemento que se interpõe entre os ossos é o tecido conjuntivo fibroso, caracterizando-se por mobilidade extremamente reduzida.",
      difficulty: "medio",
    },
    {
      id: "q3-3",
      question: "Qual tipo de articulação permite a maior amplitude de movimento?",
      options: [
        "Articulações fibrosas",
        "Articulações cartilagíneas",
        "Articulações sinoviais",
        "Todas permitem a mesma amplitude",
      ],
      correctAnswer: 2,
      explanation:
        "As articulações sinoviais são as que permitem a maior amplitude de movimento, caracterizadas pela presença de cavidade articular com líquido sinovial.",
      difficulty: "facil",
    },
    {
      id: "q3-4",
      question: "O movimento que diminui o ângulo entre dois segmentos corporais é chamado de:",
      options: ["Extensão", "Flexão", "Abdução", "Rotação"],
      correctAnswer: 1,
      explanation:
        "A flexão é o movimento que diminui o ângulo entre os segmentos que se articulam, como dobrar o cotovelo ou o joelho.",
      difficulty: "facil",
    },
    {
      id: "q3-5",
      question: "As articulações sinoviais triaxiais permitem movimentos em:",
      options: ["Apenas um eixo", "Dois eixos", "Três eixos", "Nenhum eixo"],
      correctAnswer: 2,
      explanation:
        "As articulações sinoviais triaxiais permitem movimentos em torno de três eixos, incluindo flexão, extensão, abdução, adução e rotação, como as articulações do ombro e quadril.",
      difficulty: "medio",
    },
    {
      id: "q3-6",
      question: "A articulação do tipo 'gínglimo' permite principalmente:",
      options: ["Rotação", "Flexão e extensão", "Abdução e adução", "Circundução"],
      correctAnswer: 1,
      explanation:
        "A articulação do tipo gínglimo (em dobradiça) permite principalmente movimentos de flexão e extensão, como nas articulações do cotovelo e joelho.",
      difficulty: "medio",
    },
    {
      id: "q3-7",
      question: "O líquido sinovial tem a função de:",
      options: [
        "Nutrir apenas a cartilagem",
        "Lubrificar a articulação permitindo deslizamento com mínimo atrito",
        "Fortalecer os ligamentos",
        "Produzir células sanguíneas",
      ],
      correctAnswer: 1,
      explanation:
        "O líquido sinovial é o lubrificante natural da articulação, permitindo o deslizamento das superfícies articulares com mínimo atrito e desgaste.",
      difficulty: "medio",
    },
    {
      id: "q3-8",
      question: "A fusão óssea completa de uma sutura é chamada de:",
      options: ["Sindesmose", "Sinostose", "Sínfise", "Sinartrose"],
      correctAnswer: 1,
      explanation:
        "A sinostose é a fusão óssea completa de uma sutura, processo que ocorre naturalmente com o envelhecimento em algumas articulações fibrosas do crânio.",
      difficulty: "dificil",
    },
  ],
  "questoes-modulo4": [
    {
      id: "q4-1",
      question: "Qual é a diferença principal entre músculos voluntários e involuntários?",
      options: [
        "Os voluntários são mais fortes",
        "Os voluntários estão sujeitos ao controle da vontade",
        "Os involuntários são maiores",
        "Não há diferença",
      ],
      correctAnswer: 1,
      explanation:
        "Os músculos voluntários (estriados esqueléticos) estão sujeitos ao controle da vontade, enquanto os involuntários (lisos e cardíaco) funcionam independentemente da vontade consciente.",
      difficulty: "facil",
    },
    {
      id: "q4-2",
      question: "O ventre muscular é:",
      options: [
        "A extremidade do músculo que se prende ao osso",
        "A porção média, carnosa e contrátil do músculo",
        "O tecido conjuntivo que envolve o músculo",
        "A inervação do músculo",
      ],
      correctAnswer: 1,
      explanation:
        "O ventre muscular é a porção média, carnosa e vermelha do músculo, onde predominam as fibras musculares e que é responsável pela contração.",
      difficulty: "facil",
    },
    {
      id: "q4-3",
      question: "Na maioria das alavancas biológicas do corpo humano, qual é o gênero predominante?",
      options: ["Gênero I", "Gênero II", "Gênero III", "Todos são igualmente comuns"],
      correctAnswer: 2,
      explanation:
        "A maioria das alavancas biológicas no corpo humano é do gênero III, onde a potência (força muscular) está entre o ponto de apoio e a resistência.",
      difficulty: "dificil",
    },
    {
      id: "q4-4",
      question: "Os músculos que realizam a ação principal de um movimento são chamados de:",
      options: ["Antagonistas", "Sinergistas", "Agonistas", "Fixadores"],
      correctAnswer: 2,
      explanation:
        "Os músculos agonistas (ou motores primários) são aqueles que realizam a ação principal do movimento desejado.",
      difficulty: "medio",
    },
    {
      id: "q4-5",
      question: "A fáscia muscular tem como função principal:",
      options: [
        "Produzir a contração muscular",
        "Atuar como bainha elástica de contenção",
        "Gerar impulsos nervosos",
        "Produzir energia para o músculo",
      ],
      correctAnswer: 1,
      explanation:
        "A fáscia muscular atua como uma bainha elástica de contenção, essencial para que os músculos possam exercer eficientemente seu trabalho de tração ao se contrair.",
      difficulty: "medio",
    },
    {
      id: "q4-6",
      question: "O que acontece com um músculo se seu nervo motor for seccionado?",
      options: [
        "Continua funcionando normalmente",
        "Fica mais forte",
        "Deixa de funcionar e entra em atrofia",
        "Cresce mais rapidamente",
      ],
      correctAnswer: 2,
      explanation:
        "Se o nervo motor de um músculo for seccionado, o músculo deixa de funcionar e entra em atrofia, pois nenhum músculo pode se contrair sem estímulo nervoso.",
      difficulty: "medio",
    },
    {
      id: "q4-7",
      question: "As bolsas sinoviais (bursas) têm a função de:",
      options: [
        "Produzir hormônios",
        "Facilitar o deslizamento e prevenir atrito",
        "Armazenar energia",
        "Produzir células sanguíneas",
      ],
      correctAnswer: 1,
      explanation:
        "As bolsas sinoviais são pequenas bolsas que contêm líquido sinovial e atuam como amortecedores, facilitando o deslizamento entre tendões, músculos, ossos e pele, prevenindo atrito.",
      difficulty: "medio",
    },
    {
      id: "q4-8",
      question: "A eletromiografia é um método utilizado para:",
      options: [
        "Medir a força muscular",
        "Registrar a atividade elétrica muscular",
        "Observar a anatomia muscular",
        "Medir o tamanho dos músculos",
      ],
      correctAnswer: 1,
      explanation:
        "A eletromiografia é um método utilizado para registrar os tipos de atividade elétrica muscular, importante para estudar a função muscular e diagnosticar distúrbios neuromusculares.",
      difficulty: "dificil",
    },
  ],
  "questoes-modulo5": [
    {
      id: "q5-1",
      question: "Qual é a função principal do Sistema Nervoso?",
      options: [
        "Apenas produzir hormônios",
        "Receber estímulos, interpretá-los e comandar reações",
        "Apenas transportar sangue",
        "Apenas sustentar o corpo",
      ],
      correctAnswer: 1,
      explanation:
        "O Sistema Nervoso é responsável por receber estímulos, interpretá-los e comandar reações a esses estímulos, controlando e coordenando as funções de todos os sistemas do organismo.",
      difficulty: "facil",
    },
    {
      id: "q5-2",
      question: "Quais são os dois tipos principais de células do tecido nervoso?",
      options: [
        "Neurônios e células gliais",
        "Neurônios e células musculares",
        "Células gliais e células ósseas",
        "Neurônios e células sanguíneas",
      ],
      correctAnswer: 0,
      explanation:
        "O tecido nervoso é composto por neurônios (unidades morfofuncionais que transmitem impulsos) e células gliais (que desempenham funções de sustentação, isolamento e defesa).",
      difficulty: "facil",
    },
    {
      id: "q5-3",
      question: "O Sistema Nervoso Central (SNC) é constituído por:",
      options: [
        "Apenas o encéfalo",
        "Apenas a medula espinal",
        "Encéfalo e medula espinal",
        "Nervos cranianos e espinais",
      ],
      correctAnswer: 2,
      explanation:
        "O Sistema Nervoso Central (SNC) é constituído pelo encéfalo (localizado na cavidade craniana) e pela medula espinal (localizada no canal vertebral).",
      difficulty: "facil",
    },
    {
      id: "q5-4",
      question: "Quantos pares de nervos cranianos existem?",
      options: ["10 pares", "12 pares", "14 pares", "31 pares"],
      correctAnswer: 1,
      explanation:
        "Existem 12 pares de nervos cranianos que fazem conexão com o encéfalo, sendo a maioria (dez) originada no tronco encefálico.",
      difficulty: "medio",
    },
    {
      id: "q5-5",
      question: "O cerebelo é conhecido como 'árvore da vida' e sua principal função é:",
      options: ["Controlar a respiração", "Coordenar os movimentos", "Produzir hormônios", "Controlar a digestão"],
      correctAnswer: 1,
      explanation:
        "O cerebelo é conhecido como 'árvore da vida' devido à sua aparência e tem como principal função coordenar os movimentos efetuados pelo corpo.",
      difficulty: "medio",
    },
    {
      id: "q5-6",
      question: "As meninges são:",
      options: [
        "Músculos do crânio",
        "Lâminas de tecido conjuntivo que envolvem o SNC",
        "Vasos sanguíneos do cérebro",
        "Nervos da face",
      ],
      correctAnswer: 1,
      explanation:
        "As meninges são lâminas de tecido conjuntivo (dura-máter, aracnóide-máter e pia-máter) que envolvem, sustentam e protegem o encéfalo e a medula espinal.",
      difficulty: "medio",
    },
    {
      id: "q5-7",
      question: "O Sistema Nervoso Autônomo é dividido em:",
      options: ["Central e periférico", "Simpático e parassimpático", "Motor e sensitivo", "Craniano e espinal"],
      correctAnswer: 1,
      explanation:
        "O Sistema Nervoso Autônomo é dividido em simpático e parassimpático, que têm ações geralmente antagônicas mas complementares no controle das funções viscerais.",
      difficulty: "medio",
    },
    {
      id: "q5-8",
      question: "A área de Broca está relacionada com:",
      options: ["Audição", "Visão", "Produção da fala", "Equilíbrio"],
      correctAnswer: 2,
      explanation:
        "A área de Broca, localizada no giro frontal inferior, é a área motora da linguagem responsável pela produção da fala. Lesões nesta área causam afasia de Broca.",
      difficulty: "dificil",
    },
  ],
  "questoes-modulo6": [
    {
      id: "q6-1",
      question: "Qual é a função principal do sistema circulatório?",
      options: [
        "Apenas produzir células sanguíneas",
        "Transportar sangue e linfa por todo o corpo",
        "Apenas filtrar o sangue",
        "Apenas regular a temperatura",
      ],
      correctAnswer: 1,
      explanation:
        "O sistema circulatório é responsável pelo transporte de sangue e linfa por todo o corpo, carregando nutrientes, oxigênio e removendo produtos de resíduo metabólico.",
      difficulty: "facil",
    },
    {
      id: "q6-2",
      question: "O coração possui quantas cavidades?",
      options: ["2 cavidades", "3 cavidades", "4 cavidades", "6 cavidades"],
      correctAnswer: 2,
      explanation:
        "O coração possui 4 cavidades: dois átrios (direito e esquerdo) e dois ventrículos (direito e esquerdo), divididos por um septo oblíquo.",
      difficulty: "facil",
    },
    {
      id: "q6-3",
      question: "O marca-passo natural do coração é:",
      options: ["Nó atrioventricular", "Nó sinoatrial", "Fascículo atrioventricular", "Fibras de Purkinje"],
      correctAnswer: 1,
      explanation:
        "O nó sinoatrial (SA), localizado no átrio direito, é o marca-passo natural do coração, responsável por gerar os impulsos rítmicos que iniciam cada batimento cardíaco.",
      difficulty: "medio",
    },
    {
      id: "q6-4",
      question: "As artérias são vasos que:",
      options: [
        "Levam sangue do coração para os tecidos",
        "Trazem sangue dos tecidos para o coração",
        "Apenas armazenam sangue",
        "Não transportam sangue",
      ],
      correctAnswer: 0,
      explanation:
        "As artérias são vasos de condução que levam sangue do coração para os tecidos, transportando sangue oxigenado (exceto a artéria pulmonar).",
      difficulty: "facil",
    },
    {
      id: "q6-5",
      question: "Os capilares sanguíneos são importantes porque:",
      options: [
        "São os maiores vasos",
        "São o local onde ocorrem as trocas entre sangue e tecidos",
        "Apenas transportam sangue",
        "Armazenam grandes volumes de sangue",
      ],
      correctAnswer: 1,
      explanation:
        "Os capilares sanguíneos são vasos microscópicos onde ocorrem as trocas de substâncias entre o sangue e os tecidos, sendo essenciais para a nutrição celular.",
      difficulty: "medio",
    },
    {
      id: "q6-6",
      question: "O sistema linfático tem como função:",
      options: [
        "Apenas produzir linfa",
        "Atuar como barreira contra toxinas e absorver gorduras",
        "Apenas transportar oxigênio",
        "Apenas regular a temperatura",
      ],
      correctAnswer: 1,
      explanation:
        "O sistema linfático atua como uma barreira contra a penetração de toxinas, bactérias e corpos estranhos na circulação geral, além de participar na absorção de gorduras.",
      difficulty: "medio",
    },
    {
      id: "q6-7",
      question: "As anastomoses arteriais são importantes porque:",
      options: [
        "Aumentam a pressão arterial",
        "Favorecem a irrigação e servem como via alternativa",
        "Diminuem o fluxo sanguíneo",
        "Não têm função específica",
      ],
      correctAnswer: 1,
      explanation:
        "As anastomoses arteriais são conexões entre artérias que favorecem a irrigação dos órgãos e podem servir como via alternativa (circulação colateral) em caso de obstrução.",
      difficulty: "dificil",
    },
    {
      id: "q6-8",
      question: "O pericárdio é:",
      options: [
        "O músculo do coração",
        "Um saco fibro-seroso que envolve o coração",
        "Uma válvula cardíaca",
        "Uma artéria do coração",
      ],
      correctAnswer: 1,
      explanation:
        "O pericárdio é um saco fibro-seroso que envolve o coração, separando-o de outros órgãos do mediastino e limitando sua expansão durante a diástole.",
      difficulty: "medio",
    },
  ],
  "questoes-modulo7": [
    {
      id: "q7-1",
      question: "O membro inferior é vital para:",
      options: [
        "Apenas a respiração",
        "A sustentação do peso corporal e locomoção",
        "Apenas a digestão",
        "Apenas a circulação",
      ],
      correctAnswer: 1,
      explanation:
        "O membro inferior é um segmento corpóreo vital para a sustentação do peso do corpo e para a locomoção (deambulação).",
      difficulty: "facil",
    },
    {
      id: "q7-2",
      question: "O osso mais longo e robusto do corpo humano é:",
      options: ["Tíbia", "Úmero", "Fêmur", "Fíbula"],
      correctAnswer: 2,
      explanation:
        "O fêmur é o osso mais longo e robusto do corpo humano, localizado na coxa e essencial para a sustentação do peso corporal.",
      difficulty: "facil",
    },
    {
      id: "q7-3",
      question: "Quantos ossos compõem o tarso do pé?",
      options: ["5 ossos", "7 ossos", "8 ossos", "10 ossos"],
      correctAnswer: 1,
      explanation:
        "O tarso é composto por 7 ossos curtos: tálus, calcâneo, navicular, cubóide e três cuneiformes (medial, intermédio e lateral).",
      difficulty: "medio",
    },
    {
      id: "q7-4",
      question: "A veia safena magna:",
      options: [
        "Ascende pela face lateral da perna",
        "Ascende pela face medial da perna e coxa",
        "Ascende pela face posterior da perna",
        "Não existe no membro inferior",
      ],
      correctAnswer: 1,
      explanation:
        "A veia safena magna ascende pela face medial da perna e coxa, sendo uma das principais veias superficiais do membro inferior, drenando para a veia femoral.",
      difficulty: "medio",
    },
    {
      id: "q7-5",
      question: "O músculo quadríceps femoral é composto por:",
      options: ["2 músculos", "3 músculos", "4 músculos", "5 músculos"],
      correctAnswer: 2,
      explanation:
        "O quadríceps femoral é composto por 4 músculos: reto da coxa, vasto lateral, vasto intermédio e vasto medial, sendo o mais volumoso e potente extensor da perna.",
      difficulty: "medio",
    },
    {
      id: "q7-6",
      question: "A articulação do joelho é principalmente:",
      options: [
        "Uma articulação plana",
        "Uma articulação esférica",
        "Um gínglimo (dobradiça)",
        "Uma articulação trocoide",
      ],
      correctAnswer: 2,
      explanation:
        "A articulação do joelho é principalmente um gínglimo (dobradiça), permitindo flexão e extensão, embora também permita certo grau de rotação com o joelho fletido.",
      difficulty: "dificil",
    },
    {
      id: "q7-7",
      question: "Os arcos do pé são importantes para:",
      options: [
        "Apenas a estética",
        "Sustentação do peso e distribuição da carga",
        "Apenas a flexibilidade",
        "Não têm função específica",
      ],
      correctAnswer: 1,
      explanation:
        "Os arcos do pé (longitudinais e transversos) são cruciais para a sustentação do peso corporal, agindo como molas e distribuindo a carga para o calcanhar e as cabeças dos metatarsais.",
      difficulty: "dificil",
    },
    {
      id: "q7-8",
      question: "O maior osso do tarso é:",
      options: ["Tálus", "Calcâneo", "Navicular", "Cubóide"],
      correctAnswer: 1,
      explanation:
        "O calcâneo é o maior osso do tarso, formando o calcanhar e sendo fundamental para a sustentação do peso corporal e para a marcha.",
      difficulty: "medio",
    },
  ],
  "questoes-modulo8": [
    {
      id: "q8-1",
      question: "O membro superior é especializado para:",
      options: ["Apenas sustentação", "Apreensão e gesticulação", "Apenas locomoção", "Apenas respiração"],
      correctAnswer: 1,
      explanation:
        "O membro superior é adaptado para a apreensão e gesticulação, diferindo do membro inferior que é primariamente para sustentação e locomoção.",
      difficulty: "facil",
    },
    {
      id: "q8-2",
      question: "Quantos ossos compõem o carpo da mão?",
      options: ["6 ossos", "7 ossos", "8 ossos", "10 ossos"],
      correctAnswer: 2,
      explanation:
        "O carpo é composto por 8 ossos curtos dispostos em duas fileiras (proximal e distal), formando o punho.",
      difficulty: "medio",
    },
    {
      id: "q8-3",
      question: "A clavícula articula-se:",
      options: [
        "Apenas com o esterno",
        "Apenas com a escápula",
        "Com o esterno medialmente e com o acrômio da escápula lateralmente",
        "Não se articula com nenhum osso",
      ],
      correctAnswer: 2,
      explanation:
        "A clavícula articula-se medialmente com o esterno (articulação esternoclavicular) e lateralmente com o acrômio da escápula (articulação acromioclavicular).",
      difficulty: "medio",
    },
    {
      id: "q8-4",
      question: "O plexo braquial é responsável por:",
      options: [
        "Inervar apenas o ombro",
        "Inervar o ombro e membro superior",
        "Inervar apenas a mão",
        "Não tem função específica",
      ],
      correctAnswer: 1,
      explanation:
        "O plexo braquial é uma rede nervosa formada pelos ramos anteriores dos nervos espinais que inerva o ombro e todo o membro superior.",
      difficulty: "medio",
    },
    {
      id: "q8-5",
      question: "O manguito rotador é composto por:",
      options: ["2 músculos", "3 músculos", "4 músculos", "5 músculos"],
      correctAnswer: 2,
      explanation:
        "O manguito rotador é composto por 4 músculos: supraespinal, infraespinal, redondo menor e subescapular, que estabilizam a articulação do ombro.",
      difficulty: "dificil",
    },
    {
      id: "q8-6",
      question: "A articulação do cotovelo é principalmente:",
      options: [
        "Uma articulação esférica",
        "Um gínglimo (dobradiça)",
        "Uma articulação plana",
        "Uma articulação selar",
      ],
      correctAnswer: 1,
      explanation:
        "A articulação do cotovelo é principalmente um gínglimo (dobradiça), permitindo flexão e extensão do antebraço, sendo uma articulação sinovial composta.",
      difficulty: "medio",
    },
    {
      id: "q8-7",
      question: "A axila é importante porque:",
      options: [
        "Apenas para estética",
        "Serve como via de passagem para vasos e nervos",
        "Apenas para movimento",
        "Não tem função específica",
      ],
      correctAnswer: 1,
      explanation:
        "A axila é uma região piramidal crucial que serve como via de passagem para os vasos axilares, plexo braquial e seus ramos, além de conter numerosos linfonodos.",
      difficulty: "dificil",
    },
    {
      id: "q8-8",
      question: "A aponeurose palmar é:",
      options: ["Um músculo da mão", "Uma fáscia espessa na palma da mão", "Um osso da mão", "Um nervo da mão"],
      correctAnswer: 1,
      explanation:
        "A aponeurose palmar é uma fáscia espessa na palma da mão que, junto com septos fibrosos, forma compartimentos e espaços fasciais importantes para a função da mão.",
      difficulty: "dificil",
    },
  ],
}

export function QuizComponent({ moduleId, sectionId }: QuizComponentProps) {
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>([])
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([])

  useEffect(() => {
    const moduleQuestions = questionsBank[sectionId] || []
    setQuestions(moduleQuestions)
    setAnsweredQuestions(new Array(moduleQuestions.length).fill(false))
    setUserAnswers(new Array(moduleQuestions.length).fill(null))
  }, [sectionId])

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return
    setSelectedAnswer(answerIndex)
  }

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return

    const newAnsweredQuestions = [...answeredQuestions]
    const newUserAnswers = [...userAnswers]

    newAnsweredQuestions[currentQuestion] = true
    newUserAnswers[currentQuestion] = selectedAnswer

    setAnsweredQuestions(newAnsweredQuestions)
    setUserAnswers(newUserAnswers)

    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }

    setShowExplanation(true)
  }

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      import("@/lib/progress-storage").then(({ saveQuizScore, markSectionComplete }) => {
        saveQuizScore(sectionId, score, questions.length)
        markSectionComplete(sectionId, moduleId)
      })
      setQuizCompleted(true)
    }
  }

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedAnswer(userAnswers[currentQuestion - 1])
      setShowExplanation(answeredQuestions[currentQuestion - 1])
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setScore(0)
    setAnsweredQuestions(new Array(questions.length).fill(false))
    setUserAnswers(new Array(questions.length).fill(null))
    setQuizCompleted(false)
  }

  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return "text-green-600"
    if (percentage >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  const getScoreMessage = (percentage: number) => {
    if (percentage >= 90) return "Excelente! Você domina muito bem o conteúdo!"
    if (percentage >= 80) return "Muito bom! Você tem um bom domínio do conteúdo."
    if (percentage >= 70) return "Bom trabalho! Continue estudando para melhorar."
    if (percentage >= 60) return "Razoável. Revise o conteúdo e tente novamente."
    return "Precisa estudar mais. Revise o material antes de tentar novamente."
  }

  if (questions.length === 0) {
    return (
      <div className="text-center py-8">
        <Brain className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
        <h3 className="text-lg font-semibold mb-2">Questões em desenvolvimento</h3>
        <p className="text-muted-foreground">As questões para este módulo estão sendo preparadas.</p>
      </div>
    )
  }

  if (quizCompleted) {
    const percentage = Math.round((score / questions.length) * 100)

    return (
      <div className="max-w-2xl mx-auto">
        <Card className="text-center">
          <CardHeader>
            <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <CardTitle className="text-2xl">Quiz Concluído!</CardTitle>
            <CardDescription>Você respondeu todas as questões do módulo</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className={`text-4xl font-bold mb-2 ${getScoreColor(percentage)}`}>
                {score}/{questions.length}
              </div>
              <div className={`text-2xl font-semibold mb-4 ${getScoreColor(percentage)}`}>{percentage}%</div>
              <p className="text-muted-foreground">{getScoreMessage(percentage)}</p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progresso</span>
                <span>{percentage}%</span>
              </div>
              <Progress value={percentage} className="h-3" />
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-green-50 p-3 rounded-lg">
                <div className="text-green-600 font-semibold">Corretas</div>
                <div className="text-2xl font-bold text-green-700">{score}</div>
              </div>
              <div className="bg-red-50 p-3 rounded-lg">
                <div className="text-red-600 font-semibold">Incorretas</div>
                <div className="text-2xl font-bold text-red-700">{questions.length - score}</div>
              </div>
            </div>

            <Button onClick={resetQuiz} className="w-full">
              <RotateCcw className="w-4 h-4 mr-2" />
              Refazer Quiz
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  const currentQ = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header do Quiz */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Quiz do Módulo</h2>
          <p className="text-muted-foreground">
            Questão {currentQuestion + 1} de {questions.length}
          </p>
        </div>
        <Badge variant="outline" className="text-sm">
          {Math.round(progress)}% Concluído
        </Badge>
      </div>

      {/* Barra de Progresso */}
      <Progress value={progress} className="h-2" />

      {/* Questão Atual */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <Badge
              variant={
                currentQ.difficulty === "facil"
                  ? "secondary"
                  : currentQ.difficulty === "medio"
                    ? "default"
                    : "destructive"
              }
            >
              {currentQ.difficulty === "facil" ? "Fácil" : currentQ.difficulty === "medio" ? "Médio" : "Difícil"}
            </Badge>
            <div className="text-sm text-muted-foreground">
              Pontuação atual: {score}/{currentQuestion + (showExplanation ? 1 : 0)}
            </div>
          </div>
          <CardTitle className="text-xl leading-relaxed">{currentQ.question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Opções de Resposta */}
          <div className="space-y-3">
            {currentQ.options.map((option, index) => {
              let buttonClass = "w-full text-left p-4 rounded-lg border transition-all hover:bg-muted/50"

              if (showExplanation) {
                if (index === currentQ.correctAnswer) {
                  buttonClass += " bg-green-50 border-green-200 text-green-800"
                } else if (index === selectedAnswer && index !== currentQ.correctAnswer) {
                  buttonClass += " bg-red-50 border-red-200 text-red-800"
                } else {
                  buttonClass += " opacity-60"
                }
              } else if (selectedAnswer === index) {
                buttonClass += " bg-primary/10 border-primary"
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={buttonClass}
                  disabled={showExplanation}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-semibold">
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="flex-1">{option}</span>
                    {showExplanation && index === currentQ.correctAnswer && (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    )}
                    {showExplanation && index === selectedAnswer && index !== currentQ.correctAnswer && (
                      <XCircle className="w-5 h-5 text-red-600" />
                    )}
                  </div>
                </button>
              )
            })}
          </div>

          {/* Explicação */}
          {showExplanation && (
            <Alert className="mt-4">
              <Brain className="w-4 h-4" />
              <AlertDescription className="text-sm leading-relaxed">
                <strong>Explicação:</strong> {currentQ.explanation}
              </AlertDescription>
            </Alert>
          )}

          {/* Botões de Ação */}
          <div className="flex justify-between items-center pt-4">
            <Button onClick={handlePrevQuestion} disabled={currentQuestion === 0} variant="outline">
              Anterior
            </Button>

            <div className="flex space-x-2">
              {!showExplanation ? (
                <Button onClick={handleSubmitAnswer} disabled={selectedAnswer === null}>
                  Confirmar Resposta
                </Button>
              ) : (
                <Button onClick={handleNextQuestion}>
                  {currentQuestion === questions.length - 1 ? "Finalizar Quiz" : "Próxima Questão"}
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Indicadores de Questões */}
      <div className="flex flex-wrap gap-2 justify-center">
        {questions.map((_, index) => {
          let indicatorClass =
            "w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all"

          if (index === currentQuestion) {
            indicatorClass += " bg-primary text-primary-foreground"
          } else if (answeredQuestions[index]) {
            if (userAnswers[index] === questions[index].correctAnswer) {
              indicatorClass += " bg-green-100 text-green-700 border border-green-200"
            } else {
              indicatorClass += " bg-red-100 text-red-700 border border-red-200"
            }
          } else {
            indicatorClass += " bg-muted text-muted-foreground"
          }

          return (
            <button
              key={index}
              onClick={() => {
                setCurrentQuestion(index)
                setSelectedAnswer(userAnswers[index])
                setShowExplanation(answeredQuestions[index])
              }}
              className={indicatorClass}
            >
              {index + 1}
            </button>
          )
        })}
      </div>
    </div>
  )
}
