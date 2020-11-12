import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/users/Login";
import Users from "./components/users/Users";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Acquisitions from "./components/acquisitions/Acquisitions";
import UserDetails from "./components/users/UserDetails";
function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="main-content">
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <PrivateRoute exact path="/users">
            <Users />
          </PrivateRoute>

          <PrivateRoute path="/users/:user_id">
            <UserDetails />
          </PrivateRoute>

          <PrivateRoute path="/acquisitions">
            <Acquisitions />
          </PrivateRoute>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
