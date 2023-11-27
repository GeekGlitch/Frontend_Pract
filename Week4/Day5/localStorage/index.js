// localStorage.setItem("phone", JSON.stringify(9769622715));
// localStorage.setItem("Arr", JSON.stringify(["Manoj", "shaun", "kumar"]));
// var phone = JSON.parse(localStorage.getItem("phone"));
// var arr = JSON.parse(localStorage.getItem("Arr"));
// console.log(phone);
// console.log(arr);
// localStorage.removeItem("phone");
// localStorage.clear();
let btn = document.querySelector("button");
let header = document.querySelector("h1");

function Stringify(val) {
  return JSON.stringify(val);
}
function Parsify(val) {
  return JSON.parse(val);
}
function checkedIsloggedIn() {
  let isUserLoggedIn = Parsify(localStorage.getItem("isLoggedIn"));
  let isUser = Parsify(localStorage.getItem("user"));
  if (isUserLoggedIn) {
    header.innerText = `Welcome to ${isUser.name}`;
    btn.innerText = "logout";
  }
}
checkedIsloggedIn();

btn.addEventListener("click", (e) => {
  let isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
  if (isLoggedIn) {
    header.innerHTML = `Please login to continue`;
    btn.innerHTML = "Login";
    localStorage.clear();
  } else {
    let user = { name: "Manoj", email: "XYZ@gamil.com" };
    let isLoggedIn = true;
    header.innerText = `Welcome ${user.name}`;
    btn.innerText = "Logout";
    localStorage.setItem("user", Stringify(user));
    localStorage.setItem("isLoggedIn", Stringify(isLoggedIn));
  }
});
