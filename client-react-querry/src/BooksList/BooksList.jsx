import { useQuery } from 'react-query';
import { getAllbooks } from '../api';
import { Container } from '../shared/Container';
import { Flex } from 'rebass';
import { ThreeDots } from 'react-loader-spinner';
import { BookItem } from './BookItem';

export const BooksList = () => {
  const { data, error, isLoading, isError } = useQuery("books", getAllbooks);

  console.log("data-bookList",data)

  if(isLoading) {
    return <Container>
      <Flex py="5" justifyContent="center">
        <ThreeDots color="#ccc" height={30} />
      </Flex>
    </Container>
  }

  if(isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <Container>
      <Flex flexDirection="column"   alignItems="center">
        {
          data.map(({ author, title, id  }) => (
            <div key={id}>
              <BookItem author={author} title={title} id={id} key={id} />
            </div>
          ))
        }
      </Flex>
    </Container>
  )
}