"use client";

import { api } from "@/resources";
import { useMutation } from "@tanstack/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Page({ session }) {
  return (
    // <QueryClientProvider client={queryClient}>
    <button
      onClick={() => {
        api.post("/dev");
      }}
    >
      Execute SQL
    </button>
    // </QueryClientProvider>
  );
}
