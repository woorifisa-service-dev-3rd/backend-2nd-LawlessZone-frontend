import { revalidatePath } from 'next/cache';
import { instance } from './instance';

// 전체 게시물 목록 조회
export const getPayment = async () => {
  const response = await instance('payment/list', {
    method: 'GET',
  });

  return response;
};

export const cancelPayment = async (id: any) => {
  console.log(`/payment/${id}/cancel"`);

  const response = await instance(`payment/${id}/cancel`, {
    method: 'GET',
  });
  console.log(response);

  revalidatePath('/payment');
  return response;
};

export const validatePayment = async (impUid: any, merchantUid: any, amount: any) => {
  const response = await instance(`payment/validate`, {
    method: 'POST',
    body: JSON.stringify({ impUid, merchantUid, amount }),
  });
  revalidatePath('/payment');
  return response;
};
