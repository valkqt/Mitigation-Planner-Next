import css from "./BossTimeline.module.css";
import TimelineDisplay from "./TimelineDisplay/TimelineDisplay";
import { Encounter } from "@/resources";
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
