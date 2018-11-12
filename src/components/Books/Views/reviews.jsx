import React from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import ReviewView from "./review";

const ReviewsList = props => {
  const { reviews, handleChange, handleSubmit, addReviewRate } = props;
  return (
    <div style={{ textAlign: "center", marginTop: "15px" }}>
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
          // value=""
          margin="normal"
          className="input"
          variant="outlined"
          multiline
          rows={4}
        />
        <Button variant="raised" type="submit">
          Dodaj recenzję
        </Button>
      </form>
      <Typography style={{ textAlign: "left" }} variant="display2">
        Recenzje użytkowników:
      </Typography>
      {reviews.map(review => {
        return <ReviewView review={review} addRate={addReviewRate} />;
      })}
    </div>
  );
};

export default ReviewsList;
