import { useParams, useNavigate } from 'react-router-dom';
import { getBook, updateBook } from '../api';
import { Box, Flex, Heading } from 'rebass/styled-components';
import { ThreeDots } from 'react-loader-spinner';
import { useMutation, useQuery } from 'react-query';
import { BookForm, Container } from '../shared';

export const UpdateBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, error, isLoading, isError } = useQuery(["book", { id }], getBook);

  console.log("data 1", data);

  const { mutateAsync, isLoading: isMutating } = useMutation(updateBook);

  const onFormSubmit = async (data) => {
    await mutateAsync({...data, id});
    navigate("/");
  }

  if(isLoading) {
    return ( 
      <Container>
        <Flex py="5" justifyContent="center">
          <ThreeDots color="#ccc" height={30} />
        </Flex>
      </Container> 
    )
  }

  if(isError) { 
    return (
      <Container>
        <Flex py="5" justifyContent="center">
          Error: {error.message}
        </Flex>
      </Container> 
    )
  }

  return (
    <Container>
      <Box>
        <Heading sx={{ marginBottom: 3 }}>Update book</Heading>
        <BookForm defaultValues={data} onFormSubmit={onFormSubmit} isLoading={isMutating}/>
      </Box>
    </Container>
  );
}