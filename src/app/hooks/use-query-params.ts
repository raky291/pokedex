import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";
import { getQueryParams } from "../lib/get-query-params";
import { QueryParams, SetQuery } from "../lib/types";
import { withQuery } from "../lib/with-query";

export function useQueryParams<TQueryParams extends QueryParams>(
  defaultValues?: TQueryParams,
): [TQueryParams, SetQuery<TQueryParams>] {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const queryParams = useMemo(
    () => getQueryParams(searchParams) as TQueryParams,
    [searchParams],
  );

  const query = useMemo<TQueryParams>(
    () => ({ ...defaultValues, ...queryParams }),
    [defaultValues, queryParams],
  );

  const setQuery = useCallback<SetQuery<TQueryParams>>(
    (value) => {
      const newQuery = typeof value === "function" ? value(query) : value;
      router.push(withQuery(pathname, newQuery));
    },
    [router, pathname, query],
  );

  return [query, setQuery];
}
