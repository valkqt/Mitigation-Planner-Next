import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_AXIOS_BASEURL,
  timeout: 5000,
  headers: {},
});
