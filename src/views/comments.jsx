import React from "react";
import Comment from "./comment";

const CommentsList = props => {
  const { comments, id, addComment, user } = props;
  return (
    <div>
      <form>
        <textarea id="add-comment-area" />
        <button
          onClick={() =>
            addComment(id, {
              userEmailAddress: user.email,
              content: "jakis tam content"
            })
          }
        >
          Dodaj komentarz
        </button>
      </form>
      Komentarze:
      {comments.map(comment => {
        return <Comment comment={comment} />;
      })}
    </div>
  );
};

export default CommentsList;
