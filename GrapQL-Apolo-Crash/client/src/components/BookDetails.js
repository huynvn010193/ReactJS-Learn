import React from 'react'
import Card from 'react-bootstrap/Card'

const BookDetails = () => {
  return (
    <Card bg="info" text="white" className="shadow">
      <Card.Body>
        <Card.Title>Ky nghe lay tay</Card.Title>
        <Card.Subtitle>Ky nghe lay tay</Card.Subtitle>
        <Card.Text>Vu Trong Phung</Card.Text>
        <Card.Text>Age: 99</Card.Text>
        <Card.Text>All book by this author</Card.Text>
        <ul>
          <li>Ky nghe lay tay</li>
          <li>So do</li>
        </ul> 
      </Card.Body>
    </Card>
  )
}

export default BookDetails;