interface Foo<S, T> {
  // この時点では型は不定
  foo: S;
  bar: T;
}

const obj: Foo<number, string> = {
  // ここで肩が決まる
  foo: 3,
  bar: "hi",
};

console.log(obj);
