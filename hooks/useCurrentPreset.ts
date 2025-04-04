import { useActivationFlagsContext } from "@/contexts";
import { Segment, defaultSegments } from "@/resources";
import { useState } from "react";

export function useCurrentPreset() {
  const [segments, setSegments] =
    useState<Record<number, Segment[]>>(defaultSegments);
  const [flags, setFlags] = useActivationFlagsContext();

  return {
    segments,
    setSegments,
    flags,
    setFlags,
  };
}
