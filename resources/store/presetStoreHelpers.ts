import { GlobalFlags } from "..";

export class FlagsHelper {
  static jobs(jobId: number, flags: GlobalFlags): GlobalFlags {
    return {
      ...flags,
      jobs: {
        ...flags.jobs,
        [jobId]: !flags.jobs[jobId],
      },
    };
  }

  static abilities(abilityId: number, flags: GlobalFlags): GlobalFlags {
    return {
      ...flags,
      abilities: {
        ...flags.abilities,
        [abilityId]: !flags.abilities[abilityId],
      },
    };
  }

  static abilityType(type: string, flags: GlobalFlags) {
    return {
      ...flags,
      skillType: {
        ...flags.skillType,
        [type]: !flags.skillType[type],
      },
    };
  }

  static targetType(type: string, flags: GlobalFlags) {
    return {
      ...flags,
      target: {
        ...flags.target,
        [type]: !flags.target[type],
      },
    };
  }

  static level(threshold: number, flags: GlobalFlags): GlobalFlags {
    return {
      ...flags,
      level: threshold,
    };
  }
}
