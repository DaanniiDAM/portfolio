import {
  HeadContent,
  Scripts,
  createRootRoute,
  Outlet,
} from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import {
  LanguageProvider,
  type Language,
  getInitialLanguage,
  navTranslations,
  useLanguage,
} from '@/lib/i18n'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Daniel Sánchez — Developer Portfolio' },
      {
        name: 'description',
        content:
          'Junior software developer focused on automation, APIs, and data science.',
      },
    ],
  }),
  shellComponent: RootDocument,
})

// Injected before React hydrates to avoid flash of wrong theme
const themeScript = `
(function(){
  try {
    var t = localStorage.getItem('theme');
    if (t === 'light') { document.documentElement.classList.remove('dark'); }
    else { document.documentElement.classList.add('dark'); }
    var l = localStorage.getItem('language');
    document.documentElement.lang = l === 'es' ? 'es' : 'en';
  } catch(e) { document.documentElement.classList.add('dark'); }
})();
`

const SPLINE_VIEWER_SCRIPT =
  'https://unpkg.com/@splinetool/viewer@1.12.91/build/spline-viewer.js'

function ThemeToggle({
  dark,
  onToggle,
}: {
  dark: boolean
  onToggle: () => void
}) {
  const { language } = useLanguage()
  const labels = navTranslations[language]

  return (
    <button
      onClick={onToggle}
      aria-label={labels.toggleTheme}
      className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}

function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()
  const labels = navTranslations[language]

  return (
    <button
      onClick={toggleLanguage}
      aria-label={labels.toggleLanguage}
      className="min-w-10 rounded-lg px-2.5 py-2 text-xs font-semibold text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
    >
      {language === 'en' ? 'ES' : 'EN'}
    </button>
  )
}

const navLinks = [
  { href: '/#about', labelKey: 'about' },
  { href: '/#skills', labelKey: 'skills' },
  { href: '/#projects', labelKey: 'projects' },
  { href: '/#experience', labelKey: 'experience' },
  { href: '/#contact', labelKey: 'contact' },
]

function NavBar({ dark, onToggle }: { dark: boolean; onToggle: () => void }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { language } = useLanguage()
  const labels = navTranslations[language]

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo / Name */}
        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-foreground hover:text-primary transition-colors"
        >
          <span className="w-8 h-8 rounded-md bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
            DS
          </span>
          <span className="hidden sm:block">Daniel Sánchez</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-secondary"
            >
              {labels[link.labelKey]}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle dark={dark} onToggle={onToggle} />
          <LanguageToggle />
          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {labels[link.labelKey]}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(true)
  const [initialLanguage, setInitialLanguage] = useState<Language>('en')

  useEffect(() => {
    // Sync state with whatever the inline script already set
    setDark(document.documentElement.classList.contains('dark'))
    setInitialLanguage(getInitialLanguage())
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)')

    const updatePointer = (event: MouseEvent) => {
      if (!mediaQuery.matches) {
        return
      }

      document.documentElement.style.setProperty(
        '--cursor-x',
        `${event.clientX}px`,
      )
      document.documentElement.style.setProperty(
        '--cursor-y',
        `${event.clientY}px`,
      )
      document.documentElement.style.setProperty('--cursor-active', '1')
    }

    const handleLeave = () => {
      document.documentElement.style.setProperty('--cursor-active', '0')
    }

    const handleMediaChange = (event: MediaQueryListEvent) => {
      if (!event.matches) {
        document.documentElement.style.setProperty('--cursor-active', '0')
      }
    }

    window.addEventListener('mousemove', updatePointer, { passive: true })
    window.addEventListener('mouseleave', handleLeave)
    mediaQuery.addEventListener('change', handleMediaChange)

    return () => {
      window.removeEventListener('mousemove', updatePointer)
      window.removeEventListener('mouseleave', handleLeave)
      mediaQuery.removeEventListener('change', handleMediaChange)
    }
  }, [])

  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    if (next) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <html lang={initialLanguage} className="dark">
      <head>
        <HeadContent />
        <script type="module" src={SPLINE_VIEWER_SCRIPT} />
        {/* eslint-disable-next-line react/no-danger */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="relative overflow-x-hidden">
        <LanguageProvider initialLanguage={initialLanguage}>
          <div
            className="cursor-spline-glow pointer-events-none fixed inset-0 z-0 hidden lg:block"
            aria-hidden="true"
          />

          <div className="relative z-10">
            <NavBar dark={dark} onToggle={toggleTheme} />
            {children}
          </div>
        </LanguageProvider>
        <Scripts />
      </body>
    </html>
  )
}
