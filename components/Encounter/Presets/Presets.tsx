import { Suspense, useEffect, useState } from "react";
import { Select } from "@/components/CustomSelect/CustomSelect";
import css from "./Presets.module.css";
import {
  api,
  GlobalFlags,
  Preset,
  Segment,
  defaultSegments,
} from "@/resources";
import classNames from "classnames";
import { useSession } from "next-auth/react";
import { useActivationFlagsContext } from "@/contexts";
import { useParams, useRouter } from "next/navigation";

interface PresetProps {
  nodes: Record<number, Segment[]>;
  encounterId: number;
  selectedPreset: Preset;
  setSelectedPreset: (state: Preset) => void;
  userPresets: Preset[];
}

export function Presets({
  nodes,
  encounterId,
  selectedPreset,
  setSelectedPreset,
  userPresets,
}: PresetProps) {
  const { data: session, status } = useSession();
  const [flags, _] = useActivationFlagsContext();
  const router = useRouter();

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
        options={userPresets}
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
