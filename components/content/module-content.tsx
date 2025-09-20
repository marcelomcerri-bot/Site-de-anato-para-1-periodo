"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Lightbulb, AlertTriangle, BookOpen, Brain, Target, CheckCircle2 } from "lucide-react"
import { QuizComponent } from "@/components/quiz/quiz-component"

interface ContentSection {
  type: "text" | "highlight" | "definition" | "example" | "important" | "list" | "subsection"
  content: string | string[]
  title?: string
}

interface ModuleContentProps {
  sectionId: string
  moduleId: string
}

// Conteúdo detalhado baseado no PDF
const contentData: Record<string, Record<string, ContentSection[]>> = {
  "1": {
    "conceito-anatomia": [
      {
        type: "definition",
        title: "Conceito de Anatomia",
        content:
          "A Anatomia é uma ciência fundamental na área da saúde que se dedica ao estudo da constituição e do desenvolvimento dos seres organizados. Essa análise pode ser feita tanto em nível macroscópico (observável a olho nu) quanto microscópico (necessitando de auxílio de equipamentos como o microscópio).",
      },
      {
        type: "text",
        content:
          "Com a invenção do microscópio, surgiram ramos especializados da Anatomia, que, embora independentes, complementam a compreensão global do organismo:",
      },
      {
        type: "subsection",
        title: "Ramos da Anatomia",
        content: "",
      },
      {
        type: "list",
        content: [
          "Citologia: Estuda as células, que são as unidades biológicas fundamentais da vida.",
          "Histologia: Investiga os tecidos (conjuntos de células semelhantes que desempenham uma mesma função geral) e como esses tecidos se organizam para formar os órgãos.",
          "Embriologia: Dedica-se ao estudo do desenvolvimento do indivíduo desde a sua concepção.",
        ],
      },
      {
        type: "highlight",
        content:
          "O termo Morfologia é frequentemente utilizado de forma mais abrangente para englobar tanto os aspectos macroscópicos quanto microscópicos da Anatomia.",
      },
    ],
    "formas-estudo": [
      {
        type: "text",
        content: "Existem diversas abordagens para o estudo anatômico, cada uma com um foco específico:",
      },
      {
        type: "subsection",
        title: "Anatomia Sistêmica",
        content: "",
      },
      {
        type: "text",
        content:
          "Foca no estudo macroscópico e analítico dos sistemas orgânicos. Por exemplo, analisa-se o sistema respiratório ou o sistema nervoso de forma isolada para compreender seus componentes. Este livro, em sua primeira parte, aborda os sistemas orgânicos.",
      },
      {
        type: "subsection",
        title: "Anatomia Topográfica",
        content: "",
      },
      {
        type: "text",
        content:
          "Estuda territórios ou regiões específicas do corpo. O objetivo é compreender as relações anatômicas entre estruturas de todos os sistemas (superficiais ou profundas) dentro de uma determinada área corpórea.",
      },
      {
        type: "subsection",
        title: "Anatomia Aplicada",
        content: "",
      },
      {
        type: "text",
        content:
          "Aborda a aplicação prática dos conhecimentos anatômicos. Para estudantes de medicina, essa perspectiva é de grande valor pedagógico, pois demonstra a importância dos dados anatômicos no diagnóstico e tratamento de patologias.",
      },
      {
        type: "subsection",
        title: "Anatomia Radiológica",
        content: "",
      },
      {
        type: "text",
        content:
          "Consiste no estudo das estruturas anatômicas por meio de técnicas de imagem, como o raio-X. Inclui métodos modernos como a ecografia, tomografia computadorizada, ressonância magnética, e angiografias.",
      },
      {
        type: "list",
        content: [
          "Ecografia: Visualização por ultrassom",
          "Tomografia computadorizada: Imagens em cortes transversais",
          "Ressonância magnética: Imagens detalhadas sem radiação",
          "Angiografias: Visualização de vasos com contraste",
          "Cintilografia: Usa radionucleotídeos para obter imagens bidimensionais",
        ],
      },
    ],
    historico: [
      {
        type: "text",
        content:
          'O estudo da Anatomia sempre fascinou a humanidade, impulsionando o desejo de "conhecer-se" tanto em sua forma (morfológico) quanto em seu funcionamento (fisiológico).',
      },
      {
        type: "important",
        title: "Obstáculos Históricos",
        content:
          "Por muitos séculos, a dissecação de corpos humanos foi impedida, principalmente devido a preceitos religiosos e éticos que consideravam o corpo inviolável.",
      },
      {
        type: "text",
        content:
          "Muitas das descrições anatômicas antigas, como as do fisiologista grego Galeno (século II d.C.), eram baseadas em dissecações de animais (porcos e macacos).",
      },
      {
        type: "highlight",
        title: "André Vesálio - O Pai da Anatomia Moderna",
        content:
          'Foi somente em 1539 que o anatomista belga André Vesálio (1514-1564) demonstrou que as descrições de Galeno não correspondiam à anatomia humana. Vesálio dissecou corpos humanos e corrigiu noções equivocadas, o que lhe rendeu o título de "pai da anatomia científica moderna".',
      },
      {
        type: "important",
        content:
          'Sua obra mais importante, "De humani corporis fabrica", publicada em 1543, marcou o fim do "galenismo" e dividiu a história da Anatomia.',
      },
    ],
    dissecacao: [
      {
        type: "definition",
        title: "Definição de Dissecação",
        content:
          "A dissecação é definida como o ato de cortar ordenadamente um cadáver (no caso, humano) com o intuito de conhecer a disposição de suas estruturas.",
      },
      {
        type: "text",
        content: "A Anatomia macroscópica é tradicionalmente estudada pela dissecação de peças previamente fixadas.",
      },
      {
        type: "important",
        title: "Importância Única da Dissecação",
        content:
          "Apesar das crescentes dificuldades em obter cadáveres para dissecação, e do uso de alternativas pedagógicas como peças pré-dissecadas e meios audiovisuais, nenhum método substitui o aprendizado pela dissecação.",
      },
      {
        type: "highlight",
        content:
          "Apenas a dissecação permite ao estudante uma visão tridimensional das estruturas orgânicas, essencial para compreender a profundidade e as relações entre artérias, nervos, veias, linfonodos, etc.",
      },
      {
        type: "text",
        content:
          "Um atlas de anatomia, por mais completo que seja, sempre representará o corpo de forma bidimensional.",
      },
      {
        type: "important",
        content:
          "É importante ressaltar que a dissecação é feita por segmentos corpóreos, e não por sistemas orgânicos isolados, pois não é possível isolar um sistema único em um cadáver.",
      },
    ],
    "organizacao-corpo": [
      {
        type: "text",
        content: "A organização do corpo humano segue uma hierarquia estrutural e funcional:",
      },
      {
        type: "list",
        content: [
          "Células: São as unidades biológicas mais básicas do organismo.",
          "Tecidos: Conjuntos de células semelhantes que se organizam para desempenhar uma mesma função geral.",
          "Órgãos: Formados pela reunião de tecidos, são instrumentos de função específica.",
          "Sistemas: Um conjunto de órgãos de mesma origem e estrutura, cujas funções se integram para realizar funções complexas.",
          "Aparelhos: Reúnem dois ou três sistemas que possuem relações íntimas em seu desenvolvimento, situação topográfica ou função.",
        ],
      },
      {
        type: "subsection",
        title: "Sistemas do Organismo Humano",
        content: "",
      },
      {
        type: "list",
        content: [
          "Sistema Esquelético: Compreende os ossos e cartilagens, formando o arcabouço de sustentação do corpo.",
          "Sistema Articular: Inclui as conexões (articulações) entre os ossos, permitindo o movimento.",
          "Sistema Muscular: Constituído pelos músculos esqueléticos, elementos ativos do movimento.",
          "Sistema Nervoso: Atua como uma unidade funcional capaz de receber estímulos, interpretá-los e comandar reações.",
          "Sistema Tegumentar: Corresponde ao revestimento cutâneo do corpo.",
          "Sistema Circulatório: Engloba o coração, vasos sanguíneos e o sistema linfático.",
          "Sistema Respiratório: Abrange órgãos envolvidos na troca gasosa.",
          "Sistema Digestório: Essencial para a digestão e absorção de nutrientes.",
          "Sistema Urinário: Responsável pela produção e eliminação da urina.",
          "Sistema Genital: Diferenciado em masculino e feminino, responsável pela reprodução.",
          "Glândulas Endócrinas: Órgãos que drenam suas secreções (hormônios) diretamente no sangue venoso.",
        ],
      },
      {
        type: "subsection",
        title: "Aparelhos",
        content: "",
      },
      {
        type: "list",
        content: [
          "Aparelho Locomotor: Formado pelos sistemas esquelético, articular e muscular.",
          "Aparelho Urogenital: Composto pelos sistemas urinário e genital.",
        ],
      },
    ],
    terminologia: [
      {
        type: "text",
        content: "Como toda ciência, a Anatomia possui uma linguagem própria, conhecida como Terminologia Anatômica.",
      },
      {
        type: "text",
        content:
          'No final do século XIX, com o grande acúmulo de conhecimento, diferentes "escolas anatômicas" (principalmente na Itália, França, Inglaterra e Alemanha) usavam denominações diferentes para as mesmas estruturas, resultando em mais de 20.000 termos anatômicos.',
      },
      {
        type: "highlight",
        title: "Padronização Internacional",
        content:
          "Para padronizar e criar uma nomenclatura anatômica internacional, a primeira tentativa ocorreu em 1895, na Basileia, resultando na Basle Nomina Anatomica (B.N.A.).",
      },
      {
        type: "important",
        content:
          "A versão mais recente, a Terminologia Anatômica, foi oficializada em 1999 em Roma, Itália. A tradução para o português foi publicada em 2000 no Brasil.",
      },
      {
        type: "text",
        content:
          'A nomenclatura anatômica busca adotar termos que não sejam apenas "sinais para a memória", mas que também ofereçam informações ou descrições sobre a estrutura. Por isso, os epônimos (nomes de pessoas para designar coisas) foram abolidos.',
      },
      {
        type: "subsection",
        title: "Critérios para Nomenclatura",
        content: "",
      },
      {
        type: "list",
        content: [
          "A forma (ex: músculo trapézio)",
          "Sua posição ou situação (ex: nervo mediano)",
          "Seu trajeto (ex: artéria circunflexa da escápula)",
          "Suas conexões ou inter-relações (ex: ligamento sacroilíaco)",
          "Sua relação com o esqueleto (ex: artéria radial)",
          "Sua função (ex: músculo levantador da escápula)",
          "Critérios mistos (ex: músculo flexor superficial dos dedos)",
        ],
      },
      {
        type: "subsection",
        title: "Abreviaturas Utilizadas",
        content: "",
      },
      {
        type: "list",
        content: [
          "A. = artéria, Aa. = artérias",
          "Lig. = ligamento, Ligg. = ligamentos",
          "M. = músculo, Mm. = músculos",
          "N. = nervo, Nn. = nervos",
          "R. = ramo, Rr. = ramos",
          "V. = veia, Vv. = veias",
        ],
      },
    ],
  },
  "2": {
    "conceito-funcoes": [
      {
        type: "definition",
        title: "Osteologia",
        content:
          "A Osteologia é o ramo da anatomia que estuda os ossos. Em um sentido mais amplo, inclui também as formações intimamente ligadas aos ossos, formando o esqueleto.",
      },
      {
        type: "definition",
        title: "Esqueleto",
        content:
          'O termo esqueleto significa "arcabouço" e se refere ao conjunto de ossos e cartilagens que se interligam para formar a estrutura de sustentação do corpo.',
      },
      {
        type: "definition",
        title: "Ossos",
        content:
          "Os ossos são definidos como peças rígidas, de número, coloração e forma variáveis, com origem, estrutura e função semelhantes, que, em conjunto, constituem o esqueleto.",
      },
      {
        type: "subsection",
        title: "Funções do Esqueleto",
        content: "",
      },
      {
        type: "list",
        content: [
          "Proteção: Abriga órgãos vitais, como o coração, pulmões e sistema nervoso central.",
          "Sustentação e Conformação do Corpo: Proporciona a forma e o suporte estrutural ao organismo.",
          "Local de Armazenamento de Minerais e Íons: Especialmente cálcio, que pode ser reabsorvido para suprir necessidades.",
          "Sistema de Alavancas: Permite os deslocamentos do corpo quando movimentado pelos músculos.",
          "Local de Produção de Células do Sangue (Hematopoiese): Certos ossos contêm medula óssea, responsável pela formação de células sanguíneas.",
        ],
      },
      {
        type: "highlight",
        content: "O sistema esquelético, junto com o articular e o muscular, forma o aparelho locomotor.",
      },
    ],
    "tipos-esqueletos": [
      {
        type: "text",
        content: "O esqueleto pode ser apresentado de diferentes formas:",
      },
      {
        type: "subsection",
        title: "Por Apresentação",
        content: "",
      },
      {
        type: "list",
        content: [
          "Esqueleto Articulado: Quando todas as peças ósseas estão unidas entre si, como no corpo vivo.",
          "Esqueleto Desarticulado: Quando os ossos estão isolados uns dos outros, geralmente para estudo individual.",
        ],
      },
      {
        type: "subsection",
        title: "Por Localização",
        content: "",
      },
      {
        type: "list",
        content: [
          "Exoesqueleto: Um esqueleto externo, característico de artrópodes (ex: insetos).",
          "Endoesqueleto: Um esqueleto interno, presente nos vertebrados, incluindo os seres humanos.",
        ],
      },
      {
        type: "text",
        content:
          'A pele e suas camadas podem ser consideradas uma "lembrança" da condição primitiva de um exoesqueleto.',
      },
    ],
    "divisao-esqueleto": [
      {
        type: "text",
        content: "O esqueleto humano é dividido em duas grandes porções:",
      },
      {
        type: "subsection",
        title: "Esqueleto Axial",
        content: "",
      },
      {
        type: "text",
        content:
          "Parte mediana que forma o eixo do corpo, composta pelos ossos da cabeça, do pescoço e do tronco (tórax e abdome).",
      },
      {
        type: "subsection",
        title: "Esqueleto Apendicular",
        content: "",
      },
      {
        type: "text",
        content: "Parte apensa ao esqueleto axial, composta pelos ossos dos membros superiores e inferiores.",
      },
    ],
    "numero-ossos": [
      {
        type: "highlight",
        title: "Número de Ossos no Adulto",
        content: "O número de ossos no esqueleto humano adulto é 206.",
      },
      {
        type: "text",
        content: "No entanto, esta contagem pode variar devido a diversos fatores:",
      },
      {
        type: "subsection",
        title: "Fatores de Variação",
        content: "",
      },
      {
        type: "list",
        content: [
          "Idade: No recém-nascido, o número é maior (cerca de 270). Com o desenvolvimento, alguns ossos se fundem.",
          "Fatores Individuais: A persistência da divisão do osso frontal no adulto ou a presença de ossos extranumerários.",
          "Critérios de Contagem: Diferentes anatomistas podem usar critérios distintos para a contagem.",
        ],
      },
      {
        type: "example",
        title: "Exemplos de Fusão Óssea",
        content:
          "As três porções do osso do quadril (ílio, ísquio e púbis) se fundem no adulto; as vértebras sacrais e coccígeas se fundem para formar o sacro e o cóccix.",
      },
    ],
    "classificacao-forma": [
      {
        type: "text",
        content: "A classificação mais difundida dos ossos leva em consideração sua forma:",
      },
      {
        type: "subsection",
        title: "Osso Longo",
        content: "",
      },
      {
        type: "text",
        content:
          "Predomina o comprimento sobre a largura e espessura. Possui uma parte central chamada diáfise e extremidades chamadas epífises.",
      },
      {
        type: "text",
        content:
          "Geralmente, contêm uma cavidade interna, o canal medular, que aloja a medula óssea. Por essa razão, também são chamados ossos tubulares.",
      },
      {
        type: "example",
        content: "Exemplos: fêmur, tíbia, úmero, rádio, falanges.",
      },
      {
        type: "subsection",
        title: "Osso Plano",
        content: "",
      },
      {
        type: "text",
        content:
          "Apresenta comprimento e largura predominantes sobre a espessura. São formados por duas camadas delgadas de osso compacto, com osso esponjoso no meio.",
      },
      {
        type: "text",
        content: "Nos ossos do crânio, essa camada esponjosa é chamada díploe.",
      },
      {
        type: "example",
        content: "Exemplos: escápula, ossos do crânio (frontal, parietal, occipital).",
      },
      {
        type: "subsection",
        title: "Osso Curto",
        content: "",
      },
      {
        type: "text",
        content: "Possui comprimento, largura e espessura equivalentes.",
      },
      {
        type: "example",
        content: "Exemplos: ossos do carpo (punho) e tarso (tornozelo).",
      },
      {
        type: "subsection",
        title: "Osso Irregular",
        content: "",
      },
      {
        type: "text",
        content: "Não apresenta uma forma geométrica definida.",
      },
      {
        type: "example",
        content: "Exemplos: vértebras, sacro, cóccix.",
      },
      {
        type: "subsection",
        title: "Osso Sesamóide",
        content: "",
      },
      {
        type: "text",
        content: "Ossos pequenos, arredondados, que se desenvolvem no interior de tendões musculares.",
      },
      {
        type: "example",
        content: "O maior exemplo é a patela, mas também ocorrem nos pés e mãos.",
      },
      {
        type: "subsection",
        title: "Osso Pneumático",
        content: "",
      },
      {
        type: "text",
        content: "Apresenta cavidades cheias de ar (seios), o que os torna mais leves.",
      },
      {
        type: "example",
        content: "Exemplos: maxila, frontal, esfenóide, etmóide.",
      },
    ],
  },
  "5": {
    "conceito-funcoes-sn": [
      {
        type: "definition",
        title: "Sistema Nervoso",
        content:
          "O Sistema Nervoso (SN) é um sistema especializado que controla e coordena as funções de todos os sistemas do organismo. Sua importância é tamanha que permite a integração do indivíduo no meio ambiente.",
      },
      {
        type: "text",
        content:
          "O SN é responsável por receber estímulos, interpretá-los e comandar reações a esses estímulos. No ser humano, o SN é altamente desenvolvido, respondendo também por fenômenos psíquicos elaborados.",
      },
      {
        type: "highlight",
        content:
          "O SN funciona com base em um binômio estímulo-reação, que pode ser expandido para estímulo-interpretação-reação. A interpretação é crucial, pois nem toda reação é um simples reflexo.",
      },
      {
        type: "important",
        title: "Neuroanatomia",
        content:
          "O estudo do SN, a Neuroanatomia, é uma disciplina separada no currículo médico devido à sua complexidade e importância.",
      },
    ],
    "tecido-nervoso": [
      {
        type: "text",
        content:
          "O tecido nervoso é o principal componente do SN e é estudado em detalhes na Histologia. Basicamente, ele compreende dois tipos de células:",
      },
      {
        type: "subsection",
        title: "Tipos de Células do Tecido Nervoso",
        content: "",
      },
      {
        type: "list",
        content: [
          "Neurônios: São as unidades morfofuncionais do SN. Possuem a capacidade de receber, processar e transmitir informações através de impulsos nervosos.",
          "Células Gliais (Neuroglia): Ocupam os espaços entre os neurônios e desempenham funções de sustentação, revestimento ou isolamento, modulação da atividade neuronal e defesa.",
        ],
      },
    ],
    neuronio: [
      {
        type: "definition",
        title: "O Neurônio - Unidade Morfofuncional",
        content: "A maioria dos neurônios possui três regiões principais, cada uma com funções especializadas:",
      },
      {
        type: "subsection",
        title: "Partes do Neurônio",
        content: "",
      },
      {
        type: "list",
        content: [
          "Corpo Celular (Pericário): É o centro metabólico do neurônio, responsável pela síntese de todas as proteínas neuronais e pela maioria dos processos de degradação e renovação dos constituintes celulares.",
          "Dendritos: Geralmente curtos e ramificados como os galhos de uma árvore (do grego déndron = árvore). São especializados em receber estímulos.",
          "Axônio: É um prolongamento longo e fino que se origina do corpo celular ou de um dendrito principal, em uma região chamada cone de implantação. Pode atingir mais de 1 metro no ser humano.",
        ],
      },
      {
        type: "highlight",
        title: "Bainha de Mielina",
        content:
          "É um dos envoltórios principais do axônio, que funciona como isolante elétrico, aumentando a velocidade de condução do impulso nervoso.",
      },
      {
        type: "important",
        content:
          "Os neurônios sensitivos (aferentes) são especializados em transformar estímulos físicos ou químicos em impulsos nervosos através de receptores sofisticados. O corpo do neurônio, se lesado, não se regenera.",
      },
    ],
    "divisao-sn": [
      {
        type: "text",
        content: "O SN é dividido para fins de estudo em:",
      },
      {
        type: "subsection",
        title: "Sistema Nervoso Central (SNC)",
        content: "",
      },
      {
        type: "text",
        content: "Constituído por estruturas localizadas no esqueleto axial (coluna vertebral e crânio).",
      },
      {
        type: "subsection",
        title: "Sistema Nervoso Periférico (SNP)",
        content: "",
      },
      {
        type: "text",
        content: "Compreende os nervos cranianos e espinais, os gânglios e as terminações nervosas.",
      },
    ],
    "snc-desenvolvimento": [
      {
        type: "text",
        content:
          "O SNC tem sua origem no tubo neural e na crista neural. Durante o desenvolvimento embrionário, o tubo neural dá origem aos elementos do SNC, enquanto a crista neural dá origem aos elementos do SNP.",
      },
      {
        type: "subsection",
        title: "Vesículas Primordiais",
        content: "",
      },
      {
        type: "text",
        content: "O tubo neural primitivo forma três dilatações primordiais:",
      },
      {
        type: "list",
        content: [
          "Prosencéfalo (vesícula mais cranial)",
          "Mesencéfalo (vesícula intermediária)",
          "Rombencéfalo (vesícula mais caudal)",
        ],
      },
      {
        type: "text",
        content:
          "Essas vesículas se diferenciam ainda mais: o prosencéfalo origina o telencéfalo e o diencéfalo, e o rombencéfalo origina o metencéfalo e o mielencéfalo.",
      },
    ],
    "partes-snc": [
      {
        type: "text",
        content: "As transformações das vesículas primordiais dão origem às partes mais importantes do SNC:",
      },
      {
        type: "subsection",
        title: "Encéfalo",
        content: "",
      },
      {
        type: "text",
        content: "Localiza-se na cavidade craniana e é composto por:",
      },
      {
        type: "list",
        content: [
          "Cérebro: Originado do telencéfalo e diencéfalo. Os hemisférios cerebrais são de origem telencefálica.",
          "Tronco Encefálico: Constituído pelo mesencéfalo, ponte e bulbo (medula oblonga). Interpõe-se entre a medula espinal e o diencéfalo.",
          "Cerebelo: Originado do metencéfalo. Conhecido como a 'árvore da vida' devido à sua aparência. Coordena os movimentos efetuados.",
        ],
      },
      {
        type: "subsection",
        title: "Medula Espinal",
        content: "",
      },
      {
        type: "text",
        content: "Massa cilindroide que se aloja no canal vertebral, sem ocupá-lo totalmente.",
      },
    ],
  },
  "6": {
    "conceito-historico": [
      {
        type: "definition",
        title: "Sistema Circulatório",
        content:
          "O sistema circulatório é responsável pelo transporte de sangue e linfa por todo o corpo. O sangue carrega material nutritivo e oxigênio dos capilares para os tecidos, e produtos de resíduo metabólico (incluindo CO2) dos tecidos para os capilares.",
      },
      {
        type: "highlight",
        title: "Marco Histórico",
        content:
          "A obra fundamental sobre a circulação do sangue foi publicada em 1628 por William Harvey, que hipotetizou a passagem do sangue de artérias menores para veias menores.",
      },
    ],
    "divisao-sistema": [
      {
        type: "text",
        content: "O sistema circulatório é dividido em:",
      },
      {
        type: "list",
        content: [
          "Coração: O órgão central de bombeamento",
          "Artérias: Levam sangue do coração para os tecidos",
          "Veias: Trazem sangue dos tecidos de volta ao coração",
          "Capilares: Vasos microscópicos onde ocorrem as trocas de substâncias entre o sangue e os tecidos",
          "Sistema Linfático: Um sistema auxiliar de drenagem",
          "Órgãos Hemopoiéticos: Órgãos que produzem células sanguíneas (ex: medula óssea, baço)",
        ],
      },
    ],
    coracao: [
      {
        type: "definition",
        title: "O Coração",
        content:
          "O coração é um órgão muscular oco, localizado no mediastino médio do tórax. Sua função principal é bombear o sangue para as circulações pulmonar e sistêmica.",
      },
      {
        type: "subsection",
        title: "Pericárdio",
        content: "",
      },
      {
        type: "text",
        content:
          "Saco fibro-seroso que envolve o coração, separando-o de outros órgãos do mediastino e limitando sua expansão durante a diástole (relaxamento).",
      },
      {
        type: "subsection",
        title: "Anatomia Externa",
        content: "",
      },
      {
        type: "text",
        content:
          "O coração possui uma base (superior) e um ápice (inferior e arredondado, localizado no nível da 5ª cartilagem costal). Apresenta duas faces nítidas: a diafragmática e a esternocostal.",
      },
      {
        type: "subsection",
        title: "Anatomia Interna",
        content: "",
      },
      {
        type: "text",
        content:
          "O coração é dividido por um septo oblíquo em duas metades (direita e esquerda), cada uma com duas cavidades:",
      },
      {
        type: "list",
        content: [
          "Átrio Direito: Recebe sangue venoso da veia cava superior e veia cava inferior",
          "Ventrículo Direito: Recebe sangue do átrio direito e o bombeia para a artéria pulmonar",
          "Átrio Esquerdo: Recebe sangue oxigenado das veias pulmonares",
          "Ventrículo Esquerdo: Bombeia sangue para a aorta",
        ],
      },
    ],
    arterias: [
      {
        type: "definition",
        title: "Artérias",
        content:
          "As artérias transportam o sangue do coração para todas as partes do corpo. A principal artéria do corpo é a aorta, que se ramifica em artérias de calibres cada vez menores.",
      },
      {
        type: "subsection",
        title: "Classificação pelo Calibre",
        content: "",
      },
      {
        type: "list",
        content: [
          "Artérias Elásticas (de Grande Calibre): Próximas ao coração (ex: aorta, tronco braquiocefálico), possuem alta proporção de fibras elásticas.",
          "Artérias Musculares (de Médio Calibre): Possuem predominância de músculo liso em suas paredes, permitindo a regulação do fluxo sanguíneo.",
          "Arteríolas (de Pequeno Calibre): Vasos de menor calibre que controlam o fluxo de sangue para os capilares.",
        ],
      },
      {
        type: "important",
        title: "Anastomoses Arteriais",
        content:
          "São conexões entre duas ou mais artérias que favorecem a irrigação dos órgãos. Em caso de obstrução de uma artéria, a anastomose pode servir como uma via alternativa (circulação colateral).",
      },
    ],
    veias: [
      {
        type: "definition",
        title: "Veias",
        content:
          "As veias transportam o sangue de volta ao coração, geralmente seguindo o trajeto das artérias. No entanto, existem diferenças importantes.",
      },
      {
        type: "list",
        content: [
          "As veias tendem a formar plexos venosos",
          "No encéfalo, as veias geralmente não acompanham as artérias e drenam para os seios da dura-máter",
          "No membro inferior, as veias superficiais não acompanham as artérias, mas são cruciais para o retorno venoso",
        ],
      },
      {
        type: "highlight",
        title: "Sistema Porta",
        content:
          "O sistema da veia porta é um sistema venoso especializado que drena o sangue do trato gastrointestinal, baço, pâncreas e vesícula biliar.",
      },
    ],
    "sistema-linfatico": [
      {
        type: "definition",
        title: "Sistema Linfático",
        content:
          "O sistema linfático é um sistema de drenagem auxiliar no corpo, formado por vasos e órgãos linfoides, onde circula a linfa.",
      },
      {
        type: "subsection",
        title: "Funções",
        content: "",
      },
      {
        type: "list",
        content: [
          "Atua como uma barreira contra a penetração de toxinas, bactérias e corpos estranhos na circulação geral",
          "Absorção de gorduras",
        ],
      },
      {
        type: "subsection",
        title: "Componentes",
        content: "",
      },
      {
        type: "list",
        content: [
          "Vasos Linfáticos: Numerosos e cobrem grande parte do corpo, possuindo válvulas",
          "Linfonodos (Gânglios Linfáticos): Pequenos órgãos que atuam como filtros biológicos",
          "Ductos Linfáticos Maiores: O ducto torácico é a principal via de drenagem linfática do corpo",
        ],
      },
    ],
  },
  "7": {
    "introducao-mi": [
      {
        type: "definition",
        title: "Membro Inferior",
        content:
          "O membro inferior é um segmento corpóreo vital para a sustentação do peso do corpo e para a locomoção (deambulação). É conectado ao tronco pelos ossos do quadril.",
      },
    ],
    "esqueleto-mi": [
      {
        type: "subsection",
        title: "Osso do Quadril",
        content: "",
      },
      {
        type: "text",
        content:
          "Formado pela fusão de três ossos: ílio, ísquio e púbis. Articula-se com o sacro posteriormente e com a cabeça do fêmur lateralmente.",
      },
      {
        type: "example",
        content:
          "Acidentes ósseos importantes incluem a crista ilíaca, a espinha ilíaca ântero-superior e a tuberosidade isquiática.",
      },
      {
        type: "subsection",
        title: "Fêmur",
        content: "",
      },
      {
        type: "text",
        content:
          "O osso mais longo e robusto do corpo humano. Sua extremidade proximal possui a cabeça do fêmur, os trocanteres maior e menor e o colo do fêmur.",
      },
      {
        type: "important",
        content: "O colo do fêmur é uma região onde fraturas são comuns, especialmente em idosos.",
      },
      {
        type: "subsection",
        title: "Patela",
        content: "",
      },
      {
        type: "text",
        content: "Maior osso sesamóide do corpo, localizado anteriormente ao joelho.",
      },
      {
        type: "subsection",
        title: "Tíbia e Fíbula",
        content: "",
      },
      {
        type: "list",
        content: [
          "Tíbia: Osso medial da perna, mais robusto. Sua face anterior é a crista da tíbia, palpável em toda sua extensão.",
          "Fíbula: Osso lateral da perna, mais delgado que a tíbia, com função principal de inserção muscular.",
        ],
      },
      {
        type: "subsection",
        title: "Esqueleto do Pé",
        content: "",
      },
      {
        type: "list",
        content: [
          "Tarso: Sete ossos curtos (tálus, calcâneo, navicular, cubóide, três cuneiformes)",
          "Metatarso: Cinco ossos longos que formam a parte média do pé",
          "Falanges: Ossos dos dedos do pé",
        ],
      },
    ],
    "estruturas-superficiais": [
      {
        type: "text",
        content: "As principais estruturas superficiais localizam-se na camada lamelar da tela subcutânea.",
      },
      {
        type: "subsection",
        title: "Veias Superficiais",
        content: "",
      },
      {
        type: "list",
        content: [
          "Veia Safena Magna: Ascende pela face medial da perna e coxa, drenando para a veia femoral",
          "Veia Safena Parva: Ascende pela face posterior da perna, drenando para a veia poplítea",
        ],
      },
      {
        type: "highlight",
        content:
          "O arco venoso dorsal do pé é formado pelas veias digitais dorsais e é o ponto de origem das veias safenas.",
      },
    ],
    "fascia-mi": [
      {
        type: "definition",
        title: "Fáscia do Membro Inferior",
        content:
          "A fáscia é uma lâmina de tecido conjuntivo que envolve individualmente cada músculo e também forma um invólucro fascial para toda a massa muscular.",
      },
      {
        type: "list",
        content: [
          "Fáscia Lata: Envolve a coxa",
          "Fáscia Crural (da Perna): Contínua com a fáscia lata, divide a perna em compartimentos",
          "Retináculos: Espessamentos da fáscia no nível do tornozelo que mantêm os tendões em posição",
        ],
      },
    ],
    "drenagem-linfatica": [
      {
        type: "text",
        content: "A drenagem linfática do membro inferior segue um padrão específico:",
      },
      {
        type: "list",
        content: [
          "Linfonodos inguinais superficiais: Recebem linfa da pele e tela subcutânea",
          "Linfonodos inguinais profundos: Recebem drenagem dos linfonodos superficiais e da glande/clitóris",
          "Linfonodos poplíteos: Drenam a perna e o pé",
        ],
      },
    ],
    "regioes-mi": [
      {
        type: "subsection",
        title: "Região Anterior da Coxa",
        content: "",
      },
      {
        type: "text",
        content:
          "Contém músculos como o ílio-psoas (principal flexor da coxa), o quadríceps femoral (extensor da perna) e o sartório.",
      },
      {
        type: "subsection",
        title: "Região Medial da Coxa",
        content: "",
      },
      {
        type: "text",
        content: "Compreende os músculos adutores: pectíneo, adutor longo, adutor curto, adutor magno e grácil.",
      },
      {
        type: "subsection",
        title: "Região Glútea",
        content: "",
      },
      {
        type: "text",
        content: "Contém o glúteo máximo (maior músculo do corpo) e músculos rotadores laterais da coxa.",
      },
      {
        type: "subsection",
        title: "Articulação do Joelho",
        content: "",
      },
      {
        type: "text",
        content:
          "Uma das articulações mais complexas do corpo, envolvendo fêmur, tíbia e patela, com ligamentos cruzados e meniscos.",
      },
    ],
    deambulacao: [
      {
        type: "definition",
        title: "Deambulação (Marcha)",
        content:
          "A deambulação é o ato de caminhar ou locomover-se. A marcha é um processo complexo que depende da coordenação de contrações e relaxamentos musculares e do equilíbrio.",
      },
      {
        type: "highlight",
        content:
          "Os arcos do pé (longitudinais e transversos) desempenham um papel crucial na sustentação do peso do corpo, agindo como molas e distribuindo a carga.",
      },
    ],
  },
  "8": {
    "introducao-ms": [
      {
        type: "definition",
        title: "Membro Superior",
        content:
          "O membro superior é especializado para a preensão, manipulação e gesticulação. É conectado ao tronco pelo cíngulo do membro superior (cintura escapular).",
      },
    ],
    "esqueleto-ms": [
      {
        type: "subsection",
        title: "Clavícula",
        content: "",
      },
      {
        type: "text",
        content:
          "Único osso que une o membro superior ao tronco. Articula-se medialmente com o esterno e lateralmente com o acrômio da escápula.",
      },
      {
        type: "subsection",
        title: "Escápula",
        content: "",
      },
      {
        type: "text",
        content:
          "Osso plano e triangular situado na parte posterior do tórax. Possui a cavidade glenoidal que se articula com o úmero.",
      },
      {
        type: "subsection",
        title: "Úmero",
        content: "",
      },
      {
        type: "text",
        content: "Osso do braço. Articula-se proximalmente com a escápula e distalmente com o rádio e ulna.",
      },
      {
        type: "subsection",
        title: "Rádio e Ulna",
        content: "",
      },
      {
        type: "list",
        content: [
          "Rádio: Osso lateral do antebraço, articula-se proximalmente com o úmero",
          "Ulna: Osso medial do antebraço, possui o olécrano que forma a ponta do cotovelo",
        ],
      },
      {
        type: "subsection",
        title: "Esqueleto da Mão",
        content: "",
      },
      {
        type: "list",
        content: [
          "Carpo: Oito ossos curtos dispostos em duas fileiras",
          "Metacarpo: Cinco ossos longos",
          "Falanges: Ossos dos dedos (três para cada dedo, exceto o polegar que tem duas)",
        ],
      },
    ],
    "estruturas-superficiais-ms": [
      {
        type: "subsection",
        title: "Veias Superficiais",
        content: "",
      },
      {
        type: "list",
        content: [
          "Veia Cefálica: Ascende pela face lateral do membro superior",
          "Veia Basílica: Ascende pela face medial do membro superior",
          "Veia Intermédia do Cotovelo: Anastomose na fossa cubital, local comum para punções venosas",
        ],
      },
    ],
    "musculos-ms": [
      {
        type: "subsection",
        title: "Músculos Toracoapendiculares",
        content: "",
      },
      {
        type: "list",
        content: [
          "Peitoral Maior: Grande músculo responsável pela flexão, adução e rotação medial do braço",
          "Peitoral Menor: Abaixa a escápula e atua na inspiração forçada",
          "Serrátil Anterior: Aproxima a escápula do tórax",
        ],
      },
      {
        type: "subsection",
        title: "Músculos do Ombro",
        content: "",
      },
      {
        type: "list",
        content: [
          "Deltóide: Músculo volumoso que modela o ombro, principal abdutor do braço",
          "Manguito Rotador: Grupo de quatro músculos que estabilizam a articulação do ombro",
        ],
      },
    ],
    "plexo-braquial": [
      {
        type: "definition",
        title: "Plexo Braquial",
        content:
          "Rede complexa de nervos formada pelas raízes nervosas de C5 a T1, responsável pela inervação do membro superior.",
      },
      {
        type: "subsection",
        title: "Nervos Terminais",
        content: "",
      },
      {
        type: "list",
        content: [
          "Nervo Radial: Inerva principalmente a região posterior do membro (músculos extensores)",
          "Nervo Mediano: Inerva a maioria dos músculos flexores do antebraço e alguns músculos da mão",
          "Nervo Ulnar: Inerva alguns músculos do antebraço e a maioria dos músculos intrínsecos da mão",
          "Nervo Musculocutâneo: Inerva os músculos anteriores do braço (flexores)",
        ],
      },
    ],
    "articulacoes-ms": [
      {
        type: "subsection",
        title: "Articulação do Ombro",
        content: "",
      },
      {
        type: "text",
        content:
          "Articulação esferoide que permite grande amplitude de movimento. É a articulação mais móvel do corpo.",
      },
      {
        type: "subsection",
        title: "Articulação do Cotovelo",
        content: "",
      },
      {
        type: "text",
        content: "Articulação composta tipo gínglimo (dobradiça) que permite flexão e extensão do antebraço.",
      },
      {
        type: "subsection",
        title: "Articulações da Mão",
        content: "",
      },
      {
        type: "text",
        content:
          "Incluem articulações radiocarpal, intercarpal, carpometacarpal, metacarpofalângicas e interfalângicas.",
      },
    ],
    mao: [
      {
        type: "definition",
        title: "A Mão",
        content:
          "A mão é uma estrutura altamente especializada para preensão e manipulação fina. Possui músculos intrínsecos organizados em grupos funcionais.",
      },
      {
        type: "subsection",
        title: "Músculos Intrínsecos",
        content: "",
      },
      {
        type: "list",
        content: [
          "Músculos Tenares: Controlam o polegar (abdutor curto, flexor curto, oponente)",
          "Músculos Hipotenares: Controlam o dedo mínimo",
          "Lumbricais: Atuam na flexão das metacarpofalângicas e extensão das interfalângicas",
          "Interósseos: Localizados entre os metacarpais, responsáveis pela abdução e adução dos dedos",
        ],
      },
      {
        type: "highlight",
        content:
          "A oposição do polegar é uma característica única dos primatas superiores e é fundamental para a preensão de precisão.",
      },
    ],
  },
}

export function ModuleContent({ sectionId, moduleId }: ModuleContentProps) {
  if (sectionId.startsWith("questoes-")) {
    return <QuizComponent moduleId={moduleId} sectionId={sectionId} />
  }

  const content = contentData[moduleId]?.[sectionId]

  if (!content) {
    return (
      <div className="text-center py-12">
        <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Conteúdo não encontrado</h3>
        <p className="text-muted-foreground">O conteúdo para esta seção ainda não foi implementado.</p>
      </div>
    )
  }

  const renderContent = (section: ContentSection, index: number) => {
    switch (section.type) {
      case "definition":
        return (
          <Alert key={index} className="border-primary/20 bg-primary/5">
            <Target className="h-4 w-4" />
            <AlertTitle className="text-primary font-semibold">{section.title}</AlertTitle>
            <AlertDescription className="text-foreground mt-2">{section.content}</AlertDescription>
          </Alert>
        )

      case "highlight":
        return (
          <Alert key={index} className="border-accent/20 bg-accent/5">
            <Lightbulb className="h-4 w-4" />
            <AlertTitle className="text-accent-foreground font-semibold">{section.title || "Destaque"}</AlertTitle>
            <AlertDescription className="text-foreground mt-2">{section.content}</AlertDescription>
          </Alert>
        )

      case "important":
        return (
          <Alert key={index} className="border-destructive/20 bg-destructive/5">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle className="text-destructive font-semibold">{section.title || "Importante"}</AlertTitle>
            <AlertDescription className="text-foreground mt-2">{section.content}</AlertDescription>
          </Alert>
        )

      case "example":
        return (
          <Card key={index} className="border-l-4 border-l-green-500 bg-green-50/50 dark:bg-green-950/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-green-700 dark:text-green-300 text-lg flex items-center">
                <CheckCircle2 className="w-5 h-5 mr-2" />
                {section.title || "Exemplo"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">{section.content}</p>
            </CardContent>
          </Card>
        )

      case "subsection":
        return (
          <div key={index} className="my-6">
            <h3 className="text-xl font-semibold text-primary mb-3 flex items-center">
              <Brain className="w-5 h-5 mr-2" />
              {section.title}
            </h3>
            <Separator className="mb-4" />
          </div>
        )

      case "list":
        return (
          <Card key={index} className="bg-muted/30">
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {(section.content as string[]).map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )

      case "text":
      default:
        return (
          <div key={index} className="prose max-w-none">
            <p className="text-foreground leading-relaxed text-pretty mb-4">{section.content}</p>
          </div>
        )
    }
  }

  return <div className="space-y-6">{content.map((section, index) => renderContent(section, index))}</div>
}
