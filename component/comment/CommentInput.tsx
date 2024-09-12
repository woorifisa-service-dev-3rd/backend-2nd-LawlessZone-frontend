'use client';

import { useState } from 'react';
import { Button, Checkbox, Flex, Text, TextField } from '@radix-ui/themes';
import styles from '@/css/Comment.module.css';
import { addComment } from '@/api/commentAPI';
import { useParams } from 'next/navigation';

export default function CommentInput() {
  const params = useParams();
  const articleId = params.articleId;

  const [comment, setComment] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addComment(articleId as string, comment, isAnonymous);

    setComment('');
  };

  return (
    <>
      <Text as="label" size="2">
        <Flex gap="1" mt="5">
          <Checkbox checked={isAnonymous} onCheckedChange={() => setIsAnonymous(!isAnonymous)} />
          익명
        </Flex>
      </Text>
      <form className={styles.comment_form} onSubmit={handleSubmit}>
        <TextField.Root
          size="3"
          placeholder="댓글을 입력하세요"
          className={styles.comment_input}
          name="comment"
          value={comment} // Bind the value of the input to the local state
          onChange={handleChange} // Update the state on input change
        />
        <Button color="gray" variant="solid" size="3" highContrast>
          작성
        </Button>
      </form>
    </>
  );
}
