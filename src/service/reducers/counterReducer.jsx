import { INCREMENT,DECREMENT,RESET} from "../constants";
const counterState={
    counter:0
}

export default function(state=counterState,action){
switch(action.type)
{
    case INCREMENT:
        return{
            ...state,
            counter:state.counter+1
        }
        breake;
        case DECREMENT:
            return{
                ...state,
                counter:state.counter-1
            }
            breake;
            case RESET:
                return{
                    counter:0
                }
                breake;
                default:
                    return state

}
}