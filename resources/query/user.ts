import { queryOptions } from "@tanstack/react-query";
import { api } from "../axios";
import { Preset } from "..";

export const userPresetsQueryOptions = ({
  userId,
  enabled,
}: {
  userId: string | undefined;
  enabled?: boolean;
}) =>
  queryOptions({
    queryKey: ["userPresets", userId],
    queryFn: getUserPresets,
    enabled,
  });

async function getUserPresets({ queryKey }): Promise<Preset[]> {
  const [_, userId] = queryKey;
  const { data } = await api.get(`/users/${userId}/presets`);
  return data;
}
