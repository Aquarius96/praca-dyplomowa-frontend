import React from "react";
import { Link } from "react-router-dom";
import RatingView from "../../Views/rating";
import { Grid, Typography, Button, Paper } from "@material-ui/core";

const AuthorPartialView = props => {
  const {
    author,
    user,
    addFavoriteAuthor,
    deleteFavoriteAuthor,
    addAuthorRate,
    library
  } = props;
  return (
    <Paper>
      <Grid container>
        <Grid item md={3}>
          <img
            width="230"
            height="270"
            src={
              author.photoUrl
                ? author.photoUrl
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcGAmbKRhO9zYpnttSkwef1Rr-Lr5emDd3RyORBCF8tO6AK3BSA"
            }
          />
        </Grid>
        <Grid item container md={5}>
          <Typography variant="subheading">
            <Grid item md={12}>
              <Typography variant="display1">
                <Link className="link" to={"/autorzy/" + author.id}>
                  {author.name}
                </Link>
              </Typography>
            </Grid>

            <Grid item md={12}>
              Gatunki:
              {author.genres.map(genre => {
                return <span key={genre.id}>{genre.name}</span>;
              })}
            </Grid>
            <Grid item md={12}>
              Data i miejsce urodzenia:
              {author.dateOfBirth}, {author.birthCity}, {author.birthCountry}
            </Grid>

            <Grid item md={12}>
              {author.description}
            </Grid>
          </Typography>
        </Grid>
        <Grid item md={4}>
          {user ? (
            <RatingView entity={author} user={user} addRate={addAuthorRate} />
          ) : (
            <Typography variant="subheading">
              Zaloguj się, aby móc dodać ocenę
            </Typography>
          )}
          {user &&
            library &&
            (library.favoriteAuthors.filter(
              favAuthor => favAuthor.id === author.id
            ).length === 0 ? (
              <Button
                variant="contained"
                color="primary"
                onClick={() => addFavoriteAuthor(user.email, author.id)}
              >
                Dodaj do ulubionych
              </Button>
            ) : (
              <Button
                variant="contained"
                color="secondary"
                onClick={() => deleteFavoriteAuthor(user.email, author.id)}
              >
                Usuń z ulubionych
              </Button>
            ))}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AuthorPartialView;
