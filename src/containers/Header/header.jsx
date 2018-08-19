import React, { Component } from 'react'
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import './header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Photos
          </Typography>
          <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

