import { ADD_ACQUISITIONS } from "../actions/acquisitions";

export default function acquisitions(state = {}, action) {
  switch (action.type) {
    case ADD_ACQUISITIONS:
      return {
        ...state,
        timestamps: action.payload.timestamps,
        sites: action.payload.sites
      }

    default:
      return state;
  }
}