import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

const Comment = props => {
  const { comment } = props;
  return (
    <Paper>
      <Grid container>
        <Grid item md={3} style={{ textAlign: "center" }}>
          <img
            height="150"
            alt=""
            src="https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg"
          />
          <Typography variant="subheading">
            {comment.author.username}
          </Typography>
        </Grid>
        <Grid item md={9}>
          {comment.content}
        </Grid>
      </Grid>
    </Paper>
    // <div>
    //   {comment.content}, {comment.author.username}
    // </div>
  );
};

export default Comment;
