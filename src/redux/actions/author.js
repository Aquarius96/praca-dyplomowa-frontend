import { actionBuilder, subActionFactory } from "./base";
import axios from "axios";
import { uploadImage } from "../../utils/image-upload";
import * as config from "../../utils/axios-config";

const authorActions = actionBuilder(
  "AUTHOR",
  "https://bazaksiazek.azurewebsites.net/api/author/"
);

export const fetchAuthors = params => authorActions.FETCH_ALL(params)();
export const fetchAuthor = id => authorActions.FETCH_ONE(id)();
export const deleteAuthor = id => authorActions.DELETE(id)();
export const confirmAuthor = id => authorActions.CONFIRM(id)();

export const addAuthorRate = (id, rate) =>
  subActionFactory(
    "AUTHOR",
    "ADD",
    "RATE",
    () => {
      return axios.post(
        "https://bazaksiazek.azurewebsites.net/api/author/" + id + "/rate/",
        rate,
        config.headers
      );
    },
    id
  )();

export const addAuthorComment = (id, comment) =>
  subActionFactory(
    "AUTHOR",
    "ADD",
    "COMMENT",
    () => {
      return axios.post(
        "https://bazaksiazek.azurewebsites.net/api/author/" + id + "/comment/",
        comment,
        config.headers
      );
    },
    id
  )();
export const deleteAuthorComment = id =>
  subActionFactory(
    "AUTHOR",
    "DELETE",
    "COMMENT",
    () => {
      return axios.delete(
        "https://bazaksiazek.azurewebsites.net/api/author/comment/" + id,
        {},
        config.headers
      );
    },
    id
  )();

export const addAuthor = (author, image) => () => {
  return dispatch => {
    dispatch({
      type: `ADD_AUTHOR_BEGIN`
    });

    return axios
      .post(
        "https://bazaksiazek.azurewebsites.net/api/author",
        author,
        config.headers
      )
      .then(response => {
        uploadImage("author", response.data.id, image);
        dispatch({
          type: `ADD_AUTHOR_SUCCESS`,
          payload: {
            entity: response.data
          }
        });
      })
      .catch(error => {
        dispatch({
          type: `ADD_AUTHOR_ERROR`,
          payload: {
            error: error.message
          }
        });
      });
  };
};

export const searchAuthor = query => {
  return dispatch => {
    dispatch({
      type: "SEARCH_AUTHOR",
      payload: {
        query
      }
    });
  };
};
