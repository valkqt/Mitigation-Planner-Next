import { Dispatch, SetStateAction, useState } from "react";
import css from "./CustomSelect.module.css";
import classNames from "classnames";

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

  function setSelectedItem(item: any): void {
    externalStateSetter ? externalStateSetter(item) : setSelected(item);
  }

  return (
    <div onClick={() => setOpen(!open)} style={{ position: "relative" }}>
      <div className={css.label}>
        {iconMap && (
          <img
            src={iconMap[selectedItem.id]}
            className="miniIcon"
            alt={selectedItem.name + "icon"}
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
              <img
                src={iconMap[item.id]}
                className="miniIcon"
                alt={item.name + "icon"}
              />
            )}
            <div>{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
