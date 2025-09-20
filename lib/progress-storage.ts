export interface UserProgress {
  completedSections: string[]
  moduleProgress: Record<string, number>
  quizScores: Record<string, { score: number; total: number; percentage: number; date: string }>
  lastAccessed: Record<string, string>
}

const STORAGE_KEY = "anatomia-progress"

export function getUserProgress(): UserProgress {
  if (typeof window === "undefined") {
    return {
      completedSections: [],
      moduleProgress: {},
      quizScores: {},
      lastAccessed: {},
    }
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      return JSON.parse(stored)
    }
  } catch (error) {
    console.error("Error loading progress:", error)
  }

  return {
    completedSections: [],
    moduleProgress: {},
    quizScores: {},
    lastAccessed: {},
  }
}

export function saveUserProgress(progress: UserProgress): void {
  if (typeof window === "undefined") return

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  } catch (error) {
    console.error("Error saving progress:", error)
  }
}

export function markSectionComplete(sectionId: string, moduleId: string): void {
  const progress = getUserProgress()

  if (!progress.completedSections.includes(sectionId)) {
    progress.completedSections.push(sectionId)
  }

  // Update last accessed
  progress.lastAccessed[moduleId] = new Date().toISOString()

  saveUserProgress(progress)
}

export function saveQuizScore(sectionId: string, score: number, total: number): void {
  const progress = getUserProgress()
  const percentage = Math.round((score / total) * 100)

  progress.quizScores[sectionId] = {
    score,
    total,
    percentage,
    date: new Date().toISOString(),
  }

  saveUserProgress(progress)
}

export function calculateModuleProgress(moduleId: string, totalSections: number): number {
  const progress = getUserProgress()
  const completedInModule = progress.completedSections.filter(
    (sectionId) => sectionId.includes(`modulo${moduleId}`) || sectionId.startsWith(moduleId),
  ).length

  return Math.round((completedInModule / totalSections) * 100)
}

export function getQuizScore(sectionId: string) {
  const progress = getUserProgress()
  return progress.quizScores[sectionId] || null
}

export function resetProgress(): void {
  if (typeof window === "undefined") return

  localStorage.removeItem(STORAGE_KEY)
}

export function exportProgress(): string {
  const progress = getUserProgress()
  return JSON.stringify(progress, null, 2)
}

export function importProgress(data: string): boolean {
  try {
    const progress = JSON.parse(data) as UserProgress
    saveUserProgress(progress)
    return true
  } catch (error) {
    console.error("Error importing progress:", error)
    return false
  }
}
