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
  }

  register = user => {
    this.props.register(user);
  };

  deleteUser = email => {
    this.props.deleteUser(email);
  };

  render() {
    if (this.props.loading) {
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
        <button onClick={() => this.deleteUser("fajnyv4")}>
          Usuń użytkownika
        </button>
        {this.props.users &&
          this.props.users.map(user => {
            return "User " + user.firstname;
          })}
        {this.props.user &&
          "Oto nasz pojedynczy user " + this.props.user.firstname}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  message: state.userReducer.message,
  error: state.userReducer.error,
  users: state.userReducer.data,
  user: state.userReducer.entity,
  loading: state.userReducer.loading
});

const mapDispatchToProps = dispatch => ({
  register: user => dispatch(register(user)),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchUser: id => dispatch(fetchUser(id)),
  deleteUser: email => dispatch(deleteUser(email))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
