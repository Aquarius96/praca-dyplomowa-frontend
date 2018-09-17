import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchBooks, addBookRate } from "../../redux/actions/book";
import {
  addCurrentlyReadBook,
  addFavoriteBook,
  addReadBook,
  addWantedBook
} from "../../redux/actions/library";
import Book from "./Book";

export class BooksPage extends Component {
  static propTypes = {
    prop: PropTypes
  };

  componentDidMount = () => {
    this.props.fetchBooks();
  };

  render() {
    return (
      <div>
        {this.props.books.map(book => {
          return (
            <Book
              book={book}
              user={this.props.user}
              addCurrentlyReadBook={this.props.addCurrentlyReadBook}
              addFavoriteBook={this.props.addFavoriteBook}
              addReadBook={this.props.addReadBook}
              addWantedBook={this.props.addWantedBook}
              addBookRate={this.props.addBookRate}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books.data,
  user: state.users.user
});

const mapDispatchToProps = dispatch => ({
  fetchBooks: () => dispatch(fetchBooks()),
  addCurrentlyReadBook: (userEmailAddress, id) =>
    dispatch(addCurrentlyReadBook(userEmailAddress, id)),
  addFavoriteBook: (userEmailAddress, id) =>
    dispatch(addFavoriteBook(userEmailAddress, id)),
  addReadBook: (userEmailAddress, model) =>
    dispatch(addReadBook(userEmailAddress, model)()),
  addWantedBook: (userEmailAddress, id) =>
    dispatch(addWantedBook(userEmailAddress, id)),
  addBookRate: (id, rate) => dispatch(addBookRate(id, rate))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksPage);
