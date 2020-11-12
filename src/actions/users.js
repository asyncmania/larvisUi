import { showError } from "./error";
import { startLoading, stopLoading } from "./loading";

export const ADD_USERS = "ADD_USERS";
export const ADD_USER = "ADD_USER";
export const UPDATE_USER = "UPDATE_USER";

function getUsers(users) {
  return {
    type: ADD_USERS,
    payload: users,
  };
}

function getUser(user) {
  return {
    type: ADD_USER,
    payload: user,
  };
}

function editUser(user) {
  return {
    type: UPDATE_USER,
    payload: user,
  };
}

export function fetchUsers() {
  return (dispatch, getState, { dataCache, http }) => {
    const users = dataCache.data["users"] || [];
    if (users.length) return dispatch(getUsers(users));

    dispatch(startLoading());
    http.getData("/users", getState().currentUser.token)
      .then((users) => {
        dataCache.store({
          key: "users",
          value: users,
        });
        dispatch(stopLoading());
        dispatch(getUsers(users));
      })
      .catch((error) => dispatch(showError()));
  };
}

export function fetchUser(user_id) {
  return (dispatch, getState, { http }) => {
    dispatch(startLoading());
    http.getData(`/users/${user_id}`, getState().currentUser.token)
      .then((user) => {
        dispatch(stopLoading());
        dispatch(getUser(user));
      })
      .catch((error) => dispatch(showError()));
  };
}

export function updateUser(user_id, name, password) {
  return (dispatch, getState, { dataCache, http }) => {
    http.postData(
        `/users/${user_id}`,
        { name, password },
        getState().currentUser.token
      ).then(({ name, password }) => {
        dispatch(editUser({ name, password, user_id }));
        const users = dataCache.data["users"].map((user) =>
          user.user_id !== user_id ? user : { ...user, name, password }
        );
        dataCache.store({
          key: "users",
          value: users,
        });
      })
      .catch((error) => dispatch(showError()));
  };
}
