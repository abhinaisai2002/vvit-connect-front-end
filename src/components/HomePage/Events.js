import React from 'react'
import EventCard from './EventCard';
import {Row,Col} from 'react-bootstrap';
import campus1 from './campus1.png';

const eventsCardsDetails = [
  {
    title: 'SAC',
    description: 'Hey we are from sac',
    image: campus1,
  },
  {
    title: 'SAC',
    description: 'Hey we are from sac',
    image: campus1,
  },
  {
    title: 'SAC',
    description: 'Hey we are from sac',
    image: campus1,
  },
  {
    title: 'SAC',
    description: 'Hey we are from sac',
    image: campus1,
  },
  {
    title: 'SAC',
    description: 'Hey we are from sac',
    image: campus1,
  },
  {
    title: 'SAC',
    description: 'Hey we are from sac',
    image: campus1,
  },
];

const Events = ()=>{
    return (
      <div className='m-5'>
        <h1 className='mb-4'>Events</h1>
          <Row xs={1} md={3} className='g-5'>
            {Array.from({ length: eventsCardsDetails.length }).map((_, idx) => (
              <Col key={idx}>
                <EventCard 
                title={eventsCardsDetails[idx].title}
                description={eventsCardsDetails[idx].description}
                image={eventsCardsDetails[idx].image}
                />
              </Col>
            ))}
          </Row>
      </div>
    );
}

export default Events;