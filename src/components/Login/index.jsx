import React, { Component } from "react";
import { connect } from "react-redux";

import LoginFormView from "./Views/login";
import {
  login,
  register,
  clearErrors,
  clearMessage
} from "../../redux/actions/user";
import RegisterFormView from "./Views/register";
import Grid from "@material-ui/core/Grid";
import { Loader } from "../Loader/loader";

class LoginPage extends Component {
  state = {
    loginModel: {
      emailAddress: "",
      password: ""
    },
    registerModel: {
      username: "",
      emailAddress: "",
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
    if (this.props.loading) {
      return <Loader />;
    }
    if (this.props.error) {
      window.alert(this.props.error);
      this.props.clearErrors();
    }
    if (this.props.user) {
      this.props.history.push("/ksiazki");
    }
    if (this.props.message) {
      window.alert(this.props.message);
      this.setState({
        registerModel: {
          username: "",
          emailAddress: "",
          password: ""
        }
      });
      this.props.clearMessage();
    }
    return (
      <Grid container spacing={0} className="login_page">
        <Grid id="book-image" item sm={6} xs={12}>
          <LoginFormView
            data={this.state.loginModel}
            handleChange={this.handleLoginFormChange}
            handleSubmit={this.handleLoginFormSubmit}
          />
        </Grid>
        <Grid item sm={6} xs={12}>
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
  error: state.users.error,
  loading: state.users.loading,
  user: state.users.user,
  message: state.users.message
});

const mapDispatchToProps = dispatch => ({
  login: model => dispatch(login(model)()),
  register: model => dispatch(register(model)),
  clearErrors: () => dispatch(clearErrors()),
  clearMessage: () => dispatch(clearMessage())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
