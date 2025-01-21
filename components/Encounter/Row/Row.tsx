import classNames from "classnames";
import DraggableGridComponent from "../../../components/DraggableGridComponent/DraggableGridComponent";
import { GenerateRandomString } from "../../../resources/GenerateRandomString";
import {
  PlayerSkill,
  Job,
  Segment,
  AbilityStyle,
} from "../../../resources/types";
import css from "./Row.module.css";
import { useState } from "react";
import { useActivationFlagsContext } from "../../../contexts/ActivationFlagsContext";
import { useMouseContext } from "../../../contexts/MouseContext";
import { abilityMap } from "../../../resources/globals";
import Image from "next/image";

interface RowProps {
  jobs: Job[];
  ability: PlayerSkill;
  duration: number;
}

export default function Row({ jobs, ability, duration }: RowProps) {
  const [entities, setEntities] = useState<Segment[]>([]);
  const [flags] = useActivationFlagsContext();
  const mouse = useMouseContext();
  const style: AbilityStyle = abilityMap[ability.id];

  function removeSegment(id: string) {
    setEntities(
      entities.toSpliced(
        entities.findIndex((segment) => segment.segmentId === id),
        1
      )
    );
  }

  function createSegment(position: number, ability: PlayerSkill) {
    while (position % 8 !== 0) {
      position -= 1;
    }

    position = position / 8;
    const newSegment = entities.find(
      (segment) =>
        position <= segment.start &&
        segment.start <= position + ability.cooldown
    );

    if (newSegment) {
      const alreadyExists2 = entities.find(
        (node) =>
          node.start < newSegment.start - newSegment.length &&
          newSegment.start - newSegment.length < node.start + node.length
      );
      position = newSegment.start - newSegment.length;

      if (alreadyExists2 || position <= 0) {
        return;
      } else {
        setEntities([
          ...entities,
          {
            abilityId: ability.id,
            segmentId: GenerateRandomString(),
            length: ability.cooldown,
            start: position === 0 ? position + 1 : position,
          },
        ]);
      }
      return;
    }

    setEntities([
      ...entities,
      {
        abilityId: ability.id,
        segmentId: GenerateRandomString(),
        length: ability.cooldown,
        start: position === 0 ? position + 1 : position,
      },
    ]);
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

      {entities.map((entity) => (
        <DraggableGridComponent
          ability={ability}
          onRightClick={() => removeSegment(entity.segmentId)}
          key={entity.segmentId}
          entity={entity}
          nodes={entities}
          setNodes={setEntities}
        />
      ))}
    </div>
  );
}
