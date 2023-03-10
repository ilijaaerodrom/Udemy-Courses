

// Objects
const person = {
  firstName: `Ilija`,
  lastName: `Trajkovski`,
};
console.log(person);

// Accessing Data out of Objects
person[`firstName`];
console.log(person[`firstName`]);
console.log(person.lastName);

// Modifing Objects
const palette = {
  red: `#eb4dth`,
  yellow: `#jktudovj`,
  blue: `#303btr`
}
console.log(palette);
console.log(palette.red);
console.log(palette[`blue`]);
let collor = `yellow`;
console.log(palette[collor]);

const midterms = {
  danielle: 96,
  tomas: 78
};
console.log(midterms);
midterms.tomas = 79;
console.log(midterms);
midterms[`danielle`] = `A`;
console.log(midterms);
midterms.ezra = `B`;
midterms[`antonio`] = `C`;
console.log(midterms);

// Nesting Arrays & Objects
const shoppingCart = [
{
  product: `Jenga Classic`,
  price: 6.88,
  quantity: 1
},
{
  product: `Echo Dot`,
  price: 29.99,
  quantity: 3
},
{
  product: `Fire Stick`,
  price: 39.99,
  quantity: 2
}
]

const student = {
  firstName: `David`,
  lastName: `Jones`,
  strengths: [`Music`, `Art`],
  exams: {
    midterm: 92,
    final: 88
  }
}

const comments = [
  {userName: `Tammy`,
  text: `lolololol`,
  votes: 9
  },
  {
    userName: `FishBoi`,
    text: `huhuhuhu`,
    votes: 12387
  }
];
console.log(comments);
comments[1].text;
console.log(comments[1].text);