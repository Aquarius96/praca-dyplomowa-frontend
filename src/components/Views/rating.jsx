import React from "react";
import { Typography } from "@material-ui/core";

const RatingView = props => {
  const { entity, user, addRate } = props;
  return (
    <div>
      <Typography variant="headline">Ocena: {entity.rating.value}, Liczba głosów: {entity.rating.votesAmount}</Typography>
      {[1, 2, 3, 4, 5].map(value => {
        return (
          <button
            key={value}
            onClick={() =>
              addRate(entity.id, {
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

export default RatingView;
