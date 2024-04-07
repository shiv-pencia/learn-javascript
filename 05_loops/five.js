const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach(function (item) {
//   console.log(item);
// });

// coding.forEach((item)=>{
//     console.log(item);

// } )

function printMe (item) {
    console.log(item);
}
// coding.forEach(printMe)

coding.forEach( (item,index,arr) => {
    // console.log(item,index,arr);

})
const myCoding =[
  {
    color: 'red',
    type: 'station wagon',
    registration: 'Sat Mar 03 2018 01:00:00 GMT+0100 (GMT+01:00)',
    capacity: 5
  },
  {
    color: 'red',
    type: 'cabrio',
    registration: 'Sat Mar 03 2012 01:00:00 GMT+0100 (GMT+01:00)',
    capacity: 2
  },
  {
    color: 'red',
    type: 'cabrio',
    registration: 'Sat Mar 03 2012 01:00:00 GMT+0100 (GMT+01:00)',
    capacity: 2
  }
]

myCoding.forEach( (item) => {
    console.log(item.color);
})