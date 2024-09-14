let hamburger = document.querySelector(".hamburger");
let line1 = document.querySelector(".line1");
let line2 = document.querySelector(".line2");
let line3 = document.querySelector(".line3");
let navbarPhone = document.querySelector(".navbar-phone"); 

hamburger.addEventListener("click",() => {
    line1.classList.toggle("line-1");
    line2.classList.toggle("line-2");
    line3.classList.toggle("line-3");
    navbarPhone.classList.toggle("navbar-phone-show");
})