'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

import { cn } from '@/lib/utils'

const FAQ_ITEMS = [
  {
    q: 'What is Cold Mail Reseller?',
    a: 'Cold Mail Reseller is a white-label email infrastructure platform that lets you launch your own cold email service under your brand. We handle all the complex technical infrastructure—domain setup, deliverability, mailbox provisioning—while you focus on selling and scaling.',
  },
  {
    q: 'How much can I earn as a Cold Mail Reseller Partner?',
    a: "Your earnings scale directly with the number of mailboxes you manage and your pricing. Partners typically earn $5–$15 profit per mailbox per month. At 100 mailboxes and $8 profit each, that's $800/month or $9,600/year in recurring revenue.",
  },
  {
    q: 'Do I need technical expertise to get started?',
    a: "Not at all. Our platform is built for simplicity. We handle DNS configuration, IP warm-up, deliverability optimization, and everything technical. You just sign up, add your branding, set your pricing, and start selling.",
  },
  {
    q: 'How does White Labeling work?',
    a: 'White labeling means your clients see your brand—your logo, your domain, your name—not ours. Cold Mail Reseller operates entirely behind the scenes. You set up your storefront, customize the interface, and all credit goes to your business.',
  },
  {
    q: 'What support do I receive as a Cold Mail Reseller Partner?',
    a: "You get round-the-clock support from our dedicated partner success team, onboarding resources, marketing materials, and continuous platform improvements. We're invested in your success because when you grow, we grow.",
  },
] as const

export function CmrFaqAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <div className='flex flex-col gap-2.5'>
      {FAQ_ITEMS.map(({ q, a }, idx) => {
        const isOpen = openIdx === idx
        return (
          <div
            key={q}
            className={cn(
              'overflow-hidden rounded-xl border transition-colors duration-200',
              isOpen ? 'border-[#5747ff]/30 bg-[#5747ff]/5' : 'border-white/6 bg-[#0e0c1c]',
            )}
          >
            <button
              type='button'
              className='flex w-full items-center justify-between gap-4 px-6 py-5 text-left'
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              aria-expanded={isOpen}
            >
              <span className='font-medium text-white'>{q}</span>
              <ChevronDown
                className={cn(
                  'size-4 shrink-0 text-white/40 transition-transform duration-200',
                  isOpen && 'rotate-180 text-[#9b90ff]',
                )}
              />
            </button>
            <div
              className={cn(
                'overflow-hidden transition-all duration-300',
                isOpen ? 'max-h-48' : 'max-h-0',
              )}
            >
              <p className='px-6 pb-5 text-sm leading-relaxed text-white/55'>{a}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
