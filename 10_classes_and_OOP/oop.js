const user = {
    username: "shiv pencia",
    loginCount: 9,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        console.log(`username is : ${this.username}`);
        console.log(this);
    }
}

console.log(user["username"]);
console.log(user.getUserDetails());