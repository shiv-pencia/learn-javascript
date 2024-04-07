const myObject = {
    color: "red",
    type: "station wagon",
    registration: "Sat Mar 03 2018 01:00:00 GMT+0100 (GMT+01:00)",
    capacity: 5,
    js: "javascript",
    cpp : "c++",
    rb : "ruby"
  };

  // for in loop

  for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
    
  }
  
//   const programming = [1,2,3,'l','u','i',7,8,9,0]

//   for (const key in programming) {
//     console.log(programming[key]);
    
//   }
const map = new Map();
map.set("IN", "india");
map.set("USA", "america");
map.set("UA", "amrica");
map.set("US", "ameica");
map.set("SA", "amerca");
// console.log(map);