"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Brain, Heart, Users, ChevronRight, Play } from "lucide-react"
import Link from "next/link"

const modules = [
  {
    id: 1,
    title: "Introdução à Anatomia",
    description: "Conceitos fundamentais, terminologia anatômica e organização do corpo humano",
    icon: BookOpen,
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Sistema Esquelético",
    description: "Estudo dos ossos, suas funções, classificações e características",
    icon: Users,
    color: "bg-teal-500",
  },
  {
    id: 3,
    title: "Articulações",
    description: "Articulações, movimentos e classificações das conexões ósseas",
    icon: Brain,
    color: "bg-green-500",
  },
  {
    id: 4,
    title: "Sistema Muscular",
    description: "Músculos esqueléticos, contração muscular e biomecânica",
    icon: Heart,
    color: "bg-red-500",
  },
  {
    id: 5,
    title: "Sistema Nervoso",
    description: "Neuroanatomia, SNC, SNP e sistema nervoso autônomo",
    icon: Brain,
    color: "bg-purple-500",
  },
  {
    id: 6,
    title: "Sistema Circulatório",
    description: "Coração, vasos sanguíneos e sistema linfático",
    icon: Heart,
    color: "bg-pink-500",
  },
  {
    id: 7,
    title: "Membro Inferior",
    description: "Anatomia regional do membro inferior e locomoção",
    icon: Users,
    color: "bg-indigo-500",
  },
  {
    id: 8,
    title: "Membro Superior",
    description: "Anatomia regional do membro superior e preensão",
    icon: Users,
    color: "bg-orange-500",
  },
]

export default function HomePage() {
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
              Plataforma completa de ensino de anatomia para estudantes de enfermagem. Conteúdo estruturado baseado no
              livro de referência da disciplina.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/modulo/1">
                <Button size="lg" className="medical-gradient text-white">
                  <Play className="w-5 h-5 mr-2" />
                  Começar Estudos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Módulos de Estudo</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Cada módulo contém conteúdo teórico detalhado baseado no material de referência da disciplina.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {modules.map((module) => {
              const Icon = module.icon

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
                    </div>
                    <CardTitle className="text-lg leading-tight text-balance">{module.title}</CardTitle>
                    <CardDescription className="text-sm text-pretty">{module.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <Link href={`/modulo/${module.id}`}>
                        <Button className="w-full group-hover:medical-gradient group-hover:text-white transition-all">
                          Estudar
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
                <li>Conteúdo Estruturado</li>
                <li>Material de Referência</li>
                <li>Navegação Simples</li>
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
