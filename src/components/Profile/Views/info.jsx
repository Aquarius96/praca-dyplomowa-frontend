import React from "react";
import { Grid, Button, Typography } from "@material-ui/core";

const UserInfoView = () => {
  return (
    <Grid container>
      <Grid item md={6} style={{textAlign: "center"}}>
        <img
          width="230"
          height="270"
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcGAmbKRhO9zYpnttSkwef1Rr-Lr5emDd3RyORBCF8tO6AK3BSA"
          }
          alt=""
        />
        <Button variant="contained">Zmień awatar</Button>
      </Grid>
      <Grid item md={6}>
        <Typography align="center" variant="display1">Aquarius96</Typography>
        <Typography variant="body1">Marcin</Typography>
        <Typography variant="body1">Zapadka</Typography>
        <Typography variant="body1">marcinzapadka33@wp.pl</Typography>
        <Typography variant="body1">Przeczytane książki: 34</Typography>
      <Typography variant="body1">Dodane recenzje: 23</Typography>
      <Typography variant="body1">Dodane komentarze: 16</Typography>
      <Typography variant="body1">Ulubione książki: 11</Typography>
      <Typography variant="body1">Ulubieni autorzy: 6</Typography>
      </Grid>
    </Grid>
  );
};

export default UserInfoView;
