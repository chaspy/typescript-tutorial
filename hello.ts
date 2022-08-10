const message: string = "Hello! TypeScript!";
console.log(message);

interface MyObj {
  foo: string;
  bar: number;
}

const a: MyObj = {
  foo: "foo",
  bar: 1,
};

const foo: number[] = [0, 1, 2, 3];
foo.push(4);
console.log(foo);
