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
                <div className='designers__box1 designers__box'>
                  <div className='middle'>
                    <div className='text'>Afnan Ali</div>
                  </div>
                </div>
                <div className='designers__box2 designers__box'>
                  <div className='middle'>
                    <div className='text'>Shorouq Jabr</div>
                  </div>
                </div>
                <div className='designers__box3 designers__box'>
                  <div className='middle'>
                    <div className='text'>Aziza Abu-Mosabeh</div>
                  </div>
                </div>
                <div className='designers__box4 designers__box'>
                  <div className='middle'>
                    <div className='text'>Walaa Horani</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Designers;
