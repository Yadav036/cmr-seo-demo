export type B2BFeature = {
  title: string
  description: string
  /** Raster art from `public/landing/b2b-illustrations` */
  imageSrc: string
}

export const B2B_FEATURES: readonly B2BFeature[] = [
  {
    title: 'White-label ready',
    description: 'Launch under your brand—logo, domain, and pricing fully customized.',
    imageSrc: '/landing/b2b-illustrations/enterprise-ready.png',
  },
  {
    title: 'Inbox deliverability',
    description: 'Google Workspace & Microsoft 365 infrastructure that lands in the inbox every time.',
    imageSrc: '/landing/b2b-illustrations/smart-icp.png',
  },
  {
    title: 'Zero tech required',
    description: 'No DNS headaches. No server management. Just plug in and start selling.',
    imageSrc: '/landing/b2b-illustrations/live-analysis.png',
  },
  {
    title: 'Scales with you',
    description: 'From 10 to 10,000 mailboxes—our platform grows as fast as you do.',
    imageSrc: '/landing/b2b-illustrations/transparent.png',
  },
  {
    title: 'Set your own margins',
    description: 'You control the pricing. Keep every dollar of profit above our base cost.',
    imageSrc: '/landing/b2b-illustrations/human.png',
  },
  {
    title: 'Partner-first support',
    description: 'Round-the-clock help from a team invested in your success.',
    imageSrc: '/landing/b2b-illustrations/crm-integration.png',
  },
] as const
