import React, { Component } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import decode from "jwt-decode";
import { saveUser, logout } from "../../redux/actions/user";
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
      this.props.saveUser(user);
    }
  }

  render() {
    return (
      <div className="header">
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography>
              <Link to="/">Strona główna</Link>
            </Typography>
            <Link to="/ksiazki">Baza książek</Link>
            <Link to="/autorzy">Baza autorów</Link>
            <Link to="/profil">Mój profil</Link>
            {!this.props.user && <Link to="/login">Logowanie</Link>}
            {this.props.user &&               
              <button onClick={this.props.logout}>Wyloguj się</button>
            }
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
  saveUser: user => dispatch(saveUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
