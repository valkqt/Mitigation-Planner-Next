"use client";

import { Suspense } from "react";
import Encounter from "../components/Encounter/Encounter";
import "./App.css";
import "./index.css";

export default function Page() {
  return (
    <Suspense fallback={<div>bro</div>}>
      <Encounter />
    </Suspense>
  );
}
