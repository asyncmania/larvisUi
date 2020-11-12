import { startLoading, stopLoading } from "./loading";

export const ADD_USERS = "ADD_USERS";
export const ADD_USER = "ADD_USER";

function addUsers(users) {
  return {
    type: ADD_USERS,
    payload: users,
  };
}

function addUser(user) {
  return {
    type: ADD_USER,
    payload: user,
  };
}

export function fetchUsers() {
  return (dispatch, getState, { dataCache }) => {
    
    const users = dataCache.data["users"] || []
    if (users.length) return dispatch(addUsers(users));

    dispatch(startLoading());
    fetch("http://localhost:8080/users", {
      headers: {
        Authorization: `Bearer ${getState().currentUser.token}`,
      },
    })
      .then((data) => data.json())
      .then((users) => {
        dataCache.store({
          key: "users",
          value: users,
        });
        dispatch(stopLoading());
        dispatch(addUsers(users));
      })
      .catch((error) => console.log(error));
  };
}

export function fetchUser(user_id) {
  return (dispatch, getState) => {
    dispatch(startLoading());
    fetch(`http://localhost:8080/users/${user_id}`, {
      headers: {
        Authorization: `Bearer ${getState().currentUser.token}`,
      },
    })
      .then((data) => data.json())
      .then((user) => {
        dispatch(stopLoading());
        dispatch(addUser(user));
        console.log(getState());
      })
      .catch((error) => console.log(error));
  };
}
