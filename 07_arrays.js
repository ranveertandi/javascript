const myArray = [1,2,4,6,7,8,9]
// console.log(myArray);


const myArray2 = ['tandi','ranveer']
// console.log(myArray2);


myArray.push(5)
// console.log(myArray); /* push last value insert */

myArray.pop()
// console.log(myArray); 
myArray.pop()
// console.log(myArray); 
myArray.pop()
// console.log(myArray);  /* pop last value remove  */
 
myArray.unshift(0) /* first value add */
// console.log(myArray); 
 myArray.shift() /** first value remove */
//  console.log(myArray);

// console.log(myArray.includes(5));
// console.log(myArray);

// console.log(myArray.indexOf(4));
// console.log(myArray);


// const newArray = myArray.join()
// console.log(newArray);
// console.log(typeof newArray);
// console.log(myArray);


console.log("a",myArray);

const myn1 = myArray.slice(1,3)
  console.log(   myn1);
  console.log('b',myArray);




const myn2 = myArray.splice(1,3)
console.log(myn2);
console.log("c",myArray);
console.log(myArray);



