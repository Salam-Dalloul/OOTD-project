import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './homePage';
import Navbar from './navbar';

import './app.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/nav' component={Navbar} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
