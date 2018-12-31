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
          <Typography variant="body1">
            <p>Data urodzenia: {author.dateOfBirth}</p>
            <p>
              Miejsce urodzenia: {author.birthCity} , {author.birthCountry}
            </p>
            <p>Płeć: {author.gender}</p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Paper>
  );
};

export default ConfirmAuthorView;
