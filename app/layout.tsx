import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "AnatomiaEdu - Plataforma de Ensino de Anatomia",
  description:
    "Plataforma educacional completa para estudantes de enfermagem do 1º período - Disciplina de Anatomia Humana",
  generator: "v0.app",
  keywords: ["anatomia", "enfermagem", "educação", "medicina", "sistema esquelético", "sistema muscular"],
  authors: [{ name: "AnatomiaEdu" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
