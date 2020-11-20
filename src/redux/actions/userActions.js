import { FETCH_USER, USER_ERROR } from "./types";
import axios from "axios";

export const fetchUsers = () => (dispatch) => {
  axios
    .get(`https://randomuser.me/api?results=20`)
    .then((res) => {
      dispatch({
        type: FETCH_USER,
        payload: res.data.results,
      });
    })
    .catch((err) => {
      dispatch({
        type: USER_ERROR,
        payload: err,
      });
    });
};
