import React from "react";
import { TextField, Button } from "@material-ui/core";

const ReviewsList = props => {
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
    </div>
  );
};

export default ReviewsList;
