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
}

export default function Sidebar({
  jobs,
  abilities,
  onJobSelection,
  onAbilityFilter,
  onAbilityTypeFilter,
  onLevelFilter,
}: SidebarProps) {
  const [show, setShow] = useState(false);
  const { data: session, status } = useSession();
  const [panelOpen, setPanelOpen] = useState(false);

  return (
    <nav className={classNames(css.navbar, !panelOpen ? css.pepe : "")}>
      <div className={css.arrow} onClick={() => setPanelOpen(!panelOpen)}>
        ←
      </div>
      <div className={css.authModule}>
        {panelOpen && (
          <div>
            <UserControls
              jobs={jobs}
              abilities={abilities}
              onJobToggle={onJobSelection}
              onAbilityToggle={onAbilityFilter}
              onSkillTargetToggle={onAbilityTypeFilter}
              onLevelFilter={onLevelFilter}
            />

            {/* <div className={css.navbarContent}>
              <h3>Mitigation Planner mrow</h3>
              <div>Eden's Gate: Refulgence</div>
              {!session?.user && (
                <>
                  <button
                    className={css.loginButton}
                    onClick={() => setShow(!show)}
                  >
                    Login
                  </button>
                </>
              )}
              {session?.user && <Signout />}
              {typeof window !== undefined &&
                createPortal(
                  <div
                    className={classNames(css.modal, { toggleDisplay: !show })}
                  >
                    <div>
                      <LoginForm />
                      <SignIn />
                    </div>
                  </div>,
                  document.body
                )}
            </div> */}
          </div>
        )}
      </div>
    </nav>
  );
}
