class User {
  constructor(protected _name: string) {
    User.count++;
  }
  sayHi(): void {
    console.log(`Hi! I am ${this._name}.`);
  }
  get name() {
    return this._name;
  }
  set name(newValue: string) {
    this._name = newValue;
  }
  static count: number = 0;
  static showDescription(): void {
    console.log('This class is about user.')
  }
}

class AdminUser extends User {
  private _age: number;
  constructor(_name: string, _age: number) {
    super(_name);
    this._age = _age;
  }
  sayHi(): void {
    console.log(`my age: ${this._age}`);
    console.log(`my name: ${this._name}`);
    super.sayHi();
  }
}

var alice = new User('Alice');
var bob = new User('Bob');
console.log(User.count);
User.showDescription();