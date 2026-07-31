import { ThemeProvider } from '@/context/theme';
import type { Metadata } from 'next';

import { SiteFooter } from '@/components/SiteFooter';
import { SiteFrame } from '@/components/SiteFrame';

import './globals.css';

export const metadata: Metadata = {
  title: 'Cold Mail Reseller - White-Label Email Infrastructure for Resellers',
  description:
    'Launch your own white-label cold email infrastructure business. Help your clients land in the inbox every time while building predictable, recurring revenue for yourself.',
  icons: {
    icon: [{ url: '/cmr/cmr-logo.svg', type: 'image/svg+xml' }],
    shortcut: ['/cmr/cmr-logo.svg'],
  },
  openGraph: {
    type: 'website',
    url: 'https://coldmailreseller.com',
    title: 'Cold Mail Reseller - White-Label Email Infrastructure for Resellers',
    description:
      'Launch your own white-label cold email infrastructure business. Help your clients land in the inbox every time while building predictable, recurring revenue for yourself.',
    images: [
      {
        url: '/cmr/cmr-full-logo.png',
        alt: 'Cold Mail Reseller',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cold Mail Reseller - White-Label Email Infrastructure for Resellers',
    description:
      'Launch your own white-label cold email infrastructure business. Help your clients land in the inbox every time while building predictable, recurring revenue for yourself.',
    images: ['/cmr/cmr-full-logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange
        >
          <SiteFrame>
            {children}
            <SiteFooter />
          </SiteFrame>
        </ThemeProvider>
      </body>
    </html>
  );
}