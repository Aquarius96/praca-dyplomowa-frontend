import React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography, Button, Paper, Tabs, Tab } from "@material-ui/core";
import RatingView from "../../Views/rating";
import CommentsList from "../../Views/comments";
import BookPartialView from "../../Books/Views/partial";
import { firstOrDefault } from '../../../utils/array-functions';

const AuthorFullView = props => {
  const {
    author,
    user,
    addFavoriteAuthor,
    deleteFavoriteAuthor,
    addAuthorRate,
    addAuthorComment,
    addCurrentlyReadBook,
    addFavoriteBook,
    addReadBook,
    addWantedBook,
    deleteCurrentlyReadBook,
    deleteFavoriteBook,
    deleteReadBook,
    deleteWantedBook,
    addBookRate,
    value,
    handleSubMenuChange,
    handleAddCommentFormChange,
    handleAddCommentFormSubmit,
    date,
    library
  } = props;

  return (
    author && (
      <div>
        <Paper>
          <Grid container>
            <Grid item md={3}>
              <img                
                src={
                  author.photoUrl
                    ? author.photoUrl
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcGAmbKRhO9zYpnttSkwef1Rr-Lr5emDd3RyORBCF8tO6AK3BSA"
                }
                alt=""
              />
            </Grid>
            <Grid item container md={5}>
              <Typography variant="subheading">
                <Grid item md={12}>
                  <Typography variant="display1">
                    <Link className="link" to={"/autorzy/" + author.id}>
                      {author.name}
                    </Link>
                  </Typography>
                </Grid>

                <Grid item md={12}>
                  Gatunki:
                  {author.genres.map(genre => {
                    return author.genres[author.genres.length - 1] === genre ? <span key={genre.id}> {genre.name}</span> : <span key={genre.id}> {genre.name},</span>;
                  })}
                </Grid>
                <Grid item md={12}>
                  Data i miejsce urodzenia:
                  {author.dateOfBirth}, {author.birthCity},{" "}
                  {author.birthCountry}
                </Grid>

                <Grid item md={12}>
                  {author.description}
                </Grid>
              </Typography>
            </Grid>
            <Grid item md={4}>              
                <RatingView
                  entity={author}
                  user={user}
                  addRate={addAuthorRate}
                  currentValue={firstOrDefault(library.authorRates, function (element) {
                    return element.authorId === author.id
                  }).value}
                />              
              {user && <span>{library.favoriteAuthors.filter(favAuthor => favAuthor.id === author.id)
                .length === 0 ? (
                  <Button
                    onClick={() => addFavoriteAuthor(user.email, author.id)}
                    variant="contained"
                    color="primary"
                  >
                    Dodaj do ulubionych
                  </Button>
                ) : (
                  <Grid>
                    <Button
                      onClick={() => deleteFavoriteAuthor(user.email, author.id)}
                      variant="contained"
                      color="secondary"
                    >
                      Usuń z ulubionych
                    </Button>
                  </Grid>
                )}</span>}
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
          <Tab label="Książki" />
        </Tabs>
        {value === 0 && (
          <CommentsList
            comments={author.comments}
            id={author.id}
            user={user}
            addComment={addAuthorComment}
            handleChange={handleAddCommentFormChange}
            handleSubmit={handleAddCommentFormSubmit}
          />
        )}
        {value === 1 && (
          <div>
            {author.books.map(book => {
              return (
                <BookPartialView
                  key={book.id}
                  book={book}
                  user={user}
                  addCurrentlyReadBook={addCurrentlyReadBook}
                  addFavoriteBook={addFavoriteBook}
                  addReadBook={addReadBook}
                  addWantedBook={addWantedBook}
                  deleteCurrentlyReadBook={deleteCurrentlyReadBook}
                  deleteFavoriteBook={deleteFavoriteBook}
                  deleteReadBook={deleteReadBook}
                  deleteWantedBook={deleteWantedBook}
                  addBookRate={addBookRate}
                  handleDateChange={this.handleDateChange}
                  date={date}
                  library={library}
                />
              );
            })}
          </div>
        )}
      </div>
    )
  );
};

export default AuthorFullView;
