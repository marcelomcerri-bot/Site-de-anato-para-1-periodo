"use client"

import { useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ModuleContent } from "@/components/content/module-content"
import { ChevronLeft, ChevronRight, BookOpen, Brain, Heart, Users, Home } from "lucide-react"
import Link from "next/link"

// Dados dos módulos simplificados
const modulesData = {
  "1": {
    id: 1,
    title: "Introdução à Anatomia",
    icon: BookOpen,
    color: "bg-blue-500",
  },
  "2": {
    id: 2,
    title: "Sistema Esquelético",
    icon: Users,
    color: "bg-teal-500",
  },
  "3": {
    id: 3,
    title: "Articulações",
    icon: Brain,
    color: "bg-green-500",
  },
  "4": {
    id: 4,
    title: "Sistema Muscular",
    icon: Heart,
    color: "bg-red-500",
  },
  "5": {
    id: 5,
    title: "Sistema Nervoso",
    icon: Brain,
    color: "bg-purple-500",
  },
  "6": {
    id: 6,
    title: "Sistema Circulatório",
    icon: Heart,
    color: "bg-pink-500",
  },
  "7": {
    id: 7,
    title: "Membro Inferior",
    icon: Users,
    color: "bg-indigo-500",
  },
  "8": {
    id: 8,
    title: "Membro Superior",
    icon: Users,
    color: "bg-orange-500",
  },
}

export default function ModulePage() {
  const params = useParams()
  const router = useRouter()
  const moduleId = params.id as string

  const moduleData = modulesData[moduleId as keyof typeof modulesData]

  useEffect(() => {
    if (!moduleData) {
      router.push("/")
    }
  }, [moduleData, router])

  if (!moduleData) {
    return <div>Módulo não encontrado</div>
  }

  const Icon = moduleData.icon
  const currentModuleNum = Number.parseInt(moduleId)
  const prevModuleId = currentModuleNum > 1 ? currentModuleNum - 1 : null
  const nextModuleId = currentModuleNum < 8 ? currentModuleNum + 1 : null

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
                  <p className="text-xs text-muted-foreground">Módulo {moduleId} de 8</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Conteúdo Principal */}
        <div className="max-w-4xl mx-auto">
          <Card className="min-h-[600px]">
            <CardHeader>
              <CardTitle className="text-3xl text-balance">{moduleData.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ModuleContent moduleId={Number.parseInt(moduleId)} />
            </CardContent>
          </Card>

          <div className="flex justify-between items-center mt-8">
            {prevModuleId ? (
              <Link href={`/modulo/${prevModuleId}`}>
                <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                  <ChevronLeft className="w-4 h-4" />
                  <span>Módulo Anterior</span>
                </Button>
              </Link>
            ) : (
              <div></div>
            )}

            <div className="text-center">
              <p className="text-sm text-muted-foreground">Módulo {moduleId} de 8</p>
            </div>

            {nextModuleId ? (
              <Link href={`/modulo/${nextModuleId}`}>
                <Button className="flex items-center space-x-2">
                  <span>Próximo Módulo</span>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
