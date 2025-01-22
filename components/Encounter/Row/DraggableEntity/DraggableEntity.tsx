import { abilityMap, gridSize } from "@/globals";
import { AbilityStyle, PlayerSkill } from "@/types";
import css from "./DraggableEntity.module.css";

interface DraggableEntityProps {
  ability: PlayerSkill;
}

export default function DraggableEntity({ ability }: DraggableEntityProps) {
  const style: AbilityStyle = abilityMap[ability.id] ?? {};
  return (
    <div
      className={css.SingleEntity}
      style={{ backgroundColor: style.color2, borderRadius: "0.20rem" }}
    >
      <div
        className={css.segment}
        style={{
          width: ability.duration * gridSize + "px",
          backgroundColor: style.color1,
        }}
      >
        <div className={css.IconContainer}>
          <img src={style.icon} className={css.AbilityIcon} alt="" />
        </div>
        <div>{ability.name}</div>
      </div>
      <div
        style={{
          width: (ability.cooldown - ability.duration) * gridSize + "px",
        }}
      ></div>
    </div>
  );
}
