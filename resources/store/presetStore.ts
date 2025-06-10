import { create } from "zustand";
import {
  defaultFlags,
  defaultSegments,
  GlobalFlags,
  Preset,
  Segment,
  tempUrl,
} from "..";

type PresetStore = {
  preset: Preset;
  replace: (preset: Preset) => void;
  setName: (name: string) => void;
  setFlags: (flags: GlobalFlags) => void;
  setSegments: (segments: Record<number, Segment[]>) => void;
};

function GenerateRandomString(): string {
  return Array.from(Array(20), () =>
    Math.floor(Math.random() * 36).toString(36)
  ).join("");
}

export const usePresetStore = create<PresetStore>((set) => ({
  preset: {
    id: `${tempUrl + GenerateRandomString()}`,
    name: "New Preset",
    flags: defaultFlags,
    segments: defaultSegments,
  },
  replace: (preset) => set(() => ({ preset: preset })),
  setName: (name) =>
    set((state) => ({ preset: { ...state.preset, name: name } })),
  setFlags: (flags) =>
    set((state) => ({ preset: { ...state.preset, flags: flags } })),
  setSegments: (segments) =>
    set((state) => ({ preset: { ...state.preset, segments: segments } })),
}));
