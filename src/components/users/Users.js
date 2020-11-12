import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../actions/users";
import User from "./User";

function Users() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="users">
      {users.map((user) => (
        <User key={user.user_id} {...user} />
      ))}
    </div>
  );
}

export default Users;
