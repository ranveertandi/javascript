const mySym = Symbol("key1");

myObject = {
  name: " ranveer",
  sub: "BCA",
  mobileNo: 7878820475,
  emailId: "ranveer@google.com",
  "my firend": "namchand bana",
  [mySym]: "mykey1",
};
// console.log(myObject.name);
// console.log(myObject["name"]);
// console.log(myObject["my firend"]);
// console.log(myObject[mySym]);
// console.log(typeof myObject[mySym]);
// console.log(myObject);

// Object.freeze(myObject)

myObject.emailId = "ranveer@chatglpt.com";
// console.log(myObject);



myObject.greeting = function () {
  console.log("hello  js user");
};
console.log(myObject.greeting());


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++


myObject.greetingTwo = function () {
  console.log(`hello  js user ,${this.name}`);
};
console.log(myObject.greetingTwo());
