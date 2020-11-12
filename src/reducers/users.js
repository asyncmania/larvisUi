import { ADD_USERS, UPDATE_USER } from "../actions/users";

export default function users(state = [], action) {
  switch (action.type) {
    case ADD_USERS:
      return action.payload;

    case UPDATE_USER:
      return state.map((user) =>
        user.user_id !== action.payload.user_id
          ? user
          : {
              ...user,
              name: action.payload.name,
              password: action.payload.password,
            }
      );

    default:
      return state;
  }
}
