import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";

import { fetchUser } from "../../redux/actions/user";

import {
  fetchLibrary,
  addCurrentlyReadBook,
  addFavoriteBook,
  addReadBook,
  addWantedBook,
  deleteCurrentlyReadBook,
  deleteFavoriteAuthor,
  deleteFavoriteBook,
  deleteWantedBook,
  deleteReadBook
} from "../../redux/actions/library";
import {
  Grid,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
  Typography
} from "@material-ui/core";
import UserInfoView from "./Views/info";
import UserEditInfoView from "./Views/edit-info";
import LibraryBookView from "./Views/library-book";
import decode from "jwt-decode";
import ReadBookView from "./Views/read-book";
import WantedBookView from "./Views/wanted-book";
import CurrentlyReadBookView from "./Views/currently-read-book";
import FavoriteBookView from "./Views/favorite-book";
import FavoriteAuthorView from "./Views/favorite-author";
import { changePassword } from "../../redux/actions/user";

class ProfilePage extends Component {
  state = {
    value: 0,
    date: moment().format("YYYY-MM-DD"),
    changePasswordModel: {
      oldPassword: "",
      password: "",
      confirmPassword: ""
    },
    changeDataModel: {
      firstname: "",
      lastname: "",
      username: ""
    }
  };

  componentDidMount() {
    const token = localStorage.getItem("token");

    if (token !== null) {
      const user = decode(token);
      //this.props.fetchLibrary(this.props.user.email);
      this.props.fetchUser(user.email);
    }
  }

  handleDateChange = e => {
    this.setState({ date: e.target.value });
  };

  handleSubMenuChange = (event, value) => {
    this.setState({ value });
  };

  handlePasswordChange = e => {
    var model = this.state.changePasswordModel;
    const { name, value } = e.target;
    model[name] = value;
    this.setState({
      changePasswordModel: Object.assign(this.state.changePasswordModel, model)
    });
  };

  handlePasswordSubmit = e => {
    e.preventDefault();
    this.props.changePassword(
      this.props.user.email,
      this.state.changePasswordModel
    );
  };

  handleDataChange = e => {
    var model = this.state.changeDataModel;
    const { name, value } = e.target;
    model[name] = value;
    this.setState({
      changeDataModel: Object.assign(this.state.changeDataModel, model)
    });
  };

  handleDataSubmit = e => {
    e.preventDefault();
    this.props.changeData(this.props.user.email, this.state.changeDataModel);
  };

  render() {
    return (
      <div>
        {/* <Paper style={{ paddingBottom: "10px" }}>
          <Grid container>
            <Grid item md={6}>
              <UserInfoView info={this.props.userInfo} />
            </Grid>
            <Grid item md={6}>
              <UserEditInfoView
                data={this.state.changePasswordModel}
                handlePasswordChange={this.handlePasswordChange}
                handlePasswordSubmit={this.handlePasswordSubmit}
              />
            </Grid>
          </Grid>
        </Paper> */}
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
        {this.state.value === 0 &&
          this.props.library.readBooks.length === 0 && (
            <Typography style={{ textAlign: "center" }}>
              Brak książek na tej półce
            </Typography>
          )}
        {this.state.value === 1 &&
          this.props.library.wantedBooks.length === 0 && (
            <Typography style={{ textAlign: "center" }}>
              Brak książek na tej półce
            </Typography>
          )}
        {this.state.value === 2 &&
          this.props.library.currentlyReadBooks.length === 0 && (
            <Typography style={{ textAlign: "center" }}>
              Brak książek na tej półce
            </Typography>
          )}
        {this.state.value === 3 &&
          this.props.library.favoriteBooks.length === 0 && (
            <Typography style={{ textAlign: "center" }}>
              Brak książek na tej półce
            </Typography>
          )}
        {this.state.value === 4 &&
          this.props.library.favoriteAuthors.length === 0 && (
            <Typography style={{ textAlign: "center" }}>
              Brak autorów do wyświetlenia
            </Typography>
          )}
        {this.state.value === 0 &&
          this.props.library.readBooks.map(book => {
            return (
              <LibraryBookView
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
                date={this.state.date}
                handleDateChange={this.handleDateChange}
                library={this.props.library}
              />
            );
          })}
        {this.state.value == 1 &&
          this.props.library.wantedBooks.map(book => {
            return (
              <LibraryBookView
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
                date={this.state.date}
                handleDateChange={this.handleDateChange}
                library={this.props.library}
              />
            );
          })}
        {this.state.value == 2 &&
          this.props.library.currentlyReadBooks.map(book => {
            return (
              <LibraryBookView
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
                date={this.state.date}
                handleDateChange={this.handleDateChange}
                library={this.props.library}
              />
            );
          })}
        {this.state.value == 3 &&
          this.props.library.favoriteBooks.map(book => {
            return (
              <LibraryBookView
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
                date={this.state.date}
                handleDateChange={this.handleDateChange}
                library={this.props.library}
              />
            );
          })}
        {this.state.value == 4 &&
          this.props.library.favoriteAuthors.map(author => {
            return (
              <FavoriteAuthorView
                key={author.id}
                author={author}
                user={this.props.user}
                deleteFavoriteAuthor={this.props.deleteFavoriteAuthor}
              />
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.users.user,
  userInfo: state.users.entity,
  library: state.library.data
});

const mapDispatchToProps = dispatch => ({
  fetchUser: emailAddress => dispatch(fetchUser(emailAddress)),
  fetchLibrary: userEmailAddress => dispatch(fetchLibrary(userEmailAddress)()),
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
  deleteFavoriteAuthor: (userEmailAddress, id) =>
    dispatch(deleteFavoriteAuthor(userEmailAddress, id)),
  changePassword: (userEmailAddress, model) =>
    dispatch(changePassword(userEmailAddress, model)())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);
