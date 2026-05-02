import { createFileRoute } from '@tanstack/react-router'
import { allProjects } from 'content-collections'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github } from 'lucide-react'
import {
  pageTranslations,
  pickLanguage,
  projectDescriptionTranslations,
  useLanguage,
} from '@/lib/i18n'

export const Route = createFileRoute('/projects')({
  component: Projects,
})

function Projects() {
  const { language } = useLanguage()
  const copy = pageTranslations[language]

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          {copy.projectsTitle}
        </h1>
        <p className="text-gray-600 mb-8">
          {copy.projectsIntro}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {allProjects.map((project) => (
            <Card key={project._meta.path} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-gray-600 mb-4 flex-1">
                  {pickLanguage(
                    language,
                    projectDescriptionTranslations[
                      project._meta.path as keyof typeof projectDescriptionTranslations
                    ] ?? {
                      en: project.description,
                      es: project.description,
                    },
                  )}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <ExternalLink size={16} />
                      {copy.liveDemo}
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
