"use client";

import { useState } from "react";
import css from "./Sidebar.module.css";
import classNames from "classnames";
import { useSession } from "next-auth/react";
import { createPortal } from "react-dom";
import LoginForm from "../Encounter/Test/LoginForm";
import SignIn from "../Encounter/Test/signin";
import Signout from "../Encounter/Test/signout";
import { UserControls } from "../Encounter/UserControls/UserControls";
import { Job, PlayerSkill, PlayerSkillType, SkillTarget } from "@/resources";

interface SidebarProps {
  jobs: Job[];
  abilities: PlayerSkill[];
  onJobSelection: (jobId: number) => void;
  onAbilityFilter: (abilityId: number) => void;
  onAbilityTypeFilter: (filter: SkillTarget | PlayerSkillType) => void;
  onLevelFilter: (threshold: number) => void;
  show: boolean;
  setShow: (state: boolean) => void;
}

export default function Sidebar({
  jobs,
  abilities,
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
          abilities={abilities}
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
