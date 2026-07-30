'use client'

import { useState } from 'react'

function currency(n: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(n)
}

const BENEFITS = [
  { title: 'Quick Setup', desc: 'Get started fast with automated email tools.' },
  { title: 'Reliable Income', desc: 'Build a steady and growing income stream.' },
  { title: "We're Here to Help", desc: 'Friendly support whenever you need it.' },
]

export function CmrProfitCalculator() {
  const [mailboxes, setMailboxes] = useState(100)
  const [profitPerMailbox, setProfitPerMailbox] = useState(8)

  const monthly = mailboxes * profitPerMailbox
  const yearly = monthly * 12

  const mailboxPct = `${((mailboxes - 10) / (10000 - 10)) * 100}%`
  const profitPct = `${((profitPerMailbox - 0.5) / (15 - 0.5)) * 100}%`

  return (
    <div className='rounded-2xl border border-white/8 bg-[#0e0c1c] p-6 sm:p-8 lg:p-10'>
      <div className='grid gap-8 md:grid-cols-[1fr_260px] md:gap-12'>
        {/* Sliders */}
        <div className='flex flex-col gap-8'>
          {/* Mailboxes */}
          <div>
            <div className='mb-3 flex items-center justify-between'>
              <label htmlFor='cmr-mailboxes' className='text-sm font-medium text-white/70'>
                Mailboxes
              </label>
              <span className='font-semibold text-white tabular-nums'>
                {mailboxes.toLocaleString()}
              </span>
            </div>
            <input
              id='cmr-mailboxes'
              type='range'
              min={10}
              max={10000}
              step={10}
              value={mailboxes}
              onChange={(e) => setMailboxes(Number(e.target.value))}
              className='cmr-range-input w-full'
              style={{ '--fill': mailboxPct } as React.CSSProperties}
              aria-label='Number of mailboxes'
            />
            <div className='mt-1.5 flex justify-between text-xs text-white/30'>
              <span>10</span>
              <span>10,000</span>
            </div>
          </div>

          {/* Profit per Mailbox */}
          <div>
            <div className='mb-3 flex items-center justify-between'>
              <label htmlFor='cmr-profit' className='text-sm font-medium text-white/70'>
                Profit per Mailbox
              </label>
              <span className='font-semibold text-white tabular-nums'>
                ${profitPerMailbox.toFixed(2)}
              </span>
            </div>
            <input
              id='cmr-profit'
              type='range'
              min={0.5}
              max={15}
              step={0.5}
              value={profitPerMailbox}
              onChange={(e) => setProfitPerMailbox(Number(e.target.value))}
              className='cmr-range-input w-full'
              style={{ '--fill': profitPct } as React.CSSProperties}
              aria-label='Profit per mailbox in dollars'
            />
            <div className='mt-1.5 flex justify-between text-xs text-white/30'>
              <span>$0.50</span>
              <span>$15</span>
            </div>
          </div>
        </div>

        {/* Income results */}
        <div className='flex flex-col gap-4'>
          <div className='rounded-xl border border-[#5747ff]/25 bg-[#5747ff]/10 px-5 py-4'>
            <p className='mb-1 text-xs font-medium uppercase tracking-widest text-[#9b90ff]/70'>
              Monthly Income
            </p>
            <p className='text-2xl font-bold text-white tabular-nums'>{currency(monthly)}</p>
          </div>
          <div className='rounded-xl border border-[#5747ff]/25 bg-[#5747ff]/10 px-5 py-4'>
            <p className='mb-1 text-xs font-medium uppercase tracking-widest text-[#9b90ff]/70'>
              Yearly Income
            </p>
            <p className='text-2xl font-bold text-white tabular-nums'>{currency(yearly)}</p>
          </div>
          <div className='rounded-xl border border-white/5 bg-white/[0.02] px-5 py-4'>
            <p className='mb-1 text-xs text-white/40'>Cost per Mailbox</p>
            <p className='text-xl font-semibold text-white/60'>$11.00</p>
          </div>
        </div>
      </div>

      <div className='mt-8 grid gap-4 border-t border-white/5 pt-7 sm:grid-cols-3'>
        {BENEFITS.map(({ title, desc }) => (
          <div key={title} className='flex items-start gap-3'>
            <div className='mt-1 size-2 shrink-0 rounded-full bg-[#5747ff]' />
            <div>
              <p className='text-sm font-medium text-white'>{title}</p>
              <p className='mt-0.5 text-xs text-white/50'>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
