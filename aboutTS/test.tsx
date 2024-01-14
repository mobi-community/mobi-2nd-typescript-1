function combine(a: string | number, b: string | number): string | number {
  if (typeof a === "number" && typeof b === "number") return a + b;
  return Number(a) + Number(b);
}
