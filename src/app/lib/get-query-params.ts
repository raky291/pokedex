import { QueryParams } from "./types";

export function getQueryParams(searchParams: URLSearchParams): QueryParams {
  const query: QueryParams = {};

  searchParams.forEach((value, key) => {
    const queryValue = query[key];
    if (queryValue !== undefined) {
      if (Array.isArray(queryValue)) {
        query[key] = [...queryValue, value];
      } else {
        query[key] = [queryValue, value];
      }
    } else {
      query[key] = value;
    }
  });

  return query;
}
