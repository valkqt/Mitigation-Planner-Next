import classNames from "classnames";
import Image from "next/image";
import { PlayerSkill, Job, Segment, AbilityStyle } from "@/resources/types";
import { abilityMap } from "@/globals";
import { DraggableGridComponent } from "@/components/index";
import { useActivationFlagsContext, useMouseContext } from "@/contexts/index";
import css from "./Row.module.css";

interface RowProps {
  jobs: Job[];
  ability: PlayerSkill;
  duration: number;
  setNodes: (node: Record<number, Segment[]>) => void;
  nodes: Record<number, Segment[]>;
}

export function Row({ jobs, ability, duration, setNodes, nodes }: RowProps) {
  const [flags] = useActivationFlagsContext();
  const mouse = useMouseContext();
  const style: AbilityStyle = abilityMap[ability.id];
  const activeSegments = nodes[ability.id];

  function GenerateRandomString(): string {
    return Array.from(Array(20), () =>
      Math.floor(Math.random() * 36).toString(36)
    ).join("");
  }
  function removeSegment(id: string) {
    setNodes({
      ...nodes,
      [ability.id]: activeSegments.toSpliced(
        activeSegments.findIndex((segment) => segment.segmentId === id),
        1
      ),
    });
  }

  function createSegment(position: number, ability: PlayerSkill) {
    console.log(nodes);
    while (position % 8 !== 0) {
      position -= 1;
    }

    position = position / 8;
    const newSegment = activeSegments.find(
      (segment) =>
        position <= segment.start &&
        segment.start <= position + ability.cooldown
    );

    if (newSegment) {
      const alreadyExists2 = activeSegments.find(
        (node) =>
          node.start < newSegment.start - newSegment.length &&
          newSegment.start - newSegment.length < node.start + node.length
      );
      position = newSegment.start - newSegment.length;

      if (alreadyExists2 || position <= 0) {
        return;
      } else {
        setNodes({
          ...nodes,
          [ability.id]: [
            ...activeSegments,
            {
              abilityId: ability.id,
              segmentId: GenerateRandomString(),
              length: ability.cooldown,
              start: position === 0 ? position + 1 : position,
            },
          ],
        });
      }
      return;
    }

    setNodes({
      ...nodes,
      [ability.id]: [
        ...activeSegments,
        {
          abilityId: ability.id,
          segmentId: GenerateRandomString(),
          length: ability.cooldown,
          start: position === 0 ? position + 1 : position,
        },
      ],
    });
  }

  return (
    <div
      className={classNames(css.Lane, {
        toggleDisplay:
          !flags.abilities[ability.id] ||
          !jobs.some(
            (job) =>
              flags.jobs[job.id] && job.skills.some((a) => a.id == ability.id)
          ) ||
          !flags.target[ability.target] ||
          !flags.type[ability.type] ||
          !(ability.level <= flags.level),
      })}
    >
      <div className={css.LaneIconContainer}>
        <Image src={style.icon} alt="" width={48} height={48} />
      </div>

      {Array.from({ length: duration + 1 }, (_, index) => {
        return (
          <div
            key={index}
            className={css.filler}
            style={{ left: 64 + index * 8 }}
            id={index.toString()}
            onClick={() => createSegment(mouse.current, ability)}
          ></div>
        );
      })}

      {activeSegments.map((entity) => (
        <DraggableGridComponent
          ability={ability}
          onRightClick={() => removeSegment(entity.segmentId)}
          key={entity.segmentId}
          entity={entity}
          nodes={nodes}
          setNodes={setNodes}
        />
      ))}
    </div>
  );
}
