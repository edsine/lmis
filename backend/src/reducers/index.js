import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import todoReducers from './usersReducer';

export default combineReducers({
  auth,
  message,
  todoReducers,
});
