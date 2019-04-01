var Hobbist = /** @class */ (function () {
    function Hobbist(name, score) {
        this.name = name;
        this.score = score;
    }
    Hobbist.prototype.sayHi = function () {
        console.log("Hi, i am " + this.name);
    };
    Hobbist.prototype.showScore = function () {
        console.log("score: " + this.score);
    };
    return Hobbist;
}());
var tom = new Hobbist('Tom', 45);
tom.sayHi();
tom.showScore();
