const marevls_heros = ["ironman", "thor", "spiderman"];
const dc_heros = ["suprerman", "flash", "batman"];

// marevls_heros.push(dc_heros);
// console.log(marevls_heros);

// const allHeros = marevls_heros.concat(dc_heros);
// console.log(allHeros);
// console.log(typeof allHeros);

const allHeros = [...dc_heros, ...marevls_heros];
// console.log(allHeros);
// console.log(allHeros[1]);

const another = [7, [5, 7], (5)[(7, 85, [5, 8])]];
// console.log(another);
const newAnother = another.flat(Infinity);
console.log(newAnother);

console.log(Array.from("ranveer"));
console.log(Array.from("4548545451"));

let score1= 100;
let score2 = 200;
let score3 = 300;
//  console.log(Array.of(score1,score2,score3));

let ranveer = Array.of(score1,score2)
console.log(ranveer);
// console.log(typeof ranveer);