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
import AddReadBookPanelView from "../../Views/add-read-book";
import { firstOrDefault } from '../../../utils/array-functions';

const CurrentlyReadBookView = props => {
  const {
    book,
    user,
    addWantedBook,
    addFavoriteBook,
    addReadBook,
    date,
    handleDateChange,
    library
  } = props;
  return (
    <Paper>
      <Grid container>
        <Grid item md={2}>
          <img
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
          <Typography variant="subheading">Moja ocena: {firstOrDefault(library.bookRates, function (element) {
            return element.bookId === book.id
          })}</Typography>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subheading">
                Przenieś na inną półkę
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Button onClick={() => addWantedBook(user.email, book.id)}>
                Chcę przeczytać
              </Button>
              <AddReadBookPanelView
                addReadBook={addReadBook}
                date={date}
                handleDateChange={handleDateChange}
                book={book}
                user={user}
              />
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <Button onClick={() => addFavoriteBook(user.email, book.id)}>
            Dodaj do ulubionych
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CurrentlyReadBookView;
