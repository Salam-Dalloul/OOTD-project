import React, { Component } from 'react';
import './index.css';
import { Slide } from 'react-slideshow-image';

const images = [
  './assets/imgs/img1.jpg',
  './assets/imgs/img2.jpg',
  './assets/imgs/img4.jpg'
];
class Slider extends Component {
  render() {
    return (
      <div>
        <Slide className='slider'
          images={images}
          duration='5000'
          transitionDuration='1000'
        />
        <div className='button'><a href='#doctors'> SHOP NOW </a></div>
      </div>
    );
  }

}

export default Slider;
