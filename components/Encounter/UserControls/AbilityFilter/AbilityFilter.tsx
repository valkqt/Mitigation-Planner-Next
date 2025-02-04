import { Job, PlayerSkill } from "@/resources/types";
import css from "./AbilityFilter.module.css";
import SingleAbility from "../SingleAbility/SingleAbility";
import { useState } from "react";
import classNames from "classnames";
import { jobMap } from "@/resources/index";

interface AbilityFilterProps {
  abilities: PlayerSkill[];
  onAbilityToggle: (abilityId: number) => void;
  jobs: Job[];
}

export default function AbilityFilter({
  onAbilityToggle,
  jobs,
}: AbilityFilterProps) {
  const [open, setOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job>(jobs[0]);
  return (
    <div className={css.container}>
      <div className={css.jobFilter}>
        <div onClick={() => setOpen(!open)}>
          <div className={css.label}>
            <img src={jobMap[selectedJob.id]} className="miniIcon" alt="" />

            {selectedJob.name}
          </div>
          <div className={classNames({ toggleDisplay: !open }, css.dropdown)}>
            {jobs.map((job) => (
              <div
                key={job.id}
                className={css.dropdownItem}
                onClick={() => setSelectedJob(job)}
              >
                <img src={jobMap[job.id].icon} className="miniIcon" alt="" />
                <div>{job.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={css.idk}>idk</div>
      </div>
      {selectedJob.skills.map((ability) => (
        <SingleAbility
          ability={ability}
          onToggle={onAbilityToggle}
          key={ability.id}
        />
      ))}
    </div>
  );
}
