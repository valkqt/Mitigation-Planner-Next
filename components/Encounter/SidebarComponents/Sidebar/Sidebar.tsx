"use client";

import css from "./Sidebar.module.css";
import classNames from "classnames";
import { Job, PlayerSkillType, SkillTarget } from "@/resources";
import { UserControls } from "./UserControls/UserControls";

interface SidebarProps {
  jobs: Job[];
  show: boolean;
  setShow: (state: boolean) => void;
}

export default function Sidebar({ jobs, show, setShow }: SidebarProps) {
  return (
    <div className={classNames(css.navbar, !show ? css.navbarClosed : "")}>
      {show && <UserControls jobs={jobs} setShow={setShow} />}
    </div>
  );
}
