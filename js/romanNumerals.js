exports.toRoman = function(num) {
const result = []
let arabicNumber = num
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
    let evenly_divisible_times = (arabicNumber / roman[key])
    if(evenly_divisible_times >= 1){
        for(let i = parseInt(evenly_divisible_times); i > 0; i--){
            result.push(key)
            arabicNumber = arabicNumber - roman[key]
        }
    }
}
return result.join('')
};