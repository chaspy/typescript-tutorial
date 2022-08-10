var foo = ["foo", 5];
var str = foo[0];
function makePair(x, y) {
    return [x, y];
}
console.log(makePair("year", 3));
var tuple = ["foo", 3];
tuple.pop();
console.log(tuple);
tuple.push("Hey!");
console.log(tuple);
var num = tuple[1];
console.log(num); // Hey!
