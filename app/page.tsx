"use client";

import { api } from "@/resources";
import { useMutation } from "@tanstack/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Page({ session }) {
  const queryClient = new QueryClient();
  const mutation = useMutation({
    mutationFn: () => {
      return api.post("/dev");
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <button onClick={() => mutation.mutate()}>Execute SQL</button>
    </QueryClientProvider>
  );
}
