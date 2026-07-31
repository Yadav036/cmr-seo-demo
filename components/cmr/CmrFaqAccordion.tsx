'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

import { cn } from '@/lib/utils'

const FAQ_ITEMS = [
  {
    q: 'What is Cold Mail Reseller?',
    a: "Cold Mail Reseller is email infrastructure you can run under your own brand. You get a full REST API and a white-label dashboard to provision domains, DNS, warmups, pre-warmups, and mailboxes, then deliver that stack to your clients as your product.",
  },
  {
    q: 'How much can I earn as a Cold Mail Reseller Partner?',
    a: 'Partners typically earn 30-50% margins on each mailbox. With flexible pricing, you set your own rates while staying competitive, backed by infrastructure you control through our API and white-label dashboard.',
  },
  {
    q: 'Do I need technical expertise to get started?',
    a: 'No. Automated setup handles DKIM, SPF, and DMARC for you. Prefer to integrate yourself? Use the API. Prefer a UI? Use the white-label dashboard. Either path gets you live without deep infra expertise.',
  },
  {
    q: 'How does White Labeling work?',
    a: 'Customize the entire experience with your brand, including the white-label dashboard, documentation, and support materials. Your clients only see your brand. You can also build on top of our APIs so every flow stays native to your product.',
  },
  {
    q: 'What support do I receive as a Cold Mail Reseller Partner?',
    a: 'Partners get dedicated support, marketing materials, full API documentation, white-label dashboard guidance, and regular training so you can ship and scale with confidence.',
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
                isOpen ? 'max-h-64' : 'max-h-0',
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
