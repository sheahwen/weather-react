export function convertToCelcius(fahrenheit: number): number {
  if (typeof fahrenheit !== "number") {
    throw new Error("convertToCelcius - Input must be a number");
  }

  return (fahrenheit - 32) * (5 / 9);
}
