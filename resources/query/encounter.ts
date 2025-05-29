import { queryOptions } from "@tanstack/react-query";
import { api } from "../axios";

export const encounterQueryOptions = ({ encounterId, enabled }) =>
  queryOptions({
    queryKey: ["encounter", encounterId],
    queryFn: getEncounter,
    enabled,
  });

async function getEncounter({ queryKey }) {
  const [_, encounterId] = queryKey;
  console.log(`/encounters/${encounterId}`);
  const { data } = await api.get(`/encounters/${encounterId}`);
  return data;
}
