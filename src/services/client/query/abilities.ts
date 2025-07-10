import { queryOptions } from "@tanstack/react-query";
import { api } from "../axios";

export const abilitiesQueryOptions = () =>
  queryOptions({ queryKey: ["abilities"], queryFn: getAbilities });

async function getAbilities() {
  const { data } = await api.get("/abilities");
  return data;
}
