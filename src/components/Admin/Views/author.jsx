import React from "react";
import { Paper, Grid, Button, Typography } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const ConfirmAuthorView = props => {
  const { author, confirmAuthor, rejectAuthor } = props;
  return (
    <Paper>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Grid container>
            <Grid item sm={7}>
              <Typography variant="subheading">{author.name}</Typography>
            </Grid>
            <Grid item sm={5}>
              <Button
                style={{ marginRight: "3px" }}
                variant="contained"
                color="primary"
                onClick={() => confirmAuthor(author.id)}
              >
                Potwierdź
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => rejectAuthor(author.id)}
              >
                Odrzuć
              </Button>
            </Grid>
          </Grid>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container>
            <Grid item sm={8} container><Typography variant="body1">
              <Grid item md={12}>Data urodzenia: {author.dateOfBirth}</Grid>
              <Grid item md={12}>
                Miejsce urodzenia: {author.birthCity} , {author.birthCountry}
              </Grid>
              <Grid item md={12}>Płeć: {author.gender}</Grid></Typography></Grid>
            <Grid item sm={4}><img alt="" src={author.photoUrl}></img></Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Paper>
  );
};

export default ConfirmAuthorView;
