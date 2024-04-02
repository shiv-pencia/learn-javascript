//-------------------objects---------------------

//Singleton
// Object.create

//object literals

const mySym = Symbol("key1")

const JsUser = {
  name: "shiv pencia",
  "full name":"shiv pencai kumawat",
  [mySym]: "mykey1",
  age: 20,
  location: "jaipur",
  email: "shivpencia@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["monday", "sunday"],
};


// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);


JsUser.email = "pencia@gmail.com" //overwrite value 
// Object.freeze(JsUser)//freeze values

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user , ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


console.log(JsUser);   /*  output {
    name: 'shiv pencia',
    'full name': 'shiv pencai kumawat',
    age: 20,
    location: 'jaipur',
    email: 'pencia@gmail.com',
    isLoggedIn: false,
    lastLoginDays: [ 'monday', 'sunday' ],
    greeting: [Function (anonymous)],
    greetingTwo: [Function (anonymous)],
    [Symbol(key1)]: 'mykey1'
  } */

  