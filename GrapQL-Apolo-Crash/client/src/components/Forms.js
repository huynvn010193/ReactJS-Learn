import React from 'react';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const Forms = () => {
  return (
    <Row>
      <Col>
        <Form>
          <Form.Group>
            <Form.Control type="text" placeholder="Book name" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="text" placeholder="Book genre" />
          </Form.Group>
          <Form.Group>
            <Form.Control as="select" defaultValue="Select author">
              <option disabled>Select auhtor</option>
            </Form.Control>
          </Form.Group>
          <Button className="float-right" variant='info' type="submit">Add book</Button>
        </Form>
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