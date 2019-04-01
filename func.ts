function add(a: number, b: number): number {
  return a + b;
}

function add_optional(a: number, b: number = 100): number {
  if (b) {
    return a + b;
  } else {
    return a + a;
  }
}

console.log(add(10, 2)); // 12
console.log(add_optional(10, 2)); // 12
console.log(add_optional(10)); // 120
