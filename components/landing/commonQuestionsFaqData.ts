export type CommonQuestionsFaqEntry = {
  id: string
  question: string
  answer: string
  bordered?: boolean
}

export const QUALIFIED_LEAD_DISCLAIMER =
  `White-label means your clients see only your brand, never ours.`

export const COMMON_QUESTIONS_FAQ_ITEMS: CommonQuestionsFaqEntry[] = [
  {
    id: 'qualified-lead',
    question: 'What is Cold Mail Reseller?',
    answer:
      "Cold Mail Reseller is email infrastructure you can run under your own brand. You get a full REST API and a white-label dashboard to provision domains, DNS, warmups, pre-warmups, and mailboxes, then deliver that stack to your clients as your product.",
  },
  {
    id: 'control-sent',
    question: 'How much can I earn as a Cold Mail Reseller Partner?',
    answer:
      'Partners typically earn 30-50% margins on each mailbox. With flexible pricing, you set your own rates while staying competitive, backed by infrastructure you control through our API and white-label dashboard.',
  },
  {
    id: 'no-leads',
    question: 'Do I need technical expertise to get started?',
    answer:
      'No. Automated setup handles DKIM, SPF, and DMARC for you. Prefer to integrate yourself? Use the API. Prefer a UI? Use the white-label dashboard. Either path gets you live without deep infra expertise.',
  },
  {
    id: 'vs-sdr',
    question: 'How does White Labeling work?',
    answer:
      'Customize the entire experience with your brand, including the white-label dashboard, documentation, and support materials. Your clients only see your brand. You can also build on top of our APIs so every flow stays native to your product.',
  },
  {
    id: 'technical-setup',
    question: 'What support do I receive as a Cold Mail Reseller Partner?',
    answer:
      'Partners get dedicated support, marketing materials, full API documentation, white-label dashboard guidance, and regular training so you can ship and scale with confidence.',
  },
]
