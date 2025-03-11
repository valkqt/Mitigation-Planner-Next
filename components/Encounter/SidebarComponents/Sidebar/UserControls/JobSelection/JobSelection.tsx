import css from "./JobSelection.module.css";
import { Job } from "@/resources/types";
import classNames from "classnames";
import { useActivationFlagsContext } from "@/contexts/index";
import { jobMap } from "@/resources/index";

interface JobSelectionProps {
  jobs: Job[];
  onToggle: (jobId: number) => void;
}

export default function JobSelection({ jobs, onToggle }: JobSelectionProps) {
  const [flags] = useActivationFlagsContext();
  return (
    <div className={css.filter}>
      {jobs.map((job, index) => (
        <div
          className={classNames(
            {
              [css.active]: flags.jobs[job.id],
              [css.inactive]: !flags.jobs[job.id],
            },
            css.button
          )}
          key={index}
          onClick={() => onToggle(job.id)}
        >
          <img src={jobMap[job.id]} className={css.transparentIcon} alt="" />
          <div className={css.JobName}>{job.name}</div>
        </div>
      ))}
    </div>
  );
}
