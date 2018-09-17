import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import BookRating from "./rating";
import CommentsList from "../../../views/comments";

const BookFullView = props => {
  const {
    book,
    user,
    addCurrentlyReadBook,
    addFavoriteBook,
    addReadBook,
    addWantedBook,
    addBookRate,
    addBookComment
  } = props;
  return (
    <div>
      <Link to="/ksiazki">Wróc do listy wszystkich książek</Link>
      {book && (
        <span>
          <p>
            {book.title},
            {book.authors.map(author => {
              return <span key={author.id}>{author.authorName}</span>;
            })}
            {book.genres.map(genre => {
              return <span key={genre.id}>{genre.genreName}</span>;
            })}
          </p>
          <p>{book.description}</p>
          <BookRating book={book} user={user} addBookRate={addBookRate} />
        </span>
      )}
      {user && (
        <span>
          <button onClick={() => addCurrentlyReadBook(user.email, book.id)}>
            Właśnie czytam
          </button>
          <button onClick={() => addFavoriteBook(user.email, book.id)}>
            Dodaj do ulubionych
          </button>
          <button
            onClick={() =>
              addReadBook(user.email, {
                bookId: book.id,
                finished: moment.now
              })
            }
          >
            Przeczytałem
          </button>
          <button onClick={() => addWantedBook(user.email, book.id)}>
            Chcę tą książkę
          </button>
        </span>
      )}
      {book && (
        <CommentsList
          comments={book.comments}
          id={book.id}
          user={user}
          addComment={addBookComment}
        />
      )}
      Recenzje:
      {book &&
        book.reviews.map(review => {
          return <div key={review.id}>{review.title}</div>;
        })}
    </div>
  );
};

export default BookFullView;
