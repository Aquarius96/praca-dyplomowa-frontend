import React from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import ReviewView from "./review";

const ReviewsList = props => {
  const { reviews } = props;
  return (
    <div style={{ textAlign: "center" }}>
      <TextField fullWidth label="Tytuł" variant="outlined" />
      <TextField
        fullWidth
        label="Treść recenzji"
        name="comment"
        // value=""
        margin="normal"
        className="input"
        variant="outlined"
        multiline
        rows={4}
      />
      <Button variant="raised">Dodaj recenzję</Button>
      <Typography style={{ textAlign: "left" }} variant="display2">
        Recenzje użytkowników:
      </Typography>
      {reviews.map(review => {
        return <ReviewView />;
      })}
    </div>
  );
};

export default ReviewsList;
