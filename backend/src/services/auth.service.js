import axios from "axios";

import { API_URL } from "../constants/constant";

const register = (username, email, password) => {
  return axios.post(API_URL + "auth/signup", {
    username,
    email,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "auth/signin", {
      email,
      password,
    },{
             headers: {
                // 'Accept': 'application/json',
           'Content-Type': 'application/json',
                 //'Authorization': 'Bearer '+token
             },      
         })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
