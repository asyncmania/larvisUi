import { Link } from "react-router-dom";

function User({ user_id, name }) {
  return (
    <div className="user">
      <p>ID: {user_id}</p>
      <p>Name: {name}</p>
      <Link to={{ pathname: `/users/${user_id}` }}>View Details</Link>
    </div>
  );
}

export default User;

/* 



*/