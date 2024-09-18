import { QueryClient, isServer } from "@tanstack/react-query";

function createServerQueryClient() {
  return new QueryClient();
}

function createBrowserQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

export function getQueryClient() {
  if (isServer) {
    return createServerQueryClient();
  }

  if (!browserQueryClient) {
    browserQueryClient = createBrowserQueryClient();
  }

  return browserQueryClient;
}
