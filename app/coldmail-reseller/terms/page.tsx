import type { Metadata } from 'next'

import {
  CmrLegalPage,
  LegalList,
  LegalSection,
  LegalSub,
} from '@/components/cmr/CmrLegalPage'

export const metadata: Metadata = {
  title: 'Terms & Conditions — Cold Mail Reseller',
  description:
    'Terms & Conditions for Cold Mail Reseller, the white-label email infrastructure service by Outbox Labs Inc.',
}

export default function CmrTermsPage() {
  return (
    <CmrLegalPage title='Terms & Conditions' updated='November 20, 2025'>
      <LegalSection title='Introduction'>
        <p>
          Welcome to Cold Mail Reseller (White-Label Service for Zapmail), a product owned and
          operated by Outbox Labs Inc., Delaware, USA.
        </p>
        <p>
          By accessing, subscribing to, reselling, or using any part of our white-label platform
          (&quot;Services&quot;), you (&quot;Partner&quot;, &quot;User&quot;, &quot;You&quot;) agree
          to be legally bound by these Terms &amp; Conditions (&quot;Terms&quot;).
        </p>
        <p>
          These Terms incorporate and extend all provisions applicable to Zapmail because Cold Mail
          Reseller is a white-label layer built directly on Zapmail&apos;s infrastructure, APIs, and
          provisioning engine.
        </p>
        <p>
          If you disagree with any part of these Terms, you must cease using the Services
          immediately.
        </p>
      </LegalSection>

      <LegalSection title='Nature of the Services (Zapmail White-Label Infrastructure)'>
        <p>
          Cold Mail Reseller provides white-label access to Zapmail&apos;s automated email
          infrastructure and provisioning systems. This includes:
        </p>
        <LegalSub title='2.1 Email & Mailbox Services'>
          <LegalList
            items={[
              'Provisioning of Google Workspace, Microsoft 365, and SMTP mailboxes.',
              'Pre-warmed mailboxes, aged domains (where applicable), and mailbox lifecycle management.',
              'DNS validation and automated authentication setup (SPF, DKIM, DMARC).',
            ]}
          />
        </LegalSub>
        <LegalSub title='2.2 Domain & DNS Services'>
          <LegalList
            items={[
              'Domain registration and DNS setup under Zapmail infrastructure.',
              'One-year domain usage with no renewals and no transfer-outs.',
              'Automated DNS propagation and monitoring.',
            ]}
          />
        </LegalSub>
        <LegalSub title='2.3 White-Label Dashboard & Tools'>
          <LegalList
            items={[
              'Complete custom-branded dashboard for end-users.',
              'Custom emails, login pages, billing visibility, and reseller interfaces.',
            ]}
          />
        </LegalSub>
        <LegalSub title='2.4 Integrations'>
          <LegalList
            items={[
              'Integrations with supported outreach platforms (Instantly, Smartlead, Reachinbox, etc.).',
              "API access and provisioning through Zapmail's underlying API infrastructure.",
            ]}
          />
        </LegalSub>
        <LegalSub title='2.5 Important Structural Disclaimer'>
          <p>
            Cold Mail Reseller does not operate as a standalone email provider. It is a white-label
            automation layer over third-party ecosystems:
          </p>
          <LegalList
            items={[
              'Google Workspace',
              'Microsoft 365',
              'Domain registrars',
              'DNS hosts',
              'SMTP networks',
            ]}
          />
          <p>
            All accounts and domains are subject to upstream provider policies. Cold Mail Reseller
            cannot reverse, influence, or override actions taken by Google, Microsoft, or
            registrars.
          </p>
        </LegalSub>
      </LegalSection>

      <LegalSection title='Eligibility & Partner Obligations'>
        <LegalSub title='3.1 Eligibility'>
          <p>Partners must be 18+ and provide accurate onboarding details.</p>
        </LegalSub>
        <LegalSub title='3.2 Account Security'>
          <p>
            Partners are responsible for safeguarding credentials. Activity under their account is
            considered authorized.
          </p>
        </LegalSub>
        <LegalSub title='3.3 Responsibility for End-Users'>
          <p>
            The Partner is the first line of support for their end-users. Outbox Labs does not
            provide direct support to end-customers.
          </p>
        </LegalSub>
        <LegalSub title='3.4 Compliance & Legal Use'>
          <p>Partners must ensure their end-users comply with:</p>
          <LegalList
            items={[
              'CAN-SPAM',
              'GDPR',
              'Local anti-abuse regulations',
              'Google & Microsoft Acceptable Use Policies',
              'Sender reputation and ethical sending practices',
            ]}
          />
          <p>
            Violations may result in immediate suspension at Cold Mail Reseller&apos;s sole
            discretion.
          </p>
        </LegalSub>
      </LegalSection>

      <LegalSection title='Service Lifecycle, Renewals & Validity'>
        <p>
          Because Cold Mail Reseller is an integration-based white-label product, the following
          lifecycle rules apply:
        </p>
        <LegalSub title='4.1 Pre-Warmed Mailboxes'>
          <LegalList
            items={[
              'Valid for 1 year only.',
              'Cannot be renewed, extended, reactivated, or transferred.',
              'A new purchase is required after expiration.',
            ]}
          />
        </LegalSub>
        <LegalSub title='4.2 Domains'>
          <LegalList
            items={[
              'All domains registered via Cold Mail Reseller are for one-year use only.',
              'No domain renewals will be provided.',
              'Domains cannot be transferred out of Zapmail infrastructure.',
            ]}
          />
        </LegalSub>
        <LegalSub title='4.3 Google & Microsoft Mailboxes'>
          <LegalList
            items={[
              'Due to dynamic upstream pricing, Cold Mail Reseller does not provide mailbox renewals beyond one year.',
              'Mailboxes expire automatically after their lifecycle.',
            ]}
          />
        </LegalSub>
        <LegalSub title='4.4 No Service Carry-Forward'>
          <p>
            Unused credits, unprovisioned mailboxes, or domain allowances do not roll over.
          </p>
        </LegalSub>
      </LegalSection>

      <LegalSection title='Payments, Billing & Refunds'>
        <LegalSub title='5.1 Payment Terms'>
          <LegalList
            items={[
              'All fees are billed 100% in advance.',
              'All payments are final and strictly non-refundable.',
            ]}
          />
        </LegalSub>
        <LegalSub title='5.2 No Refund Scenarios (Including but not limited to)'>
          <p>Refunds are NOT provided for:</p>
          <LegalList
            items={[
              'Non-use of service',
              'Suspension due to compliance issues',
              'Mailbox bans by Google/Microsoft',
              'Domain expiry',
              'End-user mistakes',
              'Warmup expectations',
              'Deliverability outcomes',
              'Platform downtime',
              'Business loss, lead loss, campaign loss',
            ]}
          />
        </LegalSub>
        <LegalSub title='5.3 Pricing Adjustments'>
          <p>
            Google/Microsoft pricing may change at any time. Cold Mail Reseller is not responsible
            for upstream vendor price fluctuations.
          </p>
        </LegalSub>
        <LegalSub title='5.4 Chargebacks & Disputes'>
          <p>Any attempt to initiate chargebacks will result in:</p>
          <LegalList
            items={[
              'Immediate account termination',
              'Forfeiture of all services, mailboxes, and domains',
              'Permanent ban from all Outbox Labs products',
            ]}
          />
          <p>
            Cold Mail Reseller reserves the right to pursue recovery and legal remedies.
          </p>
        </LegalSub>
      </LegalSection>

      <LegalSection title='Deliverability, Warmup & Performance Disclaimers'>
        <LegalSub title='6.1 Inbox Placement Not Guaranteed'>
          <p>Deliverability depends on:</p>
          <LegalList
            items={[
              'User sending behavior',
              'Email copy quality',
              'Engagement rates',
              'Reputation of target servers',
              'Domain history',
              'External filters',
            ]}
          />
          <p>Cold Mail Reseller does not guarantee inbox placement.</p>
        </LegalSub>
        <LegalSub title='6.2 Warmup & Pre-Warmed Performance'>
          <p>Pre-warmed mailboxes provide potential deliverability advantages but:</p>
          <LegalList
            items={[
              'Results vary',
              'Warmups can be disrupted by user misuse',
              'User behaviour always overrides warmup history',
            ]}
          />
        </LegalSub>
        <LegalSub title='6.3 Placement Tests'>
          <p>
            Inbox placement tests are simulations. They are indicative snapshots and not performance
            guarantees.
          </p>
        </LegalSub>
        <LegalSub title='6.4 Zap Shield'>
          <p>Zap Shield provides monitoring but:</p>
          <LegalList
            items={[
              'Does not guarantee 100% blacklist protection',
              'Blacklist outcomes depend on user sending habits, frequency, and content',
            ]}
          />
          <p>Cold Mail Reseller is not responsible for any blacklist event.</p>
        </LegalSub>
      </LegalSection>

      <LegalSection title='Prohibited Use'>
        <p>Partners and their users may not:</p>
        <LegalList
          items={[
            'Send unsolicited bulk email',
            'Conduct phishing or fraudulent activity',
            'Host malware or harmful content',
            'Bypass DNS settings',
            'Misrepresent identities',
            'Attempt to reverse-engineer or replicate Cold Mail Reseller or Zapmail',
            'Attempt service migration outside our ecosystem',
          ]}
        />
        <p>Violation leads to immediate and irreversible termination.</p>
      </LegalSection>

      <LegalSection title='Suspensions & Terminations'>
        <LegalSub title='8.1 Suspension Rights'>
          <p>Cold Mail Reseller may suspend accounts without notice for:</p>
          <LegalList
            items={[
              'Abuse',
              'High bounce rates',
              'Spam complaints',
              'Blacklist activity',
              'Violations of third-party policies',
              'Suspected fraud',
              'Payment failures',
            ]}
          />
        </LegalSub>
        <LegalSub title='8.2 Provider-Initiated Suspensions'>
          <p>
            Google/Microsoft suspensions are final. Cold Mail Reseller cannot appeal, reverse, or
            compensate for them.
          </p>
        </LegalSub>
        <LegalSub title='8.3 No Reinstatements'>
          <p>Once suspended, accounts are not eligible for reactivation.</p>
        </LegalSub>
        <LegalSub title='8.4 Sole Discretion Clause'>
          <p>
            All decisions regarding suspensions, reinstatements, refunds, and account actions are
            made solely at the discretion of Cold Mail Reseller.
          </p>
        </LegalSub>
      </LegalSection>

      <LegalSection title='Intellectual Property'>
        <LegalList
          items={[
            'Cold Mail Reseller and Zapmail retain full IP ownership.',
            'Partners receive a limited, non-transferable, non-exclusive license.',
            'Reverse engineering, code extraction, or replication is strictly prohibited.',
          ]}
        />
      </LegalSection>

      <LegalSection title='Limitation of Liability'>
        <p>Cold Mail Reseller is not liable for:</p>
        <LegalList
          items={[
            'Loss of profits',
            'Loss of leads or campaign performance',
            'Deliverability outcomes',
            'Provider suspensions',
            'Data loss',
            'End-user misuse',
            'Downtime from Google, Microsoft, domain registrars, DNS hosts, or outreach tools',
          ]}
        />
        <p>Maximum liability is capped at fees paid in the last 30 days.</p>
      </LegalSection>

      <LegalSection title='Indemnification'>
        <p>
          Partners agree to indemnify, defend, and hold harmless Outbox Labs Inc. from all claims
          arising due to:
        </p>
        <LegalList
          items={[
            'Partner or end-user actions',
            'Legal violations',
            'Abuse or misuse',
            'Third-party complaints',
          ]}
        />
      </LegalSection>

      <LegalSection title='Modifications to Terms'>
        <p>
          Cold Mail Reseller may update these Terms at any time without prior notice. Continued use
          of the Services implies acceptance of updated Terms.
        </p>
      </LegalSection>

      <LegalSection title='Governing Law'>
        <p>
          These Terms are governed by the laws of Delaware, without regard to conflict-of-law
          principles. Disputes shall be resolved exclusively in Delaware courts.
        </p>
      </LegalSection>

      <LegalSection title='Entire Agreement'>
        <p>
          These Terms, along with the Privacy Policy and Cancellation Policy, constitute the
          complete agreement between the Partner and Outbox Labs Inc.
        </p>
      </LegalSection>

      <LegalSection title='Contact Information'>
        <p>
          Email:{' '}
          <a
            href='mailto:support@zapmail.ai'
            className='text-[#9b90ff] underline-offset-2 hover:underline'
          >
            support@zapmail.ai
          </a>
        </p>
        <p>Outbox Labs Inc., Delaware, USA</p>
        <p>
          By using Cold Mail Reseller (White-Label Service), you agree to these Terms and Conditions
          in full. If you have any questions or concerns about these Terms and Conditions, please
          contact us at{' '}
          <a
            href='mailto:support@zapmail.ai'
            className='text-[#9b90ff] underline-offset-2 hover:underline'
          >
            support@zapmail.ai
          </a>
          .
        </p>
      </LegalSection>
    </CmrLegalPage>
  )
}
