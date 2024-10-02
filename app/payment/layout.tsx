import Head from 'next/head';
import Script from 'next/script';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Script src="https://code.jquery.com/jquery-1.12.4.min.js" strategy="beforeInteractive" />
      <Script src="https://cdn.iamport.kr/js/iamport.payment-1.1.7.js" strategy="lazyOnload" />
      {children}
    </section>
  );
}
