import { useState } from "react";
import { Select } from "@/components/CustomSelect/CustomSelect";
import css from "./Presets.module.css";

export function Presets() {
  const [preset, setPreset] = useState();
  return (
    <div className={css.container}>
      <Select src="">
        <div className={css.option}>LPDU</div>
      </Select>
      <button>Save</button>
    </div>
  );
}
