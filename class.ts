interface MyFoo {
  method: () => void;
}

class Foo {
  method(): void {
    console.log("Hello, world");
  }
}

const obj: Foo = new Foo();
const obj2: Foo = obj;
console.log(obj.method());
