const user = {
    username: "shiv pencia",
    loginCount: 9,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`username is : ${this.username}`);
        // console.log(this);
    }
}

// console.log(user["username"]);
// console.log(user.getUserDetails());

function User (username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this

}

const userOne = new User('shiv', 8, true)
const userTwo = new User('pencia', 80, true)
console.log(userOne);
console.log(userTwo);