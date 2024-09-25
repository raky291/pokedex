import { QueryParams } from "./types";

export function getQueryString(query: QueryParams): string {
  const searchParams = new URLSearchParams();

  Object.entries(query).forEach(([key, value]) => {
    if (value !== undefined) {
      const params = Array.isArray(value) ? value : [value];
      params.forEach((param) => {
        searchParams.append(key, param);
      });
    }
  });

  return searchParams.toString();
}
