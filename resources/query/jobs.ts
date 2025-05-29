import { queryOptions } from "@tanstack/react-query";
import { api } from "../axios";

export const jobsQueryOptions = () =>
  queryOptions({ queryKey: ["jobs"], queryFn: getJobs });

async function getJobs() {
  const { data } = await api.get("/jobs");
  return data;
}
