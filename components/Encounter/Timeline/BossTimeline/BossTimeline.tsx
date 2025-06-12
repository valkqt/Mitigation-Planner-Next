import css from "./BossTimeline.module.css";
import Timestamp from "./Timestamp/Timestamp";
import classNames from "classnames";
import { Encounter, gridSize } from "@/resources";
interface TimeDisplayProps {
  encounter: Encounter;
}

export function BossTimeline({ encounter }: TimeDisplayProps) {
  return (
    <div className={css.timeDisplay}>
      <div className={css.timelineNumbers} style={{ gap: gridSize * 6 - 4 }}>
        {Array.from({ length: encounter.duration + 1 }, (_, index) => {
          const hours = Math.floor(index / 3600);
          const minutes = Math.floor((index - hours * 3600) / 60);
          const seconds = index - hours * 3600 - minutes * 60;

          if (index % 10 === 0) {
            return (
              <Timestamp seconds={seconds} minutes={minutes} key={index} />
            );
          }
        })}
      </div>
      <div className={css.tickContainer}>
        {Array.from({ length: encounter.duration + 1 }, (_, index) => {
          if (index % 10 === 0) {
            return (
              <div
                className={classNames(css.tick, css.tenSeconds)}
                key={index}
                style={{ width: gridSize }}
              ></div>
            );
          } else if (index % 5 === 0) {
            return (
              <div
                className={classNames(css.tick, css.fiveSeconds)}
                style={{ width: gridSize }}
                key={index}
              ></div>
            );
          } else {
            return (
              <div
                className={classNames(css.tick, css.oneSecond)}
                style={{ width: gridSize }}
                key={index}
              ></div>
            );
          }
        })}
      </div>
    </div>
  );
}
