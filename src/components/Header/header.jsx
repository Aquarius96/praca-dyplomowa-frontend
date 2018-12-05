import React, { Component } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import decode from "jwt-decode";
import { saveUser, logout } from "../../redux/actions/user";
import { fetchLibrary } from "../../redux/actions/library";
import { connect } from "react-redux";
import "./header.css";

class Header extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    const token = localStorage.getItem("token");

    if (token !== null) {
      const user = decode(token);
      this.props.fetchLibrary(user.email);
      this.props.saveUser(user);
    }
  }

  render() {
    return (
      <div className="header">
        <AppBar
          position="static"
          color="default"
          style={{ marginBottom: "7px" }}
        >
          <Toolbar style={{ margin: "auto" }}>
            {/* <Typography>
              <Link to="/">Strona główna</Link>
            </Typography> */}
            <Typography>
              <Link to="/ksiazki">Baza książek</Link>
            </Typography>
            <Typography>
              <Link to="/autorzy">Baza autorów</Link>
            </Typography>
            <Typography>
              <Link to="/dodaj">Dodaj książkę/autora</Link>
            </Typography>
            <Typography>
              <Link to="/profil">Mój profil</Link>
            </Typography>
            {!this.props.user && (
              <Typography>
                <Link to="/login">Logowanie</Link>
              </Typography>
            )}
            <Typography>
              <Link to="/admin">Panel admina</Link>
            </Typography>
            {this.props.user && (
              <Typography onClick={this.props.logout}>
                <a>Wyloguj się</a>
              </Typography>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.users.user
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  saveUser: user => dispatch(saveUser(user)),
  fetchLibrary: userEmailAddress => dispatch(fetchLibrary(userEmailAddress)())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
