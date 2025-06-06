import { useEffect } from "react";
import { Select } from "@/components/CustomSelect/CustomSelect";
import css from "./Presets.module.css";
import { api, defaultFlags, defaultSegments, Preset } from "@/resources";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { userPresetsQueryOptions } from "@/resources/query/user";
import { usePresetStore } from "@/resources/store/presetStore";
import { PresetSelect } from "./PresetSelect";
import { PresetMenu } from "./PresetMenu";

interface PresetProps {
  encounterId: number;
}

export function Presets({ encounterId }: PresetProps) {
  const { data: session, status } = useSession();
  const presetStore = usePresetStore();

  if (!session?.userId) {
    return;
  }

  const {
    data: userPresets,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["userPresets", session?.userId],
    queryFn: async () => {
      const { data } = await api.get(`/users/${session.userId}/presets`);
      return data;
    },
  });

  return (
    <div className={css.container}>
      {userPresets && (
        <PresetSelect collection={userPresets} encounterId={encounterId} />
      )}
      {session?.user && <PresetMenu />}
    </div>
  );
}
