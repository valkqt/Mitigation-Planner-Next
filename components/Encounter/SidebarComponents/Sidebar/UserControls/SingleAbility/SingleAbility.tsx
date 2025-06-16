import { abilityMap } from "@/resources/index";
import { AbilityStyle, PlayerSkill } from "@/resources/index";
import css from "./SingleAbility.module.css";
import classNames from "classnames";
import { usePresetStore } from "@/resources/store/presetStore";
import { FlagsHelper } from "@/resources/store/presetStoreHelpers";

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
      <img src={style.icon} className={"smallAbilityIcon"} alt="" />

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
