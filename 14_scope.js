let a = 10;
const c = 20;
var b = 30;

console.log(a);
console.log(b);
console.log(c);

if (true) {
  let a = 100;
  console.log("inner value", a);

  const b = 200;
  console.log("inner value", b);

  // var c = 300
  console.log("inner value", c);
}

function one() {
  const username = "ranveer";

  function two() {
    const website = "youtube";
    console.log(username);
   
  }
//   console.log(website);

  two();

}

one();
 