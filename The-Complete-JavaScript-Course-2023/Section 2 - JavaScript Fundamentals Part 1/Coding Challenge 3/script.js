

const scoreDolphins = (96 + 108 + 89) / 3;
console.log(scoreDolphins);
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log(`Dolphins win the tournemant!`);
} else if (scoreKoalas > scoreDolphins) {
  console.log(`Koalas win the tournement!`);
} else if (scoreDolphins === scoreKoalas) {
  console.log(`Both temas win the tournement!`);
};


// Bonus 1
const scoreDolphins1 = (97 + 112 + 101) / 3;
console.log(scoreDolphins1);
const scoreKoalas1 = (109 + 95 + 123) / 3;
console.log(scoreKoalas1);

if (scoreDolphins1 > scoreKoalas1 && scoreDolphins1 >= 100) {
  console.log(`Dolphins win the tournemant!`);
} else if (scoreKoalas1 > scoreDolphins1 && scoreKoalas1 >= 100) {
  console.log(`Koalas win the tournement!`);
} else if (scoreDolphins1 === scoreKoalas1) {
  console.log(`Both temas win the tournement!`);
};

// Bonus 2
const scoreDolphins2 = (97 + 112 + 81) / 3;
console.log(scoreDolphins2);
const scoreKoalas2 = (109 + 95 + 86) / 3;
console.log(scoreKoalas2);

if (scoreDolphins2 > scoreKoalas2 && scoreDolphins2 >= 100) {
  console.log(`Dolphins win the tournemant!`);
} else if (scoreKoalas2 > scoreDolphins2 && scoreKoalas2 >= 100) {
  console.log(`Koalas win the tournement!`);
} else if (scoreDolphins2 === scoreKoalas2 && scoreDolphins2 >= 100 && 
  scoreKoalas2 >= 100) {
  console.log(`Both temas win the tournement!`);
} else {
  console.log(`No one wins!`);
};
