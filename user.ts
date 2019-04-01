class User {
  // name: string;
  // constructor(name: string) {
  //   this.name = name;
  // }
  constructor(public name: string) {
  }
  sayHi(): void {
    console.log(`Hi! I am ${this.name}.`);
  }
}

var user = new User('Maki');
user.sayHi();