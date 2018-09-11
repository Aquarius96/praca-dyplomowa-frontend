import {
  actionBuilder,
  rateActionFactory
} from './base';
import axios from 'axios';

const reviewActions = actionBuilder('REVIEW', 'http://localhost:8000/api/review/');

export const fetchReviews = reviewActions.FETCH_ALL;
export const fetchReview = id => reviewActions.FETCH_ONE(id)();
export const addReview = review => reviewActions.ADD(review)();
export const deleteReview = id => reviewActions.DELETE(id)();

export const addReviewRate = (id, rate) => rateActionFactory('REVIEW', 'ADD', () => {
  return axios.post('http://localhost:8000/api/review/' + id + '/rate/', rate);
}, id)();