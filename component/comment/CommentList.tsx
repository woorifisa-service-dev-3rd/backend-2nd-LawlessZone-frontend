import { Comment } from '@/type/commentType';
import { Box, Container, Flex, Text } from '@radix-ui/themes';
import styles from '@/css/Comment.module.css';
import CommentInput from './CommentInput';
import { useParams } from 'next/navigation';
import { deleteComment } from '@/api/commentAPI';
import { useState } from 'react';

interface ICommentList {
  articleCommentsData: Comment[];
}

export default function CommentList({ articleCommentsData }: ICommentList) {
  const param = useParams();
  const articleId = param.articleId;

  const [isUpdate, setIsUpdate] = useState<number>();

  const handleToggleUpdate = (commentId: number) => {
    if (isUpdate == commentId) {
      setIsUpdate(undefined);
    } else {
      setIsUpdate(commentId);
    }
  };

  const handleDeleteComment = async (id: number) => {
    const confirm = window.confirm('삭제하시겠습니까?');
    if (!confirm) return;

    await deleteComment(articleId as string, id);
  };

  return (
    <Container mt="1" mb="4" p="1" width="100%">
      {articleCommentsData.map((comment: Comment) => (
        <Flex key={comment.id} direction="column">
          <Flex px="1" py="4" gap="1px" direction="column" className={styles.comment_wrapper}>
            <Flex justify="between" align="center">
              <Text as="p" size="3" color="gray">
                {comment.isAnonymous ? '익명' : comment.nickName}
              </Text>
              {comment.nickName === ('박준현' || '테스트') && (
                <Flex gap="2" className={styles.comment_util}>
                  <Text as="p" size="2" color="gray" onClick={() => handleToggleUpdate(comment.id)}>
                    수정
                  </Text>
                  <Text as="p" size="2" color="gray" onClick={() => handleDeleteComment(comment.id)}>
                    삭제
                  </Text>
                </Flex>
              )}
            </Flex>
            <Text as="p" size="3">
              {comment.content}
            </Text>
          </Flex>
          {isUpdate == comment.id && (
            <CommentInput isUpdate={true} commentToUpdate={comment} onToggleUpdate={handleToggleUpdate} />
          )}
        </Flex>
      ))}
      <CommentInput isUpdate={false} />
    </Container>
  );
}
