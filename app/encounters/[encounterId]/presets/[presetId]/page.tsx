"use client";

import { Encounter } from "@/components/Encounter/";
import {
  ActivationFlagsContextProvider,
  MouseContextProvider,
} from "@/contexts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams<{ encounterId; presetId }>();
  const queryClient = new QueryClient();
  return (
    <ActivationFlagsContextProvider>
      <MouseContextProvider>
        <QueryClientProvider client={queryClient}>
          <Encounter
            encounterId={params.encounterId}
            presetId={params.presetId}
          />
        </QueryClientProvider>
      </MouseContextProvider>
    </ActivationFlagsContextProvider>
  );
}
