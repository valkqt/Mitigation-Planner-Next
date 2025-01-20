import { useEffect, useState } from "react";
import css from "./Encounter.module.css";
import { PlayerSkill, Job, Encounter as Fight } from "../../resources/types";
import Row from "./Row/Row";
import TimeDisplay from "./TimeDisplay/BossTimeline";
import { PlayerSkillType, SkillTarget } from "../../resources/globals";
import UserControls from "./UserControls/UserControls";
import { useActivationFlagsContext } from "../../contexts/ActivationFlagsContext";
import { FlagActivationTypes } from "../../contexts/ActivationFlagsContextProvider";
import BossRow from "./Row/BossRow";
import { api } from "../../api/axios";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function Encounter() {
  const [abilities, setAbilities] = useState<PlayerSkill[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [, setFlags] = useActivationFlagsContext();
  const [encounter, setEncounter] = useState<Fight>();
  const { data: session, status } = useSession();
  console.log(session);

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
        <Link href={"api/auth/signin"}>login</Link>
        <button onClick={() => signOut()}>Log out</button>
      </div>
      {session?.user && <div>hello {session.user.name}</div>}
      <UserControls
        jobs={jobs}
        onJobToggle={handleJobSelection}
        abilities={abilities}
        onAbilityToggle={toggleAbility}
        onSkillTargetToggle={handleAbilityFilter}
        onLevelFilter={handleLevelFilter}
      />
      <TimeDisplay encounter={encounter} />
      <div>
        <BossRow encounter={encounter} />
        {abilities.map((ability) => {
          return (
            <Row
              ability={ability}
              duration={encounter.duration}
              jobs={jobs}
              key={ability.id}
            />
          );
        })}
      </div>
    </div>
  );
}
