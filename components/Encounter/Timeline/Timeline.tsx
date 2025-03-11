import { Encounter, Job, PlayerSkill, Segment } from "@/resources";
import { BossTimeline } from "./BossTimeline/BossTimeline";
import { BossRow } from "./Row/BossRow";
import { Row } from "./Row/Row";
import { useState } from "react";
import { segments } from "@/resources";

interface TimelineProps {
  encounter: Encounter;
  abilities: PlayerSkill[];
  jobs: Job[];
}

export function Timeline({ encounter, abilities, jobs }: TimelineProps) {
  const [nodes, setNodes] = useState(segments);

  return (
    <div>
      <BossTimeline encounter={encounter} />
      <div>
        <BossRow encounter={encounter} />
        {abilities.map((ability) => {
          return (
            <Row
              ability={ability}
              duration={encounter.duration}
              jobs={jobs}
              key={ability.id}
              nodes={nodes}
              setNodes={setNodes}
            />
          );
        })}
      </div>
    </div>
  );
}
