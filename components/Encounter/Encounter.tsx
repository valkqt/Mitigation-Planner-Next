import { useEffect, useState } from "react";
import {
  api,
  PlayerSkillType,
  SkillTarget,
  segments,
  PlayerSkill,
  Job,
  Encounter as Fight,
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

export default function Encounter() {
  // TODO: look into dependencies of "ability" state and possible refactors
  const [abilities, setAbilities] = useState<PlayerSkill[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [, setFlags] = useActivationFlagsContext();
  const [encounter, setEncounter] = useState<Fight>();
  const [nodes, setNodes] = useState(segments);

  useEffect(() => {
    api.get("/encounters/1").then((res) => {
      setEncounter(res.data);
    });
    api.get("/jobs").then((res) => {
      setJobs(res.data);
      console.log(res.data);
      let skills = [];
      res.data.forEach((job) => {
        skills = skills.concat(job.skills);
      });
      setAbilities(skills);
    });
  }, []);

  const pepe = auth();
  
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
      <div>
        {/* <RegisterForm /> */}
        <LoginForm />
        <PostPreset segments={nodes} />
        <div>{pepe.then((res) => res?.user?.id)}</div>

        {/* <SignIn />
        <Userinfo />
        <Signout /> */}
      </div>
      <div>{/* <button onClick={() => signOut()}>Log out</button> */}</div>
      {/* {session?.user && <div>hello {session.user.name}</div>} */}
      <UserControls
        jobs={jobs}
        abilities={abilities}
        onJobToggle={handleJobSelection}
        onAbilityToggle={toggleAbility}
        onSkillTargetToggle={handleAbilityFilter}
        onLevelFilter={handleLevelFilter}
      />
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
    </div>
  );
}
