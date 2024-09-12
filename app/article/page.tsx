import { getArticle } from '@/api/artucle';
import ArticleList from '@/component/article/ArticleList';

export default async function Article() {
  const articles = await getArticle();
  if (articles?.error) {
    console.log(articles.error.message);
  }

  return <ArticleList articles={articles} />;
}
