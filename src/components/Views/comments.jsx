import React from "react";
import Comment from "./comment";
import { TextField, Button, Typography } from "@material-ui/core";

const CommentsList = props => {
  const { comments, id, addComment, user, handleChange, handleSubmit } = props;
  return (
    <div>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <TextField
          style={{ width: "100%" }}
          label=""
          name="comment"
          // value=""
          margin="normal"
          className="input"
          variant="outlined"
          multiline
          rows={4}
        />
        <Button
          onClick={() =>
            addComment(id, {
              userEmailAddress: user.email,
              content: "jakis tam content"
            })
          }
        >
          Dodaj komentarz
        </Button>
      </form>
      <Typography variant="subheading">Komentarze:</Typography>
      {comments.map(comment => {
        return <Comment comment={comment} />;
      })}
    </div>
  );
};

export default CommentsList;
