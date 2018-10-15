import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Paper,
  BottomNavigation,
  BottomNavigationAction,
  Button
} from "@material-ui/core";

import {
  fetchAuthors,
  confirmAuthor,
  deleteAuthor
} from "../../redux/actions/author";
import { fetchBooks, confirmBook, deleteBook } from "../../redux/actions/book";
import {
  fetchReviews,
  confirmReview,
  deleteReview
} from "../../redux/actions/review";

export class AdminPage extends Component {
  state = {
    value: 0
  };

  componentDidMount = () => {
    this.props.fetchAuthors();
    this.props.fetchBooks();
    this.props.fetchReviews();
  };

  handleSubMenuChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <div>
        <Paper>
          <BottomNavigation
            value={this.state.value}
            showLabels
            onChange={this.handleSubMenuChange}
          >
            <BottomNavigationAction label="Autorzy" />
            <BottomNavigationAction label="Książki" />
            <BottomNavigationAction label="Recenzje" />
            <BottomNavigationAction label="Użytkownicy" />
          </BottomNavigation>
        </Paper>
        {this.state.value == 0 && (
          <div>
            {this.props.authors &&
              this.props.authors.map(author => {
                return (
                  <div key={author.id}>
                    <p>{author.name}</p>
                    <div>
                      <button
                        onClick={() => this.props.confirmAuthor(author.id)}
                      >
                        Potwierdź
                      </button>
                      <button
                        onClick={() => this.props.deleteAuthor(author.id)}
                      >
                        Odrzuć
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        )}
        {this.state.value == 1 && (
          <div>
            {this.props.books &&
              this.props.books.map(book => {
                return (
                  <div key={book.id}>
                    <p>{book.title}</p>
                    <div>
                      <button onClick={() => this.props.confirmBook(book.id)}>
                        Potwierdź
                      </button>
                      <button onClick={() => this.props.deleteBook(book.id)}>
                        Odrzuć
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        )}
        {this.state.value == 2 && (
          <div>
            {this.props.reviews &&
              this.props.reviews.map(review => {
                return (
                  <div key={review.id}>
                    <p>{review.title}</p>
                    <div>
                      <button
                        onClick={() => this.props.confirmReview(review.id)}
                      >
                        Potwierdź
                      </button>
                      <button
                        onClick={() => this.props.deleteReview(review.id)}
                      >
                        Odrzuć
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        )}
        {this.state.value == 3 && (
          <div>
            {this.props.authors &&
              this.props.authors.map(author => {
                return <div key={author.id}>{author.name}</div>;
              })}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authors: state.authors.data.filter(author => !author.confirmed),
  books: state.books.data.filter(book => !book.confirmed),
  reviews: state.reviews.data.filter(review => !review.confirmed)
});

const mapDispatchToProps = dispatch => ({
  fetchAuthors: params => dispatch(fetchAuthors(params)),
  fetchBooks: params => dispatch(fetchBooks(params)),
  fetchReviews: params => dispatch(fetchReviews(params)),
  confirmAuthor: id => dispatch(confirmAuthor(id)),
  confirmBook: id => dispatch(confirmBook(id)),
  confirmReview: id => dispatch(confirmReview(id)),
  deleteAuthor: id => dispatch(deleteAuthor(id)),
  deleteBook: id => dispatch(deleteBook(id)),
  deleteReview: id => dispatch(deleteReview(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPage);
