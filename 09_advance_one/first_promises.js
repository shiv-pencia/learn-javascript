const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  //DB calls
  setTimeout(function () {
    console.log(`Async task is compelete`);
    resolve();
  }, 1000);
});
promiseOne.then(function () {
  console.log("Promise consumed");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("async task two");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Promise two resolved");
});

const promisethree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "chai", email: "shiv.com" });
  }, 1000);
});

promisethree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "shiv pencia", password: "shivpenciacom" });
    } else {
      reject("ERROR: Somthing went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolve or rejected ");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "javascript", password: "shivpenciacom" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log("error aagi bhbai");
  }
}
consumePromiseFive();

// async function getAllUser() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await response.json();
//   console.log(data);
//   } catch (error) {
//     console.log("ERROR: ", error);
//   }
// }


// getAllUser()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()

})
.then((data)=>{
    console.log(data);
})
.catch((err)=> console.log(err))