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
export const addProjectAPI = async (reqBody,reqHeader) => {
  return await commonAPI("POST", `${BASE_URL}/projects/add`, reqBody,reqHeader);
};

//home projects 
export const homeProjectAPI = async () => {
  return await commonAPI("GET", `${BASE_URL}/project/home-projects`);
};

//all projects
export const allProjectAPI = async (reqHeader,searchkey) => {
  return await commonAPI("GET", `${BASE_URL}/project/all-projects?search=${searchkey}`,"",reqHeader);
};

//user projects

export const userProjectAPI = async (reqHeader) => {
  return await commonAPI("GET", `${BASE_URL}/user/user-projects`,"",reqHeader);
};


//edit project

export const editProjectAPI = async (projectId,reqBody,reqHeader) => {
  // projectId is passed as path parameter
  return await commonAPI("PUT", `${BASE_URL}/project/edit/${projectId}`,reqBody,reqHeader);
};


//delete project
export const deleteProjectAPI = async (projectId,reqHeader) => {
  // projectId is passed as path parameter
  return await commonAPI("DELETE", `${BASE_URL}/projects/remove/${projectId}`,{},reqHeader);
};

//edit profile
export const editProfileAPI = async (reqBody,reqHeader) => {
  return await commonAPI("PUT", `${BASE_URL}/user/edit`,reqBody,reqHeader);
};

