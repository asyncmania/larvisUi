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
  return (dispatch, getState) => {
    fetch("http://localhost:8080/token", {
      method: "POST",
      body: JSON.stringify({ user_id: username, password }),
    })
      .then((data) => data.json())
      .then(({ access }) => {
        dispatch(loginAction({ token: access, name: username }));
        dispatch(stopLoading());
        localStorage.setItem("token", access);
      })
      .catch((error) => console.log(error));
  };
}

export function logout() {
  return (dispatch) => {
      dispatch(logoutAction())
      localStorage.clear()
  }
}
