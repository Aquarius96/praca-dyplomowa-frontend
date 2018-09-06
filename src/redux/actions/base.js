import axios from 'axios';

const actionTypes = {
  ADD: 'ADD',
  DELETE: 'DELETE',
  FETCH_ALL: 'FETCH_ALL',
  FETCH_ONE: 'FETCH_ONE'
}

export const actionFactory = (name, action, thunk, unit) => () => {
  return dispatch => {
    dispatch({
      type: `${action}_${name}_BEGIN`
    });

    switch (action) {
      case actionTypes.ADD:
        return dispatch(thunk)
          .then(() => {
            dispatch({
              type: `${action}_${name}_SUCCESS`
            })
          })
          .catch(error => {
            dispatch({
              type: `${action}_${name}_ERROR`,
              payload: {
                error: error.message
              }
            })
          });
      case actionTypes.DELETE:
        return dispatch(thunk)
          .then(() => {
            dispatch({
              type: `${action}_${name}_SUCCESS`,
              payload: {
                id: unit
              }
            })
          })
          .catch(error => {
            dispatch({
              type: `${action}_${name}_ERROR`,
              payload: {
                error: error.message
              }
            })
          });
      default:
        return dispatch(thunk)
          .then(response => {
            dispatch({
              type: `${action}_${name}_SUCCESS`,
              payload: {
                data: response.data
              }
            })
          })
          .catch(error => {
            dispatch({
              type: `${action}_${name}_ERROR`,
              payload: {
                error: error.message
              }
            })
          });
    }
  }
}

export const actionBuilder = (name, url) => {
  const actions = {
    FETCH_ALL: actionFactory(name, actionTypes.FETCH_ALL, () => {
      return axios.get(url);
    }),
    FETCH_ONE: param => actionFactory(name, actionTypes.FETCH_ONE, () => {
      return axios.get(url + param);
    }),
    ADD: body => actionFactory(name, actionTypes.ADD, () => {
      return axios.post(url, body);
    }),
    DELETE: param => actionFactory(name, actionTypes.DELETE, () => {
      return axios.delete(url + param);
    }, param)
  }

  return actions;
}