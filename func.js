function add(a, b) {
    return a + b;
}
function add_optional(a, b) {
    if (b === void 0) { b = 100; }
    if (b) {
        return a + b;
    }
    else {
        return a + a;
    }
}
console.log(add(10, 2)); // 12
console.log(add_optional(10, 2)); // 12
console.log(add_optional(10)); // 120
var minus = function (a, b) { return a - b; };
console.log(minus(100, 22));
function add_override(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        return a + ' ' + b;
    }
    return a + b;
}
console.log(add_override(1, 2)); // 3
console.log(add_override('1', '2')); // 1 2
