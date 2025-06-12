import { Preset } from "@/resources";

// export function getLocalPresets() {
//   const localPresets = localStorage.getItem("userPresets");

//   if (!localPresets) {
//     return;
//   }

//   const parsed = JSON.parse(localPresets);

//   return parsed;
// }

// export function saveLocalPresets(userPresets: Preset[]) {
//   localStorage.setItem("userPresets", JSON.stringify(userPresets));
// }

export function saveCurrentLocalPreset(preset: Preset) {
  localStorage.setItem("currentPreset", JSON.stringify(preset));
}

export function getCurrentLocalPreset(): Preset | undefined {
  const localPreset = localStorage.getItem("currentPreset");

  if (!localPreset) {
    return;
  }

  return JSON.parse(localPreset);
}
