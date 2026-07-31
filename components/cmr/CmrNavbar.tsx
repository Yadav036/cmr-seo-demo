'use client'

import { BookOpen, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Logo } from '@/components/svg/Logo'
import { APP_DOCS_URL } from '@/lib/appUrls'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { href: '/coldmail-reseller#why-cmr', label: 'Why Cold Mail Reseller' },
  { href: '/coldmail-reseller#reseller', label: 'Reseller' },
  { href: '/coldmail-reseller#faqs', label: 'FAQs' },
] as const

const BOOK_A_CALL_URL = 'https://cal.com/team/outbox/cold-mail-reseller'
const LOGIN_URL = 'https://partners.coldmailreseller.com/signin'

export function CmrNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 24)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className='fixed left-0 top-0 z-50 w-full'>
      {/* ── Desktop floating pill ─────────────────────────────── */}
      <div className='mx-auto hidden max-w-[1240px] px-5 pt-5 sm:px-8 md:block lg:px-10'>
        <div
          className={cn(
            'flex items-center justify-between gap-6 rounded-2xl border px-5 py-3 transition-all duration-300',
            isScrolled
              ? 'border-white/10 bg-[#07050f]/90 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl'
              : 'border-white/8 bg-[#07050f]/50 backdrop-blur-md',
          )}
        >
          <a href='/coldmail-reseller' aria-label='Cold Mail Reseller home' className='shrink-0'>
            <Logo height={22} />
          </a>

          <nav className='flex items-center gap-6' aria-label='Primary'>
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className='text-sm text-white/55 transition-colors hover:text-white'
              >
                {label}
              </a>
            ))}
          </nav>

          <div className='flex items-center gap-2'>
            <a
              href={APP_DOCS_URL}
              target='_blank'
              rel='noopener noreferrer'
              className='group relative inline-flex items-center gap-1.5 overflow-hidden rounded-xl border border-[#5747ff]/40 bg-[#5747ff]/10 px-3.5 py-2 text-sm font-medium text-[#c4b5ff] transition-all hover:border-[#5747ff]/70 hover:bg-[#5747ff]/20 hover:text-white'
            >
              <span
                className='pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(105deg,transparent_40%,rgba(255,255,255,0.12)_50%,transparent_60%)] transition-transform duration-700 group-hover:translate-x-full'
                aria-hidden
              />
              <BookOpen className='size-3.5 shrink-0' strokeWidth={1.75} />
              Docs
              <span className='rounded-md bg-[#5747ff]/25 px-1.5 py-px text-[10px] font-medium uppercase tracking-wider text-[#8b7fff]'>
                API
              </span>
            </a>
            <a
              href={LOGIN_URL}
              className='rounded-lg px-4 py-2 text-sm text-white/60 transition-colors hover:text-white'
            >
              Log In
            </a>
            <a
              href={BOOK_A_CALL_URL}
              className='rounded-xl bg-[#5747ff] px-4 py-2 text-sm font-medium text-white shadow-[0_0_20px_rgba(87,71,255,0.4)] transition-all hover:bg-[#4a3ce8] hover:shadow-[0_0_28px_rgba(87,71,255,0.5)]'
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>

      {/* ── Mobile bar ───────────────────────────────────────── */}
      <div
        className={cn(
          'flex items-center justify-between px-5 py-4 transition-all duration-300 md:hidden',
          isScrolled ? 'border-b border-white/5 bg-[#07050f]/95 backdrop-blur-md' : '',
        )}
      >
        <a href='/coldmail-reseller' aria-label='Cold Mail Reseller home'>
          <Logo height={22} />
        </a>

        <button
          type='button'
          className='inline-flex size-9 items-center justify-center text-white'
          onClick={() => setMobileOpen((p) => !p)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? (
            <X className='size-5' strokeWidth={1.5} />
          ) : (
            <Menu className='size-5' strokeWidth={1.5} />
          )}
        </button>
      </div>

      {/* ── Mobile drawer ────────────────────────────────────── */}
      <div
        className={cn(
          'overflow-hidden transition-all duration-300 md:hidden',
          mobileOpen ? 'max-h-[440px]' : 'max-h-0',
        )}
      >
        <div className='flex flex-col gap-1 border-t border-white/5 bg-[#07050f] px-5 py-4'>
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className='py-2.5 text-sm text-white/60 transition-colors hover:text-white'
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </a>
          ))}
          <div className='mt-3 flex flex-col gap-2 border-t border-white/5 pt-3'>
            <a
              href={APP_DOCS_URL}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center justify-center gap-1.5 rounded-xl border border-[#5747ff]/40 bg-[#5747ff]/10 px-4 py-2.5 text-sm font-medium text-[#c4b5ff]'
              onClick={() => setMobileOpen(false)}
            >
              <BookOpen className='size-3.5' strokeWidth={1.75} />
              Docs
              <span className='rounded-md bg-[#5747ff]/25 px-1.5 py-px text-[10px] font-medium uppercase tracking-wider text-[#8b7fff]'>
                API
              </span>
            </a>
            <a
              href={LOGIN_URL}
              className='rounded-lg border border-white/10 px-4 py-2.5 text-center text-sm text-white/80'
              onClick={() => setMobileOpen(false)}
            >
              Log In
            </a>
            <a
              href={BOOK_A_CALL_URL}
              className='rounded-xl bg-[#5747ff] px-4 py-2.5 text-center text-sm font-medium text-white'
              onClick={() => setMobileOpen(false)}
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
