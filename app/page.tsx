"use client";

import { Suspense } from "react";
import Encounter from "../components/Encounter/Encounter";
import "./App.css";
import "./index.css";
import {
  ActivationFlagsContextProvider,
  MouseContextProvider,
} from "@/contexts";

export default function Page() {
  return (
    <Suspense fallback={<div>bro</div>}>
      <ActivationFlagsContextProvider>
        <MouseContextProvider>
          <Encounter />
        </MouseContextProvider>
      </ActivationFlagsContextProvider>
    </Suspense>
  );
}
