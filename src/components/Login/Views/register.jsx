import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const RegisterFormView = props => {
  const { data, handleChange, handleSubmit } = props;
  return (
    <form id="register" onChange={handleChange} onSubmit={handleSubmit}>
      <Grid container spacing={24}>
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
        <TextField
          id="name"
          label="Nazwa użytkownika"
          name="username"
          value={data.username}
          margin="normal"
          className="input"
        />
        <Button variant="outlined" type="submit">
          Zarejestruj się
        </Button>
      </Grid>
    </form>
  );
};

export default RegisterFormView;
