import React from "react";
import {
  Paper,
  Grid,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Button
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import BookInfoView from "../../Views/book-info";

const ReadBookView = props => {
  const { book, user, addCurrentlyReadBook, addFavoriteBook, addWantedBook } = props;
  return (
    <Paper>
      <Grid container>
        <Grid item md={2}>
          <img
            width="180"
            height="230"
            src={
              book.photoUrl
                ? book.photoUrl
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcGAmbKRhO9zYpnttSkwef1Rr-Lr5emDd3RyORBCF8tO6AK3BSA"
            }
            alt=""
          />
        </Grid>
        <Grid item container md={5}>
          <BookInfoView book={book} />
        </Grid>
        <Grid item md={5}>
        <Typography variant="subheading">Moja ocena: 5</Typography>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subheading">
                Przenieś na inną półkę
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Button onClick={() => addCurrentlyReadBook(user.email, book.id)}>
                Właśnie czytam
              </Button>
              <Button onClick={() => addWantedBook(user.email, book.id)}>
                Chcę tą książkę
              </Button>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <Button onClick={() => addFavoriteBook(user.email, book.id)}>Dodaj do ulubionych</Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ReadBookView;
