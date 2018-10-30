import React from "react";
import Comment from "./comment";
import { Button, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const CommentsList = props => {
  const { comments, id, addComment, user, handleChange, handleSubmit } = props;
  return (
    <div>
      <form
        onChange={handleChange}
        onSubmit={handleSubmit}
        style={{ textAlign: "center" }}
      >
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
        <Button variant="raised" type="submit">
          Dodaj komentarz
        </Button>
      </form>
      {comments.map(comment => {
        return <Comment comment={comment} />;
      })}
    </div>
  );
};

export default CommentsList;
