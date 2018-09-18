import React, { Component } from "react";
import { connect } from "react-redux";

import LoginFormView from "./Views/login";
import { login, register } from "../../redux/actions/user";
import RegisterFormView from "./Views/register";
import Grid from "@material-ui/core/Grid";

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
      <Grid container spacing={0}>
        <Grid id="book-image" item xs={6}>
          <LoginFormView
            data={this.state.loginModel}
            handleChange={this.handleLoginFormChange}
            handleSubmit={this.handleLoginFormSubmit}
          />
        </Grid>
        <Grid item xs={6}>
          <RegisterFormView
            data={this.state.registerModel}
            handleChange={this.handleRegisterFormChange}
            handleSubmit={this.handleRegisterFormSubmit}
          />
        </Grid>
      </Grid>
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
