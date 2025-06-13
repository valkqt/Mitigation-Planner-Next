import { Encounter } from "@/resources";
import { BossTimeline } from "./BossTimeline/BossTimeline";
import { BossRow } from "./Row/BossRow";

interface TimelineProps {
  encounter: Encounter;
}

export function Timeline({ encounter }: TimelineProps) {
  return (
    <>
      <BossTimeline encounter={encounter} />
      <BossRow encounter={encounter} />
    </>
  );
}
