import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import moment from "moment";
import { fetchBooks, addBookRate } from "../../redux/actions/book";
import {
  addCurrentlyReadBook,
  addFavoriteBook,
  addReadBook,
  addWantedBook
} from "../../redux/actions/library";
import BookPartialView from "./Views/partial";
import {
  Input,
  Grid,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from "@material-ui/core";

export class BooksPage extends Component {
  static propTypes = {};

  state = {
    date: moment().format("YYYY-MM-DD"),
    sortSelectValue: null
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

  componentDidMount = () => {
    this.props.fetchBooks();
  };

  handleSearchChange = e => {
    if (e.target.value.length > 2) {
      this.props.fetchBooks({
        searchQuery: e.target.value
      });
    } else {
      this.props.fetchBooks();
    }
  };

  handleDateChange = e => {
    this.setState({ date: e.target.value });
  };

  render() {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item md={3}>
            <FormControl className="select">
              <InputLabel htmlFor="sort_select">
                <Typography variant="subheading">Sortuj według</Typography>
              </InputLabel>
              <Select
                value={this.state.sortSelectValue}
                onChange={this.handleSelectChange}
                inputProps={{
                  name: "sort_select"
                }}
              >
                <MenuItem value={null}>domyślnie</MenuItem>
                <MenuItem value={"abc"}>alfabetycznie rosnąco</MenuItem>
                <MenuItem value={"cba"}>alfabetycznie malejąco</MenuItem>
                <MenuItem value={"123"}>najwyżej ocenionych</MenuItem>
                <MenuItem value={"new"}>najnowszych</MenuItem>
                <MenuItem value={"old"}>najstarszych</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={6}>
            <Input
              type="text"
              placeholder="Wyszukaj książkę"
              className="search_bar"
              onChange={this.handleSearchChange}
            />
          </Grid>
        </Grid>

        {this.props.loading ? (
          <div>Loading...</div>
        ) : (
          this.props.books.map(book => {
            return (
              <BookPartialView
                key={book.id}
                book={book}
                user={this.props.user}
                addCurrentlyReadBook={this.props.addCurrentlyReadBook}
                addFavoriteBook={this.props.addFavoriteBook}
                addReadBook={this.props.addReadBook}
                addWantedBook={this.props.addWantedBook}
                addBookRate={this.props.addBookRate}
                handleDateChange={this.handleDateChange}
                date={this.state.date}
              />
            );
          })
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books.data,
  user: state.users.user,
  loading: state.books.loading
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
  addBookRate: (id, rate) => dispatch(addBookRate(id, rate))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksPage);
