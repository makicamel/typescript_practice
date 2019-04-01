var User = /** @class */ (function () {
    // name: string;
    // constructor(name: string) {
    //   this.name = name;
    // }
    function User(name) {
        this.name = name;
    }
    User.prototype.sayHi = function () {
        console.log("Hi! I am " + this.name + ".");
    };
    return User;
}());
var user = new User('Maki');
user.sayHi();
