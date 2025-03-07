"use client";

import { QueryClient, QueryClientProvider } from "react-query";

//queryClient안에 모든 request, response, cache가 저장되어 있음
export const queryClient = new QueryClient();

export default function ReactQueryProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
