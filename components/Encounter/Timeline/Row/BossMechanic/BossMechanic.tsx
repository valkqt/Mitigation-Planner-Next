import { Timeline } from "@/resources/index";
import css from "./BossMechanic.module.css";

import { gridSize } from "@/resources/index";
import classNames from "classnames";

interface BossMechanicRowProps {
  node: Timeline;
}

export default function BossMechanic({ node }: BossMechanicRowProps) {
  return (
    <>
      <div
        className={css.container}
        style={{
          left: 64 + node.timestamp * gridSize,
          zIndex: node.id,
        }}
      >
        <div className={css.mechanicLabel}>{node.mechanic.name}</div>
        {node.mechanic.castTime > 0 && (
          <div
            className={css.castbar}
            style={{ width: node.mechanic.castTime * gridSize + "px" }}
          ></div>
        )}
      </div>
      <div
        className={classNames(css.tooltip)}
        style={{
          left: 64 + node.timestamp * gridSize + 4,
          top: 28,
        }}
      >
        {node.mechanic.name}
      </div>
    </>
  );
}
