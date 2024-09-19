'use server';

import { cookies } from 'next/headers';
import { instance } from '../instance';

export const login = async (email: string, password: string) => {
  const response = await instance('member/login', {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  if (response.accessToken) {
    const cookieStore = cookies();

    cookieStore.set('accessToken', response.accessToken, {
      path: '/',
      maxAge: 60 * 60 * 24 * 31,
      sameSite: 'lax',
      httpOnly: true,
    });
    response['statusCode'] = 200;
  }
  return response;
};
