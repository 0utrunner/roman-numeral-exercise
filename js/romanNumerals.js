var rn = require("./romanNumerals");

exports.toRoman = function(num, result = []) {
let roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
}
for(let key in roman){
    let evenly_divisible_times = ( num / roman[key])
    if(evenly_divisible_times >= 1){
        result.push(key)
        return rn.toRoman(num - roman[key], result)
    }
}
return result.join('')
};
