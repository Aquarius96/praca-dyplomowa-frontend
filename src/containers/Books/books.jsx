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
  static propTypes = {};

  componentDidMount = () => {
    this.props.fetchBooks();
  };

  handleSearchChange = e => {
    if (e.target.value.length > 2) {
      this.props.fetchBooks({
        searchQuery: e.target.value
      });
    } else {
      this.props.fetchBooks();
    }
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="szukajka"
          onChange={this.handleSearchChange}
        />
        {this.props.loading ? (
          <div>Loading...</div>
        ) : (
          this.props.books.map(book => {
            return (
              <Book
                key={book.id}
                book={book}
                user={this.props.user}
                addCurrentlyReadBook={this.props.addCurrentlyReadBook}
                addFavoriteBook={this.props.addFavoriteBook}
                addReadBook={this.props.addReadBook}
                addWantedBook={this.props.addWantedBook}
                addBookRate={this.props.addBookRate}
              />
            );
          })
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books.data,
  user: state.users.user,
  loading: state.books.loading
});

const mapDispatchToProps = dispatch => ({
  fetchBooks: params => dispatch(fetchBooks(params)),
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
