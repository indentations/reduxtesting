// import { ADD_TO_CART } from '../constants'
import { CHANGE_NAME } from "../constants";

const initialState = {
  name: "ali",
  user: {
    name: "users",
    age: 30,
    address: "lhr",
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAME:
      // console.warn("reducer",action)
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}
