import axios from "axios";

export const api = axios.create({
  baseURL: "https://mit-planner.vercel.app/api",
  timeout: 5000,
  headers: {},
});
