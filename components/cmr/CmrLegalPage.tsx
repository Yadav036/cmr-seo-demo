import type { ReactNode } from 'react'

import { CmrFooter } from '@/components/cmr/CmrFooter'
import { CmrNavbar } from '@/components/cmr/CmrNavbar'

export function CmrLegalPage({
  title,
  updated,
  children,
}: {
  title: string
  updated: string
  children: ReactNode
}) {
  return (
    <div className='min-h-screen bg-[#07050f] text-white'>
      <CmrNavbar />
      <main className='mx-auto max-w-[800px] px-5 pb-20 pt-32 sm:px-8 lg:px-10'>
        <p className='mb-3 font-mono text-[11px] uppercase tracking-widest text-white/35'>
          Legal
        </p>
        <h1 className='font-general-sans text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-tight tracking-[-0.03em] text-white'>
          {title}
        </h1>
        <p className='mt-3 text-sm text-white/40'>Last Updated: {updated}</p>
        <div className='cmr-legal mt-10 space-y-8 text-[15px] leading-[1.7] text-white/65'>
          {children}
        </div>
      </main>
      <CmrFooter />
    </div>
  )
}

export function LegalSection({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <section className='space-y-3'>
      <h2 className='font-general-sans text-lg font-semibold tracking-[-0.02em] text-white'>
        {title}
      </h2>
      <div className='space-y-3'>{children}</div>
    </section>
  )
}

export function LegalSub({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <div className='space-y-2'>
      <h3 className='text-[15px] font-medium text-white/85'>{title}</h3>
      <div className='space-y-2'>{children}</div>
    </div>
  )
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className='list-disc space-y-1.5 pl-5 marker:text-white/35'>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}
