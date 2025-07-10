import { api } from "@/src/services/client/axios";
import css from "./Encounter.module.css";
import { Presets } from "./Presets/Presets";
import { SidebarComponent } from "@/components/SidePanel/SidebarComponents";
import { Timeline } from "./Timeline/Timeline";
import { Header } from "@/components/Layout/Header";
import { UserTimeline } from "./UserTimeline/UserTimeline";
import { useQueries } from "@tanstack/react-query";
import { encounterQueryOptions } from "@/src/services/client/query/encounter";
import { jobsQueryOptions } from "@/src/services/client/query/jobs";
import { usePresetStore } from "@/src/services/client/store/presetStore";
import { LoadingComponent } from "../common/LoadingComponent";
interface EncounterProps {
  encounterId: string;
  presetId: string;
}

export function Encounter({ encounterId, presetId }: EncounterProps) {
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
    return <LoadingComponent encounterId={encounterId} />;
  }

  return (
    <>
      <div className={css.headerFiller}>
        <Header content={encounterQuery.data.name} />
        <Presets encounterId={encounterQuery.data.id} />
      </div>
      <div className={css.container}>
        <Timeline encounter={encounterQuery.data} />
        <UserTimeline jobs={jobsQuery.data} encounter={encounterQuery.data} />
        <SidebarComponent jobs={jobsQuery.data} />
        <div className={css.filler}></div>
      </div>
    </>
  );
}
