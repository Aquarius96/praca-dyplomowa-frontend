import React from "react";
import { Grid, Typography, Paper, Button } from "@material-ui/core";

const ReviewView = props => {
  const { review, addRate } = props;
  return (
    <Paper
      style={{
        marginTop: "5px",
        padding: "15px"
      }}
    >
      <Grid container>
        <Grid item sm={12}>
          <Paper>
            <Typography variant="h3">{review.title}</Typography>
          </Paper>
        </Grid>
        <Grid
          item
          sm={12}
          style={{
            marginTop: "10px",
            marginBottom: "10px"
          }}
        >
          <Typography variant="body2">{review.content}</Typography>
        </Grid>
        <Grid item sm={12}>
          {review.rating.votesAmount > 0 ? (
            <Typography>
              Czy uznajesz tę recenzję za pomocną? {review.rating.value} %{" "}
              użytkowników odpowiedziało 'Tak'
            </Typography>
          ) : (
            <Typography>
              Czy uznajesz tę recenzję za pomocną? Bądź pierwszą osobą, która
              odpowie na to pytanie!
            </Typography>
          )}
        </Grid>
        <Grid item sm={12} style={{ marginTop: "10px" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => addRate(review.id, true)}
          >
            Tak
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => addRate(review.id, false)}
          >
            Nie
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ReviewView;
