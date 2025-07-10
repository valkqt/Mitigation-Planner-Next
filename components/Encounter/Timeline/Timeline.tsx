import { Encounter } from "@/src/domain/types";
import { BossTimeline } from "./BossTimeline";
import { BossRow } from "./BossTimeline/BossRow";

interface TimelineProps {
  encounter: Encounter;
}

export function Timeline({ encounter }: TimelineProps) {
  return (
    <>
      <BossRow encounter={encounter} />
      <BossTimeline encounter={encounter} />
    </>
  );
}
