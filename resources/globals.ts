import { createSnapModifier } from "@dnd-kit/modifiers";
import { GlobalFlags, Preset, Segment } from "./index";

export const gridSize = 8;
export const defaultCoordinates = {
  x: 0,
  y: 0,
};

export const maxLevel = 100;
export const levelArray: number[] = Array.from(
  { length: maxLevel / 10 - 4 },
  (_, index) => {
    return 50 + index * 10;
  }
);

export const snapToGridModifier = createSnapModifier(gridSize);

export const jobMap = {
  1: "/transparent_icons/sage.png",
  2: "/transparent_icons/whitemage.png",
  3: "/transparent_icons/scholar.png",
  4: "/transparent_icons/astrologian.png",
};

export const abilityMap = {
  1: { icon: "/icons/SGE/kerachole.png", color1: "#60cdb2", color2: "#08453f" },
  2: { icon: "/icons/SGE/krasis.png", color1: "#60cdb2", color2: "#08453f" },
  3: { icon: "/icons/SGE/panhaima.png", color1: "#60cdb2", color2: "#08453f" },
  4: {
    icon: "/icons/SGE/physis_II.png",
    color1: "#60cdb2",
    color2: "#08453f",
  },
  5: {
    icon: "/icons/SGE/holos.png",
    color1: "#60cdb2",
    color2: "#08453f",
  },
  6: { icon: "/icons/SGE/pneuma.png", color1: "#60cdb2", color2: "#08453f" },
  7: { icon: "/icons/SGE/zoe.png", color1: "#60cdb2", color2: "#08453f" },
  8: { icon: "/icons/SGE/soteria.png", color1: "#60cdb2", color2: "#08453f" },
  9: {
    icon: "/icons/SGE/haima.png",
    color1: "#60cdb2",
    color2: "#08453f",
  },
  10: {
    icon: "/icons/SGE/philosophia.png",
    color1: "#60cdb2",
    color2: "#08453f",
  },
  11: { icon: "/icons/WHM_temperance.png", color1: "white", color2: "white" },
  12: {
    icon: "/icons/SCH_expedient.png",
    color1: "white",
    color2: "white",
  },
  13: {
    icon: "/icons/AST_collective_unconscious.png",
    color1: "white",
    color2: "white",
  },
};

export const defaultFlags: GlobalFlags = {
  jobs: { 1: true, 2: false, 3: false, 4: false },
  abilities: {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    10: true,
    11: true,
    12: true,
    13: true,
  },
  target: { ALLY: false, RAID: true, SELF: false },
  skillType: { HEALING: false, MITIGATION: true, OTHER: false },
  level: maxLevel,
};

export const defaultSegments: Record<number, Segment[]> = {
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
  6: [],
  7: [],
  8: [],
  9: [],
  10: [],
  11: [],
  12: [],
  13: [],
};

export const defaultPreset: Preset = {
  id: "new",
  name: "New Preset",
  flags: defaultFlags,
  segments: defaultSegments,
};

export enum Axis {
  All,
  Vertical,
  Horizontal,
}

export enum SkillTarget {
  SELF = "SELF",
  ALLY = "ALLY",
  RAID = "RAID",
}

export enum EnemySkillTarget {
  SELF = "SELF",
  RAID = "RAID",
  GROUND = "GROUND",
  MAIN_THREAT = "MAIN_THREAT",
  SECONDARY_THREAT = "SECONDARY_THREAT",
  RANDOM_PLAYER = "RANDOM_PLAYER",
}

export enum PlayerSkillType {
  MITIGATION = "MITIGATION",
  HEALING = "HEALING",
  BUFF = "BUFF",
  OTHER = "OTHER",
}

export enum EnemySkillType {
  Setup,
  Damage,
  Enrage,
  Other,
}

export enum DamageType {
  Physical,
  Magical,
  Darkness,
  Misc,
  None,
}
