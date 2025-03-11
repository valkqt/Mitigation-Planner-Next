import classNames from "classnames";
import css from "./SingleFilter.module.css";
import { useActivationFlagsContext } from "@/contexts/index";
import { PlayerSkillType, SkillTarget } from "@/resources/index";

interface SingleFilterProps {
  label: SkillTarget | PlayerSkillType;
  onClickToggle: (lbl: SkillTarget | PlayerSkillType) => void;
}
export default function SingleFilter({
  label,
  onClickToggle,
}: SingleFilterProps) {
  const [flags] = useActivationFlagsContext();

  const text = label.charAt(0) + label.substring(1).toLowerCase();

  function toggleCheckmark() {
    if (label in SkillTarget) {
      return flags.target[label];
    } else {
      return flags.type[label];
    }
  }
  return (
    <div
      className={classNames(
        css.filter,
        classNames({ [css.inactiveFilter]: !toggleCheckmark() })
      )}
      onClick={() => onClickToggle(label)}
    >
      {text}
    </div>
  );
}
