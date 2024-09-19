'use client';

import { Box, Link } from '@radix-ui/themes';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  // https://www.radix-ui.com/themes/docs/theme/overview
  const route = useRouter();

  useEffect(() => {
    route.push('/article');
  }, []);

  return (
    <div>
      <Head>
        <script src="https://cdn.iamport.kr/js/iamport.payment-1.1.7.js"></script>
        <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
      </Head>
    </div>
  );
}
