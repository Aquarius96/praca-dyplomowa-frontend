import React from "react";
import { Link } from "react-router-dom";
import RatingView from "../../Views/rating";
import { Grid, Typography, Button, TextField } from "@material-ui/core";

const AuthorPartialView = props => {
  const { author, user, addFavoriteAuthor, addAuthorRate } = props;
  return (
    <div>
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
          <Grid item md={12}>Data i miejsce urodzenia:
          {author.dateOfBirth}, {author.birthCity}, {author.birthCountry}</Grid>
          
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
        {user && (
          <Button onClick={() => addFavoriteAuthor(user.email, author.id)}>
          Dodaj do ulubionych
        </Button>
        )}
      </Grid>
    </Grid>      
    </div>
  );
};

export default AuthorPartialView;
