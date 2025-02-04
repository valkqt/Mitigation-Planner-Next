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
}

export function UserControls({
  jobs,
  onJobToggle,
  abilities,
  onAbilityToggle,
  onSkillTargetToggle,
  onLevelFilter,
}: UserControlsProps) {
  return (
    <div className={css.UserControls}>
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
