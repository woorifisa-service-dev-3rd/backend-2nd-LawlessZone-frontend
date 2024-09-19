import { getArticleDetail } from '@/api/articleAPI';
import ArticleWriteForm from '@/component/article/ArticleWriteForm';

export default async function ArticleEdit({ params }: IParams) {
  const articleDetailData = await getArticleDetail(parseInt(params.articleId));
  if (articleDetailData?.error) {
    console.log(articleDetailData.error.message);
  }

  return (
    <ArticleWriteForm type={'edit'} articleDetailData={articleDetailData}>
      수정하기
    </ArticleWriteForm>
  );
}
