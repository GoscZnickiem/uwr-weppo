13
type HelloWorld = string

4
type MyPick<T, K extends keyof T> = {
  [P in K] : T[P]
}

11
type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]] : P
}

14
type First<T extends any[]> = T extends [] ? never : T[0]

18
type Length<T extends readonly any[]> = T['length']

43
type MyExclude<T, U> = T extends U ? never : T;

189
type MyAwaited<T> =
  T extends Promise<infer R>
    ? MyAwaited<R>
    : T;

268
type If<C, T, F> = C extends true ? T : F;

533
type Concat<T extends readonly any[], U extends readonly any[]> = [...T,...U];

898
type Includes<T extends readonly any[], U> = 
  T extends [infer First, ...infer Rest]
    ? Equal<First, U> extends true
      ? true
      : Includes<Rest, U>
    : false;

3057
type Push<T extends readonly any[], U> = [...T, U]

3060
type Unshift<T extends readonly any[], U> = [U, ...T];

3312
type MyParameters<T extends (...args: any) => any> = 
  T extends (...args: infer P) => any ? P : never;
