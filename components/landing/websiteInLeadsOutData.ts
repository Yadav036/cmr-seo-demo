export type WebsiteInLeadsVisual = 'figma-step1' | 'accent'

export type WebsiteInLeadsStep = {
  badge: string
  tabLabel: string
  title: string
  description: string
  visual: WebsiteInLeadsVisual
}

export const WEBSITE_IN_LEADS_STEPS: WebsiteInLeadsStep[] = [
  {
    badge: '01',
    tabLabel: 'Sign Up',
    title: 'Start in minutes',
    description: 'One click to create your account—no lengthy approvals or complex onboarding.',
    visual: 'figma-step1',
  },
  {
    badge: '02',
    tabLabel: 'Customize',
    title: 'Make it yours',
    description: 'Add your logo, set your pricing, and build the client experience you want.',
    visual: 'accent',
  },
  {
    badge: '03',
    tabLabel: 'Sell',
    title: 'Start delivering results',
    description: 'Onboard clients, provision mailboxes, and watch your deliverability shine.',
    visual: 'accent',
  },
  {
    badge: '04',
    tabLabel: 'Earn',
    title: 'Collect recurring revenue',
    description: 'Every mailbox you manage is steady monthly income. Scale at your own pace.',
    visual: 'accent',
  },
]
