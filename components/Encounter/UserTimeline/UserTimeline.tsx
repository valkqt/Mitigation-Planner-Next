import { Row } from "@/components";
import { usePresetStore } from "@/resources/store/presetStore";
import {
  AbilitiesOnJobs,
  Encounter,
  Job,
  PlayerSkill,
} from "@/resources/types";
import { useEffect, useState } from "react";
import css from "./UserTimeline.module.css";

interface UserTimelineProps {
  jobs: any[];
  encounter: Encounter;
}

export function UserTimeline({ jobs, encounter }: UserTimelineProps) {
  useEffect(() => {
    if (!jobs) {
      return;
    }

    const skills: AbilitiesOnJobs[] = [];
    jobs.forEach((job) => {
      job.skills.forEach((skill) => {
        if (!skills.find((s) => s.ability.id === skill.ability.id)) {
          skills.push(skill);
        }
      });
    });
    setAbilities(skills);
  }, [jobs]);

  const [abilities, setAbilities] = useState<AbilitiesOnJobs[]>([]);
  const preset = usePresetStore().preset;

  function isActive(ability: PlayerSkill): boolean {
    return (
      !preset.flags.abilities[ability.id] ||
      !jobs.some(
        (job) =>
          preset.flags.jobs[job.id] &&
          job.skills.some((a) => a.ability.id == ability.id)
      ) ||
      !preset.flags.target[ability.target] ||
      !preset.flags.skillType[ability.type] ||
      !(ability.level <= preset.flags.level)
    );
  }
  return (
    <div className={css.container}>
      {abilities.map((ability) => {
        if (ability.abilityId === 36) return;
        return (
          <Row
            key={
              ability.abilityId.toString() + ability.jobId.toString() + "mrow"
            }
            ability={ability.ability}
            isActive={isActive(ability.ability)}
            encounter={encounter}
          />
        );
      })}
    </div>
  );
}
