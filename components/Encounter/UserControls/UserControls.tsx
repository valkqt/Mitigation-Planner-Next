import css from "./UserControls.module.css";
import JobSelection from "./JobSelection/JobSelection";
import Filters from "./Filters/Filters";
import AbilityFilter from "./AbilityFilter/AbilityFilter";
import {
  PlayerSkillType,
  SkillTarget,
  PlayerSkill,
  Job,
} from "@/resources/index";

interface UserControlsProps {
  jobs: Job[];
  onJobToggle: (jobId: number) => void;
  abilities: PlayerSkill[];
  onAbilityToggle: (abilityId: number) => void;
  onSkillTargetToggle: (filter: SkillTarget | PlayerSkillType) => void;
  onLevelFilter: (threshold: number) => void;
  setShow: (state: boolean) => void
}

export function UserControls({
  jobs,
  onJobToggle,
  abilities,
  onAbilityToggle,
  onSkillTargetToggle,
  onLevelFilter,
  setShow
}: UserControlsProps) {
  return (
    <div className={css.UserControls}>
      <div className={css.controlHeader}>
        <div>Filters</div>
        <div className={css.closeButton} onClick={() => setShow(false)}>
          &#10006;
        </div>
      </div>
      <Filters
        onSkillTargetToggle={onSkillTargetToggle}
        abilities={abilities}
        onLevelFilter={onLevelFilter}
      />
      <JobSelection jobs={jobs} onToggle={onJobToggle} />
      <AbilityFilter
        onAbilityToggle={onAbilityToggle}
        abilities={abilities}
        jobs={jobs}
      />
    </div>
  );
}
