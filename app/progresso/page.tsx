"use client"

import { ProgressDashboard } from "@/components/progress/progress-dashboard"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"
import Link from "next/link"

export default function ProgressPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-accent/10">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <Home className="w-4 h-4 mr-2" />
                  Início
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold">Meu Progresso</h1>
                <p className="text-muted-foreground">Acompanhe seu desenvolvimento no curso</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <ProgressDashboard />
      </div>
    </div>
  )
}
