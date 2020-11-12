import { ADD_USERS } from "../actions/users";


export default function users(state = [], action) {

  switch (action.type) {
    case ADD_USERS:
      return action.payload

    default:
      return state;
  }
  
}