import * as React from 'react'

import { cn } from '@/lib/utils'

type LogoProps = {
  className?: string
  width?: number
  height?: number
  /** Wordmark next to the mark. Defaults to current product name. */
  name?: string
  color?: string
  fill?: string
}

export const Logo: React.FC<LogoProps> = ({
  className,
  height = 28,
  name = 'Cold Mail Reseller',
}) => {
  const markSize = Math.round(height * 1.05)

  return (
    <span
      className={cn('inline-flex items-center gap-2.5', className)}
      style={{ height }}
      role='img'
      aria-label={name}
    >
      <img
        src='/cmr/cmr-mark.png'
        alt=''
        width={markSize}
        height={markSize}
        className='shrink-0 object-contain'
        aria-hidden
      />
      <span
        className='font-general-sans text-[length:var(--logo-size)] font-semibold leading-none tracking-[-0.03em] text-white'
        style={{ ['--logo-size' as string]: `${Math.round(height * 0.55)}px` }}
      >
        {name}
      </span>
    </span>
  )
}
