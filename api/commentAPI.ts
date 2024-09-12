'use server';

import { revalidatePath } from 'next/cache';
import { instance } from './instance';

// 전체 게시물 목록 조회
export const getComments = async (articleId: string) => {
  const response = await instance(`articles/${articleId}/comments`, {
    method: 'GET',
  });

  return response;
};

// 세부 게시물 조회
export const addComment = async (articleId: string, content: string, isAnonymous: boolean) => {
  const response = await instance(`articles/${articleId}/comments`, {
    method: 'POST',
    body: JSON.stringify({ isAnonymous, content, nickName: '테스트' }), // 나중에 닉네임 안받도록 requestDTO 수정할거임
  });
  revalidatePath(`articles/${articleId}/comments`);
  return response;
};
