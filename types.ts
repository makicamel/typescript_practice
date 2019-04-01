var i: number;
i = 10;

var x: any;
x = 10;
x = 'hello';

var results: number[];
results = [1, 2];

enum Signal {
  Red,
  Blue = 3,
  Yellow
}

enum Signal {
  Green = 5
}

var result: Signal;
console.log(Signal[4]); // Yellow
console.log(Signal.Green); // 5