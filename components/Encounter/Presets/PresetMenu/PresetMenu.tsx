import { useState } from "react";
import css from "./PresetMenu.module.css";
import classNames from "classnames";
import useClickOutside from "@/hooks/useClickOutside";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api, Preset } from "@/resources";
import { usePresetStore } from "@/resources/store/presetStore";
import { useSession } from "next-auth/react";

interface PresetMenuProps {
  encounterId: number;
}

type MenuAction = {
  name: string;
  action: () => void;
};

export function PresetMenu({ encounterId }: PresetMenuProps) {
  const [open, setOpen] = useState(false);
  const presetStore = usePresetStore();
  const preset = presetStore.preset;
  const queryClient = useQueryClient();
  const { data: session, status } = useSession();
  const options: MenuAction[] = [
    { name: "Save", action: save },
    { name: "Delete", action: deletePreset },
    { name: "Clone", action: clonePreset },
    { name: "Favourite", action: () => {} },
  ];
  const saveMutation = useMutation({
    mutationFn: () => {
      if (preset.id !== "new") {
        return api.put(`/presets/${preset.id}`, { ...preset });
      }
      return api.post("/presets", { ...preset });
    },
    onSuccess: (res) => {
      console.log(res);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: () => {
      return api.delete(`/presets/${preset.id}`);
    },
    onSuccess: (res) => {
      console.log(res);
    },
  });

  function save() {
    saveMutation.mutate();
  }

  function deletePreset() {
    deleteMutation.mutate();
  }

  function clonePreset() {
    const newPreset = {
      id: "new",
      name: preset.name + " " + "Copy",
      flags: preset.flags,
      segments: preset.segments,
      encounterId: encounterId,
      userId: session?.userId,
    };

    queryClient.setQueryData(
      ["userPresets", session?.userId],
      (oldData: Preset[]) => {
        if (!oldData) {
          return;
        }

        if (oldData.some((p) => p.id === "new")) {
          return;
        }
        return [...oldData, newPreset];
      }
    );

    presetStore.replace(newPreset);
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
