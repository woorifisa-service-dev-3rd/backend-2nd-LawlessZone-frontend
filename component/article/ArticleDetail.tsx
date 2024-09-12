'use client';

import styles from '@/css/ArticleDetail.module.css';
import { Box, Card, Flex, Text } from '@radix-ui/themes';
import Link from 'next/link';
import { useState } from 'react';

export default function ArticleDetail({ articleDetailData }: { articleDetailData: IArticleData }) {
  const [articleDetail, setArticleDetail] = useState(articleDetailData);
  console.log(articleDetail);
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
                  <button>삭제</button>
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
      <Box mt="3" className={styles.btn_list}>
        <Link href="/article">목록으로</Link>
      </Box>
    </Box>
  );
}
