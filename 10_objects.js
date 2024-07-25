// singleton
/* const tinderUser = new Object()
console.log(tinderUser);
console.log(typeof tinderUser);

*/

const single = {};
// console.log(typeof single);
single.name = "ranveer";
single.gmailId = "ranveertandi0475@gamil.com";
single.isLogin = false;

// console.log(single);

const reguleUser = {
  emaleId: "ranveer@google.com",
  userId: "787ranveer",
  fullName: {
    userfullName: {
      firstName: "ranveer",
      lastName: "tandi",
    },
  },
};
console.log(reguleUser.fullName.userfullName.lastName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
// const obj3 = {...obj1,...obj2}
const obj3 = Object.assign( {},obj1,obj2)
 
console.log(obj3);
console.log(obj1);

console.log(Object.keys (single));
console.log(Object.values (single));


console.log(Object.entries(single));

console.log(single.hasOwnProperty("name"));