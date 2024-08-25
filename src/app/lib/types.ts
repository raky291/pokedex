export type QueryParams = Record<string, string | string[] | undefined>;
export type SetQuery<T> = (value: T | ((prevQuery: T) => T)) => void;
