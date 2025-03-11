import { useEffect, useState } from "react";
import {
  api,
  PlayerSkillType,
  SkillTarget,
  PlayerSkill,
  Job,
} from "@/resources/index";
import { Row, BossRow, BossTimeline, UserControls } from "@/components/index";
import {
  useActivationFlagsContext,
  FlagActivationTypes,
} from "@/contexts/index";
import css from "./Encounter.module.css";

// temporary shit

import SignIn from "../Test/signin";
import Userinfo from "../Test/Userinfo";
import Signout from "../Test/signout";
import RegisterForm from "../Test/RegisterForm";
import LoginForm from "../Test/LoginForm";
import PostPreset from "../Test/PostPreset";
import { auth } from "@/auth";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { Encounter as Fight } from "@/resources/index";
import { Presets } from "./Presets/Presets";
import { SidebarControl } from "./SidebarComponents/SidebarControl/SidebarControl";
import { SidebarComponent } from "./SidebarComponents/SidebarComponent";
import { Timeline } from "./Timeline/Timeline";
import { EncounterHeader } from "./EncounterHeader/EncounterHeader";

interface EncounterProps {
  id: string;
}

export default function Encounter({ id }: EncounterProps) {
  // TODO: look into dependencies of "ability" state and possible refactors
  const [abilities, setAbilities] = useState<PlayerSkill[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [encounter, setEncounter] = useState<Fight>();
  const { data: session, status } = useSession();

  useEffect(() => {
    api.get(`/encounters/${id}`).then((res) => {
      setEncounter(res.data);
    });
    api.get("/jobs").then((res) => {
      setJobs(res.data);
      let skills = [];
      res.data.forEach((job) => {
        skills = skills.concat(job.skills);
      });
      setAbilities(skills);
    });
  }, []);

  if (!encounter || jobs.length < 1) {
    return <div>bro</div>;
  }

  return (
    <div className={css.container}>
      <EncounterHeader encounter={encounter} />
      <Presets />
      <Timeline encounter={encounter} jobs={jobs} abilities={abilities} />
      <SidebarComponent jobs={jobs} abilities={abilities} />
    </div>
  );
}
