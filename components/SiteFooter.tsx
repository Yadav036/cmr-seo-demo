import Link from 'next/link'

import { Logo } from '@/components/svg/Logo'
import {
  APP_CANCELLATION_URL,
  APP_PRIVACY_URL,
  APP_TERMS_URL,
} from '@/lib/appUrls'
import { cn } from '@/lib/utils'

const FOOTER_COLUMNS: {
  title: string
  links: { label: string; href: string }[]
}[] = [
  {
    title: 'Legal',
    links: [
      { label: 'Terms & Conditions', href: APP_TERMS_URL },
      { label: 'Privacy Policy', href: APP_PRIVACY_URL },
      { label: 'Cancellation Policy', href: APP_CANCELLATION_URL },
    ],
  },
]

export function SiteFooter({ className }: { className?: string }) {
  return (
    <footer
      className={cn(
        'border-t border-white/[0.06] bg-black text-white',
        className,
      )}
    >
      <div className='mx-auto w-full max-w-[1320px] px-[60px] pb-10 pt-8 md:pb-12 md:pt-8'>
        <div className='flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-16'>
          <div className='max-w-[248px] shrink-0'>
            <Link href='/' className='inline-block' aria-label='Cold Mail Reseller home'>
              <Logo width={124} height={25} />
            </Link>
            <p className='mt-3 font-sans text-xs font-normal leading-[1.4] text-[color:var(--Neutral-500,#737373)]'>
              White-label email infrastructure for resellers. Build recurring
              revenue helping your clients land in the inbox.
            </p>
          </div>

          <nav
            className='flex flex-wrap gap-10 sm:gap-14 lg:gap-[60px]'
            aria-label='Footer'
          >
            {FOOTER_COLUMNS.map((col) => (
              <div
                key={col.title}
                className='flex min-w-[140px] flex-col gap-2.5'
              >
                <p className='font-sans text-xs font-normal leading-[1.4] text-[color:var(--Neutral-500,#737373)]'>
                  {col.title}
                </p>
                <ul className='flex flex-col gap-2.5'>
                  {col.links.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className='font-sans text-base font-normal leading-[1.2] tracking-[0.16px] text-white transition-opacity hover:opacity-80'
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className='mt-12 border-t border-white/[0.06] pt-8'>
          <p className='font-sans text-xs font-normal leading-[1.4] text-[color:var(--Neutral-500,#737373)]'>
            © {new Date().getFullYear()} Outbox Labs Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
