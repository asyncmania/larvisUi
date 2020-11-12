import { SHOW_ERROR, CLEAR_ERROR } from "../actions/error";

export default function error(state = false, action) {

  switch (action.type) {
    case SHOW_ERROR:
      return true;
    case CLEAR_ERROR:
      return false;
    default:
      return state;
  }
}