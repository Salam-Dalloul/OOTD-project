import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './homePage';
import Navbar from './navbar';
import Footer from './footer';
import DesignerProfile from './designerProfile';
import ProductPage from './productPage';

import './app.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/profile/matt-gregory' component={DesignerProfile} />
            <Route exact path='/product/dress-product' component={ProductPage} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
