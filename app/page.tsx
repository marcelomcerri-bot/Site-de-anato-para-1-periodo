"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { getUserProgress, calculateModuleProgress } from "@/lib/progress-storage"
import { BookOpen, Brain, Heart, Users, ChevronRight, Play, CheckCircle, BarChart3, Trophy } from "lucide-react"
import Link from "next/link"

const modules = [
  {
    id: 1,
    title: "Introdução ao Estudo da Anatomia",
    description: "Conceitos fundamentais, terminologia anatômica e organização do corpo humano",
    icon: BookOpen,
    lessons: 13,
    duration: "2h 30min",
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Sistema Esquelético",
    description: "Estudo dos ossos, suas funções, classificações e características",
    icon: Users,
    lessons: 11,
    duration: "3h 15min",
    color: "bg-teal-500",
  },
  {
    id: 3,
    title: "Sistema Articular",
    description: "Articulações, movimentos e classificações das conexões ósseas",
    icon: Brain,
    lessons: 10,
    duration: "2h 45min",
    color: "bg-green-500",
  },
  {
    id: 4,
    title: "Sistema Muscular",
    description: "Músculos esqueléticos, contração muscular e biomecânica",
    icon: Heart,
    lessons: 12,
    duration: "4h 00min",
    color: "bg-red-500",
  },
  {
    id: 5,
    title: "Sistema Nervoso",
    description: "Neuroanatomia, SNC, SNP e sistema nervoso autônomo",
    icon: Brain,
    lessons: 12,
    duration: "5h 30min",
    color: "bg-purple-500",
  },
  {
    id: 6,
    title: "Sistema Circulatório",
    description: "Coração, vasos sanguíneos e sistema linfático",
    icon: Heart,
    lessons: 9,
    duration: "3h 45min",
    color: "bg-pink-500",
  },
  {
    id: 7,
    title: "Membro Inferior",
    description: "Anatomia regional do membro inferior e locomoção",
    icon: Users,
    lessons: 11,
    duration: "4h 15min",
    color: "bg-indigo-500",
  },
  {
    id: 8,
    title: "Membro Superior",
    description: "Anatomia regional do membro superior e preensão",
    icon: Users,
    lessons: 15,
    duration: "3h 50min",
    color: "bg-orange-500",
  },
]

export default function HomePage() {
  const [userProgress, setUserProgress] = useState(getUserProgress())
  const [moduleProgresses, setModuleProgresses] = useState<Record<string, number>>({})

  useEffect(() => {
    const progress = getUserProgress()
    setUserProgress(progress)

    // Calcular progresso de cada módulo
    const progresses: Record<string, number> = {}
    modules.forEach((module) => {
      progresses[module.id.toString()] = calculateModuleProgress(module.id.toString(), module.lessons)
    })
    setModuleProgresses(progresses)
  }, [])

  const completedModules = Object.values(moduleProgresses).filter((progress) => progress === 100).length
  const totalProgress = Object.values(moduleProgresses).reduce((sum, progress) => sum + progress, 0) / modules.length
  const totalQuizzes = Object.keys(userProgress.quizScores).length
  const averageQuizScore =
    totalQuizzes > 0
      ? Object.values(userProgress.quizScores).reduce((sum, score) => sum + score.percentage, 0) / totalQuizzes
      : 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-accent/10">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 medical-gradient rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-balance">AnatomiaEdu</h1>
                <p className="text-sm text-muted-foreground">Enfermagem • 1º Período</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="hidden sm:flex">
                {completedModules}/{modules.length} Módulos
              </Badge>
              <Link href="/progresso">
                <Button variant="outline" size="sm">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Progresso
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Domine a <span className="medical-gradient bg-clip-text text-transparent">Anatomia Humana</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Plataforma completa de ensino de anatomia para estudantes de enfermagem. Conteúdo estruturado, questões
              interativas e progresso personalizado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/modulo/1">
                <Button size="lg" className="medical-gradient text-white">
                  <Play className="w-5 h-5 mr-2" />
                  Começar Estudos
                </Button>
              </Link>
              <Link href="/progresso">
                <Button size="lg" variant="outline">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Ver Progresso
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between text-lg">
                  Progresso Geral
                  <Badge variant="secondary">{Math.round(totalProgress)}%</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Progress value={totalProgress} className="h-3 mb-2" />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{userProgress.completedSections.length} seções concluídas</span>
                  <span>{completedModules} módulos completos</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between text-lg">
                  <div className="flex items-center">
                    <Trophy className="w-5 h-5 mr-2" />
                    Quizzes
                  </div>
                  <Badge variant="secondary">{totalQuizzes}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-1">{Math.round(averageQuizScore)}%</div>
                <p className="text-sm text-muted-foreground">Média de {totalQuizzes} quizzes realizados</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between text-lg">
                  Módulos Ativos
                  <Badge variant="secondary">{Object.keys(userProgress.lastAccessed).length}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-1">{Object.keys(userProgress.lastAccessed).length}/8</div>
                <p className="text-sm text-muted-foreground">Módulos com progresso iniciado</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Módulos de Estudo</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Cada módulo contém conteúdo teórico detalhado, ilustrações e questões práticas para fixação do
              aprendizado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {modules.map((module) => {
              const Icon = module.icon
              const moduleProgress = moduleProgresses[module.id.toString()] || 0
              const isCompleted = moduleProgress === 100
              const isStarted = moduleProgress > 0
              const lastAccessed = userProgress.lastAccessed[module.id.toString()]

              return (
                <Card
                  key={module.id}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className={`w-12 h-12 ${module.color} rounded-lg flex items-center justify-center mb-3`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      {isCompleted && <CheckCircle className="w-5 h-5 text-green-500" />}
                    </div>
                    <CardTitle className="text-lg leading-tight text-balance">{module.title}</CardTitle>
                    <CardDescription className="text-sm text-pretty">{module.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{module.lessons} seções</span>
                        <span>{module.duration}</span>
                      </div>

                      <div className="space-y-1">
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Progresso</span>
                          <span>{Math.round(moduleProgress)}%</span>
                        </div>
                        <Progress value={moduleProgress} className="h-2" />
                      </div>

                      {lastAccessed && (
                        <p className="text-xs text-muted-foreground">
                          Último acesso: {new Date(lastAccessed).toLocaleDateString("pt-BR")}
                        </p>
                      )}

                      <Link href={`/modulo/${module.id}`}>
                        <Button className="w-full group-hover:medical-gradient group-hover:text-white transition-all">
                          {isCompleted ? "Revisar" : isStarted ? "Continuar" : "Iniciar"}
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card/50 py-12 px-4 mt-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 medical-gradient rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-lg">AnatomiaEdu</span>
              </div>
              <p className="text-muted-foreground text-sm text-pretty">
                Plataforma educacional dedicada ao ensino de anatomia humana para estudantes de enfermagem.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Recursos</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Conteúdo Interativo</li>
                <li>Questões Práticas</li>
                <li>Progresso Personalizado</li>
                <li>Suporte ao Estudante</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Suporte</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Central de Ajuda</li>
                <li>Guias de Estudo</li>
                <li>Contato</li>
                <li>Feedback</li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 mt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 AnatomiaEdu. Desenvolvido para estudantes de enfermagem.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
