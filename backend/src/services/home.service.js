import axios from "axios";
import authHeader from "./auth-header";

import { API_URL } from "../constants/constant";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getStat = async () => {
  return await axios.get(API_URL + "stat", { headers: authHeader() });
};




export default {
  getPublicContent,
  getStat,
  API_URL
 
};