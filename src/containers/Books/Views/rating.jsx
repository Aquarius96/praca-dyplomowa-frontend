import React from "react";

const BookRating = props => {
  const { book, user, addBookRate } = props;
  return (
    <div>
      Ocena: {book.rating.value}, Liczba głosów: {book.rating.votesAmount}
      {[1, 2, 3, 4, 5].map(value => {
        return (
          <button
            key={value}
            onClick={() =>
              addBookRate(book.id, {
                userEmailAddress: user.email,
                value
              })
            }
          >
            {value}
          </button>
        );
      })}
    </div>
  );
};

export default BookRating;
