import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./containers/Main/main";
import Header from "./containers/Header/header";
import Books from "./containers/Books/books";
import Authors from "./containers/Authors/authors";
import Profile from "./containers/Profile/profile";
import Login from "./containers/Login/login";

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Main} />
          <Route exact path="/ksiazki" component={Books} />
          <Route exact path="/autorzy" component={Authors} />
          <Route exact path="/profil" component={Profile} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default Routes;
