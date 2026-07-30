'use client'

import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Logo } from '@/components/svg/Logo'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { href: '/coldmail-reseller#why-cmr', label: 'Why Cold Mail Reseller' },
  { href: '/coldmail-reseller#reseller', label: 'Reseller' },
  { href: '/coldmail-reseller#faqs', label: 'FAQs' },
] as const

const BOOK_A_CALL_URL = 'https://calendly.com/coldmailreseller'
const LOGIN_URL = 'https://app.coldmailreseller.com/login'

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
          mobileOpen ? 'max-h-[380px]' : 'max-h-0',
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
