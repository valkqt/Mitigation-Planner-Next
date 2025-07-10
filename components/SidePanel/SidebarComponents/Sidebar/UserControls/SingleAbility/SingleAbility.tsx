import { abilityMap } from "@/src/domain/globals";
import { AbilityStyle, PlayerSkill } from "@/src/domain/types";
import css from "./SingleAbility.module.css";
import classNames from "classnames";
import { usePresetStore } from "@/src/services/client/store/presetStore";
import { FlagsHelper } from "@/src/services/client/store/presetStoreHelpers";
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
