import React from "react";
import Comment from "./comment";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import  {Loader} from '../Loader/loader';

const CommentsList = props => {
  const { comments, handleChange, handleSubmit, loading } = props;
  if(loading) return <Loader />
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
        <Button variant="contained" type="submit">
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
