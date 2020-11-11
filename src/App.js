import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/users/Login";
import Users from "./components/users/Users"
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute'
function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Router>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/users">
            <Users />
          </PrivateRoute>
        </Router>
      </main>
      <Footer />

    </>
  );
}

export default App;
