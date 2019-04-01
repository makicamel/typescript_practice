class User {
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
