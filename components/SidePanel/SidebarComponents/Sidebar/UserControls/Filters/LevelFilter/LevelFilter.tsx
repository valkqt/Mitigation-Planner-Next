import { levelArray } from "@/src/domain/globals";
import { usePresetStore } from "@/src/services/client/store/presetStore";
import { FlagsHelper } from "@/src/services/client/store/presetStoreHelpers";

export default function LevelFilter() {
  const presetStore = usePresetStore();
  const preset = presetStore.preset;

  function filterByLevel(threshold: number): void {
    presetStore.setFlags(FlagsHelper.level(threshold, preset.flags));
  }

  return (
    <div>
      <input
        type="range"
        min={levelArray[0]}
        max={levelArray[levelArray.length - 1]}
        step={10}
        defaultValue={100}
        onChange={(e) => {
          try {
            const levelCap = parseInt(e.target.value);
            filterByLevel(levelCap);
          } catch {
            console.log("bro");
          }
        }}
      />
      <label htmlFor="level">{preset.flags.level}</label>
    </div>
  );
}
