import { Row } from "@/components";
import { usePresetStore } from "@/resources/store/presetStore";
import { Encounter, Job, PlayerSkill } from "@/resources/types";
import { useEffect, useState } from "react";

interface UserTimelineProps {
  jobs: Job[];
  encounter: Encounter;
}

export function UserTimeline({ jobs, encounter }: UserTimelineProps) {
  const [abilities, setAbilities] = useState<PlayerSkill[]>([]);
  const preset = usePresetStore().preset;

  if (!jobs) {
    return;
  }

  useEffect(() => {
    let skills: PlayerSkill[] = [];
    jobs.forEach((job) => {
      job.skills.forEach((skill) => skills.push(skill.ability));
    });
    setAbilities(skills);
  }, []);

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
    <>
      {abilities.map((ability) => {
        return (
          <Row
            key={ability.id}
            ability={ability}
            isActive={isActive(ability)}
            encounter={encounter}
          />
        );
      })}
    </>
  );
}
