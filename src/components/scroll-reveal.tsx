import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type ScrollRevealVariant = 'up' | 'left' | 'right' | 'fade'

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  once?: boolean
  variant?: ScrollRevealVariant
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  once = false,
  variant = 'up',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current

    if (!node) {
      return
    }

    if (
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      node.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible')

          if (once) {
            observer.unobserve(node)
          }
        } else if (!once) {
          node.classList.remove('is-visible')
        }
      },
      {
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.14,
      },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [once])

  return (
    <div
      ref={ref}
      className={cn('scroll-reveal', `scroll-reveal-${variant}`, className)}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  )
}
