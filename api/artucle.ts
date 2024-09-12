import { instance } from './instance';

// 전체 게시물 목록 조회
export const getArticle = async () => {
  const response = await instance('articles', {
    method: 'GET',
  });
  return response;
};
