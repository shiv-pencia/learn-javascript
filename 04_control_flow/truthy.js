const userEmail = [];

if (userEmail) {
//   console.log("Got user email");
} else {
  console.log("Don't have user email");
}

//---------------falsy values--------

// false , 0 ,-0,bigInt 0n , "",null ,undefined ,NaN

//---------------truthy values -------------

// "0" ,  'false' , "  " , [] , {} , function () {},

// if ( userEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
//   console.log("empty");
}

// Nulish coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10;

// val1 = null ?? 10

// val1 = undefined ?? 15

val1 = null ?? 10 ?? 15

// console.log(val1);

// terniary Operator

// condition ? true : false 

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");



