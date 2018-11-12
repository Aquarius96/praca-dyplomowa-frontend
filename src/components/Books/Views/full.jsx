import React from "react";
import { Link } from "react-router-dom";
import RatingView from "../../Views/rating";
import {
  Grid,
  Typography,
  Button,
  TextField,
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

const BookFullView = props => {
  const {
    book,
    user,
    addBookComment,
    addCurrentlyReadBook,
    addFavoriteBook,
    addReadBook,
    addWantedBook,
    addBookRate,
    handleDateChange,
    date,
    handleAddCommentFormChange,
    handleAddCommentFormSubmit,
    handleAddReviewFormChange,
    handleAddReviewFormSubmit,
    handleSubMenuChange,
    value,
    commentModel,
    reviewModel,
    addBookReviewRate
  } = props;
  return (
    book && (
      <div>
        <Paper>
          <Link to="/ksiazki">Wróc do listy wszystkich książek</Link>
          <Grid container>
            <Grid item md={3}>
              <img
                width="230"
                height="270"
                src={
                  book.photoUrl
                    ? book.photoUrl
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcGAmbKRhO9zYpnttSkwef1Rr-Lr5emDd3RyORBCF8tO6AK3BSA"
                }
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
              {user ? (
                <RatingView entity={book} user={user} addRate={addBookRate} />
              ) : (
                <Typography variant="subheading">
                  Zaloguj się, aby móc dodać ocenę
                </Typography>
              )}
              {user && (
                <ExpansionPanel style={{ width: "95%" }}>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="subheading">
                      Dodaj do biblioteczki
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <span>
                      <Button
                        onClick={() =>
                          addCurrentlyReadBook(user.email, book.id)
                        }
                      >
                        Właśnie czytam
                      </Button>
                      <Button
                        onClick={() => addFavoriteBook(user.email, book.id)}
                      >
                        Dodaj do ulubionych
                      </Button>
                      <Button
                        onClick={() => addWantedBook(user.email, book.id)}
                      >
                        Chcę tą książkę
                      </Button>
                      <AddReadBookPanelView
                        addReadBook={addReadBook}
                        date={date}
                        handleDateChange={handleDateChange}
                        book={book}
                        user={user}
                      />
                    </span>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              )}
            </Grid>
          </Grid>
        </Paper>
        <Tabs
          value={0}
          indicatorColor="primary"
          textColor="primary"
          centered
          onChange={handleSubMenuChange}
          value={value}
        >
          <Tab label="Komentarze" />
          <Tab label="Recenzje" />
        </Tabs>
        {value == 0 && (
          <CommentsList
            comments={book.comments}
            id={book.id}
            user={user}
            addComment={addBookComment}
            handleChange={handleAddCommentFormChange}
            handleSubmit={handleAddCommentFormSubmit}
          />
        )}
        {value == 1 && (
          <ReviewsList
            reviews={book.reviews}
            user={user}
            handleChange={handleAddReviewFormChange}
            handleSubmit={handleAddReviewFormSubmit}
            addReviewRate={addBookReviewRate}
          />
        )}
      </div>
    )

    // <div>
    //   <Link to="/ksiazki">Wróc do listy wszystkich książek</Link>
    //   {book && (
    //     <span>
    //       <p>
    //         {book.title},
    //         {book.authors.map(author => {
    //           return <span key={author.id}>{author.authorName}</span>;
    //         })}
    //         {book.genres.map(genre => {
    //           return <span key={genre.id}>{genre.genreName}</span>;
    //         })}
    //       </p>
    //       <p>{book.description}</p>
    //       <RatingView entity={book} user={user} addRate={addBookRate} />
    //     </span>
    //   )}
    //   {user && (
    //     <span>
    //       <button onClick={() => addCurrentlyReadBook(user.email, book.id)}>
    //         Właśnie czytam
    //       </button>
    //       <button onClick={() => addFavoriteBook(user.email, book.id)}>
    //         Dodaj do ulubionych
    //       </button>
    //       <button
    //         onClick={() =>
    //           addReadBook(user.email, {
    //             bookId: book.id,
    //             finished: moment.now
    //           })
    //         }
    //       >
    //         Przeczytałem
    //       </button>
    //       <button onClick={() => addWantedBook(user.email, book.id)}>
    //         Chcę tą książkę
    //       </button>
    //     </span>
    //   )}
    //   {book && (
    //     <CommentsList
    //       comments={book.comments}
    //       id={book.id}
    //       user={user}
    //       addComment={addBookComment}
    //     />
    //   )}
    //   Recenzje:
    //   {book &&
    //     book.reviews.map(review => {
    //       return <div key={review.id}>{review.title}</div>;
    //     })}
    // </div>
  );
};

export default BookFullView;
