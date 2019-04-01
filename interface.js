function getTotal(score) {
    return score.a + score.b;
}
var score = {
    a: 33,
    b: 45,
    c: 'hello'
};
console.log(getTotal(score));
