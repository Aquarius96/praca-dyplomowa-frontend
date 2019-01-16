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
          <Grid container>
            <Grid item sm={8} container><Typography variant="body1">
              <Grid item md={12}>
                Autorzy:
              {book.authors.map(author => {
                  return book.authors[book.authors.length - 1] === author ? <span key={author.id}> {author.name} </span> : <span key={author.id}> {author.name},</span>;
                })}
              </Grid>
              <Grid item md={12}>
                Gatunki:
              {book.genres.map(genre => {
                  return book.genres[book.genres.length - 1] === genre ? <span key={genre.id}> {genre.name}</span> : <span key={genre.id}> {genre.name},</span>;
                })}
              </Grid>
              <Grid item md={12}>
                Liczba stron: {book.pagesCount}
              </Grid>
              <Grid item md={12}>
                Data wydania: {book.released}
              </Grid>
              <Grid item md={12}>
                {book.description}
              </Grid>
            </Typography></Grid>
            <Grid item sm={4}>
              <img alt="" src={book.photoUrl}></img>
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Paper>
  );
};

export default ConfirmBookView;
