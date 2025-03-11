import { useActivationFlagsContext } from "@/contexts/index";
import { abilityMap } from "@/resources/index";
import { AbilityStyle, PlayerSkill } from "@/resources/index";
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
    <div className={css.container} onClick={() => onToggle(ability.id)}>
      <img src={style.icon} className={"smallAbilityIcon"} alt="" />

      <div
        className={classNames(
          {
            inactive: !flags.abilities[ability.id],
          },
          css.label
        )}
      >
        {ability.name}
      </div>
    </div>
  );
}
