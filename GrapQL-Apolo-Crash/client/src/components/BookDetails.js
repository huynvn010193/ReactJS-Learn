import React, { Fragment } from 'react'
import Card from 'react-bootstrap/Card'
import { useQuery } from '@apollo/client';
import { getSingleBook } from '../graphql-client/queries';

const BookDetails = ({ bookId }) => {
  const { loading, error, data } = useQuery(getSingleBook, {
    variables: { 
      id: bookId
    }
  });

  if(loading) return <p>Loading book details...</p>;
  if(bookId !== null && error) {
    return <p>Error loading book details!</p>
  }

  const book = !loading && !error ? data.book : null;


  return (
    <Card bg="info" text="white" className="shadow">
      <Card.Body>
        {
          book === null ? ( <Card.Text>Please select a book</Card.Text> ) : (
            <Fragment>
              <Card.Title>{book.name}</Card.Title>
              <Card.Subtitle>{book.genre}</Card.Subtitle>
              <p>{book.author.name}</p>
              <p>Age: {book.author.age}</p>
              <p>All book by this author</p>
              <ul>
                {book.author.books.map(
                  item => <li key={item.id}>{item.name}</li>
                )}
                <li>Ky nghe lay tay</li>
                <li>So do</li>
              </ul>
            </Fragment>
          ) 
        }
      </Card.Body>
    </Card>
  )
}

export default BookDetails;