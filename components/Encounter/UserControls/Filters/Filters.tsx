import css from "./Filters.module.css";
import SingleFilter from "./SingleFilter/SingleFilter";
import { PlayerSkill, PlayerSkillType, SkillTarget } from "@/resources/index";
import LevelFilter from "./LevelFilter/LevelFilter";

interface FiltersProps {
  abilities: PlayerSkill[];
  onSkillTargetToggle: (filter: SkillTarget | PlayerSkillType) => void;
  onLevelFilter: (threshold: number) => void;
}

export default function Filters({
  onSkillTargetToggle,
  onLevelFilter,
}: FiltersProps) {
  return (
    <div className={css.container}>
      <div>
        <div className={css.header}>Level:</div>
        <LevelFilter onLevelFilter={onLevelFilter} />
      </div>
      <div>
        <div className={css.header}>Target:</div>
        <div className={css.filters}>
          {Array.from(Object.values(SkillTarget)).map((type) => (
            <SingleFilter
              label={type}
              onClickToggle={onSkillTargetToggle}
              key={type}
            />
          ))}
        </div>
      </div>
      <div>
        <div className={css.header}>Abilities:</div>
        <div className={css.filters}>
          {Array.from(Object.values(PlayerSkillType)).map((type) => (
            <SingleFilter
              label={type}
              onClickToggle={onSkillTargetToggle}
              key={type}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
