import { useEffect } from "react";
import { Select } from "@/components/CustomSelect/CustomSelect";
import css from "./Presets.module.css";
import { api } from "@/resources";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { userPresetsQueryOptions } from "@/resources/query/user";
import { usePresetStore } from "@/resources/store/presetStore";

interface PresetProps {
  encounterId: number;
}

export function Presets({ encounterId }: PresetProps) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const presetStore = usePresetStore();
  const preset = presetStore.preset;

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
    router.push(`/encounters/${encounterId}/presets/${preset.id}`);
  }, [preset]);

  function createPreset() {
    api.post("/presets", {
      name: "pepe",
      filters: preset.flags,
      nodes: preset.segments,
      encounterId: encounterId,
      userId: session?.userId,
    });
  }

  return (
    <div className={css.container}>
      <Select
        options={userPresets ?? []}
        externalState={preset}
        externalStateSetter={presetStore.replace}
      />
      {session?.user && (
        <>
          <button onClick={() => createPreset()}>Save</button>
        </>
      )}
    </div>
  );
}
