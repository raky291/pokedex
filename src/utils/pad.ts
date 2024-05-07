export function pad(
  value: number,
  maxLength: number = 4,
  fillString: string = "0"
) {
  return String(value).padStart(maxLength, fillString);
}
