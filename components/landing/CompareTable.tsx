import Link from 'next/link'
import { Check, ChevronRight, X } from 'lucide-react'

import { Logo } from '@/components/svg/Logo'
import { APP_GET_STARTED_URL } from '@/lib/appUrls'
import { cn } from '@/lib/utils'

type Cell =
  | { type: 'text'; value: string; accent?: boolean }
  | { type: 'check' }
  | { type: 'x' }
  | { type: 'partial'; value: string }

const ROWS: { label: string; google: Cell; sdr: Cell; cmr: Cell }[] = [
  {
    label: 'Full REST API',
    google: { type: 'partial', value: 'Partial' },
    sdr: { type: 'x' },
    cmr: { type: 'check' },
  },
  {
    label: 'Mailbox warmup',
    google: { type: 'partial', value: 'Manual' },
    sdr: { type: 'partial', value: 'Limited' },
    cmr: { type: 'check' },
  },
  {
    label: 'Pre-warmed mailboxes',
    google: { type: 'x' },
    sdr: { type: 'x' },
    cmr: { type: 'check' },
  },
  {
    label: 'DNS & record management',
    google: { type: 'partial', value: 'Manual' },
    sdr: { type: 'partial', value: 'Limited' },
    cmr: { type: 'check' },
  },
  {
    label: 'Mailbox data control',
    google: { type: 'partial', value: 'Partial' },
    sdr: { type: 'partial', value: 'Limited' },
    cmr: { type: 'check' },
  },
  {
    label: 'White-label branding',
    google: { type: 'x' },
    sdr: { type: 'x' },
    cmr: { type: 'check' },
  },
  {
    label: 'Time to launch',
    google: { type: 'text', value: '2-4 weeks' },
    sdr: { type: 'text', value: '5-7 days' },
    cmr: { type: 'text', value: '~24 hours', accent: true },
  },
  {
    label: 'Scales instantly',
    google: { type: 'partial', value: 'Partial' },
    sdr: { type: 'x' },
    cmr: { type: 'check' },
  },
]

function CellContent({ cell }: { cell: Cell }) {
  if (cell.type === 'check') {
    return (
      <span className='inline-flex items-center justify-start text-[color:var(--Primary-500,#5747ff)]'>
        <Check className='size-5' strokeWidth={2.25} aria-hidden />
        <span className='sr-only'>Yes</span>
      </span>
    )
  }
  if (cell.type === 'x') {
    return (
      <span className='inline-flex items-center justify-start text-red-500'>
        <X className='size-5' strokeWidth={2} aria-hidden />
        <span className='sr-only'>No</span>
      </span>
    )
  }
  if (cell.type === 'partial') {
    return (
      <span className='font-sans text-sm text-[color:var(--Neutral-500,#737373)]'>
        {cell.value}
      </span>
    )
  }
  return (
    <span
      className={cn(
        'font-sans text-sm',
        cell.accent
          ? 'font-medium text-[color:var(--Primary-500,#5747ff)]'
          : 'text-[color:var(--Neutral-500,#737373)]',
      )}
    >
      {cell.value}
    </span>
  )
}

export function CompareTable({ className }: { className?: string }) {
  return (
    <table className={cn('w-full min-w-[720px] border-collapse text-left', className)}>
        <colgroup>
          <col className='w-[min(28%,220px)]' />
          <col />
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th
              scope='col'
              className='border-b border-dashed border-[#303030] p-4 pb-6 align-bottom'
            />
            <th
              scope='col'
              className='border-b border-dashed border-[#303030] px-3 pb-6 pt-4 align-bottom'
            >
              <div className='flex flex-col items-start gap-1.5 text-left'>
                <span className='font-sans text-sm font-normal leading-tight text-white'>
                  DIY Email Setup
                </span>
                <span className='max-w-[12rem] font-sans text-xs font-normal leading-[1.35] text-[color:var(--Neutral-500,#737373)]'>
                  Manual DNS, no API, no warmup
                </span>
              </div>
            </th>
            <th
              scope='col'
              className='border-b border-dashed border-[#303030] px-3 pb-6 pt-4 align-bottom'
            >
              <div className='flex flex-col items-start gap-1.5 text-left'>
                <span className='font-sans text-sm font-normal leading-tight text-white'>
                  Other Resellers
                </span>
                <span className='max-w-[12rem] font-sans text-xs font-normal leading-[1.35] text-[color:var(--Neutral-500,#737373)]'>
                  Thin APIs, limited infrastructure
                </span>
              </div>
            </th>
            <th
              scope='col'
              className='border-b border-dashed border-[#303030] border-l border-[#303030] bg-[color:var(--Neutral-100,#171717)] px-4 pb-6 pt-4 align-bottom'
            >
              <div className='flex flex-col items-start gap-2 text-left'>
                <div className='flex justify-start'>
                  <Logo />
                </div>
                <span className='max-w-[14rem] font-sans text-xs font-normal leading-[1.35] text-[color:var(--Neutral-500,#737373)]'>
                  API. Warmup. Full control.
                </span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row) => (
            <tr key={row.label}>
              <th
                scope='row'
                className='border-b border-dashed border-[#303030] py-4 pr-4 text-left font-sans text-sm font-normal text-white'
              >
                {row.label}
              </th>
              <td className='border-b border-dashed border-[#303030] px-3 py-4 text-left'>
                <CellContent cell={row.google} />
              </td>
              <td className='border-b border-dashed border-[#303030] px-3 py-4 text-left'>
                <CellContent cell={row.sdr} />
              </td>
              <td className='border-b border-dashed border-[#303030] border-l border-[#303030] bg-[color:var(--Neutral-100,#171717)] px-4 py-4 text-left'>
                <CellContent cell={row.cmr} />
              </td>
            </tr>
          ))}
          <tr>
            <td className='p-0' colSpan={3} />
            <td className='border-l border-[#303030] bg-[color:var(--Neutral-100,#171717)] px-4 pb-1 pt-6 text-center'>
              <Link
                href={APP_GET_STARTED_URL}
                className='inline-flex w-full items-center justify-center gap-1 bg-white px-4 py-3 font-mono text-sm font-normal leading-[1.4] tracking-[-0.02em] text-black transition-opacity hover:opacity-90'
              >
                BOOK A CALL
                <ChevronRight className='size-4 shrink-0' strokeWidth={2} aria-hidden />
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
  )
}
