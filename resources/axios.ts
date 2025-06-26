import axios from "axios";

export const api = axios.create({
  baseURL: process.env.AXIOS_BASEURL,
  timeout: 5000,
  headers: {},
});
