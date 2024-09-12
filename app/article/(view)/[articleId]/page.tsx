import { getArticleDetail } from '@/api/articleAPI';
import ArticleDetailView from '@/component/article/ArticleDetailView';

export default async function ArticleDetail({ params }: IParams) {
  const articleDetailData = await getArticleDetail(parseInt(params.articleId));
  if (articleDetailData?.error) {
    console.log(articleDetailData.error.message);
  }

  return <ArticleDetailView articleDetailData={articleDetailData} />;
}
