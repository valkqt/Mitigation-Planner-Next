"use client";

import { useState } from "react";
import css from "./PresetSelect.module.css";
import classNames from "classnames";
import { api, Preset } from "@/resources";
import { useRouter } from "next/navigation";
import { usePresetStore } from "@/resources/store/presetStore";
import { useSession } from "next-auth/react";
import useClickOutside from "@/hooks/useClickOutside";
import { useModal } from "@/contexts/ModalContext/ModalContext";
import { PresetModal } from "./PresetModal/";

interface PresetSelectProps {
  collection: Preset[];
  encounterId: number;
}

export function PresetSelect({ collection, encounterId }: PresetSelectProps) {
  const [open, setOpen] = useState(false);
  const [_, setShow, __, setModal] = useModal();
  const { data: session, status } = useSession();
  const preset = usePresetStore().preset;
  const router = useRouter();

  function handleClickOutside(): void {
    setOpen(false);
  }

  const ref = useClickOutside<HTMLDivElement>(handleClickOutside);

  return (
    <div
      onClick={() => setOpen(true)}
      className={classNames(css.menu)}
      ref={ref}
    >
      <div className={css.label}>{preset?.name}</div>
      <div className={classNames({ toggleDisplay: !open }, css.dropdown)}>
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
    </div>
  );
}
