// Primitive

// 7 type : string , Number , Boolean ,Null , undefined , stymbol , BigInt

const score = 100

const scoreValue = 100.9

const isLoggedIn = false 
 
let userEmail ;
const id = Symbol('123')
const anotherId  = Symbol('123')
console.log(id === anotherId); // false 

const bigNumber = 2345566778899987665543n

// Reference  (Non primitive) 
// Array , Objects , Functions 

const heros = ["shaktiman", "naagraj"] //Array

 let myObj = {
    name : "shiv pencia",
    age : 20,
} // Objects

const myFunction = function(){
    console.log("Hello Shiv");
} // Function



