'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import { Code2, Flame, Zap, Database } from 'lucide-react'
import { WEBSITE_IN_LEADS_STEPS } from '@/components/landing/websiteInLeadsOutData'
import { cn } from '@/lib/utils'

const STICKY_TOP = 96

/* ── Visual panels ─────────────────────────────────────── */

function ApiPanel() {
  const lines = [
    { c: 'text-white/25', t: 'POST /api/v1/integration/orders' },
    { c: 'text-[#8b7fff]', t: '{' },
    { c: 'text-white/55', t: '  "provider": "google",' },
    { c: 'text-white/55', t: '  "mailboxes": 50,' },
    { c: 'text-white/55', t: '  "warmup": true' },
    { c: 'text-[#8b7fff]', t: '}' },
  ]
  return (
    <div className='relative flex h-full w-full flex-col justify-between p-7 overflow-hidden'>
      <div
        className='pointer-events-none absolute inset-0'
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(87,71,255,0.12), transparent 70%)' }}
        aria-hidden
      />
      <div className='relative flex items-center gap-3'>
        <div className='flex h-8 w-8 items-center justify-center rounded-full border border-[#5747ff]/40 bg-[#5747ff]/15'>
          <Code2 className='h-4 w-4 text-[#8b7fff]' strokeWidth={1.5} />
        </div>
        <span className='font-mono text-[10px] uppercase tracking-widest text-white/35'>REST API</span>
      </div>

      <div className='relative rounded-xl border border-white/[0.08] bg-black/40 p-4 font-mono text-[11px] leading-relaxed'>
        {lines.map(({ c, t }, i) => (
          <motion.p
            key={t}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + i * 0.08, duration: 0.35 }}
            className={c}
          >
            {t}
          </motion.p>
        ))}
      </div>

      <div className='relative flex items-center gap-2'>
        <motion.span
          animate={{ scale: [1, 1.4, 1], opacity: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className='h-1.5 w-1.5 rounded-full bg-emerald-400'
        />
        <span className='font-mono text-[10px] text-white/35'>200 OK · order queued in ~120ms</span>
      </div>
    </div>
  )
}

function WarmupPanel() {
  const settings = [
    { label: 'Daily ramp', value: '+5 / day' },
    { label: 'Reply rate', value: '28%' },
    { label: 'Status', value: 'Active' },
  ]
  return (
    <div className='relative flex h-full w-full flex-col justify-between p-7 overflow-hidden'>
      <div
        className='pointer-events-none absolute inset-0'
        style={{ background: 'radial-gradient(ellipse 70% 50% at 30% 20%, rgba(251,146,60,0.10), transparent 65%)' }}
        aria-hidden
      />
      <div className='relative flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <div className='flex h-8 w-8 items-center justify-center rounded-full border border-orange-400/40 bg-orange-400/15'>
            <Flame className='h-4 w-4 text-orange-300' strokeWidth={1.5} />
          </div>
          <span className='font-mono text-[10px] uppercase tracking-widest text-white/35'>Mailbox Warmup</span>
        </div>
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className='rounded-full bg-emerald-400/10 px-2 py-0.5 font-mono text-[10px] text-emerald-400'
        >
          ON
        </motion.span>
      </div>

      <div className='relative space-y-3'>
        <div>
          <div className='mb-2 flex justify-between'>
            <span className='font-mono text-[9px] uppercase tracking-wider text-white/25'>Warmup progress</span>
            <span className='font-mono text-[9px] text-white/25'>Day 9 / 14</span>
          </div>
          <div className='h-1.5 overflow-hidden rounded-full bg-white/[0.06]'>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '64%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.2, ease: 'easeOut' }}
              className='h-full rounded-full bg-gradient-to-r from-orange-400 to-[#5747ff]'
            />
          </div>
        </div>

        {settings.map(({ label, value }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 + i * 0.1, duration: 0.4 }}
            className='flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5'
          >
            <span className='font-mono text-[10px] text-white/35'>{label}</span>
            <span className='font-mono text-[11px] text-white/70'>{value}</span>
          </motion.div>
        ))}
      </div>

      <div className='relative flex items-center gap-2'>
        <motion.span
          animate={{ scale: [1, 1.4, 1], opacity: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          className='h-1.5 w-1.5 rounded-full bg-orange-400'
        />
        <span className='font-mono text-[10px] text-white/35'>Toggle & tune via API anytime</span>
      </div>
    </div>
  )
}

function PrewarmupPanel() {
  const batches = [
    { name: 'Google · US', qty: '40 ready', age: '21d warmed' },
    { name: 'M365 · EU', qty: '25 ready', age: '18d warmed' },
    { name: 'Google · UK', qty: '15 ready', age: '30d warmed' },
  ]
  return (
    <div className='relative flex h-full w-full flex-col justify-between p-7 overflow-hidden'>
      <div
        className='pointer-events-none absolute inset-0'
        style={{ background: 'radial-gradient(ellipse 60% 50% at 70% 30%, rgba(87,71,255,0.12), transparent 65%)' }}
        aria-hidden
      />
      <div className='relative flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <div className='flex h-8 w-8 items-center justify-center rounded-full border border-[#5747ff]/40 bg-[#5747ff]/15'>
            <Zap className='h-4 w-4 text-[#8b7fff]' strokeWidth={1.5} />
          </div>
          <span className='font-mono text-[10px] uppercase tracking-widest text-white/35'>Pre-Warmup Pool</span>
        </div>
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 300 }}
          className='font-general-sans text-2xl font-semibold text-[#8b7fff]'
        >
          80
        </motion.span>
      </div>

      <div className='relative space-y-1.5'>
        {batches.map(({ name, qty, age }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 + i * 0.1, duration: 0.4 }}
            className='flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-2.5'
          >
            <div className='flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#5747ff]/25'>
              <Zap className='h-3 w-3 text-[#8b7fff]' strokeWidth={1.5} />
            </div>
            <span className='flex-1 font-mono text-[11px] text-white/55'>{name}</span>
            <span className='font-mono text-[10px] text-emerald-400/80'>{qty}</span>
            <span className='font-mono text-[10px] text-white/25'>{age}</span>
          </motion.div>
        ))}
      </div>

      <div className='relative flex items-center gap-2'>
        <motion.span
          animate={{ scale: [1, 1.4, 1], opacity: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          className='h-1.5 w-1.5 rounded-full bg-emerald-400'
        />
        <span className='font-mono text-[10px] text-white/35'>Reputation baked in before handoff</span>
      </div>
    </div>
  )
}

function ManagePanel() {
  const records = [
    { type: 'MX', value: 'aspmx.l.google.com', ttl: '3600' },
    { type: 'TXT', value: 'v=spf1 include:_spf...', ttl: '3600' },
    { type: 'CNAME', value: 'dkim._domainkey', ttl: '1800' },
  ]
  return (
    <div className='relative flex h-full w-full flex-col justify-between p-7 overflow-hidden'>
      <div
        className='pointer-events-none absolute inset-0'
        style={{ background: 'radial-gradient(ellipse 70% 60% at 40% 70%, rgba(87,71,255,0.10), transparent 65%)' }}
        aria-hidden
      />
      <div className='relative flex items-center gap-3'>
        <div className='flex h-8 w-8 items-center justify-center rounded-full border border-[#5747ff]/40 bg-[#5747ff]/15'>
          <Database className='h-4 w-4 text-[#8b7fff]' strokeWidth={1.5} />
        </div>
        <span className='font-mono text-[10px] uppercase tracking-widest text-white/35'>DNS · Mailboxes</span>
      </div>

      <div className='relative space-y-1.5'>
        <p className='mb-1 font-mono text-[9px] uppercase tracking-wider text-white/25'>Records</p>
        {records.map(({ type, value, ttl }, i) => (
          <motion.div
            key={type + value}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
            className='flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-2'
          >
            <span className='w-12 shrink-0 rounded bg-[#5747ff]/15 px-1.5 py-0.5 text-center font-mono text-[9px] font-medium text-[#8b7fff]'>
              {type}
            </span>
            <span className='min-w-0 flex-1 truncate font-mono text-[10px] text-white/50'>{value}</span>
            <span className='font-mono text-[9px] text-white/20'>{ttl}</span>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.55 }}
          className='mt-2 flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.04] px-3 py-2.5'
        >
          <span className='font-mono text-[10px] text-white/45'>Active mailboxes</span>
          <span className='font-mono text-[12px] font-medium text-white'>1,240</span>
        </motion.div>
      </div>

      <div className='relative flex items-center gap-2'>
        <motion.span
          animate={{ scale: [1, 1.4, 1], opacity: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          className='h-1.5 w-1.5 rounded-full bg-emerald-400'
        />
        <span className='font-mono text-[10px] text-white/35'>CRUD every record & mailbox via API</span>
      </div>
    </div>
  )
}

const PANELS = [ApiPanel, WarmupPanel, PrewarmupPanel, ManagePanel]

/* ── Step nav tab ──────────────────────────────────────── */

function StepTabRow({
  n, label, active, onClick,
}: { n: string; label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={cn(
        'group flex w-full items-center gap-3.5 rounded-xl px-3 py-3 text-left transition-all duration-300',
        active ? 'bg-[#5747ff]/10' : 'hover:bg-white/[0.03]',
      )}
    >
      <div className={cn(
        'relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-[11px] font-medium transition-all duration-300',
        active
          ? 'border-[#5747ff]/60 bg-black text-[#8b7fff]'
          : 'border-white/10 bg-black text-white/30',
      )}>
        {n}
      </div>
      <span className={cn(
        'font-general-sans text-sm transition-colors duration-300',
        active ? 'text-white' : 'text-white/40 group-hover:text-white/60',
      )}>
        {label}
      </span>
      {active && (
        <motion.div
          layoutId='active-tab-dot'
          className='ml-auto h-1.5 w-1.5 rounded-full bg-[#5747ff]'
        />
      )}
    </button>
  )
}

/* ── Main component ────────────────────────────────────── */

export function WebsiteInLeadsOut() {
  const [activeIndex, setActiveIndex] = useState(0)
  const spacerRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    let ticking = false
    function syncActiveStep() {
      const triggerY = STICKY_TOP + 20
      let nextIndex = 0
      spacerRefs.current.forEach((spacer, i) => {
        if (!spacer) return
        const top = spacer.getBoundingClientRect().top
        if (top - triggerY <= 0) nextIndex = i
      })
      setActiveIndex((prev) => (prev === nextIndex ? prev : nextIndex))
    }
    function onScrollOrResize() {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => { syncActiveStep(); ticking = false })
    }
    syncActiveStep()
    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize)
    return () => {
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
    }
  }, [])

  const scrollToSection = (i: number) => {
    const spacer = spacerRefs.current[i]
    if (!spacer) return
    window.scrollBy({ top: spacer.getBoundingClientRect().top - STICKY_TOP + 1, behavior: 'smooth' })
  }

  return (
    <div className='flex items-start gap-12'>
      {/* ── Left sticky nav ── */}
      <div
        className='hidden flex-col gap-6 md:flex'
        style={{ position: 'sticky', top: STICKY_TOP + 20, width: 260, flexShrink: 0 }}
      >
        {/* Heading */}
        <div>
          <h2
            id='heading-website-leads'
            className='font-general-sans text-[clamp(1.875rem,3.5vw,2.75rem)] font-medium leading-[1.05] tracking-[-0.03em] text-white'
          >
            One API.
          </h2>
          <h2 className='font-general-sans text-[clamp(1.875rem,3.5vw,2.75rem)] font-medium leading-[1.05] tracking-[-0.03em] bg-clip-text text-transparent bg-[linear-gradient(220deg,#FFF_6%,#c4b5ff_25%,#5747ff_95%)]'>
            Full control.
          </h2>
        </div>

        {/* Progress line + tabs
            Circle center x = px-3 (12px) + w-8/2 (16px) = 28px = left-7
            Line runs circle-center → circle-center (top-7 / bottom-7) */}
        <div className='relative flex flex-col gap-1'>
          <div
            className='pointer-events-none absolute left-7 top-7 bottom-7 w-px -translate-x-1/2 bg-white/[0.06]'
            aria-hidden
          />
          <motion.div
            className='pointer-events-none absolute left-7 top-7 w-px -translate-x-1/2 origin-top bg-gradient-to-b from-[#5747ff] to-[#8b7fff]'
            animate={{
              height: `calc((100% - 3.5rem) * ${activeIndex / Math.max(WEBSITE_IN_LEADS_STEPS.length - 1, 1)})`,
            }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            aria-hidden
          />

          {WEBSITE_IN_LEADS_STEPS.map((step, i) => (
            <StepTabRow
              key={step.badge}
              n={step.badge}
              label={step.tabLabel}
              active={i === activeIndex}
              onClick={() => scrollToSection(i)}
            />
          ))}
        </div>
      </div>

      {/* ── Right stacking cards ── */}
      <div className='min-w-0 flex-1'>
        {WEBSITE_IN_LEADS_STEPS.map((step, i) => {
          const Panel = PANELS[i]
          return (
            <div key={step.badge} className='relative sticky' style={{ top: STICKY_TOP }}>
              <div
                ref={(el) => { spacerRefs.current[i] = el }}
                className='pointer-events-none absolute left-0 top-0 h-px w-full'
                aria-hidden
              />

              {/* Gradient border wrapper */}
              <div
                className='my-4 rounded-2xl p-px'
                style={{
                  zIndex: i + 1,
                  background: `linear-gradient(145deg, rgba(87,71,255,${0.3 + i * 0.08}) 0%, rgba(255,255,255,0.06) 50%, rgba(87,71,255,0.05) 100%)`,
                  boxShadow: i > 0 ? '0 -24px 48px 0 rgba(0,0,0,0.9)' : undefined,
                }}
              >
                <div className='overflow-hidden rounded-2xl bg-[#0a0a12] flex min-h-[52vh]'>
                  {/* Visual panel - left half */}
                  <div className='relative hidden flex-shrink-0 overflow-hidden border-r border-white/[0.05] md:block' style={{ width: '50%' }}>
                    {Panel && <Panel />}
                  </div>

                  {/* Text panel - right half */}
                  <div className='relative flex flex-1 flex-col justify-between p-8'>
                    {/* Inner glow */}
                    <div
                      className='pointer-events-none absolute inset-0'
                      style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(87,71,255,0.06), transparent 60%)' }}
                      aria-hidden
                    />

                    <div className='relative flex flex-col gap-5'>
                      {/* Step number */}
                      <div className='inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#5747ff]/40 bg-[#5747ff]/10'>
                        <span className='font-mono text-[11px] font-medium text-[#8b7fff]'>{step.badge}</span>
                      </div>

                      {/* Title */}
                      <h3 className='font-general-sans text-2xl font-medium leading-snug tracking-[-0.02em] text-white md:text-3xl'>
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className='max-w-[36ch] font-general-sans text-base leading-relaxed text-white/45'>
                        {step.description}
                      </p>
                    </div>

                    {/* Step counter */}
                    <p className='relative mt-8 self-end font-mono text-xs text-white/[0.12]' aria-hidden>
                      {step.badge} / {String(WEBSITE_IN_LEADS_STEPS.length).padStart(2, '0')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}

        <div className='h-[50vh]' />
      </div>
    </div>
  )
}
