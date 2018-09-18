import React from "react";
import { Link } from "react-router-dom";

const AuthorFullView = props => {
  const {
    author,
    user,
    addFavoriteAuthor,
    addAuthorRate,
    addAuthorComment
  } = props;
  return (
    <div>
      <Link to="/autorzy">Wróc do listy wszystkich autorów</Link>
      {author && (
        <span>
          {author.firstname} {author.lastname}
        </span>
      )}
    </div>
  );
};

export default AuthorFullView;
