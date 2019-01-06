import React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";

const AuthorInfoView = props => {
  const { author } = props;
  return (
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
  );
};

export default AuthorInfoView;
