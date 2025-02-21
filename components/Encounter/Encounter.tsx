import { useEffect, useState } from "react";
import {
  api,
  PlayerSkillType,
  SkillTarget,
  segments,
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

import SignIn from "./Test/signin";
import Userinfo from "./Test/Userinfo";
import Signout from "./Test/signout";
import RegisterForm from "./Test/RegisterForm";
import LoginForm from "./Test/LoginForm";
import PostPreset from "./Test/PostPreset";
import { auth } from "@/auth";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { Encounter as Fight } from "@/resources/index";
import Navbar from "../Sidebar/Sidebar";
import Sidebar from "../Sidebar/Sidebar";
import { Presets } from "../Presets/Presets";
import { SidebarControl } from "../SidebarControl/SidebarControl";

interface EncounterProps {
  id: string;
}

export default function Encounter({ id }: EncounterProps) {
  // TODO: look into dependencies of "ability" state and possible refactors
  const [abilities, setAbilities] = useState<PlayerSkill[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [, setFlags] = useActivationFlagsContext();
  const [encounter, setEncounter] = useState<Fight>();
  const [nodes, setNodes] = useState(segments);
  const { data: session, status } = useSession();
  const [showSidebar, setShowSidebar] = useState(false);

  console.log(id);

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

  function handleJobSelection(jobId: number) {
    setFlags({ type: FlagActivationTypes.ToggleJobFlag, payload: jobId });
  }

  function toggleAbility(abilityId: number) {
    setFlags({
      type: FlagActivationTypes.ToggleAbilityFlag,
      payload: abilityId,
    });
  }

  function handleLevelFilter(threshold: number) {
    setFlags({
      type: FlagActivationTypes.LevelFilterFlag,
      payload: threshold,
    });
  }

  function handleAbilityFilter(filter: SkillTarget | PlayerSkillType) {
    if (filter in SkillTarget) {
      setFlags({
        type: FlagActivationTypes.ToggleSkillTargetFlag,
        payload: filter,
      });
    } else {
      setFlags({
        type: FlagActivationTypes.TogglePlayerSkillTypeFlag,
        payload: filter,
      });
    }
  }

  return (
    <div className={css.TimelineContainer}>
      <div className={css.EncounterInfo}>
        <h1 className={css.EncounterHeader}>{encounter.name}</h1>
      </div>
      <Presets />
      <div>
        {/* <RegisterForm /> */}
        {session?.user && (
          <>
            <div>HELLO {session?.user?.email}</div>
            <PostPreset segments={nodes} encounter={encounter} />
          </>
        )}

        {/* <SignIn />
        <Userinfo />
        <Signout /> */}
      </div>
      <div>{/* <button onClick={() => signOut()}>Log out</button> */}</div>
      {/* {session?.user && <div>hello {session.user.name}</div>} */}
      <BossTimeline encounter={encounter} />
      <div>
        <BossRow encounter={encounter} />
        {abilities.map((ability) => {
          return (
            <Row
              ability={ability}
              duration={encounter.duration}
              jobs={jobs}
              key={ability.id}
              nodes={nodes}
              setNodes={setNodes}
            />
          );
        })}
      </div>
      <Sidebar
        jobs={jobs}
        abilities={abilities}
        onAbilityFilter={toggleAbility}
        onAbilityTypeFilter={handleAbilityFilter}
        onJobSelection={handleJobSelection}
        onLevelFilter={handleLevelFilter}
        show={showSidebar}
        setShow={setShowSidebar}
      />
      <SidebarControl show={showSidebar} setShow={setShowSidebar} />
    </div>
  );
}
