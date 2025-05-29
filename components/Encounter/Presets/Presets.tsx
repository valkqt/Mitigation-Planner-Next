import { useEffect } from "react";
import { Select } from "@/components/CustomSelect/CustomSelect";
import css from "./Presets.module.css";
import { api, Preset, Segment } from "@/resources";
import { useSession } from "next-auth/react";
import { useActivationFlagsContext } from "@/contexts";
import { useRouter } from "next/navigation";
import { useCurrentPreset } from "@/hooks/useCurrentPreset";
import { useQuery } from "@tanstack/react-query";
import { userPresetsQueryOptions } from "@/resources/query/user";

interface PresetProps {
  nodes: Record<number, Segment[]>;
  encounterId: number;
  selectedPreset: Preset;
  setSelectedPreset: (state: Preset) => void;
}

export function Presets({
  nodes,
  encounterId,
  selectedPreset,
  setSelectedPreset,
}: PresetProps) {
  const { data: session, status } = useSession();
  const [flags, _] = useActivationFlagsContext();
  const router = useRouter();
  const preset = useCurrentPreset();

  const {
    data: userPresets,
    isLoading,
    isError,
  } = useQuery(
    userPresetsQueryOptions({
      userId: session?.userId,
      enabled: session !== null,
    })
  );

  useEffect(() => {
    router.push(`/encounters/${encounterId}/presets/${selectedPreset.id}`);
  }, [selectedPreset]);

  function createPreset() {
    api.post("/presets", {
      name: "pepe",
      filters: flags,
      nodes: nodes,
      encounterId: encounterId,
      userId: session?.userId,
    });
  }

  return (
    <div className={css.container}>
      <Select
        options={userPresets ?? []}
        externalState={selectedPreset}
        externalStateSetter={setSelectedPreset}
      />
      {session?.user && (
        <>
          <button onClick={() => createPreset()}>Save</button>
        </>
      )}
    </div>
  );
}
