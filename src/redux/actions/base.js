import axios from 'axios';
import * as config from '../../utils/axios-config';

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
          .then((response) => {
            dispatch({
              type: `${action}_${name}_SUCCESS`,
              payload: {
                entity: response.data
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

const initialParams = {
  pageNumber: 1,
  pageSize: 10,
  searchQuery: '',
  sortField: null,
  sortAscending: true
}

export const actionBuilder = (name) => {
  const actions = {
    FETCH_ALL: (params) => actionFactory(name, actionTypes.FETCH_ALL, () => {      
      return axios.get(config.URL + name, {
        params: {...initialParams, ...params}
      });
    }),
    FETCH_ONE: param => actionFactory(name, actionTypes.FETCH_ONE, () => {
      return axios.get(config.URL + name + "/" + param);
    }),
    ADD: body => actionFactory(name, actionTypes.ADD, () => {
      return axios.post(config.URL + name, body);
    }),
    DELETE: param => actionFactory(name, actionTypes.DELETE, () => {
      return axios.delete(config.URL + name + "/" + param);
    }, param)
  }

  return actions;
}

export const subActionFactory = (name, action, subName, thunk, id) => () => {
  return dispatch => {
    dispatch({
      type: `${action}_${name}_${subName}_BEGIN`
    });

    switch (action) {
      case actionTypes.ADD:
        return dispatch(thunk)
          .then(response => {
            dispatch({
              type: `${action}_${name}_${subName}_SUCCESS`,
              payload: {
                id: id,
                data: response.data
              }
            })
          })
          .catch(error => {
            dispatch({
              type: `${action}_${name}_${subName}_ERROR`,
              payload: {
                error: error.message
              }
            })
          });
      case actionTypes.DELETE:
      default:
        return dispatch(thunk)
          .then(() => {
            dispatch({
              type: `${action}_${name}_${subName}_SUCCESS`,
              payload: {
                id: id
              }
            })
          })
          .catch(error => {
            dispatch({
              type: `${action}_${name}_${subName}_ERROR`,
              payload: {
                error: error.message
              }
            })
          });
    }
  }
}

export const libraryActionFactory = (name, action, thunk, email, id) => () => {
  return dispatch => {
    dispatch({
      type: `${action}_${name}_BEGIN`
    });

    switch (action) {
      case actionTypes.ADD:
        return dispatch(thunk)
          .then(response => {
            dispatch({
              type: `${action}_${name}_SUCCESS`,
              payload: {
                email: email,
                id: id,
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
      case actionTypes.DELETE:
      default:
        return dispatch(thunk)
          .then(() => {
            dispatch({
              type: `${action}_${name}_SUCCESS`,
              payload: {
                email: email,
                id: id
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