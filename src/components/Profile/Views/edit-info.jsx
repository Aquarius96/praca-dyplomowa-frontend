import React from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";

const UserEditInfoView = props => {
  const { data, handleChange, handleSubmit } = props;
  return (
    <Grid container>
      <Grid item md={12}>
        <Typography align="center" variant="display1">
          Edytuj dane
        </Typography>
      </Grid>
      <Grid item md={6} container>
        <Grid item md={12}>
          <TextField
            style={{ width: "80%" }}
            style={{ width: "80%" }}
            placeholder="Wpisz nowe imię"
            label="Imię"
          />
        </Grid>
        <Grid item md={12}>
          <TextField
            style={{ width: "80%" }}
            placeholder="Wpisz nowe nazwisko"
            label="Nazwisko"
          />
        </Grid>
        <Grid item md={12}>
          <TextField
            style={{ width: "80%" }}
            placeholder="Wpisz nowy pseudonim"
            label="Pseudonim"
          />
        </Grid>
        <Button variant="contained" style={{ height: "30px" }}>
          Zapisz zmiany
        </Button>
      </Grid>

      <Grid item md={6} container>
        <form onChange={handleChange} onSubmit={handleSubmit}>
          <Grid item md={12}>
            <TextField
              value={data.oldPassword}
              name="oldPassword"
              style={{ width: "80%" }}
              placeholder="Wpisz stare hasło"
              label="Stare hasło"
              type="password"
            />
          </Grid>
          <Grid item md={12}>
            <TextField
              value={data.password}
              name="password"
              style={{ width: "80%" }}
              placeholder="Wpisz nowe hasło"
              label="Nowe hasło"
              type="password"
            />
          </Grid>
          <Grid item md={12}>
            <TextField
              value={data.confirmPassword}
              name="confirmPassword"
              style={{ width: "80%" }}
              placeholder="Potwierdź hasło"
              label="Potwierdź hasło"
              type="password"
            />
          </Grid>
          <Button type="submit" variant="contained" style={{ height: "30px" }}>
            Zmień hasło
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default UserEditInfoView;
