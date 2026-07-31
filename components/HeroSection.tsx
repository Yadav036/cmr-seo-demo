'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { HighlightedText } from '@/components/common/typography'
import { APP_GET_STARTED_URL } from '@/lib/appUrls'

/* ── Inline SVG logos ──────────────────────────────────── */

function GoogleLogo({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox='0 0 24 24' aria-label='Google'>
      <path d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z' fill='#4285F4' />
      <path d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z' fill='#34A853' />
      <path d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z' fill='#FBBC05' />
      <path d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z' fill='#EA4335' />
    </svg>
  )
}

function MicrosoftLogo({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox='0 0 21 21' aria-label='Microsoft'>
      <rect x='1' y='1' width='9' height='9' fill='#F25022' />
      <rect x='11' y='1' width='9' height='9' fill='#7FBA00' />
      <rect x='1' y='11' width='9' height='9' fill='#00A4EF' />
      <rect x='11' y='11' width='9' height='9' fill='#FFB900' />
    </svg>
  )
}

/* ── Sparkline ─────────────────────────────────────────── */

const SPARK = [22, 18, 35, 28, 50, 44, 58, 62, 72, 80, 88, 100]

function Sparkline() {
  const W = 220, H = 44
  const pts = SPARK.map((v, i): [number, number] => [
    (i / (SPARK.length - 1)) * W,
    H - (v / 100) * H,
  ])
  const linePath = 'M ' + pts.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join(' L ')
  const areaPath = linePath + ` L ${W} ${H} L 0 ${H} Z`
  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} className='w-full' preserveAspectRatio='none'>
      <defs>
        <linearGradient id='sg' x1='0' y1='0' x2='0' y2='1'>
          <stop offset='0%' stopColor='#5747ff' stopOpacity='0.35' />
          <stop offset='100%' stopColor='#5747ff' stopOpacity='0' />
        </linearGradient>
      </defs>
      <path d={areaPath} fill='url(#sg)' />
      <path d={linePath} fill='none' stroke='#5747ff' strokeWidth='1.6' strokeLinecap='round' strokeLinejoin='round' />
      <circle cx={pts[pts.length - 1][0]} cy={pts[pts.length - 1][1]} r='3.5' fill='#5747ff' />
      <circle cx={pts[pts.length - 1][0]} cy={pts[pts.length - 1][1]} r='7' fill='#5747ff' fillOpacity='0.2' />
    </svg>
  )
}

/* ── Provider row ──────────────────────────────────────── */

function ProviderRow({
  logo,
  name,
  sub,
  count,
  inboxPct,
  delay,
}: {
  logo: React.ReactNode
  name: string
  sub: string
  count: number
  inboxPct: number
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className='rounded-xl border border-white/[0.06] bg-white/[0.03] p-3.5'
    >
      <div className='flex items-center gap-2.5'>
        <div className='flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.06]'>
          {logo}
        </div>
        <div className='min-w-0 flex-1'>
          <p className='font-general-sans text-[12px] font-medium text-white'>{name}</p>
          <p className='font-mono text-[9px] text-white/30'>{sub}</p>
        </div>
        <div className='text-right'>
          <p className='font-general-sans text-sm font-semibold text-white'>{count}</p>
          <p className='font-mono text-[9px] text-white/30'>mailboxes</p>
        </div>
      </div>

      {/* inbox rate bar */}
      <div className='mt-2.5'>
        <div className='mb-1 flex items-center justify-between'>
          <span className='font-mono text-[8px] uppercase tracking-wider text-white/20'>Inbox rate</span>
          <span className='font-mono text-[9px] text-emerald-400'>{inboxPct}%</span>
        </div>
        <div className='h-1 overflow-hidden rounded-full bg-white/[0.06]'>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${inboxPct}%` }}
            transition={{ duration: 1.2, delay: delay + 0.3, ease: 'easeOut' }}
            className='h-full rounded-full bg-gradient-to-r from-[#5747ff] to-emerald-400'
          />
        </div>
      </div>
    </motion.div>
  )
}

/* ── Mailbox health row ────────────────────────────────── */

const MAILBOXES = [
  { email: 'alex@acme-brand.com', provider: 'google', health: ['SPF', 'DKIM', 'DMARC'] },
  { email: 'hello@techflow.io', provider: 'microsoft', health: ['SPF', 'DKIM', 'DMARC'] },
  { email: 'sales@meridian.co', provider: 'google', health: ['SPF', 'DKIM', 'DMARC'] },
]

/* ── Dashboard card ────────────────────────────────────── */

function DashboardCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
      className='relative w-full select-none'
    >
      {/* Ambient glow */}
      <div
        className='pointer-events-none absolute -inset-12 rounded-full'
        style={{ background: 'radial-gradient(ellipse at 55% 50%, rgba(87,71,255,0.2) 0%, transparent 68%)' }}
        aria-hidden
      />

      {/* Floating notification */}
      <motion.div
        initial={{ opacity: 0, x: 16, y: -8 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2, ease: 'easeOut' }}
        className='absolute -right-4 -top-5 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-[#0e0e18]/90 px-3 py-1.5 shadow-xl backdrop-blur-xl'
      >
        <span className='relative flex size-2'>
          <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75' />
          <span className='relative inline-flex size-2 rounded-full bg-emerald-400' />
        </span>
        <span className='font-mono text-[10px] text-white/65'>3 mailboxes provisioned</span>
      </motion.div>

      {/* Floating provider badge */}
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.4, ease: 'easeOut' }}
        className='absolute -bottom-4 -left-3 z-20 flex items-center gap-2 rounded-xl border border-[#5747ff]/25 bg-[#5747ff]/10 px-3 py-2 shadow-xl backdrop-blur-xl'
      >
        <div className='flex items-center gap-1'>
          <GoogleLogo size={13} />
          <MicrosoftLogo size={13} />
        </div>
        <span className='font-mono text-[10px] text-[#a59fff]'>GWS + M365 supported</span>
      </motion.div>

      {/* Gradient border */}
      <div
        className='rounded-2xl p-px'
        style={{ background: 'linear-gradient(145deg, rgba(87,71,255,0.65) 0%, rgba(255,255,255,0.07) 45%, rgba(87,71,255,0.08) 100%)' }}
      >
        <div className='relative overflow-hidden rounded-2xl bg-[#08080f]'>

          {/* Inner top glow */}
          <div
            className='pointer-events-none absolute inset-x-0 top-0 h-28'
            style={{ background: 'radial-gradient(ellipse 80% 60% at 50% -5%, rgba(87,71,255,0.14), transparent)' }}
            aria-hidden
          />

          <div className='relative p-5 space-y-4'>

            {/* Header */}
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2.5'>
                <div className='flex size-6 items-center justify-center rounded-md bg-[#5747ff]/20'>
                  <span className='font-mono text-[9px] font-bold text-[#8b7fff]'>CMR</span>
                </div>
                <span className='font-mono text-[10px] uppercase tracking-[0.1em] text-white/35'>Partner Dashboard</span>
              </div>
              <div className='flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-1'>
                <span className='size-1.5 rounded-full bg-emerald-400' />
                <span className='font-mono text-[9px] text-emerald-400'>Live</span>
              </div>
            </div>

            {/* Revenue + sparkline */}
            <div className='rounded-xl border border-white/[0.05] bg-white/[0.02] p-3.5'>
              <p className='font-mono text-[9px] uppercase tracking-[0.1em] text-white/25'>Monthly Revenue</p>
              <div className='mt-1 flex items-end gap-2.5'>
                <p className='font-general-sans text-[1.9rem] font-semibold leading-none tracking-[-0.04em] text-white'>$4,800</p>
                <span className='mb-0.5 rounded-full bg-emerald-400/10 px-1.5 py-0.5 font-mono text-[10px] text-emerald-400'>↑ 32%</span>
              </div>
              <div className='mt-2.5'>
                <Sparkline />
              </div>
            </div>

            {/* Provider breakdown */}
            <div>
              <p className='mb-2 font-mono text-[9px] uppercase tracking-[0.1em] text-white/20'>Provider breakdown</p>
              <div className='space-y-2'>
                <ProviderRow
                  logo={<GoogleLogo size={18} />}
                  name='Google Workspace'
                  sub='Gmail / Google Admin'
                  count={68}
                  inboxPct={98}
                  delay={0.5}
                />
                <ProviderRow
                  logo={<MicrosoftLogo size={18} />}
                  name='Microsoft 365'
                  sub='Outlook / Exchange'
                  count={52}
                  inboxPct={97}
                  delay={0.65}
                />
              </div>
            </div>

            {/* Active mailboxes */}
            <div>
              <p className='mb-2 font-mono text-[9px] uppercase tracking-[0.1em] text-white/20'>Active mailboxes</p>
              <div className='space-y-1.5'>
                {MAILBOXES.map(({ email, provider, health }, i) => (
                  <motion.div
                    key={email}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 + i * 0.08 }}
                    className='flex items-center gap-2.5 rounded-lg bg-white/[0.03] px-3 py-2'
                  >
                    <div className='flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-white/[0.05]'>
                      {provider === 'google' ? <GoogleLogo size={12} /> : <MicrosoftLogo size={12} />}
                    </div>
                    <span className='flex-1 truncate font-mono text-[10px] text-white/50'>{email}</span>
                    <div className='flex shrink-0 gap-1'>
                      {health.map((tag) => (
                        <span key={tag} className='rounded bg-emerald-400/10 px-1 py-0.5 font-mono text-[7px] font-medium text-emerald-400'>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Summary stats */}
            <div className='grid grid-cols-3 gap-2'>
              {[
                { label: 'Total mailboxes', value: '120' },
                { label: 'Avg inbox rate', value: '99.1%', accent: true },
                { label: 'Active clients', value: '5' },
              ].map(({ label, value, accent }) => (
                <div key={label} className='flex flex-col items-center rounded-xl bg-white/[0.03] py-2.5 px-2 gap-1'>
                  <span className={`font-general-sans text-sm font-semibold ${accent ? 'text-emerald-400' : 'text-white'}`}>{value}</span>
                  <span className='text-center font-mono text-[7.5px] leading-tight text-white/20'>{label}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Bottom fade */}
          <div
            className='pointer-events-none absolute inset-x-0 bottom-0 h-8 rounded-b-2xl'
            style={{ background: 'linear-gradient(to top, #08080f, transparent)' }}
            aria-hidden
          />
        </div>
      </div>
    </motion.div>
  )
}

/* ── Hero section ──────────────────────────────────────── */

export function HeroSection() {
  return (
    <section
      data-site-hero
      className='relative isolate flex w-full min-h-svh flex-col overflow-hidden bg-[#000]'
    >
      <div
        className='pointer-events-none absolute inset-0 z-0 opacity-[0.04]'
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
        }}
        aria-hidden
      />
      <div className='pointer-events-none absolute inset-0 z-0' aria-hidden>
        <div
          className='absolute inset-0'
          style={{ background: 'radial-gradient(ellipse 80% 60% at 65% 40%, rgba(87,71,255,0.18) 0%, rgba(87,71,255,0.06) 50%, transparent 75%)' }}
        />
      </div>

      <div className='relative z-10 mx-auto flex w-full max-w-[1320px] flex-1 items-center px-5 pb-16 pt-28 sm:px-8 lg:px-[60px]'>
        <div className='grid w-full grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_440px] lg:gap-16 xl:grid-cols-[1fr_480px]'>

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className='flex flex-col'
          >
            <div className='mb-7 inline-flex h-7 w-fit items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 backdrop-blur-sm'>
              <span className='size-[7px] shrink-0 rounded-full bg-[#5747ff]' aria-hidden />
              <p className='font-mono text-[11px] uppercase leading-none tracking-[0.08em] text-white/70'>
                Cold Email Infrastructure API
              </p>
            </div>

            <h1 className='font-general-sans font-medium tracking-[-0.04em] text-white text-[clamp(2.6rem,5.5vw,5.2rem)] leading-[0.96]'>
              A mailbox.
              <br />
              <HighlightedText className='font-general-sans text-[clamp(2.6rem,5.5vw,5.4rem)] lg:tracking-[-2px]'>
                One API call away.
              </HighlightedText>
            </h1>

            <p className='mt-6 max-w-[38ch] font-general-sans text-base text-white/50 leading-relaxed'>
              Domains, DNS, and Google & Microsoft mailboxes - white-labeled. You keep every dollar.
            </p>

            <div className='mt-8 flex flex-wrap items-center gap-3'>
              <a
                href={APP_GET_STARTED_URL}
                className='inline-flex h-11 items-center gap-2 rounded-full bg-white px-6 font-general-sans text-sm font-medium text-black transition hover:-translate-y-0.5 hover:bg-white/90'
              >
                Get Started Free
                <svg width='16' height='16' viewBox='0 0 16 16' fill='none' aria-hidden>
                  <path d='M3 8h10M8.5 4l4.5 4-4.5 4' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                </svg>
              </a>
              <a
                href='#how-it-works'
                className='inline-flex h-11 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 font-general-sans text-sm text-white/80 backdrop-blur-sm transition hover:bg-white/10'
              >
                See How It Works
              </a>
            </div>

            {/* API teaser */}
            <div className='mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-[#5747ff]/20 bg-[#5747ff]/[0.07] px-3.5 py-2'>
              <span className='font-mono text-[10px] text-white/30'>POST</span>
              <span className='font-mono text-[10px] text-[#8b7fff]'>/v1/mailboxes</span>
              <span className='mx-1 h-3 w-px bg-white/10' />
              <span className='font-mono text-[10px] text-white/30'>→ live in 28 min</span>
            </div>
          </motion.div>

          {/* Right */}
          <div className='hidden lg:block'>
            <DashboardCard />
          </div>

        </div>
      </div>
    </section>
  )
}
