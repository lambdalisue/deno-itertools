import type { Primitive } from "./types.ts";

type CmpFn<T> = (a: T, b: T) => number;

export function keyToCmp<T>(keyFn: (v: T) => Primitive): CmpFn<T> {
  return (a: T, b: T) => {
    const ka = keyFn(a);
    const kb = keyFn(b);
    if (typeof ka === "boolean" && typeof kb === "boolean") {
      return ka === kb ? 0 : !ka && kb ? -1 : 1;
    } else if (typeof ka === "number" && typeof kb === "number") {
      return ka - kb;
    } else if (typeof ka === "string" && typeof kb === "string") {
      return ka === kb ? 0 : ka < kb ? -1 : 1;
    } else {
      return -1;
    }
  };
}

export function identityPredicate<T>(x: T): boolean {
  return !!x;
}

export function numberIdentity<T>(x: T): number {
  if (typeof x !== "number") {
    throw new Error("Inputs must be numbers");
  }
  return x;
}

export function primitiveIdentity<T>(x: T): Primitive {
  if (
    typeof x !== "string" && typeof x !== "number" && typeof x !== "boolean"
  ) {
    throw new Error(
      "Please provide a key function that can establish object identity",
    );
  }
  return x;
}
