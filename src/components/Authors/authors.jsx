import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAuthors, addAuthorRate } from "../../redux/actions/author";
import { addFavoriteAuthor } from "../../redux/actions/library";
import AuthorPartialView from "./Views/partial";
import BookSortAndSearchView from "./Views/search-sort";
import {
  Input,
  Grid,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from "@material-ui/core";
import AuthorSortAndSearchView from "./Views/search-sort";

export class AuthorsPage extends Component {
  static propTypes = {};

  state = {
    sortSelectValue: null
  };

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

  handleSelectChange = e => {
    this.setState({ sortSelectValue: e.target.value }, () => {
      switch (e.target.value) {
        case "abc":
          this.props.fetchAuthors({
            sortField: "Lastname"
          });
          break;
        case "cba":
          this.props.fetchAuthors({
            sortField: "Lastname",
            sortAscending: false
          });
          break;
        case "123":
          this.props.fetchAuthors({
            sortByRating: true
          });
          break;
        default:
          this.props.fetchAuthors();
      }
    });
  };

  render() {
    return (
      <div>
        <AuthorSortAndSearchView
          handleSelectChange={this.handleSelectChange}
          handleSearchChange={this.handleSearchChange}
          value={this.state.sortSelectValue}
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
