import { createFileRoute, Link } from '@tanstack/react-router'
import { allJobs, allEducations, allProjects } from 'content-collections'
import { Badge } from '@/components/ui/badge'
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
const EMAIL = 'djsm.djsm1997@gmail.com'

/** REPLACE with your LinkedIn URL */
const LINKEDIN_URL = 'https://www.linkedin.com/in/daniel-josé-sánchez-moares-2020733a4'

/** REPLACE with your GitHub URL */
const GITHUB_URL = 'https://github.com/DaanniiDAM'

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
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden dot-grid"
    >
      {/* Gradient blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none animate-gradient-shift"
        style={{
          background:
            'radial-gradient(circle, oklch(0.55 0.22 250), oklch(0.6 0.25 290))',
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none animate-gradient-shift delay-500"
        style={{
          background:
            'radial-gradient(circle, oklch(0.6 0.25 290), oklch(0.65 0.2 320))',
        }}
      />

      <div className="relative z-10 text-center max-w-3xl mx-auto space-y-6">
        {/* Available badge */}
        <div className="animate-fade-in inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/40 bg-primary/10 text-primary text-sm">
          {/* REPLACE "Open to opportunities" with your current status */}
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Open to opportunities
        </div>

        {/* Name — REPLACE YOUR_NAME above */}
        <h1 className="animate-fade-in-up text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
          Hi, I'm{' '}
          <span className="gradient-text">{YOUR_NAME}</span>
        </h1>

        {/* Headline */}
        <p className="animate-fade-in-up delay-100 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
          {HEADLINE}
        </p>

        {/* Intro */}
        <p className="animate-fade-in-up delay-200 text-base text-muted-foreground/80 max-w-lg mx-auto">
          {INTRO}
        </p>

        {/* CTA buttons */}
        <div className="animate-fade-in-up delay-300 flex flex-wrap gap-3 justify-center">
          <a
            href="/#projects"
            className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
          >
            View Projects
          </a>
          <a
            href="/#contact"
            className="px-6 py-3 rounded-lg border border-border bg-secondary text-secondary-foreground font-medium hover:border-primary/60 transition-all hover:-translate-y-0.5"
          >
            Contact Me
          </a>
        </div>

        {/* Social links */}
        <div className="animate-fade-in-up delay-400 flex items-center justify-center gap-4">
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
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="About Me" subtitle="A bit about who I am" />

        <div className="mt-12 grid md:grid-cols-2 gap-12 items-start">
          {/* Profile photo */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <div className="w-48 h-48 rounded-2xl bg-secondary border border-border overflow-hidden card-glow">
              <img
                src="/daniel.jpg"
                alt={YOUR_NAME}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {ABOUT_HIGHLIGHTS.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="border border-primary/20 bg-primary/5 text-primary"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Bio text */}
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            {ABOUT_TEXT.trim()
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
                Get in touch
              </a>
              {/* REPLACE href with your resume/CV PDF link */}
              <a
                href="/resume"
                className="px-4 py-2 rounded-lg border border-border text-sm font-medium hover:border-primary/60 transition-all"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Skills Section ───────────────────────────────────────────────────────────

function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-secondary/20">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Tools I work with"
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(SKILLS).map(([category, items]) => (
            <div
              key={category}
              className="bg-card border border-border rounded-xl p-6 card-glow"
            >
              <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider text-primary">
                {category}
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
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Projects Section ─────────────────────────────────────────────────────────

function Projects() {
  const projects = allProjects

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Projects"
          subtitle="Things I've built"
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project._meta.path}
              className="bg-card border border-border rounded-xl p-6 flex flex-col gap-4 card-glow"
            >
              <div className="flex-1">
                <h3 className="font-semibold text-foreground text-lg mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
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
                    Live Demo
                  </a>
                )}
              </div>
            </div>
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

function Timeline() {
  const jobs: TimelineEntry[] = allJobs.map((j) => ({
    type: 'work',
    title: j.jobTitle,
    subtitle: `${j.company} · ${j.location}`,
    date: `${j.startDate} — ${j.endDate ?? 'Present'}`,
    summary: j.summary,
    tags: j.tags,
  }))

  const education: TimelineEntry[] = allEducations.map((e) => ({
    type: 'education',
    title: e.school,
    subtitle: e.summary,
    date: `${e.startDate} — ${e.endDate ?? 'Present'}`,
    summary: '',
    tags: e.tags,
  }))

  // Combine and sort newest first by the startDate string (ISO-sortable)
  const entries: TimelineEntry[] = [...jobs, ...education].sort((a, b) => {
    const dateA = a.date.split(' — ')[0]
    const dateB = b.date.split(' — ')[0]
    return dateB.localeCompare(dateA)
  })

  return (
    <section id="experience" className="py-24 px-4 bg-secondary/20">
      <div className="max-w-3xl mx-auto">
        <SectionHeading title="Experience & Education" subtitle="My journey so far" />

        <div className="mt-12 relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />

          <div className="space-y-8 pl-16">
            {entries.map((entry, i) => (
              <div key={i} className="relative">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Contact Section ──────────────────────────────────────────────────────────

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-2xl mx-auto">
        <SectionHeading title="Get In Touch" subtitle="Let's work together" />

        <div className="mt-12 grid sm:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm currently open to junior developer roles and freelance
              projects. Whether you have a question or just want to say hi,
              feel free to reach out!
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
                <span className="text-sm">LinkedIn Profile</span>
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
                <span className="text-sm">GitHub Profile</span>
              </a>
            </div>
          </div>

          {/* Contact form */}
          {submitted ? (
            <div className="flex flex-col items-center justify-center gap-3 p-6 bg-card border border-border rounded-xl text-center">
              <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-500">
                <Mail size={20} />
              </div>
              <p className="font-medium text-foreground">Message sent!</p>
              <p className="text-sm text-muted-foreground">
                Thanks for reaching out. I'll be in touch soon.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 text-sm text-primary hover:underline"
              >
                Send another
              </button>
            </div>
          ) : (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={(e) => {
                e.preventDefault()
                const form = e.currentTarget
                const formData = new FormData(form)
                fetch('/contact.html', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                  },
                  body: new URLSearchParams(
                    formData as unknown as Record<string, string>,
                  ).toString(),
                }).then(() => setSubmitted(true))
              }}
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </p>

              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-3 py-2 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-all hover:shadow-lg hover:shadow-primary/30"
              >
                <Send size={15} />
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          {/* REPLACE "Your Name" with your name */}
          © {new Date().getFullYear()} {YOUR_NAME}. Built with TanStack Start &
          Tailwind CSS.
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
