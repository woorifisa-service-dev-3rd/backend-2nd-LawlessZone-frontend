import { getArticleDetail } from '@/api/articleAPI';
import { getComments } from '@/api/commentAPI';
import ArticleDetail from '@/component/article/ArticleDetail';

interface IParams {
  params: {
    articleId: string;
  };
}
export default async function ArticleDetailByID({ params }: IParams) {
  const articleDetailData = await getArticleDetail(parseInt(params.articleId));
  if (articleDetailData?.error) {
    console.log(articleDetailData.error.message);
  }
  const articleCommentsData = await getComments(params.articleId);

  return <ArticleDetail articleDetailData={articleDetailData} articleCommentsData={articleCommentsData} />;
}
