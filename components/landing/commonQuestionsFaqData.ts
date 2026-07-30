export type CommonQuestionsFaqEntry = {
  id: string
  question: string
  answer: string
  bordered?: boolean
}

export const QUALIFIED_LEAD_DISCLAIMER =
  `White-label means your clients see only your brand—never ours.`

export const COMMON_QUESTIONS_FAQ_ITEMS: CommonQuestionsFaqEntry[] = [
  {
    id: 'qualified-lead',
    question: 'What is Cold Mail Reseller?',
    answer:
      'Cold Mail Reseller is a white-label email infrastructure platform. You resell our deliverability infrastructure under your own brand, set your own pricing, and keep the recurring revenue.',
  },
  {
    id: 'control-sent',
    question: 'How much can I earn as a partner?',
    answer:
      'Your income scales with the number of mailboxes you manage. At $8 profit per mailbox with 100 clients, that\'s $800/month. Scale to 1,000 mailboxes and you\'re earning $8,000/month in recurring revenue.',
  },
  {
    id: 'no-leads',
    question: 'Do I need technical expertise to get started?',
    answer:
      'Not at all. We handle DNS setup, IP warm-up, deliverability optimization, and infrastructure management. You just sign up, add your branding, and start selling.',
  },
  {
    id: 'vs-sdr',
    question: 'How does white labeling work?',
    answer:
      'Your clients see your logo, your domain, and your name—never ours. You configure the storefront, set your pricing, and all the credit goes to your business.',
  },
  {
    id: 'technical-setup',
    question: 'What support do I receive as a partner?',
    answer:
      'You get dedicated onboarding, round-the-clock partner support, marketing resources, and continuous platform improvements. We succeed only when you do.',
  },
]
