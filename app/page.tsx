import { Box, Link } from '@radix-ui/themes';
import Head from 'next/head';

export default function Home() {
  // https://www.radix-ui.com/themes/docs/theme/overview
  return <div>
    <Head>
        <script src='https://cdn.iamport.kr/js/iamport.payment-1.1.7.js'></script>
        <script src='https://code.jquery.com/jquery-1.12.4.min.js'></script>
      </Head>
    <Box>컨텐츠 영역</Box>
  </div>;
}
