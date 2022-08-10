const foo: [string, number] = ["foo", 5];

const str: string = foo[0];

function makePair(x: string, y: number): [string, number] {
  return [x, y];
}

console.log(makePair("year", 3));

const tuple: [string, number] = ["foo", 3];

tuple.pop();
console.log(tuple);
tuple.push("Hey!");
console.log(tuple);

const num: number = tuple[1];
console.log(num); // Hey!
