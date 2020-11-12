import auth from './auth'
import loading from './loading'
import users from './users'
import userDetails from './userDetails'
import acquisitions from './acquisitions'
import error from './error'
import { combineReducers } from "redux";


export default combineReducers({
  currentUser: auth,
  users,
  userDetails,
  acquisitions,
  loading,
  error
})