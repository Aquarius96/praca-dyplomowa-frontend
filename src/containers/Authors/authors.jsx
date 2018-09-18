import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAuthors, addAuthorRate } from "../../redux/actions/author";
import { addFavoriteAuthor } from "../../redux/actions/library";
import AuthorPartialView from "./Views/partial";

export class AuthorsPage extends Component {
  static propTypes = {};

  componentDidMount = () => {
    this.props.fetchAuthors();
  };

  handleSearchChange = e => {
    if (e.target.value.length > 2) {
      this.props.fetchAuthors({
        searchQuery: e.target.value
      });
    } else {
      this.props.fetchAuthors();
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
          this.props.authors.map(author => {
            return (
              <AuthorPartialView
                key={author.id}
                author={author}
                user={this.props.user}
                addFavoriteAuthor={this.props.addFavoriteAuthor}
                addAuthorRate={this.props.addAuthorRate}
              />
            );
          })
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authors: state.authors.data,
  user: state.users.user,
  loading: state.authors.loading
});

const mapDispatchToProps = dispatch => ({
  fetchAuthors: params => dispatch(fetchAuthors(params)),
  addFavoriteAuthor: (userEmailAddress, id) =>
    dispatch(addFavoriteAuthor(userEmailAddress, id)),
  addAuthorRate: (id, rate) => dispatch(addAuthorRate(id, rate))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorsPage);
