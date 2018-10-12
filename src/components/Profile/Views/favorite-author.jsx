import React from "react";
import { Paper, Grid, Typography, Button } from "@material-ui/core";
import AuthorInfoView from "../../Views/author-info";

const FavoriteAuthorView = props => {
  const { author, user } = props;
  return (
    <Paper>
      <Grid container>
        <Grid item md={2}>
          <img
            width="180"
            height="230"
            src={
              author.photoUrl
                ? author.photoUrl
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcGAmbKRhO9zYpnttSkwef1Rr-Lr5emDd3RyORBCF8tO6AK3BSA"
            }
          />
        </Grid>
        <Grid item container md={5}>
          <AuthorInfoView author={author} />
        </Grid>
        <Grid item md={5}>
          <Typography variant="subheading">Moja ocena: 5</Typography>

          <Button>Usuń z ulubionych</Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default FavoriteAuthorView;
