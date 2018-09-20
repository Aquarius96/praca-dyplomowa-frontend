import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

const LoginFormView = props => {
  const { data, handleChange, handleSubmit } = props;
  return (
    <form id="login" onChange={handleChange} onSubmit={handleSubmit}>
      <TextField
        id="name"
        label="Adres e-mail"
        name="emailAddress"
        value={data.emailAddress}
        margin="normal"
        className="input"
      />
      <TextField
        id="password-input"
        label="Hasło"
        type="password"
        autoComplete="current-password"
        margin="normal"
        name="password"
        value={data.password}
        className="input"
      />
      <Button variant="outlined" type="submit">
        Zaloguj się
      </Button>
    </form>
  );
};

export default LoginFormView;
