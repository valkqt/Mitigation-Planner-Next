import { Timeline } from "@/resources/index";
import css from "./BossMechanic.module.css";

import { gridSize } from "@/resources/index";
import { useState } from "react";
import classNames from "classnames";

interface BossMechanicRowProps {
  node: Timeline;
}

export default function BossMechanic({ node }: BossMechanicRowProps) {
  const [isHover, setIsHover] = useState(false);
  return (
    <>
      <div
        className={css.container}
        style={{
          left: 64 + node.timestamp * gridSize,
          zIndex: node.id,
        }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div className={css.label}>{node.mechanic.name}</div>
      </div>
      <div
        className={classNames({ toggleDisplay: !isHover }, css.tooltip)}
        style={{
          left: 64 + node.timestamp * gridSize,
        }}
      >
        {node.mechanic.name}
      </div>
    </>
  );
}
