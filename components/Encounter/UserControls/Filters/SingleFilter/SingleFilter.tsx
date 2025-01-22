import classNames from "classnames";
import css from "./SingleFilter.module.css";
import { useActivationFlagsContext } from "../../../../../contexts/ActivationFlagsContext";
import { PlayerSkillType, SkillTarget } from "../../../../../globals";

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
    <div className={css.filter} onClick={() => onClickToggle(label)}>
      {text}
      <div className={classNames({ toggleVisibility: !toggleCheckmark() })}>
        &#10003;
      </div>
      {/* <input type="checkbox" /> */}
    </div>
  );
}
