import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './homePage';
import Navbar from './navbar';
import Footer from './footer';
import DesignerProfile from './designerProfile';
import ProductPage from './productPage';
import ProductPage02 from './productPage02';

import './app.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/profile/sandra-matheow' component={DesignerProfile} />
            <Route exact path='/products/dress-product' component={ProductPage} />
            <Route exact path='/products/dress-product02' component={ProductPage02} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
