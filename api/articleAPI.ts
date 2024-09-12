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
