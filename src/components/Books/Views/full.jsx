import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import RatingView from "../../Views/rating";
import CommentsList from "../../Views/comments";
import { Grid, Typography, Button, TextField, Paper } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const BookFullView = props => {
  const {
    book,
    user,
    addCurrentlyReadBook,
    addFavoriteBook,
    addReadBook,
    addWantedBook,
    addBookRate,
    addBookComment,
    handleDateChange,
    date
  } = props;
  return (
    book && (
      <Paper>
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
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="subheading">
                    Dodaj do biblioteczki
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <span>
                    <Button
                      onClick={() => addCurrentlyReadBook(user.email, book.id)}
                    >
                      Właśnie czytam
                    </Button>
                    <Button
                      onClick={() => addFavoriteBook(user.email, book.id)}
                    >
                      Dodaj do ulubionych
                    </Button>
                    <Button onClick={() => addWantedBook(user.email, book.id)}>
                      Chcę tą książkę
                    </Button>
                    <ExpansionPanel style={{ width: "80%" }}>
                      <ExpansionPanelSummary>
                        <Typography variant="button">Przeczytałem</Typography>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <TextField
                          onChange={handleDateChange}
                          id="date"
                          label="Kiedy?"
                          type="date"
                          defaultValue={date}
                          InputLabelProps={{
                            shrink: true
                          }}
                        />
                        <Button
                          onClick={() =>
                            addReadBook(user.email, {
                              bookId: book.id,
                              finished: date
                            })
                          }
                        >
                          Zatwierdź
                        </Button>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  </span>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            )}
          </Grid>
        </Grid>
      </Paper>
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
