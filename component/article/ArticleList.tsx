'use client';

import { useState } from 'react';

import styles from '@/css/ArticleList.module.css';
import { Box, Table } from '@radix-ui/themes';
import Link from 'next/link';

export default function ArticleList({ articlesData }: { articlesData: IArticleData[] }) {
  const [articles, setArticle] = useState(articlesData);

  return (
    <Box>
      <Table.Root variant="surface" className={styles.table}>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell width="80px">id</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell width="100%" className={styles.title}>
              제목
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell width="100px">작성자</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {articles.map((article, i) => {
            return (
              <Table.Row key={`article${i}`}>
                <Table.RowHeaderCell width="80px">{article.id}</Table.RowHeaderCell>
                <Table.Cell width="100%" className={styles.title}>
                  <Link href={`article/${article.id}`}>{article.title}</Link>
                </Table.Cell>
                <Table.Cell width="100px">{article.authorNickName}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table.Root>
    </Box>
  );
}
