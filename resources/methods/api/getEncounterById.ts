import { api, Preset } from "@/resources";
import { useCurrentPreset } from "@/hooks/useCurrentPreset";
import { ParamValue } from "next/dist/server/request/params";

export function GetEncounterById() {}

export function getPresetById(params: ParamValue): void {
  const preset = useCurrentPreset();
  api.get(`/presets/${params}`).then((res) => {
    const result = res.data;
    if (result) {
      preset.setId(result.id);
      preset.setName(result.name);
      preset.setFlags(result.flags);
      preset.setSegments(result.segments);
    }
  });
}
