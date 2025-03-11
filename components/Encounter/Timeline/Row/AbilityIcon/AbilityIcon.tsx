import css from "./AbilityIcon.module.css";
import Image from "next/image";
import { useState } from "react";
import { abilityMap, PlayerSkill, AbilityStyle } from "@/resources";
import classNames from "classnames";

interface AbilityIconProps {
  ability: PlayerSkill;
}

export function AbilityIcon({ ability }: AbilityIconProps) {
  const style: AbilityStyle = abilityMap[ability.id];
  const [popup, setPopup] = useState(false);

  return (
    <div className={css.LaneIconContainer}>
      <Image
        src={style.icon}
        alt={ability.name + "icon"}
        width={48}
        height={48}
        onMouseOver={() => {
          setPopup(true);
        }}
        onMouseOut={() => {
          setPopup(false);
        }}
      />
      <div className={classNames({ toggleDisplay: !popup }, css.popup)}>
        <Image
          src={style.icon}
          alt={ability.name + "icon"}
          width={48}
          height={48}
        />
        <div>
          <div>{ability.name}</div>
          <div>
            Type: {ability.type.charAt(0) + ability.type.slice(1).toLowerCase()}
          </div>
          <div>Duration: {ability.duration}s</div>
          <div>Cooldown: {ability.cooldown}s</div>
        </div>
      </div>
    </div>
  );
}
