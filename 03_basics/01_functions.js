function sayMyName() {
  console.log("S");
  console.log("H");
  console.log("I");
  console.log("V");
}

// sayMyName()

function addTwoNumbers(num1, num2) {
  //   let result = num1 + num2;
  //   return result;
  return num1 + num2;
}

const result = addTwoNumbers(2, 3);

// console.log("result:", result);

function loginUserMessage(username = "sam") {
  if (!username) {
    console.log("Please enter a username");
    return;
  }

  return `${username} just Logged in`;
}

// console.log(loginUserMessage("shiv pencia"))
// console.log(loginUserMessage("")) //output with name sam

function calculateCartPrice(...num1) {
  return num1;
}

// console.log(calculateCartPrice(200,300,400,700,5000,1234));

const user = {
  username: "shiv",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

handleObject(user);
handleObject({
  username: "sam",
  price: 399,
});

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([1, 2, 3, 4, 5]));
