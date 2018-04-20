import React, { Component } from 'react';

import './index.css';
import Slider from '../slider';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <Slider />
      </div>
    );
  }
}

export default Header;
