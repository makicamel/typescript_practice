function getArray(value) {
    return [value, value, value];
}
console.log(getArray(10));
console.log(getArray('hello'));
var MyData = /** @class */ (function () {
    function MyData(value) {
        this.value = value;
    }
    ;
    MyData.prototype.getArray = function () {
        return [this.value, this.value, this.value];
    };
    return MyData;
}());
var myData = new MyData({ a: 100, b: 45 });
console.log(myData.getArray());
