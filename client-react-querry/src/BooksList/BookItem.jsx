import { Flex, Text, Button, Link as StyledLink } from 'rebass/styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { ThreeDots } from 'react-loader-spinner';
import { removeBook } from '../api';

export const BookItem = ({ author, title, id }) => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(removeBook);

  const remove = async () => {
    await (mutateAsync(id));
    queryClient.invalidateQueries("books");
  }
  return (
    <Flex p={3} width="100%" alignItems="center">
      <StyledLink as={RouterLink} to={`/update-book/${id}`} mx="50px">{title}</StyledLink>
      {/* <Link components={StyledLink} to={`/update-book/${id}`} mr="auto">{title}</Link> */}
      <Text>{author}</Text>
      <Button ml="5" onClick={remove}>
        { isLoading ? <ThreeDots color="#fff" height={10} /> : "Remove" }
      </Button>
    </Flex>
  );
}