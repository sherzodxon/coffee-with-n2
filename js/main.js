const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav")
hamburger.addEventListener("click",function(){
    hamburger.classList.toggle("hamburger--opened");
    nav.classList.toggle("header__nav-mobile")
})