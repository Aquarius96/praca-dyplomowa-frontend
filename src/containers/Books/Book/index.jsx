import React from "react";
import moment from "moment";

const Book = props => {
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
        {book.title},{" "}
        {book.authors.map(author => {
          return <div>{author.authorName}</div>;
        })}
        {book.genres.map(genre => {
          return <div>{genre.genreName}</div>;
        })}
      </p>
      <p>
        {book.description}, Liczba stron: {book.pagesCount}
      </p>
      <p>
        Ocena: {book.rating.value}, Liczba głosów: {book.rating.votesAmount}
        <button
          onClick={() =>
            addBookRate(book.id, { userEmailAddress: user.email, value: 1 })
          }
        >
          1
        </button>
        <button
          onClick={() =>
            addBookRate(book.id, { userEmailAddress: user.email, value: 2 })
          }
        >
          2
        </button>
        <button
          onClick={() =>
            addBookRate(book.id, { userEmailAddress: user.email, value: 3 })
          }
        >
          3
        </button>
        <button
          onClick={() =>
            addBookRate(book.id, { userEmailAddress: user.email, value: 4 })
          }
        >
          4
        </button>
        <button
          onClick={() =>
            addBookRate(book.id, { userEmailAddress: user.email, value: 5 })
          }
        >
          5
        </button>
      </p>
      {user && [
        <button onClick={() => addCurrentlyReadBook(user.email, book.id)}>
          Właśnie czytam
        </button>,
        <button onClick={() => addFavoriteBook(user.email, book.id)}>
          Dodaj do ulubionych
        </button>,
        <button
          onClick={() =>
            addReadBook(user.email, {
              bookId: book.id,
              finished: moment.now
            })
          }
        >
          Przeczytałem
        </button>,
        <button onClick={() => addWantedBook(user.email, book.id)}>
          Chcę tą książkę
        </button>
      ]}
    </div>
  );
};

export default Book;
