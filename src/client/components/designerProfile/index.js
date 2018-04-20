import React, { Component } from 'react';

import './index.css';

class DesignerProfile extends Component {
  render() {
    return (
      <div className='designerProfile__container'>
        <div className='designerProfile__header'>
          <div className='designerProfile__picture'></div>
          <div className='designerProfile__info'>
            <h3>Matt Gregory</h3>
            <div className='designerProfile__rate'>Rate:</div>
          </div>
        </div>
        <div className='designerProfile__samples'>
          <h2>Designer Products:</h2>
          <div className='designerProfile__samples-row'>
            <div className='designerProfile__sample'>
              <p>Price: 6.85$</p>
            </div>
            <div className='designerProfile__sample'>
              <p>Price: 6.85$</p>
            </div>
            <div className='designerProfile__sample'>
              <p>Price: 6.85$</p>
            </div>
            <div className='designerProfile__sample'>
              <p>Price: 6.85$</p>
            </div>
          </div>
          <div className='designerProfile__samples-row'>
            <div className='designerProfile__sample'>
              <p>Price: 6.85$</p>
            </div>
            <div className='designerProfile__sample'>
              <p>Price: 6.85$</p>
            </div>
            <div className='designerProfile__sample'>
              <p>Price: 6.85$</p>
            </div>
            <div className='designerProfile__sample'>
              <p>Price: 6.85$</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DesignerProfile;
