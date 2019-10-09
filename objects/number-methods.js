let num = 103.941;

console.log(num.toFixed(2));

let min = 10;
let max = 20;
let randonNum = Math.floor(Math.random() * (max - min +1)) + min;
console.log(randonNum);

let makeGuess = function(num){
    return num === Math.floor(Math.random() * (max - min +1)) + min;
}

console.log(makeGuess(12));
console.log(makeGuess(15));