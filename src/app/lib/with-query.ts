export function withQuery(
  url: string,
  query?: Record<string, string | undefined>,
): string {
  const urlObj = new URL(url);

  if (query) {
    for (const key in query) {
      const value = query[key];
      if (value) {
        urlObj.searchParams.append(key, value);
      }
    }
  }

  return urlObj.toString();
}
