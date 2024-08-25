import { QueryParams } from "./types";

export function getQueryParams(searchParams: URLSearchParams): QueryParams {
  const query: QueryParams = {};

  searchParams.forEach((value, key) => {
    query[key] = query[key]
      ? Array.isArray(query[key])
        ? [...query[key], value]
        : [query[key], value]
      : value;
  });

  return query;
}
