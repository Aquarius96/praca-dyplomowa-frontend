import React from "react";
import { Typography } from "@material-ui/core";

const RatingView = props => {
  const { entity, user, addRate } = props;
  return (
    <div className="rating_view">
      <Typography variant="headline">
        Ocena: {entity.rating.value}, Liczba głosów: {entity.rating.votesAmount}
      </Typography>
      <fieldset className="rating">
        {[5, 4, 3, 2, 1].map(value => {
          return [
            <input type="radio" id={entity.id + "star" + value} />,
            <label
              htmlFor={entity.id + "star" + value}
              onClick={() =>
                addRate(entity.id, {
                  userEmailAddress: user.email,
                  value
                })
              }
            >
              5 stars
            </label>
          ];
        })}
      </fieldset>
      {/* {[1, 2, 3, 4, 5].map(value => {
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
      })} */}
    </div>
  );
};

export default RatingView;
