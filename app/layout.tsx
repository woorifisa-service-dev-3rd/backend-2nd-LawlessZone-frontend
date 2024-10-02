// metadata
import type { Metadata } from 'next';
// font
import { Noto_Sans_KR } from 'next/font/google';
// style
import '@/css/reset.css';
import '@/css/common.css';
import '@radix-ui/themes/styles.css';
import { Box, Container, Theme } from '@radix-ui/themes';
import Header from '@/component/common/Header';
import Head from 'next/head';
import Script from 'next/script';

export const metadata: Metadata = {
  title: '無法地帯',
  description: 'backend-2nd-LawlessZone-frontend',
  icons: {
    icon: '/logo.png',
  },
};

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-notosanskr',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <Script src="https://cdn.iamport.kr/js/iamport.payment-1.1.7.js" strategy="beforeInteractive" />
      {/* jQuery 스크립트 */}
      <Script src="https://code.jquery.com/jquery-1.12.4.min.js" strategy="beforeInteractive" />

      <body className={notoSansKr.variable}>
        <Theme>
          <Header />
          <Box>
            <Container p="5" size="3">
              {children}
            </Container>
          </Box>
        </Theme>
      </body>
    </html>
  );
}
