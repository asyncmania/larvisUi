import thunk from 'redux-thunk'
import { applyMiddleware } from "redux";
import DataCache from './dataCache';
import Http from './http'

const BASE_URL = 'http://localhost:8080'

const middlewares = [];

  middlewares.push(
    thunk.withExtraArgument({
      dataCache: new DataCache(),
      http: new Http(BASE_URL)
    }),
  );


export default applyMiddleware(...middlewares)