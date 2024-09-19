import Head from 'next/head';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Head>
        <script src="https://cdn.iamport.kr/js/iamport.payment-1.1.7.js"></script>
        <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
      </Head>
      {children}
    </section>
  );
}
