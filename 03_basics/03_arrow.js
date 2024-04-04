const user = {

    username: "shiv pencia",
    price: 999,
    welcomeMeggage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);


    }


}

// user.welcomeMeggage()
// user.username = "nandu"
// user.welcomeMeggage()

// console.log(this);

// function chai(){
//     let username = "pencia shiv"
//     console.log(this.username);
// }
// chai()

//---------------Arrow function------------

const chai =()=>{
    let username = "pencia shiv"
         console.log(this);

}

// chai()

// const addTwo =(num1,num2)=> { 
//     return num1 + num2
// }
const addTwo =(num1,num2)=>  num1 + num2


console.log(addTwo(3,4))

const myArray = [ 1,2,3,4,5,65,6,7,7,8,9,0]

// myArray.forEach((item,key)=>{
//     console.log(`this is key :${key} and this is item ${item}`);
// })

























