import axios from "axios";

export const axiosInstance = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://amazon-api-deploy-zmv6.onrender.com",
});
