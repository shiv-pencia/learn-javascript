const button = document.querySelectorAll(".button");
const body = document.querySelector("body");
// console.log(body);

// console.log(button);

button.forEach((button) => {
  // console.log(button);
  button.addEventListener("click", (e) => {
    // console.log(e.target);

    // with switch case

    switch (e.target.id) {
        case 'grey':
            body.style.backgroundColor = e.target.id
            break;
        case 'white':
            body.style.backgroundColor = e.target.id
            break;
        case 'blue':
            body.style.backgroundColor = e.target.id
            break;
        case 'yellow':
            body.style.backgroundColor = e.target.id
            break;
    
        default :
            break;
    }

    //with if else

    // if (e.target.id === "grey") {
    //     body.style.backgroundColor = e.target.id
    // } else if (e.target.id === "white") {
    //     body.style.backgroundColor = e.target.id
    // }else if (e.target.id === "blue") {
    //     body.style.backgroundColor = e.target.id
    // } else if (e.target.id === "yellow") {
    //     body.style.backgroundColor = e.target.id
    // }
  });
});
