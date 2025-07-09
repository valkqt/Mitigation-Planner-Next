import { abilityMap } from "@/resources/index";
import { AbilityStyle, PlayerSkill } from "@/resources/index";
import css from "./SingleAbility.module.css";
import classNames from "classnames";
import { usePresetStore } from "@/resources/store/presetStore";
import { FlagsHelper } from "@/resources/store/presetStoreHelpers";
import Image from "next/image";

interface SingleAbilityProps {
  ability: PlayerSkill;
}
export default function SingleAbility({ ability }: SingleAbilityProps) {
  const presetStore = usePresetStore();
  const preset = presetStore.preset;

  function toggleAbility(abilityId: number): void {
    presetStore.setFlags(FlagsHelper.abilities(abilityId, preset.flags));
  }

  const style: AbilityStyle = abilityMap[ability.id];

  return (
    <div className={css.container} onClick={() => toggleAbility(ability.id)}>
      <Image
        src={style.icon}
        className={"smallAbilityIcon"}
        alt=""
        width={32}
        height={32}
      />

      <div
        className={classNames(
          {
            inactive: !preset.flags.abilities[ability.id],
          },
          css.label
        )}
      >
        {ability.name}
      </div>
    </div>
  );
}
