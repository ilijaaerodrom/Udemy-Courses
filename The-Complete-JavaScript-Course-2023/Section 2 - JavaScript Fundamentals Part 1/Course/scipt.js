

// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageSarah / 2, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = `Ilija`;
const lastName = `Trajkovski`;
console.log(firstName + ` ` + lastName);


// Assigment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x++; // x = x + 1
console.log(x);


// Comperison oprators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

// Strings and Template Literals
const myName = `Ilija`;
const job = `counsel`;
const birthYear = 1986;
const year = 2023;

const ilija = `I'm ` + myName + `, a ` + (year - birthYear) +
` years old ` + job + `!`;
console.log(ilija);

const ilijaNew = `I'm ${myName},a ${year - birthYear} 
years old ${job}!`;
console.log(ilijaNew);

console.log(`String
multi
lines`);

// if / else Statemnets
const age = 15;

if (age >= 18) {
  console.log(`Sarah can start driving licence`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is to young.Wait another
  ${yearsLeft} years`);
 };


const yearOfBirth = 1986;
let century;

if (yearOfBirth <= 2000) {
  century = 20;
} else {
  century = 21;
};
console.log(century);

// 5 falsy values: 0, ``, undefined, null, Nan
const money = 0; // falsy - boolean means false
if (money) {
  console.log(`Don't spend it all`);
} else {
  console.log(`Get a job`);
};

// Logical Operators
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision); 
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log(`Sarah is able to drive!`);
// } else {
//   console.log(`Someone else should drive...`);
// };

const isTired = false;

   if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log(`Sarah is able to drive!`);
  } else {
    console.log(`Someone else should drive...`);
  };

  // The Switch statement
  const day = `monday`;

  switch (day) {
    case `monday`: // day === `monday`
      console.log(`Plan course structure`);
      console.log(`Go to coding meeting`);
      break;
    case `tuesday`: 
      console.log(`Prepare theory videos`);
      break;
    case `wendsday`:
    case `thursday`: 
      console.log(`Write code examples`);
      break;
    case `friday`: 
      console.log(`Record videos`);
      break;
    case `saturday`:
    case `sunday`: 
      console.log(`Enjoy the weekend`);
      break;
    
    default:
      console.log(`Not a valid day`);
      break;
  };
  
if (day === `monday`) {
  console.log(`Plan course structure`);
} else if (day === `tuesday`) {
  console.log(`Prepare theory videos`);
} else if (day === `wendsday` || day === `thirsday`) {
  console.log(`Write code examples`);
} else if (day === `friday`) {
  console.log(`Record videos`);
} else if (day === `saturday` || day === `sunday`) {
  console.log(`Enjoy the weekend`);
} else {
  console.log(`Not a valid day`);
};

// The Conditional (Ternary) Operator
const age1 = 36;
const drink = age1 >= 18 ? `wine` : `water`;
console.log(drink);


