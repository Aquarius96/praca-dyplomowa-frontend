import React from "react";
import { Link } from "react-router-dom";
import RatingView from "../../Views/rating";
import {
  Grid,
  Typography,
  Button,
  Paper,
  Tabs,
  Tab
} from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddReadBookPanelView from "../../Views/add-read-book";

import CommentsList from "../../Views/comments";
import ReviewsList from "./reviews";
import { firstOrDefault } from '../../../utils/array-functions';

const BookFullView = props => {
  const {
    book,
    user,
    addBookComment,
    addCurrentlyReadBook,
    addFavoriteBook,
    addReadBook,
    addWantedBook,
    deleteCurrentlyReadBook,
    deleteFavoriteBook,
    deleteReadBook,
    deleteWantedBook,
    addBookRate,
    handleDateChange,
    date,
    handleAddCommentFormChange,
    handleAddCommentFormSubmit,
    handleAddReviewFormChange,
    handleAddReviewFormSubmit,
    handleSubMenuChange,
    value,
    addBookReviewRate,
    library,
    loading
  } = props;
  return (
    book && (
      <div>
        <Paper>
          <Grid container>
            <Grid item md={3}>
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
              <Typography variant="subheading">
                <Grid item md={12}>
                  <Typography variant="display1">
                    <Link className="link" to={"/ksiazki/" + book.id}>
                      {book.title}
                    </Link>
                  </Typography>
                </Grid>
                <Grid item md={12}>
                  Autorzy:
                  {book.authors.map(author => {
                    return <span key={author.id}>{author.name} </span>;
                  })}
                </Grid>
                <Grid item md={12}>
                  Gatunki:
                  {book.genres.map(genre => {
                    return <span key={genre.id}>{genre.name}</span>;
                  })}
                </Grid>
                <Grid item md={12}>
                  Liczba stron: {book.pagesCount}
                </Grid>
                <Grid item md={12}>
                  {book.description}
                </Grid>
              </Typography>
            </Grid>
            <Grid item md={4}>
              <RatingView entity={book} user={user} addRate={addBookRate} currentValue={firstOrDefault(library.bookRates, function (element) {
                return element.bookId === book.id
              }).value} />
              {user && (
                <ExpansionPanel style={{ width: "95%" }}>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="subheading">
                      Dodaj do biblioteczki
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
              )}
            </Grid>
          </Grid>
        </Paper>
        <Tabs
          indicatorColor="primary"
          textColor="primary"
          centered
          onChange={handleSubMenuChange}
          value={value}
        >
          <Tab label="Komentarze" />
          <Tab label="Recenzje" />
        </Tabs>
        {value === 0 && (
          <CommentsList
            comments={book.comments}
            id={book.id}
            user={user}
            addComment={addBookComment}
            handleChange={handleAddCommentFormChange}
            handleSubmit={handleAddCommentFormSubmit}
            loading={loading}
          />
        )}
        {value === 1 && (
          <ReviewsList
            reviews={book.reviews}
            user={user}
            handleChange={handleAddReviewFormChange}
            handleSubmit={handleAddReviewFormSubmit}
            addReviewRate={addBookReviewRate}
            loading={loading}
          />
        )}
      </div>
    )
  );
};

export default BookFullView;
