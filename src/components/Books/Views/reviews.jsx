import React from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import ReviewView from "./review";
import { Loader } from "../../Loader/loader";
import { Link } from 'react-router-dom';

const ReviewsList = props => {
  const { reviews, handleChange, handleSubmit, addReviewRate, loading, user } = props;
  if (loading) return <Loader />
  return (
    <div style={{ textAlign: "center", marginTop: "15px" }}>
      {user ?
        <form
          onChange={handleChange}
          onSubmit={handleSubmit}
          style={{ textAlign: "center" }}
        >
          <TextField fullWidth label="Tytuł" variant="outlined" name="title" />
          <TextField
            fullWidth
            label="Treść recenzji"
            name="content"
            margin="normal"
            className="input"
            variant="outlined"
            multiline
            rows={4}
          />
          <Button variant="contained" type="submit">
            Dodaj recenzję
        </Button>
        </form> : <Typography variant="subheading" align="center">
          <Link to="/logowanie">Zaloguj się</Link>, aby móc dodać recenzję
                </Typography>}
      {reviews.length !== 0 && <Typography style={{ textAlign: "left" }} variant="display2">
        Recenzje użytkowników:
      </Typography>}
      {reviews.map(review => {
        return <ReviewView review={review} addRate={addReviewRate} />;
      })}
    </div>
  );
};

export default ReviewsList;
