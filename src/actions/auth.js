import { showError } from "./error";
import { stopLoading } from "./loading";

export const LOGIN = "LOGIN";

export const LOGOUT = "LOGOUT";

function loginAction({ token, name }) {
  return {
    type: LOGIN,
    payload: { token, name },
  };
}

function logoutAction() {
  return {
    type: LOGOUT
  }
}

export function login({ username, password }) {
  return (dispatch, getState, { http }) => {
      http.postData('/token', { user_id: username, password })
      .then(({ access }) => {
        dispatch(loginAction({ token: access, name: username }));
        dispatch(stopLoading());
        localStorage.setItem("token", access);
      })
      .catch((error) => {
        dispatch(stopLoading());
        dispatch(showError())
      });
  };
}

export function logout() {
  return (dispatch) => {
      dispatch(logoutAction())
      localStorage.clear()
  }
}
