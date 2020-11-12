import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
      <Link className="menu-item" to="/login">
        Login
      </Link>
    );
  }

  return (
    <header>
      <div className="menu">
        <div className="logo">Larvis UI</div>
        <ul className="menu-items">
          <Link className="menu-item" to="/">
            Home
          </Link>
          <Link className="menu-item" to="/users">
            Users
          </Link>
          <Link to="/acquisitions" className="menu-item">
            Aquisitions
          </Link>
          <AuthButton />
        </ul>
      </div>
    </header>
  );
}

export default Header;
