"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  getUserProgress,
  resetProgress,
  exportProgress,
  importProgress,
  type UserProgress,
} from "@/lib/progress-storage"
import { Trophy, BookOpen, Calendar, Download, Upload, RotateCcw, TrendingUp } from "lucide-react"

const moduleNames = {
  "1": "Introdução ao Estudo da Anatomia",
  "2": "Sistema Esquelético",
  "3": "Sistema Articular",
  "4": "Sistema Muscular",
  "5": "Sistema Nervoso",
  "6": "Sistema Circulatório",
  "7": "Membro Inferior",
  "8": "Membro Superior",
}

const moduleSectionCounts = {
  "1": 13,
  "2": 11,
  "3": 10,
  "4": 12,
  "5": 12,
  "6": 9,
  "7": 11,
  "8": 15,
}

export function ProgressDashboard() {
  const [progress, setProgress] = useState<UserProgress | null>(null)
  const [importData, setImportData] = useState("")
  const [showImport, setShowImport] = useState(false)

  useEffect(() => {
    setProgress(getUserProgress())
  }, [])

  if (!progress) {
    return <div>Carregando...</div>
  }

  const totalSections = Object.values(moduleSectionCounts).reduce((a, b) => a + b, 0)
  const completedSections = progress.completedSections.length
  const overallProgress = Math.round((completedSections / totalSections) * 100)

  const quizResults = Object.entries(progress.quizScores).map(([sectionId, result]) => ({
    sectionId,
    ...result,
    moduleId: sectionId.includes("modulo") ? sectionId.match(/modulo(\d+)/)?.[1] || "1" : "1",
  }))

  const averageQuizScore =
    quizResults.length > 0
      ? Math.round(quizResults.reduce((sum, result) => sum + result.percentage, 0) / quizResults.length)
      : 0

  const handleExport = () => {
    const data = exportProgress()
    const blob = new Blob([data], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `anatomia-progress-${new Date().toISOString().split("T")[0]}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleImport = () => {
    if (importProgress(importData)) {
      setProgress(getUserProgress())
      setImportData("")
      setShowImport(false)
      alert("Progresso importado com sucesso!")
    } else {
      alert("Erro ao importar progresso. Verifique o formato do arquivo.")
    }
  }

  const handleReset = () => {
    if (confirm("Tem certeza que deseja resetar todo o progresso? Esta ação não pode ser desfeita.")) {
      resetProgress()
      setProgress(getUserProgress())
    }
  }

  return (
    <div className="space-y-6">
      {/* Resumo Geral */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Progresso Geral</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{overallProgress}%</div>
            <p className="text-xs text-muted-foreground">
              {completedSections} de {totalSections} seções
            </p>
            <Progress value={overallProgress} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Média dos Quizzes</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{averageQuizScore}%</div>
            <p className="text-xs text-muted-foreground">{quizResults.length} quizzes realizados</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Módulos Iniciados</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Object.keys(progress.lastAccessed).length}</div>
            <p className="text-xs text-muted-foreground">de 8 módulos disponíveis</p>
          </CardContent>
        </Card>
      </div>

      {/* Progresso por Módulo */}
      <Card>
        <CardHeader>
          <CardTitle>Progresso por Módulo</CardTitle>
          <CardDescription>Acompanhe seu progresso em cada módulo do curso</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Object.entries(moduleNames).map(([moduleId, moduleName]) => {
              const totalSections = moduleSectionCounts[moduleId as keyof typeof moduleSectionCounts]
              const completedInModule = progress.completedSections.filter((sectionId) =>
                sectionId.includes(`modulo${moduleId}`),
              ).length
              const moduleProgress = Math.round((completedInModule / totalSections) * 100)
              const lastAccessed = progress.lastAccessed[moduleId]

              return (
                <div key={moduleId} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">{moduleName}</h4>
                      <p className="text-sm text-muted-foreground">
                        {completedInModule} de {totalSections} seções
                        {lastAccessed && (
                          <span className="ml-2">
                            • Último acesso: {new Date(lastAccessed).toLocaleDateString("pt-BR")}
                          </span>
                        )}
                      </p>
                    </div>
                    <Badge variant={moduleProgress === 100 ? "default" : "secondary"}>{moduleProgress}%</Badge>
                  </div>
                  <Progress value={moduleProgress} className="h-2" />
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Resultados dos Quizzes */}
      {quizResults.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Resultados dos Quizzes</CardTitle>
            <CardDescription>Suas pontuações nos quizzes realizados</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {quizResults
                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                .map((result) => (
                  <div key={result.sectionId} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h4 className="font-medium">{moduleNames[result.moduleId as keyof typeof moduleNames]} - Quiz</h4>
                      <p className="text-sm text-muted-foreground flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(result.date).toLocaleDateString("pt-BR")}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold">
                        {result.score}/{result.total}
                      </div>
                      <Badge
                        variant={
                          result.percentage >= 80 ? "default" : result.percentage >= 60 ? "secondary" : "destructive"
                        }
                      >
                        {result.percentage}%
                      </Badge>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Ações de Gerenciamento */}
      <Card>
        <CardHeader>
          <CardTitle>Gerenciar Progresso</CardTitle>
          <CardDescription>Exporte, importe ou reset seu progresso</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Button onClick={handleExport} variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Exportar Progresso
            </Button>

            <Button onClick={() => setShowImport(!showImport)} variant="outline">
              <Upload className="w-4 h-4 mr-2" />
              Importar Progresso
            </Button>

            <Button onClick={handleReset} variant="destructive">
              <RotateCcw className="w-4 h-4 mr-2" />
              Resetar Progresso
            </Button>
          </div>

          {showImport && (
            <Alert>
              <AlertDescription>
                <div className="space-y-2">
                  <p>Cole aqui o conteúdo do arquivo de progresso exportado:</p>
                  <textarea
                    value={importData}
                    onChange={(e) => setImportData(e.target.value)}
                    className="w-full h-32 p-2 border rounded-md text-sm font-mono"
                    placeholder="Cole o JSON do progresso aqui..."
                  />
                  <div className="flex gap-2">
                    <Button onClick={handleImport} size="sm">
                      Importar
                    </Button>
                    <Button onClick={() => setShowImport(false)} variant="outline" size="sm">
                      Cancelar
                    </Button>
                  </div>
                </div>
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
