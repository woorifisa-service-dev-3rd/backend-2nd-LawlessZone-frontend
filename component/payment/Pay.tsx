'use client';

import { validatePayment } from '@/api/paymentAPI';
import { Button, Flex } from '@radix-ui/themes';
import Script from 'next/script';
import { useEffect } from 'react';

export default function Pay() {
  useEffect(() => {
    if (!window.IMP) {
      console.error('IMP 객체가 로드되지 않았습니다.');
    } else {
      window.IMP.init('imp44545746');
    }
  }, []);

  const requestPay = () => {
    const IMP = window.IMP;
    if (!IMP) {
      alert('결제 모듈이 로드되지 않았습니다.');
      return;
    }

    IMP.request_pay(
      {
        pg: 'html5_inicis',
        pay_method: 'card',
        merchant_uid: 'ORD' + new Date().getTime(),
        name: '왕관',
        amount: 100,
        buyer_email: 'gildong@gmail.com',
        buyer_name: '홍길동',
        buyer_tel: '010-4242-4242',
        buyer_addr: '서울특별시 강남구 신사동',
        buyer_postcode: '01181',
      },
      async (rsp) => {
        if (rsp.success) {
          try {
            const response = await validatePayment(rsp.imp_uid, rsp.merchant_uid, rsp.paid_amount);
            if (!response.error) {
              alert('결제가 성공했습니다.');
            } else {
              console.error(rsp.imp_uid);
              alert('결제 검증에 실패했습니다.');
            }
          } catch (error) {
            alert('결제 검증 중 오류가 발생했습니다.');
          }
        } else {
          alert('결제가 실패했습니다. 에러 내용: ' + rsp.error_msg);
        }
      },
    );
  };

  return (
    <Flex justify="center" align="center" direction="column" width="880px">
      <Script
        src="https://cdn.iamport.kr/js/iamport.payment-1.1.7.js"
        strategy="beforeInteractive"
        onLoad={() => {
          if (window.IMP) {
            window.IMP.init('imp44545746');
          } else {
            console.error('IMP 객체가 로드되지 않았습니다.');
          }
        }}
      />
      <Script src="https://code.jquery.com/jquery-1.12.4.min.js" strategy="beforeInteractive" />
      <Flex mt="3" justify="center" className="btn_list">
        <button className="btn_bk" onClick={requestPay}>
          결제하기
        </button>
      </Flex>
    </Flex>
  );
}
