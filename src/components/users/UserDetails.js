import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUser } from "../../actions/users";

function UserDetails() {
  const dispatch = useDispatch();
  const { user_id } = useParams();
  const name = useSelector(state => state.userDetails.name)

  useEffect(() => {
    dispatch(fetchUser(user_id));
  }, [user_id]);

  return (
    <div className="user-details">
      <p>This is the detail page for {name} </p>
    </div>
  );
}

export default UserDetails;
