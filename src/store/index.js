import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import middleware from '../middlewares'
import reducer from '../reducers'


export default createStore(reducer, composeWithDevTools(middleware))

