import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
  const currentUser = useSelector((state) => state.currentUser);

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return currentUser.token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              referer: { from: location },
            }}
          />
        );
      }}
    />
  );
}

export default PrivateRoute;
