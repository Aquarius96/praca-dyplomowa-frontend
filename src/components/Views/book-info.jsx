import React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";

const BookInfoView = props => {
  const { book } = props;
  return (
    <Typography variant="subheading">
      <Grid item md={12}>
        <Typography variant="display1">
          <Link className="link" to={"/ksiazki/" + book.id}>
            {book.title}
          </Link>
        </Typography>
      </Grid>
      <Grid item md={12}>
        Autorzy:
        {book.authors.map(author => {
          return <span key={author.id}>{author.name} </span>;
        })}
      </Grid>
      <Grid item md={12}>
        Gatunki:
        {book.genres.map(genre => {
          return <span key={genre.id}>{genre.name}</span>;
        })}
      </Grid>
      <Grid item md={12}>
        Liczba stron: {book.pagesCount}
      </Grid>
      <Grid item md={12}>
        {book.description}
      </Grid>
    </Typography>
  );
};

export default BookInfoView;
