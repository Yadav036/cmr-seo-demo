'use client'

import { WobbleCard } from '@/components/ui/wobble-card'
import { cn } from '@/lib/utils'
import { FcGoogle } from 'react-icons/fc'
import { Check } from 'lucide-react'

/* ── Visual panels ─────────────────────────────────────── */

function WhiteLabelVisual() {
  return (
    <div className='flex h-full min-h-[120px] flex-col justify-between'>
      <div className='flex items-center gap-2 border-b border-white/[0.07] pb-3'>
        <div className='flex h-5 w-5 items-center justify-center rounded bg-[#5747ff]/20'>
          <span className='font-mono text-[8px] font-bold text-[#5747ff]'>YB</span>
        </div>
        <div className='h-2 w-20 rounded-full bg-white/20' />
        <div className='ml-auto flex gap-1.5'>
          <div className='h-1.5 w-8 rounded-full bg-white/10' />
          <div className='h-1.5 w-8 rounded-full bg-white/10' />
          <div className='h-1.5 w-10 rounded-full bg-[#5747ff]/40' />
        </div>
      </div>
      <div className='mt-4 flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-2'>
        <div className='h-1.5 w-1.5 rounded-full bg-emerald-400' />
        <span className='font-mono text-[11px] text-white/40'>yourbrand.com/dashboard</span>
      </div>
      <div className='mt-3 flex items-center gap-2'>
        <span className='font-mono text-[9px] uppercase tracking-wider text-white/20'>Your palette</span>
        <div className='flex gap-1'>
          {['#5747ff', '#0ea5e9', '#f0fdf4', '#1c1c2e'].map(c => (
            <div key={c} className='h-4 w-4 rounded border border-white/10' style={{ background: c }} />
          ))}
        </div>
      </div>
    </div>
  )
}

function InboxVisual() {
  return (
    <div className='flex h-full flex-col items-center justify-center gap-4 py-2'>
      <div className='flex flex-col items-center'>
        <p className='font-general-sans text-[3.5rem] font-semibold leading-none tracking-[-0.04em] text-white'>99.1</p>
        <p className='font-mono text-xs text-white/30'>% inbox rate</p>
      </div>
      <div className='w-full space-y-1.5'>
        {[
          { label: 'Google Workspace', pct: 99 },
          { label: 'Microsoft 365', pct: 99 },
          { label: 'Other providers', pct: 97 },
        ].map(({ label, pct }) => (
          <div key={label} className='flex items-center gap-2'>
            <span className='w-28 shrink-0 font-mono text-[9px] text-white/30'>{label}</span>
            <div className='flex-1 overflow-hidden rounded-full bg-white/[0.07]'>
              <div className='h-1 rounded-full bg-gradient-to-r from-[#5747ff] to-emerald-400' style={{ width: `${pct}%` }} />
            </div>
            <span className='font-mono text-[9px] text-emerald-400'>{pct}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ProviderVisual() {
  return (
    <div className='flex flex-col gap-3 pt-2'>
      {[
        { icon: <FcGoogle size={20} />, label: 'Google Workspace', sub: 'Gmail accounts' },
        { icon: <span className='text-[20px]'>🏢</span>, label: 'Microsoft 365', sub: 'Outlook accounts' },
      ].map(({ icon, label, sub }) => (
        <div key={label} className='flex items-center gap-3 rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-2.5'>
          {icon}
          <div>
            <p className='font-general-sans text-[12px] font-medium text-white'>{label}</p>
            <p className='font-mono text-[9px] text-white/30'>{sub}</p>
          </div>
          <div className='ml-auto flex items-center gap-1 rounded-full bg-emerald-400/10 px-2 py-0.5'>
            <Check className='h-3 w-3 text-emerald-400' />
            <span className='font-mono text-[9px] text-emerald-400'>Ready</span>
          </div>
        </div>
      ))}
    </div>
  )
}

function ScalesVisual() {
  const bars = [20, 35, 28, 50, 45, 70, 85, 100]
  return (
    <div className='flex h-16 items-end gap-[3px] pt-2'>
      {bars.map((h, i) => (
        <div
          key={i}
          className='flex-1 rounded-[2px]'
          style={{
            height: `${h}%`,
            background: i === bars.length - 1 ? '#5747ff' : `rgba(87,71,255,${0.15 + i * 0.1})`,
          }}
        />
      ))}
    </div>
  )
}

function MarginsVisual() {
  return (
    <div className='flex items-center gap-3 pt-1'>
      {[
        { label: 'Our cost', value: '$15', sub: 'per mailbox', dim: true },
        { label: 'Your price', value: '$40', sub: 'you decide', dim: false },
        { label: 'Your margin', value: '$25', sub: 'pure profit', accent: true },
      ].map(({ label, value, sub, dim, accent }, i) => (
        <div key={label} className='relative flex flex-1 flex-col items-center gap-1'>
          {i > 0 && (
            <span className='absolute -left-2 top-3 font-mono text-xs text-white/20'>→</span>
          )}
          <div className={cn(
            'w-full rounded-lg border px-2 py-2.5 text-center',
            accent ? 'border-[#5747ff]/40 bg-[#5747ff]/10' : 'border-white/[0.07] bg-white/[0.03]',
          )}>
            <p className={cn(
              'font-general-sans text-lg font-semibold leading-none tracking-tight',
              dim ? 'text-white/30' : accent ? 'text-[#8b7fff]' : 'text-white',
            )}>
              {value}
            </p>
          </div>
          <p className='font-mono text-[9px] uppercase tracking-wider text-white/25'>{sub}</p>
        </div>
      ))}
    </div>
  )
}

function SupportVisual() {
  return (
    <div className='flex flex-col gap-2 pt-2'>
      <div className='flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-2'>
        <div className='h-1.5 w-1.5 rounded-full bg-emerald-400' />
        <span className='font-mono text-[10px] text-white/50'>Response in</span>
        <span className='ml-auto font-mono text-[10px] font-medium text-white'>&lt; 2h</span>
      </div>
      <div className='flex items-center gap-1'>
        {[1, 2, 3, 4, 5].map(i => (
          <svg key={i} className='h-3 w-3 text-[#5747ff]' viewBox='0 0 12 12' fill='currentColor'>
            <path d='M6 1l1.2 3.6H11L8.2 6.8l1 3.2L6 8.2 2.8 10l1-3.2L1 4.6h3.8z' />
          </svg>
        ))}
        <span className='ml-1 font-mono text-[9px] text-white/30'>5.0 partner rating</span>
      </div>
    </div>
  )
}

/* ── Grid ───────────────────────────────────────────────── */

export function Features10() {
  return (
    <div className='mt-10 grid grid-cols-1 gap-3 md:grid-cols-6'>

      {/* 1 - White-label: 4 cols */}
      <WobbleCard className='md:col-span-4'>
        <p className='mb-1 text-[24px] font-general-sans font-medium text-white'>White-label ready</p>
        <p className='mb-5 text-sm text-white/50'>Launch under your brand - logo, domain, and pricing fully customized.</p>
        <WhiteLabelVisual />
      </WobbleCard>

      {/* 2 - Inbox: 2 cols, tall */}
      <WobbleCard className='md:col-span-2 md:row-span-2'>
        <p className='mb-1 text-[24px] font-general-sans font-medium text-white'>Inbox deliverability</p>
        <p className='mb-5 text-sm text-white/50'>Google Workspace & M365 infrastructure that lands in the primary inbox.</p>
        <InboxVisual />
      </WobbleCard>

      {/* 3 - Provider matching: 2 cols */}
      <WobbleCard className='md:col-span-2'>
        <p className='mb-1 text-[24px] font-general-sans font-medium text-white'>Provider matching</p>
        <p className='mb-4 text-sm text-white/50'>Google to Google, M365 to M365 - maximum deliverability.</p>
        <ProviderVisual />
      </WobbleCard>

      {/* 4 - Scales: 2 cols */}
      <WobbleCard className='md:col-span-2'>
        <p className='mb-1 text-[24px] font-general-sans font-medium text-white'>Scales with you</p>
        <p className='mb-4 text-sm text-white/50'>From 10 to 10,000 mailboxes as fast as you sell.</p>
        <ScalesVisual />
      </WobbleCard>

      {/* 5 - Margins: 4 cols */}
      <WobbleCard className='md:col-span-4'>
        <p className='mb-1 text-[24px] font-general-sans font-medium text-white'>Set your own margins</p>
        <p className='mb-5 text-sm text-white/50'>You control the pricing. Keep every dollar above our base cost.</p>
        <MarginsVisual />
      </WobbleCard>

      {/* 6 - Support: 2 cols */}
      <WobbleCard className='md:col-span-2'>
        <p className='mb-1 text-[24px] font-general-sans font-medium text-white'>Partner-first support</p>
        <p className='mb-4 text-sm text-white/50'>Round-the-clock help from a team invested in your success.</p>
        <SupportVisual />
      </WobbleCard>

    </div>
  )
}
