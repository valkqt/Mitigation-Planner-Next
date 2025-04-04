import { Encounter, Job, PlayerSkill, Segment } from "@/resources";
import { BossTimeline } from "./BossTimeline/BossTimeline";
import { BossRow } from "./Row/BossRow";
import { Row } from "./Row/Row";
import { ReactNode } from "react";

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
