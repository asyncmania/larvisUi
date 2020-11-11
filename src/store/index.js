import { createStore } from "redux";
import middleware from '../middlewares'
import reducer from '../reducers'


export default createStore(reducer, middleware)