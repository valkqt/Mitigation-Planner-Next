import { Row } from "@/components";
import { usePresetStore } from "@/resources/store/presetStore";
import { Job, PlayerSkill, Segment } from "@/resources/types";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface UserTimelineProps {
  nodes: Record<number, Segment[]>;
  setNodes: Dispatch<SetStateAction<Record<number, Segment[]>>>;
  jobs: Job[];
}

export function UserTimeline({ nodes, setNodes, jobs }: UserTimelineProps) {
  // const [flags, _] = useActivationFlagsContext();
  const [abilities, setAbilities] = useState<PlayerSkill[]>([]);
  const preset = usePresetStore().preset;

  useEffect(() => {
    let skills: PlayerSkill[] = [];
    jobs.forEach((job) => {
      skills = skills.concat(job.skills);
    });
    setAbilities(skills);
  }, []);

  function isActive(ability: PlayerSkill): boolean {
    return (
      !preset.flags.abilities[ability.id] ||
      !jobs.some(
        (job) =>
          preset.flags.jobs[job.id] &&
          job.skills.some((a) => a.id == ability.id)
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
            nodes={nodes}
            setNodes={setNodes}
          />
        );
      })}
    </>
  );
}
