// import { ADD_TO_CART } from '../constants'
import { CHANGE_DATA} from "../constants";

const initialState = {
    name:"ali",
    data:{
        name:"ali",
        age:20,
        address:"islamabad"
    }
};

export default function Changedata(state = initialState, action) {

    console.log("action.payload: ChangedataReducer", action);
    console.log("state in ChangedataReducer:", state);
    switch (action.type) {
        case CHANGE_DATA:
            return {data: action.payload}
            // return {
            //     ...state,
            //     data: action.payload
            // };
            break;
        default:
            return state
    };
}

