'use client'

import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

type WobbleCardProps = {
  children: React.ReactNode
  className?: string
}

export function WobbleCard({ children, className = '' }: WobbleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        'w-full bg-[#141414] p-8 rounded-2xl overflow-hidden',
        'min-h-[200px] md:min-h-[220px]',
        className,
      )}
    >
      {children}
    </motion.div>
  )
}
