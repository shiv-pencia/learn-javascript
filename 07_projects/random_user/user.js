async function newUser() {
  const response = await fetch("https://randomuser.me/api/");
  const result = await response.json();
  const data = result.results[0];
//   console.log(data);

  document.getElementById("userimg").setAttribute("src", data.picture.large);
  document.getElementById(
    "username"
  ).innerHTML = `${data.name.title} ${data.name.first} ${data.name.last}`;
  document.getElementById("phone").innerHTML = `Phone: ${data.phone}`;
  document.getElementById("location").innerText = data.location;
}
newUser();
document.getElementById("button").addEventListener("click", (e) =>{
    e.preventDefault()
    newUser()
})
