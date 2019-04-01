function getArray<T>(value: T): T[] {
  return [value, value, value];
}

console.log(getArray<number>(10));
console.log(getArray<string>('hello'));

interface Result {
  a: number;
  b: number;
}
class MyData<T extends Result> {
  constructor(public value: T) { };
  getArray(): T[] {
    return [this.value, this.value, this.value];
  }
}

var myData = new MyData<Result>({ a: 100, b: 45 });
console.log(myData.getArray());