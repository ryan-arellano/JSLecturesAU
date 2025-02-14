//String
const firstName = 'Ryan';
console.log(firstName);

// //Numbers
const age = 19;
const temp = 98.5;

// //Boolean
const hasKids = true;
const hasKabit = false;

// //Null
const aptNumber = null;

// //Undefined
let score;
console.log(score);
// const score = undefined;

// //Symbol
const id = Symbol('id');

// //BigInt
const n = 214125631636427272347237234n;

// //Reference Types

const numbers = [1, 2, 3, 4];

const person = {
  fname: ' Ryan',
};

function sayHello() {
  console.log('hello');
}

const output = sayHello;
console.log(output, typeof output);
