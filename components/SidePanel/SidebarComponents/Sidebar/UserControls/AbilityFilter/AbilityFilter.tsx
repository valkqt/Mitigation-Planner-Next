import { Job } from "@/src/domain/types";
import css from "./AbilityFilter.module.css";
import SingleAbility from "../SingleAbility/SingleAbility";
import { useState } from "react";
import classNames from "classnames";
import { jobMap } from "@/src/domain/globals";
import { Select } from "@/components/common/CustomSelect/CustomSelect";
import Image from "next/image";

interface AbilityFilterProps {
  jobs: Job[];
}

export default function AbilityFilter({ jobs }: AbilityFilterProps) {
  const [open, setOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job>(jobs[0]);
  return (
    <div className={css.container}>
      <div className={css.jobFilter}>
        <div className={css.idk}>Filter</div>
        <Select
          options={jobs}
          iconMap={jobMap}
          externalState={selectedJob}
          externalStateSetter={setSelectedJob}
        />

        <div onClick={() => setOpen(!open)}>
          <div className={classNames({ toggleDisplay: !open }, css.dropdown)}>
            {jobs.map((job) => (
              <div
                key={job.id}
                className={css.dropdownItem}
                onClick={() => setSelectedJob(job)}
              >
                <Image
                  src={jobMap[job.id]}
                  className="miniIcon"
                  alt=""
                  width={20}
                  height={20}
                />
                <div>{job.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedJob.skills.map((i) => (
        <SingleAbility ability={i.ability} key={i.abilityId} />
      ))}
    </div>
  );
}
