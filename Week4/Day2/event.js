// events

// function youclicked(e) {
//   let addclass = e.target.classList;
//   if (addclass.contains("btn")) {
//     alert("You clicked the button");
//   } else {
// //     addclass.classList.addclass("btn");
//   }
// }

function mouseenter() {
  console.log("Mouse entered");
}
function mouseleaved() {
  console.log("mouse left");
}
// change style of hmtl

let btn = document.getElementsByClassName("btn");
console.log(btn);
btn.style.border = "2px solid red";
