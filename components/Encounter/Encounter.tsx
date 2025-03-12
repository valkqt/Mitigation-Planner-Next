import { useEffect, useState } from "react";
import { api, PlayerSkill, Job, Preset } from "@/resources/index";
import css from "./Encounter.module.css";

// temporary shit

import { useSession } from "next-auth/react";
import { Encounter as Fight } from "@/resources/index";
import { Presets } from "./Presets/Presets";
import { SidebarComponent } from "./SidebarComponents/SidebarComponent";
import { Timeline } from "./Timeline/Timeline";
import { EncounterHeader } from "./EncounterHeader/EncounterHeader";

interface EncounterProps {
  encounterId: string;
  presetId: string;
}

export default function Encounter({ encounterId, presetId }: EncounterProps) {
  // TODO: look into dependencies of "ability" state and possible refactors
  const [abilities, setAbilities] = useState<PlayerSkill[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [encounter, setEncounter] = useState<Fight>();
  const [presets, setPresets] = useState<Preset[]>([]);
  const { data: session, status } = useSession();

  useEffect(() => {
    api.get(`/encounters/${encounterId}`).then((res) => {
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
    // api.get(`/presets/${presetId}`).then((res) => {
    //   setPresets(res.data);
    // });
  }, []);

  if (!encounter || jobs.length < 1) {
    return <div>bro</div>;
  }

  return (
    <div className={css.container}>
      <EncounterHeader encounter={encounter} />
      <Presets id={presetId} presets={presets} />
      <Timeline encounter={encounter} jobs={jobs} abilities={abilities} />
      <SidebarComponent jobs={jobs} abilities={abilities} />
    </div>
  );
}
