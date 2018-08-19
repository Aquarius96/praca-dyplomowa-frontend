import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './containers/Main/main';
import Header from './containers/Header/header';

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Main} />
        </div>
      </Router>
    );
  }
}

export default Routes;
