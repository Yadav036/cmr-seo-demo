import type { Metadata } from 'next'

import {
  CmrLegalPage,
  LegalList,
  LegalSection,
} from '@/components/cmr/CmrLegalPage'

export const metadata: Metadata = {
  title: 'Cancellation Policy - Cold Mail Reseller',
  description:
    'Cancellation and refund policy for Cold Mail Reseller by Outbox Labs Inc.',
}

export default function CmrCancellationPage() {
  return (
    <CmrLegalPage title='Cancellation Policy' updated='January 7, 2025'>
      <LegalSection title='No Refund Policy'>
        <p>
          Please note that all purchases and payments made under the Cold Mail Reseller (White-Label
          Service) are final. We do not issue refunds for any transactions, including subscription
          fees, services, or add-ons. Once a payment is processed, it is non-refundable. We
          encourage all Partners to review their selections carefully before making a purchase.
        </p>
      </LegalSection>

      <LegalSection title='Subscription Cancellation'>
        <p>
          You can cancel your subscription at any time through your account dashboard or by
          contacting our support team. Upon cancellation:
        </p>
        <LegalList
          items={[
            'No Refunds: No refunds will be issued for any unused portion of your current subscription period.',
            'Continued Access: Your access to the service will remain active until the end of the current billing cycle. No further charges will be applied for subsequent billing cycles after cancellation.',
          ]}
        />
      </LegalSection>

      <LegalSection title='Partner Responsibilities'>
        <p>
          As a Partner utilizing the white-label service, you are responsible for managing
          subscriptions and cancellations for your end-users. It is your responsibility to
          communicate your cancellation policy to your end-users and ensure compliance with it.
        </p>
      </LegalSection>

      <LegalSection title='Need Assistance?'>
        <p>
          If you encounter any issues or require assistance with your subscription or cancellations,
          please contact our support team at{' '}
          <a
            href='mailto:support@zapmail.ai'
            className='text-[#9b90ff] underline-offset-2 hover:underline'
          >
            support@zapmail.ai
          </a>
          . We are here to help with any questions or concerns you may have.
        </p>
        <p>
          Thank you for trusting Cold Mail Reseller (White-Label Service) to power your email
          infrastructure. We value our partnership with you and are committed to delivering
          exceptional service.
        </p>
      </LegalSection>
    </CmrLegalPage>
  )
}
