'use client'

import { motion } from 'motion/react'
import { WordReveal, LineReveal } from './WordReveal'

const CODE_LINES = [
  { tokens: [{ t: 'POST ', c: 'text-[#8b7fff]' }, { t: '/v1/mailboxes', c: 'text-white' }] },
  { tokens: [{ t: '{', c: 'text-white/40' }] },
  { tokens: [
    { t: '  "domain"', c: 'text-[#8b7fff]' },
    { t: ': ', c: 'text-white/40' },
    { t: '"acme.yourbrand.com"', c: 'text-emerald-400' },
    { t: ',', c: 'text-white/40' },
  ]},
  { tokens: [
    { t: '  "provider"', c: 'text-[#8b7fff]' },
    { t: ': ', c: 'text-white/40' },
    { t: '"google"', c: 'text-emerald-400' },
    { t: ',', c: 'text-white/40' },
  ]},
  { tokens: [
    { t: '  "quantity"', c: 'text-[#8b7fff]' },
    { t: ': ', c: 'text-white/40' },
    { t: '25', c: 'text-amber-400' },
  ]},
  { tokens: [{ t: '}', c: 'text-white/40' }] },
]

const RESPONSE_LINES = [
  { tokens: [{ t: '200 OK', c: 'text-emerald-400' }] },
  { tokens: [{ t: '{', c: 'text-white/40' }] },
  { tokens: [
    { t: '  "mailboxes"', c: 'text-[#8b7fff]' },
    { t: ': ', c: 'text-white/40' },
    { t: '[ ... 25 provisioned ]', c: 'text-white/60' },
  ]},
  { tokens: [
    { t: '  "status"', c: 'text-[#8b7fff]' },
    { t: ': ', c: 'text-white/40' },
    { t: '"warming"', c: 'text-amber-400' },
    { t: ',', c: 'text-white/40' },
  ]},
  { tokens: [
    { t: '  "ready_in"', c: 'text-[#8b7fff]' },
    { t: ': ', c: 'text-white/40' },
    { t: '"~28 minutes"', c: 'text-emerald-400' },
  ]},
  { tokens: [{ t: '}', c: 'text-white/40' }] },
]

const FEATURES = [
  { icon: '⚡', title: 'Provision instantly', body: 'One API call creates domains, DNS records, mailboxes, and starts warmup - no manual steps.' },
  { icon: '🔑', title: 'Full white-label', body: 'All mailboxes provision under your brand. Your clients never see our infrastructure.' },
  { icon: '📊', title: 'Real-time webhooks', body: 'Get notified on provisioning complete, warmup progress, and deliverability events.' },
  { icon: '🔒', title: 'OAuth + API keys', body: 'Secure auth with scoped API keys. Integrate into any sequencer or CRM in minutes.' },
]

function CodeBlock({ lines, title, delay = 0 }: {
  lines: typeof CODE_LINES
  title: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className='overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0d0d14]'
    >
      {/* Title bar */}
      <div className='flex items-center gap-2 border-b border-white/[0.05] bg-white/[0.02] px-4 py-3'>
        <div className='flex gap-1.5'>
          <div className='h-2.5 w-2.5 rounded-full bg-white/10' />
          <div className='h-2.5 w-2.5 rounded-full bg-white/10' />
          <div className='h-2.5 w-2.5 rounded-full bg-white/10' />
        </div>
        <span className='ml-2 font-mono text-[10px] text-white/30'>{title}</span>
      </div>

      {/* Code body */}
      <div className='p-5 space-y-1.5'>
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -4 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.15 + i * 0.08, duration: 0.4 }}
            className='flex items-center font-mono text-[12px] leading-relaxed'
          >
            <span className='mr-4 w-4 shrink-0 text-right text-[10px] text-white/15 select-none'>{i + 1}</span>
            {line.tokens.map((tok, j) => (
              <span key={j} className={tok.c}>{tok.t}</span>
            ))}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export function ApiSection() {
  return (
    <section className='relative z-10 w-full overflow-hidden bg-[#000]'>
      {/* Top gradient fade */}
      <div className='pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent' aria-hidden />

      <div className='mx-auto w-full max-w-[1320px] px-5 py-24 sm:px-8 lg:px-[60px]'>
        <div className='grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20'>

          {/* Left: copy */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className='font-mono text-xs uppercase tracking-wider text-[#8b7fff]'
            >
              Built for builders
            </motion.p>

            <h2 className='mt-4 font-general-sans text-4xl font-medium leading-tight tracking-[-0.03em] text-white sm:text-5xl'>
              <WordReveal text='A mailbox is just' />
              <br />
              <WordReveal text='one API call away.' className='text-white/35' delay={0.25} />
            </h2>

            <LineReveal delay={0.5} className='mt-5 max-w-[40ch] font-general-sans text-base leading-relaxed text-white/50'>
              Provision domains, configure DNS, spin up warmed mailboxes, and export to your sequencer - all programmatically. Build cold email infrastructure into your own platform.
            </LineReveal>

            {/* Feature grid */}
            <div className='mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2'>
              {FEATURES.map(({ icon, title, body }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className='rounded-xl border border-white/[0.07] bg-white/[0.03] p-4'
                >
                  <span className='text-lg'>{icon}</span>
                  <p className='mt-2 font-general-sans text-sm font-medium text-white'>{title}</p>
                  <p className='mt-1 font-general-sans text-xs leading-relaxed text-white/40'>{body}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: code blocks */}
          <div className='flex flex-col gap-4'>
            <CodeBlock lines={CODE_LINES} title='Request · POST /v1/mailboxes' delay={0.1} />
            <CodeBlock lines={RESPONSE_LINES} title='Response · 200 OK' delay={0.3} />

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, type: 'spring', stiffness: 300 }}
              className='self-end flex items-center gap-2.5 rounded-full border border-[#5747ff]/30 bg-[#5747ff]/10 px-4 py-2'
            >
              <motion.span
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className='h-1.5 w-1.5 rounded-full bg-[#5747ff]'
              />
              <span className='font-mono text-[11px] text-[#a59fff]'>25 mailboxes provisioned in 28 min</span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
