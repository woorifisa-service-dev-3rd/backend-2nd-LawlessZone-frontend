import { Comment } from '@/type/commentType';
import { Box, Container, Flex, Text, TextField } from '@radix-ui/themes';
import styles from '@/css/CommentList.module.css';

interface ICommentList {
  articleCommentsData: any;
}

export default function CommentList({ articleCommentsData }: ICommentList) {
  return (
    <Container mt="2" mb="4" p="1">
      {articleCommentsData.map((comment: Comment, index: number) => (
        <Flex
          key={index}
          px="1"
          py="4"
          gap="1px"
          direction="column"
          className={index === articleCommentsData.length - 1 ? '' : styles.comment_wrapper}
        >
          <Text as="p" size="3" color="gray">
            {comment.isAnonymous ? '익명' : comment.nickName}
          </Text>
          <Text as="p" size="3">
            {comment.content}
          </Text>
        </Flex>
      ))}
      <Box my="1">
        <TextField.Root size="3" placeholder="댓글을 입력하세요" className={styles.comment_input} />
      </Box>
    </Container>
  );
}
