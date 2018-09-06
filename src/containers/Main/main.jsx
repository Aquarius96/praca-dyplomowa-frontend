import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import {
  register,
  fetchUsers,
  fetchUser,
  deleteUser
} from "../../redux/actions/user";
import {
  addAuthor, fetchAuthors
} from '../../redux/actions/author';

const user = {
  firstname: "user",
  lastname: "z frontu",
  password: "tajne",
  emailAddress: "fajnyv4",
  username: "fajniejszy"
};

class Main extends Component {
  static propTypes = {
    message: PropTypes.string,
    error: PropTypes.string,
    register: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchUser("aquarius96@wp.pl");
    this.props.fetchAuthors();
  }

  register = user => {
    this.props.register(user);
  };

  deleteUser = email => {
    this.props.deleteUser(email);
  };

  render() {
    if (this.props.userLoading || this.props.authorLoading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Typography variant="display1" align="center" gutterBottom>
          Praca dyplomowa frontend
        </Typography>
        <button onClick={() => this.register(user)}>
          Zarejestruj użytkownika
        </button>
        <button onClick={() => this.deleteUser("fajnyv3")}>
          Usuń użytkownika
        </button>
        {this.props.users &&
          this.props.users.map(user => {
            return "User " + user.firstname;
          })}
        {this.props.user &&
          "Oto nasz pojedynczy user " + this.props.user.firstname}
          {this.props.authors &&
          this.props.authors.map(author => {
            return "Author " + author.firstname;
          })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  message: state.userReducer.message,
  error: state.userReducer.error,
  users: state.userReducer.data,
  user: state.userReducer.entity,
  userLoading: state.userReducer.loading,
  authorLoading: state.authorReducer.loading,
  authors: state.authorReducer.data
});

const mapDispatchToProps = dispatch => ({
  register: user => dispatch(register(user)),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchUser: id => dispatch(fetchUser(id)),
  deleteUser: email => dispatch(deleteUser(email)),
  addAuthor: author => dispatch(addAuthor(author)),
  fetchAuthors: () => dispatch(fetchAuthors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
