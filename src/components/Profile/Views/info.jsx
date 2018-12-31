import React from "react";
import { Grid, Typography } from "@material-ui/core";

const UserInfoView = props => {
  const { info } = props;
  return (
    <Grid container>
      <Grid item md={6} style={{ textAlign: "center" }}>
        <img
          width="230"
          height="270"
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcGAmbKRhO9zYpnttSkwef1Rr-Lr5emDd3RyORBCF8tO6AK3BSA"
          }
          alt=""
        />
        {/* <Button variant="contained">Zmień awatar</Button> */}
      </Grid>
      {info && (
        <Grid item md={6}>
          <Typography align="center" variant="display1">
            {info.username}
          </Typography>
          <Typography variant="body1">{info.firstname}</Typography>
          <Typography variant="body1">{info.lastname}</Typography>
          <Typography variant="body1">{info.emailAddress}</Typography>
          <Typography variant="body1">
            Przeczytane książki: {info.readBooksAmount}
          </Typography>
          <Typography variant="body1">
            Dodane recenzje: {info.addedReviewsAmount}
          </Typography>
          <Typography variant="body1">
            Dodane komentarze: {info.addedCommentsAmount}
          </Typography>
          <Typography variant="body1">
            Ulubione książki: {info.favoriteBooksAmount}
          </Typography>
          <Typography variant="body1">
            Ulubieni autorzy: {info.favoriteAuthorsAmount}
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default UserInfoView;
