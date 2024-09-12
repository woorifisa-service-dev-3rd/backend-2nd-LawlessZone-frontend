'use client';

import { deleteArticle } from '@/api/articleAPI';
import styles from '@/css/ArticleDetail.module.css';
import { Box, Card, Flex, Text } from '@radix-ui/themes';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ArticleDetailView({ articleDetailData }: { articleDetailData: IArticleData }) {
  const router = useRouter();

  const [articleDetail, setArticleDetail] = useState(articleDetailData);

  const onDelete = async () => {
    const response = await deleteArticle(articleDetail.id);
    if (response!.error) {
      alert('에러가 발생했습니다.');
    } else {
      alert('기록이 삭제되었습니다.');
      router.replace('/article');
    }
  };
  return (
    <Box>
      {/* 기사 영역 */}
      <Box className={styles.article_area}>
        <Box className={styles.header}>
          <h2>{articleDetail.title}</h2>
          <Flex justify="between" align="center">
            <Text as="p" size="2" color="gray">
              작성자: {articleDetail.authorNickName}
            </Text>
            <Flex justify="center" align="center" gap="15px" asChild>
              <ul className={styles.util_list}>
                <li>
                  <Link href={`/article/edit/${articleDetail.id}`}>수정</Link>
                </li>
                <li>
                  <button onClick={onDelete}>삭제</button>
                </li>
              </ul>
            </Flex>
          </Flex>
        </Box>
        <Card mt="3" className={styles.content}>
          <Text as="p">{articleDetail.content}</Text>
        </Card>
      </Box>
      {/* 댓글 영역 */}
      <Flex mt="3" justify="center" className="btn_list">
        <Link href="/article" className="btn_bk">
          목록으로
        </Link>
      </Flex>
    </Box>
  );
}
