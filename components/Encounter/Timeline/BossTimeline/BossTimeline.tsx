import css from "./BossTimeline.module.css";
import Timestamp from "./Timestamp/Timestamp";
import classNames from "classnames";
import { gridSize } from "@/src/domain/globals";
import { Encounter } from "@/src/domain/types";
interface TimeDisplayProps {
  encounter: Encounter;
}

export function BossTimeline({ encounter }: TimeDisplayProps) {
  function computeSecond(first) {
    const L = 10; // Approximate plateau value, adjust as needed
    let offsetK;

    switch (first) {
      case 8:
        offsetK = 1;
        break;
      case 16:
        offsetK = 3;
        break;
      case 32:
        offsetK = 4.4444;
        break;
      case 64:
        offsetK = 5.684;
        break;
      case 128:
        offsetK = 6.8205;
        break;
    }

    const K = Math.log2(gridSize) - offsetK; // Controls how quickly it flattens, tweak to fit

    return (L * Math.log2(first)) / (K + Math.log2(first));
  }
  return (
    <div className={css.timeDisplay}>
      <div
        className={css.timelineNumbers}
        style={{ gap: gridSize * computeSecond(gridSize) - 4 }}
      >
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
