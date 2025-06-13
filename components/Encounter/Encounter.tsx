import { api } from "@/resources/index";
import css from "./Encounter.module.css";

import { useSession } from "next-auth/react";
import { Presets } from "./Presets/Presets";
import { SidebarComponent } from "./SidebarComponents/SidebarComponent";
import { Timeline } from "./Timeline/Timeline";
import { CustomHeader } from "../CustomHeader/CustomHeader";
import { UserTimeline } from "./UserTimeline/UserTimeline";
import { useQueries } from "@tanstack/react-query";
import { encounterQueryOptions } from "@/resources/query/encounter";
import { jobsQueryOptions } from "@/resources/query/jobs";
import { usePresetStore } from "@/resources/store/presetStore";
interface EncounterProps {
  encounterId: string;
  presetId: string;
}

export function Encounter({ encounterId, presetId }: EncounterProps) {
  const { data: session, status } = useSession();
  const presetStore = usePresetStore();

  const [encounterQuery, jobsQuery] = useQueries({
    queries: [
      encounterQueryOptions({
        encounterId: encounterId,
        enabled: encounterId !== null,
      }),
      jobsQueryOptions(),
      {
        queryKey: ["preset", presetId],
        queryFn: async ({ queryKey }) => {
          const [, presetId] = queryKey;

          const { data } = await api.get(`/presets/${presetId}`);
          if (data) {
            presetStore.replace(data);
          }

          return data;
        },
      },
    ],
  });

  if (!encounterQuery.data || jobsQuery?.data?.length < 1) {
    return <div>Loading...</div>;
  }

  return (
    <div className={css.container}>
      <div className={css.headerFiller}>
        <CustomHeader content={encounterQuery.data.name} />
        <Presets encounterId={encounterQuery.data.id} />
      </div>
      <Timeline encounter={encounterQuery.data} />
      <UserTimeline jobs={jobsQuery.data} encounter={encounterQuery.data} />
      <SidebarComponent jobs={jobsQuery.data} />
    </div>
  );
}
