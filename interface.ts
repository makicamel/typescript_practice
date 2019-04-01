interface SpringScore {
  a: number;
}

interface FallScore {
  b: number;
}

interface FinalScore extends SpringScore, FallScore {
  final?: number;
}

function getTotal(score: FinalScore) {
  if (score.final) {
    return score.a + score.b + score.final;
  } else {
    return score.a + score.b;
  }
}

var score = {
  a: 33,
  b: 45,
  final: 128
};

console.log(getTotal(score));