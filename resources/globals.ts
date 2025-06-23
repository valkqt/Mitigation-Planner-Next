import { createSnapModifier } from "@dnd-kit/modifiers";
import { GlobalFlags, Segment } from "./index";

export const gridSize = 16;
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

export const tempUrl = "tempUrl=";
export const defaultUser = "guest";

export const encounterMap = {
  1: "/encounters/m5s.png",
  2: "/encounters/m6s.png",
  3: "/encounters/m7s.png",
  4: "/encounters/m8s.png",
};

export const currentRaids = [
  { label: "Dancing Green", link: "/encounters/1/presets/new" },
  { label: "Sugar Riot", link: "/encounters/2/presets/new" },
  { label: "Brute Abombinator", link: "/encounters/3/presets/new" },
  { label: "Howling Blade", link: "/encounters/4/presets/new" },
];

export const jobMap = {
  1: "/transparent_icons/sage.png",
  2: "/transparent_icons/whitemage.png",
  3: "/transparent_icons/astrologian.png",
  4: "/transparent_icons/scholar.png",
  5: "/transparent_icons/paladin.png",
  6: "/transparent_icons/warrior.png",
  7: "/transparent_icons/darkknight.png",
  8: "/transparent_icons/gunbreaker.png",
  9: "/transparent_icons/monk.png",
  10: "/transparent_icons/dragoon.png",
  11: "/transparent_icons/ninja.png",
  12: "/transparent_icons/samurai.png",
  13: "/transparent_icons/reaper.png",
  14: "/transparent_icons/viper.png",
  15: "/transparent_icons/bard.png",
  16: "/transparent_icons/machinist.png",
  17: "/transparent_icons/dancer.png",
  18: "/transparent_icons/blackmage.png",
  19: "/transparent_icons/summoner.png",
  20: "/transparent_icons/redmage.png",
  21: "/transparent_icons/pictomancer.png",
};

export const colors = {
  whm: "#fff0dc",
  sge: "#80a0f0",
  ast: "#ffe74a",
  sch: "#8657ff",

  pld: "#a8d2e6",
  war: "#cf2621",
  drk: "#d126cc",
  gnb: "#796d30",

  mnk: "#d19902",
  drg: "#4164cd",
  sam: "#e46d04",
  nin: "#af1964",
  rpr: "#965a90",
  vpr: "#108210",

  mch: "#6ee1d6",
  brd: "#91ba5e",
  dnc: "#e2b0af",

  blm: "#a579d6",
  smn: "#2d9b78",
  rdm: "#e87b7b",
  pct: "#fc92e1",

  cooldown: "rgb(70, 70, 70)",
};

export const abilityMap = {
  1: {
    icon: "/icons/SGE/kerachole.png",
    color1: colors.sge,
    color2: colors.cooldown,
  },
  2: {
    icon: "/icons/SGE/holos.png",
    color1: colors.sge,
    color2: colors.cooldown,
  },
  3: {
    icon: "/icons/SGE/philosophia.png",
    color1: colors.sge,
    color2: colors.cooldown,
  },
  4: {
    icon: "/icons/SGE/pneuma.png",
    color1: colors.sge,
    color2: colors.cooldown,
  },
  5: {
    icon: "/icons/SGE/krasis.png",
    color1: colors.sge,
    color2: colors.cooldown,
  },
  6: {
    icon: "/icons/SGE/panhaima.png",
    color1: colors.sge,
    color2: colors.cooldown,
  },
  7: {
    icon: "/icons/SGE/haima.png",
    color1: colors.sge,
    color2: colors.cooldown,
  },
  8: {
    icon: "/icons/SGE/physis_II.png",
    color1: colors.sge,
    color2: colors.cooldown,
  },
  9: {
    icon: "/icons/SGE/zoe.png",
    color1: colors.sge,
    color2: colors.cooldown,
  },
  10: {
    icon: "/icons/SGE/pepsis.png",
    color1: colors.sge,
    color2: colors.cooldown,
  },
  11: {
    icon: "/icons/SGE/soteria.png",
    color1: colors.sge,
    color2: colors.cooldown,
  },
  12: {
    icon: "/icons/WHM/Divine_Caress.png",
    color1: colors.whm,
    color2: colors.cooldown,
  },
  13: {
    icon: "/icons/WHM/Liturgy_of_the_Bell.png",
    color1: colors.whm,
    color2: colors.cooldown,
  },
  14: {
    icon: "/icons/WHM/Aquaveil.png",
    color1: colors.whm,
    color2: colors.cooldown,
  },
  15: {
    icon: "/icons/WHM/Temperance.png",
    color1: colors.whm,
    color2: colors.cooldown,
  },
  16: {
    icon: "/icons/WHM/Plenary_Indulgence.png",
    color1: colors.whm,
    color2: colors.cooldown,
  },
  17: {
    icon: "/icons/WHM/Tetragrammaton.png",
    color1: colors.whm,
    color2: colors.cooldown,
  },

  18: {
    icon: "/icons/WHM/Divine_Benison.png",
    color1: colors.whm,
    color2: colors.cooldown,
  },

  19: {
    icon: "/icons/WHM/Asylum.png",
    color1: colors.whm,
    color2: colors.cooldown,
  },
  20: {
    icon: "/icons/WHM/Assize.png",
    color1: colors.whm,
    color2: colors.cooldown,
  },

  21: {
    icon: "/icons/WHM/Benediction.png",
    color1: colors.whm,
    color2: colors.cooldown,
  },
  22: {
    icon: "/icons/AST/Sun_Sign.png",
    color1: colors.ast,
    color2: colors.cooldown,
  },
  23: {
    icon: "/icons/AST/Macrocosmos.png",
    color1: colors.ast,
    color2: colors.cooldown,
  },

  24: {
    icon: "/icons/AST/Exaltation.png",
    color1: colors.ast,
    color2: colors.cooldown,
  },

  25: {
    icon: "/icons/AST/Neutral_Sect.png",
    color1: colors.ast,
    color2: colors.cooldown,
  },

  26: {
    icon: "/icons/AST/Celestial_Intersection.png",
    color1: colors.ast,
    color2: colors.cooldown,
  },

  27: {
    icon: "/icons/AST/Earthly_Star.png",
    color1: colors.ast,
    color2: colors.cooldown,
  },

  28: {
    icon: "/icons/AST/Celestial_Opposition.png",
    color1: colors.ast,
    color2: colors.cooldown,
  },

  29: {
    icon: "/icons/AST/Collective_Unconscious.png",
    color1: colors.ast,
    color2: colors.cooldown,
  },

  30: {
    icon: "/icons/AST/Synastry.png",
    color1: colors.ast,
    color2: colors.cooldown,
  },

  31: {
    icon: "/icons/AST/Essential_Dignity.png",
    color1: colors.ast,
    color2: colors.cooldown,
  },
  32: {
    icon: "/icons/SCH/Seraphism.png",
    color1: colors.sch,
    color2: colors.cooldown,
  },
  33: {
    icon: "/icons/SCH/Expedient.png",
    color1: colors.sch,
    color2: colors.cooldown,
  },
  34: {
    icon: "/icons/SCH/Protraction.png",
    color1: colors.sch,
    color2: colors.cooldown,
  },
  35: {
    icon: "/icons/SCH/Summon_Seraph.png",
    color1: colors.sch,
    color2: colors.cooldown,
  },
  36: {
    icon: "/icons/SCH/Consolation.png",
    color1: colors.sch,
    color2: colors.cooldown,
  },
  37: {
    icon: "/icons/SCH/Fey_Blessing.png",
    color1: colors.sch,
    color2: colors.cooldown,
  },
  38: {
    icon: "/icons/SCH/Recitation.png",
    color1: colors.sch,
    color2: colors.cooldown,
  },
  39: {
    icon: "/icons/SCH/Dissipation.png",
    color1: colors.sch,
    color2: colors.cooldown,
  },
  40: {
    icon: "/icons/SCH/Deployment_Tactics.png",
    color1: colors.sch,
    color2: colors.cooldown,
  },
  41: {
    icon: "/icons/SCH/Sacred_Soil.png",
    color1: colors.sch,
    color2: colors.cooldown,
  },
  42: {
    icon: "/icons/SCH/Fey_Illumination.png",
    color1: colors.sch,
    color2: colors.cooldown,
  },
  43: {
    icon: "/icons/SCH/Whispering_Dawn.png",
    color1: colors.sch,
    color2: colors.cooldown,
  },
  44: {
    icon: "/icons/PLD/Sentinel.png",
    color1: colors.pld,
    color2: colors.cooldown,
  },
  45: {
    icon: "/icons/PLD/Cover.png",
    color1: colors.pld,
    color2: colors.cooldown,
  },
  46: {
    icon: "/icons/PLD/Hallowed_Ground.png",
    color1: colors.pld,
    color2: colors.cooldown,
  },
  47: {
    icon: "/icons/PLD/Bulwark.png",
    color1: colors.pld,
    color2: colors.cooldown,
  },
  48: {
    icon: "/icons/PLD/Divine_Veil.png",
    color1: colors.pld,
    color2: colors.cooldown,
  },
  49: {
    icon: "/icons/PLD/Intervention.png",
    color1: colors.pld,
    color2: colors.cooldown,
  },
  50: {
    icon: "/icons/PLD/Passage_of_Arms.png",
    color1: colors.pld,
    color2: colors.cooldown,
  },
  51: {
    icon: "/icons/PLD/Holy_Sheltron.png",
    color1: colors.pld,
    color2: colors.cooldown,
  },
  52: {
    icon: "/icons/PLD/Guardian.png",
    color1: colors.pld,
    color2: colors.cooldown,
  },
  53: {
    icon: "/icons/WAR/Damnation.png",
    color1: colors.war,
    color2: colors.cooldown,
  },
  54: {
    icon: "/icons/WAR/Bloodwhetting.png",
    color1: colors.war,
    color2: colors.cooldown,
  },
  55: {
    icon: "/icons/WAR/Nascent_Flash.png",
    color1: colors.war,
    color2: colors.cooldown,
  },
  56: {
    icon: "/icons/WAR/Shake_It_Off.png",
    color1: colors.war,
    color2: colors.cooldown,
  },
  57: {
    icon: "/icons/WAR/Equilibrium.png",
    color1: colors.war,
    color2: colors.cooldown,
  },
  58: {
    icon: "/icons/WAR/Raw_Intuition.png",
    color1: colors.war,
    color2: colors.cooldown,
  },
  59: {
    icon: "/icons/WAR/Holmgang.png",
    color1: colors.war,
    color2: colors.cooldown,
  },
  60: {
    icon: "/icons/WAR/Vengeance.png",
    color1: colors.war,
    color2: colors.cooldown,
  },
  61: {
    icon: "/icons/WAR/Thrill_of_Battle.png",
    color1: colors.war,
    color2: colors.cooldown,
  },
  62: {
    icon: "/icons/DRK/Shadowed_Vigil.png",
    color1: colors.drk,
    color2: colors.cooldown,
  },
  63: {
    icon: "/icons/DRK/Oblation.png",
    color1: colors.drk,
    color2: colors.cooldown,
  },
  64: {
    icon: "/icons/DRK/The_Blackest_Night.png",
    color1: colors.drk,
    color2: colors.cooldown,
  },
  65: {
    icon: "/icons/DRK/Dark_Missionary.png",
    color1: colors.drk,
    color2: colors.cooldown,
  },
  66: {
    icon: "/icons/DRK/Living_Dead.png",
    color1: colors.drk,
    color2: colors.cooldown,
  },
  67: {
    icon: "/icons/DRK/Dark_Mind.png",
    color1: colors.drk,
    color2: colors.cooldown,
  },
  68: {
    icon: "/icons/DRK/Shadow_Wall.png",
    color1: colors.drk,
    color2: colors.cooldown,
  },
  69: {
    icon: "/icons/GNB/Great_Nebula.png",
    color1: colors.gnb,
    color2: colors.cooldown,
  },
  70: {
    icon: "/icons/GNB/Heart_of_Corundum.png",
    color1: colors.gnb,
    color2: colors.cooldown,
  },
  71: {
    icon: "/icons/GNB/Heart_of_Stone.png",
    color1: colors.gnb,
    color2: colors.cooldown,
  },
  72: {
    icon: "/icons/GNB/Heart_of_Light.png",
    color1: colors.gnb,
    color2: colors.cooldown,
  },
  73: {
    icon: "/icons/GNB/Superbolide.png",
    color1: colors.gnb,
    color2: colors.cooldown,
  },
  74: {
    icon: "/icons/GNB/Aurora.png",
    color1: colors.gnb,
    color2: colors.cooldown,
  },
  75: {
    icon: "/icons/GNB/Nebula.png",
    color1: colors.gnb,
    color2: colors.cooldown,
  },
  76: {
    icon: "/icons/GNB/Camouflage.png",
    color1: colors.gnb,
    color2: colors.cooldown,
  },
  77: {
    icon: "/icons/MNK/Mantra.png",
    color1: colors.mnk,
    color2: colors.cooldown,
  },
  78: {
    icon: "/icons/MNK/Riddle_of_Earth.png",
    color1: colors.mnk,
    color2: colors.cooldown,
  },
  79: {
    icon: "/icons/NIN/Shade_Shift.png",
    color1: colors.nin,
    color2: colors.cooldown,
  },
  80: {
    icon: "/icons/SAM/Third_Eye.png",
    color1: colors.sam,
    color2: colors.cooldown,
  },
  81: {
    icon: "/icons/RPR/Arcane_Crest.png",
    color1: colors.rpr,
    color2: colors.cooldown,
  },
  82: {
    icon: "/icons/BRD/The_Warden's_Paean.png",
    color1: colors.brd,
    color2: colors.cooldown,
  },
  83: {
    icon: "/icons/BRD/Troubadour.png",
    color1: colors.brd,
    color2: colors.cooldown,
  },
  84: {
    icon: "/icons/BRD/Nature's_Minne.png",
    color1: colors.brd,
    color2: colors.cooldown,
  },
  85: {
    icon: "/icons/MCH/Tactician.png",
    color1: colors.mch,
    color2: colors.cooldown,
  },
  86: {
    icon: "/icons/DNC/Curing_Waltz.png",
    color1: colors.dnc,
    color2: colors.cooldown,
  },
  87: {
    icon: "/icons/DNC/Shield_Samba.png",
    color1: colors.dnc,
    color2: colors.cooldown,
  },
  88: {
    icon: "/icons/DNC/Improvisation.png",
    color1: colors.dnc,
    color2: colors.cooldown,
  },
  89: {
    icon: "/icons/BLM/Manaward.png",
    color1: colors.blm,
    color2: colors.cooldown,
  },
  90: {
    icon: "/icons/SMN/Radiant_Aegis.png",
    color1: colors.smn,
    color2: colors.cooldown,
  },
  91: {
    icon: "/icons/SMN/Everlasting_Flight.png",
    color1: colors.smn,
    color2: colors.cooldown,
  },
  92: {
    icon: "/icons/SMN/Rekindle.png",
    color1: colors.smn,
    color2: colors.cooldown,
  },
  93: {
    icon: "/icons/SMN/Lux_Solaris.png",
    color1: colors.smn,
    color2: colors.cooldown,
  },
  94: {
    icon: "/icons/RDM/Magick_Barrier.png",
    color1: colors.rdm,
    color2: colors.cooldown,
  },
  95: {
    icon: "/icons/PCT/Tempera_Coat.png",
    color1: colors.pct,
    color2: colors.cooldown,
  },
  96: {
    icon: "/icons/PCT/Tempera_Grassa.png",
    color1: colors.pct,
    color2: colors.cooldown,
  },
};

export const defaultFlags: GlobalFlags = {
  jobs: { 1: false, 2: false, 3: false, 4: false, 17: true },
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
    14: true,
    15: true,
    16: true,
    17: true,
    18: true,
    19: true,
    20: true,
    21: true,
    22: true,
    23: true,
    24: true,
    25: true,
    26: true,
    27: true,
    28: true,
    29: true,
    30: true,
    31: true,
    32: true,
    33: true,
    34: true,
    35: true,
    36: true,
    37: true,
    38: true,
    39: true,
    40: true,
    41: true,
    42: true,
    43: true,
    44: true,
    45: true,
    46: true,
    47: true,
    48: true,
    49: true,
    50: true,
    51: true,
    52: true,
    53: true,
    54: true,
    55: true,
    56: true,
    57: true,
    58: true,
    59: true,
    60: true,
    61: true,
    62: true,
    63: true,
    64: true,
    65: true,
    66: true,
    67: true,
    68: true,
    69: true,
    70: true,
    71: true,
    72: true,
    73: true,
    74: true,
    75: true,
    76: true,
    77: true,
    78: true,
    79: true,
    80: true,
    81: true,
    82: true,
    83: true,
    84: true,
    85: true,
    86: true,
    87: true,
    88: true,
    89: true,
    90: true,
    91: true,
    92: true,
    93: true,
    94: true,
    95: true,
    96: true,
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
  14: [],
  15: [],
  16: [],
  17: [],
  18: [],
  19: [],
  20: [],
  21: [],
  22: [],
  23: [],
  24: [],
  25: [],
  26: [],
  27: [],
  28: [],
  29: [],
  30: [],
  31: [],
  32: [],
  33: [],
  34: [],
  35: [],
  36: [],
  37: [],
  38: [],
  39: [],
  40: [],
  41: [],
  42: [],
  43: [],
  44: [],
  45: [],
  46: [],
  47: [],
  48: [],
  49: [],
  50: [],
  51: [],
  52: [],
  53: [],
  54: [],
  55: [],
  56: [],
  57: [],
  58: [],
  59: [],
  60: [],
  61: [],
  62: [],
  63: [],
  64: [],
  65: [],
  66: [],
  67: [],
  68: [],
  69: [],
  70: [],
  71: [],
  72: [],
  73: [],
  74: [],
  75: [],
  76: [],
  77: [],
  78: [],
  79: [],
  80: [],
  81: [],
  82: [],
  83: [],
  84: [],
  85: [],
  86: [],
  87: [],
  88: [],
  89: [],
  90: [],
  91: [],
  92: [],
  93: [],
  94: [],
  95: [],
  96: [],
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
