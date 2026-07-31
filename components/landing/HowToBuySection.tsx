'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { WordReveal, LineReveal } from './WordReveal'

const steps = [
  {
    n: '01',
    title: 'Join the partner program',
    body: 'Free account, no card needed to look around. Sign up in 60 seconds.',
  },
  {
    n: '02',
    title: 'Set your brand',
    body: 'Upload your logo, set your domain, and choose your pricing. Clients only ever see your name.',
  },
  {
    n: '03',
    title: 'Configure mailboxes',
    body: 'Pick Google Workspace or Microsoft 365, set quantity, let the platform autofill names and personas. Live price shown as you build.',
  },
  {
    n: '04',
    title: 'We provision everything',
    body: 'Mailboxes live in ~30 minutes. DNS pushed, SPF · DKIM · DMARC configured, warmup auto-starts. Zero tickets.',
  },
  {
    n: '05',
    title: 'Your clients go live',
    body: 'Hand over their branded dashboard. They see your brand, your support, your domain - never ours.',
  },
  {
    n: '06',
    title: 'Collect recurring revenue',
    body: 'Every mailbox bills monthly. Scale clients, scale income. We keep the infrastructure running silently behind you.',
  },
]

function PurchasePipeline() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 30%'],
  })
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div ref={ref} className='relative mt-14'>
      {/* Scroll-driven vertical line - base track */}
      <div className='pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/[0.06] md:block' aria-hidden />
      {/* Animated fill using scaleY from top */}
      <motion.div
        className='pointer-events-none absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 origin-top md:block'
        style={{
          scaleY,
          background: 'linear-gradient(to bottom, #5747ff, #a594ff)',
        }}
        aria-hidden
      />

      <div className='space-y-12 md:space-y-20'>
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.34, 1.56, 0.64, 1] }}
            className={`relative grid items-center gap-8 md:grid-cols-2 ${i % 2 ? 'md:[direction:rtl]' : ''}`}
          >
            <div className={`md:[direction:ltr] ${i % 2 ? 'md:text-right' : ''}`}>
              <div className='inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#5747ff]/40 bg-[#5747ff]/10 font-mono text-sm font-medium text-[#8b7fff]'>
                {step.n}
              </div>
              <h4 className='mt-4 font-general-sans text-2xl font-medium tracking-tight text-white'>
                {step.title}
              </h4>
              <p className='mt-2 max-w-md font-general-sans text-sm leading-relaxed text-white/45 md:max-w-none'>
                {step.body}
              </p>
            </div>

            {/* Empty cell on the other side */}
            <div className='hidden md:block' />

            {/* Dot on the line */}
            <div className='absolute left-1/2 top-1/2 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5747ff] shadow-[0_0_20px_rgba(87,71,255,0.7)] md:block' />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export function HowToBuySection() {
  return (
    <section className='relative z-10 mx-auto w-full max-w-[1320px] px-5 py-24 sm:px-8 lg:px-[60px]'>
      <div className='max-w-3xl'>
        <p className='font-mono text-xs uppercase tracking-wider text-[#8b7fff]'>
          How it works
        </p>
        <h2 className='mt-4 font-general-sans text-4xl font-medium leading-tight tracking-[-0.03em] text-white sm:text-5xl'>
          <WordReveal text='Buying is the easy part.' />
          <br />
          <WordReveal text='On purpose.' className='text-white/35' delay={0.3} />
        </h2>
        <LineReveal delay={0.5} className='mt-4 max-w-2xl font-general-sans text-base text-white/50'>
          No sales call. No &ldquo;book a demo to see pricing.&rdquo; You sign
          up, you click things, your clients are sending. Here&apos;s the whole flow:
        </LineReveal>
      </div>

      <PurchasePipeline />
    </section>
  )
}
