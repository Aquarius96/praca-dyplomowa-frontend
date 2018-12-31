import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAuthors, addAuthorRate } from "../../redux/actions/author";
import {
  addFavoriteAuthor,
  deleteFavoriteAuthor
} from "../../redux/actions/library";
import AuthorPartialView from "./Views/partial";
import AuthorSortAndSearchView from "./Views/search-sort";
import { searchAuthor } from '../../redux/actions/author';
import { Loader } from '../Loader/loader';

export class AuthorsPage extends Component {
  static propTypes = {};

  state = {
    sortSelectValue: null
  };

  componentDidMount = () => {
    this.props.fetchAuthors();
  };

  handleSearchChange = e => {
    this.props.searchAuthor(e.target.value);
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
    if (this.props.loading) {
      return <Loader />
    }
    return (
      <div>
        <AuthorSortAndSearchView
          handleSelectChange={this.handleSelectChange}
          handleSearchChange={this.handleSearchChange}
          value={this.state.sortSelectValue}
        />
        {this.props.authors.map(author => {
          return (
            <AuthorPartialView
              key={author.id}
              author={author}
              user={this.props.user}
              addFavoriteAuthor={this.props.addFavoriteAuthor}
              deleteFavoriteAuthor={this.props.deleteFavoriteAuthor}
              addAuthorRate={this.props.addAuthorRate}
              library={this.props.library}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authors: state.authors.filteredData,
  user: state.users.user,
  loading: state.authors.loading,
  library: state.library.data
});

const mapDispatchToProps = dispatch => ({
  fetchAuthors: params => dispatch(fetchAuthors(params)),
  addFavoriteAuthor: (userEmailAddress, id) =>
    dispatch(addFavoriteAuthor(userEmailAddress, id)),
  deleteFavoriteAuthor: (userEmailAddress, id) =>
    dispatch(deleteFavoriteAuthor(userEmailAddress, id)),
  addAuthorRate: (id, rate) => dispatch(addAuthorRate(id, rate)),
  searchAuthor: (query) => dispatch(searchAuthor(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorsPage);
