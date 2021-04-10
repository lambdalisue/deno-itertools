export type Maybe<T> = T | void;
export type Predicate<T> = (v: T) => boolean;
export type Primitive = string | number | boolean;

// https://github.com/Microsoft/TypeScript/issues/26705#issuecomment-416573802
export type IsNullable<T, K> = undefined extends T ? K : never;
export type NullableKeys<T> = {
  [K in keyof T]-?: IsNullable<T[K], K>;
}[keyof T];
