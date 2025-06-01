import { create } from "zustand";
import {
  defaultFlags,
  defaultSegments,
  GlobalFlags,
  Preset,
  Segment,
} from "..";

type PresetStore = {
  preset: Preset;
  replace: (preset: Preset) => void;
  setName: (name: string) => void;
  setFlags: (flags: GlobalFlags) => void;
  setSegments: (segments: Record<number, Segment[]>) => void;
};

export const usePresetStore = create<PresetStore>((set) => ({
  preset: {
    id: "new",
    name: "New Preset",
    flags: defaultFlags,
    segments: defaultSegments,
  },
  replace: (preset) => set(() => ({ preset: preset })),
  setFlags: (flags) =>
    set((state) => ({ preset: { ...state.preset, flags: flags } })),
  setName: (name) =>
    set((state) => ({ preset: { ...state.preset, name: name } })),
  setSegments: (segments) =>
    set((state) => ({ preset: { ...state.preset, segments: segments } })),
}));
