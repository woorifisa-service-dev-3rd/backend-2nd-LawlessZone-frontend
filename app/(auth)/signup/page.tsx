'use client';

import { signup } from '@/api/auth/signup';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Signup = () => {
  const router: AppRouterInstance = useRouter();
  const [inputEmail, setEmail] = useState<string>('');
  const [inputPassword, setPassword] = useState<string>('');
  const [inputPasswordConfirm, setPasswordConfirm] = useState<string>('');
  const [inputNickName, setNickName] = useState<string>('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputPassword !== inputPasswordConfirm) {
      window.alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    const response = await signup(inputEmail, inputPassword, inputPasswordConfirm, inputNickName);
    if (response.email) {
      router.push('/login');
    } else {
      window.alert('회원가입에 실패했습니다.');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)}
          placeholder="이메일"
        ></input>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNickName(e.currentTarget.value)}
          placeholder="닉네임"
        ></input>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)}
          placeholder="비밀번호"
        ></input>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPasswordConfirm(e.currentTarget.value)}
          placeholder="비밀번호 확인"
        ></input>
        <input type="submit" value="회원가입"></input>
      </form>
    </div>
  );
};

export default Signup;
