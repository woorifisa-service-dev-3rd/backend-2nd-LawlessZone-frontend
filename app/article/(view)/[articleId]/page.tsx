import { getArticleDetail } from '@/api/articleAPI';
import { getComments } from '@/api/commentAPI';
import ArticleDetailView from '@/component/article/ArticleDetailView';

interface IParams {
  params: {
    articleId: string;
  };
}
export default async function ArticleDetailByID({ params }: IParams) {
  const articleDetailData = await getArticleDetail(parseInt(params.articleId));
  if (articleDetailData?.error) {
    console.log(articleDetailData.error);
  }
  const articleCommentsData = await getComments(params.articleId);

  return <ArticleDetailView articleDetailData={articleDetailData} articleCommentsData={articleCommentsData} />;
}
