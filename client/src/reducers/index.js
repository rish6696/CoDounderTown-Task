import { combineReducers } from "redux";
import { PAGE_RESIZE_ACTION } from "../Actions/types";

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

export default combineReducers({pageWidth})
