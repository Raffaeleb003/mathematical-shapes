const sideLength = 9;
const diagonal = sideLength * Math.sqrt(2);

console.log("The diagonal of a square with a side length of 9 is " + diagonal + ".");



const sideA = 5;
const sideB = 6;
const sideC = 7;

const s = (sideA + sideB + sideC) / 2;
const area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));

console.log(`The area of a triangle with sides of length ${sideA}, ${sideB}, and ${sideC} is ${area}.`);