import { useEffect, useState } from "react";
import { Select } from "@/components/CustomSelect/CustomSelect";
import css from "./Presets.module.css";
import { api, Preset } from "@/resources";
import classNames from "classnames";

interface PresetProps {
  id: string;
  presets: Preset[];
}

export function Presets({ id, presets }: PresetProps) {
  const [selected, setSelected] = useState<Preset>();

  if (id !== "new") {
    useEffect(() => {
      api.get(`/presets/${id}`).then((res) => {
        // setPresets([...presets, res.data]);
      });
    }, []);
  }

  function handleLocalSave() {
    
  }

  return (
    <div className={css.container}>
      <Select src="">
        {presets.length === 0 && <div>New Preset</div>}

        {/* <div className={classNames({ toggleDisplay: !open }, css.dropdown)}>
          {presets.map((preset) => (
            <div
              key={preset.id}
              className={css.dropdownItem}
              onClick={() => setSelected(preset)}
            >              <img src={jobMap[job.id]} className="miniIcon" alt="" />

              <div>{preset.name}</div>
            </div>
          ))}
        </div> */}
      </Select>
      <button>New</button>
      <button>Save</button>
      <button>Copy</button>
    </div>
  );
}
