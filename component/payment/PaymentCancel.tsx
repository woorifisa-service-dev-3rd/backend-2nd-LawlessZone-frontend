'use client';

import { cancelPayment } from '@/api/paymentAPI';
import { Box, Table } from '@radix-ui/themes';
import Link from 'next/link';
import { useState } from 'react';

export default function PaymentCancel({ paymentId } : {paymentId:number}) {

  console.log(paymentId);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  
  const handleCancel = async () => {
    setLoading(true);
    try {
      await cancelPayment(paymentId);
      // 성공적으로 취소된 경우 처리할 로직
      alert('Payment canceled successfully!');
    } catch (err) {
      setError('Failed to cancel payment.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={()=>handleCancel()}>환불 </button>
    </div>
  );
}
