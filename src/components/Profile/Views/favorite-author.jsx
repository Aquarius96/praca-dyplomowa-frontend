import React from "react";
import { Paper, Grid, Typography, Button } from "@material-ui/core";
import AuthorInfoView from "../../Views/author-info";
import { firstOrDefault } from "../../../utils/array-functions";
import RatingView from "../../Views/rating";

const FavoriteAuthorView = props => {
  const { author, user, deleteFavoriteAuthor, library, addAuthorRate } = props;
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
            alt=""
          />
        </Grid>
        <Grid item container md={5}>
          <AuthorInfoView author={author} />
        </Grid>
        <Grid item md={5}>
          {user ? (
            <RatingView
              entity={author}
              user={user}
              addRate={addAuthorRate}
              currentValue={
                firstOrDefault(library.authorRates, function(element) {
                  return element.authorId === author.id;
                }).value
              }
            />
          ) : (
            <Typography variant="subheading">
              Zaloguj się, aby móc dodać ocenę
            </Typography>
          )}

          <Button
            onClick={() => deleteFavoriteAuthor(user.email, author.id)}
            color="secondary"
            variant="contained"
          >
            Usuń z ulubionych
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default FavoriteAuthorView;
