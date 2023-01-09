import axios from "axios";
import authHeader from "./auth-header";

import { API_URL } from "../constants/constant";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getHomestats = async () => {
  return await axios.get(API_URL + "homestat", { headers: authHeader() });
};

const saveNewHomestat = (user) => {
  return axios.post(API_URL + "homestat", user, { headers: authHeader() });
};

const verifyHomestat = (user) => {
  return axios.post(API_URL + "homestat/one", user, { headers: authHeader() });
};

const updateNewHomestat = (user) => {
  return axios.put(API_URL + "homestat/"+user.id, user, { headers: authHeader() });
};

const deleteSingleHomestat = async (user) => {
 // return await axios.delete(API_URL + "users/"+user, {id: user}, { headers: authHeader() });
 
};

const softDeleteSingleHomestat = async (user) => {
   return await axios.put(API_URL + "homestat/delete/"+user, {id: user}, { headers: authHeader() });
  
 };


export default {
  getPublicContent,
  getHomestats,
  saveNewHomestat,
  API_URL,
  updateNewHomestat,
  verifyHomestat,
  softDeleteSingleHomestat,
};