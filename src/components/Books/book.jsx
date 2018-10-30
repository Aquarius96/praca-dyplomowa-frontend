import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import {
  fetchBook,
  addBookComment,
  addBookRate
} from "../../redux/actions/book";

import { addReview } from "../../redux/actions/review";

import {
  addCurrentlyReadBook,
  addFavoriteBook,
  addReadBook,
  addWantedBook
} from "../../redux/actions/library";
import BookFullView from "./Views/full";

export class BookPage extends Component {
  static propTypes = {};

  state = {
    date: moment().format("YYYY-MM-DD"),
    sortSelectValue: null,
    comment: "",
    value: 0,
    review: {
      title: "",
      content: ""
    }
  };

  componentDidMount = () => {
    this.props.fetchBook(this.props.match.params.id);
  };

  handleDateChange = e => {
    this.setState({ date: e.target.value });
  };

  handleAddCommentFormChange = e => {
    this.setState({ comment: e.target.value });
  };

  handleAddCommentFormSubmit = e => {
    e.preventDefault();
    this.props.addBookComment(this.props.book.id, {
      userEmailAddress: this.props.user.email,
      content: this.state.comment
    });
  };

  handleAddReviewFormChange = e => {
    var model = this.state.review;
    const { name, value } = e.target;
    model[name] = value;
    this.setState({ review: Object.assign(this.state.review, model) });
  };

  handleSubMenuChange = (event, value) => {
    this.setState({ value });
  };

  handleAddReviewFormSubmit = e => {
    e.preventDefault();
    this.props.addBookReview({
      ...this.state.review,
      userEmailAddress: this.props.user.email,
      bookId: this.props.book.id
    });
  };

  render() {
    return (
      <div>
        <BookFullView
          book={this.props.book}
          user={this.props.user}
          addCurrentlyReadBook={this.props.addCurrentlyReadBook}
          addFavoriteBook={this.props.addFavoriteBook}
          addReadBook={this.props.addReadBook}
          addWantedBook={this.props.addWantedBook}
          addBookRate={this.props.addBookRate}
          addBookComment={this.props.addBookComment}
          handleDateChange={this.handleDateChange}
          date={this.state.date}
          handleSubMenuChange={this.handleSubMenuChange}
          value={this.state.value}
          commentModel={this.state.comment}
          reviewModel={this.state.review}
          handleAddCommentFormChange={this.handleAddCommentFormChange}
          handleAddCommentFormSubmit={this.handleAddCommentFormSubmit}
          handleAddReviewFormChange={this.handleAddReviewFormChange}
          handleAddReviewFormSubmit={this.handleAddReviewFormSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  book: state.books.entity,
  user: state.users.user,
  loading: state.books.loading
});

const mapDispatchToProps = dispatch => ({
  fetchBook: id => dispatch(fetchBook(id)),
  addCurrentlyReadBook: (userEmailAddress, id) =>
    dispatch(addCurrentlyReadBook(userEmailAddress, id)),
  addFavoriteBook: (userEmailAddress, id) =>
    dispatch(addFavoriteBook(userEmailAddress, id)),
  addReadBook: (userEmailAddress, model) =>
    dispatch(addReadBook(userEmailAddress, model)()),
  addWantedBook: (userEmailAddress, id) =>
    dispatch(addWantedBook(userEmailAddress, id)),
  addBookRate: (id, rate) => dispatch(addBookRate(id, rate)),
  addBookComment: (id, comment) => dispatch(addBookComment(id, comment)),
  addBookReview: model => dispatch(addReview(model))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookPage);
