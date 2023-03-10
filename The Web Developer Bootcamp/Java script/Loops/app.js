
/* Loops
Loops allow us to repat code
There are multiple types:
- for loop
- while loop
- for ...of loop
- for ...in loop 


// For Loop
//     start at 1   stop at 10  add 1 each time
 for (let i = 1;   i <= 10;      i++ ) {
  console.log(i);
} 

for (let i = 1; i <= 10; i++) {
  console.log(i);
} 

for (let i = 0; i <= 20; i++) {
  console.log(i);
}

let i = `Da ba dee da ba daa`;
for (let i = 1; i <= 6; i++ ) {
  console.log(`Da ba dee da ba daa`);
} 

for (let i = 2; i <= 20; i+= 2) { // even
  console.log(i);
}

for (let i = 1; i <= 20; i+= 2) { // odd
  console.log(i);
}

for (let i = 100; i >= 0; i -= 10) {
  console.log(i);
}

for (let i = 10; i <= 1000; i *= 10) {
  console.log(i);
}


const animals = [`lions`, `tigers`, `bears`];
for (let i = 0; i < animals.length; i++) {
  console.log(i, animals[i]);
}

for (let i = animals.length -1; i >= 0; i--) {
  console.log(i, animals[i]);
} 


const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
console.log(people);

for (let i = 0; i < people.length; i++ ) {
    console.log(i, people[i].toUpperCase());
}

// Nested Loops
for (let i = 1; i <= 10; i++) {
  console.log(`i is: ${i}`);
  for (let j = 1; j < 4; j++) {
  console.log(`     j is: ${j}`);
  }
}

const seatingChart = [
  [`Kristen`, `Erik`, `Namita`],
  [`Geoffrey`, `Juanita`, `Antonio`, `Kevin`],
  [`Yuma`, `Sakura`, `Jack`, `Erika`]
];

for (let i = 0; i < seatingChart.length; i++) {
  const row = seatingChart[i];
  console.log(`Row #${i + 1}`);
  for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
  }
} */

// While Loop
let count = 0;
while (count < 10) {
  count++;
  console.log(count);
}

const SECRET = `password`;
let quess = prompt(`enter the secret code`);
while (quess !== SECRET) {
  quess = prompt(`enter the secret code`);
} 
console.log(`congrats.you got yhe secret`);

// Break keyword
let input = prompt(`Hey, say something`);
while (true) {
  input = prompt(input);
  if (input.toLowerCase() === `stop copying me`) {
    break;
  }
}
console.log(`Ok, you win`);