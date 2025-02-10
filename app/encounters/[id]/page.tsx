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
  const params = useParams<{ id: string }>();

  return (
    <ActivationFlagsContextProvider>
      <MouseContextProvider>
        <SessionProvider session={session}>
          <Suspense fallback={<div>cant load encounter</div>}>
            <Encounter id={params.id} />
          </Suspense>
        </SessionProvider>
      </MouseContextProvider>
    </ActivationFlagsContextProvider>
  );
}
