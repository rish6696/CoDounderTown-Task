import { combineReducers } from "redux";
import {
  LOGIN_ATTEMPT,
  LOGOUT_ATTEMPT,
  PAGE_RESIZE_ACTION,
  SET_SERVER_DOWN,
} from "../Actions/types";

const pageWidth = (state = { value: 0 }, action) => {
  switch (action.type) {
    case PAGE_RESIZE_ACTION:
      return {
        ...state,
        value: action.payload,
      };

    default:
      return state;
  }
};

const serverInfo = (state = { serverDown: false }, action) => {
  switch (action.type) {
    case SET_SERVER_DOWN:
      return {
        ...state,
        serverDown: true,
      };

    default:
      return state;
  }
};

const authReducer = (
  state = {
    authStatus: {
      userLoggedIn: false,
      userNameAlphabet: "",
    },
  },
  action
) => {
  switch (action.type) {
    case LOGIN_ATTEMPT:
      return {
        ...state,
        authStatus: {
          ...action.payload,
        },
      };

    case LOGOUT_ATTEMPT:
      return {
        ...state,
        authStatus: {
          userLoggedIn: false,
          userNameAlphabet: "",
        },
      };

    default:
      return state;
  }
};

export default combineReducers({ pageWidth, serverInfo,authReducer });
