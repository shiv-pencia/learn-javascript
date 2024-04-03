// var c = 300
//Globle scope
let a = 300;

if (true) {
  //block scope
  let a = 10;
  const b = 20;
  //   console.log("INNER:", a);
}

// console.log(a);
// console.log(b);
// console.log(c);



function one(){

    const username = "shiv pencia"

    function two(){
        const website = "youtube"

        console.log(username);
    }
    //console.log(website); // website not defined

    two()

}

// one()

if (true) {
    const username ="shiv pencia"
    if (username==="shiv pencia"){
        const website = "youtube"  

        // console.log(username + website);
    
    
    }
    // console.log(website); //error not in scope
}

// console.log(username); // error not in scope



//---------------------------interesting-----------

addone(5) // no error
function addone(num){

    return num +1
}


addTwo(5) //error 

const addTwo = function(num){
    return num +2
}





