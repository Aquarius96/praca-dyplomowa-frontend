import React, { Component } from 'react'
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './header.css';

export default class Header extends Component {
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
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

