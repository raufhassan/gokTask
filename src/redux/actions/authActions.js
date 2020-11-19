import { SET_CURRENT_USER } from "./types";

export const signUp = (val) => (dispatch) => {
  dispatch({
    type: SET_CURRENT_USER,
    payload: val,
  });
};
