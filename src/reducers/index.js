import auth from './auth'
import loading from './loading'
import { combineReducers } from "redux";


export default combineReducers({
  currentUser: auth,
  loading
})