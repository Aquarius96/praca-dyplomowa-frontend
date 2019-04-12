import React, { Component } from 'react'
import FacebookProvider, { Login } from 'react-facebook-sdk';
import { connect } from "react-redux";
import { loginViaFacebook } from '../../redux/actions/user';
import { Button } from "@material-ui/core";

class LoginComponent extends Component {

  handleResponse = (data) => {    
    this.props.loginViaFacebook(data.tokenDetail.accessToken);
  }
 
  handleError = (error) => {
    this.setState({ error });
  }
 
  render() {
    return (
      <FacebookProvider appId="821270811560917">
        <Login
          scope="email"
          onResponse={this.handleResponse}
          onError={this.handleError}
        >
          <Button>Login via Facebook</Button>
        </Login>        
      </FacebookProvider>
    );
  }
}

const mapStateToProps = state => ({
  error: state.users.error,
  loading: state.users.loading,
  user: state.users.user,
  message: state.users.message
});

const mapDispatchToProps = dispatch => ({
  loginViaFacebook: accessToken => dispatch(loginViaFacebook(accessToken)()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);