import { Logo } from '@/components/svg/Logo'

const BOOK_A_CALL_URL = 'https://calendly.com/coldmailreseller'

export function CmrFooter() {
  return (
    <footer className='border-t border-white/5 bg-[#07050f]'>
      {/* Pre-footer CTA strip */}
      <div className='border-b border-white/5 py-10'>
        <div className='mx-auto flex max-w-[1240px] flex-col items-center gap-5 px-5 text-center sm:px-8 lg:px-10'>
          <Logo height={24} className='opacity-90' />
          <a
            href={BOOK_A_CALL_URL}
            className='inline-block rounded-lg bg-[#5747ff] px-6 py-3 text-sm font-medium text-white shadow-[0_0_32px_rgba(87,71,255,0.4)] transition-opacity hover:opacity-90'
          >
            Book a Call
          </a>
        </div>
      </div>

      {/* Footer bottom */}
      <div className='mx-auto max-w-[1240px] px-5 py-7 sm:px-8 lg:px-10'>
        <div className='flex flex-col items-center gap-5 sm:flex-row sm:justify-between'>
          <p className='text-xs text-white/30'>
            © {new Date().getFullYear()} &nbsp;Outbox Labs Inc. All rights reserved.
          </p>

          <nav className='flex flex-wrap items-center justify-center gap-5' aria-label='Legal'>
            <a
              href='/coldmail-reseller/terms'
              className='text-xs text-white/40 transition-colors hover:text-white/70'
            >
              Terms &amp; Conditions
            </a>
            <a
              href='/coldmail-reseller/privacy'
              className='text-xs text-white/40 transition-colors hover:text-white/70'
            >
              Privacy Policy
            </a>
            <a
              href='/coldmail-reseller/cancellation'
              className='text-xs text-white/40 transition-colors hover:text-white/70'
            >
              Cancellation Policy
            </a>
          </nav>

          <p className='text-xs text-white/25'>Made with ♥ from all around the world.</p>
        </div>
      </div>
    </footer>
  )
}
