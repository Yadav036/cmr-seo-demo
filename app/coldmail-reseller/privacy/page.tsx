import type { Metadata } from 'next'

import {
  CmrLegalPage,
  LegalList,
  LegalSection,
  LegalSub,
} from '@/components/cmr/CmrLegalPage'

export const metadata: Metadata = {
  title: 'Privacy Policy — Cold Mail Reseller',
  description:
    'Privacy Policy for Cold Mail Reseller, the white-label email infrastructure service by Outbox Labs Inc.',
}

export default function CmrPrivacyPage() {
  return (
    <CmrLegalPage title='Privacy Policy' updated='January 7, 2025'>
      <LegalSection title='Introduction'>
        <p>
          This Privacy Policy explains how Cold Mail Reseller White-Label Service (hereinafter
          referred to as &quot;Cold Mail Reseller&quot;, &quot;we&quot;, &quot;our&quot;, or
          &quot;us&quot;) collects, uses, processes, and discloses personal and business data when
          you, as a Partner or end-user, engage with our services. We are committed to protecting
          your privacy and ensuring compliance with applicable data protection laws, including the
          General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and
          other global privacy standards. By using our services, you consent to the terms described
          in this policy.
        </p>
      </LegalSection>

      <LegalSection title='Information We Collect'>
        <LegalSub title='Personal Information:'>
          <p>
            <span className='text-white/85'>Partners:</span> This includes name, email address,
            business name, billing details, and contact information provided during registration.
          </p>
          <p>
            <span className='text-white/85'>End-Users:</span> Data related to end-users&apos;
            accounts created under the white-label service, such as name, email, domain settings, and
            configuration details.
          </p>
        </LegalSub>
        <LegalSub title='Usage Data:'>
          <p>
            Includes IP addresses, browser type, operating system, session duration, and other
            details automatically collected when Partners or end-users interact with our platform.
          </p>
        </LegalSub>
        <LegalSub title='Payment and Billing Data:'>
          <p>
            Transaction records, payment history, and tax-related information required for
            processing payments and compliance purposes.
          </p>
        </LegalSub>
        <LegalSub title='Cookies and Tracking Technologies:'>
          <p>
            We use cookies and tracking technologies to monitor website usage, improve user
            experience, and deliver personalized marketing.
          </p>
        </LegalSub>
      </LegalSection>

      <LegalSection title='How We Use the Information'>
        <LegalSub title='To Deliver Services:'>
          <p>
            To provide, configure, and maintain the white-label email infrastructure service. To
            fulfill Partner and end-user requests, including account setup and management.
          </p>
        </LegalSub>
        <LegalSub title='For Security and Compliance:'>
          <p>
            To detect and prevent fraud, abuse, and unauthorized access. To comply with legal and
            regulatory requirements.
          </p>
        </LegalSub>
        <LegalSub title='To Improve Services:'>
          <p>
            To analyze usage patterns for optimizing the platform. To develop new features and
            enhancements.
          </p>
        </LegalSub>
        <LegalSub title='For Marketing:'>
          <p>
            With your consent, we may send promotional emails or updates. Partners are responsible
            for their own end-user communication and must ensure compliance with relevant marketing
            laws.
          </p>
        </LegalSub>
      </LegalSection>

      <LegalSection title='Data Sharing and Disclosure'>
        <LegalSub title='Third-Party Processors:'>
          <p>
            Information may be shared with third-party providers (e.g., payment processors, cloud
            hosting providers) solely to facilitate service delivery.
          </p>
        </LegalSub>
        <LegalSub title='Compliance with Laws:'>
          <p>
            We may disclose information in response to valid legal requests, such as subpoenas or
            court orders.
          </p>
        </LegalSub>
        <LegalSub title='Business Transfers:'>
          <p>
            In case of mergers, acquisitions, or asset transfers, data may be transferred to the
            successor organization under continued protection.
          </p>
        </LegalSub>
        <LegalSub title='Partner Responsibilities:'>
          <p>
            As a Partner, you are responsible for ensuring that your end-users are aware of their
            rights and obligations. Cold Mail Reseller is not liable for any breach of privacy
            caused by Partner actions outside the scope of this policy.
          </p>
        </LegalSub>
      </LegalSection>

      <LegalSection title='Data Retention'>
        <LegalList
          items={[
            'Personal and business data is retained only as long as necessary to fulfill the purposes described in this policy, comply with legal obligations, resolve disputes, and enforce agreements.',
            'Partner data is retained as long as the white-label agreement remains active, unless legally required otherwise.',
          ]}
        />
      </LegalSection>

      <LegalSection title='Data Security'>
        <p>
          We implement robust security measures, including encryption, firewalls, and secure server
          storage, to safeguard personal and business data. Partners are advised to maintain similar
          security practices for their own platforms.
        </p>
      </LegalSection>

      <LegalSection title='International Data Transfers'>
        <p>
          Data collected may be stored and processed in countries outside your own. By using the
          service, you acknowledge and consent to such data transfers under applicable safeguards.
        </p>
      </LegalSection>

      <LegalSection title='Your Rights'>
        <LegalSub title='Partners and End-Users:'>
          <p>
            Right to access, correct, delete, or restrict processing of personal data. Right to data
            portability (where applicable).
          </p>
        </LegalSub>
        <LegalSub title='Consent Management:'>
          <p>
            Partners are responsible for obtaining and managing end-user consent for data
            processing, where required.
          </p>
        </LegalSub>
        <LegalSub title='Data Breach Notification:'>
          <p>
            In case of a data breach, we will notify affected parties in compliance with applicable
            regulations.
          </p>
        </LegalSub>
      </LegalSection>

      <LegalSection title='Cookies and Tracking Technologies'>
        <p>
          Cold Mail Reseller uses cookies to improve user experience. Partners must provide
          transparent cookie policies to their end-users and ensure compliance with regional laws
          (e.g., GDPR&apos;s cookie consent rules).
        </p>
      </LegalSection>

      <LegalSection title='Liabilities and Limitations'>
        <LegalSub title='Partner Responsibilities:'>
          <p>
            Partners must implement their own privacy policies for their end-users, ensuring
            compliance with relevant laws. Cold Mail Reseller is not liable for Partner-specific
            actions outside the scope of our service.
          </p>
        </LegalSub>
        <LegalSub title='No Guarantees for End-Users:'>
          <p>
            Cold Mail Reseller disclaims liability for disputes or data breaches occurring on
            Partner-managed white-label platforms.
          </p>
        </LegalSub>
      </LegalSection>

      <LegalSection title='Changes to the Privacy Policy'>
        <p>
          This policy may be updated periodically. Partners and end-users will be notified of
          significant changes, and continued use of the service constitutes acceptance of revised
          terms.
        </p>
      </LegalSection>

      <LegalSection title='Contact Us'>
        <p>
          For questions or concerns about this Privacy Policy:{' '}
          <a
            href='mailto:privacy@zapmail.ai'
            className='text-[#9b90ff] underline-offset-2 hover:underline'
          >
            privacy@zapmail.ai
          </a>
        </p>
      </LegalSection>

      <LegalSection title='Additional Provisions'>
        <LegalSub title='Trademarks and Intellectual Property:'>
          <p>
            All trademarks mentioned are the property of their respective owners. Cold Mail Reseller
            reserves the right to pursue action for any unauthorized use of its intellectual
            property.
          </p>
        </LegalSub>
        <LegalSub title="Children's Privacy:">
          <p>This service is not intended for individuals under the age of 18.</p>
        </LegalSub>
        <LegalSub title='Third-Party Links:'>
          <p>
            Cold Mail Reseller is not responsible for the privacy practices of linked third-party
            sites.
          </p>
        </LegalSub>
        <LegalSub title='Dispute Resolution:'>
          <p>
            Any disputes arising from this policy shall be governed by the laws of the state where
            Cold Mail Reseller is headquartered.
          </p>
        </LegalSub>
        <p>
          By using the Cold Mail Reseller (White-Label Service), Partners agree to comply with this
          Privacy Policy and to implement and enforce similar measures for their end-users.
        </p>
        <p>Effective Date: January 7, 2025</p>
        <p>Company: Outbox Labs Inc.</p>
        <p>All Rights Reserved</p>
      </LegalSection>
    </CmrLegalPage>
  )
}
