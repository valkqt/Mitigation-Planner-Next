"use client";

import { useSession } from "next-auth/react";
import { redirect, useParams } from "next/navigation";

export default function Page() {
  const params = useParams<{ encounterId }>();
  const { data: session, status } = useSession();
  window.location.replace(`/encounters/${params.encounterId}/presets/new`);
  return <div>Loading...</div>;
}
