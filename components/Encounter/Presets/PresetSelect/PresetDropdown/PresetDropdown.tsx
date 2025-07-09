import classNames from "classnames";
import router from "next/router";
import css from "./PresetDropdown.module.css";
import { PresetModal } from "../PresetModal";
import { useModal } from "@/contexts/ModalContext/ModalContext";
import { Dispatch, SetStateAction } from "react";
import { Preset } from "@/resources/types";
import useClickOutside from "@/hooks/useClickOutside";

type PositionStyle = {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
};

interface PresetDropdownProps {
  collection: Preset[];
  encounterId: number;
  setOpen: Dispatch<SetStateAction<boolean>>;
  style: PositionStyle;
}

export function PresetDropdown({
  collection,
  encounterId,
  setOpen,
  style,
}: PresetDropdownProps) {
  const [, setShow, , setModal] = useModal();

  function handleClickOutside() {
    setOpen(false);
  }

  const ref = useClickOutside<HTMLDivElement>(handleClickOutside);

  return (
    <div
      className={classNames({ toggleDisplay: !open }, css.dropdown)}
      style={style}
      ref={ref}
      id="dropdown"
    >
      {collection.map((item) => (
        <div
          key={item.id}
          className={css.dropdownItem}
          onClick={() => {
            router.push(`/encounters/${encounterId}/presets/${item.id}`);
          }}
        >
          <div>{item.name}</div>
        </div>
      ))}
      <div
        className={classNames(css.newItem, css.dropdownItem)}
        onClick={() => {
          setShow(true);
          setOpen(false);
          setModal(<PresetModal encounterId={encounterId} />);
        }}
      >
        + New Preset
      </div>
    </div>
  );
}
