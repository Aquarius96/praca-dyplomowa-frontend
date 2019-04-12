import {
  actionBuilder,
  subActionFactory
} from "./base";
import axios from "axios";
import * as config from "../../utils/axios-config";

const reviewActions = actionBuilder(
  "REVIEW",
  "http://localhost:8000/api/review/"
);

export const fetchReviews = reviewActions.FETCH_ALL();
export const fetchReview = id => reviewActions.FETCH_ONE(id)();
export const addReview = review => reviewActions.ADD(review)();
export const deleteReview = id => reviewActions.DELETE(id)();
export const confirmReview = id => reviewActions.CONFIRM(id)();

export const addReviewRate = (id, rate) =>
  subActionFactory(
    "REVIEW",
    "ADD",
    "RATE",
    () => {
      return axios.post(
        "http://localhost:8000/api/review/" + id + "/rate/",
        rate,
        config.headers
      );
    },
    id
  )();