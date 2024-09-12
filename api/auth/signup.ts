'use server';

import { instance } from '../instance';

export const signup = async (email: string, password: string, confirmPassword: string, nickName: string) => {
  const response = await instance('member/signup', {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      nickName: nickName,
    }),
  });

  return response;
};
