class User {
  // name: string;
  // constructor(name: string) {
  //   this.name = name;
  // }
  constructor(private _name: string) {
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
}

var user = new User('Maki');
console.log(user.name);
user.name = 'MAKI';
console.log(user.name);
user.sayHi();