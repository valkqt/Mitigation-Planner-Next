import { usePresetStore } from "@/resources/store/presetStore";
import css from "./PresetModal.module.css";
import { useModal } from "@/contexts/ModalContext/ModalContext";
import {
  defaultFlags,
  defaultSegments,
  defaultUser,
  Preset,
  tempUrl,
} from "@/resources";
import { useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { ChangeEvent, FormEvent, useState } from "react";
import useClickOutside from "@/hooks/useClickOutside";

interface PresetModalProps {
  encounterId: number;
}

export function PresetModal({ encounterId }: PresetModalProps) {
  const queryClient = useQueryClient();
  const presetStore = usePresetStore();
  const { data: session } = useSession();
  const [, setShow] = useModal();
  const [name, setName] = useState<string>();
  const ref = useClickOutside<HTMLDivElement>(handleClickOutside);

  function createPreset(name: string) {
    const user = session?.userId ?? defaultUser;

    const newPreset = {
      id: ``,
      name: name,
      flags: defaultFlags,
      segments: defaultSegments,
      encounterId: encounterId,
      userId: session?.userId,
    };

    queryClient.setQueryData(["userPresets", user], (oldData: Preset[]) => {
      if (!oldData) {
        return;
      }

      if (oldData.some((p) => p.id.startsWith(tempUrl))) {
        return;
      }
      return [...oldData, newPreset];
    });

    presetStore.replace(newPreset);
  }

  function handleClickOutside(): void {
    setShow(false);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name || name == "") {
      return;
    }
    createPreset(name);
    setShow(false);
  }

  return (
    <div ref={ref}>
      <form className={css.modal} onSubmit={(e) => handleSubmit(e)}>
        <label>Choose a name for new preset</label>
        <input
          type="text"
          defaultValue={"New Preset"}
          onChange={(e) => handleChange(e)}
        />
        <div className={css.modalFooter}>
          <div></div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <button type="submit">Proceed</button>
            <button onClick={() => setShow(false)}>Cancel</button>
          </div>
        </div>
      </form>
    </div>
  );
}
