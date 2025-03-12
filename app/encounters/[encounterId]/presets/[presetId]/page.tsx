"use client";

import Encounter from "@/components/Encounter/Encounter";
import {
  ActivationFlagsContextProvider,
  MouseContextProvider,
} from "@/contexts";
import { SessionProvider } from "next-auth/react";
import { useParams } from "next/navigation";
import { Suspense } from "react";

export default function Page({ session }) {
  const params = useParams<{ encounterId; presetId }>();

  return (
    <ActivationFlagsContextProvider>
      <MouseContextProvider>
        <SessionProvider session={session}>
          <Suspense fallback={<div>cant load encounter</div>}>
            <Encounter
              encounterId={params.encounterId}
              presetId={params.presetId ?? "new"}
            />
          </Suspense>
        </SessionProvider>
      </MouseContextProvider>
    </ActivationFlagsContextProvider>
  );
}
