type Head<T> = T extends [infer U, ...unknown[]] ? U : never;

type Cons<H, T> = T extends readonly any[] ? ((h: H, ...t: T) => void) extends ((...r: infer R) => void) ? R : never : never;

export type Tail<T> = T extends Array<any>
  ? ((...args: T) => never) extends (a: any, ...args: infer R) => never
    ? R
    : never
  : never;

// Shoutout to jcalz @ https://stackoverflow.com/a/58986589/7015140 for this.
export type ExtractTuple<T extends any[], E> = T["length"] extends 0 ? [] : X00<Tail<T>, E> extends infer X ? X extends any[] ? Head<T> extends E ? Cons<Head<T>, X> : X : never : never;
type X00<T extends any[], E> = T["length"] extends 0 ? [] : X01<Tail<T>, E> extends infer X ? Head<T> extends E ? Cons<Head<T>, X> : X : never;
type X01<T extends any[], E> = T["length"] extends 0 ? [] : X02<Tail<T>, E> extends infer X ? Head<T> extends E ? Cons<Head<T>, X> : X : never;
type X02<T extends any[], E> = T["length"] extends 0 ? [] : X03<Tail<T>, E> extends infer X ? Head<T> extends E ? Cons<Head<T>, X> : X : never;
type X03<T extends any[], E> = T["length"] extends 0 ? [] : X04<Tail<T>, E> extends infer X ? Head<T> extends E ? Cons<Head<T>, X> : X : never;
type X04<T extends any[], E> = T["length"] extends 0 ? [] : X05<Tail<T>, E> extends infer X ? Head<T> extends E ? Cons<Head<T>, X> : X : never;
type X05<T extends any[], E> = T["length"] extends 0 ? [] : X06<Tail<T>, E> extends infer X ? Head<T> extends E ? Cons<Head<T>, X> : X : never;
type X06<T extends any[], E> = T["length"] extends 0 ? [] : X07<Tail<T>, E> extends infer X ? Head<T> extends E ? Cons<Head<T>, X> : X : never;
type X07<T extends any[], E> = T["length"] extends 0 ? [] : X08<Tail<T>, E> extends infer X ? Head<T> extends E ? Cons<Head<T>, X> : X : never;
type X08<T extends any[], E> = T["length"] extends 0 ? [] : X09<Tail<T>, E> extends infer X ? Head<T> extends E ? Cons<Head<T>, X> : X : never;
type X09<T extends any[], E> = T["length"] extends 0 ? [] : X10<Tail<T>, E> extends infer X ? Head<T> extends E ? Cons<Head<T>, X> : X : never;
type X10<T extends any[], E> = T["length"] extends 0 ? [] : X11<Tail<T>, E> extends infer X ? Head<T> extends E ? Cons<Head<T>, X> : X : never;
type X11<T extends any[], E> = T["length"] extends 0 ? [] : X12<Tail<T>, E> extends infer X ? Head<T> extends E ? Cons<Head<T>, X> : X : never;
type X12<T extends any[], E> = T["length"] extends 0 ? [] : X13<Tail<T>, E> extends infer X ? Head<T> extends E ? Cons<Head<T>, X> : X : never;
type X13<T extends any[], E> = T["length"] extends 0 ? [] : X14<Tail<T>, E> extends infer X ? Head<T> extends E ? Cons<Head<T>, X> : X : never;
type X14<T extends any[], E> = T["length"] extends 0 ? [] : X15<Tail<T>, E> extends infer X ? Head<T> extends E ? Cons<Head<T>, X> : X : never;
type X15<T extends any[], E> = T["length"] extends 0 ? [] : X16<Tail<T>, E> extends infer X ? Head<T> extends E ? Cons<Head<T>, X> : X : never;
type X16<T extends any[], E> = T["length"] extends 0 ? [] : X17<Tail<T>, E> extends infer X ? Head<T> extends E ? Cons<Head<T>, X> : X : never;
type X17<T extends any[], E> = T["length"] extends 0 ? [] : X18<Tail<T>, E> extends infer X ? Head<T> extends E ? Cons<Head<T>, X> : X : never;
type X18<T extends any[], E> = T["length"] extends 0 ? [] : X19<Tail<T>, E> extends infer X ? Head<T> extends E ? Cons<Head<T>, X> : X : never;
type X19<T extends any[], E> = T["length"] extends 0 ? [] : X20<Tail<T>, E> extends infer X ? Head<T> extends E ? Cons<Head<T>, X> : X : never;
type X20<T extends any[], E> = T["length"] extends 0 ? [] : X21<Tail<T>, E> extends infer X ? Head<T> extends E ? Cons<Head<T>, X> : X : never;
type X21<T extends any[], E> = T["length"] extends 0 ? [] : X22<Tail<T>, E> extends infer X ? Head<T> extends E ? Cons<Head<T>, X> : X : never;
type X22<T extends any[], E> = T["length"] extends 0 ? [] : X23<Tail<T>, E> extends infer X ? Head<T> extends E ? Cons<Head<T>, X> : X : never;
type X23<T extends any[], E> = T["length"] extends 0 ? [] : X24<Tail<T>, E> extends infer X ? Head<T> extends E ? Cons<Head<T>, X> : X : never;
type X24<T extends any[], E> = T["length"] extends 0 ? [] : X25<Tail<T>, E> extends infer X ? Head<T> extends E ? Cons<Head<T>, X> : X : never;
type X25<T extends any[], E> = T["length"] extends 0 ? [] : X26<Tail<T>, E> extends infer X ? Head<T> extends E ? Cons<Head<T>, X> : X : never;
type X26<T extends any[], E> = T["length"] extends 0 ? [] : X27<Tail<T>, E> extends infer X ? Head<T> extends E ? Cons<Head<T>, X> : X : never;
type X27<T extends any[], E> = T["length"] extends 0 ? [] : X28<Tail<T>, E> extends infer X ? Head<T> extends E ? Cons<Head<T>, X> : X : never;
type X28<T extends any[], E> = T["length"] extends 0 ? [] : X29<Tail<T>, E> extends infer X ? Head<T> extends E ? Cons<Head<T>, X> : X : never;
type X29<T extends any[], E> = T["length"] extends 0 ? [] : X30<Tail<T>, E> extends infer X ? Head<T> extends E ? Cons<Head<T>, X> : X : never;
type X30<T extends any[], E> = T["length"] extends 0 ? [] : X31<Tail<T>, E> extends infer X ? Head<T> extends E ? Cons<Head<T>, X> : X : never;
type X31<T extends any[], E> = T["length"] extends 0 ? [] : X32<Tail<T>, E> extends infer X ? Head<T> extends E ? Cons<Head<T>, X> : X : never;
type X32<T extends any[], E> = T["length"] extends 0 ? [] : X33<Tail<T>, E> extends infer X ? Head<T> extends E ? Cons<Head<T>, X> : X : never;
type X33<T extends any[], E> = T["length"] extends 0 ? [] : X34<Tail<T>, E> extends infer X ? Head<T> extends E ? Cons<Head<T>, X> : X : never;
type X34<T extends any[], E> = T["length"] extends 0 ? [] : X35<Tail<T>, E> extends infer X ? Head<T> extends E ? Cons<Head<T>, X> : X : never;
type X35<T extends any[], E> = T["length"] extends 0 ? [] : X36<Tail<T>, E> extends infer X ? Head<T> extends E ? Cons<Head<T>, X> : X : never;
type X36<T extends any[], E> = T["length"] extends 0 ? [] : X37<Tail<T>, E> extends infer X ? Head<T> extends E ? Cons<Head<T>, X> : X : never;
type X37<T extends any[], E> = T["length"] extends 0 ? [] : X38<Tail<T>, E> extends infer X ? Head<T> extends E ? Cons<Head<T>, X> : X : never;
type X38<T extends any[], E> = T["length"] extends 0 ? [] : X39<Tail<T>, E> extends infer X ? Head<T> extends E ? Cons<Head<T>, X> : X : never;
type X39<T extends any[], E> = T["length"] extends 0 ? [] : X0X<Tail<T>, E> extends infer X ? Head<T> extends E ? Cons<Head<T>, X> : X : never;
type X0X<T extends any[], E> = T; // bail out