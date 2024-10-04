'use server';

import { revalidatePath } from 'next/cache';
import { instance } from './instance';

// 전체 게시물 목록 조회
export const getArticle = async () => {
  const response = await instance('articles', {
    method: 'GET',
  });

  return response;
};

// 세부 게시물 조회
export const getArticleDetail = async (id: number) => {
  const response = await instance(`articles/${id}`, {
    method: 'GET',
  });
  return response;
};

// 게시물 등록
export const postArticle = async ({ title, content, viewCount }: IArticlePost) => {
  const response = await instance('articles', {
    body: JSON.stringify({ title, content, viewCount }),
    method: 'POST',
  });
  revalidatePath('/article');
  return response;
};

// 게시물 수정
export const updateArticle = async ({ id, title, content }: { id: number; title: string; content: string }) => {
  const response = await instance(`articles/update/${id}`, {
    body: JSON.stringify({ title, content }),
    method: 'PUT',
  });
  revalidatePath('/article');
  return response;
};

// 게시물 삭제
export const deleteArticle = async (id: number) => {
  const response = await instance(`articles/${id}`, {
    method: 'DELETE',
  });
  revalidatePath('/article');
  return response;
};
