export const actionFactory = (name, action, thunk) => () => {
  return dispatch => {
    dispatch({
      type: `${action}_${name}_BEGIN`
    });

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
          type: `${action}_${name}_FAILURE`,
          payload: {
            error: error.message
          }
        })
      });
  }
}