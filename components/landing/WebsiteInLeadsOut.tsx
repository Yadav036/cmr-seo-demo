'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import { UserCheck, Palette, Send, TrendingUp } from 'lucide-react'
import { WEBSITE_IN_LEADS_STEPS } from '@/components/landing/websiteInLeadsOutData'
import { cn } from '@/lib/utils'

const STICKY_TOP = 96

/* ── Visual panels ─────────────────────────────────────── */

function SignUpPanel() {
  return (
    <div className='relative flex h-full w-full flex-col justify-between p-7 overflow-hidden'>
      <div
        className='pointer-events-none absolute inset-0'
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(87,71,255,0.12), transparent 70%)' }}
        aria-hidden
      />
      <div className='relative flex items-center gap-3'>
        <div className='flex h-8 w-8 items-center justify-center rounded-full border border-[#5747ff]/40 bg-[#5747ff]/15'>
          <UserCheck className='h-4 w-4 text-[#8b7fff]' strokeWidth={1.5} />
        </div>
        <span className='font-mono text-[10px] uppercase tracking-widest text-white/35'>Partner Portal</span>
      </div>

      <div className='relative space-y-2.5'>
        {['Company Name', 'Work Email', 'Password'].map((label, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.12, duration: 0.5, ease: 'easeOut' }}
            className='rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3'
          >
            <p className='font-mono text-[9px] uppercase tracking-wider text-white/25'>{label}</p>
            <div className='mt-1.5 h-2 rounded-full' style={{ width: `${[55, 72, 40][i]}%`, background: 'rgba(255,255,255,0.15)' }} />
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className='rounded-xl bg-gradient-to-r from-[#5747ff] to-[#7c6fff] py-3 text-center shadow-lg shadow-[#5747ff]/25'
        >
          <span className='font-general-sans text-sm font-medium text-white'>Get Started — Free</span>
        </motion.div>
      </div>

      <div className='relative flex items-center gap-2'>
        <motion.span
          animate={{ scale: [1, 1.4, 1], opacity: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className='h-1.5 w-1.5 rounded-full bg-emerald-400'
        />
        <span className='font-mono text-[10px] text-white/35'>Setup complete in under 60 seconds</span>
      </div>
    </div>
  )
}

function CustomizePanel() {
  return (
    <div className='relative flex h-full w-full flex-col justify-between p-7 overflow-hidden'>
      <div
        className='pointer-events-none absolute inset-0'
        style={{ background: 'radial-gradient(ellipse 70% 50% at 30% 20%, rgba(87,71,255,0.10), transparent 65%)' }}
        aria-hidden
      />
      <div className='relative flex items-center gap-3'>
        <div className='flex h-8 w-8 items-center justify-center rounded-full border border-[#5747ff]/40 bg-[#5747ff]/15'>
          <Palette className='h-4 w-4 text-[#8b7fff]' strokeWidth={1.5} />
        </div>
        <span className='font-mono text-[10px] uppercase tracking-widest text-white/35'>White-Label Config</span>
      </div>

      <div className='relative space-y-3'>
        {/* Brand card */}
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className='flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.04] p-3.5'
        >
          <div className='flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#5747ff]/40 to-[#5747ff]/10 border border-[#5747ff]/30'>
            <span className='font-mono text-[11px] font-bold text-[#8b7fff]'>YB</span>
          </div>
          <div>
            <div className='h-2 w-24 rounded-full bg-white/25' />
            <div className='mt-1.5 h-1.5 w-32 rounded-full bg-white/10' />
          </div>
          <div className='ml-auto rounded-full bg-emerald-400/10 px-2 py-0.5'>
            <span className='font-mono text-[9px] text-emerald-400'>✓ Live</span>
          </div>
        </motion.div>

        {/* Palette */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.4 }}
          className='flex items-center gap-2'
        >
          <span className='font-mono text-[9px] text-white/25 uppercase tracking-wider'>Your palette</span>
          <div className='flex gap-1.5'>
            {['#5747ff', '#0ea5e9', '#f0f0ff', '#1a1a2e'].map((c, i) => (
              <motion.div
                key={c}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.06, type: 'spring', stiffness: 400 }}
                className='h-5 w-5 rounded-full border-2 border-white/10'
                style={{ background: c }}
              />
            ))}
          </div>
        </motion.div>

        {/* Domain */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className='flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5'
        >
          <div className='h-1.5 w-1.5 rounded-full bg-[#5747ff]' />
          <span className='font-mono text-[10px] text-white/45'>yourbrand.com/dashboard</span>
        </motion.div>
      </div>

      <div className='relative flex items-center gap-2'>
        <motion.span
          animate={{ scale: [1, 1.4, 1], opacity: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          className='h-1.5 w-1.5 rounded-full bg-emerald-400'
        />
        <span className='font-mono text-[10px] text-white/35'>Custom domain live in minutes</span>
      </div>
    </div>
  )
}

function SellPanel() {
  const clients = [
    { name: 'Sarah C.', mboxes: '50 mailboxes', initials: 'S' },
    { name: 'Mike T.', mboxes: '30 mailboxes', initials: 'M' },
    { name: 'Ana S.', mboxes: '20 mailboxes', initials: 'A' },
  ]
  return (
    <div className='relative flex h-full w-full flex-col justify-between p-7 overflow-hidden'>
      <div
        className='pointer-events-none absolute inset-0'
        style={{ background: 'radial-gradient(ellipse 60% 50% at 70% 30%, rgba(16,185,129,0.08), transparent 65%)' }}
        aria-hidden
      />
      <div className='relative flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <div className='flex h-8 w-8 items-center justify-center rounded-full border border-[#5747ff]/40 bg-[#5747ff]/15'>
            <Send className='h-4 w-4 text-[#8b7fff]' strokeWidth={1.5} />
          </div>
          <span className='font-mono text-[10px] uppercase tracking-widest text-white/35'>Deliverability</span>
        </div>
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 300 }}
          className='font-general-sans text-2xl font-semibold text-emerald-400'
        >
          97.3%
        </motion.span>
      </div>

      <div className='relative space-y-1.5'>
        <div className='mb-3'>
          <div className='mb-2 flex justify-between'>
            <span className='font-mono text-[9px] uppercase tracking-wider text-white/25'>Inbox rate</span>
            <span className='font-mono text-[9px] text-white/25'>97 / 100</span>
          </div>
          <div className='h-1.5 overflow-hidden rounded-full bg-white/[0.06]'>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '97%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
              className='h-full rounded-full bg-gradient-to-r from-[#5747ff] to-emerald-400'
            />
          </div>
        </div>

        {clients.map(({ name, mboxes, initials }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
            className='flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-2.5'
          >
            <div className='flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#5747ff]/25'>
              <span className='font-mono text-[9px] font-medium text-[#8b7fff]'>{initials}</span>
            </div>
            <span className='flex-1 font-mono text-[11px] text-white/55'>{name}</span>
            <span className='font-mono text-[10px] text-white/25'>{mboxes}</span>
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
              className='h-1.5 w-1.5 rounded-full bg-emerald-400'
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function EarnPanel() {
  const SPARK = [30, 45, 38, 60, 52, 70, 80, 100]
  return (
    <div className='relative flex h-full w-full flex-col justify-between p-7 overflow-hidden'>
      <div
        className='pointer-events-none absolute inset-0'
        style={{ background: 'radial-gradient(ellipse 70% 60% at 40% 70%, rgba(87,71,255,0.10), transparent 65%)' }}
        aria-hidden
      />
      <div className='relative flex items-center gap-3'>
        <div className='flex h-8 w-8 items-center justify-center rounded-full border border-[#5747ff]/40 bg-[#5747ff]/15'>
          <TrendingUp className='h-4 w-4 text-[#8b7fff]' strokeWidth={1.5} />
        </div>
        <span className='font-mono text-[10px] uppercase tracking-widest text-white/35'>Monthly Revenue</span>
      </div>

      <div className='relative'>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className='font-general-sans text-[3rem] font-semibold leading-none tracking-[-0.04em] text-white'
        >
          $4,800
        </motion.p>
        <div className='mt-2 flex items-center gap-2'>
          <span className='rounded-full bg-emerald-400/10 px-2 py-0.5 font-mono text-[10px] text-emerald-400'>↑ 32%</span>
          <span className='font-mono text-[10px] text-white/30'>vs last month</span>
        </div>
      </div>

      {/* Bar chart */}
      <div className='relative flex h-14 items-end gap-[3px]'>
        {SPARK.map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: `${h}%`, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.07, duration: 0.5, ease: 'easeOut' }}
            className='flex-1 rounded-[3px]'
            style={{
              background: i === SPARK.length - 1 ? '#5747ff' : `rgba(87,71,255,${0.15 + i * 0.09})`,
              boxShadow: i === SPARK.length - 1 ? '0 0 12px rgba(87,71,255,0.5)' : 'none',
            }}
          />
        ))}
      </div>

      <div className='relative flex items-center gap-2'>
        <motion.span
          animate={{ scale: [1, 1.4, 1], opacity: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          className='h-1.5 w-1.5 rounded-full bg-emerald-400'
        />
        <span className='font-mono text-[10px] text-white/35'>120 mailboxes × $40/mo avg price</span>
      </div>
    </div>
  )
}

const PANELS = [SignUpPanel, CustomizePanel, SellPanel, EarnPanel]

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
        'flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-[11px] font-medium transition-all duration-300',
        active
          ? 'border-[#5747ff]/60 bg-[#5747ff]/20 text-[#8b7fff]'
          : 'border-white/10 bg-white/[0.04] text-white/30',
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
            Partner up.
          </h2>
          <h2 className='font-general-sans text-[clamp(1.875rem,3.5vw,2.75rem)] font-medium leading-[1.05] tracking-[-0.03em] bg-clip-text text-transparent bg-[linear-gradient(220deg,#FFF_6%,#c4b5ff_25%,#5747ff_95%)]'>
            Profit out.
          </h2>
        </div>

        {/* Progress line + tabs */}
        <div className='relative flex flex-col gap-1'>
          {/* Active progress line */}
          <div className='pointer-events-none absolute left-[19px] top-4 bottom-4 w-px bg-white/[0.06]' aria-hidden />
          <motion.div
            className='pointer-events-none absolute left-[19px] top-4 w-px bg-gradient-to-b from-[#5747ff] to-[#8b7fff]'
            style={{ height: `${((activeIndex + 0.5) / WEBSITE_IN_LEADS_STEPS.length) * 100}%` }}
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
                  {/* Visual panel — left half */}
                  <div className='relative hidden flex-shrink-0 overflow-hidden border-r border-white/[0.05] md:block' style={{ width: '50%' }}>
                    {Panel && <Panel />}
                  </div>

                  {/* Text panel — right half */}
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
