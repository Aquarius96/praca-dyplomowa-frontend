import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  fetchAuthor,
  addAuthorComment,
  addAuthorRate
} from "../../redux/actions/author";
import { addFavoriteAuthor } from "../../redux/actions/library";
import AuthorFullView from "./Views/full";

export class AuthorPage extends Component {
  static propTypes = {};

  componentDidMount = () => {
    this.props.fetchAuthor(this.props.match.params.id);
  };

  render() {
    if (this.props.loading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <AuthorFullView
          author={this.props.author}
          user={this.props.user}
          addFavoriteAuthor={this.props.addFavoriteAuthor}
          addAuthorRate={this.props.addAuthorRate}
          addAuthorComment={this.props.addAuthorComment}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  author: state.authors.entity,
  user: state.users.user,
  loading: state.authors.loading
});

const mapDispatchToProps = dispatch => ({
  fetchAuthor: id => dispatch(fetchAuthor(id)),
  addFavoriteAuthor: (userEmailAddress, id) =>
    dispatch(addFavoriteAuthor(userEmailAddress, id)),
  addAuthorRate: (id, rate) => dispatch(addAuthorRate(id, rate)),
  addAuthorComment: (id, comment) => dispatch(addAuthorComment(id, comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorPage);
