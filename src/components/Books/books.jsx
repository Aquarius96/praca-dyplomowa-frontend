import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import {
  fetchBooks,
  addBookRate,
  addBookComment
} from "../../redux/actions/book";
import {
  addCurrentlyReadBook,
  addFavoriteBook,
  addReadBook,
  addWantedBook,
  deleteCurrentlyReadBook,
  deleteFavoriteBook,
  deleteReadBook,
  deleteWantedBook
} from "../../redux/actions/library";
import { searchBook } from '../../redux/actions/book';
import BookPartialView from "./Views/partial";
import BookSortAndSearchView from "./Views/search-sort";
import { Loader } from '../Loader/loader';

export class BooksPage extends Component {
  static propTypes = {};

  state = {
    date: moment().format("YYYY-MM-DD"),
    sortSelectValue: ""
  };

  componentDidMount = () => {
    this.props.fetchBooks();
  };

  handleSearchChange = e => {
    this.props.searchBook(e.target.value);
  };

  handleSelectChange = e => {
    this.setState({ sortSelectValue: e.target.value }, () => {
      switch (e.target.value) {
        case "abc":
          this.props.fetchBooks({
            sortField: "Title"
          });
          break;
        case "cba":
          this.props.fetchBooks({
            sortField: "Title",
            sortAscending: false
          });
          break;
        case "123":
          this.props.fetchBooks({
            sortByRating: true
          });
          break;
        case "new":
          this.props.fetchBooks({
            sortField: "Released",
            sortAscending: false
          });
          break;
        case "old":
          this.props.fetchBooks({
            sortField: "Released"
          });
          break;
        default:
          this.props.fetchBooks();
      }
    });
  };

  handleDateChange = e => {
    this.setState({ date: e.target.value });
  };

  render() {
    if (this.props.loading) {
      return <Loader />
    }
    return (
      <div>
        <BookSortAndSearchView
          handleSelectChange={this.handleSelectChange}
          handleSearchChange={this.handleSearchChange}
          value={this.state.sortSelectValue}
        />
        {this.props.books.map(book => {
          return (
            <BookPartialView
              key={book.id}
              book={book}
              user={this.props.user}
              addCurrentlyReadBook={this.props.addCurrentlyReadBook}
              addFavoriteBook={this.props.addFavoriteBook}
              addReadBook={this.props.addReadBook}
              addWantedBook={this.props.addWantedBook}
              deleteCurrentlyReadBook={this.props.deleteCurrentlyReadBook}
              deleteFavoriteBook={this.props.deleteFavoriteBook}
              deleteReadBook={this.props.deleteReadBook}
              deleteWantedBook={this.props.deleteWantedBook}
              addBookRate={this.props.addBookRate}
              handleDateChange={this.handleDateChange}
              date={this.state.date}
              library={this.props.library}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books.filteredData,
  user: state.users.user,
  loading: state.books.loading,
  library: state.library.data
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
  deleteCurrentlyReadBook: (userEmailAddress, id) =>
    dispatch(deleteCurrentlyReadBook(userEmailAddress, id)),
  deleteFavoriteBook: (userEmailAddress, id) =>
    dispatch(deleteFavoriteBook(userEmailAddress, id)),
  deleteReadBook: (userEmailAddress, id) =>
    dispatch(deleteReadBook(userEmailAddress, id)),
  deleteWantedBook: (userEmailAddress, id) =>
    dispatch(deleteWantedBook(userEmailAddress, id)),
  addBookRate: (id, rate) => dispatch(addBookRate(id, rate)),
  addBookComment: (id, comment) => dispatch(addBookComment(id, comment)),
  searchBook: (query) => dispatch(searchBook(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksPage);
