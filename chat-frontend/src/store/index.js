import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import authReducer from "./reducers/auth";

const reducer = combineReducers({
  authReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  //   initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
