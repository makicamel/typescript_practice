function getArray<T>(value: T): T[] {
  return [value, value, value];
}

console.log(getArray<number>(10));
console.log(getArray<string>('hello'));
