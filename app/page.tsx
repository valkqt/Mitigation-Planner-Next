"use client";

import { api } from "@/resources";
import Link from "next/link";

export default function Page({ session }) {
  return (
    <button
      onClick={() => {
        api.post("/dev");
      }}
    >
      Execute SQL
    </button>
  );
}
