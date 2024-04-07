// for of

// [
//   {
//     color: 'red',
//     type: 'station wagon',
//     registration: 'Sat Mar 03 2018 01:00:00 GMT+0100 (GMT+01:00)',
//     capacity: 5
//   },
//   {
//     color: 'red',
//     type: 'cabrio',
//     registration: 'Sat Mar 03 2012 01:00:00 GMT+0100 (GMT+01:00)',
//     capacity: 2
//   },
//   {
//     color: 'red',
//     type: 'cabrio',
//     registration: 'Sat Mar 03 2012 01:00:00 GMT+0100 (GMT+01:00)',
//     capacity: 2
//   }
// ]

const arr = [1, 2, 3, 4, 5, 6, 7];

for (const num of arr) {
  // console.log(num);
}
const greetings = "Hello world";

for (const greet of greetings) {
  if (greet == " ") {
    // console.log(`yaha ek space hai`);
    break;
  }
  // console.log(`Each char is ${greet}`);
}

//  Maps

const map = new Map();
map.set("IN", "india");
map.set("USA", "america");
map.set("UA", "amrica");
map.set("US", "ameica");
map.set("SA", "amerca");
console.log(map);

for (const [key, value] of map) {
  // console.log(key, ':-' ,value);
}

const muObject = {
  color: "red",
  type: "station wagon",
  registration: "Sat Mar 03 2018 01:00:00 GMT+0100 (GMT+01:00)",
  capacity: 5,
};
