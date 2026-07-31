'use client'

import { motion } from 'motion/react'
import React from 'react'

type WordRevealProps = {
  text: string
  className?: string
  delay?: number
  stagger?: number
  duration?: number
}

export function WordReveal({
  text,
  className = '',
  delay = 0,
  stagger = 0.07,
  duration = 1,
}: WordRevealProps) {
  const words = text.split(' ')
  return (
    <span className={`inline ${className}`} style={{ perspective: '1000px' }}>
      {words.map((word, i) => (
        <React.Fragment key={i}>
          <motion.span
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration, delay: delay + i * stagger, ease: [0.16, 1, 0.3, 1] }}
            className='inline-block'
          >
            {word}
          </motion.span>
          {i < words.length - 1 && ' '}
        </React.Fragment>
      ))}
    </span>
  )
}

export function LineReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.9,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
}) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
