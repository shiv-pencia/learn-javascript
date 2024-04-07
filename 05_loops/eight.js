 const myNnums = [1,2,3,4,5,6,7,8,9]
//  const mytotal = myNnums.reduce(function (acc , currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
//  } , 0)


const mytotal = myNnums.reduce( (acc , curr) => acc+curr , 0)
//  console.log(mytotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]


const total = shoppingCart.reduce( (acc ,item ) => item.price + acc , 0)
console.log(total);