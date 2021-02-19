import { combineReducers } from "redux";
import CounterReducers from "./counterReducer";
import Changedata from "./changedataReducer";
export default combineReducers({
  cr: CounterReducers,
  dr: Changedata,
});
