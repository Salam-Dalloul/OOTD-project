import React, { Component } from 'react';

import './index.css';

class Navbar extends Component {
  render() {
    return (
      <div className='navbar__container'>
        <div className='navbar__left'>
        </div>
        <div className='navbar__right'>
          <ul className='navbar__nav-btns'>
            <li>Contact Us</li>
            <li>Sign In</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
