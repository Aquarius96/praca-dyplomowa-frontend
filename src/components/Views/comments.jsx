import React from "react";
import Comment from "./comment";
import { Button, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { Loader } from '../Loader/loader';
import { Link } from "react-router-dom";

const CommentsList = props => {
  const { comments, handleChange, handleSubmit, loading, user } = props;
  if (loading) return <Loader />
  return (
    <div>
      {user ?
        <form
          onChange={handleChange}
          onSubmit={handleSubmit}
          style={{ textAlign: "center" }}
        >
          <TextField
            style={{ width: "100%" }}
            label=""
            name="comment"
            margin="normal"
            className="input"
            variant="outlined"
            multiline
            rows={4}
          />
          <Button variant="contained" type="submit">
            Dodaj komentarz
        </Button>
        </form> : <Typography variant="subheading" align="center" style={{ margin: "5px" }}>
          <Link to="/logowanie">Zaloguj się</Link>, aby móc dodać komentarz
                </Typography>}
      {comments.map(comment => {
        return <Comment comment={comment} />;
      })}
    </div>
  );
};

export default CommentsList;
