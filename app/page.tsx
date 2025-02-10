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
import Link from "next/link";

export default function Page({ session }) {
  return <Link href={"/encounters/1"}>Go to refulgence</Link>;
}
