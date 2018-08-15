import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './containers/Main/main';

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Main} />
        </div>
      </Router>
    );
  }
}

export default Routes;
