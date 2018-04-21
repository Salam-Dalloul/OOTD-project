import React, { Component } from 'react';

import './index.css';

class Navbar extends Component {
  render() {
    return (
      <div className='navbar__container'>
        <div className='navbar__left navbar__logo'
          onClick={
            () => {
              window.location.pathname = '/';
            }
          }
        >
        </div>
        <div className='navbar__right'>
          <ul className='navbar__nav-btns'>
            <li><a href='/#contact-us'>Contact Us</a></li>
            <li><a href='/profile/matt-gregory'> Sign In</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
