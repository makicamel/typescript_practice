interface Score {
  a: number;
  b: number;
}

function getTotal(score: Score) {
  return score.a + score.b;
}

var score = {
  a: 33,
  b: 45,
  c: 'hello'
};

console.log(getTotal(score));