import classNames from "classnames";
import { Encounter, PlayerSkill } from "@/resources/types";
import { DraggableGridComponent } from "@/components/index";
import { useMouseContext } from "@/contexts/index";
import css from "./Row.module.css";
import { AbilityIcon } from "./AbilityIcon/AbilityIcon";
import { usePresetStore } from "@/resources/store/presetStore";
import { gridSize } from "@/resources";

interface RowProps {
  ability: PlayerSkill;
  isActive: boolean;
  encounter: Encounter;
}

export function Row({ ability, isActive, encounter }: RowProps) {
  const mouse = useMouseContext();
  const presetStore = usePresetStore();
  const preset = presetStore.preset;

  const activeSegments = preset.segments[ability.id];

  function GenerateRandomString(): string {
    return Array.from(Array(20), () =>
      Math.floor(Math.random() * 36).toString(36)
    ).join("");
  }
  function removeSegment(id: string) {
    presetStore.setSegments({
      ...preset.segments,
      [ability.id]: activeSegments.toSpliced(
        activeSegments.findIndex((segment) => segment.segmentId === id),
        1
      ),
    });
  }

  function createSegment(position: number, ability: PlayerSkill) {
    while (position % gridSize !== 0) {
      position -= 1;
    }

    position = position / gridSize;
    const newSegment = activeSegments.find(
      (segment) =>
        (position > segment.start &&
          position < segment.start + segment.length) ||
        (position + ability.cooldown > segment.start &&
          position + ability.cooldown < segment.start + segment.length)
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
        presetStore.setSegments({
          ...preset.segments,
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

    presetStore.setSegments({
      ...preset.segments,
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
        toggleDisplay: isActive,
      })}
    >
      <AbilityIcon ability={ability} />
      <div
        className={css.segmentContainer}
        onClick={() => createSegment(mouse.current, ability)}
      ></div>

      {activeSegments.map((entity) => (
        <DraggableGridComponent
          ability={ability}
          onRightClick={() => removeSegment(entity.segmentId)}
          key={entity.segmentId}
          segment={entity}
          encounter={encounter}
        />
      ))}
    </div>
  );
}
