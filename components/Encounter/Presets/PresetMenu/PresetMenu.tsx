import { useState } from "react";
import css from "./PresetMenu.module.css";
import classNames from "classnames";
import useClickOutside from "@/hooks/useClickOutside";
import { useMutation } from "@tanstack/react-query";
import { api } from "@/resources";
import { usePresetStore } from "@/resources/store/presetStore";

type MenuAction = {
  name: string;
  action: () => void;
};

export function PresetMenu() {
  const [open, setOpen] = useState(false);
  const presetStore = usePresetStore();
  const preset = presetStore.preset;
  const options: MenuAction[] = [
    { name: "Save", action: save },
    { name: "Delete", action: () => {} },
    { name: "Clone", action: () => {} },
    { name: "Favourite", action: () => {} },
  ];
  const mutation = useMutation({
    mutationFn: () => {
      return api.post("/presets", { ...preset });
    },
    onSuccess: (data) => {
      console.log(data.data);
    },
  });

  function save() {
    console.log(preset)
    mutation.mutate();
  }

  const ref = useClickOutside<HTMLDivElement>(handleClickOutside);

  function handleClickOutside() {
    setOpen(false);
  }

  return (
    <div onClick={() => setOpen(!open)} className={css.menu} ref={ref}>
      <div className={css.label}>Actions</div>
      <div className={classNames({ toggleDisplay: !open }, css.dropdown)}>
        {options.map((option, index) => (
          <div key={index} className={css.dropdownItem}>
            <div onClick={option.action}>{option.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
