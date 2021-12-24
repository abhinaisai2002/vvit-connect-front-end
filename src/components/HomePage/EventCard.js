import React from 'react'
import { Card } from 'react-bootstrap'

export default function EventCard(props) {
    const {
      title,description,image
    } = props;
    return (
      <Card>
        <Card.Img variant='top' src={image} />
        <Card.Body>
          <Card.Title>
            <h2>{title}</h2>
          </Card.Title>
          <h4>{description}</h4>
        </Card.Body>
      </Card>
    );
}
