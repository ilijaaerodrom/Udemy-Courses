
// If Statement - only runs code if given condition is true

let raiting = 3;
    // Condition
if (raiting === 3) {
  console.log(`You are a Suoerstar`);
}

let random = Math.random();
if (random < 0.5) {
  console.log(`Your number is less than 0.5`);
  console.log(random);
}
if (random >= 0.5) {
  console.log(`Your number is greater than 0.5`);
  console.log(random);
}

function isEvan(num) {
   
  
  if (num = 4) {
  console.log(`even`);
  console.log(num);
  }
  
}

// Else If
const dayOfWeek = prompt(`Enter a Day`);
if (dayOfWeek === `monday`) {
  console.log(`I hate Mondays`);
} else if (dayOfWeek === `saturday`) {
  console.log(`I love Saturdays`);
} else if (dayOfWeek === `friday`) {
  console.log(`Great day`);
} else {
  console.log(`MEH`);
}
 
// Else
const age = 68;
if (age < 5) {
  console.log(`You are a baby.It's free.`);
} else if (age < 10) {
  console.log(`You are a child.You pay $10`);
} else if (age < 65) {
  console.log(`You are an adult.You pay $20`);
} else {
  console.log(`You are a senior.You pay $10`);
}

// Nesting Conditionals
const password = prompt(`please enter a new password`);
// Password must be 6+ characters
if (password.length >= 6) {
// Password cannot include space
  if (password.indexOf(` `) === -1) {
    console.log(`Valid Password`);
} else {
  console.log(`Password cannot contain spaces!`);
}
} else {
  console.log(`Password too short!Must be 6+ characters`);
}

// Logical Operators       and,  or, not
// Combining Expressions -  &&,  ||,  !
// And - both sides must be true
1 === 1 && 2 < 7;

const newPassword = prompt(`please enter your password`);

if (newPassword.length >= 6 && newPassword.indexOf(` `) === -1) {
    console.log(`Valid Password`);
} else {
  console.log(`Invalid Password`);
}

// Or - if one side is true, the entire thing is true
const newAge = 90;
if (age >= 0 && age < 5 || age >= 65) {
  console.log(`free`);
} else if (age >= 5 && age < 10) {
  console.log(`$10`);
} else if (age >= 10 && age < 65) {
  console.log(`$20`);
} else {
  console.log(`invalid age`);
}

// Not - !expression returns true if expression is false

// Switch statement
const day = 2;
switch (day) {
    case 1:
    console.log(`monday`);
    break;
    case 2:
    console.log(`tuesday`);
    break;
    case 3:
    console.log(`wednesday`);
    break;
    case 4:
    console.log(`thursday`);
    break;
    case 5:
    console.log(`friday`);
    break;

  default:
    break;
}