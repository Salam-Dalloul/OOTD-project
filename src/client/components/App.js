import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './homePage';
import Navbar from './navbar';
import DesignerProfile from './designerProfile';

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
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
