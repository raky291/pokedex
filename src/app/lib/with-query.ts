import { QueryParams } from "./types";

export function withQuery(url: string, query?: QueryParams): string {
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

  const queryString = searchParams.toString();
  return queryString ? `${url}?${queryString}` : url;
}
