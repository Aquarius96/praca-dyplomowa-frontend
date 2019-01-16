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
import RatingView from '../../Views/rating';

const LibraryBookView = props => {
  const {
    book,
    user,
    addWantedBook,
    addFavoriteBook,
    addReadBook,
    date,
    handleDateChange,
    library,
    addCurrentlyReadBook,
    deleteCurrentlyReadBook,
    deleteFavoriteBook,
    deleteReadBook,
    deleteWantedBook,
    addBookRate
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
        <Grid item container md={6}>
          <BookInfoView book={book} />
        </Grid>
        <Grid item md={4}>
          <RatingView entity={book} user={user} addRate={addBookRate} currentValue={firstOrDefault(library.bookRates, function (element) {
            return element.bookId === book.id
          }).value} />
          <Typography>Przeczytano: {book.finished}</Typography>
          <ExpansionPanel style={{ width: "95%" }}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subheading">
                Przenieś na inną półkę
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <span>
                {library.currentlyReadBooks.filter(
                  curBook => curBook.id === book.id
                ).length === 0 ? (
                    <Button
                      onClick={() => addCurrentlyReadBook(user.email, book.id)}
                      color="primary"
                    >
                      Właśnie czytam
                  </Button>
                  ) : (
                    <Grid>
                      <Button
                        onClick={() => addCurrentlyReadBook(user.email, book.id)}
                        disabled
                        color="primary"
                      >
                        Właśnie czytam
                    </Button>
                      <Button
                        onClick={() =>
                          deleteCurrentlyReadBook(user.email, book.id)
                        }
                        color="secondary"
                      >
                        Usuń
                    </Button>
                    </Grid>
                  )}
                {library.favoriteBooks.filter(curBook => curBook.id === book.id)
                  .length === 0 ? (
                    <Button
                      onClick={() => addFavoriteBook(user.email, book.id)}
                      color="primary"
                    >
                      Dodaj do ulubionych
                  </Button>
                  ) : (
                    <Grid>
                      <Button
                        onClick={() => deleteFavoriteBook(user.email, book.id)}
                        color="secondary"
                      >
                        Usuń z ulubionych
                    </Button>
                    </Grid>
                  )}
                {library.wantedBooks.filter(curBook => curBook.id === book.id)
                  .length === 0 ? (
                    <Button
                      onClick={() => addWantedBook(user.email, book.id)}
                      color="primary"
                    >
                      Chcę przeczytać
                  </Button>
                  ) : (
                    <Grid>
                      <Button
                        onClick={() => addWantedBook(user.email, book.id)}
                        disabled
                        color="primary"
                      >
                        Chcę przeczytać
                    </Button>
                      <Button
                        onClick={() => deleteWantedBook(user.email, book.id)}
                        color="secondary"
                      >
                        Usuń
                    </Button>
                    </Grid>
                  )}
                {library.readBooks.filter(curBook => curBook.id === book.id)
                  .length === 0 ? (
                    <AddReadBookPanelView
                      addReadBook={addReadBook}
                      date={date}
                      handleDateChange={handleDateChange}
                      book={book}
                      user={user}
                    />
                  ) : (
                    <Grid>
                      <Button disabled color="primary">
                        Przeczytałem
                    </Button>
                      <Button
                        onClick={() => deleteReadBook(user.email, book.id)}
                        color="secondary"
                      >
                        Usuń
                    </Button>
                    </Grid>
                  )}
              </span>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default LibraryBookView;
