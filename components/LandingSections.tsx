'use client'

import { type ReactNode } from 'react'

import { Features10 } from '@/components/landing/Features10'
import { InfraSection } from '@/components/landing/InfraSection'
import { HowToBuySection } from '@/components/landing/HowToBuySection'
import { ApiSection } from '@/components/landing/ApiSection'
import { SectionBreak } from '@/components/landing/SectionBreak'
import { HighlightedText } from '@/components/common/typography'
import { WebsiteInLeadsOut } from '@/components/landing/WebsiteInLeadsOut'
import { CommonQuestionsSection } from '@/components/landing/CommonQuestionsSection'
import { CompareTable } from '@/components/landing/CompareTable'
import { ScrollReveal } from '@/components/landing/ScrollReveal'
import { APP_DOCS_URL } from '@/lib/appUrls'
import { cn } from '@/lib/utils'

/** Feature stats below compare table */
function CompareStatStrip() {
  return (
    <div
      className='mt-10 flex items-end justify-between md:mt-12 lg:mt-14'
      data-node-id='651:2505'
    >
      <div className='flex items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20'>
        <div className='flex flex-col gap-2'>
          <p className='font-sans text-[10px] sm:text-xs font-normal leading-[18px] text-[color:var(--Neutral-600,#a3a3a3)]'>
            Inbox rate
          </p>
          <p className='font-sans text-[clamp(2rem,5.5vw,4.5rem)] font-medium leading-none tracking-[-0.04em] text-white'>
            99.1%
          </p>
          <p className='font-sans text-[10px] sm:text-xs font-normal leading-[18px] text-[color:var(--Neutral-600,#a3a3a3)]'>
            across Google & M365
          </p>
        </div>

        <div className='flex flex-col gap-2'>
          <p className='font-sans text-[10px] sm:text-xs font-normal leading-[18px] text-[color:var(--Neutral-600,#a3a3a3)]'>
            Time to launch
          </p>
          <div className='flex items-end gap-2'>
            <p className='font-sans text-[clamp(2rem,5.5vw,4.5rem)] font-medium leading-none tracking-[-0.04em] text-white'>
              ~24h
            </p>
          </div>
          <p className='font-sans text-[10px] sm:text-xs font-normal leading-[18px] text-[color:var(--Neutral-600,#a3a3a3)]'>
            domains, DNS & mailboxes live
          </p>
        </div>
      </div>

      <a
        href={APP_DOCS_URL}
        target='_blank'
        rel='noopener noreferrer'
        className='inline-flex items-center gap-1 p-3 font-mono text-sm font-normal leading-[1.4] tracking-[-0.02em] text-[color:var(--Primary-500,#5747ff)] transition-opacity hover:opacity-80'
        style={{ fontFeatureSettings: "'ss05' 1" }}
      >
        VIEW DOCS
        <svg width='18' height='18' viewBox='0 0 18 18' fill='none' aria-hidden>
          <path
            d='M3.75 9h10.5M9.75 4.5l4.5 4.5-4.5 4.5'
            stroke='currentColor'
            strokeWidth='1.4'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </a>
    </div>
  )
}

function SectionShell({
  id,
  labelledBy,
  children,
  className,
}: {
  id?: string
  labelledBy: string
  children: ReactNode
  className?: string
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        'scroll-mt-24 border-t border-white/[0.06] bg-black',
        className,
      )}
    >
      <div className='mx-auto w-full max-w-[1320px] p-5 sm:p-8'>{children}</div>
    </section>
  )
}

export function LandingSections() {
  return (
    <>
      <SectionShell id='website-in-leads-out' labelledBy='heading-website-leads'>
        <div className='flex flex-col pt-8 pb-8 sm:pt-16 sm:pb-12 md:pt-24 md:pb-16 lg:pt-28 lg:pb-20'>
          <WebsiteInLeadsOut />
        </div>
      </SectionShell>

      <SectionBreak />

      {/* Infra section - "Provision, warm, and scale" */}
      <SectionShell id='infra' labelledBy='heading-infra' className='bg-black'>
        <InfraSection />
      </SectionShell>

      <SectionBreak />

      {/* How to buy - scroll-driven pipeline */}
      <SectionShell id='how-to-buy' labelledBy='heading-how-to-buy' className='bg-black'>
        <HowToBuySection />
      </SectionShell>

      <SectionBreak />

      {/* API section */}
      <ApiSection />

      <SectionBreak />

      {/* 654:3033 ×6 - background feature grid + illustrations */}
      <SectionShell id='how-it-works' labelledBy='heading-background'>
        <ScrollReveal delayMs={40}>
          <div className='flex flex-col pt-20 pb-12 md:pt-8 md:pb-8 lg:pt-8 lg:pb-8'>
            <div
              className='mb-5 inline-flex h-7 w-fit items-center gap-2 border border-white bg-[#030303] px-3 py-1.5 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]'
              style={{ borderWidth: '0.5px' }}
            >
              <span className='size-2 shrink-0 bg-white' aria-hidden />
              <p
                className='font-mono text-[10px] font-normal uppercase leading-[1.4] tracking-[-0.04em] text-white'
                style={{ fontFeatureSettings: "'ss05' 1" }}
              >
                WHAT YOU GET
              </p>
            </div>
            <h2
              id='heading-background'
              className='font-general-sans text-[clamp(1.75rem,4vw,3.25rem)] font-medium leading-tight tracking-[-0.03em] text-white max-w-[22ch]'
            >
              Everything,{' '}
              <HighlightedText className='text-[clamp(1.75rem,4vw,3.4rem)]'>Handled for you</HighlightedText>
            </h2>
            <p className='mt-4 max-w-[44ch] font-sans text-sm font-normal leading-[1.5] text-[color:var(--Neutral-500,#737373)] md:text-base'>
              Your brand, our infrastructure, zero complexity.
            </p>
            <Features10 />
          </div>
        </ScrollReveal>
      </SectionShell>

      <SectionBreak />

      <SectionShell id='compare' labelledBy='heading-compare'>
        <ScrollReveal delayMs={160}>
          <div className='flex flex-col'>
            <div
              className='inline-flex h-7 w-fit items-center gap-2 border border-white bg-[#030303] px-3 py-1.5 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]'
              style={{ borderWidth: '0.5px' }}
            >
              <span className='size-2 shrink-0 bg-white' aria-hidden />
              <p className='font-mono text-xs font-normal leading-[1.4] tracking-[-0.04em] text-white sm:text-[13px]'>
                WHY COLD MAIL RESELLER
              </p>
            </div>
            <h2
              id='heading-compare'
              className='font-general-sans text-[clamp(1.75rem,4vw,3.25rem)] font-medium leading-tight tracking-[-0.03em] text-white mt-5 max-w-[18ch] text-left sm:mt-6'
            >
              How does <HighlightedText className='text-[clamp(1.75rem,4vw,3.4rem)]'>Cold Mail Reseller</HighlightedText>
              <br />
              compare?
            </h2>
            <div className='mt-2 -mx-8 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0'>
              <div className='inline-block min-w-full px-8 md:px-0'>
                <CompareTable className='w-full' />
                <CompareStatStrip />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </SectionShell>

      <SectionBreak />

      <SectionShell
        id='common-questions'
        labelledBy='heading-common-questions'
      >
        <ScrollReveal delayMs={200}>
          <div className='flex flex-col pb-20  md:pb-20 '>
            <CommonQuestionsSection />
          </div>
        </ScrollReveal>
      </SectionShell>
    </>
  )
}
