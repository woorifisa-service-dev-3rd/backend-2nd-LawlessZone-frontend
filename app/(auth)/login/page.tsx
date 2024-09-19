'use client';

import { login } from '@/api/auth/login';
import { Box, Button, Flex, TextField } from '@radix-ui/themes';
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
      router.push('/article');
    } else {
      window.alert('아이디 비밀번호를 확인해주세요.');
    }
  };

  return (
    <Flex justify="center" align="center" width="100%" mt="15">
      <form onSubmit={onSubmit} style={{ width: '300px' }}>
        <Flex justify="center" align="center" direction="column" gap="1">
          <Box width="100%">
            <TextField.Root
              size="3"
              type="email"
              placeholder="아이디"
              value={inputEmail}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box width="100%">
            <TextField.Root
              size="3"
              type="password"
              placeholder="비밀번호"
              value={inputPassword}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Button color="gray" variant="solid" size="3" highContrast type="submit" style={{ width: '100%' }}>
            로그인
          </Button>
        </Flex>
      </form>
    </Flex>
  );
}
