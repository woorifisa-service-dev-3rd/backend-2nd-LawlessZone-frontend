import { Comment } from '@/type/commentType';
import { Box, Container, Flex, Text, TextField } from '@radix-ui/themes';
import styles from '@/css/Comment.module.css';
import CommentInput from './CommentInput';

interface ICommentList {
  articleCommentsData: Comment[];
}

export default function CommentList({ articleCommentsData }: ICommentList) {
  return (
    <Container mt="1" mb="4" p="1" width="100%">
      {articleCommentsData.map((comment: Comment, index: number) => (
        <Flex key={index} px="1" py="4" gap="1px" direction="column" className={styles.comment_wrapper}>
          <Text as="p" size="3" color="gray">
            {comment.isAnonymous ? '익명' : comment.nickName}
          </Text>
          <Text as="p" size="3">
            {comment.content}
          </Text>
        </Flex>
      ))}
      <CommentInput />
    </Container>
  );
}
