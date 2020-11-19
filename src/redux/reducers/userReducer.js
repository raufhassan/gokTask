import { FETCH_USER, USER_ERROR } from "../actions/types";

const initialState = {
  users: [],
  isLoading: true,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      };
    case USER_ERROR:
      return {
        error: action.payload,
      };

    default:
      return state;
  }
}
