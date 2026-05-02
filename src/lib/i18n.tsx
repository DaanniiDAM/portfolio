import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export type Language = 'en' | 'es'

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function getInitialLanguage(): Language {
  if (typeof window === 'undefined') {
    return 'en'
  }

  return localStorage.getItem('language') === 'es' ? 'es' : 'en'
}

export function LanguageProvider({
  children,
  initialLanguage = 'en',
}: {
  children: ReactNode
  initialLanguage?: Language
}) {
  const [language, setLanguageState] = useState<Language>(initialLanguage)

  useEffect(() => {
    const next = getInitialLanguage()
    setLanguageState(next)
    document.documentElement.lang = next
  }, [])

  const setLanguage = (next: Language) => {
    setLanguageState(next)
    document.documentElement.lang = next
    localStorage.setItem('language', next)
  }

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage(language === 'en' ? 'es' : 'en'),
    }),
    [language],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }

  return context
}

export function pickLanguage<T>(language: Language, values: { en: T; es: T }) {
  return values[language]
}

export const projectDescriptionTranslations = {
  'cvpilot-ai': {
    en: 'Full-stack SaaS application that analyzes resumes against job descriptions to improve ATS compatibility, keyword coverage, and interview readiness.',
    es: 'Aplicación SaaS full-stack que analiza CVs frente a ofertas de empleo para mejorar la compatibilidad ATS, la cobertura de palabras clave y la preparación de entrevistas.',
  },
  pokemon: {
    en: 'Python application that retrieves and processes Pokemon data from an external API',
    es: 'Aplicación en Python que obtiene y procesa datos de Pokemon desde una API externa.',
  },
  portfolio: {
    en: 'Responsive developer portfolio built with TanStack Start, typed Markdown content, dark mode, project pages, resume detail, and a working Vercel contact form.',
    es: 'Portfolio responsive desarrollado con TanStack Start, contenido Markdown tipado, modo oscuro, páginas de proyectos, CV detallado y formulario de contacto funcional en Vercel.',
  },
}

export const jobTranslations = {
  army: {
    title: {
      en: 'Soldier',
      es: 'Soldado',
    },
    company: {
      en: 'Spanish Army',
      es: 'Ejército de Tierra',
    },
    location: {
      en: 'Spain',
      es: 'España',
    },
    summary: {
      en: 'Experience in high-discipline environments, teamwork, and responsibility under pressure',
      es: 'Experiencia en entornos de alta disciplina, trabajo en equipo y responsabilidad bajo presión.',
    },
  },
  sagatech: {
    title: {
      en: 'Junior Developer (Automation & AI Integration)',
      es: 'Desarrollador Junior (Automatización e Integración de IA)',
    },
    company: {
      en: 'Sagatech Servicios Informáticos',
      es: 'Sagatech Servicios Informáticos',
    },
    location: {
      en: 'Spain',
      es: 'España',
    },
    summary: {
      en: 'Designed and implemented automated workflows using n8n, integrating APIs and AI services to optimize processes and reduce manual operations',
      es: 'Diseño e implementación de flujos automatizados con n8n, integrando APIs y servicios de IA para optimizar procesos y reducir operaciones manuales.',
    },
  },
  sales: {
    title: {
      en: 'Sales Representative & Team Lead',
      es: 'Comercial y responsable de equipo',
    },
    company: {
      en: 'A.R. Marketing',
      es: 'A.R. Marketing',
    },
    location: {
      en: 'Spain',
      es: 'España',
    },
    summary: {
      en: 'Responsible for sales, client communication, and team mentoring in a results-driven environment',
      es: 'Responsable de ventas, comunicación con clientes y apoyo al equipo en un entorno orientado a resultados.',
    },
  },
}

export const educationTranslations = {
  dam: {
    school: {
      en: 'Higher Technician in Multiplatform Application Development (DAM) · iLERNA',
      es: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM) · iLERNA',
    },
    summary: {
      en: 'Vocational training focused on software development, backend systems, databases, and application architecture',
      es: 'Formación profesional centrada en desarrollo de software, backend, bases de datos y arquitectura de aplicaciones.',
    },
  },
  master: {
    school: {
      en: "Master's Degree in Data Science & Artificial Intelligence · Evolve",
      es: 'Máster en Data Science e Inteligencia Artificial · Evolve',
    },
    summary: {
      en: 'Specialization in data analysis, machine learning, and AI-driven solutions',
      es: 'Especialización en análisis de datos, machine learning y soluciones impulsadas por IA.',
    },
  },
}

export const pageTranslations = {
  en: {
    projectsTitle: 'Projects',
    projectsIntro: "A selection of projects I've built and contributed to.",
    liveDemo: 'Live Demo',
    resumeTitle: 'My Resume',
    resumeSubtitle: 'Professional Experience & Education',
    careerSummaryTitle: 'Career Summary',
    careerSummary:
      'Multiplatform Application Developer specialized in process automation and API integration, currently expanding into Data Science and Artificial Intelligence. Experienced in building automated workflows using tools like n8n and connecting external services to optimize real-world processes. Strong problem-solving mindset with a focus on efficiency, scalability, and continuous learning.',
    headshotAlt: 'Professional headshot',
    workExperience: 'Work Experience',
    education: 'Education',
    present: 'Present',
    tagExperiencePrefix: 'Experience with',
    tagExperienceSuffix: 'in professional development',
    contactTitle: 'Contact',
    contactIntro: 'Have a question or want to work together? Drop me a message.',
    messageSent: 'Message Sent!',
    messageSentText:
      "Thanks for reaching out. I'll get back to you as soon as possible.",
    sendAnother: 'Send Another Message',
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
    postNotFound: 'Post not found',
    backToBlog: 'Back to blog',
  },
  es: {
    projectsTitle: 'Proyectos',
    projectsIntro: 'Una selección de proyectos que he construido y desarrollado.',
    liveDemo: 'Demo',
    resumeTitle: 'Mi CV',
    resumeSubtitle: 'Experiencia profesional y formación',
    careerSummaryTitle: 'Resumen profesional',
    careerSummary:
      'Desarrollador de Aplicaciones Multiplataforma especializado en automatización de procesos e integración de APIs, actualmente ampliando conocimientos en Data Science e Inteligencia Artificial. Experiencia creando flujos automatizados con herramientas como n8n y conectando servicios externos para optimizar procesos reales. Perfil resolutivo, orientado a la eficiencia, la escalabilidad y el aprendizaje continuo.',
    headshotAlt: 'Foto profesional',
    workExperience: 'Experiencia laboral',
    education: 'Formación',
    present: 'Actualidad',
    tagExperiencePrefix: 'Experiencia con',
    tagExperienceSuffix: 'en desarrollo profesional',
    contactTitle: 'Contacto',
    contactIntro: '¿Tienes una pregunta o quieres trabajar conmigo? Envíame un mensaje.',
    messageSent: 'Mensaje enviado',
    messageSentText: 'Gracias por escribirme. Te responderé lo antes posible.',
    sendAnother: 'Enviar otro mensaje',
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
    postNotFound: 'Publicación no encontrada',
    backToBlog: 'Volver al blog',
  },
}

export const navTranslations = {
  en: {
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    experience: 'Experience',
    contact: 'Contact',
    toggleTheme: 'Toggle theme',
    toggleLanguage: 'Switch language',
  },
  es: {
    about: 'Sobre mi',
    skills: 'Habilidades',
    projects: 'Proyectos',
    experience: 'Experiencia',
    contact: 'Contacto',
    toggleTheme: 'Cambiar tema',
    toggleLanguage: 'Cambiar idioma',
  },
}
