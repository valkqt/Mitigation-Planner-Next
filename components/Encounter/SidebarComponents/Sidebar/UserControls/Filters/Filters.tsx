import css from "./Filters.module.css";
import SingleFilter from "./SingleFilter/SingleFilter";
import { PlayerSkillType, SkillTarget } from "@/resources/index";
import LevelFilter from "./LevelFilter/LevelFilter";

export default function Filters() {
  return (
    <div className={css.container}>
      <div>
        <div className={css.header}>Level:</div>
        <LevelFilter />
      </div>
      <div>
        <div className={css.header}>Target:</div>
        <div className={css.filters}>
          {Array.from(Object.values(SkillTarget)).map((type) => (
            <SingleFilter label={type} key={type} />
          ))}
        </div>
      </div>
      <div>
        <div className={css.header}>Abilities:</div>
        <div className={css.filters}>
          {Array.from(Object.values(PlayerSkillType)).map((type) => (
            <SingleFilter label={type} key={type} />
          ))}
        </div>
      </div>
    </div>
  );
}
