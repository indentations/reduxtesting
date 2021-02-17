import {CHANGE_DATA ,INCREMENT,DECREMENT,RESET } from "../constants"
export const changedata=(data)=>{
    return {
        type:CHANGE_DATA,
        data:data
    }
}


export const increment=()=>{
    return {
        type:INCREMENT
    }
}

export const decrement=()=>{
    return {
        type:DECREMENT
    }
 
}

export const reset=()=>{
    return {
        type:RESET
    }
    
}
