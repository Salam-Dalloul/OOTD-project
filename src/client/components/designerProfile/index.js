import React, { Component } from 'react';

import './index.css';

class DesignerProfile extends Component {
  render() {
    return (
      <div className='designerProfile__container'>
        <div className='designerProfile__header'>
          <div className='designerProfile__picture'></div>
          <div className='designerProfile__info'>
            <h3>Sandra Matheow</h3>
            <div className='designerProfile__rate'>
              Rate:
              <div className='designerProfile__rate-stars'></div>
            </div>
          </div>
        </div>
        <div className='designerProfile__samples'>
          <h2>Designer Products:</h2>
          <div className='designerProfile__samples-row'>
            <div className='designerProfile__sample dp_s1'
              onClick={() =>
                this.props.history.push('/products/dress-product')
              }>
              <p>Price: 6.85$</p>
            </div>
            <div className='designerProfile__sample dp_s1'
              onClick={() =>
                this.props.history.push('/products/dress-product')
              }
            >
              <p>Price: 6.85$</p>
            </div>
            <div className='designerProfile__sample dp_s1'
              onClick={() =>
                this.props.history.push('/products/dress-product')
              }
            >
              <p>Price: 6.85$</p>
            </div>
            <div className='designerProfile__sample dp_s1'
              onClick={() =>
                this.props.history.push('/products/dress-product')
              }
            >
              <p>Price: 6.85$</p>
            </div>
          </div>
          <div className='designerProfile__samples-row'>
            <div className='designerProfile__sample dp_s2'
              onClick={() =>
                this.props.history.push('/products/dress-product')
              }
            >
              <p>Price: 300$</p>
            </div>
            <div className='designerProfile__sample dp_s2'
              onClick={() =>
                this.props.history.push('/products/dress-product')
              }
            >
              <p>Price: 6.85$</p>
            </div>
            <div className='designerProfile__sample dp_s2'
              onClick={() =>
                this.props.history.push('/products/dress-product')
              }
            >
              <p>Price: 6.85$</p>
            </div>
            <div className='designerProfile__sample dp_s2'
              onClick={() =>
                this.props.history.push('/products/dress-product')
              }
            >
              <p>Price: 6.85$</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DesignerProfile;
