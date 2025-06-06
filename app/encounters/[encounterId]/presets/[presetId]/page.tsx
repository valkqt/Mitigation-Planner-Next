"use client";

import { Encounter } from "@/components/Encounter/";
import { MouseContextProvider } from "@/contexts";
import { ModalContextProvider } from "@/contexts/ModalContext/ModalContextProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams<{ encounterId; presetId }>();
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ModalContextProvider>
        <MouseContextProvider>
          <Encounter
            encounterId={params.encounterId}
            presetId={params.presetId}
          />
        </MouseContextProvider>
      </ModalContextProvider>
    </QueryClientProvider>
  );
}
