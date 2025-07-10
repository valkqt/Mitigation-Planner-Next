"use client";

import { LoadingComponent } from "@/components/common/LoadingComponent";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import {
  SetStateAction,
  Dispatch,
  useCallback,
  useState,
  useEffect,
} from "react";

type UseStateReturn<T> = [T | undefined, Dispatch<SetStateAction<T>>];

// function usePresetState<TState>(): UseStateReturn<TState> {
//   const queryClient = useQueryClient();
//   const maybePreset = window.localStorage.getItem("preset");
//   const localPreset = maybePreset ? (JSON.parse(maybePreset) as TState) : null;

//   const { data: remotePreset } = useQuery(
//     {
//       queryKey: ["preset"],
//       queryFn: () => {
//         return "plofi" as TState;
//       },
//     },
//     queryClient
//   );

//   const { mutate: updatePreset } = useMutation(
//     {
//       mutationFn: (state: TState) => {
//         return Promise.resolve();
//       },
//       onMutate: (state) => {
//         queryClient.setQueryData(["preset"], state);
//         window.localStorage.setItem("preset", JSON.stringify(state));
//       },
//     },
//     queryClient
//   );

//   return [localPreset ?? remotePreset, updatePreset];
// }

export default function Page() {
  const params = useParams<{ encounterId }>();
  const router = useRouter();

  useEffect(() => {
    router.replace(`/encounters/${params.encounterId}/presets/new`);
  }, [params.encounterId]);
  return <LoadingComponent encounterId={params.encounterId} />;
}
