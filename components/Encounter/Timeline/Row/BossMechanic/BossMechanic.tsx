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
        onMouseOver={() => setIsHover(true)}
      >
        {node.mechanic.name}
      </div>
      <div
        className={classNames({ toggleDisplay: !isHover }, css.tooltip)}
        style={{
          left: 64 + node.timestamp * gridSize,
        }}
        onMouseOut={() => setIsHover(false)}
      >
        {node.mechanic.name}
      </div>
    </>
  );
}
