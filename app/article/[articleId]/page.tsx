import { getArticleDetail } from '@/api/articleAPI';
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

  return <ArticleDetail articleDetailData={articleDetailData} />;
}
