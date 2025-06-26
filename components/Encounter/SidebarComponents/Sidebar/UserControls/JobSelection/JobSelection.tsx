import css from "./JobSelection.module.css";
import { Job } from "@/resources/types";
import classNames from "classnames";
import { jobMap, Role } from "@/resources/index";
import { usePresetStore } from "@/resources/store/presetStore";
import { FlagsHelper } from "@/resources/store/presetStoreHelpers";

interface JobSelectionProps {
  jobs: Job[];
}

export default function JobSelection({ jobs }: JobSelectionProps) {
  const presetStore = usePresetStore();

  function toggleJob(jobId: number) {
    presetStore.setFlags(FlagsHelper.jobs(jobId, presetStore.preset.flags));
  }
  return (
    <div className={css.filter}>
      {jobs.map((job, index) => {
        return (
          <div
            className={classNames(
              {
                [css.healer]:
                  presetStore.preset.flags.jobs[job.id] &&
                  job.role === Role.HEALER,
                [css.tank]:
                  presetStore.preset.flags.jobs[job.id] &&
                  job.role === Role.TANK,
                [css.dps]:
                  presetStore.preset.flags.jobs[job.id] &&
                  job.role === Role.DPS,

                [css.inactive]: !presetStore.preset.flags.jobs[job.id],
              },
              css.button
            )}
            key={index}
            onClick={() => toggleJob(job.id)}
          >
            <img src={jobMap[job.id]} className={css.transparentIcon} alt="" />
            <div className={css.JobName}>{job.name}</div>
          </div>
        );
      })}
    </div>
  );
}
