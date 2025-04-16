export namespace base {
  export type Field<T extends string, V = string | null> = {
    type: T;
    value: V;
  };

  export type NonValueField<T extends string> = {
    type: T;
  };
}
