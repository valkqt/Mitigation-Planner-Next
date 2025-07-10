import { abilityMap, gridSize } from "@/src/domain/globals";
import { AbilityStyle, PlayerSkill } from "@/src/domain/types";
import css from "./DraggableEntity.module.css";
import Image from "next/image";

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
          <Image
            src={style.icon}
            className={css.AbilityIcon}
            alt=""
            width={48}
            height={48}
          />
        </div>
        <div className={css.label}>{ability.name}</div>
      </div>
      <div
        style={{
          width: (ability.cooldown - ability.duration) * gridSize + "px",
        }}
      ></div>
    </div>
  );
}
