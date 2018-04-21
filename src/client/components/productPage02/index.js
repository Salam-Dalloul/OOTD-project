import React, { Component } from 'react';

import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react';

import './index.css';

class ProductPage02 extends Component {
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
              <div className='productPage__product-img1'></div>
            </div>
            <div className='productPage__product-options'>
              <div className='productPage__title'>
                <h2>Product: Dressing</h2>
              </div>
              <div className='productPage__product-option'>Price: $24.00</div>
              <div className='productPage__options-sizes'>
                <div className='productPage__product-option'>Sizes: </div>
                <div className='productPage__product-size'>XS</div>
                <div className='productPage__product-size'>S</div>
                <div className='productPage__product-size'>M</div>
                <div className='productPage__product-size'>L</div>
                <div className='productPage__product-size'>XL</div>
                <div className='productPage__product-size'>XXL</div>
              </div>
              <div className='productPage__product-option'>Shipping Cost: $3.50</div>
              <div className='productPage__options-quantity'>
                <div className='productPage__product-option'>Quantity:</div>
                <div className='productPage__options-quantity-counter'>
                  <button type='button'>-</button>
                  <input type='' name='' value='1' />
                  <button type='button'>+</button>
                </div>
              </div>
              <div className='productPage__product-option'>Total Price: $27.50</div>
              <div className='productPage__options-btns'>
                <Modal
                  className='modal__content'
                  trigger={
                    <button className='productPage__options-btn'>Order Now</button>
                  }>
                  <Modal.Content className='modal__content'>
                    <Modal.Description>
                      <Header>Order Product:   #OOTD/DRESS #52118</Header>
                      <Form className='se-f'>
                        <Form.Group className='se-gf'>
                          <Form.Input fluid label='Full Name:' placeholder='Full Name..' className='se-gf'
                            name='full-name'/>
                          <Form.Input fluid label='Phone Number:' placeholder='Phone Number..' className='se-gf'
                            name='phone-number'/>
                          <Form.Input fluid label='Full Address:' placeholder='Full Address..' className='se-gf'
                            name='address'/>
                          <Form.TextArea fluid label='Additional Info:' placeholder='If there as any other information you think we need to know...'
                            className='m-span00x se-gf modal__textarea'
                            name='content'/>
                        </Form.Group>
                      </Form>
                    </Modal.Description>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button primary>
                      Submit<Icon name='right chevron' />
                    </Button>
                  </Modal.Actions>
                </Modal>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductPage02;
