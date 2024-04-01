const marvelHeros = ["thor", "ironman", "spiderman"];

const dcHeros = ["superman", "flash", "batman"];

// marvelHeros.push(dcHeros)

// console.log(marvelHeros); //array in array

// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);
const allNewHeros = [...marvelHeros, ...dcHeros]; //spread syntax

// console.log(allNewHeros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, (7)[(4, 5)]]];
const realAnotherArray = anotherArray.flat(Infinity);

// console.log(realAnotherArray);

const methodArr = ["s", "h", "i", "v", "p", "e", "n", "c", "i", "a"];

/* methodArr.forEach((item,index )=>{
     console.log(`${item} : ${index}`);
 })*/

for (const key in methodArr) {
  console.log(`${key} : ${methodArr[key]}`);
}
