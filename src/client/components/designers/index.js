import React, { Component } from 'react';

import './index.css';

class Designers extends Component {
  render() {
    return (
      <div className='designers'>
        <div className='designers__container'>
          <div className='designers__content'>
            <div className='designers__title'>
              <h2>Top Rated Designers</h2>
            </div>
            <div className='designers__imgs'>
              <div className='designers__imgs__row'>
                <a href='/profile/sandra-matheow'>
                  <div className='designers__box1 designers__box'>
                    <div className='middle'>
                      <div className='text'>Sandra Matheow</div>
                    </div>
                  </div>
                </a>
                <a href='/profile/matt-gregory'>
                  <div className='designers__box2 designers__box'>
                    <div className='middle'>
                      <div className='text'>Shorouq Jabr</div>
                    </div>
                  </div>
                </a>
                <a href='/profile/matt-gregory'>
                  <div className='designers__box3 designers__box'>
                    <div className='middle'>
                      <div className='text'>Aziza Abu-Mosabeh</div>
                    </div>
                  </div>
                </a>
                <a href='/profile/matt-gregory'>
                  <div className='designers__box4 designers__box'>
                    <div className='middle'>
                      <div className='text'>Walaa Horani</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Designers;
