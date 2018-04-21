import React, { Component } from 'react';

import './index.css';

class LatestProducts extends Component {
  render() {
    return (
      <div className='latestProducts' id='latest-products'>
        <div className='latestProducts__container'>
          <div className='latestProducts__content'>
            <div className='latestProducts__title'>
              <h2>Latest Products</h2>
            </div>
            <div className='latestProducts__imgs'>
              <div className='latestProducts__imgs__row'>
                <div className='box1 box'>
                </div>
                <div className='box2 box'
                  onClick={
                    () => {
                      window.location.pathname = '/products/dress-product02';
                    }
                  }
                >
                </div>
              </div>
              <div className='latestProducts__imgs__row'>
                <div className='box3 box'>
                </div>
                <div className='box4 box'>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LatestProducts;
