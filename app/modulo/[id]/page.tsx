"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ModuleContent } from "@/components/content/module-content"
import { getUserProgress, markSectionComplete, calculateModuleProgress } from "@/lib/progress-storage"
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Brain,
  Heart,
  Users,
  Home,
  List,
  CheckCircle,
  Clock,
  FileText,
  HelpCircle,
  BarChart3,
} from "lucide-react"
import Link from "next/link"

// Dados dos módulos expandidos
const modulesData = {
  "1": {
    id: 1,
    title: "Introdução ao Estudo da Anatomia",
    description: "Conceitos fundamentais, terminologia anatômica e organização do corpo humano",
    icon: BookOpen,
    color: "bg-blue-500",
    sections: [
      {
        id: "conceito-anatomia",
        title: "Conceito de Anatomia e seus Ramos",
        duration: "15 min",
        type: "teoria",
      },
      {
        id: "formas-estudo",
        title: "Formas de Estudo Anatômico",
        duration: "12 min",
        type: "teoria",
      },
      {
        id: "historico",
        title: "Breve Histórico da Anatomia",
        duration: "10 min",
        type: "teoria",
      },
      {
        id: "dissecacao",
        title: "A Importância da Dissecação",
        duration: "8 min",
        type: "teoria",
      },
      {
        id: "organizacao-corpo",
        title: "Organização do Corpo Humano",
        duration: "20 min",
        type: "teoria",
      },
      {
        id: "terminologia",
        title: "Terminologia Anatômica Oficial",
        duration: "18 min",
        type: "teoria",
      },
      {
        id: "divisao-corpo",
        title: "Divisão Geral do Corpo Humano",
        duration: "15 min",
        type: "teoria",
      },
      {
        id: "normalidade",
        title: "Conceitos de Normalidade e Variação",
        duration: "12 min",
        type: "teoria",
      },
      {
        id: "posicao-anatomica",
        title: "Posição de Descrição Anatômica",
        duration: "10 min",
        type: "teoria",
      },
      {
        id: "planos-seccao",
        title: "Planos de Delimitação e Secção",
        duration: "16 min",
        type: "teoria",
      },
      {
        id: "termos-posicao",
        title: "Termos de Posição e Direção",
        duration: "14 min",
        type: "teoria",
      },
      {
        id: "principios-construcao",
        title: "Princípios Gerais de Construção",
        duration: "18 min",
        type: "teoria",
      },
      {
        id: "questoes-modulo1",
        title: "Questões do Módulo 1",
        duration: "25 min",
        type: "questoes",
      },
    ],
  },
  "2": {
    id: 2,
    title: "Sistema Esquelético",
    description: "Estudo dos ossos, suas funções, classificações e características",
    icon: Users,
    color: "bg-teal-500",
    sections: [
      {
        id: "conceito-funcoes",
        title: "Conceito e Funções do Esqueleto",
        duration: "15 min",
        type: "teoria",
      },
      {
        id: "tipos-esqueletos",
        title: "Tipos de Esqueletos",
        duration: "10 min",
        type: "teoria",
      },
      {
        id: "divisao-esqueleto",
        title: "Divisão do Esqueleto",
        duration: "12 min",
        type: "teoria",
      },
      {
        id: "numero-ossos",
        title: "O Número de Ossos no Esqueleto Humano",
        duration: "8 min",
        type: "teoria",
      },
      {
        id: "classificacao-forma",
        title: "Classificação dos Ossos pela Forma",
        duration: "20 min",
        type: "teoria",
      },
      {
        id: "substancia-ossea",
        title: "Tipos de Substância Óssea",
        duration: "18 min",
        type: "teoria",
      },
      {
        id: "periosteo",
        title: "Periósteo",
        duration: "12 min",
        type: "teoria",
      },
      {
        id: "elementos-superficie",
        title: "Elementos Descritivos da Superfície dos Ossos",
        duration: "22 min",
        type: "teoria",
      },
      {
        id: "nutricao-ossos",
        title: "Nutrição dos Ossos",
        duration: "10 min",
        type: "teoria",
      },
      {
        id: "consideracoes-clinicas",
        title: "Considerações Clínicas Importantes",
        duration: "15 min",
        type: "teoria",
      },
      {
        id: "questoes-modulo2",
        title: "Questões do Módulo 2",
        duration: "30 min",
        type: "questoes",
      },
    ],
  },
  "3": {
    id: 3,
    title: "Sistema Articular",
    description: "Articulações, movimentos e classificações das conexões ósseas",
    icon: Brain,
    color: "bg-green-500",
    sections: [
      {
        id: "conceito-articulacao",
        title: "Conceito de Articulação",
        duration: "10 min",
        type: "teoria",
      },
      {
        id: "classificacao-articulacoes",
        title: "Classificação das Articulações",
        duration: "15 min",
        type: "teoria",
      },
      {
        id: "articulacoes-fibrosas",
        title: "Articulações Fibrosas",
        duration: "12 min",
        type: "teoria",
      },
      {
        id: "articulacoes-cartilagineas",
        title: "Articulações Cartilagíneas",
        duration: "10 min",
        type: "teoria",
      },
      {
        id: "articulacoes-sinoviais",
        title: "Articulações Sinoviais",
        duration: "20 min",
        type: "teoria",
      },
      {
        id: "movimentos-corporais",
        title: "Principais Movimentos do Corpo",
        duration: "18 min",
        type: "teoria",
      },
      {
        id: "classificacao-funcional",
        title: "Classificação Funcional das Sinoviais",
        duration: "15 min",
        type: "teoria",
      },
      {
        id: "classificacao-morfologica",
        title: "Classificação Morfológica das Sinoviais",
        duration: "16 min",
        type: "teoria",
      },
      {
        id: "vasos-nervos",
        title: "Vasos e Nervos das Articulações",
        duration: "12 min",
        type: "teoria",
      },
      {
        id: "questoes-modulo3",
        title: "Questões do Módulo 3",
        duration: "25 min",
        type: "questoes",
      },
    ],
  },
  "4": {
    id: 4,
    title: "Sistema Muscular",
    description: "Músculos esqueléticos, contração muscular e biomecânica",
    icon: Heart,
    color: "bg-red-500",
    sections: [
      {
        id: "conceito-musculo",
        title: "Conceito de Músculo",
        duration: "12 min",
        type: "teoria",
      },
      {
        id: "variedades-musculos",
        title: "Variedades de Músculos",
        duration: "15 min",
        type: "teoria",
      },
      {
        id: "componentes-anatomicos",
        title: "Componentes Anatômicos dos Músculos",
        duration: "18 min",
        type: "teoria",
      },
      {
        id: "fascia-muscular",
        title: "Fáscia Muscular",
        duration: "10 min",
        type: "teoria",
      },
      {
        id: "trabalho-muscular",
        title: "Trabalho Muscular e Alavancas",
        duration: "20 min",
        type: "teoria",
      },
      {
        id: "origem-insercao",
        title: "Conceitos de Origem e Inserção",
        duration: "12 min",
        type: "teoria",
      },
      {
        id: "classificacao-musculos",
        title: "Classificação dos Músculos",
        duration: "16 min",
        type: "teoria",
      },
      {
        id: "acao-muscular",
        title: "Ação Muscular: Agonistas e Antagonistas",
        duration: "14 min",
        type: "teoria",
      },
      {
        id: "orgaos-acessorios",
        title: "Órgãos Acessórios do Sistema Muscular",
        duration: "15 min",
        type: "teoria",
      },
      {
        id: "vasos-nervos-musculos",
        title: "Vasos e Nervos dos Músculos",
        duration: "10 min",
        type: "teoria",
      },
      {
        id: "eletromiografia",
        title: "Eletromiografia",
        duration: "8 min",
        type: "teoria",
      },
      {
        id: "questoes-modulo4",
        title: "Questões do Módulo 4",
        duration: "30 min",
        type: "questoes",
      },
    ],
  },
  "5": {
    id: 5,
    title: "Sistema Nervoso",
    description: "Neuroanatomia, SNC, SNP e sistema nervoso autônomo",
    icon: Brain,
    color: "bg-purple-500",
    sections: [
      {
        id: "conceito-funcoes-sn",
        title: "Conceito e Funções do Sistema Nervoso",
        duration: "15 min",
        type: "teoria",
      },
      {
        id: "tecido-nervoso",
        title: "Tecido Nervoso: Neurônios e Células Gliais",
        duration: "18 min",
        type: "teoria",
      },
      {
        id: "neuronio",
        title: "Unidade Morfofuncional: O Neurônio",
        duration: "20 min",
        type: "teoria",
      },
      {
        id: "divisao-sn",
        title: "Divisão Geral do Sistema Nervoso",
        duration: "12 min",
        type: "teoria",
      },
      {
        id: "snc-desenvolvimento",
        title: "SNC: Formação e Desenvolvimento",
        duration: "16 min",
        type: "teoria",
      },
      {
        id: "partes-snc",
        title: "Partes do SNC: Encéfalo e Medula",
        duration: "25 min",
        type: "teoria",
      },
      {
        id: "areas-funcionais",
        title: "Áreas Funcionais do Córtex Cerebral",
        duration: "22 min",
        type: "teoria",
      },
      {
        id: "meninges",
        title: "Meninges: Envoltórios do SNC",
        duration: "18 min",
        type: "teoria",
      },
      {
        id: "snp",
        title: "Sistema Nervoso Periférico",
        duration: "20 min",
        type: "teoria",
      },
      {
        id: "vias-nervosas",
        title: "Grandes Vias Aferentes e Eferentes",
        duration: "24 min",
        type: "teoria",
      },
      {
        id: "sna",
        title: "Sistema Nervoso Autônomo",
        duration: "28 min",
        type: "teoria",
      },
      {
        id: "questoes-modulo5",
        title: "Questões do Módulo 5",
        duration: "35 min",
        type: "questoes",
      },
    ],
  },
  "6": {
    id: 6,
    title: "Sistema Circulatório",
    description: "Coração, vasos sanguíneos e sistema linfático",
    icon: Heart,
    color: "bg-pink-500",
    sections: [
      {
        id: "conceito-historico",
        title: "Conceito e Histórico",
        duration: "10 min",
        type: "teoria",
      },
      {
        id: "divisao-sistema",
        title: "Divisão do Sistema Circulatório",
        duration: "12 min",
        type: "teoria",
      },
      {
        id: "coracao",
        title: "Coração: O Órgão Central",
        duration: "25 min",
        type: "teoria",
      },
      {
        id: "arterias",
        title: "Artérias: Vasos de Condução",
        duration: "18 min",
        type: "teoria",
      },
      {
        id: "veias",
        title: "Veias: Vasos de Retorno",
        duration: "15 min",
        type: "teoria",
      },
      {
        id: "capilares",
        title: "Capilares Sanguíneos",
        duration: "10 min",
        type: "teoria",
      },
      {
        id: "anastomoses",
        title: "Anastomoses Arteriais e Arteriovenosas",
        duration: "14 min",
        type: "teoria",
      },
      {
        id: "sistema-linfatico",
        title: "Sistema Linfático",
        duration: "16 min",
        type: "teoria",
      },
      {
        id: "questoes-modulo6",
        title: "Questões do Módulo 6",
        duration: "30 min",
        type: "questoes",
      },
    ],
  },
  "7": {
    id: 7,
    title: "Membro Inferior",
    description: "Anatomia regional do membro inferior e locomoção",
    icon: Users,
    color: "bg-indigo-500",
    sections: [
      {
        id: "introducao-mi",
        title: "Introdução ao Membro Inferior",
        duration: "8 min",
        type: "teoria",
      },
      {
        id: "esqueleto-mi",
        title: "Esqueleto do Membro Inferior",
        duration: "25 min",
        type: "teoria",
      },
      {
        id: "anatomia-superficie",
        title: "Anatomia de Superfície",
        duration: "12 min",
        type: "teoria",
      },
      {
        id: "estruturas-superficiais",
        title: "Estruturas Superficiais",
        duration: "15 min",
        type: "teoria",
      },
      {
        id: "fascia-mi",
        title: "Fáscia do Membro Inferior",
        duration: "10 min",
        type: "teoria",
      },
      {
        id: "drenagem-linfatica",
        title: "Drenagem Linfática",
        duration: "12 min",
        type: "teoria",
      },
      {
        id: "regioes-mi",
        title: "Regiões e Estruturas Profundas",
        duration: "30 min",
        type: "teoria",
      },
      {
        id: "articulacao-joelho",
        title: "Articulação do Joelho",
        duration: "18 min",
        type: "teoria",
      },
      {
        id: "pe",
        title: "O Pé",
        duration: "16 min",
        type: "teoria",
      },
      {
        id: "deambulacao",
        title: "Considerações sobre a Deambulação",
        duration: "14 min",
        type: "teoria",
      },
      {
        id: "questoes-modulo7",
        title: "Questões do Módulo 7",
        duration: "32 min",
        type: "questoes",
      },
    ],
  },
  "8": {
    id: 8,
    title: "Membro Superior",
    description: "Anatomia regional do membro superior e preensão",
    icon: Users,
    color: "bg-orange-500",
    sections: [
      {
        id: "introducao-ms",
        title: "Introdução ao Membro Superior",
        duration: "8 min",
        type: "teoria",
      },
      {
        id: "esqueleto-ms",
        title: "Esqueleto do Membro Superior",
        duration: "22 min",
        type: "teoria",
      },
      {
        id: "anatomia-superficie-ms",
        title: "Anatomia de Superfície",
        duration: "10 min",
        type: "teoria",
      },
      {
        id: "estruturas-superficiais-ms",
        title: "Estruturas Superficiais",
        duration: "14 min",
        type: "teoria",
      },
      {
        id: "fascia-ms",
        title: "Fáscia do Membro Superior",
        duration: "8 min",
        type: "teoria",
      },
      {
        id: "drenagem-linfatica-ms",
        title: "Drenagem Linfática e Mama",
        duration: "12 min",
        type: "teoria",
      },
      {
        id: "musculos-ms",
        title: "Músculos do Membro Superior",
        duration: "25 min",
        type: "teoria",
      },
      {
        id: "axila",
        title: "Axila: Conteúdo e Relações",
        duration: "16 min",
        type: "teoria",
      },
      {
        id: "plexo-braquial",
        title: "Plexo Braquial",
        duration: "20 min",
        type: "teoria",
      },
      {
        id: "vasos-ms",
        title: "Artérias e Veias do Membro Superior",
        duration: "18 min",
        type: "teoria",
      },
      {
        id: "braco-cotovelo",
        title: "Braço e Fossa Cubital",
        duration: "14 min",
        type: "teoria",
      },
      {
        id: "antebraco",
        title: "Antebraço",
        duration: "16 min",
        type: "teoria",
      },
      {
        id: "articulacoes-ms",
        title: "Articulações do Cotovelo e Rádio-ulnar",
        duration: "15 min",
        type: "teoria",
      },
      {
        id: "mao",
        title: "Mão",
        duration: "20 min",
        type: "teoria",
      },
      {
        id: "questoes-modulo8",
        title: "Questões do Módulo 8",
        duration: "30 min",
        type: "questoes",
      },
    ],
  },
}

export default function ModulePage() {
  const params = useParams()
  const router = useRouter()
  const moduleId = params.id as string
  const [currentSection, setCurrentSection] = useState(0)
  const [completedSections, setCompletedSections] = useState<string[]>([])
  const [userProgress, setUserProgress] = useState(getUserProgress())

  const moduleData = modulesData[moduleId as keyof typeof modulesData]

  useEffect(() => {
    if (!moduleData) {
      router.push("/")
    } else {
      const progress = getUserProgress()
      setUserProgress(progress)
      setCompletedSections(progress.completedSections)
    }
  }, [moduleData, router])

  if (!moduleData) {
    return <div>Módulo não encontrado</div>
  }

  const Icon = moduleData.icon
  const progress = calculateModuleProgress(moduleId, moduleData.sections.length)

  const handleNextSection = () => {
    if (currentSection < moduleData.sections.length - 1) {
      setCurrentSection(currentSection + 1)
    }
  }

  const handlePrevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1)
    }
  }

  const handleMarkSectionComplete = (sectionId: string) => {
    markSectionComplete(sectionId, moduleId)
    const updatedProgress = getUserProgress()
    setUserProgress(updatedProgress)
    setCompletedSections(updatedProgress.completedSections)
  }

  const currentSectionData = moduleData.sections[currentSection]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-accent/10">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <Home className="w-4 h-4 mr-2" />
                  Início
                </Button>
              </Link>
              <Separator orientation="vertical" className="h-6" />
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 ${moduleData.color} rounded-lg flex items-center justify-center`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="font-semibold text-balance">{moduleData.title}</h1>
                  <p className="text-xs text-muted-foreground">
                    Seção {currentSection + 1} de {moduleData.sections.length}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="hidden sm:flex">
                {progress}% Concluído
              </Badge>
              <Link href="/progresso">
                <Button variant="outline" size="sm">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Progresso
                </Button>
              </Link>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const sidebar = document.querySelector("[data-sidebar]")
                  if (sidebar) {
                    sidebar.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                }}
              >
                <List className="w-4 h-4 mr-2" />
                Índice
              </Button>
            </div>
          </div>
          <div className="mt-4">
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Índice do Módulo */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24" data-sidebar>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Conteúdo do Módulo</CardTitle>
                <CardDescription>
                  {completedSections.filter((id) => id.includes(`modulo${moduleId}`)).length}/
                  {moduleData.sections.length} seções concluídas
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[400px]">
                  <div className="p-4 space-y-2">
                    {moduleData.sections.map((section, index) => {
                      const isCompleted = completedSections.includes(section.id)
                      const isCurrent = index === currentSection

                      return (
                        <button
                          key={section.id}
                          onClick={() => setCurrentSection(index)}
                          className={`w-full text-left p-3 rounded-lg transition-all ${
                            isCurrent ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center space-x-2 mb-1">
                                {section.type === "questoes" ? (
                                  <HelpCircle className="w-4 h-4 flex-shrink-0" />
                                ) : (
                                  <FileText className="w-4 h-4 flex-shrink-0" />
                                )}
                                {isCompleted && <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />}
                              </div>
                              <h4 className="font-medium text-sm leading-tight text-balance">{section.title}</h4>
                              <div className="flex items-center space-x-2 mt-1">
                                <Clock className="w-3 h-3" />
                                <span className="text-xs opacity-75">{section.duration}</span>
                              </div>
                            </div>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* Conteúdo Principal */}
          <div className="lg:col-span-3">
            <Card className="min-h-[600px]">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl text-balance">{currentSectionData.title}</CardTitle>
                    <CardDescription className="flex items-center space-x-4 mt-2">
                      <Badge variant={currentSectionData.type === "questoes" ? "destructive" : "secondary"}>
                        {currentSectionData.type === "questoes" ? "Questões" : "Teoria"}
                      </Badge>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{currentSectionData.duration}</span>
                      </span>
                    </CardDescription>
                  </div>
                  {currentSectionData.type !== "questoes" && (
                    <Button
                      onClick={() => handleMarkSectionComplete(currentSectionData.id)}
                      variant={completedSections.includes(currentSectionData.id) ? "secondary" : "default"}
                      size="sm"
                    >
                      {completedSections.includes(currentSectionData.id) ? (
                        <>
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Concluído
                        </>
                      ) : (
                        "Marcar como Concluído"
                      )}
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <ModuleContent sectionId={currentSectionData.id} moduleId={moduleId} />
              </CardContent>
            </Card>

            {/* Navegação entre seções */}
            <div className="flex justify-between items-center mt-6">
              <Button
                onClick={handlePrevSection}
                disabled={currentSection === 0}
                variant="outline"
                className="flex items-center space-x-2 bg-transparent"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Anterior</span>
              </Button>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Seção {currentSection + 1} de {moduleData.sections.length}
                </p>
              </div>

              <Button
                onClick={handleNextSection}
                disabled={currentSection === moduleData.sections.length - 1}
                className="flex items-center space-x-2"
              >
                <span>Próxima</span>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
