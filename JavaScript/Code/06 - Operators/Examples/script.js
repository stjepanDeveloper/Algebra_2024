var a = 6;
var b = '5';

console.log(typeof a); //number

// ARITHMETIC
console.log(a + b); //65
console.log(a + +b); // 11
console.log(a - b); // 1
console.log(a * b); // 30
console.log((a * 7.4).toFixed(2)); // 44.40
console.log(a / b); // 1.2
console.log(a / 0); // Infinity
console.log(a / Infinity); // 0
console.log(a % 6); // 0
// COMPARISON
console.log(a == b); // Equal operators
console.log(a === b); // Strict equals
console.log('' == 0); // Falsy values

// LOGICAL
console.log(5 < 6 && 6 == 6); // true
console.log(5 < 6 || 6 == 6); // true
console.log(!(5 < 6));

// CONDITIONAL (TERNARY)
console.log(5 == 5 ? 'This is equal' : 'This is not equal');
console.log(5 === 5 ? 'This is equal' : 'This is not equal');


