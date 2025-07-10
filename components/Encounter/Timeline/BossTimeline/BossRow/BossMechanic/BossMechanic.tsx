import { Timeline } from "@/src/domain/types";
import css from "./BossMechanic.module.css";

import { gridSize } from "@/src/domain/globals";;
import classNames from "classnames";
import { useRef, useState } from "react";
import { createPortal } from "react-dom";

interface BossMechanicRowProps {
  node: Timeline;
}

export default function BossMechanic({ node }: BossMechanicRowProps) {
  const [show, setShow] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  function getPosition() {
    if (!ref.current) {
      return {};
    }
    const position = ref.current.getBoundingClientRect();

    return {
      top: position.top + 28,
      left: position.left + 4,
    };
  }

  return (
    <>
      <div
        className={css.container}
        style={{
          left: node.timestamp * gridSize,
          zIndex: node.id,
        }}
        ref={ref}
        onMouseOver={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <div className={css.mechanicLabel}>{node.mechanic.name}</div>
        {node.castTime > 0 && (
          <div
            className={css.castbar}
            style={{ width: node.castTime * gridSize + "px" }}
          ></div>
        )}
      </div>
      {show &&
        createPortal(
          <div className={classNames(css.tooltip)} style={getPosition()}>
            {node.mechanic.name}
          </div>,
          document.body
        )}
    </>
  );
}
