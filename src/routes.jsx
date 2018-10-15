import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/Main/main";
import Header from "./components/Header/header";
import BooksPage from "./components/Books/books";
import BookPage from "./components/Books/book";
import AuthorsPage from "./components/Authors/authors";
import AuthorPage from "./components/Authors/author";
import Profile from "./components/Profile/profile";
import Login from "./components/Login";
import AddPage from "./components/Add";
import AdminPage from "./components/Admin";

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
          <Route exact path="/dodaj" component={AddPage} />
          <Route exact path="/admin" component={AdminPage} />
        </div>
      </Router>
    );
  }
}

export default Routes;
