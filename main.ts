interface GameUser {
  score: number;
  showScore(): void;
}

class Hobbist implements GameUser {
  name: string;
  score: number;
  constructor(name: string, score: number) {
    this.name = name;
    this.score = score;
  }
  sayHi(): void {
    console.log(`Hi, i am ${this.name}`);
  }
  showScore(): void {
    console.log(`score: ${this.score}`);
  }
}

var tom = new Hobbist('Tom', 45);
tom.sayHi();
tom.showScore();