var rn = require("./romanNumerals");

console.log(rn.toRoman(1) === 'I');
console.log(rn.toRoman(3) === 'III');
console.log(rn.toRoman(4) === 'IV');
console.log(rn.toRoman(12) === 'XII');
console.log(rn.toRoman(2022) === 'MMXXII');
console.log(rn.toRoman(1999) === 'MCMXCIX');