import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import RatingView from "../../Views/rating";

const BookPartialView = props => {
  const {
    book,
    user,
    addCurrentlyReadBook,
    addFavoriteBook,
    addReadBook,
    addWantedBook,
    addBookRate
  } = props;
  return (
    <div>
      <p>
        {<Link to={"/ksiazki/" + book.id}>{book.title}</Link>},{" "}
        {book.authors.map(author => {
          return <span key={author.id}>{author.authorName}</span>;
        })}
        {book.genres.map(genre => {
          return <span key={genre.id}>{genre.genreName}</span>;
        })}
      </p>
      <p>
        {book.description}, Liczba stron: {book.pagesCount}
      </p>
      <RatingView entity={book} user={user} addRate={addBookRate} />
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
    </div>
  );
};

export default BookPartialView;
