import React, { Component } from "react";
import { connect } from "react-redux";

import LoginForm from './Form/login';
import { login } from "../../redux/actions/user";

class LoginPage extends Component {
  state = {
    loginModel: {
      emailAddress: "",
      password: ""
    }
  };

  handleChange = e => {
    var model = this.state.loginModel;
    const { name, value } = e.target;
    model[name] = value;
    this.setState({ loginModel: Object.assign(this.state.loginModel, model) });
  };

  login = model => {
    this.props.login(model);
  }

  handleSubmit = e => {
    e.preventDefault();    
    this.login(this.state.loginModel);
  };

  render() {
    {this.props.error && window.alert(this.props.error)}
    return (
      <div>
        <LoginForm
          loginData={this.state.loginModel}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.userReducer.error
})

const mapDispatchToProps = dispatch => ({
  login: model => dispatch(login(model)())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
