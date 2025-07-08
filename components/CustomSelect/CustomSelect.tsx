import { Dispatch, SetStateAction, useState } from "react";
import css from "./CustomSelect.module.css";
import classNames from "classnames";
import useClickOutside from "@/hooks/useClickOutside";
import Image from "next/image";

interface Item {
  name: string;
  id: number | string;
}

interface CustomSelectProps<TItem extends Item> {
  options: TItem[];
  iconMap?: Record<number, string>;
  externalState?: TItem;
  externalStateSetter?: Dispatch<SetStateAction<TItem>>;
}

export function Select<TItem extends Item>({
  options,
  iconMap,
  externalState,
  externalStateSetter,
}: CustomSelectProps<TItem>) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(externalState ?? options[0]);

  const selectedItem = externalState ? externalState : selected;

  function setSelectedItem(item: TItem): void {
    if (externalStateSetter) {
      externalStateSetter(item);
    }
    setSelected(item);
  }

  function handleClickOutside() {
    setOpen(false);
  }

  const ref = useClickOutside<HTMLDivElement>(handleClickOutside);

  return (
    <div
      onClick={() => setOpen(!open)}
      style={{ position: "relative" }}
      ref={ref}
    >
      <div className={css.label}>
        {iconMap && (
          <Image
            src={iconMap[selectedItem.id]}
            className="miniIcon"
            alt={selectedItem.name + "icon"}
            width={20}
            height={20}
          />
        )}
        {selectedItem.name}
      </div>
      <div className={classNames({ toggleDisplay: !open }, css.dropdown)}>
        {options.map((item) => (
          <div
            key={item.id}
            className={css.dropdownItem}
            onClick={() => {
              setSelectedItem(item);
            }}
          >
            {iconMap && (
              <Image
                src={iconMap[item.id]}
                className="miniIcon"
                alt={item.name + "icon"}
                width={20}
                height={20}
              />
            )}
            <div>{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
