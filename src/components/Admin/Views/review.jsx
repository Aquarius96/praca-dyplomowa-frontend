import React from "react";
import { Paper, Grid, Button, Typography } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const ConfirmReviewView = props => {
  const { review, confirmReview, rejectReview } = props;
  return (
    <Paper>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Grid container>
            <Grid item sm={7}>
              <Typography variant="subheading">{review.title}</Typography>
            </Grid>
            <Grid item sm={5}>
              <Button
                style={{ marginRight: "3px" }}
                variant="raised"
                color="primary"
                onClick={() => confirmReview(review.id)}
              >
                Potwierdź
              </Button>
              <Button
                variant="raised"
                color="secondary"
                onClick={() => rejectReview(review.id)}
              >
                Odrzuć
              </Button>
            </Grid>
          </Grid>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography variant="body1">
            <p>Treść: {review.content}</p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Paper>
  );
};

export default ConfirmReviewView;
