import React, { Component } from 'react';

import './index.css';

class ProductPage extends Component {
  render() {
    return (
      <div className='productPage__wrapper'>
        <div className='productPage__container'>
          <div className='productPage__info'>
            <div className='productPage__display'>
              <div className='productPage__product-colors'>
                <div className='productPage__product-color'></div>
                <div className='productPage__product-color'></div>
                <div className='productPage__product-color'></div>
                <div className='productPage__product-color'></div>
                <div className='productPage__product-color'></div>
                <div className='productPage__product-color'></div>
              </div>
              <div className='productPage__product-img'></div>
            </div>
            <div className='productPage__product-options'>
              <div className='productPage__title'>
                <h2>Product: Dressing</h2>
              </div>
              <div className='productPage__product-option'>Price: $300</div>
              <div className='productPage__options-sizes'>
                <div className='productPage__product-option'>Sizes: </div>
                <div className='productPage__product-size'>XS</div>
                <div className='productPage__product-size'>S</div>
                <div className='productPage__product-size'>M</div>
                <div className='productPage__product-size'>L</div>
                <div className='productPage__product-size'>XL</div>
                <div className='productPage__product-size'>XXL</div>
              </div>
              <div className='productPage__product-option'>Shipping Cost: $1.75</div>
              <div className='productPage__options-quantity'>
                <div className='productPage__product-option'>Quantity:</div>
                <div className='productPage__options-quantity-counter'>
                  <button type='button'>-</button>
                  <input type='' name='' value='1' />
                  <button type='button'>+</button>
                </div>
              </div>
              <div className='productPage__product-option'>Total Price: $301.75</div>
              <div className='productPage__options-btns'>
                <button className='productPage__options-btn'>Buy Now</button>
                <button className='productPage__options-btn'>Add to Card</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductPage;
