interface IArticleData {
  id: number;
  authorNickName: string;
  title: string;
  content: string;
}

interface IArticlePost {
  title: string;
  content: string;
  viewCount: number;
}

interface IParams {
  params: {
    articleId: string;
  };
}
