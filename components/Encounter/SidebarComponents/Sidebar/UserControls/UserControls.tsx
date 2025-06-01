import css from "./UserControls.module.css";
import JobSelection from "./JobSelection/JobSelection";
import Filters from "./Filters/Filters";
import AbilityFilter from "./AbilityFilter/AbilityFilter";
import { Job } from "@/resources/index";

interface UserControlsProps {
  jobs: Job[];
  setShow: (state: boolean) => void;
}

export function UserControls({ jobs, setShow }: UserControlsProps) {
  return (
    <div className={css.UserControls}>
      <div className={css.controlHeader}>
        <div>Filters</div>
        <div className={css.closeButton} onClick={() => setShow(false)}>
          &#10006;
        </div>
      </div>
      <Filters />
      <JobSelection jobs={jobs} />
      <AbilityFilter jobs={jobs} />
    </div>
  );
}
