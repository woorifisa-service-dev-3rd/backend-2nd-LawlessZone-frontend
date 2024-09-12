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
    body: JSON.stringify({ isAnonymous, content }),
  });
  revalidatePath(`articles/${articleId}/comments`);
  return response;
};

// 댓글 수정
export const updateComment = async (articleId: string, commentId: number, content: string, isAnonymous: boolean) => {
  const response = await instance(`articles/${articleId}/comments/update/${commentId}`, {
    method: 'POST',
    body: JSON.stringify({ isAnonymous, content }),
  });
  revalidatePath(`articles/${articleId}/comments`);
  return response;
};

// 댓글 삭제
export const deleteComment = async (articleId: string, commentId: number) => {
  const response = await instance(`articles/${articleId}/comments/delete/${commentId}`, {
    method: 'POST',
  });
  revalidatePath(`articles/${articleId}/comments`);
  return response;
};
