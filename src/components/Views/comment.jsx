import React from "react";

const Comment = props => {
  const { comment } = props;
  return (
    <div>
      {comment.content}, {comment.author.username}
    </div>
  );
};

export default Comment;
