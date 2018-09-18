import React from "react";
import { Link } from "react-router-dom";
import RatingView from "../../Views/rating";

const AuthorPartialView = props => {
  const { author, user, addFavoriteAuthor, addAuthorRate } = props;
  return (
    <div>
      <p>
        <Link to={"/autorzy/" + author.id}>
          {author.firstname} {author.lastname}
        </Link>
        {author.genres.map(genre => {
          return <span key={genre.id}>{genre.genreName}</span>;
        })}
        <RatingView entity={author} user={user} addRate={addAuthorRate} />
        <button onClick={() => addFavoriteAuthor(user.email, author.id)}>
          Dodaj do ulubionych
        </button>
      </p>
    </div>
  );
};

export default AuthorPartialView;
