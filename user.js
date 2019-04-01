var User = /** @class */ (function () {
    // name: string;
    // constructor(name: string) {
    //   this.name = name;
    // }
    function User(_name) {
        this._name = _name;
    }
    User.prototype.sayHi = function () {
        console.log("Hi! I am " + this._name + ".");
    };
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newValue) {
            this._name = newValue;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
var user = new User('Maki');
console.log(user.name);
user.name = 'MAKI';
console.log(user.name);
user.sayHi();
