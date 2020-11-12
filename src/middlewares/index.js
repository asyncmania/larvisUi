import thunk from 'redux-thunk'
import { applyMiddleware } from "redux";
import DataCache from './dataCache';
import Http from './http'

const middlewares = [];

  middlewares.push(
    thunk.withExtraArgument({
      dataCache: new DataCache(),
      http: new Http('http://localhost:8080')
    }),
  );


export default applyMiddleware(...middlewares)