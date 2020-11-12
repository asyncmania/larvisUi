import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/users/Login";
import Users from "./components/users/Users";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Acquisitions from "./components/acquisitions/Acquisitions";
import UserDetails from "./components/users/UserDetails";
function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="main-content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/login">
              <Login />
            </Route>

            <PrivateRoute exact path="/users">
              <Users />
            </PrivateRoute>

            <PrivateRoute exact path="/users/:user_id">
              <UserDetails />
            </PrivateRoute>

            <PrivateRoute path="/acquisitions">
              <Acquisitions />
            </PrivateRoute>

            <Route path="*">
              <h1 className="not-found">
                404, Sorry Looks like we can't find the page you are looking
                for! 😢
              </h1>
            </Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
