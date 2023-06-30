// //landing page
// let player = document.querySelector("#landing .player");
// let field = document.querySelector("#landing  .field");
// let ball = document.querySelector("#landing  .ball");
// let bg = document.querySelector("#landing  .bg");
// let text = document.querySelector("#landing .container");

// window.addEventListener("scroll", function () {
//   let value = window.scrollY;
//   player.style.top = value * 0.1 + "px";
//   ball.style.bottom = value * 0.2 + "px";
//   ball.style.right = value * 0.5 + "px";
//   text.style.right = value * 0.1 + "%";
//   field.style.right = value * 0.1 + "px";
// });
let player = document.querySelector(".player");
let field = document.querySelector(".field");
let ball = document.querySelector(".ball");
let bg = document.querySelector(".bg");
let text = document.querySelector("#landing .container");
// Diatas berguna untuk membuat variabel dimana variabel berisi elemen dengan class tertentu
window.addEventListener("scroll", function () {
  let value = window.scrollY;
  player.style.transform = `translateY(${value * -0.1}px) translateX(${
    value * 0.5
  }px)`;
  ball.style.transform = `translateY(-${value * 0.2}px) translateX(${
    value * 0.5
  }px)`;
  field.style.transform = `translateX(${value * 0.1}px)`;
  text.style.right = value * 0.1 + "%";
  bg.style.transform = `translateX(${value * -0.1}px)`;
});

//window.addEventListener("scroll", function () { ... });: Event listener scroll ditambahkan ke objek window.
//Ketika terjadi pergerakan scroll pada halaman, fungsi callback yang didalam function akan dijalankan.
