

let animal = "Dumbo octopus";

animal[0]; // index
console.log(animal);
animal.length; // length
console.log(animal.length);

// String Methods
let msg = `leave me alone`;
msg.toUpperCase();
console.log(msg);
let angryMsg = msg.toUpperCase();
console.log(angryMsg);

let userInput = `   Hello you sir   `;
userInput.trim();
console.log(userInput);
let newUserInput = userInput.trim();
console.log(newUserInput);

let greeting = `  hello again`;
greeting.trim().toUpperCase();
let newGreeting = greeting.trim().toUpperCase();
console.log(newGreeting);

// IndexOf
let tvShow = `catdog`;
tvShow.indexOf(`cat`);
tvShow.indexOf(`dog`);
tvShow.indexOf(`z`)
console.log(tvShow.indexOf(`cat`));
console.log(tvShow.indexOf(`dog`));
console.log(tvShow.indexOf(`z`));

// Slice
let messag = `haha that is so funny`;
messag.slice(5,9);
let newMessag = messag.slice(5,9);
console.log(newMessag);

const word = `skateboard`;
word.slice(0,4);
let facialHair = word.slice(5,10);
console.log(facialHair);

// Template literals
let product = `Artichoke`;
let price = 2.25;
let qty = 5;
console.log(`You bought ${qty} ${product}.Total is: $${price * qty}`);


// Math Object
// Random numbers
Math.floor(Math.random() * 5); // from 0-4
Math.floor(Math.random() * 5) + 1; // from 1-5


const die1 = Math.floor(Math.random() * 6) + 1;
const die2 = Math.floor(Math.random() * 6) + 1;

let roll = die1 + die2;
console.log(`You rolled a ${die1} and a ${die2}.They sum to ${roll}.`);