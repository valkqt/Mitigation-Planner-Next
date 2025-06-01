import { useActivationFlagsContext } from "@/contexts";
import { Preset, Segment, defaultSegments } from "@/resources";
import { useState } from "react";

export function useCurrentPreset() {
  const [segments, setSegments] =
    useState<Record<number, Segment[]>>(defaultSegments);
  const [flags, setFlags] = useActivationFlagsContext();
  const [name, setName] = useState<string>("New Preset");
  const [id, setId] = useState<string>("new");
  const [object, setObject] = useState<Preset>({
    id: id,
    name: name,
    flags: flags,
    segments: segments,
  });

  return {
    id,
    setId,
    name,
    setName,
    segments,
    setSegments,
    flags,
    setFlags,
    object,
    setObject,
  };
}
