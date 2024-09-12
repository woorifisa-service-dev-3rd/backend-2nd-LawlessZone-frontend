'use server';

import { cookies } from 'next/headers';
import { instance } from './instance';

export const login = async (email: string, password: string) => {
  const response = await instance('member/login', {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  if (response.cookie) {
    const cookieStore = cookies();
    const cookieParts = response.cookie.split('; ');
    const accessToken = cookieParts[0];

    const path = cookieParts.find((part: string) => part.startsWith('Path=')) || 'Path=/';
    const maxAge = cookieParts.find((part: string) => part.startsWith('Max-Age=')) || '';
    const expires = cookieParts.find((part: string) => part.startsWith('Expires=')) || '';

    cookieStore.set('accessToken', accessToken.substring(12), {
      path: '/',
      maxAge: maxAge.substring(8),
      sameSite: 'lax',
      httpOnly: true,
    });

    response['statusCode'] = 200;
  }
  return response;
};
