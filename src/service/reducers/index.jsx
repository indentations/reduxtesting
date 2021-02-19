import { combineReducers} from "redux";
import AllReducer from "./Allreducers.jsx";
import CounterReducer from "./counterReducer";
export default combineReducers({
  a:AllReducer,
  b:CounterReducer
});
// export default RootReducer