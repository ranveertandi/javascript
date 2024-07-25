function nemchand() {
  console.log("R ");
  console.log("a");
  console.log("n");
  console.log("v");
  console.log("e");
  console.log("e");
  console.log("r");
}
// nemchand();

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }
// const result = addTwoNumbers(7, 8);
// console.log( "result :" ,result);

// ++++++++++++++++++++++++++++++++++++++++++++++++++

// function addTwoNumbers(number1, number2) {
//   let result = number1 + number2;
//   return result;
// }
// const result = addTwoNumbers(7, 8);
// console.log("result :", result);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function addTwoNumbers(number1, number2) {
  // let result = number1 + number2;
  // return result;

  return number1 + number2;
}
const result = addTwoNumbers(7, 8);
// console.log("result :", result);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function loginuserMassage(username = "ss bana") {
  if (/*username ===*/ !username) {
    console.log("please enter username");
    return
  }
  return `${username} just login`
}
console.log(loginuserMassage())

// let aa = loginuserMassage("adsjklfdshk");
// console.log(aa);
