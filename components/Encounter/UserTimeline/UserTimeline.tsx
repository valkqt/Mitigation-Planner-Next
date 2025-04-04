import { Row } from "@/components";
import { useActivationFlagsContext } from "@/contexts";
import { Job, PlayerSkill, Segment } from "@/resources/types";
import { Dispatch, SetStateAction } from "react";

interface UserTimelineProps {
  abilities: PlayerSkill[];
  nodes: Record<number, Segment[]>;
  setNodes: Dispatch<SetStateAction<Record<number, Segment[]>>>;
  jobs: Job[];
}

export function UserTimeline({
  abilities,
  nodes,
  setNodes,
  jobs,
}: UserTimelineProps) {
  const [flags, _] = useActivationFlagsContext();

  function isActive(ability: PlayerSkill): boolean {
    return (
      !flags.abilities[ability.id] ||
      !jobs.some(
        (job) =>
          flags.jobs[job.id] && job.skills.some((a) => a.id == ability.id)
      ) ||
      !flags.target[ability.target] ||
      !flags.type[ability.type] ||
      !(ability.level <= flags.level)
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
