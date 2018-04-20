import React, { Component } from 'react';

import Header from '../header';
import LatestProducts from '../latestProducts';
import Designers from '../designers';
import ContactUs from '../contactUs';

import './index.css';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <LatestProducts />
        <Designers />
        <ContactUs />
      </div>
    );
  }
}

export default HomePage;
