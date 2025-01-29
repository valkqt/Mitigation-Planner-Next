import classNames from "classnames";
import { Encounter } from "@/types";
import BossMechanic from "./DraggableEntity/BossMechanic/BossMechanic";
import css from "./Row.module.css";

interface BossRowProps {
  encounter: Encounter;
}

export function BossRow({ encounter }: BossRowProps) {
  return (
    <div className={classNames(css.Lane, css.BossLane)}>
      {encounter.mechanics.map((mech) => {
        return <BossMechanic node={mech} key={mech.id} />;
      })}
    </div>
  );
}
