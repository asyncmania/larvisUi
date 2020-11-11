import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useLocation } from "react-router-dom";
import { login } from "../../actions/auth";
import { startLoading } from "../../actions/loading";


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const loading = useSelector(state => state.loading)
  const currentUser = useSelector(state => state.currentUser)
  const { referer } = useLocation()

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(startLoading());
    dispatch(login({ username, password }));
  };

  if(!!currentUser.token){
   return  <Redirect to={ referer?.from || "/"} />
  }

  return (
    <>
      <div className="login">
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">username</label>
          <input
            id="username"
            value={username}
            onChange={(evt) => setUsername(evt.target.value)}
            type="text"
            placeholder="username"
          />
          <label htmlFor="password">password</label>
          <input
            id="password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
            type="password"
            placeholder="password"
          />
          <button type="submit" disabled={loading}>{ loading ? 'Logging in...': 'Login'}</button>
        </form>
      </div>
    </>
  );
}

export default Login;
