import { createFileRoute, Link } from '@tanstack/react-router'
import { allJobs, allEducations, allProjects } from 'content-collections'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Badge } from '@/components/ui/badge'
import { submitContactForm } from '@/lib/contact-form'
import {
  educationTranslations,
  jobTranslations,
  pickLanguage,
  projectDescriptionTranslations,
  useLanguage,
} from '@/lib/i18n'
import {
  Github,
  ExternalLink,
  Mail,
  Linkedin,
  ChevronDown,
  Briefcase,
  GraduationCap,
  Send,
} from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: Portfolio,
})

// ─── Data — REPLACE these with your real information ────────────────────────

/** REPLACE with your full name */
const YOUR_NAME = 'Daniel Sánchez Moares'

/** REPLACE with your short tagline */
const HEADLINE = 'Multiplatform Software Developer (DAM) · Data Science & AI · Backend & Automation'

/** REPLACE with a 2-3 sentence introduction */
const INTRO =
   'Software developer with a background in Multiplataform Application Development (DAM), focused on Data Science and Artificial Intelligence. I build data-driven applications and integrate APIs to create efficient, automated solutions for real-world problems. Currently looking for my next challenge'

/** REPLACE with your email */
const EMAIL = 'daniel.sanchez.devx@gmail.com'

/** REPLACE with your LinkedIn URL */
const LINKEDIN_URL = 'https://www.linkedin.com/in/daniel-josé-sánchez-moares-2020733a4'

/** REPLACE with your GitHub URL */
const GITHUB_URL = 'https://github.com/DaniSanchezDevx'

const HERO_SPLINE_SCENE_URL =
  'https://prod.spline.design/ZCX1bnCPumcrfJ0g/scene.splinecode'

const PROJECTS_SPLINE_SCENE_URL =
  'https://prod.spline.design/2KfZbDRazFbmijpG/scene.splinecode'

const HOME_COPY = {
  en: {
    headline:
      'Multiplatform Software Developer (DAM) · Data Science & AI · Backend & Automation',
    intro:
      'Software developer with a background in Multiplatform Application Development (DAM), focused on Data Science and Artificial Intelligence. I build data-driven applications and integrate APIs to create efficient, automated solutions for real-world problems. Currently looking for my next challenge.',
    available: 'Open to opportunities',
    heroGreeting: "Hi, I'm",
    viewProjects: 'View Projects',
    contactMe: 'Contact Me',
    aboutTitle: 'About Me',
    aboutSubtitle: 'A bit about who I am',
    aboutText: `I'm a junior software developer with a focus on automation, APIs, and data
science. I enjoy building tools that reduce repetitive work and help teams
move faster, whether that's a data pipeline, an API integration, or a
command-line utility that saves hours each week.

My background spans scripting and automation, working with REST and
GraphQL APIs, and exploring machine learning workflows with Python.
I care deeply about readable code, good documentation, and systems that
are easy to reason about.

When I'm not coding, you'll find me exploring new datasets, contributing
to open-source projects, or learning about the latest developments in AI.`,
    aboutHighlights: [
      'Python Automation',
      'REST APIs',
      'Data Pipelines',
      'Machine Learning',
      'Open Source',
      'CLI Tools',
    ],
    getInTouch: 'Get in touch',
    viewResume: 'View Resume',
    skillsTitle: 'Skills & Technologies',
    skillsSubtitle: 'Tools I work with',
    projectsTitle: 'Projects',
    projectsSubtitle: "Things I've built",
    liveDemo: 'Live Demo',
    experienceTitle: 'Experience & Education',
    experienceSubtitle: 'My journey so far',
    workExperience: 'Work Experience',
    education: 'Education',
    present: 'Present',
    contactTitle: 'Get In Touch',
    contactSubtitle: "Let's work together",
    contactText:
      "I'm currently open to junior developer roles and freelance projects. Whether you have a question or just want to say hi, feel free to reach out!",
    linkedInProfile: 'LinkedIn Profile',
    githubProfile: 'GitHub Profile',
    messageSent: 'Message sent!',
    messageSentText: "Thanks for reaching out. I'll be in touch soon.",
    sendAnother: 'Send another',
    botField: "Don't fill this out:",
    name: 'Name',
    namePlaceholder: 'Your name',
    email: 'Email',
    emailPlaceholder: 'your@email.com',
    message: 'Message',
    messagePlaceholder: 'Your message...',
    fallbackError: 'Could not send the message.',
    sending: 'Sending...',
    sendMessage: 'Send Message',
    footerBuilt: 'Built with TanStack Start & Tailwind CSS.',
  },
  es: {
    headline:
      'Desarrollador de Aplicaciones Multiplataforma (DAM) · Data Science e IA · Backend y Automatización',
    intro:
      'Desarrollador de software con formación en Desarrollo de Aplicaciones Multiplataforma (DAM), enfocado en Data Science e Inteligencia Artificial. Creo aplicaciones orientadas a datos e integro APIs para construir soluciones eficientes y automatizadas para problemas reales. Actualmente busco mi próximo reto.',
    available: 'Abierto a oportunidades',
    heroGreeting: 'Hola, soy',
    viewProjects: 'Ver proyectos',
    contactMe: 'Contactar',
    aboutTitle: 'Sobre mi',
    aboutSubtitle: 'Un poco sobre quien soy',
    aboutText: `Soy un desarrollador junior centrado en automatización, APIs y ciencia de datos.
Me gusta crear herramientas que reduzcan tareas repetitivas y ayuden a los equipos a trabajar mejor, ya sea con pipelines de datos, integraciones con APIs o utilidades que ahorran tiempo.

Mi experiencia combina scripting, automatización, trabajo con APIs REST y GraphQL, y aprendizaje continuo en machine learning con Python.
Valoro el código claro, la buena documentación y los sistemas fáciles de mantener.

Cuando no estoy programando, suelo explorar nuevos datasets, aprender sobre IA o mejorar proyectos personales.`,
    aboutHighlights: [
      'Automatización con Python',
      'APIs REST',
      'Pipelines de datos',
      'Machine Learning',
      'Open Source',
      'Herramientas CLI',
    ],
    getInTouch: 'Contactar',
    viewResume: 'Ver CV',
    skillsTitle: 'Habilidades y tecnologías',
    skillsSubtitle: 'Herramientas con las que trabajo',
    projectsTitle: 'Proyectos',
    projectsSubtitle: 'Cosas que he construido',
    liveDemo: 'Demo',
    experienceTitle: 'Experiencia y formación',
    experienceSubtitle: 'Mi recorrido hasta ahora',
    workExperience: 'Experiencia laboral',
    education: 'Formación',
    present: 'Actualidad',
    contactTitle: 'Contacto',
    contactSubtitle: 'Trabajemos juntos',
    contactText:
      'Actualmente estoy abierto a roles junior de desarrollo y proyectos freelance. Si tienes una pregunta, una propuesta o simplemente quieres saludar, puedes escribirme.',
    linkedInProfile: 'Perfil de LinkedIn',
    githubProfile: 'Perfil de GitHub',
    messageSent: 'Mensaje enviado',
    messageSentText: 'Gracias por escribirme. Te responderé pronto.',
    sendAnother: 'Enviar otro',
    botField: 'No rellenes esto:',
    name: 'Nombre',
    namePlaceholder: 'Tu nombre',
    email: 'Email',
    emailPlaceholder: 'tu@email.com',
    message: 'Mensaje',
    messagePlaceholder: 'Tu mensaje...',
    fallbackError: 'No se pudo enviar el mensaje.',
    sending: 'Enviando...',
    sendMessage: 'Enviar mensaje',
    footerBuilt: 'Creado con TanStack Start y Tailwind CSS.',
  },
}

const SKILL_CATEGORY_LABELS = {
  en: {
    'Programming Languages': 'Programming Languages',
    'Tools & Platforms': 'Tools & Platforms',
    'Data & AI': 'Data & AI',
  },
  es: {
    'Programming Languages': 'Lenguajes de programación',
    'Tools & Platforms': 'Herramientas y plataformas',
    'Data & AI': 'Datos e IA',
  },
}

function useHomeCopy() {
  const { language } = useLanguage()
  return { language, copy: HOME_COPY[language] }
}

/** About section extended bio — REPLACE with your story */
const ABOUT_TEXT = `I'm a junior software developer with a focus on automation, APIs, and data
science. I enjoy building tools that reduce repetitive work and help teams
move faster — whether that's a data pipeline, an API integration, or a
command-line utility that saves hours each week.

My background spans scripting and automation, working with REST and
GraphQL APIs, and exploring machine learning workflows with Python.
I care deeply about readable code, good documentation, and systems that
are easy to reason about.

When I'm not coding, you'll find me exploring new datasets, contributing
to open-source projects, or learning about the latest developments in AI.`


/** Skills grid — REPLACE/ADD items per category */
const SKILLS = {
  'Programming Languages': [
    { name: 'Python', icon: '🐍' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'Java', icon: '☕' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'SQL', icon: '🗃️' },
    { name: 'Bash', icon: '🖥️' },
    // ADD more languages here
  ],
  'Tools & Platforms': [
    { name: 'n8n', icon: '🔄' },
    { name: 'Git & GitHub', icon: '🔧' },
    { name: 'Docker', icon: '🐳' },
    { name: 'REST APIs', icon: '🔌' },
    { name: 'GraphQL', icon: '◉' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'Linux', icon: '🐧' },
    { name: 'VS Code', icon: '💻' },
    { name: 'MySQL', icon: '🐬' },
    // ADD more tools here
  ],
  'Data & AI': [
    { name: 'Pandas', icon: '🐼' },
    { name: 'NumPy', icon: '🔢' },
    { name: 'Scikit-learn', icon: '🤖' },
    { name: 'Jupyter', icon: '📓' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Matplotlib', icon: '📊' },
    // ADD more data/AI tools here
  ],
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

function Hero() {
  const { copy } = useHomeCopy()

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden dot-grid"
    >
      <div className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[58vw] min-w-[560px] lg:block">
        <spline-viewer
          url={HERO_SPLINE_SCENE_URL}
          className="h-full w-full opacity-85 dark:opacity-80"
        />
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-background via-background/75 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-background/85 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-background via-background/45 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background/55 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="max-w-3xl space-y-6 text-center lg:max-w-2xl lg:text-left">
          {/* Available badge */}
          <div className="animate-fade-in inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/40 bg-primary/10 text-primary text-sm">
            {/* REPLACE "Open to opportunities" with your current status */}
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            {copy.available}
          </div>

          {/* Name — REPLACE YOUR_NAME above */}
          <h1 className="animate-fade-in-up text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            {copy.heroGreeting}{' '}
            <span className="gradient-text">{YOUR_NAME}</span>
          </h1>

          {/* Headline */}
          <p className="animate-fade-in-up delay-100 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed lg:mx-0">
            {copy.headline}
          </p>

          {/* Intro */}
          <p className="animate-fade-in-up delay-200 text-base text-muted-foreground/80 max-w-lg mx-auto lg:mx-0">
            {copy.intro}
          </p>

          {/* CTA buttons */}
          <div className="animate-fade-in-up delay-300 flex flex-wrap gap-3 justify-center lg:justify-start">
            <a
              href="/#projects"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              {copy.viewProjects}
            </a>
            <a
              href="/#contact"
              className="px-6 py-3 rounded-lg border border-border bg-secondary text-secondary-foreground font-medium hover:border-primary/60 transition-all hover:-translate-y-0.5"
            >
              {copy.contactMe}
            </a>
          </div>

          {/* Social links */}
          <div className="animate-fade-in-up delay-400 flex items-center justify-center gap-4 lg:justify-start">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 animate-bounce text-muted-foreground/40">
        <ChevronDown size={24} />
      </div>
    </section>
  )
}

// ─── About Section ────────────────────────────────────────────────────────────

/** Quick-highlight tags displayed in the About section — REPLACE with your own */
const ABOUT_HIGHLIGHTS = [
  'Python Automation',
  'REST APIs',
  'Data Pipelines',
  'Machine Learning',
  'Open Source',
  'CLI Tools',
]

function About() {
  const { copy } = useHomeCopy()

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <SectionHeading title={copy.aboutTitle} subtitle={copy.aboutSubtitle} />
        </ScrollReveal>

        <div className="mt-12 grid md:grid-cols-2 gap-12 items-start">
          {/* Profile photo */}
          <ScrollReveal
            variant="left"
            delay={100}
            className="flex flex-col items-center md:items-start gap-6"
          >
            <div className="w-48 h-48 rounded-2xl bg-secondary border border-border overflow-hidden card-glow">
              <img
                src="/daniel.jpg"
                alt={YOUR_NAME}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {copy.aboutHighlights.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="border border-primary/20 bg-primary/5 text-primary"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </ScrollReveal>

          {/* Bio text */}
          <ScrollReveal
            variant="right"
            delay={160}
            className="space-y-4 text-muted-foreground leading-relaxed"
          >
            {copy.aboutText.trim()
              .split('\n\n')
              .map((para, i) => (
                /* REPLACE ABOUT_TEXT above with your own paragraphs */
                <p key={i}>{para.trim()}</p>
              ))}
            <div className="pt-4 flex gap-3">
              <a
                href="/#contact"
                className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-all"
              >
                {copy.getInTouch}
              </a>
              {/* REPLACE href with your resume/CV PDF link */}
              <a
                href="/resume"
                className="px-4 py-2 rounded-lg border border-border text-sm font-medium hover:border-primary/60 transition-all"
              >
                {copy.viewResume}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

// ─── Skills Section ───────────────────────────────────────────────────────────

function Skills() {
  const { language, copy } = useHomeCopy()

  return (
    <section id="skills" className="py-24 px-4 bg-secondary/20">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <SectionHeading
            title={copy.skillsTitle}
            subtitle={copy.skillsSubtitle}
          />
        </ScrollReveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(SKILLS).map(([category, items], index) => (
            <ScrollReveal
              key={category}
              delay={index * 80}
              className="h-full"
            >
              <div className="h-full bg-card border border-border rounded-xl p-6 card-glow">
                <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider text-primary">
                  {
                    SKILL_CATEGORY_LABELS[language][
                      category as keyof typeof SKILL_CATEGORY_LABELS.en
                    ]
                  }
                </h3>
                <ul className="space-y-3">
                  {items.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span className="text-xl leading-none">{skill.icon}</span>
                      <span className="text-sm">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Projects Section ─────────────────────────────────────────────────────────

function Projects() {
  const projects = allProjects
  const { language, copy } = useHomeCopy()

  return (
    <section id="projects" className="relative overflow-hidden py-24 px-4">
      <div
        className="pointer-events-none absolute -inset-x-20 inset-y-[-18%] z-0 opacity-80 dark:opacity-65"
        aria-hidden="true"
      >
        <spline-viewer
          url={PROJECTS_SPLINE_SCENE_URL}
          className="absolute left-1/2 top-1/2 h-[138%] w-[138%] -translate-x-1/2 -translate-y-1/2"
          aria-hidden="true"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 z-0 bg-background/42 dark:bg-background/55" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-24 bg-gradient-to-b from-background to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-24 bg-gradient-to-t from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 left-0 z-0 w-1/5 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-0 w-1/5 bg-gradient-to-l from-background to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <ScrollReveal>
          <SectionHeading
            title={copy.projectsTitle}
            subtitle={copy.projectsSubtitle}
          />
        </ScrollReveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project._meta.path}
              delay={index * 90}
              className="h-full"
            >
              <div className="h-full bg-card/84 border border-border/75 rounded-xl p-6 flex flex-col gap-4 shadow-lg shadow-background/20 backdrop-blur-sm card-glow">
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground text-lg mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
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
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs border border-border"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-2 border-t border-border">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github size={15} />
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink size={15} />
                      {copy.liveDemo}
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Experience / Education Timeline ─────────────────────────────────────────

type TimelineEntry = {
  type: 'work' | 'education'
  title: string
  subtitle: string
  date: string
  summary: string
  tags: string[]
}

function sortNewestFirst(entries: TimelineEntry[]) {
  return [...entries].sort((a, b) => {
    const dateA = a.date.split(' — ')[0]
    const dateB = b.date.split(' — ')[0]
    return dateB.localeCompare(dateA)
  })
}

function formatTimelineDate(startDate: string, endDate?: string, fallback?: string) {
  if (!endDate) {
    return fallback ?? startDate
  }

  if (endDate === startDate) {
    return startDate
  }

  return `${startDate} — ${endDate}`
}

function TimelineEntries({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />

      <div className="space-y-8 pl-16">
        {entries.map((entry, index) => (
          <ScrollReveal
            key={`${entry.type}-${entry.title}-${entry.date}`}
            delay={index * 90}
          >
            <div className="relative">
              {/* Icon dot */}
              <div
                className={`absolute -left-10 top-1 w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                  entry.type === 'work'
                    ? 'bg-primary/10 border-primary text-primary'
                    : 'bg-accent/10 border-accent text-accent'
                }`}
              >
                {entry.type === 'work' ? (
                  <Briefcase size={14} />
                ) : (
                  <GraduationCap size={14} />
                )}
              </div>

              <div className="bg-card border border-border rounded-xl p-5 card-glow">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {entry.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {entry.subtitle}
                    </p>
                  </div>
                  <Badge
                    variant="secondary"
                    className="text-xs shrink-0 self-start border border-border"
                  >
                    {entry.date}
                  </Badge>
                </div>
                {entry.summary && (
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {entry.summary}
                  </p>
                )}
                {entry.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {entry.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-xs border-primary/20 text-primary/80"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}

function Timeline() {
  const { language, copy } = useHomeCopy()
  const jobs: TimelineEntry[] = sortNewestFirst(allJobs.map((j) => ({
    type: 'work',
    title: pickLanguage(
      language,
      jobTranslations[j._meta.path as keyof typeof jobTranslations]?.title ?? {
        en: j.jobTitle,
        es: j.jobTitle,
      },
    ),
    subtitle: `${pickLanguage(
      language,
      jobTranslations[j._meta.path as keyof typeof jobTranslations]?.company ?? {
        en: j.company,
        es: j.company,
      },
    )} · ${pickLanguage(
      language,
      jobTranslations[j._meta.path as keyof typeof jobTranslations]?.location ?? {
        en: j.location,
        es: j.location,
      },
    )}`,
    date: formatTimelineDate(j.startDate, j.endDate, copy.present),
    summary: pickLanguage(
      language,
      jobTranslations[j._meta.path as keyof typeof jobTranslations]?.summary ?? {
        en: j.summary,
        es: j.summary,
      },
    ),
    tags: j.tags,
  })))

  const education: TimelineEntry[] = sortNewestFirst(allEducations.map((e) => ({
    type: 'education',
    title: pickLanguage(
      language,
      educationTranslations[
        e._meta.path as keyof typeof educationTranslations
      ]?.school ?? {
        en: e.school,
        es: e.school,
      },
    ),
    subtitle: pickLanguage(
      language,
      educationTranslations[
        e._meta.path as keyof typeof educationTranslations
      ]?.summary ?? {
        en: e.summary,
        es: e.summary,
      },
    ),
    date: formatTimelineDate(e.startDate, e.endDate),
    summary: '',
    tags: e.tags,
  })))

  return (
    <section id="experience" className="py-24 px-4 bg-secondary/20">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <SectionHeading title={copy.experienceTitle} subtitle={copy.experienceSubtitle} />
        </ScrollReveal>

        <div className="mt-12 space-y-14">
          <ScrollReveal>
            <div className="mb-6 flex items-center gap-3 text-xl font-semibold text-foreground">
              <span className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <Briefcase size={18} />
              </span>
              {copy.workExperience}
            </div>
            <TimelineEntries entries={jobs} />
          </ScrollReveal>

          <ScrollReveal>
            <div className="mb-6 flex items-center gap-3 text-xl font-semibold text-foreground">
              <span className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                <GraduationCap size={18} />
              </span>
              {copy.education}
            </div>
            <TimelineEntries entries={education} />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

// ─── Contact Section ──────────────────────────────────────────────────────────

function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const { copy } = useHomeCopy()

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-2xl mx-auto">
        <ScrollReveal>
          <SectionHeading title={copy.contactTitle} subtitle={copy.contactSubtitle} />
        </ScrollReveal>

        <div className="mt-12 grid sm:grid-cols-2 gap-8">
          {/* Contact info */}
          <ScrollReveal variant="left" delay={100} className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              {copy.contactText}
            </p>
            <div className="space-y-3">
              {/* REPLACE EMAIL above with your real email */}
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                  <Mail size={16} />
                </span>
                <span className="text-sm">{EMAIL}</span>
              </a>
              {/* REPLACE LINKEDIN_URL above */}
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                  <Linkedin size={16} />
                </span>
                <span className="text-sm">{copy.linkedInProfile}</span>
              </a>
              {/* REPLACE GITHUB_URL above */}
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                  <Github size={16} />
                </span>
                <span className="text-sm">{copy.githubProfile}</span>
              </a>
            </div>
          </ScrollReveal>

          {/* Contact form */}
          <ScrollReveal variant="right" delay={160}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-3 p-6 bg-card border border-border rounded-xl text-center">
                <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-500">
                  <Mail size={20} />
                </div>
                <p className="font-medium text-foreground">{copy.messageSent}</p>
                <p className="text-sm text-muted-foreground">
                  {copy.messageSentText}
                </p>
                <button
                  onClick={() => {
                    setError('')
                    setSubmitted(false)
                  }}
                  className="mt-2 text-sm text-primary hover:underline"
                >
                  {copy.sendAnother}
                </button>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                onSubmit={async (e) => {
                  e.preventDefault()
                  setIsSubmitting(true)
                  setError('')

                  try {
                    await submitContactForm(e.currentTarget)
                    setSubmitted(true)
                  } catch (err) {
                    setError(
                      err instanceof Error
                        ? err.message
                        : copy.fallbackError,
                    )
                  } finally {
                    setIsSubmitting(false)
                  }
                }}
                className="space-y-4"
              >
                <p hidden>
                  <label>
                    {copy.botField} <input name="bot-field" />
                  </label>
                </p>

              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  {copy.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition-colors"
                  placeholder={copy.namePlaceholder}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  {copy.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition-colors"
                  placeholder={copy.emailPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  {copy.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-3 py-2 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition-colors resize-none"
                  placeholder={copy.messagePlaceholder}
                />
              </div>

              {error ? (
                <p className="text-sm text-red-500" role="alert">
                  {error}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-all hover:shadow-lg hover:shadow-primary/30 disabled:cursor-not-allowed disabled:opacity-70"
              >
                <Send size={15} />
                {isSubmitting ? copy.sending : copy.sendMessage}
              </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  const { copy } = useHomeCopy()

  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          {/* REPLACE "Your Name" with your name */}
          © {new Date().getFullYear()} {YOUR_NAME}. {copy.footerBuilt}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            aria-label="Email"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}

// ─── Shared: Section Heading ─────────────────────────────────────────────────

function SectionHeading({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) {
  return (
    <div className="text-center space-y-2">
      <p className="text-sm font-medium text-primary uppercase tracking-widest">
        {subtitle}
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
        {title}
      </h2>
      <div className="mx-auto w-12 h-0.5 rounded-full bg-gradient-to-r from-primary to-accent mt-3" />
    </div>
  )
}

// ─── Page composition ─────────────────────────────────────────────────────────

function Portfolio() {
  return (
    <main className="pt-16">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />
    </main>
  )
}
