import React from "react";
import { Paper, Grid, Button, Typography } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const ConfirmBookView = props => {
  const { book, confirmBook, rejectBook } = props;
  return (
    <Paper>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Grid container>
            <Grid item sm={7}>
              <Typography variant="subheading">{book.title}</Typography>
            </Grid>
            <Grid item sm={5}>
              <Button
                style={{ marginRight: "3px" }}
                variant="contained"
                color="primary"
                onClick={() => confirmBook(book.id)}
              >
                Potwierdź
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => rejectBook(book.id)}
              >
                Odrzuć
              </Button>
            </Grid>
          </Grid>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography variant="body1">
            <p>Opis: {book.description}</p>
            <p>Liczba stron: {book.pagesCount}</p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Paper>
  );
};

export default ConfirmBookView;
