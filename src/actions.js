import Api from "./api";
import {LOAD_USERS_ERROR, LOAD_USERS_LOADING, LOAD_USERS_SUCCESS} from "./constants";



export const loadUsers = () => dispatch => {
  dispatch({ type: LOAD_USERS_LOADING });
  Api.getUsers()
    .then(response =>
      dispatch({ type: LOAD_USERS_SUCCESS, data: response.data })
    )
    .catch(error => {
      dispatch({
        type: LOAD_USERS_ERROR,
        error: error.message || "Unexpected Error"
      });
    });
};
