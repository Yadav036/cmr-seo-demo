import type { Metadata } from 'next'
import {
  InboxIcon,
  TrendingUpIcon,
  ZapIcon,
  PaletteIcon,
  HeadphonesIcon,
  ShieldCheckIcon,
  MailIcon,
} from 'lucide-react'

import { CmrNavbar } from '@/components/cmr/CmrNavbar'
import { CmrFooter } from '@/components/cmr/CmrFooter'
import { CmrProfitCalculator } from '@/components/cmr/CmrProfitCalculator'
import { CmrFaqAccordion } from '@/components/cmr/CmrFaqAccordion'

export const metadata: Metadata = {
  title: 'Cold Mail Reseller — White-Label Email Infrastructure',
  description:
    'Launch your own white-label cold email infrastructure platform. Help your clients land in the inbox every time while building predictable, recurring revenue.',
}

const BOOK_A_CALL_URL = 'https://calendly.com/coldmailreseller'

const FEATURES = [
  {
    icon: InboxIcon,
    title: 'Seamless Deliverability',
    desc: 'Say goodbye to spam folders—our platform ensures emails land where they matter.',
  },
  {
    icon: TrendingUpIcon,
    title: 'Effortless Scaling',
    desc: 'Whether you have 10 clients or 1,000, our platform grows with you.',
  },
  {
    icon: ZapIcon,
    title: 'Unmatched Simplicity',
    desc: 'No complex tech to manage. Just plug, play, and profit.',
  },
  {
    icon: PaletteIcon,
    title: 'Full Branding Freedom',
    desc: 'Offer email infrastructure under your brand and keep all the credit.',
  },
  {
    icon: HeadphonesIcon,
    title: 'A Partner You Can Count On',
    desc: "We're invested in your success, with round-the-clock support and continuous improvements.",
  },
  {
    icon: ShieldCheckIcon,
    title: 'Enterprise-Grade Infrastructure',
    desc: 'Powered by Google Workspace and Microsoft 365 for maximum inbox placement rates.',
  },
]

const STEPS = [
  {
    n: '1',
    title: 'Sign Up',
    desc: 'Your journey starts with a single click—no lengthy setups or approvals.',
  },
  {
    n: '2',
    title: 'Customize',
    desc: 'Add your logo, adjust pricing, and create the perfect client experience.',
  },
  {
    n: '3',
    title: 'Grow',
    desc: 'Start selling, earning, and delivering incredible results for your clients.',
  },
]

export default function ColdMailResellerPage() {
  return (
    <div className='min-h-screen bg-[#07050f] text-white'>
      <CmrNavbar />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className='relative isolate flex min-h-[calc(100svh-0px)] flex-col items-center justify-center overflow-hidden px-5 pb-16 pt-32 text-center sm:px-8 lg:px-10'>
        {/* Background glow */}
        <div
          className='pointer-events-none absolute inset-0 -z-10'
          aria-hidden
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(87,71,255,0.28) 0%, transparent 65%)',
          }}
        />
        {/* Bottom fade */}
        <div
          className='pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-48'
          aria-hidden
          style={{ background: 'linear-gradient(to top, #07050f, transparent)' }}
        />

        {/* Badge */}
        <div className='mb-5 inline-flex items-center gap-2 rounded-full border border-[#5747ff]/30 bg-[#5747ff]/10 px-4 py-1.5'>
          <MailIcon className='size-3.5 text-[#9b90ff]' strokeWidth={2} />
          <span className='text-xs font-medium uppercase tracking-widest text-[#9b90ff]'>
            White Label Partner Program
          </span>
        </div>

        <h1 className='mx-auto max-w-[760px] text-balance text-[clamp(2rem,5.5vw,4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-white'>
          Partner up. Profit out.
        </h1>

        <div className='mt-9'>
          <a
            href={BOOK_A_CALL_URL}
            className='inline-block rounded-xl bg-[#5747ff] px-8 py-3.5 text-sm font-medium text-white shadow-[0_0_40px_rgba(87,71,255,0.45)] transition-all hover:bg-[#4a3ce8] hover:shadow-[0_0_50px_rgba(87,71,255,0.55)]'
          >
            Book a Call
          </a>
        </div>

        {/* Powered by */}
        <div className='mt-14 flex flex-col items-center gap-4'>
          <p className='text-xs font-medium uppercase tracking-widest text-white/25'>
            Email Infrastructure Powered By
          </p>
          <div className='flex flex-wrap items-center justify-center gap-4'>
            <div className='flex items-center gap-2.5 rounded-lg border border-white/8 bg-white/[0.03] px-4 py-2.5'>
              <svg width='18' height='18' viewBox='0 0 24 24' aria-hidden>
                <path d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z' fill='#4285F4' />
                <path d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z' fill='#34A853' />
                <path d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z' fill='#FBBC05' />
                <path d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z' fill='#EA4335' />
              </svg>
              <span className='text-sm text-white/70'>Google Workspace</span>
            </div>

            <div className='flex items-center gap-2.5 rounded-lg border border-white/8 bg-white/[0.03] px-4 py-2.5'>
              <svg width='18' height='18' viewBox='0 0 24 24' aria-hidden fill='none'>
                <path d='M11.5 2L2 6v12l9.5 4L21 18V6L11.5 2z' fill='#0078D4' />
                <path d='M11.5 2v18L2 18V6l9.5-4z' fill='#0078D4' />
                <path d='M11.5 2L21 6v12l-9.5 4V2z' fill='#50D9FF' opacity='0.5' />
              </svg>
              <span className='text-sm text-white/70'>Microsoft 365</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Partner ──────────────────────────────────────── */}
      <section
        id='why-cmr'
        className='relative px-5 py-24 sm:px-8 md:py-32 lg:px-10'
      >
        <div className='mx-auto max-w-[1240px]'>
          <div className='mb-14 text-center'>
            <p className='mb-3 text-xs font-medium uppercase tracking-widest text-[#9b90ff]'>
              Partnership
            </p>
            <h2 className='text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-[-0.03em] text-white'>
              Why Partner with Cold Mail Reseller?
            </h2>
            <p className='mx-auto mt-4 max-w-[500px] text-[15px] text-white/50'>
              Your Brand. Our Infrastructure. Everyone Wins.
            </p>
          </div>

          <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className='group rounded-2xl border border-white/6 bg-[#0e0c1c] p-6 transition-all duration-200 hover:border-[#5747ff]/25 hover:bg-[#5747ff]/5'
              >
                <div className='mb-4 flex size-10 items-center justify-center rounded-xl border border-[#5747ff]/20 bg-[#5747ff]/10'>
                  <Icon className='size-4.5 text-[#9b90ff]' strokeWidth={1.5} />
                </div>
                <h3 className='mb-2 font-semibold text-white'>{title}</h3>
                <p className='text-sm leading-relaxed text-white/50'>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────── */}
      <section
        id='reseller'
        className='relative overflow-hidden px-5 py-24 sm:px-8 md:py-32 lg:px-10'
      >
        {/* Subtle center glow */}
        <div
          className='pointer-events-none absolute inset-0 -z-10'
          aria-hidden
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(87,71,255,0.08) 0%, transparent 70%)',
          }}
        />

        <div className='mx-auto max-w-[1240px]'>
          <div className='mb-14 text-center'>
            <p className='mb-3 text-xs font-medium uppercase tracking-widest text-[#9b90ff]'>
              Process
            </p>
            <h2 className='text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-[-0.03em] text-white'>
              How It Works
            </h2>
            <p className='mx-auto mt-4 max-w-[480px] text-[15px] text-white/50'>
              From Sign-Up to Scale-Up in Just 3 Steps
            </p>
          </div>

          <div className='relative grid gap-0 sm:grid-cols-3'>
            {/* Connector lines — sit behind the circles */}
            <div
              className='pointer-events-none absolute top-6 left-[calc(100%/6)] right-[calc(100%/6)] hidden h-px sm:block'
              aria-hidden
              style={{ background: 'linear-gradient(to right, rgba(87,71,255,0.4), rgba(87,71,255,0.4))' }}
            />

            {STEPS.map(({ n, title, desc }) => (
              <div key={n} className='flex flex-col items-center px-6 pt-0 pb-8 text-center'>
                <div className='relative z-10 mb-6 flex size-12 items-center justify-center rounded-full bg-[#5747ff] text-base font-bold text-white shadow-[0_0_24px_rgba(87,71,255,0.5)]'>
                  {n}
                </div>
                <h3 className='mb-2 font-semibold text-white'>{title}</h3>
                <p className='text-sm leading-relaxed text-white/50'>{desc}</p>
              </div>
            ))}
          </div>

          <div className='mt-10 text-center'>
            <a
              href={BOOK_A_CALL_URL}
              className='inline-block rounded-xl bg-[#5747ff] px-8 py-3.5 text-sm font-medium text-white shadow-[0_0_32px_rgba(87,71,255,0.4)] transition-opacity hover:opacity-90'
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>

      {/* ── Profit Potential ─────────────────────────────────── */}
      <section className='px-5 py-24 sm:px-8 md:py-32 lg:px-10'>
        <div className='mx-auto max-w-[1240px]'>
          <div className='mb-10 text-center'>
            <p className='mb-3 text-xs font-medium uppercase tracking-widest text-[#9b90ff]'>
              Earnings
            </p>
            <h2 className='text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-[-0.03em] text-white'>
              Profit Potential
            </h2>
            <p className='mx-auto mt-4 max-w-[480px] text-[15px] text-white/50'>
              Make money easily with flexible pricing and high deliverability email infrastructure.
            </p>
          </div>

          <p className='mb-6 text-center text-sm font-medium text-white/40'>See Your Earnings:</p>

          <CmrProfitCalculator />
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section
        id='faqs'
        className='px-5 py-24 sm:px-8 md:py-32 lg:px-10'
      >
        <div className='mx-auto max-w-[760px]'>
          <div className='mb-10 text-center'>
            <p className='mb-3 text-xs font-medium uppercase tracking-widest text-[#9b90ff]'>
              FAQ
            </p>
            <h2 className='text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-[-0.03em] text-white'>
              Everything You Need to Know
            </h2>
            <p className='mt-4 text-[15px] text-white/50'>to Get Started</p>
          </div>

          <CmrFaqAccordion />

          <p className='mt-8 text-center text-sm text-white/40'>
            Still have questions?{' '}
            <a
              href={`mailto:hello@coldmailreseller.com`}
              className='text-[#9b90ff] underline underline-offset-2 transition-colors hover:text-[#5747ff]'
            >
              Contact us!
            </a>
          </p>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────── */}
      <section
        id='book-a-call'
        className='relative overflow-hidden px-5 py-24 sm:px-8 md:py-32 lg:px-10'
      >
        <div
          className='pointer-events-none absolute inset-0 -z-10'
          aria-hidden
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 50% 100%, rgba(87,71,255,0.22) 0%, transparent 65%)',
          }}
        />

        <div className='mx-auto max-w-[680px] text-center'>
          <h2 className='text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-[-0.03em] text-white'>
            Let&apos;s Build Something Great Together
          </h2>
          <p className='mx-auto mt-5 max-w-[480px] text-[15px] leading-[1.65] text-white/50'>
            Start your email infrastructure business today. Deliver results for your clients and
            recurring revenue for yourself.
          </p>
          <div className='mt-9'>
            <a
              href={BOOK_A_CALL_URL}
              className='inline-block rounded-xl bg-[#5747ff] px-10 py-4 text-sm font-medium text-white shadow-[0_0_48px_rgba(87,71,255,0.5)] transition-all hover:bg-[#4a3ce8] hover:shadow-[0_0_60px_rgba(87,71,255,0.6)]'
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>

      <CmrFooter />
    </div>
  )
}
