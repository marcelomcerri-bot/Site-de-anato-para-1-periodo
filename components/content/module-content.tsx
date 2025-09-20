"use client"

interface ContentSection {
  type:
    | "definition"
    | "text"
    | "list"
    | "subsection"
    | "highlight"
    | "important"
    | "example"
    | "warning"
    | "title"
    | "subtitle"
  title?: string
  content: string | string[]
}

interface Module {
  id: number
  title: string
  sections: ContentSection[]
}

// Conteúdo completamente atualizado com base no PDF fornecido
const moduleContent: Module[] = [
  {
    id: 1,
    title: "Introdução à Anatomia",
    sections: [
      {
        type: "title",
        content: "Introdução à Anatomia",
      },
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
      {
        type: "subtitle",
        content: "Formas de Estudo da Anatomia",
      },
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
          "Estuda territórios ou regiões específicas do corpo. O objetivo é compreender as relações anatômicas entre estruturas de todos os sistemas (superficiais ou profundas) dentro de uma determinada área corpórea. A segunda parte deste livro descreve a Anatomia Segmentar, que aborda detalhadamente os segmentos corpóreos.",
      },
      {
        type: "subsection",
        title: "Anatomia Aplicada",
        content: "",
      },
      {
        type: "text",
        content:
          "Aborda a aplicação prática dos conhecimentos anatômicos. Para estudantes de medicina, essa perspectiva é de grande valor pedagógico, pois demonstra a importância dos dados anatômicos no diagnóstico e tratamento de patologias, reforçando que a Anatomia é a base para uma prática médica competente.",
      },
      {
        type: "subsection",
        title: "Anatomia Radiológica",
        content: "",
      },
      {
        type: "text",
        content:
          "Consiste no estudo das estruturas anatômicas por meio de técnicas de imagem, como o raio-X. Inclui métodos modernos como a ecografia (visualização por ultrassom), tomografia computadorizada, ressonância magnética, e angiografias (visualização de vasos com contraste).",
      },
      {
        type: "list",
        content: [
          "Angiocardiografias: Para coração e grandes vasos",
          "Arteriografias: Para artérias",
          "Veno ou flebografias: Para veias",
          "Urografias: Para vias urinárias",
          "Artrografias: Para articulações",
          "Cintilografia: Usa radionucleotídeos para obter imagens bidimensionais da distribuição de radioatividade em tecidos",
        ],
      },
      {
        type: "subsection",
        title: "Anatomia Antropológica",
        content: "",
      },
      {
        type: "text",
        content:
          "Estuda os aspectos anatômicos de diferentes povos e grupos étnicos, auxiliando na determinação de pontos de referência para medições importantes em biotipologia.",
      },
      {
        type: "subsection",
        title: "Anatomia Comparativa",
        content: "",
      },
      {
        type: "text",
        content:
          "Refere-se ao estudo comparado da estrutura morfológica e dos órgãos entre indivíduos de diferentes espécies.",
      },
      {
        type: "subsection",
        title: "Anatomia Biotipológica (Constitucional)",
        content: "",
      },
      {
        type: "text",
        content: "Foca no estudo dos tipos individuais de construção do corpo humano.",
      },
      {
        type: "subtitle",
        content: "Histórico do Estudo da Anatomia",
      },
      {
        type: "text",
        content":
          'O estudo da Anatomia sempre fascinou a humanidade, impulsionando o desejo de "conhecer-se\" tanto em sua forma (morfológico) quanto em seu funcionamento (fisiológico).',
      },
      {
        type: "important",
        title: "Obstáculos Históricos",
        content:\
          \"Por muitos séculos, a dissecação de corpos humanos foi impedida, principalmente devido a preceitos religiosos e éticos que consideravam o corpo inviolável.",
      },
      {
        type: "text",
        content":
          \"Muitas das descrições anatômicas antigas, como as do fisiologista grego Galeno (século II d.C.), eram baseadas em dissecações de animais (porcos e macacos).",
      },
      {
        type: "highlight",
        title: "André Vesálio - O Pai da Anatomia Moderna",
        content":
          \'Foi somente em 1539 que o anatomista belga André Vesálio (1514-1564) demonstrou que as descrições de Galeno não correspondiam à anatomia humana. Vesálio dissecou corpos humanos e corrigiu noções equivocadas, o que lhe rendeu o título de "pai da anatomia científica moderna".',
      },
      {
        type: "important",
        content":
          'Sua obra mais importante, "De humani corporis fabrica", publicada em 1543, marcou o fim do "galenismo\" e dividiu a história da Anatomia.',
      },
      {
        type: "subtitle",
        content: "Dissecação como Método de Estudo",
      },
      {
        type: "definition",
        title: "Definição de Dissecação",
        content":
          \"A dissecação é definida como o ato de cortar ordenadamente um cadáver (no caso, humano) com o intuito de conhecer a disposição de suas estruturas.",
      },
      {
        type: "text",
        content": "A Anatomia macroscópica é tradicionalmente estudada pela dissecação de peças previamente fixadas.",
      },
      {
        type: "important",
        title: "Importância Única da Dissecação",
        content":
          \"Apesar das crescentes dificuldades em obter cadáveres para dissecação, e do uso de alternativas pedagógicas como peças pré-dissecadas e meios audiovisuais, nenhum método substitui o aprendizado pela dissecação.",
      },
      {
        type: "highlight",
        content":
          \"Apenas a dissecação permite ao estudante uma visão tridimensional das estruturas orgânicas, essencial para compreender a profundidade e as relações entre artérias, nervos, veias, linfonodos, etc.",
      },
      {
        type: "text",
        content":
          "Um atlas de anatomia, por mais completo que seja, sempre representará o corpo de forma bidimensional.",
      },
      {
        type: "important",\
        content":
          \"Este livro, em sua primeira parte (Anatomia Sistêmica), foca em dados anatômicos macroscópicos fundamentais para o reconhecimento de órgãos e sistemas, com descrições mais genéricas. Os detalhes morfológicos são aprofundados na segunda parte, que descreve os segmentos corpóreos.",
      },
      {
        type: "text",
        content":
          \"É importante ressaltar que a dissecação é feita por segmentos corpóreos, e não por sistemas orgânicos isolados, pois não é possível isolar um sistema único em um cadáver.\",
      },\
      {
        type: "subtitle",
        content: "Organização do Corpo Humano",
      },
      {
        type: "text",
        content": "A organização do corpo humano segue uma hierarquia estrutural e funcional:",
      },
      {
        type: "list",
        content: [
          "Células: São as unidades biológicas mais básicas do organismo.",
          \"Tecidos: Conjuntos de células semelhantes que se organizam para desempenhar uma mesma função geral.",\
          "Órgãos: Formados pela reunião de tecidos, são instrumentos de função específica.",\
          \"Sistemas: Um conjunto de órgãos de mesma origem e estrutura, cujas funções se integram para realizar funções complexas.",
          \"Aparelhos: Reúnem dois ou três sistemas que possuem relações íntimas em seu desenvolvimento (embriologia), situação topográfica (topografia) ou função (fisiologia).",
        ],
      },
      {
        type: \"subsection",
        title: "Sistemas do Organismo Humano",
        content: "",
      },
      {
        type: "list",
        content: [
          \"Sistema Esquelético: Compreende os ossos e cartilagens, formando o arcabouço de sustentação do corpo, servindo de fixação para músculos, delimitando cavidades para proteção de órgãos e realizando funções hematopoiéticas (produção de células sanguíneas).",
          "Sistema Articular: Inclui as conexões (articulações) entre os ossos, permitindo o movimento.",
          "Sistema Muscular: Constituído pelos músculos esqueléticos (fixados aos ossos e sujeitos à vontade, por isso chamados voluntários), que são elementos ativos do movimento.",
          "Sistema Nervoso: Compreende uma parte central, uma parte periférica e uma autônoma. Atua como uma unidade funcional capaz de receber estímulos, interpretá-los e comandar reações.",
          "Sistema Tegumentar: Corresponde ao revestimento cutâneo do corpo. Inclui a pele, cabelos, pelos, unhas, glândulas sudoríparas e sebáceas, e as glândulas mamárias.",
          "Sistema Circulatório: Engloba o coração, vasos sanguíneos (artérias, veias, capilares) e o sistema linfático, responsáveis pelo transporte de sangue e linfa.",
          "Sistema Respiratório: Abrange órgãos como nariz, faringe, laringe, traqueia, brônquios e pulmões, envolvidos na troca gasosa.",
          "Sistema Digestório: Composto por boca, faringe, esôfago, estômago, intestinos, e glândulas anexas como fígado e pâncreas, essencial para a digestão e absorção de nutrientes.",
          "Sistema Urinário: Inclui rins, ureteres, bexiga e uretra, responsáveis pela produção e eliminação da urina.",
          "Sistema Genital (Reprodutor): Diferenciado em masculino e feminino, com órgãos responsáveis pela reprodução.",
          "Glândulas Endócrinas: Órgãos diversos, sem conexão direta, que drenam suas secreções (hormônios) diretamente no sangue venoso.",
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
          \"Aparelho Locomotor: Formado pelos sistemas esquelético, articular e muscular. Dada a sua integração funcional para o movimento e equilíbrio do corpo, o sistema vascular (nutrição) e o sistema nervoso (estímulos) também podem ser considerados partes do aparelho locomotor.",
          \"Aparelho Urogenital: Composto pelos sistemas urinário e genital (masculino ou feminino).",
        ],
      },
      {
        type: "important",
        content":
          "O aparelho locomotor é frequentemente afetado por lesões devido à interação constante com o ambiente.",
      },
      {
        type: \"subtitle",
        content: "Terminologia Anatômica",
      },
      {
        type: "text",
        content": \"Como toda ciência, a Anatomia possui uma linguagem própria, conhecida como Terminologia Anatômica.",
      },
      {
        type: "text",
        content":
          'No final do século XIX, com o grande acúmulo de conhecimento, diferentes "escolas anatômicas" (principalmente na Itália, França, Inglaterra e Alemanha) usavam denominações diferentes para as mesmas estruturas, resultando em mais de 20.000 termos anatômicos.',
      },
      {
        type: "highlight",\
        title: "Padronização Internacional",
        content":
          "Para padronizar e criar uma nomenclatura anatômica internacional, a primeira tentativa ocorreu em 1895, na Basileia, resultando na Basle Nomina Anatomica (B.N.A.). Essa nomenclatura foi atualizada em 1910 e 1930.",
      },
      {
        type: "important",
        content":
          \"A versão mais recente, a Terminologia Anatômica, foi oficializada em 1999 em Roma, Itália. A tradução para o português foi publicada em 2000 no Brasil e é a utilizada neste livro.",
      },
      {
        type: "text",
        content":
          'A nomenclatura anatômica busca adotar termos que não sejam apenas \"sinais para a memória", mas que também ofereçam informações ou descrições sobre a estrutura. Por isso, os epônimos (nomes de pessoas para designar coisas) foram abolidos.',
      },
      {
        type: "subsection",
        title: "Critérios para Nomenclatura\",\
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
          "Critérios mistos (ex: função e situação, como no músculo flexor superficial dos dedos)",
        ],
      },
      {
        type: "text",
        content":
          "É importante notar que alguns nomes impróprios ou não muito lógicos foram mantidos por estarem consagrados pelo uso (ex: fígado).",
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
      {
        type: "subtitle",
        content: "Divisão do Corpo Humano",
      },
      {
        type: "text",
        content": "O corpo humano é dividido em quatro partes principais:",
      },
      {
        type: "list",
        content: [
          "Cabeça: A extremidade superior do corpo.",
          "Pescoço: Conecta a cabeça ao tronco.",
          "Tronco: Compreende o tórax, abdome e pelve.",
          "Membros: Divididos em membro superior e membro inferior.",
        ],
      },
      {
        type: "subsection",
        title: "Membro Superior",
        content: "",
      },
      {
        type: "text",
        content":
          "Inclui o cíngulo do membro superior (cintura escapular), ombro, axila, braço, cotovelo, antebraço e mão (carpo, metacarpo, palma, dorso da mão, dedos da mão).",
      },
      {
        type: "subsection",
        title: "Membro Inferior",
        content": "",
      },
      {
        type: "text",
        content":
          "Inclui o cíngulo do membro inferior (cintura pélvica), nádegas, quadril, coxa, joelho, perna (parte posterior é a sura ou panturrilha) e pé (tarso, calcanhar, metatarso, planta, dorso do pé, dedos do pé).",
      },
      {
        type: "subsection",
        title: "Cavidades do Corpo",
        content": "",
      },
      {
        type: "text",
        content": "Dentro do corpo, reconhecem-se as seguintes cavidades:",
      },
      {
        type: "list",
        content: [
          "Cavidade do Crânio",
          "Cavidade Torácica",
          "Cavidade Abdominopélvica, que se subdivide em cavidade abdominal e cavidade pélvica",
        ],
      },
      {
        type: "subtitle",
        content: "Normalidade em Anatomia",
      },
      {
        type: "text",
        content": "Ao estudar o corpo humano como material de estudo, é essencial compreender alguns conceitos:",
      },
      {
        type: "subsection",
        title: "Normal",
        content": "",
      },
      {
        type: "text",
        content":
          "Em medicina, normal significa sadio. A medicina preventiva busca manter o indivíduo sadio, enquanto a curativa tenta corrigir as distorções causadas pela doença para restabelecer a saúde.",
      },
      {
        type: "subsection",
        title: "Variação Anatômica",
        content": "",
      },
      {
        type: "text",
        content":
          "Refere-se a diferenças morfológicas que não causam prejuízo funcional para o indivíduo. Por exemplo, o estômago pode ser mais alongado ou mais horizontal, mas isso não altera sua função digestiva.",
      },
      {
        type: "text",
        content":
          'Variações podem ser internas (em órgãos) ou externas (na superfície do corpo). É uma "constante" na Anatomia, significando que o que se observa em um cadáver ou figura de atlas pode não reproduzir exatamente o que se encontrará em todos os indivíduos.',
      },
      {
        type: "important",
        content":
          "As descrições anatômicas em livros seguem um padrão que representa o que ocorre na maioria dos casos.",
      },
      {
        type: "subsection",
        title: "Fatores de Variação",
        content": "",
      },
      {
        type: "list",
        content: [
          "Individuais: ex: ossos sesamoides extras",
          "Etários: ex: mudanças ósseas com a idade",
          "Sexuais: diferenças entre homens e mulheres",
          "Raciais: variações entre diferentes grupos étnicos",
        ],
      },
      {
        type: "text",
        content":
          "Modificações post-mortem: O estudo em material cadavérico deve ser comparado com o in vivo, pois a morte e processos mórbidos podem alterar características como coloração, consistência, elasticidade, forma e posição dos elementos anatômicos.",
      },
      {
        type: "subsection",
        title: "Anomalia",
        content": "",
      },
      {
        type: "text",
        content":
          "Uma variação anatômica que causa prejuízo funcional. Por exemplo, um músculo que está em um lugar diferente e não consegue contrair corretamente.",
      },
      {
        type: "subsection",
        title: "Monstruosidade",
        content": "",
      },
      {
        type: "text",
        content": "Uma anomalia de grande magnitude, que geralmente é incompatível com a vida.",
      },
      {
        type: "subtitle",
        content: "Posição Anatômica",
      },
      {
        type: "text",
        content":
          "Para padronizar as descrições anatômicas e evitar ambiguidades, adota-se uma posição padrão, denominada posição de descrição anatômica (ou posição anatômica).",
      },
      {
        type: "important",
        content":
          "Independentemente da posição real do cadáver (decúbito dorsal, ventral ou lateral), as descrições anatômicas são sempre feitas considerando o indivíduo nesta posição padronizada.",
      },
      {
        type: "subsection",
        title: "Definição da Posição Anatômica",
        content": "",
      },
      {
        type: "list",
        content: [
          "Indivíduo em posição ereta (em pé, posição ortostática ou bípede)",
          "Face voltada para a frente, olhar dirigido para o horizonte",
          "Membros superiores estendidos, aplicados ao tronco, com as palmas das mãos voltadas para a frente",
          "Membros inferiores unidos, com as pontas dos pés dirigidas para a frente",
        ],
      },
      {
        type: "subtitle",
        content: "Planos de Seção",
      },
      {
        type: "text",
        content":
          "Na posição anatômica, o corpo humano pode ser delimitado por planos tangentes à sua superfície, que formam um sólido geométrico, um paralelepípedo.",
      },
      {
        type: "subsection",
        title: "Planos de Delimitação",
        content": "",
      },
      {
        type: "list",
        content: [
          "Planos Anterior (Ventral) e Posterior (Dorsal)",
          "Planos Laterais (direito e esquerdo)",
          "Planos Superior (Cranial) e Inferior (Podálico)",
        ],
      },
      {
        type: "subsection",
        title: "Planos de Seção",
        content": "",
      },
      {
        type: "text",
        content":
          "Além dos planos de delimitação, existem os planos de secção, utilizados para orientar cortes e visualizações internas do corpo:",
      },
      {
        type: "list",
        content: [
          "Plano Mediano: É um plano sagital que divide o corpo em duas metades, direita e esquerda, semelhantes (antímeros). É um plano de simetria bilateral.",
          "Planos Sagital (Parassagital): São paralelos ao plano mediano.",
          "Planos Frontais (Coronais): São verticais e perpendiculares ao plano mediano, dividindo o corpo em partes anterior e posterior.",
          "Planos Transversais (Horizontais): São perpendiculares aos planos mediano e frontal, dividindo o corpo em partes superior e inferior.",
        ],
      },
      {
        type: "subtitle",
        content: "Termos de Posição",
      },
      {
        type: "text",
        content":
          "Para descrever a situação e posição dos órgãos, utiliza-se uma linguagem padronizada em relação aos planos:",
      },
      {
        type: "list",
        content: [
          "Medial: Mais próximo ao plano mediano.",
          "Lateral: Mais afastado do plano mediano, ou mais próximo de um dos planos laterais.",
          "Mediano: Situado no próprio plano mediano (ex: coluna vertebral, nariz, cicatriz umbilical).",
          "Anterior (Ventral): Mais próximo à superfície anterior do corpo.",
          "Posterior (Dorsal): Mais próximo à superfície posterior do corpo.",
          "Médio (Média): Indica estruturas que estão entre duas outras, que podem ser ventral e dorsal, cranial e caudal, interna e externa, ou proximal e distal.",
          "Cranial (Superior): Mais próximo ao plano superior do corpo (cabeça).",
          "Caudal (Inferior): Mais próximo ao plano inferior do corpo (pés).",
          "Proximal: Mais próximo à raiz do membro ou ponto de origem de uma estrutura.",
          "Distal: Mais afastado da raiz do membro ou ponto de origem de uma estrutura.",
        ],
      },
      {
        type: "subtitle",
        content: "Princípios de Construção do Corpo Humano",
      },
      {
        type: "text",
        content": "O corpo humano é construído seguindo alguns princípios fundamentais comuns aos vertebrados:",
      },
      {
        type: "subsection",
        title: "Antimeria",
        content": "",
      },
      {
        type: "text",
        content":
          "O plano mediano divide o corpo em duas metades, direita e esquerda (antímeros), que são semelhantes morfológica e funcionalmente. Este é o princípio da simetria bilateral.",
      },
      {
        type: "text",
        content":
          "No entanto, a simetria não é perfeita no adulto devido ao desenvolvimento e especialização dos órgãos, resultando em assimetrias (ex: assimetria das hemifaces, dextrismo). É mais notável na fase embrionária.",
      },
      {
        type: "subsection",
        title: "Metameria",
        content": "",
      },
      {
        type: "text",
        content":
          "Refere-se à superposição, no sentido longitudinal, de segmentos semelhantes, onde cada segmento corresponde a um metâmero.",
      },
      {
        type: "text",
        content":
          "Assim como a antimeria, é mais evidente na fase embrionária e se conserva no adulto em algumas estruturas, como a coluna vertebral (superposição de vértebras) e a caixa torácica (costelas superpostas com espaços intercostais).",
      },
      {
        type: "subsection",
        title: "Paquimeria",
        content": "",
      },
      {
        type: "text",
        content":
          "Princípio segundo o qual o segmento axial do corpo é constituído, esquematicamente, por dois tubos (paquímeros):",
      },
      {
        type: "list",
        content: [
          "Paquímero Anterior (Ventral): Maior, contém a maioria das vísceras, sendo também chamado de paquímero visceral.",
          "Paquímero Posterior (Dorsal): Compreende a cavidade craniana e o canal vertebral, alojando o sistema nervoso central (encéfalo na cavidade craniana e medula no canal vertebral). Por isso, é denominado paquímero neural.",
        ],
      },
      {
        type: "subsection",
        title: "Estratificação (Estratimeria)",
        content": "",
      },
      {
        type: "text",
        content":
          "O corpo humano é construído por camadas, estratos, telas ou túnicas que se superpõem. Reconhecível tanto no nível macroscópico quanto subcelular (microscópio eletrônico).",
      },
      {
        type: "text",
        content":
          "No desenvolvimento inicial, identificam-se três camadas concêntricas: ectoderma (externa), mesoderma (média) e endoderma (interna).",
      },
      {
        type: "text",
        content":
          "Macroscopicamente, podem-se observar camadas como a pele (mais superficial), tela subcutânea, fáscia muscular, músculos e ossos. Estruturas fora da fáscia muscular são ditas superficiais, e as dentro são profundas.",
      },
      {
        type: "text",
        content":
          "Também ocorre em órgãos ocos, cujas paredes são formadas por camadas superpostas (estudadas em Histologia).",
      },
      {
        type: "subsection",
        title: "Segmentação",
        content": "",
      },
      {
        type: "text",
        content":
          "Pode ser considerada um princípio de construção corpórea. Um segmento de órgão é definido como um território com irrigação e drenagem sanguínea independentes, separável e removível cirurgicamente, e identificável morfologicamente.",
      },
      {
        type: "text",
        content":
          "A expressão segmento anátomo-cirúrgico é mais comum. Exemplos incluem segmentos nos rins, baço, pâncreas, estômago e fígado.",
      },
    ],
  },
  {
    id: 2,
    title: "Sistema Esquelético",
    sections: [
      {
        type: "title",
        content: "Sistema Esquelético",
      },
      {
        type: "subtitle",
        content: "Conceito e Funções",
      },
      {
        type: "definition",
        title: "Osteologia",
        content":
          "A Osteologia é o ramo da anatomia que estuda os ossos. Em um sentido mais amplo, inclui também as formações intimamente ligadas aos ossos, formando o esqueleto.",
      },
      {
        type: "definition",
        title: "Esqueleto",
        content":
          'O termo esqueleto significa "arcabouço" e se refere ao conjunto de ossos e cartilagens que se interligam para formar a estrutura de sustentação do corpo e desempenhar diversas funções.',
      },
      {
        type: "definition",
        title: "Ossos",
        content":
          "Os ossos são definidos como peças rígidas, de número, coloração e forma variáveis, com origem, estrutura e função semelhantes, que, em conjunto, constituem o esqueleto.",
      },
      {
        type: "subsection",
        title: "Funções Importantes do Esqueleto",
        content: "",
      },
      {
        type: "list",
        content: [
          "Proteção: Abriga órgãos vitais, como o coração, pulmões e sistema nervoso central.",
          "Sustentação e Conformação do Corpo: Proporciona a forma e o suporte estrutural ao organismo.",
          "Local de Armazenamento de Minerais e Íons: Especialmente cálcio, que pode ser reabsorvido para suprir necessidades, como a calcificação fetal durante a gravidez.",
          "Sistema de Alavancas: Permite os deslocamentos do corpo (total ou parcialmente) quando movimentado pelos músculos.",
          "Local de Produção de Células do Sangue (Hematopoiese): Certos ossos contêm medula óssea, responsável pela formação de células sanguíneas.",
        ],
      },
      {
        type: "highlight",
        content":
          "O sistema esquelético, junto com o articular e o muscular, forma o aparelho locomotor. Como as estruturas desse aparelho funcionam de forma integrada e necessitam de nutrição e estímulos para movimento e equilíbrio, o sistema vascular e o sistema nervoso também são essenciais para o aparelho locomotor.",
      },
      {
        type: "subtitle",
        content: "Tipos de Esqueletos",
      },
      {
        type: "text",
        content": "O esqueleto pode ser apresentado de diferentes formas:",
      },
      {
        type: "subsection",
        title: "Por Apresentação",
        content": "",
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
        content": "",
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
        content":
          'A pele e suas camadas podem ser consideradas uma "lembrança" da condição primitiva de um exoesqueleto.',
      },
      {
        type: "subtitle",
        content: "Divisão do Esqueleto",
      },
      {
        type: "text",
        content": "O esqueleto humano é dividido em duas grandes porções:",
      },
      {
        type: "subsection",
        title: "Esqueleto Axial",
        content": "",
      },
      {
        type: "text",
        content":
          "Parte mediana que forma o eixo do corpo, composta pelos ossos da cabeça, do pescoço e do tronco (tórax e abdome).",
      },
      {
        type: "subsection",
        title: "Esqueleto Apendicular",
        content": "",
      },
      {
        type: "text",
        content": "Parte apensa ao esqueleto axial, composta pelos ossos dos membros superiores e inferiores.",
      },
      {
        type: "subtitle",
        content: "Número de Ossos",
      },
      {
        type: "highlight",
        title: "Número de Ossos no Adulto",
        content": "O número de ossos no esqueleto humano adulto é 206.",
      },
      {
        type: "text",
        content": "No entanto, esta contagem pode variar devido a diversos fatores:",
      },
      {
        type: "subsection",
        title: "Fatores de Variação",
        content": "",
      },
      {
        type: "list",
        content: [
          "Idade: No recém-nascido, o número é maior (cerca de 270). Com o desenvolvimento, alguns ossos se fundem (ex: as três porções do osso do quadril – ílio, ísquio e púbis – se fundem no adulto; as vértebras sacrais e coccígeas se fundem para formar o sacro e o cóccix).",
          "Fatores Individuais: A persistência da divisão do osso frontal no adulto ou a presença de ossos extranumerários (como os ossos sesamoides, inclusos em tendões musculares, ou os ossículos da orelha média) podem alterar a contagem total.",
          "Critérios de Contagem: Diferentes anatomistas podem usar critérios distintos para a contagem, levando a divergências nos resultados.",
        ],
      },
      {
        type: "subtitle",
        content: "Classificação por Forma",
      },
      {
        type: "text",
        content": "A classificação mais difundida dos ossos leva em consideração sua forma. Os principais tipos são:",
      },
      {
        type: "subsection",
        title: "Osso Longo",
        content": "",
      },
      {
        type: "text",
        content":
          "Predomina o comprimento sobre a largura e espessura. Possui uma parte central chamada diáfise e extremidades chamadas epífises.",
      },
      {
        type: "text",
        content":
          "Geralmente, contêm uma cavidade interna, o canal medular, que aloja a medula óssea. Por essa razão, também são chamados ossos tubulares.",
      },
      {
        type: "text",
        content":
          "Em ossos imaturos, a cartilagem epifisial (disco cartilaginoso entre epífise e diáfise) é responsável pelo crescimento em comprimento.",
      },
      {
        type: "example",
        content": "Exemplos: fêmur, tíbia, úmero, rádio, falanges.",
      },
      {
        type: "subsection",
        title: "Osso Plano",
        content": "",
      },
      {
        type: "text",
        content":
          "Apresenta comprimento e largura predominantes sobre a espessura. São formados por duas camadas delgadas de osso compacto, com osso esponjoso no meio.",
      },
      {
        type: "text",
        content": "Nos ossos do crânio, essa camada esponjosa é chamada díploe.",
      },
      {
        type: "example",
        content": "Exemplos: escápula, ossos do crânio (frontal, parietal, occipital).",
      },
      {
        type: "subsection",
        title: "Osso Curto",
        content": "",
      },
      {
        type: "text",
        content": "Possui comprimento, largura e espessura equivalentes.",
      },
      {
        type: "example",
        content": "Exemplos: ossos do carpo (punho) e tarso (tornozelo).",
      },
      {
        type: "subsection",
        title: "Osso Irregular",
        content": "",
      },
      {
        type: "text",
        content": "Não apresenta uma forma geométrica definida.",
      },
      {
        type: "example",
        content": "Exemplos: vértebras, sacro, cóccix.",
      },
      {
        type: "subsection",
        title: "Osso Sesamóide",
        content": "",
      },
      {
        type: "text",
        content": "Ossos pequenos, arredondados, que se desenvolvem no interior de tendões musculares.",
      },
      {
        type: "example",
        content": "O maior exemplo é a patela, mas também ocorrem nos pés e mãos.",
      },
      {
        type: "subsection",
        title: "Osso Pneumático",
        content": "",
      },
      {
        type: "text",
        content": "Apresenta cavidades cheias de ar (seios), o que os torna mais leves.",
      },
      {
        type: "example",
        content": "Exemplos: maxila, frontal, esfenóide, etmóide.",
      },
      {
        type: "subtitle",
        content: "Substância Óssea",
      },
      {
        type: "text",
        content": "O estudo microscópico do tecido ósseo distingue dois tipos de substância óssea:",
      },
      {
        type: "subsection",
        title: "Substância Óssea Compacta",
        content": "",
      },
      {
        type: "text",
        content":
          "Densamente organizada, forma a camada externa de todos os ossos e a maior parte da diáfise dos ossos longos. Confere rigidez.",
      },
      {
        type: "subsection",
        title: "Substância Óssea Esponjosa (Trabecular)",
        content": "",
      },
      {
        type: "text",
        content":
          "Composta por trabéculas ósseas que formam uma rede de espaços, predominante nas epífises dos ossos longos e no interior dos ossos planos. A camada esponjosa nos ossos do crânio é chamada de díploe.",
      },
      {
        type: "important",
        content":
          "Ambos os tipos são compostos pelos mesmos elementos (células ósseas como osteoblastos e osteócitos, fibras colágenas e substância fundamental impregnada de sais inorgânicos, principalmente fosfato e carbonato de cálcio), mas com disposição diferente.",
      },
      {
        type: "text",
        content":
          "As fibras colágenas conferem resistência e elasticidade, enquanto os sais minerais são responsáveis pela rigidez.",
      },
      {
        type: "subtitle",
        content: "Periósteo",
      },
      {
        type: "definition",
        title: "Periósteo",
        content":
          "Os ossos são revestidos por uma camada de tecido conjuntivo especializado chamada periósteo, exceto nas superfícies articulares. As superfícies articulares são geralmente revestidas por cartilagem hialina (cartilagem articular).",
      },
      {
        type: "text",
        content": "O periósteo possui dois folhetos:",
      },
      {
        type: "list",
        content: [
          "Superficial: Mais externo.",
          "Profundo: Em contato direto com a superfície óssea, também chamado de camada osteogênica. Suas células se transformam em células ósseas (osteócitos), promovendo o espessamento do osso por aposição (adição de osso neoformado nas superfícies livres).",
        ],
      },
      {
        type: "important",
        content":
          "O osso está em contínuo processo de deposição e reabsorção, o que permite o remodelamento de sua forma.",
      },
      {
        type: "warning",
        content":
          "O periósteo é ricamente vascularizado e a sua remoção pode comprometer a nutrição do osso, levando à sua morte (necrose).",
      },
      {
        type: "subtitle",
        content: "Elementos da Superfície Óssea",
      },
      {
        type: "text",
        content":
          "A superfície dos ossos apresenta diversas formações, como depressões, saliências e aberturas, que são elementos descritivos importantes para o seu estudo.",
      },
      {
        type: "subsection",
        title: "Saliências",
        content": "",
      },
      {
        type: "text",
        content":
          "Podem servir para articular ossos entre si ou para a fixação de músculos, ligamentos, cartilagens, etc. As superfícies destinadas à articulação são chamadas articulares, sendo lisas e revestidas por cartilagem.",
      },
      {
        type: "example",
        content":
          "Exemplos de saliências: cabeças, côndilos, cristas, eminências, tubérculos, tuberosidades, processos, linhas, espinhas, trócleas.",
      },
      {
        type: "subsection",
        title: "Depressões",
        content": "",
      },
      {
        type: "text",
        content": "Podem ser articulares ou não.",
      },
      {
        type: "example",
        content": "Exemplos: fossas, fossetas, impressões, sulcos, recessos.",
      },
      {
        type: "subsection",
        title: "Aberturas",
        content": "",
      },
      {
        type: "text",
        content": "Geralmente destinadas à passagem de nervos ou vasos.",
      },
      {
        type: "example",
        content": "Exemplos: forames, meatos, óstios, poros.",
      },
      {
        type: "text",
        content":
          "Os critérios para essas denominações nem sempre são lógicos, sendo muitas delas mantidas pelo uso consagrado.",
      },
      {
        type: "subtitle",
        content: "Nutrição dos Ossos",
      },
      {
        type: "text",
        content":
          "Os ossos são altamente vascularizados, o que é essencial para sua função hematopoiética e seu desenvolvimento lento e contínuo.",
      },
      {
        type: "text",
        content": "As artérias do periósteo penetram no osso, irrigando-o e distribuindo-se na medula óssea.",
      },
      {
        type: "important",
        content": "Por essa razão, um osso desprovido de periósteo deixa de ser nutrido e morre.",
      },
      {
        type: "subtitle",
        content: "Considerações Clínicas",
      },
      {
        type: "text",
        content":
          "Os ossos, especialmente os dos membros, são frequentemente acometidos por fraturas, que podem ser causadas por traumas (fraturas traumáticas) ou por enfraquecimento ósseo (fraturas espontâneas ou patológicas).",
      },
      {
        type: "important",
        title: "Osteoporose",
        content":
          "A osteoporose, uma doença caracterizada pela redução da massa óssea, torna os ossos mais frágeis e suscetíveis a fraturas.",
      },
      {
        type: "text",
        content":
          "Exames como a densitometria óssea são recomendados para diagnóstico e acompanhamento, especialmente em mulheres após os 40 anos.",
      },
    ],
  },
  {
    id: 3,
    title: "Articulações",
    sections: [
      {
        type: "title",
        content: "Articulações",
      },
      {
        type: "subtitle",
        content: "Conceito de Articulação",
      },
      {
        type: "definition",
        title: "Conceito de Articulação",
        content":
          "As articulações são as uniões entre os ossos que constituem o esqueleto. O objetivo dessa união vai além de simplesmente colocar os ossos em contato, visando principalmente permitir a mobilidade.",
      },
      {
        type: "highlight",
        content":
          "Por isso, o sistema articular, em conjunto com o esquelético e o muscular, forma o aparelho locomotor.",
      },
      {
        type: "text",
        content":
          "A amplitude de movimento de uma articulação é determinada pela sua morfologia e pelos elementos que se interpõem entre as peças ósseas que se articulam.",
      },
      {
        type: "subtitle",
        content: "Classificação das Articulações",
      },
      {
        type: "text",
        content":
          "As articulações são classificadas com base no tipo de material que se interpõe entre as superfícies ósseas:",
      },
      {
        type: "list",
        content: [
          "Articulações Fibrosas: O elemento interposto é o tecido conjuntivo fibroso",
          "Articulações Cartilagíneas: O tecido que se interpõe é a cartilagem",
          "Articulações Sinoviais: Caracterizam-se pela presença de uma cavidade articular",
        ],
      },
      {
        type: "subtitle",
        content: "Articulações Fibrosas",
      },
      {
        type: "text",
        content":
          "Neste tipo de articulação, o elemento interposto é o tecido conjuntivo fibroso. Caracterizam-se por terem mobilidade extremamente reduzida, embora o tecido conjuntivo confira uma certa elasticidade, como no crânio.",
      },
      {
        type: "subsection",
        title: "Tipos de Articulações Fibrosas",
        content": "",
      },
      {
        type: "subsection",
        title: "Sindesmoses",
        content": "",
      },
      {
        type: "text",
        content":
          "Possuem uma grande quantidade de tecido conjuntivo que pode formar um ligamento interósseo, como na união entre a tíbia e a fíbula no antebraço (membrana interóssea).",
      },
      {
        type: "subsection",
        title: "Suturas",
        content": "",
      },
      {
        type: "text",
        content": "Articulações fibrosas encontradas predominantemente no crânio. Dividem-se em:",
      },
      {
        type: "list",
        content: [
          "Sutura Dental: Possui uma série de projeções em forma de dentes que se encaixam.",
          "Sutura Escamosa: Uma superfície óssea se sobrepõe à outra.",
          "Esquindilese: Um osso se encaixa em um sulco ou fenda de outro osso.",
          "Sutura Plana: Apresenta margens retas ou rugosas que se encontram.",
          "Gomfose: É a articulação entre o dente e o alvéolo dentário.",
        ],
      },
      {
        type: "important",
        content":
          "A fusão óssea completa de uma sutura é chamada de sinostose. No crânio do recém-nascido, os ossos são mais separados e o tecido conjuntivo interposto é mais abundante, formando os fontículos (fontanelas), que se fecham com o crescimento.",
      },
      {
        type: "subtitle",
        content: "Articulações Cartilagíneas",
      },
      {
        type: "text",
        content": "Neste tipo, o tecido que se interpõe é a cartilagem. Existem dois tipos:",
      },
      {
        type: "subsection",
        title: "Sincondroses",
        content": "",
      },
      {
        type: "text",
        content":
          "As peças ósseas são unidas por cartilagem hialina. Permitem uma mobilidade muito limitada e tendem a se ossificar completamente com a idade.",
      },
      {
        type: "example",
        content": "Exemplo: a união entre a primeira costela e o esterno.",
      },
      {
        type: "subsection",
        title: "Sínfises",
        content": "",
      },
      {
        type: "text",
        content":
          "As superfícies ósseas são revestidas por uma fina camada de cartilagem hialina e unidas por um disco de fibrocartilagem. Possuem uma mobilidade um pouco maior que as sincondroses.",
      },
      {
        type: "example",
        content": "Exemplo: a sínfise púbica e os discos intervertebrais.",
      },
      {
        type: "subtitle",
        content: "Articulações Sinoviais",
      },
      {
        type: "text",
        content":
          "São as articulações que permitem a maior amplitude de movimento. Caracterizam-se pela presença de uma cavidade articular, onde se encontra o líquido sinovial, e pela presença de uma cápsula articular.",
      },
      {
        type: "subsection",
        title: "Características das Articulações Sinoviais",
        content": "",
      },
      {
        type: "list",
        content: [
          "Cápsula Articular: É uma espécie de manguito que envolve a articulação, prendendo-se nos ossos que se articulam. Ajuda a manter a união das peças.",
          "Cavidade Articular: Um espaço virtual dentro da cápsula, preenchido pelo líquido sinovial.",
          "Sinóvia (Líquido Sinovial): O lubrificante natural da articulação, que permite o deslizamento das superfícies articulares com mínimo atrito e desgaste.",
        ],
      },
      {
        type: "subsection",
        title: "Superfícies Articulares e seu Revestimento",
        content": "",
      },
      {
        type: "text",
        content":
          "As superfícies ósseas que entram em contato em uma articulação sinovial são revestidas por cartilagem hialina (cartilagem articular) em toda a sua extensão. Esta cartilagem representa a porção do osso que não foi invadida pela ossificação, e é responsável pela superfície lisa, polida e esbranquiçada que facilita o movimento.",
      },
      {
        type: "subsection",
        title: "Meios de União das Articulações Sinoviais",
        content": "",
      },
      {
        type: "text",
        content":
          "Além da cápsula articular, os ligamentos são importantes meios de união e estabilização das articulações sinoviais. Os ligamentos podem ser:",
      },
      {
        type: "list",
        content: [
          "Capsulares: Fibras que reforçam a cápsula articular.",
          "Extracapsulares: Situados fora da cápsula articular.",
          "Intracapsulares: Localizados dentro da cápsula articular (ex: ligamentos cruzados do joelho).",
        ],
      },
      {
        type: "subtitle",
        content: "Movimentos Corporais",
      },
      {
        type: "text",
        content":
          "Os movimentos de uma articulação sinovial são determinados por eixos de movimento, que são sempre perpendiculares ao plano no qual o movimento se realiza.",
      },
      {
        type: "subsection",
        title: "Movimentos de Deslizamento",
        content": "",
      },
      {
        type: "text",
        content":
          "Ocorrem em articulações com superfícies planas ou ligeiramente curvas, onde uma superfície desliza sobre a outra (ex: articulações intercuneiformes).",
      },
      {
        type: "subsection",
        title: "Movimentos Angulares",
        content": "",
      },
      {
        type: "text",
        content": "Diminuem ou aumentam o ângulo entre os segmentos que se articulam. Incluem:",
      },
      {
        type: "list",
        content: [
          "Flexão: Diminuição do ângulo (ex: dobrar o cotovelo).",
          "Extensão: Aumento do ângulo (ex: esticar o cotovelo).",
          "Abdução: Afastamento de um segmento do plano mediano do corpo.",
          "Adução: Aproximação de um segmento do plano mediano do corpo.",
          "Flexão Dorsal (Dorsiflexão): Flexão na articulação do tornozelo, aproximando o dorso do pé da perna.",
          "Flexão Plantar (Flexão Volar): Flexão na articulação do tornozelo, afastando o dorso do pé da perna.",
        ],
      },
      {
        type: "subsection",
        title: "Rotação",
        content": "",
      },
      {
        type: "text",
        content":
          "Movimento em que o segmento gira em torno de um eixo longitudinal (vertical). Pode ser rotação medial (face anterior do membro gira em direção ao plano mediano) ou rotação lateral (movimento oposto).",
      },
      {
        type: "subsection",
        title: "Circundução",
        content": "",
      },
      {
        type: "text",
        content":
          "Combinação sequencial de flexão, abdução, extensão e adução, resultando em um movimento circular (ex: ombro, quadril).",
      },
      {
        type: "important",
        content":
          "É importante diferenciar movimento ativo (realizado pelo próprio indivíduo) de movimento passivo (realizado pelo examinador), sendo que o movimento passivo pode ter maior amplitude.",
      },
      {
        type: "subtitle",
        content: "Classificação Funcional",
      },
      {
        type: "text",
        content": "Essa classificação baseia-se no número de eixos de movimento que a articulação permite:",
      },
      {
        type: "list",
        content: [
          "Monoaxiais: Realizam movimentos em torno de um único eixo (ex: gínglimo, trocoide).",
          "Biaxiais: Permitem movimentos em torno de dois eixos (ex: condilar, selar, elipsoide).",
          "Triaxiais: Permitem movimentos em torno de três eixos, incluindo flexão, extensão, abdução, adução e rotação (ex: esferoide, como as articulações do ombro e do quadril).",
        ],
      },
      {
        type: "subtitle",
        content: "Classificação Morfológica",
      },
      {
        type: "text",
        content": "Baseia-se na forma das superfícies articulares:",
      },
      {
        type: "list",
        content: [
          "Plana: Superfícies planas que permitem pequenos movimentos de deslizamento (ex: entre ossos do carpo, tarso e entre corpos vertebrais).",
          'Gínglimo ("em dobradiça"): Permite flexão e extensão (ex: articulação do cotovelo, joelho, interfalângicas).',
          "Trocoide: Superfície em forma de pivô, permitindo rotação (ex: articulações radioulnares proximal e distal).",
          "Condilar (Elipsóidea): Superfície oval convexa encaixa-se em uma côncava, permitindo flexão, extensão, abdução e adução (ex: articulação radiocarpal).",
          'Selar ("em sela de cavalo"): Cada superfície tem uma área côncava e uma convexa, permitindo movimentos biaxiais (ex: articulação carpometacarpal do polegar).',
          'Esferoide ("esférica"): Superfície esférica que se encaixa em uma cavidade côncava, permitindo movimentos triaxiais (ex: articulações do ombro e quadril).',
        ],
      },
      {
        type: "subtitle",
        content: "Vasos e Nervos Articulares",
      },
      {
        type: "subsection",
        title: "Suprimento Sanguíneo (Artérias)",
        content": "",
      },
      {
        type: "text",
        content":
          "Artérias que alcançam as epífises dos ossos fornecem suprimento sanguíneo superficial, penetrando no osso próximo à linha de inserção da cápsula articular e formando uma rede vascular periarticular. A membrana sinovial é particularmente rica em vascularização, com uma rede capilar.",
      },
      {
        type: "subsection",
        title: "Drenagem Venosa",
        content": "",
      },
      {
        type: "text",
        content": "As veias geralmente seguem o trajeto das artérias.",
      },
      {
        type: "subsection",
        title: "Drenagem Linfática",
        content": "",
      },
      {
        type: "text",
        content": "A membrana sinovial é provida de um plexo linfático.",
      },
      {
        type: "subsection",
        title: "Inervação (Nervos)",
        content": "",
      },
      {
        type: "text",
        content":
          "Os nervos articulares contêm fibras sensitivas e autônomas. As fibras sensitivas são, em parte, proprioceptivas (informam sobre a posição e movimento da articulação) e, em parte, terminações para a sensibilidade dolorosa.",
      },
      {
        type: "subtitle",
        content: "Considerações Finais",
      },
      {
        type: "text",
        content":
          "A forma das superfícies articulares, juntamente com os meios de união, influencia diretamente a capacidade de movimento de uma articulação.",
      },
      {
        type: "text",
        content":
          "Em animais quadrúpedes, por exemplo, a ausência de clavícula pode reduzir a amplitude de movimento em certas articulações (como a do ombro), onde os movimentos de flexão e extensão predominam.",
      },
      {
        type: "text",
        content":
          "No ser humano, os membros inferiores são primariamente para sustentação e locomoção, enquanto os membros superiores são adaptados para a apreensão e gesticulação, o que justifica a maior mobilidade da articulação do ombro em comparação com a do quadril.",
      },
      {
        type: "important",
        title: "Considerações Clínicas",
        content":
          "A artroscopia é um método diagnóstico mais eficiente do que a simples radiografia para visualizar lesões articulares. O uso de cortisona em injeções intra-articulares para tratar artrites (infecções ou inflamações da articulação) tem sido questionado, pois estudos demonstraram que corticoesteroides podem provocar lesões degenerativas na cartilagem articular.",
      },
    ],
  },
  {
    id: 4,
    title: "Sistema Muscular",
    sections: [
      {
        type: "title",
        content: "Sistema Muscular",
      },
      {
        type: "subtitle",
        content: "Conceito e Funções",
      },
      {
        type: "text",
        content":
          "A capacidade de reagir a modificações do meio ambiente, geralmente por contração, é uma propriedade fundamental do protoplasma animal. Essa capacidade de contração é a base do movimento.",
      },
      {
        type: "definition",
        title: "Miologia e Esplancnologia",
        content":
          "O estudo dos músculos é feito pela Miologia. No entanto, a Miologia em sentido estrito foca nos músculos esqueléticos, que são os que se fixam aos ossos e são responsáveis pela alteração da distância entre as extremidades fixadas por contração. Os músculos encontrados nas vísceras são estudados na Esplancnologia.",
      },
      {
        type: "highlight",
        content":
          "No aparelho locomotor, os músculos são os elementos ativos do movimento, enquanto os ossos (alavancas biológicas) são elementos passivos.",
      },
      {
        type: "text",
        content":
          "Além de permitir o movimento, a musculatura também assegura a estática do corpo humano, mantendo as peças ósseas unidas e determinando a posição e a postura do esqueleto.",
      },
      {
        type: "subtitle",
        content: "Variedades de Músculos",
      },
      {
        type: "text",
        content":
          "A atividade muscular é controlada pelo sistema nervoso, e cada músculo possui seu próprio nervo motor, que se ramifica para controlar todas as células musculares. As terminações microscópicas desses ramos formam a placa motora.",
      },
      {
        type: "text",
        content":
          "Existem três tipos principais de músculos, que se diferenciam por suas características histológicas (visíveis ao microscópio) e tipo de controle nervoso:",
      },
      {
        type: "subsection",
        title: "Músculos Estriados Esqueléticos",
        content": "",
      },
      {
        type: "text",
        content":
          'São voluntários, ou seja, estão sujeitos ao controle da vontade. Possuem estriações transversais visíveis histologicamente e estão fixados ao esqueleto por pelo menos uma extremidade. São os músculos que compõem a maior parte da "carne" do corpo.',
      },
      {
        type: "subsection",
        title: "Músculos Lisos (Não Estriados)",
        content": "",
      },
      {
        type: "text",
        content":
          "São involuntários, ou seja, seu controle não depende da vontade. Não apresentam estriações visíveis. São encontrados na parede das vísceras de diversos sistemas (ex: digestório, circulatório, urinário), como no tubo digestório ou nas paredes de vasos sanguíneos.",
      },
      {
        type: "subsection",
        title: "Músculo Cardíaco",
        content": "",
      },
      {
        type: "text",
        content":
          "É o músculo que forma o coração. Histologicamente, assemelha-se ao músculo estriado por possuir estriações, mas funcionalmente atua como um músculo involuntário. Possui características próprias que o diferenciam dos outros dois tipos.",
      },
      {
        type: "text",
        content":
          "A estrutura microscópica dos músculos é complexa e é estudada em Histologia. No entanto, algumas divisões do tecido conjuntivo que envolvem as fibras musculares são importantes:",
      },
      {
        type: "list",
        content: [
          "Endomísio: Tecido conjuntivo delicado que envolve cada fibra muscular individualmente.",
          "Perimísio: Tecido conjuntivo que envolve grupos de fibras musculares, agrupadas em fascículos.",
          "Epimísio: Bainha conjuntiva que envolve grupos de fascículos, formando um músculo completo.",
        ],
      },
      {
        type: "subtitle",
        content: "Componentes Anatômicos de um Músculo Esquelético",
      },
      {
        type: "text",
        content": "Um músculo esquelético típico possui uma porção média e extremidades:",
      },
      {
        type: "subsection",
        title: "Ventre Muscular",
        content": "",
      },
      {
        type: "text",
        content":
          'É a porção média, carnosa e vermelha no indivíduo vivo (conhecida como "carne"). Predominam as fibras musculares, sendo a parte ativa e contrátil do músculo. Em repouso, o ventre muscular apresenta tônus, ou seja, um certo grau de contração permanente.',
      },
      {
        type: "subsection",
        title: "Tendões",
        content": "",
      },
      {
        type: "text",
        content":
          "São as extremidades do músculo, formadas por tecido conjuntivo fibroso, que se prendem aos ossos. Apresentam coloração esbranquiçada e não são contráteis. Podem ter formas variadas: cilíndricos, laminares (aponeuroses), ou em bainha.",
      },
      {
        type: "subtitle",
        content: "Fáscia Muscular",
      },
      {
        type: "definition",
        title: "Fáscia Muscular",
        content":
          "A fáscia muscular é uma lâmina de tecido conjuntivo que envolve cada músculo ou grupos de músculos. Sua espessura varia conforme a função do músculo.",
      },
      {
        type: "subsection",
        title: "Funções da Fáscia",
        content": "",
      },
      {
        type: "list",
        content: [
          "Função de Contenção: Atua como uma bainha elástica de contenção, essencial para que os músculos possam exercer eficientemente seu trabalho de tração ao se contrair.",
          "Função de Proteção: Também protege os músculos contra agentes externos, como traumas.",
          "Origem e Inserção: Em alguns casos, a fáscia pode ser muito espessada e contribuir para prender o músculo ao esqueleto, servindo como ponto de origem ou inserção.",
        ],
      },
      {
        type: "subtitle",
        content: "Trabalho Muscular",
      },
      {
        type: "text",
        content":
          "O trabalho muscular é o resultado da contração das fibras musculares, gerando movimento. Os músculos esqueléticos atuam sobre os ossos, que funcionam como alavancas biológicas.",
      },
      {
        type: "definition",
        title: "Alavanca",
        content": "Uma alavanca é um sistema mecânico que permite amplificar ou modificar uma força.",
      },
      {
        type: "text",
        content":
          "Existem três gêneros de alavancas, baseados na posição relativa do ponto de apoio (fulcro), da potência (força muscular) e da resistência (carga a ser movida):",
      },
      {
        type: "subsection",
        title: "Alavanca de Gênero I",
        content": "",
      },
      {
        type: "text",
        content":
          "O ponto de apoio está entre a potência e a resistência (ex: o balanço da cabeça sobre a coluna vertebral).",
      },
      {
        type: "subsection",
        title: "Alavanca de Gênero II",
        content": "",
      },
      {
        type: "text",
        content":
          "A resistência está entre o ponto de apoio e a potência (ex: ao levantar o corpo nas pontas dos pés, o apoio é a articulação dos dedos, a resistência é o peso do corpo e a potência é a contração da panturrilha).",
      },
      {
        type: "subsection",
        title: "Alavanca de Gênero III",
        content": "",
      },
      {
        type: "text",
        content":
          "A potência está entre o ponto de apoio e a resistência (ex: a flexão do antebraço no cotovelo, onde o apoio é o cotovelo, a potência é o músculo bíceps e a resistência é o peso do antebraço e/ou uma carga na mão).",
      },
      {
        type: "highlight",
        content": "A maioria das alavancas biológicas é do gênero III.",
      },
      {
        type: "text",
        content":
          "Nos músculos cardíacos e lisos, geralmente situados nas paredes de vísceras ocas ou tubulares, a contração resulta na redução do volume ou diâmetro do órgão, impulsionando seu conteúdo (ex: expulsão de sangue dos ventrículos do coração, progressão do conteúdo intestinal).",
      },
      {
        type: "subtitle",
        content: "Origem e Inserção Muscular",
      },
      {
        type: "text",
        content":
          "Por razões didáticas, convencionou-se chamar origem à extremidade do músculo presa à peça óssea que não se desloca (o ponto fixo), e inserção à extremidade do músculo presa à peça óssea que se desloca (o ponto móvel).",
      },
      {
        type: "text",
        content":
          "No entanto, essa convenção pode ser flexível. Por exemplo, no músculo braquial, ao flexionar o antebraço, sua extremidade umeral é a origem e a ulnar é a inserção. Mas se o antebraço estiver fixo e o músculo contrair para flexionar o úmero, a extremidade ulnar se torna a origem e a umeral a inserção.",
      },
      {
        type: "important",
        content":
          'Por isso, a Terminologia Anatômica oficial não considera o termo "origem", preferindo o termo "cabeça" para designar a fixação do músculo ao esqueleto, reconhecendo que o músculo é fixado pelas suas duas extremidades.',
      },
      {
        type: "subtitle",
        content: "Classificação dos Músculos",
      },
      {
        type: "text",
        content":
          "Os músculos podem ser classificados de diversas maneiras, e nem sempre há consenso entre os anatomistas.",
      },
      {
        type: "subsection",
        title: "Quanto à Forma do Músculo e ao Arranjo de suas Fibras",
        content": "",
      },
      {
        type: "text",
        content":
          "A forma do músculo é variada e muitas vezes dá nome ao músculo (ex: músculo romboide maior, músculo trapézio, músculo piramidal, músculo redondo maior, músculo pronador quadrado).",
      },
      {
        type: "list",
        content: [
          "Longos: Predomina o comprimento (ex: bíceps braquial).",
          "Largos: Possuem comprimento e largura acentuados (ex: diafragma).",
          "Curtos: Possuem pouca extensão em comprimento (ex: músculos da mão).",
          "Anelares: Dispostos em anel (ex: esfíncteres).",
          "Unipenados: Fibras se inserem diagonalmente em um lado do tendão (ex: músculo semimembranáceo).",
          "Bipenados: Fibras se inserem diagonalmente em ambos os lados do tendão (ex: músculo reto femoral).",
          "Multipenados: Fibras se inserem diagonalmente em múltiplos tendões (ex: músculo deltóide).",
          "Digástricos: Possuem dois ventres musculares (ex: músculo digástrico).",
          "Poligástricos: Possuem múltiplos ventres musculares (ex: músculo reto do abdome).",
        ],
      },
      {
        type: "subsection",
        title: "Quanto à Ação",
        content": "",
      },
      {
        type: "text",
        content": "Os músculos são frequentemente nomeados por suas ações principais:",
      },
      {
        type: "list",
        content: [
          "Flexores: Realizam flexão (ex: flexor do antebraço).",
          "Extensores: Realizam extensão.",
          "Abdutores: Realizam abdução (afastamento).",
          "Adutores: Realizam adução (aproximação).",
          "Rotadores: Realizam rotação (interna ou externa).",
          "Pronadores: Realizam pronação (ex: pronação do antebraço).",
          "Supinadores: Realizam supinação.",
          "Tensores: Aumentam a tensão.",
          "Depressores/Abaixadores: Abaixam uma estrutura.",
          "Levantadores/Elevadores: Elevam uma estrutura.",
          "Orbicular/Esfíncter: Músculos em anel que fecham aberturas.",
          "Dilatadores: Abridores.",
          "Retratores/Protratores: Movem uma estrutura para trás ou para frente.",
        ],
      },
      {
        type: "subtitle",
        content: "Ação Muscular",
      },
      {
        type: "text",
        content":
          "A análise de um movimento, mesmo os mais simples, é complexa, pois envolve a ação conjunta de vários músculos, um processo chamado coordenação motora.",
      },
      {
        type: "text",
        content": "Os músculos que atuam em um movimento podem ser classificados em:",
      },
      {
        type: "list",
        content: [
          "Agonistas (ou Motores Primários): São os músculos que realizam a ação principal do movimento.",
          "Antagonistas: Opostos aos agonistas, realizam o movimento inverso ou se relaxam para permitir a ação do agonista. Por exemplo, os flexores da mão são antagonistas dos extensores.",
          "Sinergistas: Músculos que auxiliam o agonista na realização do movimento ou que estabilizam uma articulação para que o agonista possa atuar com mais eficácia. O conceito não é unânime entre os anatomistas.",
          "Fixadores (ou Estabilizadores): Músculos que estabilizam as partes proximais de um membro ou o tronco, proporcionando uma base firme para o movimento da parte distal. O conceito também não é unânime.",
        ],
      },
      {
        type: "subtitle",
        content: "Órgãos Acessórios do Sistema Muscular",
      },
      {
        type: "text",
        content":
          "Além dos próprios músculos, existem estruturas que os auxiliam em suas funções e são consideradas órgãos acessórios do sistema muscular:",
      },
      {
        type: "list",
        content: [
          "Fáscias: Envolvem músculos individuais ou grupos musculares, mantendo-os em posição e servindo como origem ou inserção.",
          "Aponeuroses: Tendões largos e laminares que podem servir para fixação muscular ou como revestimento.",
        ],
      },
      {
        type: "subsection",
        title: "Bainhas Fibrosas e Sinoviais dos Tendões",
        content": "",
      },
      {
        type: "text",
        content":
          "Estruturas que envolvem os tendões, especialmente onde há atrito significativo (ex: punho, tornozelo). A bainha sinovial é uma estrutura de dupla camada, com uma lâmina interna (visceral) que envolve o tendão e uma lâmina externa (parietal) que reveste a estrutura adjacente.",
      },
      {
        type: "text",
        content":
          "O espaço entre as lâminas contém líquido sinovial para lubrificação. A conexão entre as lâminas é feita pelo mesotendão, por onde vasos sanguíneos chegam ao tendão.",
      },
      {
        type: "important",
        content": "A integridade do mesotendão é crucial em cirurgias para prevenir aderências fibróticas.",
      },
      {
        type: "subsection",
        title: "Bolsas Sinoviais (Bursas)",
        content": "",
      },
      {
        type: "text",
        content":
          "Pequenas bolsas revestidas por membrana sinovial que contêm líquido sinovial e atuam como amortecedores, facilitando o deslizamento entre tendões, músculos, ossos e pele, prevenindo atrito.",
      },
      {
        type: "subtitle",
        content: "Vasos e Nervos dos Músculos",
      },
      {
        type: "text",
        content":
          "A atividade muscular é controlada pelo sistema nervoso. Nenhum músculo pode se contrair sem um estímulo nervoso.",
      },
      {
        type: "important",
        content":
          "Se o nervo motor de um músculo for seccionado, o músculo deixa de funcionar e entra em atrofia. A atrofia muscular também pode ocorrer devido a imobilização prolongada, que além de impedir o movimento, reduz o suprimento sanguíneo.",
      },
      {
        type: "text",
        content":
          "Para realizar seu trabalho mecânico, os músculos necessitam de um suprimento constante de oxigênio e nutrientes, garantido por uma rica vascularização. As artérias geralmente penetram o músculo pela sua face profunda, onde estão mais protegidas.",
      },
      {
        type: "text",
        content":
          "O conhecimento dos pontos de origem e penetração dos ramos musculares de um nervo é crucial para o diagnóstico preciso de lesões (ex: fraturas), escolha de abordagem cirúrgica e previsão de recuperação e reabilitação.",
      },
      {
        type: "subtitle",
        content: "Eletromiografia",
      },
      {
        type: "definition",
        title: "Eletromiografia",
        content":
          "A eletromiografia é um método utilizado para registrar os tipos de atividade elétrica muscular. Eletrodos são colocados no interior do músculo ou sobre a pele que o recobre para captar os sinais elétricos.",
      },
      {
        type: "text",
        content": "Essa técnica é importante para estudar a função muscular e diagnosticar distúrbios neuromusculares.",
      },
    ],
  },
  {
    id: 5,
    title: "Sistema Nervoso",
    sections: [
      {
        type: "title",
        content: "Sistema Nervoso",
      },
      {
        type: "subtitle",
        content: "Conceito e Funções",
      },
      {
        type: "definition",
        title: "Sistema Nervoso",
        content":
          "O Sistema Nervoso (SN) é um sistema especializado que controla e coordena as funções de todos os sistemas do organismo. Sua importância é tamanha que permite a integração do indivíduo no meio ambiente.",
      },
      {
        type: "text",
        content":
          "O SN é responsável por receber estímulos, interpretá-los e comandar reações a esses estímulos. No ser humano, o SN é altamente desenvolvido, respondendo também por fenômenos psíquicos elaborados.",
      },
      {
        type: "highlight",
        content":
          "O SN funciona com base em um binômio estímulo-reação, que pode ser expandido para estímulo-interpretação-reação. A interpretação é crucial, pois nem toda reação é um simples reflexo.",
      },
      {
        type: "important",
        title: "Neuroanatomia",
        content":
          "O estudo do SN, a Neuroanatomia, é uma disciplina separada no currículo médico devido à sua complexidade e importância.",
      },
      {
        type: "subtitle",
        content: "Tecido Nervoso",
      },
      {
        type: "text",
        content":
          "O tecido nervoso é o principal componente do SN e é estudado em detalhes na Histologia. Basicamente, ele compreende dois tipos de células:",
      },
      {
        type: "subsection",
        title: "Tipos de Células do Tecido Nervoso",
        content": "",
      },
      {
        type: "list",
        content: [
          "Neurônios: São as unidades morfofuncionais do SN. Possuem a capacidade de receber, processar e transmitir informações através de impulsos nervosos.",
          "Células Gliais (Neuroglia): Ocupam os espaços entre os neurônios e desempenham funções de sustentação, revestimento ou isolamento, modulação da atividade neuronal e defesa.",
        ],
      },
      {
        type: "subtitle",
        content: "O Neurônio",
      },
      {
        type: "definition",
        title: "O Neurônio - Unidade Morfofuncional",
        content": "A maioria dos neurônios possui três regiões principais, cada uma com funções especializadas:",
      },
      {
        type: "subsection",
        title: "Partes do Neurônio",
        content": "",
      },
      {
        type: "list",
        content: [
          "Corpo Celular (Pericário): É o centro metabólico do neurônio, responsável pela síntese de todas as proteínas neuronais e pela maioria dos processos de degradação e renovação dos constituintes celulares.",
          "Dendritos: Geralmente curtos e ramificados como os galhos de uma árvore (do grego déndron = árvore). São especializados em receber estímulos.",
          "Axônio: É um prolongamento longo e fino que se origina do corpo celular ou de um dendrito principal, em uma região chamada cone de implantação. Pode atingir mais de 1 metro no ser humano. Ramifica-se em ângulo obtuso, originando colaterais. Sua terminação geralmente forma uma arborização, estabelecendo conexões com outros neurônios ou com células efetuadoras (músculos ou glândulas).",
        ],
      },
      {
        type: "highlight",
        title: "Bainha de Mielina",
        content":
          "É um dos envoltórios principais do axônio, que funciona como isolante elétrico, aumentando a velocidade de condução do impulso nervoso.",
      },
      {
        type: "text",
        content": "Alguns neurônios são especializados em secreção (neurônios neurosecretores).",
      },
      {
        type: "important",
        content":
          "Os neurônios sensitivos (aferentes) são especializados em transformar estímulos físicos ou químicos em impulsos nervosos através de receptores (terminações nervosas) sofisticados, que são conduzidos ao SNC. O corpo do neurônio, se lesado, não se regenera.",
      },
      {
        type: "subtitle",
        content: "Divisão do Sistema Nervoso",
      },
      {
        type: "text",
        content": "O SN é dividido para fins de estudo em:",
      },
      {
        type: "subsection",
        title: "Sistema Nervoso Central (SNC)",
        content": "",
      },
      {
        type: "text",
        content": "Constituído por estruturas localizadas no esqueleto axial (coluna vertebral e crânio).",
      },
      {
        type: "subsection",
        title: "Sistema Nervoso Periférico (SNP)",
        content": "",
      },
      {
        type: "text",
        content": "Compreende os nervos cranianos e espinais, os gânglios e as terminações nervosas.",
      },
      {
        type: "subtitle",
        content: "Desenvolvimento do SNC",
      },
      {
        type: "text",
        content":
          "O SNC tem sua origem no tubo neural e na crista neural. Durante o desenvolvimento embrionário, o tubo neural dá origem aos elementos do SNC, enquanto a crista neural dá origem aos elementos do SNP e a outros elementos não nervosos.",
      },
      {
        type: "subsection",
        title: "Vesículas Primordiais",
        content": "",
      },
      {
        type: "text",
        content": "O tubo neural primitivo forma três dilatações primordiais, as vesículas primordiais do SNC:",
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
        content":
          "Essas vesículas se diferenciam ainda mais: o prosencéfalo origina o telencéfalo e o diencéfalo, e o rombencéfalo origina o metencéfalo e o mielencéfalo.",
      },
      {
        type: "subtitle",
        content: "Partes do SNC",
      },
      {
        type: "text",
        content": "As transformações das vesículas primordiais dão origem às partes mais importantes do SNC:",
      },
      {
        type: "subsection",
        title: "Encéfalo",
        content": "",
      },
      {
        type: "text",
        content": "Localiza-se na cavidade craniana e é composto por:",
      },
      {
        type: "list",
        content: [
          "Cérebro: Originado do telencéfalo e diencéfalo. Os hemisférios cerebrais são de origem telencefálica. O diencéfalo fica recoberto pelos hemisférios cerebrais no cérebro inteiro.",
          "Tronco Encefálico: Constituído pelo mesencéfalo, ponte e bulbo (medula oblonga). Interpõe-se entre a medula espinal e o diencéfalo.",
          "Cerebelo: Originado do metencéfalo. Conhecido como a 'árvore da vida' devido à sua aparência. Coordena os movimentos efetuados.",
        ],
      },
      {
        type: "subsection",
        title: "Medula Espinal",
        content": "",
      },
      {
        type: "text",
        content": "Massa cilindroide que se aloja no canal vertebral, sem ocupá-lo totalmente.",
      },
      {
        type: "subsection",
        title: "Detalhamento do Encéfalo",
        content": "",
      },
      {
        type: "text",
        content":
          "Cérebro: Os hemisférios cerebrais representam cerca de 80% do peso do encéfalo. São responsáveis pelas funções psíquicas superiores, como inteligência, memória, linguagem e pensamento. Sua superfície apresenta sulcos e giros.",
      },
      {
        type: "text",
        content":
          "Tronco Encefálico: Atravessado por vias nervosas ascendentes (sensitivas) e descendentes (motoras). Os pedúnculos cerebrais unem o tronco encefálico aos hemisférios cerebrais. Dentro do mesencéfalo, destacam-se o teto do mesencéfalo, o tegmento do mesencéfalo, a substância negra (rica em melanina) e o núcleo rubro.",
      },
      {
        type: "text",
        content":
          "Cerebelo: Sua superfície é marcada por giros (folhas) e sulcos, e seu interior possui substância branca (corpo medular) e núcleos centrais. Funcionalmente, é dividido em arquicerebelo (equilíbrio), paleocerebelo (tônus muscular e postura) e neocerebelo (coordenação dos movimentos). Lesões cerebelares podem causar ataxia (perda da coordenação), hipotonia (diminuição do tônus), disartria (dificuldade na fala), nistagmo (movimentos oculares rítmicos), entre outros.",
      },
      {
        type: "subsection",
        title: "Diencéfalo",
        content": "",
      },
      {
        type: "text",
        content":
          "Situa-se entre o tronco encefálico e o telencéfalo. É recoberto pelos hemisférios cerebrais. Suas partes principais são:",
      },
      {
        type: "list",
        content: [
          "Tálamo: Maior parte, com funções sensitivas e motoras. Possui tubérculo anterior e pulvinar, que se projeta sobre os corpos geniculados medial (via auditiva) e lateral (via óptica). A cápsula interna (feixe compacto de fibras) o separa do telencéfalo.",
          "Hipotálamo: Pequena área abaixo do tálamo, com importantes funções relacionadas ao controle da atividade visceral.",
          "Epitálamo: Inclui a glândula pineal, que produz melatonina e participa da regulação dos ritmos circadianos (ciclo sono/vigília).",
          "Subtálamo: Zona de transição entre o diencéfalo e o tegmento do mesencéfalo.",
        ],
      },
      {
        type: "subsection",
        title: "Medula Espinal Detalhada",
        content": "",
      },
      {
        type: "text",
        content":
          'Estrutura Geral: Massa cilindroide com duas dilatações, as intumescências cervical e lombossacral, de onde partem grossas raízes nervosas para os membros. A superfície é marcada por sulcos longitudinais (sulco mediano posterior, fissura mediana anterior, sulcos ântero-lateral e póstero-lateral). Internamente, possui substância cinzenta em forma de "H" (cornos anterior, posterior, lateral) e substância branca (funículos). O canal central da medula atravessa a substância cinzenta.',
      },
      {
        type: "subtitle",
        content: "Áreas Funcionais do Córtex Cerebral",
      },
      {
        type: "text",
        content":
          "O córtex cerebral é a camada de substância cinzenta que cobre os hemisférios cerebrais, sendo constituída pelos corpos neuronais e representando 40% do peso do encéfalo. Dois terços do córtex estão ocultos na profundidade dos sulcos.",
      },
      {
        type: "text",
        content":
          "O córtex é dividido em 52 áreas citoarquiteturais de Brodmann, que se agrupam em áreas de projeção e áreas de associação.",
      },
      {
        type: "subsection",
        title: "Áreas de Projeção",
        content": "",
      },
      {
        type: "text",
        content": "Relacionadas com a sensibilidade (áreas somestésicas) e a motricidade (áreas motoras).",
      },
      {
        type: "list",
        content: [
          "Área Somestésica Primária (Área 3, 1 e 2 de Brodmann): Localizada no giro pós-central. Recebe sensações do lado oposto do corpo. A representação das partes do corpo nesta área (homúnculo sensitivo) depende da importância funcional da parte, não do seu tamanho. A lesão nesta área causa perda de sensibilidade.",
          "Área Motora Primária (Área 4 de Brodmann): Localizada no giro pré-central. Comanda a motricidade voluntária do lado oposto do corpo. A representação das partes do corpo (homúnculo motor) também depende da importância funcional.",
        ],
      },
      {
        type: "subsection",
        title: "Áreas de Linguagem (da Fala)",
        content": "",
      },
      {
        type: "list",
        content: [
          "Área Motora da Linguagem (Área de Broca): Localizada no giro frontal inferior (áreas 44 e 45 de Brodmann), geralmente no hemisfério esquerdo. Lesões causam afasia de Broca (dificuldade em produzir a fala).",
          "Área Posterior da Linguagem (Área de Wernicke): Localizada na junção dos lobos temporal e parietal (parte posterior da área 22 de Brodmann). Lesões causam afasia de Wernicke (dificuldade em compreender a linguagem).",
          "Afasia Mista: Mais comum, envolve dificuldades tanto na expressão quanto na compreensão.",
        ],
      },
      {
        type: "subsection",
        title: "Áreas de Associação",
        content": "",
      },
      {
        type: "text",
        content": "Relacionadas com funções psíquicas complexas e comportamentais.",
      },
      {
        type: "list",
        content: [
          "Áreas de Associação Secundárias: Adjacentes às áreas primárias. Lesões podem causar apraxia (dificuldade em executar movimentos aprendidos).",
          "Áreas de Associação Terciárias: Incluem a área pré-frontal, a área temporoparietal e o sistema límbico.",
        ],
      },
      {
        type: "subsection",
        title: "Sistema Límbico",
        content": "",
      },
      {
        type: "text",
        content":
          "Envolve estruturas corticais (giro do cíngulo, giro para-hipocampal, hipocampo) e subcorticais (corpo amigdaloide, área septal, núcleos mamilares, núcleos anteriores do tálamo, núcleos habenulares). Está associado à regulação do comportamento emocional e memória.",
      },
      {
        type: "important",
        content":
          "Lesões no núcleo basal de Meynert, que tem conexões com o sistema límbico e córtex cerebral, estão associadas à doença de Alzheimer, com perda progressiva da memória e raciocínio abstrato.",
      },
      {
        type: "subsection",
        title: "Fibras do Córtex Cerebral",
        content": "",
      },
      {
        type: "list",
        content: [
          "Fibras de Associação: Conectam áreas dentro do mesmo hemisfério.",
          "Fibras Comissurais: Conectam os dois hemisférios (ex: corpo caloso).",
          "Fibras de Projeção: Conectam o córtex a estruturas subcorticais (ex: cápsula interna).",
        ],
      },
      {
        type: "subtitle",
        content: "Meninges",
      },
      {
        type: "text",
        content":
          "O encéfalo e a medula espinal são envolvidos, sustentados e protegidos por lâminas de tecido conjuntivo chamadas meninges. Elas são:",
      },
      {
        type: "list",
        content: [
          "Dura-máter: Membrana mais espessa e resistente, de tecido conjuntivo denso. No crânio, sua camada externa é o periósteo. A camada interna forma pregas (septos) que dividem a cavidade craniana em compartimentos incompletos (ex: foice do cérebro, tentório do cerebelo, foice do cerebelo, diafragma da sela).",
          "Aracnóide-máter: Membrana intermediária, delicada, que se assemelha a uma teia de aranha.",
          "Pia-máter: Membrana mais interna e delicada, intimamente aderida à superfície do encéfalo e da medula.",
        ],
      },
      {
        type: "subsection",
        title: "Espaços Associados às Meninges",
        content": "",
      },
      {
        type: "list",
        content: [
          "Espaço Epidural: Entre a dura-máter e o periósteo do crânio. Em condições normais, não existe, sendo um espaço potencial que surge com traumas ou patologias.",
          "Espaço Subdural: Entre a dura-máter e a aracnóide-máter. Também um espaço potencial que surge patologicamente.",
          "Espaço Subaracnóideo (Leptomeníngeo): Entre a aracnóide-máter e a pia-máter, onde circula o líquido cerebrospinal (líquor). Possui dilatações chamadas cisternas subaracnóideas.",
        ],
      },
      {
        type: "subsection",
        title: "Meninges Espinais",
        content": "",
      },
      {
        type: "text",
        content": "A medula espinal é envolvida por três membranas conjuntivas, as meninges:",
      },
      {
        type: "list",
        content: [
          "Dura-máter Espinal: Membrana mais externa e resistente. Forma um saco fibroso que se estende até o nível da 2ª vértebra sacral (S2).",
          "Aracnóide-máter Espinal: Membrana intermediária, delicada, localizada entre a dura-máter e a pia-máter.",
          "Pia-máter Espinal: Membrana mais interna, intimamente aderida à superfície da medula. Continua caudalmente como o filamento terminal. Também forma os ligamentos denticulados, que fixam a medula.",
        ],
      },
      {
        type: "text",
        content": "Os espaços entre essas meninges e estruturas adjacentes são:",
      },
      {
        type: "list",
        content: [
          "Espaço Epidural (Extradural): Situa-se entre a dura-máter e o periósteo do canal vertebral; contém tecido adiposo e plexo venoso interno.",
          "Espaço Subdural: Um espaço potencial entre a dura-máter e a aracnóide-máter; em condições normais, não existe.",
          "Espaço Subaracnóideo (Leptomeníngeo): Situa-se entre a aracnóide-máter e a pia-máter e contém o líquido cerebrospinal (líquor). Este espaço é amplo no fundo do saco dural (abaixo de L2), sendo o local ideal para punção lombar.",
        ],
      },
      {
        type: "important",
        content":
          "Tumores das meninges (meningiomas) são relativamente frequentes, e meningites (infecções das meninges) podem causar alterações profundas no líquor.",
      },
      {
        type: "subtitle",
        content: "Sistema Nervoso Periférico (SNP)",
      },
      {
        type: "text",
        content":
          "O SNP compreende as terminações nervosas, os gânglios e os nervos. As fibras nervosas de um nervo são classificadas de acordo com as estruturas que inervam, ou seja, conforme sua função.",
      },
      {
        type: "list",
        content: [
          "Fibras Motoras (Eferentes): Estimulam ou ativam a musculatura, veiculando ordens que saem do SNC.",
          "Fibras Sensitivas (Aferentes): Conduzem estímulos para o SNC.",
        ],
      },
      {
        type: "subsection",
        title: "Terminações Nervosas",
        content": "",
      },
      {
        type: "text",
        content":
          "Existem nas extremidades das fibras sensitivas e motoras. O exemplo mais típico de terminação motora é a placa motora.",
      },
      {
        type: "subsection",
        title: "Gânglios",
        content": "",
      },
      {
        type: "text",
        content":
          "São aglomerados de corpos de neurônios localizados fora do SNC. Existem gânglios sensitivos (ex: gânglios espinais) e gânglios autônomos.",
      },
      {
        type: "subsection",
        title: "Nervos: Cranianos e Espinais",
        content": "",
      },
      {
        type: "text",
        content":
          "São cordões esbranquiçados formados por fibras nervosas unidas por tecido conjuntivo, cuja função é levar ou trazer impulsos do/para o SNC.",
      },
      {
        type: "subsection",
        title: "Nervos Cranianos",
        content": "",
      },
      {
        type: "text",
        content":
          "São 12 pares de nervos que fazem conexão com o encéfalo. A maioria deles (dez) origina-se no tronco encefálico. São numerados em sequência crânio-caudal. Exemplos:",
      },
      {
        type: "list",
        content: [
          "Nervo Olfatório (I): Puramente sensitivo, ligado à olfação (cheiro).",
          "Nervo Óptico (II): Puramente sensitivo, ligado à percepção visual.",
          "Nervos Oculomotor (III), Troclear (IV) e Abducente (VI): Inervam músculos que movimentam o olho.",
          "Nervo Trigêmeo (V): Principal nervo sensitivo da face e motor dos músculos da mastigação.",
          "Nervo Facial (VII): Motor dos músculos da expressão facial e sensitivo para gustação.",
          "Nervo Vestibulococlear (VIII): Relacionado à audição e ao equilíbrio.",
          "Nervo Glossofaríngeo (IX): Misto, com funções na gustação, sensibilidade da faringe e motricidade de alguns músculos da faringe.",
          "Nervo Vago (X): O mais extenso, com distribuição na cabeça, pescoço, tórax e abdome, com múltiplas funções viscerais.",
          "Nervo Acessório (XI): Principalmente motor para músculos do pescoço (esternocleidomastóideo e trapézio).",
          "Nervo Hipoglosso (XII): Motor dos músculos da língua.",
        ],
      },
      {
        type: "subsection",
        title: "Nervos Espinais",
        content": "",
      },
      {
        type: "text",
        content":
          "São 31 pares de nervos que mantêm conexão com a medula espinal e abandonam a coluna vertebral através dos forames intervertebrais. São classificados por região: cervicais, torácicos, lombares, sacrais e coccígeos.",
      },
      {
        type: "text",
        content": "Formação do Nervo Espinal: Cada nervo espinal é formado pela fusão de duas raízes:",
      },
      {
        type: "list",
        content: [
          "Raiz Ventral (Anterior): Predominantemente motora.",
          "Raiz Dorsal (Posterior): Predominantemente sensitiva, e possui um gânglio espinal onde se localizam os corpos dos neurônios sensitivos.",
        ],
      },
      {
        type: "text",
        content": "Após a fusão, o nervo espinal se divide em dois ramos:",
      },
      {
        type: "list",
        content: [
          "Ramo Posterior: Inerva a pele e os músculos do dorso.",
          "Ramo Anterior: Responsável pela inervação dos membros e da porção ântero-lateral do tronco.",
        ],
      },
      {
        type: "text",
        content":
          "Formação dos Plexos Nervosos: Os ramos anteriores, especialmente nas regiões cervical (pescoço) e lombossacral, entremeiam-se para formar plexos nervosos, de onde emergem os nervos terminais. Exemplos: plexo braquial (inerva ombro e membro superior), plexo lombar e plexo sacral.",
      },
      {
        type: "subtitle",
        content: "Vias Nervosas",
      },
      {
        type: "text",
        content":
          "O funcionamento do SN envolve vias aferentes (sensitivas) que levam informações ao SNC e vias eferentes (motoras) que levam comandos do SNC para os órgãos efetores.",
      },
      {
        type: "subsection",
        title: "Via Sensitiva (Aferente)",
        content": "",
      },
      {
        type: "text",
        content":
          "Transmite estímulos sensoriais para o córtex cerebral, permitindo a percepção. Esquematicamente, a via da sensibilidade geral (dor, temperatura, tato, etc.) envolve três neurônios:",
      },
      {
        type: "list",
        content: [
          "Neurônio I (Primeira Ordem): Localiza-se nos gânglios sensitivos (gânglios espinais ou gânglios de nervos cranianos).",
          "Neurônio II (Segunda Ordem): Localiza-se na medula espinal ou em núcleos de nervos cranianos no tronco encefálico.",
          "Neurônio III (Terceira Ordem): Localiza-se no tálamo e projeta-se para o córtex cerebral através de radiações talâmicas.",
        ],
      },
      {
        type: "subsection",
        title: "Via Motora (Eferente)",
        content": "",
      },
      {
        type: "text",
        content":
          "Leva comandos do córtex cerebral para os músculos, determinando ações. Inclui as vias piramidais e vias extrapiramidais.",
      },
      {
        type: "subsection",
        title: "Vias Piramidais",
        content": "",
      },
      {
        type: "text",
        content": "Originam-se no córtex cerebral e são responsáveis pela motricidade voluntária fina.",
      },
      {
        type: "list",
        content: [
          "Trato Corticospinal: Controla movimentos dos músculos do tronco e membros, terminando em neurônios motores na medula. Lesões causam paralisia e alterações reflexas (ex: Sinal de Babinski).",
          "Trato Corticonuclear: Controla neurônios motores de nervos cranianos no tronco encefálico, responsáveis por movimentos da cabeça e face.",
        ],
      },
      {
        type: "subsection",
        title: "Vias Extrapiramidais",
        content": "",
      },
      {
        type: "text",
        content":
          "Partem de estruturas supra-espinais (fora das pirâmides do bulbo) e influenciam os neurônios motores da medula, controlando a motricidade automática, postura e tônus muscular. Incluem:",
      },
      {
        type: "list",
        content: [
          "Trato Rubroespinal: Controla a motricidade voluntária dos músculos distais dos membros (pouco desenvolvido no homem).",
          "Trato Tetoespinal: Envolvido em reflexos nos quais a movimentação da cabeça decorre de estímulos visuais.",
          "Trato Vestibuloespinal: Essencial para a manutenção do equilíbrio e ajustes do tônus muscular, recebendo informações do sistema vestibular (orelha interna) e cerebelo.",
          "Trato Reticuloespinal: O mais importante trato extrapiramidal, envolvido no controle de movimentos voluntários e automáticos de músculos axiais e proximais dos membros, além de promover o suporte postural.",
        ],
      },
      {
        type: "subtitle",
        content: "Sistema Nervoso Autônomo (SNA)",
      },
      {
        type: "definition",
        title: "Sistema Nervoso Autônomo (SNA)",
        content":
          "O Sistema Nervoso Autônomo (SNA) é a parte eferente (motora) do sistema nervoso visceral, controlando funções involuntárias de glândulas, músculo liso e músculo cardíaco. Historicamente, é um sistema exclusivamente eferente, embora alguns autores incluam as fibras aferentes viscerais.",
      },
      {
        type: "text",
        content": "O SNA é dividido em duas partes com ações geralmente antagônicas, mas complementares:",
      },
      {
        type: "list",
        content: ["Sistema Nervoso Simpático", "Sistema Nervoso Parassimpático"],
      },
      {
        type: "subsection",
        title: "Sistema Nervoso Visceral Aferente",
        content": "",
      },
      {
        type: "text",
        content":
          "As fibras viscerais aferentes conduzem impulsos nervosos originados nas vísceras para o SNC. Elas são responsáveis pela percepção de sensações viscerais (dor, plenitude). Embora não sejam parte eferente do SNA, elas são cruciais para o funcionamento dos reflexos autônomos.",
      },
      {
        type: "subsection",
        title: "Diferenças entre o Sistema Nervoso Somático e Autônomo",
        content": "",
      },
      {
        type: "list",
        content: [
          "Controle: O SN somático é voluntário, enquanto o SN autônomo é involuntário.",
          "Número de Neurônios Eferentes: SN Somático - Apenas um neurônio conecta o SNC ao órgão efetuador (músculo estriado esquelético). SN Autônomo - Há sempre dois neurônios conectando o SNC ao órgão efetuador (músculo liso, cardíaco ou glândula).",
        ],
      },
      {
        type: "subsection",
        title: "Organização Geral do SNA: Neurônios Pré e Pós-ganglionares",
        content": "",
      },
      {
        type: "text",
        content": "A organização da parte periférica do SNA envolve dois neurônios em série:",
      },
      {
        type: "list",
        content: [
          "Neurônio Pré-ganglionar: O corpo celular localiza-se no SNC (medula ou tronco encefálico). Seus axônios (fibras pré-ganglionares) saem do SNC e fazem sinapse com o neurônio pós-ganglionar.",
          "Neurônio Pós-ganglionar: O corpo celular localiza-se em gânglios autônomos (aglomerados de corpos de neurônios fora do SNC). Seus axônios (fibras pós-ganglionares) seguem até o órgão efetuador.",
        ],
      },
      {
        type: "subsection",
        title: "Diferenças na Origem e Localização dos Gânglios",
        content": "",
      },
      {
        type: "list",
        content: [
          "SN Simpático: Origem tóraco-lombar (fibras pré-ganglionares saem dos segmentos torácicos e lombares superiores da medula). Os neurônios pós-ganglionares localizam-se longe das vísceras, próximo à coluna vertebral, formando os gânglios paravertebrais e pré-vertebrais.",
          "SN Parassimpático: Origem crânio-sacral (fibras pré-ganglionares saem do tronco encefálico via nervos cranianos e dos segmentos sacrais da medula). Os neurônios pós-ganglionares localizam-se próximo ou dentro das vísceras.",
        ],
      },
      {
        type: "subsection",
        title: "Inervação Mista e Efeitos Simpáticos e Parassimpáticos",
        content": "",
      },
      {
        type: "text",
        content":
          "Na maioria dos órgãos, a inervação autônoma é mista, recebendo fibras simpáticas e parassimpáticas. Geralmente, seus efeitos são antagônicos. Por exemplo, o simpático ativa o movimento cardíaco enquanto inibe o tubo digestório. No entanto, alguns órgãos têm inervação puramente simpática (ex: glândulas sudoríparas, músculos eretores do pelo).",
      },
      {
        type: "text",
        content": "Os efeitos são mediados por neurotransmissores:",
      },
      {
        type: "list",
        content: [
          "Fibras pós-ganglionares do parassimpático são geralmente colinérgicas (liberam acetilcolina).",
          "Fibras pós-ganglionares do simpático são geralmente adrenérgicas (liberam noradrenalina), com raras exceções.",
        ],
      },
      {
        type: "subsection",
        title: "Anatomia do Sistema Nervoso Simpático",
        content": "",
      },
      {
        type: "text",
        content": "A principal formação anatômica do sistema simpático é o tronco simpático.",
      },
      {
        type: "list",
        content: [
          "Tronco Simpático: Formado por uma cadeia de gânglios paravertebrais (cervicais, torácicos, lombares, sacrais), localizados de cada lado da coluna vertebral. O gânglio ímpar é o gânglio terminal, abaixo da junção dos troncos simpáticos.",
          "Gânglios Pré-Vertebrais: Gânglios impares localizados na proximidade da aorta abdominal e seus ramos (ex: gânglios celíacos, aórtico-renais, mesentérico superior, mesentérico inferior). Recebem fibras pré-ganglionares através dos nervos esplâncnicos (maior, menor, imo).",
          "Ramos Comunicantes: Filetes nervosos que unem o tronco simpático aos nervos espinais. Podem ser ramos comunicantes brancos (levam fibras pré-ganglionares mielinizadas dos nervos espinais para o tronco simpático) ou ramos comunicantes cinzentos (levam fibras pós-ganglionares não mielinizadas do tronco simpático para os nervos espinais).",
        ],
      },
      {
        type: "subsection",
        title: "Anatomia do Sistema Nervoso Parassimpático",
        content": "",
      },
      {
        type: "text",
        content": "O sistema parassimpático tem uma distribuição crânio-sacral.",
      },
      {
        type: "list",
        content: [
          "Parte Craniana: As fibras pré-ganglionares se originam no tronco encefálico e saem através de nervos cranianos específicos: Nervo Oculomotor (III), Nervo Facial (VII), Nervo Glossofaríngeo (IX) e Nervo Vago (X). Os gânglios pós-ganglionares para a cabeça e pescoço são, por exemplo, o gânglio ciliar, gânglio pterigopalatino, gânglio ótico e gânglio submandibular.",
          "Parte Sacral: Os neurônios pré-ganglionares estão nos segmentos sacrais (S2, S3 e S4) da medula espinal. As fibras pré-ganglionares saem pelas raízes ventrais dos nervos sacrais correspondentes e formam os nervos esplâncnicos pélvicos, que se dirigem aos plexos viscerais na pelve e abdome.",
        ],
      },
      {
        type: "subsection",
        title: "Plexos Viscerais do SNA",
        content": "",
      },
      {
        type: "text",
        content":
          "São redes complexas de fibras nervosas autônomas (simpáticas e parassimpáticas) e gânglios, além de fibras viscerais aferentes, que inervam as vísceras.",
      },
      {
        type: "list",
        content: [
          "Plexos da Cavidade Torácica: Incluem os plexos cardíaco, pulmonar e esofágico. O plexo cardíaco é importante para a inervação autônoma do coração, recebendo fibras parassimpáticas do nervo vago e simpáticas dos gânglios cervicais e torácicos superiores.",
          "Plexos da Cavidade Abdominal e Pélvica: São contínuos e contêm os gânglios pré-vertebrais do simpático. Os principais são os plexos celíaco, mesentérico superior e mesentérico inferior.",
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Sistema Circulatório",
    sections: [
      {
        type: "title",
        content: "Sistema Circulatório",
      },
      {
        type: "subtitle",
        content: "Conceito e Histórico",
      },
      {
        type: "definition",
        title: "Sistema Circulatório",
        content":
          "O sistema circulatório é responsável pelo transporte de sangue e linfa por todo o corpo. O sangue carrega material nutritivo e oxigênio dos capilares para os tecidos, e produtos de resíduo metabólico (incluindo CO2) dos tecidos para os capilares.",
      },
      {
        type: "highlight",
        title: "Marco Histórico",
        content":
          "A obra fundamental sobre a circulação do sangue foi publicada em 1628 por William Harvey, que hipotetizou a passagem do sangue de artérias menores para veias menores. Somente em 1661, Marcello Malpighi demonstrou a existência dos capilares sanguíneos ao microscópio.",
      },
      {
        type: "subtitle",
        content: "Divisão do Sistema",
      },
      {
        type: "text",
        content": "O sistema circulatório é dividido em:",
      },
      {
        type: "list",
        content: [
          "Coração: O órgão central de bombeamento",
          "Artérias: Levam sangue do coração para os tecidos",
          "Veias: Trazem sangue dos tecidos de volta ao coração",
          "Capilares: Vasos microscópicos onde ocorrem as trocas de substâncias entre o sangue e os tecidos",
          "Sistema Linfático: Um sistema auxiliar de drenagem",
          "Órgãos Hemopoiéticos: Órgãos que produzem células sanguíneas (ex: medula óssea, baço). O baço é anatomicamente parte do sistema linfático, mas funcionalmente importante na hematopoiese.",
        ],
      },
      {
        type: "subtitle",
        content: "O Coração",
      },
      {
        type: "definition",
        title: "O Coração",
        content":
          "O coração é um órgão muscular oco, localizado no mediastino médio do tórax. Sua função principal é bombear o sangue para as circulações pulmonar e sistêmica.",
      },
      {
        type: "subsection",
        title: "Pericárdio",
        content": "",
      },
      {
        type: "text",
        content":
          "Saco fibro-seroso que envolve o coração, separando-o de outros órgãos do mediastino e limitando sua expansão durante a diástole (relaxamento). Consiste em uma camada externa fibrosa (pericárdio fibroso) e uma camada interna serosa (pericárdio seroso), que possui duas lâminas: a lâmina parietal (aderida ao pericárdio fibroso) e a lâmina visceral (aderida à superfície do coração, também chamada de epicárdio). Entre as lâminas serosas, há a cavidade pericárdica com líquido pericárdico.",
      },
      {
        type: "subsection",
        title: "Anatomia Externa",
        content": "",
      },
      {
        type: "text",
        content":
          "O coração possui uma base (superior) e um ápice (inferior e arredondado, localizado no nível da 5ª cartilagem costal). Apresenta duas faces nítidas: a diafragmática (repousa sobre o diafragma) e a esternocostal (anterior), além de uma face pulmonar. Sulcos externos indicam a divisão interna em átrios e ventrículos.",
      },
      {
        type: "subsection",
        title: "Anatomia Interna",
        content": "",
      },
      {
        type: "text",
        content":
          "O coração é dividido por um septo oblíquo em duas metades (direita e esquerda), cada uma com duas cavidades:",
      },
      {
        type: "list",
        content: [
          "Átrio Direito: Recebe sangue venoso da veia cava superior e veia cava inferior. Contém músculos pectíneos e a crista terminal.",
          "Ventrículo Direito: Recebe sangue do átrio direito e o bombeia para a artéria pulmonar.",
          "Átrio Esquerdo: Recebe sangue oxigenado das veias pulmonares.",
          "Ventrículo Esquerdo: Bombeia sangue para a aorta.",
        ],
      },
      {
        type: "text",
        content":
          "A valva atrioventricular direita (tricúspide) separa o átrio e ventrículo direitos. A valva atrioventricular esquerda (bicúspide ou mitral) separa o átrio e ventrículo esquerdos. As valvas do tronco pulmonar e da aorta separam os ventrículos das grandes artérias.",
      },
      {
        type: "subsection",
        title: "Sistema de Condução do Coração (Complexo Estimulante)",
        content": "",
      },
      {
        type: "text",
        content": "Responsável pelo automatismo cardíaco (geração e propagação de impulsos elétricos). Inclui:",
      },
      {
        type: "list",
        content: [
          "Nó Sinoatrial (SA) (Marca-passo cardíaco): Localizado no átrio direito, perto da entrada da veia cava superior. Gera os impulsos rítmicos.",
          "Nó Atrioventricular (AV): Recebe o impulso do nó SA e o retarda brevemente.",
          "Fascículo Atrioventricular (Feixe de His): Conduz o impulso do nó AV para os ventrículos.",
          "Ramos Direito e Esquerdo do Fascículo AV: Distribuem o impulso pelos ventrículos.",
          "Ramos Subendocárdicos (Fibras de Purkinje): Distribuem o impulso final para o miocárdio ventricular.",
        ],
      },
      {
        type: "subsection",
        title: "Inervação do Coração",
        content": "",
      },
      {
        type: "text",
        content":
          "O coração é inervado pelo plexo cardíaco, que contém fibras simpáticas e parassimpáticas. A inervação autônoma influencia a frequência cardíaca e a força de contração, mas não inicia o batimento.",
      },
      {
        type: "subsection",
        title: "Vascularização Coronária (Irrigação Própria do Coração)",
        content": "",
      },
      {
        type: "text",
        content":
          "O miocárdio (músculo cardíaco) é irrigado pelas artérias coronárias, que se originam da aorta logo acima de sua emergência do ventrículo esquerdo. Existem duas principais artérias coronárias (direita e esquerda). A dominância direita é a mais comum.",
      },
      {
        type: "text",
        content":
          'Anastomoses Arteriais: As artérias coronárias eram tradicionalmente consideradas "terminais", mas hoje se sabe que há anastomoses entre seus ramos, formando uma rede colateral importante em casos de obstrução.',
      },
      {
        type: "text",
        content":
          "Drenagem Venosa Coronária: O sangue venoso do coração é drenado pelas veias cardíacas, que convergem para o seio coronário, que desemboca no átrio direito.",
      },
      {
        type: "subtitle",
        content: "Artérias: Vasos de Condução",
      },
      {
        type: "text",
        content":
          "As artérias transportam o sangue do coração para todas as partes do corpo. A principal artéria do corpo é a aorta, que se ramifica em artérias de calibres cada vez menores.",
      },
      {
        type: "text",
        content":
          "Classificação pelo Calibre/Estrutura: Artérias Elásticas (de Grande Calibre) próximas ao coração (ex: aorta, tronco braquiocefálico), possuem alta proporção de fibras elásticas. Artérias Musculares (de Médio Calibre) como radial e ulnar, possuem predominância de músculo liso. Arteríolas (de Pequeno Calibre) controlam o fluxo de sangue para os capilares.",
      },
      {
        type: "text",
        content":
          "Anastomoses Arteriais: São conexões entre duas ou mais artérias que favorecem a irrigação dos órgãos. Em caso de obstrução de uma artéria, a anastomose pode servir como uma via alternativa (circulação colateral).",
      },
      {
        type: "subtitle",
        content: "Veias: Vasos de Retorno",
      },
      {
        type: "text",
        content":
          "As veias transportam o sangue de volta ao coração, geralmente seguindo o trajeto das artérias. No entanto, existem diferenças importantes: as veias tendem a formar plexos venosos, no encéfalo não acompanham as artérias, e no membro inferior as veias superficiais são cruciais para o retorno venoso.",
      },
      {
        type: "subtitle",
        content: "Sistema Linfático: O Sistema de Drenagem Auxiliar",
      },
      {
        type: "text",
        content":
          "O sistema linfático é um sistema de drenagem auxiliar no corpo, formado por vasos e órgãos linfoides, onde circula a linfa. Atua como uma barreira contra a penetração de toxinas, bactérias e corpos estranhos na circulação geral, e também na absorção de gorduras.",
      },
      {
        type: "text",
        content":
          "Linfonodos (Gânglios Linfáticos): São pequenos órgãos que atuam como filtros biológicos, retendo agentes patogênicos e células estranhas. A linfa passa por eles antes de retornar à circulação sanguínea.",
      },
    ],
  },
  {
    id: 7,
    title: "Membro Inferior",
    sections: [
      {
        type: "title",
        content: "Membro Inferior",
      },
      {
        type: "text",
        content":
          "O membro inferior é um segmento corpóreo vital para a sustentação do peso do corpo e para a locomoção (deambulação). É conectado ao tronco pelos ossos do quadril.",
      },
      {
        type: "subtitle",
        content: "Esqueleto do Membro Inferior",
      },
      {
        type: "text",
        content":
          "Osso do Quadril: Formado pela fusão de três ossos (ílio, ísquio e púbis). O acetábulo é a cavidade onde se articula a cabeça do fêmur. Acidentes ósseos importantes incluem a crista ilíaca, a espinha ilíaca ântero-superior, a tuberosidade isquiática, e o forame obturado.",
      },
      {
        type: "text",
        content":
          "Fêmur: O osso mais longo e robusto do corpo humano. Sua extremidade proximal possui a cabeça do fêmur, os trocanteres maior e menor e o colo do fêmur (onde fraturas são comuns). O corpo apresenta a linha áspera em sua face posterior. A extremidade distal possui côndilos medial e lateral.",
      },
      {
        type: "text",
        content": "Patela: Osso sesamóide localizado no tendão do músculo quadríceps femoral, anterior ao joelho.",
      },
      {
        type: "text",
        content":
          "Tíbia e Fíbula: A tíbia é o osso medial e mais robusto da perna. Sua borda anterior é a crista da tíbia, palpável em toda sua extensão. A fíbula é o osso lateral da perna, mais delgado, com função principal de inserção muscular.",
      },
      {
        type: "text",
        content":
          "Esqueleto do Pé: Dividido em tarso (sete ossos curtos: tálus, calcâneo, navicular, cubóide, três cuneiformes), metatarso (cinco ossos longos) e falanges (ossos dos dedos do pé).",
      },
      {
        type: "subtitle",
        content: "Estruturas Superficiais do Membro Inferior",
      },
      {
        type: "text",
        content":
          "Veias Superficiais: Veia Safena Magna (ascende pela face medial da perna e coxa, drenando para a veia femoral) e Veia Safena Parva (ascende pela face posterior da perna, drenando para a veia poplítea).",
      },
      {
        type: "text",
        content":
          "Inervação Cutânea: Nervos cutâneos incluem os nervos clúnios na região glútea, e ramos dos nervos plantares medial e lateral na planta do pé.",
      },
      {
        type: "subtitle",
        content: "Regiões e Estruturas Profundas",
      },
      {
        type: "text",
        content":
          "Região Anterior da Coxa: Contém músculos como o ílio-psoas (principal flexor da coxa), o quadríceps femoral (extensor da perna, composto pelo reto da coxa e vastos lateral, intermédio e medial), e o sartório. A artéria femoral é a principal artéria da coxa.",
      },
      {
        type: "text",
        content":
          "Região Medial da Coxa: Compreende os músculos adutores (pectíneo, adutor longo, adutor curto, adutor magno e grácil). A maioria é inervada pelo nervo obturatório.",
      },
      {
        type: "text",
        content":
          "Região Glútea: Contém os músculos glúteos (máximo, médio e mínimo) e músculos curtos rotadores laterais da coxa. O nervo isquiático é o maior nervo do corpo.",
      },
      {
        type: "text",
        content":
          "Região Posterior da Coxa: Músculos isquiotibiais (bíceps femoral, semitendinoso, semimembranáceo) que atuam na extensão do quadril e flexão do joelho.",
      },
      {
        type: "text",
        content":
          "Articulação do Joelho: Uma das articulações sinoviais mais complexas do corpo humano. Envolve o fêmur, a tíbia e a patela. A estabilidade é garantida por ligamentos cruzados, colaterais e meniscos.",
      },
      {
        type: "text",
        content":
          "Região da Perna: Dividida em compartimentos anterior (músculos extensores do pé), lateral (músculos fibulares) e posterior (músculos flexores plantares, incluindo o tríceps sural).",
      },
      {
        type: "text",
        content":
          "O Pé: Possui músculos intrínsecos dispostos no dorso e na planta. A aponeurose plantar na planta do pé é espessa e resistente. Os arcos do pé são cruciais na sustentação do peso do corpo.",
      },
    ],
  },
  {
    id: 8,
    title: "Membro Superior",
    sections: [
      {
        type: "title",
        content: "Membro Superior",
      },
      {
        type: "text",
        content":
          "O membro superior é especializado para a apreensão e gesticulação, possuindo grande mobilidade, especialmente na articulação do ombro.",
      },
      {
        type: "subtitle",
        content: "Esqueleto do Membro Superior",
      },
      {
        type: "text",
        content":
          "Clavícula: Osso longo em forma de 'S' que une o membro superior ao tronco. Articula-se medialmente com o esterno e lateralmente com o acrômio da escápula.",
      },
      {
        type: "text",
        content":
          "Escápula: Osso plano e triangular situado na parte posterior do tórax. Possui a cavidade glenoidal (articula-se com o úmero), a espinha da escápula, o acrômio e o processo coracoide.",
      },
      {
        type: "text",
        content":
          "Úmero: O osso do braço. Sua extremidade proximal possui a cabeça do úmero, tubérculos maior e menor. O corpo apresenta o sulco do nervo radial e a tuberosidade deltoidea. A extremidade distal possui epicôndilos, capítulo e tróclea.",
      },
      {
        type: "text",
        content":
          "Rádio e Ulna: Ossos do antebraço. O rádio é lateral e a ulna é medial. A ulna possui o olécrano (ponta do cotovelo) e a incisura troclear. O rádio possui a cabeça do rádio e o processo estiloide.",
      },
      {
        type: "text",
        content":
          "Esqueleto da Mão: Dividido em carpo (oito ossos curtos em duas fileiras), metacarpo (cinco ossos longos) e falanges (ossos dos dedos).",
      },
      {
        type: "subtitle",
        content: "Estruturas Superficiais",
      },
      {
        type: "text",
        content":
          "Veias Superficiais: Veia Cefálica (ascende pela face lateral) e Veia Basílica (ascende pela face medial). Essas veias se anastomosam na fossa cubital, formando a veia intermédia do cotovelo.",
      },
      {
        type: "text",
        content":
          "Inervação Cutânea: A inervação superficial inclui nervos cutâneos como o cutâneo medial do braço, cutâneo medial do antebraço, cutâneo lateral do antebraço, e ramos dos nervos radial, mediano e ulnar para a mão.",
      },
      {
        type: "subtitle",
        content: "Músculos e Regiões",
      },
      {
        type: "text",
        content":
          "Músculos Toracoapendiculares: Peitoral maior (flexão, adução e rotação medial do braço), peitoral menor, subclávio e serrátil anterior (aproxima a escápula do tórax).",
      },
      {
        type: "text",
        content":
          "Músculos Espino-apendiculares: Trapézio (eleva, retrai e roda a escápula), latíssimo do dorso (extensão, adução e rotação medial do braço), romboides e levantador da escápula.",
      },
      {
        type: "text",
        content":
          "Músculos do Ombro: Deltóide (abdução do braço) e manguito rotador (supraespinal, infraespinal, redondo menor, subescapular) que estabilizam a articulação do ombro.",
      },
      {
        type: "text",
        content": "Axila: Região piramidal que contém os vasos axilares, plexo braquial e linfonodos axilares.",
      },
      {
        type: "text",
        content":
          "Plexo Braquial: Rede nervosa formada pelas raízes C5-T1 que origina os nervos do membro superior: axilar, radial, musculocutâneo, mediano e ulnar.",
      },
      {
        type: "text",
        content":
          "Braço: Compartimento anterior (músculos flexores: coracobraquial, bíceps braquial, braquial) e posterior (tríceps braquial - extensor do antebraço).",
      },
      {
        type: "text",
        content":
          "Antebraço: Músculos anteriores (flexores e pronadores) e posteriores (extensores e supinadores). Principais artérias são a radial e ulnar.",
      },
      {
        type: "text",
        content":
          "Articulações: Articulação do cotovelo (gínglimo entre úmero, rádio e ulna) e articulações rádio-ulnares (permitem pronação e supinação).",
      },
      {
        type: "text",
        content":
          "Mão: Possui músculos intrínsecos organizados em grupos tenar (polegar), hipotenar (dedo mínimo), lumbricais e interósseos. A aponeurose palmar forma compartimentos fasciais importantes.",
      },
    ],
  },
]

export function getModuleById(id: number) {
  return moduleContent.find((module) => module.id === id)
}

export function getAllModules() {
  return moduleContent.map((module) => ({
    id: module.id,
    title: module.title,
  }))
}

interface ModuleContentProps {
  moduleId: number
}

export function ModuleContent({ moduleId }: ModuleContentProps) {
  const module = getModuleById(moduleId)

  if (!module) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">Módulo não encontrado.</p>
      </div>
    )
  }

  return (
    <div className="prose prose-slate max-w-none dark:prose-invert">
      {module.sections.map((section, index) => (
        <div key={index} className="mb-8">
          {section.type === "title" && (
            <h1 className="text-4xl font-bold mb-6 text-center medical-gradient bg-clip-text text-transparent">
              {section.content}
            </h1>
          )}

          {section.type === "subtitle" && (
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary border-b border-border pb-2">
              {section.content}
            </h2>
          )}

          {section.type === "definition" && (
            <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-4 my-6 rounded-r-lg">
              {section.title && (
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">{section.title}</h3>
              )}
              <p className="text-blue-800 dark:text-blue-200 leading-relaxed">{section.content}</p>
            </div>
          )}

          {section.type === "text" && <p className="leading-relaxed mb-4 text-justify">{section.content}</p>}

          {section.type === "list" && (
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              {Array.isArray(section.content) ? (
                section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="leading-relaxed">
                    {item}
                  </li>
                ))
              ) : (
                <li className="leading-relaxed">{section.content}</li>
              )}
            </ul>
          )}

          {section.type === "subsection" && (
            <div className="mt-6 mb-4">
              <h3 className="text-xl font-semibold text-secondary-foreground mb-3">{section.title}</h3>
              {section.content && <p className="leading-relaxed text-justify">{section.content}</p>}
            </div>
          )}

          {section.type === "highlight" && (
            <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 p-4 my-6 rounded-lg">
              {section.title && (
                <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">{section.title}</h4>
              )}
              <p className="text-yellow-800 dark:text-yellow-200 leading-relaxed">{section.content}</p>
            </div>
          )}

          {section.type === "important" && (
            <div className="bg-red-50 dark:bg-red-950/30 border-l-4 border-red-500 p-4 my-6 rounded-r-lg">
              {section.title && <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">{section.title}</h4>}
              <p className="text-red-800 dark:text-red-200 leading-relaxed">{section.content}</p>
            </div>
          )}

          {section.type === "example" && (
            <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 p-4 my-6 rounded-lg">
              {section.title && (
                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">{section.title}</h4>
              )}
              <p className="text-green-800 dark:text-green-200 leading-relaxed">{section.content}</p>
            </div>
          )}

          {section.type === "warning" && (
            <div className="bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800 p-4 my-6 rounded-lg">
              {section.title && (
                <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">{section.title}</h4>
              )}
              <p className="text-orange-800 dark:text-orange-200 leading-relaxed">{section.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
