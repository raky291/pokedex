import { QueryParams } from "./types";

function getQueryString(query: QueryParams): string {
  const searchParams = new URLSearchParams();

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      if (value !== undefined) {
        const params = Array.isArray(value) ? value : [value];
        params.forEach((param) => {
          searchParams.append(key, param);
        });
      }
    });
  }

  return searchParams.toString();
}

export function withQuery(query: QueryParams, pathname: string = ""): string {
  const queryString = getQueryString(query);
  return queryString ? `${pathname}?${queryString}` : pathname;
}
