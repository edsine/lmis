import axios from "axios";
import authHeader from "./auth-header";

import { API_URL } from "../constants/constant";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getIndicatorDetails = async () => {
  return await axios.get(API_URL + "indicator-details", {
    headers: authHeader(),
  });
};

const saveIndicatorDetails = (indicatorDetails) => {
  return axios.post(API_URL + "indicator-details", indicatorDetails, {
    headers: authHeader(),
  });
};

const updateIndicatorDetails = (indicatorDetails) => {
  return axios.put(API_URL + "indicator-details/" + indicatorDetails.id, indicatorDetails, {
    headers: authHeader(),
  });
};

const deleteIndicatorDetails = async (indicatorDetails) => {
  // return await axios.delete(API_URL + "indicator-details/"+indicatorDetails, {id: indicatorDetails}, { headers: authHeader() });
};

const softDeleteIndicatorDetails = async (indicatorDetails) => {
  return await axios.put(
    API_URL + "indicator-details/delete/" + indicatorDetails,
    { id: indicatorDetails },
    { headers: authHeader() }
  );
};

export default {
  getPublicContent,
  getIndicatorDetails,
  saveIndicatorDetails,
  API_URL,
  updateIndicatorDetails,
  deleteIndicatorDetails,
  softDeleteIndicatorDetails,
};
