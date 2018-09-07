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

export const actionBuilder = (name) => {
  const actions = {
    FETCH_ALL: actionFactory(name, actionTypes.FETCH_ALL, () => {
      return axios.get(config.URL + name);
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

export const rateActionFactory = (name, action, thunk, id, value = null) => () => {
  return dispatch => {
    dispatch({
      type: `${action}_${name}_RATE_BEGIN`
    });

    switch (action) {
      case actionTypes.ADD:
        return dispatch(thunk)
          .then(() => {
            dispatch({
              type: `${action}_${name}_RATE_SUCCESS`,
              id: id,
              value: value
            })
          })
          .catch(error => {
            dispatch({
              type: `${action}_${name}_RATE_ERROR`,
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

export const rateActionBuilder = (name, url) => {
  const actions = {    
    ADD: (id, rate) => actionFactory(name + "_RATE", actionTypes.ADD, () => {
      console.log('xd', rate);
      return axios.post(url + id + "/rate/", rate);
    })    
  }

  return actions;
}