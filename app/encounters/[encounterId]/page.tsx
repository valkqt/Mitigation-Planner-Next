"use client";

import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const params = useParams<{ encounterId }>();
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    router.replace(`/encounters/${params.encounterId}/presets/new`);
  }, []);
  return <div>Loading...</div>;
}
