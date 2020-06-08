import {
  LOAD_USERS_ERROR,
  LOAD_USERS_LOADING,
  LOAD_USERS_SUCCESS
} from "./constants";

const initialState = {
  data: [],
  loading: false,
  error: ""
};

export default function reduxThunkReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USERS_LOADING: {
      return Object.assign({}, state, {
        loading: true,
        error: ""
      });
    }
    case LOAD_USERS_SUCCESS: {
      return Object.assign({}, state, {
        data: action.data,
        loading: false
      });
    }
    case LOAD_USERS_ERROR: {
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      });
    }
    default: {
      return state;
    }
  }
}
