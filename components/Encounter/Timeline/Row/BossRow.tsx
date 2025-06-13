import classNames from "classnames";
import BossMechanic from "./BossMechanic/BossMechanic";
import css from "./Row.module.css";
import { Encounter } from "@/resources";
interface BossRowProps {
  encounter: Encounter;
}

export function BossRow({ encounter }: BossRowProps) {
  return (
    <div className={classNames(css.Lane, css.BossLane)}>
      <div className={css.sublane}>
        {encounter.mechanics.map((mech, index) => {
          if (index % 2 === 0) {
            return <BossMechanic node={mech} key={mech.id} />;
          }
        })}
      </div>
      <div className={css.sublane}>
        {encounter.mechanics.map((mech, index) => {
          if (index % 2 !== 0) {
            return <BossMechanic node={mech} key={mech.id} />;
          }
        })}
      </div>
    </div>
  );
}
