import { useEffect, useState } from "react";
import {
  api,
  PlayerSkill,
  Job,
  Preset,
  defaultPreset,
} from "@/resources/index";
import css from "./Encounter.module.css";

// temporary shit

import { useSession } from "next-auth/react";
import { Encounter as Fight } from "@/resources/index";
import { Presets } from "./Presets/Presets";
import { SidebarComponent } from "./SidebarComponents/SidebarComponent";
import { Timeline } from "./Timeline/Timeline";
import { CustomHeader } from "../CustomHeader/CustomHeader";
import { useParams } from "next/navigation";
import { UserTimeline } from "./UserTimeline/UserTimeline";
import { useCurrentPreset } from "@/hooks/useCurrentPreset";
import { getPresetById } from "@/resources/methods/api/getEncounterById";

interface EncounterProps {
  encounterId: string;
  presetId: string;
}

export default function Encounter({ encounterId, presetId }: EncounterProps) {
  // TODO: look into dependencies of "ability" state and possible refactors
  const [abilities, setAbilities] = useState<PlayerSkill[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [encounter, setEncounter] = useState<Fight>();
  const [userPresets, setUserPresets] = useState<Preset[]>([]);
  const preset = useCurrentPreset();
  const [currentPreset, setCurrentPreset] = useState<Preset>(preset);
  const { data: session, status } = useSession();
  const params = useParams();

  useEffect(() => {
    if (session && userPresets.length === 0) {
      api.get(`/users/${session.userId}/presets`).then((res) => {
        setUserPresets([...userPresets, ...res.data]);
      });
    }
  }, [session]);

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
    if (params.presetId !== "new") {
      api.get(`/presets/${params.presetId}`).then((res) => {
        const result: Preset = res.data;
        if (result) {
          preset.setId(result.id);
          preset.setName(result.name);
          preset.setSegments(result.segments);
          preset.setFlags({ type: "replace", payload: result.flags });
          setCurrentPreset(result);
        }
      });
    }
  }, []);

  if (!encounter || jobs.length < 1) {
    return <div>bro</div>;
  }

  return (
    <div className={css.container}>
      <div className="headerFiller">
        <CustomHeader content={encounter.name} />
        <Presets
          nodes={preset.segments}
          encounterId={encounter.id}
          selectedPreset={currentPreset}
          setSelectedPreset={setCurrentPreset}
          userPresets={userPresets}
        />
      </div>
      <Timeline encounter={encounter} />
      <UserTimeline
        abilities={abilities}
        nodes={preset.segments}
        setNodes={preset.setSegments}
        jobs={jobs}
      />
      <SidebarComponent jobs={jobs} abilities={abilities} />
    </div>
  );
}
