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
    label: 'Monthly platform cost',
    google: { type: 'text', value: '~$500+' },
    sdr: { type: 'text', value: '~$300+' },
    cmr: { type: 'text', value: '$149+', accent: true },
  },
  {
    label: 'Mailboxes included',
    google: { type: 'text', value: '5–10' },
    sdr: { type: 'text', value: '20–30' },
    cmr: { type: 'text', value: 'Unlimited', accent: true },
  },
  {
    label: 'Time to launch',
    google: { type: 'text', value: '2–4 weeks' },
    sdr: { type: 'text', value: '5–7 days' },
    cmr: { type: 'text', value: '~24 hours', accent: true },
  },
  {
    label: 'White-label branding',
    google: { type: 'x' },
    sdr: { type: 'x' },
    cmr: { type: 'check' },
  },
  {
    label: 'Custom pricing control',
    google: { type: 'x' },
    sdr: { type: 'x' },
    cmr: { type: 'check' },
  },
  {
    label: 'Scales instantly',
    google: { type: 'partial', value: 'Partial' },
    sdr: { type: 'x' },
    cmr: { type: 'check' },
  },
  {
    label: 'Zero technical setup',
    google: { type: 'x' },
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
                  Complex infra, constant maintenance
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
                  Limited features, no white-label
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
                  White-label. Scalable. Yours.
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
