import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { getAuthors } from '../graphql-client/queries';
import { useMutation } from '@apollo/client';
import { addSingleAuthor } from '../graphql-client/multations';

const AuthorForm = () => {

  const [newAuthor, setNewAuthor] = useState({
    name: '',
    age: ''
  });

  const { name, age } = newAuthor;

  // GraphQL operations 
  const [addAuthor, dataMutation] = useMutation(addSingleAuthor);

  const onInputChange = event => {
    setNewAuthor({
      ...newAuthor,
      [event.target.name] : event.target.value
    })
  }

  const onSubmit = event => {
    event.preventDefault();
    addAuthor({
      variables: { name, age: parseInt(age) },
      refetchQueries: [{ query: getAuthors }]
    })

    setNewAuthor({
      name: '',
      age: '',
    })

  }


  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="invisible">
        <Form.Control />
      </Form.Group>
      <Form.Group>
        <Form.Control type="text" placeholder="Author name" name="name" onChange={onInputChange} value={name} />
      </Form.Group>
      <Form.Group>
        <Form.Control type="number" placeholder="Author age" name="age" onChange={onInputChange} value={age}/>
      </Form.Group>
      <Button className="float-right" variant='info' type="submit">Add auhtor</Button>
    </Form>
  )
}

export default AuthorForm