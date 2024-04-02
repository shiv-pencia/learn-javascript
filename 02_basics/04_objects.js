// const tinderUser = new Object()
const tinderUser = {};

tinderUser.id = "124dj";
tinderUser.name = "shiv pencia ";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "shiv@gmail.com",
  fullname: {
    firstname: "shiv",
    lastname: "pencia",
  },
};

// console.log(regularUser.fullname.firstname);

const obj1 = { 1: "shiv" };
const obj2 = { 2: "pencia" };
// const obj3 = { obj1,obj2};
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
console.log(obj3);
