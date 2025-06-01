import { queryOptions } from "@tanstack/react-query";
import { api } from "../axios";

export const presetIdQueryOptions = (presetId) =>
  queryOptions({ queryKey: ["preset", presetId], queryFn: getPresetById });

async function getPresetById({ queryKey }) {
  const [, presetId] = queryKey;
  const { data } = await api.get(`/presets/${presetId}`);

  return data;
}
