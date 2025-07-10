import classNames from "classnames";
import css from "./SingleFilter.module.css";
import { PlayerSkillType, SkillTarget } from "@/src/domain/globals";
import { usePresetStore } from "@/src/services/client/store/presetStore";
import { FlagsHelper } from "@/src/services/client/store/presetStoreHelpers";

interface SingleFilterProps {
  label: SkillTarget | PlayerSkillType;
}
export default function SingleFilter({ label }: SingleFilterProps) {
  const presetStore = usePresetStore();
  const preset = presetStore.preset;
  const text = label.charAt(0) + label.substring(1).toLowerCase();

  function toggleFilter(label: string) {
    if (label in SkillTarget) {
      presetStore.setFlags(FlagsHelper.targetType(label, preset.flags));
    } else {
      presetStore.setFlags(FlagsHelper.abilityType(label, preset.flags));
    }
  }

  function toggleCheckmark() {
    if (label in SkillTarget) {
      return preset.flags.target[label];
    } else {
      return preset.flags.skillType[label];
    }
  }
  return (
    <div
      className={classNames(
        css.filter,
        classNames({ [css.inactiveFilter]: !toggleCheckmark() })
      )}
      onClick={() => toggleFilter(label)}
    >
      {text}
    </div>
  );
}
