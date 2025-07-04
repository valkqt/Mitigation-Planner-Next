import { Ability, Expansion } from "@prisma/client";
import {
  DamageType,
  EnemySkillTarget,
  EnemySkillType,
  PlayerSkillType,
  SkillTarget,
} from "./index";

export interface Job {
  id: number;
  name: string;
  skills: AbilitiesOnJobs[];
  role: Role;
}

export interface Segment {
  abilityId: number;
  segmentId: string;
  start: number;
  length: number;
}

export enum Source {
  Ally,
  Boss,
  Enemy,
}

export enum Role {
  DPS = "DPS",
  TANK = "TANK",
  HEALER = "HEALER",
}

export interface AbilityStyle {
  icon: string;
  color1: string;
  color2: string;
}

export interface EnemySkill {
  id: number;
  name: string;
  source: Source;
  castTime: number;
  targets: EnemySkillTarget[];
  type: EnemySkillType;
  damageType: DamageType;
  description: string;
}

export interface PlayerSkill {
  id: number;
  name: string;
  level: number;
  cooldown: number;
  duration: number;
  target: SkillTarget;
  type: PlayerSkillType;
  jobs: AbilitiesOnJobs;
}

export interface AbilitiesOnJobs {
  abilityId: number;
  jobId: number;
  job: Job;
  ability: PlayerSkill;
}

export interface Timeline {
  id: number;
  timestamp: number;
  hasCast: boolean;
  castTime: number;
  mechanic: EnemySkill;
}

export interface Encounter {
  id: number;
  name: string;
  expansion: Expansion;
  level: number;
  duration: number;
  mechanics: Timeline[];
}

export interface Preset {
  id: string;
  name: string;
  flags: GlobalFlags;
  segments: Record<number, Segment[]>;
}

export interface GlobalFlags {
  jobs: Record<number, boolean>;
  abilities: Record<number, boolean>;
  target: Record<string, boolean>;
  skillType: Record<string, boolean>;
  level: number;
}
