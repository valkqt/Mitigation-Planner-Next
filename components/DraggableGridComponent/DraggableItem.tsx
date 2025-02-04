import { Translate } from "@dnd-kit/core";
import { useDraggable } from "@dnd-kit/core";
import { Axis, PlayerSkill } from "@/resources/index";
import { Draggable } from "./Draggable/Draggable";

interface DraggableItemProps {
  handle?: boolean;
  style?: React.CSSProperties;
  translate: Translate;
  axis?: Axis;
  ability: PlayerSkill;
  onRightClick: () => void;
  isMoving: boolean;
}

export default function DraggableItem({
  axis,
  style,
  translate,
  handle,
  ability,
  onRightClick,
  isMoving,
}: DraggableItemProps) {
  const { attributes, isDragging, listeners, setNodeRef } = useDraggable({
    id: "draggable",
  });

  return (
    <Draggable
      ref={setNodeRef}
      dragging={isDragging}
      handle={handle}
      listeners={listeners}
      style={style}
      translate={translate}
      axis={axis}
      {...attributes}
      ability={ability}
      onRightClick={onRightClick}
      onMove={isMoving}
    />
  );
}
