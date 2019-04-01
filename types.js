var i;
i = 10;
var x;
x = 10;
x = 'hello';
var results;
results = [1, 2];
var Signal;
(function (Signal) {
    Signal[Signal["Red"] = 0] = "Red";
    Signal[Signal["Blue"] = 3] = "Blue";
    Signal[Signal["Yellow"] = 4] = "Yellow";
})(Signal || (Signal = {}));
(function (Signal) {
    Signal[Signal["Green"] = 5] = "Green";
})(Signal || (Signal = {}));
var result;
console.log(Signal[4]); // Yellow
console.log(Signal.Green); // 5
