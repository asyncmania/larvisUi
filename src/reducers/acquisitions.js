import { ADD_ACQUISITIONS } from "../actions/acquisitions";

export default function acquisitions(state = [], action) {
  switch (action.type) {
    case ADD_ACQUISITIONS:
      return action.payload

    default:
      return state;
  }
}