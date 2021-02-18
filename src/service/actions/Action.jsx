import { CHANGE_NAME } from "../constants";
export const changeName = (data) => {
  return {
    type: CHANGE_NAME,
    payload: data,
  };
};
