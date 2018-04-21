import React, { Component } from 'react';

import './index.css';

class ContactUs extends Component {
  render() {
    return (
      <div className='ContactUs' id='contact-us'>
        <div className='cont'>
          <div className='container' id='container'>
            <h2 className='h2'>Contact Us</h2>
            <form className='contact' action='#' method='post'>
              <div className='information'>
                <input type='text' name='name' className='input' placeholder='Your name'/>
                <input type='email' name='email' className='input' placeholder='Your email'/>
              </div>
              <input type='text' className='comment' name='comment' placeholder='Your message'/>
              <button type='submit' name='button' id='btn'>Send</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
