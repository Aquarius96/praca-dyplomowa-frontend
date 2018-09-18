import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./containers/Main/main";
import Header from "./containers/Header/header";
import BooksPage from "./containers/Books/books";
import BookPage from "./containers/Books/book";
import AuthorsPage from "./containers/Authors/authors";
import AuthorPage from "./containers/Authors/author";
import Profile from "./containers/Profile/profile";
import Login from "./containers/Login";

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Main} />
          <Route exact path="/ksiazki" component={BooksPage} />
          <Route path="/ksiazki/:id" component={BookPage} />
          <Route exact path="/autorzy" component={AuthorsPage} />
          <Route path="/autorzy/:id" component={AuthorPage} />
          <Route exact path="/profil" component={Profile} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default Routes;
