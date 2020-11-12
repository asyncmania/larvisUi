import thunk from 'redux-thunk'
import { applyMiddleware } from "redux";
import DataCache from './dataCache';


const middlewares = [];

  middlewares.push(
    thunk.withExtraArgument({
      dataCache: new DataCache()
    }),
  );


export default applyMiddleware(...middlewares)