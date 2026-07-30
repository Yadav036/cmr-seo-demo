import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface TypographyProps {
  children: ReactNode
  className?: string
}

export function DisplayH1({ children, className }: TypographyProps) {
  return (
    <h1
      className={cn(
        'font-general-sans text-3xl sm:text-4xl md:text-5xl lg:text-[65px] font-medium lg:leading-[72px] tracking-[-3px] text-white',
        className,
      )}
    >
      {children}
    </h1>
  )
}

export function DisplayH2({ children, className }: TypographyProps) {
  return (
    <h2
      className={cn(
        'font-general-sans text-2xl sm:text-3xl md:text-4xl lg:text-[56px] lg:leading-[64px] font-medium text-white',
        className,
      )}
    >
      {children}
    </h2>
  )
}

export function HighlightedText({ children, className }: TypographyProps) {
  return (
    <span
      className={cn(
        'tracking-[-0.04em] font-normal bg-clip-text text-transparent',
        'bg-[linear-gradient(220deg,#FFF_6%,#c4b5ff_25%,#5747ff_95%)]',
        className,
      )}
    >
      {children}
    </span>
  )
}

export function MutedText({ children, className }: TypographyProps) {
  return (
    <span
      className={cn(
        'text-sm sm:text-base text-white/50 leading-relaxed',
        className,
      )}
    >
      {children}
    </span>
  )
}
