import React from "react";
import { Typography } from "@material-ui/core";
import { Link } from 'react-router-dom';

const RatingView = props => {
  const { entity, user, addRate, currentValue } = props;
  return (
    <div className="rating_view">
      <Typography variant="headline">
        Ocena: {entity.rating.value}, Liczba głosów: {entity.rating.votesAmount}
      </Typography>
      {user ?
        <fieldset className="rating">
          <input type="radio" name={entity.id + 'rating'} id={entity.id + "star" + 5} defaultChecked={currentValue === 5} />
          <label
            htmlFor={entity.id + "star" + 5}
            onClick={() => {
              addRate(entity.id, {
                userEmailAddress: user.email,
                value: 5
              })
            }
            }
          >
            {entity.id} stars
            </label>
          <input type="radio" name={entity.id + 'rating'} id={entity.id + "star" + 4} defaultChecked={currentValue === 4} />
          <label
            htmlFor={entity.id + "star" + 4}
            onClick={() => {
              addRate(entity.id, {
                userEmailAddress: user.email,
                value: 4
              })
            }
            }
          >
            {entity.id} stars
            </label>
          <input type="radio" name={entity.id + 'rating'} id={entity.id + "star" + 3} defaultChecked={currentValue === 3} />
          <label
            htmlFor={entity.id + "star" + 3}
            onClick={() => {
              addRate(entity.id, {
                userEmailAddress: user.email,
                value: 3
              })
            }
            }
          >
            {entity.id} stars
            </label>
          <input type="radio" name={entity.id + 'rating'} id={entity.id + "star" + 2} defaultChecked={currentValue === 2} />
          <label
            htmlFor={entity.id + "star" + 2}
            onClick={() => {
              addRate(entity.id, {
                userEmailAddress: user.email,
                value: 2
              })
            }
            }
          >
            {entity.id} stars
            </label>
          <input type="radio" name={entity.id + 'rating'} id={entity.id + "star" + 1} defaultChecked={currentValue === 1} />
          <label
            htmlFor={entity.id + "star" + 1}
            onClick={() => {
              addRate(entity.id, {
                userEmailAddress: user.email,
                value: 1
              })
            }
            }
          >
            {entity.id} stars
            </label>
        </fieldset> : <Typography variant="subheading">
          <Link to="/logowanie">Zaloguj się</Link>, aby móc dodać ocenę
                </Typography>}
      {/* <button onClick={() => {
        var x = document.getElementById(entity.id + "star3");
        x.checked = true;
      }}>klik</button> */}
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
