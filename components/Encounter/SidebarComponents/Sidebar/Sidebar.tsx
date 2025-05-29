"use client";

import css from "./Sidebar.module.css";
import classNames from "classnames";
import { Job, PlayerSkill, PlayerSkillType, SkillTarget } from "@/resources";
import { UserControls } from "./UserControls/UserControls";

interface SidebarProps {
  jobs: Job[];
  onJobSelection: (jobId: number) => void;
  onAbilityFilter: (abilityId: number) => void;
  onAbilityTypeFilter: (filter: SkillTarget | PlayerSkillType) => void;
  onLevelFilter: (threshold: number) => void;
  show: boolean;
  setShow: (state: boolean) => void;
}

export default function Sidebar({
  jobs,
  onJobSelection,
  onAbilityFilter,
  onAbilityTypeFilter,
  onLevelFilter,
  show,
  setShow,
}: SidebarProps) {
  return (
    <div className={classNames(css.navbar, !show ? css.navbarClosed : "")}>
      {show && (
        <UserControls
          jobs={jobs}
          onJobToggle={onJobSelection}
          onAbilityToggle={onAbilityFilter}
          onSkillTargetToggle={onAbilityTypeFilter}
          onLevelFilter={onLevelFilter}
          setShow={setShow}
        />
      )}
    </div>
  );
}
