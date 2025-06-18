"use client";

import { useRef, useState } from "react";
import css from "./PresetSelect.module.css";
import classNames from "classnames";
import { api, Preset } from "@/resources";
import { useRouter } from "next/navigation";
import { usePresetStore } from "@/resources/store/presetStore";
import { useSession } from "next-auth/react";
import useClickOutside from "@/hooks/useClickOutside";
import { useModal } from "@/contexts/ModalContext/ModalContext";
import { PresetModal } from "./PresetModal/";
import { createPortal } from "react-dom";
import { PresetDropdown } from "./PresetDropdown";

interface PresetSelectProps {
  collection: Preset[];
  encounterId: number;
}

export function PresetSelect({ collection, encounterId }: PresetSelectProps) {
  const [open, setOpen] = useState(false);
  const { data: session, status } = useSession();
  const preset = usePresetStore().preset;

  function handleClickOutside(): void {
    setOpen(false);
  }

  const ref = useRef<any>(null);

  function getPosition() {
    if (!ref.current) {
      return {};
    }
    const position = ref.current.getBoundingClientRect();

    return {
      top: position.top,
      left: position.left,
    };
  }

  return (
    <div ref={ref}>
      <div onClick={() => setOpen(true)} className={classNames(css.menu)}>
        <div className={css.label}>{preset?.name}</div>
        {open &&
          createPortal(
            <PresetDropdown
              encounterId={encounterId}
              setOpen={setOpen}
              collection={collection}
              style={getPosition()}
            />,
            document.body
          )}
      </div>
    </div>
  );
}
