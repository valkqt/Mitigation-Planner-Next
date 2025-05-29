import { useEffect, useState } from "react";
import { api, PlayerSkill, Job, Preset } from "@/resources/index";
import css from "./Encounter.module.css";

import { useSession } from "next-auth/react";
import { Encounter as Fight } from "@/resources/index";
import { Presets } from "./Presets/Presets";
import { SidebarComponent } from "./SidebarComponents/SidebarComponent";
import { Timeline } from "./Timeline/Timeline";
import { CustomHeader } from "../CustomHeader/CustomHeader";
import { useParams } from "next/navigation";
import { UserTimeline } from "./UserTimeline/UserTimeline";
import { useCurrentPreset } from "@/hooks/useCurrentPreset";
import { useQuery } from "@tanstack/react-query";
import { encounterQueryOptions } from "@/resources/query/encounter";
interface EncounterProps {
  encounterId: string;
  presetId: string;
}

export function Encounter({ encounterId, presetId }: EncounterProps) {
  // TODO: look into dependencies of "ability" state and possible refactors
  const params = useParams();
  const [abilities, setAbilities] = useState<PlayerSkill[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);
  const preset = useCurrentPreset();
  const [currentPreset, setCurrentPreset] = useState<Preset>(preset);
  const { data: session, status } = useSession();
  const {
    data: encounter,
    isLoading,
    isError,
  } = useQuery(
    encounterQueryOptions({
      encounterId: encounterId,
      enabled: encounterId !== null,
    })
  );

  useEffect(() => {
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
        />
      </div>
      <Timeline encounter={encounter} />
      <UserTimeline
        abilities={abilities}
        nodes={preset.segments}
        setNodes={preset.setSegments}
        jobs={jobs}
      />
      <SidebarComponent jobs={jobs} />
    </div>
  );
}
