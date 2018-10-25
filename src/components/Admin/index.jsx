import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Paper,
  BottomNavigation,
  BottomNavigationAction,
  Button,
  Typography,
  Grid,
  Tabs,
  Tab
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

import ConfirmAuthorView from "./Views/author";
import ConfirmBookView from "./Views/book";
import ConfirmReviewView from "./Views/review";

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
          <Tabs
            value={this.state.value}
            onChange={this.handleSubMenuChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Autorzy" />
            <Tab label="Książki" />
            <Tab label="Recenzje" />
          </Tabs>
        </Paper>
        {this.state.value == 0 && (
          <Grid container>
            {this.props.authors &&
              this.props.authors.map(author => {
                return (
                  <Grid item sm={6}>
                    <ConfirmAuthorView
                      key={author.id}
                      author={author}
                      confirmAuthor={this.props.confirmAuthor}
                      rejectAuthor={this.props.deleteAuthor}
                    />
                  </Grid>
                );
              })}
          </Grid>
        )}
        {this.state.value == 1 && (
          <Grid container>
            {this.props.books &&
              this.props.books.map(book => {
                return (
                  <Grid item sm={6}>
                    <ConfirmBookView
                      key={book.id}
                      book={book}
                      confirmBook={this.props.confirmBook}
                      rejectBook={this.props.deleteBook}
                    />
                  </Grid>
                );
              })}
          </Grid>
        )}
        {this.state.value == 2 && (
          <Grid container>
            {this.props.reviews &&
              this.props.reviews.map(review => {
                return (
                  <Grid item sm={6}>
                    <ConfirmReviewView
                      key={review.id}
                      review={review}
                      confirmReview={this.props.confirmReview}
                      rejectReview={this.props.deleteReview}
                    />
                  </Grid>
                );
              })}
          </Grid>
        )}
        {this.state.value == 3 && (
          <div>
            <Typography variant="subheading" align="center">
              Lista użytkowników do potwierdzenia
            </Typography>
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
