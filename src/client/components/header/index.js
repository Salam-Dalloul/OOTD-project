import React, { Component } from 'react';

import './index.css';
import Slider from '../slider';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <Slider />
        <div className='header__shop-button'><a href='#doctors'> SHOP NOW </a></div>
      </div>
    );
  }
}

export default Header;
