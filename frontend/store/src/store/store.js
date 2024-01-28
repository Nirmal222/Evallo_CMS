import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { mainReducer } from "./main-reducer/main-reducer";

const rootReducer = combineReducers({
  Global: mainReducer,
});
export const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
