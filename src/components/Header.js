import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/auth";

function Header() {
  const currentUser = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();

  function AuthButton() {
    return !!currentUser.token ? (
      <li onClick={() => dispatch(logout())} className="menu-item">
        Logout
      </li>
    ) : (
      <li className="menu-item">Login</li>
    );
  }

  return (
    <header>
      <div className="menu">
        <div className="logo">Larvis UI</div>
        <ul className="menu-items">
          <li className="menu-item">Users</li>
          <li className="menu-item">Aquisitions</li>
          <AuthButton />
        </ul>
      </div>
      {!!currentUser.name && (
        <div className="username">
          <p className="user-text">Welcome {currentUser.name}</p>
        </div>
      )}
    </header>
  );
}

export default Header;
