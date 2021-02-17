// import { ADD_TO_CART } from '../constants'
import { CHANGE_DATA, INCREMENT,DECREMENT, RESET } from "../constants";

const initialState = {
    name:"ali",
    data:{
        name:"ali",
        age:20,
        address:"islamabad"
    },
  counter: 0,
  // age:22,
  // address:"ali lives in lahore",
};

export default function AllReducers(state = initialState, action) {
    console.log("action.payload:",action.payload)
    switch (action.type) {
        case CHANGE_DATA:
            return {
                ...state,
                name: action.payload
            }

        case INCREMENT:
            return {
                ...state,
                counter: state.counter+1
            }
            case DECREMENT:
                
                return {
                    ...state,
                    counter: state.counter-1
                }
                case RESET:
               
                    return {

                        counter: 0
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
