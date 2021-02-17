// import { ADD_TO_CART } from '../constants'
import { CHANGE_NAME } from "../constants";

const initialState = {
  name: "ali",
  // age:22,
  // address:"ali lives in lahore",
};

export default function AllReducers(state = initialState, action) {
    switch (action.type) {
        case CHANGE_NAME:
            // console.warn("reducer",action)
            return {
                ...state,
                name: action.payload
            }
        default:
            return state
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
