"use client";

import { Suspense } from "react";
import Encounter from "../components/Encounter/Encounter";
import "./App.css";
import "./index.css";
import {
  ActivationFlagsContextProvider,
  MouseContextProvider,
} from "@/contexts";
import { SessionProvider } from "next-auth/react";

export default function Page({ session }) {
  return (
    <ActivationFlagsContextProvider>
      <MouseContextProvider>
        <SessionProvider session={session}>
          <Encounter />
        </SessionProvider>
      </MouseContextProvider>
    </ActivationFlagsContextProvider>
  );
}
