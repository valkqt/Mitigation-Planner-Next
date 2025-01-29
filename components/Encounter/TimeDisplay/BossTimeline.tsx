import css from "./BossTimeline.module.css";
import { Encounter } from "@/resources/types";
import TimelineDisplay from "./TimelineDisplay/TimelineDisplay";

interface TimeDisplayProps {
  encounter: Encounter;
}

export function BossTimeline({ encounter }: TimeDisplayProps) {
  return (
    <div className={css.timeDisplay}>
      <TimelineDisplay encounter={encounter} />
    </div>
  );
}
