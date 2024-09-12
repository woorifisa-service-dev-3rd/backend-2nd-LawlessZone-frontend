'use client';

import { Box, Table } from '@radix-ui/themes';
import { useState } from 'react';

export default function ArticleList({ articles }) {
  const [article, setArticle] = useState(articles);

  return (
    <Box>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>id</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>제목</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>작성자</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>{}</Table.Body>
      </Table.Root>
    </Box>
  );
}
