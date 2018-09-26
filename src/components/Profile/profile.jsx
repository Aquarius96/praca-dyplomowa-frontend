import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchLibrary,addCurrentlyReadBook,
  addFavoriteBook,
  addReadBook,
  addWantedBook } from "../../redux/actions/library";
import {
  Grid,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
  Typography
} from "@material-ui/core";
import UserInfoView from "./Views/info";
import UserEditInfoView from "./Views/edit-info";
import LibraryBookView from "./Views/book";
import decode from "jwt-decode";
import ReadBookView from "./Views/read-book";

class ProfilePage extends Component {
  state = {
    value: 0
  };

  componentDidMount() {
    const token = localStorage.getItem("token");

    if (token !== null) {
      console.log("no co jest");
      const user = decode(token);
      this.props.fetchLibrary(user.email);
    }
  }

  handleSubMenuChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <div>
        <Paper style={{ paddingBottom: "10px" }}>
          <Grid container>
            <Grid item md={6}>
              <UserInfoView />
            </Grid>
            <Grid item md={6}>
              <UserEditInfoView />
            </Grid>
          </Grid>
        </Paper>
        <Paper>
          <Typography align="center" variant="display1">
            Moja biblioteczka
          </Typography>
          <BottomNavigation
            value={this.state.value}
            showLabels
            onChange={this.handleSubMenuChange}
          >
            <BottomNavigationAction label="Przeczytane" />
            <BottomNavigationAction label="Chcę przeczytać" />
            <BottomNavigationAction label="Aktualnie czytam" />
            <BottomNavigationAction label="Ulubione książki" />
            <BottomNavigationAction label="Ulubieni autorzy" />
          </BottomNavigation>
        </Paper>
        {this.state.value == 0 &&
          this.props.library.readBooks.map(book => {
            return (
              <ReadBookView
                key={book.id}
                book={book}
                user={this.props.user}
                addCurrentlyReadBook={this.props.addCurrentlyReadBook}
                addFavoriteBook={this.props.addFavoriteBook}
                addReadBook={this.props.addReadBook}
                addWantedBook={this.props.addWantedBook}
              />
            );
          })}
        {this.state.value == 1 &&
          this.props.library.wantedBooks.map(book => {
            return <LibraryBookView key={book.id} book={book} />;
          })}
        {this.state.value == 2 &&
          this.props.library.currentlyReadBooks.map(book => {
            return <LibraryBookView key={book.id} book={book} />;
          })}
        {this.state.value == 3 &&
          this.props.library.favoriteBooks.map(book => {
            return <LibraryBookView key={book.id} book={book} />;
          })}
        {this.state.value == 4 &&
          this.props.library.favoriteAuthors.map(book => {
            return <LibraryBookView key={book.id} book={book} />;
          })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.users.user,
  library: state.library.data
});

const mapDispatchToProps = dispatch => ({
  fetchLibrary: userEmailAddress => dispatch(fetchLibrary(userEmailAddress)()),
  addCurrentlyReadBook: (userEmailAddress, id) =>
    dispatch(addCurrentlyReadBook(userEmailAddress, id)),
  addFavoriteBook: (userEmailAddress, id) =>
    dispatch(addFavoriteBook(userEmailAddress, id)),
  addReadBook: (userEmailAddress, model) =>
    dispatch(addReadBook(userEmailAddress, model)()),
  addWantedBook: (userEmailAddress, id) =>
    dispatch(addWantedBook(userEmailAddress, id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);
