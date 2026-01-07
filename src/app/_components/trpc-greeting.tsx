"use client";

import { api } from "@/trpc/client";

export function TrpcGreeting() {
  const { data, isFetching } = api.example.hello.useQuery({
    name: "Next.js",
  });

  if (isFetching) {
    return (
      <p className="text-base text-zinc-500 dark:text-zinc-400">
        Loading greeting...
      </p>
    );
  }

  return (
    <p className="text-base font-medium text-zinc-900 dark:text-zinc-50">
      {data?.greeting}
    </p>
  );
}
