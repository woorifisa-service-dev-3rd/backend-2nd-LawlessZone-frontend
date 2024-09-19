'use client';

import { postArticle, updateArticle } from '@/api/articleAPI';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Box, Flex, Heading, TextArea, TextField } from '@radix-ui/themes';

export default function ArticleWriteForm({
  type,
  articleDetailData,
  children,
}: {
  type: string;
  articleDetailData?: IArticleData;
  children: React.ReactNode;
}) {
  const router = useRouter();

  const [title, setTitle] = useState(type == 'write' ? '' : articleDetailData?.title);
  const [content, setContent] = useState(type == 'write' ? '' : articleDetailData?.content);

  const id = articleDetailData?.id;
  const memberId = 4;
  const viewCount = 0;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title.trim()) {
      alert('제목을 입력하세요!');
      return;
    }

    if (!content.trim()) {
      alert('내용을 입력하세요!');
      return;
    }

    let response;

    if (type == 'write') {
      response = await postArticle({ memberId, title, content, viewCount });
    } else {
      response = await updateArticle({ id, title, content });
    }

    if (response!.error) {
      alert('에러가 발생했습니다.');
    } else {
      alert('기록이 저장되었습니다.');
      router.push('/article');
    }
  };
  return (
    <Box>
      <Heading as="h2">{children}</Heading>
      <Box mt="3">
        <form onSubmit={onSubmit}>
          <Box>
            <TextField.Root
              name="title"
              placeholder="제목을 입력해주세요."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Box>
          <Box mt="1">
            <TextArea
              name="content"
              placeholder="내용을 작성해주세요."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </Box>
          <Box mt="3" className="btn_list">
            <Flex justify="center" align="center" gap="20px">
              <Link href="/article" className="btn_wh">
                취소
              </Link>
              <button type="submit" className="btn_bk">
                저장
              </button>
            </Flex>
          </Box>
        </form>
      </Box>
    </Box>
  );
}
