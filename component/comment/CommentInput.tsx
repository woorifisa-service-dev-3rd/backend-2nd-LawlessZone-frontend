'use client';

import { useState } from 'react';
import { Button, Checkbox, Flex, Text, TextField } from '@radix-ui/themes';
import styles from '@/css/Comment.module.css';
import { addComment, updateComment } from '@/api/commentAPI';
import { useParams } from 'next/navigation';
import { Comment } from '@/type/commentType';

interface ICommentInput {
  isUpdate: boolean;
  commentToUpdate?: Comment;
  onToggleUpdate?: (commentId: number) => void;
}

export default function CommentInput({ isUpdate, commentToUpdate, onToggleUpdate }: ICommentInput) {
  const params = useParams();
  const articleId = params.articleId;

  const [comment, setComment] = useState<string>(commentToUpdate?.content || '');
  const [isAnonymous, setIsAnonymous] = useState<boolean>(commentToUpdate?.isAnonymous || false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleToggleAnonymous = () => {
    setIsAnonymous((prev) => !prev);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isUpdate) {
      await updateComment(articleId as string, commentToUpdate!.id, comment, isAnonymous);
      onToggleUpdate && onToggleUpdate(commentToUpdate!.id);
      return;
    }

    await addComment(articleId as string, comment, isAnonymous);

    setComment('');
  };

  console.log('isAnonymous', isAnonymous);

  return (
    <>
      <Text as="label" size="2">
        <Flex gap="1" mt={isUpdate ? '3' : '5'}>
          <Checkbox checked={isAnonymous} onCheckedChange={handleToggleAnonymous} />
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
          {isUpdate ? '수정' : '등록'}
        </Button>
      </form>
    </>
  );
}
