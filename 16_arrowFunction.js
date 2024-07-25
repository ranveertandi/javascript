const user = {
  username: "ranveer",
  price: 333,
  welcomeMassage: function () {
    console.log(`${this.username} , welcome to my website`);
    //  object are allowed this and dircet value access
  },
};

// user.welcomeMassage();
// // console.log(user.price);
// user.username = "nemchand";
// user.welcomeMassage();

// console.log(this);

function chai() {
  let name = "ranveer";
  console.log(name);
  //   normal funciton are using this  not allowed
}
chai();

// +++++++++++++++++++++++++++++=  +++++++++
const code = () => {
  let name = "ranveer";
  console.log(name);
  //   arrow function not allowed this and direct call in variable
};
code();

//  arrow function
const addTwo = (num1, num2, num3) => {
  return num1 + num2 + num3;
};

console.log(addTwo(7, 8, 5));

//  short declaraction   emple shirt retuen

// const addThree = (num1,num2,num3) => num1 + num2 + num3;
const addThree = (num1, num2, num3) => num1 + num2 + num3;
console.log(addThree(2, 4, 6));

// +++++++++++++++++++++++++++++++++++++++++++++++++++
//  immediately invoked function expression (IIFE)
(() => {
  console.log("pubg");
})();

// +++++++++++++++++++++++++++++++++++++++++++++++++
((name) => {
  console.log(`${name}`);
})("pubgPlayer");


function one(){
  console.log("one");
}

function two(){
  console.log("two");
}
function three(){
  console.log("three");
}