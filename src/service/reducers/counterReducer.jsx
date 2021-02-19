// import { ADD_TO_CART } from '../constants'
import { INCREMENT, DECREMENT, RESET } from "../constants";

const initialState = {
  counter: 0,
};

export default function AllReducers(state = initialState, action) {
  console.log("action.payload: counterREducer", action);
  console.log("state in counterReducer:", state);
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
      
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
      
    case RESET:
      return {
        counter: 0,
      };
      
    default:
      return state;
  }
}

// const AllReducers = (state = initialState, action) => {
//   console.log("state in reducer:", state);
//   console.log("action in reducer:", action);

//   // return {
//   //                 ...state,
//   //                 name:action.payload
//   //             }
//   switch (action.type) {
//     case CHANGE_NAME:
//       return {
//         ...state,
//         name: action.payload,
//       };
//     // break;
//     default:
//       return state;
//   }
// };
// export default AllReducers;
