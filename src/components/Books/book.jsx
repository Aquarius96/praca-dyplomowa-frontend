import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  fetchBook,
  addBookComment,
  addBookRate
} from "../../redux/actions/book";
import {
  addCurrentlyReadBook,
  addFavoriteBook,
  addReadBook,
  addWantedBook
} from "../../redux/actions/library";
import { Link } from "react-router-dom";
import BookFullView from "./Views/full";

export class BookPage extends Component {
  static propTypes = {};

  componentDidMount = () => {
    this.props.fetchBook(this.props.match.params.id);
  };

  render() {
    if (this.props.loading) {
      return <div>Loading...</div>;
    }
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
  addBookComment: (id, comment) => dispatch(addBookComment(id, comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookPage);
