"use client";

import { LoadingComponent } from "@/components/LoadingComponent";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const params = useParams<{ encounterId }>();
  const router = useRouter();

  useEffect(() => {
    router.replace(`/encounters/${params.encounterId}/presets/new`);
  }, [params.encounterId]);
  return <LoadingComponent encounterId={params.encounterId} />;
}
