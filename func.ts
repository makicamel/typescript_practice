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

var minus = (a: number, b: number): number => a - b;

console.log(minus(100, 22));

function add_override(a: number, b: number): number;
function add_override(a: string, b: string): string;
function add_override(a: any, b: any): any {
  if (typeof a === 'string' && typeof b === 'string') {
    return a + ' ' + b;
  }
  return a + b;
}

console.log(add_override(1, 2)); // 3
console.log(add_override('1', '2')); // 1 2