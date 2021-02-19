import { CHANGE_NAME,INCREMENT,DECREMENT,RESET } from "../constants";
export const changeName = (data) => {
  return {
    type: CHANGE_NAME,
    payload: data,
  };
};

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