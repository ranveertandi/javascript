function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

console.log(calculateCartPrice(100, 200, 300, 4, 0))


;
//  +++++++++++++++ Function and Object ++++++++++++++++++++++


const user = {
  username: "ranveer",
  fees: 200000,
};

function handleObject(anyobject) {
  console.log(
    `username is ${anyobject.username} and fees is ${anyobject.fees}`
  );
}

handleObject(user);

handleObject({
  username: "namchand",
  fees: 133333,
});

// ++++++++++++++++++ function and arrays +++++++++++++++++++++++++++++++

const myNewArray = [1000, 200, 7000, 54545];

function returnSrcondValue(get) {
  return get[1];
}
console.log(returnSrcondValue(myNewArray));

// both same types
console.log(returnSrcondValue([100, 500, 800, 85]));
