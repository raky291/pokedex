import { QueryParams } from "./types";

export function getQueryParams<TQueryParams extends QueryParams>(
  searchParams: URLSearchParams,
): TQueryParams {
  const query: QueryParams = {};

  searchParams.forEach((param, key) => {
    const value = query[key];
    if (value !== undefined) {
      if (Array.isArray(value)) {
        query[key] = [...value, param];
      } else {
        query[key] = [value, param];
      }
    } else {
      query[key] = param;
    }
  });

  return query as TQueryParams;
}
