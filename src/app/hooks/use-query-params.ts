import { useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";
import { getQueryParams } from "../lib/get-query-params";
import { getQueryString } from "../lib/get-query-string";
import { QueryParams, SetQuery } from "../lib/types";

export function useQueryParams<TQueryParams extends QueryParams>(
  defaultValues?: TQueryParams,
): [TQueryParams, SetQuery<TQueryParams>] {
  const searchParams = useSearchParams();

  const queryParams: TQueryParams = useMemo(
    () => getQueryParams(searchParams),
    [searchParams],
  );

  const query: TQueryParams = useMemo(
    () => ({ ...defaultValues, ...queryParams }),
    [defaultValues, queryParams],
  );

  const setQuery: SetQuery<TQueryParams> = useCallback(
    (value) => {
      const newQuery = typeof value === "function" ? value(query) : value;
      window.history.pushState(null, "", `?${getQueryString(newQuery)}`);
    },
    [query],
  );

  return [query, setQuery];
}
