import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import BookForm from './BookForm';

const Forms = () => { 
  

  return (
    <Row>
      <Col>
        <BookForm />
      </Col>
      <Col>
        <Form>
          <Form.Group className="invisible">
            <Form.Control />
          </Form.Group>
          <Form.Group>
            <Form.Control type="text" placeholder="Author name" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="number" placeholder="Author age" />
          </Form.Group>
          <Button className="float-right" variant='info' type="submit">Add auhtor</Button>
        </Form>
      </Col>
    </Row>
  )
}

export default Forms;