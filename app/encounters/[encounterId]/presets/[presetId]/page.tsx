"use client";

import Encounter from "@/components/Encounter/Encounter";
import {
  ActivationFlagsContextProvider,
  MouseContextProvider,
} from "@/contexts";
import { useParams } from "next/navigation";
import { Suspense } from "react";

export default function Page() {
  const params = useParams<{ encounterId; presetId }>();

  return (
    <ActivationFlagsContextProvider>
      <MouseContextProvider>
        <Encounter
          encounterId={params.encounterId}
          presetId={params.presetId ?? "new"}
        />
      </MouseContextProvider>
    </ActivationFlagsContextProvider>
  );
}
