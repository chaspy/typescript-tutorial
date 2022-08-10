var message = "Hello! TypeScript!";
console.log(message);
var a = {
    foo: "foo",
    bar: 1
};
var foo = [0, 1, 2, 3];
foo.push(4);
console.log(foo);
var f = func;
function func(arg) {
    return Number(arg);
}
var fuuunc = function (boo) {
    var bar = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bar[_i - 1] = arguments[_i];
    }
    return bar;
};
console.log(fuuunc(1, 2, 3));
