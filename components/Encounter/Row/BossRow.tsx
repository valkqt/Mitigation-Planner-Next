import classNames from "classnames";
import BossMechanic from "./DraggableEntity/BossMechanic/BossMechanic";
import css from "./Row.module.css";
import { Encounter } from "@/resources";
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
