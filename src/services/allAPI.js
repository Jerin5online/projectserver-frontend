import { BASE_URL } from "./baseurl";
import { commonAPI } from "./commonAPI";

//register api

export const registerAPI = async (user) => {
  return await commonAPI("POST", `${BASE_URL}/users/register`, user, "");
};

//login api

export const loginAPI = async (user) => {
  return await commonAPI("POST", `${BASE_URL}/users/login`, user, "");
};

//add project
export const addProjectAPI = async (reqBody) => {
  return await commonAPI("POST", `${BASE_URL}/projects/add`, reqBody, "");
};
