import { PAGE_RESIZE_ACTION, SIGNUP_ATTEMPT } from "./types";
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
      const { data } = await axiosInstance.post("/auth/user/signUp", {
        email,
        password,
        name,
      });
      console.log(data);
      history.push("/login");

      dispatch({
        type: SIGNUP_ATTEMPT,
        payload: { status: true },
      });
    } catch (error) {
      alert("There is some error");
    }
  };
};
