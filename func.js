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
