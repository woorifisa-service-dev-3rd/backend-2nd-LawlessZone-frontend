'use client';

import { Box, Link } from '@radix-ui/themes';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import Script from 'next/script';
import { useEffect } from 'react';

export default function Home() {
  // https://www.radix-ui.com/themes/docs/theme/overview
  const route = useRouter();

  useEffect(() => {
    route.push('/article');
  }, [route]);

  return (
    <div>
      <Script src="https://code.jquery.com/jquery-1.12.4.min.js" strategy="beforeInteractive" />
      <Script src="https://cdn.iamport.kr/js/iamport.payment-1.1.7.js" strategy="lazyOnload" />
      root 페이지
    </div>
  );
}
