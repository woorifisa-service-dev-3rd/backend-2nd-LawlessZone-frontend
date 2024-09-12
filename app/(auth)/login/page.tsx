'use client';

import { login } from '@/api/login';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Login() {
  const [inputEmail, setEmail] = useState<string>('');
  const [inputPassword, setPassword] = useState<string>('');
  const router: AppRouterInstance = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const response = await login(inputEmail, inputPassword);
    if (response.statusCode === 200) {
      router.push('/');
    } else {
      window.alert('아이디 비밀번호를 확인해주세요.');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)}></input>
        <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)}></input>
        <input type="submit" value="요청 보내기"></input>
      </form>
    </div>
  );
}
