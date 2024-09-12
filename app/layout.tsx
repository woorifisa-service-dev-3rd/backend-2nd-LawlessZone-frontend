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

export const metadata: Metadata = {
  title: 'LawlessZone',
  description: 'backend-2nd-LawlessZone-frontend',
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
