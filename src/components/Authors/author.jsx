import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import {
  fetchAuthor,
  addAuthorComment,
  addAuthorRate
} from "../../redux/actions/author";
import { addBookRate } from "../../redux/actions/book";
import {
  addFavoriteAuthor,
  deleteFavoriteAuthor,
  addWantedBook,
  deleteWantedBook,
  addCurrentlyReadBook,
  deleteCurrentlyReadBook,
  addFavoriteBook,
  deleteFavoriteBook,
  addReadBook,
  deleteReadBook
} from "../../redux/actions/library";
import AuthorFullView from "./Views/full";
import { Loader } from "../Loader/loader";

export class AuthorPage extends Component {
  static propTypes = {};

  state = {
    date: moment().format("YYYY-MM-DD"),
    value: 0,
    comment: ""
  };

  componentDidMount = () => {
    this.props.fetchAuthor(this.props.match.params.id);
  };

  handleDateChange = e => {
    this.setState({ date: e.target.value });
  };

  handleSubMenuChange = (event, value) => {
    this.setState({ value });
  };

  handleAddCommentFormChange = e => {
    this.setState({ comment: e.target.value });
  };

  handleAddCommentFormSubmit = e => {
    e.preventDefault();
    this.props.addAuthorComment(this.props.author.id, {
      userEmailAddress: this.props.user.email,
      content: this.state.comment
    });
  };

  render() {
    if(this.props.loading) {
      return <Loader />
    }
    return (
      <div>
        <AuthorFullView
          author={this.props.author}
          user={this.props.user}
          addFavoriteAuthor={this.props.addFavoriteAuthor}
          deleteFavoriteAuthor={this.props.deleteFavoriteAuthor}
          addAuthorRate={this.props.addAuthorRate}
          addAuthorComment={this.props.addAuthorComment}
          addCurrentlyReadBook={this.props.addCurrentlyReadBook}
          addFavoriteBook={this.props.addFavoriteBook}
          addReadBook={this.props.addReadBook}
          addWantedBook={this.props.addWantedBook}
          deleteCurrentlyReadBook={this.props.deleteCurrentlyReadBook}
          deleteFavoriteBook={this.props.deleteFavoriteBook}
          deleteReadBook={this.props.deleteReadBook}
          deleteWantedBook={this.props.deleteWantedBook}
          addBookRate={this.props.addBookRate}
          value={this.state.value}
          handleSubMenuChange={this.handleSubMenuChange}
          handleAddCommentFormChange={this.handleAddCommentFormChange}
          handleAddCommentFormSubmit={this.handleAddCommentFormSubmit}
          date={this.state.date}
          library={this.props.library}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  author: state.authors.entity,
  user: state.users.user,
  loading: state.authors.loading,
  library: state.library.data
});

const mapDispatchToProps = dispatch => ({
  fetchAuthor: id => dispatch(fetchAuthor(id)),
  addFavoriteAuthor: (userEmailAddress, id) =>
    dispatch(addFavoriteAuthor(userEmailAddress, id)),
  deleteFavoriteAuthor: (userEmailAddress, id) =>
    dispatch(deleteFavoriteAuthor(userEmailAddress, id)),
  addAuthorRate: (id, rate) => dispatch(addAuthorRate(id, rate)),
  addAuthorComment: (id, comment) => dispatch(addAuthorComment(id, comment)),
  addCurrentlyReadBook: (userEmailAddress, id) =>
    dispatch(addCurrentlyReadBook(userEmailAddress, id)),
  addFavoriteBook: (userEmailAddress, id) =>
    dispatch(addFavoriteBook(userEmailAddress, id)),
  addReadBook: (userEmailAddress, model) =>
    dispatch(addReadBook(userEmailAddress, model)()),
  addWantedBook: (userEmailAddress, id) =>
    dispatch(addWantedBook(userEmailAddress, id)),
  deleteCurrentlyReadBook: (userEmailAddress, id) =>
    dispatch(deleteCurrentlyReadBook(userEmailAddress, id)),
  deleteFavoriteBook: (userEmailAddress, id) =>
    dispatch(deleteFavoriteBook(userEmailAddress, id)),
  deleteReadBook: (userEmailAddress, id) =>
    dispatch(deleteReadBook(userEmailAddress, id)),
  deleteWantedBook: (userEmailAddress, id) =>
    dispatch(deleteWantedBook(userEmailAddress, id)),
  addBookRate: (id, rate) => dispatch(addBookRate(id, rate))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorPage);
