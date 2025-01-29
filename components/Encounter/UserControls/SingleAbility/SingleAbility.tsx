import { useActivationFlagsContext } from "../../../../contexts/ActivationFlagsContext/ActivationFlagsContext";
import { abilityMap } from "../../../../globals";
import { AbilityStyle, PlayerSkill } from "@/resources/types";
import css from "./SingleAbility.module.css";
import classNames from "classnames";

interface SingleAbilityProps {
  ability: PlayerSkill;
  onToggle: (abilityId: number) => void;
}
export default function SingleAbility({
  ability,
  onToggle,
}: SingleAbilityProps) {
  const [flags] = useActivationFlagsContext();
  const style: AbilityStyle = abilityMap[ability.id];
  return (
    <div className={css.SingleAbility} onClick={() => onToggle(ability.id)}>
      <div>
        <img src={style.icon} className={"smallAbilityIcon"} alt="" />
      </div>

      <div className={css.AbilityLabel}>
        <div>{ability.name}</div>
        <div
          className={classNames({
            toggleVisibility: !flags.abilities[ability.id],
          })}
        >
          &#10003;
        </div>
      </div>
    </div>
  );
}
