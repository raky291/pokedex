export function withQuery(
  url: string,
  query?: Record<string, string | string[] | undefined>,
): string {
  const searchParams = new URLSearchParams();

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      if (value) {
        const items = Array.isArray(value) ? value : [value];
        items.forEach((item) => {
          searchParams.append(key, item);
        });
      }
    });
  }

  const queryString = searchParams.toString();
  return queryString ? `${url}?${queryString}` : url;
}
