import { getArticle } from '@/api/articleAPI';
import ArticleList from '@/component/article/ArticleList';
import Link from 'next/link';

export default async function Article() {
  const articlesData = await getArticle();
  if (articlesData?.error) {
    console.log(articlesData.error.message);
  }

  return <ArticleList articlesData={articlesData} />;
}
