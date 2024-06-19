export function setItem<T>(key: string, value: T) {
  try {
    const serialized = JSON.stringify(value);
    window.localStorage.setItem(key, serialized);
  } catch (error) {
    console.warn(`Error setting localStorage key "${key}":`, error);
  }
}

export function getItem<T>(key: string): T | undefined {
  try {
    const serialized = window.localStorage.getItem(key);
    return serialized ? JSON.parse(serialized) : undefined;
  } catch (error) {
    console.warn(`Error getting localStorage key "${key}":`, error);
    return undefined;
  }
}
