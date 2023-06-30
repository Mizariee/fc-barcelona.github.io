// Navbar
let navLinks = document.querySelectorAll("header nav ul li a"); //Baris ini menggunakan metode querySelectorAll untuk
//memilih semua elemen <a> yang berada di dalam elemen <li> yang berada di dalam elemen <ul> yang berada
//di dalam elemen <nav>. Hasilnya adalah sebuah nodelist yang menyimpan semua elemen link.

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.forEach(function (link) {
      link.classList.remove("active");
    });
    this.classList.add("active");
  });
  if (window.location.href.includes(link.href)) {
    link.classList.add("active");
  }
});
//navLinks.forEach(function (link) { link.classList.remove("active"); });:
//Kode ini akan menghapus kelas "active" dari setiap elemen link di dalam navLinks.
//Ini berguna untuk memastikan bahwa hanya satu link yang memiliki kelas "active" pada satu waktu.
//this.classList.add("active");:
//Kode ini menambahkan kelas "active" ke link yang diklik (this merujuk pada elemen link yang sedang diklik).
//Dengan menambahkan kelas "active", Anda dapat menerapkan gaya CSS khusus pada link tersebut,
//seperti mengubah warna teks atau latar belakang.

//-----=== Dropdown click
const toggleBtn = document.querySelector(".menu-toggle");
const toggleBtnIcon = document.querySelector(".menu-toggle i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

//menghilangkan dropdown

window.onresize = function () {
  const screenWidth = window.innerWidth;
  if (screenWidth > 992) {
    dropDownMenu.classList.remove("open");
    toggleBtnIcon.classList = "fa-solid fa-bars";
  }
};

// Buat slider

const slider = document.querySelector("#players .slider");
const prevBtn = document.querySelector(".fa-angle-left");
const nextBtn = document.querySelector(".fa-angle-right");
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;

const dragStart = (e) => {
  isDragging = true;
  startPos = e.pageX - slider.offsetLeft;
  currentTranslate = slider.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const mousePos = e.pageX - slider.offsetLeft;
  const distance = mousePos - startPos;
  slider.scrollLeft = currentTranslate - distance;
};

const dragEnd = () => {
  isDragging = false;
};

slider.addEventListener("mousedown", dragStart);
window.addEventListener("mousemove", dragging);
window.addEventListener("mouseup", dragEnd);
// Slide Button

const slideTo = (direction) => {
  const slideWidth = slider.offsetWidth;
  const currentScroll = slider.scrollLeft;
  let newScroll;

  if (direction === "next") {
    newScroll = currentScroll + slideWidth;
  } else if (direction === "prev") {
    newScroll = currentScroll - slideWidth;
  }

  slider.scrollTo({
    left: newScroll,
    behavior: "smooth",
  });
};

prevBtn.addEventListener("click", () => slideTo("prev"));
nextBtn.addEventListener("click", () => slideTo("next"));
