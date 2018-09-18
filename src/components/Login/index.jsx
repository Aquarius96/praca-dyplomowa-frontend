import React, { Component } from "react";
import { connect } from "react-redux";

import LoginFormView from "./Views/login";
import { login, register } from "../../redux/actions/user";
import RegisterFormView from "./Views/register";

class LoginPage extends Component {
  state = {
    loginModel: {
      emailAddress: "",
      password: ""
    },
    registerModel: {
      username: "",
      emailAddress2: "",
      firstname: "",
      lastname: "",
      password: ""
    },
    registerVisible: true
  };

  handleLoginFormChange = e => {
    var model = this.state.loginModel;
    const { name, value } = e.target;
    model[name] = value;
    this.setState({ loginModel: Object.assign(this.state.loginModel, model) });
  };

  handleRegisterFormChange = e => {
    var model = this.state.registerModel;
    const { name, value } = e.target;
    model[name] = value;
    this.setState({
      registerModel: Object.assign(this.state.registerModel, model)
    });
  };

  handleLoginFormSubmit = e => {
    e.preventDefault();
    this.props.login(this.state.loginModel);
  };

  handleRegisterFormSubmit = e => {
    e.preventDefault();
    this.props.register(this.state.registerModel);
  };

  toggleForms = () => {
    this.setState(prevState => {
      return {
        registerVisible: !prevState.registerVisible
      };
    });
  };

  render() {
    this.props.error && window.alert(this.props.error);

    return (
      <div>
        {this.state.registerVisible
          ? [
              <RegisterFormView
                data={this.state.registerModel}
                handleChange={this.handleRegisterFormChange}
                handleSubmit={this.handleRegisterFormSubmit}
              />,
              <p>
                Masz już konto? <a onClick={this.toggleForms}>Zaloguj się</a>
              </p>
            ]
          : [
              <LoginFormView
                data={this.state.loginModel}
                handleChange={this.handleLoginFormChange}
                handleSubmit={this.handleLoginFormSubmit}
              />,
              <p>
                Nie masz jeszcze konta? <a onClick={this.toggleForms}>Zarejestruj się</a>
              </p>
            ]}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.users.error
});

const mapDispatchToProps = dispatch => ({
  login: model => dispatch(login(model)()),
  register: model => dispatch(register(model))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
