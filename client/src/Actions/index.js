import { LOGIN_ATTEMPT, PAGE_RESIZE_ACTION, SIGNUP_ATTEMPT } from "./types";
import { axiosInstance } from "../axiosService";

export const setWindowSize = (size) => {
  return {
    type: PAGE_RESIZE_ACTION,
    payload: size,
  };
};

export const attemptSignUp = ({ email, password, name, history }) => {
  return async (dispatch) => {
    try {
      const { data } = await axiosInstance.post(
        "/auth/user/signUp",
        JSON.stringify({
          email,
          password,
          name,
        })
      );
      history.push("/login");

      dispatch({
        type: SIGNUP_ATTEMPT,
        payload: { status: true },
      });
    } catch (error) {
      alert("Some Thing Went Wrong");
    }
  };
};

export const attemptLogin = ({ email, password, history }) => {
  return async (dispatch) => {
    try {
      const { data } = await axiosInstance.post(
        "/auth/user/login",
        JSON.stringify({
          email,
          password,
        })
      );
      history.push("/");

      dispatch({
        type: LOGIN_ATTEMPT,
        payload: { status: true },
      });
    } catch (error) {
      console.log(error.response);
      if (error.response.data && error.response.data.status == false) {
        alert(error.response.data.message);
      }else{
        alert('Something went wrong')
      }
    }
  };
};
