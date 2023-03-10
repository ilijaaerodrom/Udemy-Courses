

let colors = [`rad`, `orange`, `yalloww`];
colors[0] = `red`;
colors[2] = `yellow`
console.log(colors);
colors[10] = `indigo`;
console.log(colors);
let beatlles = [`paul`, `john`, `george`];
console.log(beatlles);
beatlles[3] = `ringo`;
console.log(beatlles);

// Arrays Methods
/* Push - add to end
   Pop - remove from end
   Shift - remove from start
   Unshift - add to start */

let movieLine = [`me`, `myself`, `my wife`, `toja`];
console.log(movieLine);  
movieLine.push(`martin`);
console.log(movieLine);
movieLine.pop();
console.log(movieLine);
movieLine.shift();
console.log(movieLine);
movieLine.unshift(`iljo`);
console.log(movieLine);

// Concat
let cats = [`blue`,`fluffy`];
let dogs = [`reks`,`spider`];
let catsDogs = cats.concat(dogs);
console.log(catsDogs);

// IndexOf
catsDogs.indexOf(`reks`);
console.log(catsDogs.indexOf(`reks`));

// Reverse
console.log(catsDogs.reverse());

// Slice
let newColors = [`red`,`orange`,`yellow`,`green`,`blue`,`indigo`,`violet`];
console.log(newColors);
console.log(newColors.slice());
console.log(newColors.slice(5));
let coolColors = newColors.slice(3);
console.log(coolColors);
let warnColors = newColors.slice(0,3);
console.log(warnColors);
console.log(newColors.slice(-3));

// Splice
let newColors1 = [`red`,`orange`,`yellow`,`green`,`blue`,`indigo`,`violet`];
console.log(newColors1.sort()); // Sort
newColors1.splice(5,1);
console.log(newColors1);
newColors1.splice(1,0, `red-orange`);
console.log(newColors1);
newColors1.splice(4,0, `yellow-green`,`forestgreen`);
console.log(newColors1);

// Equality Testing
let nums = [1,2,3];
let numsCopy = nums;
console.log(nums === numsCopy);

// Const and Arrays
const myEggs = [`brown`,`brown`];
console.log(myEggs);
myEggs.push(`white`);
console.log(myEggs); // array can change

//myEggs = [`blue`,`pink`];
//console.log(myEggs); // can't reesigned

// Multi-Dimensional Arrays
// Nested Arrays - we can store arrays inside other arrays
const gameBoard = [[`0`, null, `X`],[null, `X`, `0`],[`X`, `0`, null]];
console.log(gameBoard[2][2]);