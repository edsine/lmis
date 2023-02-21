import axios from "axios";
import authHeader from "./auth-header";

import { API_URL } from "../constants/constant";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getIndicators = async () => {
  return await axios.get(API_URL + "indicators", { headers: authHeader() });
};

const saveNewIndicator = (user) => {
  return axios.post(API_URL + "indicators", user, { headers: authHeader() });
};

const verifyIndicator = (user) => {
  return axios.post(API_URL + "indicators/one", user, { headers: authHeader() });
};

const updateNewIndicator = (user) => {
  return axios.put(API_URL + "indicators/"+user.id, user, { headers: authHeader() });
};

const deleteSingleIndicator = async (user) => {
 // return await axios.delete(API_URL + "users/"+user, {id: user}, { headers: authHeader() });
 
};

const softDeleteSingleIndicator = async (user) => {
   return await axios.put(API_URL + "indicators/delete/"+user, {id: user}, { headers: authHeader() });
  
 };


export default {
  getPublicContent,
  getIndicators,
  saveNewIndicator,
  API_URL,
  updateNewIndicator,
  verifyIndicator,
  softDeleteSingleIndicator,
};