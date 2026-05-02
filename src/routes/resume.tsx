import { marked } from 'marked'

import { createFileRoute } from '@tanstack/react-router'
import { allJobs, allEducations } from 'content-collections'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import {
  educationTranslations,
  jobTranslations,
  pageTranslations,
  pickLanguage,
  useLanguage,
} from '@/lib/i18n'

export const Route = createFileRoute('/resume')({
  component: App,
})

function sortByStartDateDesc<T extends { startDate: string }>(items: T[]) {
  return [...items].sort((a, b) => b.startDate.localeCompare(a.startDate))
}

function formatDateRange(startDate: string, endDate?: string, fallback?: string) {
  if (!endDate) {
    return fallback ?? startDate
  }

  if (endDate === startDate) {
    return startDate
  }

  return `${startDate} - ${endDate}`
}

function App() {
  const { language } = useLanguage()
  const copy = pageTranslations[language]
  const jobs = sortByStartDateDesc(allJobs)
  const educations = sortByStartDateDesc(allEducations)

  return (
    <div className="min-h-screen px-4 pb-10 pt-24 sm:px-6 lg:px-12 lg:pb-12">
      <div className="mx-auto max-w-4xl space-y-8 sm:space-y-12">
        <div className="space-y-3 text-center sm:space-y-4">
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            {copy.resumeTitle}
          </h1>
          <p className="text-base text-muted-foreground sm:text-lg">
            {copy.resumeSubtitle}
          </p>
          <Separator className="mt-6 sm:mt-8" />
        </div>

        {/* Career Summary */}
        <Card className="gap-4 rounded-lg py-5 sm:gap-6 sm:py-6">
          <CardHeader className="px-4 sm:px-6">
            <CardTitle className="text-xl leading-tight sm:text-2xl">
              {copy.careerSummaryTitle}
            </CardTitle>
          </CardHeader>
          <CardContent className="px-4 sm:px-6">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
              <p className="min-w-0 flex-1 text-sm leading-7 text-muted-foreground sm:text-base sm:text-foreground">
                {copy.careerSummary}
              </p>
              <img
                src="/daniel.jpg"
                alt={copy.headshotAlt}
                className="mx-auto h-52 w-44 rounded-lg object-cover sm:mx-0 sm:rounded-xl"
              />
            </div>
          </CardContent>
        </Card>

        {/* Work Experience */}
        <section className="space-y-4 sm:space-y-6">
          <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">
            {copy.workExperience}
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {jobs.map((job) => (
              <Card key={job.jobTitle} className="gap-4 rounded-lg py-5 sm:gap-6 sm:py-6">
                <CardHeader className="px-4 sm:px-6">
                  <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0 space-y-2">
                      <CardTitle className="text-lg leading-snug sm:text-xl">
                        {pickLanguage(
                          language,
                          jobTranslations[
                            job._meta.path as keyof typeof jobTranslations
                          ]?.title ?? {
                            en: job.jobTitle,
                            es: job.jobTitle,
                          },
                        )}
                      </CardTitle>
                      <p className="break-words text-sm font-medium text-muted-foreground sm:text-base">
                        {pickLanguage(
                          language,
                          jobTranslations[
                            job._meta.path as keyof typeof jobTranslations
                          ]?.company ?? {
                            en: job.company,
                            es: job.company,
                          },
                        )}{' '}
                        -{' '}
                        {pickLanguage(
                          language,
                          jobTranslations[
                            job._meta.path as keyof typeof jobTranslations
                          ]?.location ?? {
                            en: job.location,
                            es: job.location,
                          },
                        )}
                      </p>
                    </div>
                    <Badge variant="secondary" className="self-start text-xs sm:text-sm">
                      {formatDateRange(job.startDate, job.endDate, copy.present)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="px-4 sm:px-6">
                  <p className="mb-5 text-sm leading-7 text-muted-foreground sm:mb-6 sm:text-base sm:text-foreground">
                    {pickLanguage(
                      language,
                      jobTranslations[
                        job._meta.path as keyof typeof jobTranslations
                      ]?.summary ?? {
                        en: job.summary,
                        es: job.summary,
                      },
                    )}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <HoverCard key={tag}>
                        <HoverCardTrigger>
                          <Badge variant="outline" className="cursor-pointer whitespace-normal text-center leading-relaxed">
                            {tag}
                          </Badge>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-64">
                          <p className="text-sm">
                            {copy.tagExperiencePrefix} {tag}{' '}
                            {copy.tagExperienceSuffix}
                          </p>
                        </HoverCardContent>
                      </HoverCard>
                    ))}
                  </div>
                  {job.content && (
                    <div
                      className="prose prose-sm mt-5 max-w-none break-words dark:prose-invert sm:mt-6"
                      dangerouslySetInnerHTML={{
                        __html: marked(job.content),
                      }}
                    />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="space-y-4 sm:space-y-6">
          <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">
            {copy.education}
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {educations.map((education) => (
              <Card key={education.school} className="gap-4 rounded-lg py-5 sm:gap-6 sm:py-6">
                <CardHeader className="px-4 sm:px-6">
                  <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <CardTitle className="min-w-0 break-words text-lg leading-snug sm:text-xl">
                      {pickLanguage(
                        language,
                        educationTranslations[
                          education._meta.path as keyof typeof educationTranslations
                        ]?.school ?? {
                          en: education.school,
                          es: education.school,
                        },
                      )}
                    </CardTitle>
                    <Badge variant="secondary" className="self-start text-xs sm:shrink-0 sm:text-sm">
                      {formatDateRange(education.startDate, education.endDate)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="px-4 sm:px-6">
                  <p className="text-sm leading-7 text-muted-foreground sm:text-base sm:text-foreground">
                    {pickLanguage(
                      language,
                      educationTranslations[
                        education._meta.path as keyof typeof educationTranslations
                      ]?.summary ?? {
                        en: education.summary,
                        es: education.summary,
                      },
                    )}
                  </p>
                  {education.content && (
                    <div
                      className="prose prose-sm mt-5 max-w-none break-words dark:prose-invert sm:mt-6"
                      dangerouslySetInnerHTML={{
                        __html: marked(education.content),
                      }}
                    />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
