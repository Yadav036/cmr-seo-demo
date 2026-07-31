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
    tabLabel: 'API',
    title: 'Provision with one API call',
    description:
      'Domains, DNS, Google & Microsoft mailboxes - create, update, and track everything through a single REST API.',
    visual: 'figma-step1',
  },
  {
    badge: '02',
    tabLabel: 'Warmups',
    title: 'Warmup that stays on',
    description:
      'Enable, tune, and monitor mailbox warmup via API. Keep inbox placement healthy without babysitting settings.',
    visual: 'accent',
  },
  {
    badge: '03',
    tabLabel: 'Pre-warmups',
    title: 'Ship reputation-ready inboxes',
    description:
      'Order pre-warmed mailboxes with reputation already baked in - ready to send from day one, not day fourteen.',
    visual: 'accent',
  },
  {
    badge: '04',
    tabLabel: 'Manage',
    title: 'Records & mailbox data, unified',
    description:
      'DNS records, domains, subscriptions, and mailbox details - read and write the full stack from one control plane.',
    visual: 'accent',
  },
]
