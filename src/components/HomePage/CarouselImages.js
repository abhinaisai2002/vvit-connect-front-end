import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import campus1 from './campus1.png'
import campus2 from './campus2.png'
import campus3 from './campus3.png'

const CarouselImages = ()=>{
    return (
      <Carousel 
      className='carousel'
      autoPlay={true} 
      infiniteLoop={true}
      >
        <div>
          <img src={campus1}  />
        </div>
        <div>
          <img src={campus2} />
        </div>
        <div>
          <img src={campus3} />
        </div>
      </Carousel>
    );
}

export default CarouselImages;