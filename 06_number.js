const score = 420
console.log(score);


const balance = new Number(100)
console.log(balance); 
// console.log(balance.toString().length); 
console.log(balance.toFixed(2));
console.log(typeof balance);
// console.log(typeof new Number);

const otherNumber = 420.190
console.log(otherNumber.toPrecision(4)); 


const handured = 10000000
console.log(handured.toLocaleString('en-IN'));


// +++++++++++++++++++++++++++++++ Math +++++++++++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-7));
console.log(Math.round(7.5));
console.log(Math.floor(7.9));
console.log(Math.ceil(7.1));
console.log(Math.sqrt(625));
console.log(Math.min(7,5,3,6,8,4,1,1,0));
console.log(Math.max(7,5,3,6,8,4,1,1,0));


console.log((Math.random()*10) +1);
console.log(Math.floor(Math.random()*10) +1);

const min=100
const max=200
console.log(Math.floor(Math.random() *(max-min) + min ));
