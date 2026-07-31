'use client'

import { motion } from 'motion/react'
import { WordReveal, LineReveal } from './WordReveal'

/* ── Illustrations ─────────────────────────────────────── */

function ProvisionIllustration() {
  const steps = ['Domain verified', 'SPF · DKIM · DMARC live', '25 mailboxes provisioned']
  return (
    <div className='relative h-52 w-full'>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='absolute inset-x-0 top-0 rounded-xl border border-white/[0.08] bg-[#0e0e18] p-3.5'
      >
        <div className='flex items-center justify-between text-[10px] text-white/40'>
          <span className='flex items-center gap-1.5'>
            <motion.span
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.4, repeat: Infinity }}
              className='h-1.5 w-1.5 rounded-full bg-emerald-400'
            />
            provisioning
          </span>
          <span className='font-mono text-[10px] text-white/25'>~28 min</span>
        </div>
        <div className='mt-3 space-y-2'>
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 + i * 0.4 }}
              className='flex items-center gap-2 text-[11px] text-white/60'
            >
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.4, type: 'spring', stiffness: 400 }}
                className='flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-[8px] font-bold text-black'
              >
                ✓
              </motion.span>
              {s}
            </motion.div>
          ))}
        </div>
        <div className='mt-3 h-1 overflow-hidden rounded-full bg-white/[0.06]'>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, delay: 0.4, ease: 'easeOut' }}
            className='h-full bg-gradient-to-r from-[#5747ff] to-[#a594ff]'
          />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        className='absolute bottom-0 right-0 flex items-center gap-2 rounded-xl border border-[#5747ff]/30 bg-[#0e0e18] px-3 py-2 shadow-lg shadow-[#5747ff]/10'
      >
        <span className='flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#8b7fff] to-[#5747ff] text-white'>
          <svg viewBox='0 0 24 24' className='h-4 w-4' fill='none' stroke='currentColor' strokeWidth='2'>
            <circle cx='12' cy='12' r='9' />
            <path d='M12 7v5l3 2' strokeLinecap='round' />
          </svg>
        </span>
        <div className='leading-tight'>
          <div className='text-xs font-medium text-white'>~30 min</div>
          <div className='text-[10px] text-white/35'>avg setup</div>
        </div>
      </motion.div>
    </div>
  )
}

function WarmupIllustration() {
  const bars = [10, 16, 24, 30, 38, 48, 58, 70, 82, 92]
  return (
    <div className='relative h-52 w-full'>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='absolute inset-x-0 top-2 rounded-xl border border-white/[0.08] bg-[#0e0e18] p-4'
      >
        <div className='flex items-center justify-between text-[11px]'>
          <span className='font-medium text-white/80'>Sender reputation</span>
          <span className='rounded-full bg-emerald-400/10 px-2 py-0.5 font-mono text-[9px] text-emerald-400'>
            ramping
          </span>
        </div>
        <div className='relative mt-4 h-24'>
          <svg className='absolute inset-0 h-full w-full' viewBox='0 0 200 80' preserveAspectRatio='none'>
            <defs>
              <linearGradient id='wg' x1='0' x2='1'>
                <stop offset='0' stopColor='#8b7fff' />
                <stop offset='1' stopColor='#5747ff' />
              </linearGradient>
              <linearGradient id='wf' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='0' stopColor='#5747ff' stopOpacity='0.3' />
                <stop offset='1' stopColor='#5747ff' stopOpacity='0' />
              </linearGradient>
            </defs>
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: 'easeOut' }}
              d='M 0 70 C 40 65, 80 50, 120 28 S 180 8, 200 4 L 200 80 L 0 80 Z'
              fill='url(#wf)'
            />
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: 'easeOut' }}
              d='M 0 70 C 40 65, 80 50, 120 28 S 180 8, 200 4'
              stroke='url(#wg)'
              strokeWidth='2'
              fill='none'
            />
          </svg>
          <div className='absolute inset-0 flex items-end gap-1'>
            {bars.map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0, opacity: 0 }}
                whileInView={{ height: `${h}%`, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.06, duration: 0.5, ease: 'easeOut' }}
                className='flex-1 rounded-sm bg-[#5747ff]/20'
              />
            ))}
          </div>
          <motion.span
            initial={{ left: '0%', opacity: 0 }}
            whileInView={{ left: '92%', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: 'easeOut' }}
            className='absolute -top-1 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-[#08080f] bg-[#5747ff] shadow-md shadow-[#5747ff]/50'
          />
        </div>
        <div className='mt-2 flex justify-between text-[9px] text-white/25'>
          <span>day 1 · 2/day</span>
          <span>day 14 · 40/day</span>
        </div>
      </motion.div>
    </div>
  )
}

function DeliverabilityIllustration() {
  return (
    <div className='relative h-52 w-full'>
      <motion.div
        initial={{ opacity: 0, x: -8, rotate: -3 }}
        whileInView={{ opacity: 1, x: 0, rotate: -3 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='absolute left-0 top-2 rounded-xl border border-white/[0.08] bg-[#0e0e18] p-3'
      >
        <div className='text-[10px] text-white/35'>Inbox placement</div>
        <div className='mt-1 flex items-baseline gap-1.5'>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className='font-general-sans text-2xl font-semibold text-white'
          >
            96.4
          </motion.span>
          <span className='text-xs text-white/35'>%</span>
          <span className='ml-1 inline-flex items-center gap-0.5 rounded bg-emerald-400/10 px-1.5 py-0.5 text-[9px] font-medium text-emerald-400'>
            ↗ 3.2
          </span>
        </div>
        <div className='mt-2 flex items-center gap-1'>
          <motion.span
            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className='h-1.5 w-1.5 rounded-full bg-emerald-400'
          />
          <span className='text-[9px] text-white/30'>live · all mailboxes</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 8, rotate: 2 }}
        whileInView={{ opacity: 1, x: 0, rotate: 2 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className='absolute bottom-2 right-0 w-44 rounded-xl border border-white/[0.08] bg-[#0e0e18] p-3'
      >
        <div className='flex items-center justify-between text-[10px] text-white/35'>
          <span>Bounce rate</span>
          <span className='rounded bg-emerald-400/10 px-1 py-0.5 font-mono text-[9px] text-emerald-400'>−1.1</span>
        </div>
        <div className='mt-1 flex items-baseline gap-1'>
          <span className='font-general-sans text-xl font-semibold text-white'>0.4</span>
          <span className='text-xs text-white/35'>%</span>
        </div>
        <svg className='mt-2 h-10 w-full' viewBox='0 0 120 40' fill='none'>
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.4 }}
            d='M 0 30 L 15 24 L 30 28 L 45 20 L 60 22 L 75 14 L 90 16 L 105 8 L 120 6'
            stroke='#5747ff'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <motion.circle
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5 }}
            cx='120'
            cy='6'
            r='3'
            fill='#5747ff'
          />
        </svg>
      </motion.div>
    </div>
  )
}

/* ── Card ──────────────────────────────────────────────── */

function Card({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className='flex flex-col overflow-hidden rounded-2xl bg-[#141414] p-7'
    >
      {children}
    </motion.div>
  )
}

/* ── Section ───────────────────────────────────────────── */

export function InfraSection() {
  return (
    <section className='relative z-10 mx-auto w-full max-w-[1320px] px-5 pt-24 pb-4 sm:px-8 lg:px-[60px]'>
      <div className='mx-auto max-w-3xl text-center'>
        <p className='font-mono text-xs uppercase tracking-wider text-[#8b7fff]'>
          What we handle for you
        </p>
        <h2 className='mt-4 font-general-sans text-4xl font-medium leading-tight tracking-[-0.03em] text-white sm:text-5xl'>
          <WordReveal text='Provision, warm, and scale' />
          <br />
          <WordReveal text='cold email infrastructure' className='text-white/35' delay={0.25} />
        </h2>
        <LineReveal delay={0.5} className='mx-auto mt-4 max-w-xl font-general-sans text-base text-white/50'>
          Skip the DNS spreadsheets and warmup queues. Your stack provisions
          itself while you set the campaign live.
        </LineReveal>
      </div>

      <div className='mt-14 grid grid-cols-1 gap-4 md:grid-cols-3'>
        <Card delay={0}>
          <ProvisionIllustration />
          <div className='mt-auto pt-7'>
            <h3 className='font-general-sans text-lg font-medium text-white'>Live in 30 Minutes, Not 48 Hours</h3>
            <p className='mt-2 text-sm leading-relaxed text-white/45'>
              Domains registered, DNS pushed, mailboxes provisioned automatically. Watch the live log instead of waiting on tickets.
            </p>
          </div>
        </Card>

        <Card delay={0.1}>
          <WarmupIllustration />
          <div className='mt-auto pt-7'>
            <h3 className='font-general-sans text-lg font-medium text-white'>Pre-Warmed Reputation</h3>
            <p className='mt-2 text-sm leading-relaxed text-white/45'>
              Skip the 14-day ramp. Pre-warmed mailboxes arrive with reputation baked in, ready to fire day one.
            </p>
          </div>
        </Card>

        <Card delay={0.2}>
          <DeliverabilityIllustration />
          <div className='mt-auto pt-7'>
            <h3 className='font-general-sans text-lg font-medium text-white'>Deliverability You Can See</h3>
            <p className='mt-2 text-sm leading-relaxed text-white/45'>
              Inbox placement, bounce rates, and blacklist status - tracked live, surfaced before reply rates flatline.
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
