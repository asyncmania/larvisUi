import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { fetchUser, updateUser } from "../../actions/users";

function UserDetails() {
  const dispatch = useDispatch();
  const history = useHistory()
  const [edit, setEdit] = useState(false);
  const { user_id } = useParams();
  const loading = useSelector(state => state.loading)
  const name = useSelector((state) => state.userDetails.name);
  const [newName, setNewName] = useState('');
  const [password, setPassword] = useState("");

  useEffect(() => {
    dispatch(fetchUser(user_id));
  }, [user_id, dispatch]);


  if(loading){
    return <p>loading plaase wait...</p>
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    if(!newName) return
    if(!password) return
    dispatch(updateUser(user_id, newName, password))
    history.push('/users')
    
  }


  return (
    <div className="user-details">
      <p>This is the detail page for {name} </p>
      {edit ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            value={newName}
            onChange={(evt) => setNewName(evt.target.value)}
            type="text"
            placeholder="name"
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
            type="password"
            placeholder="password"
          />
          <button type="submit">Update</button>
        </form>
      ) : (
        <button onClick={() => setEdit(true)}>Edit {name}</button>
      )}
    </div>
  );
}

export default UserDetails;
