import { ADD_USER } from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        user_id: action.payload.user_id,
        name: action.payload.name
      };

    default:
      return state;
  }
}
