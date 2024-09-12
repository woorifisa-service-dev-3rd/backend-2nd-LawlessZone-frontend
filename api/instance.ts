'use server';

import { cookies } from 'next/headers'; // 서버 사이드에서 쿠키를 처리하기 위한 내장 모듈
import { BASE_URL } from '@/constants/url';

interface RequestOptions {
  headers?: Record<string, string>;
  [key: string]: string | Record<string, string> | undefined;
}

const fetchInstance = async (url: string, options: RequestOptions = {}) => {
  const accessToken = cookies().get('accessToken');

  const headers: RequestOptions['headers'] = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (accessToken) {
    headers['Cookie'] = `accessToken=${accessToken.value}`;
    headers['credentials'] = 'include';
  }

  try {
    const response = await fetch(`${BASE_URL}${url}`, {
      ...options,
      headers,
    });

    console.log(response);

    if (!response.ok) {
      const errorResponse = await response.json();
      return { error: errorResponse };
    }

    if (response.headers.get('Content-Type')?.includes('application/json')) {
      return await response.json();
    } else {
      return await response.text();
    }
  } catch (error) {
    console.error('Fetch Error:', error);
    throw error;
  }
};

export const instance = fetchInstance;
