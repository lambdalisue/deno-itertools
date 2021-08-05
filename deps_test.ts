export { expect } from "https://deno.land/x/expect@v0.2.6/mod.ts";
export * from "https://deno.land/std@0.103.0/testing/asserts.ts";

const currentScopes: string[] = [];

export function describe(name: string, fn: () => void): void {
  currentScopes.push(name);
  fn();
  currentScopes.pop();
}

export function it(name: string, fn: () => void): void {
  const fullName = [...currentScopes, name].join(" > ");
  Deno.test(fullName, fn);
}
