function asyncFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("some details");
    }, 4000);
  });
}
// console.log("fetching data one");
asyncFunction().then((res) => {
  console.log(res);
});
