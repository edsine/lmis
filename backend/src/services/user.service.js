import axios from "axios";
import authHeader from "./auth-header";

import { API_URL } from "../constants/constant";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = async () => {
  return await axios.get(API_URL + "users", { headers: authHeader() });
};

const saveNewUser = (user) => {
  return axios.post(API_URL + "users", user, { headers: authHeader() });
};

const verifyUserEmail = (user) => {
  return axios.post(API_URL + "users/email", user, { headers: authHeader() });
};

const updateNewUser = (user) => {
  return axios.put(API_URL + "users/"+user.id, user, { headers: authHeader() });
};

const deleteSingleUser = async (user) => {
 // return await axios.delete(API_URL + "users/"+user, {id: user}, { headers: authHeader() });
 
};

const softDeleteSingleUser = async (user) => {
   return await axios.put(API_URL + "users/delete/"+user, {id: user}, { headers: authHeader() });
  
 };

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserBoard,
  saveNewUser,
  deleteSingleUser,
  getModeratorBoard,
  getAdminBoard,
  API_URL,
  updateNewUser,
  verifyUserEmail,
  softDeleteSingleUser,
};